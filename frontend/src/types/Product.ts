export interface Product {
  id?: number;
  name: string;
  description: string;
  price: number;
  quantity: number;
  category: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface ProductFormData {
  name: string;
  description: string;
  price: number;
  quantity: number;
  category: string;
}

