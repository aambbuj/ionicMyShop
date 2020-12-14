
import { Component, OnInit ,ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import { IonInfiniteScroll } from '@ionic/angular';
import { AlertService } from 'src/app/services/alert.service';
import { BrandService } from '../brand.service';

@Component({
  selector: 'app-show-brand',
  templateUrl: './show-brand.page.html',
  styleUrls: ['./show-brand.page.scss'],
})
export class ShowBrandPage implements OnInit {
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  brands = [];
  value:any=0;

  constructor(private loading : AlertService , private router: Router,private brand : BrandService) { 
    //this.getBrands();
  }

  loadData(event) {
    setTimeout(() => {
      this.getBrands();
      event.target.complete();
    }, 2000);
  }
  
  doRefresh(event) {
    console.log('Begin async operation');
    setTimeout(() => {
     //this.getBrands();
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }
  ionViewWillEnter() {
    this.getBrands();
  }
  getBrands() {
    this.loading.present();
    console.log(this.value);
    const postData = new FormData();
    postData.append('skip_id', JSON.stringify(this.value));
    this.brand.getBrands(postData).subscribe(
    data => {
      if(data.length>0)
      {
        this.value = this.value + data.length;
        this.brands.push(data);
      }
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
  ngOnInit() {
  }



}
