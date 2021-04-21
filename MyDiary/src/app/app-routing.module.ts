import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './helpers/canActivateAuthGuard';
import { LoginComponent } from "./components/login/login.component";
import { LogoutComponent } from './components/logout/logout.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { UsersComponent } from './components/users/users.component';

const routes: Routes = [
  { 
    path: '', 
    pathMatch: 'full', 
    redirectTo: '/dashboard', 
    canActivate: [AuthGuard] 
  },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'users', component: UsersComponent, canActivate: [AuthGuard] },
  { path: 'logout', component: LogoutComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }