import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HousingLocation } from './housinglocation';

@Injectable()
export class CartService {

   items: HousingLocation[] = [];

  constructor(private http: HttpClient) { }

  addToCart(location: HousingLocation): void {
    this.items.push(location);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  getShippingRates() {
    return this.http.get('/assets/shipping.json');
  }
}