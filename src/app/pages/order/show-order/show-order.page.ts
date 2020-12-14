import { Component, OnInit ,ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import { IonInfiniteScroll, ModalController } from '@ionic/angular';
import { AlertService } from 'src/app/services/alert.service';
import { OrderService } from '../../order/order.service';
import { OrderHistoryPage } from '../../../pages/order/order-history/order-history.page';
@Component({
  selector: 'app-show-order',
  templateUrl: './show-order.page.html',
  styleUrls: ['./show-order.page.scss'],
})
export class ShowOrderPage implements OnInit {

  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  ifLogin: any;
  alldata=[];
  item: any;
  value: any;

  constructor( public modalController: ModalController,private loading : AlertService , private router: Router,private order: OrderService) {
    
   }

   ionViewWillEnter() {
     this.value = 0;
     this.alldata = [];
    this.getOrders();
  }
  loadData(event) {
    setTimeout(() => {
      console.log('Done');
      console.log(event);
      this.getOrders();
      event.target.complete();
    }, 2000);
  }
  
  doRefresh(event) {
    console.log('Begin async operation');
    this.getOrders();
    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }

  getOrders() {
    this.loading.present();
    const postData = new FormData();
    postData.append('skip_id', JSON.stringify(this.value));
    this.order.getOrders(postData).subscribe(
    data => {
      console.log(data);
      if(data.length>0)
      {
        this.value = this.value + data.length;
        this.alldata.push(data);
      }
     this.loading.dismiss();
    }, onerror => {
    if (onerror.status==0) {
      this.loading.presentToastWarning('check your internet connection.');
      this.loading.dismiss();
    } else if(onerror.status==500) {
    this.loading.presentToastError('Server error.');
    this.loading.dismiss();
    }
    });
  
  }


  async orderHistory(orderHistory) {
    console.log(orderHistory)
    if(orderHistory.length>0)
    {
        const modal = await this.modalController.create({
        component: OrderHistoryPage,
        cssClass: 'my-custom-class',
        componentProps: {orderHistory: orderHistory},
        swipeToClose: true,
        backdropDismiss:true,
        showBackdrop : true
       // presentingElement: this.routerOutlet.nativeEl
      });
      modal.onDidDismiss().then((data) => {
        console.log(data)
        this.value = 0;
        this.alldata = [];
        this.getOrders();
      });
      return await modal.present();
    }else{
      this.loading.presentToastWarning('Not have a Product.');
    }
    
  }
  ngOnInit() {
  }

}
