import { Roles } from './../../models/user.interface';
import { Injectable } from '@angular/core';

import { BehaviorSubject, map, Observable, throwError } from 'rxjs';
import {catchError} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';

import { environment } from './../../../environments/environment';
import { User,UserResponse } from 'src/app/models/user.interface';

import { JwtHelperService } from '@auth0/angular-jwt';
import {MatSnackBar } from '@angular/material/snack-bar'
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

const helper = new JwtHelperService();

@Injectable({
  providedIn: 'root'
})
export class AuthService {



  constructor(private router: Router,private http: HttpClient,
    private _snack: MatSnackBar,private cookieService: CookieService) {

   }



}


