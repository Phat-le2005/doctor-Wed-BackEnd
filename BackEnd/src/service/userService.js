import { where } from "sequelize"
import DB from "../models/index"
import bcrypt from 'bcryptjs'
import { resolve } from "path"

const postUser = (data)=>{
    return new Promise(async(resolve,reject)=>{
        try {
           await DB.User.create({
            email: data.email,
            password: data.password,
            firstName: data.firstName,
            lastName: data.lastName,
            address: '',
            phonenumber:data.phoneNumber,
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
const getAllUserService = async ({ query }) => {
    return new Promise(async (resolve, reject) => {
      try {
        const page = parseInt(query.page) || 1;
        const limit = parseInt(query.limit) || 10;
        const offset = (page - 1) * limit;
  
        const { count, rows } = await DB.User.findAndCountAll({
          offset,
          limit,
          order: [['createdAt', 'DESC']],
        });
  
        resolve({
          errCode: 0,
          page,
          limit,
          totalUsers: count,
          totalPages: Math.ceil(count / limit),
          data: rows,
        });
      } catch (error) {
        reject({
          errCode: 1,
          errMessage: 'Failed to fetch users',
          error: error.message,
        });
      }
    });
  };
  
module.exports={
    getAllUserService:getAllUserService,
    postUser:postUser,
    handleLogin: handleLogin
}