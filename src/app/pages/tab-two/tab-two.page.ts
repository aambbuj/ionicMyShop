import { Component, OnInit } from '@angular/core';
import { Contacts , Contact, ContactField, ContactName } from "@ionic-native/contacts/ngx";
import { CallNumber } from "@ionic-native/call-number/ngx";
import { SMS } from '@ionic-native/sms/ngx';
import { ToastController } from "@ionic/angular"
import { AlertService } from 'src/app/services/alert.service';
import { PaymentService } from 'src/app/pages/payments/payment.service';
import { EnvService } from 'src/app/services/env.service';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner/ngx';

@Component({
  selector: 'app-tab-two',
  templateUrl: './tab-two.page.html',
  styleUrls: ['./tab-two.page.scss'],
})
export class TabTwoPage implements OnInit {

  myContacts : Contact [] = [];
  SMS:any;
  paymetURL: string;
// QR code scanner variable .................
  encodedData = '';
  QRSCANNED_DATA: string;
  isOn = false;
  scannedData: {};

  constructor( private qrScanner: QRScanner ,private env: EnvService, private payment : PaymentService , private loading : AlertService ,private contacts : Contacts, private callNumber : CallNumber , private sms : SMS , private toastCtrl : ToastController ) { 
    this.paymetURL = this.env.paymetURL;
  }

  loadContacts(){
    let options = {
      filter : '',
      multiple: true,
      hasPhoneNumber : true,
    };
    this.contacts.find(['*'],options).then((contacts : Contact[]) => {
      this.myContacts = contacts; 
    });
  }

  sendSms(contact : Contact){
            //CONFIGURATION
            var options = {
              replaceLineBreaks: false,
              android: {
                intent: 'INTENT'
              }
          };
    this.sms.send(contact.phoneNumbers[0].value,'yes it is working ',options);
  }

  call(contact : Contact){
    this.callNumber.callNumber(contact.phoneNumbers[0].value,true);
  }

  createContact(){
    let contact: Contact = this.contacts.create();
    contact.name = new ContactName(null, 'ioniccontact', 'io icdemo');
    contact.phoneNumbers = [new ContactField('mobile', '6471234567')];
    contact.save().then(
    async () =>{
      let toast = await this.toastCtrl.create({
        message : 'Contact Added Successfully'
      });
      toast.present();
    },
    (error: any) => console.error('Error saving contact.', error)
    );
  }

payWithRazorpay(){
  window.location.href = this.paymetURL;
}


// QR code scanning code .............................

scannQeCode(){
  // Optionally request the permission early
this.qrScanner.prepare()
.then((status: QRScannerStatus) => {
   if (status.authorized) {
     // camera permission was granted


     // start scanning
     let scanSub = this.qrScanner.scan().subscribe((text: string) => {
       console.log('Scanned something', text);
       alert(text);

     this.qrScanner.hide(); // hide camera preview
      scanSub.unsubscribe(); // stop scanning
     });

   } else if (status.denied) {
     // camera permission was permanently denied
     // you must use QRScanner.openSettings() method to guide the user to the settings page
     // then they can grant the permission from there
   } else {
     // permission was denied, but not permanently. You can ask for permission again at a later time.
   }
})
.catch((e: any) => 
console.log('Error is', e)

);
alert('something wrong');
}

  ngOnInit() {
  }

}
