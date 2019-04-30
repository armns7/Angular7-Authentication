import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from '../../Components/Secret/dashboard/dashboard.component';
import { LoginComponent } from '../../Components/auth/login/login.component';
import { UsersComponent } from '../../Components/Secret/users/users.component';
import { RolesComponent } from '../../Components/Secret/roles/roles.component';
import { SignupComponent } from '../../Components/auth/signup/signup.component';
import { AuthGaurdService } from '../../Services/Auth/auth-gaurd.service';

const routes: Routes = [
{ path: 'home', component: DashboardComponent /*, canActivate: [AuthGaurdService] */ }, // dashboard
  { path: 'login', component: LoginComponent }, // 
  { path: 'signup', component: SignupComponent }, // 
  { path: 'users', component: UsersComponent, canActivate: [AuthGaurdService] }, // 
  { path: 'roles', component: RolesComponent, canActivate: [AuthGaurdService] }, // 
  // { path: 'roles', loadChildren: '../../Components/Secret/roles/roles.component', canActivate: [AuthGaurdService] }, // 
  // { path: 'login', component: ScreensaccessComponent, canActivate: [AuthGaurdService] /*, canActivateChild */},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: 'signup' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
