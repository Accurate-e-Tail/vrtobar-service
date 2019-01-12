const { connection: db } = require('./db/db');
const path = require('path');
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

const categoriesRouter = require('./routes/category.routes');
const productsRouter = require('./routes/product.routes');

// STATIC FILES
app.use(express.static(path.join(__dirname, '..', 'public')));

// MIDDLEWARE
app.use(morgan('dev'));
app.use(bodyParser.urlencoded());
app.use(bodyParser.json())

app.use(cors());

// ROUTES
app.use('/categories', categoriesRouter);
app.use('/products', productsRouter);

// app.post('/products', (req, res) => {
//   console.log(req.body);
//   var values = [];
//   values.push(req.body.name);
//   console.log(values)
//   var sql = `INSERT INTO products (name) VALUES ($1) RETURNING *`;
//   db.query(sql, {bind: values}, (err, data) => {
//     if (err) {
//       console.log("MUFFINS");
//       throw (err);
//     }
//     response.status(201).send(`User added with ID: ${data.name}`)
//   })
// })
// Create / POST - create a new item
//post a new product
// Update / PUT - update an item
//update a new category
// Delete / DELETE - delete an item
//delete a product

// 404
app.use((req, res) => {
  res.status(404).send('Not found');
});


module.exports = app;
