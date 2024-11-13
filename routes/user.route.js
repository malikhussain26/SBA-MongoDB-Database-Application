const express = require('express');
const User = require('../models/user.model');
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const users = await User.find().then((users) => {
            res.status(200).json(users);
        })
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

module.exports = router;