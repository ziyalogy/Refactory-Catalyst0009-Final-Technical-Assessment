(function(t){function e(e){for(var a,i,o=e[0],l=e[1],u=e[2],d=0,m=[];d<o.length;d++)i=o[d],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&m.push(r[i][0]),r[i]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);c&&c(e);while(m.length)m.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],a=!0,o=1;o<n.length;o++){var l=n[o];0!==r[l]&&(a=!1)}a&&(s.splice(e--,1),t=i(i.s=n[0]))}return t}var a={},r={app:0},s=[];function i(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=a,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(n,a,function(e){return t[e]}.bind(null,a));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var u=0;u<o.length;u++)e(o[u]);var c=l;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"452c":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{attrs:{id:"inspire"}},[n("Menu"),n("v-main",[n("router-view")],1),n("v-footer",{attrs:{padless:""}},[n("v-col",{staticClass:"font-weight-bold text--disabled text-right",attrs:{cols:"12"}},[n("small",[t._v("Students Register")])])],1)],1)},s=[],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app-bar",{attrs:{short:"",tile:"",color:"secondary",app:""}},[n("v-toolbar-title",{staticClass:"white--text"},[n("v-list-item",[n("v-list-item-content",[n("v-list-item-title",{staticClass:"\n            appname\n            text-left\n            white--text\n            darken-2\n            font-weight-bold\n            display-1\n          ",attrs:{to:{name:"home"}}},[t._v(" StudREG")])],1)],1)],1),n("v-toolbar-items",{},t._l(t.menuItems,(function(e){return n("v-btn",{key:e.title,staticClass:"text-capitalize white--text",attrs:{text:"",to:e.path}},[t._v(" "+t._s(e.title)+" ")])})),1),n("v-spacer")],1)},o=[],l={name:"Menu",data:function(){return{appTitle:"StudReg",dialog:!1,sidebar:!1,menuItems:[{title:"Home",path:"/",icon:"face"},{title:"Records",path:"/students",icon:"face"}]}}},u=l,c=n("2877"),d=n("6544"),m=n.n(d),v=n("40dc"),p=n("8336"),f=n("da13"),g=n("5d23"),b=n("2fa4"),h=n("2a7f"),x=Object(c["a"])(u,i,o,!1,null,null,null),y=x.exports;m()(x,{VAppBar:v["a"],VBtn:p["a"],VListItem:f["a"],VListItemContent:g["a"],VListItemTitle:g["c"],VSpacer:b["a"],VToolbarItems:h["a"],VToolbarTitle:h["b"]});var w={name:"App",components:{Menu:y},data:function(){return{drawer:null}},mounted:function(){document.title="Students Registration"}},_=w,V=(n("5c0b"),n("b0a0"),n("7496")),C=n("62ad"),R=n("553a"),k=n("f6c4"),S=Object(c["a"])(_,r,s,!1,null,null,null),O=S.exports;m()(S,{VApp:V["a"],VCol:C["a"],VFooter:R["a"],VMain:k["a"]});var I=n("8c4f"),j=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("v-row",{attrs:{"no-gutter":""}},[n("v-col",{staticClass:"mt-0 mx-auto",attrs:{cols:"12",xs:"12",sm:"12",md:"8"}},[n("v-card",{staticClass:"pa-5"},[n("v-card-title",{staticClass:"secondary rounded white--text"},[t._v("Student Registration Form ")]),n("v-divider"),n("v-form",{ref:"form",staticClass:"pa-5",attrs:{enctype:"multipart/form-data"},on:{submit:function(e){return e.preventDefault(),t.submitForm.apply(null,arguments)}}},[n("v-row",[n("v-col",{staticClass:"mt-0 mx-auto",attrs:{cols:"12",xs:"12",sm:"12",md:"8"}},[n("v-text-field",{attrs:{label:"Surname","prepend-icon":"mdi-account-circle-outline",rules:t.nameRules},model:{value:t.student.surname,callback:function(e){t.$set(t.student,"surname",e)},expression:"student.surname"}}),n("v-text-field",{attrs:{label:"Given Name","prepend-icon":"mdi-account-circle-outline ",rules:t.nameRules},model:{value:t.student.givenName,callback:function(e){t.$set(t.student,"givenName",e)},expression:"student.givenName"}}),n("v-select",{attrs:{label:"Title",items:t.titles,filled:"","prepend-icon":"mdi-account-question-outline",rules:t.rules},model:{value:t.student.title,callback:function(e){t.$set(t.student,"title",e)},expression:"student.title"}})],1),n("v-col",{staticClass:"mt-0 mx-auto",attrs:{cols:"12",xs:"12",sm:"12",md:"4"}},[n("v-file-input",{attrs:{label:"Student Photo","show-size":"",counter:"",multiple:"","prepend-icon":"mdi-account-box-outline",rules:t.rules},on:{change:t.selectFile}}),t.student.studentImage?n("div",[n("v-img",{attrs:{src:"/"+t.student.studentImage},model:{value:t.student.studentImage,callback:function(e){t.$set(t.student,"studentImage",e)},expression:"student.studentImage"}})],1):n("div",[n("v-img",{attrs:{src:"../../server/students/student.png"}})],1)],1)],1),n("v-row",[n("v-radio-group",{attrs:{"prepend-icon":"mdi-gender-male-female",rules:t.gendeRules,row:""},model:{value:t.student.gender,callback:function(e){t.$set(t.student,"gender",e)},expression:"student.gender"}},[n("v-col",{staticClass:"mx-auto",attrs:{cols:"12",xs:"12",sm:"12",md:"6"}},[n("v-radio",{attrs:{label:"Male",value:"Male"}})],1),n("v-col",{staticClass:"mx-auto",attrs:{cols:"12",xs:"12",sm:"12",md:"6"}},[n("v-radio",{attrs:{label:"Female",value:"Female"}})],1)],1)],1),n("v-row",[n("v-col",{staticClass:"mt-0 mx-auto",attrs:{cols:"12",xs:"12",sm:"12",md:"6"}},[n("v-text-field",{attrs:{label:"Date of Birth","prepend-icon":"mdi-calendar-range ",rules:t.dateRules,type:"date"},model:{value:t.student.dateOfBirth,callback:function(e){t.$set(t.student,"dateOfBirth",e)},expression:"student.dateOfBirth"}})],1),n("v-col",{staticClass:"mt-0 mx-auto",attrs:{cols:"12",xs:"12",sm:"12",md:"6"}},[n("v-select",{attrs:{items:t.countries,"prepend-icon":"mdi-earth",label:"Select country",rules:t.countryRules,filled:""},model:{value:t.student.country,callback:function(e){t.$set(t.student,"country",e)},expression:"student.country"}})],1)],1),n("v-row",[n("v-text-field",{attrs:{label:"Place of Residence","prepend-icon":"mdi-map-marker-circle",rules:t.residenceRules},model:{value:t.student.residence,callback:function(e){t.$set(t.student,"residence",e)},expression:"student.residence"}})],1),n("v-row",[n("v-text-field",{attrs:{label:"Nationality","prepend-icon":"mdi-flag-variant",rules:t.residenceRules},model:{value:t.student.nationality,callback:function(e){t.$set(t.student,"nationality",e)},expression:"student.nationality"}})],1),n("v-row",[n("v-col",{staticClass:"mt-0 mx-auto",attrs:{cols:"12",xs:"12",sm:"12",md:"12"}},[n("v-btn",{staticClass:"mt-3",attrs:{type:"submit",color:"secondary float-right"}},[t._v("Register")])],1)],1)],1)],1)],1)],1)],1)},T=[],$=n("1da1"),B=(n("96cf"),n("d4ec")),N=n("bee2"),D=n("bc3a"),F=n.n(D),M="/api/students",P="/api/student",L=function(){function t(){Object(B["a"])(this,t)}return Object(N["a"])(t,null,[{key:"getAllStudents",value:function(){var t=Object($["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,F.a.get(M);case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})));function e(){return t.apply(this,arguments)}return e}()},{key:"getStudentByID",value:function(){var t=Object($["a"])(regeneratorRuntime.mark((function t(e){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,F.a.get("".concat(P,"/").concat(e));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}()},{key:"addStudent",value:function(){var t=Object($["a"])(regeneratorRuntime.mark((function t(e){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,F.a.post(P,e);case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}()},{key:"updateStudent",value:function(){var t=Object($["a"])(regeneratorRuntime.mark((function t(e,n){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,F.a.patch("".concat(P,"/").concat(e),n);case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})));function e(e,n){return t.apply(this,arguments)}return e}()},{key:"deleteStudent",value:function(){var t=Object($["a"])(regeneratorRuntime.mark((function t(e){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,F.a.delete("".concat(P,"/").concat(e));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}()}]),t}(),E={data:function(){return{rules:[function(t){return!!t||"Invalid field"}],nameRules:[function(t){return!!t||"Invalid field"},function(t){return t&&t.length<=16||"Names should be between 1 to 16 alpha-bet characters"}],gendeRules:[function(t){return!!t||"Gender must be specified"}],dateRules:[function(t){return!!t||"Select date of birth"}],residenceRules:[function(t){return!!t||"Invalid field"},function(t){return t&&t.length<=20||"Should be between 1 to 20 alpha-bet characters"}],countryRules:[function(t){return!!t||"You must select your country of residence"}],countries:["Uganda","Kenya","Tanzania","Rwanda","Burundi"],titles:["Mr","Mrs","Miss","Dr","Prof","Eng"],student:{surname:"",givenName:"",dateOfBirth:"",residence:"",title:"",studentImage:"",nationality:"",gender:"",country:""},studentImage:""}},methods:{selectFile:function(t){this.studentImage=t[0]},submitForm:function(){var t=this;return Object($["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n=new FormData,n.append("studentImage",t.studentImage),n.append("title",t.student.title),n.append("surname",t.student.surname),n.append("givenName",t.student.givenName),n.append("dateOfBirth",t.student.dateOfBirth),n.append("residence",t.student.residence),n.append("nationality",t.student.nationality),n.append("gender",t.student.gender),n.append("country",t.student.country),!t.$refs.form.validate()){e.next=15;break}return e.next=13,L.addStudent(n);case 13:e.sent,t.$router.push({name:"students",params:{surname:"".concat(t.student.surname),givname:"".concat(t.student.givenName),message:" has been registered successfully!"}});case 15:case"end":return e.stop()}}),e)})))()}}},G=E,A=n("b0af"),z=n("99d9"),q=n("a523"),J=n("ce7e"),H=n("23a7"),K=n("4bd4"),U=n("adda"),W=n("67b6"),Y=n("43a6"),Q=n("0fd9"),X=n("b974"),Z=n("8654"),tt=Object(c["a"])(G,j,T,!1,null,null,null),et=tt.exports;m()(tt,{VBtn:p["a"],VCard:A["a"],VCardTitle:z["a"],VCol:C["a"],VContainer:q["a"],VDivider:J["a"],VFileInput:H["a"],VForm:K["a"],VImg:U["a"],VRadio:W["a"],VRadioGroup:Y["a"],VRow:Q["a"],VSelect:X["a"],VTextField:Z["a"]});var nt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[this.$route.params.message?n("v-alert",{attrs:{dense:"",text:"",dismissible:"",type:"success"}},[n("strong",[t._v(t._s(this.$route.params.surname)+" "+t._s(this.$route.params.givname))]),t._v(t._s(this.$route.params.message)+" ")]):t._e(),n("v-card",[n("v-card-title",{staticClass:"font-weight-bold secondary--text"},[t._v(" We now have "+t._s(t.students.length)+" students registered. "),n("v-spacer"),n("v-text-field",{attrs:{"append-icon":"mdi-magnify",label:"Search","single-line":"","hide-details":""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1),n("v-data-table",{attrs:{loading:"","loading-text":"Loading registered students...",headers:t.headers,items:t.students,search:t.search},scopedSlots:t._u([{key:"top",fn:function(){return[n("v-toolbar",{attrs:{text:""}},[n("v-toolbar-title",[t._v("Students")]),n("v-divider",{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),n("v-spacer"),[n("v-btn",{staticClass:"mb-2",attrs:{to:{name:"home"},color:"primary",dark:""}},[t._v(" New Student ")])]],2)]},proxy:!0},{key:"item._id",fn:function(e){var a=e.item;return[n("v-btn",{staticClass:"ml-4",attrs:{to:"/student/"+a._id,outlined:"",small:"",color:"primary darken-2"}},[t._v(" View ")])]}}])})],1)],1)},at=[],rt={data:function(){return{search:"",headers:[{text:"Title",value:"title"},{text:"Surname",align:"start",sortable:!0,value:"surname"},{text:"Given Name",value:"givenName"},{text:"Gender",value:"gender"},{text:"Date of Birth",value:"dateOfBirth"},{text:"Residence",value:"residence"},{text:"Country",value:"country"},{text:"Nationality",value:"nationality"},{text:"Details",value:"_id"}],students:[]}},created:function(){var t=this;return Object($["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,L.getAllStudents();case 2:t.students=e.sent;case 3:case"end":return e.stop()}}),e)})))()}},st=rt,it=n("0798"),ot=n("8fea"),lt=n("71d9"),ut=Object(c["a"])(st,nt,at,!1,null,null,null),ct=ut.exports;m()(ut,{VAlert:it["a"],VBtn:p["a"],VCard:A["a"],VCardTitle:z["a"],VContainer:q["a"],VDataTable:ot["a"],VDivider:J["a"],VSpacer:b["a"],VTextField:Z["a"],VToolbar:lt["a"],VToolbarTitle:h["b"]});var dt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("v-row",{attrs:{"no-gutter":""}},[n("v-col",{staticClass:"mt-0 mx-auto",attrs:{cols:"12",xs:"12",sm:"12",md:"8"}},[n("v-card",{staticClass:"pa-5"},[n("v-card-title",{staticClass:"primary rounded white--text"},[t._v("Student Registration Information ")]),n("v-divider"),n("v-list",{attrs:{"two-line":""}},[n("v-row",[n("v-col",{staticClass:"mt-0 mx-auto",attrs:{cols:"12",xs:"12",sm:"12",md:"8"}},[n("v-list-item",[n("v-list-item-icon",[n("v-icon",{attrs:{color:"primary"}},[t._v(" mdi-account-circle-outline ")])],1),n("v-list-item-content",[n("v-list-item-title",{attrs:{color:"primary"}},[n("strong",[t._v(t._s(t.student.surname))])]),n("v-list-item-subtitle",[t._v("Surname")])],1)],1),n("v-divider"),n("v-list-item",[n("v-list-item-icon",[n("v-icon",{attrs:{color:"primary"}},[t._v(" mdi-account-circle-outline ")])],1),n("v-list-item-content",[n("v-list-item-title",{attrs:{color:"primary"}},[n("strong",[t._v(t._s(t.student.givenName))])]),n("v-list-item-subtitle",[t._v("Surname")])],1)],1),n("v-divider"),n("v-list-item",[n("v-list-item-icon",[n("v-icon",{attrs:{color:"primary"}},[t._v(" mdi-account-question-outline ")])],1),n("v-list-item-content",[n("v-list-item-title",{attrs:{color:"primary"}},[n("strong",[t._v(t._s(t.student.title))])]),n("v-list-item-subtitle",[t._v("Title")])],1)],1)],1),n("v-col",{staticClass:"mt-0 mx-auto",attrs:{cols:"12",xs:"12",sm:"12",md:"4"}},[n("v-img",{attrs:{src:"/"+t.student.studentImage,height:"auto",dark:""}})],1)],1),n("v-divider"),n("v-row",[n("v-col",{staticClass:"mt-0 mx-auto",attrs:{cols:"12",xs:"12",sm:"12",md:"12"}},[n("v-list-item",[n("v-list-item-icon",[n("v-icon",{attrs:{color:"primary"}},[t._v(" mdi-gender-male-female ")])],1),n("v-list-item-content",[n("v-list-item-title",{attrs:{color:"primary"}},[n("strong",[t._v(t._s(t.student.gender))])]),n("v-list-item-subtitle",[t._v("Gender")])],1)],1)],1)],1),n("v-divider"),n("v-row",[n("v-col",{staticClass:"mt-0 mx-auto",attrs:{cols:"12",xs:"12",sm:"12",md:"6"}},[n("v-list-item",[n("v-list-item-icon",[n("v-icon",{attrs:{color:"primary"}},[t._v(" mdi-calendar-range ")])],1),n("v-list-item-content",[n("v-list-item-title",{attrs:{color:"primary"}},[n("strong",[t._v(t._s(t.student.dateOfBirth))])]),n("v-list-item-subtitle",[t._v("Date of Birth")])],1)],1)],1),n("v-col",{staticClass:"mt-0 mx-auto",attrs:{cols:"12",xs:"12",sm:"12",md:"6"}},[n("v-list-item",[n("v-list-item-icon",[n("v-icon",{attrs:{color:"primary"}},[t._v(" mdi-earth ")])],1),n("v-list-item-content",[n("v-list-item-title",{attrs:{color:"primary"}},[n("strong",[t._v(t._s(t.student.country))])]),n("v-list-item-subtitle",[t._v("Country")])],1)],1)],1)],1),n("v-divider"),n("v-row",[n("v-col",{staticClass:"mt-0 mx-auto",attrs:{cols:"12",xs:"12",sm:"12",md:"12"}},[n("v-list-item",[n("v-list-item-icon",[n("v-icon",{attrs:{color:"primary"}},[t._v(" mdi-map-marker-circle ")])],1),n("v-list-item-content",[n("v-list-item-title",{attrs:{color:"primary"}},[n("strong",[t._v(t._s(t.student.residence))])]),n("v-list-item-subtitle",[t._v("Place of residence")])],1)],1)],1)],1),n("v-divider"),n("v-row",[n("v-col",{staticClass:"mt-0 mx-auto",attrs:{cols:"12",xs:"12",sm:"12",md:"12"}},[n("v-list-item",[n("v-list-item-icon",[n("v-icon",{attrs:{color:"primary"}},[t._v(" mdi-flag-variant ")])],1),n("v-list-item-content",[n("v-list-item-title",{attrs:{color:"primary"}},[n("strong",[t._v(t._s(t.student.nationality))])]),n("v-list-item-subtitle",[t._v("Nationality")])],1)],1)],1)],1),n("v-divider")],1)],1)],1)],1)],1)},mt=[],vt={data:function(){return{student:{},dialog:!1}},created:function(){var t=this;return Object($["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,L.getStudentByID(t.$route.params.id);case 2:n=e.sent,t.student=n;case 4:case"end":return e.stop()}}),e)})))()}},pt=vt,ft=n("132d"),gt=n("8860"),bt=n("34c3"),ht=Object(c["a"])(pt,dt,mt,!1,null,null,null),xt=ht.exports;m()(ht,{VCard:A["a"],VCardTitle:z["a"],VCol:C["a"],VContainer:q["a"],VDivider:J["a"],VIcon:ft["a"],VImg:U["a"],VList:gt["a"],VListItem:f["a"],VListItemContent:g["a"],VListItemIcon:bt["a"],VListItemSubtitle:g["b"],VListItemTitle:g["c"],VRow:Q["a"]}),a["a"].use(I["a"]);var yt=[{path:"/",name:"home",component:et},{path:"/students",name:"students",component:ct},{path:"/student/:id",name:"student",component:xt}],wt=new I["a"]({mode:"history",base:"/",routes:yt}),_t=wt,Vt=n("f309");a["a"].use(Vt["a"]);var Ct=new Vt["a"]({theme:{themes:{light:{primary:"#41C7C7",secondary:"#673467",accent:"#1C203C"}}}});a["a"].config.productionTip=!1,new a["a"]({router:_t,vuetify:Ct,render:function(t){return t(O)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";n("9c0c")},"9c0c":function(t,e,n){},b0a0:function(t,e,n){"use strict";n("452c")}});
//# sourceMappingURL=app.c3445cb8.js.map