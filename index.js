const express = require('express');
const mongoose = require('mongoose');
require("dotenv/config");

const PORT = process.env.PORT || 3000
const Car = require('./models/car.model.js');
const app = express()

app.use(express.json());


app.post('/cars', async (req, res) => {
    try {
        const car = await Car.create(req.body);
        res.status(200).json(car);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

// update a car
app.put

app.get('/', (req, res) => {
    res.send('Hello World!')
});

app.get('/cars', async (req, res) => {
    try {
        const cars = await Car.find().then((cars) => {
            res.status(200).json(cars);
        })
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

app.get('/car/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const car = await Car.findById(id);
        res.status(200).json(car);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
})

mongoose.connect(process.env.ATLAS_URI)
.then(() => {
    console.log("Connected to MongoDB!");
})
.catch(() => {
    console.log("Failed to connect to MongoDB!");
});








app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

