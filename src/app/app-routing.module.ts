import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home', //remover 'sou-empresa' e colocar 'home'
    pathMatch: 'full'
  },
  {
    path: 'sou-empresa',
    loadChildren: () => import('./sou-empresa/sou-empresa.module').then( m => m.SouEmpresaPageModule)
  },
  {
    path: 'sou-aluno',
    loadChildren: () => import('./sou-aluno/sou-aluno.module').then( m => m.SouAlunoPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
