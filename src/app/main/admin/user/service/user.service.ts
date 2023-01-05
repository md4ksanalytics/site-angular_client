import { Injectable } from "@angular/core";
import { HttpCommonService } from "app/main/service/http.common.servce";
import { User } from "../../model/user.model";

@Injectable({ providedIn: "root" })
export class UserService {
  public rows: Array<User> = [];
  public rowsBackup: Array<User> = [];
  public user:User;
  constructor(private http: HttpCommonService) {
    //sample data
  }
  public getList(force: boolean) {
    if (force || this.rows.length == 0) {
      this.http
        .getWithoutError("user", "/list")
        .subscribe((list: Array<User>) => {
          this.rows = list;
          this.rowsBackup=list;
        });
    }
  }

  public save(user:User) {   
    return  this.http
        .postWithoutError("user", "/save",user);
         
    
  }

  public delete(user:User) {   
    return this.http
      .getWithoutError("user", "/delete/"+user.id);
      
  
}
}
