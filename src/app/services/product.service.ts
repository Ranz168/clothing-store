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
      image: 'https://i.pinimg.com/1200x/fc/97/04/fc9704d9be80982a311e11e2b84772f7.jpg',
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
      image: 'https://i.pinimg.com/736x/fc/dc/9d/fcdc9ddd7e61bf11249b496d19f85f19.jpg',
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
      image: 'https://i.pinimg.com/1200x/c6/20/e8/c620e8069586c0a3a60555a2daf69979.jpg',
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
      image: 'https://i.pinimg.com/736x/5d/fa/5d/5dfa5df004653040e4e90d3880a616e0.jpg',
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
      image: 'https://i.pinimg.com/1200x/87/e2/1f/87e21f7266b7466d3ea50a0126efab7d.jpg',
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
      image: 'https://i.pinimg.com/1200x/f7/2c/0d/f72c0d40cb63836258451a04ae7e3fb4.jpg',
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
      image: 'https://i.pinimg.com/736x/e5/35/17/e53517c8dac69362e1b01424e95e3fb8.jpg',
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
      image: 'https://i.pinimg.com/736x/68/b4/b9/68b4b99981fb23b898414712a3d2b013.jpg',
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
      image: 'https://i.pinimg.com/736x/a9/09/8f/a9098fd4ca232cba74121a00cd6a7a5b.jpg',
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
      image: 'https://i.pinimg.com/1200x/2f/7c/15/2f7c1512acda77398bb427446ed826ea.jpg',
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
      image: 'https://i.pinimg.com/736x/a6/7a/ed/a67aed6ec5ad168db8ec48bb6d6ca2d5.jpg',
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
      image: 'https://i.pinimg.com/736x/26/90/0b/26900b8a9c5cf1533fed8c62791a60b1.jpg',
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
      image: 'https://i.pinimg.com/736x/6d/7c/f0/6d7cf0ac6faddb259f0dc1aab42b3977.jpg',
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
      image: 'https://i.pinimg.com/736x/0c/99/e3/0c99e3f07e3824340bf4d02546cbce42.jpg',
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
      image: 'https://i.pinimg.com/1200x/c4/a1/68/c4a1685f91c3ed4ba844c3a7c2b008e5.jpg',
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
      image: 'https://i.pinimg.com/736x/bc/f6/b0/bcf6b0d04ed11bf4062d9b5f5dcb3b4e.jpg',
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