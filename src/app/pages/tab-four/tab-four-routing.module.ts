import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabFourPage } from './tab-four.page';

const routes: Routes = [
  {
    path: '',
    component: TabFourPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabFourPageRoutingModule {}
