// This is where the business logic is for registration/registering users

const Registration = require('../models/Registration.js');  
const bcrypt = require('bcrypt');  

// Handles user registration
exports.register = async (req, res) => {
    try {
        console.log('Password received:', req.body.password);

        if (!req.body.name || !req.body.email || !req.body.password) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        const hashedPassword = await bcrypt.hash(req.body.password, 10);

        const newRegistration = new Registration({
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword,
        });

        await newRegistration.save();
        res.status(201).json({ message: 'Registration Successful!' });
    } catch (error) {
        console.error('Error during registration:', error);
        res.status(500).json({ message: 'Error registering user', error: error.message });
    }
};

// Handles user login
exports.login = async (req, res) => {
    try {
        const user = await Registration.findOne({ email: req.body.email });

        if (!user) {
            return res.status(400).json({ message: 'User not found' });
        }

        const isMatch = await bcrypt.compare(req.body.password, user.password);

        if (isMatch) {
            res.json({ message: 'Login Successful' });
        } else {
            res.status(400).json({ message: 'Invalid credentials' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Login error', error });
    }
};
