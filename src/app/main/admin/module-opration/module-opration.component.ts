import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder , Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CoreTranslationService } from '@core/services/translation.service';
import { ModuleOpration, User } from '../model/reponse';
import { locale as en } from "./i18n/en";
import { locale as fr } from "./i18n/fr";
import { locale as de } from "./i18n/de";
import { locale as pt } from "./i18n/pt";


@Component({
  selector: 'app-module-opration',
  templateUrl: './module-opration.component.html',
  styleUrls: ['./module-opration.component.scss']
})
export class ModuleOprationComponent {
  rows: Array<ModuleOpration> = [];
  rowsBackup: Array<ModuleOpration>;
  moduleOpration: ModuleOpration;
  flagAddEdit=false;
  constructor(private _coreTranslationService: CoreTranslationService,private _router: Router) {
    this._coreTranslationService.translate(en, fr, de, pt);
    
    //sample data
   
  }

  edit(rec: ModuleOpration) {
    console.log(rec);
    this.flagAddEdit=true;
    this._router.navigate(['/admin/module-opration/edit']);
  }
  delete(rec: ModuleOpration) {
    console.log(rec);
  }
  add() {
    this.flagAddEdit=true;
    this.moduleOpration=undefined;
    this._router.navigate(['/admin/module-opration/add']);
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