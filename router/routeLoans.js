const express = require('express');
const router = express.Router();
const loansController = require('../controllers/controllerLoans');

router.get('/', loansController.index);

router.get('/:id', loansController.show);

router.post('/', loansController.store);

router.put('/:id', loansController.update);

router.delete('/:id', loansController.delete);

module.exports = router;