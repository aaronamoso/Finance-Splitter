const express = require('express')
const path = require('path')
const { route } = require('./authRoutes')
const router = express.Router()

router.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, '../../frontend/pages/registration.html'))
})

router.get('/logIn', (req, res) => {
    res.sendFile(path.join(__dirname, '../../frontend/pages/logIn.html'))
})

module.exports = router // this exports the router so it can be used in server.js