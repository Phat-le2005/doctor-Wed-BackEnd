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

import { authenticateDoctor,authenticateUser,authorizeDoctor } from "../util/authMiddlewre.js";
import {handleCreateHP,handleDeleteHP}from "../controller/historyPresciptionController.js"
import hoSoController from "../controller/hoSoController.js"
import { getAppointmentDetail } from "../controller/phieuKhamController.js";
import historyController from "../controller/historyController.js"
import prescriptionController from "../controller/prescriptionController.js"
import roomController from "../controller/roomController.js"
import { HandleAppointmentController,HandleGetAppointment,HandleUpdateAppointment } from "../controller/appointmentController.js";
let router = express.Router();
const initWedRouter = (app)=>{
    router.get("/",homeController.getHomePage)

    router.get("/create-user",homeController.getCreatePage)
    router.post("/post-create-user",homeController.postCreateUser)

    router.get("/get-data-user",homeController.readData)

    router.get("/api/get-all-users",userController.getAllUser)
    router.post("/api/post-user",userController.postUser)
    router.post("/api/login", userController.handleLogin);
    router.delete("/api/delete_user/:id",authenticateDoctor,authorizeDoctor(2), userController.deleteUser);
    
    router.get("/api/get-all-department",departmentController.get_all_department)
    router.put("/api/update_department/:id",authenticateDoctor,authorizeDoctor(2),departmentController.handleUpdateDepartment)
    router.delete("/api/delete_department/:id",authenticateDoctor,authorizeDoctor(2),departmentController.handleDeleteDepartment)
    router.post("/api/create_department",authenticateDoctor,authorizeDoctor(2),departmentController.handleCreateDepartment)

    router.get("/api/get_specialty/:id", specialtyService.get_specialty);
    router.get("/api/getallspecialty",specialtyService.getDoctorsBySpecialty)
    router.get("/api/getspecialtydoctor/:id",specialtyService.handleGetSpecialtyDoctor)
    router.post("/api/create_specialty",authenticateDoctor,authorizeDoctor(1),specialtyService.handleCreateSpecialty)
    router.delete("/api/delete_specialty/:id",authenticateDoctor,authorizeDoctor(1),specialtyService.handleDeleteSpecialty)
    router.post("/api/create_ds",authenticateDoctor,authorizeDoctor(1),specialtyService.handleCreateDS)
    router.delete("/api/delete_ds/:id",authenticateDoctor,authorizeDoctor(1),specialtyService.handleDeleteDS)
    router.put("/api/update_specialty/:id",authenticateDoctor,authorizeDoctor(1),specialtyService.handleUpdateSpecialty)

    router.get("/api/get_doctor",doctorController.getAllDoctorPaginate );
    router.put("/api/update_doctoremail/:id",authenticateDoctor,authorizeDoctor(0), doctorController.handleUpdateEmailDoctor);
    router.put("/api/update_doctorphone/:id",authenticateDoctor,authorizeDoctor(0), doctorController.handleUpdatePhoneDoctor);
    router.put("/api/update_doctorpassword/:id",authenticateDoctor,authorizeDoctor(0), doctorController.handleUpdatePasswordDoctor);
    router.get("/api/find_doctor/:id",doctorController.findDoctor)
    router.get("/api/getdoctorkeyword",doctorController.handleGetDoctorKeyword)

    router.get("/api/get_schedule",scheduleController.get_schedule)
    router.get("/api/getallschedule",scheduleController.handleGetAllScheduleDoctor)
    router.post("/send-otp", sendOtp);
    router.post("/verify-otp", verifyOtp);
    router.get("/google",
        passport.authenticate("google", { scope: ["profile", "email"] })
      );
      
      router.get("/google/callback",
        passport.authenticate("google", { session: false, failureRedirect: "/login" }),
        googleCallback // hàm mới trong authController
      );
    router.post("/api/refresh-token", refreshToken);
    router.post("/api/login_doctor",AuthDoctor)
    router.get("/api/get_user",authenticateUser,userController.getOneUser)

    router.get("/api/get_hoso/:userId",authenticateUser,hoSoController.handleGetHoso)
    router.delete("/api/delete_hoso/:id",authenticateUser,hoSoController.handleDeleteHoSo)
    router.put("/api/update_hoso/:id",authenticateUser,hoSoController.handleUpdateHoso)
    router.post("/api/create_hoso",authenticateUser,hoSoController.handleCreateHoso)

    router.post("/api/create_appointment",authenticateUser,HandleAppointmentController)
    router.get("/api/get_appointment/:id",authenticateDoctor,HandleGetAppointment)
    router.put("/api/accept_appointment/:id",authenticateDoctor,authorizeDoctor(0),HandleUpdateAppointment)
    router.get("/api/get_PhieuKB/:id",authenticateUser,getAppointmentDetail)

    router.post("/api/create_history",authenticateDoctor,authorizeDoctor(0),historyController.handleCreateHistory)
    router.get("/api/get_history/:id",historyController.handleGetHistory)
    router.put("/api/update_history/:id",historyController.handleUpdateHistory)

    router.get("/api/get_prescription",prescriptionController.handleGetAllPrescription)
    router.get("/api/get_prescription_history/:id",authenticateDoctor,authorizeDoctor(0),historyController.handleGetPrescription)
    router.post("/api/create_hp",authenticateDoctor,authorizeDoctor(0),handleCreateHP)
    router.delete("/api/delete_prescription/:id",authenticateDoctor,authorizeDoctor(0),handleDeleteHP)
    
    router.get("/api/get_all_room",roomController.handleGetAllRoom)
    router.put("/api/update_room/:id",authenticateDoctor,authorizeDoctor(2),roomController.handleUpdateRoom)
    router.delete("/api/delete_room/:id",authenticateDoctor,authorizeDoctor(2),roomController.handleDeleteRoom)
    router.post("/api/create_room",authenticateDoctor,authorizeDoctor(2),roomController.handleCreateRoom)

    router.delete("/api/delete_doctor/:id",authenticateDoctor,authorizeDoctor(2),doctorController.handleDeleteDoctor)
    router.post("/api/create_doctor",authenticateDoctor,authorizeDoctor(2),doctorController.handleCreateDoctor)
    router.put("/api/update_doctorrole/:id",authenticateDoctor,authorizeDoctor(2),doctorController. handleUpdateRole);
    return app.use("/",router)
}
module.exports = initWedRouter