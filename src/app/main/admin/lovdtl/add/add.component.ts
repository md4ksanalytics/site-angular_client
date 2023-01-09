import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { CoreTranslationService } from '@core/services/translation.service';
import { User } from 'app/auth/models';
import { Lov } from '../../model/reponse';
import { locale as en } from '../i18n/en';
import { LovService } from '../service/lov.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent {

  lovdtl: Lov;
  userForm: FormGroup; 

  LovDetail={
    name:"",
    Org_Id:"",
    updatedName:"",
    createdDate:"",
    createdName:"",
    activate:"",
    action:"",
    parentId:"",
    parentName:"",
    import:""
  }
  

  constructor(
    private _coreTranslationService: CoreTranslationService,
    private formBuilder: FormBuilder,private _router: Router, private lovService:LovService
  ) {
    this._coreTranslationService.translate(en);

    this.userForm = this.formBuilder.group({
      name: [this.lovService.lovdtl? this.lovService.lovdtl.name:"", Validators.required],
      Org_Id:[this.lovService.lovdtl? this.lovService.lovdtl.Org_Id:0, Validators.required],
      updatedName:[this.lovService.lovdtl? this.lovService.lovdtl.parentName:"", Validators.required],
      createdDate:[this.lovService.lovdtl? this.lovService.lovdtl.createdDate:"",Validators.required],
      createdName:[this.lovService.lovdtl? this.lovService.lovdtl.createdName:"", Validators.required],
      activate:[this.lovService.lovdtl? this.lovService.lovdtl.activate:"", Validators.required],
      action:[this.lovService.lovdtl? this.lovService.lovdtl.action:"", Validators.required],
      parentId:[this.lovService.lovdtl? this.lovService.lovdtl.parentId:0, Validators.required],
      parentName:[this.lovService.lovdtl? this.lovService.lovdtl.parentName:"", Validators.required],
      import:[this.lovService.lovdtl? this.lovService.lovdtl.import:"", Validators.required],
      acceptTerms: [true, Validators.requiredTrue],
    });
  }

  get f(): { [key: string]: AbstractControl } {
    return this.userForm.controls;
  }

  onSubmit(): void { 
    this.userForm.markAllAsTouched();
    if (!this.userForm.invalid) {
      return;
    }
    else{
      this.lovService.rows.push(this.userForm.value);
     this.lovService.rowsBackup.push(this.userForm.value);
      this._router.navigate(['admin/lovdtl']);
    }
    this._router.navigate(['admin/lovdtl']);

    console.log(JSON.stringify(this.userForm.value, null, 2));
  }

  onUpdate():void{
    this.LovDetail=this.userForm.value;
    let itemIndex=this.lovService.rows.findIndex(item => item.name == this.LovDetail.name);
    this.lovService.rows[itemIndex]=this.userForm.value;
    this._router.navigate(['admin/lovdtl']);
  }

  onCancel(): void {
   this._router.navigate(['admin/lovdtl'])
  }
}



