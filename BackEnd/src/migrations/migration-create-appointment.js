'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Appointment', {
      appointmentId: { allowNull: false, autoIncrement: true, primaryKey: true, type: Sequelize.INTEGER },
      userId: { type: Sequelize.INTEGER, references: { model: 'User', key: 'userId' }, onDelete: 'CASCADE' },
      scheduleId: { type: Sequelize.INTEGER, references: { model: 'Schedule', key: 'scheduleId' }, onDelete: 'CASCADE' },
      hoSoId: { type: Sequelize.INTEGER, references: { model: 'HoSo', key: 'HSId' }, onDelete: 'CASCADE' }, // Thêm hoSoId
      status: { type: Sequelize.ENUM('booked', 'completed', 'cancelled'), defaultValue: 'booked' },
      createdAt: { allowNull: false, type: Sequelize.DATE, defaultValue: Sequelize.NOW },
      updatedAt: { allowNull: false, type: Sequelize.DATE, defaultValue: Sequelize.NOW }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Appointment');
  }
};