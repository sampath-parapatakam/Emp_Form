import { Component, OnInit } from '@angular/core';
import {AuthService,TokenPayload} from '../../auth.service';
import {Router} from "@angular/router"
import {FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

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


  login(){
    this.auth.login(this.credentials).subscribe(
      ()=>{
        this.router.navigateByUrl('/userdata')
      },
      err=>{
        console.log("Error:" + err);
      }
    )
  }

  loginForm= this.fb.group({
    username:['',[Validators.required, Validators.minLength(4), Validators.email]],
    password:['',[Validators.required, Validators.minLength(6)]],
  });

  ngOnInit() {

    if(this.auth.isLoggedIn()){
      this.router.navigateByUrl('/userdata');
    }else{
      this.router.navigateByUrl('/login');
    }
  }

}