import { HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AuthService } from "src/app/services/auth/auth.service";

@Injectable()
export class AdminInterceptor implements HttpInterceptor{

  constructor(private auth:AuthService){

  }

  intercept(request:HttpRequest<any>,next: HttpHandler):Observable<any>{
    if(request.url.includes('get')||request.url.includes('create')|| request.url.includes('save')
    || request.url.includes('up')
    ){
    const AuthToken = this.auth.userTokenValue;
    const AuthReq = request.clone({
      setHeaders: {
        Authorization: AuthToken,
        responseType: 'text',
        'Content-Type': 'application/json'
      },
    });
    return next.handle(AuthReq);
    }
    return next.handle(request);
  }
}
