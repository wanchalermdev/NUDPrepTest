import { Component, OnInit } from '@angular/core';
import { SchoolManagementService } from '../../../service/school-management.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-delete-exam-center',
  templateUrl: './delete-exam-center.component.html',
  styleUrls: ['./delete-exam-center.component.css']
})
export class DeleteExamCenterComponent implements OnInit {

  private Id;
  private MyDataSource = {};

  constructor(private schoolManagement: SchoolManagementService, private _router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.Id = this.activatedRoute.snapshot.params.id;
    const preParam = {
      id: this.Id
    };
    this.schoolManagement.getSchool(preParam).then((response) => {
      this.MyDataSource = response;
    });
  }

  deleteSchool() {
    const preParam = {
      id: this.Id
    };
    this.schoolManagement.deleteSchool(preParam).then(response => {
      console.log(response);
      this._router.navigateByUrl('/admin/exam-center');
    });
  }

}
