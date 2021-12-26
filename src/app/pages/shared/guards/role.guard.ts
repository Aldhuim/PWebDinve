import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {

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

    this.api.isAdmin.subscribe(response => this.isAdmin = response);
    var boolValue = false;
    if(this.isAdmin == 'admin'){
       boolValue = true;
    }
    this.redirect(boolValue);
    return boolValue;
  }

}
