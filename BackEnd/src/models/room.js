'use strict';
const {
  Model,
  BOOLEAN
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Room extends Model {
    static associate(models) {
      Room.hasMany(models.Schedule, { foreignKey: 'roomId' });
    }
  }
  Room.init({
    roomId: {  // Sử dụng 'departmentId' làm khóa chính
      type: DataTypes.INTEGER,
      primaryKey: true,  // Đảm bảo 'departmentId' là khóa chính
      autoIncrement: true // Tự động tăng giá trị cho 'departmentId'
    },
    roomNumber: { type: DataTypes.INTEGER, unique: true },
    floor: DataTypes.INTEGER,
    roomDescription: DataTypes.STRING,
    toa: DataTypes.STRING
  }, { sequelize, modelName: 'Room',  tableName: 'rooms' });
  return Room;
};
