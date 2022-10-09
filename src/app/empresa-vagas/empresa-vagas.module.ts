import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmpresaVagasPageRoutingModule } from './empresa-vagas-routing.module';

import { EmpresaVagasPage } from './empresa-vagas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmpresaVagasPageRoutingModule
  ],
  declarations: [EmpresaVagasPage]
})
export class EmpresaVagasPageModule {}
