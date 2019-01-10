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
    // unique: true, 
    allowNull: false,
  },
});
const categoryPromises = [];
const categoryNames = ['electronics', 'clothes', 'games', 'appliances', 'books'];

for (let i = 0; i < 5; i++) {
  categoryPromises.push(Category.create({ category: categoryNames[i] }));
}
var productsGlobal = [];
var startTime = null;


Promise.all(categoryPromises)
  .then((categories) => {
    startTime = Date.now();
    console.log("Start Time: ", startTime);
    // const productPromises = [];
    const products = [];
    let productName;

    for (let i = 0; i < categories.length; i++) {
      for (let j = 1; j <= 100000; j++) {
        productName = faker.commerce.productName();
        // productDescription = faker.lorem.paragraph();
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
    productsGlobal = products;
    // return products;
      
  })
  // .then((products) => {
  //   // for (var i = 0; i < 20; i++) {
  //     console.log("BULK CREATE IS RUNNING")
  //     Product.bulkCreate(products);
  //     console.log("BULK CREATE IS RUNNING 2")
  //   // }
  //   return products;
  // })
  // .then((products) => {
  //   // for (var i = 0; i < 20; i++) {
  //     console.log("BULK CREATE IS RUNNING second round")
  //     Product.bulkCreate(products);
  //     console.log("BULK CREATE IS RUNNING second round")
  //   // }
  //   return products;
  // })
  .catch(err => console.log('Error: Categories', err))


  const createProducts = async() => {
    try {
      await(Promise.all(categoryPromises))
      for (var i = 1; i < 21; i++) {
        await Product.bulkCreate(productsGlobal);
        var numInserted = i * 500000
        console.log('now have inserted ', numInserted);
      }
      // await Product.bulkCreate(productsGlobal);
      // console.log('inserted 500,000')
      // await Product.bulkCreate(productsGlobal);
      // console.log('...now have inserted 1,000,000')
      // await Product.bulkCreate(productsGlobal);
      // console.log('...now have inserted 1,500,000')
      // await Product.bulkCreate(productsGlobal);
      // console.log('...now have inserted 2,000,000')
      // await Product.bulkCreate(productsGlobal);
      // console.log('...now have inserted 2,500,000')
      // await Product.bulkCreate(productsGlobal);
      // console.log('...now have inserted 3,000,000')
      // await Product.bulkCreate(productsGlobal);
      // console.log('...now have inserted 3,500,000')
      // await Product.bulkCreate(productsGlobal);
      // console.log('...now have inserted 4,000,000')
      // await Product.bulkCreate(productsGlobal);
      // console.log('...now have inserted 4,500,000')
      // await Product.bulkCreate(productsGlobal);
      // console.log('...now have inserted 5,000,000')
      // await Product.bulkCreate(productsGlobal);
      // console.log('...now have inserted 5,500,000')
      // await Product.bulkCreate(productsGlobal);
      // console.log('...now have inserted 6,000,000')
      // await Product.bulkCreate(productsGlobal);
      // console.log('...now have inserted 1,300,000')
      // await Product.bulkCreate(productsGlobal);
      // console.log('...now have inserted 1,400,000')
      // await Product.bulkCreate(productsGlobal);
      // console.log('...now have inserted 1,500,000')
      // await Product.bulkCreate(productsGlobal);
      // console.log('...now have inserted 1,600,000')
      // await Product.bulkCreate(productsGlobal);
      // console.log('...now have inserted 1,700,000')
      // await Product.bulkCreate(productsGlobal);
      // console.log('...now have inserted 1,800,000')
      // await Product.bulkCreate(productsGlobal);
      // console.log('...now have inserted 1,900,000')
      // await Product.bulkCreate(productsGlobal);
      // console.log('...now have inserted 2,000,000')
      const endTime = Date.now()
      var timeDiff= new Date(endTime - startTime);
      console.log("End Time: ", endTime);
      console.log("Time took: ", timeDiff);
    } catch (err) {
      console.log("error")
    } finally {
      process.exit()
    }
  }

  createProducts();

  //Wed Dec 31 1969 16:14:38 GMT-0800 (Pacific Standard Time)
  // (1547152482708 - 1547151603869)