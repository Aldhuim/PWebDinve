
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UnidadProductora } from 'src/app/models/user.interface';
import { AuthService } from 'src/app/services/auth/auth.service';
import { UserService } from 'src/app/services/user/user.service';
import {Location} from '@angular/common';


interface Rol {
  value: number;
  rol: string;
}

@Component({
  selector: 'app-crear-usuarios',
  templateUrl: './crear-usuarios.component.html',
  styleUrls: ['./crear-usuarios.component.css']
})
export class CrearUsuariosComponent implements OnInit {

  Role = 0;
  hide = true;
  CrearForm!: FormGroup
  UP: UnidadProductora[] = []


  constructor(private fb: FormBuilder,private userSrv : UserService, private api: AuthService,private _location: Location) {

    this.CrearForm = this.fb.group({
      id_unidad: ['',Validators.required],
      user : ['', Validators.required],
      password : ['', Validators.required],
      dni : ['', [Validators.required,Validators.maxLength(8),Validators.minLength(8)]],
      nombre : ['', Validators.required],
      apellido : ['', Validators.required],
      cargo : ['', Validators.required],
      rol : ['', Validators.required]
    });

   }

  ngOnInit(): void {

    this.getAllUP();
    this.isRole();
  }

  Roles_Admin: Rol[] = [
    {value: 0, rol: 'Usuario UP'},
    {value:  1, rol: 'Usuario Dinve'},
    {value: 2, rol: 'Administrador'},
  ];
  Roles: Rol[]=[
    {value: 0, rol: 'Usuario UP'}
  ];


  onCreateForm(): void {
    let Form = JSON.stringify(this.CrearForm.value);
    this.userSrv.new(Form).subscribe(res =>{
      console.log('Create', res);
      window.location.reload();
    });
  }

    getAllUP() {
    this.userSrv.getallup().subscribe((up) => {
      this.UP = Object.values(up);
    })
  }
  isRole(){
    this.api.Roles.subscribe((res) => {
      if(res != null){
        this.Role = res
      }
    })
  }

  backClicked() {
    this._location.back();
  }


}
