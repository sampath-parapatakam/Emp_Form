import { BrowserModule } from '@angular/platform-browser';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';


import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { AuthGuardService } from './auth-guard.service';
import { AuthService } from './auth.service';
import {UserdataService} from './shared/userdata.service';
import {ConfirmValidatorDirective} from './shared/confirm-validator.directive';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    ConfirmValidatorDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [AuthGuardService,AuthService,UserdataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
