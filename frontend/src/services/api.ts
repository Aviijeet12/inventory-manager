import axios from 'axios';
import { Product } from '../types/Product';
import { config } from '../config/env';

const API_BASE_URL = config.API_URL;

// Debug logging for production
console.log('API Service Initialized with:', API_BASE_URL);
console.log('Environment:', process.env.NODE_ENV);
console.log('REACT_APP_API_URL:', process.env.REACT_APP_API_URL);

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const productApi = {
  // Get all products
  getAll: async (): Promise<Product[]> => {
    const response = await api.get('/products');
    return response.data;
  },

  // Get product by ID
  getById: async (id: number): Promise<Product> => {
    const response = await api.get(`/products/${id}`);
    return response.data;
  },

  // Create new product
  create: async (product: Omit<Product, 'id'>): Promise<Product> => {
    const response = await api.post('/products', product);
    return response.data;
  },

  // Update product
  update: async (id: number, product: Omit<Product, 'id'>): Promise<Product> => {
    const response = await api.put(`/products/${id}`, product);
    return response.data;
  },

  // Delete product
  delete: async (id: number): Promise<void> => {
    await api.delete(`/products/${id}`);
  },

  // Get products by category
  getByCategory: async (category: string): Promise<Product[]> => {
    const response = await api.get(`/products/category/${category}`);
    return response.data;
  },

  // Search products by name
  search: async (name: string): Promise<Product[]> => {
    const response = await api.get(`/products/search?name=${encodeURIComponent(name)}`);
    return response.data;
  },

  // Get low stock products
  getLowStock: async (threshold: number = 10): Promise<Product[]> => {
    const response = await api.get(`/products/low-stock?threshold=${threshold}`);
    return response.data;
  },
};


