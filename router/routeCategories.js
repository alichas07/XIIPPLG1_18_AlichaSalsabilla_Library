const express = require('express');
const router = express.Router();
const categoriesController = require('../controllers/controllerCategories');

router.get('/', categoriesController.index);

router.get('/:id', categoriesController.show);

router.post('/', categoriesController.store);

router.put('/:id', categoriesController.update);

router.delete('/:id', categoriesController.delete);

module.exports = router;