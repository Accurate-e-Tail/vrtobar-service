const stringify = require('csv-stringify');
const fs = require('fs');
const faker = require('faker');

let data = [];
let columns = {
  id: 'id',
  name: 'Name'
};

for (var i = 0; i < 100000; i++) {
  var name = faker.commerce.productName();
  data.push([i, name]);
}

stringify(data, { header: true, columns: columns }, (err, output) => {
  if (err) throw err;
  fs.writeFile('my.csv', output, (err) => {
    if (err) throw err;
    console.log('my.csv saved.');
  });
});


//     for (let i = 0; i < categories.length; i++) {
//       for (let j = 1; j <= 20; j++) {
//         productName = faker.commerce.productName();
//         productDescription = faker.lorem.paragraph();
//         productPromises.push(Product.create({
//           name: productName.toLowerCase(),
//           description: productDescription,
//           categoryId: categories[i].id,
//         }));
//       }
//     }