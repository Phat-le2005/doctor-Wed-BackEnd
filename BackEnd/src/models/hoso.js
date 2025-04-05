'use strict';
const {
  Model,
  BOOLEAN
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class HoSo extends Model {
      static associate(models) {
        HoSo.belongsTo(models.User, { foreignKey: 'userId' });
        HoSo.hasMany(models.Appointment, { foreignKey: 'hoSoId' });
      }
    }
    HoSo.init({
      id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true }, // Sửa lại HSId thành id
      userId: { type: DataTypes.INTEGER, references: { model: 'User', key: 'userId' } },
      email: { type: DataTypes.STRING, unique: true },
      Name: DataTypes.STRING,
      address: DataTypes.STRING,
      DateOfBirth: DataTypes.DATE,
      phone: DataTypes.STRING,
      Sex: DataTypes.BOOLEAN,
      CMND: DataTypes.STRING,
      Job: DataTypes.STRING,
      QuocTich: DataTypes.STRING,
      danToc: DataTypes.STRING
    }, { sequelize, modelName: 'HoSo' });
    return HoSo;
  };