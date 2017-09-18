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

  createExamRoom(){
    
  }

}
