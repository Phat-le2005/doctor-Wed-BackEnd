'use strict';
const {
  Model,
  BOOLEAN
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class History extends Model {
    static associate(models) {
      History.belongsTo(models.Appointment, { foreignKey: 'appointmentId' });
      History.belongsTo(models.Doctor, { foreignKey: 'doctorId' });
      History.belongsToMany(models.Prescription, {
        through: 'HistoryPrescription',
        foreignKey: 'historyId',
        otherKey: 'prescriptionId'
      });
    }
  }
  History.init({
    historyId: {  // Sử dụng 'departmentId' làm khóa chính
      type: DataTypes.INTEGER,
      primaryKey: true,  // Đảm bảo 'departmentId' là khóa chính
      autoIncrement: true // Tự động tăng giá trị cho 'departmentId'
    },
    doctorId: {
      type: DataTypes.INTEGER,
      references: { model: 'doctors', key: 'doctorId' }
    },
    appointmentId: {
      type: DataTypes.INTEGER,
      references: { model: 'appointments', key: 'appointmentId' }
    },
    diagnosis: DataTypes.STRING,
    doctorNotes: DataTypes.STRING,
  }, { sequelize, modelName: 'History',  tableName: 'histories', timestamps: false  });
  return History;
};
