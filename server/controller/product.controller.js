const Sequelize = require('sequelize');
const { Product } = require('..//db/createTables.js');
const { Category } = require('../db/createTables.js');

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

        // res.status(200).send({ products });
      })
      .catch((err) => {
        res.status(500).send({ err });
      });
  }
};

const post = (req, res) => {
  // const categoryParam = req.params.category.toLowerCase();
  // const { query } = req.params;
  console.log(req.body);

  console.log("life is hard", req.body);
  Product.create({
      name: req.body.name,
      categoryId: 1,
    })
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((error) => {
      res.status(500).send(error);
    })

}

// localhost:3003/products/:id
const update = (req, res, next) => {
  // const categoryParam = req.params.category.toLowerCase();
  // const { query } = req.params;
  console.log(req.body);

  console.log("life is really hard", req.body);
  console.log("mango", req.params);
  // Product.create({
  //     name: req.body.name,
  //     categoryId: 1,
  //   })
  //   .then((data) => {
  //     res.status(200).send(data);
  //   })
  //   .catch((error) => {
  //     res.status(500).send(error);
  //   })

    Product.update(
      {name: req.body.name},
      {where: {id: req.params.id}}
    )
    .then(function(rowsUpdated) {
      res.json(rowsUpdated)
    })
    .catch(next)

}



module.exports = {
  get,
  post, 
  update
};
