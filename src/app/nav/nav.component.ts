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

  constructor(private login: LoginService, private _router: Router) {
    //this.loggedIn = this.login.getUserLoggedIn();
      console.log("สถานะการลงชื่อเข้าใช้ " + window.sessionStorage.getItem('login'));
      if(window.sessionStorage.getItem('login') == 'true'){
         this.loggedIn = true;
      }else{
        this.loggedIn = false;
      }   
    
  }

  ngOnInit() {
  }

  logout() {
    this.login.setUserLogout();
    window.sessionStorage.removeItem('login');
    this._router.navigateByUrl("/login");
  }

}
