(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{sRk8:function(n,t,o){"use strict";o.r(t),o.d(t,"ShowOrderPageModule",(function(){return f}));var i=o("ofXK"),e=o("3Pt+"),r=o("TEn/"),s=o("tyNb"),a=o("fXoL"),l=o("3LUQ"),c=o("9Ryk");function b(n,t){if(1&n&&(a.Kb(0,"ion-item"),a.Kb(1,"ion-grid"),a.Kb(2,"ion-row"),a.Kb(3,"ion-col",9),a.hc(4),a.Jb(),a.Kb(5,"ion-col"),a.Ib(6,"ion-icon",10),a.Ib(7,"ion-icon",11),a.Jb(),a.Jb(),a.Jb(),a.Jb()),2&n){const n=t.$implicit;a.xb(4),a.jc(" ",n.name," ")}}function d(n,t){if(1&n&&(a.Kb(0,"ion-list"),a.gc(1,b,8,1,"ion-item",6),a.Jb()),2&n){const n=t.$implicit;a.xb(1),a.Xb("ngForOf",n)}}const u=[{path:"",component:(()=>{class n{constructor(n,t,o){this.loading=n,this.router=t,this.order=o,this.alldata=[],this.value=0}ionViewWillEnter(){this.getDistributors()}loadData(n){setTimeout(()=>{console.log("Done"),console.log(n),this.getDistributors(),n.target.complete()},2e3)}getDistributors(){console.log(this.alldata[0]),this.loading.present();const n=new FormData;n.append("skip_id",JSON.stringify(this.value)),this.order.getOrders(n).subscribe(n=>{console.log(n),n.data.length>0&&(this.value=this.value+n.data.length,this.alldata.push(n.data)),this.loading.dismiss()},n=>{0==n.status?(this.loading.presentToastWarning("check your internet connection."),this.loading.dismiss()):500==n.status&&(this.loading.presentToastError("Server error."),this.loading.dismiss())})}doRefresh(n){console.log("Begin async operation"),setTimeout(()=>{console.log("Async operation has ended"),n.target.complete()},2e3)}ngOnInit(){}}return n.\u0275fac=function(t){return new(t||n)(a.Hb(l.a),a.Hb(s.g),a.Hb(c.a))},n.\u0275cmp=a.Bb({type:n,selectors:[["app-show-order"]],viewQuery:function(n,t){var o;1&n&&a.kc(r.o,!0),2&n&&a.cc(o=a.Tb())&&(t.infiniteScroll=o.first)},decls:15,vars:1,consts:[["slot","start"],["slot","fixed",3,"ionRefresh"],["pullingIcon","chevron-down-circle-outline","pullingText","Pull to refresh","refreshingSpinner","circles"],["vertical","bottom","horizontal","end","slot","fixed"],["routerLink","/add-order"],["name","add"],[4,"ngFor","ngForOf"],["threshold","100px",3,"ionInfinite"],["loadingSpinner","bubbles","loadingText","Loading..."],["size","10"],["name","trash-outline",1,"trash"],["name","create"]],template:function(n,t){1&n&&(a.Kb(0,"ion-header"),a.Kb(1,"ion-toolbar"),a.Kb(2,"ion-buttons",0),a.Ib(3,"ion-menu-button"),a.Jb(),a.Kb(4,"ion-title"),a.hc(5,"Order List"),a.Jb(),a.Jb(),a.Jb(),a.Kb(6,"ion-content"),a.Kb(7,"ion-refresher",1),a.Sb("ionRefresh",(function(n){return t.doRefresh(n)})),a.Ib(8,"ion-refresher-content",2),a.Jb(),a.Kb(9,"ion-fab",3),a.Kb(10,"ion-fab-button",4),a.Ib(11,"ion-icon",5),a.Jb(),a.Jb(),a.gc(12,d,2,1,"ion-list",6),a.Kb(13,"ion-infinite-scroll",7),a.Sb("ionInfinite",(function(n){return t.loadData(n)})),a.Ib(14,"ion-infinite-scroll-content",8),a.Jb(),a.Jb()),2&n&&(a.xb(12),a.Xb("ngForOf",t.alldata))},directives:[r.m,r.N,r.c,r.z,r.M,r.i,r.C,r.D,r.j,r.k,r.V,s.h,r.n,i.h,r.o,r.p,r.w,r.r,r.l,r.F,r.h],styles:[""]}),n})()}];let h=(()=>{class n{}return n.\u0275mod=a.Fb({type:n}),n.\u0275inj=a.Eb({factory:function(t){return new(t||n)},imports:[[s.i.forChild(u)],s.i]}),n})(),f=(()=>{class n{}return n.\u0275mod=a.Fb({type:n}),n.\u0275inj=a.Eb({factory:function(t){return new(t||n)},imports:[[i.b,e.d,r.O,h]]}),n})()}}]);