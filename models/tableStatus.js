// models/tableStatus.js
const { DataTypes } = require('sequelize');
const sequelize = require('../utils/db');

const TableStatus = sequelize.define('tablestatus', {
  status_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  status_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  timestamps: false,
});

module.exports = TableStatus;
