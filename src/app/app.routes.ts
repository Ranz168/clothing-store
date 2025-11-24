import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Men } from './men/men';
import { Women } from './women/women';
import { Sale } from './sale/sale';
import { About } from './about/about';
import { ProductList } from './product-list/product-list';

export const routes: Routes = [
  { path: '', component: Home, title: 'Home - FashionStore' },
  { path: 'home', redirectTo: '', pathMatch: 'full' },
  { path: 'men', component: Men, title: 'Men - FashionStore' },
  { path: 'women', component: Women, title: 'Women - FashionStore' },
  { path: 'sale', component: Sale, title: 'Sale - FashionStore' },
  { path: 'about', component: About, title: 'About - FashionStore' },
  { path: 'products', component: ProductList, title: 'Products - FashionStore' },
  { path: '**', redirectTo: '' } // Redirect unknown routes to home
];