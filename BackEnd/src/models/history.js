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
    }
  }
  History.init({
    doctorId: {
      type: DataTypes.INTEGER,
      references: { model: 'Doctor', key: 'doctorId' }
    },
    appointmentId: {
      type: DataTypes.INTEGER,
      references: { model: 'Appointment', key: 'appointmentId' }
    },
    diagnosis: DataTypes.STRING,
    doctorNotes: DataTypes.STRING,
  }, { sequelize, modelName: 'History' });
  return History;
};
