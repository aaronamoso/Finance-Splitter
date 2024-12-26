// SCHEMA (Defines the structure of data in MongoDB)
const mongoose = require('mongoose');  // Import mongoose

// Define the schema for the registration form
const registrationSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,  // Prevents duplicate email addresses
    },
    password: {
        type: String,
        required: true,
    },
}, {
    timestamps: true,  // Automatically adds createdAt and updatedAt fields
});

// Create and export the model (Registration) -- so it can be used anywhere
module.exports = mongoose.model('Registration', registrationSchema);
