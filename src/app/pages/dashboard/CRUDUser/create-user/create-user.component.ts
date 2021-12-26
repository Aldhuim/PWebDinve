import { Component, OnInit } from '@angular/core';
<<<<<<< Updated upstream
=======
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsersService } from 'src/app/pages/services/users.service';
>>>>>>> Stashed changes

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

<<<<<<< Updated upstream
  constructor() { }
=======
  constructor(private userSrv:UsersService, private fb: FormBuilder) { }
>>>>>>> Stashed changes

  ngOnInit(): void {
  }

<<<<<<< Updated upstream
=======
  CrearForm: FormGroup = this.fb.group({
    user : ['', Validators.required],
    password : ['', Validators.required],
    rol : ['', Validators.required],
    activo : ['false', Validators.required],
    dni : ['', Validators.required],
    nombre : ['', Validators.required],
    apellido : ['', Validators.required],
    cargo : ['', Validators.required],
    id_unidadproductora : ['', Validators.required]
  });

  onSave(): void {

    let Form = JSON.stringify(this.CrearForm.value);
    console.log(Form );
    this.userSrv.new(Form).subscribe(res =>{
      console.log('Update', res);
    })
  }

>>>>>>> Stashed changes
}
