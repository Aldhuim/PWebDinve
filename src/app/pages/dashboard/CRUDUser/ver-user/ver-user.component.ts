<<<<<<< Updated upstream
import { Component, OnInit } from '@angular/core';
=======
import { Usuarios } from './../../../../models/user.interface';
import {LiveAnnouncer} from '@angular/cdk/a11y';
import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatSort, Sort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { UsersService } from 'src/app/pages/services/users.service';
import {MatDialog} from '@angular/material/dialog';

import { ModalUsersComponent } from '../../components/modal-users/modal-users.component';
import { ModalDeleteUserComponent } from '../../components/modal-delete-user/modal-delete-user.component';
import { MatSnackBar } from '@angular/material/snack-bar';



>>>>>>> Stashed changes

@Component({
  selector: 'app-ver-user',
  templateUrl: './ver-user.component.html',
<<<<<<< Updated upstream
  styleUrls: ['./ver-user.component.css']
})
export class VerUserComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

=======
  styleUrls: ['./ver-user.component.css'],

})
export class VerUserComponent implements OnInit  {

  Usuario: Usuarios[] = [] ;

  CodFil = ''
  NombFil = ''
  DniFil =''
  CorreoFil = ''

  constructor(private UserSvc:UsersService, private dialog: MatDialog,private _snack: MatSnackBar) {
    this.onDatos();

  }
  ngOnInit(): void {

  }

  onDatos(){
    this.UserSvc.getAll().subscribe(res => {
      this.Usuario= res;
    });
  }

  onOpenModal(user = {}) :void {

    const dialogRef = this.dialog.open(ModalUsersComponent,{
      height: '550px',
      width: '40%',
      disableClose: true,
      data: {title:"Editar Usuario" , user}

    });

    dialogRef.afterClosed().subscribe(result => {
      this.onDatos();
    });

  }

  onDelete(user= {}) :void {
    const dialogRef = this.dialog.open(ModalDeleteUserComponent,{
      height: '150px',
      width: '500px',
      disableClose: true,
      data: {title:"Seguro que desea eliminar al usuario" , user}

    });

    dialogRef.afterClosed().subscribe(result => {

      this.onDatos();
    });
  }



>>>>>>> Stashed changes
}
