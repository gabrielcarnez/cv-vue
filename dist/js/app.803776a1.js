(function(e){function t(t){for(var n,r,o=t[0],l=t[1],c=t[2],p=0,d=[];p<o.length;p++)r=o[p],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&d.push(i[r][0]),i[r]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);u&&u(t);while(d.length)d.shift()();return s.push.apply(s,c||[]),a()}function a(){for(var e,t=0;t<s.length;t++){for(var a=s[t],n=!0,o=1;o<a.length;o++){var l=a[o];0!==i[l]&&(n=!1)}n&&(s.splice(t--,1),e=r(r.s=a[0]))}return e}var n={},i={app:0},s=[];function r(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=e,r.c=n,r.d=function(e,t,a){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(a,n,function(t){return e[t]}.bind(null,n));return a},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=t,o=o.slice();for(var c=0;c<o.length;c++)t(o[c]);var u=l;s.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"49f8":function(e,t,a){var n={"./en.json":"edd4","./es.json":"a306"};function i(e){var t=s(e);return a(t)}function s(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}i.keys=function(){return Object.keys(n)},i.resolve=s,e.exports=i,i.id="49f8"},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("Menu",{attrs:{menu:e.menu}}),a("router-view")],1)},s=[],r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("nav",{staticClass:"navbar navbar-expand-lg navbar-dark bg-primary fixed-top",attrs:{id:"sideNav"}},[a("a",{staticClass:"navbar-brand js-scroll-trigger",attrs:{href:"#page-top"}},[a("span",{staticClass:"d-block d-lg-none"},[e._v(e._s(e.getName))]),e._m(0)]),a("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},on:{click:e.showMenu}},[a("span",{staticClass:"navbar-toggler-icon"})]),a("div",{staticClass:"collapse navbar-collapse",class:e.visible?"show":"",attrs:{id:"navbarSupportedContent"}},[a("ul",{staticClass:"navbar-nav"},e._l(e.menu,(function(t,n){return a("li",{key:"menu-"+n,staticClass:"nav-item"},[t.path?a("router-link",{staticClass:"nav-link js-scroll-trigger",attrs:{to:t.path}},[e._v(e._s(t.title))]):e._e(),t.pdf?a("a",{staticClass:"nav-link js-scroll-trigger",attrs:{href:t.pdf,download:"cv",target:"_blank"}},[e._v(e._s(t.title))]):e._e(),t.link?a("a",{staticClass:"nav-link js-scroll-trigger",attrs:{href:t.link,target:"_blank"}},[e._v(e._s(t.title)),a("small")]):e._e()],1)})),0)]),e._e()],2)},o=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",{staticClass:"d-none d-lg-block"},[n("img",{staticClass:"img-fluid img-profile rounded-circle mx-auto mb-2",attrs:{src:a("6284"),alt:""}})])}],l={name:"Menu",props:{menu:Array},methods:{showMenu:function(){this.visible=!this.visible},isMobile:function(){return!!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)}},data:function(){return{visible:!1,langs:["en","es"]}}},c=l,u=a("2877"),p=Object(u["a"])(c,r,o,!1,null,"150a1eca",null),d=p.exports,m={name:"App",components:{Menu:d},data:function(){return{menu:[{title:this.$t("menu.about"),path:"/"},{title:this.$t("menu.experience"),path:"/experience"},{title:this.$t("menu.education"),path:"/education"},{title:this.$t("menu.skills"),path:"/skills"},{title:this.$t("menu.download-cv"),pdf:"cv.pdf"},{title:this.$t("menu.contact"),path:"/contact"},{title:this.$t("menu.reaact-version"),link:"http://gabrielcarnez.com.ar/react-cv/"},{title:this.$t("menu.show-code"),link:"https://github.com/gabrielcarnez/cv-vue"}]}}},f=m,v=Object(u["a"])(f,i,s,!1,null,null,null),b=v.exports,h=a("8c4f"),g=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",{staticClass:"resume-section",attrs:{id:"about"}},[a("div",{staticClass:"resume-section-content"},[e._m(0),e._m(1),a("p",{staticClass:"lead mb-5"},[e._v(" "+e._s(e.$t("about.description",{years:e.getYearsExperience()}))+" ")]),a("SocialIcons",{attrs:{linkedin:"https://www.linkedin.com/in/gabriel-david-carnez/",facebook:"https://www.facebook.com/gabriel.carnez/"}})],1)])},_=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("h1",{staticClass:"mb-0"},[e._v(" Gabriel "),a("span",{staticClass:"text-primary"},[e._v("Carnez")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"subheading mb-5"},[e._v(" LA PLATA, BUENOS AIRES, ARGENTINA · CO 1900 · "),a("a",{attrs:{href:"GABRIEL.CARNEZ@GMAIL.COM"}},[e._v("GABRIEL.CARNEZ@GMAIL.COM")])])}],k=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"social-icons"},[e.linkedin?a("a",{staticClass:"social-icon",attrs:{target:"_blank",href:e.linkedin}},[a("i",{staticClass:"fab fa-linkedin-in"})]):e._e(),e.github?a("a",{staticClass:"social-icon",attrs:{target:"_blank",href:e.github}},[a("i",{staticClass:"fab fa-github"})]):e._e(),e.twitter?a("a",{staticClass:"social-icon",attrs:{target:"_blank",href:e.twitter}},[a("i",{staticClass:"fab fa-twitter"})]):e._e(),e.facebook?a("a",{staticClass:"social-icon",attrs:{target:"_blank",href:e.facebook}},[a("i",{staticClass:"fab fa-facebook-f"})]):e._e()])},C=[],E={name:"Social-icons",props:{linkedin:String,github:String,twitter:String,facebook:String},data:function(){return{}}},y=E,x=Object(u["a"])(y,k,C,!1,null,"b6659130",null),w=x.exports,$={name:"About",components:{SocialIcons:w},methods:{getYearsExperience:function(){var e=2014,t=(new Date).getFullYear(),a=t-e;return a}},data:function(){return{}}},A=$,S=Object(u["a"])(A,g,_,!1,null,null,null),O=S.exports,D=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",{staticClass:"resume-section",attrs:{id:"experience"}},[a("div",{staticClass:"resume-section-content"},[a("h2",{staticClass:"mb-5"},[e._v("Experience")]),e._l(e.experience,(function(e,t){return a("ExprienceCard",{key:"e-"+t,attrs:{title:e.title,subTitle:e.subTitle,time:e.time,description:e.description}})}))],2)])},P=[],N=(a("99af"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"d-flex flex-column flex-md-row justify-content-between mb-5"},[a("div",{staticClass:"flex-grow-1"},[a("h3",{staticClass:"mb-0"},[e._v(e._s(e.title))]),a("div",{staticClass:"subheading mb-3"},[e._v(e._s(e.subTitle))]),a("p",[e._v(" "+e._s(e.description)+" ")])]),a("div",{staticClass:"flex-shrink-0"},[a("span",{staticClass:"text-primary"},[e._v(e._s(e.time))])])])}),j=[],M={name:"Exprience-card",props:{title:String,subTitle:String,time:String,description:String}},R=M,I=Object(u["a"])(R,N,j,!1,null,null,null),L=I.exports,T={name:"Experience",components:{ExprienceCard:L},data:function(){return{experience:[{title:"FABA",subTitle:this.$t("experience.full-stack"),time:this.$t("experience.FABA.time"),description:this.$t("experience.FABA.description")},{title:"FREELANCE",subTitle:this.$t("experience.full-stack"),time:this.$t("experience.FREELANCE.time"),description:this.$t("experience.FREELANCE.description")},{title:"ARZION",subTitle:"".concat(this.$t("experience.full-stack")," - ").concat(this.$t("experience.front-end")),time:this.$t("experience.ARZION.time"),description:this.$t("experience.ARZION.description")},{title:"SUONPER",subTitle:this.$t("experience.full-stack"),time:this.$t("experience.SUONPER.time"),description:this.$t("experience.SUONPER.description")}]}}},F=T,q=Object(u["a"])(F,D,P,!1,null,null,null),J=q.exports,B=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",{staticClass:"resume-section",attrs:{id:"education"}},[a("div",{staticClass:"resume-section-content"},[a("h2",{staticClass:"mb-5"},[e._v("EDUCATION")]),e._l(e.experience,(function(e,t){return a("ExprienceCard",{key:"e-"+t,attrs:{title:e.title,subTitle:e.subTitle,time:e.time,description:e.description}})}))],2)])},U=[],G=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"d-flex flex-column flex-md-row justify-content-between mb-5"},[a("div",{staticClass:"flex-grow-1"},[a("h3",{staticClass:"mb-0"},[e._v(e._s(e.title))]),a("div",{staticClass:"subheading mb-3"},[e._v(e._s(e.subTitle))])]),a("div",{staticClass:"flex-shrink-0"},[a("span",{staticClass:"text-primary"},[e._v(e._s(e.time))])])])},V=[],z={name:"Education-card",props:{title:String,subTitle:String,time:String}},Z=z,H=Object(u["a"])(Z,G,V,!1,null,null,null),Y=H.exports,K={name:"Education",components:{ExprienceCard:Y},data:function(){return{experience:[{title:"UTN - FRLP",subTitle:this.$t("education.utn.title"),time:this.$t("education.utn.time")},{title:"CFP 40",subTitle:this.$t("education.cfp_1.title"),time:this.$t("education.cfp_1.time")},{title:"CFP 402",subTitle:this.$t("education.cfp_2.title"),time:this.$t("education.cfp_2.time")}]}}},W=K,Q=Object(u["a"])(W,B,U,!1,null,null,null),X=Q.exports,ee=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",{staticClass:"resume-section",attrs:{id:"skills"}},[a("div",{staticClass:"resume-section-content"},[a("h2",{staticClass:"mb-5"},[e._v("Skills")]),a("div",{staticClass:"subheading mb-3"},[e._v("Programming Languages & Tools")]),a("SkillIcons",{attrs:{"skill-list":e.skillIcons}}),a("div",{staticClass:"subheading mb-3"},[e._v("Workflow")]),a("SkillList",{attrs:{"skils-list":e.skilsList}})],1)])},te=[],ae=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ul",{staticClass:"list-inline dev-icons"},e._l(e.skillList,(function(e,t){return a("li",{key:"skill-"+t,staticClass:"list-inline-item"},[a("i",{class:"fab fa-"+e})])})),0)},ne=[],ie={name:"skills-icons",props:{"skill-list":Array},data:function(){return{}}},se=ie,re=Object(u["a"])(se,ae,ne,!1,null,"2d6363d9",null),oe=re.exports,le=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ul",{staticClass:"fa-ul mb-0"},e._l(e.skilsList,(function(t,n){return a("li",{key:"list-"+n},[e._m(0,!0),e._v(" "+e._s(t)+" ")])})),0)},ce=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("span",{staticClass:"fa-li"},[a("i",{staticClass:"fas fa-check"})])}],ue={name:"Skills-list",props:{"skils-list":Array}},pe=ue,de=Object(u["a"])(pe,le,ce,!1,null,null,null),me=de.exports,fe={name:"Skills",components:{SkillIcons:oe,SkillList:me},data:function(){return{skillIcons:["css3-alt","html5","js","react","node-js","vuejs","php","git","bootstrap"],skilsList:[this.$t("skills.responsive-design"),this.$t("skills.cross-browser-testing-debugging"),this.$t("skills.mobile-first-responsive-design"),this.$t("skills.cross-functional-teams"),this.$t("skills.agile-development-scrum")]}}},ve=fe,be=Object(u["a"])(ve,ee,te,!1,null,null,null),he=be.exports,ge=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",{staticClass:"resume-section",attrs:{id:"contact"}},[a("div",{staticClass:"resume-section-content"},[a("h2",{staticClass:"mb-0"},[e._v(" "+e._s(e.$t("menu.contact"))+" ")]),e._m(0),!e.request.success&&e.request.errors.length>0?a("EmailError",{attrs:{errors:e.request.errors}}):e._e(),e.request.success?e._e():a("div",{staticClass:"lead mb-5"},[a("div",[e._l(e.form,(function(t,n){return a("Input",{key:"input-"+n,attrs:{label:t.label,type:t.type,name:t.name,inputData:t.value},on:{"update:inputData":function(a){return e.$set(t,"value",a)},"update:input-data":function(a){return e.$set(t,"value",a)}}})})),a("button",{attrs:{disabled:e.loading},on:{click:e.sendEmail}},[e.loading?e._e():a("span",[e._v(e._s(e.$t("contact.send")))]),e.loading?a("div",{staticClass:"spinner"},[a("div",{staticClass:"rect1"}),a("div",{staticClass:"rect2"}),a("div",{staticClass:"rect3"}),a("div",{staticClass:"rect4"}),a("div",{staticClass:"rect5"})]):e._e()])],2)]),e.request.success&&0==e.request.errors.length?a("EmailSuccess"):e._e()],1)])},_e=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"subheading mb-5"},[a("a",{attrs:{mail:"GABRIEL.CARNEZ@GMAIL.COM"}},[e._v("GABRIEL.CARNEZ@GMAIL.COM - tel:+54 221-6138052")])])}],ke=(a("b0c0"),a("d3b7"),a("3ca3"),a("ddb0"),a("2b3d"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("shadow",["textarea"!==e.type?a("div",[a("label",[e._v(e._s(e.label))]),a("br"),"checkbox"===e.type?a("input",{directives:[{name:"model",rawName:"v-model",value:e.inputData,expression:"inputData"}],attrs:{name:e.name,type:"checkbox"},domProps:{checked:Array.isArray(e.inputData)?e._i(e.inputData,null)>-1:e.inputData},on:{keyup:function(t){return e.$emit("update:inputData",e.inputData)},change:function(t){var a=e.inputData,n=t.target,i=!!n.checked;if(Array.isArray(a)){var s=null,r=e._i(a,s);n.checked?r<0&&(e.inputData=a.concat([s])):r>-1&&(e.inputData=a.slice(0,r).concat(a.slice(r+1)))}else e.inputData=i}}}):"radio"===e.type?a("input",{directives:[{name:"model",rawName:"v-model",value:e.inputData,expression:"inputData"}],attrs:{name:e.name,type:"radio"},domProps:{checked:e._q(e.inputData,null)},on:{keyup:function(t){return e.$emit("update:inputData",e.inputData)},change:function(t){e.inputData=null}}}):a("input",{directives:[{name:"model",rawName:"v-model",value:e.inputData,expression:"inputData"}],attrs:{name:e.name,type:e.type},domProps:{value:e.inputData},on:{keyup:function(t){return e.$emit("update:inputData",e.inputData)},input:function(t){t.target.composing||(e.inputData=t.target.value)}}})]):e._e(),"textarea"==e.type?a("div",[a("label",[e._v(e._s(e.label))]),a("br"),a("textarea",{directives:[{name:"model",rawName:"v-model",value:e.inputData,expression:"inputData"}],attrs:{name:e.name},domProps:{value:e.inputData},on:{keyup:function(t){return e.$emit("update:inputData",e.inputData)},input:function(t){t.target.composing||(e.inputData=t.target.value)}}})]):e._e()])}),Ce=[],Ee={name:"Input",props:{label:String,type:String,name:String,inputData:String},data:function(){return{}}},ye=Ee,xe=(a("630d"),Object(u["a"])(ye,ke,Ce,!1,null,"285330d4",null)),we=xe.exports,$e=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"lead mb-5"},[e._v(" "+e._s(e.$t("contact.message-was-send"))+" ")])},Ae=[],Se={name:"Email-success",data:function(){return{}}},Oe=Se,De=Object(u["a"])(Oe,$e,Ae,!1,null,"09e22b7b",null),Pe=De.exports,Ne=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"lead mb-5"},[a("p",[e._v(e._s(e.$t("contact.an-error!")))]),e._l(e.errors,(function(t){return a("p",["server-error"==t?a("span",[e._v(" "+e._s(e.$t("contact.server-fail",{input:t}))+" ")]):e._e(),"server-error"!=t?a("span",[e._v(" "+e._s(e.$t("contact.input-fail",{input:t}))+" ")]):e._e()])}))],2)},je=[],Me={name:"Email-error",props:{errors:Array},data:function(){return{}}},Re=Me,Ie=(a("c044"),Object(u["a"])(Re,Ne,je,!1,null,"03381ad0",null)),Le=Ie.exports,Te={name:"Contact",components:{Input:we,EmailSuccess:Pe,EmailError:Le},methods:{validateForm:function(){for(var e in this.form)this.form[e].value||this.request.errors.push(this.form[e].name);return 0==this.request.errors.length},sendEmail:function(){var e=this,t=this;if(!t.validateForm())return!1;t.loading=!0;var a=new URLSearchParams;for(var n in t.form)a.append(t.form[n].name,t.form[n].value);t.request.errors=[],t.axios.post(t.url,a).then((function(e){var a=e.data;if(t.request.success=a.success,t.loading=!1,a.success){for(var n in t.form)t.form[n].value="";t.request.errors=[]}else t.request.errors=a.messsage})).catch((function(a){console.log(a),t.request.errors=["server-error"],e.loading=!1}))}},data:function(){return{loading:!1,url:"http://gabrielcarnez.com.ar/send-email.php",request:{success:!1,errors:[]},form:{email:{label:this.$t("contact.email"),type:"email",name:"email",value:""},name:{label:this.$t("contact.name"),type:"text",name:"name",value:""},phone:{label:this.$t("contact.phone"),type:"phone",name:"phone",value:""},message:{label:this.$t("contact.message"),type:"textarea",name:"message",value:""}}}}},Fe=Te,qe=(a("75f9"),Object(u["a"])(Fe,ge,_e,!1,null,"6f9ba540",null)),Je=qe.exports;n["a"].use(h["a"]);var Be=[{path:"/",name:"About",component:O},{path:"/experience",name:"Experience",component:J},{path:"/education",name:"Education",component:X},{path:"/skills",name:"Skills",component:he},{path:"/contact",name:"Contact",component:Je}],Ue=new h["a"]({mode:"history",base:"/",routes:Be}),Ge=Ue,Ve=(a("90c2"),a("4160"),a("ac1f"),a("466d"),a("159b"),a("a925"));function ze(){var e=a("49f8"),t={};return e.keys().forEach((function(a){var n=a.match(/([A-Za-z0-9-_]+)\./i);if(n&&n.length>1){var i=n[1];t[i]=e(a)}})),t}n["a"].use(Ve["a"]);var Ze=new Ve["a"]({locale:Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_I18N_LOCALE||"en",fallbackLocale:Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_I18N_FALLBACK_LOCALE||"en",messages:ze()}),He=a("bc3a"),Ye=a.n(He),Ke=a("2106"),We=a.n(Ke);n["a"].config.productionTip=!1,n["a"].use(We.a,Ye.a),n["a"].mixin({data:function(){return{get getName(){return"Gabriel Carnez"}}}}),new n["a"]({router:Ge,i18n:Ze,render:function(e){return e(b)}}).$mount("#app")},6284:function(e,t,a){e.exports=a.p+"img/photo.52484a5c.jpeg"},"630d":function(e,t,a){"use strict";a("c26f")},"75f9":function(e,t,a){"use strict";a("e71b")},"907b":function(e,t,a){},"90c2":function(e,t,a){},a306:function(e){e.exports=JSON.parse('{"menu":{"about":"inicio","experience":"experiencia","education":"educacion","skills":"Habilidades","download-cv":"descargar cv","contact":"contacto"},"about":{"description":"Estoy en el desarrollo de software desde hace seis años, y trabajé con muchas tecnologías, algunas viejas y otra más nueva, me gusta aprender para que no sea un problema para mí. Trabajo principalmente con tecnologías web, como PHP (con Codeigniter), Bootstrap, Jquery y React, pero también intento con otras como Vue Js, Node y algún framework JS."},"education":{"utn":{"title":"ingeniería en sistemas de información","time":"Mayo 2009 - 2020"},"cfp_1":{"title":"desarrollo de aplicaciones desktop y web en JAVA","time":"Marzo 2015 - Diciembre 2015"},"cfp_2":{"title":"Curso Visual Basic","time":"Marzo 2014 - Diciembre 2014"}},"experience":{"developer":"DEVELOPER","full-stack":"desarrollador full stack","front-end":"FrontEnd developer","FABA":{"time":"Enero 2019 - Presente","description":"Desarrollador full stack con tecnología asp classic, bootstrap y jquey. Desarrollo de aplicaciones Mobile con JS, Vuejs, Phonegap"},"FREELANCE":{"time":"Mayo 2014 - Presente","description":"Desarrollo de aplicaciones web en PHP, Codeigniter, Bootstrap, Jquery y Vue. Desarrollo de aplicaciones moble con JS, Vue, Phonegap y F7."},"ARZION":{"time":"Marzo 2016 - Diciembre 2018","description":"Desarrollo de aplicaciones web en PHP, Codeigniter, Bootstrap, Jquery. Desarrollador Frontend con React."},"SUONPER":{"time":"Marzo 2013 - Marzo 2016","description":"Desarrollo de aplicaciones web en PHP y Jquery. Desarrollo de aplicaciones moble con JS yPhonegap"}},"skills":{"responsive-design":"Diseño responsivo","cross-browser-testing-debugging":"Test de unidad","mobile-first-responsive-design":"Desarrollo mobile","cross-functional-teams":"Trabajo en equipo","agile-development-scrum":"Metodologías ágiles & Scrum"}}')},c044:function(e,t,a){"use strict";a("907b")},c26f:function(e,t,a){},e71b:function(e,t,a){},edd4:function(e){e.exports=JSON.parse('{"menu":{"about":"about","experience":"experience","education":"education","skills":"skills","download-cv":"download cv","contact":"contact","reaact-version":"react version","in-progess":"In progress","show-code":"Show code"},"about":{"description":"I\'m in the software develop from {years} years, and I was worked with many technologies, some oldies and another more new, I like learn so that is not a problem to me. I work mainly with web technologies, like PHP (with Codeigniter), Bootstrap, Jquery and React, but also I try with others like Vue Js, Node and some JS framework."},"education":{"utn":{"title":"INFORMATION SYSTEMS ENGINEER","time":"May 2009 - 2020"},"cfp_1":{"title":"Desktop app and web with JAVA","time":"Mar 2015 - Dec 2015"},"cfp_2":{"title":"VB COURSE","time":"Mar 2014 - Dec 2014"}},"experience":{"developer":"DEVELOPER","full-stack":"Full stack developer","front-end":"FrontEnd developer","FABA":{"time":"Jar 2019 - Present","description":"Full Stack developer with classic asp and asp .net, Bootstrap and Jquery. Mobile developer with JS, PhoneGap."},"FREELANCE":{"time":"May 2014 - Present","description":"Full Stack developer with PHP, Codeigniter, Bootstrap, Jquery and React. Mobile developer with JS, PhoneGap and F7."},"ARZION":{"time":"Mar 2016 - Dec 2018","description":"First months full stack developer with PHP Codeigniter and Jquery. React developer until 2018."},"SUONPER":{"time":"Mar 2013 - Mar 2016","description":"Full Stack developer with PHP and Jquery. Mobile developer with JS, PhoneGap."}},"skills":{"responsive-design":"Responsive Design","cross-browser-testing-debugging":"Unit Testing","mobile-first-responsive-design":"Mobile developer","cross-functional-teams":"Cross Functional Teams","agile-development-scrum":"Agile Development & Scrum"},"contact":{"email":"email","name":"name","phone":"phone","message":"message","send":"send","sendig":"sending","an-error!":"An error occurred!","input-fail":"The {input} is requiered","server-fail":"Something happend, please try again.","message-was-send":"The message was sent successfully! Thanks for contact me!"}}')}});
//# sourceMappingURL=app.803776a1.js.map