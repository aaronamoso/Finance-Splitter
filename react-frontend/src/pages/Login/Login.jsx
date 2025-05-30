import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'; // Adjust the path if needed

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false,
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:5001/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        alert(data.message || 'Login successful!');
        navigate('/dashboard'); // or wherever your user lands
      } else {
        alert(data.message || 'Login failed!');
      }
    } catch (error) {
      console.error('Login error:', error);
      alert('Something went wrong!');
    }
  };

  return (
    <div className="formDiv">
      <h1>Hi, Welcome Back!</h1>

      <form onSubmit={handleSubmit} id="loginForm">
        <label htmlFor="email">Email:</label>
        <br />
        <input
          type="email"
          id="email"
          name="email"
          required
          placeholder="johndoe@billsplitter.com"
          value={formData.email}
          onChange={handleChange}
        />
        <br />

        <label htmlFor="password">Password:</label>
        <br />
        <input
          type="password"
          id="password"
          name="password"
          required
          value={formData.password}
          onChange={handleChange}
        />
        <br />

        <label>
          <input
            type="checkbox"
            name="rememberMe"
            checked={formData.rememberMe}
            onChange={handleChange}
          />{' '}
          Remember me?
        </label>

        <p>
          <a href="#">Forgot Password?</a>
        </p>

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
