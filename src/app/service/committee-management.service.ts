import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

@Injectable()
export class CommitteeManagementService {

  private _host;
  constructor(private _http: Http) {
    this._host = 'http://10.41.131.180/NUDPrepTestBackEnd/exam_center/Committee/CommitteeModel.php';
    //this._host = 'http://www.satit.nu.ac.th/NUDPrepTestBackEnd/exam_center/committee/committeeModel.php';
  }

  private convertParam(param){
    var _parameter = Object.keys(param).map(function (key) {
      return encodeURIComponent(key) + '=' + encodeURIComponent(param[key]);
    }).join('&');
    return _parameter;
  }

  
  /*
  * ขอข้อมูลกรรมการครั้งละ 1 กรรมการ
  */
  getCommittee(param) {
    var _parameter = Object.keys(param).map(function (key) {
      return encodeURIComponent(key) + '=' + encodeURIComponent(param[key]);
    }).join('&');
    return this.requestCommittee('?' + _parameter);
  }

  private requestCommittee(param) {
    return new Promise((reslove, reject) => {
      return this._http.get(this._host + param)
        .map((res: Response) => {
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
  * ขอข้อมูลกรรมการทั้งหมด
  */
  getAllCommittee(param) {
    return this.requestAllCommittee(this.convertParam(param));
  }

  private requestAllCommittee(param) {
    return new Promise((reslove, reject) => {
      return this._http.get(this._host + '?' + param)
        .map((res: Response) => {
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
  * สร้างขัอมูลกรรมการใหม่
  */
  createCommittee(param) {
    var _parameter = Object.keys(param).map(function (key) {
      return encodeURIComponent(key) + '=' + encodeURIComponent(param[key]);
    }).join('&');
    return this.requestCreateCommittee(_parameter);
  }


  private requestCreateCommittee(param) {
    return new Promise((reslove, reject) => {
      /*
      * ตั้งค่า Header application/x-www-form-urlencode'
      */
      var headers = new Headers();
      headers.append('Content-Type', 'application/x-www-form-urlencoded');

      this._http.post(this._host, param, { headers: headers }).map((res: Response) => {
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
  * แก้ไขข้อมูลกรรมการ
  */
  editCommittee(param) {
    var _parameter = Object.keys(param).map(function (key) {
      return encodeURIComponent(key) + '=' + encodeURIComponent(param[key]);
    }).join('&');
    return this.requestEditCommittee(_parameter);
  }

  private requestEditCommittee(param) {
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
          const abc = {'operation': 'fail'};
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
  * ลบข้อมูลกรรมการ
  */

  deleteCommittee(param) {
    var _parameter = Object.keys(param).map(function (key) {
      return encodeURIComponent(key) + '=' + encodeURIComponent(param[key]);
    }).join('&');
    return this.requestDeleteCommittee(_parameter);
  }

  private requestDeleteCommittee(param) {
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
