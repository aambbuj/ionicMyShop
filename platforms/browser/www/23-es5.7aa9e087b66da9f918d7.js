!function(){function n(n,i){if(!(n instanceof i))throw new TypeError("Cannot call a class as a function")}function i(n,i){for(var o=0;o<i.length;o++){var e=i[o];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,e.key,e)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{gQLo:function(o,e,t){"use strict";t.r(e),t.d(e,"ShowBrandPageModule",(function(){return y}));var r=t("ofXK"),a=t("3Pt+"),s=t("TEn/"),c=t("tyNb"),l=t("fXoL"),b=t("3LUQ"),u=t("RKQv");function f(n,i){if(1&n&&(l.Kb(0,"ion-item"),l.Kb(1,"ion-grid"),l.Kb(2,"ion-row"),l.Kb(3,"ion-col",9),l.hc(4),l.Jb(),l.Kb(5,"ion-col"),l.Ib(6,"ion-icon",10),l.Ib(7,"ion-icon",11),l.Jb(),l.Jb(),l.Jb(),l.Jb()),2&n){var o=i.$implicit;l.xb(4),l.jc(" ",o.brand_name," ")}}function d(n,i){if(1&n&&(l.Kb(0,"ion-list"),l.gc(1,f,8,1,"ion-item",6),l.Jb()),2&n){var o=i.$implicit;l.xb(1),l.Xb("ngForOf",o)}}var h,g,p,v=[{path:"",component:(h=function(){function o(i,e,t){n(this,o),this.loading=i,this.router=e,this.brand=t,this.brands=[],this.value=0}var e,t,r;return e=o,(t=[{key:"loadData",value:function(n){var i=this;setTimeout((function(){i.getBrands(),n.target.complete()}),2e3)}},{key:"doRefresh",value:function(n){console.log("Begin async operation"),setTimeout((function(){console.log("Async operation has ended"),n.target.complete()}),2e3)}},{key:"ionViewWillEnter",value:function(){this.getBrands()}},{key:"getBrands",value:function(){var n=this;this.loading.present(),console.log(this.value);var i=new FormData;i.append("skip_id",JSON.stringify(this.value)),this.brand.getBrands(i).subscribe((function(i){i.length>0&&(n.value=n.value+i.length,n.brands.push(i)),n.loading.dismiss()}),(function(i){0==i.status?(n.loading.presentToastWarning("check your internet connection."),n.loading.dismiss()):500==i.status&&(n.loading.presentToastError("Server error."),n.loading.dismiss())}))}},{key:"ngOnInit",value:function(){}}])&&i(e.prototype,t),r&&i(e,r),o}(),h.\u0275fac=function(n){return new(n||h)(l.Hb(b.a),l.Hb(c.g),l.Hb(u.a))},h.\u0275cmp=l.Bb({type:h,selectors:[["app-show-brand"]],viewQuery:function(n,i){var o;1&n&&l.kc(s.o,!0),2&n&&l.cc(o=l.Tb())&&(i.infiniteScroll=o.first)},decls:15,vars:1,consts:[["slot","start"],["slot","fixed",3,"ionRefresh"],["pullingIcon","chevron-down-circle-outline","pullingText","Pull to refresh","refreshingSpinner","circles"],["vertical","bottom","horizontal","end","slot","fixed"],["routerLink","/add-brand"],["name","add"],[4,"ngFor","ngForOf"],["threshold","100px",3,"ionInfinite"],["loadingSpinner","bubbles","loadingText","Loading..."],["size","10"],["name","trash-outline",1,"trash"],["name","create"]],template:function(n,i){1&n&&(l.Kb(0,"ion-header"),l.Kb(1,"ion-toolbar"),l.Kb(2,"ion-buttons",0),l.Ib(3,"ion-menu-button"),l.Jb(),l.Kb(4,"ion-title"),l.hc(5,"All Brands"),l.Jb(),l.Jb(),l.Jb(),l.Kb(6,"ion-content"),l.Kb(7,"ion-refresher",1),l.Sb("ionRefresh",(function(n){return i.doRefresh(n)})),l.Ib(8,"ion-refresher-content",2),l.Jb(),l.Kb(9,"ion-fab",3),l.Kb(10,"ion-fab-button",4),l.Ib(11,"ion-icon",5),l.Jb(),l.Jb(),l.gc(12,d,2,1,"ion-list",6),l.Kb(13,"ion-infinite-scroll",7),l.Sb("ionInfinite",(function(n){return i.loadData(n)})),l.Ib(14,"ion-infinite-scroll-content",8),l.Jb(),l.Jb()),2&n&&(l.xb(12),l.Xb("ngForOf",i.brands))},directives:[s.m,s.N,s.c,s.z,s.M,s.i,s.C,s.D,s.j,s.k,s.V,c.h,s.n,r.h,s.o,s.p,s.w,s.r,s.l,s.F,s.h],styles:[".trash[_ngcontent-%COMP%]{color:red}"]}),h)}],m=((p=function i(){n(this,i)}).\u0275mod=l.Fb({type:p}),p.\u0275inj=l.Eb({factory:function(n){return new(n||p)},imports:[[c.i.forChild(v)],c.i]}),p),y=((g=function i(){n(this,i)}).\u0275mod=l.Fb({type:g}),g.\u0275inj=l.Eb({factory:function(n){return new(n||g)},imports:[[r.b,a.d,s.O,m]]}),g)}}])}();