(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{wb5u:function(t,n,i){"use strict";i.r(n),i.d(n,"ShowRetailerPageModule",(function(){return f}));var e=i("ofXK"),o=i("3Pt+"),r=i("TEn/"),s=i("tyNb"),a=i("fXoL"),l=i("3LUQ"),c=i("Tf6j");function b(t,n){if(1&t&&(a.Kb(0,"ion-item"),a.Kb(1,"ion-grid"),a.Kb(2,"ion-row"),a.Kb(3,"ion-col",9),a.jc(4),a.Jb(),a.Kb(5,"ion-col"),a.Ib(6,"ion-icon",10),a.Ib(7,"ion-icon",11),a.Jb(),a.Jb(),a.Jb(),a.Jb()),2&t){const t=n.$implicit;a.xb(4),a.lc(" ",t.name," ")}}function d(t,n){if(1&t&&(a.Kb(0,"ion-list"),a.ic(1,b,8,1,"ion-item",6),a.Jb()),2&t){const t=n.$implicit;a.xb(1),a.Zb("ngForOf",t)}}const u=[{path:"",component:(()=>{class t{constructor(t,n,i){this.loading=t,this.router=n,this.showRetailer=i,this.alldata=[],this.value=0}ionViewWillEnter(){this.getRetailers()}loadData(t){setTimeout(()=>{console.log("Done"),console.log(t),this.getRetailers(),t.target.complete()},2e3)}getRetailers(){console.log(this.alldata[0]),this.loading.present();const t=new FormData;t.append("skip_id",JSON.stringify(this.value)),this.showRetailer.getRetailers(t).subscribe(t=>{console.log(t),t.data.length>0&&(this.value=this.value+t.data.length,this.alldata.push(t.data)),this.loading.dismiss()},t=>{0==t.status?(this.loading.presentToastWarning("check your internet connection."),this.loading.dismiss()):500==t.status&&(this.loading.presentToastError("Server error."),this.loading.dismiss())})}doRefresh(t){console.log("Begin async operation"),setTimeout(()=>{console.log("Async operation has ended"),t.target.complete()},2e3)}ngOnInit(){}}return t.\u0275fac=function(n){return new(n||t)(a.Hb(l.a),a.Hb(s.g),a.Hb(c.a))},t.\u0275cmp=a.Bb({type:t,selectors:[["app-show-retailer"]],viewQuery:function(t,n){var i;1&t&&a.mc(r.q,!0),2&t&&a.ec(i=a.Tb())&&(n.infiniteScroll=i.first)},decls:15,vars:1,consts:[["slot","start"],["slot","fixed",3,"ionRefresh"],["pullingIcon","chevron-down-circle-outline","pullingText","Pull to refresh","refreshingSpinner","circles"],["vertical","bottom","horizontal","end","slot","fixed"],["routerLink","/add-retailer"],["name","add"],[4,"ngFor","ngForOf"],["threshold","100px",3,"ionInfinite"],["loadingSpinner","bubbles","loadingText","Loading..."],["size","10"],["name","trash-outline",1,"trash"],["name","create"]],template:function(t,n){1&t&&(a.Kb(0,"ion-header"),a.Kb(1,"ion-toolbar"),a.Kb(2,"ion-buttons",0),a.Ib(3,"ion-menu-button"),a.Jb(),a.Kb(4,"ion-title"),a.jc(5,"Retailer List"),a.Jb(),a.Jb(),a.Jb(),a.Kb(6,"ion-content"),a.Kb(7,"ion-refresher",1),a.Sb("ionRefresh",(function(t){return n.doRefresh(t)})),a.Ib(8,"ion-refresher-content",2),a.Jb(),a.Kb(9,"ion-fab",3),a.Kb(10,"ion-fab-button",4),a.Ib(11,"ion-icon",5),a.Jb(),a.Jb(),a.ic(12,d,2,1,"ion-list",6),a.Kb(13,"ion-infinite-scroll",7),a.Sb("ionInfinite",(function(t){return n.loadData(t)})),a.Ib(14,"ion-infinite-scroll-content",8),a.Jb(),a.Jb()),2&t&&(a.xb(12),a.Zb("ngForOf",n.alldata))},directives:[r.o,r.P,r.d,r.B,r.O,r.j,r.E,r.F,r.l,r.m,r.X,s.h,r.p,e.i,r.q,r.r,r.y,r.t,r.n,r.H,r.i],styles:[".trash[_ngcontent-%COMP%]{color:red}"]}),t})()}];let h=(()=>{class t{}return t.\u0275mod=a.Fb({type:t}),t.\u0275inj=a.Eb({factory:function(n){return new(n||t)},imports:[[s.i.forChild(u)],s.i]}),t})(),f=(()=>{class t{}return t.\u0275mod=a.Fb({type:t}),t.\u0275inj=a.Eb({factory:function(n){return new(n||t)},imports:[[e.b,o.d,r.Q,h]]}),t})()}}]);