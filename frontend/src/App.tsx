import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import ProductList from './components/ProductList';
import ProductForm from './components/ProductForm';
import Dashboard from './components/Dashboard';
import { config } from './config/env';
import './App.css';

function App() {
  useEffect(() => {
    // Debug environment on app load
    console.log('=== INVENTORY MANAGER DEBUG ===');
    config.debugInfo();
    console.log('===============================');
  }, []);

  return (
    <Router>
      <div className="App">
        <Header />
        <main className="main-content">
          <div className="container">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/products" element={<ProductList />} />
              <Route path="/products/new" element={<ProductForm />} />
              <Route path="/products/edit/:id" element={<ProductForm />} />
            </Routes>
          </div>
        </main>
      </div>
    </Router>
  );
}

export default App;


