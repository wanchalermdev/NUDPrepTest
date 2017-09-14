import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router, private login:LoginService) { }

  ngOnInit() {
  }

  loginSubmit(e){
    e.preventDefault();
    var username = e.target.elements[0].value;
    var password = e.target.elements[1].value;
    if( (username == "Tony") && (password == "0000")){
      //alert("Success");
      this.login.authenRequest(username, password);
      //this.router.navigate(['admin']);
    }
    return false;
  }

}
