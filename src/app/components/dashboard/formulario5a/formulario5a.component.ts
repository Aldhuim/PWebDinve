import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
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

  isLinear = false;
  firstFormGroup!: FormGroup;
  secondFormGroup!: FormGroup;

  constructor(private _formBuilder: FormBuilder, private dialog: MatDialog) {
    this.dataSource = [];

    this.FormService = this._formBuilder.group({
      servicio:['']
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

}
