'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('History', {
      historyId: { allowNull: false, autoIncrement: true, primaryKey: true, type: Sequelize.INTEGER },
      appointmentId: { type: Sequelize.INTEGER, references: { model: 'Appointment', key: 'appointmentId' }, onDelete: 'CASCADE' },
      doctorId: { type: Sequelize.INTEGER, references: { model: 'Doctor', key: 'doctorId' } },
      diagnosis: { type: Sequelize.TEXT },
      doctorNotes: { type: Sequelize.TEXT },
      createdAt: { allowNull: false, type: Sequelize.DATE, defaultValue: Sequelize.NOW }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('History');
  }
};