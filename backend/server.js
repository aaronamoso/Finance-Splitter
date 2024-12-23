// Think of this file as the person running the toy storage 

const express = require('express') // this is like a phone. It lets the frontend talk to the backend
const mongoose = require('mongoose') // this is the connection to the toy box for instance
const bodyParser = require('body-parser')
const cors = require('cors')
const dotenv = require('dotenv')
const app = express()

// Middleware (Tools for Express)
app.use(bodyParser.json()) // bodyParser allows the backend to read data sent from the frontend
app.use(cors()) // lets the FE communicate w the BE, even when they are in different locations

// Connect to MongoDB (replace <password> and <dbname> with your details)
require('dotenv').config();
mongoose.connect(process.env.MONGO_URI) 
    .then(() => console.log('Connected to MongoDB'))  // Success message
    .catch((err) => console.error('Error connecting to MongoDB:', err));  // Error message

// Next we import the Registration Model (Schema)
const Registration = require('./models/Registration.js')

// Route to handle form submissions (POST reques)

app.post('/register', async(req, res) => {
    const newRegistration = new Registration({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
    })

    // Save the form data to MongoDB
    await newRegistration.save();

    // Once that is saved, we will send the request to the frontend
    res.json({message: 'Registration Successful!'})
});

// Start the server
app.listen(3000, () => {
    console.log(`Server running on http://localhost:3000`)
})
