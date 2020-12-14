import { Component, OnInit } from '@angular/core';
import { Contacts , Contact, ContactField, ContactName } from "@ionic-native/contacts/ngx";
import { CallNumber } from "@ionic-native/call-number/ngx";
import { SMS } from '@ionic-native/sms/ngx';
import { ToastController } from "@ionic/angular"
import { AlertService } from 'src/app/services/alert.service';
import { PaymentService } from 'src/app/pages/payments/payment.service';
import { EnvService } from 'src/app/services/env.service';
@Component({
  selector: 'app-tab-two',
  templateUrl: './tab-two.page.html',
  styleUrls: ['./tab-two.page.scss'],
})
export class TabTwoPage implements OnInit {

  myContacts : Contact [] = [];
  SMS:any;
  paymetURL: string;
  constructor( private env: EnvService, private payment : PaymentService , private loading : AlertService ,private contacts : Contacts, private callNumber : CallNumber , private sms : SMS , private toastCtrl : ToastController ) { 
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

  ngOnInit() {
  }

}
