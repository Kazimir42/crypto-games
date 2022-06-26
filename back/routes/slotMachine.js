const express = require('express');
const router = express.Router();

const SlotMachineController = require('../controllers/slotMachine');


router.get('/result', SlotMachineController.result);
router.post('/store', SlotMachineController.store);

module.exports = router;