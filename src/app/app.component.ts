import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterLink,
    RouterOutlet,
  ],
  template: `
    <main>
    <a routerLink="/cart" class="brand-logo">
    <img src="/assets/logo.png" alt="logo" class="brand-title"> 
    <span class="brand-text">Ilijana's Shoes</span>
    <img src="/assets/cart-icon.svg" alt="cart" class="cart-icon">
    <span class="checkout-text">Checkout</span>
</a>
    <section class="content">
        <router-outlet></router-outlet>
    </section>
</main>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'homes';
}