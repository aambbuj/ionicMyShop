import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeshboardPage } from './deshboard.page';

const routes: Routes = [
  {
    path: '',
    component: DeshboardPage,
    children:
      [
        {
          path: '',
          children:
            [
              { path: '',loadChildren:'../tab-one/tab-one.module#TabOnePageModule'},
            ]
        },
        {
          path: 'tab2',
          children:
            [
              { path: '',loadChildren:'../tab-two/tab-two.module#TabTwoPageModule'},

            ]
        },
        {
          path: 'tab3',
          children:
            [
              { path: '',loadChildren:'../tab-three/tab-three.module#TabThreePageModule'},

            ]
        },
        {
          path: 'tab4',
          children:
            [
              { path: '',loadChildren:'../tab-four/tab-four.module#TabFourPageModule'},

            ]
        },
      ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeshboardPageRoutingModule {}
