import { Component, OnInit } from '@angular/core';

import { ModalController, Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AlertService } from './services/alert.service';
import { Router } from '@angular/router';
import { HttpHeaders, HttpClientModule, HttpClient } from '@angular/common/http';
import { EnvService } from './services/env.service';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { LoginService } from './login/login.service';
import { AddShopPage } from '../app/pages/shop/add-shop/add-shop.page';
import { ShopService } from './pages/shop/shop.service';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  ifLogin: any;
  appPages:any;
  shops: any;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router ,
    private http: HttpClient,
    private env: EnvService,
    private loading : AlertService,
    private login : LoginService,
    public modalController: ModalController,
    public shop : ShopService
  ) {
    this.ifLogin = JSON.parse(localStorage.getItem('user'));
    if(this.ifLogin!=null)
    {
      if(this.ifLogin.sidebar.length>0){
        this.appPages = this.ifLogin.sidebar;
      }
    }else{
      this.router.navigateByUrl('/');
    }
    this.initializeApp();

  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  logout()
  {
    if(this.ifLogin!=null)
    {
    this.loading.present();
    this.login.logout().subscribe(
    data => {
      console.log(data);
      this.loading.dismiss();
          localStorage.removeItem('user');
          localStorage.removeItem('shop');
          delete this.ifLogin;
          this.router.navigateByUrl('/');
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
  }

  ngOnInit() {
  }
}
