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
<<<<<<< Updated upstream

=======
  static isAdmin() {
    throw new Error('Method not implemented.');
  }

  private loggedIn = new BehaviorSubject<boolean>(false);
  private role = new BehaviorSubject<Roles|null>(null);
>>>>>>> Stashed changes


  constructor(private router: Router,private http: HttpClient,
    private _snack: MatSnackBar,private cookieService: CookieService) {
<<<<<<< Updated upstream

   }



}


=======
    this.checkToken();
   }


  get isLogged():Observable<boolean>{
    return this.loggedIn.asObservable();
  }

  get isAdmin(): Observable<string|null>{
    return this.role.asObservable();
  }

  login(authdata:User):Observable<UserResponse | void> {
    return this.http.post<UserResponse>( `${environment.API_URL}auth/login/`,
    authdata).pipe(
      map((response: UserResponse) =>{
        this.saveToken(response);
        this.loggedIn.next(true);
        this.role.next(response.role);
        return response;
      }),
      catchError( (error) => this.handleError(error))
    );
}

logout():void{
  localStorage.removeItem('user');
  this.role.next(null);
  this.loggedIn.next(false);
  this.router.navigate(['login'])
}

private checkToken():void {
  const user = JSON.parse(localStorage.getItem('user')!) || null;
  if(user){
    const isExpired = helper.isTokenExpired(user.token);

    if(isExpired){
      this.logout();
    }else{
      this.loggedIn.next(true);
      this.role.next(user.role);
    }
  }
}

private saveToken(user:UserResponse):void{
  const {userId,message, ... rest} = user;
  localStorage.setItem('user',JSON.stringify(rest));

}

private handleError(error: any):Observable<never>{
  let errorMensaje = 'An Error ocurred retrienving data';
  // if(error){
  //   errorMensaje = `Error: code ${error.status}`
  // }
  //this.errorME(errorMensaje);
  this.errorME(error.status);
  return throwError(errorMensaje);
}

errorME(m: any){

  if(m.toString() == '400'){
    this._snack.open('Debe ingresar datos en los campos','',{duration:5000,horizontalPosition:'center',verticalPosition:'top'})
  }
  else if (m.toString() == '401'){
    this._snack.open('Nombre de usuario o contraseña incorrectos','',{duration:5000,horizontalPosition:'center',verticalPosition:'top'})
  }
  else{
    this._snack.open('Error: Code '+ m,'',{duration:5000,horizontalPosition:'center',verticalPosition:'top'})
  }

}

}
>>>>>>> Stashed changes
