import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AEraDeUltronPage } from './a-era-de-ultron.page';

const routes: Routes = [
  {
    path: '',
    component: AEraDeUltronPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AEraDeUltronPageRoutingModule {}
