const faker = require('faker');

const { Category } = require('../models/category.model');
const { Product } = require('../models/product.model');

// Create 20 categories and 100 products
const categoryPromises = [];
const categoryNames = ['electronics', 'clothes', 'games', 'appliances', 'books'];

for (let i = 0; i < 5; i++) {
  categoryPromises.push(Category.create({ category: categoryNames[i] }));
}

Promise.all(categoryPromises)
  .then((categories) => {
    const productPromises = [];
    let productName;
    let productDescription;

    for (let i = 0; i < categories.length; i++) {
      for (let j = 1; j <= 20; j++) {
        productName = faker.commerce.productName();
        productDescription = faker.lorem.paragraph();
        productPromises.push(Product.create({
          name: productName.toLowerCase(),
          description: productDescription,
          categoryId: categories[i].id,
        }));
      }
    }

    Promise.all(productPromises)
      .then((products) => {
        console.log(`Created ${products.length} products.`);
      })
      .catch(err => console.log('Error: Products', err));
  })
  .catch(err => console.log('Error: Categories', err));
