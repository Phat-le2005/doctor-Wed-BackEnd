'use strict';
const {
  Model,
  BOOLEAN
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Schedule extends Model {
    static associate(models) {
      Schedule.belongsTo(models.Doctor, { foreignKey: 'doctorId' });
      Schedule.belongsTo(models.Room, { foreignKey: 'roomId' });
      Schedule.hasMany(models.Appointment, { foreignKey: 'scheduleId' });
    }
  }
  Schedule.init({
    currentNumber: DataTypes.INTEGER,
    maxNumber: DataTypes.INTEGER,
    doctorId: {
      type: DataTypes.INTEGER,
      references: { model: 'Doctors', key: 'doctorId' }
    },
    startTime: DataTypes.TIME,
    endTime: DataTypes.TIME,
    roomId: {
      type: DataTypes.INTEGER,
      references: { model: 'Rooms', key: 'roomId' }
    },
    workDay: DataTypes.DATE,
    is_available: DataTypes.BOOLEAN
  }, { sequelize, modelName: 'Schedule' });
  return Schedule;
};