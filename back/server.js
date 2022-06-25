const express = require('express');

const slotMachineRoutes = require('./routes/slotMachine')

const app = express();

app.get('/', (req, res) => {
    res.send('Successful response.');
});

app.use('/slot-machine', slotMachineRoutes)

app.listen(3001, () => console.log('Example app is listening on port 3001.'));