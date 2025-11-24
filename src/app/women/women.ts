import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCard } from '../product-card/product-card';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-women',
  templateUrl: './women.html',
  styleUrls: ['./women.css'],
  standalone: true,
  imports: [CommonModule, ProductCard]
})
export class Women implements OnInit {
  womenProducts: any[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.womenProducts = this.productService.getProductsByCategory('Women');
  }
}