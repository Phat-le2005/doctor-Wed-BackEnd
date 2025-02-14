import userService from "../service/userService"
import DB from "../models/index"

const getAllUser = async (req, res) => {
    try {
        // Lấy `id` từ body (nếu cần)
        let id = req.body.id;
         // Gọi service để lấy danh sách người dùng
         let users = await userService.getAllUser(id);
        if(!id){
            return res.status(200).json({
                errCode: 0,
                errMessage: 'Your ID is missing',
                user:''
            })
        }
       

        return res.status(200).json({
            errCode: 0,
            errMessage: 'OK',
            data: users, // Trả dữ liệu về cho client
        });
    } catch (e) {
        req(e)
    }
};
const validateEmail = (email) => {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
};
const postUser = async (req, res) => {
    let data = req.body;
    
    if (!data || !data.email || !data.password) {
        return res.status(400).json({
            errCode: 1,
            errMessage: "Missing required fields",
            user: '',
        });
    }
    if (!validateEmail(data.email)) {
        return res.status(400).json({
            errCode: 2,
            errMessage: "Invalid email format",
        });
    }
    try {
        let message = await userService.postUser(data);
        return res.status(200).json({
            errCode: 0,
            errMessage: 'Create Successful',
            data: message
        });
    } catch (error) {
        return res.status(500).json({
            errCode: 2,
            errMessage: "Internal server error",
            error: error.message
        });
    }
};
const handleLogin = async(req,res) =>{
    let data= req.body;
    if (!validateEmail(data.email)) {
        return res.status(400).json({
            errCode: 1,
            errMessage: "Invalid email format",
        });
    }
    if (!data.email || !data.password) {
        return res.status(400).json({ errCode: 1, message: "Missing inputs parameter!" });
    }
    if (!data.password) {
        return res.status(400).json({ errCode: 1, message: "Incorrect password!" });
    }
    let user = await userService.handleLogin(data);
    try {
        if (!user) {
            return res.status(400).json({ errCode: 1, message: "User not found!" });
        }
        return res.status(200).json({ 
            errCode: 0, 
            message: "Login successful!", 
            user: {
                id: user.id,
                email: user.email,
                firstName: user.firstName,
                lastName: user.lastName,
                address: user.address,
                phoneNumber: user.phonenumber,
                sex: user.sex,
                date: user.createdAt
            } 
        });
        

    } catch (error) {
        return res.status(400).json({ errCode: -1, message: "Server error!" });
    }
}
module.exports={
    getAllUser:getAllUser,
    postUser: postUser,
    handleLogin: handleLogin

}