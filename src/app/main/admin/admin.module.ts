import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common"; 
import { LovComponent } from "./Lov/lov/lov.component";
import { ReactiveFormsModule } from "@angular/forms";
import { UserComponent } from "./user/user.component";
import { RouterModule, Routes } from "@angular/router";
import { ModuleOprationComponent } from "./module-opration/module-opration.component";
import { CoreCardModule } from "@core/components/core-card/core-card.module";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { TranslateModule } from "@ngx-translate/core";
import { NgxDatatableModule } from "@swimlane/ngx-datatable";
import { CoreDirectivesModule } from "@core/directives/directives";
import { UserAddComponent } from "./user/add/user.add.component";
import { AddmenuComponent } from "./menumodel/addmenu.component";
import { MenuAddComponent } from "./menumodel/addmenu/menu.add.component";
import { MenuselectComponent } from "./menumodel/addmenu/selectmenu/menuselect/menuselect.component";

const routes: Routes = [{ path: "admin/user", component: UserComponent },
{ path: "admin/user/add", component: UserAddComponent },
{ path: "admin/user/edit", component: UserAddComponent },
//Addmenu 
{ path: "admin/addmenu", component: AddmenuComponent },
{ path: "admin/addmenu/menu.add", component:MenuAddComponent},
{ path: "admin/addmenu/menuselect", component: MenuselectComponent },
];

@NgModule({
  declarations: [LovComponent, UserComponent,UserAddComponent, AddmenuComponent, MenuAddComponent,
    MenuselectComponent,],
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
})
export class AdminModule {}
