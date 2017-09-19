import { Component, OnInit } from '@angular/core';
import { RoomManagementService } from '../../../service/room-management.service';
import { Router, ActivatedRoute } from '@angular/router';
import { BuildingManagementService } from '../../../service/building-management.service';
import { CommitteeManagementService } from '../../../service/committee-management.service';
@Component({
  selector: 'app-edit-room',
  templateUrl: './edit-room.component.html',
  styleUrls: ['./edit-room.component.css']
})
export class EditRoomComponent implements OnInit {
  private myId;
  private MyDataSource = {};
  private buildingDataSource = [];
  private committee1DataSource = [];
  private committee2DataSource = [];
  private selectBuilding;
  private selectCommittee1;
  private selectCommittee2;

  constructor(
    private roomManagement: RoomManagementService,
    private _router: Router,
    private activatedRoute: ActivatedRoute,
    private buildingManagement: BuildingManagementService,
    private committeeManagement: CommitteeManagementService
  ) {
    this.myId = this.activatedRoute.snapshot.params.id;
    const _school_id = window.sessionStorage.getItem('PSN_SCHOOL_ID');
    const preParam = {
      id: this.myId,
      school_id: _school_id
    };
    this.roomManagement.getExamRoom(preParam).then(response => {
      this.MyDataSource = response;
      this.selectBuilding = response['building_id'];
      this.selectCommittee1 = response['exam_room_committee1'];
      this.selectCommittee2 = response['exam_room_committee2'];
      console.log(response);
    });
    const preParamBuilding = {
      school_id: _school_id
    };
    this.buildingManagement.getAllBuilding(preParamBuilding).then(response => {
      for (var i = 1; response[i] != undefined; i++) {
        this.buildingDataSource.push(response[i]);
      }
    });
    const preParamCommittee = {
      school_id: _school_id
    };
    this.committeeManagement.getAllCommittee(preParamCommittee).then(response => {
      for (var i = 1; response[i] != undefined; i++) {
        this.committee1DataSource.push(response[i]);
        this.committee2DataSource.push(response[i]);
      }
    });
  }
  buildings = [
    { value: 'อาคาร 1', viewValue: 'อาคาร 1' },
    { value: 'อาคาร 2', viewValue: 'อาคาร 2' },
    { value: 'อาคาร 3', viewValue: 'อาคาร 3' }
  ];

  ngOnInit() {
  }

  editExmRoom(elem) {
    const formData = elem.target.elements;
    const _school_id = window.sessionStorage.getItem('PSN_SCHOOL_ID');
    const preParam = {
      id: this.myId,
      school_id: _school_id,
      building_id: this.selectBuilding,
      exam_room_name: formData.room_name.value,
      exam_room_capacity: formData.support_total.value,
      exam_room_committee1: this.selectCommittee1,
      exam_room_committee2: this.selectCommittee2

    };
    this.roomManagement.editExamRoom(preParam).then(response => {
      this._router.navigateByUrl('/examCenter/room');
    });
  }

}
