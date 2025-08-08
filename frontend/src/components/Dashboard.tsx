import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../types/Product';
import { productApi } from '../services/api';

const Dashboard: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await productApi.getAll();
        setProducts(data);
      } catch (err) {
        setError('Failed to load products');
        console.error('Error fetching products:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const totalProducts = products.length;
  const totalValue = products.reduce((sum, product) => sum + (product.price * product.quantity), 0);
  const lowStockProducts = products.filter(product => product.quantity < 10).length;
  const categories = Array.from(new Set(products.map(product => product.category))).length;

  if (loading) {
    return <div className="loading">Loading dashboard...</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
    <div>
      <h1 className="products-title">Dashboard</h1>
      
      <div className="dashboard">
        <div className="dashboard-card">
          <h3>Total Products</h3>
          <div className="number">{totalProducts}</div>
          <div className="description">Products in inventory</div>
        </div>
        
        <div className="dashboard-card">
          <h3>Total Value</h3>
          <div className="number">${totalValue.toFixed(2)}</div>
          <div className="description">Total inventory value</div>
        </div>
        
        <div className="dashboard-card">
          <h3>Low Stock Items</h3>
          <div className="number">{lowStockProducts}</div>
          <div className="description">Items with quantity &lt; 10</div>
        </div>
        
        <div className="dashboard-card">
          <h3>Categories</h3>
          <div className="number">{categories}</div>
          <div className="description">Product categories</div>
        </div>
      </div>

      <div className="card">
        <div className="products-header">
          <h2>Recent Products</h2>
          <Link to="/products" className="btn btn-primary">
            View All Products
          </Link>
        </div>
        
        {products.length > 0 ? (
          <div className="product-grid">
            {products.slice(0, 6).map((product) => (
              <div key={product.id} className="product-card">
                <div className="product-name">{product.name}</div>
                <div className="product-description">{product.description}</div>
                <div className="product-details">
                  <span className="product-price">${product.price}</span>
                  <span className="product-quantity">
                    Qty: {product.quantity}
                  </span>
                </div>
                <div className="product-category">
                  <span className={`badge ${product.quantity < 10 ? 'badge-warning' : 'badge-success'}`}>
                    {product.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p>No products found. <Link to="/products/new">Add your first product</Link></p>
        )}
      </div>
    </div>
  );
};

export default Dashboard;


