import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmpresaAutenticacaoPageRoutingModule } from './empresa-autenticacao-routing.module';

import { EmpresaAutenticacaoPage } from './empresa-autenticacao.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmpresaAutenticacaoPageRoutingModule
  ],
  declarations: [EmpresaAutenticacaoPage]
})
export class EmpresaAutenticacaoPageModule {}
