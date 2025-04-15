// File: services/authService.js
import DB from "../models/index"
import jwt from "jsonwebtoken";
import { hashOTP, verifyOTP } from "../util/otp.js";
import { generateAccessToken, generateRefreshToken } from "../util/jwt.js";
import { sendOtpEmail } from "../util/mailer.js"; // mới thêm

const OTP_STORE = {}; // giả lập lưu OTP tạm thời
setInterval(() => {
  const now = Date.now();
  for (const email in OTP_STORE) {
    if (OTP_STORE[email].expires < now) {
      delete OTP_STORE[email];
    }
  }
}, 60000); 
export const sendOtp = async (email) => {
  const otp = Math.floor(1000 + Math.random() * 9000).toString();
  const hashed = hashOTP(otp);
  OTP_STORE[email] = { otp: hashed, expires: Date.now() + 5 * 60 * 1000 };

  try {
    await sendOtpEmail(email, otp);
    console.log(`📧 OTP gửi tới ${email}: ${otp}`);
    return { message: "OTP sent to email" };
  } catch (err) {
    console.error("❌ Gửi OTP thất bại:", err);
    throw { code: 500, message: "Không thể gửi OTP. Vui lòng thử lại sau." };
  }
};

export const verifyOtp = async (email, otp) => {
  const record = OTP_STORE[email];
  if (!record || record.expires < Date.now()) throw { code: 400, message: "OTP expired" };
  if (!verifyOTP(otp, record.otp)) throw { code: 400, message: "OTP invalid" };

  try {
    let user = await DB.User.findOne({ where: { email } });

    if (!user) {
      const userName = email.split("@")[0]; // Tạo userName từ email
      user = await DB.User.create({ email, provider: "otp", userName });
      console.log("✅ Tạo user mới từ OTP:", email);
    }

    const accessToken = generateAccessToken({ id: user.userId, email: user.email });
    const refreshToken = generateRefreshToken({ id: user.userId });

    return { user, accessToken, refreshToken };
  } catch (err) {
    console.error("❌ Lỗi khi xác thực OTP:", err);
    throw { code: 500, message: "Đã có lỗi xảy ra trong quá trình xác thực OTP. Vui lòng thử lại sau." };
  }
};
export const googleCallback = async (googleUser) => {
  try {
    let user = await DB.User.findOne({ where: { email: googleUser.email } });

    if (!user) {
      user = await DB.User.create({
        email: googleUser.email,
        userName: googleUser.displayName || "Google User",
        provider: "google",
      });
      console.log("✅ Tạo user mới từ Google:", user.email);
    }

    const accessToken = generateAccessToken({ id: user.id, email: user.email });
    const refreshToken = generateRefreshToken({ id: user.id });

    return { user, accessToken, refreshToken };
  } catch (err) {
    console.error("❌ Lỗi khi xử lý callback từ Google:", err);
    throw { code: 500, message: "Đã có lỗi xảy ra khi xử lý đăng nhập Google." };
  }
};
export const googleLogin = (req, res) => {
  res.json({ message: "Redirecting to Google" });
};
export const refreshToken = async (refreshToken) => {
  try {
    const decoded = jwt.verify(refreshToken, process.env.REFRESH_SECRET);
    const accessToken = generateAccessToken({ id: decoded.id, email: decoded.email });
    return { accessToken };
  } catch (err) {
    console.error("❌ Lỗi khi xác thực refresh token:", err);
    throw { code: 403, message: "Refresh token không hợp lệ" };
  }
};
