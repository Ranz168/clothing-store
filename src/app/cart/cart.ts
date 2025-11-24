import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService, CartItem } from '../services/cart.service';
import { UiService } from '../services/ui.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.html',
  styleUrls: ['./cart.css'],
  standalone: true,
  imports: [CommonModule]
})
export class Cart implements OnInit {
  isCartOpen = false;
  cartItems: CartItem[] = [];

  constructor(
    private cartService: CartService,
    private uiService: UiService
  ) {}

  ngOnInit() {
    // Subscribe to cart items
    this.cartService.cart$.subscribe(items => {
      this.cartItems = items;
    });

    // Subscribe to cart open/close state
    this.uiService.cartOpen$.subscribe(isOpen => {
      this.isCartOpen = isOpen;
    });
  }

  get totalPrice(): number {
    return this.cartService.getTotalPrice();
  }

  get totalItems(): number {
    return this.cartService.getTotalItems();
  }

  updateQuantity(item: CartItem, quantity: number): void {
    this.cartService.updateQuantity(item, quantity);
  }

  removeItem(item: CartItem): void {
    this.cartService.removeFromCart(item);
  }

  clearCart(): void {
    this.cartService.clearCart();
  }

  closeCart(): void {
    this.uiService.closeCart();
  }

  checkout(): void {
    if (this.cartItems.length === 0) {
      alert('Your cart is empty!');
      return;
    }
    alert(`Proceeding to checkout! Total: $${this.totalPrice.toFixed(2)}`);
    this.clearCart();
    this.closeCart();
  }
}