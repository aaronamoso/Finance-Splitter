// Handles registration and login requests
const express = require('express');
const router = express.Router();
const Registration = require('../models/Registration.js');  // Import the Registration model (fixed typo)
const bcrypt = require('bcrypt');  // Import bcrypt for password hashing

// REGISTRATION ROUTE
// Route to handle form submissions (POST request) connected to the HTML form action
router.post('/register', async (req, res) => {
    try {
        // Log the incoming request body (for debugging)
        console.log('Password received:', req.body.password);

        // Hash the password before saving to the database
        const hashedPassword = await bcrypt.hash(req.body.password, 10);

        // Create a new Registration instance
        const newRegistration = new Registration({
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword, // Store the hashed password
        });

         // Validate required fields (name, email, password)
        if (!req.body.name || !req.body.email || !req.body.password) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        // Save the registration data to MongoDB
        await newRegistration.save();

        // Respond with success message
        res.status(201).json({ message: 'Registration Successful!' });
    } catch (error) {
        // Log the error details for debugging
        console.error('Error during registration:', error);

        // Send error response
        res.status(500).json({ message: 'Error registering user', error: error.message });
    }
});

// LOGIN ROUTE 
// Route to handle login requests (POST)
router.post('/login', async (req, res) => {
    try {
        // Find user by email
        const user = await Registration.findOne({ email: req.body.email });

        // If user does not exist
        if (!user) {
            return res.status(400).json({ message: 'User not found' });
        }

        // Compare provided password with hashed password in the database
        const isMatch = await bcrypt.compare(req.body.password, user.password);

        if (isMatch) {
            res.json({ message: 'Login Successful' });
        } else {
            res.status(400).json({ message: 'Invalid credentials' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Login error', error });
    }
});

// Serve index.html as a fallback route
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../frontend/index.html'));  // Serves homepage from frontend folder
});

module.exports = router;  // Export the router to be used in server.js