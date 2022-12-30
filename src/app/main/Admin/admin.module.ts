import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { LovComponent } from './Lov/lov/lov.component';
import { LOVDetailsComponent } from './Lov/LOV-Details/lov-details.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    LovComponent,
    LOVDetailsComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule


    
  ]
})
export class AdminModule { }
