import { HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "environments/environment";
import { Observable, of, throwError } from "rxjs";
 
import { catchError, map, retry } from "rxjs/operators";
import { HttpCommonService } from "./http.common.servce";

@Injectable({
  providedIn: "root",
})
export class FormServiceService {
  /**
   *
   * @param {HttpClient} _http
   */
  constructor(private _http: HttpCommonService) {}

  /**
   * Get all domain
   */
  getAllDomain(): Observable<Array<any>> {
    return this._http.getDomainDetailsWithoutError(
      `${environment.apiRegistryUrl}` + `/api/domain/list`
    );
  }

  
}
