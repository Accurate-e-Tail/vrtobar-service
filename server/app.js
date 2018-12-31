const db = require('./db/db');
const path = require('path');
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const app = express();

const categoriesRouter = require('./routes/category.routes');
const productsRouter = require('./routes/product.routes');

// STATIC FILES
app.use(express.static(path.join(__dirname, '..', 'public')));

// MIDDLEWARE
app.use(morgan('dev'));
app.use(cors());

// ROUTES
app.use('/categories', categoriesRouter);
app.use('/products', productsRouter);

// 404
app.use((req, res) => {
  res.status(404).send('Not found');
});


module.exports = app;
