!function(){function e(e,n){var i;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(i=function(e,n){if(!e)return;if("string"==typeof e)return t(e,n);var i=Object.prototype.toString.call(e).slice(8,-1);"Object"===i&&e.constructor&&(i=e.constructor.name);if("Map"===i||"Set"===i)return Array.from(e);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return t(e,n)}(e))||n&&e&&"number"==typeof e.length){i&&(e=i);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var s,a=!0,u=!1;return{s:function(){i=e[Symbol.iterator]()},n:function(){var e=i.next();return a=e.done,e},e:function(e){u=!0,s=e},f:function(){try{a||null==i.return||i.return()}finally{if(u)throw s}}}}function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}function n(e,t,n,i,r,o,s){try{var a=e[o](s),u=a.value}catch(c){return void n(c)}a.done?t(u):Promise.resolve(u).then(i,r)}function i(e){return function(){var t=this,i=arguments;return new Promise((function(r,o){var s=e.apply(t,i);function a(e){n(s,r,o,a,u,"next",e)}function u(e){n(s,r,o,a,u,"throw",e)}a(void 0)}))}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function s(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{vnES:function(t,n,o){"use strict";o.r(n),o.d(n,"ion_nav",(function(){return p})),o.d(n,"ion_nav_link",(function(){return g}));var a=o("A36C"),u=o("Zgba"),c=o("OMvp"),v=o("fYWy"),l=o("bC4P"),h=o("ZaV5"),f=function(){function e(t,n){r(this,e),this.component=t,this.params=n,this.state=1}var t;return s(e,[{key:"init",value:(t=i(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.state=2,this.element){e.next=5;break}return n=this.component,e.next=4,Object(h.a)(this.delegate,t,n,["ion-page","ion-page-invisible"],this.params);case 4:this.element=e.sent;case 5:case"end":return e.stop()}}),e,this)}))),function(e){return t.apply(this,arguments)})},{key:"_destroy",value:function(){Object(c.i)(3!==this.state,"view state must be ATTACHED");var e=this.element;e&&(this.delegate?this.delegate.removeViewFromDom(e.parentElement,e):e.remove()),this.nav=void 0,this.state=3}}]),e}(),d=function(e,t,n){if(!e)return!1;if(e.component!==t)return!1;var i=e.params;if(i===n)return!0;if(!i&&!n)return!0;if(!i||!n)return!1;var r=Object.keys(i),o=Object.keys(n);if(r.length!==o.length)return!1;for(var s=0,a=r;s<a.length;s++){var u=a[s];if(i[u]!==n[u])return!1}return!0},m=function(e,t){return e?e instanceof f?e:new f(e,t):null},p=function(){function t(e){r(this,t),Object(a.o)(this,e),this.ionNavWillLoad=Object(a.g)(this,"ionNavWillLoad",7),this.ionNavWillChange=Object(a.g)(this,"ionNavWillChange",3),this.ionNavDidChange=Object(a.g)(this,"ionNavDidChange",3),this.transInstr=[],this.animationEnabled=!0,this.useRouter=!1,this.isTransitioning=!1,this.destroyed=!1,this.views=[],this.animated=!0}var n,h,p,g,y;return s(t,[{key:"swipeGestureChanged",value:function(){this.gesture&&this.gesture.enable(!0===this.swipeGesture)}},{key:"rootChanged",value:function(){void 0!==this.root&&(this.useRouter||this.setRoot(this.root,this.rootParams))}},{key:"componentWillLoad",value:function(){if(this.useRouter=!!document.querySelector("ion-router")&&!this.el.closest("[no-router]"),void 0===this.swipeGesture){var e=Object(u.b)(this);this.swipeGesture=u.c.getBoolean("swipeBackEnabled","ios"===e)}this.ionNavWillLoad.emit()}},{key:"componentDidLoad",value:(y=i(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.rootChanged(),e.next=3,o.e(2).then(o.bind(null,"xaHa"));case 3:this.gesture=e.sent.createSwipeBackGesture(this.el,this.canStart.bind(this),this.onStart.bind(this),this.onMove.bind(this),this.onEnd.bind(this)),this.swipeGestureChanged();case 5:case"end":return e.stop()}}),e,this)}))),function(){return y.apply(this,arguments)})},{key:"disconnectedCallback",value:function(){var t,n=e(this.views);try{for(n.s();!(t=n.n()).done;){var i=t.value;Object(v.h)(i.element,v.e),i._destroy()}}catch(r){n.e(r)}finally{n.f()}this.gesture&&(this.gesture.destroy(),this.gesture=void 0),this.transInstr.length=this.views.length=0,this.destroyed=!0}},{key:"push",value:function(e,t,n,i){return this.queueTrns({insertStart:-1,insertViews:[{component:e,componentProps:t}],opts:n},i)}},{key:"insert",value:function(e,t,n,i,r){return this.queueTrns({insertStart:e,insertViews:[{component:t,componentProps:n}],opts:i},r)}},{key:"insertPages",value:function(e,t,n,i){return this.queueTrns({insertStart:e,insertViews:t,opts:n},i)}},{key:"pop",value:function(e,t){return this.queueTrns({removeStart:-1,removeCount:1,opts:e},t)}},{key:"popTo",value:function(e,t,n){var i={removeStart:-1,removeCount:-1,opts:t};return"object"==typeof e&&e.component?(i.removeView=e,i.removeStart=1):"number"==typeof e&&(i.removeStart=e+1),this.queueTrns(i,n)}},{key:"popToRoot",value:function(e,t){return this.queueTrns({removeStart:1,removeCount:-1,opts:e},t)}},{key:"removeIndex",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=arguments.length>2?arguments[2]:void 0,i=arguments.length>3?arguments[3]:void 0;return this.queueTrns({removeStart:e,removeCount:t,opts:n},i)}},{key:"setRoot",value:function(e,t,n,i){return this.setPages([{component:e,componentProps:t}],n,i)}},{key:"setPages",value:function(e,t,n){return null==t&&(t={}),!0!==t.animated&&(t.animated=!1),this.queueTrns({insertStart:0,insertViews:e,removeStart:0,removeCount:-1,opts:t},n)}},{key:"setRouteId",value:function(e,t,n,r){var o,s=this.getActiveSync();if(d(s,e,t))return Promise.resolve({changed:!1,element:s.element});var a,u=new Promise((function(e){return o=e})),c={updateURL:!1,viewIsReady:function(e){var t,n,r=new Promise((function(e){return t=e}));return o({changed:!0,element:e,markVisible:(n=i(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(),e.next=3,a;case 3:case"end":return e.stop()}}),e)}))),function(){return n.apply(this,arguments)})}),r}};if("root"===n)a=this.setRoot(e,t,c);else{var v=this.views.find((function(n){return d(n,e,t)}));v?a=this.popTo(v,Object.assign(Object.assign({},c),{direction:"back",animationBuilder:r})):"forward"===n?a=this.push(e,t,Object.assign(Object.assign({},c),{animationBuilder:r})):"back"===n&&(a=this.setRoot(e,t,Object.assign(Object.assign({},c),{direction:"back",animated:!0,animationBuilder:r})))}return u}},{key:"getRouteId",value:(g=i(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.getActiveSync(),e.abrupt("return",t?{id:t.element.tagName,params:t.params,element:t.element}:void 0);case 2:case"end":return e.stop()}}),e,this)}))),function(){return g.apply(this,arguments)})},{key:"getActive",value:function(){return Promise.resolve(this.getActiveSync())}},{key:"getByIndex",value:function(e){return Promise.resolve(this.views[e])}},{key:"canGoBack",value:function(e){return Promise.resolve(this.canGoBackSync(e))}},{key:"getPrevious",value:function(e){return Promise.resolve(this.getPreviousSync(e))}},{key:"getLength",value:function(){return this.views.length}},{key:"getActiveSync",value:function(){return this.views[this.views.length-1]}},{key:"canGoBackSync",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.getActiveSync();return!(!e||!this.getPreviousSync(e))}},{key:"getPreviousSync",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.getActiveSync();if(e){var t=this.views,n=t.indexOf(e);return n>0?t[n-1]:void 0}}},{key:"queueTrns",value:(p=i(regeneratorRuntime.mark((function e(t,n){var i,r,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.isTransitioning||null==t.opts||!t.opts.skipIfBusy){e.next=2;break}return e.abrupt("return",Promise.resolve(!1));case 2:if(i=new Promise((function(e,n){t.resolve=e,t.reject=n})),t.done=n,!t.opts||!1===t.opts.updateURL||!this.useRouter){e.next=13;break}if(!(r=document.querySelector("ion-router"))){e.next=13;break}return e.next=8,r.canTransition();case 8:if(!1!==(o=e.sent)){e.next=11;break}return e.abrupt("return",Promise.resolve(!1));case 11:if("string"!=typeof o){e.next=13;break}return e.abrupt("return",(r.push(o,t.opts.direction||"back"),Promise.resolve(!1)));case 13:return e.abrupt("return",(t.insertViews&&0===t.insertViews.length&&(t.insertViews=void 0),this.transInstr.push(t),this.nextTrns(),i));case 14:case"end":return e.stop()}}),e,this)}))),function(e,t){return p.apply(this,arguments)})},{key:"success",value:function(e,t){if(this.destroyed)this.fireError("nav controller was destroyed",t);else if(t.done&&t.done(e.hasCompleted,e.requiresTransition,e.enteringView,e.leavingView,e.direction),t.resolve(e.hasCompleted),!1!==t.opts.updateURL&&this.useRouter){var n=document.querySelector("ion-router");n&&n.navChanged("back"===e.direction?"back":"forward")}}},{key:"failed",value:function(e,t){this.destroyed?this.fireError("nav controller was destroyed",t):(this.transInstr.length=0,this.fireError(e,t))}},{key:"fireError",value:function(e,t){t.done&&t.done(!1,!1,e),t.reject&&!this.destroyed?t.reject(e):t.resolve(!1)}},{key:"nextTrns",value:function(){if(this.isTransitioning)return!1;var e=this.transInstr.shift();return!!e&&(this.runTransition(e),!0)}},{key:"runTransition",value:(h=i(regeneratorRuntime.mark((function e(t){var n,i,r,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,this.ionNavWillChange.emit(),this.isTransitioning=!0,this.prepareTI(t),n=this.getActiveSync(),i=this.getEnteringView(t,n),n||i){e.next=5;break}throw new Error("no views in the stack to be removed");case 5:if(e.t0=i&&1===i.state,!e.t0){e.next=9;break}return e.next=9,i.init(this.el);case 9:if(this.postViewInit(i,n,t),(r=(t.enteringRequiresTransition||t.leavingRequiresTransition)&&i!==n)&&t.opts&&n&&("back"===t.opts.direction&&(t.opts.animationBuilder=t.opts.animationBuilder||i&&i.animationBuilder),n.animationBuilder=t.opts.animationBuilder),!r){e.next=18;break}return e.next=15,this.transition(i,n,t);case 15:e.t1=e.sent,e.next=19;break;case 18:e.t1={hasCompleted:!0,requiresTransition:!1};case 19:o=e.t1,this.success(o,t),this.ionNavDidChange.emit(),e.next=26;break;case 23:e.prev=23,e.t2=e.catch(0),this.failed(e.t2,t);case 26:this.isTransitioning=!1,this.nextTrns();case 27:case"end":return e.stop()}}),e,this,[[0,23]])}))),function(e){return h.apply(this,arguments)})},{key:"prepareTI",value:function(t){var n=this.views.length;if(t.opts=t.opts||{},void 0===t.opts.delegate&&(t.opts.delegate=this.delegate),void 0!==t.removeView){Object(c.i)(void 0!==t.removeStart,"removeView needs removeStart"),Object(c.i)(void 0!==t.removeCount,"removeView needs removeCount");var i=this.views.indexOf(t.removeView);if(i<0)throw new Error("removeView was not found");t.removeStart+=i}void 0!==t.removeStart&&(t.removeStart<0&&(t.removeStart=n-1),t.removeCount<0&&(t.removeCount=n-t.removeStart),t.leavingRequiresTransition=t.removeCount>0&&t.removeStart+t.removeCount===n),t.insertViews&&((t.insertStart<0||t.insertStart>n)&&(t.insertStart=n),t.enteringRequiresTransition=t.insertStart===n);var r=t.insertViews;if(r){Object(c.i)(r.length>0,"length can not be zero");var o=r.map((function(e){return e instanceof f?e:"component"in e?m(e.component,null===e.componentProps?void 0:e.componentProps):m(e,void 0)})).filter((function(e){return null!==e}));if(0===o.length)throw new Error("invalid views to insert");var s,a=e(o);try{for(a.s();!(s=a.n()).done;){var u=s.value;u.delegate=t.opts.delegate;var v=u.nav;if(v&&v!==this)throw new Error("inserted view was already inserted");if(3===u.state)throw new Error("inserted view was already destroyed")}}catch(l){a.e(l)}finally{a.f()}t.insertViews=o}}},{key:"getEnteringView",value:function(e,t){var n=e.insertViews;if(void 0!==n)return n[n.length-1];var i=e.removeStart;if(void 0!==i)for(var r=this.views,o=i+e.removeCount,s=r.length-1;s>=0;s--){var a=r[s];if((s<i||s>=o)&&a!==t)return a}}},{key:"postViewInit",value:function(t,n,i){Object(c.i)(n||t,"Both leavingView and enteringView are null"),Object(c.i)(i.resolve,"resolve must be valid"),Object(c.i)(i.reject,"reject must be valid");var r,o=i.opts,s=i.insertViews,a=i.removeStart,u=i.removeCount;if(void 0!==a&&void 0!==u){Object(c.i)(a>=0,"removeStart can not be negative"),Object(c.i)(u>=0,"removeCount can not be negative"),r=[];for(var l=0;l<u;l++){var h=this.views[l+a];h&&h!==t&&h!==n&&r.push(h)}o.direction=o.direction||"back"}var f=this.views.length+(void 0!==s?s.length:0)-(void 0!==u?u:0);if(Object(c.i)(f>=0,"final balance can not be negative"),0===f)throw console.warn("You can't remove all the pages in the navigation stack. nav.pop() is probably called too many times.",this,this.el),new Error("navigation stack needs at least one root page");if(s){var d,m=i.insertStart,p=e(s);try{for(p.s();!(d=p.n()).done;){var g=d.value;this.insertViewAt(g,m),m++}}catch(O){p.e(O)}finally{p.f()}i.enteringRequiresTransition&&(o.direction=o.direction||"forward")}if(r&&r.length>0){var y,b=e(r);try{for(b.s();!(y=b.n()).done;){var w=y.value;Object(v.h)(w.element,v.c),Object(v.h)(w.element,v.d),Object(v.h)(w.element,v.e)}}catch(O){b.e(O)}finally{b.f()}var k,S=e(r);try{for(S.s();!(k=S.n()).done;){var j=k.value;this.destroyView(j)}}catch(O){S.e(O)}finally{S.f()}}}},{key:"transition",value:(n=i(regeneratorRuntime.mark((function e(t,n,i){var r,o,s,a,c,l,h,f,d=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=i.opts,o=r.progressAnimation?function(e){return d.sbAni=e}:void 0,s=Object(u.b)(this),a=t.element,c=n&&n.element,l=Object.assign({mode:s,showGoBack:this.canGoBackSync(t),baseEl:this.el,animationBuilder:this.animation||r.animationBuilder||u.c.get("navAnimation"),progressCallback:o,animated:this.animated&&u.c.getBoolean("animated",!0),enteringEl:a,leavingEl:c},r),e.next=8,Object(v.j)(l);case 8:return h=e.sent,f=h.hasCompleted,e.abrupt("return",this.transitionFinish(f,t,n,r));case 11:case"end":return e.stop()}}),e,this)}))),function(e,t,i){return n.apply(this,arguments)})},{key:"transitionFinish",value:function(e,t,n,i){var r=e?t:n;return r&&this.cleanup(r),{hasCompleted:e,requiresTransition:!0,enteringView:t,leavingView:n,direction:i.direction}}},{key:"insertViewAt",value:function(e,t){var n=this.views,i=n.indexOf(e);i>-1?(Object(c.i)(e.nav===this,"view is not part of the nav"),n.splice(t,0,n.splice(i,1)[0])):(Object(c.i)(!e.nav,"nav is used"),e.nav=this,n.splice(t,0,e))}},{key:"removeView",value:function(e){Object(c.i)(2===e.state||3===e.state,"view state should be loaded or destroyed");var t=this.views,n=t.indexOf(e);Object(c.i)(n>-1,"view must be part of the stack"),n>=0&&t.splice(n,1)}},{key:"destroyView",value:function(e){e._destroy(),this.removeView(e)}},{key:"cleanup",value:function(e){if(!this.destroyed)for(var t=this.views,n=t.indexOf(e),i=t.length-1;i>=0;i--){var r=t[i],o=r.element;o&&(i>n?(Object(v.h)(o,v.e),this.destroyView(r)):i<n&&Object(v.i)(o,!0))}}},{key:"canStart",value:function(){return!!this.swipeGesture&&!this.isTransitioning&&0===this.transInstr.length&&this.animationEnabled&&this.canGoBackSync()}},{key:"onStart",value:function(){this.queueTrns({removeStart:-1,removeCount:1,opts:{direction:"back",progressAnimation:!0}},void 0)}},{key:"onMove",value:function(e){this.sbAni&&this.sbAni.progressStep(e)}},{key:"onEnd",value:function(e,t,n){var i=this;if(this.sbAni){this.animationEnabled=!1,this.sbAni.onFinish((function(){i.animationEnabled=!0}),{oneTimeCallback:!0});var r=e?-.001:.001;e?r+=Object(l.a)([0,0],[.32,.72],[0,1],[1,1],t)[0]:(this.sbAni.easing("cubic-bezier(1, 0, 0.68, 0.28)"),r+=Object(l.a)([0,0],[1,0],[.68,.28],[1,1],t)[0]),this.sbAni.progressEnd(e?1:0,r,n)}}},{key:"render",value:function(){return Object(a.j)("slot",null)}},{key:"el",get:function(){return Object(a.k)(this)}}],[{key:"watchers",get:function(){return{swipeGesture:["swipeGestureChanged"],root:["rootChanged"]}}}]),t}();p.style=":host{left:0;right:0;top:0;bottom:0;position:absolute;contain:layout size style;overflow:hidden;z-index:0}";var g=function(){function e(t){var n=this;r(this,e),Object(a.o)(this,t),this.routerDirection="forward",this.onClick=function(){return function(e,t,i,r,o){var s=n.el.closest("ion-nav");if(s)if("forward"===t){if(void 0!==i)return s.push(i,r,{skipIfBusy:!0,animationBuilder:o})}else if("root"===t){if(void 0!==i)return s.setRoot(i,r,{skipIfBusy:!0,animationBuilder:o})}else if("back"===t)return s.pop({skipIfBusy:!0,animationBuilder:o});return Promise.resolve(!1)}(0,n.routerDirection,n.component,n.componentProps,n.routerAnimation)}}return s(e,[{key:"render",value:function(){return Object(a.j)(a.c,{onClick:this.onClick})}},{key:"el",get:function(){return Object(a.k)(this)}}]),e}()}}])}();