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
import { CommitteeManagementService } from '../../service/committee-management.service';

@Component({
  selector: 'app-exam-center-committee',
  templateUrl: './exam-center-committee.component.html',
  styleUrls: ['./exam-center-committee.component.css']
})
export class ExamCenterCommitteeComponent implements OnInit {

  committeeDataSource = [];
  private allCommittee;
  levels = [
    { value: 'ระดับชั้นประถมศึกษาปีที่ 4', viewValue: 'ระดับชั้นประถมศึกษาปีที่ 4' },
    { value: 'ระดับชั้นประถมศึกษาปีที่ 5', viewValue: 'ระดับชั้นประถมศึกษาปีที่ 5' },
    { value: 'ระดับชั้นประถมศึกษาปีที่ 6', viewValue: 'ระดับชั้นประถมศึกษาปีที่ 6' }
  ];

  constructor(private committeeManagement: CommitteeManagementService, private _router: Router) {

  }

  // displayedColumns = ['ลำดับ', 'ศูนย์สอบ', 'จังหวัด', 'ข้อมูล', 'แก้ไข', 'ลบ'];
  displayedColumns = ['ลำดับ', 'ชื่อ', 'นามสกุล', 'ข้อมูล', 'แก้ไข', 'ลบ'];
  exampleDatabase = new ExampleDatabase(this.committeeManagement);
  dataSource: ExampleDataSource | null;

  @ViewChild(MdPaginator) paginator: MdPaginator;

  viewCommittee(CommitteeId) {
    this._router.navigate(['examCenter/view-committee/' + CommitteeId]);
  }

  editCommittee(CommitteeId) {
    this._router.navigate(['examCenter/edit-committee/' + CommitteeId]);
  }

  deleteCommittee(CommitteeId) {
    this._router.navigate(['examCenter/delete-committee/' + CommitteeId]);
  }

  ngOnInit() {
    this.dataSource = new ExampleDataSource(this.exampleDatabase, this.paginator);
  }

}
export interface CommitteeData {
  number: string;
  committee_name: string;
  committee_lastname: string;
  committee_id: string;
}

/** An example database that the data source uses to retrieve data for the table. */
export class ExampleDatabase {
  /** Stream that emits whenever the data has been modified. */
  dataChange: BehaviorSubject<CommitteeData[]> = new BehaviorSubject<CommitteeData[]>([]);
  get data(): CommitteeData[] { return this.dataChange.value; }
  private allCommittee;
  constructor(private committeeManagement: CommitteeManagementService) {
    const _school_id = window.sessionStorage.getItem('PSN_SCHOOL_ID');
    const preParam = {
      school_id: _school_id
    };
    this.committeeManagement.getAllCommittee(preParam).then(response => {
      for (let i = 0; i < Object.keys(response).length; i++) { this.addCommittee(response); }
    });
  }

  /** Adds a new Committee to the database. */
  addCommittee(committee) {
    const copiedData = this.data.slice();
    copiedData.push(this.createNewCommittee(committee));
    this.dataChange.next(copiedData);
  }

  /** Builds and returns a new Committee. */
  private createNewCommittee(committee) {
    const name = committee[this.data.length + 1]['committee_prename'] + committee[this.data.length + 1]['committee_firstname'];
    return {
      number: (this.data.length + 1).toString(),
      committee_name: name,
      committee_lastname: committee[this.data.length + 1]['committee_lastname'],
      committee_id: committee[this.data.length + 1]['committee_id']
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
  connect(): Observable<CommitteeData[]> {
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


