!function(){function n(n,o){if(!(n instanceof o))throw new TypeError("Cannot call a class as a function")}function o(n,o){for(var t=0;t<o.length;t++){var e=o[t];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,e.key,e)}}function t(n,t,e){return t&&o(n.prototype,t),e&&o(n,e),n}(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{qojB:function(o,e,i){"use strict";i.r(e),i.d(e,"AddDistributorPageModule",(function(){return j}));var r,b,a,s,u=i("ofXK"),c=i("3Pt+"),d=i("TEn/"),l=i("tyNb"),p=i("fXoL"),m=i("3LUQ"),f=i("tk/3"),h=i("vkgz"),J=i("5zL6"),g=((r=function(){function o(t,e){n(this,o),this.http=t,this.env=e,this.ifLogin=JSON.parse(localStorage.getItem("user"))}return t(o,[{key:"addDistbutor",value:function(n){var o=new f.c({Authorization:this.ifLogin.token_type+" "+this.ifLogin.access_token});return this.http.post(this.env.API_URL+"auth/add-distributor",n,{headers:o}).pipe(Object(h.a)((function(n){return n})))}}]),o}()).\u0275fac=function(n){return new(n||r)(p.Ob(f.a),p.Ob(J.a))},r.\u0275prov=p.Db({token:r,factory:r.\u0275fac,providedIn:"root"}),r),K=[{path:"",component:(b=function(){function o(t,e,i,r){n(this,o),this.loading=t,this.formBuilder=e,this.router=i,this.addDistubor=r,this.addDistributorForm=this.formBuilder.group({name:["",[c.j.required]],email:["",[c.j.required]],password:["",[c.j.required]],phone:["",[c.j.required]],alt_phone:[""],country:["India",c.j.required],state:["West Bengal",c.j.required],city:["",[c.j.required]],address:["",[c.j.required]],pin:["",[c.j.required]]}),this.ifLogin=JSON.parse(localStorage.getItem("user"))}return t(o,[{key:"doRefresh",value:function(n){console.log("Begin async operation"),setTimeout((function(){console.log("Async operation has ended"),n.target.complete()}),2e3)}},{key:"addDIstributor",value:function(){var n=this;this.loading.present(),this.addDistubor.addDistbutor(this.addDistributorForm.value).subscribe((function(o){console.log(o),n.loading.dismiss(),n.loading.presentToastSuccess(o.success),n.router.navigateByUrl("show-distributors")}),(function(o){0==o.status?(n.loading.presentToastWarning("check your internet connection."),n.loading.dismiss()):500==o.status&&(n.loading.dismiss(),n.loading.presentToastError("Server error."))}))}},{key:"ngOnInit",value:function(){}}]),o}(),b.\u0275fac=function(n){return new(n||b)(p.Hb(m.a),p.Hb(c.a),p.Hb(l.g),p.Hb(g))},b.\u0275cmp=p.Bb({type:b,selectors:[["app-add-distributor"]],decls:62,vars:2,consts:[["slot","start"],["slot","fixed",3,"ionRefresh"],["pullingIcon","chevron-down-circle-outline","pullingText","Pull to refresh","refreshingSpinner","circles"],[3,"formGroup","ngSubmit"],[2,"margin-top","10px"],["position","floating"],["type","name","formControlName","name"],["type","email","formControlName","email"],["type","password","formControlName","password"],["type","number","formControlName","phone"],["type","number","formControlName","alt_phone"],["type","name","formControlName","country"],["type","name","formControlName","state"],["type","name","formControlName","city"],["type","name","formControlName","address"],["type","number","formControlName","pin"],["type","submit","shape","round","color","success","expand","block",3,"disabled"]],template:function(n,o){1&n&&(p.Kb(0,"ion-header"),p.Kb(1,"ion-toolbar"),p.Kb(2,"ion-buttons",0),p.Ib(3,"ion-menu-button"),p.Jb(),p.Kb(4,"ion-title"),p.jc(5,"Add Distributor"),p.Jb(),p.Jb(),p.Jb(),p.Kb(6,"ion-content"),p.Kb(7,"ion-refresher",1),p.Sb("ionRefresh",(function(n){return o.doRefresh(n)})),p.Ib(8,"ion-refresher-content",2),p.Jb(),p.Kb(9,"form",3),p.Sb("ngSubmit",(function(){return o.addDIstributor()})),p.Kb(10,"ion-card",4),p.Kb(11,"ion-item"),p.Kb(12,"ion-label",5),p.jc(13,"Name"),p.Jb(),p.Ib(14,"ion-input",6),p.Jb(),p.Jb(),p.Kb(15,"ion-card"),p.Kb(16,"ion-item"),p.Kb(17,"ion-label",5),p.jc(18,"Email"),p.Jb(),p.Ib(19,"ion-input",7),p.Jb(),p.Jb(),p.Kb(20,"ion-card"),p.Kb(21,"ion-item"),p.Kb(22,"ion-label",5),p.jc(23,"Password"),p.Jb(),p.Ib(24,"ion-input",8),p.Jb(),p.Jb(),p.Kb(25,"ion-card"),p.Kb(26,"ion-item"),p.Kb(27,"ion-label",5),p.jc(28,"Phone"),p.Jb(),p.Ib(29,"ion-input",9),p.Jb(),p.Jb(),p.Kb(30,"ion-card"),p.Kb(31,"ion-item"),p.Kb(32,"ion-label",5),p.jc(33,"Alt-Phone"),p.Jb(),p.Ib(34,"ion-input",10),p.Jb(),p.Jb(),p.Kb(35,"ion-card"),p.Kb(36,"ion-item"),p.Kb(37,"ion-label",5),p.jc(38,"Country"),p.Jb(),p.Ib(39,"ion-input",11),p.Jb(),p.Jb(),p.Kb(40,"ion-card"),p.Kb(41,"ion-item"),p.Kb(42,"ion-label",5),p.jc(43,"State"),p.Jb(),p.Ib(44,"ion-input",12),p.Jb(),p.Jb(),p.Kb(45,"ion-card"),p.Kb(46,"ion-item"),p.Kb(47,"ion-label",5),p.jc(48,"City"),p.Jb(),p.Ib(49,"ion-input",13),p.Jb(),p.Jb(),p.Kb(50,"ion-card"),p.Kb(51,"ion-item"),p.Kb(52,"ion-label",5),p.jc(53,"Address"),p.Jb(),p.Ib(54,"ion-input",14),p.Jb(),p.Jb(),p.Kb(55,"ion-card"),p.Kb(56,"ion-item"),p.Kb(57,"ion-label",5),p.jc(58,"Pin"),p.Jb(),p.Ib(59,"ion-input",15),p.Jb(),p.Jb(),p.Kb(60,"ion-button",16),p.jc(61,"Submit"),p.Jb(),p.Jb(),p.Jb()),2&n&&(p.xb(9),p.Zb("formGroup",o.addDistributorForm),p.xb(51),p.Zb("disabled",!o.addDistributorForm.valid))},directives:[d.o,d.P,d.d,d.B,d.O,d.j,d.E,d.F,c.k,c.h,c.c,d.e,d.t,d.x,d.s,d.Z,c.g,c.b,d.V,d.c],styles:[""]}),b)}],y=((s=function o(){n(this,o)}).\u0275mod=p.Fb({type:s}),s.\u0275inj=p.Eb({factory:function(n){return new(n||s)},imports:[[l.i.forChild(K)],l.i]}),s),j=((a=function o(){n(this,o)}).\u0275mod=p.Fb({type:a}),a.\u0275inj=p.Eb({factory:function(n){return new(n||a)},imports:[[c.i,l.i,f.b,u.b,d.Q,y]]}),a)}}])}();