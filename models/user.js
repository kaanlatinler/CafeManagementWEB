// models/user.js
const { DataTypes } = require('sequelize');
const sequelize = require('../utils/db');
const Business = require('./business.js');
const Position = require('./position');

const User = sequelize.define('User', {
  user_id: {
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
  first_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  last_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  position_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Position,
      key: 'position_id',
    },
  },
  salary: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  timestamps: false,
});

module.exports = User;
