import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { DemoComponent } from './organization/demo/demo.component';


const routes: Routes = [
  {path: 'demo', component:DemoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes), 
    FormsModule 
  ],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
