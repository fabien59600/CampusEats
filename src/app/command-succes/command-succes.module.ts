import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CommandSuccesPageRoutingModule } from './command-succes-routing.module';

import { CommandSuccesPage } from './command-succes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    CommandSuccesPageRoutingModule
  ],
  declarations: [CommandSuccesPage]
})
export class CommandSuccesPageModule {}
