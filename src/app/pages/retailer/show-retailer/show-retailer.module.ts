import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShowRetailerPageRoutingModule } from './show-retailer-routing.module';

import { ShowRetailerPage } from './show-retailer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShowRetailerPageRoutingModule
  ],
  declarations: [ShowRetailerPage]
})
export class ShowRetailerPageModule {}
