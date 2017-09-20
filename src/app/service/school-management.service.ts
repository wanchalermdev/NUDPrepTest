import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Router } from '@angular/router';

@Injectable()
export class SchoolManagementService {

  private _host;
  private responseAllSchool;

  constructor(private _http: Http, _router: Router) {
    //this._host = "http://10.41.131.180/NUDPrepTestBackEnd/school/schoolManagement.php";
    this._host = "http://www.satit.nu.ac.th/NUDPrepTestBackEnd/school/schoolManagement.php";
    this.responseAllSchool = null;
  }

  /*
  * Method ไปขอข้อมูลโรงเรียนทั้งหมด
  */
  getAllSchool() {
    return this.requestAllSchool();
  }

  private requestAllSchool() {
    return new Promise((resolve, reject) => {
      this._http.get(this._host)
        .map((res: Response) => {
          /*
          * รับค่า data มาจาก .subscribe เก็บไว้ใน res
          */
          var json = res.json();
          json.headers = res.headers;
          return json.body;
        })
        .subscribe((data) => {
          /*
          *  คืนค่า data ไปให้ .map ด้านบน
          */
          resolve(data);
        }, error => {
          return reject(error);
        });
    });
  }


  /*
  * Method ไปขอข้อมูลครั้งละ 1 โรงเรียน
  */
  getSchool(param) {
    var _parameter = Object.keys(param).map(function (key) {
      return encodeURIComponent(key) + '=' + encodeURIComponent(param[key]);
    }).join('&');

    return this.requestSchool("?" + _parameter);
  }

  private requestSchool(param) {
    return new Promise((resolve, reject) => {
      this._http.get(this._host + param).map((res: Response) => {
        var json = res.json();
        json.headers = res.headers;
        return json.body;
      }).subscribe((data) => {
        /*
          *  คืนค่า data ไปให้ .map ด้านบน
          */
        resolve(data);
      }, error => {
        return reject(error);
      });
    });
  }

  /*
  * Method สร้างข้อมูลโรงเรียนใหม่
  */
  createNewSchool(param) {
    const _parameter = Object.keys(param).map(function (key) {
      return encodeURIComponent(key) + '=' + encodeURIComponent(param[key]);
    }).join('&');
    return this.requestCreateNewSchool(_parameter);
  }

  private requestCreateNewSchool(param) {


    return new Promise((resolve, reject) => {
      /*
      * ตั้งค่า Header application/x-www-form-urlencode'
      */
      var headers = new Headers();
      headers.append('Content-Type', 'application/x-www-form-urlencoded');

      this._http.post(this._host, param, { headers: headers }).map((res: Response) => {
        var json = res.json();
        json.headers = res.headers;
        return json.body;
      }).subscribe((data) => {
        /*
          *  คืนค่า data ไปให้ .map ด้านบน
          */
        resolve(data);
      }, error => {
        return reject(error);
      });
    });
  }

  /*
  * Method แก้ไขข้อมูลโรงเรียน
  */
  editSchool(param) {
    /*
    * pack parameter สำหรับส่งค่าไปแก้ไขบัญชีผู้ใช้
    */
    var _parameter = Object.keys(param).map(function (key) {
      return encodeURIComponent(key) + '=' + encodeURIComponent(param[key]);
    }).join('&');
    return this.requestEditSchool(_parameter);
  }

  private requestEditSchool(param) {

    return new Promise((reslove, reject) => {
      /*
      * ตั้งค่า Header application/x-www-form-urlencode'
      */
      var headers = new Headers();
      headers.append('Content-Type', 'application/x-www-form-urlencoded');

      this._http.put(this._host, param, { headers: headers }).map((res: Response) => {
        /*
        *   รับค่า data มาเก็บไว้ใน res
        */
        var json = res.json();
        json.headers = res.headers;
        return json.body;

      }).subscribe((data) => {
        /*
        * ส่งค่า data ไปให้ method .map ด้านบน
        */
        reslove(data);
      }, error => {
        return reject(error);
      });

    });
  }

  /*
  * Method ลบข้อมูลโรงเรียน
  */
  deleteSchool(param) {
    /*
    * pack parameter สำหรับส่งค่าไปแก้ไขบัญชีผู้ใช้
    */
    var _parameter = Object.keys(param).map(function (key) {
      return encodeURIComponent(key) + '=' + encodeURIComponent(param[key]);
    }).join('&');
    return this.requestDeleteSchool(_parameter);
  }

  private requestDeleteSchool(param) {
    return new Promise((reslove, reject) => {
      /*
    * ตั้งค่า Header application/x-www-form-urlencode'
    */
      var headers = new Headers();
      headers.append('Content-Type', 'application/x-www-form-urlencoded');

      const arg = new RequestOptions({
        headers: headers,
        body: param
      });
      this._http.delete(this._host , arg).map((res: Response) => {
        var json = res.json();
        json.headers = res.headers;
        return json.body;
      }).subscribe((data) => {
        reslove(data);
      }, error => {
        reject(error);
      });
    });
  }

}
