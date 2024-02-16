import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CartService } from '../cart-service';
import { CurrencyPipe } from '@angular/common';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  items: { name: string }[] = [];
 checkoutForm;

  constructor(@Inject(CartService) private cartService: CartService, private formBuilder: FormBuilder) {
    this.items = this.cartService.getItems().map(product => ({ name: product.name }));

    this.checkoutForm = this.formBuilder.group({
      name: '',
      address: ''
    });
  }

onSubmit(customerData: any) {
  // process checkout data here
  console.warn('Your order has been submitted', customerData);

  this.items = this.cartService.clearCart() as { name: string; }[];
  this.checkoutForm.reset();
}


ngOnInit() {
  this.items = this.cartService.getItems().map(product => ({ name: product.name }));
}

}