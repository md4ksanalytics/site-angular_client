import { HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "environments/environment";
import { ToastrService } from "ngx-toastr";
import { Observable, of, throwError } from "rxjs";

import { catchError, map, retry } from "rxjs/operators";
import { SelectList } from "../model/response.model";
import { HttpCommonService } from "./http.common.servce";

@Injectable({
  providedIn: "root",
})
export class MsgService {
  /**
   *
   * @param {HttpClient} _http
   */

    constructor(private http: HttpCommonService,private toastService:ToastrService) {}

 

    // toastMsg( msg:string ){
    //   this.toastService.show(msg, {
    //     autohide: true
    //   });
    }

