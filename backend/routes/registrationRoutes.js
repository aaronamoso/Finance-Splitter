const express = require('express');
const router = express.Router();
const registrationController = require('../controller/registrationController.js');

router.post('/register', registrationController.register);
router.post('/login', registrationController.login);

module.exports = router;