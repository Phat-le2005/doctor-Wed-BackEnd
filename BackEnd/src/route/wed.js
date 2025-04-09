//* truy cap duong link
import express from "express"
import homeController from "../controller/homeController";
import userController from "../controller/userController"
import departmentController from "../controller/departmentController"
import doctorController from "../controller/doctorController"
import specialtyService from "../controller/specialtyController"
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

    return app.use("/",router)
}
module.exports = initWedRouter