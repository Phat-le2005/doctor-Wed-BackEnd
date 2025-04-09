'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
      await queryInterface.createTable('hosos', {
        HSId: { allowNull: false, autoIncrement: true, primaryKey: true, type: Sequelize.INTEGER },
        userId: { type: Sequelize.INTEGER, references: { model: 'users', key: 'userId' }, onDelete: 'CASCADE' },
        Name: { type: Sequelize.STRING },
        DateOfBirth: { type: Sequelize.DATE },
        phone: { type: Sequelize.STRING },
        Sex: { type: Sequelize.BOOLEAN },
        CMND: { type: Sequelize.STRING },
        email: { type: Sequelize.STRING, unique: true },
        Job: { type: Sequelize.STRING },
        QuocTich: { type: Sequelize.STRING },
        address: { type: Sequelize.STRING },
        danToc: { type: Sequelize.STRING },
        createdAt: { allowNull: false, type: Sequelize.DATE, defaultValue: Sequelize.NOW },
        updatedAt: { allowNull: false, type: Sequelize.DATE, defaultValue: Sequelize.NOW }
      });
    },
    async down(queryInterface, Sequelize) {
      await queryInterface.dropTable('hosos');
    }
  };