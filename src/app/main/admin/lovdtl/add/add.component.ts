import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { CoreTranslationService } from '@core/services/translation.service';
import { User } from 'app/auth/models';
import { locale as en } from '../i18n/en';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent {

  user: User;
  userForm: FormGroup; 
  

  constructor(
    private _coreTranslationService: CoreTranslationService,
    private formBuilder: FormBuilder,private _router: Router
  ) {
    this._coreTranslationService.translate(en);

    this.userForm = this.formBuilder.group({
      name: ["", Validators.required],
      Org_Id:["", Validators.required],
      updatedName:["", Validators.required],
      createdDate:["",Validators.required],
      createdName:["", Validators.required],
      activate:["", Validators.required],
      action:["", Validators.required],
      parentId:["", Validators.required],
      parentName:["", Validators.required],
      import:["", Validators.required],
      acceptTerms: [false, Validators.requiredTrue],
    });
  }

  get f(): { [key: string]: AbstractControl } {
    return this.userForm.controls;
  }

  onSubmit(): void { 
    this.userForm.markAllAsTouched();
    if (this.userForm.invalid) {
      return;
    }
    this._router.navigate(['admin/llov/lovdtl'])

    console.log(JSON.stringify(this.userForm.value, null, 2));
  }

  onCancel(): void {
   this._router.navigate(['admin/llov/lovdtl'])
  }
}



