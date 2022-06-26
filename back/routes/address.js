const express = require('express');
const router = express.Router();

const AddressController = require('../controllers/address');

router.post('/', AddressController.store);
router.get('/:id', AddressController.show);

module.exports = router;