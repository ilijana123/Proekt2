import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocation } from '../housinglocation';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  template: `
    <section class="listing">
      <img class="listing-photo" [src]="housingLocation.photo" alt="Exterior photo of {{housingLocation.name}}">
      <h2 class="listing-heading">{{ housingLocation.name }}</h2>
      <p class="listing-location">{{ housingLocation.details}}, {{housingLocation.category }}</p>
      <a [routerLink]="['/details', housingLocation.id]">See More</a>
    </section>
  `,
  styleUrls: ['./product.css'],
})

export class HousingLocationComponent {

  @Input() housingLocation!: HousingLocation;

}

