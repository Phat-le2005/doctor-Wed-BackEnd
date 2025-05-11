import fs from "fs";
import path from "path";
import { verifyAccessToken } from "../util/jwt.js";

// Load public key (used in verifyAccessToken internally)
const publicKey = fs.readFileSync(
  path.join(__dirname, "../keys/public.pem"),
  "utf8"
);

/**
 * Middleware xác thực chung cho user và doctor.
 * Kiểm tra cookie user_access_token hoặc doctor_access_token hoặc header Authorization.
 */
export const authenticateUser = (req, res, next) => {
  // Lấy token từ cookie hoặc header
  const token =
    req.cookies.user_access_token ||
    (req.headers.authorization && req.headers.authorization.split(' ')[1]);

  if (!token) {
    return res.status(401).json({ error: 'Bạn cần đăng nhập' });
  }

  try {
    // Xác thực token và giải mã payload
    const decoded = verifyAccessToken(token);
    req.user = decoded; // payload: { id, email } hoặc { id, email, role }
    next();
  } catch (error) {
    return res.status(401).json({ error: 'Token không hợp lệ hoặc đã hết hạn' });
  }
};
export const authenticateDoctor = (req, res, next) => {
  // Lấy token từ cookie hoặc header
  const token =
    req.cookies.doctor_access_token ||
    (req.headers.authorization && req.headers.authorization.split(' ')[1]);

  if (!token) {
    return res.status(401).json({ error: 'Bạn cần đăng nhập' });
  }

  try {
    // Xác thực token và giải mã payload
    const decoded = verifyAccessToken(token);
    req.user = decoded; // payload: { id, email } hoặc { id, email, role }
    next();
  } catch (error) {
    return res.status(401).json({ error: 'Token không hợp lệ hoặc đã hết hạn' });
  }
};
/**
 * Middleware phân quyền cho Doctor.
 * @param {number} minRole - Role tối thiểu (0: bác sĩ, 1: trưởng khoa, 2: admin).
 */
export const authorizeDoctor = (minRole) => {
  return (req, res, next) => {
    const { role } = req.user;
    if (typeof role !== 'number') {
      return res
        .status(403)
        .json({ error: 'Chỉ bác sĩ mới có quyền truy cập' });
    }
    if (role < minRole) {
      return res
        .status(403)
        .json({ error: 'Bạn không đủ quyền truy cập' });
    }
    next();
  };
};
