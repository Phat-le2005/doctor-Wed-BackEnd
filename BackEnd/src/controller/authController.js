import * as authService from "../service/authService.js";
import { setDoctorAuthCookies } from "../util/cookie.js";
export const sendOtp = async (req, res) => {
  const { email } = req.body;
  if (!email) return res.status(400).json({ error: "Email là bắt buộc" });
  try {
    const result = await authService.sendOtp(email);
    res.json(result);
  } catch (err) {
    const statusCode = typeof err.code === "number" ? err.code : 500;
    res.status(statusCode).json({ error: err.message });
  }
};

export const verifyOtp = async (req, res) => {
  const { email, otp } = req.body;
  if (!email || !otp) return res.status(400).json({ error: "Thiếu email hoặc mã OTP" });

  try {
    const { user, accessToken, refreshToken } = await authService.verifyOtp(email, otp);

    // Log thông tin người dùng
    console.log("User created or authenticated: ", user);

    res.cookie("user_access_token", accessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "Strict",
      maxAge: 15 * 60 * 1000,
    });

    res.cookie("user_refresh_token", refreshToken, {
      httpOnly: true,
      secure: true,
      sameSite: "Strict",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    res.json({ message: "Authenticated", user });
  } catch (err) {
    console.error("Error during OTP authentication: ", err);
    res.status(err.code || 500).json({ error: err.message });
  }
};

export const googleLogin = (req, res) => {
  // Giữ nguyên nếu bạn đang dùng passport-google
  authService.googleLogin(req, res);
};

export const googleCallback = async (req, res) => {
  try {
    const { user, accessToken, refreshToken } = await authService.googleCallback(req.user);
    res.cookie("user_access_token", accessToken, {
      httpOnly: true,
      secure: true,
      sameSite: "Strict",
      maxAge: 15 * 60 * 1000,
    });
    res.cookie("user_refresh_token", refreshToken, {
      httpOnly: true,
      secure: true,
      sameSite: "Strict",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });
    res.redirect(process.env.CLIENT_SUCCESS_URL || "/homepage");
  } catch (err) {
    console.error("Google login callback error:", err);
    res.status(500).json({ error: "Google login failed" });
  }
};

export const refreshToken = async (req, res) => {
  // Lấy refresh token từ cookie user hoặc doctor
  const userRt = req.cookies.user_refresh_token;
  const doctorRt = req.cookies.doctor_refresh_token;
  const token = userRt || doctorRt;

  if (!token) {
    return res.status(401).json({ error: "NoRefreshToken" });
  }

  try {
    // authService.refreshToken trả về { accessToken }
    const { accessToken } = await authService.refreshTokenService(token);

    // Gán lại cookie Access Token mới
    if (userRt) {
      setAuthCookies(res, accessToken, userRt);
    } else {
      setDoctorAuthCookies(res, accessToken, doctorRt);
    }

    return res.json({ message: "TokenRefreshed", accessToken });
  } catch (err) {
    if (err.code === 403) {
      return res.status(403).json({ error: "RefreshInvalid" });
    }
    console.error("❌ Lỗi refreshToken:", err);
    return res.status(500).json({ error: "ServerError" });
  }
};
export const AuthDoctor = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ error: "Email và mật khẩu là bắt buộc" });
  }
  try {
    const result = await authService.authDoctorService(email, password);
    if (result.errCode !== 0) {
      return res.status(401).json({ error: result.errMess });
    }
    // Gán cookie riêng cho doctor
    setDoctorAuthCookies(res, result.accessToken, result.refreshToken);
    return res.json({ message: result.errMess, doctor: result.data });
  } catch (e) {
    console.error("❌ Lỗi AuthDoctor:", e);
    return res.status(500).json({ error: "Lỗi server" });
  }
};
