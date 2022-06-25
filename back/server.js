const express = require('express');

const slotMachineRoutes = require('./routes/slotMachine')

const app = express();

app.get('/', (req, res) => {
    res.send('Successful response.');
});

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use('/slot-machine', slotMachineRoutes)

app.listen(3001, () => console.log('Example app is listening on port 3001.'));