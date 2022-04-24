import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SouAlunoPage } from './sou-aluno.page';

const routes: Routes = [
  {
    path: '',
    component: SouAlunoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SouAlunoPageRoutingModule {}
