
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from '../products';
import { HousingLocation } from '../housinglocation';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Input } from '@angular/core';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
@Component({
  selector: 'app-details',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  template: `
    <article>
      <img class="listing-photo" [src]="housingLocation?.photo"
        alt="Exterior photo of {{housingLocation?.name}}"/>
      <section class="listing-description">
        <h2 class="listing-heading">{{housingLocation?.name}}</h2>
        <p class="listing-location">{{housingLocation?.name}}, {{housingLocation?.category}}</p>
      </section>
      <section class="listing-features">
        <h2 class="section-heading">About this housing location</h2>
        <ul>
          <li>Price: {{housingLocation?.price}} $</li>
          <li>Another color: {{housingLocation?.wifi}}</li>
          <li>Antoher size: {{housingLocation?.laundry}}</li>
        </ul>
        <button class="btn btn-info ml-5 " (click)="addToCart(product)" >
        Buy Now
        </button>

      </section>
      <section class="listing-apply">
        <h2 class="section-heading">Subscribe for news</h2>
        <form [formGroup]="applyForm" (submit)="submitApplication()">
        <label for="first-name">First Name</label>
  <input id="first-name" type="text" formControlName="firstName">
  <div *ngIf="applyForm.get('firstName')?.invalid && applyForm.get('firstName')?.touched">
    <div *ngIf="applyForm.get('firstName')?.errors?.['required']">First Name is required.</div>
  </div>

  <label for="last-name">Last Name</label>
  <input id="last-name" type="text" formControlName="lastName">
  <div *ngIf="applyForm.get('lastName')?.invalid && applyForm.get('lastName')?.touched">
    <div *ngIf="applyForm.get('lastName')?.errors?.['required']">Last Name is required.</div>
  </div>

  <label for="email">Email</label>
  <input id="email" type="email" formControlName="email">
  <div *ngIf="applyForm.get('email')?.invalid && applyForm.get('email')?.touched">
    <div *ngIf="applyForm.get('email')?.errors?.['required']">Email is required.</div>
    <div *ngIf="applyForm.get('email')?.errors?.['email']">Please enter a valid email address.</div>
  </div>

  <button type="submit" class="primary">Subscribe</button>

  <div class="overlay" *ngIf="popup">
    <div class="popup">
      <h2></h2>
      <a class="close" (click)="popup = false">&times;</a>
      <div class="content">
        Thank you {{applyForm.value.firstName}} for your subscription
      </div>
    </div>
  </div>
</form>
      </section>
    </article>
  `,
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent {
  popup = false
  route: ActivatedRoute = inject(ActivatedRoute);
  housingService = inject(HousingService);
  housingLocation: HousingLocation | undefined;
  applyForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email])
  });
product: any;
  cartService: any;

  constructor() {
    const housingLocationId = parseInt(this.route.snapshot.params['id'], 10);
    this.housingLocation = this.housingService.getHousingLocationById(housingLocationId);
  }

  submitApplication() {
    if (this.applyForm.valid) {
      this.housingService.submitApplication(
        this.applyForm.value.firstName ?? '',
        this.applyForm.value.lastName ?? '',
        this.applyForm.value.email ?? ''
      );
      this.popup = true;
    } else {
      // Show error message or take appropriate action
      alert("Please fill in all fields correctly.");
    }
  }
  share() {
    window.alert('The product has been shared!');
  }
  addToCart(product: any) {
    window.alert('Your product has been added to the cart!');
    this.cartService.addToCart(product);
  }
}
