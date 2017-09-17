import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-candidate',
  templateUrl: './edit-candidate.component.html',
  styleUrls: ['./edit-candidate.component.css']
})
export class EditCandidateComponent implements OnInit {

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
      { value: 'ระดับชั้นประถมศึกษาปีที่ 4', viewValue: 'ระดับชั้นประถมศึกษาปีที่ 4' },
      { value: 'ระดับชั้นประถมศึกษาปีที่ 5', viewValue: 'ระดับชั้นประถมศึกษาปีที่ 5' },
      { value: 'ระดับชั้นประถมศึกษาปีที่ 6', viewValue: 'ระดับชั้นประถมศึกษาปีที่ 6' }
    ];

  ngOnInit() {
  }

}
