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
  
module.exports={
    get_specialty: get_specialty
}