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
module.exports={
    get_all_department:get_all_department
}