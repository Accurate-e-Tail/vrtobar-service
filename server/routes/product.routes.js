const router = require('express').Router();
const productsController = require('../controller/product.controller');

router.get('/:category/:query', productsController.get);
router.post('/', productsController.post);
router.put('/:id', productsController.update)

module.exports = router;
