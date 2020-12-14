import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddCategoryPageRoutingModule } from './add-category-routing.module';

import { AddCategoryPage } from './add-category.page';
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
    AddCategoryPageRoutingModule
  ],
  declarations: [AddCategoryPage]
})
export class AddCategoryPageModule {}
