import { where } from "sequelize";
import DB from "../models/index";
const createHP = async (historyId, prescriptionId) => {
    try {
      await DB.HistoryPrescription.create({
        historyId,
        prescriptionId,
      });
      return "Tạo thành công";
    } catch (error) {
      console.error("Lỗi khi tạo HP:", error);
      throw new Error("Lỗi khi tạo lịch sử - đơn thuốc");
    }
  };
const DeleteHP = (historyId) => {
 return new Promise(async(resolve, reject) => {
  DB.HistoryPrescription.destroy({
    where:{historyId}
  })
  .then(deleted => {
    if (deleted === 0) {
        reject(new Error("Không tìm thấy History để xóa"));
    } else {
        resolve("Delete successful");
    }
})
.catch((e) => {
    reject(e);
});
 })
}
module.exports = {
    createHP,DeleteHP
}