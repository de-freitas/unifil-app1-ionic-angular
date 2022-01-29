import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InitialPageOptionsPage } from './initial-page-options.page';

const routes: Routes = [
  {
    path: '',
    component: InitialPageOptionsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InitialPageOptionsPageRoutingModule {}
