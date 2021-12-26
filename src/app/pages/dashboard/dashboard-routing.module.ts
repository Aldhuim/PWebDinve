<<<<<<< Updated upstream
=======
import { RoleGuard } from './../shared/guards/role.guard';
>>>>>>> Stashed changes


import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotLoginGuard } from '../shared/guards/not-login.guard';


<<<<<<< Updated upstream
=======


>>>>>>> Stashed changes
import { DashboardComponent } from './dashboard.component';
import { FormpiComponent } from './Formulario-5A/formpi/formpi.component';
import { Formpi2Component } from './Formulario-5A/formpi2/formpi2.component';
import { Formpi3Component } from './Formulario-5A/formpi3/formpi3.component';
import { Formpi4Component } from './Formulario-5A/formpi4/formpi4.component';

import { FormioarrComponent } from './Formulario-5B/formioarr/formioarr.component';
import { Formioarr2Component } from './Formulario-5B/formioarr2/formioarr2.component';
import { Formioarr3Component } from './Formulario-5B/formioarr3/formioarr3.component';

import { VerUserComponent } from './CRUDUser/ver-user/ver-user.component';

import { InicioComponent } from './inicio/inicio.component';
import { ManteuserComponent } from './manteuser/manteuser.component';
import { SecmenuComponent } from './secmenu/secmenu.component';
import { CreateUserComponent } from './CRUDUser/create-user/create-user.component';
import { EditUserComponent } from './CRUDUser/edit-user/edit-user.component';
import { DeleteUserComponent } from './CRUDUser/delete-user/delete-user.component';

<<<<<<< Updated upstream
=======
import { InsEnvComponent } from './Inscripciones/ins-env/ins-env.component';
import { VerInsComponent } from './Inscripciones/ver-ins/ver-ins.component';

>>>>>>> Stashed changes

const routes: Routes = [
  {path: '', component:DashboardComponent, children: [
    {path:'', component:InicioComponent},
    {path:'modulofip', component:SecmenuComponent},
<<<<<<< Updated upstream
    {path:'modulouser', component:ManteuserComponent},
=======
    {path:'modulouser', component:ManteuserComponent}, //RoleGuard
>>>>>>> Stashed changes
    {path:'FA', component:FormpiComponent},
    {path:'FAp2', component:Formpi2Component},
    {path:'FAp3', component:Formpi3Component},
    {path:'FAp4', component:Formpi4Component},
    {path:'FB', component:FormioarrComponent},
    {path:'FBp2', component:Formioarr2Component},
    {path:'FBp3', component:Formioarr3Component},
<<<<<<< Updated upstream
    {path:'VerU', component:VerUserComponent},
    {path:'CrearU', component:CreateUserComponent},
    {path:'ModU', component:EditUserComponent},
    {path:'EliU', component:DeleteUserComponent},
  ]}
=======
    {path:'VerU', component:VerUserComponent,}, //RoleGuard
    {path:'CrearU', component:CreateUserComponent}, //RoleGuard
    {path:'ModU', component:EditUserComponent,}, //RoleGuard
    {path:'EliU', component:DeleteUserComponent,}, //RoleGuard
    {path:'VerIns', component:VerInsComponent, }, //RoleGuard
    {path:'InsEnv', component:InsEnvComponent},
  ],
  //canActivate:[NotLoginGuard]
  }
>>>>>>> Stashed changes
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
<<<<<<< Updated upstream
  exports: [RouterModule]
=======
  exports: [RouterModule ]
>>>>>>> Stashed changes
})
export class DashboardRoutingModule { }
