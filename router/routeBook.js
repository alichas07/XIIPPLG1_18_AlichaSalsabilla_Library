const express = require('express');
const router = express.Router();
const booksController = require('../controllers/controllerBook');

router.get('/', booksController.index);

router.get('/:id', booksController.show);

router.post('/', booksController.store);

router.put('/:id', booksController.update);

router.delete('/:id', booksController.delete);

module.exports = router;