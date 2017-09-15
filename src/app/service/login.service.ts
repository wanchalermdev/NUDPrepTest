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

    var str = Object.keys(body).map(function(key){ 
      return encodeURIComponent(key) + '=' + encodeURIComponent(body[key]); 
    }).join('&');
    
    this._http.post('http://localhost/NUDPrepTestBackEnd/authentication/authenticationRequestLogin.php', str,{headers: headers}).subscribe((data) => {
  
        
        /*
        * แปลงค่าที่รับมาเป็น JSON string ให้อยู่ในรูปของ array
        */
        var login = data.json();
        console.log(login);

        /*
        * ตรวจสอบว่าผลการลงชื่อเข้าใช้สำเร็จหรือไม่
        */
        if(login['login'] == 'success'){
          // ลงชื่อเข้าใช้สำเร็จ
          window.sessionStorage.setItem('login', 'true');
        }else{
          // ลงชื่อเข้าใช้ไม่สำเร็จ
          window.sessionStorage.setItem('login', 'false');
        }
      
    });

    /*
    * ส่งค่ากลับไปที่จุดที่เรียกใช้
    */
    if(window.sessionStorage.getItem('login') == 'true'){
      return "1";
    }
    else{
      return "0";
    }
  }

  setUserLoggedIn() {
    window.sessionStorage.setItem('login', 'true');
  }

  getUserLoggedIn() {
    if(window.sessionStorage.getItem('login') == 'true'){
      return true;
    }else{
      return false;
    }
  }

  setUserLogout() {
    this.isUserLoggedIn = false;
  }
}
