!function(){function e(e,o){if(!(e instanceof o))throw new TypeError("Cannot call a class as a function")}function o(e,o){for(var t=0;t<o.length;t++){var n=o[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{"2gon":function(t,n,i){"use strict";i.r(n),i.d(n,"AddProductPageModule",(function(){return x}));var r=i("ofXK"),a=i("3Pt+"),s=i("TEn/"),c=i("tyNb"),d=i("mrSG"),l=i("hHli"),u=i("0rZM"),b=i("fXoL"),p=i("KqBo"),m=i("3LUQ"),g=i("OyHp");function h(e,o){if(1&e){var t=b.Lb();b.Kb(0,"span"),b.Ib(1,"img",10),b.Kb(2,"ion-icon",11),b.Sb("click",(function(){return b.fc(t),b.Ub().uploadsTakePhoto()})),b.Jb(),b.Jb()}if(2&e){var n=b.Ub();b.xb(1),b.Zb("src",n.photo,b.gc)}}function f(e,o){if(1&e&&(b.Kb(0,"ion-select-option",28),b.jc(1),b.Jb()),2&e){var t=o.$implicit;b.ac("value",t.id),b.xb(1),b.kc(t.brand_name)}}function y(e,o){if(1&e&&(b.Kb(0,"ion-select",26),b.ic(1,f,2,2,"ion-select-option",27),b.Jb()),2&e){var t=b.Ub(2);b.xb(1),b.Zb("ngForOf",t.brandWiseCategories)}}function v(e,o){if(1&e&&(b.Kb(0,"ion-select-option",28),b.jc(1),b.Jb()),2&e){var t=o.$implicit;b.ac("value",t.id),b.xb(1),b.kc(t.category_name)}}function P(e,o){if(1&e){var t=b.Lb();b.Kb(0,"ion-select",29),b.Sb("click",(function(){return b.fc(t),b.Ub(2).pushCategory()})),b.ic(1,v,2,2,"ion-select-option",27),b.Jb()}if(2&e){var n=b.Ub(2);b.xb(1),b.Zb("ngForOf",n.selectedCategories)}}function C(e,o){if(1&e){var t=b.Lb();b.Kb(0,"div"),b.Kb(1,"ion-item"),b.Kb(2,"ion-label"),b.jc(3,"Brand Name"),b.Jb(),b.Kb(4,"ion-button",12),b.Sb("click",(function(){return b.fc(t),b.Ub().addBrand()})),b.jc(5,"+"),b.Jb(),b.ic(6,y,2,1,"ion-select",13),b.Jb(),b.Kb(7,"ion-item"),b.Kb(8,"ion-label"),b.jc(9,"Category Name"),b.Jb(),b.Kb(10,"ion-button",14),b.Sb("click",(function(){return b.fc(t),b.Ub().addCategory()})),b.jc(11,"+"),b.Jb(),b.ic(12,P,2,1,"ion-select",15),b.Jb(),b.Kb(13,"ion-item"),b.Kb(14,"ion-label"),b.jc(15,"Product Type"),b.Jb(),b.Kb(16,"ion-select",16),b.Kb(17,"ion-select-option",17),b.jc(18," Par KG "),b.Jb(),b.Kb(19,"ion-select-option",18),b.jc(20," Par Piece "),b.Jb(),b.Kb(21,"ion-select-option",19),b.jc(22," Par Quintal "),b.Jb(),b.Jb(),b.Jb(),b.Kb(23,"ion-item"),b.Kb(24,"ion-label",20),b.jc(25,"Product Name"),b.Jb(),b.Kb(26,"ion-input",21),b.Sb("click",(function(){return b.fc(t),b.Ub().setCategoryName()})),b.Jb(),b.Jb(),b.Kb(27,"ion-item"),b.Kb(28,"ion-label",20),b.jc(29,"Purchase Price"),b.Jb(),b.Ib(30,"ion-input",22),b.Jb(),b.Kb(31,"ion-item"),b.Kb(32,"ion-label",20),b.jc(33,"Selling Price"),b.Jb(),b.Ib(34,"ion-input",23),b.Jb(),b.Kb(35,"ion-item"),b.Kb(36,"ion-label",20),b.jc(37,"Disccount Selling Price"),b.Jb(),b.Ib(38,"ion-input",24),b.Jb(),b.Kb(39,"ion-item"),b.Kb(40,"ion-label",20),b.jc(41,"Quantity"),b.Jb(),b.Ib(42,"ion-input",25),b.Jb(),b.Jb()}if(2&e){var n=b.Ub();b.xb(6),b.Zb("ngIf",""!=n.brandWiseCategories),b.xb(6),b.Zb("ngIf",""!=n.brandWiseCategories)}}var J,K,k,_=[{path:"",component:(J=function(){function t(o,n,i,r,s,c){e(this,t),this.modalController=o,this.camera=n,this.loading=i,this.formBuilder=r,this.router=s,this.product=c,this.addProductForm=this.formBuilder.group({shop_id:["",[a.j.required]],brand_id:["",[a.j.required]],category_id:["",a.j.required],image_id:[""],brand_name:["",a.j.required],category_name:["",a.j.required],product_name:["",a.j.required],product_type:["",a.j.required],purchase_price:["",a.j.required],selling_price:["",a.j.required],disc_sell_price:["",a.j.required],qty:["",a.j.required],total_pur_price:[""]}),this.ifUploadPhoto=!1}var n,i,r;return n=t,(i=[{key:"doRefresh",value:function(e){console.log("Begin async operation"),setTimeout((function(){console.log("Async operation has ended"),e.target.complete()}),2e3)}},{key:"captureImage",value:function(){var e=this;this.camera.getPicture({quality:30,allowEdit:!0,saveToPhotoAlbum:!0,destinationType:this.camera.DestinationType.DATA_URL,encodingType:this.camera.EncodingType.JPEG,mediaType:this.camera.MediaType.PICTURE}).then((function(o){e.photo="data:image/jpeg;base64,"+o,e.uploadPhoto=o}),(function(o){console.log(o),e.loading.presentToastWarning(o)}))}},{key:"takePhoto",value:function(){var e=this;this.camera.getPicture({quality:30,sourceType:this.camera.PictureSourceType.PHOTOLIBRARY,destinationType:this.camera.DestinationType.DATA_URL,encodingType:this.camera.EncodingType.JPEG,mediaType:this.camera.MediaType.PICTURE,correctOrientation:!0}).then((function(o){e.photo="data:image/jpeg;base64,"+o,e.uploadPhoto=o}),(function(e){}))}},{key:"ionViewWillEnter",value:function(){var e=JSON.parse(localStorage.getItem("shop"));this.shops=e,this.addProductForm.controls.shop_id.setValue(this.shops?this.shops.id[0].id:""),console.log(this.addProductForm.value),this.brandWiseCategory()}},{key:"brandWiseCategory",value:function(){var e=this;this.loading.present(),this.product.brandWiseCategory().subscribe((function(o){console.log(o),e.brandWiseCategories=o,e.loading.dismiss()}),(function(o){0==o.status?(e.loading.presentToastWarning("check your internet connection."),e.loading.dismiss()):500==o.status&&(e.loading.dismiss(),e.loading.presentToastError("Server error."))}))}},{key:"pushCategory",value:function(){for(var e=0;e<this.brandWiseCategories.length;e++)this.brandWiseCategories[e].id==this.addProductForm.value.brand_id&&(this.selectedCategories=this.brandWiseCategories[e].categories,this.addProductForm.controls.brand_name.setValue(this.brandWiseCategories[e]?this.brandWiseCategories[e].brand_name:""))}},{key:"setCategoryName",value:function(){if(null!=this.selectedCategories)for(var e=this.addProductForm.value.category_id,o=0;o<this.selectedCategories.length;o++)e==this.selectedCategories[o].id&&this.addProductForm.controls.category_name.setValue(this.selectedCategories[o]?this.selectedCategories[o].category_name:"")}},{key:"uploadsTakePhoto",value:function(){var e=this;this.loading.present();var o=new FormData;o.append("image",this.uploadPhoto),this.product.uploadTakePhoto(o).subscribe((function(o){console.log(o),o.success&&(e.addProductForm.controls.image_id.setValue(o.success?o.image_id:null),e.loading.dismiss(),e.ifUploadPhoto=!0,e.loading.presentToastSuccess(o.success)),o.error&&(e.loading.dismiss(),e.loading.presentToastError(o.error))}),(function(o){0==o.status?(e.loading.presentToastWarning("check your internet connection."),e.loading.dismiss()):500==o.status&&(e.loading.dismiss(),e.loading.presentToastError("Server error."))}))}},{key:"addProduct",value:function(){var e=this;this.addProductForm.controls.total_pur_price.setValue(this.addProductForm.value.purchase_price*this.addProductForm.value.qty||null),console.log(this.addProductForm.value),this.loading.present(),this.product.addProduct(this.addProductForm.value).subscribe((function(o){console.log(o),o.success&&(e.loading.dismiss(),e.loading.presentToastSuccess(o.success),e.router.navigateByUrl("/show-products")),o.error&&(e.loading.dismiss(),e.loading.presentToastWarning(o.error))}),(function(o){0==o.status?(e.loading.presentToastWarning("check your internet connection."),e.loading.dismiss()):500==o.status&&(e.loading.dismiss(),e.loading.presentToastError("Server error."))}))}},{key:"addBrand",value:function(){return Object(d.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var o,t=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.modalController.create({component:l.a,cssClass:"my-custom-class",componentProps:{addForProduct:"productPage"},swipeToClose:!0});case 2:return(o=e.sent).onDidDismiss().then((function(e){console.log(e),t.brandWiseCategory()})),e.next=6,o.present();case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e,this)})))}},{key:"addCategory",value:function(){return Object(d.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var o,t=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.modalController.create({component:u.a,cssClass:"my-custom-class",componentProps:{},swipeToClose:!0});case 2:return(o=e.sent).onDidDismiss().then((function(e){console.log(e),t.brandWiseCategory()})),e.next=6,o.present();case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e,this)})))}},{key:"ngOnInit",value:function(){}}])&&o(n.prototype,i),r&&o(n,r),t}(),J.\u0275fac=function(e){return new(e||J)(b.Hb(s.T),b.Hb(p.a),b.Hb(m.a),b.Hb(a.a),b.Hb(c.g),b.Hb(g.a))},J.\u0275cmp=b.Bb({type:J,selectors:[["app-add-product"]],decls:21,vars:4,consts:[["slot","start"],["slot","fixed",3,"ionRefresh"],["pullingIcon","chevron-down-circle-outline","pullingText","Pull to refresh","refreshingSpinner","circles"],[3,"formGroup","ngSubmit"],[2,"margin-top","10px"],["name","camera-outline",1,"choseCamera",3,"click"],[1,"selectCamera"],["name","image-outline",3,"click"],[4,"ngIf"],["type","submit","shape","round","color","success","expand","block",3,"disabled"],["height","60","width","60",1,"imageClasss",3,"src"],["name","cloud-upload-outline",1,"uploads",3,"click"],["size","small",3,"click"],["formControlName","brand_id","interface","popover","placeholder","Select Brand",4,"ngIf"],[3,"click"],["formControlName","category_id","interface","popover","placeholder","Select Category",3,"click",4,"ngIf"],["formControlName","product_type","interface","popover","placeholder","Select Brand"],["value","Par KG"],["value","Par Piece"],["value","Par Quintal"],["position","floating"],["type","name","formControlName","product_name",3,"click"],["type","number","formControlName","purchase_price"],["type","number","formControlName","selling_price"],["type","number","formControlName","disc_sell_price"],["type","number","formControlName","qty"],["formControlName","brand_id","interface","popover","placeholder","Select Brand"],[3,"value",4,"ngFor","ngForOf"],[3,"value"],["formControlName","category_id","interface","popover","placeholder","Select Category",3,"click"]],template:function(e,o){1&e&&(b.Kb(0,"ion-header"),b.Kb(1,"ion-toolbar"),b.Kb(2,"ion-buttons",0),b.Ib(3,"ion-menu-button"),b.Jb(),b.Kb(4,"ion-title"),b.jc(5,"Add Product"),b.Jb(),b.Jb(),b.Jb(),b.Kb(6,"ion-content"),b.Kb(7,"ion-refresher",1),b.Sb("ionRefresh",(function(e){return o.doRefresh(e)})),b.Ib(8,"ion-refresher-content",2),b.Jb(),b.Kb(9,"form",3),b.Sb("ngSubmit",(function(){return o.addProduct()})),b.Kb(10,"ion-card",4),b.Kb(11,"ion-item"),b.Kb(12,"div"),b.Kb(13,"ion-icon",5),b.Sb("click",(function(){return o.captureImage()})),b.Jb(),b.Jb(),b.Kb(14,"div",6),b.Kb(15,"ion-icon",7),b.Sb("click",(function(){return o.takePhoto()})),b.Jb(),b.Jb(),b.Kb(16,"div"),b.ic(17,h,3,1,"span",8),b.Jb(),b.Jb(),b.ic(18,C,43,2,"div",8),b.Jb(),b.Kb(19,"ion-button",9),b.jc(20,"Submit"),b.Jb(),b.Jb(),b.Jb()),2&e&&(b.xb(9),b.Zb("formGroup",o.addProductForm),b.xb(8),b.Zb("ngIf",o.photo),b.xb(1),b.Zb("ngIf",o.ifUploadPhoto),b.xb(1),b.Zb("disabled",!o.addProductForm.valid))},directives:[s.o,s.P,s.d,s.B,s.O,s.j,s.E,s.F,a.k,a.h,a.c,s.e,s.t,s.p,r.j,s.c,s.x,s.I,s.Y,a.g,a.b,s.J,s.s,s.Z,s.V,r.i],styles:[".choseCamera[_ngcontent-%COMP%]{font-size:40px;margin-right:15px}.selectCamera[_ngcontent-%COMP%]{font-size:35px;margin-right:15px}.uploads[_ngcontent-%COMP%]{font-size:30px;margin-left:15px}.imageClasss[_ngcontent-%COMP%]{margin-left:10px;border-radius:25px;border:1px solid #00f}"]}),J)}],T=((K=function o(){e(this,o)}).\u0275mod=b.Fb({type:K}),K.\u0275inj=b.Eb({factory:function(e){return new(e||K)},imports:[[c.i.forChild(_)],c.i]}),K),j=i("tk/3"),x=((k=function o(){e(this,o)}).\u0275mod=b.Fb({type:k}),k.\u0275inj=b.Eb({factory:function(e){return new(e||k)},imports:[[a.i,c.i,j.b,r.b,a.d,s.Q,T]]}),k)}}])}();