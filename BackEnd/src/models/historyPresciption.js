'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class HistoryPrescription extends Model {
    static associate(models) {}
  }
  HistoryPrescription.init({
    historyId: {
      type: DataTypes.INTEGER,
      references: { model: 'histories', key: 'historyId' }
    },
    prescriptionId: {
      type: DataTypes.INTEGER,
      references: { model: 'prescriptions', key: 'prescriptionId' }
    }
  }, {
    sequelize,
    modelName: 'HistoryPrescription',
    tableName: 'history_prescriptions',
    timestamps: false
  });
  return HistoryPrescription;
};