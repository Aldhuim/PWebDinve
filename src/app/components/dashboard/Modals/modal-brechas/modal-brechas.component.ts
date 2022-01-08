import { Component, Inject, Injectable, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTable } from '@angular/material/table';
import { of } from 'rxjs';
import { listaIndicarBrecha } from 'src/app/models/form.interface';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'app-modal-brechas',
  templateUrl: './modal-brechas.component.html',
  styleUrls: ['./modal-brechas.component.css']
})
export class ModalBrechasComponent implements OnInit {

  FormModal!: FormGroup;

  displayedColumns: string[] = ['1', '2', '3', '4', '5','6'];
  dataSource: listaIndicarBrecha[] = [];

  @ViewChild(MatTable) table!: MatTable<PeriodicElement>;

  constructor(@Inject(MAT_DIALOG_DATA) public data : any,private _formBuilder: FormBuilder, private sb: MatSnackBar) {


    this.FormModal = this._formBuilder.group({
        nombre_indi:['', Validators.required],
        unidad_medida:[''],
        espacio_geografico:[''],
        anno:[''],
        valor:['']
    })

   }

  ngOnInit(): void {
  }

  addData() {
    let nomb = this.FormModal.controls['nombre_indi'].value
      if(this.dataSource.length == 0){
        if( nomb != null){
          this.dataSource.push(this.FormModal.value);
          this.table.renderRows();
        }
      }
      else{
        if(this.dataSource[this.dataSource.length - 1].nombre_indi !== nomb){
          this.dataSource.push(this.FormModal.value);
          this.table.renderRows();
        }
        else{
          this.sb.open('No puedes ingresar brechas con el mismo nombre', '', {
            horizontalPosition: 'center',
            verticalPosition: 'top',
            duration: 2000,
          });
        }
      }

  }

  removeData() {
    this.dataSource.pop();
    this.table.renderRows();
  }

}
