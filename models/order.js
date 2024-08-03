// models/order.js
const { DataTypes } = require('sequelize');
const sequelize = require('../utils/db');
const Table = require('./table');
const User = require('./user');

const Order = sequelize.define('Order', {
  order_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  table_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Table,
      key: 'table_id',
    },
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: User,
      key: 'user_id',
    },
  },
  order_date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  total_amount: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
}, {
  timestamps: false,
});

module.exports = Order;
