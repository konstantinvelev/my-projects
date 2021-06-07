import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './helpers/canActivateAuthGuard';
import { LoginComponent } from "./components/login-register/login.component";
import { HomeComponent } from './components/home/home.component';
import { HomeworkComponent } from './components/homework/homework.component';
import { CoursesComponent } from './components/courses/courses.component';
import { ExamComponent } from './components/exam/exam.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/login' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent, canLoad:[AuthGuard]},
  { path: 'courses', component: CoursesComponent, canLoad: [AuthGuard] },
  { path: 'exams', component: ExamComponent, canLoad: [AuthGuard] },
  { path: 'homeworks', component: HomeworkComponent, canLoad: [AuthGuard] },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }