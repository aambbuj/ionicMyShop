(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{aFL2:function(e,o,i){"use strict";i.r(o),i.d(o,"AddRetailerPageModule",(function(){return m}));var n=i("ofXK"),t=i("3Pt+"),r=i("TEn/"),a=i("tyNb"),b=i("fXoL"),s=i("3LUQ"),l=i("Tf6j");const d=[{path:"",component:(()=>{class e{constructor(e,o,i,n){this.loading=e,this.formBuilder=o,this.router=i,this.addRetailers=n,this.addRetailerForm=this.formBuilder.group({name:["",[t.j.required]],email:["",[t.j.required]],password:["",[t.j.required]],phone:["",[t.j.required]],alt_phone:[""],country:["India",t.j.required],state:["West Bengal",t.j.required],city:["",[t.j.required]],address:["",[t.j.required]],pin:["",[t.j.required]]}),this.ifLogin=JSON.parse(localStorage.getItem("user"))}doRefresh(e){console.log("Begin async operation"),setTimeout(()=>{console.log("Async operation has ended"),e.target.complete()},2e3)}addRetailer(){this.loading.present(),console.log(this.addRetailerForm.value),this.addRetailers.addRetailer(this.addRetailerForm.value).subscribe(e=>{console.log(e),this.loading.dismiss(),this.loading.presentToastSuccess(e.success),this.router.navigateByUrl("show-retailers")},e=>{0==e.status?(this.loading.presentToastWarning("check your internet connection."),this.loading.dismiss()):500==e.status&&(this.loading.dismiss(),this.loading.presentToastError("Server error."))})}ngOnInit(){}}return e.\u0275fac=function(o){return new(o||e)(b.Hb(s.a),b.Hb(t.a),b.Hb(a.g),b.Hb(l.a))},e.\u0275cmp=b.Bb({type:e,selectors:[["app-add-retailer"]],decls:62,vars:2,consts:[["slot","start"],["slot","fixed",3,"ionRefresh"],["pullingIcon","chevron-down-circle-outline","pullingText","Pull to refresh","refreshingSpinner","circles"],[3,"formGroup","ngSubmit"],[2,"margin-top","10px"],["position","floating"],["type","name","formControlName","name"],["type","email","formControlName","email"],["type","password","formControlName","password"],["type","number","formControlName","phone"],["type","number","formControlName","alt_phone"],["type","name","formControlName","country"],["type","name","formControlName","state"],["type","name","formControlName","city"],["type","name","formControlName","address"],["type","number","formControlName","pin"],["type","submit","shape","round","color","success","expand","block",3,"disabled"]],template:function(e,o){1&e&&(b.Kb(0,"ion-header"),b.Kb(1,"ion-toolbar"),b.Kb(2,"ion-buttons",0),b.Ib(3,"ion-menu-button"),b.Jb(),b.Kb(4,"ion-title"),b.jc(5,"Add Retailer"),b.Jb(),b.Jb(),b.Jb(),b.Kb(6,"ion-content"),b.Kb(7,"ion-refresher",1),b.Sb("ionRefresh",(function(e){return o.doRefresh(e)})),b.Ib(8,"ion-refresher-content",2),b.Jb(),b.Kb(9,"form",3),b.Sb("ngSubmit",(function(){return o.addRetailer()})),b.Kb(10,"ion-card",4),b.Kb(11,"ion-item"),b.Kb(12,"ion-label",5),b.jc(13,"Name"),b.Jb(),b.Ib(14,"ion-input",6),b.Jb(),b.Jb(),b.Kb(15,"ion-card"),b.Kb(16,"ion-item"),b.Kb(17,"ion-label",5),b.jc(18,"Email"),b.Jb(),b.Ib(19,"ion-input",7),b.Jb(),b.Jb(),b.Kb(20,"ion-card"),b.Kb(21,"ion-item"),b.Kb(22,"ion-label",5),b.jc(23,"Password"),b.Jb(),b.Ib(24,"ion-input",8),b.Jb(),b.Jb(),b.Kb(25,"ion-card"),b.Kb(26,"ion-item"),b.Kb(27,"ion-label",5),b.jc(28,"Phone"),b.Jb(),b.Ib(29,"ion-input",9),b.Jb(),b.Jb(),b.Kb(30,"ion-card"),b.Kb(31,"ion-item"),b.Kb(32,"ion-label",5),b.jc(33,"Alt-Phone"),b.Jb(),b.Ib(34,"ion-input",10),b.Jb(),b.Jb(),b.Kb(35,"ion-card"),b.Kb(36,"ion-item"),b.Kb(37,"ion-label",5),b.jc(38,"Country"),b.Jb(),b.Ib(39,"ion-input",11),b.Jb(),b.Jb(),b.Kb(40,"ion-card"),b.Kb(41,"ion-item"),b.Kb(42,"ion-label",5),b.jc(43,"State"),b.Jb(),b.Ib(44,"ion-input",12),b.Jb(),b.Jb(),b.Kb(45,"ion-card"),b.Kb(46,"ion-item"),b.Kb(47,"ion-label",5),b.jc(48,"City"),b.Jb(),b.Ib(49,"ion-input",13),b.Jb(),b.Jb(),b.Kb(50,"ion-card"),b.Kb(51,"ion-item"),b.Kb(52,"ion-label",5),b.jc(53,"Address"),b.Jb(),b.Ib(54,"ion-input",14),b.Jb(),b.Jb(),b.Kb(55,"ion-card"),b.Kb(56,"ion-item"),b.Kb(57,"ion-label",5),b.jc(58,"Pin"),b.Jb(),b.Ib(59,"ion-input",15),b.Jb(),b.Jb(),b.Kb(60,"ion-button",16),b.jc(61,"Submit"),b.Jb(),b.Jb(),b.Jb()),2&e&&(b.xb(9),b.Zb("formGroup",o.addRetailerForm),b.xb(51),b.Zb("disabled",!o.addRetailerForm.valid))},directives:[r.o,r.P,r.d,r.B,r.O,r.j,r.E,r.F,t.k,t.h,t.c,r.e,r.t,r.x,r.s,r.Z,t.g,t.b,r.V,r.c],styles:[""]}),e})()}];let c=(()=>{class e{}return e.\u0275mod=b.Fb({type:e}),e.\u0275inj=b.Eb({factory:function(o){return new(o||e)},imports:[[a.i.forChild(d)],a.i]}),e})();var u=i("tk/3");let m=(()=>{class e{}return e.\u0275mod=b.Fb({type:e}),e.\u0275inj=b.Eb({factory:function(o){return new(o||e)},imports:[[t.i,a.i,u.b,n.b,t.d,r.Q,c]]}),e})()}}]);