'use strict';
const {
  Model,
  BOOLEAN
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Room extends Model {
    static associate(models) {
      Room.hasMany(models.Schedule, { foreignKey: 'roomId' });
    }
  }
  Room.init({
    roomNumber: { type: DataTypes.INTEGER, unique: true },
    floor: DataTypes.INTEGER,
    roomDescription: DataTypes.STRING
  }, { sequelize, modelName: 'Room' });
  return Room;
};
