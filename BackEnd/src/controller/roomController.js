import roomService from "../service/roomService"
const handleGetAllRoom = async (req,res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 5;
    
        const data = await roomService.getAllRoom(page, limit);
    
        return res.status(200).json({
          errCode: 0,
          ...data,
        });
      } catch (e) {
        console.error("Server Error:", e);
        return res.status(500).json({ errCode: 1, errMess: 'Server error' });
      }
}
const handleCreateRoom  = async(req,res) => {
     let data = req.body;
        
        if (!data ) {
            return res.status(400).json({
                errCode: 1,
                errMessage: "Missing required fields",
                user: '',
            });
        }
        try {
            let message = await roomService.createRoom(data);
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
const handleDeleteRoom = async (req,res) =>{
      const roomId = req.params.id;
        
        if (!roomId) {
            return res.status(400).json({
                errCode: 1,
                errMessage: 'Not Found ID'
            });
        }
    
        try {
            const message = await roomService.DeleteRoom(roomId);
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

const handleUpdateRoom = async (req,res) => {
     try {
            const id  = req.params.id;
            const userData = req.body;
        
            // Gọi service để cập nhật người dùng
            const updatedUser = await roomService.UpdateRoom(id, userData);
        
            if (updatedUser) {
              return res.status(200).json({ message: 'Room updated successfully', data: updatedUser, errCode: 0 });
            } else {
              return res.status(404).json({ message: 'not found',errCode:1 });
            }
          } catch (error) {
            return res.status(500).json({ message: 'Server error', error: error.message ,errCode:1});
          }
}
module.exports = {
    handleGetAllRoom: handleGetAllRoom,
    handleCreateRoom: handleCreateRoom,
    handleDeleteRoom: handleDeleteRoom,
    handleUpdateRoom: handleUpdateRoom
}