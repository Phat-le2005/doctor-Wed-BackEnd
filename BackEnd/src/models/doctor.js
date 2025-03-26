'use strict';
const {
  Model,
  BOOLEAN
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Doctor extends Model {
    static associate(models) {
      Doctor.belongsTo(models.Specialty, { foreignKey: 'specialtyId' });
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
    specialtyId: {
      type: DataTypes.INTEGER,
      references: { model: 'Specialties', key: 'specialtyId' }
    },
    doctorImage: DataTypes.STRING,
    doctorDescription: DataTypes.STRING,
    position: DataTypes.STRING
  }, { sequelize, modelName: 'Doctor' });
  return Doctor;
};