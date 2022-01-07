import { SpinnerModule } from './components/shared/spinner/spinner.module';
import { SharedModule } from './components/shared/shared.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { LoginComponent } from './components/login/login.component';
import {HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminInterceptor } from './components/shared/interceptor/admin-interceptor';
import { SpinnerInteractor } from './components/shared/interceptor/spinner.interceptor';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    HttpClientModule,
    ReactiveFormsModule,
    SpinnerModule
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS, useClass: AdminInterceptor, multi:true},
    {provide:HTTP_INTERCEPTORS, useClass: SpinnerInteractor, multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
