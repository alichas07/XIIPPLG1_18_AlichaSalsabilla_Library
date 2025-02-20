const express = require('express');
const router = express.Router();
const reviewsController = require('../controllers/controllerReviews');

router.get('/', reviewsController.index);

router.get('/:id', reviewsController.show);

router.post('/', reviewsController.store);

router.put('/:id', reviewsController.update);

router.delete('/:id', reviewsController.delete);

module.exports = router;