import { Component, Input } from "@angular/core";
import { CoreTranslationService } from "@core/services/translation.service";
import { locale as en } from "../i18n/en";
import { locale as fr } from "../i18n/fr";
import { locale as de } from "../i18n/de";
import { locale as pt } from "../i18n/pt";
import { User } from "../../model/reponse";
import {  Router } from '@angular/router';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from "@angular/forms";

@Component({
  selector: "app-user-add",
  templateUrl: "./user.add.component.html",
  styleUrls: ["./user.add.component.scss"],
})
export class UserAddComponent {
  
  user: User;
  userForm: FormGroup; 
  

  constructor(
    private _coreTranslationService: CoreTranslationService,
    private formBuilder: FormBuilder,private _router: Router
  ) {
    this._coreTranslationService.translate(en, fr, de, pt);

    this.userForm = this.formBuilder.group({
      name: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      mobile: ["", [Validators.required]],
      role: ["", [Validators.required]],
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
    this._router.navigate(['admin/user'])

    console.log(JSON.stringify(this.userForm.value, null, 2));
  }

  onCancel(): void {
   this._router.navigate(['admin/user'])
  }
  
}
