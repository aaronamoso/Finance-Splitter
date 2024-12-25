// Think of this file as the person running the toy storage 

const express = require('express') // this is like a phone. It lets the frontend talk to the backend
const mongoose = require('mongoose') // this is the connection to the toy box for instance
const bodyParser = require('body-parser')
const cors = require('cors')
const dotenv = require('dotenv');
const app = express()


// Middleware (Tools for Express)
app.use(bodyParser.json()) // bodyParser allows the backend to read data sent from the frontend
app.use(cors()) // lets the FE communicate w the BE, even when they are in different locations
dotenv.config();

// Connect to MongoDB (replace <password> and <dbname> with your details)
require('dotenv').config();
mongoose.connect(process.env.MONGO_URI) 
    .then(() => console.log('Connected to MongoDB'))  // Success message
    .catch((err) => console.error('Error connecting to MongoDB:', err));  // Error message

    const registrationRoutes = require('./routes/authRoutes.js');
    app.use('/', registrationRoutes);  // Use routes from the routes folder

// Start the server
app.listen(3000, () => {
    console.log(`Server running on http://localhost:3000`)
})
