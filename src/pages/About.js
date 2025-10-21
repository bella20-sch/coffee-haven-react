import React from 'react';

const About = () => {
  return (
    <section id="about">
      <div className="about-container">
        <div className="about-content">
          <h2 className="section-title">Our Story</h2>
          <p className="about-subtitle">Brewing Perfection Since 2010</p>
          
          <div className="about-grid">
            <div className="about-text">
              <p>
                At <span className="highlight">Coffee Haven</span>, we believe that great coffee is an experience that engages all the senses. 
                What began as a small family-owned café has blossomed into a beloved destination for coffee enthusiasts.
              </p>
              <p>
                Our journey started with a simple passion for quality coffee and a dream to create a space where people could 
                connect over exceptional brews. Today, we continue that tradition with the same dedication to excellence.
              </p>
              <div className="about-stats">
                <div className="stat-item">
                  <span className="stat-number">12+</span>
                  <span className="stat-label">Years of Excellence</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">50+</span>
                  <span className="stat-label">Coffee Varieties</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">1000+</span>
                  <span className="stat-label">Happy Customers Daily</span>
                </div>
              </div>
            </div>
            
            <div className="about-image">
              <div className="image-frame">
                <img src="/image/person.png" alt="Coffee beans being poured" />
              </div>
            </div>
          </div>
          
          <div className="about-features">
            <div className="feature-card">
              <i className="fas fa-seedling fa-flip"></i>
              <h3>Ethically Sourced</h3>
              <p>Direct trade relationships with farmers ensuring fair prices and sustainable practices.</p>
            </div>
            <div className="feature-card">
              <i className="fas fa-fire fa-flip"></i>
              <h3>Freshly Roasted</h3>
              <p>Small-batch roasted to perfection for maximum flavor and aroma.</p>
            </div>
            <div className="feature-card">
              <i className="fas fa-heart fa-flip"></i>
              <h3>Crafted with Love</h3>
              <p>Every cup is prepared with care by our passionate baristas.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
