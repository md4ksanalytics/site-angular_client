// import { Component, OnInit } from '@angular/core';
// import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
// import { Router } from '@angular/router';
// import { CoreTranslationService } from '@core/services/translation.service';
// import { ModuleOpration} from '../../model/reponse';
// import { locale as en } from "../i18n/en";
// import { locale as fr } from "../i18n/fr";
// import { locale as de } from "../i18n/de";
// import { locale as pt } from "../i18n/pt";
// import { ModuleOprationService } from '../service/module-opration.service';
// import { timeStamp } from 'console';
// @Component({
//   selector: 'app-add',
//   templateUrl: './add.component.html',
//   styleUrls: ['./add.component.scss']
// })
// export class AddComponent 
// {
//   moduleOpration: ModuleOpration;
//   moduleOprationForm: FormGroup;
//   //flagAddEdit:boolean;
//   //flag:boolean;
//   moduleOprationDetail=
//   {
//     name:""
//   }

//   constructor(
//     private _coreTranslationService: CoreTranslationService,
//     private formBuilder: FormBuilder,private _router: Router,private moduleOprationService:ModuleOprationService
//   ) {
//     this._coreTranslationService.translate(en, fr, de, pt);

//     this.moduleOprationForm = this.formBuilder.group({
//       //  name: ["", Validators.required],
//       name:[this.moduleOprationService.moduleOpration? this.moduleOprationService.moduleOpration.name:"",Validators.required],
//       // mobile: ["", [Validators.required]],
//       // role: ["", [Validators.required]],
//       acceptTerms: [true, Validators.requiredTrue],
//     });
//   }
//     get f(): { [key: string]: AbstractControl } {
//     return this.moduleOprationForm.controls;
//   }

//   onSubmit(): void
//    {
//      this.moduleOprationForm.markAllAsTouched();
//      if (this.moduleOprationForm.invalid) 
//      {
//      return;
//      }
//      //console.log(this.moduleOprationService.flag);
//      if(this.moduleOprationService.flag==1)
//      {
//       this.moduleOprationService.rows.push(this.moduleOprationForm.value);
//    this.moduleOprationService.rowsBackup1.push(this.moduleOprationForm.value);
//       this._router.navigate(['module-opration']);     
//     }
//       else
//       {
//         this.moduleOprationDetail=this.moduleOprationForm.value;
//         let itemIndex=this.moduleOprationService.rows.findIndex(item=>item.name==this.moduleOprationDetail.name);
//         this.moduleOprationService.rows[itemIndex]=this.moduleOprationForm.value;
//         // this.moduleOprationService.rowsBackup1[itemIndex]=this.moduleOprationForm.value;

//         this._router.navigate(['module-opration']); 
//       }
    
//      //this._router.navigate(['module-opration']);
//     console.log(JSON.stringify(this.moduleOprationForm.value, null, 2));
//   }
//   OnUpdate():void{
//     // if(this.moduleOprationService.flag==2){
//     this. moduleOprationDetail=this.moduleOprationForm.value;
//     let itemIndex=this.moduleOprationService.rows.findIndex(item=>item.name==this.moduleOprationDetail.name);
//     this.moduleOprationService.rows[itemIndex]=this.moduleOprationForm.value;
   

//    this._router.navigate(['module-opration']);
  
//   }
//   onCancel(): void {
//    this._router.navigate(['module-opration'])
//   }
// }

