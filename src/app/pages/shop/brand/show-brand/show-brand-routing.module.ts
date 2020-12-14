import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShowBrandPage } from './show-brand.page';

const routes: Routes = [
  {
    path: '',
    component: ShowBrandPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShowBrandPageRoutingModule {}
