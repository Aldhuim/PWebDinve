import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './pages/login/login.component';
import { NotfoundComponent } from './pages/notfound/notfound.component'
import { NotLoginGuard } from './pages/shared/guards/not-login.guard';

const routes: Routes = [

  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path:'login', component:LoginComponent },
<<<<<<< Updated upstream
  {path: 'dashboard', loadChildren: ()=> import('./pages/dashboard/dashboard.module').then((x=>x.DashboardModule))},
=======
  {path: 'dashboard', loadChildren: ()=> import('./pages/dashboard/dashboard.module').then((x=>x.DashboardModule))
  //,canActivate:[NotLoginGuard]
  },
>>>>>>> Stashed changes
  {path:'**', component:NotfoundComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
