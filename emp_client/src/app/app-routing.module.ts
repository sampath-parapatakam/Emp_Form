import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './login-reg/home/home.component';
import { LoginComponent } from './login-reg/login/login.component';
import { RegistrationComponent } from './login-reg/registration/registration.component';
import { AppComponent } from './app.component';
import {AuthService} from './auth.service';
import {AuthGuardService} from './auth-guard.service'
import { UserDataComponent } from './login-reg/user-data/user-data.component';
import {UsertableComponent} from './login-reg/usertable/usertable.component';


const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'login', component: LoginComponent},
  {path:'registration', component: RegistrationComponent},
  {path:'userdata', component: UserDataComponent, canActivate:[AuthGuardService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[HomeComponent,LoginComponent,RegistrationComponent,UserDataComponent, UsertableComponent];