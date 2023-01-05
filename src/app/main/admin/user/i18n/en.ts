import { environment } from "environments/environment";

export const locale = {
  lang: "en",
  data: {
    USER: {
      GRID: {
        TITLE: "Manage User",
        EMAIL: "Email",
        MOBILE: "Mobile",
        NAME: "Name",
        ACTION: "Action",
        ROLE: "Role",
        ADD:"Add User",
        organizationName:"Organization",
        updatedBy:"Updated by",
        UpdateDate:"Updated Date"
      },
      FORM: {
        TITLEADD: "User Edit",
        TITLEEDIT: "User Edit",
        EMAIL: "Email",
        MOBILE: "Mobile",
        NAME: "Name",
        ROLE: "Role",
        VALIDATION: {
          NAME: "Name is required",
          EMAIL: "Email is required",
          ROLE: "Role is required",
          EMAILINVALID: "Email is invalid",
        },
      },
    },
    MENU: {
      GRID: {
        TITLE: "Manage Menu",
        NAME: "Name",
        UPDATED_DATE: "Updated_Date",
        MENU_ID: "Menu_id",
        ORGANIZATION: "Organization",
        ACTION: "Action",
        UPDATED_BY:"Updated_By",
        CREATED_DATE:"Created_Date",
        CREATED_BY:"Created_By",
        PARENT_MENU:"Parent_menu",
        URL:"url",
      },
      FORM: {
        TITLEADD: "User Edit",
        TITLEEDIT: "User Edit",
        NAME: "Name",
        UPDATED_DATE: "Updated_Date",
        MENU_ID: "Menu_id",
        ORGANIZATION: "Organization",
        UPDATED_BY:"Updated_By",
        CREATED_DATE:"Created_Date",
        CREATED_BY:"Created_By",
        PARENT_MENU:"Parent_menu",
        URL:"url",
        VALIDATION: {
              NAME: "Name is required",
              UPDATED_DATE: "Date is invalid",
              MENU_ID: "Menu_id is required",
              ORGANIZATION: "Organization is required",
              UPDATED_BY:"Name is required",
              CREATED_DATE:"Date is invalid",
              CREATED_BY:"Name is required",
              PARENT_MENU:"Please select Parent_menu",
              URL:"Please enter the url",
          },
      },
    },
  },
};
