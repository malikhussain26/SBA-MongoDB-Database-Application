const express = require('express');
const mongoose = require('mongoose');
require("dotenv/config");


const PORT = process.env.PORT || 3000
const Car = require('./collections/car.collection.js');
const User = require('./collections/user.collection.js');
const Review = require('./collections/review.collection.js');
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

// User routes

app.post('/users', async (req, res) => {
    try {
        const user = await User.create(req.body);
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

// update a user
app.put('/users/:id', async (req, res) => {
    try {
        
        const { id } = req.params;

        const users = await User.findByIdAndUpdate(id, req.body);

        if (!user) {
            return res.status(404).json({message: 'User not found'});
        }

        const updatedUser = await User.findById(id);


    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

// Get users
app.get('/users', async (req, res) => {
    try {
        const users = await User.find().then((users) => {
            res.status(200).json(users);
        })
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

// Get a user by id
app.get('/users/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findById(id);
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

// Delete a user
app.delete('/users/:id', async (req, res) => {
    try {
        const { id } = req.params;

       const user = await User.findByIdAndDelete(id);

       if (!user) {
        return res.status(404).json({message: 'User not found'});
       }

       res.status(200).json(user);

    } catch (error) {
        res.status(500).json({message: error.message});
    }
}); 

// ===========================================

// Review routes

// post a review
app.post('/reviews', async (req, res) => {
    try {
        const review = await Review.create(req.body);
        res.status(200).json(review);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

// update a review
app.put('/reviews/:id', async (req, res) => {
    try {
        
        const { id } = req.params;

        const reviews = await Review.findByIdAndUpdate(id, req.body);

        if (!review) {
            return res.status(404).json({message: 'Review not found'});
        }

        const updatedReview = await Review.findById(id);


    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

// Get reviews
app.get('/reviews', async (req, res) => {
    try {
        const users = await Review.find().then((reviews) => {
            res.status(200).json(reviews);
        })
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

// Get a review by id
app.get('/reviews/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const review = await Review.findById(id);
        res.status(200).json(review);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

// Delete a review
app.delete('/reviews/:id', async (req, res) => {
    try {
        const { id } = req.params;

       const review = await Review.findByIdAndDelete(id);

       if (!review) {
        return res.status(404).json({message: 'Review not found'});
       }

       res.status(200).json(review);

    } catch (error) {
        res.status(500).json({message: error.message});
    }
}); 

// ===========================================

// connect to mongodb
mongoose.connect(process.env.ATLAS_URI)
.then(() => {
    console.log("Connected to MongoDB!");
})
.catch(() => {
    console.log("Failed to connect to MongoDB!");
});

// start the server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

