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

module.exports={
    getAllDoctorPaginate: getAllDoctorPaginate,
    findDoctor: findDoctor
}