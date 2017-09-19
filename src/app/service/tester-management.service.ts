import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
@Injectable()
export class TesterManagementService {

  
  private _host;
  constructor(private _http: Http) {
    this._host = 'http://10.41.131.180/NUDPrepTestBackEnd/exam_center/tester/testerModel.php';
    //this._host = 'http://localhost/NUDPrepTestBackEnd/exam_center/tester/testerModel.php';
  }

  private converParam(param){
    var _parameter = Object.keys(param).map(function (key) {
      return encodeURIComponent(key) + '=' + encodeURIComponent(param[key]);
    }).join('&');
    return _parameter;
  }

  
  /*
  * ขอข้อมูลกรรมการครั้งละ 1 กรรมการ
  */
  getTester(param) {
    var _parameter = Object.keys(param).map(function (key) {
      return encodeURIComponent(key) + '=' + encodeURIComponent(param[key]);
    }).join('&');
    return this.requestTester('?' + _parameter);
  }

  private requestTester(param) {
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
  getAllTester(param) {
    return this.requestAllTester(this.converParam(param));
  }

  private requestAllTester(param) {
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
  createTester(param) {
    var _parameter = Object.keys(param).map(function (key) {
      return encodeURIComponent(key) + '=' + encodeURIComponent(param[key]);
    }).join('&');
    return this.requestCreateTester(_parameter);
  }


  private requestCreateTester(param) {
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
  * แก้ไขข้อมูลกรรมการ
  */
  editTester(param) {
    var _parameter = Object.keys(param).map(function (key) {
      return encodeURIComponent(key) + '=' + encodeURIComponent(param[key]);
    }).join('&');
    return this.requestEditTester(_parameter);
  }

  private requestEditTester(param) {
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

  deleteTester(param) {
    var _parameter = Object.keys(param).map(function (key) {
      return encodeURIComponent(key) + '=' + encodeURIComponent(param[key]);
    }).join('&');
    return this.requestDeleteTester(_parameter);
  }

  private requestDeleteTester(param) {
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
