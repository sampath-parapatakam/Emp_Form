import { Component, OnInit } from '@angular/core';
import {AuthService,TokenPayload} from '../../auth.service';
import {Router} from "@angular/router";
import {FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  credentials: TokenPayload={
    id:0,
    username:'',
    first_name:'',
    last_name:'',
    email:'',
    password:'',
    confirm_password:''
  }
  constructor(private auth:AuthService, private router:Router, private fb: FormBuilder, ) {}


  register(){
    this.auth.register(this.credentials).subscribe(
      (data)=>{
        this.router.navigateByUrl('/userdata')
      },
      err=>{
        console.log("Error:" + err);
      }
    )
  }

  registerForm= this.fb.group({
    username:['',[Validators.required, Validators.minLength(4), Validators.email]],
    first_name:['',Validators.required],
    last_name:['',Validators.required],
    email:['',[Validators.required, Validators.email]],
    password:['',[Validators.required, Validators.minLength(6)]],
    confirm_password:['',[Validators.required,Validators.minLength(6)]],
  });

  ngOnInit() {
  }

}
