import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-committee',
  templateUrl: './edit-committee.component.html',
  styleUrls: ['./edit-committee.component.css']
})
export class EditCommitteeComponent implements OnInit {

  constructor() { }

  buildings = [
    { value: 'อาคาร 1', viewValue: 'อาคาร 1' },
    { value: 'อาคาร 2', viewValue: 'อาคาร 2' },
    { value: 'อาคาร 3', viewValue: 'อาคาร 3' }
  ];
  prenames = [
    { value: 'นาย', viewValue: 'นาย' },
    { value: 'นางสาว', viewValue: 'นางสาว' },
    { value: 'นาง', viewValue: 'นาง' }
  ];

  ngOnInit() {
  }

}
