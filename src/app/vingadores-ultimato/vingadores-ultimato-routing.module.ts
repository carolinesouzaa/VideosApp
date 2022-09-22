import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VingadoresUltimatoPage } from './vingadores-ultimato.page';

const routes: Routes = [
  {
    path: '',
    component: VingadoresUltimatoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VingadoresUltimatoPageRoutingModule {}
