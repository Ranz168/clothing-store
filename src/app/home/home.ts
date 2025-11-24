import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
  standalone: true,
  imports: [CommonModule, RouterModule]
})
export class Home {
  featuredCategories = [
    {
      name: 'Men',
      image: 'https://via.placeholder.com/300x200/3498db/FFFFFF?text=Men',
      route: '/men'
    },
    {
      name: 'Women', 
      image: 'https://via.placeholder.com/300x200/e74c3c/FFFFFF?text=Women',
      route: '/women'
    },
    {
      name: 'Sale',
      image: 'https://via.placeholder.com/300x200/2ecc71/FFFFFF?text=Sale',
      route: '/sale'
    }
  ];
}