// // This file runs the toy storage (the server)
// const express = require('express');  // Express is like a phone. It lets the frontend talk to the backend
// const mongoose = require('mongoose');  // This connects to the database (like opening the toy box)
// const bodyParser = require('body-parser');  // Parses incoming JSON data from the frontend
// const cors = require('cors');  // Lets the frontend and backend talk even if they're in different places
// const dotenv = require('dotenv');  // Manages secret keys and passwords
// const app = express();;

// // ROUTES (Tasks the server handles)
// // Import the routes that handle form submissions and homepage requests
// const authRoutes = require('./routes/registrationRoutes');  // Handles registration and login
// const homepageRoutes = require('./routes/homepage');  // Serves the homepage
// const pageRoutes = require('./routes/pageRoutes');  // Handles extra pages

// dotenv.config();  // Load environment variables from .env file

// // Middleware (Tools for Express)
// app.use(cors());
// app.use(express.json());  // Lets the server understand JSON data
// app.use(express.urlencoded({ extended: true }));  // Lets the server understand form data
  
// // Routes
// app.use('/', pageRoutes);  // Serve registration and login pages
// app.use('/', homepageRoutes);  // Show the homepage
// app.use('/auth', authRoutes);  // Handle registration and login requests

// // Catch-all to serve React's index.html for any unknown route
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, '../react-frontend/public/index.html'));
// });

// // MongoDB connection
// mongoose.connect(process.env.MONGO_URI)  // Connect to the database
//     .then(() => console.log('Connected to MongoDB'))  // Success message
//     .catch((err) => console.error('Error connecting to MongoDB:', err));  // Error message

// // Start the server and listen on port 3000
// app.listen(5001, () => {
//     console.log(`Server running on http://localhost:5001`);  // Server confirmation message
// });

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path'); // <-- Add this line
const app = express();

// ROUTES (Tasks the server handles)
const authRoutes = require('./routes/registrationRoutes');
const homepageRoutes = require('./routes/homepage');
const pageRoutes = require('./routes/pageRoutes');

dotenv.config();

// Middleware (Tools for Express)
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve React static files from build
app.use(express.static(path.join(__dirname, '../react-frontend/build')));

// Routes
app.use('/', pageRoutes);
app.use('/', homepageRoutes);
app.use('/auth', authRoutes);

// Catch-all to serve React's index.html for any unknown route
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../react-frontend/build/index.html'));
});

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.error('Error connecting to MongoDB:', err));

// Start the server and listen on port 5001
app.listen(5001, () => {
    console.log(`Server running on http://localhost:5001`);
});