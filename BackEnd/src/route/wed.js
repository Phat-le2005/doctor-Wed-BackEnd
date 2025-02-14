//* truy cap duong link
import express from "express"
import homeController from "../controller/homeController";
import userController from "../controller/userController"
let router = express.Router();
const initWedRouter = (app)=>{
    router.get("/",homeController.getHomePage)

    router.get("/create-user",homeController.getCreatePage)
    router.post("/post-create-user",homeController.postCreateUser)

    router.get("/get-data-user",homeController.readData)

    router.get("/api/get-all-users",userController.getAllUser)
    router.post("/api/post-user",userController.postUser)
    router.post("/api/login", userController.handleLogin);
    
    return app.use("/",router)
}
module.exports = initWedRouter