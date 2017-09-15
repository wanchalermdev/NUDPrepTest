import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-candidate',
  templateUrl: './add-candidate.component.html',
  styleUrls: ['./add-candidate.component.css']
})
export class AddCandidateComponent  {

  constructor() { }

  favoritelevels: string;
  
  pre_names = [
    {value: 'เด็กชาย', viewValue: 'เด็กชาย'},
    {value: 'เด็กหญิง', viewValue: 'เด็กหญิง'},
  ];
  schools = [
    {value: 'school-0', viewValue: 'โรงเรียนมัธยมสาธิตมหาวิทยาลัยนเรศวร-1'},
    {value: 'schooาl-1', viewValue: 'โรงเรียนมัธยมสาธิตมหาวิทยาลัยนเรศวร-2'},
    {value: 'school-2', viewValue: 'โรงเรียนมัธยมสาธิตมหาวิทยาลัยนเรศวร-3'}
  ];
  levels = [
      'ชั้นประถมศึกษาปีที่ 4',
      'ชั้นประถมศึกษาปีที่ 5',
      'ชั้นประถมศึกษาปีที่ 6',
    ];

}
