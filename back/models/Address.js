const mongoose = require('mongoose');

const addressSchema = mongoose.Schema({
    address: { type: String, required: true },
    created_at: { type: Date, required: true },
    time_played : {type: Number, required: true },
    balance : {type: Number, required: true },
});

module.exports = mongoose.model('Address', addressSchema);