// Split Equally Model
const mongoose = require("mongoose");

const billSplitSchema = new mongoose.Schema({
    billName: {
        type: String,
        required: true,
    },
    totalAmount: {
        type: Number,
        required: true,
    },
    numberOfPeople: {
        type: Number,
        required: true,
    },
    tipPercentage: {
        type: Number,
        required: true,
    },
    tipAmount: {
        type: Number,
        required: true,
    },
    splitAmount: {
        type: Number,
        required: true,
    },
});
module.exports = mongoose.model('billSplit', billSplitSchema);

const CustomBillSplit = new mongoose.Schema({
    billName: {
        type: String,
        required: true,
    },
    totalAmount: {
        type: Number,
        required: true,
    },
    numberOfPeople: {
        type: Number,
        required: true,
    },
    splitAmount: {
        type: Number,
        required: true,
    },
});