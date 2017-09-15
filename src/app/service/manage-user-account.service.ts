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
      this.allUserData = this.allUserData['body'];
      //console.log(JSON.stringify(this.allUserData));
      //this.setAllUserData(this.allUserData['body']);
      
      window.sessionStorage.setItem('body', JSON.stringify(this.allUserData));
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
    setTimeout(() => {
      this.getAllUserAccountFromBackEnd();
    }, 2000);
    
    return this.allUserData;
  }
  
}
