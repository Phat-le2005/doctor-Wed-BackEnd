'use strict';
const {
  Model,
  BOOLEAN
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class HoSo extends Model {
      static associate(models) {
        HoSo.belongsTo(models.User, { foreignKey: 'userId' });
        HoSo.hasMany(models.Appointment, { foreignKey: 'HSId' });
      }
    }
    HoSo.init({
      HSId: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
      userId: { type: DataTypes.INTEGER, references: { model: 'users', key: 'userId' } },
      email: { type: DataTypes.STRING, unique: true },
      Name: DataTypes.STRING,
      address: DataTypes.STRING,
      DateOfBirth: DataTypes.DATE,
      phone: DataTypes.STRING,
      Sex: DataTypes.BOOLEAN,
      CMND: DataTypes.STRING,
      Job: DataTypes.STRING,
      danToc: DataTypes.STRING
    }, { sequelize, modelName: 'HoSo'   ,tableName: 'hosos',timestamps: false });
    return HoSo;
  };