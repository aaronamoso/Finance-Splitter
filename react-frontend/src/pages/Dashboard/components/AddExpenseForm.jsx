// expense form -- this adds a new expense to the user's expenses list

// PRIORITIZE: THIS mobile version

import React from 'react'
import { useState } from 'react'

function AddExpenseForm() {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [paidBy, setPaidBy] = useState([]);
  const [splitBetween, setSplitBetween] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const expenseData = { description, amount, paidBy, splitBetween };

    return (
      <div>
        <form onSubmit="{handleSubmit}">
          

        </form>
      </div>
    )
  }
}

  export default AddExpenseForm

// SCHEMA/Model
// const addExpenseScheme = new mongoose.Schema ({
//     description: {
//         type: String,
//         required: true
//     },
//     amount: {
//         type: Number,
//         required: true
//     },
//     PaidBy: {
//         type: [String],
//         required: true
//     },
//     SplitBetween: {
//         type: [String],
//         required: true
//     },
// })