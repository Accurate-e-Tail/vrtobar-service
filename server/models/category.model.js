console.log('CATEGORY.MODEL.JS');
const Sequelize = require('sequelize');

const { connection } = require('../db/db');

const Category = connection.define('category', {
  category: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  image: {
    type: Sequelize.STRING,
    defaultValue: '',
  },
});

Category.sync({ force: true });

module.exports = {
  Category,
};
