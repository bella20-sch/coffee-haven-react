import React, { useState } from 'react';
import { useCart } from '../contexts/CartContext';

const CartModal = ({ isOpen, onClose }) => {
  const { items, totalItems, addToCart, removeFromCart, clearCart, getTotalPrice } = useCart();
  const [showThankYou, setShowThankYou] = useState(false);

  const handleCheckout = () => {
    setShowThankYou(true);
    setTimeout(() => {
      setShowThankYou(false);
      clearCart();
      onClose();
    }, 3000);
  };

  if (!isOpen) return null;

  return (
    <div className="cart-overlay" onClick={onClose}>
      <div className="cart-modal" onClick={(e) => e.stopPropagation()}>
        <div className="cart-header">
          <h3>Shopping Cart ({totalItems} items)</h3>
          <button className="close-btn" onClick={onClose}>
            <i className="fas fa-times"></i>
          </button>
        </div>
        
        <div className="cart-content">
          {showThankYou ? (
            <div className="thank-you-message">
              <i className="fas fa-check-circle"></i>
              <h3>Thank You for Your Order!</h3>
              <p>Your coffee order has been placed successfully.</p>
              <p>We'll prepare your delicious drinks right away!</p>
            </div>
          ) : items.length === 0 ? (
            <div className="empty-cart">
              <i className="fas fa-shopping-cart"></i>
              <p>Your cart is empty</p>
              <p>Add some delicious coffee to get started!</p>
            </div>
          ) : (
            <>
              <div className="cart-items">
                {items.map(item => (
                  <div key={item.id} className="cart-item">
                    <div className="item-image">
                      <img src={item.image} alt={item.name} />
                    </div>
                    <div className="item-details">
                      <h4>{item.name}</h4>
                      <p className="item-price">{item.price}</p>
                      <div className="quantity-controls">
                        <button 
                          className="qty-btn"
                          onClick={() => removeFromCart(item.id)}
                        >
                          <i className="fas fa-minus"></i>
                        </button>
                        <span className="quantity">{item.quantity}</span>
                        <button 
                          className="qty-btn"
                          onClick={() => addToCart(item)}
                        >
                          <i className="fas fa-plus"></i>
                        </button>
                      </div>
                    </div>
                    <div className="item-total">
                      ₱{(parseFloat(item.price.replace('₱', '').replace(',', '')) * item.quantity).toFixed(2)}
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="cart-footer">
                <div className="cart-total">
                  <h4>Total: ₱{getTotalPrice().toFixed(2)}</h4>
                </div>
                <div className="cart-actions">
                  <button className="btn btn-outline" onClick={clearCart}>
                    Clear Cart
                  </button>
                  <button className="btn btn-primary" onClick={handleCheckout}>
                    Checkout
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartModal;
