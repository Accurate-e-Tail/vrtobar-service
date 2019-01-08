const { Category } = require('../models/category.model');

const getAll = (req, res) => {
  console.log('Inside getAll category.controller.js');
  Category.findAll()
    .then((categories) => {
      res.status(200).send({ categories });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send({ err });
    });
};

module.exports = {
  getAll,
};
