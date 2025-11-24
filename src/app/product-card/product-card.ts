import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.html',
  styleUrls: ['./product-card.css'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class ProductCard implements OnInit {
  @Input() product: any;
  selectedSize: string = '';
  selectedColor: string = '';

  constructor(private cartService: CartService) {}

  ngOnInit() {
    if (this.product.sizes && this.product.sizes.length > 0) {
      this.selectedSize = this.product.sizes[0];
    }
    if (this.product.colors && this.product.colors.length > 0) {
      this.selectedColor = this.product.colors[0];
    }
  }

  addToCart(): void {
    if (this.selectedSize && this.selectedColor) {
      this.cartService.addToCart(this.product, this.selectedSize, this.selectedColor);
      alert(`${this.product.name} added to cart!`);
    }
  }

  // Helper method to determine badge type
  getBadgeType(): string {
    if (this.product.id <= 2 || this.product.id === 9 || this.product.id === 10) {
      return 'new';
    } else if (this.product.id === 3 || this.product.id === 11) {
      return 'sale';
    } else if (this.product.id === 7 || this.product.id === 14) {
      return 'limited';
    }
    return '';
  }

  getBadgeText(): string {
    const type = this.getBadgeType();
    switch (type) {
      case 'new': return 'New';
      case 'sale': return 'Sale';
      case 'limited': return 'Limited';
      default: return '';
    }
  }
}