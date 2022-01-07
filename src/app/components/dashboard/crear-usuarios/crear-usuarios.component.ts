import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user/user.service';

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

  hide = true;
  CrearForm!: FormGroup


  constructor(private fb: FormBuilder,private userSrv : UserService) {

    this.CrearForm = this.fb.group({
      id_unidad: [1],
      nombre_up: ['Unidad1'],
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
  }

  Roles: Rol[] = [
    {value: 0, rol: 'Usuario UP'},
    {value:  1, rol: 'Usuario Dinve'},
    {value: 2, rol: 'Administrador'},
  ];


  onCreateForm(): void {
    let Form = JSON.stringify(this.CrearForm.value);
    this.userSrv.new(Form).subscribe(res =>{
      console.log('Create', res);
    })
  }



}
