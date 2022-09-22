import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AEraDeUltronPageRoutingModule } from './a-era-de-ultron-routing.module';

import { AEraDeUltronPage } from './a-era-de-ultron.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AEraDeUltronPageRoutingModule
  ],
  declarations: [AEraDeUltronPage]
})
export class AEraDeUltronPageModule {}
