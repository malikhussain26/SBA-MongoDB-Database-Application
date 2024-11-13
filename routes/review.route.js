const express = require('express');
const Review = require('../models/review.model');
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const reviews = await Review.find().then((reviews) => {
            res.status(200).json(reviews);
        })
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

module.exports = router;