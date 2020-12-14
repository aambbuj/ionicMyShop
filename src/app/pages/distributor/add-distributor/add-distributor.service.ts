import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EnvService } from 'src/app/services/env.service';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AddDistributorService {
  ifLogin: any;

  constructor(private http: HttpClient,private env: EnvService) {
    this.ifLogin = JSON.parse(localStorage.getItem('user'));

   }

  addDistbutor(postData):Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': this.ifLogin["token_type"]+" "+this.ifLogin["access_token"]
    });
    return this.http.post<any>(this.env.API_URL + 'auth/add-distributor',postData,{ headers: headers })
    .pipe(
      tap(user => {
        return user;
      })
    )
  }

  // addDistbutor(postData):Observable<any> {
  //   const headers = new HttpHeaders({
  //     'Authorization': this.ifLogin["token_type"]+" "+this.ifLogin["access_token"]
  //   });
  //   return this.http.get<any>(this.env.API_URL + 'auth/user2',{ headers: headers })
  //   .pipe(
  //     tap(user => {
  //       return user;
  //     })
  //   )
  // }
}
