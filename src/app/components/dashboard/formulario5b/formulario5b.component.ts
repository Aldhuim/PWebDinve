
import { FormulariosService } from './../../../services/Formularios/formularios.service';
import { ModalBrechasComponent } from './../Modals/modal-brechas/modal-brechas.component';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatTable } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { listaALineamientoBrechaServiciosPublicosBrechaIdentificada, listaResponsabilidadFuncionalDescripcionIOARR } from 'src/app/models/form.interface';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-formulario5b',
  templateUrl: './formulario5b.component.html',
  styleUrls: ['./formulario5b.component.css']
})
export class Formulario5bComponent implements OnInit ,OnDestroy {

  FormService!: FormGroup;
  CrearForm5B!: FormGroup
  FormTipoIOARR!: FormGroup;

  displayedColumns: string[] = ['1', '2', '3'];
  displayedColumns2: string[] = ['4', '5', '6'];

  dataSource: any;
  dataSource2: any;

  //Array Brechas
  ArrayDetallesBrechas:any[] = []
  //Array Servicio
  ArrayServicio: listaALineamientoBrechaServiciosPublicosBrechaIdentificada[]= []
  //Array TipoIOARR
  ArrayTipoIOARR: listaResponsabilidadFuncionalDescripcionIOARR[] =[]

  isLinear = false;

  firstFormGroup!: FormGroup;
  secondFormGroup!: FormGroup;

  //Array de los Valores del Alineamiento
  idAli:any[]=[]
  NombreAli:string[] =[]
  TotalAli:number[]=[]

  //Arrays de losValores las Brechas
  idBrecha:any[]=[]
  nombreBrecha:any[] = [];
  unidadBrecha:any[number] = [];
  espacioBrecha:any[] = [];
  annoBrecha:any[number] = [];
  valorBrecha:any[number] = [];

  //Array de los Valores de Tipos de IOARR
  idResp:any[]= [];
  tipoResp:any[]=[];
  costoResp:any[number]=[];

  //MatTablas del Formulario
  @ViewChild('hBServicio') TableServicio!: MatTable<any>;
  @ViewChild('hBTipo') TableTipoIOARR!: MatTable<any>;

  private subscription : Subscription = new Subscription();

  constructor(private _formBuilder: FormBuilder, private dialog: MatDialog,
    private formsrv: FormulariosService,private sb: MatSnackBar,private router:Router) {

    //FormServicio
    this.dataSource = [];
    this.FormService = this._formBuilder.group({
      servicio:['']
    })

    //FormTipoIOARR
    this.dataSource2 = [];
    this.FormTipoIOARR = this._formBuilder.group({
      tipo_resp:[''],
      costo_resp:[''],
    })

    // El Formulario
    this.CrearForm5B = this._formBuilder.group({

    //Cabecera Formulario
    id_form : [''],
    estado : [''],
    estado2 : [0],
    id_form5b : [''],

    //Detalles Formulario
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
    naturaleza_intervencion : ['naturaleza_intervencion'],
    localizacion_geografica : ['naturaleza_intervencion'],
    modalidad_ejecucion : [0],
    fuente_financiamiento : [0],

    id_resp : [[]],
    tipo_resp : [[]],
    costo_resp : [[] ],

    //Estuctura de la Alineamiento
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
    //Estructura del Archivo
    id_adjunto : [[]],
    tipo_adjunto : [[]],
    nombre : [[]],
    direccion : [[]]
    })

   }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required],
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required],
    });

  }


  //Abre Modal
  onOpenModal(user ={}){

    //Comparar nombres para validar Servicios con Brechas
    let MatchNombre = false;
    for(var i =0; i < this.dataSource.length;i++){
        MatchNombre = false;
        for(var j =0; j < this.ArrayServicio.length;j++){
            if(this.dataSource[i].servicio == this.ArrayServicio[j].nombre){
              MatchNombre = true;
                break;
            }
        }
    }

    //Valida si existe un Servicio con Brechas
    if(this.ArrayServicio.length != 0){
      this.ArrayServicio.forEach((data) => {
        if(MatchNombre) {
          this.AlertSnack('Usted ya registro esta las brechas de este Servicio');
        }
        else{
          this.ModalBrecha(user);
        }
      })
    }
    else{
      this.ModalBrecha(user);
    }

  }


  //Modal de la tabla Brechas
    ModalBrecha(user = {}) :void {
      const dialogRef = this.dialog.open(ModalBrechasComponent,{
        disableClose: true,
        width:'750px',
        data: {title:"Crear Brechas" , user},

      });
      this.subscription.add(
        dialogRef.afterClosed().subscribe(result => {
          if(result != ''){
            this.ArrayServicio.push(result);
          }
        })
      );
  }

  //Crear El Formulario y guardo con el estado 1
  onCreateForm5B(): void {
    this.CrearForm5B.controls['estado'].setValue(1)
    this.setValuesForm();
    this.setValuesFormIOARR();
    let Form = JSON.stringify(this.CrearForm5B.value);
    this.subscription.add(
      this.formsrv.new5B(Form).subscribe(res =>{
        console.log('Create', res);
        window.location.reload();
      })
    );
  }

  //Crear El Formulario y guardo con el estado 0
  onGuardarForm5B(): void {
    this.CrearForm5B.controls['estado'].setValue(0);
    this.setValuesForm();
    this.setValuesFormIOARR();
     let Form = JSON.stringify(this.CrearForm5B.value);
    this.subscription.add(
      this.formsrv.new5B(Form).subscribe(res =>{
        console.log('Guardado', res);
        window.location.reload();
      })
    )
  }

  //Agrega los datos de los Servicios con sus brechas al Formulario
  setValuesForm(){

    //Array Auxiliares
    let id:any = []
    let nomAux:any = []
    let und:any = []
    let esp:any = []
    let anno:any = []
    let valor:any = []

    this.ArrayServicio.forEach((data) =>{

      //Agregaa los Servicio al Formulario principal
      this.idAli.push(null);
      this.CrearForm5B.controls['id_ali'].setValue(this.idAli);
      this.NombreAli.push(data.nombre);
      this.CrearForm5B.controls['nombre_ali'].setValue(this.NombreAli);
      this.TotalAli.push(parseInt(data.contribucion_valor.toString()));
      this.CrearForm5B.controls['contribucion_valor'].setValue(this.TotalAli);

      for(let brecha of Object.values(data.listaIndicarBrecha)){

        //Agrega las Brechas de los Servicio a los Array Auxiliares
        id.push(null);
        nomAux.push(brecha.nombre_indi);
        und.push(brecha.unidad_medida);
        esp.push(brecha.espacio_geografico);
        anno.push(brecha.anno);
        valor.push(brecha.valor);
      }

      //Agrega al Formulaio CrearForm5B las Brechas Guardadas en los Arrays Auxiliares
      this.idBrecha.push(id);
      this.CrearForm5B.controls['id_indi'].setValue(this.idBrecha);
      this.nombreBrecha.push(nomAux);
      this.CrearForm5B.controls['nombre_indi'].setValue(this.nombreBrecha);
      this.unidadBrecha.push(und);
      this.CrearForm5B.controls['unidad_medida'].setValue(this.unidadBrecha);
      this.espacioBrecha.push(esp);
      this.CrearForm5B.controls['espacio_geografico'].setValue(this.espacioBrecha);
      this.annoBrecha.push(anno);
      this.CrearForm5B.controls['anno'].setValue(this.annoBrecha);
      this.valorBrecha.push(valor);
      this.CrearForm5B.controls['valor'].setValue(this.valorBrecha);

      //Limpia los array auxiliares para poder registrar
      //las brechas del los siguientes Servicios
      id = []
      nomAux = []
      und = []
      esp = []
      anno = []
      valor = []

    })
  }

  //Agrega los datos del Tabla Tipo IOARR al Formulario al Formulario
  setValuesFormIOARR(){

    this.ArrayTipoIOARR.forEach(data => {
      this.idResp.push(null);
      this.CrearForm5B.controls['id_resp'].setValue(this.idResp);
      this.tipoResp.push(data.tipo_resp);
      this.CrearForm5B.controls['tipo_resp'].setValue(this.tipoResp);
      this.costoResp.push(data.costo_resp);
      this.CrearForm5B.controls['costo_resp'].setValue(this.costoResp);
    })

  }

   //Agrega los Servicios
   addData() {
    let text = this.FormService.controls['servicio'].value;
    let MatchNombre = false;
      if(text != ''){
          for(var i =0; i < this.dataSource.length;i++){
            MatchNombre = false;
            if(this.dataSource[i].servicio == text){
              MatchNombre = true;
                break;
            }
          }
          if(MatchNombre){
            this.AlertSnack('No puede agregar Servicios con el mismo nombre');
          }
          else{
            this.dataSource.push(this.FormService.value);
          this.TableServicio.renderRows();
          this.FormService.controls['servicio'].setValue('');
          }
      }
      else{
          this.AlertSnack('No puede agregar Servicios con el campo vacio');
      }
  }

  //Quita los Servicios de la tabla y del Array de Servicios
  removeData(i :any) {
    this.dataSource.splice(i,1);
    this.TableServicio.renderRows();
    this.ArrayServicio.splice(i,1);
  }

  //Añade los tipos de IOARR a la tabla
  addDataIOARR(){
    let Tipo = this.FormTipoIOARR.controls['tipo_resp'].value;
    let Costo = this.FormTipoIOARR.controls['costo_resp'].value;
    if(Tipo != '' && Costo != ''){
      this.dataSource2.push(this.FormTipoIOARR.value);
      this.ArrayTipoIOARR.push(this.FormTipoIOARR.value);
      this.TableTipoIOARR.renderRows();
      this.FormTipoIOARR.controls['tipo_resp'].setValue('');
      this.FormTipoIOARR.controls['costo_resp'].setValue('');
    }
    else{
      this.AlertSnack('No puedes agregar Tipo de IOARR con los campos vacios')
    }
  }

  //Quita los tipos de IOARR de la tabla
  removeDataIOARR(i :any) {
    this.dataSource2.splice(i,1);
    this.TableTipoIOARR.renderRows();
    this.ArrayTipoIOARR.splice(i,1);
  }

  //Alerta
  AlertSnack(message:string){
      this.sb.open(message, '', {
      horizontalPosition: 'center',
      verticalPosition: 'top',
      duration: 3000,
    });
  }


}
