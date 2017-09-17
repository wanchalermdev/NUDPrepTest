import { Component, OnInit } from '@angular/core';
import { SchoolManagementService } from '../../../service/school-management.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-exam-center',
  templateUrl: './edit-exam-center.component.html',
  styleUrls: ['./edit-exam-center.component.css']
})
export class EditExamCenterComponent implements OnInit {
  private MyDataSource = {};
  private Id;
  private selectCity;

  constructor(private schoolManage: SchoolManagementService, private _router: Router, private actRoute: ActivatedRoute) { 
    this.Id = actRoute.snapshot.params.id;
    
    const param = {
      id: this.Id
    };
    this.schoolManage.getSchool(param).then(response => {
      this.MyDataSource = response;
      this.selectCity = response['school_city'];
    });
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

    editSchool(elem){
      elem.preventDefault();
      const data = elem.target.elements;
      const param = {
        school_name: data.school_name.value,
        school_address: data.school_address.value,
        school_district: data.school_district.value,
        school_city: this.selectCity,
        school_postcode: data.school_postcode.value,
        id: this.Id
      };
      console.log(param);
      this.schoolManage.editSchool(param).then(response => {
        console.log(response);
        this._router.navigateByUrl('/admin/exam-center');
      });
    }

}
