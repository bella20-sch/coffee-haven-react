import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    remember: false
  });

  const [formMessage, setFormMessage] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically authenticate the user
    setFormMessage('Login successful! Welcome back to Coffee Haven.');
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-header page-content">
          <h1>Welcome Back</h1>
          <p>Sign in to your Coffee Haven account</p>
        </div>
        
        {formMessage && (
          <div className="form-message success">
            {formMessage}
          </div>
        )}
        
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <div className="input-wrapper">
              <i className="fas fa-envelope"></i>
              <input 
                type="email" 
                id="email" 
                name="email" 
                placeholder="you@example.com" 
                value={formData.email}
                onChange={handleChange}
                required 
              />
            </div>
          </div>
          
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <div className="input-wrapper">
              <i className="fas fa-lock"></i>
              <input 
                type="password" 
                id="password" 
                name="password" 
                placeholder="Enter your password" 
                value={formData.password}
                onChange={handleChange}
                required 
              />
            </div>
          </div>
          
          <div className="form-options">
            <label className="checkbox-wrapper">
              <input 
                type="checkbox" 
                id="remember" 
                name="remember"
                checked={formData.remember}
                onChange={handleChange}
              />
              <span className="checkmark"></span>
              Remember me
            </label>
            <a href="#" className="forgot-password">Forgot Password?</a>
          </div>
          
          <button type="submit" className="login-btn">
            <i className="fas fa-sign-in-alt"></i>
            Sign In
          </button>
        </form>
        
        <div className="divider">
          <span>or</span>
        </div>
        
        <div className="signup-link">
          <Link to="/signup">
            <i className="fas fa-user-plus"></i>
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
