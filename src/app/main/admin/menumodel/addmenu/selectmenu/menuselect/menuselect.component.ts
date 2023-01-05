import { Component } from '@angular/core';
import { locale as en } from '../../../../user/i18n/en';
import { locale as fr } from '../../../../user/i18n/fr';
import { locale as de } from '../../../../user/i18n/de';
import { locale as pt } from '../../../../user/i18n/pt';
import { Router } from '@angular/router';
import { CoreTranslationService } from '@core/services/translation.service';
import { Menu } from 'app/main/admin/model/menu';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { menu } from 'app/menu/menu';

@Component({
  selector: 'app-menuselect',
  templateUrl: './menuselect.component.html',
  styleUrls: ['./menuselect.component.scss']
})
export class MenuselectComponent{
  menu:Menu
  selectForm:FormGroup;

  constructor(private router:Router,
              private coreTranslationService:CoreTranslationService,
              private formBuilder:FormBuilder  ) { 
         this.coreTranslationService.translate(en, de, fr, pt)
        
         this.selectForm = this.formBuilder.group({
              name:["",Validators.required],
              Parent_menu:["",Validators.required],
              url:["",Validators.required],

         })

        }
         get f():{[key: string]: AbstractControl}{
          return this.selectForm.controls;
         }

  onSubmit():void{
    this.selectForm.markAllAsTouched();
    if(this.selectForm.invalid){
      return;
        }
        console.log(this.selectForm);
        this.router.navigate(['/admin/addmenu']);}
    

  onCancel(){
    this.router.navigate(['/admin/addmenu']);
  }
  
  }
