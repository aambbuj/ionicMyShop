import { Component, Input, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular'
import {FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/services/alert.service';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-sell-product',
  templateUrl: './sell-product.page.html',
  styleUrls: ['./sell-product.page.scss'],
})
export class SellProductPage implements OnInit {
  data = this.navParams.get('productDetails');
  totalAmount:number;

  sellProductForm = this.formBuilder.group({
    total_selling_price: ['',Validators.required],
  });

  productDetails : any;
  
  constructor(public modalController: ModalController,private navParams: NavParams,private loading : AlertService,private formBuilder: FormBuilder,private router: Router,private product : ProductService) {
    this.productDetails = this.data;
    console.log(this.productDetails);
    this.totalPrice();
   }

   doRefresh(event) {
    console.log('Begin async operation');
  
    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }

  loadData(event) {
    setTimeout(() => {
      // this.getCategories();
      event.target.complete();
    }, 2000);
  }
  
   totalPrice()
   {
    for (let i = 0; i < this.productDetails.length; i++) {
      if (this.totalAmount == undefined) {
        this.totalAmount = parseInt(this.productDetails[i].selling_price);
      } else {
        this.totalAmount  = this.totalAmount + parseInt(this.productDetails[i].selling_price);
      }
    }
   }

   addProduct()
   {
    this.modalController.dismiss(this.productDetails);
   }

   removeItem(index)
   {
    this.totalAmount=0;
    if(index > -1){
      this.productDetails.splice(index, 1);
      for (let i = 0; i < this.productDetails.length; i++) {
        if (this.totalAmount==0) {
          this.totalAmount = parseInt(this.productDetails[i].selling_price);
        } else {
          this.totalAmount  = this.totalAmount + parseInt(this.productDetails[i].selling_price);
        }
      }
    }
   }

   closeModal()
   {
    this.productDetails.splice(0, this.productDetails.length);
    this.modalController.dismiss(); 
   }

   sellingProduct()
   {
     console.log(this.sellProductForm.value);
     this.loading.present();
     const postData = new FormData();
     postData.append('sell_products', JSON.stringify(this.productDetails));
     postData.append('total_amount', JSON.stringify(this.totalAmount));
     postData.append('total_selling_price', JSON.stringify(this.sellProductForm.value.total_selling_price));
     this.product.sellingProduct(postData).subscribe(
     data => {
       console.log(data);
         if(data.success)
         {
           this.loading.dismiss();
           this.loading.presentToastSuccess(data.success);
           this.productDetails.splice(0, this.productDetails.length);
           this.modalController.dismiss(data);
           this.productDetails.splice(0, 1);
           this.router.navigateByUrl('/show-products');
         }
         if(data.error)
         {
           this.loading.dismiss();
           this.loading.presentToastWarning(data.error);
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
