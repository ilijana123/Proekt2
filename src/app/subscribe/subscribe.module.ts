import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 

import { SubscribeComponent } from './subscribe.component';

@NgModule({
  declarations: [SubscribeComponent],
  imports: [CommonModule, FormsModule], 
  exports: [SubscribeComponent]
})
export class SubscribeModule { }