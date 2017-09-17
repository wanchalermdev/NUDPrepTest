import { Component, OnInit } from '@angular/core';
import { SchoolManagementService } from '../../../service/school-management.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-exam-center',
  templateUrl: './add-exam-center.component.html',
  styleUrls: ['./add-exam-center.component.css']
})

export class AddExamCenterComponent implements OnInit {

  private selectCity;

  constructor(private school: SchoolManagementService, private _router:Router) {
   }

  provinces = [
    {value: 'พิษณุโลก', viewValue: 'พิษณุโลก'},
    {value: 'สุโขทัย', viewValue: 'สุโขทัย'},
    {value: 'พิจิตร', viewValue: 'พิจิตร'},
    {value: 'นครสวรรค์', viewValue: 'นครสวรรค์'},
    {value: 'กำแพงเพชร', viewValue: 'กำแพงเพชร'}
  ];

  ngOnInit() {
  }

  createNewSchool(elem){
    elem.preventDefault(); // คำสั่งไม่ให้รีเฟลชหน้าเพจ
    console.log(this.selectCity);
    var data = elem.target.elements;
    const param = {
      school_name: data.school_name.value,
      school_address: data.school_address.value,
      school_district: data.school_district.value,
      school_city: this.selectCity,
      school_postcode: data.school_postcode.value
    };
    this.school.createNewSchool(param).then(response => {
      this._router.navigateByUrl('/admin/exam-center');
    });
  }

}
