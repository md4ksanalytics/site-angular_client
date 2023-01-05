import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common"; 
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
<<<<<<< HEAD
import { AddmenuComponent } from "./menumodel/addmenu.component";
import { MenuAddComponent } from "./menumodel/addmenu/menu.add.component";
import { MenuselectComponent } from "./menumodel/addmenu/selectmenu/menuselect/menuselect.component";
=======
import { LovComponent } from "./llov/lov/lov.component";
import { LovdtlComponent } from './llov/lovdtl/lovdtl.component';
import { AddComponent } from './llov/lovdtl/add/add.component';
>>>>>>> branch 'main' of https://github.com/md4ksanalytics/site-angular_client

const routes: Routes = [{ path: "admin/user", component: UserComponent },
<<<<<<< HEAD
{ path: "admin/user/add", component: UserAddComponent },
{ path: "admin/user/edit", component: UserAddComponent },
//Addmenu 
{ path: "admin/addmenu", component: AddmenuComponent },
{ path: "admin/addmenu/menu.add", component:MenuAddComponent},
{ path: "admin/addmenu/menuselect", component: MenuselectComponent },
=======
{ path: "admin/user/add", component: UserAddComponent },{ path: "admin/user/edit", component: UserAddComponent },
{path:"admin/llov/lov", component:LovComponent},
{path:"admin/llov/lovdtl", component:LovdtlComponent},
{path:"admin/llov/lovdtl/edit",component:LovdtlComponent},
{path:"admin/llov/lovdtl/add", component:AddComponent}

>>>>>>> branch 'main' of https://github.com/md4ksanalytics/site-angular_client
];

@NgModule({
<<<<<<< HEAD
  declarations: [LovComponent, UserComponent,UserAddComponent, AddmenuComponent, MenuAddComponent,
    MenuselectComponent,],
=======
  declarations: [LovComponent, UserComponent,UserAddComponent,LovdtlComponent, AddComponent],
>>>>>>> branch 'main' of https://github.com/md4ksanalytics/site-angular_client
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
