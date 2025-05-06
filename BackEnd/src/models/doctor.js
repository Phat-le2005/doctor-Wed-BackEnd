'use strict';
const {
  Model,
  BOOLEAN
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Doctor extends Model {
    static associate(models) {
      Doctor.belongsToMany(models.Specialty, {
        through: 'DoctorSpecialty',
        foreignKey: 'doctorId',  // Trường khóa ngoài liên kết với Doctor
        otherKey: 'specialtyId'  // Trường khóa ngoài liên kết với Specialty
      });
      Doctor.belongsTo(models.Department, {
        foreignKey: 'departmentId',
      });
      Doctor.hasMany(models.Schedule, { foreignKey: 'doctorId' });
      Doctor.hasMany(models.History, { foreignKey: 'doctorId' });
    }
  }
  Doctor.init({
    doctorId: {  // Sử dụng 'departmentId' làm khóa chính
      type: DataTypes.INTEGER,
      primaryKey: true,  // Đảm bảo 'departmentId' là khóa chính
      autoIncrement: true // Tự động tăng giá trị cho 'departmentId'
    },
    doctorName: DataTypes.STRING,
    sex: DataTypes.BOOLEAN,
    departmentId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    phoneNumber: DataTypes.STRING,
    doctorPass: DataTypes.STRING,
    email: DataTypes.STRING,
    doctorImage: DataTypes.STRING,
    role:DataTypes.INTEGER,
    position: DataTypes.STRING,
    introduce: DataTypes.TEXT,
    HocVan: DataTypes.TEXT,
    CongTac: DataTypes.TEXT
  }, { sequelize, modelName: 'Doctor',  tableName: 'doctors' });
  return Doctor;
};