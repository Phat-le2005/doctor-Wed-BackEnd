'use strict';
const {
  Model,
  BOOLEAN
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.hasMany(models.Appointment, { foreignKey: 'userId' });
      User.hasMany(models.HoSo, { foreignKey: 'userId' });
    }
  }
  User.init({
    userId: {  // Sử dụng 'departmentId' làm khóa chính
      type: DataTypes.INTEGER,
      primaryKey: true,  // Đảm bảo 'departmentId' là khóa chính
      autoIncrement: true // Tự động tăng giá trị cho 'departmentId'
    },
    email: { type: DataTypes.STRING, unique: true },
    password: DataTypes.STRING,
    userName: DataTypes.STRING,
    address: DataTypes.STRING,
    dateOfBirth: DataTypes.DATE,
    phoneNumber: DataTypes.STRING,
    sex: DataTypes.BOOLEAN,
    imageUser: DataTypes.STRING,
    BHYT: DataTypes.STRING
  }, { sequelize, modelName: 'User',  tableName: 'users' });
  return User;
};