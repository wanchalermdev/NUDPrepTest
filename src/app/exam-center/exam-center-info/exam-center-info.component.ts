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
import { Chart } from 'chart.js/dist/Chart.js';

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
  
    constructor(private manageAccount: ManageUserAccountService, private _router: Router) {
    }

    
  
    // displayedColumns = ['ลำดับ', 'ศูนย์สอบ', 'จังหวัด', 'ข้อมูล', 'แก้ไข', 'ลบ'];
    displayedColumns = ['ลำดับ','ชื่ออาคาร', 'จำนวนห้อง', 'รองรับผู้สอบ', 'ข้อมูล', 'แก้ไข', 'ลบ'];
    exampleDatabase = new ExampleDatabase(this.manageAccount);
    dataSource: ExampleDataSource | null;
  
    @ViewChild(MdPaginator) paginator: MdPaginator;
  
    viewUser(userId) {
      this._router.navigate(['examCenter/view-building/' + userId]);
    }
  
    editUser(userId) {
      this._router.navigate(['examCenter/edit-building/' + userId]);
    }
  
    deleteUser(userId) {
      this._router.navigate(['examCenter/delete-building/' + userId]);
    }
  
    ngOnInit() {
      this.dataSource = new ExampleDataSource(this.exampleDatabase, this.paginator);

      var canvas : any = document.getElementById("myChart");
      var ctx = canvas.getContext("2d");
      var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: ["ป.4", "ป.5", "ป.6"],
          datasets: [{
            label: 'สถิติจำนวนนักเรียนที่สมัครเข้าร่วมโครงการ NUD PREP TEST 2017',
            data: [15, 149, 250],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)'
            ],
            borderColor: [
              'rgba(255,99,132,1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)'
            ],
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true
              }
            }]
          }
        }
      });
    }
  
  }
  export interface UserData {
    number: string;
    building_name:string;
    total_room: string;
    support: string;
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
        building_name :name,
        total_room: name,
        support: acccount[this.data.length + 1]['lastname'],
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
  
