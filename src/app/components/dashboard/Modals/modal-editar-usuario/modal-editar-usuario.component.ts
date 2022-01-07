import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/services/user/user.service';

interface Rol {
  value: number;
  rol: string;
}

@Component({
  selector: 'app-modal-editar-usuario',
  templateUrl: './modal-editar-usuario.component.html',
  styleUrls: ['./modal-editar-usuario.component.css']
})
export class ModalEditarUsuarioComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data : any,private _snack: MatSnackBar,
  private fb: FormBuilder, private userSrv: UserService) { }

  ngOnInit(): void {
  }


  EditarForm: FormGroup = this.fb.group({
    user : [this.data.user.user, Validators.required],
    rol : [this.data.user.rol, Validators.required],
    dni : [this.data.user.dni, Validators.required],
    nombre : [this.data.user.nombre, Validators.required],
    apellido : [this.data.user.apellido, Validators.required],
    cargo : [this.data.user.cargo, Validators.required]
  });

  Roles: Rol[] = [
    {value: 0, rol: 'Usuario UP'},
    {value:  1, rol: 'Usuario Dinve'},
    {value: 2, rol: 'Administrador'},
  ];

  onEditarForm(){


  }
}
