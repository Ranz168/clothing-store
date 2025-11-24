import { Component } from '@angular/core';
import { Header } from './header/header';
import { Cart } from './cart/cart';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: true,
  imports: [Header, Cart, RouterModule] // Add RouterModule here
})
export class App {
  title = 'clothing-store';
}