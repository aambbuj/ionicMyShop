import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShowRetailerPage } from './show-retailer.page';

const routes: Routes = [
  {
    path: '',
    component: ShowRetailerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShowRetailerPageRoutingModule {}
