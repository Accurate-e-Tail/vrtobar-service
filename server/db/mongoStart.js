var mongoose = require('mongoose');
const faker = require('faker');

mongoose.connect('mongodb://localhost:27017/amazon');
    

// var db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function() {
//   // we're connected!
//   console.log("mongoose is connected!");
// });


var productSchema = new mongoose.Schema({
    id: Number,
    name: String
  });

var categorySchema = new mongoose.Schema({
    category: String
})


var Product = mongoose.model('Product', productSchema);
var Category = mongoose.model('Category', categorySchema);

var silence = new Product({ name: 'Silence' });
console.log(silence.name); // 'Silence'

silence.save(function (err, data) {
    if (err) return console.error(err);
    console.log(data);
  });

  const categoryPromises = [];
const categoryNames = ['electronics', 'clothes', 'games', 'appliances', 'books'];

for (let i = 0; i < 5; i++) {
  categoryPromises.push(new Category({ category: categoryNames[i] }));
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
      for (let j = 1; j <= 10000; j++) {
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

// var products = [];
// for (var i = 0; i < 50000; i++) {
//     products.push(
//         {
//             id: i, 
//             name: faker.commerce.productName()
//         }
//         );
// }


//   Product.insertMany(products);
//mongo import 
//for csv

// Product.create(products)
// .then(Product.create(products))
// .then(function() {
//     console.log("this is working");
//     mongoose.connection.close();
// })

const createProducts = async() => {
    try {
      await(Promise.all(categoryPromises))
      for (var i = 1; i < 201; i++) {
        await Product.insertMany(productsGlobal);
        var numInserted = i * 50000
        console.log('now have inserted ', numInserted);
      }
      const endTime = Date.now()
      var timeDiff= new Date(endTime - startTime);
      console.log("End Time: ", endTime);
      console.log("Time took: ", timeDiff);
    } catch (err) {
      console.log("error")
    } finally {
    mongoose.connection.close();
    }
  }

  createProducts();

// mongoimport --db amazon --collection products --file my.csv
// mongoimport --db amazon --collection products --type csv --headerline --file /server/db/my.csv



