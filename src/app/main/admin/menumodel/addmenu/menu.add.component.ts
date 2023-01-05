import { Component} from '@angular/core';
import { CoreTranslationService } from "@core/services/translation.service";
import { locale as en } from '../../user/i18n/en';
import { locale as fr } from '../../user/i18n/fr';
import { locale as de } from '../../user/i18n/de';
import { locale as pt } from '../../user/i18n/pt';
import { Menu } from '../../model/menu';
import { Router } from '@angular/router';
import { AbstractControl,  FormBuilder,  FormGroup,  Validators,} from "@angular/forms";


@Component({
  selector: 'app-menu.add',
  templateUrl: './menu.add.component.html',
  styleUrls: ['./menu.add.component.scss']
})
export class MenuAddComponent{
   
  menu: Menu;
  menuForm:FormGroup;
  constructor(
      private coreTrasnlationService:CoreTranslationService,
      private formBuilder:FormBuilder,
      private router:Router) { 

        this.coreTrasnlationService.translate(en, fr,de, pt);
        this.menuForm = this.formBuilder.group({
          name:["",Validators.required],
          updated_date:["",Validators.required],
          menu_id:["",Validators.required],
          organization:["",Validators.required],
          updated_by:["",Validators.required],
          created_date:["",Validators.required],
          created_by:["",Validators.required],
          Parent_menu:["",Validators.required],
          url:["",Validators.required],
        })
      }

   get f():{[key: string]: AbstractControl}{
       return this.menuForm.controls;
   }

   onSubmit():void{
    this.menuForm.markAllAsTouched();
    if(this.menuForm.invalid){
      return;
    }
    this.router.navigate(['/admin/addmenu'])
    console.log(this.menuForm);
   }

   onCancel():void{
    this.router.navigate(['/admin/addmenu'])
   }
}
