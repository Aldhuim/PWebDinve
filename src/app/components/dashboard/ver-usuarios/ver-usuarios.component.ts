
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { AfterViewInit, ChangeDetectorRef, Component, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { tap } from 'rxjs';
import { UnidadProductora, Usuario } from 'src/app/models/user.interface';
import { UserService } from 'src/app/services/user/user.service';
import { ModalDetallesUsuariosComponent } from '../Modals/modal-detalles-usuarios/modal-detalles-usuarios.component';
import { ModalEditarUsuarioComponent } from '../Modals/modal-editar-usuario/modal-editar-usuario.component';


@Component({
  selector: 'app-ver-usuarios',
  templateUrl: './ver-usuarios.component.html',
  styleUrls: ['./ver-usuarios.component.css']
})
export class VerUsuariosComponent implements OnInit {

  inputbut = false;

  Filter = '';

  constructor(private userSvc:UserService, private dialog: MatDialog, private fb: FormBuilder) {

  }

  pages:number = 0
  size:number = 10;
  sizength:number = 0;

  Usuarios: Usuario[] = [];

  ngOnInit() :void{
    this.getAllDetails();
    }

    public getAllDetails() {
      this.userSvc.getall(this.pages,this.size).subscribe((user) => {
        this.Usuarios = Object.values(user);
        this.Usuarios.forEach(element => {
          if(Object.values(element).length < 10){
            this.inputbut = true;
          }
          else{
            this.inputbut = false;
          }
        });
      })
    }

    onOpenModalEdit(user = {}) :void {
      const dialogRef = this.dialog.open(ModalEditarUsuarioComponent,{
        disableClose: true,
        data: {title:"Editar Usuario" , user},
      });

      dialogRef.afterClosed().subscribe(result => {
        console.log(result);
      });
    }


    onOpenModalVer(user = {}) :void {
      const dialogRef = this.dialog.open(ModalDetallesUsuariosComponent,{
        disableClose: true,
        width: '550px',
        data: {title:"Ver Usuario" , user}
      });

      dialogRef.afterClosed().subscribe(result => {
        console.log(result);
      });
    }

    prevpag(){
      if(this.pages > 0){
        this.pages-=1
        this.getAllDetails()
      }
    }

    nextpag(){

        this.pages+=1;
        this.getAllDetails()

    }


}







