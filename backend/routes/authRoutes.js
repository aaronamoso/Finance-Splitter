// Handles registration and login requests
const express = require('express')
const router = express.Router()
const Registation = require('../models/Registration.js') // import the Registration model schema
const bcrypt = require('bcrypt') // import bcrypt for password hashing
const path = require('path') // import path to handle file paths

//  REGISTRATION AND LOGIN FORM ROUTE
// Route to handle form submissions (POST reques) ///connected to html form action
router.post('/register', async (req, res) => {
    try {
        const newRegistration = new Registration({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
        })
        await newRegistration.save(); // Save the form data to MongoDB

        // Once that is saved, we will send the request to the frontend
        res.json({ message: 'Registration Successful!' });
    } catch (error) {
        res.status(500).json({ message: 'Error registering user', error });
    }
});

// LOGIN ROUTE


router.post('/', async (req, res) => {
    res.sendFile(path.join(__dirname, '/frontend/index.html'));
})

module.exports = router; // export the router to be used in the server.js file  