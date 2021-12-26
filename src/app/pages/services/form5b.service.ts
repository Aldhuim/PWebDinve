import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class Form5bService {

  constructor(private http:HttpClient) { }

  new(formulario: any,id :number):Observable<any>{
    return this.http.post<any>(`/posts/usuarios/${id}/form5b`, formulario,httpOptions)
    .pipe(catchError(this.handleError));
  }

  private handleError(error: any):Observable<never>{
    let errorMensaje = 'An Error ocurred retrienving data';
    if(error){
      errorMensaje = `Error: ${error.message}`
    }
    window.alert(errorMensaje);
    return throwError(errorMensaje);
  }


}
