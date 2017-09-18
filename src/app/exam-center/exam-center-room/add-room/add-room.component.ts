import { Component, OnInit } from '@angular/core';
import { BuildingManagementService } from '../../../service/building-management.service';
import { RoomManagementService } from '../../../service/room-management.service'
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-add-room',
  templateUrl: './add-room.component.html',
  styleUrls: ['./add-room.component.css']
})
export class AddRoomComponent implements OnInit {

  buildingDataSource = [];
  selectBuilding;
  selectCommitee1: String;
  selectCommitee2: String;

  constructor(
    private roomManagement: RoomManagementService,
    private buildingManagement: BuildingManagementService,
    private _router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.buildingManagement.getAllBuilding().then(response => {
      for (var i = 1; response[i] != undefined; i++) {
        this.buildingDataSource.push(response[i]);
      }
    });
    console.log(this.buildingDataSource);
  }

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

  createExamRoom(elem) {
    elem.preventDefault();
    const formData = elem.target.elements;
    const preParam = {
      exam_room_name: formData.exam_room_name.value,
      exam_room_capacity: formData.exam_room_capacity.value,
      exam_room_committee1: this.selectCommitee1,
      exam_room_committee2: this.selectCommitee2,
      building_id: this.selectBuilding
    };
    this.roomManagement.createExamRoom(preParam).then(response => {
      console.log(response);
      this._router.navigateByUrl('/examCenter/room');
    });
  }

}
