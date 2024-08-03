// models/position.js
const { DataTypes } = require('sequelize');
const sequelize = require('../utils/db');

const Position = sequelize.define('Position', {
  position_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  timestamps: false,
});

module.exports = Position;
