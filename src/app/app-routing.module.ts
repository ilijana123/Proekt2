import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { CartComponent } from './cart/cart.component';
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'subscribe', component: SubscribeComponent },
  { path: 'cart', component: CartComponent }, // Add route for subscribe component
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }