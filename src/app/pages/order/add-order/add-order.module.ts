import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AddOrderPageRoutingModule } from './add-order-routing.module';
import { AddOrderPage } from './add-order.page';
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
    AddOrderPageRoutingModule
  ],
  declarations: [AddOrderPage]
})
export class AddOrderPageModule {}
