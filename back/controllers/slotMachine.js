//const SlotMachine = require('../models/slotMachine');

exports.result = (req, res, next) => {

    let array = [1, 2, 3];
    let resultArray = [];


    for (let i = 0; i < array.length; i++ )
    {
        let rand = Math.random();
        rand *= array.length;
        rand = Math.floor(rand) + 1;
        resultArray.push(rand);
    }

    let winning = resultArray.every( (val, i, arr) => val === arr[0] )

    let result = {
        result: resultArray,
        wining: winning
    }

    res.status(200).json(result);
};