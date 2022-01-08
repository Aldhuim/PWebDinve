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
    return this.http.get<UnidadProductora[]>(`/dinve/up/findAll`).pipe(catchError(this.handleError));
  }

  getall(pages:number,size:number):Observable<Usuario[]>{
    return this.http.get<Usuario[]>(`/dinve/user/get/all?page=${pages}&${size}`).pipe(catchError(this.handleError));
  }
  new(user: any):Observable<any>{
    return this.http.post(`/dinve/user/create`,user,{responseType: 'text'})
    .pipe(catchError(this.handleError));

  }
  update(id: number,user:any):Observable<any>{
    console.log(id);
    console.log(user)
    return this.http.put<any>(`/dinve/usuarios/${id}`,user)
    .pipe(catchError(this.handleError));
  };
  delete(id: number):Observable<any>{
    return this.http.delete<any>(`/dinve/usuarios?id=${id}`)
    .pipe(catchError(this.handleError));
  };


  private handleError(error: any):Observable<never>{
    let errorMensaje = 'An Error ocurred retrienving data';
    if(error){
      errorMensaje = `Error: ${error.message}`+ ` CODE: ${error.status}`;
    }
    window.alert(errorMensaje);
    return throwError(errorMensaje);
  }


}
