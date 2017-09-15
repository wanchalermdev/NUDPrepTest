import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Response } from '@angular/http';

@Injectable()
export class LoginService {
  private isUserLoggedIn;
  private dataLogin;

  constructor(private _http: Http) {
    this.isUserLoggedIn = false;
  }

  authenRequest(_username, _password) {
    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    
    const body = {
      username: _username,
      password: _password
    };

    var str = Object.keys(body).map(function(key){ 
      return encodeURIComponent(key) + '=' + encodeURIComponent(body[key]); 
    }).join('&');
    
    return this._http.post('http://10.41.131.180/NUDPrepTestBackEnd/authentication/authenticationRequestLogin.php', str,{headers: headers}).subscribe((data) => {
  
        /*
        * แปลงค่าที่รับมาเป็น JSON string ให้อยู่ในรูปของ array
        */
        var login = data.json();
        /*
        * ตรวจสอบว่าผลการลงชื่อเข้าใช้สำเร็จหรือไม่
        */
        if(login['login'] == 'success'){
          // ลงชื่อเข้าใช้สำเร็จ
          this.setUserLoggedIn();
          this.setDataLogin(login);
        }else{
          // ลงชื่อเข้าใช้ไม่สำเร็จ
          this.setUserLogout();
          this.setDataLogin(login);
        }
    });
  }

  setDataLogin(data){
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

  getDataLogin(){
    return this.dataLogin;
  }
}
