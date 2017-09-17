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
import { SchoolManagementService } from '../../service/school-management.service';


@Component({
  selector: 'app-admin-exam-center',
  templateUrl: './admin-exam-center.component.html',
  styleUrls: ['./admin-exam-center.component.css']
})
export class AdminExamCenterComponent implements OnInit {

  private allAcoount;
  
    constructor(private scholManagement: SchoolManagementService, private _router: Router) {
    }
  
    displayedColumns = ['ลำดับ', 'ศูนย์สอบ', 'จังหวัด', 'ข้อมูล', 'แก้ไข', 'ลบ'];
    exampleDatabase = new ExampleDatabase(this.scholManagement);
    dataSource: ExampleDataSource | null;
  
    @ViewChild(MdPaginator) paginator: MdPaginator;
  
    viewUser(userId) {
      this._router.navigate(['admin/view-exam-center/' + userId]);
    }
  
    editUser(userId) {
      this._router.navigate(['admin/edit-exam-center/' + userId]);
    }
  
    deleteUser(userId) {
      this._router.navigate(['admin/delete-exam-center' + userId]);
    }
  
    ngOnInit() {
      /*
      * binding data to table
      */
      this.dataSource = new ExampleDataSource(this.exampleDatabase, this.paginator);
    }

}

export interface MyDataSource {
  number: string;
  examCenter: string;
  province: string;
  school_id: string;
}

/** An example database that the data source uses to retrieve data for the table. */
export class ExampleDatabase {
  /** Stream that emits whenever the data has been modified. */
  dataChange: BehaviorSubject<MyDataSource[]> = new BehaviorSubject<MyDataSource[]>([]);
  get data(): MyDataSource[] { return this.dataChange.value; }
  private allAcoount;


  constructor(private schoolManagement: SchoolManagementService) {
    // Fill up the database with 100 users.
    this.schoolManagement.getAllSchool().then((response) =>{
      for (let i = 0; i < Object.keys(response).length; i++) { this.addRow(response); }
    });
  }

  addRow(row) {
    const copiedData = this.data.slice();
    copiedData.push(this.createNewRow(row));
    this.dataChange.next(copiedData);
  }

  private createNewRow(row) {
    return {
      number: (this.data.length + 1).toString(),
      examCenter: row[this.data.length + 1]['school_name'],
      province: row[this.data.length + 1]['school_city'],
      school_id: row[this.data.length + 1]['school_id']
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
  connect(): Observable<MyDataSource[]> {
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
