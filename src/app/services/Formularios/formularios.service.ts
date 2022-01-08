import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { AllForms } from 'src/app/models/form.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FormulariosService {

  constructor(private http:HttpClient) { }

  getall(pages:number,size:number):Observable<AllForms[]>{
    return this.http.get<AllForms[]>(`/dinve/form/get/all?page=${pages}&${size}`)
    .pipe(catchError(this.handleError));
  }

  getallme(pages:number,size:number):Observable<AllForms[]>{
    return this.http.get<AllForms[]>(`/dinve/form/get/me?page=${pages}&${size}`)
    .pipe(catchError(this.handleError));
  }

  new5B(Formularios: any):Observable<any>{
    return this.http.post(`/dinve/form5b/save`,Formularios,{responseType: 'text'})
    .pipe(catchError(this.handleError));

  }
  new5A(Formularios: any):Observable<any>{
    return this.http.post(`/dinve/form5a/save`,Formularios,{responseType: 'text'})
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
