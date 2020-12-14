import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShowBrandPageRoutingModule } from './show-brand-routing.module';

import { ShowBrandPage } from './show-brand.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShowBrandPageRoutingModule
  ],
  declarations: [ShowBrandPage]
})
export class ShowBrandPageModule {}
