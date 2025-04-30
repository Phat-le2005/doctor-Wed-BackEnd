import { where } from "sequelize"
import DB from "../models/index"
const createHoso = (data)=>{
    return new Promise(async(resolve,reject)=>{
        try {
           await DB.HoSo.create({
           userId: data.userId,
           Name: data.name,
           DateOfBirth: data.day,
           phone: data.phoneNumber,
           Sex: data.sex,
           CMND: data.id,
           email: data.email,
           Job: data.job,
           address: data.address,
           danToc: data.dantoc
           })
           resolve('Tao Thanh cong')
        } catch (e) {
            reject(e)            
        }
    })
}
const get_hoso = async (userId) => {
    try {
        
        const data = await DB.HoSo.findAll({
            where: { userId }
        });
        if (!data || data.length === 0) {
            return {
                errCode: 0,
                errMess: "Người dùng chưa đăng ký hồ sơ",
                data: []
            };
        }

        return {
            errCode: 0,
            errMess: "Lấy hồ sơ thành công",
            data
        };
    } catch (error) {
        throw error;
    }
};
const DeleteHoSo = (HSId) => {
    return new Promise((resolve, reject) => {
        DB.HoSo.destroy({
            where: {
                HSId: HSId
            }
        })
        .then(deleted => {
            if (deleted === 0) {
                reject(new Error("Không tìm thấy hồ sơ để xóa"));
            } else {
                resolve("Delete successful");
            }
        })
        .catch((e) => {
            reject(e);
        });
    });
};
const UpdateHoSo = async(HSId,userData) =>{
    try {
        // Tìm người dùng theo ID và cập nhật dữ liệu
        const hoso = await DB.HoSo.findByPk(HSId);
    
        if (!hoso) {
          return null; // Trường hợp không tìm thấy người dùng
        }
    
        // Cập nhật thông tin người dùng
        await hoso.update(userData);
        return hoso; // Trả về người dùng đã được cập nhật
      } catch (error) {
        throw new Error('Error updating user');
      }
    };
module.exports ={
    createHoso,get_hoso,DeleteHoSo,UpdateHoSo

}