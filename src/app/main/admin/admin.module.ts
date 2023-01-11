import { Component, CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { CommonModule } from "@angular/common"; 
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { UserComponent } from "./user/user.component";
import { RouterModule, Routes } from "@angular/router";
import { ModuleOprationComponent } from "./module-opration/module-opration.component";
import { CoreCardModule } from "@core/components/core-card/core-card.module";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { TranslateModule } from "@ngx-translate/core";
import { NgxDatatableModule } from "@swimlane/ngx-datatable";
import { CoreDirectivesModule } from "@core/directives/directives";
import { UserAddComponent } from "./user/add/user.add.component";
import { AddComponent } from "./module-opration/add/add.component";
import { HttpClientModule } from "@angular/common/http";
// import { LovComponent } from "./llov/lov/lov.component";
// import { LovdtlComponent } from './llov/lovdtl/lovdtl.component';
// import { AddComponent } from './llov/lovdtl/add/add.component';

const routes: Routes = [{ path: "admin/user", component: UserComponent },
{ path: "admin/user/add", component: UserAddComponent },{ path: "admin/user/edit", component: UserAddComponent },
// {path:"admin/llov/lov", component:LovComponent},
// {path:"admin/llov/lovdtl", component:LovdtlComponent},
// {path:"admin/llov/lovdtl/edit",component:LovdtlComponent},
// {path:"admin/llov/lovdtl/add", component:AddComponent}
{path:'module-opration',component:ModuleOprationComponent},
{path:'admin/module-opration/add',component:AddComponent},

{ path: "admin/module-opration/edit", component: AddComponent}];
@NgModule({
  declarations: [UserComponent,UserAddComponent,ModuleOprationComponent,AddComponent],
  imports: [
    CommonModule, 
    NgbModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    CoreCardModule,
    TranslateModule,
    NgxDatatableModule,
    CoreDirectivesModule,
    HttpClientModule,
    FormsModule
    
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AdminModule {}
