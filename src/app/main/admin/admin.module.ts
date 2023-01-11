import { Component, CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { CommonModule } from "@angular/common"; 
import { ReactiveFormsModule } from "@angular/forms";
import { UserComponent } from "./user/user.component";
import { ActivatedRoute, RouterModule, Routes } from "@angular/router";
import { ModuleOprationComponent } from "./module-opration/module-opration.component";
import { CoreCardModule } from "@core/components/core-card/core-card.module";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { TranslateModule } from "@ngx-translate/core";
import { NgxDatatableModule } from "@swimlane/ngx-datatable";
import { CoreDirectivesModule } from "@core/directives/directives";
import { UserAddComponent } from "./user/add/user.add.component";
import { AddComponent } from './module-opration/add/add.component';
// import { ServiceComponent } from './module-opration/service/service.component';

const routes: Routes = [{ path: "admin/user", component: UserComponent },
{path:"module-opration",component:ModuleOprationComponent},
{ path: "admin/user/add", component: UserAddComponent },
{ path: "admin/module-opration/add", component: AddComponent },
// { path: "admin/module-opration/edit", component: ModuleOprationComponent },
// {path:'admin/module-opration',component:ModuleOprationComponent},

{ path: "admin/module-opration/edit", component: AddComponent }];
@NgModule({
  declarations: [UserComponent,UserAddComponent,ModuleOprationComponent, AddComponent],
  imports: [
    CommonModule, 
    NgbModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    CoreCardModule,
    TranslateModule,
    NgxDatatableModule,
    CoreDirectivesModule
    
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AdminModule {}
