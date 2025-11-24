import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CartService } from '../services/cart.service';
import { UiService } from '../services/ui.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.html',
  styleUrls: ['./header.css'],
  standalone: true,
  imports: [CommonModule, RouterModule]
})
export class Header {
  constructor(
    private cartService: CartService,
    private uiService: UiService
  ) {}

  get totalItems(): number {
    return this.cartService.getTotalItems();
  }

  toggleCart(): void {
    this.uiService.toggleCart();
  }
}