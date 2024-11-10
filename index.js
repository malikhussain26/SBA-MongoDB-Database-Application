import express from 'express';
import mongoose from 'mongoose';
const app = express()


app.get('/', (req, res) => {
    res.send('Hello World!')
});

mongoose.connect('mongodb+srv://mhussain1:rLciETFf1RSgMUP3@cluster0.piptk.mongodb.net/MongoDB-SBA?retryWrites=true&w=majority&appName=Cluster0')
.then(() => {
    console.log("Connected to MongoDB!");
})
.catch(() => {
    console.log("Failed to connect to MongoDB!");
});








app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

