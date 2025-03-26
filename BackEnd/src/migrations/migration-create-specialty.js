'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Specialties', {
      specialtyId: { allowNull: false, autoIncrement: true, primaryKey: true, type: Sequelize.INTEGER },
      specialtyName: { type: Sequelize.STRING },
      specialtyDescription: { type: Sequelize.TEXT },
      specialtyImage: { type: Sequelize.STRING },
      departmentId: { type: Sequelize.INTEGER, references: { model: 'Departments', key: 'departmentId' }, onDelete: 'CASCADE' },
      createdAt: { allowNull: false, type: Sequelize.DATE, defaultValue: Sequelize.NOW },
      updatedAt: { allowNull: false, type: Sequelize.DATE, defaultValue: Sequelize.NOW }
    });

  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Specialties');
  }
};