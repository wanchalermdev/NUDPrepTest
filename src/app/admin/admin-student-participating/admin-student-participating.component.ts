import { Component, OnInit } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { MdPaginator } from '@angular/material';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';
import { ManageUserAccountService } from '../../service/manage-user-account.service';

@Component({
  selector: 'app-admin-student-participating',
  templateUrl: './admin-student-participating.component.html',
  styleUrls: ['./admin-student-participating.component.css']
})
export class AdminStudentParticipatingComponent implements OnInit {

  private allAcoount;
  schools = [
    { value: 'school-0', viewValue: 'โรงเรียนมัธยมสาธิตมหาวิทยาลัยนเรศวร 1' },
    { value: 'school-1', viewValue: 'โรงเรียนมัธยมสาธิตมหาวิทยาลัยนเรศวร 2' },
    { value: 'school-2', viewValue: 'โรงเรียนมัธยมสาธิตมหาวิทยาลัยนเรศวร 3' },
    { value: 'school-3', viewValue: 'โรงเรียนมัธยมสาธิตมหาวิทยาลัยนเรศวร 4' },
    { value: 'school-4', viewValue: 'โรงเรียนมัธยมสาธิตมหาวิทยาลัยนเรศวร 5' }
  ];

  constructor(private manageAccount: ManageUserAccountService, private _router: Router) {
  }

  // displayedColumns = ['ลำดับ', 'ศูนย์สอบ', 'จังหวัด', 'ข้อมูล', 'แก้ไข', 'ลบ'];
  displayedColumns = ['ลำดับ', 'ชื่อ', 'นามสกุล', 'เลขที่นั่งสอบ', 'ห้องสอบ', 'อาคาร', 'ผลสอบ'];
  exampleDatabase = new ExampleDatabase(this.manageAccount);
  dataSource: ExampleDataSource | null;

  @ViewChild(MdPaginator) paginator: MdPaginator;

  viewUser(userId) {
    this._router.navigate(['admin/export-pdf/' + userId]);
  }

  ngOnInit() {
    this.dataSource = new ExampleDataSource(this.exampleDatabase, this.paginator);
  }

}
export interface UserData {
  number: string;
  firstname: string;
  lastname: string;
  seatNumber: string;
  room: string;
  building: string;
  user_id: string;
}

/** An example database that the data source uses to retrieve data for the table. */
export class ExampleDatabase {
  /** Stream that emits whenever the data has been modified. */
  dataChange: BehaviorSubject<UserData[]> = new BehaviorSubject<UserData[]>([]);
  get data(): UserData[] { return this.dataChange.value; }
  private allAcoount;
  constructor(private manageAccount: ManageUserAccountService) {
    // Fill up the database with 100 users.
    this.manageAccount.getAllUserAccount();
    setTimeout(() => {
      var str = window.sessionStorage.getItem('body');
      this.allAcoount = JSON.parse(str);
      for (let i = 0; i < Object.keys(this.allAcoount).length; i++) { this.addUser(this.allAcoount); }
    }, 100);
  }

  /** Adds a new user to the database. */
  addUser(acccount) {
    const copiedData = this.data.slice();
    copiedData.push(this.createNewUser(acccount));
    this.dataChange.next(copiedData);
  }

  /** Builds and returns a new User. */
  private createNewUser(acccount) {
    const name = acccount[this.data.length + 1]['prename'] + acccount[this.data.length + 1]['firstname'];
    return {
      number: (this.data.length + 1).toString(),
      firstname: name,
      lastname: acccount[this.data.length + 1]['lastname'],
      seatNumber: acccount[this.data.length + 1]['username'],
      room: acccount[this.data.length + 1]['lastname'],
      building: acccount[this.data.length + 1]['username'],
      user_id: acccount[this.data.length + 1]['user_id']
    };
  }
}

/**
* Data source to provide what data should be rendered in the table. Note that the data source
* can retrieve its data in any way. In this case, the data source is provided a reference
* to a common data base, ExampleDatabase. It is not the data source's responsibility to manage
* the underlying data. Instead, it only needs to take the data and send the table exactly what
* should be rendered.
*/
export class ExampleDataSource extends DataSource<any> {
  constructor(private _exampleDatabase: ExampleDatabase, private _paginator: MdPaginator) {
    super();
  }

  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<UserData[]> {
    const displayDataChanges = [
      this._exampleDatabase.dataChange,
      this._paginator.page,
    ];

    return Observable.merge(...displayDataChanges).map(() => {
      const data = this._exampleDatabase.data.slice();

      // Grab the page's slice of data.
      const startIndex = this._paginator.pageIndex * this._paginator.pageSize;
      return data.splice(startIndex, this._paginator.pageSize);
    });
  }

  disconnect() { }
}
