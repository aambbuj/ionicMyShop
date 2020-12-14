import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddRetailerPageRoutingModule } from './add-retailer-routing.module';

import { AddRetailerPage } from './add-retailer.page';
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
    AddRetailerPageRoutingModule
  ],
  declarations: [AddRetailerPage]
})
export class AddRetailerPageModule {}
