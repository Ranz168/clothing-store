import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCard } from '../product-card/product-card';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-men',
  templateUrl: './men.html',
  styleUrls: ['./men.css'],
  standalone: true,
  imports: [CommonModule, ProductCard] // Keep ProductCard in imports
})
export class Men implements OnInit {
  menProducts: any[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.menProducts = this.productService.getProductsByCategory('Men');
  }
}