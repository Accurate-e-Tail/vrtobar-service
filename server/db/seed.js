const Sequelize = require('sequelize');
// const Category = require('./../models/category.model.js');
// const ProductModel = require('./../models/product.model.js');
// const faker = require('faker');

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

const faker = require('faker');

// const { Category } = require('../models/category.model');
// const { Product } = require('../models/product.model');

// Create 20 categories and 100 products
const Category = sequelize.define('category', {
  category: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

const Product = sequelize.define('product', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});
const categoryPromises = [];
const categoryNames = ['electronics', 'clothes', 'games', 'appliances', 'books'];

for (let i = 0; i < 5; i++) {
  categoryPromises.push(Category.create({ category: categoryNames[i] }));
}


Promise.all(categoryPromises)
  .then((categories) => {
    // const productPromises = [];
    const products = [];
    let productName;

    for (let i = 0; i < categories.length; i++) {
      for (let j = 1; j <= 10000; j++) {
        productName = faker.commerce.productName();
        productDescription = faker.lorem.paragraph();
        // productPromises.push(Product.create({
        //   name: productName.toLowerCase(),
        //   categoryId: categories[i].id,
        // }));
        products.push({
          name: productName.toLowerCase(),
          categoryId: categories[i].id,
        })
      }
    }
    return products;
      
  })
  .then((products) => {
    // for (var i = 0; i < 20; i++) {
      console.log("BULK CREATE IS RUNNING")
      Product.bulkCreate(products);
      console.log("BULK CREATE IS RUNNING 2")
    // }
    return products;
  })
  .then((products) => {
    // for (var i = 0; i < 20; i++) {
      console.log("BULK CREATE IS RUNNING second round")
      Product.bulkCreate(products);
      console.log("BULK CREATE IS RUNNING second round")
    // }
    return products;
  })
  .catch(err => console.log('Error: Categories', err))


  // const createProducts = async() => {
  //   try {
  //     let myproducts = await(Promise.all(categoryPromises))
  //     await Product.bulkCreate(myproducts);
  //     console.log('inserted batch 1')
  //     await Product.bulkCreate(myproducts);
  //     await Product.bulkCreate(myproducts);
  //   } catch (err) {
  //     console.l
  //   } finally {
  //     process.exit()
  //   }
  // }

  // createProducts();