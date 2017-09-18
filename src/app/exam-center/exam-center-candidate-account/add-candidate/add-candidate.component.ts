import { Component, OnInit } from '@angular/core';
import { TesterManagementService } from '../../../service/tester-management.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-candidate',
  templateUrl: './add-candidate.component.html',
  styleUrls: ['./add-candidate.component.css']
})
export class AddCandidateComponent  {
  selectLevel;
  selectPrename;
  selectUnder;
  school_id;
  
  constructor(private testerManagement: TesterManagementService, private _router: Router) { }

  favoritelevels: string;

  createTester(elem){
    elem.preventDefault();
    this.school_id = window.sessionStorage.getItem('PSN_SCHOOL_ID');
    const formData = elem.target.elements;
    const preParam = {
      school_id : this.school_id,
      tester_personal_code: formData.id_code.value,
      tester_prensme: this.selectPrename,
      tester_firstname: formData.firstname.value,
      tester_lastname: formData.lastname.value,
      tester_phone: formData.mobile_phone.value,
      tester_type: this.selectUnder,
      tester_level: this.selectLevel
    };
    this.testerManagement.createTester(preParam).then(response => {
      console.log(response);
    });
  }
  
  
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

}
