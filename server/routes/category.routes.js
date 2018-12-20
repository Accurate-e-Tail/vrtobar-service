const router = require('express').Router();
const categoriesController = require('../controller/category.controller');

router.get('/', categoriesController.getAll);

module.exports = router;
