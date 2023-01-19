import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lov',
  templateUrl: './lov.component.html',
  styleUrls: ['./lov.component.scss']
})
export class LovComponent implements OnInit {

  constructor(private router:Router){}

  
  click(){
    this.router.navigate(['/admin/lovdtl'])
  }


  ngOnInit(): void {
    console.log("lov");
  }

}
