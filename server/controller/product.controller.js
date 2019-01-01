const Sequelize = require('sequelize');
const { Product } = require('../models/product.model');
const { Category } = require('../models/category.model');

const get = (req, res) => {
  const categoryParam = req.params.category.toLowerCase();
  const { query } = req.params;

  if (categoryParam === 'all departments') {
    Product.findAll({
      where: {
        name: {
          [Sequelize.Op.like]: `%${query.toLowerCase()}%`,
        },
      },
    })
      .then((products) => {
        res.status(200).send({ products });
      })
      .catch((err) => {
        res.status(500).send({ err });
      });
  } else {
    Category.findOne({ where: { category: categoryParam } })
      .then((category) => {
        if (category) {
          return Product.findAll({
            where: {
              categoryId: category.id,
              name: {
                [Sequelize.Op.like]: `%${query.toLowerCase()}%`,
              },
            },
          });
        }

        return [];
      })
      .then((products) => {
        res.status(200).send({ products });
      })
      .catch((err) => {
        res.status(500).send({ err });
      });
  }
};

module.exports = {
  get,
};
