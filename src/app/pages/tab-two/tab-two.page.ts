import { Component, OnInit } from '@angular/core';
import { Contacts , Contact, ContactField, ContactName } from "@ionic-native/contacts/ngx";
import { CallNumber } from "@ionic-native/call-number/ngx";
import { SMS } from '@ionic-native/sms/ngx';
import { Platform, ToastController } from "@ionic/angular"
import { AlertService } from 'src/app/services/alert.service';
import { PaymentService } from 'src/app/pages/payments/payment.service';
import { EnvService } from 'src/app/services/env.service';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner/ngx';
import * as X2JS from 'x2js/x2js';

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
  scannData: any;
  qrText: any;

  constructor(public platform : Platform, private qrScanner: QRScanner ,private env: EnvService, private payment : PaymentService , private loading : AlertService ,private contacts : Contacts, private callNumber : CallNumber , private sms : SMS , private toastCtrl : ToastController ) { 
    this.paymetURL = this.env.paymetURL;
    this.platform.backButton.subscribeWithPriority(0,() => {
      document.getElementsByTagName("body")[0].style.opacity = "1";
      this.scannData.unsubscribe();
    })
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
    this.qrScanner.prepare().
      then((status: QRScannerStatus) => {
        if (status.authorized) {
          this.qrScanner.show();
          this.scannData = document.getElementsByTagName('body')[0].style.opacity = '0';
          debugger
          this.scannData = this.qrScanner.scan().subscribe((xmlData:string) => {
              document.getElementsByTagName('body')[0].style.opacity = '1';
              this.qrScanner.hide();
              this.scannData.unsubscribe();
              let xml =  xmlData;
              let parser : any = new X2JS();
              let qrJsonObj = parser.xml2js(xml);
              this.qrText = qrJsonObj.PrintLetterBarcodeData;

              alert(this.qrText._dob);
              alert(this.qrText);
            }, (err) => {
              alert(JSON.stringify(err));
            });

        } else if (status.denied) {
        } else {

        }
      })
      .catch((e: any) => console.log('Error is', e));
  }

  manage(){
    let xmlData = '<?xml version="1.0" encoding="UTF-8"?> <PrintLetterBarcodeData uid="715347220749" name="Ambuj Chand" gender="M" yob="1993" gname="Bhandu Chand" vtc="Roladi" po="Gangamanna" dist="Puruliya" subdist="Bundwan" state="West Bengal" pc="723129" dob="01/01/1993"/>';

    let xml =  xmlData;
    let parser : any = new X2JS();
    let json = parser.xml2js(xml);
   // console.log(json.PrintLetterBarcodeData._dob);
   alert(json.PrintLetterBarcodeData);
    //console.log(json.PrintLetterBarcodeData);
  }


  ngOnInit() {
  }

}
