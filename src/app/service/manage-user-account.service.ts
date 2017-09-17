import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Response } from '@angular/http';

@Injectable()
export class ManageUserAccountService {

  private allUserData;
  private userData;
  private _host;

  constructor(private _http: Http) {
    this.allUserData = null;
    this.userData = null;
    this._host = 'http://10.41.131.180/NUDPrepTestBackEnd/user_account/UserAccountManagement.php';
  }

  /*
  *  ขอข้อมูลบัญชีผู้ใช้ทั้งหมด
  */
  private getAllUserAccountFromBackEnd() {

    return new Promise((reslove, reject) => {
      return this._http.get(this._host).map((res: Response) => {
        var json = res.json();
        this.allUserData = json.body;
        return json.body;
      }).subscribe((data) => {
        reslove(data);
      }, error => {
        reject(error);
      });
    });
  }

  setAllUserData(data) {
    this.allUserData = data;
  }

  getAllUserAccount() {

    return this.getAllUserAccountFromBackEnd();
  }

  /*
  *  ขอข้อมูลบัญชีผู้ใช้รายบุคคล
  */
  getUserDataFromBackEnd(param) {

    var _parameter = Object.keys(param).map(function (key) {
      return encodeURIComponent(key) + '=' + encodeURIComponent(param[key]);
    }).join('&');

    this._http.get('http://10.41.131.180/NUDPrepTestBackEnd/user_account/UserAccountManagement.php?' + _parameter).subscribe((data) => {
      this.userData = data.json();
      if (this.userData['operation'] == "success") {
        this.userData = this.userData['body'];

        window.sessionStorage.setItem('body', JSON.stringify(this.userData));
      }
    });
  }

  getUserData(param) {
    this.getUserDataFromBackEnd(param);
    return this.userData;
  }


  /*
  * สร้างบัญชีผู้ใช้ใหม่
  */

  private requestCreateUserAccount(userAccountData) {
    return new Promise((reslove, reject) => {
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

      return this._http.post(this._host, _parameter, { headers: headers }).map((res: Response) => {
        var json = res.json();
        json.headers = res.headers;
        return json.data;
      }).subscribe((data) => {
        reslove(data);
      }, error => {
        reject(error);
      });

    });
  }

  createUserAccount(userAccountData) {
    return this.requestCreateUserAccount(userAccountData);
  }

  /*
  * แก้ไขบัญชีผู้ใช้
  */
  editUserAccount(userAccountData) {
    /*
    * ตั้งค่า Header application/x-www-form-urlencode'
    */
    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    /*
    * pack parameter สำหรับส่งค่าไปแก้ไขบัญชีผู้ใช้
    */
    var _parameter = Object.keys(userAccountData).map(function (key) {
      return encodeURIComponent(key) + '=' + encodeURIComponent(userAccountData[key]);
    }).join('&');

    return this._http.put('http://10.41.131.180/NUDPrepTestBackEnd/user_account/UserAccountManagement.php', _parameter, { headers: headers }).subscribe((data) => {
      var responseJSON = data.json();
      console.log(responseJSON);
      return responseJSON;
    });

  }

  /*
  * ลบบัญชีผู้ใช้
  */
  deleteUserAccount(param) {
    /*
    * ตั้งค่า Header application/x-www-form-urlencode'
    */
    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');


    /*
    * จัดรูปข้อมูล
    */



    /*
    * pack parameter สำหรับส่งค่าไปแก้ไขบัญชีผู้ใช้
    */
    var _parameter = Object.keys(param).map(function (key) {
      return encodeURIComponent(key) + '=' + encodeURIComponent(param[key]);
    }).join('&');
    console.log(_parameter);

    const arg = new RequestOptions({
      headers: headers,
      body: _parameter
    });

    // tslint:disable-next-line:max-line-length
    this._http.delete('http://10.41.131.180/NUDPrepTestBackEnd/user_account/UserAccountManagement.php', arg).subscribe((data) => {
      console.log(data);
      //const _response = data.json();
      //console.log(_response);
    });

  }
}
