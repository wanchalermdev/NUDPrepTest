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
import { BuildingManagementService } from '../../service/building-management.service';

@Component({
  selector: 'app-exam-center-building',
  templateUrl: './exam-center-building.component.html',
  styleUrls: ['./exam-center-building.component.css']
})
export class ExamCenterBuildingComponent implements OnInit {
  
    private allBuilding;
    levels = [
      { value: 'ระดับชั้นประถมศึกษาปีที่ 4', viewValue: 'ระดับชั้นประถมศึกษาปีที่ 4' },
      { value: 'ระดับชั้นประถมศึกษาปีที่ 5', viewValue: 'ระดับชั้นประถมศึกษาปีที่ 5' },
      { value: 'ระดับชั้นประถมศึกษาปีที่ 6', viewValue: 'ระดับชั้นประถมศึกษาปีที่ 6' }
    ];
  
    constructor(private buildingManagement: BuildingManagementService, private _router: Router) {
    }
  
    // displayedColumns = ['ลำดับ', 'ศูนย์สอบ', 'จังหวัด', 'ข้อมูล', 'แก้ไข', 'ลบ'];
    displayedColumns = ['ลำดับ','ชื่ออาคาร', 'จำนวนห้อง', 'รองรับผู้สอบ', 'ข้อมูล', 'แก้ไข', 'ลบ'];
    exampleDatabase = new ExampleDatabase(this.buildingManagement);
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
    }
  
  }

  export interface buildingData {
    number: string;
    building_name:string;
    total_room: string;
    support: string;
    building_id: string;
  }
  
  /** An example database that the data source uses to retrieve data for the table. */
  export class ExampleDatabase {
    /** Stream that emits whenever the data has been modified. */
    dataChange: BehaviorSubject<buildingData[]> = new BehaviorSubject<buildingData[]>([]);
    get data(): buildingData[] { return this.dataChange.value; }
    private allBuilding;
    constructor(private buildingManagement: BuildingManagementService) {
      const _school_id = window.sessionStorage.getItem('PSN_SCHOOL_ID');
      const preParam = {
        school_id: _school_id
      };
      this.buildingManagement.getAllBuilding(preParam).then(response => {
        this.allBuilding = response;
        for (let i = 0; i < Object.keys(response).length; i++) { this.addRow(response); }
      });
    }
  
    /** Adds a new user to the database. */
    addRow(building) {
      const copiedData = this.data.slice();
      copiedData.push(this.createNewUser(building));
      this.dataChange.next(copiedData);
    }
  
    /** Builds and returns a new User. */
    private createNewUser(building) {
      return {
        number: (this.data.length + 1).toString(),
        building_name : building[this.data.length + 1]['building_name'],
        total_room: '0',
        support: '0',
        building_id: building[this.data.length + 1]['building_id']
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
    connect(): Observable<buildingData[]> {
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
  
