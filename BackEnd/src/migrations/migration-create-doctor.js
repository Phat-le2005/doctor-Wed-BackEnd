'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Doctors', {
      doctorId: { allowNull: false, autoIncrement: true, primaryKey: true, type: Sequelize.INTEGER },
      doctorName: { type: Sequelize.STRING },
      sex: { type: Sequelize.BOOLEAN },
      phoneNumber: { type: Sequelize.STRING, unique: true },
      doctorPass: { type: Sequelize.STRING },
      email: { type: Sequelize.STRING, unique: true },
      specialtyId: { type: Sequelize.INTEGER, references: { model: 'Specialties', key: 'specialtyId' }, onDelete: 'CASCADE' },
      doctorImage: { type: Sequelize.STRING },
      doctorDescription: { type: Sequelize.STRING },
      position: { type: Sequelize.STRING },
      createdAt: { allowNull: false, type: Sequelize.DATE, defaultValue: Sequelize.NOW },
      updatedAt: { allowNull: false, type: Sequelize.DATE, defaultValue: Sequelize.NOW }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Doctors');
  }
};