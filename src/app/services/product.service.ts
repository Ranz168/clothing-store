import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [
    // Men's Products (8 items)
    {
      id: 1,
      name: 'Classic White T-Shirt',
      price: 29.99,
      category: 'Men',
      image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=500&fit=crop',
      description: 'Premium cotton t-shirt for everyday comfort',
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['White', 'Black', 'Gray'],
      inStock: true,
      rating: 4.5
    },
    {
      id: 2,
      name: 'Denim Jacket',
      price: 89.99,
      category: 'Men',
      image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=500&fit=crop',
      description: 'Classic denim jacket for casual outfits',
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['Blue', 'Black'],
      inStock: true,
      rating: 4.8
    },
    {
      id: 3,
      name: 'Slim Fit Jeans',
      price: 79.99,
      category: 'Men',
      image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&h=500&fit=crop',
      description: 'Comfortable slim fit jeans',
      sizes: ['28', '30', '32', '34', '36'],
      colors: ['Blue', 'Black', 'Gray'],
      inStock: true,
      rating: 4.6
    },
    {
      id: 4,
      name: 'Winter Sweater',
      price: 65.99,
      category: 'Men',
      image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=400&h=500&fit=crop',
      description: 'Warm and cozy winter sweater',
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      colors: ['Red', 'Green', 'Navy'],
      inStock: true,
      rating: 4.7
    },
    {
      id: 5,
      name: 'Sports Shorts',
      price: 35.99,
      category: 'Men',
      image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&h=500&fit=crop',
      description: 'Breathable sports shorts for active wear',
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['Black', 'Blue', 'Gray'],
      inStock: true,
      rating: 4.2
    },
    {
      id: 6,
      name: 'Formal Dress Shirt',
      price: 49.99,
      category: 'Men',
      image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&h=500&fit=crop',
      description: 'Elegant formal shirt for business occasions',
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['White', 'Blue', 'Pink'],
      inStock: true,
      rating: 4.4
    },
    {
      id: 7,
      name: 'Leather Boots',
      price: 129.99,
      category: 'Men',
      image: 'https://images.unsplash.com/photo-1542280756-74b2f55e73ab?w=400&h=500&fit=crop',
      description: 'Durable leather boots for all seasons',
      sizes: ['8', '9', '10', '11', '12'],
      colors: ['Brown', 'Black'],
      inStock: true,
      rating: 4.9
    },
    {
      id: 8,
      name: 'Casual Hoodie',
      price: 55.99,
      category: 'Men',
      image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=500&fit=crop',
      description: 'Comfortable hoodie for casual wear',
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['Gray', 'Black', 'Navy'],
      inStock: true,
      rating: 4.3
    },

    // Women's Products (8 items)
    {
      id: 9,
      name: 'Summer Dress',
      price: 59.99,
      category: 'Women',
      image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400&h=500&fit=crop',
      description: 'Light and comfortable summer dress',
      sizes: ['XS', 'S', 'M', 'L'],
      colors: ['Floral', 'Blue', 'Pink'],
      inStock: true,
      rating: 4.3
    },
    {
      id: 10,
      name: 'Elegant Blouse',
      price: 45.99,
      category: 'Women',
      image: 'https://images.unsplash.com/photo-1581044777550-4cfa60707c03?w=400&h=500&fit=crop',
      description: 'Beautiful blouse for formal occasions',
      sizes: ['XS', 'S', 'M', 'L'],
      colors: ['White', 'Black', 'Red'],
      inStock: true,
      rating: 4.6
    },
    {
      id: 11,
      name: 'Skinny Jeans',
      price: 69.99,
      category: 'Women',
      image: 'https://images.unsplash.com/photo-1582418702059-97ebafb35d09?w=400&h=500&fit=crop',
      description: 'Comfortable skinny jeans',
      sizes: ['24', '26', '28', '30'],
      colors: ['Blue', 'Black'],
      inStock: true,
      rating: 4.5
    },
    {
      id: 12,
      name: 'Knit Sweater',
      price: 75.99,
      category: 'Women',
      image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=400&h=500&fit=crop',
      description: 'Warm and stylish knit sweater',
      sizes: ['XS', 'S', 'M', 'L'],
      colors: ['Cream', 'Pink', 'Gray'],
      inStock: true,
      rating: 4.7
    },
    {
      id: 13,
      name: 'Yoga Pants',
      price: 39.99,
      category: 'Women',
      image: 'https://images.unsplash.com/photo-1506629905607-e48b0e67d879?w=400&h=500&fit=crop',
      description: 'Comfortable yoga pants for active lifestyle',
      sizes: ['XS', 'S', 'M', 'L'],
      colors: ['Black', 'Gray', 'Navy'],
      inStock: true,
      rating: 4.8
    },
    {
      id: 14,
      name: 'Evening Gown',
      price: 129.99,
      category: 'Women',
      image: 'https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=400&h=500&fit=crop',
      description: 'Elegant evening gown for special occasions',
      sizes: ['XS', 'S', 'M', 'L'],
      colors: ['Black', 'Red', 'Navy'],
      inStock: true,
      rating: 4.9
    },
    {
      id: 15,
      name: 'Casual Skirt',
      price: 42.99,
      category: 'Women',
      image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=500&fit=crop',
      description: 'Comfortable casual skirt for everyday wear',
      sizes: ['XS', 'S', 'M', 'L'],
      colors: ['Denim', 'Black', 'Plaid'],
      inStock: true,
      rating: 4.4
    },
    {
      id: 16,
      name: 'High Heels',
      price: 89.99,
      category: 'Women',
      image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400&h=500&fit=crop',
      description: 'Elegant high heels for formal events',
      sizes: ['6', '7', '8', '9'],
      colors: ['Black', 'Nude', 'Red'],
      inStock: true,
      rating: 4.6
    }
  ];

  getProducts(): Product[] {
    return this.products;
  }

  getProductById(id: number): Product | undefined {
    return this.products.find(product => product.id === id);
  }

  getProductsByCategory(category: string): Product[] {
    return this.products.filter(product => 
      product.category.toLowerCase() === category.toLowerCase()
    );
  }

  getCategories(): string[] {
    return [...new Set(this.products.map(product => product.category))];
  }

  searchProducts(query: string): Product[] {
    const lowerCaseQuery = query.toLowerCase();
    return this.products.filter(product =>
      product.name.toLowerCase().includes(lowerCaseQuery) ||
      product.description.toLowerCase().includes(lowerCaseQuery) ||
      product.category.toLowerCase().includes(lowerCaseQuery)
    );
  }

  getFeaturedProducts(): Product[] {
    return this.products.filter(product => product.rating >= 4.5);
  }

  getInStockProducts(): Product[] {
    return this.products.filter(product => product.inStock);
  }
}