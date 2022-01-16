import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarRef, MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-alert-snack-bar',
  templateUrl: './alert-snack-bar.component.html',
  styleUrls: ['./alert-snack-bar.component.css']
})
export class AlertSnackBarComponent implements OnInit {

  constructor(@Inject(MAT_SNACK_BAR_DATA) public data : any,private auth: AuthService,private sb:MatSnackBar,
  private snackBarRef: MatSnackBarRef<AlertSnackBarComponent>) { }

  ngOnInit(): void {
  }

    doAction() {
    if(this.data.accion == "CerrarCuenta"){
      this.auth.logout();
      this.snackBarRef.dismissWithAction();
    }
    else if(this.data.accion == "CerrarBrecha"){
      this.snackBarRef.dismissWithAction();
    }
    }

    cancel() {
      this.snackBarRef.dismiss();
    }

}
