import { Component, OnInit } from '@angular/core';
import { CommitteeManagementService } from '../../../service/committee-management.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-committee',
  templateUrl: './add-committee.component.html',
  styleUrls: ['./add-committee.component.css']
})
export class AddCommitteeComponent implements OnInit {
  selectPrename;
  private school_id;
  constructor(private committeeManagement: CommitteeManagementService, private _router: Router) { }

  prenames = [
    { value: 'นาย', viewValue: 'นาย' },
    { value: 'นางสาว', viewValue: 'นางสาว' },
    { value: 'นาง', viewValue: 'นาง' }
  ];
  ngOnInit() {
  }

  createCommittee(elem) {
    elem.preventDefault();
    const formData = elem.target.elements;
    this.school_id = window.sessionStorage.getItem('PSN_SCHOOL_ID');
    const preParam = {
      committee_prename: this.selectPrename,
      committee_firstname: formData.committee_firstname.value,
      committee_lastname: formData.committee_lastname.value,
      school_id: this.school_id
    };
    console.log(preParam);
    this.committeeManagement.createCommittee(preParam).then(response => {
      this._router.navigateByUrl('/examCenter/committee');
    });
  }

}
