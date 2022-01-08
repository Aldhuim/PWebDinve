import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { FormulariosService } from 'src/app/services/Formularios/formularios.service';
import { ModalBrechasComponent } from '../Modals/modal-brechas/modal-brechas.component';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'app-formulario5a',
  templateUrl: './formulario5a.component.html',
  styleUrls: ['./formulario5a.component.css']
})
export class Formulario5aComponent implements OnInit {

  CrearForm5A!: FormGroup

  isLinear = false;
  firstFormGroup!: FormGroup;
  secondFormGroup!: FormGroup;

  constructor(private _formBuilder: FormBuilder, private dialog: MatDialog,
    private formsrv: FormulariosService) {
    this.dataSource = [];

    this.FormService = this._formBuilder.group({
      servicio:['']
    })

    // El Formulario
    this.CrearForm5A = this._formBuilder.group({
      id_form : [''],
      estado : [''],
      estado2 : [0],
      id_form5a : [''],
      nombre_idea : ['', Validators.required],
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
      naturaleza_intervencion : [''],
      localizacion_geografica : ['naturaleza_intervencion'],
      costo_aproximado_estudio_preinversion: [''],
      ejecucion_tentativa:[''],
      fuente_financiamiento : [''],
      id_resp : [[]],
      id_programa : [[]],
      total_proyectos : [[]],
      total_ioarr : [[]],
      gestion_programa : [[]],
      estudios_base_ioarr : [[]],
      total : [[]],

      id_ali : [[]],
      nombre_ali : [[]],
      contribucion_valor : [[]],

      //Estructura de la Brecha
      id_indi : [[]],
      nombre_indi : [[]],
      unidad_medida : [[]],
      espacio_geografico : [[]],
      anno : [[]],
      valor : [[]],

      id_adjunto : [[]],
      tipo_adjunto : [[]],
      nombre : [[]],
      direccion : [[]]
      })


   }

  FormService!: FormGroup;

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'button'];
  displayedColumns2: string[] = ['position', 'name', 'button'];
  displayedColumns3: string[] = ['position', 'name','cap', 'button'];
  displayedColumns4: string[] = ['position', 'name', 'button'];
  dataSource: any;
  dataSource2: any;
  dataSource3: any;
  dataSource4: any;

  @ViewChild(MatTable) table!: MatTable<PeriodicElement>;

  addData() {
    this.dataSource.push(this.FormService.value);
    this.table.renderRows();
  }

  removeData() {
    this.dataSource.pop();
    this.table.renderRows();
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


  onCreateForm5A(): void {
    this.CrearForm5A.controls['estado'].setValue(1)
    let Form = JSON.stringify(this.CrearForm5A.value);
    console.log(Form);
    this.formsrv.new5A(Form).subscribe(res =>{
      console.log('Create', res);
    })
  }

  onGuardarForm5A(): void {
    this.CrearForm5A.controls['estado'].setValue(0)
    let Form = JSON.stringify(this.CrearForm5A.value);
    console.log(Form);
    this.formsrv.new5A(Form).subscribe(res =>{
      console.log('Guardado', res);
    })
  }

}
