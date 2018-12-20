const router = require('express').Router();
const productsController = require('../controller/product.controller');

router.get('/:category/:query', productsController.get);

module.exports = router;
