import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';


import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './dashboard.component';
import { InicioComponent } from './inicio/inicio.component';
import { SecmenuComponent } from './secmenu/secmenu.component';
import { ManteuserComponent } from './manteuser/manteuser.component';
import { FormpiComponent } from './Formulario-5A/formpi/formpi.component';
import { Formpi2Component } from './Formulario-5A/formpi2/formpi2.component';
import { Formpi3Component } from './Formulario-5A/formpi3/formpi3.component';
import { Formpi4Component } from './Formulario-5A/formpi4/formpi4.component';
import { FormioarrComponent } from './Formulario-5B/formioarr/formioarr.component';
import { Formioarr2Component } from './Formulario-5B/formioarr2/formioarr2.component';
import { Formioarr3Component } from './Formulario-5B/formioarr3/formioarr3.component';
import { VerUserComponent } from './CRUDUser/ver-user/ver-user.component';
import { CreateUserComponent } from './CRUDUser/create-user/create-user.component';
import { EditUserComponent } from './CRUDUser/edit-user/edit-user.component';
import { DeleteUserComponent } from './CRUDUser/delete-user/delete-user.component';




@NgModule({
  declarations: [
    DashboardComponent,
    InicioComponent,
    SecmenuComponent,
    ManteuserComponent,
    FormpiComponent,
    Formpi2Component,
    Formpi3Component,
    Formpi4Component,
    FormioarrComponent,
    Formioarr2Component,
    Formioarr3Component,
    VerUserComponent,
    CreateUserComponent,
    EditUserComponent,
    DeleteUserComponent,



  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,

  ]
})
export class DashboardModule { }
