import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  templateUrl: './about.html',
  styleUrls: ['./about.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class About {
  teamMembers = [
    {
      name: 'John Doe',
      role: 'Founder & CEO',
      image: 'https://via.placeholder.com/150/3498db/FFFFFF?text=JD',
      description: 'Passionate about fashion and customer satisfaction.'
    },
    {
      name: 'Jane Smith',
      role: 'Head of Design',
      image: 'https://via.placeholder.com/150/e74c3c/FFFFFF?text=JS',
      description: 'Creative director with 10+ years in fashion industry.'
    },
    {
      name: 'Mike Johnson',
      role: 'Operations Manager',
      image: 'https://via.placeholder.com/150/2ecc71/FFFFFF?text=MJ',
      description: 'Ensuring smooth operations and timely deliveries.'
    }
  ];

  storeStats = [
    { number: '50K+', label: 'Happy Customers' },
    { number: '5+', label: 'Years in Business' },
    { number: '100+', label: 'Brand Partners' },
    { number: '24/7', label: 'Customer Support' }
  ];
}