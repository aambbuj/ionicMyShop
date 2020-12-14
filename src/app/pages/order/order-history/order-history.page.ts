import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ModalController, NavParams } from '@ionic/angular';
import { AlertService } from 'src/app/services/alert.service';
import { OrderService } from '../../order/order.service';

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.page.html',
  styleUrls: ['./order-history.page.scss'],
})
export class OrderHistoryPage implements OnInit {

  data = this.navParams.get('orderHistory');
  orderHistory: any;

  constructor(public alertController: AlertController , private order : OrderService , public modalController: ModalController,private navParams: NavParams,private loading : AlertService,private router: Router) { 
    this.orderHistory = this.data;
    console.log(this.orderHistory)
    
  }

  ionViewWillEnter() {
    //this.getOrders();
  }
  loadData(event) {
    setTimeout(() => {
      console.log('Done');
      console.log(event);
    //  this.getOrders();
      event.target.complete();
    }, 2000);
  }
  
  doRefresh(event) {
    console.log('Begin async operation');
    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }

  closeModal(){
    this.modalController.dismiss();
  }

  addOrder(){
    this.modalController.dismiss();
    this.router.navigateByUrl('/add-order');
  }

  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Confirm!',
      message: '<strong>text</strong>!!!',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'success',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Ok',
          handler: () => {
            console.log('Confirm Okay');
          }
        }
      ]
    });

    await alert.present();
  }

  async updteStatus(id , order_id , update_id , message){
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Confirm!',
      message: '<strong>'+message+'</strong>!!!',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'success',
        }, {
          text: 'Ok',
          handler: () => {
              this.loading.present();
              const updateData = new FormData();
              updateData.append('id', id);
              updateData.append('order_id', order_id);
              updateData.append('update_id', update_id);
              this.order.updateOrder(updateData).subscribe(
              data => {
                console.log(data);
                this.orderHistory = data.data;
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
        }
      ]
    });

    await alert.present();
  }

  ngOnInit() {
  }

}
