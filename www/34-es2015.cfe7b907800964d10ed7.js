(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{aH0J:function(o,e,n){"use strict";n.r(e),n.d(e,"AddWorkerPageModule",(function(){return m}));var r=n("ofXK"),i=n("3Pt+"),t=n("TEn/"),b=n("tyNb"),a=n("fXoL"),s=n("3LUQ"),d=n("EXdh");const l=[{path:"",component:(()=>{class o{constructor(o,e,n,r){this.loading=o,this.formBuilder=e,this.router=n,this.addWorkers=r,this.addWorkerForm=this.formBuilder.group({name:["",[i.j.required]],email:["",[i.j.required]],password:["",[i.j.required]],phone:["",[i.j.required]],alt_phone:[""],country:["India",i.j.required],state:["West Bengal",i.j.required],city:["",[i.j.required]],address:["",[i.j.required]],pin:["",[i.j.required]]}),this.ifLogin=JSON.parse(localStorage.getItem("user"))}doRefresh(o){console.log("Begin async operation"),setTimeout(()=>{console.log("Async operation has ended"),o.target.complete()},2e3)}addWorker(){this.loading.present(),console.log(this.addWorkerForm.value),this.addWorkers.addWorker(this.addWorkerForm.value).subscribe(o=>{console.log(o),this.loading.dismiss(),this.loading.presentToastSuccess(o.success),this.router.navigateByUrl("show-workers")},o=>{0==o.status?(this.loading.presentToastWarning("check your internet connection."),this.loading.dismiss()):500==o.status&&(this.loading.dismiss(),this.loading.presentToastError("Server error."))})}ngOnInit(){}}return o.\u0275fac=function(e){return new(e||o)(a.Hb(s.a),a.Hb(i.a),a.Hb(b.g),a.Hb(d.a))},o.\u0275cmp=a.Bb({type:o,selectors:[["app-add-worker"]],decls:62,vars:2,consts:[["slot","start"],["slot","fixed",3,"ionRefresh"],["pullingIcon","chevron-down-circle-outline","pullingText","Pull to refresh","refreshingSpinner","circles"],[3,"formGroup","ngSubmit"],[2,"margin-top","10px"],["position","floating"],["type","name","formControlName","name"],["type","email","formControlName","email"],["type","password","formControlName","password"],["type","number","formControlName","phone"],["type","number","formControlName","alt_phone"],["type","name","formControlName","country"],["type","name","formControlName","state"],["type","name","formControlName","city"],["type","name","formControlName","address"],["type","number","formControlName","pin"],["type","submit","shape","round","color","success","expand","block",3,"disabled"]],template:function(o,e){1&o&&(a.Kb(0,"ion-header"),a.Kb(1,"ion-toolbar"),a.Kb(2,"ion-buttons",0),a.Ib(3,"ion-menu-button"),a.Jb(),a.Kb(4,"ion-title"),a.hc(5,"Add Worker"),a.Jb(),a.Jb(),a.Jb(),a.Kb(6,"ion-content"),a.Kb(7,"ion-refresher",1),a.Sb("ionRefresh",(function(o){return e.doRefresh(o)})),a.Ib(8,"ion-refresher-content",2),a.Jb(),a.Kb(9,"form",3),a.Sb("ngSubmit",(function(){return e.addWorker()})),a.Kb(10,"ion-card",4),a.Kb(11,"ion-item"),a.Kb(12,"ion-label",5),a.hc(13,"Name"),a.Jb(),a.Ib(14,"ion-input",6),a.Jb(),a.Jb(),a.Kb(15,"ion-card"),a.Kb(16,"ion-item"),a.Kb(17,"ion-label",5),a.hc(18,"Email"),a.Jb(),a.Ib(19,"ion-input",7),a.Jb(),a.Jb(),a.Kb(20,"ion-card"),a.Kb(21,"ion-item"),a.Kb(22,"ion-label",5),a.hc(23,"Password"),a.Jb(),a.Ib(24,"ion-input",8),a.Jb(),a.Jb(),a.Kb(25,"ion-card"),a.Kb(26,"ion-item"),a.Kb(27,"ion-label",5),a.hc(28,"Phone"),a.Jb(),a.Ib(29,"ion-input",9),a.Jb(),a.Jb(),a.Kb(30,"ion-card"),a.Kb(31,"ion-item"),a.Kb(32,"ion-label",5),a.hc(33,"Alt-Phone"),a.Jb(),a.Ib(34,"ion-input",10),a.Jb(),a.Jb(),a.Kb(35,"ion-card"),a.Kb(36,"ion-item"),a.Kb(37,"ion-label",5),a.hc(38,"Country"),a.Jb(),a.Ib(39,"ion-input",11),a.Jb(),a.Jb(),a.Kb(40,"ion-card"),a.Kb(41,"ion-item"),a.Kb(42,"ion-label",5),a.hc(43,"State"),a.Jb(),a.Ib(44,"ion-input",12),a.Jb(),a.Jb(),a.Kb(45,"ion-card"),a.Kb(46,"ion-item"),a.Kb(47,"ion-label",5),a.hc(48,"City"),a.Jb(),a.Ib(49,"ion-input",13),a.Jb(),a.Jb(),a.Kb(50,"ion-card"),a.Kb(51,"ion-item"),a.Kb(52,"ion-label",5),a.hc(53,"Address"),a.Jb(),a.Ib(54,"ion-input",14),a.Jb(),a.Jb(),a.Kb(55,"ion-card"),a.Kb(56,"ion-item"),a.Kb(57,"ion-label",5),a.hc(58,"Pin"),a.Jb(),a.Ib(59,"ion-input",15),a.Jb(),a.Jb(),a.Kb(60,"ion-button",16),a.hc(61,"Submit"),a.Jb(),a.Jb(),a.Jb()),2&o&&(a.xb(9),a.Xb("formGroup",e.addWorkerForm),a.xb(51),a.Xb("disabled",!e.addWorkerForm.valid))},directives:[t.m,t.N,t.c,t.z,t.M,t.i,t.C,t.D,i.k,i.h,i.c,t.d,t.r,t.v,t.q,t.X,i.g,i.b,t.T,t.b],styles:[""]}),o})()}];let c=(()=>{class o{}return o.\u0275mod=a.Fb({type:o}),o.\u0275inj=a.Eb({factory:function(e){return new(e||o)},imports:[[b.i.forChild(l)],b.i]}),o})();var u=n("tk/3");let m=(()=>{class o{}return o.\u0275mod=a.Fb({type:o}),o.\u0275inj=a.Eb({factory:function(e){return new(e||o)},imports:[[i.i,b.i,u.b,r.b,i.d,t.O,c]]}),o})()}}]);