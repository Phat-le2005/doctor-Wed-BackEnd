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
      Appointment.hasOne(models.MedicalHistorie, { foreignKey: 'appointmentId' });
    }
  }
  Appointment.init({
    userId: {
      type: DataTypes.INTEGER,
      references: { model: 'Users', key: 'userId' }
    },
    scheduleId: {
      type: DataTypes.INTEGER,
      references: { model: 'Schedules', key: 'scheduleId' }
    },
    status: DataTypes.ENUM('booked', 'completed', 'cancelled'),
    date: DataTypes.DATE
  }, { sequelize, modelName: 'Appointment' });
  return Appointment;
};