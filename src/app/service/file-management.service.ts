import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
@Injectable()
export class FileManagementService {

  private _host;
  constructor(private _http: Http) {
    //this._host = 'http://10.41.131.180/NUDPrepTestBackEnd/exam_center/file/fileModel.php';
    this._host = 'http://localhost/NUDPrepTestBackEnd/exam_center/file/fileModel.php';
  }

  
  /*
  * ขอข้อมูลกรรมการครั้งละ 1 กรรมการ
  */
  getFile(param) {
    var _parameter = Object.keys(param).map(function (key) {
      return encodeURIComponent(key) + '=' + encodeURIComponent(param[key]);
    }).join('&');
    return this.requestFile('?' + _parameter);
  }

  private requestFile(param) {
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
  getAllFile() {
    return this.requestAllFile();
  }

  private requestAllFile() {
    return new Promise((reslove, reject) => {
      return this._http.get(this._host)
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
  createFile(param) {
    var _parameter = Object.keys(param).map(function (key) {
      return encodeURIComponent(key) + '=' + encodeURIComponent(param[key]);
    }).join('&');
    return this.requestCreateFile(_parameter);
  }


  private requestCreateFile(param) {
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
  editFile(param) {
    var _parameter = Object.keys(param).map(function (key) {
      return encodeURIComponent(key) + '=' + encodeURIComponent(param[key]);
    }).join('&');
    return this.requestEditFile(_parameter);
  }

  private requestEditFile(param) {
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

  deleteFile(param) {
    var _parameter = Object.keys(param).map(function (key) {
      return encodeURIComponent(key) + '=' + encodeURIComponent(param[key]);
    }).join('&');
    return this.requestDeleteFile(_parameter);
  }

  private requestDeleteFile(param) {
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
