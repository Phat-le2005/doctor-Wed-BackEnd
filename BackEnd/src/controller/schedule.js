import scheduleService from "../service/scheduleService"

const get_schedule = async (req, res) => {
    try {
      const { doctorId, specialtyId } = req.query; // 👈 lấy từ query string
  
      if (!doctorId || !specialtyId) {
        return res.status(400).json({
          errCode: 1,
          errMess: "Thiếu thông tin đầu vào"
        });
      }
  
      const data = await scheduleService.get_schedule(doctorId, specialtyId);
  
      if (!data || !data.schedules || data.schedules.length === 0) {
        return res.status(200).json({
          errCode: 2,
          errMess: "Không có lịch khám phù hợp",
          schedules: []
        });
      }
  
      return res.status(200).json({
        errCode: 0,
        errMess: "OK",
        ...data
      });
  
    } catch (e) {
      console.error("Lỗi get_schedule:", e);
      return res.status(500).json({
        errCode: 500,
        errMess: "Lỗi server nội bộ",
      });
    }
  };
module.exports = {
    get_schedule:get_schedule
}