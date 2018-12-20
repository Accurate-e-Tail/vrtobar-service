// const db = require('./db/db');
const path = require('path');
const express = require('express');
const morgan = require('morgan');

const app = express();
const PORT = 3003;

// STATIC FILES
app.use(express.static(path.join(__dirname, '..', 'public')));

// MIDDLEWARE
app.use(morgan('dev'));

// ROUTES

// 404
app.use((req, res) => {
  res.status(404).send('Not found');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
