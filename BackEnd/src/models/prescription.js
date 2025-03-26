'use strict';
const {
  Model,
  BOOLEAN
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Prescription extends Model {
      static associate(models) {
        Prescription.belongsTo(models.MedicalHistorie, { foreignKey: 'historyId' });
      }
    }
    Prescription.init({
      historyId: {
        type: DataTypes.INTEGER,
        references: { model: 'Histories', key: 'historyId' }
      },
      medicine_name: DataTypes.STRING,
      dosage: DataTypes.STRING,
      usage_instruction: DataTypes.STRING
    }, { sequelize, modelName: 'Prescription' });
    return Prescription;
  };