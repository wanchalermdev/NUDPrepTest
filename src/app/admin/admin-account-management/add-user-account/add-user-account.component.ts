import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';


@Component({
  selector: 'app-add-user-account',
  templateUrl: './add-user-account.component.html',
  styleUrls: ['./add-user-account.component.css']
})
export class AddUserAccountComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  schools = [
    { value: 'school-0', viewValue: 'โรงเรียนมัธยมสาธิตมหาวิทยาลัยนเรศวร-1' },
    { value: 'schooาl-1', viewValue: 'โรงเรียนมัธยมสาธิตมหาวิทยาลัยนเรศวร-2' },
    { value: 'school-2', viewValue: 'โรงเรียนมัธยมสาธิตมหาวิทยาลัยนเรศวร-3' }
  ];

  sexs = [
    { value: 'นาย', viewValue: 'นาย' },
    { value: 'นางสาว', viewValue: 'นางสาว' },
    { value: 'นาง', viewValue: 'นาง' },
  ];

}
