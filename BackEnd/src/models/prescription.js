'use strict';
const {
  Model,
  BOOLEAN
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Prescription extends Model {
      static associate(models) {
        Prescription.belongsToMany(models.History, {
          through: 'HistoryPrescription',
          foreignKey: 'prescriptionId',
          otherKey: 'historyId'
        });
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
      medicineName: DataTypes.STRING,
      dosage: DataTypes.STRING,
      usageInstruction: DataTypes.STRING
    }, { sequelize, modelName: 'Prescription'  ,tableName: 'prescriptions', timestamps: false });
    return Prescription;
  };