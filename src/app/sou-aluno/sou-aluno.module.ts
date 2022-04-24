import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SouAlunoPageRoutingModule } from './sou-aluno-routing.module';

import { SouAlunoPage } from './sou-aluno.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SouAlunoPageRoutingModule
  ],
  declarations: [SouAlunoPage]
})
export class SouAlunoPageModule {}
