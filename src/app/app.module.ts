import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router'; 
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component'; 
import { CartComponent } from './cart/cart.component';
import { SubscribeComponent } from './subscribe/subscribe.component'; 

@NgModule({
  imports: [ 
    BrowserModule, 
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule, 
    RouterModule.forRoot([
      { path: 'cart', component: CartComponent },
      { path: 'subscribe', component: SubscribeComponent },
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: '**', redirectTo: '' } 
    ])
  ],
  declarations: [ 
    CartComponent,
    SubscribeComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }