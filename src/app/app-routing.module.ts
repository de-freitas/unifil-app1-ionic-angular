import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home', 
    pathMatch: 'full'
  },
  {
    path: 'sou-empresa',
    loadChildren: () => import('./sou-empresa/sou-empresa.module').then( m => m.SouEmpresaPageModule)
  },
  {
    path: 'sou-aluno',
    loadChildren: () => import('./sou-aluno/sou-aluno.module').then( m => m.SouAlunoPageModule)
  },
  {
    path: 'empresa-autenticacao',
    loadChildren: () => import('./empresa-autenticacao/empresa-autenticacao.module').then( m => m.EmpresaAutenticacaoPageModule)
  },
  {
    path: 'cadastro-vagas/:idEmpresa',
    loadChildren: () => import('./cadastro-vagas/cadastro-vagas.module').then( m => m.CadastroVagasPageModule)
  },  {
    path: 'empresa-vagas',
    loadChildren: () => import('./empresa-vagas/empresa-vagas.module').then( m => m.EmpresaVagasPageModule)
  }


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
