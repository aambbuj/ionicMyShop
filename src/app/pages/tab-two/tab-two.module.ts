import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabTwoPageRoutingModule } from './tab-two-routing.module';

import { TabTwoPage } from './tab-two.page';
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
    TabTwoPageRoutingModule
  ],
  declarations: [TabTwoPage]
})
export class TabTwoPageModule {}
