import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/services/alert.service';
import { ProductService } from '../product.service';
import { AddBrandPage } from '../../brand/add-brand/add-brand.page';
import { AddCategoryPage } from '../../category/add-category/add-category.page';
import { Camera ,CameraOptions } from '@ionic-native/camera/ngx';
import {File, IWriteOptions, FileEntry} from '@ionic-native/file/ngx';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.page.html',
  styleUrls: ['./add-product.page.scss'],
})
export class AddProductPage implements OnInit {

  addProductForm = this.formBuilder.group({
    shop_id: ['',[Validators.required]],
    brand_id: ['',[Validators.required]],
    category_id: ['',Validators.required],
    image_id: [''],
    brand_name: ['',Validators.required],
    category_name: ['',Validators.required],
    product_name: ['',Validators.required],
    product_type: ['',Validators.required],
    purchase_price: ['',Validators.required],
    selling_price: ['',Validators.required],
    disc_sell_price: ['',Validators.required],
    qty: ['',Validators.required],
    total_pur_price: [''],
  });
  photo: string;
  uploadPhoto: any;
  brandWiseCategories: any;
  selectedCategories: any;
  shops: any;
  ifUploadPhoto: boolean=false;

   constructor(public modalController: ModalController, private camera: Camera,private loading : AlertService,private formBuilder: FormBuilder,private router: Router,private product : ProductService) {
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
      this.uploadPhoto = imageData;
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
        this.uploadPhoto = dataImage;
      }, (err) => {
        // Handle error
      });
    }

  ionViewWillEnter() {
    let shop = JSON.parse(localStorage.getItem('shop'));
    this.shops = shop
    this.addProductForm.controls.shop_id.setValue(this.shops ? this.shops.id[0].id:'');
    console.log(this.addProductForm.value);
    this.brandWiseCategory();
  }

  brandWiseCategory(){
    this.loading.present();
    this.product.brandWiseCategory().subscribe(
    data => {
      console.log(data);
      this.brandWiseCategories = data;
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

  pushCategory()
  {
    for (let i = 0; i<this.brandWiseCategories.length; i++) {
      if (this.brandWiseCategories[i].id == this.addProductForm.value.brand_id) {
          this.selectedCategories = this.brandWiseCategories[i].categories;
          this.addProductForm.controls.brand_name.setValue(this.brandWiseCategories[i] ? this.brandWiseCategories[i].brand_name:'');
      }
    }
  }

  setCategoryName()
  {
    if(this.selectedCategories!=null)
    {
      let catagory_id = this.addProductForm.value.category_id;
      for (let i = 0; i < this.selectedCategories.length; i++) 
      {
        if(catagory_id == this.selectedCategories[i].id)
        {
          this.addProductForm.controls.category_name.setValue(this.selectedCategories[i] ? this.selectedCategories[i].category_name:'')
        }
      }
    }
  }

  uploadsTakePhoto()
  {
    this.loading.present();
    const productData = new FormData();
    productData.append('image', this.uploadPhoto);
    this.product.uploadTakePhoto(productData).subscribe(
    data => {
      console.log(data);
      if (data.success) {
        this.addProductForm.controls.image_id.setValue(data.success? data.image_id : null);
        this.loading.dismiss();
        this.ifUploadPhoto=true;
        this.loading.presentToastSuccess(data.success);
      }
      if(data.error){
        this.loading.dismiss();
        this.loading.presentToastError(data.error);
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

  

 // Create a new shop .........................
  addProduct()
  {
    let totalPrice = this.addProductForm.value.purchase_price * this.addProductForm.value.qty;
    this.addProductForm.controls.total_pur_price.setValue(totalPrice ? totalPrice:null);
    console.log(this.addProductForm.value);
    this.loading.present();
    this.product.addProduct(this.addProductForm.value).subscribe(
    data => {
      console.log(data);
        if(data.success)
        {
          this.loading.dismiss();
          this.loading.presentToastSuccess(data.success);
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

  async addBrand() {
    const modal = await this.modalController.create({
      component: AddBrandPage,
      cssClass: 'my-custom-class',
      componentProps: {addForProduct: 'productPage'},
      swipeToClose: true,
    });

    modal.onDidDismiss().then((data) => {
     console.log(data);
     this.brandWiseCategory();
  });
    return await modal.present();
  }

  async addCategory() {
    const modal = await this.modalController.create({
      component: AddCategoryPage,
      cssClass: 'my-custom-class',
      componentProps: {},
      swipeToClose: true,
    });

    modal.onDidDismiss().then((data) => {
     console.log(data);
     this.brandWiseCategory();
  });
    return await modal.present();
  }

  

  ngOnInit() {
  }

}
