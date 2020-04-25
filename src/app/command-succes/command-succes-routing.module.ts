import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CommandSuccesPage } from './command-succes.page';

const routes: Routes = [
  {
    path: '',
    component: CommandSuccesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CommandSuccesPageRoutingModule {}
