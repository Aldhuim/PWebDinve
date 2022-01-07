import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuardGuard implements CanActivate {

  constructor( private api: AuthService, private router: Router){

  }

  redirect(flag: boolean): any{
    if(!flag){
      this.router.navigate(['/','login'])
    }
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const c = localStorage.getItem('Token');
      var boolValue = false;
      if(c != null){
         boolValue = true;
      }
      this.redirect(boolValue);
      return boolValue;
  }

}
