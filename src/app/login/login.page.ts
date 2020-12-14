import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators } from '@angular/forms';
import { LoginService } from './login.service';
import { AlertService } from '../services/alert.service';
import { Router } from '@angular/router';
import { AppService } from '../services/app.service';
import { IonRouterOutlet, ModalController, Platform } from '@ionic/angular';
import { ShopService } from '../pages/shop/shop.service';
import { AddShopPage } from '../pages/shop/add-shop/add-shop.page';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {


  loginForm = this.formBuilder.group({
    email: ['',[Validators.required]],
    password: ['',Validators.required],
  });
  userDetails: any;
  ifLogin: any;
  ifShop: any;

  constructor(
    private loading : AlertService,
    private formBuilder: FormBuilder,
    private router: Router ,
    private loginService : LoginService,
    private platform: Platform,
    private routerOutlet: IonRouterOutlet,
    private app : AppService,
    public modalController: ModalController,
    public shop : ShopService){
    this.ifLogin = JSON.parse(localStorage.getItem('user'));
    this.ifShop = JSON.parse(localStorage.getItem('shop'));

    console.log(this.ifLogin)
      this.platform.backButton.subscribe(() => {
      //navigator['app'].exitApp();
      this.router.navigateByUrl('/deshboard');
    });
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: AddShopPage,
      cssClass: 'my-custom-class',
    });
    return await modal.present();
  }

  ionViewWillEnter() {
    if (this.ifLogin!=null) 
    {
      if (this.ifShop!=null) {
        this.router.navigateByUrl('/deshboard');
      } else {
        console.log(this.ifLogin);
        if(this.ifLogin.user.role == 0 || this.ifLogin.user.role == 1 || this.ifLogin.user.role == 2){
          this.getShop();
        }else{
          this.shopBelongsToUser()
        }
      }
    }
  }

  shopBelongsToUser()
  {
    this.loading.present();
    this.shop.getShop().subscribe(
    data => {
      console.log(data.data);
        this.loading.dismiss();
      localStorage.setItem('shop', JSON.stringify({ id : data.data}));
      this.router.navigateByUrl('/deshboard');
    }, onerror => {
    if (onerror.status==0) {
      this.loading.dismiss();
      this.loading.presentToastWarning('check your internet connection.');
    } else if(onerror.status==500) {
      this.loading.dismiss();
    this.loading.presentToastError('Server error.');
    }
    });
  }


  getShop() {
    this.loading.present();
    this.shop.getShop().subscribe(
    data => {
      console.log(data.data);
      if(data.data.length==0)
      {
        this.presentModal();
        this.loading.dismiss();
      }
      else{
        this.loading.dismiss();
      localStorage.setItem('shop', JSON.stringify({ id : data.data}));
      this.router.navigateByUrl('/deshboard');
      }
    }, onerror => {
    if (onerror.status==0) {
      this.loading.dismiss();
      this.loading.presentToastWarning('check your internet connection.');
    } else if(onerror.status==500) {
      this.loading.dismiss();
    this.loading.presentToastError('Server error.');
    }
    });
  }
  login(){
  this.loading.present();
  this.loginService.login(this.loginForm.value.email, this.loginForm.value.password).subscribe(
  data => {
    this.userDetails = data;
    console.log(data);
    if(this.userDetails.user){
      localStorage.setItem('user', JSON.stringify({ user : this.userDetails.user,token_type : this.userDetails.token_type, access_token : this.userDetails.access_token,sidebar : this.userDetails.sidebar}));
      this.app.ifLogin = JSON.parse(localStorage.getItem('user'));
      this.loading.dismiss();
      window.location.reload();
      this.router.navigateByUrl('/');
    }
    if(this.userDetails.error)
    {
      this.loading.dismiss();
      this.loading.presentToastWarning(this.userDetails.error);
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

doRefresh(event) {
  console.log('Begin async operation');

  setTimeout(() => {
    console.log('Async operation has ended');
    event.target.complete();
  }, 2000);
}

  ngOnInit() {
  }

}
