import { Component, OnInit } from '@angular/core';
<<<<<<< Updated upstream
=======
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Form5bService } from 'src/app/pages/services/form5b.service';
>>>>>>> Stashed changes

@Component({
  selector: 'app-formioarr',
  templateUrl: './formioarr.component.html',
  styleUrls: ['./formioarr.component.css']
})
export class FormioarrComponent implements OnInit {

<<<<<<< Updated upstream
  constructor() { }
=======
  constructor(private formSrv:Form5bService, private fb: FormBuilder) { }
>>>>>>> Stashed changes

  ngOnInit(): void {
  }

<<<<<<< Updated upstream
=======
  Crear5bForm: FormGroup = this.fb.group({
    id_form : ['', Validators.required],
    estado : [0, Validators.required],
    estado2 : [0, Validators.required],
    id_form5b : ['', Validators.required],
    nombre_idea : ['', Validators.required],
    funcional_division : ['', Validators.required],
    funcional_funcion : ['', Validators.required],
    funcional_sector : ['', Validators.required],
    funcional_grupo : ['', Validators.required],
    uf_sector : ['', Validators.required],
    uf_entidad : ['', Validators.required],
    uf_nombre : ['', Validators.required],
    uf_responsable : ['', Validators.required],
    ufi_sector : ['', Validators.required],
    ufi_entidad : ['', Validators.required],
    ufi_nombre : ['', Validators.required],
    ufi_responsable : ['', Validators.required],
    ufp_sector : ['', Validators.required],
    ufp_entidad : ['', Validators.required],
    ufp_nombre : ['', Validators.required],
    naturaleza_intervencion : ['', Validators.required],
    localizacion_geografica : ['', Validators.required],
    modalidad_ejecucion : [0, Validators.required],
    fuente_financiamiento : [0, Validators.required],
    id_resp : [[], Validators.required],
    tipo_resp : [[], Validators.required],
    costo_resp : [[], Validators.required],

    id_ali : this.fb.array([]),
    nombre_ali : this.fb.array([]),
    contribucion_valor : this.fb.array([]),
    id_indi : this.fb.array([]),
    nombre_indi : this.fb.array([]),
    unidad_medida : this.fb.array([]),
    espacio_geografico : this.fb.array([]),
    anno : this.fb.array([]),
    valor : this.fb.array([]),


    id_adjunto : [[], Validators.required],
    tipo_adjunto : [[], Validators.required],
    nombre : [[], Validators.required],
    direccion : [[], Validators.required]
  });


  onSave(): void {

    let Form = JSON.stringify(this.Crear5bForm.value);
    console.log(Form );
    this.formSrv.new(Form,1).subscribe(res =>{
      console.log('Create', res);
    })
  }





>>>>>>> Stashed changes
}
