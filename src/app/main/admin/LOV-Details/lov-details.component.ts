import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lov-details',
  templateUrl: './lov-details.component.html',
  styleUrls: ['./lov-details.component.scss'],
  

})
export class LOVDetailsComponent implements OnInit {



  constructor(private router:Router) { }

  ngOnInit(): void {
    console.log("lov");
  }

  
  
  

}
