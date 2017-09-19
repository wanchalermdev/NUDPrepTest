import { Component, OnInit } from '@angular/core';
import { TesterManagementService } from '../../../service/tester-management.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-candidate',
  templateUrl: './edit-candidate.component.html',
  styleUrls: ['./edit-candidate.component.css']
})
export class EditCandidateComponent implements OnInit {
  private testerDataSource = {};
  private myId;
  private _school_id;
  private selectPrename;
  private selectType;
  private selectLevel;

  constructor(
    private testerManagement: TesterManagementService,
    private _router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.myId = activatedRoute.snapshot.params.id;
    this._school_id = window.sessionStorage.getItem('PSN_SCHOOL_ID');
    const preParam = {
      id: this.myId,
      school_id: this._school_id
    };
    this.testerManagement.getTester(preParam).then(response => {
      this.testerDataSource = response;
      this.selectPrename = response['tester_prename'];
      this.selectType = response['tester_type'];
      this.selectLevel = response['tester_level'];
    });
  }

  favoritelevels: string;

  pre_names = [
    { value: 'เด็กชาย', viewValue: 'เด็กชาย' },
    { value: 'เด็กหญิง', viewValue: 'เด็กหญิง' },
  ];
  levels = [
    { value: 'ระดับชั้นประถมศึกษาปีที่ 4', viewValue: 'ระดับชั้นประถมศึกษาปีที่ 4' },
    { value: 'ระดับชั้นประถมศึกษาปีที่ 5', viewValue: 'ระดับชั้นประถมศึกษาปีที่ 5' },
    { value: 'ระดับชั้นประถมศึกษาปีที่ 6', viewValue: 'ระดับชั้นประถมศึกษาปีที่ 6' }
  ];

  ngOnInit() {
  }

  editTester(elem) {
    elem.preventDefault();
    const formData = elem.target.elements;
    const preParam = {
      id: this.myId,
      school_id: this._school_id,
      tester_personal_code: formData.id_code.value,
      tester_prename: this.selectPrename,
      tester_firstname: formData.firstname.value,
      tester_lastname: formData.lastname.value,
      tester_type: this.selectType,
      tester_level: this.selectLevel,
      tester_phone: formData.mobile_phone.value
    };
    this.testerManagement.editTester(preParam).then(response => {
      this._router.navigateByUrl('/examCenter/candidate');
    });
  }

}
