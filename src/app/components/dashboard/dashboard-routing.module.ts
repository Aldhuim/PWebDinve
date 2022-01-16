import { ModuloUsuariosComponent } from './modulo-usuarios/modulo-usuarios.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginGuardGuard } from '../guards/login-guard.guard';
import { RolesGuardGuard } from '../guards/roles-guard.guard';
import { AllFormulariosComponent } from './all-formularios/all-formularios.component';
import { CrearUsuariosComponent } from './crear-usuarios/crear-usuarios.component';
import { CrearfipComponent } from './crearfip/crearfip.component';
import { DashboardComponent } from './dashboard.component';
import { Formulario5aComponent } from './formulario5a/formulario5a.component';
import { Formulario5bComponent } from './formulario5b/formulario5b.component';
import { InscripcionesComponent } from './inscripciones/inscripciones.component';
import { MenuPrincipalComponent } from './menu-principal/menu-principal.component';
import { MyFormulariosComponent } from './my-formularios/my-formularios.component';
import { VerUsuariosComponent } from './ver-usuarios/ver-usuarios.component';
import { ConfigComponent } from './config/config.component';

const routes: Routes = [
  {path:'', component:DashboardComponent, children: [
    {path: '', component:MenuPrincipalComponent},
    {path: 'ModuloFIP', component:CrearfipComponent},
    {path:'FA', component:Formulario5aComponent},
    {path:'FB', component:Formulario5bComponent},
    {path:'ModuloUser', component:ModuloUsuariosComponent, canActivate:[RolesGuardGuard] },
    {path:'VerU', component:VerUsuariosComponent, canActivate:[RolesGuardGuard]},
    {path: 'CrearU', component:CrearUsuariosComponent, canActivate:[RolesGuardGuard]},
    {path:'ModuloIns', component:InscripcionesComponent },
    {path:'VerIns', component:AllFormulariosComponent, canActivate:[RolesGuardGuard] },
    {path:'InsEnv', component:MyFormulariosComponent },
    {path:'CamPass', component:ConfigComponent}
  ] ,
  canActivate:[LoginGuardGuard]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
