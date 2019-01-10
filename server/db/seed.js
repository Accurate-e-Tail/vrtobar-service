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

// // const Product = ProductModel(sequelize, Sequelize)

// // const CategoryTag = sequelize.define('category_tag', {})
// // const Category = CategoryModel(sequelize, Sequelize)

// // Category.belongsToMany(Product, {through: CategoryTag, unique: false})



// // sequelize.sync({force: true})
// //   .then(()=> {
// //     console.log('Database and tables created!');
// //   })


// // Create 20 categories and 100 products
// const categoryPromises = [];
// const categoryNames = ['electronics', 'clothes', 'games', 'appliances', 'books'];

// for (let i = 0; i < 5; i++) {
//   categoryPromises.push(Category.create({ category: categoryNames[i] }));
// }

// Promise.all(categoryPromises)
//   .then((categories) => {
//     const productPromises = [];
//     let productName;

//     for (let i = 0; i < categories.length; i++) {
//       for (let j = 1; j <= 20; j++) {
//         productName = faker.commerce.productName();
//         productPromises.push(Product.create({
//           name: productName.toLowerCase(),
//           categoryId: categories[i].id,
//         }));
//       }
//     }

//     Promise.all(productPromises)
//       .then((products) => {
//         console.log(`Created ${products.length} products BLEH BLEH BLEH.`);
//       })
//       .catch(err => console.log('Error: Products', err));
//   })
//   .catch(err => console.log('Error: Categories', err));
  // .then(()=> {
  //   sequelize.query('COPY products FROM ‘./my.csv’ WITH FORMAT csv', {
  //     model: ProductModel,
  //     mapToModel: true // pass true here if you have any mapped fields
  //   })
  // }).then(projects => {
  //   // Each record will now be an instance of Project
  //   console.log(projects);
  // })

  // module.exports = {
  //   Product,
  //   Category
  // }

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
    const productPromises = [];
    let productName;

    for (let i = 0; i < categories.length; i++) {
      for (let j = 1; j <= 10000; j++) {
        productName = faker.commerce.productName();
        productDescription = faker.lorem.paragraph();
        productPromises.push(Product.create({
          name: productName.toLowerCase(),
          categoryId: categories[i].id,
        }));
      }
    }

  // Product.bulkCreate(productPromises)
  //   .then(() => { // Notice: There are no arguments here, as of right now you'll have to...
  //   return Product.findAll();
  // }).then(products => {
  //   console.log("ppppppppppppppppp", products) // ... in order to get the array of user objects
  // })

    Promise.all(productPromises)
      .then((products) => {
        console.log(`Created ${products.length} products.`);
      })
      .catch(err => console.log('Error: Products', err));
  })
  .catch(err => console.log('Error: Categories', err));
