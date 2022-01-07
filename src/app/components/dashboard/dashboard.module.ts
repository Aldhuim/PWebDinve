import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { MenuPrincipalComponent } from './menu-principal/menu-principal.component';
import { CrearfipComponent } from './crearfip/crearfip.component';
import { Formulario5aComponent } from './formulario5a/formulario5a.component';
import { VerUsuariosComponent } from './ver-usuarios/ver-usuarios.component';
import { ObjtoArrayPipe } from './objToArrya.pipe';
import { FilterUserPipe } from './pipes/filter-user.pipe';
import { CrearUsuariosComponent } from './crear-usuarios/crear-usuarios.component';
import { Formulario5bComponent } from './formulario5b/formulario5b.component';
import { ModalBrechasComponent } from './Modals/modal-brechas/modal-brechas.component';
import { SpinnerModule } from '../shared/spinner/spinner.module';
import { ModalDetallesUsuariosComponent } from './Modals/modal-detalles-usuarios/modal-detalles-usuarios.component';
import { ModalEditarUsuarioComponent } from './Modals/modal-editar-usuario/modal-editar-usuario.component';
import { AllFormulariosComponent } from './all-formularios/all-formularios.component';
import { MyFormulariosComponent } from './my-formularios/my-formularios.component';
import { InscripcionesComponent } from './inscripciones/inscripciones.component';





@NgModule({
  declarations: [
    DashboardComponent,
    MenuPrincipalComponent,
    CrearfipComponent,
    Formulario5aComponent,
    VerUsuariosComponent,
    ObjtoArrayPipe,
    FilterUserPipe,
    CrearUsuariosComponent,
    Formulario5bComponent,
    ModalBrechasComponent,
    ModalDetallesUsuariosComponent,
    ModalEditarUsuarioComponent,
    AllFormulariosComponent,
    MyFormulariosComponent,
    InscripcionesComponent,

  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    SpinnerModule
  ]
})
export class DashboardModule { }
