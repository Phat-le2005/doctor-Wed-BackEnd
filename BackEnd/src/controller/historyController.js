import {createHistory,getHistory,UpdateHistory,GetPrescriptionfromHistory} from "../service/historyService"
const handleCreateHistory = async (req,res) =>{
    let data = req.body
    console.log(data)
    if (!data ) {
        return res.status(400).json({
            errCode: 1,
            errMessage: "Missing required fields",
            user: '',
        });
    }
    try {
        let message = await createHistory(data);
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
const handleGetHistory = async (req, res) => {
    try {
        const doctorId = req.params.id;// Nếu đã xác thực, lấy từ token
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        const historyId = parseInt(req.query.historyId) || 0;

        const result = await getHistory(doctorId, page, limit, historyId);

        res.status(200).json({
            success: true,
            message: 'Lấy lịch sử khám thành công',
            ...result
        });
    } catch (error) {
        console.error('Error in getHistory:', error);
        res.status(500).json({
            success: false,
            message: 'Lỗi server khi lấy lịch sử khám',
            error: error.message
        });
    }
};
const handleUpdateHistory = async (req,res) => {
    try{
    const historyId = req.params.id
    const diagnosis = req.body.diagnosis
    const doctorNotes = req.body.doctorNotes
    if(!diagnosis){
        return res.status(400).json({
            errCode : 1,
            errMessage: "Thieu diagnosis"
        })
    }
    if(!doctorNotes){
        return res.status(400).json({
            errCode : 1,
            errMessage: "Thieu doctorNotes"
        })
    }
    const result = await UpdateHistory(historyId,doctorNotes,diagnosis)
  
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
const handleGetPrescription = async (req,res) =>{
    try {
        const historyId = req.params.id
        if(!historyId){
            return res.status(400).json({
                errCode: 1,
                errMessage: "Error Input"
            })
        }
        const data = await GetPrescriptionfromHistory(historyId)
        if(!data){
            return res.status(404).json({
                errCode: 1,
                errMessage:"Not Found"
            })
        }
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
module.exports = {
    handleCreateHistory: handleCreateHistory,
    handleGetHistory: handleGetHistory,
    handleUpdateHistory: handleUpdateHistory,
    handleGetPrescription: handleGetPrescription
}