import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sale',
  templateUrl: './sale.html',
  styleUrls: ['./sale.css'],
  standalone: true,
  imports: [CommonModule]
})
export class Sale {
  saleItems = [
    {
      name: 'Summer Sale',
      discount: 'Up to 50% OFF',
      image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=400&h=200&fit=crop',
      description: 'Get ready for summer with amazing discounts on selected items'
    },
    {
      name: 'Clearance',
      discount: 'Up to 70% OFF',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=200&fit=crop',
      description: 'Last chance to grab these items at unbelievable prices'
    }
  ];
}