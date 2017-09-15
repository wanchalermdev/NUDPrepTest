import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Response } from '@angular/http';

@Injectable()
export class ManageUserAccountService {

  private allUserData;

  constructor(private _http: Http) {
      this.allUserData = null;
  }

  getAllUserAccountFromBackEnd() {

   this._http.get('http://10.41.131.180/NUDPrepTestBackEnd/user_account/UserAccountManagement.php').subscribe((data) => {
    

    this.allUserData = data.json();
    

    if (this.allUserData['operation'] == "success"){
      this.setAllUserData(this.allUserData['body']);
    }
    
    // console.log(this.allUserData);

    });
    // console.log(this.allUserData);
    // return this.allUserData;
  }
  setAllUserData(data) {
    this.allUserData = data;
    // console.log(data);
  }
  getAllUserAccount(){
    this.getAllUserAccountFromBackEnd();
    return this.allUserData;
  }
  
}
