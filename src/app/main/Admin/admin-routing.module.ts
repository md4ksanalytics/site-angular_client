import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LOVDetailsComponent } from './LOV-Details/lov-details.component';
import { LovComponent } from './lov/lov.component';


const routes: Routes = [
  {path:'admin/lov/dtl', component:LOVDetailsComponent},
  {path:'admin/lov', component:LovComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
