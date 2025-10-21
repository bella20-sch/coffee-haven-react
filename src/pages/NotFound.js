import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="not-found-page">
      <div className="not-found-container">
        <div className="not-found-content page-content">
          <h1>404</h1>
          <h2>Oops! Page Not Found</h2>
          <p>The page you're looking for doesn't exist or has been moved.</p>
          <div className="not-found-actions">
            <Link to="/" className="btn btn-primary">
              <i className="fas fa-home"></i>
              Go Home
            </Link>
            <Link to="/menu" className="btn btn-outline">
              <i className="fas fa-coffee"></i>
              Browse Menu
            </Link>
          </div>
        </div>
        <div className="not-found-image">
          <i className="fas fa-coffee fa-10x fa-flip" style={{'--fa-animation-duration': '3s'}}></i>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
