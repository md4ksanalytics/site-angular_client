import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ItemsList } from '@ng-select/ng-select/lib/items-list';
import { HttpCommonService} from 'app/main/service/http.common.servce';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Menu } from '../../model/menu';

// let API_URL = "http://localhost:9001/secure/admin/menu/";

@Injectable({
  providedIn: 'root'})
export class MenuserviceService {
  [x: string]: any;
  public flag;
 public rows: Array<Menu>=[];
 public rowsBackup: Array<Menu>=[];
 public menu:Menu;
 public menuDetail1;

headers: HttpHeaders;
  accept_terms: any;
  menuDetail:any={
    name:"",
    parent_menu:"",
    url:""
  }
  parent_menu: any;
  constructor(private  http: HttpCommonService) {
    // this.rows.push({
    //   name: undefined,
    //   updated_date: undefined,
    //   menu_id:undefined,
    //   organization: undefined,
    //   updated_by: undefined,
    //   created_date: undefined,
    //   created_by: undefined,
    //   parent_menu: undefined,
    //   url: undefined,
    //   accept_terms: undefined
    // });
  }
  public getList(force:boolean){
    if(force || this.rows.length==0)
      {
        this.http
        .getWithoutError("menu","/list")
        .subscribe((list: Array<Menu>)=>{
          this.rows=list;
          this.rowsBackup=list;
        });
      } 
    }
      
  public save(menu:Menu)
    {
  return this.http.postWithoutError("menu", "/secure/save/",menu);
   }

  public edit(menu:Menu)
    {
       this.menuDetail=menu;
       this.menu=menu;
     //  return this.http.postWithoutError("menu", "/edit/",menu);
      }
  public delete(menu:Menu) 
     {  
      this.rows=this.rows.filter(item=>item.name!==menu.name) 
      this.rowsBackup=this.rowsBackup.filter(item=>item.name!==menu.name) 
      return this.http
      .getWithoutError("menu", "/delete/"+menu.name);
     }

    //  findAllList(): Observable<any> {
    //   return this.http.get("http://localhost:9001/secure/admin/menu/" + "/list");
    // }
   
}
