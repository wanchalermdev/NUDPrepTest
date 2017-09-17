import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
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
  deleteUserAccount(param){
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
    this._http.delete('http://10.41.131.180/NUDPrepTestBackEnd/user_account/UserAccountManagement.php', arg).subscribe((data)=>{
      console.log(data);
      //const _response = data.json();
      //console.log(_response);
    });

  }
}
