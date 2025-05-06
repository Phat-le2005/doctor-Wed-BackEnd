import DB from "../models/index"
const get_all_department = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let data = await DB.Department.findAll();
            if (data.length === 0) {  // Kiểm tra nếu mảng rỗng
                reject('No data found');  // Hoặc trả về một thông báo lỗi khác nếu không có dữ liệu
            }
            resolve(data);
        } catch (e) {
            reject(e);  // Truyền lỗi nếu có vấn đề xảy ra
        }
    });
};
const createDepaetment = (data) =>{
    return new Promise(async(resolve, reject) => {
        try {
            await DB.Department.create({
            departmentName: data.departmentName,
            imageDepartment: data.imageDepartment,
            departmentDescription: data.departmentDescription
            })
            resolve("Tao Thanh Cong")
        } catch (error) {
            reject(e)
        }
    })
}
const DeleteDepartment = (departmentId) => {
 return new Promise((resolve, reject) => {
        DB.Department.destroy({
            where: {
                departmentId: departmentId
            }
        })
        .then(deleted => {
            if (deleted === 0) {
                reject(new Error("Không tìm thấy hồ sơ để xóa"));
            } else {
                resolve("Delete successful");
            }
        })
        .catch((e) => {
            reject(e);
        });
    });
}
const UpdateDepartment = async(departmentId,userData) =>{
    try {
        // Tìm người dùng theo ID và cập nhật dữ liệu
        const Department = await DB.Department.findByPk(departmentId);
    
        if (!Department) {
          return null; // Trường hợp không tìm thấy người dùng
        }
    
        // Cập nhật thông tin người dùng
        await Department.update(userData);
        return Department; // Trả về người dùng đã được cập nhật
      } catch (error) {
        throw new Error('Error updating user');
      }
    };
module.exports={
    get_all_department:get_all_department,
    UpdateDepartment: UpdateDepartment,
    createDepartment: createDepaetment,
    DeleteDepartment: DeleteDepartment
}