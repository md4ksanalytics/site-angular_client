import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LOVDetailsComponent } from './LOV-Details/lov-details.component';


const routes: Routes = [
  {path:'admin/lov/dtl', component:LOVDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
