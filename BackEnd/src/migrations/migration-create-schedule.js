'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Schedules', {
      scheduleId: { allowNull: false, autoIncrement: true, primaryKey: true, type: Sequelize.INTEGER },
      doctorId: { type: Sequelize.INTEGER, references: { model: 'Doctors', key: 'doctorId' }, onDelete: 'CASCADE' },
      roomId: { type: Sequelize.INTEGER, references: { model: 'Rooms', key: 'roomId' }, onDelete: 'CASCADE' },
      workDay: { type: Sequelize.DATEONLY },
      startTime: { type: Sequelize.TIME },  
      endTime: { type: Sequelize.TIME }, 
      isAvailable: { type: Sequelize.BOOLEAN, defaultValue: true },
      createdAt: { allowNull: false, type: Sequelize.DATE, defaultValue: Sequelize.NOW },
      updatedAt: { allowNull: false, type: Sequelize.DATE, defaultValue: Sequelize.NOW }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Schedules');
  }
};