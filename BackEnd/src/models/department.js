'use strict';
const {
  Model,
  BOOLEAN
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Department extends Model {
    static associate(models) {
      Department.hasMany(models.Specialty, { foreignKey: 'departmentId' });
    }
  }
  Department.init({
    departmentName: DataTypes.STRING,
    imageDepartment: DataTypes.STRING,
    departmentDescription: DataTypes.STRING
  }, { sequelize, modelName: 'Department' });
  return Department;}