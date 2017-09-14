import { Component, OnInit } from '@angular/core';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  loggedIn = false;

  constructor(private login:LoginService) {
    this.loggedIn = this.login.getUserLoggedIn();
   }

  ngOnInit() {
    
  }

}
