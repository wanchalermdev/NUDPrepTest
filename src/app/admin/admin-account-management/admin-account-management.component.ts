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
  selector: 'app-admin-account-management',
  templateUrl: './admin-account-management.component.html',
  styleUrls: ['./admin-account-management.component.css']
})
export class AdminAccountManagementComponent implements OnInit {

  private allAcoount;

  constructor(private manageAccount: ManageUserAccountService, private _router: Router) {
  }

  displayedColumns = ['ลำดับ', 'ชื่อ', 'นามสกุล', 'ชื่อผู้ใช้', 'ข้อมูล', 'แก้ไข', 'ลบ'];
  exampleDatabase = new ExampleDatabase(this.manageAccount);
  dataSource: ExampleDataSource | null;

  @ViewChild(MdPaginator) paginator: MdPaginator;

  viewUser(userId) {
    this._router.navigate(['admin/view-user-account/' + userId]);
  }

  editUser(userId) {
    this._router.navigate(['admin/edit-user-account/' + userId]);
  }

  deleteUser(userId) {
    this._router.navigate(['admin/delete-user-account/' + userId]);
  }

  ngOnInit() {
    this.dataSource = new ExampleDataSource(this.exampleDatabase, this.paginator);
  }

}

export interface UserData {
  number: string;
  firstname: string;
  lastname: string;
  username: string;
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
    this.manageAccount.getAllUserAccount().then(response => {
      this.allAcoount = response;
      for (let i = 0; i < Object.keys(this.allAcoount).length; i++) { this.addUser(this.allAcoount); }
    });
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
      username: acccount[this.data.length + 1]['username'],
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

