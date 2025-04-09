import doctorService from "../service/doctorService"

const getAllDoctorPaginate = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 5;

    const data = await doctorService.getAllDoctorPaginate(page, limit);

    return res.status(200).json({
      errCode: 0,
      ...data,
    });
  } catch (e) {
    console.error("Server Error:", e);
    return res.status(500).json({ errCode: 1, errMess: 'Server error' });
  }
};
const findDoctor = async (req, res) => {
  const doctorId = req.params.id;

  if (!doctorId) {
    return res.status(400).json({
      errCode: 1,
      errMessage: 'Not Found ID',
    });
  }

  try {
    const data = await doctorService.findDoctor(doctorId);
    
    if (data && data.rows.length > 0) {
      return res.status(200).json({
        errCode: 0,
        data: data.rows,  // Trả về danh sách bác sĩ tìm thấy
      });
    } else {
      return res.status(404).json({
        errCode: 1,
        errMessage: 'Doctor not found',
      });
    }
  } catch (error) {
    console.error(error); // Ghi lại lỗi để kiểm tra
    return res.status(500).json({
      errCode: 1,
      errMessage: 'Error occurred while fetching doctor',
    });
  }
};

module.exports={
    getAllDoctorPaginate: getAllDoctorPaginate,
    findDoctor:findDoctor

}