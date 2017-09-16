import { Component, OnInit } from '@angular/core';
import { LoginService } from '../service/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  loggedIn = false;
  checkRoleAdmin = false;
  checkRoleExamCenter = false;

  nameUser = window.sessionStorage.getItem('nameOfUser');
  roleUser = window.sessionStorage.getItem('roleOfUser');

  constructor(private login: LoginService, private _router: Router) {
    //this.loggedIn = this.login.getUserLoggedIn();
   

      //console.log("สถานะการลงชื่อเข้าใช้ " + window.sessionStorage.getItem('login'));
      if(window.sessionStorage.getItem('login') == 'true'){
         this.loggedIn = true;
      }else{
        this.loggedIn = false;
      }   
      //console.log("บทบาทของ : user " + window.sessionStorage.getItem('roleOfUser'));
      if (this.roleUser == 'Administrator') {
        this.checkRoleAdmin = true;
        this.checkRoleExamCenter = false;
      } else if (this.roleUser == 'coordinator_committee'){
        this.checkRoleAdmin = false;
        this.checkRoleExamCenter = true;
      }
  }

  ngOnInit() {
  }
 //ปุ่ม logout
  logout() {
    this.login.setUserLogout();
    window.sessionStorage.clear();
    this._router.navigateByUrl("/login");
  }

}
