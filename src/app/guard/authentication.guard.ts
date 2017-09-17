import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { LoginService } from '../service/login.service';

@Injectable()
export class AuthenticationGuard implements CanActivate {

  constructor (private login:LoginService){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      if(window.sessionStorage.getItem('login') == "true"){
        return  true;
     }else{
        return false;
     }
  }
}
