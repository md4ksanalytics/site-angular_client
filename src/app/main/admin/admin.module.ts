import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { CommonModule } from "@angular/common"; 
//import { HttpClient } from "@angular/common/http";
import { ReactiveFormsModule } from "@angular/forms";
import { UserComponent } from "./user/user.component";
import { RouterModule, Routes } from "@angular/router";
import { CoreCardModule } from "@core/components/core-card/core-card.module";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { TranslateModule } from "@ngx-translate/core";
import { NgxDatatableModule } from "@swimlane/ngx-datatable";
import { CoreDirectivesModule } from "@core/directives/directives";
import { UserAddComponent } from "./user/add/user.add.component";
import { AddmenuComponent } from "./menumodel/addmenu.component";
import { MenuselectComponent } from "./menumodel/selectmenu/menuselect.component";
import { LovComponent } from "./llov/lov/lov.component";
import { LovdtlComponent } from './llov/lovdtl/lovdtl.component';
import { AddComponent } from './llov/lovdtl/add/add.component';

const routes: Routes = [{ path: "admin/user", component: UserComponent },
{ path: "admin/user/add", component: UserAddComponent },
{ path: "admin/user/edit", component: UserAddComponent },
//Addmenu 
{ path: "admin/addmenu", component: AddmenuComponent },
//{ path: "admin/addmenu/menu.add", component:MenuAddComponent},
{ path: "admin/addmenu/menuselect", component: MenuselectComponent },
{ path: "admin/addmenu/edit", component: MenuselectComponent },
{ path: "admin/addmenu/delete", component: MenuselectComponent },
//
{path:"admin/llov/lov", component:LovComponent},
{path:"admin/llov/lovdtl", component:LovdtlComponent},
{path:"admin/llov/lovdtl/edit",component:LovdtlComponent},
{path:"admin/llov/lovdtl/add", component:AddComponent}

];

@NgModule({
  declarations: [LovComponent, UserComponent,UserAddComponent, AddmenuComponent,
    MenuselectComponent,LovdtlComponent, AddComponent],
 
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
  schemas:[NO_ERRORS_SCHEMA]
})
export class AdminModule {}
