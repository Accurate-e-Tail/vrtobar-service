const faker = require('faker');

const { Category } = require('../models/category.model');
const { Product } = require('../models/product.model');

// Create 20 categories and 100 products
const categoryPromises = [];
let categoryName;

for (let i = 0; i < 5; i++) {
  categoryName = faker.commerce.department();
  categoryPromises.push(Category.create({ category: categoryName }));
}

Promise.all(categoryPromises)
  .then((categories) => {
    const productPromises = [];
    let productName;
    let productDescription;
    for (let j = 1; j <= 20; j++) {
      productName = faker.commerce.productName();
      productDescription = faker.lorem.paragraph();
      productPromises.push(Product.create({ name: productName, description: productDescription, categoryId: categories[0].id }));
    }
    Promise.all(productPromises)
      .then((products) => {
        console.log('Created products');
      })
      .catch(err => console.log('Error: Products'));
  })
  .catch(err => console.log('Error: Categories'));
