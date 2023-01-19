import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { CoreTranslationService } from "@core/services/translation.service";
//import { ModuleOpration } from '../model/reponse';
import { locale as en } from "./i18n/en";
import { locale as fr } from "./i18n/fr";
import { locale as de } from "./i18n/de";
import { locale as pt } from "./i18n/pt";
//import { ModuleOprationService } from "./service/module-opration.service";
import Swal from 'sweetalert2';
//import { ModuleOpration } from "../../model/response.model";



@Component({
  selector: "app-module-opration",
  templateUrl: "./module-opration.component.html",
  styleUrls: ["./module-opration.component.scss"],
})
export class ModuleOprationComponent implements OnInit{

  constructor(
    private _coreTranslationService: CoreTranslationService,
    private _router: Router,
//    public moduleOprationService: ModuleOprationService
  ) {
    this._coreTranslationService.translate(en, fr, de, pt);

    //sample data
  }
  moduleOpration_detail = {
    name: "",
  };

  ngOnInit(): void {
 //   this.moduleOprationService.getList(false);
  }

//  edit(rec: ModuleOpration) {
   // console.log(rec);
   
  //  //   this.moduleOprationService.edit(rec);
  //     this.moduleOprationService.flag = 2;
  //      this._router.navigate(["/admin/module-opration/edit"]);
    
    
  }
 // delete(rec: ModuleOpration) {
    //if(this.flagAddEdit=false){
//         Swal.fire({
//           title: 'Are you sure?',
//           text: "You won't be able to revert this!",
//           icon: 'warning',
//           showCancelButton: true,
//           confirmButtonColor: '#7367F0',
//           cancelButtonColor: '#E42728',
//           confirmButtonText: 'Yes, delete it!',
//           customClass: {
//             confirmButton: 'btn btn-primary',
//             cancelButton: 'btn btn-danger ml-1'
//           }
//           //this.lovService.delete(rec);
//         }).then((result) => {
//           if (result.value) {
//             Swal.fire(
//               'Deleted!',
//               'Your imaginary file has been deleted.',
//               'success'
//             )
//             this.moduleOprationService.delete(rec);    

//           } else if (result.dismiss === Swal.DismissReason.cancel) {
//             Swal.fire(
//               'Cancelled',
//               'Your imaginary file is safe :)',
//               'error'
//             )
//           }
         
//         })
//  // }
//   // }
//   // add() {
//   //   // this.flagAddEdit=true;
  //   this.moduleOprationService.flag = 1;
  //   this.moduleOprationService.moduleOpration = undefined;
  //   this._router.navigate(["/admin/module-opration/add"]);
  // }
  // filterUpdate(event) {
  //   const val = event.target.value.toLowerCase();
  //   let tempData = [...this.moduleOprationService.rowsBackup1];

  //   // filter our data
  //   const temp = tempData.filter((d: any) => {
  //     var flag = false;
  //     Object.keys(d).forEach((item) => {
//         try {
//           flag = flag || d[item].toLowerCase().indexOf(val) !== -1;
//         } catch (error) {}
//       });
//       return flag;
//     });
//     this.moduleOprationService.rows = temp;
//     // this.rowsBuyerToGateway = temp;
//     // this.tableRowDetails_buyer_to_Gateway.offset = 0;
//     // Whenever the filter changes, always go back to the first page
//   }
// }
// //export {ModuleOpration};
