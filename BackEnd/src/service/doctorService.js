import DB from "../models/index"
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

    if (doctor.doctorPass !== oldPass) {
      return {
        errCode: 1,
        errMessage: "Vui lòng nhập đúng mật khẩu cũ"
      };
    }

    doctor.doctorPass = newPass;
    await doctor.save();

    return {
      errCode: 0,
      message: "Cập nhật mật khẩu thành công"
    };
  } catch (error) {
    throw new Error('Error updating doctor password');
  }
};
module.exports={
    getAllDoctorPaginate: getAllDoctorPaginate,
    findDoctor: findDoctor,
    UpdateEmailDoctor: UpdateEmailDoctor,
    UpdatePhoneDoctor: UpdatePhoneDoctor,
    UpdatePasswordDoctor: UpdatePasswordDoctor
}