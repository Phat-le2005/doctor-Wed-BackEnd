'use strict';
const {
  Model,
  BOOLEAN
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.hasMany(models.Appointment, { foreignKey: 'userId' });
    }
  }
  User.init({
    email: { type: DataTypes.STRING, unique: true },
    password: DataTypes.STRING,
    userName: DataTypes.STRING,
    address: DataTypes.STRING,
    dateOfBirth: DataTypes.DATE,
    phoneNumber: DataTypes.STRING,
    sex: DataTypes.BOOLEAN,
    imageUser: DataTypes.STRING,
    BHYT: DataTypes.STRING
  }, { sequelize, modelName: 'User' });
  return User;
};