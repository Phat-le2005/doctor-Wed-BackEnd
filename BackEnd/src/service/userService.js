import { where } from "sequelize"
import DB from "../models/index"
import bcrypt from 'bcryptjs'
const getAllUser=(userId)=>{
    return new Promise(async(resolve,reject)=>{
        try {
            let user=''
            if(userId=='ALL'){
                user = DB.User.findAll({
                    attributes: {
                        exclude: [ 'password']
                    }
                })
            }
            if(userId && userId!= 'ALL'){
                user = await DB.User
                .findOne({
                    where:{id: userId},
                    attributes: {
                        exclude: [ 'password']
                    }
                })
            }
            resolve(user)
        } catch (e) {
            reject(e)            
        }
    })
}
const postUser = (data)=>{
    return new Promise(async(resolve,reject)=>{
        try {
            
           await DB.User.create({
            email: data.email,
            password: data.password,
            firstName: '',
            lastName: '',
            address: data.address,
            phonenumber:data.phone,
            sex: data.gender === 'male' ? true : false,
            image: '',
            roleId :'R1',
            positionId: '',
           })
           resolve('Tao Thanh cong')
        } catch (e) {
            reject(e)            
        }
    })
}
const handleLogin = (data)=>{
    return new Promise(async(resolve, reject) => {
        try {
           
    
            let user = await DB.User.findOne({
                where: { email: data.email,
                    password: data.password
                 },
            });
            resolve(user)
        } catch (error) {
            reject(error)
        }
    })
}
module.exports={
    getAllUser:getAllUser,
    postUser:postUser,
    handleLogin: handleLogin
}