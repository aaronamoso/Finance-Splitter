// SCHEMA
const mongoose = require('mongoose') // Import mongoose

// defins the schema for the registration form
const registrationSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
})

// Create and expor the model (Registration) -- so it can be used anywhere
module.exports = mongoose.model('Registration', registrationSchema)
