import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonInfiniteScroll } from '@ionic/angular';
import { AlertService } from 'src/app/services/alert.service';
import { CategoryService } from '../category.service';
@Component({
  selector: 'app-show-category',
  templateUrl: './show-category.page.html',
  styleUrls: ['./show-category.page.scss'],
})
export class ShowCategoryPage implements OnInit {
  categories=[];
  value:any=0;
  constructor(private loading : AlertService , private router: Router,private category : CategoryService) { 
    //this.getCategories();
  }

  loadData(event) {
    setTimeout(() => {
      this.getCategories();
      event.target.complete();
    }, 2000);
  }
  
  doRefresh(event) {
    console.log('Begin async operation');
    setTimeout(() => {
      this.getCategories();
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }
  ionViewWillEnter() {
    this.getCategories();
  }
  getCategories() {
    this.loading.present();
    console.log(this.value);
    const postData = new FormData();
    postData.append('skip_id', JSON.stringify(this.value));
    this.category.getCategories(postData).subscribe(
    data => {
      console.log(data);
      if(data.categories.length>0)
      {
        this.value = this.value + data.categories.length;
        this.categories.push(data.categories);
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
