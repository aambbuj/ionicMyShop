(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{ud99:function(e,t,o){"use strict";o.r(t),o.d(t,"ShowCategoryPageModule",(function(){return d}));var n=o("ofXK"),i=o("3Pt+"),s=o("TEn/"),r=o("tyNb"),a=o("fXoL"),c=o("3LUQ"),l=o("9QKD");function b(e,t){if(1&e&&(a.Kb(0,"ion-item"),a.Kb(1,"ion-grid"),a.Kb(2,"ion-row"),a.Kb(3,"ion-col",9),a.hc(4),a.Jb(),a.Kb(5,"ion-col"),a.Ib(6,"ion-icon",10),a.Ib(7,"ion-icon",11),a.Jb(),a.Jb(),a.Jb(),a.Jb()),2&e){const e=t.$implicit;a.xb(4),a.jc(" ",e.category_name," ")}}function g(e,t){if(1&e&&(a.Kb(0,"ion-list"),a.gc(1,b,8,1,"ion-item",6),a.Jb()),2&e){const e=t.$implicit;a.xb(1),a.Xb("ngForOf",e)}}const h=[{path:"",component:(()=>{class e{constructor(e,t,o){this.loading=e,this.router=t,this.category=o,this.categories=[],this.value=0}loadData(e){setTimeout(()=>{this.getCategories(),e.target.complete()},2e3)}doRefresh(e){console.log("Begin async operation"),setTimeout(()=>{this.getCategories(),console.log("Async operation has ended"),e.target.complete()},2e3)}ionViewWillEnter(){this.getCategories()}getCategories(){this.loading.present(),console.log(this.value);const e=new FormData;e.append("skip_id",JSON.stringify(this.value)),this.category.getCategories(e).subscribe(e=>{console.log(e),e.categories.length>0&&(this.value=this.value+e.categories.length,this.categories.push(e.categories)),this.loading.dismiss()},e=>{0==e.status?(this.loading.presentToastWarning("check your internet connection."),this.loading.dismiss()):500==e.status&&(this.loading.presentToastError("Server error."),this.loading.dismiss())})}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)(a.Hb(c.a),a.Hb(r.g),a.Hb(l.a))},e.\u0275cmp=a.Bb({type:e,selectors:[["app-show-category"]],decls:15,vars:1,consts:[["slot","start"],["slot","fixed",3,"ionRefresh"],["pullingIcon","chevron-down-circle-outline","pullingText","Pull to refresh","refreshingSpinner","circles"],["vertical","bottom","horizontal","end","slot","fixed"],["routerLink","/add-category"],["name","add"],[4,"ngFor","ngForOf"],["threshold","100px",3,"ionInfinite"],["loadingSpinner","bubbles","loadingText","Loading..."],["size","10"],["name","trash-outline",1,"trash"],["name","create"]],template:function(e,t){1&e&&(a.Kb(0,"ion-header"),a.Kb(1,"ion-toolbar"),a.Kb(2,"ion-buttons",0),a.Ib(3,"ion-menu-button"),a.Jb(),a.Kb(4,"ion-title"),a.hc(5,"All Category"),a.Jb(),a.Jb(),a.Jb(),a.Kb(6,"ion-content"),a.Kb(7,"ion-refresher",1),a.Sb("ionRefresh",(function(e){return t.doRefresh(e)})),a.Ib(8,"ion-refresher-content",2),a.Jb(),a.Kb(9,"ion-fab",3),a.Kb(10,"ion-fab-button",4),a.Ib(11,"ion-icon",5),a.Jb(),a.Jb(),a.gc(12,g,2,1,"ion-list",6),a.Kb(13,"ion-infinite-scroll",7),a.Sb("ionInfinite",(function(e){return t.loadData(e)})),a.Ib(14,"ion-infinite-scroll-content",8),a.Jb(),a.Jb()),2&e&&(a.xb(12),a.Xb("ngForOf",t.categories))},directives:[s.m,s.N,s.c,s.z,s.M,s.i,s.C,s.D,s.j,s.k,s.V,r.h,s.n,n.h,s.o,s.p,s.w,s.r,s.l,s.F,s.h],styles:[""]}),e})()}];let u=(()=>{class e{}return e.\u0275mod=a.Fb({type:e}),e.\u0275inj=a.Eb({factory:function(t){return new(t||e)},imports:[[r.i.forChild(h)],r.i]}),e})(),d=(()=>{class e{}return e.\u0275mod=a.Fb({type:e}),e.\u0275inj=a.Eb({factory:function(t){return new(t||e)},imports:[[n.b,i.d,s.O,u]]}),e})()}}]);