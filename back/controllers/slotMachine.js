const SlotMachine = require('../models/SlotMachine');

exports.store = (req, res, next) => {

    let address = req.body.address;
    let bet = req.body.bet;
    let earnings = 0;

    let resultArray = [];

    for (let i = 0; i < 3; i++ ) {
        let rand = Math.random();
        rand *= 3;
        rand = Math.floor(rand) + 1;
        resultArray.push(rand);
    }
    let wining = resultArray.every( (val, i, arr) => val === arr[0] )

    if (wining) {
        earnings = bet * 3;
    }

    const slotMachine = new SlotMachine({
        address: address,
        played_at: Date.now(),
        result: resultArray,
        wining: wining,
        bet: bet,
        earnings: earnings.toFixed(2)
    });
    slotMachine.save() //save in mongodb
        .then(() => res.status(201).json( slotMachine ))
        .catch(error => res.status(400).json({ error }))

};