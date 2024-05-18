// Login.js
import React, { useState } from 'react';
import './styles.css'; // Import your CSS file

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send login data to the backend server
    // Example: fetch('/api/login', { method: 'POST', body: JSON.stringify(formData) })
    // Replace '/api/login' with your actual endpoint for user login
    // Handle success/failure response from the server
    console.log('Form submitted:', formData);
    // Clear form fields after submission
    setFormData({
      email: '',
      password: ''
    });
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} required />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
