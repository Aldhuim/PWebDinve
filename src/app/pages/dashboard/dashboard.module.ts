import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
<<<<<<< Updated upstream

=======
import { FormsModule } from '@angular/forms';
>>>>>>> Stashed changes

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
<<<<<<< Updated upstream
=======
import { VerInsComponent } from './Inscripciones/ver-ins/ver-ins.component';
import { InsEnvComponent } from './Inscripciones/ins-env/ins-env.component';
import { TableFilterUserPipe } from './CRUDUser/ver-user/pipes/table-filter-user.pipe';
import { TableFilterUserNomPipe } from './CRUDUser/ver-user/pipes/table-filter-user-nom.pipe';
import { TableFilterUserDniPipe } from './CRUDUser/ver-user/pipes/table-filter-user-dni.pipe';
import { TableFilterUserCorreoPipe } from './CRUDUser/ver-user/pipes/table-filter-user-correo.pipe';
import { ModalUsersComponent } from './components/modal-users/modal-users.component';
import { ModalDeleteUserComponent } from './components/modal-delete-user/modal-delete-user.component';




>>>>>>> Stashed changes




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
<<<<<<< Updated upstream
=======
    VerInsComponent,
    InsEnvComponent,
    TableFilterUserPipe,
    TableFilterUserNomPipe,
    TableFilterUserDniPipe,
    TableFilterUserCorreoPipe,
    ModalUsersComponent,
    ModalDeleteUserComponent,
>>>>>>> Stashed changes



  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
<<<<<<< Updated upstream

=======
    FormsModule
>>>>>>> Stashed changes
  ]
})
export class DashboardModule { }
