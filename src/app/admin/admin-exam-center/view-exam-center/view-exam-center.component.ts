import { Component, OnInit } from '@angular/core';
import { SchoolManagementService } from '../../../service/school-management.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-exam-center',
  templateUrl: './view-exam-center.component.html',
  styleUrls: ['./view-exam-center.component.css']
})
export class ViewExamCenterComponent implements OnInit {

  private MyDataSource;

  constructor(private schoolManagement: SchoolManagementService, private actRouter: ActivatedRoute) { }

  ngOnInit() {
    this.MyDataSource = { };
    const _id = this.actRouter.snapshot.params.id;
    const param = {
      id: _id
    };
    this.schoolManagement.getSchool(param).then((response) => {
      this.MyDataSource = response;
    });
  }

}
