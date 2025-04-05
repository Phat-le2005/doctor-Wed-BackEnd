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
        foreignKey: 'specialtyId'
      });
    }
  }
  Specialty.init({
    specialtyDescription: DataTypes.TEXT,
    specialtyImage: DataTypes.STRING,
    specialtyName: DataTypes.STRING,
    departmentId: {
      type: DataTypes.INTEGER,
      references: { model: 'Department', key: 'departmentId' }
    }
  }, { sequelize, modelName: 'Specialty' });
  return Specialty;
};
