import { CookieService } from 'ngx-cookie-service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from '../../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class NotLoginGuard implements CanActivate {

  constructor(private cookie: CookieService, private api: AuthService, private router: Router){

  }

  redirect(flag: boolean): any{
    if(!flag){
      this.router.navigate(['/','login'])
    }
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const c = localStorage.getItem('user');
    var boolValue = false;
    if(c != null){
       boolValue = true;
    }
    this.redirect(boolValue);
    return boolValue;
  }

}
