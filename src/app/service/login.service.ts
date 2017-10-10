import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Response } from '@angular/http';

@Injectable()
export class LoginService {
  private isUserLoggedIn;
  private dataLogin;
  private _host;

  constructor(private _http: Http) {
    this.isUserLoggedIn = false;
    this._host = "http://10.41.131.180/NUDPrepTestBackEnd/authentication/AuthenticationRequestLogin.php";
    //this._host = "http://www.satit.nu.ac.th/NUDPrepTestBackEnd/authentication/AuthenticationRequestLogin.php";
  }

  checkLogin(_username, _password) {

    const body = {
      username: _username,
      password: _password
    };

    var str = Object.keys(body).map(function (key) {
      return encodeURIComponent(key) + '=' + encodeURIComponent(body[key]);
    }).join('&');

    return this.requestCheckLogin(str);
  }

  private requestCheckLogin(param) {
    return new Promise((reslove, reject) => {

    });
  }

  authenRequest(_username, _password) {

    return new Promise((reslove, reject) => {
      var headers = new Headers();
      headers.append('Content-Type', 'application/x-www-form-urlencoded');

      const body = {
        username: _username,
        password: _password
      };

      var str = Object.keys(body).map(function (key) {
        return encodeURIComponent(key) + '=' + encodeURIComponent(body[key]);
      }).join('&');

      return this._http.post(this._host, str, { headers: headers }).map((res: Response) => {
        var json = res.json();
        json.headers = res.headers;
        if (json['login'] === 'success') {
          window.sessionStorage.setItem('login', 'true');
          window.sessionStorage.setItem('PSN_ROLE', json['role']);
          window.sessionStorage.setItem('PSN_SCHOOL_ID', json['school_id']);
          this.setUserLoggedIn();
          this.setDataLogin(json);
          return json.body;
        } else {

        }
        return json;

      }).subscribe((data) => {
        reslove(data);
      }, error => {
        reject(error);
      });
    });
  }

  setDataLogin(data) {
    this.dataLogin = data;
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

  getDataLogin() {
    return this.dataLogin;
  }
}
