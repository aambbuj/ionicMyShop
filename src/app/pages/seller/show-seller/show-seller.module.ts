import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShowSellerPageRoutingModule } from './show-seller-routing.module';

import { ShowSellerPage } from './show-seller.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShowSellerPageRoutingModule
  ],
  declarations: [ShowSellerPage]
})
export class ShowSellerPageModule {}
