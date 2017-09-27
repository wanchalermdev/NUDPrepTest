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
    //this._host = 'http://10.41.131.180/NUDPrepTestBackEnd/user_account/UserAccountManagement.php';
    this._host = 'http://www.satit.nu.ac.th/NUDPrepTestBackEnd/user_account/UserAccountManagement.php';
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

    this._http.get(this._host + '?' + _parameter).subscribe((data) => {
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
        var json;
        try{
           json = res.json();
        }catch(e){
          console.log(e);
        }
        return {'operation': 'success'};
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

    return this._http.put(this._host, _parameter, { headers: headers }).subscribe((data) => {
      var responseJSON = data.json();
      return responseJSON;
    });

  }

  /*
  * ลบบัญชีผู้ใช้
  */
  deleteUserAccount(param) {
    return this.requestDeleteUserAccount(param);
  }

  private requestDeleteUserAccount(param) {
    return new Promise((reslave, reject) => {
      /*
          * ตั้งค่า Header application/x-www-form-urlencode'
          */
      var headers = new Headers();
      headers.append('Content-Type', 'application/x-www-form-urlencoded');

      /*
      * pack parameter สำหรับส่งค่าไปแก้ไขบัญชีผู้ใช้
      */
      var _parameter = Object.keys(param).map(function (key) {
        return encodeURIComponent(key) + '=' + encodeURIComponent(param[key]);
      }).join('&');

      const arg = new RequestOptions({
        headers: headers,
        body: _parameter
      });

      return this._http.delete(this._host, arg).map((res: Response) => {
        var json = res.json();
        json.header = res.headers;
        return json.body;
      }).subscribe((data) => {
        reslave(data);
      },error => {
        reject(error);
      });
    });
  }
}
