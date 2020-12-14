import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShowShopPage } from './show-shop.page';

const routes: Routes = [
  {
    path: '',
    component: ShowShopPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShowShopPageRoutingModule {}
