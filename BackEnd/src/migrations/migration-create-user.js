'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      userId: { allowNull: false, autoIncrement: true, primaryKey: true, type: Sequelize.INTEGER },
      email: { type: Sequelize.STRING, unique: true },
      password: { type: Sequelize.STRING },
      userName: { type: Sequelize.STRING },
      address: { type: Sequelize.STRING },
      dateOfBirth: { type: Sequelize.DATE },
      phoneNumber: { type: Sequelize.STRING },
      sex: { type: Sequelize.BOOLEAN },
      imageUser: { type: Sequelize.STRING },
      BHYT: { type: Sequelize.STRING },
      createdAt: { allowNull: false, type: Sequelize.DATE, defaultValue: Sequelize.NOW },
      updatedAt: { allowNull: false, type: Sequelize.DATE, defaultValue: Sequelize.NOW }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  }
};