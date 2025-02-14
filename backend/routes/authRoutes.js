const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController.js');

// Define routes and delegate logic to the controller
router.post('/register', authController.register);
router.post('/login', authController.login);

module.exports = router;
