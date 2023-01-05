import { Component, Input } from "@angular/core";
import { CoreTranslationService } from "@core/services/translation.service";
import { locale as en } from "../i18n/en";
import { locale as fr } from "../i18n/fr";
import { locale as de } from "../i18n/de";
import { locale as pt } from "../i18n/pt";
import { Organization } from "../../model/reponse";
import {  Router } from '@angular/router';
import { ServiceService } from "../services/service.service";
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from "@angular/forms";

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
    private service:ServiceService
  ) {
    this._coreTranslationService.translate(en, fr, de, pt);

    this.organizationForm = this.formBuilder.group({
      name: ["", Validators.required],
      type: ["", [Validators.required]],
      status: ["", [Validators.required]],
      acceptTerms: [false, Validators.requiredTrue],
    });
  }

  get f(): { [key: string]: AbstractControl } {
    return this.organizationForm.controls;
  }

  onSubmit(): void { 
    // this.organizationForm.markAllAsTouched();
    // if (this.organizationForm.invalid) {
    //   return;
    // }
    console.log(this.organizationForm.value);
    if(this.organizationForm.valid){
      this.service.postProduct(this.organizationForm.value)
      .subscribe({
        next:(res)=>{
          alert("Organization added sucessfull")
        }
      })
    }
    // this._router.navigate(['admin/user'])

    // console.log(JSON.stringify(this.organizationForm.value, null, 2));
  }

  onCancel(): void {
   this._router.navigate(['admin/user'])
  }
}
