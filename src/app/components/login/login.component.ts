import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  hide = true;

  loginForms = this.fb.group({
    user: ['',[Validators.required, Validators.minLength(5)]],
    password:['',[Validators.required, Validators.minLength(6)]]
  })

  private subscription : Subscription = new Subscription();

  constructor(private auth: AuthService,
  private fb:FormBuilder,private router:Router) { }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {

  }

  onLogin(){
    const formValue = this.loginForms.value;
    this.subscription.add(
      this.auth.login(formValue).subscribe(res =>{
          if(res) {
           this.router.navigate(['dashboard']);
          }
      })
    )
  }




}
