import React, { useState } from 'react';
import { useCart } from '../contexts/CartContext';

const Menu = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('All');
  const { addToCart } = useCart();

  const coffeeData = [
    {
      id: 1,
      name: 'Espresso',
      description: 'Rich, strong, and bold — the perfect kickstart to your day.',
      price: '₱300.50',
      calories: '5 cal',
      size: '2 oz',
      image: '/image/espresso1.jpeg',
      category: 'Classic'
    },
    {
      id: 2,
      name: 'Cappuccino',
      description: 'Perfectly balanced with foam and froth — a creamy delight.',
      price: '₱205.50',
      calories: '120 cal',
      size: '8 oz',
      image: '/image/cappucino.jpg',
      category: 'Classic'
    },
    {
      id: 3,
      name: 'Latte',
      description: 'Silky smooth and mellow — comfort in every sip.',
      price: '₱250.75',
      calories: '150 cal',
      size: '12 oz',
      image: '/image/latte.png',
      category: 'Classic'
    },
    {
      id: 4,
      name: 'Mocha',
      description: 'Chocolatey richness meets bold coffee — the perfect indulgence.',
      price: '₱320.00',
      calories: '250 cal',
      size: '12 oz',
      image: '/image/mocha1.jpeg',
      category: 'Specialty'
    },
    {
      id: 5,
      name: 'Cold Brew',
      description: 'Slow-steeped and refreshingly smooth — served over ice for a chill sip.',
      price: '₱200.50',
      calories: '5 cal',
      size: '16 oz',
      image: '/image/coldbrew.jpeg',
      category: 'Specialty'
    }
  ];

  const filterOptions = ['All', 'Classic', 'Specialty', 'Hot', 'Cold'];

  const filteredCoffees = coffeeData.filter(coffee => {
    const matchesSearch = coffee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         coffee.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    let matchesCategory = true;
    if (filterCategory === 'Classic') {
      matchesCategory = coffee.category === 'Classic';
    } else if (filterCategory === 'Specialty') {
      matchesCategory = coffee.category === 'Specialty';
    } else if (filterCategory === 'Hot') {
      matchesCategory = coffee.name !== 'Cold Brew';
    } else if (filterCategory === 'Cold') {
      matchesCategory = coffee.name === 'Cold Brew';
    }
    
    return matchesSearch && matchesCategory;
  });

  const CoffeeCard = ({ coffee }) => {
    const [isLiked, setIsLiked] = useState(false);

    const handleAddToCart = () => {
      addToCart(coffee);
    };

    return (
      <div className="coffee-card">
        <div className="coffee-img">
          <img src={coffee.image} alt={coffee.name} />
          <div className="coffee-overlay">
            <span className="price">{coffee.price}</span>
          </div>
        </div>
        <div className="coffee-info">
          <h3>{coffee.name}</h3>
          <p className="coffee-desc">{coffee.description}</p>
          <div className="coffee-meta">
            <span className="calories">{coffee.calories}</span>
            <span className="size">{coffee.size}</span>
          </div>
          <div className="coffee-actions">
            <button 
              className={`like-btn ${isLiked ? 'liked' : ''}`}
              onClick={() => setIsLiked(!isLiked)}
            >
              <i className={isLiked ? 'fas fa-heart' : 'far fa-heart'}></i>
            </button>
            <button 
              className="add-to-cart-btn"
              onClick={handleAddToCart}
            >
              <i className="fas fa-plus"></i>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="coffees" className="section-padding">
      <div className="container">
        <div className="section-header page-content">
          <h2 className="section-title">Our Signature Coffees</h2>
          <p className="section-subtitle">Handcrafted with premium beans and served with love</p>
        </div>
        
        {/* Search Bar */}
        <div className="search-container">
          <input 
            type="text" 
            id="coffee-search" 
            placeholder="Search for your favorite coffee..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Filter Buttons */}
        <div className="filter-buttons">
          {filterOptions.map(option => (
            <button
              key={option}
              className={`filter-btn ${filterCategory === option ? 'active' : ''}`}
              onClick={() => setFilterCategory(option)}
            >
              {option}
            </button>
          ))}
        </div>
        
        <div className="coffee-menu">
          <div className="coffee-category">
            <h3 className="category-title">
              {filterCategory === 'All' ? 'All Coffees' : 
               filterCategory === 'Classic' ? 'Classic Favorites' :
               filterCategory === 'Specialty' ? 'Specialty Drinks' :
               filterCategory === 'Hot' ? 'Hot Beverages' : 'Cold Beverages'}
            </h3>
            <div className="coffee-grid">
              {filteredCoffees.map(coffee => (
                <CoffeeCard key={coffee.id} coffee={coffee} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
