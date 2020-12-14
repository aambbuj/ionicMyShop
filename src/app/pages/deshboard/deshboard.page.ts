import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/services/alert.service';
import { ShopService } from '../shop/shop.service';

@Component({
  selector: 'app-deshboard',
  templateUrl: './deshboard.page.html',
  styleUrls: ['./deshboard.page.scss'],
})
export class DeshboardPage implements OnInit {
  ifLogin: any;
  shops: any;
  constructor(private loading : AlertService , private router: Router,private shop : ShopService) { 
   this.ifLogin = JSON.parse(localStorage.getItem('user'));
  }
  
  doRefresh(event) {
    console.log('Begin async operation');
  
    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }

  products()
  {
    console.log('kkkkk')
  }

  ngOnInit() {
    //window.location.reload();
  }

}
