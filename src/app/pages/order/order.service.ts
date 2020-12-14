import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { EnvService } from 'src/app/services/env.service';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  ifLogin: any;

  constructor(private http: HttpClient,private env: EnvService) { 
    this.ifLogin = JSON.parse(localStorage.getItem('user'));

  }

  getOrders(last_id)
  {
    const headers = new HttpHeaders({
    'Authorization': this.ifLogin["token_type"]+" "+this.ifLogin["access_token"]
    });
    return this.http.post<any>(this.env.API_URL + 'auth/get-orders',last_id,{ headers: headers })
    .pipe(
      tap(user => {
        return user;
      })
    )
  }

  addOrder(order)
  {
    const headers = new HttpHeaders({
    'Authorization': this.ifLogin["token_type"]+" "+this.ifLogin["access_token"]
    });
    return this.http.post<any>(this.env.API_URL + 'auth/add-order',order,{ headers: headers })
    .pipe(
      tap(user => {
        return user;
      })
    )
  }

  updateOrder(updateData)
  {
    const headers = new HttpHeaders({
    'Authorization': this.ifLogin["token_type"]+" "+this.ifLogin["access_token"]
    });
    return this.http.post<any>(this.env.API_URL + 'auth/update-order',updateData,{ headers: headers })
    .pipe(
      tap(user => {
        return user;
      })
    )
  }



  

}
