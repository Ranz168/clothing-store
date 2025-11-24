export interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
  description: string;
  sizes: string[];
  colors: string[];
  inStock: boolean;
  rating: number; // Add this line
}