import DB from "../models/index"
const createHistory = async (data) =>{
    return new Promise(async(resolve, reject) => {
        try {
            if(!appointmentId){
                return {
                    errCodev :1,
                    errMessage: "Khong tm thay appointmentId"
                }
            }
            if(!doctorId){
                return {
                     errCodev :1,
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
            reject(e)
        }
    })
  
}
module.exports={
    createHistory
}