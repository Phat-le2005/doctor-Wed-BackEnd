'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('prescriptions', {
      prescriptionId: { allowNull: false, autoIncrement: true, primaryKey: true, type: Sequelize.INTEGER },
      historyId: { type: Sequelize.INTEGER, references: { model: 'histories', key: 'historyId' }, onDelete: 'CASCADE' },
      medicineName: { type: Sequelize.STRING },
      dosage: { type: Sequelize.STRING },
      usageInstruction: { type: Sequelize.STRING },
      createdAt: { allowNull: false, type: Sequelize.DATE, defaultValue: Sequelize.NOW }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('prescriptions');
  }
};