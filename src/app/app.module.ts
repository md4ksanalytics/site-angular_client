import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import 'hammerjs';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';
import { ToastrModule } from 'ngx-toastr'; // For auth after login toast

import { CoreModule } from '@core/core.module';
import { CoreCommonModule } from '@core/common.module';
import { CoreSidebarModule, CoreThemeCustomizerModule } from '@core/components';

import { coreConfig } from 'app/app-config';

import { AppComponent } from 'app/app.component';
import { LayoutModule } from 'app/layout/layout.module'; 
import { OAuthModule } from 'angular-oauth2-oidc';
import {ServiceWorkerModule, SwRegistrationOptions} from '@angular/service-worker';
import { environment } from '../environments/environment';
import { HomeComponent } from './main/logs/home.component'; 
import { JwtAuthInterceptor } from './auth/helpers';
import {FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModuleOprationComponent } from './main/admin/module-opration/module-opration.component';
import { DemoComponent } from './main/admin/organization/demo/demo.component';
import { Demo1Component } from './main/admin/organization/demo1/demo1.component';


// import { LOVDetailsComponent } from './main/admin/lov-details/lov-details.component';





// import { RolePermissionComponent } from './main/admin/role-permission/role-permission.component';

// import { LovComponent } from './main/admin/lov/lov.component';
// import { ModulsComponent } from './main/admin/moduls/moduls.component';
// import { RoleComponent } from './main/Admin/role/role.component';
 import { AdminRoutingModule } from './main/Admin/admin-routing.module';
// import { OrganizationComponent } from './admin/organization/organization.component';




const appRoutes: Routes = [
  {
    path: 'pages',
    loadChildren: () => import('./main/pages/pages.module').then(m => m.PagesModule)
  },
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/pages/miscellaneous/error' //Error 404 - Page not found
  }
];

@NgModule({

 


  declarations: [AppComponent],

 

  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    // FormGroup,
    RouterModule.forRoot(appRoutes, {
      scrollPositionRestoration: 'enabled', // Add options right here
      relativeLinkResolution: 'legacy',
      useHash: false
      
    }),
    TranslateModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    //NgBootstrap
    NgbModule,
    ToastrModule.forRoot(),
    // Core modules
    CoreModule.forRoot(coreConfig),
    CoreCommonModule,
    CoreSidebarModule,
    CoreThemeCustomizerModule,
    OAuthModule.forRoot({
      resourceServer: {
        allowedUrls: [environment.apiAuditUrl,environment.apiRegistryUrl],
        sendAccessToken: true
      }
    }),
    // App modules
    LayoutModule, 
    AdminRoutingModule,
    // ServiceWorkerModule.register('ngsw-worker.js' ),
    
  ],
   providers: [JwtAuthInterceptor],
  bootstrap: [AppComponent]
})
export class AppModule {}
