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
import { TesterManagementService } from '../../service/tester-management.service';


@Component({
  selector: 'app-exam-center-candidate-account',
  templateUrl: './exam-center-candidate-account.component.html',
  styleUrls: ['./exam-center-candidate-account.component.css']
})
export class ExamCenterCandidateAccountComponent implements OnInit {
  
    private allAcoount;
    levels = [
      { value: 'ระดับชั้นประถมศึกษาปีที่ 4', viewValue: 'ระดับชั้นประถมศึกษาปีที่ 4' },
      { value: 'ระดับชั้นประถมศึกษาปีที่ 5', viewValue: 'ระดับชั้นประถมศึกษาปีที่ 5' },
      { value: 'ระดับชั้นประถมศึกษาปีที่ 6', viewValue: 'ระดับชั้นประถมศึกษาปีที่ 6' }
    ];
  
    constructor(private testerManagement: TesterManagementService, private _router: Router) {
    }
  
    // displayedColumns = ['ลำดับ', 'ศูนย์สอบ', 'จังหวัด', 'ข้อมูล', 'แก้ไข', 'ลบ'];
    displayedColumns = ['ลำดับ','เลขประจำตัวประชาชน', 'ชื่อ', 'นามสกุล', 'โทรศัพท์','ระดับชั้น', 'ข้อมูล', 'แก้ไข', 'ลบ'];
    exampleDatabase = new ExampleDatabase(this.testerManagement);
    dataSource: ExampleDataSource | null;
  
    @ViewChild(MdPaginator) paginator: MdPaginator;
  
    viewUser(userId) {
      this._router.navigate(['examCenter/view-candidate/' + userId]);
    }
  
    editUser(userId) {
      this._router.navigate(['examCenter/edit-candidate/' + userId]);
    }
  
    deleteUser(userId) {
      this._router.navigate(['examCenter/delete-candidate/' + userId]);
    }
  
    ngOnInit() {
      this.dataSource = new ExampleDataSource(this.exampleDatabase, this.paginator);
    }
  
  }
  export interface UserData {
    number: string;
    id_code:string;
    firstname: string;
    lastname: string;
    phone: string;
    level:string;
    tester_id: string;
  }
  
  /** An example database that the data source uses to retrieve data for the table. */
  export class ExampleDatabase {
    /** Stream that emits whenever the data has been modified. */
    dataChange: BehaviorSubject<UserData[]> = new BehaviorSubject<UserData[]>([]);
    get data(): UserData[] { return this.dataChange.value; }
    private allAcoount;
    testerDataSource = [];
    constructor(private testerManagement: TesterManagementService) {
      const _school_id = window.sessionStorage.getItem('PSN_SCHOOL_ID');
      const preParam = {
        school_id: _school_id
      };
      
      this.testerManagement.getAllTester(preParam).then(response => {
        for (let i = 0; i < Object.keys(response).length; i++) { this.addRow(response); }
      });
    }
  
    /** Adds a new user to the database. */
    addRow(acccount) {
      const copiedData = this.data.slice();
      copiedData.push(this.createNewUser(acccount));
      this.dataChange.next(copiedData);
    }
  
    /** Builds and returns a new User. */
    private createNewUser(acccount) {
      const name =  acccount[this.data.length + 1]['tester_firstname'] + acccount[this.data.length + 1]['tester_firstname'];
      return {
        number: (this.data.length + 1).toString(),
        id_code : acccount[this.data.length + 1]['tester_personal_code'],
        firstname: name,
        lastname: acccount[this.data.length + 1]['tester_lastname'],
        phone: acccount[this.data.length + 1]['tester_phone'],
        level:acccount[this.data.length + 1]['tester_level'],
        tester_id: acccount[this.data.length + 1]['tester_id']
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
  
