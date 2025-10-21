import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-brand">
          <h3><i className="fa-solid fa-mug-hot fa-bounce"></i> Coffee Haven</h3>
          <p>Brewing comfort since 2025.</p>
        </div>
    
        <div className="footer-social">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <i className="fa-brands fa-facebook"></i>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <i className="fa-brands fa-twitter"></i>
          </a>
        </div>
    
        <div className="footer-bottom">
          <p>&copy; 2025 <strong>Coffee Haven</strong>. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
