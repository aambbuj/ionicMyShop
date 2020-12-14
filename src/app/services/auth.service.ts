import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loginInfo: any;
  sessionData: any;


  constructor() {
    this.loginInfo = JSON.parse(localStorage.getItem('user'));
    this.sessionData = this.loginInfo;
   }  

  loginUser():boolean{
    if (this.loginInfo) {
        return true;
    } else {
        return false;
    }
  }
}
