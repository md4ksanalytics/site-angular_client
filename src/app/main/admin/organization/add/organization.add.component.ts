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
  

  constructor(
    private _coreTranslationService: CoreTranslationService,
    private formBuilder: FormBuilder,private _router: Router,
    public organizationService:OrganizationService
  ) {
    this._coreTranslationService.translate(en, fr, de, pt);

    this.organizationForm = this.formBuilder.group({
      name: ["", Validators.required],
      type: ["", [Validators.required]],
      status: ["", [Validators.required]],
      acceptTerms: [true, Validators.requiredTrue],
    });
  }
  get f(): { [key: string]: AbstractControl } {
    return this.organizationForm.controls;
  }

  onSubmit(): void { 
    this.organizationForm.markAllAsTouched();
    if (this.organizationForm.invalid) {
      return;
      
    }
    else {
      
      this.organizationService.rows.push(this.organizationForm.value);
      this._router.navigate(['admin/organization'])
    }
    
    // if(!this.organizationService.organization){
    //   this.organizationService.rows.push(this.organizationForm.value);

    // }else{
    //   // this.userService.user.email= 
    // }
    this._router.navigate(['admin/organization'])
    // this.userService.save(this.userForm.value).subscribe(ret=>{
    //   if(ret.id){
    //     this._router.navigate(['admin/user'])
    //   }
    // });
 

    console.log(JSON.stringify(this.organizationForm.value, null, 2));
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
