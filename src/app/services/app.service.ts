import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EnvService } from './env.service';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  ifLogin: any;

  constructor( private http: HttpClient,private env: EnvService) {
    //this.ifLogin = JSON.parse(localStorage.getItem('user'));
    }
  isSession()
  {
    var data = JSON.parse(localStorage.getItem('user'));
    return data;
  }
}
