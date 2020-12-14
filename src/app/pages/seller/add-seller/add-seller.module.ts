import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddSellerPageRoutingModule } from './add-seller-routing.module';

import { AddSellerPage } from './add-seller.page';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    IonicModule,
    AddSellerPageRoutingModule
  ],
  declarations: [AddSellerPage]
})
export class AddSellerPageModule {}
