import { where } from "sequelize"
import DB from "../models/index"
const createAppointment = (data) => {
    return new Promise(async (resolve, reject) => {
        const t = await DB.sequelize.transaction(); // Mở transaction đảm bảo đồng bộ
        try {
            // 1. Lấy thông tin Schedule hiện tại
            const schedule = await DB.Schedule.findByPk(data.scheduleId, { transaction: t });
            if (!schedule) {
                throw new Error('Schedule not found');
            }

            // 2. Tính stt mới
            const newStt = schedule.currentNumber + 1;

            // 3. Tạo Appointment mới với stt
            await DB.Appointment.create({
                userId: data.userId,
                scheduleId: data.scheduleId,
                hoSoId: data.hoSoId,
                day: data.day,
                Stt: newStt
            }, { transaction: t });

            // 4. Cập nhật currentNumber cho Schedule
            schedule.currentNumber = newStt;
            await schedule.save({ transaction: t });

            await t.commit(); // Commit tất cả thay đổi
            resolve("Tạo lịch hẹn thành công!");
        } catch (e) {
            await t.rollback(); // Nếu lỗi thì rollback
            reject(e);
        }
    });
}
const getAppointment = (doctorId, page = 1, limit = 10,status = 'booked') => {
    return new Promise(async (resolve, reject) => {
      try {
        const offset = (page - 1) * limit;
  
        // Đếm tổng số lịch hẹn của bác sĩ
        const totalAppointment = await DB.Appointment.count({
          include: [
            {
              model: DB.Schedule,
              where: { doctorId: doctorId }
            }
          ],
        });
  
        // Lấy danh sách lịch hẹn với phân trang
        const appointments = await DB.Appointment.findAll({
          attributes: ['day', 'Stt', 'status','appointmentId'],
          where: { status },
          include: [
            {
              model: DB.Schedule,
              where: { doctorId: doctorId },
              attributes: ['startTime', 'endTime'],
              include: [
                {
                  model: DB.Room,
                  attributes: ['roomNumber', 'floor', 'roomDescription', 'toa']
                },
                {
                  model: DB.Specialty,
                  attributes: ['specialtyId', 'specialtyName'],
                  as: 'specialty',  // Đảm bảo alias đúng
                  include: [
                    {
                      model: DB.Department,
                      attributes: ['departmentId', 'departmentName']
                    }
                  ]
                }
              ]
            },
            {
              model: DB.HoSo,
              attributes: ['Name', 'DateOfBirth', 'phone', 'Sex', 'email']
            }
          ],
          offset: offset,
          limit: limit,
          order: [['createdAt', 'DESC']] // sắp xếp nếu cần
        });
  
        resolve({
          total: totalAppointment,
          data: appointments
        });
      } catch (e) {
        reject(e);
      }
    });
  };
  const UpdateAppointment = async (appointmentId, status) => {
    try {
      const appointment = await DB.Appointment.findOne({
        where: { appointmentId }
      });
  
      if (!appointment) {
        return {
          errCode: 1,
          errMessage: "Không tìm thấy lịch hẹn",
        };
      }
  
      appointment.status = status;
      await appointment.save();
  
      return {
        errCode: 0,
        data: appointment,
      };
    } catch (error) {
      console.error("Lỗi cập nhật lịch hẹn:", error); // log chi tiết
      throw new Error("Lỗi khi cập nhật lịch hẹn");
    }
  };
module.exports = {
   createAppointment,getAppointment,UpdateAppointment
}
