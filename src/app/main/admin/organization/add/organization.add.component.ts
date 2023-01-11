import { Component, Input } from "@angular/core";
import { CoreTranslationService } from "@core/services/translation.service";
import { locale as en } from "../i18n/en";
import { locale as fr } from "../i18n/fr";
import { locale as de } from "../i18n/de";
import { locale as pt } from "../i18n/pt";

import {  Router } from '@angular/router';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from "@angular/forms";
import { OrganizationService } from "../services/organization.service";
import { Organization } from "../../model/organization.model";
import { SelectService } from "app/main/service/select.service";

@Component({
  selector: "app-organization-add",
  templateUrl: "./organization.add.component.html",
  styleUrls: ["./organization.add.component.scss"],
})
export class OrganizationAddComponent {
  
  organization: Organization;
  organizationForm: FormGroup; 

  orgDetail={
    name:"",
    status:"",
    type:""
  }
  

  constructor(
    private _coreTranslationService: CoreTranslationService,
    private formBuilder: FormBuilder,private _router: Router,
    private organizationService:OrganizationService
  ) {
    this._coreTranslationService.translate(en, fr, de, pt);

    this.organizationForm = this.formBuilder.group({
      name: [this.organizationService.organizationDetail? this.organizationService.organizationDetail.name:"", Validators.required],
      type: [this.organizationService.organizationDetail? this.organizationService.organizationDetail.type:"", [Validators.required]],
      status: [this.organizationService.organizationDetail? this.organizationService.organizationDetail.status:"", [Validators.required]],
      acceptTerms: [false, Validators.requiredTrue],
    });
  } 
  get f(): { [key: string]: AbstractControl } {
    return this.organizationForm.controls;
  }

  onSubmit(): void { 
    this.organizationForm.markAllAsTouched();
    if (!this.organizationForm.invalid) {
      return;
      
    }
    console.log(this.organizationService.xyz);
     
     if(this.organizationService.xyz==2){
        this.organizationService.rows.push(this.organizationForm.value);
      this.organizationService.rowsBackup.push(this.organizationForm.value);
      this._router.navigate(['admin/organization'])
      return;
     }
     else {
      this.orgDetail=this.organizationForm.value;
    console.log(this.organizationForm.value);
   let itemIndex=this.organizationService.rows.findIndex(item=>item.name==this.organizationService.organizationDetail.name);
    this.organizationService.rows[itemIndex]=this.organizationForm.value;
    this._router.navigate(['admin/organization']);
     }

     
    // let itemIndex=null
    // itemIndex=this.organizationService.rows.findIndex(item=>item.name==this.orgDetail.name);
    // console.log(itemIndex)
    // if(itemIndex!=-1)
    // {
    //   console.log(itemIndex)
    //   this.organizationService.rows[itemIndex]=this.organizationForm.value;
    // this._router.navigate(['admin/organization'])
    // return;
    // }

    // else {
      
    //   this.organizationService.rows.push(this.organizationForm.value);
    //   this.organizationService.rowsBackup.push(this.organizationForm.value);
    //   this._router.navigate(['admin/organization'])
    // }

    
    
    
    // if(!this.organizationService.organization){
    //   this.organizationService.rows.push(this.organizationForm.value);

    // }else{
    //   // this.userService.user.email= 
    // }
    this._router.navigate(['admin/organization'])

 

   // console.log(JSON.stringify(this.organizationForm.value, null, 2));
  }
  
  onUpdate():void {
    this.orgDetail=this.organizationForm.value;
    console.log(this.organizationForm.value);
   let itemIndex=this.organizationService.rows.findIndex(item=>item.name==this.orgDetail.name);
    this.organizationService.rows[itemIndex]=this.organizationForm.value;
    this._router.navigate(['admin/organization'])
  
  }


  onCancel(): void {
   this._router.navigate(['admin/organization'])
  }
}
































//   get f(): { [key: string]: AbstractControl } {
//     return this.organizationForm.controls;
//   }

//   onSubmit(): void { 
//     // this.organizationForm.markAllAsTouched();
//     // if (this.organizationForm.invalid) {
//     //   return;
//     // }
//     console.log(this.organizationForm.value);
//     if(this.organizationForm.invalid){
//       return;
//     }
//     if(!this.orService.user){
//       this.userService.rows.push(this.userForm.value);

//     }else{
//       // this.userService.user.email= 
//     }
//     // this._router.navigate(['admin/user'])

//     // console.log(JSON.stringify(this.organizationForm.value, null, 2));
//   }

//   onCancel(): void {
//    this._router.navigate(['admin/user'])
//   }
// }

// // OrganizationService.save(this.organizationForm.value).subscribe(ret=>{
// //   if(ret.id){
// //     this._router.navigate(['admin/user'])
// //   }
// // });
//   get f(): { [key: string]: AbstractControl } {
//     return this.organizationForm.controls;
//   }

//   onSubmit(): void { 
//     // this.organizationForm.markAllAsTouched();
//     // if (this.organizationForm.invalid) {
//     //   return;
//     // }
//     console.log(this.organizationForm.value);
//     if(this.organizationForm.invalid){
//       return;
//     }
//     if(!this.orService.user){
//       this.userService.rows.push(this.userForm.value);

//     }else{
//       // this.userService.user.email= 
//     }
//     // this._router.navigate(['admin/user'])

//     // console.log(JSON.stringify(this.organizationForm.value, null, 2));
//   }

//   onCancel(): void {
//    this._router.navigate(['admin/user'])
//   }
// }

// // OrganizationService.save(this.organizationForm.value).subscribe(ret=>{
// //   if(ret.id){
// //     this._router.navigate(['admin/user'])
// //   }
// // });
