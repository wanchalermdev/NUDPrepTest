import { Component, OnInit } from '@angular/core';
import { RoomManagementService } from '../../../service/room-management.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-edit-room',
  templateUrl: './edit-room.component.html',
  styleUrls: ['./edit-room.component.css']
})
export class EditRoomComponent implements OnInit {
  private myId;
  private MyDataSource = {};

  constructor(private roomManagement: RoomManagementService, private _router: Router,private activatedRoute: ActivatedRoute) { 
    this.myId = this.activatedRoute.snapshot.params.id;
    const preParam = {
      id: this.myId
    };
    this.roomManagement.getExamRoom(preParam).then(response => {
      this.MyDataSource = response;
    });
  }
  buildings = [
    { value: 'อาคาร 1', viewValue: 'อาคาร 1' },
    { value: 'อาคาร 2', viewValue: 'อาคาร 2' },
    { value: 'อาคาร 3', viewValue: 'อาคาร 3' }
  ];

  ngOnInit() {
  }

}
