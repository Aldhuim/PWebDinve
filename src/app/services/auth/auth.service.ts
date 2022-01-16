import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject, catchError, map, Observable, Subscription, throwError } from 'rxjs';
import { User, UserRespose } from 'src/app/models/user.interface';
import { environment } from 'src/environments/environment'

const helper = new JwtHelperService();

@Injectable({
  providedIn: 'root'
})
export class AuthService  {

  private loggedIn = new BehaviorSubject<boolean>(false);
  private role = new BehaviorSubject<number|null>(null);
  private username = new BehaviorSubject<string|any>(null);
  private userToken = new BehaviorSubject<string|any>(null);
  private idusuario = new BehaviorSubject<number|any>(null);

  constructor(private router: Router,private http:HttpClient,private _snackBar: MatSnackBar) {
    this.checkToken();
   }

  get isLogged():Observable<boolean>{
    return this.loggedIn.asObservable();
  }

  get Roles(): Observable<number|null>{
    return this.role.asObservable();
  }

  get UserName():Observable<string>{
    return this.username.asObservable();
  }

  get idUser():Observable<number|any>{
    return this.idusuario.asObservable();
  }

  get userTokenValue():string{
    return this.userToken.getValue();
  }

  login(authData:User): Observable<UserRespose | void> {
    return this.http.put<UserRespose>(`${environment.API_URL}/user/login`,authData)
    .pipe(
      map((res:UserRespose) =>{
        if(res.token){
          this.saveToken(res);
          this.loggedIn.next(true);
          this.role.next(res.usuario.rol);
          this.idusuario.next(res.usuario.id);
          this.username.next(res.usuario.nombre + " " + res.usuario.apellido)
          this.userToken.next(res.token);
        }
        else{
          this.openSnackBar();
        }
        return res;
      }),
      catchError((err) => this.handleError(err))
    )
  };

  logout(){
    localStorage.removeItem('Token');
    this.loggedIn.next(false);
    this.role.next(null);
    this.idusuario.next(null);
    this.userToken.next(null);
    this.router.navigate(['login'])
  };

  private checkToken():void {
    const user = JSON.parse(localStorage.getItem('Token')!) || null;
    if(user){
      const isExpired = helper.isTokenExpired(user.token);
      if(isExpired){
        this.logout();
      }else{
        this.loggedIn.next(true);
        this.role.next(user.usuario.rol);
        this.idusuario.next(user.usuario.id);
        this.userToken.next(user.token);
        this.username.next(user.usuario.nombre + " " + user.usuario.apellido)
      }
    }
  }

  private saveToken(user:UserRespose){
    const { ... rest} = user;
    localStorage.setItem('Token',JSON.stringify(rest));
 };

  private handleError(err :any): Observable<never>{

    let errorMessage = 'Error'
    if(err){
      errorMessage = `Error: code ${err.message}`;
    }
    window.alert(errorMessage);
    return throwError(err);
  };

  openSnackBar() {
    this._snackBar.open('Verifique si sus datos son correctos', '', {
      horizontalPosition: 'center',
      verticalPosition: 'top',
      duration: 3000,
    });
  }
}
