import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Response } from '@angular/http';

@Injectable()
export class LoginService {
  private isUserLoggedIn;

  constructor(private _http: Http) {
    this.isUserLoggedIn = false;
  }

  authenRequest(_username, _password) {
    var headers = new Headers();
    var creds = 'name=Mint&password=Ton';
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    const body = {
      username: _username,
      password: _password
    };

    this._http.put('http://localhost/NUDPrepTestBackEnd/authentication/authenticationRequestLogin.php', creds,{headers: headers}).subscribe((data) => {
      if (data.json().success) {
        //window.localStorage.setItem('auth_key', data.json());
        console.log(data);
      }else{
        console.log(data.json());
      }
    });
  }

  setUserLoggedIn() {
    this.isUserLoggedIn = true;
  }

  getUserLoggedIn() {
    return this.isUserLoggedIn;
  } ,

  setUserLogout() {
    this.isUserLoggedIn = false;
  }
}
