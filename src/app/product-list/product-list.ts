import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductCard } from '../product-card/product-card';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.html',
  styleUrls: ['./product-list.css'],
  standalone: true,
  imports: [CommonModule, FormsModule, ProductCard]
})
export class ProductList implements OnInit {
  products: any[] = [];
  filteredProducts: any[] = [];
  categories: string[] = [];
  selectedCategory: string = 'all';
  searchQuery: string = '';

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.products = this.productService.getProducts();
    this.filteredProducts = this.products;
    this.categories = ['all', ...this.productService.getCategories()];
  }

  filterByCategory(category: string): void {
    this.selectedCategory = category;
    this.applyFilters();
  }

  onSearchChange(): void {
    this.applyFilters();
  }

  private applyFilters(): void {
    let filtered = this.products;

    // Apply category filter
    if (this.selectedCategory !== 'all') {
      filtered = filtered.filter(product => 
        product.category.toLowerCase() === this.selectedCategory.toLowerCase()
      );
    }

    // Apply search filter
    if (this.searchQuery.trim()) {
      const query = this.searchQuery.toLowerCase();
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query)
      );
    }

    this.filteredProducts = filtered;
  }
}