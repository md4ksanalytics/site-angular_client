import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
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
import { LovComponent } from "./lov/lov.component";
import { LovdtlComponent } from "./lovdtl/lovdtl.component";
import { AddComponent } from "./lovdtl/add/add.component";


const routes: Routes = [{ path: "admin/user", component: UserComponent },
{ path: "admin/user/add", component: UserAddComponent },{ path: "admin/user/edit", component: UserAddComponent },
{path:"admin/lov", component:LovComponent},
{path:"admin/lovdtl", component:LovdtlComponent},
{path:"admin/lovdtl/edit",component:AddComponent},
{path:"admin/lovdtl/add", component:AddComponent}

];

@NgModule({
  declarations: [LovComponent, UserComponent,UserAddComponent,LovdtlComponent, AddComponent],
  schemas:[NO_ERRORS_SCHEMA],
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
