const SlotMachine = require('../models/SlotMachine');
const SlotMachineService = require('../services/slotMachineService');

const slotMachineService = new SlotMachineService()

exports.store = (req, res, next) => {

    let address = req.body.address;
    let bet = req.body.bet;
    let earnings = 0;

    let result = slotMachineService.runMachine();
    let wining = slotMachineService.isWining(result)

    if (wining) {
        earnings = bet * 3;
    }

    const slotMachine = new SlotMachine({
        address: address,
        played_at: Date.now(),
        result: result,
        wining: wining,
        bet: bet,
        earnings: earnings.toFixed(2)
    });
    slotMachine.save() //save in mongodb
        .then(() => res.status(201).json( slotMachine ))
        .catch(error => res.status(400).json({ error }))

};