(function(t){function e(e){for(var a,i,u=e[0],o=e[1],l=e[2],d=0,p=[];d<u.length;d++)i=u[d],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&p.push(r[i][0]),r[i]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(t[a]=o[a]);c&&c(e);while(p.length)p.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],a=!0,u=1;u<n.length;u++){var o=n[u];0!==r[o]&&(a=!1)}a&&(s.splice(e--,1),t=i(i.s=n[0]))}return t}var a={},r={app:0},s=[];function i(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=a,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(n,a,function(e){return t[e]}.bind(null,a));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],o=u.push.bind(u);u.push=e,u=u.slice();for(var l=0;l<u.length;l++)e(u[l]);var c=o;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"452c":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{attrs:{id:"inspire"}},[n("Menu"),n("v-main",[n("router-view")],1),n("v-footer",{attrs:{padless:""}},[n("v-col",{staticClass:"font-weight-bold text--disabled text-right",attrs:{cols:"12"}},[n("small",[t._v("Students Register")])])],1)],1)},s=[],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app-bar",{attrs:{flat:"",short:"",tile:"",color:"secondary",app:""}},[n("v-toolbar-title",{staticClass:"white--text"},[n("v-list-item",[n("v-list-item-content",[n("v-list-item-title",{staticClass:" \n             appname\n             text-left\n             white--text\n             darken-2\n             font-weight-bold\n             display-1\n           ",attrs:{to:{name:"home"}}},[t._v(" Students")])],1)],1)],1),n("v-toolbar-items",{},t._l(t.menuItems,(function(e){return n("v-btn",{key:e.title,staticClass:"text-capitalize secondary",attrs:{text:"",to:e.path}},[t._v(" "+t._s(e.title)+" ")])})),1),n("v-spacer"),t._v(" > ")],1)},u=[],o={name:"Menu",data:function(){return{appTitle:"StudReg",dialog:!1,sidebar:!1,menuItems:[{title:"Home",path:"/",icon:"face"},{title:"View Students",path:"/students",icon:"face"}]}}},l=o,c=n("2877"),d=n("6544"),p=n.n(d),m=n("40dc"),v=n("8336"),f=n("da13"),b=n("5d23"),h=n("2fa4"),g=n("2a7f"),x=Object(c["a"])(l,i,u,!1,null,null,null),y=x.exports;p()(x,{VAppBar:m["a"],VBtn:v["a"],VListItem:f["a"],VListItemContent:b["a"],VListItemTitle:b["b"],VSpacer:h["a"],VToolbarItems:g["a"],VToolbarTitle:g["b"]});var w={name:"App",components:{Menu:y},data:function(){return{drawer:null}},mounted:function(){document.title="Students Registration"}},V=w,C=(n("5c0b"),n("b0a0"),n("7496")),k=n("62ad"),_=n("553a"),O=n("f6c4"),S=Object(c["a"])(V,r,s,!1,null,null,null),R=S.exports;p()(S,{VApp:C["a"],VCol:k["a"],VFooter:_["a"],VMain:O["a"]});var j=n("8c4f"),T=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("v-row",{attrs:{"no-gutter":""}},[n("v-col",{staticClass:"mt-0 mx-auto",attrs:{cols:"12",xs:"12",sm:"12",md:"8"}},[n("v-card",{staticClass:"pa-5"},[n("v-card-title",{staticClass:"secondary white--text"},[t._v("Student Registration Form")]),n("v-divider"),n("v-form",{ref:"form",staticClass:"pa-5",attrs:{enctype:"multipart/form-data"},on:{submit:function(e){return e.preventDefault(),t.submitForm.apply(null,arguments)}}},[n("v-row",[n("v-col",{staticClass:"mt-0 mx-auto",attrs:{cols:"12",xs:"12",sm:"12",md:"8"}},[n("v-text-field",{attrs:{label:"Surname","prepend-icon":"mdi-account-circle-outline",rules:t.rules},model:{value:t.student.surname,callback:function(e){t.$set(t.student,"surname",e)},expression:"student.surname"}}),n("v-text-field",{attrs:{label:"Given Name","prepend-icon":"mdi-account-circle-outline ",rules:t.rules},model:{value:t.student.givenName,callback:function(e){t.$set(t.student,"givenName",e)},expression:"student.givenName"}}),n("v-select",{attrs:{label:"Title",items:t.titles,filled:"","prepend-icon":"mdi-account-question-outline",rules:t.rules},model:{value:t.student.title,callback:function(e){t.$set(t.student,"title",e)},expression:"student.title"}})],1),n("v-col",{staticClass:"mt-0 mx-auto",attrs:{cols:"12",xs:"12",sm:"12",md:"4"}},[n("v-file-input",{attrs:{label:"Student Photo","show-size":"",counter:"",multiple:"","prepend-icon":"mdi-account-box-outline",rules:t.rules},on:{change:t.selectFile}}),t.student.studentImage?n("div",[n("v-img",{attrs:{src:""+t.student.studentImage},model:{value:t.student.studentImage,callback:function(e){t.$set(t.student,"studentImage",e)},expression:"student.studentImage"}})],1):t._e()],1)],1),n("v-row",[n("v-col",{staticClass:"mt-0 mx-auto",attrs:{cols:"12",xs:"12",sm:"12",md:"12"}},[n("v-radio-group",{attrs:{"prepend-icon":"mdi-gender-male-female",rules:t.rules,row:""},model:{value:t.student.gender,callback:function(e){t.$set(t.student,"gender",e)},expression:"student.gender"}},[n("v-radio",{attrs:{label:"Male",value:"Male"}}),n("v-col",{staticClass:"mt-0 mx-auto",attrs:{cols:"12",xs:"12",sm:"12",md:"6"}},[n("v-radio",{attrs:{label:"Female",value:"Female"}})],1)],1)],1)],1),n("v-row",[n("v-col",{staticClass:"mt-0 mx-auto",attrs:{cols:"12",xs:"12",sm:"12",md:"6"}},[n("v-text-field",{attrs:{label:"Date of Birth","prepend-icon":"mdi-calendar-range ",rules:t.rules,type:"date"},model:{value:t.student.dateOfBirth,callback:function(e){t.$set(t.student,"dateOfBirth",e)},expression:"student.dateOfBirth"}})],1),n("v-col",{staticClass:"mt-0 mx-auto",attrs:{cols:"12",xs:"12",sm:"12",md:"6"}},[n("v-select",{attrs:{items:t.countries,"prepend-icon":"mdi-earth",label:"Country",rules:t.rules,filled:""},model:{value:t.student.country,callback:function(e){t.$set(t.student,"country",e)},expression:"student.country"}})],1)],1),n("v-row",[n("v-text-field",{attrs:{label:"Place of Residence","prepend-icon":"mdi-map-marker-circle",rules:t.rules},model:{value:t.student.residence,callback:function(e){t.$set(t.student,"residence",e)},expression:"student.residence"}})],1),n("v-row",[n("v-text-field",{attrs:{label:"Nationality","prepend-icon":"mdi-flag-variant",rules:t.rules},model:{value:t.student.nationality,callback:function(e){t.$set(t.student,"nationality",e)},expression:"student.nationality"}})],1),n("v-row",[n("v-col",{staticClass:"mt-0 mx-auto",attrs:{cols:"12",xs:"12",sm:"12",md:"12"}},[n("v-btn",{staticClass:"mt-3",attrs:{type:"submit",color:"secondary float-right"}},[t._v("Register")])],1)],1)],1)],1)],1)],1)],1)},I=[],$=n("1da1"),B=(n("96cf"),n("d4ec")),F=n("bee2"),M=n("bc3a"),N=n.n(M),D="/api/students",P="/api/student",A=function(){function t(){Object(B["a"])(this,t)}return Object(F["a"])(t,null,[{key:"getAllStudents",value:function(){var t=Object($["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,N.a.get(D);case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})));function e(){return t.apply(this,arguments)}return e}()},{key:"getStudentByID",value:function(){var t=Object($["a"])(regeneratorRuntime.mark((function t(e){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,N.a.get("".concat(P,"/").concat(e));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}()},{key:"addStudent",value:function(){var t=Object($["a"])(regeneratorRuntime.mark((function t(e){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,N.a.post(P,e);case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}()},{key:"updateStudent",value:function(){var t=Object($["a"])(regeneratorRuntime.mark((function t(e,n){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,N.a.patch("".concat(P,"/").concat(e),n);case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})));function e(e,n){return t.apply(this,arguments)}return e}()},{key:"deleteStudent",value:function(){var t=Object($["a"])(regeneratorRuntime.mark((function t(e){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,N.a.delete("".concat(P,"/").concat(e));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}()}]),t}(),E={data:function(){return{rules:[function(t){return!!t||"This field is required"}],countries:["Uganda","Kenya","Tanzania","Rwanda","Burundi"],titles:["Mr","Mrs","Miss","Dr","Prof","Eng"],student:{surname:"",givenName:"",dateOfBirth:"",residence:"",title:"",studentImage:"",nationality:"",gender:"",country:""},studentImage:""}},methods:{selectFile:function(t){this.studentImage=t[0]},submitForm:function(){var t=this;return Object($["a"])(regeneratorRuntime.mark((function e(){var n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n=new FormData,n.append("studentImage",t.studentImage),n.append("title",t.student.title),n.append("surname",t.student.surname),n.append("givenName",t.student.givenName),n.append("dateOfBirth",t.student.dateOfBirth),n.append("residence",t.student.residence),n.append("nationality",t.student.nationality),n.append("gender",t.student.gender),n.append("country",t.student.country),!t.$refs.form.validate()){e.next=15;break}return e.next=13,A.addStudent(n);case 13:a=e.sent,t.$router.push({name:"Home",params:{message:a.message}});case 15:case"end":return e.stop()}}),e)})))()}}},G=E,L=n("b0af"),z=n("99d9"),q=n("a523"),H=n("ce7e"),J=n("23a7"),K=n("4bd4"),U=n("adda"),W=n("67b6"),Q=n("43a6"),X=n("0fd9"),Y=n("b974"),Z=n("8654"),tt=Object(c["a"])(G,T,I,!1,null,null,null),et=tt.exports;p()(tt,{VBtn:v["a"],VCard:L["a"],VCardTitle:z["a"],VCol:k["a"],VContainer:q["a"],VDivider:H["a"],VFileInput:J["a"],VForm:K["a"],VImg:U["a"],VRadio:W["a"],VRadioGroup:Q["a"],VRow:X["a"],VSelect:Y["a"],VTextField:Z["a"]});var nt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("v-card",[n("v-card-title",{staticClass:"font-weight-bold secondary--text"},[t._v(" We have "+t._s(t.students.length)+" students "),n("v-spacer"),n("v-text-field",{attrs:{"append-icon":"mdi-magnify",label:"Search","single-line":"","hide-details":""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1),n("v-data-table",{attrs:{loading:"","loading-text":"Loading registered students...",headers:t.headers,items:t.students,search:t.search},scopedSlots:t._u([{key:"top",fn:function(){return[n("v-toolbar",{attrs:{text:""}},[n("v-toolbar-title",[t._v("Students")]),n("v-divider",{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),n("v-spacer"),[n("v-btn",{staticClass:"mb-2",attrs:{to:{name:"AddStudent"},color:"primary",dark:""}},[t._v(" New Student ")])]],2)]},proxy:!0},{key:"item._id",fn:function(e){var a=e.item;return[n("v-btn",{staticClass:"ml-4",attrs:{to:"student/"+a._id,flat:"",outlined:"",small:"",color:"primary darken-2"}},[t._v(" View ")])]}}])})],1)],1)},at=[],rt={data:function(){return{search:"",headers:[{text:"Surname",align:"start",sortable:!0,value:"surname"},{text:"Given Name",value:"givenName"},{text:"Date of Birth",value:"dateOfBirth"},{text:"Residence",value:"residence"},{text:"Country",value:"country"},{text:"Title",value:"title"},{text:"Nationality",value:"nationality"},{text:"Gender",value:"gender"},{text:"Details",value:"_id"}],students:[]}},created:function(){var t=this;return Object($["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,A.getAllStudents();case 2:t.students=e.sent;case 3:case"end":return e.stop()}}),e)})))()}},st=rt,it=n("8fea"),ut=n("71d9"),ot=Object(c["a"])(st,nt,at,!1,null,null,null),lt=ot.exports;p()(ot,{VBtn:v["a"],VCard:L["a"],VCardTitle:z["a"],VContainer:q["a"],VDataTable:it["a"],VDivider:H["a"],VSpacer:h["a"],VTextField:Z["a"],VToolbar:ut["a"],VToolbarTitle:g["b"]}),a["a"].use(j["a"]);var ct=[{path:"/",name:"home",component:et},{path:"/students",name:"students",component:lt}],dt=new j["a"]({mode:"history",base:"/",routes:ct}),pt=dt,mt=n("f309");a["a"].use(mt["a"]);var vt=new mt["a"]({theme:{themes:{light:{primary:"#41C7C7",secondary:"#673467",accent:"#1C203C"}}}});a["a"].config.productionTip=!1,new a["a"]({router:pt,vuetify:vt,render:function(t){return t(R)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";n("9c0c")},"9c0c":function(t,e,n){},b0a0:function(t,e,n){"use strict";n("452c")}});
//# sourceMappingURL=app.3d2c15ba.js.map