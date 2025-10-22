import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import CartModal from './CartModal';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { totalItems } = useCart();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <>
      <nav>
        <Link to="/" className="navbar-brand">
          <i className="fa-solid fa-mug-hot fa-bounce"></i> | CoffeeHaven
        </Link>
        <div className="nav-right">
          <button 
            className="nav-cart-btn mobile-cart"
            onClick={toggleCart}
            aria-label="Shopping Cart"
          >
            <i className="fas fa-shopping-cart"></i>
            {totalItems > 0 && (
              <span className="nav-cart-badge">{totalItems}</span>
            )}
          </button>
          <button 
            className={`hamburger ${isMenuOpen ? 'active' : ''}`} 
            aria-label="Menu"
            onClick={toggleMenu}
          >
            <span className="hamburger-box">
              <span className="hamburger-inner"></span>
            </span>
          </button>
        </div>
        <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <li><Link to="/" onClick={closeMenu}>Home</Link></li>
          <li><Link to="/about" onClick={closeMenu}>About Us</Link></li>
          <li><Link to="/menu" onClick={closeMenu}>Coffees</Link></li>
          <li><Link to="/contact" onClick={closeMenu}>Contact Us</Link></li>
          <li><Link to="/login" onClick={closeMenu}>Login</Link></li>
          <li className="nav-cart-item">
            <button 
              className="nav-cart-btn"
              onClick={toggleCart}
              aria-label="Shopping Cart"
            >
              <i className="fas fa-shopping-cart"></i>
              {totalItems > 0 && (
                <span className="nav-cart-badge">{totalItems}</span>
              )}
            </button>
          </li>
        </ul>
      </nav>
      <CartModal isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
};

export default Header;
