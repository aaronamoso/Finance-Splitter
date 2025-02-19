import React from 'react';
import {Link} from 'react-router-dom';
// import './homepage.css'; Import this when you have a CSS for this page

function Homepage() {
  return (
    <div>
      <header></header>
      <div id="about">
        <h1>Personal Finance Splitter</h1>
        <p>Welcome to <b style={{ color: 'white' }}>Personal Finance Splitter</b> – your go-to app for managing bills with friends, family, or roommates. Whether you’re dining out, sharing rent, or splitting any
          other shared expenses, this app makes it simple to calculate each person’s share, track who has paid, and keep everything organized.
        </p>
        <br></br>
        <p>
          With a user-friendly interface and powerful backend features, Personal Finance Splitter takes the stress out
          of managing finances in group settings. Tailored for individuals and small groups, it <b style={{ color: 'white' }}>helps avoid awkward conversations and ensures everyone pays their fair share.</b>
        </p>
        <h3 style={{ textAlign: 'center', fontWeight: 'bold', marginBottom: '2rem' }}>Try now!</h3>
        <div id="btnContainer">
          <Link id="tryBtn" to="/registration">Sign Up</Link>
          <br />
          <a id="tryBtn" href="pages/splitEqually.html">Split Equally</a>
          <h5 style={{ display: 'inline', margin: '0 1rem', fontSize: '1.5rem' }}> / </h5>
          <a id="tryBtn" href="pages/whoPaidWho.html">Custom Split</a>
        </div>
      </div>

      <h2>Features...</h2>
      <div id="features">
        <ol>
          <li>Users can input the total amount and the number of people splitting the bill.</li>
          <li>Ability to account for different payment shares.</li>
          <li>Real-time updates to the amount each person owes.</li>
          <li>Option to add recurring expenses (like rent).</li>
        </ol>
      </div>
    </div>
  )
}

export default Homepage
