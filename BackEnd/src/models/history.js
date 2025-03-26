'use strict';
const {
  Model,
  BOOLEAN
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MedicalHistorie extends Model {
    static associate(models) {
      MedicalHistorie.belongsTo(models.Appointment, { foreignKey: 'appointmentId' });
      MedicalHistorie.belongsTo(models.Doctor, { foreignKey: 'doctorId' });
    }
  }
  MedicalHistorie.init({
    doctorId: {
      type: DataTypes.INTEGER,
      references: { model: 'Doctors', key: 'doctorId' }
    },
    appointmentId: {
      type: DataTypes.INTEGER,
      references: { model: 'Appointments', key: 'appointmentId' }
    },
    diagnosis: DataTypes.STRING,
    doctorNotes: DataTypes.STRING,
  }, { sequelize, modelName: 'MedicalHistorie' });
  return MedicalHistorie;
};
