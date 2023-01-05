import { CoreMenu } from "@core/types";
import { environment } from "environments/environment";

export const menu: CoreMenu[] =
[ 
   {
    id: "admin",
    title: "Admin",
    type: "section",
    icon: "settings",
    translate: "MENU.ADMIN",
    children: [
      {
        id: "user",
        title: "Manage Users",
        type: "item",
        icon: "users",
        translate: "MENU.USER",
        url: "admin/user",
      },
      {
        id: "Role",
        title: "Manage Role",
        type: "item",
        icon: "user-check",
        translate: "MENU.ROLE",
        url: "admin/role",
      }, {
        id: "Organization",
        title: "Organization",
        type: "item",
        icon: "columns",
        
        translate: "MENU.ORG",
        url: "admin/organization",
      }, {
        id: "module",
        title: "Manage Module",
        type: "item",
        icon: "command",
        translate: "MENU.Module",
        url: "admin/module",
      },{
        id: "lov",
        title: "Manage LOV",
        type: "item",
        translate: "MENU.Lov",
        icon: "list",
        url: "admin/lov",
      },{
        id: "Menu",
        title: "Manage Menu",
        type: "item",
        icon: "list",
        translate: "MENU.Menu",
        url: "admin/addmenu",
      },
    ],
  },
  ];
