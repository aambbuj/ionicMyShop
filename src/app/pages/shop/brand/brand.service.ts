import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EnvService } from 'src/app/services/env.service';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class BrandService {
  ifLogin: any;

  constructor(private http: HttpClient,private env: EnvService) {
    this.ifLogin = JSON.parse(localStorage.getItem('user'));

   }

  addBrand(postData):Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': this.ifLogin["token_type"]+" "+this.ifLogin["access_token"]
    });
    return this.http.post<any>(this.env.API_URL + 'auth/add-brand',postData,{ headers: headers })
    .pipe(
      tap(user => {
        return user;
      })
    )
  }
// get brands with skip id ..................
  getBrands(skip_id)
  {
    const headers = new HttpHeaders({
      'Authorization': this.ifLogin["token_type"]+" "+this.ifLogin["access_token"]
    });
    return this.http.post<any>(this.env.API_URL + 'auth/get-brands',skip_id,{ headers: headers })
    .pipe(
      tap(user => {
        return user;
      })
    )
  }
  //get all brands ............ 
  getAllBrands()
  {
    const headers = new HttpHeaders({
      'Authorization': this.ifLogin["token_type"]+" "+this.ifLogin["access_token"]
    });
    return this.http.get<any>(this.env.API_URL + 'auth/get-all-brands',{ headers: headers })
    .pipe(
      tap(user => {
        return user;
      })
    )
  }
}
