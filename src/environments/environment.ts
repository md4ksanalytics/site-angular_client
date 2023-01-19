// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
 
export const environment = {
  uiRole:"logs", //domain,logs
  applicationName: "FAPP",
  applicationDomainName: "Domain WhiteList",

  appTitle:"Site",
  hmr: false,
   apiUrl: 'http://localhost:8001/logs-monitoring-api', 
   BASIC_URL:'http://localhost:9001',
   //apiUrl: 'http://localhost:9001', 
   apiAuditUrl: 'http://localhost:8001/logs-monitoring-api/audit', 
  apiRegistryUrl: 'http://localhost:8002/logs-monitoring-api/registry', 
  production:true,
  env: 'dev',  
  webApiRedirectURL:'http://localhost:4200/',
  urlOauth2:'http://75.119.158.145:8078/auth/realms/site', 
  logoURL:'assets/images/logo/Site.png', 
 oauth2clientToken:'k9Y0zRvy5ivCsYjc9c1mXLGMferM0ySg',
 scope: 'openid profile',
 clientId: 'site_web',
  
  debug:true,
   

  
};
//
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
