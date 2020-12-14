import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalController} from '@ionic/angular';
import { AlertService } from 'src/app/services/alert.service';
import { BrandService } from '../brand.service';

@Component({
  selector: 'app-add-brand',
  templateUrl: './add-brand.page.html',
  styleUrls: ['./add-brand.page.scss'],
})
export class AddBrandPage implements OnInit {

  
  addBrandForm = this.formBuilder.group({
    brand_name: ['',[Validators.required]],
  });

  constructor(private loading : AlertService,private formBuilder: FormBuilder,private router: Router,private brand:BrandService,public modalController: ModalController) { 
  }

  doRefresh(event) {
    console.log('Begin async operation');
  
    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }

 // Create a new shop .........................
 addBrand()
  {
    console.log(this.addBrandForm.value);
    this.loading.present();
    this.brand.addBrand(this.addBrandForm.value).subscribe(
    data => {
      console.log(data);
      this.loading.dismiss();
      this.loading.presentToastSuccess(data.success);
      if(this.router.url == "/add-product"){
        this.modalController.dismiss(); 
      }
      if(this.router.url != "/add-product")
      {
        this.router.navigateByUrl('/show-brands');
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
