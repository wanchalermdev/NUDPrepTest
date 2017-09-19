import { Component, OnInit } from '@angular/core';
import { RoomManagementService } from '../../../service/room-management.service';
import { Router, ActivatedRoute } from '@angular/router';
import { BuildingManagementService } from '../../../service/building-management.service';
import { CommitteeManagementService } from '../../../service/committee-management.service';

@Component({
  selector: 'app-view-room',
  templateUrl: './view-room.component.html',
  styleUrls: ['./view-room.component.css']
})
export class ViewRoomComponent implements OnInit {

  private myId;
  private myBuildingName;
  private myCapacity;
  private myRoomName;
  private _school_id;
  private committee1Name;
  private committee2Name;

  constructor(
    private roomMmanagement: RoomManagementService,
    private _router: Router,
    private activatedRoute: ActivatedRoute,
    private buildingManagement: BuildingManagementService,
    private committeeManagement: CommitteeManagementService
  ) {
    this.myId = this.activatedRoute.snapshot.params.id;
    this._school_id = window.sessionStorage.getItem('PSN_SCHOOL_ID');
    const preParam = {
      id: this.myId,
      school_id: this._school_id
    };

    this.roomMmanagement.getExamRoom(preParam).then(response => {
      const room = response;
      this.myCapacity = response['exam_room_capacity'];
      this.myRoomName = response['exam_room_name'];


      if ((response['exam_room_committee1'] != undefined) && (response['exam_room_committee1'] != '')) {
        const preParamCommittee = {
          id: response['exam_room_committee1'],
          school_id: this._school_id
        };
        this.committeeManagement.getCommittee(preParamCommittee).then(responseCommittee => {
          this.committee1Name = responseCommittee['committee_prename'] + responseCommittee['committee_firstname'] + ' ' + responseCommittee['committee_lastname'] ;
        });
      }

      if ((response['exam_room_committee2'] != undefined) && (response['exam_room_committee2'] != '')) {
        const preParamCommittee = {
          id: response['exam_room_committee2'],
          school_id: this._school_id
        };
        this.committeeManagement.getCommittee(preParamCommittee).then(responseCommittee => {
          this.committee2Name = responseCommittee['committee_prename'] + responseCommittee['committee_firstname'] + ' ' + responseCommittee['committee_lastname'] ;
        });
      }



      const preParamBuilding = {
        id: response['building_id'],
        school_id: this._school_id
      };
      this.buildingManagement.getBuilding(preParamBuilding).then(responseBuilding => {
        this.myBuildingName = responseBuilding['building_name'];
      });
    });
  }

  ngOnInit() {

  }

}
