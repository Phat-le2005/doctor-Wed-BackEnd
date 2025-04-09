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
  
module.exports={
    get_all_department: get_all_department

}