import { Component, OnInit } from '@angular/core';
import { locale as en } from '../menumodel/i18n/en';
import { locale as fr } from '../menumodel/i18n/fr';
import { locale as de } from '../menumodel/i18n/de';
import { locale as pt } from '../menumodel/i18n/pt';
import { Menu } from '../model/menu';
import {  Router } from '@angular/router';
import { MenuserviceService } from 'app/main/admin/menumodel/menuservice/menuservice.service';
import { CoreTranslationService } from '@core/services/translation.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-addmenu',
  templateUrl: './addmenu.component.html',
  styleUrls: ['./addmenu.component.scss']
})
export class AddmenuComponent implements OnInit {

  


  public menu:Menu;
  flagAddEdit: boolean;

 constructor(private _coreTranslationService: CoreTranslationService,
  private router:Router,
  public menuserviceService:MenuserviceService){
  this._coreTranslationService.translate(en, fr, de, pt);

// this.rows.push({
//   name: 'organization',
//   updated_date: '09-10-2022',
//   menu_id:'101',
//   organization: 'fossgen',
//   updated_by: 'Nilima',
//   created_date: '09-10-2022',
//   created_by: 'Nilima',
//   parent_menu: 'Client module',
//   url: 'admin/client/organization',
//   accept_terms: undefined
// });
}    
  ngOnInit(): void {
    this.menuserviceService.getList(true);
  }

edit(rec: Menu) { 
  {
    Swal.fire({
      title:'Are you sure?',
      text:"you want to update",
      icon:'info',
      showCancelButton:true,
      confirmButtonColor:'#E42728',
      confirmButtonText:'update',
      customClass:{
           confirmButton:'btn btn-primary',
           cancelButton:'btn btn-danger m1-1'
      }
      
    }).
    
    then((result)=>{
      if(result.value){
        // Swal.fire(
        //   'Updated!',
        //   'your file has been Updated.',
        //   'success'
        // )
        this.menuserviceService.edit(rec);
        this.menuserviceService.flag=2;
        this.router.navigate(['/admin/addmenu/edit']);
      }
            
    })
  }


}
delete(rec: Menu) {
  Swal.fire({
    title:'Are you sure?',
    text:"",
    icon:'warning',
    showCancelButton:true,
    confirmButtonColor:'#E42728',
    confirmButtonText:'yes, delete it!',
    customClass:{
         confirmButton:'btn btn-primary',
         cancelButton:'btn btn-danger m1-1'
    }
  }).then((result)=>{
    if(result.value){
      Swal.fire(
        'Deleted!',
        'your file has been deleted.',
        'success'
      )
      this.menuserviceService.delete(rec);}
    else if(result.dismiss===Swal.DismissReason.cancel){
      Swal.fire(
        'Deleted!',
        'your file has been deleted.',
        'success'
      )
    }
      
  })
}
 add() {

  this.menuserviceService.menu=undefined;
  this.menuserviceService.flag=1;
  this.router.navigate(['admin/addmenu/menuselect'])
 }
filterUpdate(event) {
  const val = event.target.value.toLowerCase();
  
  let tempData = [...this.menuserviceService.rowsBackup];
  // filter our data
  const temp = tempData.filter((d: any) => {
    var flag = false;
    Object.keys(d).forEach((item) => {
      try {
        flag = flag || d[item].toLowerCase().indexOf(val) !== -1;
      } catch (error) {}
    }); 
    return flag;
  });
  this.menuserviceService.rows= temp;
 
    }
}