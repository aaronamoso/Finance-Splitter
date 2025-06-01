import React, { useState } from 'react';
import './Register.css'; // adjust the path if needed
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('http://localhost:5001/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', //
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        alert(data.message || 'Registration successful!');
        navigate('/dashboard'); // redirect to dashboard
      } else {
        alert(data.message || 'Registration failed!');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Something went wrong!');
    }
  };

  return (
    <div className="register-container">
      <h1>Bill Splitter</h1>
      <h2>Create your account</h2>

      <form onSubmit={handleSubmit} id="registrationForm">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <br />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Emal address"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <br />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <br />

        <button type="submit" id="register">Register</button>
      </form>

      <p className="forgotPass">Already have an account?</p>
      <button onClick={() => navigate('/login')}>Login</button>

      <footer>
        <a
          className="socials"
          href="https://www.linkedin.com/in/aaron-amoso-002550231/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-linkedin"></i>
        </a>

        <a
          className="socials"
          href="https://github.com/aaronamoso"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-github"></i>
        </a>

        <a
          className="socials"
          href="mailto:amosoaaron@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-regular fa-envelope"></i>
        </a>

        <p>&copy; {new Date().getFullYear()} Personal Finance Splitter. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Register;
