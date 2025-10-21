import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    phone: '',
    message: ''
  });

  const [formMessage, setFormMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to a server
    setFormMessage('Thank you for your message! We\'ll get back to you soon.');
    setFormData({
      name: '',
      email: '',
      subject: '',
      phone: '',
      message: ''
    });
  };

  return (
    <div className="contact-page">
      <div className="contact-container">
        <div className="contact-header page-content">
          <h1>Get in Touch</h1>
          <p>Have a question or just want to say hello? Drop us a message!</p>
        </div>
        
        {formMessage && (
          <div className="form-message success">
            {formMessage}
          </div>
        )}
        
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Your Name</label>
            <div className="input-wrapper">
              <i className="fas fa-user"></i>
              <input 
                type="text" 
                id="name" 
                name="name" 
                placeholder="Enter your name" 
                value={formData.name}
                onChange={handleChange}
                required 
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="email">Your Email</label>
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
            <label htmlFor="subject">Subject</label>
            <div className="input-wrapper">
              <i className="fas fa-tag"></i>
              <input 
                type="text" 
                id="subject" 
                name="subject" 
                placeholder="What's this about?" 
                value={formData.subject}
                onChange={handleChange}
                required 
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone (Optional)</label>
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
          <div className="form-group full-width">
            <label htmlFor="message">Your Message</label>
            <textarea 
              id="message" 
              name="message" 
              rows="6" 
              placeholder="Write your message here..." 
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit" className="submit-btn">
            <i className="fas fa-paper-plane"></i>
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
