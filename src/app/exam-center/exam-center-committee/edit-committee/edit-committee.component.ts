import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CommitteeManagementService } from '../../../service/committee-management.service';

@Component({
  selector: 'app-edit-committee',
  templateUrl: './edit-committee.component.html',
  styleUrls: ['./edit-committee.component.css']
})
export class EditCommitteeComponent implements OnInit {

  private myId;
  private _school_id;

  private selectPrename;
  private firstname;
  private lastname;
  constructor(
    private committeeManagement: CommitteeManagementService,
    private _router: Router,
    private activatedRoute: ActivatedRoute
  ) { 
    this.myId = activatedRoute.snapshot.params.id;
    this._school_id = window.sessionStorage.getItem('PSN_SCHOOL_ID');
    const preParam = {
      id: this.myId,
      school_id: this._school_id
    };
    this.committeeManagement.getCommittee(preParam).then(response => {
      this.selectPrename = response['committee_prename'];
      this.firstname = response['committee_firstname'];
      this.lastname = response['committee_lastname'];
    });
  }

  prenames = [
    { value: 'นาย', viewValue: 'นาย' },
    { value: 'นางสาว', viewValue: 'นางสาว' },
    { value: 'นาง', viewValue: 'นาง' }
  ];

  ngOnInit() {
  }

  editCommittee(elem){
    elem.preventDefault();
    const formData = elem.target.elements;
    const preParam = {
      id: this.myId,
      school_id: this._school_id,
      committee_prename: this.selectPrename,
      committee_firstname: formData.firstname.value,
      committee_lastname: formData.lastname.value
    };
    this.committeeManagement.editCommittee(preParam).then(response => {
      this._router.navigateByUrl('/examCenter/committee');
    });
  }

}
