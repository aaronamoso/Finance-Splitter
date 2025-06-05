const express = require('express')
const path = require('path')
const { route } = require('./registrationRoutes')
const router = express.Router()

router.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, '../../react-frontend/src/pages/Register/Register.jsx'))
})

router.get('/logIn', (req, res) => {
    res.sendFile(path.join(__dirname, '../../react-frontend/pages/logIn.html'))
})

router.get('/dashboard', (req, res) => {
    res.sendFile(path.join(__dirname, '../../react-frontend/src/pages/Dashboard/Dashboard.jsx'))
})

module.exports = router // this exports the router so it can be used in server.js