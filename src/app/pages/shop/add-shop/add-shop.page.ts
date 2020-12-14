import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { AlertService } from 'src/app/services/alert.service';
import { ShopService } from '../shop.service';
@Component({
  selector: 'app-add-shop',
  templateUrl: './add-shop.page.html',
  styleUrls: ['./add-shop.page.scss'],
})
export class AddShopPage implements OnInit {

  addShopForm = this.formBuilder.group({
    shop_name: ['',[Validators.required]],
    shop_phone: ['',[Validators.required]],
    state: ['West Bengal',Validators.required],
    city: ['',[Validators.required]],
    shop_address: [''],
  });
  
  constructor(private loading : AlertService,private formBuilder: FormBuilder,private router: Router,private shop : ShopService,public modalController: ModalController) {
   }

   doRefresh(event) {
    console.log('Begin async operation');
  
    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }

 // dismiss tha modal .....................
  dismiss() {
    this.modalController.dismiss({
      'dismissed': true
    });
  }
 // Create a new shop .........................
  addShop()
  {
    console.log(this.addShopForm.value);
    this.loading.present();
    this.shop.addShop(this.addShopForm.value).subscribe(
    data => {
      console.log(data);
      localStorage.setItem('shop', JSON.stringify({ id : data.data}));
      this.loading.dismiss();
      this.loading.presentToastSuccess(data.success);
      this.dismiss();
      this.router.navigateByUrl('/deshboard');
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
