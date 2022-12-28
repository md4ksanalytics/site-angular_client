import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LOVDetailsComponent } from './lov-details/lov-details.component';

const routes = [
  {
    path:'LOV-Details', Component:LOVDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes),
    FormsModule
  ],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
