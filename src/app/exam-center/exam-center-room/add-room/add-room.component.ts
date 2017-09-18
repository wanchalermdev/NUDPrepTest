import { Component, OnInit } from '@angular/core';
import { RoomManagementService } from '../../../service/room-management.service';
import { Router, ActivatedRoute } from '@angular/router';
import { BuildingManagementService } from '../../../service/building-management.service';

@Component({
  selector: 'app-add-room',
  templateUrl: './add-room.component.html',
  styleUrls: ['./add-room.component.css']
})
export class AddRoomComponent implements OnInit {

  buildingData = [];


  constructor(
    private roomManagement: RoomManagementService,
    private buildingManagement: BuildingManagementService,
    private _router: Router,
    private activatedRoute: ActivatedRoute) {
    this.buildingManagement.getAllBuilding().then(response => {

      for(var i = 1; response[i] != undefined; i++){
        this.buildingData.push(response[i]);
      }
      
    });
  }
  buildings = [
    { value: 'อาคาร 1', viewValue: 'อาคาร 1' },
    { value: 'อาคาร 2', viewValue: 'อาคาร 2' },
    { value: 'อาคาร 3', viewValue: 'อาคาร 3' }
  ];
  committee1 = [
    { value: 'นาย ก', viewValue: 'นาย ก' },
    { value: 'นาย ข', viewValue: 'นาย ข' },
    { value: 'นาง ค', viewValue: 'นาง ค' }
  ];

  committee2 = [
    { value: 'นาย ก', viewValue: 'นาย ก' },
    { value: 'นาย ข', viewValue: 'นาย ข' },
    { value: 'นาง ค', viewValue: 'นาง ค' }
  ];


  ngOnInit() {
  }

  createExamRoom() {

  }

}
