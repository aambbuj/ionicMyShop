import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShowDistributorPage } from './show-distributor.page';

const routes: Routes = [
  {
    path: '',
    component: ShowDistributorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShowDistributorPageRoutingModule {}
