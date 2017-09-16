import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-exam-center',
  templateUrl: './add-exam-center.component.html',
  styleUrls: ['./add-exam-center.component.css']
})
export class AddExamCenterComponent implements OnInit {

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
