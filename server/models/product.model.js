const Sequelize = require('sequelize');

const { connection } = require('../db/db');
const { Category } = require('./category.model');

const Product = connection.define('product', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  image: {
    type: Sequelize.STRING,
    defaultValue: '',
  },
});

Product.belongsTo(Category);

Product.sync();

module.exports = {
  Product,
};
