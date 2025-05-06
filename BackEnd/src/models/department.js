'use strict';
const {
  Model,
  BOOLEAN
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Department extends Model {
    static associate(models) {
      Department.hasMany(models.Specialty, { foreignKey: 'departmentId' });
      Department.hasMany(models.Doctor, {
        foreignKey: 'departmentId',
      });
    }
  }
  Department.init({
    departmentId: {  // Sử dụng 'departmentId' làm khóa chính
      type: DataTypes.INTEGER,
      primaryKey: true,  // Đảm bảo 'departmentId' là khóa chính
      autoIncrement: true // Tự động tăng giá trị cho 'departmentId'
    },
    departmentName: DataTypes.STRING,
    imageDepartment: DataTypes.STRING,
    departmentDescription: DataTypes.STRING
  }, { sequelize, modelName: 'Department',  tableName: 'departments' });
  return Department;}