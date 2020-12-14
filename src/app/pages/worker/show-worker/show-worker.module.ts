import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShowWorkerPageRoutingModule } from './show-worker-routing.module';

import { ShowWorkerPage } from './show-worker.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShowWorkerPageRoutingModule
  ],
  declarations: [ShowWorkerPage]
})
export class ShowWorkerPageModule {}
