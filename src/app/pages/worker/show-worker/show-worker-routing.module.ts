import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShowWorkerPage } from './show-worker.page';

const routes: Routes = [
  {
    path: '',
    component: ShowWorkerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShowWorkerPageRoutingModule {}
