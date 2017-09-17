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
    //this._host = "http://10.41.131.180/NUDPrepTestBackEnd/authentication/AuthenticationRequestLogin.php";
    this._host = "http://localhost/NUDPrepTestBackEnd/authentication/AuthenticationRequestLogin.php";
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

      return this._http.post(this._host, str, {headers: headers}).map((res: Response) => {
        var json = res.json();
        json.headers = res.headers;
        if (json['login'] == 'success') {
          window.sessionStorage.setItem('login', 'true');
          this.setUserLoggedIn();
          this.setDataLogin(json);
        }else{

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
