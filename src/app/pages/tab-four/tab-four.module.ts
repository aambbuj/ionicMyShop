import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabFourPageRoutingModule } from './tab-four-routing.module';

import { TabFourPage } from './tab-four.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabFourPageRoutingModule
  ],
  declarations: [TabFourPage]
})
export class TabFourPageModule {}
