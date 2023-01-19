import { NO_ERRORS_SCHEMA } from "@angular/core";

import { Component, CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { CommonModule } from "@angular/common"; 
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { UserComponent } from "./user/user.component";
import { RouterModule, Routes } from "@angular/router";
import { CoreCardModule } from "@core/components/core-card/core-card.module";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { TranslateModule } from "@ngx-translate/core";
import { NgxDatatableModule } from "@swimlane/ngx-datatable";
import { CoreDirectivesModule } from "@core/directives/directives";
import { UserAddComponent } from "./user/add/user.add.component";
import { AddmenuComponent } from "./menumodel/menu.component";
import { MenuselectComponent } from "./menumodel/selectmenu/addmenu.component";

import { HttpClientModule } from "@angular/common/http";
import { ModuleOprationComponent } from "./module-opration/module-opration.component";
//import { AddComponent } from "./module-opration/add/add.component";
import { OrganizationAddComponent } from "./organization/add/organization.add.component";

const routes: Routes = [
{ path: "admin/user", component: UserComponent },
{ path: "admin/user/add", component: UserAddComponent },
{ path: "admin/user/edit", component: UserAddComponent },
//Addmenu 
{ path: "admin/addmenu", component: AddmenuComponent },
{ path: "admin/addmenu/menuselect", component: MenuselectComponent },
{ path: "admin/addmenu/edit", component: MenuselectComponent },
{ path: "admin/addmenu/delete", component: MenuselectComponent },
//llov


{ path: "admin/organization/add", component: OrganizationAddComponent}

];

@NgModule({
  declarations: [ UserComponent,UserAddComponent, AddmenuComponent, OrganizationAddComponent,
   MenuselectComponent],
 
  //declarations: [UserComponent,UserAddComponent,AddComponent],
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
  schemas:[NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA]
})
export class AdminModule {}
