import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CoreTranslationService } from '@core/services/translation.service';
import { Lov } from '../../model/reponse';
import { locale as en } from './i18n/en';

@Component({
  selector: 'app-lovdtl',
  templateUrl: './lovdtl.component.html',
  styleUrls: ['./lovdtl.component.scss']
})
export class LovdtlComponent {

  rows: Array<Lov> = [];
  rowsBackup: Array<Lov>;
  user: Lov;
  flagAddEdit=false;
  constructor(private _coreTranslationService: CoreTranslationService,private _router: Router) {
    this._coreTranslationService.translate(en);
  }

  edit(rec: Lov) {
    console.log(rec);
    this.flagAddEdit=true;
    this._router.navigate(['/admin/llov/lovdtl/edit']);
  }
  delete(rec: Lov) {
    console.log(rec);
  }
  add() {
    this.flagAddEdit=true;
    this.user=undefined;
    this._router.navigate(['/admin/llov/lovdtl/add']);
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
