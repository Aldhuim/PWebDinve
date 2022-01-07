import { Component, Inject, Injectable, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';

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
  dataSource: any;

  @ViewChild(MatTable) table!: MatTable<PeriodicElement>;

  constructor(@Inject(MAT_DIALOG_DATA) public data : any,private _formBuilder: FormBuilder) {

    this.dataSource = [];

    this.FormModal = this._formBuilder.group({
            brecha:[''],
            und:[''],
            esp:[''],
            anno:[''],
            valor:['']
    })

   }

  ngOnInit(): void {
  }

  addData() {
    this.dataSource.push(this.FormModal.value);
    this.table.renderRows();
  }

  removeData() {
    this.dataSource.pop();
    this.table.renderRows();
  }

}
