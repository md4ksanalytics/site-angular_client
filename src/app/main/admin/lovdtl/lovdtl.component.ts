import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CoreTranslationService } from '@core/services/translation.service';
import { Lov } from '../model/reponse';

import { locale as en } from './i18n/en';
import { LovService } from './service/lov.service';
import  Swal from 'sweetalert2'

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
    //if(this.flagAddEdit=true){
    //console.log(rec);
    this.lovService.edit(rec);
   this.lovService.flag=3;
    this._router.navigate(['/admin/lovdtl/edit']);
   // }
  }

  delete(rec: Lov) {
    //if(this.flagAddEdit=false){
        Swal.fire({
          title: 'Are you sure?',
          text: "You won't be able to revert this!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#7367F0',
          cancelButtonColor: '#E42728',
          confirmButtonText: 'Yes, delete it!',
          customClass: {
            confirmButton: 'btn btn-primary',
            cancelButton: 'btn btn-danger ml-1'
          }
          //this.lovService.delete(rec);
        }).then((result) => {
          if (result.value) {
            Swal.fire(
              'Deleted!',
              'Your imaginary file has been deleted.',
              'success'
            )
            this.lovService.delete(rec);    
          } else if (result.dismiss === Swal.DismissReason.cancel) {
            Swal.fire(
              'Cancelled',
              'Your imaginary file is safe :)',
              'error'
            )
          }
          
        })
 // }
  }

  add() {
   // this.flagAddEdit=true;
   
    this.lovService.flag=1;
  // console.log(this.lovService.lovdtl);
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
