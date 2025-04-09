'use strict';
const {
  Model,
  BOOLEAN
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Prescription extends Model {
      static associate(models) {
        Prescription.belongsTo(models.History, { foreignKey: 'historyId' });
      }
    }
    Prescription.init({
      prescriptionId: {  // Sử dụng 'departmentId' làm khóa chính
        type: DataTypes.INTEGER,
        primaryKey: true,  // Đảm bảo 'departmentId' là khóa chính
        autoIncrement: true // Tự động tăng giá trị cho 'departmentId'
      },
      historyId: {
        type: DataTypes.INTEGER,
        references: { model: 'histories', key: 'historyId' }
      },
      medicine_name: DataTypes.STRING,
      dosage: DataTypes.STRING,
      usage_instruction: DataTypes.STRING
    }, { sequelize, modelName: 'Prescription'  ,tableName: 'prescriptions' });
    return Prescription;
  };