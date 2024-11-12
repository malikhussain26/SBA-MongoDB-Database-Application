import express from 'express';
import mongoose from 'mongoose';
import "dotenv/config";

const PORT = process.env.PORT || 3000
const app = express()

app.use(express.json());


app.post('/cars', (req, res) => {
    console.log(req.body);
    res.send(req.body);
})

app.get('/', (req, res) => {
    res.send('Hello World!')
});

mongoose.connect(process.env.MONGO_URL)
.then(() => {
    console.log("Connected to MongoDB!");
})
.catch(() => {
    console.log("Failed to connect to MongoDB!");
});








app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

