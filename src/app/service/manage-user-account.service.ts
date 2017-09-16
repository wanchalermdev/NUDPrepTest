import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Response } from '@angular/http';

@Injectable()
export class ManageUserAccountService {

  private allUserData;
  private userData;

  constructor(private _http: Http) {
    this.allUserData = null;
    this.userData = null;
  }

  /*
  *  ขอข้อมูลบัญชีผู้ใช้ทั้งหมด
  */
  getAllUserAccountFromBackEnd() {

    this._http.get('http://10.41.131.180/NUDPrepTestBackEnd/user_account/UserAccountManagement.php').subscribe((data) => {

      this.allUserData = data.json();

      if (this.allUserData['operation'] == "success") {
        this.allUserData = this.allUserData['body'];

        window.sessionStorage.setItem('body', JSON.stringify(this.allUserData));
      }

    });
  }
  setAllUserData(data) {
    this.allUserData = data;
  }
  getAllUserAccount() {
    this.getAllUserAccountFromBackEnd();
    return this.allUserData;
  }

  /*
  *  ขอข้อมูลบัญชีผู้ใช้รายบุคคล
  */
  getUserDataFromBackEnd(param){

    var _parameter = Object.keys(param).map(function (key) {
      return encodeURIComponent(key) + '=' + encodeURIComponent(param[key]);
    }).join('&');

    this._http.get('http://10.41.131.180/NUDPrepTestBackEnd/user_account/UserAccountManagement.php?' + _parameter).subscribe((data) => {
      this.userData = data.json();
      if(this.userData['operation'] == "success"){
        this.userData = this.userData['body'];

        window.sessionStorage.setItem('body', JSON.stringify(this.userData));
      }
    });
  }

  getUserData(param){
    this.getUserDataFromBackEnd(param);
    return this.userData;
  }


  /*
  * สร้างบัญชีผู้ใช้ใหม่
  */
  createUserAccount(userAccountData) {
    /*
    * ตั้งค่า Header application/x-www-form-urlencode'
    */
    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    /*
    * pack parameter สำหรับส่งค่าไปสร้างบัญชีผู้ใช้
    */
    var _parameter = Object.keys(userAccountData).map(function (key) {
      return encodeURIComponent(key) + '=' + encodeURIComponent(userAccountData[key]);
    }).join('&');

    return this._http.post('http://10.41.131.180/NUDPrepTestBackEnd/user_account/UserAccountManagement.php', _parameter, { headers: headers }).subscribe((data) => {
      var responseJSON = data.json();
      console.log(responseJSON);
      return responseJSON;
    });

  }
}
