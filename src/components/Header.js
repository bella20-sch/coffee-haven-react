import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav>
      <Link to="/" className="navbar-brand">
        <i className="fa-solid fa-mug-hot fa-bounce"></i> | CoffeeHaven
      </Link>
      <button 
        className={`hamburger ${isMenuOpen ? 'active' : ''}`} 
        aria-label="Menu"
        onClick={toggleMenu}
      >
        <span className="hamburger-box">
          <span className="hamburger-inner"></span>
        </span>
      </button>
      <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
        <li><Link to="/" onClick={closeMenu}>Home</Link></li>
        <li><Link to="/about" onClick={closeMenu}>About Us</Link></li>
        <li><Link to="/menu" onClick={closeMenu}>Coffees</Link></li>
        <li><Link to="/contact" onClick={closeMenu}>Contact Us</Link></li>
        <li><Link to="/login" onClick={closeMenu}>Login</Link></li>
      </ul>
    </nav>
  );
};

export default Header;
