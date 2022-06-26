require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');

const slotMachineRoutes = require('./routes/slotMachine')
const addressRoutes = require('./routes/address')

const app = express();


mongoose.connect('mongodb+srv://' + process.env.MONGO_USER + ':'+ process.env.MONGO_PASS +'@cluster0.wgoctkh.mongodb.net/?retryWrites=true&w=majority',
    { useNewUrlParser: true,
        useUnifiedTopology: true })
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(() => console.log('Connexion à MongoDB échouée !'));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use(express.json());

app.use('/slot-machines', slotMachineRoutes)
app.use('/addresses', addressRoutes)

app.listen(3001, () => console.log('Example app is listening on port 3001.'));