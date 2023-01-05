import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { locale as en } from "./i18n/en";
import { locale as fr } from "./i18n/fr";
import { locale as de } from "./i18n/de";
import { locale as pt } from "./i18n/pt";
import { CoreTranslationService } from '@core/services/translation.service';
import { Organization } from '../model/reponse';

@Component({
  selector: 'app-organization',
  templateUrl: './organization.component.html',
  styleUrls: ['./organization.component.scss']
}) 
export class OrganizationComponent  {

  rows: Array<Organization> = [];
  rowsBackup: Array<Organization>;
  organization: Organization;
  flagAddEdit=false;
  constructor(private _coreTranslationService: CoreTranslationService,private _router: Router) {
    this._coreTranslationService.translate(en, fr, de, pt);
    
    // //sample data
    // this.rows.push({
    //   id: "1",
    //   type: "xyz",
    //   name: "g1",
    //   status: "213123124",
    //   update_date: "admin",
    //   updated_by: '12',
    //   created_by: '12',
    //   created_date: '12'
    // });
    // this.rows.push({
    //   id: "2",

    //   name: "g2",
    //   type: 'xyz',
    //   update_date: '112',
    //   updated_by: '12',
    //   created_by: '12',
    //   created_date: '12',
    //   status: 'yes'
    // }); 
  }

  edit(rec: Organization) {
    console.log(rec);
    this.flagAddEdit=true;
    this._router.navigate(['/admin/organization/edit']);
  }
  delete(rec: Organization) {
    console.log(rec);
  }
  add() {
    this.flagAddEdit=true;
    this.organization=undefined;
    this._router.navigate(['/admin/organization/add']);
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
