const express = require('express');
const mongoose = require('mongoose');
require("dotenv/config");

const PORT = process.env.PORT || 3000
const Car = require('./collections/car.collection.js');
const app = express()

// middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));


app.get('/', (req, res) => {
    res.send('Hello World!')
});

// ===========================================
// Car routes

// app.use('/cars', carRoute);

// post a car
app.post('/cars', async (req, res) => {
    try {
        const car = await Car.create(req.body);
        res.status(200).json(car);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

// update a car
app.put('/cars/:id', async (req, res) => {
    try {
        
        const { id } = req.params;

        const car = await Car.findByIdAndUpdate(id, req.body);

        if (!car) {
            return res.status(404).json({message: 'Car not found'});
        }

        const updatedCar = await Car.findById(id);


    } catch (error) {
        res.status(500).json({message: error.message});
    }
});


// get cars
app.get('/cars', async (req, res) => {
    try {
        const cars = await Car.find().then((cars) => {
            res.status(200).json(cars);
        })
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

// get a car by id
app.get('/cars/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const car = await Car.findById(id);
        res.status(200).json(car);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

// Delete a car
app.delete('/cars/:id', async (req, res) => {
    try {
        const { id } = req.params;

       const car = await Car.findByIdAndDelete(id);

       if (!car) {
        return res.status(404).json({message: 'Car not found'});
       }

       res.status(200).json(car);

    } catch (error) {
        res.status(500).json({message: error.message});
    }
}); 

// ===========================================

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

