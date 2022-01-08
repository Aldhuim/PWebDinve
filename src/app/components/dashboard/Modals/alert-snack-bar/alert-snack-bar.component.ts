import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-alert-snack-bar',
  templateUrl: './alert-snack-bar.component.html',
  styleUrls: ['./alert-snack-bar.component.css']
})
export class AlertSnackBarComponent implements OnInit {

  constructor(private auth: AuthService,private sb:MatSnackBar) { }

  ngOnInit(): void {
  }

    doAction() {
    this.auth.logout();
    this.sb.dismiss();
    }

    cancel() {
      this.sb.dismiss();
    }

}
