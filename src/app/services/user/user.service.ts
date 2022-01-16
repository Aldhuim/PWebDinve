import { CrearUser, UnidadProductora } from './../../models/user.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Usuario } from 'src/app/models/user.interface';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) {

  }

  getallup():Observable<UnidadProductora[]>{
    return this.http.get<UnidadProductora[]>(`${environment.API_URL}/up/findAll`).pipe(catchError(this.handleError));
  }

  getall(pages:number,size:number):Observable<Usuario[]>{
    return this.http.get<Usuario[]>(`${environment.API_URL}/user/get/all?page=${pages}&size=${size}`).pipe(catchError(this.handleError));
  }
  new(user: any):Observable<any>{
    return this.http.post(`${environment.API_URL}/user/create`,user,{responseType: 'text'})
    .pipe(catchError(this.handleError));
  }


  private handleError(error: any):Observable<never>{
    let errorMensaje = 'An Error ocurred retrienving data';
    if(error){
      errorMensaje = `Error: ${error.message}`+ ` CODE: ${error.status}`;
    }
    window.alert(errorMensaje);
    return throwError(errorMensaje);
  }


}
