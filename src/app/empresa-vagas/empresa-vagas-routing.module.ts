import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmpresaVagasPage } from './empresa-vagas.page';

const routes: Routes = [
  {
    path: '',
    component: EmpresaVagasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmpresaVagasPageRoutingModule {}
