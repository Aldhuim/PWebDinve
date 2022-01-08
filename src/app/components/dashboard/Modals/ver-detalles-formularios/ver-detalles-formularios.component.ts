import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-ver-detalles-formularios',
  templateUrl: './ver-detalles-formularios.component.html',
  styleUrls: ['./ver-detalles-formularios.component.css']
})
export class VerDetallesFormulariosComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data : any) { }

  ngOnInit(): void {
  }

}
