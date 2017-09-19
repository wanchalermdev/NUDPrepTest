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
      email: data.email.value
    };
    this.manageUserAccount.createUserAccount(param).then(response => {
      this._router.navigateByUrl('/admin/account-management');
    });
  }

  ngOnInit() {
  }
  schools = [
    { value: 'โรงเรียนโรจนวิทย์มาลาเบี่ยง', viewValue: 'โรงเรียนโรจนวิทย์มาลาเบี่ยง' },
    { value: 'โรงเรียนกวางตง', viewValue: 'โรงเรียนกวางตง' },
    { value: 'โรงเรียนนรบุตรศึกษา', viewValue: 'โรงเรียนนรบุตรศึกษา' },
    { value: 'โรงเรียนอนุบาลบางมูลนาก "ราษฎร์อุทิศ"', viewValue: 'โรงเรียนอนุบาลบางมูลนาก "ราษฎร์อุทิศ"' },
    { value: 'โรงเรียนบ้านป่าแดง', viewValue: 'โรงเรียนบ้านป่าแดง' },
    { value: 'โรงเรียนผดุงวิทย์', viewValue: 'โรงเรียนผดุงวิทย์' },
    { value: 'โรงเรียนสาธิตมหาวิทยาลัยราชภัฏอุตรดิตถ์', viewValue: 'โรงเรียนสาธิตมหาวิทยาลัยราชภัฏอุตรดิตถ์' },
    { value: 'โรงเรียนสาธิตมหาวิทยาลัยราชภัฏพิบูลสงคราม', viewValue: 'โรงเรียนสาธิตมหาวิทยาลัยราชภัฏพิบูลสงคราม' },
    { value: 'โรงเรียนอนุบาลเพชรบูรณ์', viewValue: 'โรงเรียนอนุบาลเพชรบูรณ์' },
    { value: 'โรงเรียนอนุบาลโรจนวิทย์', viewValue: 'โรงเรียนอนุบาลโรจนวิทย์' },
    { value: 'โรงเรียนอนุบาลทิพยาหล่มสัก', viewValue: 'โรงเรียนอนุบาลทิพยาหล่มสัก' },
    { value: 'โรงเรียนอนุบาลพิจิตร', viewValue: 'โรงเรียนอนุบาลพิจิตร' },
    { value: 'โรงเรียนอนุบาลพิษณุโลก', viewValue: 'โรงเรียนอนุบาลพิษณุโลก' },
    { value: 'โรงเรียนอนุบาลสุโขทัย', viewValue: 'โรงเรียนอนุบาลสุโขทัย' },
    { value: 'โรงเรียนสิ่นหมิน', viewValue: 'โรงเรียนสิ่นหมิน' },

  ];

  prename = [
    { value: 'นาย', viewValue: 'นาย' },
    { value: 'นางสาว', viewValue: 'นางสาว' },
    { value: 'นาง', viewValue: 'นาง' },
  ];

}
