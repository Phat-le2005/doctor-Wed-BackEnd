import DB from "../models/index"
const get_specialty = (departmentId, page , limit ) => {
    return new Promise(async (resolve, reject) => {
      try {
        const offset = (page - 1) * limit;
  
        const { count, rows } = await DB.Specialty.findAndCountAll({
          where: { departmentId },
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
  
  
module.exports={
    get_specialty: get_specialty,
    getDoctorsBySpecialtyId: getDoctorsBySpecialtyId
}