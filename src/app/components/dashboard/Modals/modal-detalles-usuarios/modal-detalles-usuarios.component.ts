import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UnidadProductora } from 'src/app/models/user.interface';

@Component({
  selector: 'app-modal-detalles-usuarios',
  templateUrl: './modal-detalles-usuarios.component.html',
  styleUrls: ['./modal-detalles-usuarios.component.css']
})
export class ModalDetallesUsuariosComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data : any) { }

  ngOnInit(): void {

  }

}
