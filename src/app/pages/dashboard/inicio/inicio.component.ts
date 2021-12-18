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

  constructor(public auth: AuthService) { }

  ngOnInit(): void {


  }



}


