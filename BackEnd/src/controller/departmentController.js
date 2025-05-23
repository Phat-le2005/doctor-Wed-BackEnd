import departmentService from "../service/departmentService"
const get_all_department = async (req, res) => {
    try {
        const data = await departmentService.get_all_department();
        if (!data || data.length === 0) {  // Kiểm tra mảng rỗng
            return res.status(400).json({
                errCode: 1,
                errMess: 'No Input'
            });
        }
        return res.status(200).json({
            errCode: 0,
            data: data
        });
    } catch (e) {
        return res.status(500).json({
            errCode: 2,
            errMess: 'Internal Server Error',
            detail: e.message // Truyền lỗi để dễ debug
        });    
    }
};
const handleCreateDepartment = async(req,res) => {
     let data = req.body;
        
        if (!data ) {
            return res.status(400).json({
                errCode: 1,
                errMessage: "Missing required fields",
                user: '',
            });
        }
        try {
            let message = await departmentService.createDepartment(data);
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
const handleDeleteDepartment = async (req,res) =>{
      const departmentId = req.params.id;
        
        if (!departmentId) {
            return res.status(400).json({
                errCode: 1,
                errMessage: 'Not Found ID'
            });
        }
    
        try {
            const message = await departmentService.DeleteDepartment(departmentId);
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

const handleUpdateDepartment = async (req,res) => {
     try {
            const id  = req.params.id;
            const userData = req.body;
        
            // Gọi service để cập nhật người dùng
            const updatedUser = await departmentService.UpdateDepartment(id, userData);
        
            if (updatedUser) {
              return res.status(200).json({ message: 'Department updated successfully', data: updatedUser, errCode: 0 });
            } else {
              return res.status(404).json({ message: 'not found',errCode:1 });
            }
          } catch (error) {
            return res.status(500).json({ message: 'Server error', error: error.message ,errCode:1});
          }
}
module.exports={
    get_all_department: get_all_department,
    handleCreateDepartment: handleCreateDepartment,
    handleDeleteDepartment: handleDeleteDepartment,
    handleUpdateDepartment: handleUpdateDepartment

}