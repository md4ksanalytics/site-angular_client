import { Injectable } from "@angular/core";
import { User } from "app/auth/models";

@Injectable({ providedIn: "root" })
export class UserService {
    rows: Array<User> = [];
    constructor() {
        
    }
}