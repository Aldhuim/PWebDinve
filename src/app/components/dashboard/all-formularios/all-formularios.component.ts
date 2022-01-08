import { AllForms } from './../../../models/form.interface';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { FormulariosService } from 'src/app/services/Formularios/formularios.service';
import { VerDetallesFormulariosComponent } from '../Modals/ver-detalles-formularios/ver-detalles-formularios.component';

@Component({
  selector: 'app-all-formularios',
  templateUrl: './all-formularios.component.html',
  styleUrls: ['./all-formularios.component.css']
})
export class AllFormulariosComponent implements OnInit {

  constructor(private dialog: MatDialog, private fb: FormBuilder, private fromser: FormulariosService) { }

  ngOnInit(): void {
    this.getAllDetails();
  }

  pages:number = 0
  size:number = 10
  inputbut = false;

  Formularios : AllForms[] = [];

  public getAllDetails() {
    this.fromser.getall(this.pages,this.size).subscribe((user) => {
      this.Formularios = Object.values(user);
      console.log(Object.values(this.Formularios))
      this.Formularios.forEach(element => {
        if(Object.values(element).length < 20){

          this.inputbut = true;
        }
        else{
          this.inputbut = false;
        }

      });

    })
  }

  onOpenModalVer(Formularios = {}) :void {
    const dialogRef = this.dialog.open(VerDetallesFormulariosComponent,{
      disableClose: true,
      width: '550px',
      data: {title:"Detalles Formularios" , Formularios},

    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }

}
