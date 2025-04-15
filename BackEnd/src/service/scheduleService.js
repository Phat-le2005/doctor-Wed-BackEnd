import DB from "../models/index"

const get_schedule = (doctorId, specialtyId) => {
  return new Promise(async (resolve, reject) => {
    try {
      const { count, rows } = await DB.Schedule.findAndCountAll({
        where: {
          doctorId: doctorId,
          specialtyId: specialtyId
        },
        order: [['createdAt', 'DESC']],
        include: [
                  {
                    model: DB.Room,
                    attributes: ['roomNumber', 'floor',"toa"],
                  }
                ]
      });

      resolve({
        schedules: rows
      });

    } catch (error) {
      reject(error);
    }
  });
}

module.exports = {
  get_schedule
}

