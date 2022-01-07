import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-menu-principal',
  templateUrl: './menu-principal.component.html',
  styleUrls: ['./menu-principal.component.css']
})
export class MenuPrincipalComponent implements OnInit {

  isAdmin:any= null;

  constructor(private auth: AuthService) {
    this.isRole();
  }

  ngOnInit(): void {

  }

  isRole(){
      this.auth.Roles.subscribe((res)=> (this.isAdmin = res));
  }

}
