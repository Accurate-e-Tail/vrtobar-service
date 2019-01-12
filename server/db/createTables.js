const Sequelize = require('sequelize');
const CategoryModel = require('./../models/category.model.js');
const ProductModel = require('./../models/product.model.js');
const faker = require('faker');

const sequelize = new Sequelize('amazon', 'root', 'student', {
  host: 'localhost',
  dialect: 'postgres',
  pool: {
    max: 10,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
})

const Product = ProductModel(sequelize, Sequelize)

const CategoryTag = sequelize.define('category_tag', {})
const Category = CategoryModel(sequelize, Sequelize)

Category.belongsToMany(Product, {through: CategoryTag, unique: false})



sequelize.sync({force: true})
  .then(()=> {
    console.log('Database and tables created!');
  })


// Create 20 categories and 100 products
const categoryPromises = [];
const categoryNames = ['electronics', 'clothes', 'games', 'appliances', 'books'];

for (let i = 0; i < 5; i++) {
  categoryPromises.push(Category.create({ category: categoryNames[i] }));
}

module.exports = {
    Product,
    Category
  }