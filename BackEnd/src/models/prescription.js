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
      historyId: {
        type: DataTypes.INTEGER,
        references: { model: 'History', key: 'historyId' }
      },
      medicine_name: DataTypes.STRING,
      dosage: DataTypes.STRING,
      usage_instruction: DataTypes.STRING
    }, { sequelize, modelName: 'Prescription' });
    return Prescription;
  };