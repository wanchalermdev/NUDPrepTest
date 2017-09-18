import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, ActivatedRoute } from '@angular/router';
import 'hammerjs';

//Import the component modules
import {
  MdButtonModule, MdCheckboxModule, MdInputModule, MdAutocompleteModule, MdMenuModule, MdGridListModule,
  MdDatepickerModule, MdToolbarModule, MdCardModule, MdTableModule, MdPaginatorModule, MdIconModule, MdTabsModule, MdRadioModule,
  MdSelectModule, MdNativeDateModule} from '@angular/material';
import { FormControl, Validators } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { NotFound404Component } from './not-found404/not-found404.component';

/*
* Service
*/
import { LoginService } from './service/login.service';
import { ManageUserAccountService } from './service/manage-user-account.service';
import { SchoolManagementService } from './service/school-management.service';
import { BuildingManagementService } from './service/building-management.service';
import { RoomManagementService } from './service/room-management.service';
import { CommitteeManagementService } from './service/committee-management.service';
import { TesterManagementService } from './service/tester-management.service';
import { FileManagementService } from './service/file-management.service';

import { AuthenticationGuard } from './guard/authentication.guard';
import { Http, Headers, HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//-------------------------------------------Admin component---------------------------------------//
import { AdminInfoComponent } from './admin/admin-info/admin-info.component';
import { AdminAccountManagementComponent } from './admin/admin-account-management/admin-account-management.component';
import { AdminStudentParticipatingComponent } from './admin/admin-student-participating/admin-student-participating.component';
import { AdminExamCenterComponent } from './admin/admin-exam-center/admin-exam-center.component';
import { AdminSettingComponent } from './admin/admin-setting/admin-setting.component';
//Admin component :: sub-menu admin account management component
import { AddUserAccountComponent } from './admin/admin-account-management/add-user-account/add-user-account.component';
import { ViewUserAccountComponent } from './admin/admin-account-management/view-user-account/view-user-account.component';
import { EditUserAccountComponent } from './admin/admin-account-management/edit-user-account/edit-user-account.component';
import { DeleteUserAccountComponent } from './admin/admin-account-management/delete-user-account/delete-user-account.component';
//Admin component :: sub-menu admin student participating component
import { RecordExamResultsComponent } from './admin/admin-student-participating/record-exam-results/record-exam-results.component';
import { CreatePDFReportComponent } from './admin/admin-student-participating/create-pdf-report/create-pdf-report.component';
import { ExportCSVComponent } from './admin/admin-student-participating/export-csv/export-csv.component';
import { ExportPDFComponent } from './admin/admin-student-participating/export-pdf/export-pdf.component';
//Admin component :: sub-menu admin exam center component
import { AddExamCenterComponent } from './admin/admin-exam-center/add-exam-center/add-exam-center.component';
import { ViewExamCenterComponent } from './admin/admin-exam-center/view-exam-center/view-exam-center.component';
import { EditExamCenterComponent } from './admin/admin-exam-center/edit-exam-center/edit-exam-center.component';
import { DeleteExamCenterComponent } from './admin/admin-exam-center/delete-exam-center/delete-exam-center.component';
import { ExportPDFExamCenterComponent } from './admin/admin-exam-center/export-pdf-exam-center/export-pdf-exam-center.component';
import { ExportCSVExamCenterComponent } from './admin/admin-exam-center/export-csv-exam-center/export-csv-exam-center.component';

//-------------------------------------Exam center component------------------------------//
import { ExamCenterInfoComponent } from './exam-center/exam-center-info/exam-center-info.component';
import { ExamCenterCandidateAccountComponent } from './exam-center/exam-center-candidate-account/exam-center-candidate-account.component';
import { ExamCenterBuildingComponent } from './exam-center/exam-center-building/exam-center-building.component';
import { ExamCenterRoomComponent } from './exam-center/exam-center-room/exam-center-room.component';
import { ExamCenterCommitteeComponent } from './exam-center/exam-center-committee/exam-center-committee.component';
//Exam center component :: Exam Center Candidate Account Component
import { AddCandidateComponent } from './exam-center/exam-center-candidate-account/add-candidate/add-candidate.component';
import { ViewCandidateComponent } from './exam-center/exam-center-candidate-account/view-candidate/view-candidate.component';
import { EditCandidateComponent } from './exam-center/exam-center-candidate-account/edit-candidate/edit-candidate.component';
import { DeleteCandidateComponent } from './exam-center/exam-center-candidate-account/delete-candidate/delete-candidate.component';
//Exam center component :: Exam Center Building Component
import { AddBuildingComponent } from './exam-center/exam-center-building/add-building/add-building.component';
import { ViewBuildingComponent } from './exam-center/exam-center-building/view-building/view-building.component';
import { EditBuildingComponent } from './exam-center/exam-center-building/edit-building/edit-building.component';
import { DeleteBuildingComponent } from './exam-center/exam-center-building/delete-building/delete-building.component';
import { PDFReportBuildingComponent } from './exam-center/exam-center-building/pdf-report-building/pdf-report-building.component';
//Exam center component :: Exam Center Room Component
import { AddRoomComponent } from './exam-center/exam-center-room/add-room/add-room.component';
import { ViewRoomComponent } from './exam-center/exam-center-room/view-room/view-room.component';
import { EditRoomComponent } from './exam-center/exam-center-room/edit-room/edit-room.component';
import { DeleteRoomComponent } from './exam-center/exam-center-room/delete-room/delete-room.component';
import { PDFReportRoomComponent } from './exam-center/exam-center-room/pdf-report-room/pdf-report-room.component';
//Exam center component :: Exam Center Committee Component
import { AddCommitteeComponent } from './exam-center/exam-center-committee/add-committee/add-committee.component';
import { ViewCommitteeComponent } from './exam-center/exam-center-committee/view-committee/view-committee.component';
import { EditCommitteeComponent } from './exam-center/exam-center-committee/edit-committee/edit-committee.component';
import { DeleteCommitteeComponent } from './exam-center/exam-center-committee/delete-committee/delete-committee.component';
import { PDFReportCommitteeComponent } from './exam-center/exam-center-committee/pdf-report-committee/pdf-report-committee.component';
import { HeaderComponent } from './header/header.component';
//constructor admin routing
const adminRoutes: Routes = [

  //constructor admin routing :: admin info 
  { path: '', component: AdminInfoComponent },
  { path: 'admin-info', component: AdminInfoComponent },
  //constructor admin routing :: admin account management 
  { path: 'account-management', component: AdminAccountManagementComponent },
  { path: 'add-user-account', component: AddUserAccountComponent },
  { path: 'view-user-account/:id', component: ViewUserAccountComponent },
  { path: 'edit-user-account/:id', component: EditUserAccountComponent },
  { path: 'delete-user-account/:id', component: DeleteUserAccountComponent },
  //constructor admin routing :: admin student participating 
  { path: 'student-participating', component: AdminStudentParticipatingComponent },
  { path: 'record-exam-results', component: RecordExamResultsComponent },
  { path: 'create-pdf-report', component: CreatePDFReportComponent },
  { path: 'export-csv', component: ExportCSVComponent },
  { path: 'export-pdf/:id', component: ExportPDFComponent },
  //constructor admin routing :: admin exam center
  { path: 'exam-center', component: AdminExamCenterComponent },
  { path: 'add-exam-center', component: AddExamCenterComponent },
  { path: 'view-exam-center/:id', component: ViewExamCenterComponent },
  { path: 'edit-exam-center/:id', component: EditExamCenterComponent },
  { path: 'delete-exam-center/:id', component: DeleteExamCenterComponent },
  { path: 'export-pdf-exam-center', component: ExportPDFExamCenterComponent },
  { path: 'export-csv-exam-center', component: ExportCSVExamCenterComponent },
  //constructor admin routing :: admin setting
  { path: 'setting', component: AdminSettingComponent }

];
//constructor exam center routing
const examCenterRoutes: Routes = [
  //constructor exam center routing :: Exam Center info 
  { path: '', component: ExamCenterInfoComponent },
  { path: 'exam-center-info', component: ExamCenterInfoComponent },
  //constructor exam center routing :: Exam Center Candidate Account 
  { path: 'candidate', component: ExamCenterCandidateAccountComponent },
  { path: 'add-candidate', component: AddCandidateComponent },
  { path: 'view-candidate/:id', component: ViewCandidateComponent },
  { path: 'edit-candidate/:id', component: EditCandidateComponent },
  { path: 'delete-candidate/:id', component: DeleteCandidateComponent },
  //constructor exam center routing :: Exam Center Building
  { path: 'building', component: ExamCenterBuildingComponent },
  { path: 'add-building', component: AddBuildingComponent },
  { path: 'view-building/:id', component: ViewBuildingComponent },
  { path: 'edit-building/:id', component: EditBuildingComponent },
  { path: 'delete-building/:id', component: DeleteBuildingComponent },
  { path: 'pdf-report-building', component: PDFReportBuildingComponent },
  //constructor exam center routing :: Exam Center Room
  { path: 'room', component: ExamCenterRoomComponent },
  { path: 'add-room', component: AddRoomComponent },
  { path: 'view-room/:id', component: ViewRoomComponent },
  { path: 'edit-room/:id', component: EditRoomComponent },
  { path: 'delete-room/:id', component: DeleteRoomComponent },
  { path: 'pdf-report-room', component: PDFReportRoomComponent },
  //constructor exam center routing :: Exam Center Committee
  { path: 'committee', component: ExamCenterCommitteeComponent },
  { path: 'add-committee', component: AddCommitteeComponent },
  { path: 'view-committee/:id', component: ViewCommitteeComponent },
  { path: 'edit-committee/:id', component: EditCommitteeComponent },
  { path: 'delete-committee/:id', component: DeleteCommitteeComponent },
  { path: 'pdf-report-committee', component: PDFReportCommitteeComponent }

];
//constructor app routing
export const appRoutes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  //app routing :: admin
  { path: 'admin', canActivate: [AuthenticationGuard], children: adminRoutes },

  //app routing :: exam center
  { path: 'examCenter', children: examCenterRoutes },
  { path: 'login', component: LoginComponent },
  { path: '**', component: NotFound404Component }
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
    ExamCenterInfoComponent,
    AdminAccountManagementComponent,
    AdminStudentParticipatingComponent,
    AdminExamCenterComponent,
    AdminSettingComponent,
    AddUserAccountComponent,
    ViewUserAccountComponent,
    EditUserAccountComponent,
    DeleteUserAccountComponent,
    RecordExamResultsComponent,
    CreatePDFReportComponent,
    ExportCSVComponent,
    ExportPDFComponent,
    AddExamCenterComponent,
    ViewExamCenterComponent,
    EditExamCenterComponent,
    DeleteExamCenterComponent,
    ExportPDFExamCenterComponent,
    ExportCSVExamCenterComponent,
    ExamCenterCandidateAccountComponent,
    ExamCenterBuildingComponent,
    ExamCenterRoomComponent,
    ExamCenterCommitteeComponent,
    AddCandidateComponent,
    ViewCandidateComponent,
    EditCandidateComponent,
    DeleteCandidateComponent,
    AddBuildingComponent,
    ViewBuildingComponent,
    EditBuildingComponent,
    DeleteBuildingComponent,
    PDFReportBuildingComponent,
    AddRoomComponent,
    ViewRoomComponent,
    EditRoomComponent,
    DeleteRoomComponent,
    PDFReportRoomComponent,
    AddCommitteeComponent,
    ViewCommitteeComponent,
    EditCommitteeComponent,
    DeleteCommitteeComponent,
    PDFReportCommitteeComponent,
    HeaderComponent,

  ],
  imports: [
    RouterModule.forRoot(appRoutes, { enableTracing: false }),
    BrowserModule,
    HttpModule,
    MdButtonModule, MdCheckboxModule, MdInputModule, MdPaginatorModule,
    MdAutocompleteModule, MdGridListModule, MdDatepickerModule, MdToolbarModule,
    MdCardModule, BrowserAnimationsModule, MdTableModule, MdMenuModule, MdIconModule,
    MdTabsModule, MdRadioModule, MdSelectModule, FormsModule, MdNativeDateModule
  ],
  providers: [
    LoginService,
    AuthenticationGuard,
    ManageUserAccountService,
    SchoolManagementService,
    BuildingManagementService,
    RoomManagementService,
    CommitteeManagementService,
    TesterManagementService,
    FileManagementService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
