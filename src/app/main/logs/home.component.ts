import { ViewEncapsulation } from "@angular/compiler";
import { Component, OnInit, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { AuthenticationService } from "app/auth/service";
import { colors } from "app/colors.const";
import { environment } from "environments/environment";
 
@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  ngOnInit(): void {
  //  throw new Error("Method not implemented.");
  }
}