import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { locale as en } from "./i18n/en";
import { locale as fr } from "./i18n/fr";
import { locale as de } from "./i18n/de";
import { locale as pt } from "./i18n/pt";
import { CoreTranslationService } from '@core/services/translation.service';
import { Organization } from '../model/organization.model';
import { OrganizationService } from './services/organization.service';


@Component({
  selector: 'app-organization',
  templateUrl: './organization.component.html',
  styleUrls: ['./organization.component.scss']
}) 
export class OrganizationComponent implements OnInit {

  
  constructor(private _coreTranslationService: CoreTranslationService,private _router: Router,
    public organizationService: OrganizationService) {
    this._coreTranslationService.translate(en, fr, de, pt);

    
  }
  organization_detail={
    name:"",
    status:"",
    type:" ",

  }


  ngOnInit(): void {
    this.organizationService.getList(false);
  }

  edit(rec: Organization) {
    console.log(rec);
    this.organizationService.edit(rec);
    this._router.navigate(['/admin/organization/edit']);
  }
  delete(rec: Organization) {
    console.log(rec.name);
    this.organizationService.delete(rec);
  }
  add() {
    
    this.organizationService.organization=undefined;
    this._router.navigate(['/admin/organization/add']);
  }

  filterUpdate(event) {
    const val = event.target.value.toLowerCase();
    
    let tempData = [...this.organizationService.rowsBackup];
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
    this.organizationService.rows = temp;
    // this.rowsBuyerToGateway = temp;
    // this.tableRowDetails_buyer_to_Gateway.offset = 0;
    // Whenever the filter changes, always go back to the first page
  }
}
