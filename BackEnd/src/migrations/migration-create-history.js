'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('histories', {
      historyId: { allowNull: false, autoIncrement: true, primaryKey: true, type: Sequelize.INTEGER },
      appointmentId: { type: Sequelize.INTEGER, references: { model: 'appointments', key: 'appointmentId' }, onDelete: 'CASCADE' },
      doctorId: { type: Sequelize.INTEGER, references: { model: 'doctors', key: 'doctorId' } },
      diagnosis: { type: Sequelize.TEXT },
      doctorNotes: { type: Sequelize.TEXT },
      
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('histories');
  }
};