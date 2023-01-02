import { Component } from "@angular/core";
import { CoreTranslationService } from "@core/services/translation.service";
import { locale as en } from "./i18n/en";
import { locale as fr } from "./i18n/fr";
import { locale as de } from "./i18n/de";
import { locale as pt } from "./i18n/pt";
import { User } from "../model/reponse";
import {  Router } from '@angular/router';

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.scss"],
})
export class UserComponent {
  rows: Array<User> = [];
  rowsBackup: Array<User>;
  user: User;
  flagAddEdit=false;
  constructor(private _coreTranslationService: CoreTranslationService,private _router: Router) {
    this._coreTranslationService.translate(en, fr, de, pt);
    
    //sample data
    this.rows.push({
      id: "1",
      email: "g@c.com",
      name: "g1",
      mobile: "213123124",
      role: "admin",
    });
    this.rows.push({
      id: "2",
      email: "g2@c.com",
      name: "g2",
      mobile: "213123124",
      role: "admin",
    });
  }

  edit(rec: User) {
    console.log(rec);
    this.flagAddEdit=true;
    this._router.navigate(['/admin/user/edit']);
  }
  delete(rec: User) {
    console.log(rec);
  }
  add() {
    this.flagAddEdit=true;
    this.user=undefined;
    this._router.navigate(['/admin/user/add']);
  }

  filterUpdate(event) {
    const val = event.target.value.toLowerCase();
    if (!this.rowsBackup) {
      this.rowsBackup = this.rows;
    }
    let tempData = [...this.rowsBackup];
    // filter our data
    const temp = tempData.filter((d: any) => {
      var flag = false;
      Object.keys(d).forEach((item) => {
        try {
          flag = flag || d[item].toLowerCase().indexOf(val) !== -1;
        } catch (error) {}
      });
      return flag;
    });
    this.rows = temp;
    // this.rowsBuyerToGateway = temp;
    // this.tableRowDetails_buyer_to_Gateway.offset = 0;
    // Whenever the filter changes, always go back to the first page
  }
}
