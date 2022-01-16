import { Component, Inject, Injectable, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar, MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';
import { MatTable } from '@angular/material/table';
import { listaALineamientoBrechaServiciosPublicosBrechaIdentificada, listaIndicarBrecha } from 'src/app/models/form.interface';
import { AlertSnackBarComponent } from '../alert-snack-bar/alert-snack-bar.component';


@Component({
  selector: 'app-modal-brechas',
  templateUrl: './modal-brechas.component.html',
  styleUrls: ['./modal-brechas.component.css']
})
export class ModalBrechasComponent implements OnInit {

  FormModal!: FormGroup;
  BrechaFormGroup!: FormGroup;
  TotalServicio:number = 0;

  Enviar= false;

  ArrayServicio: listaALineamientoBrechaServiciosPublicosBrechaIdentificada[] = [];
  ArrayDetallesBrecha: listaIndicarBrecha[] =[];

  displayedColumns: string[] = ['1', '2', '3', '4', '5','6'];

  disabled = true;

  @ViewChild(MatTable) table!: MatTable<any>;

  constructor(@Inject(MAT_DIALOG_DATA) public data : any,private _formBuilder: FormBuilder,
  private sb: MatSnackBar,public dialogRef: MatDialogRef<ModalBrechasComponent>) {

    this.FormModal = this._formBuilder.group({
      id:[],
      nombre:[this.data.user.servicio],
      contribucion_valor:[],
      listaIndicarBrecha: this._formBuilder.array([])
    })

   }

  ngOnInit(): void {
  }

  get listaIndicarBrechas(){
    return this.FormModal.get('listaIndicarBrecha') as FormArray;
  }

  addBrechas(){
    this.BrechaFormGroup = this._formBuilder.group({
      id:[],
      nombre_indi:[],
      unidad_medida:[,[Validators.required,Validators.pattern("^[0-9]*$")]],
      espacio_geografico:[],
      anno:[,[Validators.required,Validators.pattern("^[0-9]*$"),Validators.maxLength(4),Validators.minLength(4)]],
      valor:[,[Validators.required,Validators.pattern("^[0-9]*$")]]
    });
    this.listaIndicarBrechas.push(this.BrechaFormGroup);
  }

  removeBrechas(i :number){
    this.listaIndicarBrechas.removeAt(i)
  }

  setValueTotal(){
    this.ArrayDetallesBrecha = Object.values(this.FormModal.controls['listaIndicarBrecha'].value);
    this.ArrayDetallesBrecha.forEach(element => {
      if(element.valor != null){
        this.TotalServicio += parseInt(element.valor.toString());
      }
    });
    this.FormModal.controls['contribucion_valor'].setValue(this.TotalServicio);
  }

  submit() {
    this.openSnackBar();
  }

  openSnackBar() {
   const alert= this.sb.openFromComponent(AlertSnackBarComponent, {
      horizontalPosition: 'center',
      verticalPosition: 'top',
      duration: 8000,
      data:{accion:"CerrarBrecha",Message:"Seguro que desea salir?, ya no podra registrar o editar las brechas", Opcion1:"Cancelar"
      ,Opcion2:"Si,Deseo salir"},
    });

    alert.onAction().subscribe(() => {
      this.setValueTotal();
      this.dialogRef.close(this.FormModal.value);
    })

  }



}
