import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { AlertService } from 'src/app/services/alert.service';
import { BrandService } from '../../brand/brand.service';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.page.html',
  styleUrls: ['./add-category.page.scss'],
})
export class AddCategoryPage implements OnInit {

  addCategoryForm = this.formBuilder.group({
    brand_id: ['',[Validators.required]],
    category_name: ['',[Validators.required]],
  });
  allBrands: any;
  constructor(public modalController: ModalController,private loading : AlertService,private formBuilder: FormBuilder,private router: Router,private category : CategoryService,private brand : BrandService) { 
    
  }

  doRefresh(event) {
    console.log('Begin async operation');
    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }

  ionViewWillEnter() {
    this.getAllBrands();
    console.log(this.router.url);
  }

  getAllBrands()
  {
    this.loading.present();
    this.brand.getAllBrands().subscribe(
    data => {
      console.log(data);
      this.allBrands = data;
      this.loading.dismiss();
    }, onerror => {
    if (onerror.status==0) {
      this.loading.presentToastWarning('check your internet connection.');
      this.loading.dismiss();
    } else if(onerror.status==500) {
    this.loading.dismiss();
    this.loading.presentToastError('Server error.');
    }
    });
  }
  

 // Create a new shop .........................
 addCategory(){
    console.log(this.addCategoryForm.value);
    this.loading.present();
    this.category.addCategory(this.addCategoryForm.value).subscribe(
    data => {
      console.log(data);
      this.loading.dismiss();
      this.loading.presentToastSuccess(data.success);

      if(this.router.url == "/add-product"){
        this.modalController.dismiss(); 
      }
      if(this.router.url != "/add-product")
      {
        this.router.navigateByUrl('/show-categories');
      }

    }, onerror => {
    if (onerror.status==0) {
      this.loading.presentToastWarning('check your internet connection.');
      this.loading.dismiss();
    } else if(onerror.status==500) {
    this.loading.dismiss();
    this.loading.presentToastError('Server error.');
    }
    });
  }
  ngOnInit() {
  }

}
