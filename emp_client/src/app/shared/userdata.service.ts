import { Injectable } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  constructor() { }

  form:FormGroup=new FormGroup({
    $id:new FormControl(null),
    emp_Name:new FormControl('', Validators.required),
    emp_Code:new FormControl(''),
    phone: new FormControl('',[Validators.required, Validators.minLength(10)]),
    email: new FormControl('',Validators.email),
    emp_Title:new FormControl(''),
    salary:new FormControl(''),
    job_Type:new FormControl(''),
    visa_Status:new FormControl(''),
    client:new FormControl(''),
    doj:new FormControl('')
  });

  initializeFormGroup(){
    this.form.setValue({
      $id:null,
      emp_Name:'',
    emp_Code:'',
    phone: '',
    email: '',
    emp_Title:'',
    salary:'',
    job_Type: 0,
    visa_Status:'',
    client:'',
    doj:''
    })
  }
}
