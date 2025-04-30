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
const handleUpdateEmailDoctor = async (req, res) => {
  try {
    const doctorId = req.params.id;
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ message: 'Email is required', errCode: 1 });
    }

    const updatedDoctor = await doctorService.UpdateEmailDoctor(email, doctorId);

    if (updatedDoctor) {
      return res.status(200).json({
        message: 'Doctor email updated successfully',
        data: updatedDoctor,
        errCode: 0
      });
    } else {
      return res.status(404).json({ message: 'Doctor not found', errCode: 1 });
    }
  } catch (error) {
    return res.status(500).json({
      message: 'Server error',
      error: error.message,
      errCode: 1
    });
  }
};
const handleUpdatePhoneDoctor = async (req, res) => {
  try {
    const doctorId = req.params.id;
    const { phoneNumber } = req.body;

    if (!phoneNumber) {
      return res.status(400).json({ message: 'PhoneNumber is required', errCode: 1 });
    }

    const updatedDoctor = await doctorService.UpdatePhoneDoctor(phoneNumber, doctorId);

    if (updatedDoctor) {
      return res.status(200).json({
        message: 'Doctor Phone updated successfully',
        data: updatedDoctor,
        errCode: 0
      });
    } else {
      return res.status(404).json({ message: 'Doctor not found', errCode: 1 });
    }
  } catch (error) {
    return res.status(500).json({
      message: 'Server error',
      error: error.message,
      errCode: 1
    });
  }
};
const handleUpdatePasswordDoctor = async (req, res) => {
  try {
    const doctorId = req.params.id;
    const { oldPass, newPass } = req.body;

    // Kiểm tra đủ dữ liệu chưa
    if (!oldPass || !newPass) {
      return res.status(400).json({
        errCode: 1,
        message: 'Vui lòng cung cấp đầy đủ mật khẩu cũ và mới'
      });
    }

    const result = await doctorService.UpdatePasswordDoctor(oldPass, doctorId, newPass);

    if (result?.errCode === 1) {
      return res.status(400).json(result); // Sai mật khẩu cũ
    }

    return res.status(200).json({
      errCode: 0,
      message: 'Cập nhật mật khẩu thành công'
    });

  } catch (error) {
    return res.status(500).json({
      errCode: 1,
      message: 'Lỗi server',
      error: error.message
    });
  }
};



module.exports={
    getAllDoctorPaginate: getAllDoctorPaginate,
    findDoctor:findDoctor,
    handleUpdateEmailDoctor: handleUpdateEmailDoctor,
    handleUpdatePhoneDoctor: handleUpdatePhoneDoctor,
    handleUpdatePasswordDoctor: handleUpdatePasswordDoctor

}