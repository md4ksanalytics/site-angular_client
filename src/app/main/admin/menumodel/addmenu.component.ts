import { Component, OnInit } from '@angular/core';
import { CoreTranslationService } from '@core/services/translation.service';
import { locale as en } from '../user/i18n/en';
import { locale as fr } from '../user/i18n/fr';
import { locale as de } from '../user/i18n/de';
import { locale as pt } from '../user/i18n/pt';
import { Menu } from '../model/menu';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-addmenu',
  templateUrl: './addmenu.component.html',
  styleUrls: ['./addmenu.component.scss']
})
export class AddmenuComponent {
 rows:Array<Menu>=[];
 rowsBackup:Array<Menu>;
 menu:Menu;
 flagAddMenu=false;

 constructor(private coreTranslationService:CoreTranslationService, private router:Router){
  this.coreTranslationService.translate(en, fr, de, pt);


  //sample data
  this.rows.push({
    name:"client admin module",
    parent_menu:"client module",
    url:"admin/menumodel/deletemenu",
    updated_date:"1 jan 2022",
    menu_id:"101",
    organization:"fossgen",
    updated_by:"user1",
    created_date:"25 dec 2019",
    created_by:"user1",
   
   }),
   this.rows.push({
    name:"group admin",
    parent_menu:"client module",
    url:"admin/menumodel/addmenu", 
    updated_date:"",
    menu_id:"102",
    organization:"md4ks",
    updated_by:"user1",
    created_date:"26 dec 2019",
    created_by:"user1", 
   
   }),
   this.rows.push({
    name:"lov module",
    parent_menu:"client module",                          
    url:"admin/menumodel/editmenu",
    updated_date:"3 jan 2022",
    menu_id:"103",
    organization:"fossgen",
    updated_by:"user3",
    created_date:"27 dec 2019",
    created_by:"user3",
    
   });
}
edit(rec: Menu) {
  console.log(rec);
  this.flagAddMenu=true;
  this.router.navigate(['/admin/addmenu/edit']);
}
delete(rec: Menu): void {
  console.log(rec)
}
 add() {
   this.flagAddMenu=true;
  this.menu=undefined;
   this.router.navigate(['/admin/addmenu/selectmenu'])
 }
onSelectmenu(){
  this.router.navigate(['/admin/addmenu/menuselect']);
}
//commit
filterUpdate(event) {
  const val = event.target.value.toLowerCase();
  if (!this.rowsBackup) {
    this.rowsBackup = this.rows;
  }
  let tempData = [...this.rowsBackup];
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
  this.rows = temp;
  // this.rowsBuyerToGateway = temp;
  // this.tableRowDetails_buyer_to_Gateway.offset = 0;
  // Whenever the filter changes, always go back to the first page
    }
}