import {createAppointment, getAppointment,UpdateAppointment} from "../service/appointmentService"
const HandleAppointmentController = async(req,res) =>{
    let data = req.body;
    if(!data){
        return res.status(400).json({
            errCode: 1,
            errMessage:"Missing required fields"
        })
    }
    try {
        let message = await createAppointment(data)
        return res.status(200).json({
            errCode: 0,
            errMessage: message,
            data: data
        })
    } catch (error) {
        return res.status(500).json({
            errCode: 0,
            errMessage: "Internal server error",
            error: error.message
        });
    }
}

const HandleGetAppointment = async (req, res) => {
    try {
        const doctorId  = req.params.id; // Lấy từ params
        const { page , limit,status } = req.query; // page và limit vẫn từ query

        if (!doctorId) {
            return res.status(400).json({
                message: 'Missing doctorId',
                success: false
            });
        }

        const result = await getAppointment(doctorId, parseInt(page), parseInt(limit), status?.toLowerCase() || 'booked');

        return res.status(200).json({
            message: 'Get appointments successfully',
            success: true,
            data: result.data,
            total: result.total
        });
    } catch (error) {
        console.error('Error in HandleGetAppointment:', error);
        return res.status(500).json({
            message: 'Internal server error',
            success: false
        });
    }
};
const HandleUpdateAppointment = async (req, res) => {
    try {
      const appointmentId = req.params.id;
      const { status } = req.body;
  
      if (!status) {
        return res.status(400).json({
          errCode: 1,
          errMessage: "Thiếu trạng thái (status)",
        });
      }
  
      const result = await UpdateAppointment(appointmentId, status);
  
      if (result.errCode !== 0) {
        return res.status(404).json(result);
      }
  
      return res.status(200).json({
        message: "Cập nhật thành công",
        data: result.data,
        errCode: 0,
      });
    } catch (error) {
      return res.status(500).json({
        message: "Lỗi server khi cập nhật lịch hẹn",
        errCode: 1,
      });
    }
  };
module.exports={
    HandleAppointmentController: HandleAppointmentController,
    HandleGetAppointment: HandleGetAppointment,
    HandleUpdateAppointment:HandleUpdateAppointment
}