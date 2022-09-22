import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MinionsAOrigemPageRoutingModule } from './minions-a-origem-routing.module';

import { MinionsAOrigemPage } from './minions-a-origem.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MinionsAOrigemPageRoutingModule
  ],
  declarations: [MinionsAOrigemPage]
})
export class MinionsAOrigemPageModule {}
