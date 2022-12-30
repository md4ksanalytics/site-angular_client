import { CoreMenu } from "@core/types";
import { environment } from "environments/environment";

export const menu: CoreMenu[] =
[
  {
    id: "Home",
    type: "section",
    title: "Dashboard",
    translate: "MENU.HOME",
    icon: "home",
    
  },
  {
    id: "form",
    title: "form",
    translate: "MENU.Form",
    type: "item",
    icon: "trending-up",
    url: "transactions",
<<<<<<< HEAD
  },
=======
  },  
>>>>>>> branch 'main' of https://github.com/md4ksanalytics/site-angular_client
  {
<<<<<<< HEAD
    id: "form",
    title: "module-opration",
=======
    id: "lov",
    title: "LOV",
>>>>>>> branch 'main' of https://github.com/md4ksanalytics/site-angular_client
    translate: "MENU.Form",
    type: "item",    
    icon: "trending-up",
<<<<<<< HEAD
    url:"module-opration",
    

  },
   
=======
    url: "admin/lov",
  }
>>>>>>> branch 'main' of https://github.com/md4ksanalytics/site-angular_client
  
];
