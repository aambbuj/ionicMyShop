import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/services/alert.service';
import { AddDistributorService } from './add-distributor.service';

@Component({
  selector: 'app-add-distributor',
  templateUrl: './add-distributor.page.html',
  styleUrls: ['./add-distributor.page.scss'],
})
export class AddDistributorPage implements OnInit {

  addDistributorForm = this.formBuilder.group({
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
  
  constructor(private loading : AlertService,private formBuilder: FormBuilder,private router: Router,private addDistubor: AddDistributorService) {
    this.ifLogin = JSON.parse(localStorage.getItem('user'));
   }

  doRefresh(event) {
    console.log('Begin async operation');
  
    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }

  addDIstributor()
  {
    this.loading.present();
    this.addDistubor.addDistbutor(this.addDistributorForm.value).subscribe(
    data => {
      console.log(data);
      this.loading.dismiss();
      this.loading.presentToastSuccess(data.success);
      this.router.navigateByUrl('show-distributors');
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
