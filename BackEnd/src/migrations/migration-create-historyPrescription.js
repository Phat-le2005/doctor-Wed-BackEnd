module.exports = {
    up: async (queryInterface, Sequelize) => {
      await queryInterface.createTable('history_prescriptions', {
        historyId: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: 'histories',
            key: 'historyId'
          },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
          primaryKey: true
        },
        prescriptionId: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: 'prescriptions',
            key: 'prescriptionId'
          },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
          primaryKey: true
        }
      });
    },
  
    down: async (queryInterface, Sequelize) => {
      await queryInterface.dropTable('history_prescriptions');
    }
  };