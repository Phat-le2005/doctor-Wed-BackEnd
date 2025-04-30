'use strict';
const {
  Model,
  BOOLEAN
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Appointment extends Model {
    static associate(models) {
      Appointment.belongsTo(models.User, { foreignKey: 'userId' });
      Appointment.belongsTo(models.Schedule, { foreignKey: 'scheduleId' });
      Appointment.hasOne(models.History, { foreignKey: 'appointmentId' });
      Appointment.belongsTo(models.HoSo, { foreignKey: 'HSId' });
    }
  }
  Appointment.init({
    appointmentId: {  // Sử dụng 'departmentId' làm khóa chính
      type: DataTypes.INTEGER,
      primaryKey: true,  // Đảm bảo 'departmentId' là khóa chính
      autoIncrement: true // Tự động tăng giá trị cho 'departmentId'
    },
    userId: {
      type: DataTypes.INTEGER,
      references: { model: 'users', key: 'userId' }
    },
    scheduleId: {
      type: DataTypes.INTEGER,
      references: { model: 'schedules', key: 'scheduleId' }
    },
    HSId: { type: DataTypes.INTEGER, references: { model: 'HoSo', key: 'HSId' } },
    status: DataTypes.ENUM('booked', 'completed', 'cancelled'),
    day: DataTypes.DATE
  }, { sequelize, modelName: 'Appointment' });
  return Appointment;
};