import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModuleOprationComponent } from './module-opration/module-opration.component';



@NgModule({
  declarations: [
    ModuleOprationComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule

  ],exports:[]
})
export class AdminModule { }
