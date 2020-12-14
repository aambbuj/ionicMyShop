import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EnvService } from '../services/env.service';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  token: any;
  isLoggedIn: boolean;
  ifLogin: any;

  constructor( private http: HttpClient,private env: EnvService) {
    this.ifLogin = JSON.parse(localStorage.getItem('user'));
     }
    login(email: String, password: String) {
      return this.http.post(this.env.API_URL + 'auth/login',
        {email: email, password: password});
    }
    
    logout():Observable<any> {
      const headers = new HttpHeaders({
        'Authorization': this.ifLogin["token_type"]+" "+this.ifLogin["access_token"]
      });
      return this.http.get<any>(this.env.API_URL + 'auth/logout',{ headers: headers })
      .pipe(
        tap(user => {
          return user;
        })
      )
    }
}
