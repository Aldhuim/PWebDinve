import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth/auth.service';



@Injectable({
  providedIn: 'root'
})
export class RolesGuardGuard implements CanActivate {

  isAdmin:any = null;

  constructor(private api: AuthService, private router: Router){

  }

  redirect(flag: boolean): any{
    if(!flag){
      this.router.navigate(['/','dashboard'])
    }
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      this.api.Roles.subscribe(response => this.isAdmin = response);
      var boolValue = false;
      if(this.isAdmin == 1 || this.isAdmin == 2){
         boolValue = true;
      }
      this.redirect(boolValue);
      return boolValue;
  }

}
