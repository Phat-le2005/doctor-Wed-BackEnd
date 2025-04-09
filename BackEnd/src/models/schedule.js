'use strict';
const { Model, Op } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Schedule extends Model {
    static associate(models) {
      Schedule.belongsTo(models.Doctor, { foreignKey: 'doctorId' });
      Schedule.belongsTo(models.Room, { foreignKey: 'roomId' });
      Schedule.hasMany(models.Appointment, { foreignKey: 'scheduleId' });
      Schedule.belongsTo(models.Specialty, {
        foreignKey: 'specialtyId',
        as: 'specialty' // tuỳ chọn alias
      });
    }
  }

  Schedule.init({
    scheduleId: {  // Sử dụng 'departmentId' làm khóa chính
      type: DataTypes.INTEGER,
      primaryKey: true,  // Đảm bảo 'departmentId' là khóa chính
      autoIncrement: true // Tự động tăng giá trị cho 'departmentId'
    },
    currentNumber: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      validate: {
        min: 0
      }
    },
    maxNumber: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 1
      }
    },
    doctorId: {
      type: DataTypes.INTEGER,
      references: { model: 'doctors', key: 'doctorId' },
      allowNull: false
    },
    roomId: {
      type: DataTypes.INTEGER,
      references: { model: 'rooms', key: 'roomId' },
      allowNull: false
    },
    startTime: {
      type: DataTypes.TIME,
      allowNull: false
    },
    endTime: {
      type: DataTypes.TIME,
      allowNull: false
    },
    workDay: {
      type: DataTypes.DATE,
      allowNull: false
    },
    isAvailable: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    },
    specialtyId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, { 
    sequelize, 
    modelName: 'Schedule',
      tableName: 'schedules',
    hooks: {
      beforeValidate: (schedule) => {
        if (schedule.startTime >= schedule.endTime) {
          throw new Error("startTime phải nhỏ hơn endTime!");
        }
      },
      beforeUpdate: (schedule) => {
        if (schedule.currentNumber > schedule.maxNumber) {
          throw new Error("Số lượng bệnh nhân hiện tại không thể vượt quá số lượng tối đa!");
        }
      },
      beforeCreate: async (schedule) => {
        const overlappingSchedule = await Schedule.findOne({
          where: {
            doctorId: schedule.doctorId,
            roomId: schedule.roomId,
            workDay: schedule.workDay,
            [Op.or]: [
              { startTime: { [Op.between]: [schedule.startTime, schedule.endTime] } },
              { endTime: { [Op.between]: [schedule.startTime, schedule.endTime] } }
            ]
          }
        });

        if (overlappingSchedule) {
          throw new Error("Lịch khám bị trùng với một lịch khác!");
        }
      }
    }
  });

  return Schedule;
};
