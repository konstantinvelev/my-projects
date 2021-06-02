import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadComponent } from './layout/head.component';
import { LeftPanelComponent } from './layout/left-panel.component';
import { LoginComponent } from "./components/login-register/login.component";
import { Helpers } from './helpers/helpers';
import { TokenService } from './services/token.service';
import { AppConfig } from './config/config';
import { AuthGuard } from './helpers/canActivateAuthGuard';
import { HomeComponent } from './components/home/home.component';
import { FormsModule } from '@angular/forms';
import { UserService } from './services/user.service';
import { HomeworkComponent } from './components/homework/homework.component';
import { CoursesComponent } from './components/courses/courses.component';
import { ExamComponent } from './components/exam/exam.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadComponent,
    LeftPanelComponent,
    LoginComponent,
    HomeComponent,
    HomeworkComponent,
    CoursesComponent,
    ExamComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    MatFormFieldModule,
    MatSidenavModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    Helpers,
    TokenService,
    UserService,
    AppConfig,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
