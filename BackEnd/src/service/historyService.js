import { where } from "sequelize"
import DB from "../models/index"
const createHistory = async (data) =>{
    return new Promise(async(resolve, reject) => {
        try {
            if(!data.appointmentId){
                return {
                    errCode :1,
                    errMessage: "Khong tm thay appointmentId"
                }
            }
            if(!data.doctorId){
                return {
                     errCode:1,
                    errMessage: "Khong tm thay doctorId"
                }
            }
            await DB.History.create({
                appointmentId : data.appointmentId,
                doctorId: data.doctorId,
                diagnosis:"",
                doctorNotes:""
            })
            resolve("Tao thanh Cong")
        } catch (error) {
            reject(error)
        }
    })
  
}
const getHistory = (doctorId, page = 1, limit = 10, historyId = 0) => {
    return new Promise(async (resolve, reject) => {
        try {
            const offset = (page - 1) * limit;
            let histories;

            const totalHistory = await DB.History.count({
                where: { doctorId: doctorId }
            });

            if (historyId == 0) {
                histories = await DB.History.findAll({
                    where: { doctorId: doctorId },
                    attributes: ['historyId', 'appointmentId', 'diagnosis', 'doctorNotes'],
                    include: [
                        {
                            model: DB.Appointment,
                            attributes: ['day'],
                            include: [
                                {
                                    model: DB.HoSo,
                                    attributes: ['Name']
                                },
                                {
                                    model: DB.Schedule,
                                    attributes:['startTime', 'endTime'],
                                    include: [
                                        {
                                            model: DB.Room,
                                            attributes: ['toa', 'floor', 'roomNumber']
                                        },
                                        {
                                            model: DB.Specialty,
                                            as: 'specialty',
                                            attributes: ['specialtyName']
                                        }
                                    ]
                                }
                            ]
                        }
                    ],
                    offset: offset,
                    limit: limit,
                    order: [['historyId', 'DESC']]
                });
            } else {
                histories = await DB.History.findOne({
                    where: { historyId: historyId },
                    attributes: ['historyId', 'appointmentId', 'diagnosis', 'doctorNotes'],
                    include: [
                        {
                            model: DB.Appointment,
                            attributes: ['day'],
                            include: [
                                {
                                    model: DB.HoSo,
                                    attributes: ['Name']
                                },
                                {
                                    model: DB.Schedule,
                                    attributes:['startTime', 'endTime'],
                                    include: [
                                        {
                                            model: DB.Room,
                                            attributes: ['toa', 'floor', 'roomNumber']
                                        },
                                        {
                                            model: DB.Specialty,
                                            as: 'specialty',
                                            attributes: ['specialtyName']
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                });
            }

            resolve({
                total: totalHistory,
                data: histories
            });
        } catch (error) {
            reject(error);
        }
    });
};
const UpdateHistory = async (historyId, doctorNotes, diagnosis) => {
    try {
      const history = await DB.History.findOne({
        where: { historyId },
      });
      if (!history) {
        return {
          errCode: 1,
          errMessage: "Không tìm thấy lịch sử",
        };
      }
      history.doctorNotes = doctorNotes;
      history.diagnosis = diagnosis;
      await history.save();
  
      return {
        errCode: 0,
        data: history,
      };
    } catch (error) {
      console.error("Lỗi cập nhật", error);
      throw new Error("Lỗi khi cập nhật");
    }
  };
const GetPrescriptionfromHistory =  (historyId) => {
    return new Promise(async(resolve, reject) => {
        try {
            const data = await DB.History.findAll({
                where: {historyId},
                include:{
                    model: DB.Prescription,
                    through: {attributes:[]},
                    attributes: ['medicineName','dosage','usageInstruction']
                }
              
            })
            resolve(data)
        } catch (error) {
            reject(error)
        }       
    })
}
module.exports={
    createHistory,getHistory,UpdateHistory,GetPrescriptionfromHistory
}