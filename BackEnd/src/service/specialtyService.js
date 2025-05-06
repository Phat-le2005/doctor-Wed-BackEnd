import DB from "../models/index"
import { Op, where } from "sequelize";
import specialty from "../models/specialty";
const get_specialty = (departmentId, page, limit, searchKeyword) => {
  return new Promise(async (resolve, reject) => {
    try {
      const offset = (page - 1) * limit;

      let whereClause = {};

      if (searchKeyword) {
        // Nếu có từ khóa, tìm tất cả theo mô tả
        whereClause.specialtyDescription = { [Op.like]: `%${searchKeyword}%` };
      } else if (departmentId) {
        // Nếu không có từ khóa, lọc theo departmentId
        whereClause.departmentId = departmentId;
      }

      const { count, rows } = await DB.Specialty.findAndCountAll({
        where: whereClause,
        limit: +limit,
        offset: +offset,
        order: [['createdAt', 'DESC']],
      });

      resolve({
        data: rows,
        totalItems: count,
        totalPages: Math.ceil(count / limit),
        currentPage: +page,
      });
    } catch (e) {
      reject(e);
    }
  });
};
  const getDoctorsBySpecialtyId = async (specialtyId, page, limit) => {
    try {
      const offset = (page - 1) * limit;
  
      // Lấy thông tin specialty + department (không lấy doctor trong include nữa)
      const specialty = await DB.Specialty.findOne({
        where: { specialtyId },
        attributes: ['specialtyId', 'specialtyName'],
        include: [
          {
            model: DB.Department,
            attributes: ['departmentId', 'departmentName']
          }
        ]
      });
  
      if (!specialty) {
        return {
          errCode: 1,
          errMessage: "Không tìm thấy chuyên ngành",
        };
      }
  
      // Truy vấn danh sách Doctor thuộc specialty này (quan hệ belongsToMany)
      const doctors = await DB.Doctor.findAll({
        include: [
          {
            model: DB.Specialty,
            where: { specialtyId },
            attributes: [] // ẩn thông tin specialty
          }
        ],
        limit: +limit,
        offset: +offset,
        order: [['createdAt', 'DESC']]
      });
  
      const totalDoctors = await DB.Doctor.count({
        include: [
          {
            model: DB.Specialty,
            where: { specialtyId }
          }
        ]
      });
  
      return {
        data: doctors,
        specialtyInfo: {
          specialtyId: specialty.specialtyId,
          specialtyName: specialty.specialtyName,
          department: specialty.Department
        },
        totalItems: totalDoctors,
        totalPages: Math.ceil(totalDoctors / limit),
        currentPage: +page,
        errCode: 0,
        errMessage: "OK"
      };
  
    } catch (e) {
      throw e;
    }
  };
const getSpecialtyByDoctor = (departmentId) =>{
    return new Promise(async(resolve, reject) => {
     
      try {
        const data = await DB.Specialty.findAll({
          where: {departmentId},
        })
        if(!data){
          reject('Not Found')
        }
        resolve(data)
      } catch (error) {
        reject(error)
      }
    })
}
const CreateSpecialty = (data) =>{
  return new Promise(async(resolve, reject) => {
    try {
      await DB.Specialty.create({
        departmentId: data.departmentId,
        specialtyName: data.specialtyName,
        specialtyDescription: data.specialtyDescription,
        specialtyImage: data.specialtyImage
      })
      resolve('Tao Thanh Cong')
    } catch (error) {
      reject(error)
    }
  })
}
const DeleteSpecialty = (specialtyId) =>{
   return new Promise(async(resolve, reject) => {
    DB.Specialty.destroy({
      where:{specialtyId}
    })
    .then(deleted => {
      if (deleted === 0) {
          reject(new Error("Không tìm thấy History để xóa"));
      } else {
          resolve("Delete successful");
      }
  })
  .catch((e) => {
      reject(e);
  });
   })
}
const createDS = async (doctorId,specialtyId) => {
    try {
      await DB.DoctorSpecialty.create({
        doctorId,
        specialtyId
      });
      return "Tạo thành công";
    } catch (error) {
      console.error("Lỗi khi tạo HP:", error);
      throw new Error("Lỗi khi tạo lịch sử - đơn thuốc");
    }
  };
  const DeleteDS = (specialtyId) => {
   return new Promise(async(resolve, reject) => {
    DB.DoctorSpecialty.destroy({
      where:{specialtyId}
    })
    .then(deleted => {
      if (deleted === 0) {
          reject(new Error("Không tìm thấy History để xóa"));
      } else {
          resolve("Delete successful");
      }
  })
  .catch((e) => {
      reject(e);
  });
   })
  }
  const UpdateSpeciaty = async(specialtyId,specialtyName,specialtyDescription,specialtyImage) =>{
      try {
        const specialty = await DB.Specialty.findOne({
          where: {specialtyId}
        })
        if (!specialty) {
          return {
            errCode: 1,
            errMessage: "Không tìm thấy chuyen khoa",
          };
        }
        specialty.specialtyName = specialtyName
        specialty.specialtyDescription = specialtyDescription
        specialty.specialtyImage = specialtyImage
        await specialty.save()
        return {
          errCode: 0,
          data: specialty
        }
      } catch (error) {
        console.error("Lỗi cập nhật", error);
        throw new Error("Lỗi khi cập nhật");
      }
  }
module.exports={
    get_specialty: get_specialty,
    getDoctorsBySpecialtyId: getDoctorsBySpecialtyId,
    getSpecialtyByDoctor: getSpecialtyByDoctor,
    CreateSpecialty: CreateSpecialty,
    DeleteSpecialty: DeleteSpecialty,
    DeleteDS: DeleteDS,
    createDS: createDS,
    UpdateSpeciaty: UpdateSpeciaty
}