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
  },
   
  
];
