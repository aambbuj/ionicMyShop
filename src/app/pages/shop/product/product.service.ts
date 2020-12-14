import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EnvService } from 'src/app/services/env.service';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  ifLogin: any;

  constructor(private http: HttpClient,private env: EnvService) {
    this.ifLogin = JSON.parse(localStorage.getItem('user'));

   }

   addProduct(postData):Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': this.ifLogin["token_type"]+" "+this.ifLogin["access_token"]
    });
    return this.http.post<any>(this.env.API_URL + 'auth/add-product',postData,{ headers: headers })
    .pipe(
      tap(user => {
        return user;
      })
    )
  }

  getProducts()
  {
    const headers = new HttpHeaders({
      'Authorization': this.ifLogin["token_type"]+" "+this.ifLogin["access_token"]
    });
    return this.http.get<any>(this.env.API_URL + 'auth/get-products',{ headers: headers })
    .pipe(
      tap(user => {
        return user;
      })
    )
  }

  uploadTakePhoto(postData):Observable<any>
  {
    const headers = new HttpHeaders({
      'Authorization': this.ifLogin["token_type"]+" "+this.ifLogin["access_token"]
    });
    return this.http.post<any>(this.env.API_URL + 'auth/upload-take-photo',postData,{ headers: headers })
    .pipe(
      tap(user => {
        return user;
      })
    )
  }

  brandWiseCategory()
  {
    const headers = new HttpHeaders({
      'Authorization': this.ifLogin["token_type"]+" "+this.ifLogin["access_token"]
    });
    return this.http.get<any>(this.env.API_URL + 'auth/brand-wise-category',{ headers: headers })
    .pipe(
      tap(user => {
        return user;
      })
    )
  }

  sellingProduct(products)
  {
    const headers = new HttpHeaders({
      'Authorization': this.ifLogin["token_type"]+" "+this.ifLogin["access_token"]
    });
    return this.http.post<any>(this.env.API_URL + 'auth/selling-product',products,{ headers: headers })
    .pipe(
      tap(user => {
        return user;
      })
    )
  }
}
