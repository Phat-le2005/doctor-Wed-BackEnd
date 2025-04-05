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
        foreignKey: 'doctorId'
      });
      Doctor.hasMany(models.Schedule, { foreignKey: 'doctorId' });
      Doctor.hasMany(models.History, { foreignKey: 'doctorId' });
    }
  }
  Doctor.init({
    doctorName: DataTypes.STRING,
    sex: DataTypes.BOOLEAN,
    phoneNumber: DataTypes.STRING,
    doctorPass: DataTypes.STRING,
    email: DataTypes.STRING,
    doctorImage: DataTypes.STRING,
    position: DataTypes.STRING,
    introduce: DataTypes.TEXT,
    HocVan: DataTypes.TEXT,
    CongTac: DataTypes.TEXT
  }, { sequelize, modelName: 'Doctor' });
  return Doctor;
};