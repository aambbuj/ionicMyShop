import { Component, OnInit,AfterViewInit ,ViewChild} from '@angular/core';
import { Camera ,CameraOptions } from '@ionic-native/camera/ngx';
import { Router } from '@angular/router';
import { IonInfiniteScroll } from '@ionic/angular';
import { AlertService } from 'src/app/services/alert.service';
import { WorkerService } from '../worker.service';

@Component({
  selector: 'app-show-worker',
  templateUrl: './show-worker.page.html',
  styleUrls: ['./show-worker.page.scss'],
})
export class ShowWorkerPage implements OnInit {
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  ifLogin: any;
  alldata=[];
  item: any;
  value: any=0;

  constructor(private loading : AlertService , private router: Router,private showWorker: WorkerService) {
   }

   ionViewWillEnter() {
    this.getWorkers();
  }
  loadData(event) {
    setTimeout(() => {
      console.log('Done');
      console.log(event);
      this.getWorkers();
      event.target.complete();
    }, 2000);
  }
  getWorkers() {
    console.log(this.alldata[0])
    this.loading.present();
    const postData = new FormData();
    postData.append('skip_id', JSON.stringify(this.value));
    this.showWorker.getWorkers(postData).subscribe(
    data => {
      if(data.data.length>0)
      {
        this.value = this.value + data.data.length;
        this.alldata.push(data.data);
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
