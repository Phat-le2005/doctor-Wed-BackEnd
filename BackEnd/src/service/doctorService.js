import DB from "../models/index"
import { Op } from "sequelize";
const bcrypt = require('bcryptjs');
const getAllDoctorPaginate = (page, limit) => {
  return new Promise(async (resolve, reject) => {
    try {
      const offset = (page - 1) * limit;
      const totalDoctors = await DB.Doctor.count();
      const { count, rows } = await DB.Doctor.findAndCountAll({
        limit: +limit,
        offset: +offset,
        order: [['createdAt', 'DESC']],
        include: [
          {
            model: DB.Specialty,
            through: { attributes: [] }, // Ẩn bảng trung gian DoctorSpecialty
            attributes: ['specialtyId', 'specialtyName'],
            include: [
              {
                model: DB.Department,
                attributes: ['departmentId', 'departmentName']
              }
            ]
          }
        ]
      });

      resolve({
        data: rows,
        totalItems: totalDoctors,
        totalPages: Math.ceil(totalDoctors / limit),
        currentPage: +page,
      });
    } catch (e) {
      reject(e);
    }
  });
};
const findDoctor = async (doctorId) => {
  try {
    const result = await DB.Doctor.findAndCountAll({
      where: {
        doctorId: doctorId
      },
      include: [
        {
          model: DB.Specialty,
          through: { attributes: [] }, // Ẩn bảng trung gian DoctorSpecialty
          attributes: ['specialtyId', 'specialtyName','specialtyDescription'],
          include: [
            {
              model: DB.Department,
              attributes: ['departmentId', 'departmentName']
            }
          ]
        }
      ]
    });

    return result;  // Trả về kết quả của truy vấn
  } catch (error) {
    throw error;  // Ném lỗi nếu có
  }
};
const UpdateEmailDoctor = async (email, doctorId) => {
  try {
    const doctor = await DB.Doctor.findByPk(doctorId);
    if (!doctor) return null;

    doctor.email = email;
    await doctor.save();

    return doctor;
  } catch (e) {
    throw new Error('Error updating doctor email');
  }
};
const UpdatePhoneDoctor = async (phoneNumber, doctorId) => {
  try {
    const doctor = await DB.Doctor.findByPk(doctorId);
    if (!doctor) return null;

    doctor.phoneNumber = phoneNumber;
    await doctor.save();

    return doctor;
  } catch (e) {
    throw new Error('Error updating doctor phoneNumber');
  }
};
const UpdatePasswordDoctor = async (oldPass, doctorId, newPass) => {
  try {
    const doctor = await DB.Doctor.findByPk(doctorId);
    if (!doctor) {
      return {
        errCode: 1,
        errMessage: "Không tìm thấy bác sĩ"
      };
    }

    // So sánh mật khẩu cũ
    // const isMatch = await bcrypt.compare(oldPass, doctor.doctorPass);
    // if (!isMatch) {
    //   return {
    //     errCode: 1,
    //     errMessage: "Vui lòng nhập đúng mật khẩu cũ"
    //   };
    // }

    // Mã hóa mật khẩu mới
    const salt = await bcrypt.genSalt(10);
    const hashedNewPass = await bcrypt.hash(newPass, salt);

    // Lưu mật khẩu đã mã hóa
    doctor.doctorPass = hashedNewPass;
    await doctor.save();

    return {
      errCode: 0,
      message: "Cập nhật mật khẩu thành công"
    };
  } catch (error) {
    console.error(error);
    throw new Error('Error updating doctor password');
  }
};
const getDoctorKeyword = async (keyword) => {
  const data = DB.Doctor.findAll({
    where: {
      doctorName:{
          [Op.like]: `%${keyword}%`
      }
    }
  })
  if (!data || data.length === 0) {
    throw new Error('No Data Found');
}
return data;
}
const DeleteDoctor = (doctorId) => {
  return new Promise((resolve, reject) => {
          DB.Doctor.destroy({
              where: {
                  doctorId: doctorId
              }
          })
          .then(deleted => {
              if (deleted === 0) {
                  reject(new Error("Không tìm thấy doctor để xóa"));
              } else {
                  resolve("Delete successful");
              }
          })
          .catch((e) => {
              reject(e);
          });
      });
}

const CreateDoctor = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      // Hash mật khẩu trước khi lưu
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(data.doctorPass, salt);

      await DB.Doctor.create({
        doctorName: data.doctorName,
        sex: data.sex,
        phoneNumber: data.phoneNumber,
        doctorPass: hashedPassword, // Lưu mật khẩu đã hash
        email: data.email,
        doctorImage: data.doctorImage,
        role: 0,
        departmentId: data.departmentId,
        position: data.position,
        introduce: data.introduce,
        HocVan: data.HocVan,
        CongTac: data.CongTac
      });

      resolve("Tạo thành công");
    } catch (error) {
      reject(error);
    }
  });
};
const UpdateRole = async (doctorId,role) => {
  try {
    const doctor = await DB.Doctor.findByPk(doctorId);
    if (!doctor) return null;

    doctor.role = role;
    await doctor.save();

    return doctor;
  } catch (e) {
    throw new Error('Error updating doctor phoneNumber');
  }
}
module.exports={
    getAllDoctorPaginate: getAllDoctorPaginate,
    findDoctor: findDoctor,
    UpdateEmailDoctor: UpdateEmailDoctor,
    UpdatePhoneDoctor: UpdatePhoneDoctor,
    UpdatePasswordDoctor: UpdatePasswordDoctor,
    getDoctorKeyword: getDoctorKeyword,
    DeleteDoctor: DeleteDoctor,
    CreateDoctor: CreateDoctor,
    UpdateRole: UpdateRole
}