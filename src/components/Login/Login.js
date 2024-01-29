import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Login.css'

const Login = ({ onLogin }) => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

      const handleSubmit = (e) => {
        e.preventDefault();

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,}$/;
    if (!passwordRegex.test(formData.password)) {
      alert(
        'Password must be at least 8 characters one uppercase letter, one lowercase letter, one digit, and one special character.'
      );
      return;
    }
    onLogin(formData.username);

    navigate('/movie-list')
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text" name="username" value={formData.username} onChange={handleChange} required
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password" name="password" value={formData.password}onChange={handleChange}required/>
        </label>
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
