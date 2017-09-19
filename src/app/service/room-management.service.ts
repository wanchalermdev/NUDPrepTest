import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Router } from '@angular/router';

@Injectable()
export class RoomManagementService {

  private _host;

  constructor(private _http: Http) {
     this._host = 'http://10.41.131.180/NUDPrepTestBackEnd/exam_center/room/roomModel.php';
    //this._host = 'http://localhost/NUDPrepTestBackEnd/exam_center/room/roomModel.php';
  }

  private convertParam(param) {
    var _parameter = Object.keys(param).map(function (key) {
      return encodeURIComponent(key) + '=' + encodeURIComponent(param[key]);
    }).join('&');
    return _parameter;
  }


  /*
  * ขอข้อมูลอาคารครั้งละ 1 อาคาร
  */
  getExamRoom(param) {
    var _parameter = Object.keys(param).map(function (key) {
      return encodeURIComponent(key) + '=' + encodeURIComponent(param[key]);
    }).join('&');
    return this.requestExamRoom('?' + _parameter);
  }

  private requestExamRoom(param) {
    return new Promise((reslove, reject) => {
      return this._http.get(this._host + param)
        .map((res: Response) => {
          console.log(res);
          var json = res.json();
          if (json['operation'] === 'success') {
            return json.body;
          } else {
            console.log(res);
          }
        })
        .subscribe((data) => {
          reslove(data);
        }, error => {
          reject(error);
        });
    });
  }

  /*
  * ขอข้อมูลอาคารทั้งหมด
  */
  getAllExamRoom(param) {
    return this.requestAllExamRoom(this.convertParam(param));
  }

  private requestAllExamRoom(param) {
    return new Promise((reslove, reject) => {
      return this._http.get(this._host + '?' + param)
        .map((res: Response) => {
          console.log(res);
          var json = res.json();
          if (json['operation'] === 'success') {
            return json.body;
          } else {
            console.log(res);
          }
        })
        .subscribe((data) => {
          reslove(data);
        }, error => {
          reject(error);
        });
    });
  }

  /*
  * สร้างขัอมูลอาคารใหม่
  */
  createExamRoom(param) {
    var _parameter = Object.keys(param).map(function (key) {
      return encodeURIComponent(key) + '=' + encodeURIComponent(param[key]);
    }).join('&');
    return this.requestCreateExamRoom(_parameter);
  }


  private requestCreateExamRoom(param) {
    return new Promise((reslove, reject) => {
      /*
      * ตั้งค่า Header application/x-www-form-urlencode'
      */
      var headers = new Headers();
      headers.append('Content-Type', 'application/x-www-form-urlencoded');

      this._http.post(this._host, param, { headers: headers }).map((res: Response) => {
        console.log(res);
        var json = res.json();
        if (json['operation'] === 'success') {
          return json.body;
        } else {
          console.log(res);
        }
      }).subscribe((data) => {
        /*
          *  คืนค่า data ไปให้ .map ด้านบน
          */
        reslove(data);
      }, error => {
        return reject(error);
      });
    });
  }

  /*
  * แก้ไขข้อมูลอาคาร
  */
  editExamRoom(param) {
    var _parameter = Object.keys(param).map(function (key) {
      return encodeURIComponent(key) + '=' + encodeURIComponent(param[key]);
    }).join('&');
    return this.requestEditExamRoom(_parameter);
  }

  private requestEditExamRoom(param) {
    return new Promise((reslove, reject) => {
      /*
      * ตั้งค่า Header application/x-www-form-urlencode'
      */
      var headers = new Headers();
      headers.append('Content-Type', 'application/x-www-form-urlencoded');

      return this._http.put(this._host, param, { headers: headers }).map((res: Response) => {
        console.log(res);
        /*
        *   รับค่า data มาเก็บไว้ใน res
        */
        var json = res.json();
        if (json['operation'] === 'success') {
          console.log(json);
          const abc = { 'operation': 'fail' };
          return abc;
          //return json.body;
        } else {
          console.log(res);
        }

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
  * ลบข้อมูลอาคาร
  */

  deleteExamRoom(param) {
    var _parameter = Object.keys(param).map(function (key) {
      return encodeURIComponent(key) + '=' + encodeURIComponent(param[key]);
    }).join('&');
    return this.requestDeleteExamRoom(_parameter);
  }

  private requestDeleteExamRoom(param) {
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

      this._http.delete(this._host, arg).map((res: Response) => {
        console.log(res);
        const json = res.json();
        if (json['operation'] === 'success') {
          return json.body;
        } else {
          console.log(res);
        }
      }).subscribe((data) => {
        reslove(data);
      }, error => {
        reject(error);
      });
    });
  }

}
