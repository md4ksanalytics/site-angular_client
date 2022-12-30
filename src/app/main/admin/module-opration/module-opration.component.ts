import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder , Validators } from '@angular/forms';

@Component({
  selector: 'app-module-opration',
  templateUrl: './module-opration.component.html',
  styleUrls: ['./module-opration.component.scss']
})
export class ModuleOprationComponent implements OnInit 
{
  userForm:FormGroup;
  listData:any;
  constructor(private fb:FormBuilder)
  {
    this.listData=[];
    this.userForm =this.fb.group({
      UpdatedDate: ["", Validators.required],
      UpdatedBy: ["", Validators.required],
      CreatedDate: ["", Validators.required],
      CreatedBy: ["", Validators.required],

  });
  }
  public addItem():void
  {
// this.listData.push(this.userForm.value);
this.listData.push(this.userForm.value);
this.userForm.reset();
  }
  reset(){
    this.userForm.reset();
  }
  removeItem(element)
  {
this.listData.forEach((value,index)=>
{
  if(value==element)
  this.listData.splice(index,1);
});
  }

  ngOnInit() {
  
  }

 } 