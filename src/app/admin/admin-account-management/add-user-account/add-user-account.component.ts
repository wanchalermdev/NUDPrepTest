import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { NgModel } from '@angular/forms';
import {MdSelectModule} from '@angular/material';
import { ManageUserAccountService } from '../../../service/manage-user-account.service';


@Component({
  selector: 'app-add-user-account',
  templateUrl: './add-user-account.component.html',
  styleUrls: ['./add-user-account.component.css']
})
export class AddUserAccountComponent implements OnInit {

  selectPrename: String;
  selectSchool: String;
  _email: String;

  constructor(private _router: Router, private manageUserAccount: ManageUserAccountService) { }

  submitCreateuser(elem){
    elem.preventDefault(); // คำสั่งไม่ให้รีเฟลชหน้าเพจ 
    var data = elem.target.elements;
    const param = {
      username: data.username.value,
      password: data.password.value,
      personal_id: '',
      school_id: this.selectSchool,
      prename: this.selectPrename,
      firstname: data.firstname.value,
      lastname: data.lastname.value,
      phone: data.mobile_phone.value,
      email: data.email.value,
      position: data.position.value
    }
    console.log(this.manageUserAccount.createUserAccount(param));
    this._router.navigateByUrl('/admin/account-management');
  }

  ngOnInit() {
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
