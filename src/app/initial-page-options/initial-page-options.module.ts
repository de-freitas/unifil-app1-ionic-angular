import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InitialPageOptionsPageRoutingModule } from './initial-page-options-routing.module';

import { InitialPageOptionsPage } from './initial-page-options.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InitialPageOptionsPageRoutingModule
  ],
  declarations: [InitialPageOptionsPage]
})
export class InitialPageOptionsPageModule {}
