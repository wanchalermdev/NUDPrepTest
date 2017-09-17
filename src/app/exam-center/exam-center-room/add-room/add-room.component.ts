import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-room',
  templateUrl: './add-room.component.html',
  styleUrls: ['./add-room.component.css']
})
export class AddRoomComponent implements OnInit {

  constructor() { }
  buildings = [
    { value: 'อาคาร 1', viewValue: 'อาคาร 1' },
    { value: 'อาคาร 2', viewValue: 'อาคาร 2' },
    { value: 'อาคาร 3', viewValue: 'อาคาร 3' }
  ];
 

  ngOnInit() {
  }

}
