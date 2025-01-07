// Think of this file as the person running the toy storage 

const express = require('express');  // Express is like a phone. It lets the frontend talk to the backend
const mongoose = require('mongoose');  // This connects to the database (like opening the toy box)
const bodyParser = require('body-parser');  // Parses incoming JSON data from the frontend
const cors = require('cors');  // Allows cross-origin requests (FE and BE in different places)
const dotenv = require('dotenv');  // Manages environment variables (like passwords and secret keys)
const path = require('path');  // Helps manage file paths

const app = express();
dotenv.config();  // Load environment variables from .env file

// Middleware (Tools for Express)
app.use(express.json());  // For JSON data
app.use(express.urlencoded({ extended: true }));  // For form data

// Serve static files (Frontend)
// This serves files (like index.html) from the frontend folder
app.use(express.static(path.join(__dirname, '../frontend')));

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../frontend/index.html'));
  });
  
// ROUTES (Think of these as different tasks we handle)
// Import the routes that handle form submissions and homepage requests
const authRoutes = require('./routes/authRoutes');  // Handles registration and login
const homepageRoutes = require('./routes/homepage');  // Serves the homepage
const pageRoutes = require('./routes/pageRoutes');  // Import pageRoutes
app.use('/', pageRoutes);  // Serve registration and login pages

// Use the routes (Mount the routes for express to handle them)
// /api for backend logic (login/registration), and / for the homepage
app.use('/api', authRoutes);  // This directs requests starting with /api to authRoutes
app.use('/', homepageRoutes);  // Requests to / will load the homepage (index.html)

// Connect to MongoDB (replace <password> and <dbname> with your details)
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('Connected to MongoDB'))  // Success message
    .catch((err) => console.error('Error connecting to MongoDB:', err));  // Error message

// Start the server and listen on port 3000
app.listen(3000, () => {
    console.log(`Server running on http://localhost:3000`);  // Confirms the server is running
});
