'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Department', {
      departmentId: { allowNull: false, autoIncrement: true, primaryKey: true, type: Sequelize.INTEGER },
      departmentName: { type: Sequelize.STRING },
      imageDepartment:{type: Sequelize.STRING},
      departmentDescription:{type: Sequelize.STRING},
      createdAt: { allowNull: false, type: Sequelize.DATE, defaultValue: Sequelize.NOW },
      updatedAt: { allowNull: false, type: Sequelize.DATE, defaultValue: Sequelize.NOW }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Department');
  }
};