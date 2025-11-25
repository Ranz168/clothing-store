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
      image: 'https://i.pinimg.com/1200x/45/ca/eb/45caeb8db20f41323b1dab0ba5e5fc96.jpg',
      description: 'Get ready for summer with amazing discounts on selected items'
    },
    {
      name: 'Clearance',
      discount: 'Up to 70% OFF',
      image: 'https://i.pinimg.com/736x/26/c5/1c/26c51c205b6e53056f6449df8e4ae505.jpg',
      description: 'Last chance to grab these items at unbelievable prices'
    }
  ];
}