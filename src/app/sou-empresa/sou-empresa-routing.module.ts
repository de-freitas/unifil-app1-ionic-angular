import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SouEmpresaPage } from './sou-empresa.page';

const routes: Routes = [
  {
    path: '',
    component: SouEmpresaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SouEmpresaPageRoutingModule {}
