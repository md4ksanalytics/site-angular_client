import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { CommonModule } from "@angular/common"; 
import { ReactiveFormsModule } from "@angular/forms";
import { UserComponent } from "./user/user.component";
import { RouterModule, Routes } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { ModuleOprationComponent } from "./module-opration/module-opration.component";
import { CoreCardModule } from "@core/components/core-card/core-card.module";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { TranslateModule } from "@ngx-translate/core";
import { NgxDatatableModule } from "@swimlane/ngx-datatable";
import { CoreDirectivesModule } from "@core/directives/directives";
import { UserAddComponent } from "./user/add/user.add.component";
import { OrganizationComponent } from './organization/organization.component';
import { OrganizationAddComponent } from "./organization/add/organization.add.component";
import { HttpClientModule } from "@angular/common/http"


import { LovComponent } from "./llov/lov/lov.component";
import { LovdtlComponent } from './llov/lovdtl/lovdtl.component';
import { AddComponent } from './llov/lovdtl/add/add.component';

const routes: Routes = [{ path: "admin/user", component: UserComponent },
{ path: "admin/user/add", component: UserAddComponent },{ path: "admin/user/edit", component: UserAddComponent },
{ path: "admin/organization", component:OrganizationComponent},
{ path: "admin/organization/add", component:OrganizationAddComponent},{ path: "admin/organization/edit", component:OrganizationAddComponent},
{path:"admin/llov/lov", component:LovComponent},
{path:"admin/llov/lovdtl", component:LovdtlComponent},
{path:"admin/llov/lovdtl/edit",component:LovdtlComponent},
{path:"admin/llov/lovdtl/add", component:AddComponent},


];

@NgModule({
  declarations: [LovComponent, UserComponent,UserAddComponent, OrganizationComponent, OrganizationAddComponent, LovdtlComponent,AddComponent],
  
  schemas:[NO_ERRORS_SCHEMA],
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
})
export class AdminModule {}
