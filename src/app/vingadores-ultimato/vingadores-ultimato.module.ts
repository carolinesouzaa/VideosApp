import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VingadoresUltimatoPageRoutingModule } from './vingadores-ultimato-routing.module';

import { VingadoresUltimatoPage } from './vingadores-ultimato.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VingadoresUltimatoPageRoutingModule
  ],
  declarations: [VingadoresUltimatoPage]
})
export class VingadoresUltimatoPageModule {}
