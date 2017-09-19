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
// import { ManageRoomAccountService } from '../../service/manage-Room-account.service';
import { RoomManagementService } from '../../service/room-management.service';
import { BuildingManagementService } from '../../service/building-management.service';

@Component({
  selector: 'app-exam-center-room',
  templateUrl: './exam-center-room.component.html',
  styleUrls: ['./exam-center-room.component.css']
})
export class ExamCenterRoomComponent implements OnInit {
  
    private allRoom;
    levels = [
      { value: 'ระดับชั้นประถมศึกษาปีที่ 4', viewValue: 'ระดับชั้นประถมศึกษาปีที่ 4' },
      { value: 'ระดับชั้นประถมศึกษาปีที่ 5', viewValue: 'ระดับชั้นประถมศึกษาปีที่ 5' },
      { value: 'ระดับชั้นประถมศึกษาปีที่ 6', viewValue: 'ระดับชั้นประถมศึกษาปีที่ 6' }
    ];
  
    constructor(private roomManagement: RoomManagementService, private buildingManagement: BuildingManagementService , private _router: Router) {

    }
  
    // displayedColumns = ['ลำดับ', 'ศูนย์สอบ', 'จังหวัด', 'ข้อมูล', 'แก้ไข', 'ลบ'];
    displayedColumns = ['ลำดับ','ชื่อห้องสอบ', 'รองรับผู้สอบ', 'ข้อมูล', 'แก้ไข', 'ลบ'];
    exampleDatabase = new ExampleDatabase(this.roomManagement, this.buildingManagement);
    dataSource: ExampleDataSource | null;
  
    @ViewChild(MdPaginator) paginator: MdPaginator;
  
    viewRoom(RoomId) {
      this._router.navigate(['examCenter/view-room/' + RoomId]);
    }
  
    editRoom(RoomId) {
      this._router.navigate(['examCenter/edit-room/' + RoomId]);
    }
  
    deleteRoom(RoomId) {
      this._router.navigate(['examCenter/delete-room/' + RoomId]);
    }
  
    ngOnInit() {
      this.dataSource = new ExampleDataSource(this.exampleDatabase, this.paginator);
    }
  
  }
  export interface RoomData {
    number: string;
    room_name:string;
    support: string;
    room_id: string;
  }
  
  /** An example database that the data source uses to retrieve data for the table. */
  export class ExampleDatabase {
    /** Stream that emits whenever the data has been modified. */
    dataChange: BehaviorSubject<RoomData[]> = new BehaviorSubject<RoomData[]>([]);
    get data(): RoomData[] { return this.dataChange.value; }
    private allRoom;
    constructor(private roomManagement: RoomManagementService, private buildingManagement: BuildingManagementService) {
      // Fill up the database with 100 Rooms.
      const _school_id = window.sessionStorage.getItem('PSN_SCHOOL_ID');
      const preParam = {
        school_id: _school_id
      };
      this.roomManagement.getAllExamRoom(preParam).then(response => {
        console.log(response);
        this.allRoom = response;
        for (let i = 0; i < Object.keys(this.allRoom).length; i++) { this.addRoom(this.allRoom); }
      });
    }
  
    /** Adds a new Room to the database. */
    addRoom(room) {
      const copiedData = this.data.slice();
      copiedData.push(this.createNewRoom(room));
      this.dataChange.next(copiedData);
    }
  
    /** Builds and returns a new Room. */
    private createNewRoom(room) {
      
      return {
        number: (this.data.length + 1).toString(),
        room_name :room[this.data.length + 1]['exam_room_name'],
        support: room[this.data.length + 1]['exam_room_capacity'],
        room_id: room[this.data.length + 1]['exam_room_id']
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
    connect(): Observable<RoomData[]> {
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
  
