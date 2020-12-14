import { Injectable } from '@angular/core';
import { LoadingController, ToastController } from '@ionic/angular';
@Injectable({
  providedIn: 'root'
})
export class AlertService {

  isLoading = false;
  constructor(public loadingController: LoadingController, public toastController: ToastController) { }

  async present() {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...',
      //duration: 2000
    });
    await loading.present();
  }

  async dismiss() {
    this.isLoading = false;
    return await this.loadingController.dismiss();
  }

  async presentToastError(data) {
    const toast = await this.toastController.create({
      message: data,
      color: "danger",
      duration: 3000
    });
    toast.present();
  }

  async presentToastSuccess(data) {
    const toast = await this.toastController.create({
      message: data,
      color: "success",
      duration: 3000
    });
    toast.present();
  }
  async presentToastWarning(data) {
    const toast = await this.toastController.create({
      message: data,
      color: "warning",
      duration: 3000
    });
    toast.present();
  }
}
