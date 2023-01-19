import { HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "environments/environment";
import { Observable, of, throwError } from "rxjs";

import { catchError, map, retry } from "rxjs/operators";
import { SelectList } from "../model/response.model";
import { HttpCommonService } from "./http.common.servce";

@Injectable({
  providedIn: "root",
})
export class SelectService {
  /**
   *
   * @param {HttpClient} _http
   */

  public mapSelect = new Map<string, Array<SelectList>>();
  constructor(private http: HttpCommonService) {}

  /**
   * Get all domain
   */
  getSelect(name: string) {
    if (!this.mapSelect.get(name)) {
      this.mapSelect.set(name, []);
      this.http
        .getWithoutError(name, "/select/list")
        .subscribe((list: Array<SelectList>) => {
          this.mapSelect.set(name, list);
        }
      );
    }
  }
}
