import { Component } from '@angular/core';
import { locale as en } from '../i18n/en';
import { locale as fr } from '../i18n/fr';
import { locale as de } from '../i18n/de';
import { locale as pt } from '../i18n/pt';
import { Router } from '@angular/router';
import { CoreTranslationService } from '@core/services/translation.service';
import { Menu } from 'app/main/admin/model/menu';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MenuserviceService } from 'app/main/admin/menumodel/menuservice/menuservice.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-menuselect',
  templateUrl: './menuselect.component.html',
  styleUrls: ['./menuselect.component.scss']
})
export class MenuselectComponent{
  menu:Menu
  selectForm:FormGroup;
  flagAddEdit: boolean;
  flag:boolean

  menuDetail={
  name:'',
  parent_menu:'',
  url:''
}
  constructor(private router:Router,
              private coreTranslationService:CoreTranslationService,
              private formBuilder:FormBuilder  ,
              public menuserviceService:MenuserviceService)
     { 
         this.coreTranslationService.translate(en, de, fr, pt)
        
         this.selectForm = this.formBuilder.group({
          name: [this.menuserviceService.menu? this.menuserviceService.menu.name:"", Validators.required],
          parent_menu:[this.menuserviceService.menu? this.menuserviceService.parent_menu:"", Validators.required],
          url:[this.menuserviceService.menu? this.menuserviceService.menu.url:"", Validators.required],
          accept_terms:[this.menuserviceService.menu? this.menuserviceService.menu.accept_terms:true,Validators.requiredTrue],
        });

      }
      get f():{[key: string]: AbstractControl}{
      return this.selectForm.controls;
  }

  onSubmit():void{
    this.selectForm.markAllAsTouched();
    console.log(this.selectForm.value)
    if(this.selectForm.invalid)
        { 
        return;
        } 
    console.log(this.menuserviceService.flag)
    if(this.menuserviceService.flag==1)
    {
      this.menuserviceService.rows.push(this.selectForm.value);
      this.menuserviceService.rowsBackup.push(this.selectForm.value);
      this.router.navigate(['/admin/addmenu'])
    } 
    else
    {
      this.menuDetail=this.selectForm.value;
      let itemIndex=this.menuserviceService.rows.findIndex(item=>item.name==this.menuserviceService.menuDetail.name);
      this.menuserviceService.rows[itemIndex]=this.selectForm.value;
      this.menuserviceService.rowsBackup[itemIndex]=this.selectForm.value;
      this.router.navigate(['/admin/addmenu']);
    }
    Swal.fire('saved!',
    'your file has been saved.',
    'success'
        )
      console.log(JSON.stringify(this.selectForm.value, null, 3 ));
    } 
    
 onUpdate():void{ 
  this.menuDetail=this.selectForm.value;
  let itemIndex=this.menuserviceService.rows.findIndex(item=>item.name==this.menuserviceService.menuDetail.name);
  this.menuserviceService.rows[itemIndex]=this.selectForm.value;
  this.router.navigate(['/admin/addmenu']);
 }
  onCancel(){
    this.router.navigate(['/admin/addmenu']);
   }
  
  }
