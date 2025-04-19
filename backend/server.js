// This file runs the toy storage (the server)
const express = require('express');  // Express is like a phone. It lets the frontend talk to the backend
const mongoose = require('mongoose');  // This connects to the database (like opening the toy box)
const bodyParser = require('body-parser');  // Parses incoming JSON data from the frontend
const cors = require('cors');  // Lets the frontend and backend talk even if they're in different places
const dotenv = require('dotenv');  // Manages secret keys and passwords
const path = require('path');  // Helps find files and folders
const app = express();;

// ROUTES (Tasks the server handles)
// Import the routes that handle form submissions and homepage requests
const authRoutes = require('./routes/registrationRoutes');  // Handles registration and login
const homepageRoutes = require('./routes/homepage');  // Serves the homepage
const pageRoutes = require('./routes/pageRoutes');  // Handles extra pages

dotenv.config();  // Load environment variables from .env file

// Middleware (Tools for Express)
app.use(express.json());  // Lets the server understand JSON data
app.use(express.urlencoded({ extended: true }));  // Lets the server understand form data


// Catch-all route to serve index.html
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../frontend/index.html'));  // Always show the frontend page
  });
  
// Routes
app.use('/', pageRoutes);  // Serve registration and login pages
app.use('/', homepageRoutes);  // Show the homepage
app.use('/auth', authRoutes);  // Handle registration and login requests

// Routes for React frontend


// MongoDB connection
mongoose.connect(process.env.MONGO_URI)  // Connect to the database
    .then(() => console.log('Connected to MongoDB'))  // Success message
    .catch((err) => console.error('Error connecting to MongoDB:', err));  // Error message

// Start the server and listen on port 3000
app.listen(3000, () => {
    console.log(`Server running on http://localhost:3000`);  // Server confirmation message
});
