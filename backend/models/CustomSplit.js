// Custom split logic goes here
// What are my entities:
// 2. Total Cost with or without tax/tip
// 3. Order/Bill name
// 4. Date
// 5. Number of people
// User Story
// As a user, I should be able to add bill name, total, number of people 
//  (this can be done as either checking/ticking boxes or filling out name), settle debts,
// view history.
// How many user input or 

// SCHEMA
const mongoose = require("mongoose");

const participantSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  amountOwed: {
    type: Number,
    required: true,
  },
  amountPaid: {
    type: Number,
    required: true,
  },
});

const customSplitSchema = new mongoose.Schema({
  billName: {
    type: String,
    required: true,
  },
  totalBill: {
    type: Number,
    required: true,
  },
  participants: [participantSchema], // Array of participants
  payer: {
    type: String,
    required: true, // The person who paid the bill
  },
  settled: {
    type: Boolean,
    default: false, // Track if the bill is settled
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("CustomSplit", customSplitSchema);
