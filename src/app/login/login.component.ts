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

    this.login.authenRequest(username, password);
    setTimeout(() => {
      
      console.log(this.login.getDataLogin());
      if (this.login.getUserLoggedIn()) {
        /*
        * เมื่อลงชื่อเข้าใช้สำเร็จแล้วให้ตรวจสอบว่าเป็นผู้ใช้ประเภทใด
        */
        window.sessionStorage.setItem('login', 'true');
        var dataUser = this.login.getDataLogin();
        if(dataUser['role'] == 'Administrator'){
          this.router.navigateByUrl('/admin');
        }else if(dataUser['role'] == 'coordinator_committee'){
          this.router.navigateByUrl('/centerExam');
        }
      } else {
        this.login.setUserLogout();
        this.error_message = "*** การลงชื่อเข้าใช้ผิดพลาด";
      }
    }, 300);
  }
  

}
