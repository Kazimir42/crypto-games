const mongoose = require('mongoose');

const slotMachineSchema = mongoose.Schema({
    address: { type: String, required: true },
    played_at: { type: Date, required: true },
    result : { type: Array , required: true, "default" : [] },
    wining : {type: Boolean, required: true },
    bet : {type: Number, required: true },
    earnings : {type: Number, required: true},
});

module.exports = mongoose.model('SlotMachine', slotMachineSchema);