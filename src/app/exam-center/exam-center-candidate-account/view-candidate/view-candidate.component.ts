import { Component, OnInit } from '@angular/core';
import { TesterManagementService } from '../../../service/tester-management.service';
import { Router, ActivatedRoute } from '@angular/router';
import { SchoolManagementService } from '../../../service/school-management.service';
import { RoomManagementService } from '../../../service/room-management.service';
import { BuildingManagementService } from '../../../service/building-management.service';

@Component({
  selector: 'app-view-candidate',
  templateUrl: './view-candidate.component.html',
  styleUrls: ['./view-candidate.component.css']
})
export class ViewCandidateComponent implements OnInit {

  private personal_code;
  private name;
  private level;
  private schoolName;
  private under;
  private phone;
  private tester_code;
  private tester_number;
  private tester_exam_room;
  private buildingName;

  private myId;
  private _school_id;

  constructor(
    private testerManagement: TesterManagementService,
    private _router: Router,
    private activatedRoute: ActivatedRoute,
    private schoolManagement: SchoolManagementService,
    private buildingManagement: BuildingManagementService,
    private roomManagement: RoomManagementService
  ) {
    this.myId = activatedRoute.snapshot.params.id;
    this._school_id = window.sessionStorage.getItem('PSN_SCHOOL_ID');
    const preParam = {
      id: this.myId,
      school_id: this._school_id
    };
    this.testerManagement.getTester(preParam).then(response => {
      this.personal_code = response['tester_personal_code'];
      this.name = response['tester_prename'] + response['tester_firstname'] + ' ' + response['tester_lastname'];
      this.level = response['tester_level'];
      this.under = response['tester_type'];
      this.phone = response['tester_phone'];
      this.personal_code = response[''];
      this.personal_code = response[''];
      this.personal_code = response[''];
      this.personal_code = response[''];
    });
  }

  ngOnInit() {
  }

}
