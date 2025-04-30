import { createHoso,get_hoso,DeleteHoSo,UpdateHoSo } from "../service/hoSoService";
const handleCreateHoso = async (req, res) => {
    let data = req.body;
    
    if (!data ) {
        return res.status(400).json({
            errCode: 1,
            errMessage: "Missing required fields",
            user: '',
        });
    }
    try {
        let message = await createHoso(data);
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
};
const handleGetHoso = async (req, res) => {
    const userId = req.params.userId;
    if (!userId) {
        return res.status(400).json({
            errCode: 1,
            errMessage: "Thiếu userId",
            user: null
        });
    }

    try {
        const response = await get_hoso(userId);
        return res.status(200).json(response);
    } catch (error) {
        return res.status(500).json({
            errCode: -1,
            errMessage: "Lỗi server",
            error: error.message
        });
    }
};
const handleDeleteHoSo = async (req, res) => {
    const HsId = req.params.id;
    
    if (!HsId) {
        return res.status(400).json({
            errCode: 1,
            errMessage: 'Not Found ID'
        });
    }

    try {
        const message = await DeleteHoSo(HsId);
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
};
const handleUpdateHoso = async(req,res) =>{
    try {
        const id  = req.params.id;
        const userData = req.body;
    
        // Gọi service để cập nhật người dùng
        const updatedUser = await UpdateHoSo(id, userData);
    
        if (updatedUser) {
          return res.status(200).json({ message: 'HoSo updated successfully', data: updatedUser, errCode: 0 });
        } else {
          return res.status(404).json({ message: 'User not found',errCode:1 });
        }
      } catch (error) {
        return res.status(500).json({ message: 'Server error', error: error.message ,errCode:1});
      }
}

module.exports ={ 
    handleCreateHoso: handleCreateHoso,
    handleGetHoso: handleGetHoso,
    handleDeleteHoSo: handleDeleteHoSo,
    handleUpdateHoso: handleUpdateHoso
}