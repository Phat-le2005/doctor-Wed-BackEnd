'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('rooms', {
      roomId: { allowNull: false, autoIncrement: true, primaryKey: true, type: Sequelize.INTEGER },
      roomNumber: { type: Sequelize.INTEGER, unique: true },
      floor: { type: Sequelize.INTEGER },
      roomDescription: { type: Sequelize.STRING },
      toa:{type: Sequelize.STRING},
      createdAt: { allowNull: false, type: Sequelize.DATE, defaultValue: Sequelize.NOW },
      updatedAt: { allowNull: false, type: Sequelize.DATE, defaultValue: Sequelize.NOW }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('rooms');
  }
};