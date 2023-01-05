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
import { SelectService } from "app/main/service/select.service";
import { UserService } from "../service/user.service";

@Component({
  selector: "app-user-add",
  templateUrl: "./user.add.component.html",
  styleUrls: ["./user.add.component.scss"],
})
export class UserAddComponent {
  
  user: User;
  userForm: FormGroup; 
  

  constructor(
    private _coreTranslationService: CoreTranslationService,public select: SelectService,
    private formBuilder: FormBuilder,private _router: Router,private userService:UserService
  ) {
    this._coreTranslationService.translate(en, fr, de, pt);

    this.select.getSelect("role");
    this.select.getSelect("organization");
    this.userForm = this.formBuilder.group({
      name: [this.userService? this.userService.user.name:"", Validators.required],
      email: [this.userService? this.userService.user.email:"", [Validators.required, Validators.email]],
      mobile: [this.userService? this.userService.user.mobile:"", [Validators.required]],
      roleId: [this.userService? this.userService.user.roleId:0, [Validators.required]],
      active:[this.userService? this.userService.user.active:"", [Validators.required]],
      organizationId: [this.userService? this.userService.user.organizationId:0, [Validators.required]],
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
    this.userService.save(this.userForm.value).subscribe(ret=>{
      
    });
    this._router.navigate(['admin/user'])

    console.log(JSON.stringify(this.userForm.value, null, 2));
  }

  onCancel(): void {
   this._router.navigate(['admin/user'])
  }
}
