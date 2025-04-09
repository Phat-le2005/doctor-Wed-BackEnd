'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('doctorspecialties', {
      doctorId: {type:Sequelize.INTEGER},
      specialtyId: {type:Sequelize.INTEGER},
      createdAt: { allowNull: false, type: Sequelize.DATE, defaultValue: Sequelize.NOW }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('doctorspecialties');
  }
};