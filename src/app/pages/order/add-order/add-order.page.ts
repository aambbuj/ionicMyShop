import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/services/alert.service';
import { OrderService } from '../../order/order.service';
import { Camera ,CameraOptions } from '@ionic-native/camera/ngx';

@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.page.html',
  styleUrls: ['./add-order.page.scss'],
})
export class AddOrderPage implements OnInit {

  getOrderForm = this.formBuilder.group({
    shop_id: ['',[Validators.required]],
    order_image: [''],
    order_type: ['',[Validators.required]],
    product_name: ['',[Validators.required]],
    customer_phone: ['',[Validators.required]],
    order_price: ['',[Validators.required]],
    advance_payment: ['',[Validators.required]],
    delivery_date: ['',[Validators.required]],
    
  });
  ifLogin: any;
  photo: string;
    
  constructor(private loading : AlertService,private camera: Camera,private formBuilder: FormBuilder,private router: Router,private order: OrderService) {
    let shop = JSON.parse(localStorage.getItem('shop'));
    this.getOrderForm.controls.shop_id.setValue(shop ? shop.id[0].id : null);
    //this.presentAlertConfirm();
   }

  doRefresh(event) {
    console.log('Begin async operation');
  
    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }

    // open camera 
    captureImage() {
      this.camera.getPicture({
          quality: 30,
          allowEdit: true,
          saveToPhotoAlbum:true,
          destinationType: this.camera.DestinationType.DATA_URL,
          encodingType: this.camera.EncodingType.JPEG,
          mediaType: this.camera.MediaType.PICTURE 
      }).then((imageData) => {
        let base64Image = 'data:image/jpeg;base64,' + imageData;
        this.photo = base64Image;
        this.getOrderForm.controls.order_image.setValue(this.photo ? imageData : null);
      }, (err) => {
        console.log(err);
        this.loading.presentToastWarning(err);
        // Handle error
      });
    }
  
  
       /// select image from PHOTOLIBRARY
       takePhoto() {
        this.camera.getPicture({
          quality: 30,
          sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
          destinationType: this.camera.DestinationType.DATA_URL,
          encodingType: this.camera.EncodingType.JPEG,
          mediaType: this.camera.MediaType.PICTURE,
          correctOrientation: true,
        }).then((dataImage) => {
          let base64Image = 'data:image/jpeg;base64,' + dataImage;
          this.photo = base64Image;
          this.getOrderForm.controls.order_image.setValue(this.photo ? dataImage : null);
        }, (err) => {
          // Handle error
        });
      }
      

  addOrders()
  {
    this.loading.present();
    this.getOrderForm.controls.order_type.setValue(this.getOrderForm.value.order_type ? this.getOrderForm.value.order_type.toLocaleUpperCase() : null);
    this.order.addOrder(this.getOrderForm.value).subscribe(
    data => {
      console.log(data);
      this.loading.dismiss();
      this.loading.presentToastSuccess(data.success);
      this.router.navigateByUrl('/show-orders');
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
