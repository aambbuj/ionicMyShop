(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{"2gon":function(e,o,t){"use strict";t.r(o),t.d(o,"AddProductPageModule",(function(){return T}));var i=t("ofXK"),r=t("3Pt+"),n=t("TEn/"),s=t("tyNb"),a=t("mrSG"),c=t("hHli"),d=t("0rZM"),l=t("fXoL"),b=t("FAH8"),u=t("KqBo"),p=t("3LUQ"),h=t("OyHp");function g(e,o){if(1&e){const e=l.Lb();l.Kb(0,"span"),l.Ib(1,"img",10),l.Kb(2,"ion-icon",11),l.Sb("click",(function(){return l.dc(e),l.Ub().uploadsTakePhoto()})),l.Jb(),l.Jb()}if(2&e){const e=l.Ub();l.xb(1),l.Xb("src",e.photo,l.ec)}}function m(e,o){if(1&e&&(l.Kb(0,"ion-select-option",28),l.hc(1),l.Jb()),2&e){const e=o.$implicit;l.Yb("value",e.id),l.xb(1),l.ic(e.brand_name)}}function f(e,o){if(1&e&&(l.Kb(0,"ion-select",26),l.gc(1,m,2,2,"ion-select-option",27),l.Jb()),2&e){const e=l.Ub(2);l.xb(1),l.Xb("ngForOf",e.brandWiseCategories)}}function y(e,o){if(1&e&&(l.Kb(0,"ion-select-option",28),l.hc(1),l.Jb()),2&e){const e=o.$implicit;l.Yb("value",e.id),l.xb(1),l.ic(e.category_name)}}function P(e,o){if(1&e){const e=l.Lb();l.Kb(0,"ion-select",29),l.Sb("click",(function(){return l.dc(e),l.Ub(2).pushCategory()})),l.gc(1,y,2,2,"ion-select-option",27),l.Jb()}if(2&e){const e=l.Ub(2);l.xb(1),l.Xb("ngForOf",e.selectedCategories)}}function C(e,o){if(1&e){const e=l.Lb();l.Kb(0,"div"),l.Kb(1,"ion-item"),l.Kb(2,"ion-label"),l.hc(3,"Brand Name"),l.Jb(),l.Kb(4,"ion-button",12),l.Sb("click",(function(){return l.dc(e),l.Ub().addBrand()})),l.hc(5,"+"),l.Jb(),l.gc(6,f,2,1,"ion-select",13),l.Jb(),l.Kb(7,"ion-item"),l.Kb(8,"ion-label"),l.hc(9,"Category Name"),l.Jb(),l.Kb(10,"ion-button",14),l.Sb("click",(function(){return l.dc(e),l.Ub().addCategory()})),l.hc(11,"+"),l.Jb(),l.gc(12,P,2,1,"ion-select",15),l.Jb(),l.Kb(13,"ion-item"),l.Kb(14,"ion-label"),l.hc(15,"Product Type"),l.Jb(),l.Kb(16,"ion-select",16),l.Kb(17,"ion-select-option",17),l.hc(18," Par KG "),l.Jb(),l.Kb(19,"ion-select-option",18),l.hc(20," Par Piece "),l.Jb(),l.Kb(21,"ion-select-option",19),l.hc(22," Par Quintal "),l.Jb(),l.Jb(),l.Jb(),l.Kb(23,"ion-item"),l.Kb(24,"ion-label",20),l.hc(25,"Product Name"),l.Jb(),l.Kb(26,"ion-input",21),l.Sb("click",(function(){return l.dc(e),l.Ub().setCategoryName()})),l.Jb(),l.Jb(),l.Kb(27,"ion-item"),l.Kb(28,"ion-label",20),l.hc(29,"Purchase Price"),l.Jb(),l.Ib(30,"ion-input",22),l.Jb(),l.Kb(31,"ion-item"),l.Kb(32,"ion-label",20),l.hc(33,"Selling Price"),l.Jb(),l.Ib(34,"ion-input",23),l.Jb(),l.Kb(35,"ion-item"),l.Kb(36,"ion-label",20),l.hc(37,"Disccount Selling Price"),l.Jb(),l.Ib(38,"ion-input",24),l.Jb(),l.Kb(39,"ion-item"),l.Kb(40,"ion-label",20),l.hc(41,"Quantity"),l.Jb(),l.Ib(42,"ion-input",25),l.Jb(),l.Jb()}if(2&e){const e=l.Ub();l.xb(6),l.Xb("ngIf",""!=e.brandWiseCategories),l.xb(6),l.Xb("ngIf",""!=e.brandWiseCategories)}}const J=[{path:"",component:(()=>{class e{constructor(e,o,t,i,n,s,a){this.modalController=e,this.file=o,this.camera=t,this.loading=i,this.formBuilder=n,this.router=s,this.product=a,this.addProductForm=this.formBuilder.group({shop_id:["",[r.j.required]],brand_id:["",[r.j.required]],category_id:["",r.j.required],image_id:[""],brand_name:["",r.j.required],category_name:["",r.j.required],product_name:["",r.j.required],product_type:["",r.j.required],purchase_price:["",r.j.required],selling_price:["",r.j.required],disc_sell_price:["",r.j.required],qty:["",r.j.required],total_pur_price:[""]}),this.ifUploadPhoto=!1}doRefresh(e){console.log("Begin async operation"),setTimeout(()=>{console.log("Async operation has ended"),e.target.complete()},2e3)}captureImage(){this.camera.getPicture({quality:30,allowEdit:!0,saveToPhotoAlbum:!0,destinationType:this.camera.DestinationType.DATA_URL,encodingType:this.camera.EncodingType.JPEG,mediaType:this.camera.MediaType.PICTURE}).then(e=>{this.photo="data:image/jpeg;base64,"+e,this.uploadPhoto=e},e=>{console.log(e),this.loading.presentToastWarning(e)})}takePhoto(){this.camera.getPicture({quality:30,sourceType:this.camera.PictureSourceType.PHOTOLIBRARY,destinationType:this.camera.DestinationType.DATA_URL,encodingType:this.camera.EncodingType.JPEG,mediaType:this.camera.MediaType.PICTURE,correctOrientation:!0}).then(e=>{this.photo="data:image/jpeg;base64,"+e,this.uploadPhoto=e},e=>{})}ionViewWillEnter(){let e=JSON.parse(localStorage.getItem("shop"));this.shops=e,this.addProductForm.controls.shop_id.setValue(this.shops?this.shops.id[0].id:""),console.log(this.addProductForm.value),this.brandWiseCategory()}brandWiseCategory(){this.loading.present(),this.product.brandWiseCategory().subscribe(e=>{console.log(e),this.brandWiseCategories=e,this.loading.dismiss()},e=>{0==e.status?(this.loading.presentToastWarning("check your internet connection."),this.loading.dismiss()):500==e.status&&(this.loading.dismiss(),this.loading.presentToastError("Server error."))})}pushCategory(){for(let e=0;e<this.brandWiseCategories.length;e++)this.brandWiseCategories[e].id==this.addProductForm.value.brand_id&&(this.selectedCategories=this.brandWiseCategories[e].categories,this.addProductForm.controls.brand_name.setValue(this.brandWiseCategories[e]?this.brandWiseCategories[e].brand_name:""))}setCategoryName(){if(null!=this.selectedCategories){let e=this.addProductForm.value.category_id;for(let o=0;o<this.selectedCategories.length;o++)e==this.selectedCategories[o].id&&this.addProductForm.controls.category_name.setValue(this.selectedCategories[o]?this.selectedCategories[o].category_name:"")}}uploadsTakePhoto(){this.loading.present();const e=new FormData;e.append("image",this.uploadPhoto),this.product.uploadTakePhoto(e).subscribe(e=>{console.log(e),e.success&&(this.addProductForm.controls.image_id.setValue(e.success?e.image_id:null),this.loading.dismiss(),this.ifUploadPhoto=!0,this.loading.presentToastSuccess(e.success)),e.error&&(this.loading.dismiss(),this.loading.presentToastError(e.error))},e=>{0==e.status?(this.loading.presentToastWarning("check your internet connection."),this.loading.dismiss()):500==e.status&&(this.loading.dismiss(),this.loading.presentToastError("Server error."))})}addProduct(){this.addProductForm.controls.total_pur_price.setValue(this.addProductForm.value.purchase_price*this.addProductForm.value.qty||null),console.log(this.addProductForm.value),this.loading.present(),this.product.addProduct(this.addProductForm.value).subscribe(e=>{console.log(e),e.success&&(this.loading.dismiss(),this.loading.presentToastSuccess(e.success),this.router.navigateByUrl("/show-products")),e.error&&(this.loading.dismiss(),this.loading.presentToastWarning(e.error))},e=>{0==e.status?(this.loading.presentToastWarning("check your internet connection."),this.loading.dismiss()):500==e.status&&(this.loading.dismiss(),this.loading.presentToastError("Server error."))})}addBrand(){return Object(a.a)(this,void 0,void 0,(function*(){const e=yield this.modalController.create({component:c.a,cssClass:"my-custom-class",componentProps:{addForProduct:"productPage"},swipeToClose:!0});return e.onDidDismiss().then(e=>{console.log(e),this.brandWiseCategory()}),yield e.present()}))}addCategory(){return Object(a.a)(this,void 0,void 0,(function*(){const e=yield this.modalController.create({component:d.a,cssClass:"my-custom-class",componentProps:{},swipeToClose:!0});return e.onDidDismiss().then(e=>{console.log(e),this.brandWiseCategory()}),yield e.present()}))}ngOnInit(){}}return e.\u0275fac=function(o){return new(o||e)(l.Hb(n.R),l.Hb(b.a),l.Hb(u.a),l.Hb(p.a),l.Hb(r.a),l.Hb(s.g),l.Hb(h.a))},e.\u0275cmp=l.Bb({type:e,selectors:[["app-add-product"]],decls:21,vars:4,consts:[["slot","start"],["slot","fixed",3,"ionRefresh"],["pullingIcon","chevron-down-circle-outline","pullingText","Pull to refresh","refreshingSpinner","circles"],[3,"formGroup","ngSubmit"],[2,"margin-top","10px"],["name","camera-outline",1,"choseCamera",3,"click"],[1,"selectCamera"],["name","image-outline",3,"click"],[4,"ngIf"],["type","submit","shape","round","color","success","expand","block",3,"disabled"],["height","60","width","60",1,"imageClasss",3,"src"],["name","cloud-upload-outline",1,"uploads",3,"click"],["size","small",3,"click"],["formControlName","brand_id","interface","popover","placeholder","Select Brand",4,"ngIf"],[3,"click"],["formControlName","category_id","interface","popover","placeholder","Select Category",3,"click",4,"ngIf"],["formControlName","product_type","interface","popover","placeholder","Select Brand"],["value","Par KG"],["value","Par Piece"],["value","Par Quintal"],["position","floating"],["type","name","formControlName","product_name",3,"click"],["type","number","formControlName","purchase_price"],["type","number","formControlName","selling_price"],["type","number","formControlName","disc_sell_price"],["type","number","formControlName","qty"],["formControlName","brand_id","interface","popover","placeholder","Select Brand"],[3,"value",4,"ngFor","ngForOf"],[3,"value"],["formControlName","category_id","interface","popover","placeholder","Select Category",3,"click"]],template:function(e,o){1&e&&(l.Kb(0,"ion-header"),l.Kb(1,"ion-toolbar"),l.Kb(2,"ion-buttons",0),l.Ib(3,"ion-menu-button"),l.Jb(),l.Kb(4,"ion-title"),l.hc(5,"Add Product"),l.Jb(),l.Jb(),l.Jb(),l.Kb(6,"ion-content"),l.Kb(7,"ion-refresher",1),l.Sb("ionRefresh",(function(e){return o.doRefresh(e)})),l.Ib(8,"ion-refresher-content",2),l.Jb(),l.Kb(9,"form",3),l.Sb("ngSubmit",(function(){return o.addProduct()})),l.Kb(10,"ion-card",4),l.Kb(11,"ion-item"),l.Kb(12,"div"),l.Kb(13,"ion-icon",5),l.Sb("click",(function(){return o.captureImage()})),l.Jb(),l.Jb(),l.Kb(14,"div",6),l.Kb(15,"ion-icon",7),l.Sb("click",(function(){return o.takePhoto()})),l.Jb(),l.Jb(),l.Kb(16,"div"),l.gc(17,g,3,1,"span",8),l.Jb(),l.Jb(),l.gc(18,C,43,2,"div",8),l.Jb(),l.Kb(19,"ion-button",9),l.hc(20,"Submit"),l.Jb(),l.Jb(),l.Jb()),2&e&&(l.xb(9),l.Xb("formGroup",o.addProductForm),l.xb(8),l.Xb("ngIf",o.photo),l.xb(1),l.Xb("ngIf",o.ifUploadPhoto),l.xb(1),l.Xb("disabled",!o.addProductForm.valid))},directives:[n.m,n.N,n.c,n.z,n.M,n.i,n.C,n.D,r.k,r.h,r.c,n.d,n.r,n.n,i.i,n.b,n.v,n.G,n.W,r.g,r.b,n.H,n.q,n.X,n.T,i.h],styles:[".choseCamera[_ngcontent-%COMP%]{font-size:40px;margin-right:15px}.selectCamera[_ngcontent-%COMP%]{font-size:35px;margin-right:15px}.uploads[_ngcontent-%COMP%]{font-size:30px;margin-left:15px}.imageClasss[_ngcontent-%COMP%]{margin-left:10px;border-radius:25px;border:1px solid #00f}"]}),e})()}];let K=(()=>{class e{}return e.\u0275mod=l.Fb({type:e}),e.\u0275inj=l.Eb({factory:function(o){return new(o||e)},imports:[[s.i.forChild(J)],s.i]}),e})();var _=t("tk/3");let T=(()=>{class e{}return e.\u0275mod=l.Fb({type:e}),e.\u0275inj=l.Eb({factory:function(o){return new(o||e)},imports:[[r.i,s.i,_.b,i.b,r.d,n.O,K]]}),e})()}}]);