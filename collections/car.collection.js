const mongoose = require('mongoose');

const CarSchema = new mongoose.Schema(
    {
        make: {
            type: String,
            required: [ true, 'Make is required' ],
        },

        model: {
            type: String,
            required: [ true, 'Model is required' ],
        },

        year: {
            type: Number,
            required: [ true, 'Year is required' ],
        },

        vin: {
            type: String,
            required: [ true, 'VIN is required' ],
        }
     },
     
);

CarSchema.index({ make: 1, model: 1 });

const Car = mongoose.model('Car', CarSchema);

module.exports = Car;