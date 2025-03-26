'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Appointments', {
      appointmentId: { allowNull: false, autoIncrement: true, primaryKey: true, type: Sequelize.INTEGER },
      userId: { type: Sequelize.INTEGER, references: { model: 'Users', key: 'userId' }, onDelete: 'CASCADE' },
      scheduleId: { type: Sequelize.INTEGER, references: { model: 'Schedules', key: 'scheduleId' }, onDelete: 'CASCADE' },
      status: { type: Sequelize.ENUM('booked', 'completed', 'cancelled'), defaultValue: 'booked' },
      createdAt: { allowNull: false, type: Sequelize.DATE, defaultValue: Sequelize.NOW },
      updatedAt: { allowNull: false, type: Sequelize.DATE, defaultValue: Sequelize.NOW }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Appointments');
  }
};