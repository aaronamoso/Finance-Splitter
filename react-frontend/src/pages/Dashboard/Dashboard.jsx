import React from 'react'
import './Dashboard.module.css'

const Dashboard = () => {
  return (
    <div>
        <div>
            <header>
                <h1>Finance Splitter</h1>
                <h2>Dashboard</h2>
                <p>Split bills with friends easily and keep track of who owes what.</p>
            </header>
            <section>
               <nav>
                <ul>
                    <li>Expenses</li>
                    <li>Balances</li>
                    <li>Add Expense</li>
                </ul>
               </nav>
               <div className="content">

                </div>
            </section>
            
        </div>
    </div>
  )
}

export default Dashboard
