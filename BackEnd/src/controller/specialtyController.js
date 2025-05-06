import specialtyService from '../service/specialtyService'
const get_specialty = async (req, res) => {
  try {
    const departmentId = req.params.id === 'null' ? null : parseInt(req.params.id);
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 5;
    const searchKeyword = req.query.search || '';

    const data = await specialtyService.get_specialty(departmentId, page, limit, searchKeyword);

    return res.status(200).json({
      errCode: 0,
      ...data,
    });
  } catch (e) {
    console.error("Server Error:", e);
    return res.status(500).json({ errCode: 1, errMess: 'Server error' });
  }
};
const getDoctorsBySpecialty = async (req, res) => {
  const { page, limit, specialtyId } = req.query;

  if (!specialtyId) {
    return res.status(400).json({
      errCode: 1,
      errMessage: 'Thiếu specialtyId trong query'
    });
  }

  try {
    const result = await specialtyService.getDoctorsBySpecialtyId(specialtyId, page, limit);
    return res.status(200).json(result);
  } catch (e) {
    return res.status(500).json({
      errCode: 1,
      errMessage: 'Lỗi server',
      error: e.message
    });
  }
};
const handleGetSpecialtyDoctor = async (req,res) => {
    
    try {
      const departmentId = req.params.id
      if(!departmentId){
        return res.status(400).json({
          errCode: 1,
          errMessage: "No Input"
        })
      }
      const data = await specialtyService.getSpecialtyByDoctor(departmentId)
      return res.status(200).json({
        errCode: 0,
        data: data 
      })
    } catch (error) {
        return res.status(500).json({
          errCode: 1,
          errMessage: error
        })      
    }
}
const handleCreateSpecialty = async (req,res) => {
  let data = req.body
    if (!data ) {
          return res.status(400).json({
              errCode: 1,
              errMessage: "Missing required fields",
              user: '',
          });
      }
      try {
          let message = await specialtyService.CreateSpecialty(data);
          return res.status(200).json({
              errCode: 0,
              errMessage: message,
              data: data
          });
      } catch (error) {
          return res.status(500).json({
              errCode: 0,
              errMessage: "Internal server error",
              error: error.message
          });
      }
}
const handleDeleteSpecialty = async (req,res) =>{
    const specialtyId = req.params.id
    if(!specialtyId){
      return res.status(400).json({
        errCode: 1,
        errMessage: 'Not Found ID'
    });
    }
        try {
            const message = await specialtyService.DeleteSpecialty(specialtyId);
            return res.status(200).json({
                errCode: 0,
                errMessage: message
            });
        } catch (e) {
            // Cung cấp thông báo lỗi chi tiết từ catch
            return res.status(500).json({
                errCode: 1,
                errMessage: e.message || 'Error'
            });
        }

}
const handleCreateDS = async  (req,res) =>{
     try {
        const { doctorId, specialtyId } = req.body;
    
        if (!doctorId|| !specialtyId) {
          return res.status(400).json({
            errCode: 1,
            errMessage: "Thiếu đầu vào",
          });
        }
    
        const message = await specialtyService.createDS(doctorId, specialtyId);
        return res.status(200).json({
          errCode: 0,
          errMessage: message,
        });
      } catch (error) {
        return res.status(500).json({
          errCode: 1,
          errMessage: error.message || "Lỗi server",
        });
      }
}
const handleDeleteDS = async (req,res) => {
  const specialtyId = req.params.id;
  if(!specialtyId){
    return res.status(400).json({
      errCode: 1,
      errMessage: 'Not Found ID'
  });
  }
   try {
          const message = await specialtyService.DeleteDS(specialtyId);
          return res.status(200).json({
              errCode: 0,
              errMessage: message
          });
      } catch (e) {
          // Cung cấp thông báo lỗi chi tiết từ catch
          return res.status(500).json({
              errCode: 1,
              errMessage: e.message || 'Error'
          });
      }
}
const handleUpdateSpecialty = async (req,res) => {
    try{
    const specialtyId= req.params.id
    const specialtyName = req.body.specialtyName
    const specialtyDescription = req.body.specialtyDescription
    const specialtyImage = req.body.specialtyImage
    const result = await specialtyService.UpdateSpeciaty(specialtyId,specialtyName,specialtyDescription,specialtyImage)
  
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
        message: "Lỗi server khi cập nhật",
        errCode: 1,
      });
    }

}
module.exports={
    get_specialty: get_specialty,
    getDoctorsBySpecialty: getDoctorsBySpecialty,
  handleGetSpecialtyDoctor:handleGetSpecialtyDoctor,
  handleCreateSpecialty: handleCreateSpecialty,
  handleDeleteSpecialty: handleDeleteSpecialty,
  handleCreateDS: handleCreateDS,
  handleDeleteDS: handleDeleteDS,
  handleUpdateSpecialty: handleUpdateSpecialty
}