import * as authService from "../service/authService.js";

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

    res.cookie("access_token", accessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "Strict",
      maxAge: 15 * 60 * 1000,
    });

    res.cookie("refresh_token", refreshToken, {
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
    res.cookie("access_token", accessToken, {
      httpOnly: true,
      secure: true,
      sameSite: "Strict",
      maxAge: 15 * 60 * 1000,
    });
    res.cookie("refresh_token", refreshToken, {
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
  const token = req.cookies.refresh_token;
  if (!token) return res.status(401).json({ error: "No refresh token" });
  try {
    const accessToken = await authService.refreshToken(token);
    res.cookie("access_token", accessToken, {
      httpOnly: true,
      secure: true,
      sameSite: "Strict",
      maxAge: 15 * 60 * 1000,
    });
    res.json({ message: "Token refreshed" });
  } catch (err) {
    res.status(err.code || 500).json({ error: err.message });
  }
};
export const AuthDoctor = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password)
    return res.status(400).json({ error: "Email và mật khẩu là bắt buộc" });

  try {
    const result = await authService.AuthDoctor(email, password);

    if (result.errCode !== 0) {
      return res.status(401).json({ error: result.errMess });
    }

    res.cookie("access_token", result.accessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "Strict",
      maxAge: 15 * 60 * 1000, // 15 phút
    });

    res.cookie("refresh_token", result.refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "Strict",
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 ngày
    });

    res.json({
      message: result.errMess,
      user: result.data,
    });
  } catch (e) {
    console.error("Đăng nhập bác sĩ thất bại:", e);
    res.status(500).json({ error: "Lỗi máy chủ" });
  }
};
