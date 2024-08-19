// models/tableCategory.js
const { DataTypes } = require('sequelize');
const sequelize = require('../utils/db');

const TableCategory = sequelize.define('tablecategory', {
  category_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  category_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  timestamps: false,
});

module.exports = TableCategory;
