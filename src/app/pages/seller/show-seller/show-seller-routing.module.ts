import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShowSellerPage } from './show-seller.page';

const routes: Routes = [
  {
    path: '',
    component: ShowSellerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShowSellerPageRoutingModule {}
