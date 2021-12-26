import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Subject, Subscription } from 'rxjs';
import { UsersService } from 'src/app/pages/services/users.service';


@Component({
  selector: 'app-modal-users',
  templateUrl: './modal-users.component.html',
  styleUrls: ['./modal-users.component.css']
})
export class ModalUsersComponent implements OnInit {



  constructor(@Inject(MAT_DIALOG_DATA) public data : any,private userSrv:UsersService,private _snack: MatSnackBar, private fb: FormBuilder,private router:Router) {

  }

    editForm: FormGroup = this.fb.group({
    user : [this.data.user.user, Validators.required],
    password : [this.data.user.password, Validators.required],
    rol : [this.data.user.rol, Validators.required],
    activo : [this.data.user.activo, Validators.required],
    dni : [this.data.user.dni, Validators.required],
    nombre : [this.data.user.nombre, Validators.required],
    apellido : [this.data.user.apellido, Validators.required],
    cargo : [this.data.user.cargo, Validators.required]
  });

  ngOnInit(): void {

  }



  onSave(): void {
    const userId = this.data.user.id;
    let Form = JSON.stringify(this.editForm.value);
    this.userSrv.update(userId,Form).subscribe(res =>{
      this._snack.open('Usuario actualizado correctamente','',{duration:5000,horizontalPosition:'center',verticalPosition:'top'})
      console.log('Update', res);
    })



  }

}
