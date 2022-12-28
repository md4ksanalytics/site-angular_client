import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lov-details',
  templateUrl: './lov-details.component.html',
  styleUrls: ['./lov-details.component.scss']
})
export class LOVDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log("lov")
  }

}
