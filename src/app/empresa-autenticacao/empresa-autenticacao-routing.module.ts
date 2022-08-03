import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmpresaAutenticacaoPage } from './empresa-autenticacao.page';

const routes: Routes = [
  {
    path: '',
    component: EmpresaAutenticacaoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmpresaAutenticacaoPageRoutingModule {}
