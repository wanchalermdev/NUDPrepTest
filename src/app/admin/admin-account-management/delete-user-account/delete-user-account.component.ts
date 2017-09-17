import { Component, OnInit } from '@angular/core';
import { ManageUserAccountService } from '../../../service/manage-user-account.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-delete-user-account',
  templateUrl: './delete-user-account.component.html',
  styleUrls: ['./delete-user-account.component.css']
})
export class DeleteUserAccountComponent implements OnInit {

  private userData = {};
  constructor(private manageUserAccount: ManageUserAccountService, private _router: Router, private actRouter: ActivatedRoute) { }

  ngOnInit() {
    const user_id = this.actRouter.snapshot.params.id;

    const param = {
      id: user_id
    }


    this.manageUserAccount.getUserData(param);
    setTimeout(() => {
      var str = window.sessionStorage.getItem('body');
      window.sessionStorage.removeItem('body');
      this.userData = JSON.parse(str);
    }, 1000);
  }

  deleteAccount(elem){
    elem.preventDefault(); // คำสั่งไม่ให้รีเฟลชหน้าเพจ 
    const user_id = this.actRouter.snapshot.params.id;
    const param = {
      id: user_id
    };
    this.manageUserAccount.deleteUserAccount(param).then(response => {
      this._router.navigateByUrl('admin/account-management');
    });

  }
}
