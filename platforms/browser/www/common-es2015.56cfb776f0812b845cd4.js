(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"0/6H":function(t,e,o){"use strict";o.d(e,"a",(function(){return r}));var n=o("A36C"),i=o("iWo5"),s=o("qULd");const r=(t,e)=>{let o,r;const a=(t,n,i)=>{if("undefined"==typeof document)return;const s=document.elementFromPoint(t,n);s&&e(s)?s!==o&&(l(),c(s,i)):l()},c=(t,e)=>{o=t,r||(r=o);const i=o;Object(n.f)(()=>i.classList.add("ion-activated")),e()},l=(t=!1)=>{if(!o)return;const e=o;Object(n.f)(()=>e.classList.remove("ion-activated")),t&&r!==o&&o.click(),o=void 0};return Object(i.createGesture)({el:t,gestureName:"buttonActiveDrag",threshold:0,onStart:t=>a(t.currentX,t.currentY,s.a),onMove:t=>a(t.currentX,t.currentY,s.b),onEnd:()=>{l(!0),Object(s.e)(),r=void 0}})}},"0rZM":function(t,e,o){"use strict";o.d(e,"a",(function(){return b}));var n=o("3Pt+"),i=o("fXoL"),s=o("TEn/"),r=o("3LUQ"),a=o("tyNb"),c=o("9QKD"),l=o("RKQv"),d=o("ofXK");function u(t,e){if(1&t&&(i.Kb(0,"ion-select-option",10),i.jc(1),i.Jb()),2&t){const t=e.$implicit;i.ac("value",t.id),i.xb(1),i.kc(t.brand_name)}}let b=(()=>{class t{constructor(t,e,o,i,s,r){this.modalController=t,this.loading=e,this.formBuilder=o,this.router=i,this.category=s,this.brand=r,this.addCategoryForm=this.formBuilder.group({brand_id:["",[n.j.required]],category_name:["",[n.j.required]]})}doRefresh(t){console.log("Begin async operation"),setTimeout(()=>{console.log("Async operation has ended"),t.target.complete()},2e3)}ionViewWillEnter(){this.getAllBrands(),console.log(this.router.url)}getAllBrands(){this.loading.present(),this.brand.getAllBrands().subscribe(t=>{console.log(t),this.allBrands=t,this.loading.dismiss()},t=>{0==t.status?(this.loading.presentToastWarning("check your internet connection."),this.loading.dismiss()):500==t.status&&(this.loading.dismiss(),this.loading.presentToastError("Server error."))})}addCategory(){console.log(this.addCategoryForm.value),this.loading.present(),this.category.addCategory(this.addCategoryForm.value).subscribe(t=>{console.log(t),this.loading.dismiss(),this.loading.presentToastSuccess(t.success),"/add-product"==this.router.url&&this.modalController.dismiss(),"/add-product"!=this.router.url&&this.router.navigateByUrl("/show-categories")},t=>{0==t.status?(this.loading.presentToastWarning("check your internet connection."),this.loading.dismiss()):500==t.status&&(this.loading.dismiss(),this.loading.presentToastError("Server error."))})}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)(i.Hb(s.T),i.Hb(r.a),i.Hb(n.a),i.Hb(a.g),i.Hb(c.a),i.Hb(l.a))},t.\u0275cmp=i.Bb({type:t,selectors:[["app-add-category"]],decls:22,vars:3,consts:[["slot","start"],["slot","fixed",3,"ionRefresh"],["pullingIcon","chevron-down-circle-outline","pullingText","Pull to refresh","refreshingSpinner","circles"],[3,"formGroup","ngSubmit"],[2,"margin-top","10px"],["formControlName","brand_id","interface","popover","placeholder","Select Brand"],[3,"value",4,"ngFor","ngForOf"],["position","floating"],["type","name","formControlName","category_name"],["type","submit","shape","round","color","success","expand","block",3,"disabled"],[3,"value"]],template:function(t,e){1&t&&(i.Kb(0,"ion-header"),i.Kb(1,"ion-toolbar"),i.Kb(2,"ion-buttons",0),i.Ib(3,"ion-menu-button"),i.Jb(),i.Kb(4,"ion-title"),i.jc(5,"Add Category"),i.Jb(),i.Jb(),i.Jb(),i.Kb(6,"ion-content"),i.Kb(7,"ion-refresher",1),i.Sb("ionRefresh",(function(t){return e.doRefresh(t)})),i.Ib(8,"ion-refresher-content",2),i.Jb(),i.Kb(9,"form",3),i.Sb("ngSubmit",(function(){return e.addCategory()})),i.Kb(10,"ion-card",4),i.Kb(11,"ion-item"),i.Kb(12,"ion-label"),i.jc(13,"Select Brand"),i.Jb(),i.Kb(14,"ion-select",5),i.ic(15,u,2,2,"ion-select-option",6),i.Jb(),i.Jb(),i.Kb(16,"ion-item"),i.Kb(17,"ion-label",7),i.jc(18,"Category Name"),i.Jb(),i.Ib(19,"ion-input",8),i.Jb(),i.Jb(),i.Kb(20,"ion-button",9),i.jc(21,"Submit"),i.Jb(),i.Jb(),i.Jb()),2&t&&(i.xb(9),i.Zb("formGroup",e.addCategoryForm),i.xb(6),i.Zb("ngForOf",e.allBrands),i.xb(5),i.Zb("disabled",!e.addCategoryForm.valid))},directives:[s.o,s.P,s.d,s.B,s.O,s.j,s.E,s.F,n.k,n.h,n.c,s.e,s.t,s.x,s.I,s.Y,n.g,n.b,d.i,s.s,s.Z,s.c,s.J],styles:[""]}),t})()},"74mu":function(t,e,o){"use strict";o.d(e,"a",(function(){return i})),o.d(e,"b",(function(){return s})),o.d(e,"c",(function(){return n})),o.d(e,"d",(function(){return a}));const n=(t,e)=>null!==e.closest(t),i=(t,e)=>"string"==typeof t&&t.length>0?Object.assign({"ion-color":!0,["ion-color-"+t]:!0},e):e,s=t=>{const e={};return(t=>void 0!==t?(Array.isArray(t)?t:t.split(" ")).filter(t=>null!=t).map(t=>t.trim()).filter(t=>""!==t):[])(t).forEach(t=>e[t]=!0),e},r=/^[a-z][a-z0-9+\-.]*:/,a=async(t,e,o,n)=>{if(null!=t&&"#"!==t[0]&&!r.test(t)){const i=document.querySelector("ion-router");if(i)return null!=e&&e.preventDefault(),i.push(t,o,n)}return!1}},"9QKD":function(t,e,o){"use strict";o.d(e,"a",(function(){return a}));var n=o("tk/3"),i=o("vkgz"),s=o("fXoL"),r=o("5zL6");let a=(()=>{class t{constructor(t,e){this.http=t,this.env=e,this.ifLogin=JSON.parse(localStorage.getItem("user"))}addCategory(t){const e=new n.c({Authorization:this.ifLogin.token_type+" "+this.ifLogin.access_token});return this.http.post(this.env.API_URL+"auth/add-category",t,{headers:e}).pipe(Object(i.a)(t=>t))}getCategories(t){const e=new n.c({Authorization:this.ifLogin.token_type+" "+this.ifLogin.access_token});return this.http.post(this.env.API_URL+"auth/get-categories",t,{headers:e}).pipe(Object(i.a)(t=>t))}}return t.\u0275fac=function(e){return new(e||t)(s.Ob(n.a),s.Ob(r.a))},t.\u0275prov=s.Db({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},"9Ryk":function(t,e,o){"use strict";o.d(e,"a",(function(){return a}));var n=o("tk/3"),i=o("vkgz"),s=o("fXoL"),r=o("5zL6");let a=(()=>{class t{constructor(t,e){this.http=t,this.env=e,this.ifLogin=JSON.parse(localStorage.getItem("user"))}getOrders(t){const e=new n.c({Authorization:this.ifLogin.token_type+" "+this.ifLogin.access_token});return this.http.post(this.env.API_URL+"auth/get-orders",t,{headers:e}).pipe(Object(i.a)(t=>t))}addOrder(t){const e=new n.c({Authorization:this.ifLogin.token_type+" "+this.ifLogin.access_token});return this.http.post(this.env.API_URL+"auth/add-order",t,{headers:e}).pipe(Object(i.a)(t=>t))}updateOrder(t){const e=new n.c({Authorization:this.ifLogin.token_type+" "+this.ifLogin.access_token});return this.http.post(this.env.API_URL+"auth/update-order",t,{headers:e}).pipe(Object(i.a)(t=>t))}}return t.\u0275fac=function(e){return new(e||t)(s.Ob(n.a),s.Ob(r.a))},t.\u0275prov=s.Db({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},EXdh:function(t,e,o){"use strict";o.d(e,"a",(function(){return a}));var n=o("tk/3"),i=o("vkgz"),s=o("fXoL"),r=o("5zL6");let a=(()=>{class t{constructor(t,e){this.http=t,this.env=e,this.ifLogin=JSON.parse(localStorage.getItem("user"))}addWorker(t){const e=new n.c({Authorization:this.ifLogin.token_type+" "+this.ifLogin.access_token});return this.http.post(this.env.API_URL+"auth/add-worker",t,{headers:e}).pipe(Object(i.a)(t=>t))}getWorkers(t){const e=new n.c({Authorization:this.ifLogin.token_type+" "+this.ifLogin.access_token});return this.http.post(this.env.API_URL+"auth/get-workers",t,{headers:e}).pipe(Object(i.a)(t=>t))}}return t.\u0275fac=function(e){return new(e||t)(s.Ob(n.a),s.Ob(r.a))},t.\u0275prov=s.Db({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},GWEW:function(t,e,o){"use strict";o.d(e,"a",(function(){return a}));var n=o("tk/3"),i=o("vkgz"),s=o("fXoL"),r=o("5zL6");let a=(()=>{class t{constructor(t,e){this.http=t,this.env=e,this.ifLogin=JSON.parse(localStorage.getItem("user"))}addSeller(t){const e=new n.c({Authorization:this.ifLogin.token_type+" "+this.ifLogin.access_token});return this.http.post(this.env.API_URL+"auth/add-seller",t,{headers:e}).pipe(Object(i.a)(t=>t))}getSellers(t){const e=new n.c({Authorization:this.ifLogin.token_type+" "+this.ifLogin.access_token});return this.http.post(this.env.API_URL+"auth/get-sellers",t,{headers:e}).pipe(Object(i.a)(t=>t))}}return t.\u0275fac=function(e){return new(e||t)(s.Ob(n.a),s.Ob(r.a))},t.\u0275prov=s.Db({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},OyHp:function(t,e,o){"use strict";o.d(e,"a",(function(){return a}));var n=o("tk/3"),i=o("vkgz"),s=o("fXoL"),r=o("5zL6");let a=(()=>{class t{constructor(t,e){this.http=t,this.env=e,this.ifLogin=JSON.parse(localStorage.getItem("user"))}addProduct(t){const e=new n.c({Authorization:this.ifLogin.token_type+" "+this.ifLogin.access_token});return this.http.post(this.env.API_URL+"auth/add-product",t,{headers:e}).pipe(Object(i.a)(t=>t))}getProducts(){const t=new n.c({Authorization:this.ifLogin.token_type+" "+this.ifLogin.access_token});return this.http.get(this.env.API_URL+"auth/get-products",{headers:t}).pipe(Object(i.a)(t=>t))}uploadTakePhoto(t){const e=new n.c({Authorization:this.ifLogin.token_type+" "+this.ifLogin.access_token});return this.http.post(this.env.API_URL+"auth/upload-take-photo",t,{headers:e}).pipe(Object(i.a)(t=>t))}brandWiseCategory(){const t=new n.c({Authorization:this.ifLogin.token_type+" "+this.ifLogin.access_token});return this.http.get(this.env.API_URL+"auth/brand-wise-category",{headers:t}).pipe(Object(i.a)(t=>t))}sellingProduct(t){const e=new n.c({Authorization:this.ifLogin.token_type+" "+this.ifLogin.access_token});return this.http.post(this.env.API_URL+"auth/selling-product",t,{headers:e}).pipe(Object(i.a)(t=>t))}}return t.\u0275fac=function(e){return new(e||t)(s.Ob(n.a),s.Ob(r.a))},t.\u0275prov=s.Db({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},PSDb:function(t,e,o){"use strict";o.d(e,"a",(function(){return u}));var n=o("3Pt+"),i=o("fXoL"),s=o("TEn/"),r=o("3LUQ"),a=o("tyNb"),c=o("OyHp"),l=o("ofXK");function d(t,e){if(1&t){const t=i.Lb();i.Kb(0,"div",14),i.Kb(1,"div",15),i.Kb(2,"h4",16),i.jc(3),i.Jb(),i.Jb(),i.Kb(4,"div",17),i.Kb(5,"ion-grid",18),i.Kb(6,"ion-row",18),i.Kb(7,"ion-col",19),i.Ib(8,"img",20),i.Jb(),i.Kb(9,"ion-col"),i.Kb(10,"strong",21),i.jc(11),i.Jb(),i.Kb(12,"ion-grid",18),i.Kb(13,"ion-row",18),i.Kb(14,"ion-col"),i.Kb(15,"b",22),i.jc(16),i.Jb(),i.Ib(17,"br"),i.Kb(18,"span",23),i.jc(19),i.Jb(),i.Jb(),i.Kb(20,"ion-col"),i.Kb(21,"b",24),i.jc(22),i.Jb(),i.Ib(23,"br"),i.Kb(24,"ion-button",25),i.Sb("click",(function(){i.fc(t);const o=e.index;return i.Ub().removeItem(o)})),i.jc(25,"Remove"),i.Jb(),i.Jb(),i.Jb(),i.Jb(),i.Jb(),i.Jb(),i.Jb(),i.Jb(),i.Jb()}if(2&t){const t=e.$implicit;i.xb(3),i.lc(" ",t.category_name," "),i.xb(8),i.lc(" ",t.product_name,""),i.xb(5),i.lc("",t.selling_price,"/"),i.xb(3),i.kc(t.product_type),i.xb(3),i.kc(t.brand_name)}}let u=(()=>{class t{constructor(t,e,o,i,s,r){this.modalController=t,this.navParams=e,this.loading=o,this.formBuilder=i,this.router=s,this.product=r,this.data=this.navParams.get("productDetails"),this.sellProductForm=this.formBuilder.group({total_selling_price:["",n.j.required]}),this.productDetails=this.data,console.log(this.productDetails),this.totalPrice()}doRefresh(t){console.log("Begin async operation"),setTimeout(()=>{console.log("Async operation has ended"),t.target.complete()},2e3)}loadData(t){setTimeout(()=>{t.target.complete()},2e3)}totalPrice(){for(let t=0;t<this.productDetails.length;t++)this.totalAmount=null==this.totalAmount?parseInt(this.productDetails[t].selling_price):this.totalAmount+parseInt(this.productDetails[t].selling_price)}addProduct(){this.modalController.dismiss(this.productDetails)}removeItem(t){if(this.totalAmount=0,t>-1){this.productDetails.splice(t,1);for(let t=0;t<this.productDetails.length;t++)this.totalAmount=0==this.totalAmount?parseInt(this.productDetails[t].selling_price):this.totalAmount+parseInt(this.productDetails[t].selling_price)}}closeModal(){this.productDetails.splice(0,this.productDetails.length),this.modalController.dismiss()}sellingProduct(){console.log(this.sellProductForm.value),this.loading.present();const t=new FormData;t.append("sell_products",JSON.stringify(this.productDetails)),t.append("total_amount",JSON.stringify(this.totalAmount)),t.append("total_selling_price",JSON.stringify(this.sellProductForm.value.total_selling_price)),this.product.sellingProduct(t).subscribe(t=>{console.log(t),t.success&&(this.loading.dismiss(),this.loading.presentToastSuccess(t.success),this.productDetails.splice(0,this.productDetails.length),this.modalController.dismiss(t),this.productDetails.splice(0,1),this.router.navigateByUrl("/show-products")),t.error&&(this.loading.dismiss(),this.loading.presentToastWarning(t.error))},t=>{0==t.status?(this.loading.presentToastWarning("check your internet connection."),this.loading.dismiss()):500==t.status&&(this.loading.dismiss(),this.loading.presentToastError("Server error."))})}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)(i.Hb(s.T),i.Hb(s.U),i.Hb(r.a),i.Hb(n.a),i.Hb(a.g),i.Hb(c.a))},t.\u0275cmp=i.Bb({type:t,selectors:[["app-sell-product"]],decls:25,vars:4,consts:[["slot","start"],["slot","fixed",3,"ionRefresh"],["pullingIcon","chevron-down-circle-outline","pullingText","Pull to refresh","refreshingSpinner","circles"],["vertical","top","horizontal","end","edge","","slot","fixed"],[3,"click"],["name","add"],["vertical","top","horizontal","start","edge","","slot","fixed"],["color","danger","size","small",3,"click"],["name","close"],["class","panel panel-primary",4,"ngFor","ngForOf"],[3,"formGroup","ngSubmit"],["position","floating"],["type","number","formControlName","total_selling_price"],["type","submit","shape","round","color","success","expand","block",3,"disabled"],[1,"panel","panel-primary"],[1,"panel-heading"],[1,"panel-title"],[1,"panel-body",2,"padding","2px"],[2,"padding","1px"],["size","4"],["src","assets/login.jpg"],[2,"color","brown","font-size","large","font-style","oblique","font-family","auto"],[2,"color","darkgreen","font-style","oblique","font-family","auto"],[2,"font-size","small"],[1,"text-capitalize","info"],["size","small","color","danger",3,"click"]],template:function(t,e){1&t&&(i.Kb(0,"ion-header"),i.Kb(1,"ion-toolbar"),i.Kb(2,"ion-buttons",0),i.Ib(3,"ion-menu-button"),i.Jb(),i.Kb(4,"ion-title"),i.jc(5,"Sell Product List"),i.Jb(),i.Jb(),i.Jb(),i.Kb(6,"ion-content"),i.Kb(7,"ion-refresher",1),i.Sb("ionRefresh",(function(t){return e.doRefresh(t)})),i.Ib(8,"ion-refresher-content",2),i.Jb(),i.Kb(9,"ion-fab",3),i.Kb(10,"ion-fab-button",4),i.Sb("click",(function(){return e.addProduct()})),i.Ib(11,"ion-icon",5),i.Jb(),i.Jb(),i.Kb(12,"ion-fab",6),i.Kb(13,"ion-fab-button",7),i.Sb("click",(function(){return e.closeModal()})),i.Ib(14,"ion-icon",8),i.Jb(),i.Jb(),i.ic(15,d,26,5,"div",9),i.Kb(16,"strong"),i.jc(17),i.Jb(),i.Kb(18,"form",10),i.Sb("ngSubmit",(function(){return e.sellingProduct()})),i.Kb(19,"ion-item"),i.Kb(20,"ion-label",11),i.jc(21,"Total Selling Amount "),i.Jb(),i.Ib(22,"ion-input",12),i.Jb(),i.Kb(23,"ion-button",13),i.jc(24,"Submit"),i.Jb(),i.Jb(),i.Jb()),2&t&&(i.xb(15),i.Zb("ngForOf",e.productDetails),i.xb(2),i.lc("Total Amount :- ",e.totalAmount,""),i.xb(1),i.Zb("formGroup",e.sellProductForm),i.xb(5),i.Zb("disabled",!e.sellProductForm.valid))},directives:[s.o,s.P,s.d,s.B,s.O,s.j,s.E,s.F,s.l,s.m,s.p,l.i,n.k,n.h,n.c,s.t,s.x,s.s,s.V,n.g,n.b,s.c,s.n,s.H,s.i],styles:[".panel[_ngcontent-%COMP%]{margin-bottom:10px}"]}),t})()},RKQv:function(t,e,o){"use strict";o.d(e,"a",(function(){return a}));var n=o("tk/3"),i=o("vkgz"),s=o("fXoL"),r=o("5zL6");let a=(()=>{class t{constructor(t,e){this.http=t,this.env=e,this.ifLogin=JSON.parse(localStorage.getItem("user"))}addBrand(t){const e=new n.c({Authorization:this.ifLogin.token_type+" "+this.ifLogin.access_token});return this.http.post(this.env.API_URL+"auth/add-brand",t,{headers:e}).pipe(Object(i.a)(t=>t))}getBrands(t){const e=new n.c({Authorization:this.ifLogin.token_type+" "+this.ifLogin.access_token});return this.http.post(this.env.API_URL+"auth/get-brands",t,{headers:e}).pipe(Object(i.a)(t=>t))}getAllBrands(){const t=new n.c({Authorization:this.ifLogin.token_type+" "+this.ifLogin.access_token});return this.http.get(this.env.API_URL+"auth/get-all-brands",{headers:t}).pipe(Object(i.a)(t=>t))}}return t.\u0275fac=function(e){return new(e||t)(s.Ob(n.a),s.Ob(r.a))},t.\u0275prov=s.Db({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},Tf6j:function(t,e,o){"use strict";o.d(e,"a",(function(){return a}));var n=o("tk/3"),i=o("vkgz"),s=o("fXoL"),r=o("5zL6");let a=(()=>{class t{constructor(t,e){this.http=t,this.env=e,this.ifLogin=JSON.parse(localStorage.getItem("user"))}addRetailer(t){const e=new n.c({Authorization:this.ifLogin.token_type+" "+this.ifLogin.access_token});return this.http.post(this.env.API_URL+"auth/add-retailer",t,{headers:e}).pipe(Object(i.a)(t=>t))}getRetailers(t){const e=new n.c({Authorization:this.ifLogin.token_type+" "+this.ifLogin.access_token});return this.http.post(this.env.API_URL+"auth/get-retailers",t,{headers:e}).pipe(Object(i.a)(t=>t))}}return t.\u0275fac=function(e){return new(e||t)(s.Ob(n.a),s.Ob(r.a))},t.\u0275prov=s.Db({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},Uyt4:function(t,e,o){"use strict";o.d(e,"a",(function(){return g}));var n=o("mrSG"),i=o("fXoL"),s=o("TEn/"),r=o("9Ryk"),a=o("3LUQ"),c=o("tyNb"),l=o("ofXK");function d(t,e){if(1&t){const t=i.Lb();i.Kb(0,"ion-button",21),i.Sb("click",(function(){i.fc(t);const e=i.Ub().$implicit;return i.Ub().updteStatus(e.id,e.order_id,"2","Are you sure you want to Accept this?")})),i.jc(1,"Accept"),i.Jb()}}function u(t,e){if(1&t){const t=i.Lb();i.Kb(0,"ion-button",22),i.Sb("click",(function(){i.fc(t);const e=i.Ub().$implicit;return i.Ub().updteStatus(e.id,e.order_id,"3","Are you sure you want to Processing this?")})),i.jc(1,"Processing"),i.Jb()}}function b(t,e){if(1&t){const t=i.Lb();i.Kb(0,"ion-button",23),i.Sb("click",(function(){i.fc(t);const e=i.Ub().$implicit;return i.Ub().updteStatus(e.id,e.order_id,"4","Are you sure you want to Deliver this?")})),i.jc(1,"Deliver"),i.Jb()}}function h(t,e){if(1&t){const t=i.Lb();i.Kb(0,"ion-button",24),i.Sb("click",(function(){i.fc(t);const e=i.Ub().$implicit;return i.Ub().updteStatus(e.id,e.order_id,"5","Are you sure you want to Remove this?")})),i.jc(1,"Remove"),i.Jb()}}function p(t,e){if(1&t&&(i.Kb(0,"ion-card"),i.Kb(1,"ion-row"),i.Kb(2,"ion-col",11),i.Ib(3,"img",12),i.Jb(),i.Kb(4,"ion-col"),i.Kb(5,"div",13),i.Kb(6,"strong"),i.jc(7),i.Jb(),i.Jb(),i.Kb(8,"ion-row"),i.Kb(9,"ion-col",14),i.jc(10,"Price : "),i.Kb(11,"span"),i.jc(12),i.Jb(),i.Jb(),i.Kb(13,"ion-col",14),i.jc(14,"Advance : "),i.Kb(15,"span"),i.jc(16),i.Jb(),i.Jb(),i.Kb(17,"ion-col",14),i.jc(18,"Order : "),i.Kb(19,"span"),i.jc(20),i.Vb(21,"date"),i.Jb(),i.Jb(),i.Kb(22,"ion-col",14),i.jc(23,"Delivery : "),i.Kb(24,"span"),i.jc(25),i.Vb(26,"date"),i.Jb(),i.Jb(),i.Kb(27,"ion-col",15),i.Ib(28,"ion-icon",16),i.Kb(29,"span"),i.jc(30),i.Jb(),i.Jb(),i.Kb(31,"ion-col",15),i.ic(32,d,2,0,"ion-button",17),i.ic(33,u,2,0,"ion-button",18),i.ic(34,b,2,0,"ion-button",19),i.ic(35,h,2,0,"ion-button",20),i.Jb(),i.Jb(),i.Jb(),i.Jb(),i.Jb()),2&t){const t=e.$implicit;i.xb(7),i.kc(t.product_name),i.xb(5),i.kc(t.order_price),i.xb(4),i.kc(t.advance_payment),i.xb(4),i.kc(i.Wb(21,10,t.created_at,"dd/MM/yy")),i.xb(5),i.kc(i.Wb(26,13,t.delivery_date,"dd/MM/yy")),i.xb(5),i.kc(t.customer_phone),i.xb(2),i.Zb("ngIf",1==t.status),i.xb(1),i.Zb("ngIf",2==t.status),i.xb(1),i.Zb("ngIf",3==t.status),i.xb(1),i.Zb("ngIf",4==t.status)}}let g=(()=>{class t{constructor(t,e,o,n,i,s){this.alertController=t,this.order=e,this.modalController=o,this.navParams=n,this.loading=i,this.router=s,this.data=this.navParams.get("orderHistory"),this.orderHistory=this.data,console.log(this.orderHistory)}ionViewWillEnter(){}loadData(t){setTimeout(()=>{console.log("Done"),console.log(t),t.target.complete()},2e3)}doRefresh(t){console.log("Begin async operation"),setTimeout(()=>{console.log("Async operation has ended"),t.target.complete()},2e3)}closeModal(){this.modalController.dismiss()}addOrder(){this.modalController.dismiss(),this.router.navigateByUrl("/add-order")}presentAlertConfirm(){return Object(n.a)(this,void 0,void 0,(function*(){const t=yield this.alertController.create({cssClass:"my-custom-class",header:"Confirm!",message:"<strong>text</strong>!!!",buttons:[{text:"Cancel",role:"cancel",cssClass:"success",handler:t=>{console.log("Confirm Cancel: blah")}},{text:"Ok",handler:()=>{console.log("Confirm Okay")}}]});yield t.present()}))}updteStatus(t,e,o,i){return Object(n.a)(this,void 0,void 0,(function*(){const n=yield this.alertController.create({cssClass:"my-custom-class",header:"Confirm!",message:"<strong>"+i+"</strong>!!!",buttons:[{text:"Cancel",role:"cancel",cssClass:"success"},{text:"Ok",handler:()=>{this.loading.present();const n=new FormData;n.append("id",t),n.append("order_id",e),n.append("update_id",o),this.order.updateOrder(n).subscribe(t=>{console.log(t),this.orderHistory=t.data,this.loading.dismiss(),this.loading.presentToastSuccess(t.success),this.router.navigateByUrl("/show-orders")},t=>{0==t.status?(this.loading.presentToastWarning("check your internet connection."),this.loading.dismiss()):500==t.status&&(this.loading.dismiss(),this.loading.presentToastError("Server error."))})}}]});yield n.present()}))}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)(i.Hb(s.a),i.Hb(r.a),i.Hb(s.T),i.Hb(s.U),i.Hb(a.a),i.Hb(c.g))},t.\u0275cmp=i.Bb({type:t,selectors:[["app-order-history"]],decls:17,vars:1,consts:[["slot","start"],[1,"icon",3,"click"],["name","close"],["slot","fixed",3,"ionRefresh"],["pullingIcon","chevron-down-circle-outline","pullingText","Pull to refresh","refreshingSpinner","circles"],["vertical","bottom","horizontal","end","slot","fixed"],[3,"click"],["name","add"],[4,"ngFor","ngForOf"],["threshold","100px",3,"ionInfinite"],["loadingSpinner","bubbles","loadingText","Loading..."],["size","2",1,"image"],["src","","height","35","width","35"],[1,"fontText"],["size","6",1,"smallText"],[1,"smallText"],["name","call"],["size","small","shape","round",3,"click",4,"ngIf"],["size","small","color","secondary","shape","round",3,"click",4,"ngIf"],["size","small","color","warning","shape","round",3,"click",4,"ngIf"],["size","small","color","danger","shape","round",3,"click",4,"ngIf"],["size","small","shape","round",3,"click"],["size","small","color","secondary","shape","round",3,"click"],["size","small","color","warning","shape","round",3,"click"],["size","small","color","danger","shape","round",3,"click"]],template:function(t,e){1&t&&(i.Kb(0,"ion-header"),i.Kb(1,"ion-toolbar"),i.Kb(2,"ion-buttons",0),i.Ib(3,"ion-menu-button"),i.Jb(),i.Kb(4,"ion-title"),i.jc(5,"Order List "),i.Kb(6,"span",1),i.Sb("click",(function(){return e.closeModal()})),i.Ib(7,"ion-icon",2),i.Jb(),i.Jb(),i.Jb(),i.Jb(),i.Kb(8,"ion-content"),i.Kb(9,"ion-refresher",3),i.Sb("ionRefresh",(function(t){return e.doRefresh(t)})),i.Ib(10,"ion-refresher-content",4),i.Jb(),i.Kb(11,"ion-fab",5),i.Kb(12,"ion-fab-button",6),i.Sb("click",(function(){return e.addOrder()})),i.Ib(13,"ion-icon",7),i.Jb(),i.Jb(),i.ic(14,p,36,16,"ion-card",8),i.Kb(15,"ion-infinite-scroll",9),i.Sb("ionInfinite",(function(t){return e.loadData(t)})),i.Ib(16,"ion-infinite-scroll-content",10),i.Jb(),i.Jb()),2&t&&(i.xb(14),i.Zb("ngForOf",e.orderHistory))},directives:[s.o,s.P,s.d,s.B,s.O,s.p,s.j,s.E,s.F,s.l,s.m,l.i,s.q,s.r,s.e,s.H,s.i,l.j,s.c],pipes:[l.d],styles:[".icon[_ngcontent-%COMP%]{color:red;font-size:25px;margin-left:35vw}.smallText[_ngcontent-%COMP%]{padding:1px;font-size:12px}.image[_ngcontent-%COMP%]{margin-top:5vw}.fontText[_ngcontent-%COMP%]{text-align:center;font-size:15px;color:brown}ion-button[_ngcontent-%COMP%]{font-size:10px}"]}),t})()},ZaV5:function(t,e,o){"use strict";o.d(e,"a",(function(){return n})),o.d(e,"b",(function(){return i}));const n=async(t,e,o,n,i)=>{if(t)return t.attachViewToDom(e,o,i,n);if("string"!=typeof o&&!(o instanceof HTMLElement))throw new Error("framework delegate is missing");const s="string"==typeof o?e.ownerDocument&&e.ownerDocument.createElement(o):o;return n&&n.forEach(t=>s.classList.add(t)),i&&Object.assign(s,i),e.appendChild(s),s.componentOnReady&&await s.componentOnReady(),s},i=(t,e)=>{if(e){if(t)return t.removeViewFromDom(e.parentElement,e);e.remove()}return Promise.resolve()}},h3R7:function(t,e,o){"use strict";o.d(e,"a",(function(){return n}));const n={bubbles:{dur:1e3,circles:9,fn:(t,e,o)=>{const n=t*e/o-t+"ms",i=2*Math.PI*e/o;return{r:5,style:{top:9*Math.sin(i)+"px",left:9*Math.cos(i)+"px","animation-delay":n}}}},circles:{dur:1e3,circles:8,fn:(t,e,o)=>{const n=e/o,i=t*n-t+"ms",s=2*Math.PI*n;return{r:5,style:{top:9*Math.sin(s)+"px",left:9*Math.cos(s)+"px","animation-delay":i}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(t,e)=>({r:6,style:{left:9-9*e+"px","animation-delay":-110*e+"ms"}})},lines:{dur:1e3,lines:12,fn:(t,e,o)=>({y1:17,y2:29,style:{transform:`rotate(${30*e+(e<6?180:-180)}deg)`,"animation-delay":t*e/o-t+"ms"}})},"lines-small":{dur:1e3,lines:12,fn:(t,e,o)=>({y1:12,y2:20,style:{transform:`rotate(${30*e+(e<6?180:-180)}deg)`,"animation-delay":t*e/o-t+"ms"}})}}},hHli:function(t,e,o){"use strict";o.d(e,"a",(function(){return l}));var n=o("3Pt+"),i=o("fXoL"),s=o("3LUQ"),r=o("tyNb"),a=o("RKQv"),c=o("TEn/");let l=(()=>{class t{constructor(t,e,o,i,s){this.loading=t,this.formBuilder=e,this.router=o,this.brand=i,this.modalController=s,this.addBrandForm=this.formBuilder.group({brand_name:["",[n.j.required]]})}doRefresh(t){console.log("Begin async operation"),setTimeout(()=>{console.log("Async operation has ended"),t.target.complete()},2e3)}addBrand(){console.log(this.addBrandForm.value),this.loading.present(),this.brand.addBrand(this.addBrandForm.value).subscribe(t=>{console.log(t),this.loading.dismiss(),this.loading.presentToastSuccess(t.success),"/add-product"==this.router.url&&this.modalController.dismiss(),"/add-product"!=this.router.url&&this.router.navigateByUrl("/show-brands")},t=>{0==t.status?(this.loading.presentToastWarning("check your internet connection."),this.loading.dismiss()):500==t.status&&(this.loading.dismiss(),this.loading.presentToastError("Server error."))})}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)(i.Hb(s.a),i.Hb(n.a),i.Hb(r.g),i.Hb(a.a),i.Hb(c.T))},t.\u0275cmp=i.Bb({type:t,selectors:[["app-add-brand"]],decls:17,vars:2,consts:[["slot","start"],["slot","fixed",3,"ionRefresh"],["pullingIcon","chevron-down-circle-outline","pullingText","Pull to refresh","refreshingSpinner","circles"],[3,"formGroup","ngSubmit"],[2,"margin-top","10px"],["position","floating"],["type","name","formControlName","brand_name"],["type","submit","shape","round","color","success","expand","block",3,"disabled"]],template:function(t,e){1&t&&(i.Kb(0,"ion-header"),i.Kb(1,"ion-toolbar"),i.Kb(2,"ion-buttons",0),i.Ib(3,"ion-menu-button"),i.Jb(),i.Kb(4,"ion-title"),i.jc(5,"Add Brand"),i.Jb(),i.Jb(),i.Jb(),i.Kb(6,"ion-content"),i.Kb(7,"ion-refresher",1),i.Sb("ionRefresh",(function(t){return e.doRefresh(t)})),i.Ib(8,"ion-refresher-content",2),i.Jb(),i.Kb(9,"form",3),i.Sb("ngSubmit",(function(){return e.addBrand()})),i.Kb(10,"ion-card",4),i.Kb(11,"ion-item"),i.Kb(12,"ion-label",5),i.jc(13,"Brand Name"),i.Jb(),i.Ib(14,"ion-input",6),i.Jb(),i.Jb(),i.Kb(15,"ion-button",7),i.jc(16,"Submit"),i.Jb(),i.Jb(),i.Jb()),2&t&&(i.xb(9),i.Zb("formGroup",e.addBrandForm),i.xb(6),i.Zb("disabled",!e.addBrandForm.valid))},directives:[c.o,c.P,c.d,c.B,c.O,c.j,c.E,c.F,n.k,n.h,n.c,c.e,c.t,c.x,c.s,c.Z,n.g,n.b,c.c],styles:[""]}),t})()},jUet:function(t,e,o){"use strict";o.d(e,"a",(function(){return l}));var n=o("3Pt+"),i=o("fXoL"),s=o("3LUQ"),r=o("tyNb"),a=o("8ijX"),c=o("TEn/");let l=(()=>{class t{constructor(t,e,o,i,s){this.loading=t,this.formBuilder=e,this.router=o,this.shop=i,this.modalController=s,this.addShopForm=this.formBuilder.group({shop_name:["",[n.j.required]],shop_phone:["",[n.j.required]],state:["West Bengal",n.j.required],city:["",[n.j.required]],shop_address:[""]})}doRefresh(t){console.log("Begin async operation"),setTimeout(()=>{console.log("Async operation has ended"),t.target.complete()},2e3)}dismiss(){this.modalController.dismiss({dismissed:!0})}addShop(){console.log(this.addShopForm.value),this.loading.present(),this.shop.addShop(this.addShopForm.value).subscribe(t=>{console.log(t),localStorage.setItem("shop",JSON.stringify({id:t.data})),this.loading.dismiss(),this.loading.presentToastSuccess(t.success),this.dismiss(),this.router.navigateByUrl("/deshboard")},t=>{0==t.status?(this.loading.presentToastWarning("check your internet connection."),this.loading.dismiss()):500==t.status&&(this.loading.dismiss(),this.loading.presentToastError("Server error."))})}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)(i.Hb(s.a),i.Hb(n.a),i.Hb(r.g),i.Hb(a.a),i.Hb(c.T))},t.\u0275cmp=i.Bb({type:t,selectors:[["app-add-shop"]],decls:37,vars:2,consts:[["slot","start"],["slot","fixed",3,"ionRefresh"],["pullingIcon","chevron-down-circle-outline","pullingText","Pull to refresh","refreshingSpinner","circles"],[3,"formGroup","ngSubmit"],[2,"margin-top","10px"],["position","floating"],["type","name","formControlName","shop_name"],["type","number","formControlName","shop_phone"],["type","name","formControlName","state"],["type","name","formControlName","city"],["type","text","formControlName","shop_address"],["type","submit","shape","round","color","success","expand","block",3,"disabled"]],template:function(t,e){1&t&&(i.Kb(0,"ion-header"),i.Kb(1,"ion-toolbar"),i.Kb(2,"ion-buttons",0),i.Ib(3,"ion-menu-button"),i.Jb(),i.Kb(4,"ion-title"),i.jc(5,"Add Shop"),i.Jb(),i.Jb(),i.Jb(),i.Kb(6,"ion-content"),i.Kb(7,"ion-refresher",1),i.Sb("ionRefresh",(function(t){return e.doRefresh(t)})),i.Ib(8,"ion-refresher-content",2),i.Jb(),i.Kb(9,"form",3),i.Sb("ngSubmit",(function(){return e.addShop()})),i.Kb(10,"ion-card",4),i.Kb(11,"ion-item"),i.Kb(12,"ion-label",5),i.jc(13,"Shop Name"),i.Jb(),i.Ib(14,"ion-input",6),i.Jb(),i.Jb(),i.Kb(15,"ion-card"),i.Kb(16,"ion-item"),i.Kb(17,"ion-label",5),i.jc(18,"Shop Phone"),i.Jb(),i.Ib(19,"ion-input",7),i.Jb(),i.Jb(),i.Kb(20,"ion-card"),i.Kb(21,"ion-item"),i.Kb(22,"ion-label",5),i.jc(23,"State"),i.Jb(),i.Ib(24,"ion-input",8),i.Jb(),i.Jb(),i.Kb(25,"ion-card"),i.Kb(26,"ion-item"),i.Kb(27,"ion-label",5),i.jc(28,"City"),i.Jb(),i.Ib(29,"ion-input",9),i.Jb(),i.Jb(),i.Kb(30,"ion-card"),i.Kb(31,"ion-item"),i.Kb(32,"ion-label",5),i.jc(33,"Shop Address"),i.Jb(),i.Ib(34,"ion-input",10),i.Jb(),i.Jb(),i.Kb(35,"ion-button",11),i.jc(36,"Submit"),i.Jb(),i.Jb(),i.Jb()),2&t&&(i.xb(9),i.Zb("formGroup",e.addShopForm),i.xb(26),i.Zb("disabled",!e.addShopForm.valid))},directives:[c.o,c.P,c.d,c.B,c.O,c.j,c.E,c.F,n.k,n.h,n.c,c.e,c.t,c.x,c.s,c.Z,n.g,n.b,c.V,c.c],styles:[""]}),t})()},qULd:function(t,e,o){"use strict";o.d(e,"a",(function(){return s})),o.d(e,"b",(function(){return r})),o.d(e,"c",(function(){return i})),o.d(e,"d",(function(){return c})),o.d(e,"e",(function(){return a}));const n={getEngine(){const t=window;return t.TapticEngine||t.Capacitor&&t.Capacitor.isPluginAvailable("Haptics")&&t.Capacitor.Plugins.Haptics},available(){return!!this.getEngine()},isCordova:()=>!!window.TapticEngine,isCapacitor:()=>!!window.Capacitor,impact(t){const e=this.getEngine();if(!e)return;const o=this.isCapacitor()?t.style.toUpperCase():t.style;e.impact({style:o})},notification(t){const e=this.getEngine();if(!e)return;const o=this.isCapacitor()?t.style.toUpperCase():t.style;e.notification({style:o})},selection(){this.impact({style:"light"})},selectionStart(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionStart():t.gestureSelectionStart())},selectionChanged(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionChanged():t.gestureSelectionChanged())},selectionEnd(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionEnd():t.gestureSelectionEnd())}},i=()=>{n.selection()},s=()=>{n.selectionStart()},r=()=>{n.selectionChanged()},a=()=>{n.selectionEnd()},c=t=>{n.impact(t)}}}]);