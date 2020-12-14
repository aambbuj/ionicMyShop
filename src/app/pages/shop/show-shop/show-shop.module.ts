import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShowShopPageRoutingModule } from './show-shop-routing.module';

import { ShowShopPage } from './show-shop.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShowShopPageRoutingModule
  ],
  declarations: [ShowShopPage]
})
export class ShowShopPageModule {}
