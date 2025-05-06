import DB from "../models/index"
const getAllRoom = (page,limit) => {
    return new Promise(async (resolve, reject) => {
        try {
          const offset = (page - 1) * limit;
          const totalRooms = await DB.Room.count();
          const { count, rows } = await DB.Room.findAndCountAll({
            limit: +limit,
            offset: +offset,
            order: [['createdAt', 'DESC']],
          });
    
          resolve({
            data: rows,
            totalItems: totalRooms,
            totalPages: Math.ceil(totalRooms / limit),
            currentPage: +page,
          });
        } catch (e) {
          reject(e);
        }
      });
};
const createRoom = (data) =>{
    return new Promise(async(resolve, reject) => {
        try {
            await DB.Room.create({
            roomNumber: data.roomNumber,
            floor: data.floor,
            toa: data.toa,
            roomDescription: data.roomDescription
            })
            resolve("Tao Thanh Cong")
        } catch (error) {
            reject(e)
        }
    })
}
const DeleteRoom = (roomId) => {
 return new Promise((resolve, reject) => {
        DB.Room.destroy({
            where: {
                roomId: roomId
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
const UpdateRoom = async(roomId,userData) =>{
    try {
        // Tìm người dùng theo ID và cập nhật dữ liệu
        const Room = await DB.Room.findByPk(roomId);
    
        if (!Room) {
          return null; // Trường hợp không tìm thấy người dùng
        }
    
        // Cập nhật thông tin người dùng
        await Room.update(userData);
        return Room; // Trả về người dùng đã được cập nhật
      } catch (error) {
        throw new Error('Error updating user');
      }
    };
module.exports={
    getAllRoom: getAllRoom,
    createRoom:createRoom,
    DeleteRoom: DeleteRoom,
    UpdateRoom,UpdateRoom
}

