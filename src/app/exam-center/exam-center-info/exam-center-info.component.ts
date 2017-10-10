import { Component, OnInit, Inject } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { MdPaginator } from '@angular/material';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import {MdDialog, MdDialogRef, MD_DIALOG_DATA} from '@angular/material';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';
import { ManageUserAccountService } from '../../service/manage-user-account.service';
import { UploadFileDialogComponent } from './upload-file-dialog/upload-file-dialog.component';


@Component({
  selector: 'app-exam-center-info',
  templateUrl: './exam-center-info.component.html',
  styleUrls: ['./exam-center-info.component.css']
})
export class ExamCenterInfoComponent implements OnInit {

  private allAcoount;
  levels = [
    { value: 'ระดับชั้นประถมศึกษาปีที่ 4', viewValue: 'ระดับชั้นประถมศึกษาปีที่ 4' },
    { value: 'ระดับชั้นประถมศึกษาปีที่ 5', viewValue: 'ระดับชั้นประถมศึกษาปีที่ 5' },
    { value: 'ระดับชั้นประถมศึกษาปีที่ 6', viewValue: 'ระดับชั้นประถมศึกษาปีที่ 6' }
  ];

  animal: string;
  name: string;

  constructor(private manageAccount: ManageUserAccountService, private _router: Router, public dialog: MdDialog) {
  }

  openDialogUploadFile(): void {
    let dialogRef = this.dialog.open(UploadFileDialogComponent, {
      width: '250px',
      data: { name: this.name, animal: this.animal }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }

  ngOnInit() {
    
  }

}