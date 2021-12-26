import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { catchError, Observable, Subject, throwError } from 'rxjs';
import { Usuarios } from 'src/app/models/user.interface';
import { environment } from 'src/environments/environment';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class UsersService {



  constructor(private _snack: MatSnackBar,private http:HttpClient) { }

private _refresh = new Subject<void>();

  get refresh(){
    return this._refresh;
  }




  getAll():Observable<Usuarios[]>{
     return this.http.get<Usuarios[]>(`/posts/usuarios`,httpOptions)
     .pipe(catchError(this.handleError));
  };
  getByID(){};

  new(user: any):Observable<any>{
    return this.http.post<any>(`/posts/usuarios`, user,httpOptions)
    .pipe(catchError(this.handleError));
  }
  update(id: number,user:any):Observable<any>{
    console.log(id);

    console.log(user)
    return this.http.put<any>(`/posts/usuarios/${id}`,user, httpOptions)
    .pipe(catchError(this.handleError));
  };
  delete(id: number):Observable<any>{
    return this.http.delete<any>(`/posts/usuarios?id=${id}`, httpOptions)
    .pipe(catchError(this.handleError));
  };


  private handleError(error: any):Observable<never>{
    let errorMensaje = 'An Error ocurred retrienving data';
    if(error){
      errorMensaje = `Error: ${error.message}`
    }
    window.alert(errorMensaje);
    return throwError(errorMensaje);
  }



}
