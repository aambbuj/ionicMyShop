import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/services/alert.service';
import { SellerService } from '../seller.service';
@Component({
  selector: 'app-add-seller',
  templateUrl: './add-seller.page.html',
  styleUrls: ['./add-seller.page.scss'],
})
export class AddSellerPage implements OnInit {
  addSellerForm = this.formBuilder.group({
    name: ['',[Validators.required]],
    email: ['',[Validators.required]],
    password: ['',[Validators.required]],
    phone: ['',[Validators.required]],
    alt_phone: [''],
    country: ['India',Validators.required],
    state: ['West Bengal',Validators.required],
    city: ['',[Validators.required]],
    address: ['',[Validators.required]],
    pin: ['',[Validators.required]],
  });
  ifLogin: any;
  
  constructor(private loading : AlertService,private formBuilder: FormBuilder,private router: Router,private addSellers: SellerService) {
    this.ifLogin = JSON.parse(localStorage.getItem('user'));
   }

  doRefresh(event) {
    console.log('Begin async operation');
  
    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }

  addSeller()
  {
    this.loading.present();
    console.log(this.addSellerForm.value);
    this.addSellers.addSeller(this.addSellerForm.value).subscribe(
    data => {
      console.log(data);
      this.loading.dismiss();
      this.loading.presentToastSuccess(data.success);
      this.router.navigateByUrl('show-sellers');
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
