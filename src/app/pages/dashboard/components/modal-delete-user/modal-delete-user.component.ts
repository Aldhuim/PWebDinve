import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UsersService } from 'src/app/pages/services/users.service';

@Component({
  selector: 'app-modal-delete-user',
  templateUrl: './modal-delete-user.component.html',
  styleUrls: ['./modal-delete-user.component.css']
})
export class ModalDeleteUserComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data : any,private userSrv:UsersService,private _snack: MatSnackBar) { }

  ngOnInit(): void {
  }

  onDelete(): void {
    const userId = this.data.user.id;
    this.userSrv.delete(userId).subscribe(res =>{
      console.log("Delete: "+res)
      this._snack.open('Usuario eliminado correctamente','',{duration:5000,horizontalPosition:'center',verticalPosition:'top'})
    })
  }

}
