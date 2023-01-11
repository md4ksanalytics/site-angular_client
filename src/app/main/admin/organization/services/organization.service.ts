import { Injectable } from '@angular/core';
import { HttpCommonService } from 'app/main/service/http.common.servce';
import { Organization } from '../../model/organization.model';


@Injectable({
  providedIn: 'root'
})
export class OrganizationService {
  
  public rows:Array<Organization> = [];
  public rowsBackup: Array<Organization> =[]
  public organizationDetail:Organization;
  public xyz;
  public flagAddEdit=false;

  // postProduct(value: any) {
  //     throw new Error("Method not implemented.");
  // }

  // orgDetail={
  //   name:"",
  //   status:"",
  //   type:""
  // }

  constructor(private http:HttpCommonService) {

    //sample data
    // this.rows.push({
    //   id: "",
    //   type: "",
    //   name: "",
    //   status: "",
    //   update_date: "",
    //   updated_by: '',
    //   created_by: '',
    //   created_date: ''
    // });
    // this.rows.push({
    //   id: "2",
    //   name: "g2",
    //   type: 'xyz',
    //   update_date: '112',
    //   updated_by: '12',
    //   created_by: '12',
    //   created_date: '12',
    //   status: 'yes'
    // }); 
   }
   public getList(force: boolean) {
    if (force || this.rows.length == 0) {
      this.http
        .getWithoutError("organization", "/list")
        .subscribe((list: Array<Organization>) =>   {
          this.rows = list;
           this.rowsBackup=list;
        });
    }
  }
  public save(organization:Organization) {   
    return  this.http
        .postWithoutError("organization", "/save",organization);
         
    
  }
  
  public edit(organization:Organization) {
    this.organizationDetail=organization;
  }
  public delete(organization:Organization) {   
    // return this.http
    //   .getWithoutError("organization", "/delete/"+organization.name);
      this.rows=this.rows.filter(item=>item.name!==organization.name)
      return this.http
      .getWithoutError("organization", "/delete/"+organization.name);
  
}
}
