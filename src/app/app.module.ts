import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import 'hammerjs';
//Import the component modules
//import { MaterialModule } from '@angular/material';
import { MdButtonModule, MdCheckboxModule, MdInputModule, MdAutocompleteModule, MdGridListModule, MdDatepickerModule,MdToolbarModule,MdCardModule  } from '@angular/material';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { NotFound404Component } from './not-found404/not-found404.component';
import { AdminInfoComponent } from './admin/admin-info/admin-info.component';
import { ExamCenterInfoComponent } from './exam-center/exam-center-info/exam-center-info.component';

import { LoginService } from './service/login.service';
import { AuthenticationGuard } from './guard/authentication.guard';
import { Http, Headers, HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


const adminRoutes: Routes = [
  {
    path: '',
    component: AdminInfoComponent
  },
  {
    path: 'info',
    component: AdminInfoComponent
  }
];

const examCenterRoutes: Routes = [
  {
    path: '',
    component: ExamCenterInfoComponent
  },
  {
    path: 'info',
    component: ExamCenterInfoComponent
  }
];

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'admin',
    canActivate: [AuthenticationGuard],
    children: adminRoutes
  },
  {
    path: 'examCenter',
    children: examCenterRoutes
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '**',
    component: NotFound404Component
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    NavComponent,
    FooterComponent,
    NotFound404Component,
    AdminInfoComponent,
    ExamCenterInfoComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes, { enableTracing: true }),
    BrowserModule,
    HttpModule,
    MdButtonModule, MdCheckboxModule, MdInputModule, MdAutocompleteModule, MdGridListModule, MdDatepickerModule,MdToolbarModule,MdCardModule, BrowserAnimationsModule
  ],
  providers: [LoginService, AuthenticationGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
