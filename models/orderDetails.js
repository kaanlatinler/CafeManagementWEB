// models/orderDetails.js
const { DataTypes } = require('sequelize');
const sequelize = require('../utils/db');
const Order = require('./order');
const Product = require('./product');

const OrderDetails = sequelize.define('OrderDetails', {
  order_detail_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  order_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Order,
      key: 'order_id',
    },
  },
  product_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Product,
      key: 'product_id',
    },
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  price: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
}, {
  timestamps: false,
});

module.exports = OrderDetails;
