
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path'); // <-- Add this line
const app = express();

// ROUTES (Tasks the server handles)
const authRoutes = require('./routes/registrationRoutes');
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