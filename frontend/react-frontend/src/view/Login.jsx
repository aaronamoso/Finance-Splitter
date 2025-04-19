import React from 'react';
// import './styles/login.css';

const Login = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        window.location.href = '/dashboard'; // Redirect on success
      } else {
        alert('Login failed');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <div>
      <h1>Hi, Welcome Back!</h1>
      <div className="formDiv">
        <form onSubmit={handleSubmit} id="loginForm">
          <label htmlFor="email">Email:</label>
          <br />
          <input type="email" id="email" name="email" required placeholder="johndoe@billsplitter.com" />
          <br />

          <label htmlFor="password">Password:</label>
          <br />
          <input type="password" id="password" name="password" required />
          <br />

          <label>
            <input type="checkbox" /> Remember me?
          </label>

          <p><a href="">Forgot Password?</a></p>

          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
