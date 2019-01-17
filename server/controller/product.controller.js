const Sequelize = require('sequelize');
const { Product } = require('../db/createTables.js');
const { Category } = require('../db/createTables.js');

const get = (req, res) => {
  const categoryParam = req.params.category.toLowerCase();
  const { query } = req.params;

  if (categoryParam === 'all departments') {
    var startTime = Date.now();
    Product.findAll({
      where: {
        name: {
          [Sequelize.Op.like]: `%${query.toLowerCase()}%`,
        },
      },
    })
      .then((products) => {
        var endTime = Date.now();
        console.log(endTime - startTime);
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
        var endTime = Date.now();
        console.log(endTime - startTime);
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

  // insert into products (name, "createdAt", "updatedAt") values ('alex', NOW(), NOW());
  var startTime = Date.now();
  Product.create({
      name: req.body.name,
      categoryId: 1,
    })
    .then((data) => {
      var endTime = Date.now();
      console.log(endTime - startTime);
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
  var startTime = Date.now();
    Product.update(
      {name: req.body.name},
      {where: {id: req.params.id}}
    )
    .then(function(rowsUpdated) {
      var endTime = Date.now();
      console.log(endTime - startTime);
      res.json(rowsUpdated)
    })
    .catch(next)

}

const del = (req, res) => {
  var startTime = Date.now();
  Product.destroy({
    where: {
      id: req.params.id
    }
  })
  .then(() => {
    var endTime = Date.now();
    console.log(endTime - startTime);
    res.send('done');
  })
}



module.exports = {
  get,
  post, 
  update,
  del
};
