'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('doctors', {
      doctorId: { allowNull: false, autoIncrement: true, primaryKey: true, type: Sequelize.INTEGER },
      doctorName: { type: Sequelize.STRING },
      sex: { type: Sequelize.BOOLEAN },
      phoneNumber: { type: Sequelize.STRING},
      doctorPass: { type: Sequelize.STRING },
      email: { type: Sequelize.STRING},
      doctorImage: { type: Sequelize.STRING },
      position: { type: Sequelize.STRING },
      introduce: { type: Sequelize.TEXT},
      HocVan:{type: Sequelize.TEXT},
      CongTac:{type: Sequelize.TEXT},
      createdAt: { allowNull: false, type: Sequelize.DATE, defaultValue: Sequelize.NOW },
      updatedAt: { allowNull: false, type: Sequelize.DATE, defaultValue: Sequelize.NOW }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('doctors');
  }
};