import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { ForgotPswdComponent } from './forgot-pswd/forgot-pswd.component';
import { UserDataComponent } from './user-data/user-data.component';
import { HomeComponent } from './home/home.component';
import { UsertableComponent } from './usertable/usertable.component';



@NgModule({
  declarations: [LoginComponent, RegistrationComponent, ForgotPswdComponent, UserDataComponent, HomeComponent, UsertableComponent],
  imports: [
    CommonModule
  ]
})
export class LoginRegModule { }
