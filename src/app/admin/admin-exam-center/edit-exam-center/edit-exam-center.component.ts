import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-exam-center',
  templateUrl: './edit-exam-center.component.html',
  styleUrls: ['./edit-exam-center.component.css']
})
export class EditExamCenterComponent implements OnInit {

  constructor() { }
  
    provinces = [
      {value: 'province-0', viewValue: 'พิษณุโลก'},
      {value: 'province-1', viewValue: 'สุโขทัย'},
      {value: 'province-2', viewValue: 'พิจิตร'},
      {value: 'province-3', viewValue: 'นครสวรรค์'},
      {value: 'province-4', viewValue: 'กำแพงเพชร'}
    ];
  
    ngOnInit() {
    }
}
