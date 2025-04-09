'use strict';
const {
  Model,
  BOOLEAN
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Specialty extends Model {
    static associate(models) {
      Specialty.belongsTo(models.Department, { foreignKey: 'departmentId' });
      Specialty.belongsToMany(models.Doctor, {
        through: 'DoctorSpecialty',
        foreignKey: 'specialtyId',
        otherKey: 'doctorId'
      });
    }
  }
  Specialty.init({
    specialtyId: {  // Sử dụng 'departmentId' làm khóa chính
      type: DataTypes.INTEGER,
      primaryKey: true,  // Đảm bảo 'departmentId' là khóa chính
      autoIncrement: true // Tự động tăng giá trị cho 'departmentId'
    },
    specialtyDescription: DataTypes.TEXT,
    specialtyImage: DataTypes.STRING,
    specialtyName: DataTypes.STRING,
    departmentId: {
      type: DataTypes.INTEGER,
      references: { model: 'departments', key: 'departmentId' }
    }
  }, { sequelize, modelName: 'Specialty',  tableName: 'specialties' });
  return Specialty;
};
