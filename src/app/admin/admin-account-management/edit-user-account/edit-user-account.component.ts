import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';
import { NgModel } from '@angular/forms';
import {MdSelectModule} from '@angular/material';
import { ManageUserAccountService } from '../../../service/manage-user-account.service';
import { SchoolManagementService } from '../../../service/school-management.service';

@Component({
  selector: 'app-edit-user-account',
  templateUrl: './edit-user-account.component.html',
  styleUrls: ['./edit-user-account.component.css']
})
export class EditUserAccountComponent implements OnInit {

  selectPrename: String;
  selectSchool: String;
  _email: String;
  param = { 
    username: ' ',
    password: null,
    personal_id: null,
    school_id: null,
    prename: null,
    firstname: ' ',
    lastname: ' ',
    phone: ' ',
    email: ' ',
    id: ''
  };
  private SchoolDataSource = [];

  constructor(private manageUserAccount: ManageUserAccountService, private _router: Router, private actRouter: ActivatedRoute, private schoolManagement: SchoolManagementService) {
    this.schoolManagement.getAllSchool().then(response => {
      for (var i = 1; response[i] != undefined; i++) {
        this.SchoolDataSource.push(response[i]);
      }
    });
    console.log(this.SchoolDataSource);
   }

  ngOnInit() {
    const user_id = this.actRouter.snapshot.params.id;
    window.sessionStorage.removeItem('body');
    const url = {
      id: user_id
    }
    this.manageUserAccount.getUserData(url);
    setTimeout(() => {
      var str = window.sessionStorage.getItem('body');
      window.sessionStorage.removeItem('body');
      this.param = JSON.parse(str);
      this.selectPrename = this.param.prename;
      this.selectSchool = this.param.school_id;
    }, 100);
  }

  submitEdituser(elem){
    elem.preventDefault(); // คำสั่งไม่ให้รีเฟลชหน้าเพจ 
    var data = elem.target.elements;
    const _id = this.actRouter.snapshot.params.id;
    this.param = {
      username: data.username.value,
      password: data.password.value,
      personal_id: '',
      school_id: this.selectSchool,
      prename: this.selectPrename,
      firstname: data.firstname.value,
      lastname: data.lastname.value,
      phone: data.mobile_phone.value,
      email: data.email.value,
      id: _id
    }
    console.log(this.param);
    this.manageUserAccount.editUserAccount(this.param);
    this._router.navigateByUrl('/admin/account-management');
  }

  schools = [
    { value: '1', viewValue: 'โรงเรียนมัธยมสาธิตมหาวิทยาลัยนเรศวร-1' },
    { value: '2', viewValue: 'โรงเรียนมัธยมสาธิตมหาวิทยาลัยนเรศวร-2' },
    { value: '3', viewValue: 'โรงเรียนมัธยมสาธิตมหาวิทยาลัยนเรศวร-3' }
  ];

  prename = [
    { value: 'นาย', viewValue: 'นาย' },
    { value: 'นางสาว', viewValue: 'นางสาว' },
    { value: 'นาง', viewValue: 'นาง' },
  ];

}
