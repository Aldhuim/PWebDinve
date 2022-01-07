import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-inscripciones',
  templateUrl: './inscripciones.component.html',
  styleUrls: ['./inscripciones.component.css']
})
export class InscripcionesComponent implements OnInit {

  isRol:number = 0;

  constructor(private serv: AuthService) { }

  ngOnInit(): void {
    this. getRole();
  }

  getRole(){
    this.serv.Roles.subscribe(data =>
     {
      if(data!=null){
        this.isRol = data
      }
     }
    )
  }

}
