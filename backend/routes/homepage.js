// HOMEPAGE ROUTE
const express = require('express');
const path = require('path');  // Import path to handle file paths
const router = express.Router();  // Creates a router object

// Route to serve the homepage (index.html)
router.get('/', (req, res) => {
<<<<<<< HEAD
    res.sendFile(path.join(__dirname, '../../frontend/index.html')); //  might need to change or deleted for Next.js
=======
    res.sendFile(path.join(__dirname, '../../frontend/index.html')); // main index or homepage
>>>>>>> main
});

module.exports = router;  // Export the router to be used in server.js
