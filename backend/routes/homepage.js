// HOMEPAGE ROUTE
const express = require('express');
const path = require('path');  // Import path to handle file paths
const router = express.Router();  // Creates a router object

// Route to serve the homepage (index.html)
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../frontend/index.html'));
});

module.exports = router;  // Export the router to be used in server.js
