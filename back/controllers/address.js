const Address = require('../models/Address');

exports.store = (req, res, next) => {
    console.log(req.body.address)

    const address = new Address({
        address: req.body.address,
        created_at: Date.now(),
        time_played: 0,
        balance: 5
    });
    address.save() //save in mongodb
        .then(() => res.status(201).json( address ))
        .catch(error => res.status(400).json({ error }))
};

exports.show = (req, res, next) => {
    console.log(req.params.id);
    Address.findOne({address: req.params.id})
        .then(address => {
            if (!address) {
                return res.status(401).json({error: 'Address not find'});
            } else {
                res.status(200).json(address);
            }
        })
        .catch(error => res.status(500).json({ error }));
};