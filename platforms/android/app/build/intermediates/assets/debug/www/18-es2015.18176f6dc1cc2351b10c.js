(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{wb5u:function(n,t,e){"use strict";e.r(t),e.d(t,"ShowRetailerPageModule",(function(){return f}));var i=e("ofXK"),o=e("3Pt+"),r=e("TEn/"),s=e("tyNb"),a=e("fXoL"),l=e("3LUQ"),c=e("Tf6j");function b(n,t){if(1&n&&(a.Kb(0,"ion-item"),a.Kb(1,"ion-grid"),a.Kb(2,"ion-row"),a.Kb(3,"ion-col",9),a.hc(4),a.Jb(),a.Kb(5,"ion-col"),a.Ib(6,"ion-icon",10),a.Ib(7,"ion-icon",11),a.Jb(),a.Jb(),a.Jb(),a.Jb()),2&n){const n=t.$implicit;a.xb(4),a.jc(" ",n.name," ")}}function h(n,t){if(1&n&&(a.Kb(0,"ion-list"),a.gc(1,b,8,1,"ion-item",6),a.Jb()),2&n){const n=t.$implicit;a.xb(1),a.Xb("ngForOf",n)}}const d=[{path:"",component:(()=>{class n{constructor(n,t,e){this.loading=n,this.router=t,this.showRetailer=e,this.alldata=[],this.value=0}ionViewWillEnter(){this.getRetailers()}loadData(n){setTimeout(()=>{console.log("Done"),console.log(n),this.getRetailers(),n.target.complete()},2e3)}getRetailers(){console.log(this.alldata[0]),this.loading.present();const n=new FormData;n.append("skip_id",JSON.stringify(this.value)),this.showRetailer.getRetailers(n).subscribe(n=>{console.log(n),n.data.length>0&&(this.value=this.value+n.data.length,this.alldata.push(n.data)),this.loading.dismiss()},n=>{0==n.status?(this.loading.presentToastWarning("check your internet connection."),this.loading.dismiss()):500==n.status&&(this.loading.presentToastError("Server error."),this.loading.dismiss())})}doRefresh(n){console.log("Begin async operation"),setTimeout(()=>{console.log("Async operation has ended"),n.target.complete()},2e3)}ngOnInit(){}}return n.\u0275fac=function(t){return new(t||n)(a.Hb(l.a),a.Hb(s.g),a.Hb(c.a))},n.\u0275cmp=a.Bb({type:n,selectors:[["app-show-retailer"]],viewQuery:function(n,t){var e;1&n&&a.kc(r.o,!0),2&n&&a.cc(e=a.Tb())&&(t.infiniteScroll=e.first)},decls:15,vars:1,consts:[["slot","start"],["slot","fixed",3,"ionRefresh"],["pullingIcon","chevron-down-circle-outline","pullingText","Pull to refresh","refreshingSpinner","circles"],["vertical","bottom","horizontal","end","slot","fixed"],["routerLink","/add-retailer"],["name","add"],[4,"ngFor","ngForOf"],["threshold","100px",3,"ionInfinite"],["loadingSpinner","bubbles","loadingText","Loading..."],["size","10"],["name","trash-outline",1,"trash"],["name","create"]],template:function(n,t){1&n&&(a.Kb(0,"ion-header"),a.Kb(1,"ion-toolbar"),a.Kb(2,"ion-buttons",0),a.Ib(3,"ion-menu-button"),a.Jb(),a.Kb(4,"ion-title"),a.hc(5,"Retailer List"),a.Jb(),a.Jb(),a.Jb(),a.Kb(6,"ion-content"),a.Kb(7,"ion-refresher",1),a.Sb("ionRefresh",(function(n){return t.doRefresh(n)})),a.Ib(8,"ion-refresher-content",2),a.Jb(),a.Kb(9,"ion-fab",3),a.Kb(10,"ion-fab-button",4),a.Ib(11,"ion-icon",5),a.Jb(),a.Jb(),a.gc(12,h,2,1,"ion-list",6),a.Kb(13,"ion-infinite-scroll",7),a.Sb("ionInfinite",(function(n){return t.loadData(n)})),a.Ib(14,"ion-infinite-scroll-content",8),a.Jb(),a.Jb()),2&n&&(a.xb(12),a.Xb("ngForOf",t.alldata))},directives:[r.m,r.N,r.c,r.z,r.M,r.i,r.C,r.D,r.j,r.k,r.V,s.h,r.n,i.h,r.o,r.p,r.w,r.r,r.l,r.F,r.h],styles:[".trash[_ngcontent-%COMP%]{color:red}"]}),n})()}];let u=(()=>{class n{}return n.\u0275mod=a.Fb({type:n}),n.\u0275inj=a.Eb({factory:function(t){return new(t||n)},imports:[[s.i.forChild(d)],s.i]}),n})(),f=(()=>{class n{}return n.\u0275mod=a.Fb({type:n}),n.\u0275inj=a.Eb({factory:function(t){return new(t||n)},imports:[[i.b,o.d,r.O,u]]}),n})()}}]);