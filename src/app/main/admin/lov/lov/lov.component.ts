import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-lov',
  templateUrl: './lov.component.html',
  styleUrls: ['./lov.component.scss']
})
export class LovComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  onClick(){
    this.router.navigate(['/lov-details']);
  }
}
