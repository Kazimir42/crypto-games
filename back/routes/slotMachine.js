const express = require('express');
const router = express.Router();

const SlotMachineController = require('../controllers/slotMachine');


router.post('/', SlotMachineController.store);

module.exports = router;