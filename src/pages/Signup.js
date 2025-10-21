import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    terms: false,
    newsletter: false
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
    
    if (formData.password !== formData.confirmPassword) {
      setFormMessage('Passwords do not match!');
      return;
    }
    
    if (!formData.terms) {
      setFormMessage('Please accept the Terms of Service and Privacy Policy.');
      return;
    }
    
    // Here you would typically create the user account
    setFormMessage('Account created successfully! Welcome to Coffee Haven.');
  };

  return (
    <div className="signup-page">
      <div className="signup-container">
        <div className="signup-header page-content">
          <h1>Join Coffee Haven</h1>
          <p>Create your account and start your coffee journey</p>
        </div>
        
        {formMessage && (
          <div className={`form-message ${formMessage.includes('successfully') ? 'success' : 'error'}`}>
            {formMessage}
          </div>
        )}
        
        <form className="signup-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <div className="input-wrapper">
              <i className="fas fa-user"></i>
              <input 
                type="text" 
                id="firstName" 
                name="firstName" 
                placeholder="Enter your first name" 
                value={formData.firstName}
                onChange={handleChange}
                required 
              />
            </div>
          </div>
          
          <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <div className="input-wrapper">
              <i className="fas fa-user"></i>
              <input 
                type="text" 
                id="lastName" 
                name="lastName" 
                placeholder="Enter your last name" 
                value={formData.lastName}
                onChange={handleChange}
                required 
              />
            </div>
          </div>
          
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
            <label htmlFor="phone">Phone Number</label>
            <div className="input-wrapper">
              <i className="fas fa-phone"></i>
              <input 
                type="tel" 
                id="phone" 
                name="phone" 
                placeholder="Your phone number"
                value={formData.phone}
                onChange={handleChange}
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
                placeholder="Create a password" 
                value={formData.password}
                onChange={handleChange}
                required 
              />
            </div>
          </div>
          
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <div className="input-wrapper">
              <i className="fas fa-lock"></i>
              <input 
                type="password" 
                id="confirmPassword" 
                name="confirmPassword" 
                placeholder="Confirm your password" 
                value={formData.confirmPassword}
                onChange={handleChange}
                required 
              />
            </div>
          </div>
          
          <div className="form-group full-width">
            <label className="checkbox-wrapper">
              <input 
                type="checkbox" 
                id="terms" 
                name="terms"
                checked={formData.terms}
                onChange={handleChange}
                required 
              />
              <span className="checkmark"></span>
              I agree to the <a href="#" style={{color: '#8b5a3c', textDecoration: 'underline'}}>Terms of Service</a> and <a href="#" style={{color: '#8b5a3c', textDecoration: 'underline'}}>Privacy Policy</a>
            </label>
          </div>
          
          <div className="form-group full-width">
            <label className="checkbox-wrapper">
              <input 
                type="checkbox" 
                id="newsletter" 
                name="newsletter"
                checked={formData.newsletter}
                onChange={handleChange}
              />
              <span className="checkmark"></span>
              Subscribe to our newsletter for coffee tips and updates
            </label>
          </div>
          
          <button type="submit" className="submit-btn">
            <i className="fas fa-user-plus"></i>
            Create Account
          </button>
        </form>
        
        <div className="divider">
          <span>or</span>
        </div>
        
        <div className="login-link">
          <Link to="/login">
            <i className="fas fa-sign-in-alt"></i>
            Already have an account? Sign In
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
