const express = require('express');
const Car = require('../models/car.model');
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const cars = await Car.find().then((cars) => {
            res.status(200).json(cars);
        })
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});