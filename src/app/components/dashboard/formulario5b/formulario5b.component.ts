import { FormulariosService } from './../../../services/Formularios/formularios.service';
import { ModalBrechasComponent } from './../Modals/modal-brechas/modal-brechas.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatTable } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'app-formulario5b',
  templateUrl: './formulario5b.component.html',
  styleUrls: ['./formulario5b.component.css']
})
export class Formulario5bComponent implements OnInit {

  FormService!: FormGroup;

  CrearForm5B!: FormGroup
  CrearSubForm5B!: FormGroup

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'button'];
  displayedColumns2: string[] = ['position', 'name', 'button'];
  dataSource: any;
  dataSource2: any;

  @ViewChild(MatTable) table!: MatTable<PeriodicElement>;

  addData() {
    this.dataSource.push(this.FormService.value);
    this.table.renderRows();
  }

  removeData() {
    this.dataSource.pop();
    this.table.renderRows();
  }

  isLinear = false;
  firstFormGroup!: FormGroup;
  secondFormGroup!: FormGroup;

  Detalles:any;

  constructor(private _formBuilder: FormBuilder, private dialog: MatDialog, private formsrv: FormulariosService) {
    this.dataSource = [];

    this.FormService = this._formBuilder.group({
      servicio:['']
    })

    // El Formulario
    this.CrearForm5B = this._formBuilder.group({
    id_form : [''],
    estado : [1 ],
    estado2 : [0],
    id_form5b : [''],
    nombre_idea : [''],
    funcional_division : [''],
    funcional_funcion : [''],
    funcional_sector : [''],
    funcional_grupo : [''],
    uf_sector : [''],
    uf_entidad : [''],
    uf_nombre : [''],
    uf_responsable : [''],
    ufi_sector : [''],
    ufi_entidad : [''],
    ufi_nombre : [''],
    ufi_responsable : [''],
    ufp_sector : [''],
    ufp_entidad : [''],
    ufp_nombre : [''],
    naturaleza_intervencion : ['naturaleza_intervencion'],
    localizacion_geografica : ['naturaleza_intervencion'],
    modalidad_ejecucion : [0],
    fuente_financiamiento : [0],
    id_resp : [[]],
    tipo_resp : [[]],
    costo_resp : [[] ],

    id_ali : this._formBuilder.array([]),
    nombre_ali : this._formBuilder.array([]),
    contribucion_valor : this._formBuilder.array([]),
    id_indi : this._formBuilder.array([]),
    nombre_indi : this._formBuilder.array([]),
    unidad_medida : this._formBuilder.array([]),
    espacio_geografico : this._formBuilder.array([]),
    anno : this._formBuilder.array([]),
    valor : this._formBuilder.array([]),

    id_adjunto : [[]],
    tipo_adjunto : [[]],
    nombre : [[]],
    direccion : [[]]
    })

    //

   }

  ngOnInit(): void {

    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required],
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required],
    });
  }

  dato!:string;

  onOpenModal(user = {}, id:string) :void {
    const dialogRef = this.dialog.open(ModalBrechasComponent,{
      height: '450px',
      width: '50%',
      disableClose: true,
      data: {title:"Crear Brechas" , user, id, datos:this.dato},

    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }

  onCreateForm5B(): void {
    let Form = JSON.stringify(this.CrearForm5B.value);
    console.log(Form);
    this.formsrv.new5B(Form).subscribe(res =>{
      console.log('Create', res);
    })
  }






}
