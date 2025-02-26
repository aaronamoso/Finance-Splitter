import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import '../styles/registration.css';

const Registration = () => {
  const navigate = useNavigate(); 
  const [showNotification, setShowNotification] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    fetch('/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      }, 
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (response.ok) {
          setShowNotification(true); // Show success notification
          setTimeout(() => {
            setShowNotification(false);
            navigate('/UserDashboard'); // Navigate after a short delay
          }, 2000); // Adjust the delay as needed
        } else {
          alert('Registration failed');
        }
      })
      .catch((error) => console.error('Error:', error));
  };

  return (
    <div>
      <h1>Bill Splitter</h1>
      <h2>Create your account</h2>
      <form onSubmit={handleSubmit} id="registrationForm">
        <label htmlFor="name">Name: </label>
        <input type="text" id="name" name="name" placeholder="John Doe" required />
        <br />

        <label htmlFor="email">Email: </label>
        <input type="email" id="email" name="email" placeholder="johndoe@billsplitter.com" required />
        <br />

        <label htmlFor="password">Password: </label>
        <input type="password" id="password" name="password" required />
        <br />

        <button type="submit" id="register">Register</button>
      </form>

      <p className="forgotPass">Already have an account?</p>
      <button type="button" onClick={() => navigate('/login')}>Login</button>

      {showNotification && (
        <div className="notification-container">
          <div className="notification">
            <p>Registration successful! Welcome aboard.</p>
            <button onClick={() => setShowNotification(false)}>Close</button>
          </div>
        </div>
      )}

      <footer>
        <a className="socials" href="https://www.linkedin.com/in/aaron-amoso-002550231/" target="_blank" rel="noopener noreferrer">
          <i className="fa-brands fa-linkedin"></i>
        </a>

        <a className="socials" href="https://github.com/aaronamoso" target="_blank" rel="noopener noreferrer">
          <i className="fa-brands fa-github"></i>
        </a>

        <a className="socials" href="mailto:amosoaaron@gmail.com" target="_blank" rel="noopener noreferrer">
          <i className="fa-regular fa-envelope"></i>
        </a>

        <p>&copy; {new Date().getFullYear()} Personal Finance Splitter. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Registration;
