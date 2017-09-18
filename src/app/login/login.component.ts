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
  constructor(private router: Router, private login: LoginService) {
    if (window.sessionStorage.getItem('login') == "true") {
      if (window.sessionStorage.getItem('roleOfUser') == 'Administrator') {
        this.router.navigateByUrl('/admin');
      } else if (window.sessionStorage.getItem('roleOfUser') == 'coordinator_committee') {
        this.router.navigateByUrl('/examCenter');
      }
    }

  }

  ngOnInit() {

  }

  loginSubmit(e) {
    e.preventDefault(); // คำสั่งไม่ให้รีเฟลชหน้าเพจ

    var username = e.target.elements[0].value;
    var password = e.target.elements[1].value;

    this.login.authenRequest(username, password);
    setTimeout(() => {

      //console.log(this.login.getDataLogin());
      if (this.login.getUserLoggedIn()) {
        /*
        * เมื่อลงชื่อเข้าใช้สำเร็จแล้วให้ตรวจสอบว่าเป็นผู้ใช้ประเภทใด
        */
        

        var dataUser = this.login.getDataLogin();

        window.sessionStorage.setItem('login', 'true');
        window.sessionStorage.setItem('school_id', dataUser['school_id']);

        var _name = dataUser['prename'] + dataUser['firstname'] + "   " + dataUser['lastname'];
        window.sessionStorage.setItem('nameOfUser', _name.toString());

        var _role = dataUser['role'];
        window.sessionStorage.setItem('roleOfUser', _role.toString());

        if (dataUser['role'] == 'Administrator') {
          this.router.navigateByUrl('/admin');
        } else if (dataUser['role'] == 'coordinator_committee') {
          this.router.navigateByUrl('/examCenter');
        }
      } else {
        this.login.setUserLogout();
        this.error_message = "*** การลงชื่อเข้าใช้ผิดพลาด";
      }
    }, 1000);
  }


}
