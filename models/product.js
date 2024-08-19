// models/product.js
const { DataTypes } = require('sequelize');
const sequelize = require('../utils/db');
const Business = require('./business');
const ProductCategory = require('./productCategory');

const Product = sequelize.define('products', {
  product_id: {
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
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  stock_quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  category_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: ProductCategory,
      key: 'category_id',
    },
  },
}, {
  timestamps: false,
});

module.exports = Product;
