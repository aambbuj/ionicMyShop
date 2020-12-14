import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShowDistributorPageRoutingModule } from './show-distributor-routing.module';

import { ShowDistributorPage } from './show-distributor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShowDistributorPageRoutingModule
  ],
  declarations: [ShowDistributorPage]
})
export class ShowDistributorPageModule {}
