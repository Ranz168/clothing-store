import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { BehaviorSubject } from 'rxjs';

export interface CartItem {
  product: Product;
  quantity: number;
  selectedSize: string;
  selectedColor: string;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: CartItem[] = [];
  private storageKey = 'clothing-store-cart';
  private cartSubject = new BehaviorSubject<CartItem[]>([]);
  public cart$ = this.cartSubject.asObservable();

  constructor() {
    this.loadCartFromStorage();
  }

  addToCart(product: Product, size: string, color: string): void {
    const existingItem = this.cartItems.find(item => 
      item.product.id === product.id && 
      item.selectedSize === size && 
      item.selectedColor === color
    );

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      this.cartItems.push({
        product,
        quantity: 1,
        selectedSize: size,
        selectedColor: color
      });
    }
    this.saveCartToStorage();
    this.cartSubject.next([...this.cartItems]);
  }

  removeFromCart(item: CartItem): void {
    const index = this.cartItems.indexOf(item);
    if (index > -1) {
      this.cartItems.splice(index, 1);
      this.saveCartToStorage();
      this.cartSubject.next([...this.cartItems]);
    }
  }

  updateQuantity(item: CartItem, quantity: number): void {
    if (quantity <= 0) {
      this.removeFromCart(item);
    } else {
      item.quantity = quantity;
      this.saveCartToStorage();
      this.cartSubject.next([...this.cartItems]);
    }
  }

  getCartItems(): CartItem[] {
    return [...this.cartItems];
  }

  getTotalPrice(): number {
    return this.cartItems.reduce((total, item) => 
      total + (item.product.price * item.quantity), 0
    );
  }

  getTotalItems(): number {
    return this.cartItems.reduce((total, item) => total + item.quantity, 0);
  }

  clearCart(): void {
    this.cartItems = [];
    this.saveCartToStorage();
    this.cartSubject.next([]);
  }

  isCartEmpty(): boolean {
    return this.cartItems.length === 0;
  }

  private saveCartToStorage(): void {
    try {
      localStorage.setItem(this.storageKey, JSON.stringify(this.cartItems));
    } catch (error) {
      console.error('Error saving cart to localStorage:', error);
    }
  }

  private loadCartFromStorage(): void {
    try {
      const storedCart = localStorage.getItem(this.storageKey);
      if (storedCart) {
        this.cartItems = JSON.parse(storedCart);
        this.cartSubject.next([...this.cartItems]);
      }
    } catch (error) {
      console.error('Error loading cart from localStorage:', error);
      this.cartItems = [];
    }
  }
}