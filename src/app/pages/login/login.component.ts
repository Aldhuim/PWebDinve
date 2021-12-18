import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import {MatSnackBar } from '@angular/material/snack-bar'
import { CookieService } from 'ngx-cookie-service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;



  constructor(private cookie: CookieService,private fb: FormBuilder, private api: AuthService, private router:Router, private _snackBar: MatSnackBar) {

    this.form = this.fb.group({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });



  }


  ngOnInit(): void {

  }

  onLogin():void {
    const myDate: Date = new Date();
    myDate.setHours( myDate.getHours() + 8 );
    const forms = this.form.value;

      if(forms != null) {
        //this.cookie.set('token',response.token,myDate,'/');
        this.router.navigate(['dashboard'])
      }

  }



}
