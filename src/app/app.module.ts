import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LoginComponent } from './pages/login/login.component';


import { SharedModule } from './pages/shared/shared.module';

import {HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
<<<<<<< Updated upstream
import {MatSnackBarModule } from '@angular/material/snack-bar'
=======
import {MatSnackBarModule } from '@angular/material/snack-bar';






>>>>>>> Stashed changes
//import { CookieService } from 'ngx-cookie-service';


@NgModule({
  declarations: [
    AppComponent,
<<<<<<< Updated upstream
    LoginComponent
=======
    LoginComponent,

>>>>>>> Stashed changes
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatSnackBarModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
