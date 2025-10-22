import React, { createContext, useContext, useReducer } from 'react';

const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem) {
        return {
          ...state,
          items: state.items.map(item =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
          totalItems: state.totalItems + 1
        };
      } else {
        return {
          ...state,
          items: [...state.items, { ...action.payload, quantity: 1 }],
          totalItems: state.totalItems + 1
        };
      }
    
    case 'REMOVE_FROM_CART':
      const itemToRemove = state.items.find(item => item.id === action.payload);
      if (itemToRemove && itemToRemove.quantity > 1) {
        return {
          ...state,
          items: state.items.map(item =>
            item.id === action.payload
              ? { ...item, quantity: item.quantity - 1 }
              : item
          ),
          totalItems: state.totalItems - 1
        };
      } else {
        return {
          ...state,
          items: state.items.filter(item => item.id !== action.payload),
          totalItems: state.totalItems - (itemToRemove ? itemToRemove.quantity : 0)
        };
      }
    
    case 'CLEAR_CART':
      return {
        ...state,
        items: [],
        totalItems: 0
      };
    
    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, {
    items: [],
    totalItems: 0
  });

  const addToCart = (coffee) => {
    dispatch({ type: 'ADD_TO_CART', payload: coffee });
  };

  const removeFromCart = (coffeeId) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: coffeeId });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  const getTotalPrice = () => {
    return state.items.reduce((total, item) => {
      const price = parseFloat(item.price.replace('₱', '').replace(',', ''));
      return total + (price * item.quantity);
    }, 0);
  };

  return (
    <CartContext.Provider value={{
      ...state,
      addToCart,
      removeFromCart,
      clearCart,
      getTotalPrice
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
