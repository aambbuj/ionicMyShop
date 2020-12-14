import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddDistributorPageRoutingModule } from './add-distributor-routing.module';

import { AddDistributorPage } from './add-distributor.page';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
    CommonModule,
    IonicModule,
    AddDistributorPageRoutingModule
  ],
  declarations: [AddDistributorPage]
})
export class AddDistributorPageModule {}
