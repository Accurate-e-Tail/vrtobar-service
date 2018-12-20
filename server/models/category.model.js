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

Category.sync();

module.exports = {
  Category,
};
