import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonInfiniteScroll } from '@ionic/angular';
import { AlertService } from 'src/app/services/alert.service';
import { ShopService } from '../shop.service';
@Component({
  selector: 'app-show-shop',
  templateUrl: './show-shop.page.html',
  styleUrls: ['./show-shop.page.scss'],
})
export class ShowShopPage implements OnInit {
  shops: any;
  // Data passed in by componentProps
   firstName: string;
  lastName: string;
  middleInitial: string;
  constructor(private loading : AlertService , private router: Router,private shop : ShopService) { 
  }

  

  getShop() {
    this.loading.present();
    this.shop.getShop().subscribe(
    data => {
      console.log(data.data);
      
      this.shops = data.data;
      this.loading.dismiss();
    }, onerror => {
    if (onerror.status==0) {
      this.loading.presentToastWarning('check your internet connection.');
      this.loading.dismiss();
    } else if(onerror.status==500) {
    this.loading.presentToastError('Server error.');
    this.loading.dismiss();
    }
    });
  }

  loadData(event) {
    setTimeout(() => {
      console.log('Done');
      console.log(event);
      this.getShop();
      event.target.complete();
    }, 2000);
  }
  
  doRefresh(event) {
    console.log('Begin async operation');
    setTimeout(() => {
      this.getShop();
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }


  ionViewWillEnter() {
    this.getShop();
  }

  ngOnInit() {
  }

}
