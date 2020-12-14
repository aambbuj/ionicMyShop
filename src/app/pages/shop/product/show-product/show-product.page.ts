import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { IonRouterOutlet, ModalController } from '@ionic/angular';
import { AlertService } from 'src/app/services/alert.service';
import { EnvService } from 'src/app/services/env.service';
import { ProductService } from '../product.service';
import { SellProductPage } from '../sell-product/sell-product.page';

@Component({
  selector: 'app-show-product',
  templateUrl: './show-product.page.html',
  styleUrls: ['./show-product.page.scss'],
})
export class ShowProductPage implements OnInit {
  products: any;
  img_url: string;
  sellProductDetails=[];
  allProducts: any;

  constructor(private routerOutlet: IonRouterOutlet ,public modalController: ModalController, private env: EnvService ,private loading : AlertService,private formBuilder: FormBuilder,private router: Router,private product : ProductService) {
    this.img_url = env.IMG_URL;
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

  ionViewWillEnter() {
    sessionStorage.removeItem('productData');
    this.getProduct();
  }


  getProduct()
  {
    this.loading.present();
    this.product.getProducts().subscribe(
    data => {
      console.log(data);
      this.products = data;
      this.allProducts = data;
      sessionStorage.setItem('productData', JSON.stringify({ datas : data}));
      this.loading.dismiss();

      if (data.success) {
        this.loading.dismiss();
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

  findCategoryName(event)
  {
    if (event.target.value.length>0) {
      var data = [];
        for (let i = 0; i < this.allProducts.length; i++) {
          const name = this.allProducts[i].category_name;
          if (name.slice(0, event.target.value.length) == event.target.value) {
              data.push(this.allProducts[i]);
          }
        }
        this.products = data;
      }
      else {
            this.products=this.allProducts;
          }
  }

  findProductName(event ,category_name , index)
  {
    var producrsData = JSON.parse(sessionStorage.getItem('productData'));
    for (let i = 0; i <producrsData.datas.length; i++) {
        if (producrsData.datas[i].category_name == category_name) {
          if (event.target.value.length>0) {
            var data = [];
            for (let j = 0; j < producrsData.datas[i].products.length; j++) {
              const productName = producrsData.datas[i].products[j].product_name;
              const sellingPrice = producrsData.datas[i].products[j].selling_price;
              const brandName = producrsData.datas[i].products[j].brand_name;
              if (productName.slice(0, event.target.value.length) == event.target.value) {
                  data.push(producrsData.datas[i].products[j]);
              } 
              if (sellingPrice.slice(0, event.target.value.length) == event.target.value) {
                data.push(producrsData.datas[i].products[j]);
              }
              if (brandName.slice(0, event.target.value.length) == event.target.value) {
                data.push(producrsData.datas[i].products[j]);
              }
            }
            this.products[index].products = data;
          } else {
            this.products[index].products = producrsData.datas[i].products;
          }
        }
    }
  }

  async sellProduct(productDetails) {
    console.log(productDetails)
    if(productDetails.qty>0)
    {
        this.sellProductDetails.push(productDetails);
        const modal = await this.modalController.create({
        component: SellProductPage,
        cssClass: 'my-custom-class',
        componentProps: {productDetails: this.sellProductDetails},
        swipeToClose: true,
        presentingElement: this.routerOutlet.nativeEl
      });
      modal.onDidDismiss().then((data) => {
        console.log(data)
        if (data.data.success) {
          this.getProduct();
        }
      });
      return await modal.present();
    }else{
      this.loading.presentToastWarning('Not have a Product.');
    }
    
  }

  

  ngOnInit() {
  }


}
