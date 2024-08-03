// models/table.js
const { DataTypes } = require('sequelize');
const sequelize = require('../utils/db');
const Business = require('./business.js');
const TableCategory = require('./tableCategory');
const TableStatus = require('./tableStatus');

const Table = sequelize.define('Table', {
  table_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  business_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Business,
      key: 'business_id',
    },
  },
  table_number: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  category_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: TableCategory,
      key: 'category_id',
    },
  },
  status_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: TableStatus,
      key: 'status_id',
    },
  },
}, {
  timestamps: false,
});

module.exports = Table;
