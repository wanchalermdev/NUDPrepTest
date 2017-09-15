import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  error_message = "";
  constructor(private router: Router, private login: LoginService) { }

  ngOnInit() {
  }

  loginSubmit(e) {
    e.preventDefault();
    var username = e.target.elements[0].value;
    var password = e.target.elements[1].value;

    if ((username != "") && (password != "")) {
      if(this.login.authenRequest(username, password) == "1"){
        this.login.setUserLoggedIn();
        /*
        * เมื่อลงชื่อเข้าใช้สำเร็จแล้วให้ตรวจสอบว่าเป็นผู้ใช้ประเภทใด
        */
        this.router.navigate(['admin']);
      }else{
        this.error_message = "*** การลงชื่อเข้าใช้ผิดพลาด";
      }
      //this.error_message = "success";
      
    }else{
      //
    }
  }

}
