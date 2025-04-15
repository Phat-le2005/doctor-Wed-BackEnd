import jwt from "jsonwebtoken";
import fs from "fs";
import path from "path";

const publicKey = fs.readFileSync(path.join(__dirname, "../keys/public.pem"), "utf8");

export const CheckAccessToken = (req, res, next) => {
  const token = req.cookies.access_token;
  if (!token) return res.status(401).json({ error: "Bạn chưa đăng nhập" });

  try {
    const decoded = jwt.verify(token, publicKey, { algorithms: ["RS256"] });
    req.user = decoded; // Lưu thông tin người dùng vào req.user
    next(); // Tiếp tục xử lý request
  } catch (err) {
    console.error("Token verification error: ", err); // Log lỗi
    return res.status(401).json({ error: "Token hết hạn hoặc không hợp lệ" });
  }
};

