import { Component, OnInit } from '@angular/core';
import { LoginService } from '../service/login.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private login: LoginService, private router: Router, private activatedRoute: ActivatedRoute) {
    
  }

  ngOnInit() {
  }

}
