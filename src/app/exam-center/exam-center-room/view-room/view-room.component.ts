import { Component, OnInit } from '@angular/core';
import { RoomManagementService } from '../../../service/room-management.service';
import { Router, ActivatedRoute } from '@angular/router';
import { BuildingManagementService } from '../../../service/building-management.service';

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

  constructor(
    private roomMmanagement: RoomManagementService, 
    private _router: Router, 
    private activatedRoute: ActivatedRoute,
    private buildingManagement:BuildingManagementService) { 
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
