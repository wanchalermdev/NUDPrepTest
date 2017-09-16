import { Component, OnInit } from '@angular/core';
import { ManageUserAccountService } from '../../../service/manage-user-account.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-user-account',
  templateUrl: './view-user-account.component.html',
  styleUrls: ['./view-user-account.component.css']
})



export class ViewUserAccountComponent implements OnInit {
  private userData = { };
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
    }, 100);
  }

}
