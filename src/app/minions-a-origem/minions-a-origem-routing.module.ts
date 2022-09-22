import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MinionsAOrigemPage } from './minions-a-origem.page';

const routes: Routes = [
  {
    path: '',
    component: MinionsAOrigemPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MinionsAOrigemPageRoutingModule {}
