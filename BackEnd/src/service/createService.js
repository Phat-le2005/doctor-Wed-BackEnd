import bcrypt from 'bcryptjs'
import DB from "../models/index"
var salt = bcrypt.genSaltSync(10);
const createUser = (data)=>{
    return new Promise(async(resolve,reject)=>{
        try {
            let hashPassWord = await hsahUserPassword(data.password);
           await DB.User.create({
            email: data.email,
            password: data.password,
            firstName: '',
            lastName: '',
            address: data.address,
            phonenumber:data.phone,
            sex: data.gender === 'male' ? true : false,
            image: '',
            roleId :'',
            positionId: '',
           })
           resolve('Tao Thanh cong')
        } catch (e) {
            reject(e)            
        }
    })
}
const hsahUserPassword = (password) =>{
    return new Promise(async(resolve,reject)=>{
        try{
            let hash = await bcrypt.hashSync(password, salt);
            resolve(hash)
        }
        catch(e){
            reject(e);
        }
        
    })
}
const getAllUser = ()=>{
    return new Promise(async(resolve,reject)=>{
        try {
            let data = await DB.User.findAll();
            resolve(data)
        } catch (e) {
            reject(e)
        }
    })
}
module.exports = {
    createUser:createUser,
    getAllUser:getAllUser
}