(function(t){function e(e){for(var n,s,i=e[0],c=e[1],u=e[2],p=0,m=[];p<i.length;p++)s=i[p],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&m.push(r[s][0]),r[s]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);l&&l(e);while(m.length)m.shift()();return a.push.apply(a,u||[]),o()}function o(){for(var t,e=0;e<a.length;e++){for(var o=a[e],n=!0,i=1;i<o.length;i++){var c=o[i];0!==r[c]&&(n=!1)}n&&(a.splice(e--,1),t=s(s.s=o[0]))}return t}var n={},r={app:0},a=[];function s(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,s),o.l=!0,o.exports}s.m=t,s.c=n,s.d=function(t,e,o){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(s.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(o,n,function(e){return t[e]}.bind(null,n));return o},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var u=0;u<i.length;u++)e(i[u]);var l=c;a.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"034f":function(t,e,o){"use strict";var n=o("85ec"),r=o.n(n);r.a},"09ec":function(t,e,o){"use strict";var n=o("3513"),r=o.n(n);r.a},"0db6":function(t,e,o){},1692:function(t,e,o){"use strict";var n=o("357c"),r=o.n(n);r.a},"2e87":function(t,e,o){},3513:function(t,e,o){},"357c":function(t,e,o){},"3c2d":function(t,e,o){"use strict";var n=o("78d1"),r=o.n(n);r.a},"462a":function(t,e,o){},"536b":function(t,e,o){},5408:function(t,e,o){"use strict";var n=o("462a"),r=o.n(n);r.a},"56d7":function(t,e,o){"use strict";o.r(e);o("e260"),o("e6cf"),o("cca6"),o("a79d");var n=o("2b0e"),r=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("router-view"),o("app-footer")],1)},a=[],s=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},i=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"app-footer"},[o("div",[t._v(" Kontakt: info@kurzio.sk ")]),o("div",[t._v(" © 2020 kurzio.sk ")])])}],c=(o("5408"),o("2877")),u={},l=Object(c["a"])(u,s,i,!1,null,"f44fe332",null),p=l.exports,m={name:"app",components:{AppFooter:p}},f=m,v=(o("034f"),Object(c["a"])(f,r,a,!1,null,null,null)),d=v.exports,b=o("8c4f"),_=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"home"},[o("app-description"),o("app-form")],1)},h=[],k=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"app-form-container"},[o("h1",{staticClass:"form__header"},[t._v(" Formulár ")]),o("b-form",{staticClass:"app-form"},[o("app-form-label",{attrs:{text:"Email"}}),o("b-form-input",{staticClass:"form__element form__email",attrs:{type:"email",placeholder:"@"},model:{value:t.form.email,callback:function(e){t.$set(t.form,"email",e)},expression:"form.email"}}),o("app-form-label",{attrs:{text:"Stránky, ktorých ponuku sledovať"}}),o("b-form-group",{staticClass:"form__element"},[o("b-form-checkbox-group",{attrs:{id:"providers"}},[o("input",{attrs:{type:"checkbox",checked:"",disabled:""}}),t._v(" Tipsport ")])],1),o("app-form-label",{attrs:{text:"Športy a súťaže"}}),o("b-form-group",[o("b-form-checkbox-group",{staticClass:"form__row-group"},t._l(t.sports,(function(e){return o("div",{key:e.id,staticClass:"form__element"},[o("app-form-sport-group",{attrs:{sport:e,form:t.form}})],1)})),0)],1),o("app-form-summary",{attrs:{sports:t.sports,form:t.form}}),t.formSubmitted?o("div",{staticClass:"form__success-message"},[t._v(" Formulár bol úspešne odoslaný. Skontroluj si emailovú schránku. ")]):o("b-button",{staticClass:"form__button",attrs:{variant:"success"},on:{click:t.submitForm}},[t._v(" Potvrdiť ")])],1),o("info-box-success",{attrs:{onClose:t.closeInfoBox,showInfoBox:t.showSuccess}}),o("info-box-warning",{attrs:{onClose:t.hideWarning,message:t.warningMessage}})],1)},x=[],g=(o("96cf"),o("1da1")),y=o("bc3a"),j=o.n(y),C={apiUrl:"https://kurzio.sk"},w=C,z=o("11de"),O=o("4797"),B=o("8226"),S=o("c3e6"),F=o("3b99"),$=o("1947"),E=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("b-form-checkbox-group",{staticClass:"sport-group"},[o("h5",[t._v(" "+t._s(t.sport.slovakName)+" ")]),o("div",{staticClass:"sport-group__new-competition"},[o("b-form-checkbox",{attrs:{value:t.sport.id},model:{value:t.form.sports,callback:function(e){t.$set(t.form,"sports",e)},expression:"form.sports"}},[t._v(" Notifikovať o nových súťažiach ")])],1),o("b-form-checkbox-group",{staticClass:"sport-group__competitions",model:{value:t.form.competitions,callback:function(e){t.$set(t.form,"competitions",e)},expression:"form.competitions"}},t._l(t.sport.competitions,(function(e){return o("div",{key:e.id},[o("b-form-checkbox",{attrs:{value:e.id}},[t._v(" "+t._s(e.name)+" ")])],1)})),0)],1)},I=[],P={name:"app-form-sport-group",components:{BFormGroup:B["a"],BFormCheckbox:S["a"],BFormCheckboxGroup:F["a"]},props:{sport:Object,form:Object}},A=P,M=(o("db26"),Object(c["a"])(A,E,I,!1,null,"61a4b57d",null)),N=M.exports,W=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("label",{staticClass:"form__label"},[o("h4",{staticClass:"form__label__text"},[t._v(" "+t._s(t.text)+" ")])])},T=[],G={name:"app-form-label",props:{text:String}},R=G,U=(o("c4cb"),Object(c["a"])(R,W,T,!1,null,"d3ada87e",null)),H=U.exports,K=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"form__summary"},[o("app-form-label",{attrs:{text:"Sumár"}}),o("div",{staticClass:"form__summary__text"},[o("div",{staticClass:"form__summary__container"},[t._v(" Na adresu "+t._s(t.form.email||"...")+" ti príde notifikácia vtedy, keď: ")]),t.followedSports.length>0?o("div",{staticClass:"form__summary__container"},[o("div",{staticClass:"form__summary__text__label"},[t._v(" - pribudne nová súťaž v niektorom zo športov: ")]),t._l(t.followedSports,(function(e){return o("div",{key:e.id},[t._v(" "+t._s(e.slovakName)+" ")])}))],2):t._e(),t.followedCompetitions.length>0?o("div",{staticClass:"form__summary__container"},[o("div",{staticClass:"form__summary__text__label"},[t._v(" - pribudne nový zápas v niektorej zo súťaží: ")]),t._l(t.followedCompetitions,(function(e){return o("div",{key:e.id},[t._v(" "+t._s(e.name)+" ")])}))],2):t._e()])],1)},L=[],Z=(o("4de4"),o("caad"),o("2532"),o("2909")),J=o("b85c"),D={name:"app-form-summary",components:{AppFormLabel:H},props:{sports:Array,form:Object},computed:{followedSports:function(){var t=this;return this.sports.filter((function(e){return t.form.sports.includes(e.id)}))},followedCompetitions:function(){var t,e=this,o=[],n=Object(J["a"])(this.sports);try{for(n.s();!(t=n.n()).done;){var r=t.value;o.push.apply(o,Object(Z["a"])(r.competitions.filter((function(t){return e.form.competitions.includes(t.id)}))))}}catch(a){n.e(a)}finally{n.f()}return o}}},q=D,Q=(o("d482"),Object(c["a"])(q,K,L,!1,null,"3c9244e0",null)),V=Q.exports,X=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("info-box",{attrs:{visibility:t.showInfoBox},on:{onOutsideWindowClick:t.onClose}},[o("div",{staticClass:"info-box__text"},[t._v(" Odoberanie notifikácií treba potvrdiť kliknutím na link v emaili, ktorý sme ti práve odoslali. ")]),o("b-button",{staticClass:"info-box__button",on:{click:t.onClose}},[t._v(" OK ")])],1)},Y=[],tt=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{class:{"infobox--hidden":!t.visibility}},[o("div",{staticClass:"box-container"},[o("div",{staticClass:"infoBox"},[t._t("default")],2)]),o("div",{staticClass:"dimmed-background",on:{click:function(e){return t.$emit("onOutsideWindowClick")}}})])},et=[],ot={name:"info-box",props:{visibility:Boolean}},nt=ot,rt=(o("9027"),Object(c["a"])(nt,tt,et,!1,null,"80451ee0",null)),at=rt.exports,st={name:"info-box-success",components:{InfoBox:at,BButton:$["a"]},props:{showInfoBox:Boolean,onClose:Function}},it=st,ct=(o("1692"),Object(c["a"])(it,X,Y,!1,null,"03ac9d06",null)),ut=ct.exports,lt=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("info-box",{attrs:{visibility:Boolean(t.message)},on:{onOutsideWindowClick:t.onClose}},[o("div",{staticClass:"info-box__text"},[t._v(" "+t._s(t.message)+" ")]),o("b-button",{staticClass:"info-box__button",attrs:{variant:"dark"},on:{click:t.onClose}},[t._v(" OK ")])],1)},pt=[],mt={name:"info-box-success",components:{InfoBox:at,BButton:$["a"]},props:{message:String,onClose:Function}},ft=mt,vt=(o("09ec"),Object(c["a"])(ft,lt,pt,!1,null,"23352a46",null)),dt=vt.exports,bt={name:"app-form",components:{BForm:z["a"],BFormInput:O["a"],BFormGroup:B["a"],BFormCheckbox:S["a"],BFormCheckboxGroup:F["a"],BButton:$["a"],AppFormSportGroup:N,AppFormLabel:H,AppFormSummary:V,InfoBoxSuccess:ut,InfoBoxWarning:dt},data:function(){return{sports:[],form:{email:"",sports:[],competitions:[]},showSuccess:!1,formSubmitted:!1,warningMessage:""}},created:function(){var t=this;return Object(g["a"])(regeneratorRuntime.mark((function e(){var o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,j.a.get("".concat(w.apiUrl,"/api/get-sports"));case 3:o=e.sent,t.sports=o.data,e.next=10;break;case 7:e.prev=7,e.t0=e["catch"](0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()},methods:{submitForm:function(){var t=Object(g["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(this.form.email){t.next=3;break}return this.showWarning("Prosím zadaj email."),t.abrupt("return");case 3:if(0!==this.form.sports.length||0!==this.form.competitions.length){t.next=6;break}return this.showWarning("Treba vybrať aspoň jeden šport alebo jednu súťaž."),t.abrupt("return");case 6:return t.prev=6,this.showSuccess=!0,this.formSubmitted=!0,t.next=11,j.a.post("".concat(w.apiUrl,"/api/subscription/create"),{email:this.form.email,sportIds:this.form.sports,competitionIds:this.form.competitions});case 11:e=t.sent,console.log(e.status),t.next=18;break;case 15:t.prev=15,t.t0=t["catch"](6),console.log(t.t0);case 18:case"end":return t.stop()}}),t,this,[[6,15]])})));function e(){return t.apply(this,arguments)}return e}(),closeInfoBox:function(){this.showSuccess=!1},showWarning:function(t){this.warningMessage=t},hideWarning:function(){this.warningMessage=""}}},_t=bt,ht=(o("3c2d"),Object(c["a"])(_t,k,x,!1,null,"2776e762",null)),kt=ht.exports,xt=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("app-header"),t._m(0)],1)},gt=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"description"},[o("div",{staticClass:"description__content"},[o("h2",[t._v(" Ako to funguje? ")]),o("p",[t._v(" Náš program neustále sleduje ponuku kurzov na stránkach stávkových kancelárií a notifikuje v prípade, keď pribudnú nové kurzy na sledovaný šport či súťaž. Notifikuje v dvoch scenároch: keď pribudne nová súťaž pri sledovanom športe (napr. nový tenisový turnaj), alebo keď pribudnú nové zápasy v sledovanej súťaži (napr. nové zápasy vo futbalovej Premier League). ")]),o("h2",[t._v(" Motivácia ")]),o("p",[t._v(" Pri stanovovaní kurzovej ponuky majú síce stávkové kancelárie predstavu, v akých dimenziách sa pohybuje správna hodnota kurzov (správna v zmysle čo najziskovejšia pre stávkovú kanceláriu), avšak kurzy sa k ich správnym hodnotám blížia až tým, že na nich tipéri hádžu peniaze. Zo začiatku sú teda kurzy často nepresné a pre tipéra ponúkajú príležitosť na zisk, resp. na zníženie rizika pri zvolenom žiadanom zisku. Spravidla platí, že pri menej významných súťažiach sa podobné nepresnosti pri kurzoch vyskytujú častejšie. ")]),o("p",[t._v(" O tom, že tento „problém“ naozaj existuje, svedčí aj to, že niektoré stávkové kancelárie (napr. medzinárodný Pinnacle) to majú ošetrené tak, že najvyššia možná stávka na danú príležitosť je obmedzená na základe množstva peňazí, ktoré je na príležitosti stavené. ")]),o("h2",[t._v(" O webe ")]),o("p",[t._v(" Zatiaľ sledujem len Tipsport, pomaly zapracuvávam aj Fortunu a Niké. Časom z toho snáď bude web, kde sa priamo bude dať vyklikať si tiket a vidieť, v ktorej kancelárii sa najviac oplatí staviť ho. ")]),o("p",[t._v(" Na odoberanie zvolených športov stačí vyplniť formulár nižšie. Notifikácie chodia na email. Z odoberania sa možno odhlásiť kliknutím na odkaz na spodku každej správy. ")])])])}],yt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},jt=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("div",{staticClass:"logo logo--pc"},[t._v(" kurzio - sledovač kurzov ")]),o("div",{staticClass:"logo logo--mobile"},[o("div",[t._v("kurzio")]),o("div",[t._v("-")]),o("div",[t._v("sledovač kurzov")])])])}],Ct={name:"app-header"},wt=Ct,zt=(o("ed92"),Object(c["a"])(wt,yt,jt,!1,null,"65ca8d0a",null)),Ot=zt.exports,Bt={name:"app-description",components:{AppHeader:Ot}},St=Bt,Ft=(o("9db6"),Object(c["a"])(St,xt,gt,!1,null,"35ca6c7f",null)),$t=Ft.exports,Et={name:"Home",components:{AppForm:kt,AppDescription:$t}},It=Et,Pt=Object(c["a"])(It,_,h,!1,null,null,null),At=Pt.exports;n["default"].use(b["a"]);var Mt=[{path:"/",name:"Home",component:At}],Nt=new b["a"]({mode:"history",routes:Mt}),Wt=Nt,Tt=o("2f62");n["default"].use(Tt["a"]);var Gt=new Tt["a"].Store({state:{},mutations:{},actions:{},modules:{}}),Rt=o("0284"),Ut=o.n(Rt),Ht=o("5f5b");o("f9e3"),o("2dd8");n["default"].config.productionTip=!1,n["default"].use(Ht["a"]),n["default"].use(Ut.a,{id:"UA-139597385-3",router:Wt}),new n["default"]({router:Wt,store:Gt,render:function(t){return t(d)}}).$mount("#app")},"78d1":function(t,e,o){},"80fb":function(t,e,o){},"85ec":function(t,e,o){},9027:function(t,e,o){"use strict";var n=o("80fb"),r=o.n(n);r.a},"9db6":function(t,e,o){"use strict";var n=o("c93c"),r=o.n(n);r.a},c4cb:function(t,e,o){"use strict";var n=o("2e87"),r=o.n(n);r.a},c93c:function(t,e,o){},d482:function(t,e,o){"use strict";var n=o("fd75"),r=o.n(n);r.a},db26:function(t,e,o){"use strict";var n=o("0db6"),r=o.n(n);r.a},ed92:function(t,e,o){"use strict";var n=o("536b"),r=o.n(n);r.a},fd75:function(t,e,o){}});
//# sourceMappingURL=app.95f9ff92.js.map