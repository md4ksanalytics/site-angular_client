import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LOVDetailsComponent } from './Lov/LOV-Details/lov-details.component';
import { LovComponent } from './Lov/lov/lov.component';


const routes: Routes = [
  {path:'admin/lov', component:LovComponent},
  {
    path:'lov-details', component:LOVDetailsComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
