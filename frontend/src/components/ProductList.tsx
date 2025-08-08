import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../types/Product';
import { productApi } from '../services/api';

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [showLowStock, setShowLowStock] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await productApi.getAll();
        setProducts(data);
        setFilteredProducts(data);
      } catch (err) {
        setError('Failed to load products');
        console.error('Error fetching products:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    let filtered = products;

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by category
    if (selectedCategory) {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }

    // Filter by low stock
    if (showLowStock) {
      filtered = filtered.filter(product => product.quantity < 10);
    }

    setFilteredProducts(filtered);
  }, [products, searchTerm, selectedCategory, showLowStock]);

  const handleDelete = async (id: number) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      try {
        await productApi.delete(id);
        setProducts(products.filter(product => product.id !== id));
      } catch (err) {
        setError('Failed to delete product');
        console.error('Error deleting product:', err);
      }
    }
  };

  const categories = Array.from(new Set(products.map(product => product.category)));

  if (loading) {
    return <div className="loading">Loading products...</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
    <div>
      <div className="products-header">
        <h1 className="products-title">Products</h1>
        <Link to="/products/new" className="btn btn-primary">
          Add New Product
        </Link>
      </div>

      <div className="search-bar">
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="form-input search-input"
        />
      </div>

      <div className="filters">
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="form-input filter-select"
        >
          <option value="">All Categories</option>
          {categories.map(category => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>

        <label className="form-label">
          <input
            type="checkbox"
            checked={showLowStock}
            onChange={(e) => setShowLowStock(e.target.checked)}
          />
          Show Low Stock Only
        </label>
      </div>

      {filteredProducts.length > 0 ? (
        <div className="product-grid">
          {filteredProducts.map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-name">{product.name}</div>
              <div className="product-description">{product.description}</div>
              <div className="product-details">
                <span className="product-price">${product.price}</span>
                <span className={`product-quantity ${product.quantity < 10 ? 'badge badge-warning' : ''}`}>
                  Qty: {product.quantity}
                </span>
              </div>
              <div className="product-category">
                <span className="badge badge-success">{product.category}</span>
              </div>
              <div className="product-actions">
                <Link 
                  to={`/products/edit/${product.id}`} 
                  className="btn btn-secondary action-btn"
                >
                  Edit
                </Link>
                <button
                  onClick={() => handleDelete(product.id!)}
                  className="btn btn-danger action-btn"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="card">
          <p>No products found matching your criteria.</p>
          {searchTerm || selectedCategory || showLowStock ? (
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('');
                setShowLowStock(false);
              }}
              className="btn btn-primary"
            >
              Clear Filters
            </button>
          ) : (
            <Link to="/products/new" className="btn btn-primary">
              Add Your First Product
            </Link>
          )}
        </div>
      )}
    </div>
  );
};

export default ProductList;


