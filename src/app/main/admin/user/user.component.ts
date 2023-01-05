import { Component, OnInit } from "@angular/core";
import { CoreTranslationService } from "@core/services/translation.service";
import { locale as en } from "./i18n/en";
import { locale as fr } from "./i18n/fr";
import { locale as de } from "./i18n/de";
import { locale as pt } from "./i18n/pt"; 
import {  Router } from '@angular/router'; 
import { User } from "../model/user.model";
import { UserService } from "./service/user.service";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.scss"],
})
export class UserComponent implements OnInit {
 
  constructor(private _coreTranslationService: CoreTranslationService,
    private _router: Router,public userService: UserService) {
    this._coreTranslationService.translate(en, fr, de, pt);
    
    
  }
  ngOnInit(): void {
    this.userService.getList(false);
  }

  edit(rec: User) {
    console.log(rec); 
    this._router.navigate(['/admin/user/edit']);
  }
  delete(rec: User) {
    console.log(rec);
  }
  add() { 
    this.userService.user=undefined;
    this._router.navigate(['/admin/user/add']);
  }

  filterUpdate(event) {
    const val = event.target.value.toLowerCase();
  
    let tempData = [...this.userService.rowsBackup];
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
    this.userService.rows = temp;
    // this.rowsBuyerToGateway = temp;
    // this.tableRowDetails_buyer_to_Gateway.offset = 0;
    // Whenever the filter changes, always go back to the first page
  }
}
