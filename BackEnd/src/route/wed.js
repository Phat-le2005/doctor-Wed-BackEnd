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
import { sendOtp, verifyOtp, googleLogin, refreshToken,googleCallback, AuthDoctor } from "../controller/authController";
import { verifyAccessToken } from "../util/jwt.js";
import { CheckAccessToken } from "../util/authMiddlewre.js";
import hoSoController from "../controller/hoSoController.js"
import { getAppointmentDetail } from "../controller/phieuKhamController.js";
import historyController from "../controller/historyController.js"
import { HandleAppointmentController,HandleGetAppointment,HandleUpdateAppointment } from "../controller/appointmentController.js";
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
    router.get("/api/getallspecialty",specialtyService.getDoctorsBySpecialty)

    router.get("/api/get_doctor",doctorController.getAllDoctorPaginate );
    router.put("/api/update_doctoremail/:id", doctorController.handleUpdateEmailDoctor);
    router.put("/api/update_doctorphone/:id", doctorController.handleUpdatePhoneDoctor);
    router.put("/api/update_doctorpassword/:id", doctorController.handleUpdatePasswordDoctor);
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
    router.post("/api/login_doctor",AuthDoctor)
    router.get("/api/get_user",CheckAccessToken,userController.getOneUser)

    router.get("/api/get_hoso/:userId",hoSoController.handleGetHoso)
    router.delete("/api/delete_hoso/:id",hoSoController.handleDeleteHoSo)
    router.put("/api/update_hoso/:id",hoSoController.handleUpdateHoso)
    router.post("/api/create_hoso",hoSoController.handleCreateHoso)

    router.post("/api/create_appointment",HandleAppointmentController)
    router.get("/api/get_appointment/:id",HandleGetAppointment)
    router.put("/api/accept_appointment/:id",HandleUpdateAppointment)
    router.get("/api/get_PhieuKB/:id",getAppointmentDetail)

    router.post("/api/create_history",historyController.handleCreateHistory)
    return app.use("/",router)
}
module.exports = initWedRouter