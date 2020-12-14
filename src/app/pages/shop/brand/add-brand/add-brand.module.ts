import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddBrandPageRoutingModule } from './add-brand-routing.module';

import { AddBrandPage } from './add-brand.page';
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
    AddBrandPageRoutingModule
  ],
  declarations: [AddBrandPage]
})
export class AddBrandPageModule {}
