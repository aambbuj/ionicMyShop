import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnvService {
  API_URL = 'http://localhost/laravelMyShop/public/api/';
  IMG_URL = 'http://localhost/laravelMyShop/public/';
  paymetURL = 'http://localhost/laravelMyShop/public/payment';
 // API_URL = 'https://my-shop.in/MyShop/public/api/';
  //IMG_URL = 'https://my-shop.in/MyShop/public/';


  
  //API_URL = 'https://my-shop.in/laravelMyShop/public/api/';

  constructor() { }
}
