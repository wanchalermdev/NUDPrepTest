import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Router } from '@angular/router';

@Injectable()
export class SchoolManagementService {

  private _host;
  private responseAllSchool;

  constructor(private _http: Http, _router: Router) {
    this._host = "http://10.41.131.180/NUDPrepTestBackEnd/school/schoolManagement.php";
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


}
