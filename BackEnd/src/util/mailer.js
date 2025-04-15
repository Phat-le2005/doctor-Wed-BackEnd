import nodemailer from "nodemailer";

export const sendOtpEmail = async (email, otp) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER, // ví dụ: myapp@gmail.com
      pass: process.env.EMAIL_PASS, // mật khẩu ứng dụng
    },
  });

  await transporter.sendMail({
    from: `"OTP Auth" <${process.env.EMAIL_USER}>`,
    to: email,
    subject: "Mã OTP đăng nhập",
    text: `Mã OTP của bạn là: ${otp}`,
  });
};