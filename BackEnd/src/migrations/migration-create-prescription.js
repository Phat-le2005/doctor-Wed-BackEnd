'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Prescription', {
      prescriptionId: { allowNull: false, autoIncrement: true, primaryKey: true, type: Sequelize.INTEGER },
      historyId: { type: Sequelize.INTEGER, references: { model: 'History', key: 'historyId' }, onDelete: 'CASCADE' },
      medicineName: { type: Sequelize.STRING },
      dosage: { type: Sequelize.STRING },
      usageInstruction: { type: Sequelize.STRING },
      createdAt: { allowNull: false, type: Sequelize.DATE, defaultValue: Sequelize.NOW }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Prescription');
  }
};