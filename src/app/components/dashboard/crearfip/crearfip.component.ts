import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-crearfip',
  templateUrl: './crearfip.component.html',
  styleUrls: ['./crearfip.component.css']
})
export class CrearfipComponent implements OnInit{



  constructor(private auth: AuthService) { }


  ngOnInit(): void {

  }



}
