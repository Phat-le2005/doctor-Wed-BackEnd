//* truy cap duong link
import express from "express"
import homeController from "../controller/homeController";
import userController from "../controller/userController"
import departmentController from "../controller/departmentController"
import doctorController from "../controller/doctorController"
import specialtyService from "../controller/specialtyController"
import scheduleController from "../controller/schedule"
import passport from "passport";
import "../service/passport.js"; // load cấu hình Google
import { sendOtp, verifyOtp, googleLogin, refreshToken,googleCallback } from "../controller/authController";
import { verifyAccessToken } from "../util/jwt.js";
import { CheckAccessToken } from "../util/authMiddlewre.js";
export const isAuthenticated = (req, res, next) => {
  const token = req.cookies.access_token; // lấy token từ cookie
  if (!token) {
    return res.status(401).json({ error: "Bạn chưa đăng nhập" });
  }

  try {
    const decoded = verifyAccessToken(token);
    req.user = decoded; // lưu user để các route sau dùng được
    next(); // cho phép thực hiện API
  } catch (err) {
    return res.status(403).json({ error: "Token không hợp lệ hoặc đã hết hạn" });
  }
};
let router = express.Router();
const initWedRouter = (app)=>{
    router.get("/",homeController.getHomePage)

    router.get("/create-user",homeController.getCreatePage)
    router.post("/post-create-user",homeController.postCreateUser)

    router.get("/get-data-user",homeController.readData)

    router.get("/api/get-all-users",userController.getAllUser)
    router.post("/api/post-user",userController.postUser)
    router.post("/api/login", userController.handleLogin);
    router.delete("/api/delete_user/:id", userController.deleteUser);
    
    router.get("/api/get-all-department",departmentController.get_all_department)

    router.get("/api/get_specialty/:id", specialtyService.get_specialty);

    router.get("/api/get_doctor",doctorController.getAllDoctorPaginate );

    router.get("/api/find_doctor/:id",doctorController.findDoctor)

    router.get("/api/get_schedule",scheduleController.get_schedule)

    router.post("/send-otp", sendOtp);
    router.post("/verify-otp", verifyOtp);
    router.get("/google",
        passport.authenticate("google", { scope: ["profile", "email"] })
      );
      
      router.get("/google/callback",
        passport.authenticate("google", { session: false, failureRedirect: "/login" }),
        googleCallback // hàm mới trong authController
      );
    router.post("/refresh-token", refreshToken);
      
    router.get("/api/get_user",CheckAccessToken,userController.getOneUser)
    return app.use("/",router)
}
module.exports = initWedRouter