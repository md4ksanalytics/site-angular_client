import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CoreTranslationService } from '@core/services/translation.service';
import { Lov } from '../model/reponse';

import { locale as en } from './i18n/en';
import { LovService } from './service/lov.service';

@Component({
  selector: 'app-lovdtl',
  templateUrl: './lovdtl.component.html',
  styleUrls: ['./lovdtl.component.scss']
})
export class LovdtlComponent {

      // rows: Array<Lov> = [];
      // rowsBackup: Array<Lov>;
      // lovdtl: Lov;
      // flagAddEdit=false;

  constructor(private _coreTranslationService: CoreTranslationService,private _router: Router,public lovService: LovService) {
    this._coreTranslationService.translate(en);
  }


  edit(rec: Lov) {
    //get the all lov based on 
    console.log(rec);
    this.lovService.edit(rec);
   // this.flagAddEdit=true;
    this._router.navigate(['/admin/lovdtl/edit']);
  }

  delete(rec: Lov) {
    this.lovService.rows.forEach((value,index)=>{
      if(value==rec)
      this.lovService.rows.splice(index,1);
    });
  }

  add() {
   // this.flagAddEdit=true;
    this.lovService.lovdtl=undefined;
    this._router.navigate(['/admin/lovdtl/add']);
  }

  filterUpdate(event) {
    const val = event.target.value.toLowerCase();
    // filter our data
    // if(!this.lovService.rowsBackup){
    //   this.lovService.rowsBackup=this.lovService.rows;
    // }
    let tempData = [...this.lovService.rowsBackup];
    
    const temp = tempData.filter((d: any) => {
      var flag = false;
      Object.keys(d).forEach((item) => {
        try {
          flag = flag || d[item].toLowerCase().indexOf(val) !== -1;
        } catch (error) {}
      });
      return flag;
    });
    this.lovService.rows = temp;
    // this.rowsBuyerToGateway = temp;
    // this.tableRowDetails_buyer_to_Gateway.offset = 0;
    // Whenever the filter changes, always go back to the first page
  }


}
