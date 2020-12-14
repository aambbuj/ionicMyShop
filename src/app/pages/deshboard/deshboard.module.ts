import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeshboardPageRoutingModule } from './deshboard-routing.module';

import { DeshboardPage } from './deshboard.page';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
    IonicModule,
    DeshboardPageRoutingModule
  ],
  declarations: [
    DeshboardPage,
  ]
})
export class DeshboardPageModule {}
