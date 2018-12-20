const { Category } = require('../models/category.model');

const getAll = (req, res) => {
  Category.findAll()
    .then((categories) => {
      res.status(200).send({ categories });
    })
    .catch((err) => {
      res.status(500).send({ err });
    });
};

module.exports = {
  getAll,
};
