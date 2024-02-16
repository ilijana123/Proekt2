import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocationComponent } from '../product/product';
import { HousingLocation } from '../housinglocation';
import { HousingService } from '../products';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HousingLocationComponent
  ],
  template: `
    <section>
      <form>
        <input type="text" placeholder="Filter by category" #filter>
        <button class="primary" type="button" (click)="filterResults(filter.value)">Search</button>
      </form>
    </section>
    <section class="results">
      <app-housing-location
        *ngFor="let housingLocation of filteredList"
        [housingLocation]="housingLocation">
      </app-housing-location>
    </section>
  `,
  styleUrls: ['./home.component.css'],
})

export class HomeComponent {

  housingLocationList: HousingLocation[] = [];
  housingService: HousingService = inject(HousingService);
  filteredList: HousingLocation[] = [];
  router: any;

  constructor() {
    (async () => {
      this.housingLocationList = await this.housingService.getAllHousingLocations();
      this.filteredList = this.housingLocationList;
    })();
  }

  filterResults(text: string) {
    if (!text) {
      this.filteredList = this.housingLocationList;
      return;
    }

    this.filteredList = this.housingLocationList.filter(
      housingLocation => housingLocation?.category.toLowerCase().includes(text.toLowerCase())
    );
  }
  subscribe(firstName: string, lastName: string, email: string) {
    // Process subscription here
    console.log('Subscribed:', { firstName, lastName, email });
    
    // Navigate to the subscribe route
    this.router.navigate(['/subscribe']);
  }
}