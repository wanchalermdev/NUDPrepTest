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

<<<<<<< HEAD
    this._http.post('http://localhost/NUDPrepTestBackEnd/authentication/authenticationRequestLogin.php', creds,{headers: headers}).subscribe((data) => {
=======
<<<<<<< HEAD
    this._http.post('http://localhost/NUDPrepTestBackEnd/authentication/authenticationRequestLogin.php', creds,{headers: headers}).subscribe((data) => {
=======
    this._http.put('http://localhost/NUDPrepTestBackEnd/authentication/authenticationRequestLogin.php', creds,{headers: headers}).subscribe((data) => {
>>>>>>> c7c496da1c84d02ec283c9567390f92b5c86af29
>>>>>>> 5d214367a4ac3c33eaf01a81422b1bd969726970
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
  }

  setUserLogout() {
    this.isUserLoggedIn = false;
  }
}
