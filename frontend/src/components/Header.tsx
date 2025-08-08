import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <h1 className="header-title">📦 Inventory Manager</h1>
          <nav className="header-nav">
            <Link 
              to="/" 
              className={isActive('/') ? 'active' : ''}
            >
              Dashboard
            </Link>
            <Link 
              to="/products" 
              className={isActive('/products') ? 'active' : ''}
            >
              Products
            </Link>
            <Link 
              to="/products/new" 
              className={isActive('/products/new') ? 'active' : ''}
            >
              Add Product
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;


