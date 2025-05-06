import historyPresciption from "../service/historyPrescription"
const handleCreateHP = async (req, res) => {
    try {
      const { historyId, prescriptionId } = req.body;
  
      if (!historyId || !prescriptionId) {
        return res.status(400).json({
          errCode: 1,
          errMessage: "Thiếu đầu vào",
        });
      }
  
      const message = await historyPresciption.createHP(historyId, prescriptionId);
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
  };
const handleDeleteHP = async (req,res) => {
  const historyId = req.params.id;
  if(!historyId){
    return res.status(400).json({
      errCode: 1,
      errMessage: 'Not Found ID'
  });
  }
   try {
          const message = await historyPresciption.DeleteHP(historyId);
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
export  {
    handleCreateHP,
    handleDeleteHP
}