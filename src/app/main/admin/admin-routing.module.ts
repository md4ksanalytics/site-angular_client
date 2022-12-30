import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModuleOprationComponent } from './module-opration/module-opration.component';


const routes: Routes = [
  {path: 'module-opration', component:ModuleOprationComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule
  ]
})
export class AdminRoutingModule { }
