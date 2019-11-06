import { Component, OnInit } from '@angular/core';
import {UserdataService} from '../../shared/userdata.service';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.css']
})
export class UserDataComponent implements OnInit {

  constructor(private service: UserdataService) { }

  job_type=[
    {id:1, value:"Full Time"},
    {id:2, value:"Part Time"},
    {id:3, value:"Contract"},
    {id:4, value:"Intern"}
  ]

  ngOnInit() {
  }
   
  onClear(){
    this.service.form.reset();
    this.service.initializeFormGroup();
  }
}
