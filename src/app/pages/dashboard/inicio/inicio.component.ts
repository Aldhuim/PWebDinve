import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  isAdmin:any = null;

  showFiller = false;

<<<<<<< Updated upstream
  constructor(public auth: AuthService) { }

  ngOnInit(): void {


  }


=======
  constructor(private auth: AuthService) { }

  ngOnInit(): void {

    this.Role();

  }

  Role(): void {
    this.auth.isAdmin.subscribe(response => this.isAdmin = response);
  }
>>>>>>> Stashed changes

}


