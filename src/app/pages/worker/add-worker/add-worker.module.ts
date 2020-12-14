import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddWorkerPageRoutingModule } from './add-worker-routing.module';

import { AddWorkerPage } from './add-worker.page';
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
    AddWorkerPageRoutingModule
  ],
  declarations: [AddWorkerPage]
})
export class AddWorkerPageModule {}
