import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddRetailerPage } from './add-retailer.page';

const routes: Routes = [
  {
    path: '',
    component: AddRetailerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddRetailerPageRoutingModule {}
