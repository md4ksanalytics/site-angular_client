import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { CoreTranslationService } from '@core/services/translation.service';
import { ModuleOpration, User } from '../../model/reponse';
import { locale as en } from "../i18n/en";
import { locale as fr } from "../i18n/fr";
import { locale as de } from "../i18n/de";
import { locale as pt } from "../i18n/pt";
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent 
{
  moduleOpration: ModuleOpration;
  moduleOprationForm: FormGroup; 
  

  constructor(
    private _coreTranslationService: CoreTranslationService,
    private formBuilder: FormBuilder,private _router: Router
  ) {
    this._coreTranslationService.translate(en, fr, de, pt);

    this.moduleOprationForm = this.formBuilder.group({
      name: ["", Validators.required],
      // email: ["", [Validators.required, Validators.email]],
      // mobile: ["", [Validators.required]],
      // role: ["", [Validators.required]],
      acceptTerms: [false, Validators.requiredTrue],
    });
  }
    get f(): { [key: string]: AbstractControl } {
    return this.moduleOprationForm.controls;
  }

  onSubmit(): void { 
    //  this.moduleOprationForm.markAllAsTouched();
     if (this.moduleOprationForm.invalid) {
      // return;
    
    this._router.navigate(['admin/module-opration'])}

    console.log(JSON.stringify(this.moduleOprationForm.value, null, 2));
  }

  onCancel(): void {
   this._router.navigate(['admin/module-opration'])
  }
}
