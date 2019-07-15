(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{30:function(e){e.exports={title:"Constructor",CabinetIcon:"/img/logo.svg",about:{developer:"Pavel Petrovich",year:"2019"}}},47:function(e,t,n){e.exports=n(79)},63:function(e,t,n){},64:function(e,t,n){},66:function(e,t,n){},67:function(e,t,n){},68:function(e,t,n){},69:function(e,t,n){},70:function(e,t,n){},71:function(e,t,n){},72:function(e,t,n){},75:function(e,t,n){},76:function(e,t,n){},77:function(e,t,n){},79:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(27),c=n.n(o),i=n(10),s=n(20),l=n(39),u=n(2),p=n(9),d=function(e){return console.log(e),{type:"LOAD_USER_CABINET",active:!0,idUser:e.uid,error:"",projects:Object(p.a)(e.projects)}},m=function(e){return{type:"ERROR_CABINET",error:e}},h={nameEditComponent:null,settingsEditComponent:{}},b={active:!1,idUser:null,projects:[],error:null,dateConnect:new Date(Date.now()).toLocaleString().replace(/\s/gi,"").split(",")},f=Object(s.c)({builder:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOAD_CURRENT":return Object(u.a)({},e,{currentEditable:Object(u.a)({},t.currentEditable)});default:return e}},cabinet:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOAD_USER_CABINET":return Object(u.a)({},e,{active:t.active,idUser:t.idUser,projects:t.projects});case"CREATE_PROJECT":return Object(u.a)({},e,{projects:t.projects});case"LOG_OUT_CABINET":return Object(u.a)({},e,{active:!1,idUser:null,projects:[]});case"ERROR_CABINET":return Object(u.a)({},e,{error:t.error});default:return e}}}),E=("object"===typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):s.d)(Object(s.a)(l.a)),g=Object(s.e)(f,E),v=n(3),j=n(4),O=n(7),C=n(6),w=n(8),y=n(16),N=n(21),k=n(17),P=n.n(k),A=n(24),M=n(1),_=n.n(M),S={apiKey:"AIzaSyBrLv9RyGWXCeEETRqBbBo3EVOcibmnJwU",authDomain:Object({NODE_ENV:"production",PUBLIC_URL:"."}).REACT_APP_AUTH_DOMAIN,databaseURL:Object({NODE_ENV:"production",PUBLIC_URL:"."}).REACT_APP_DATABASE_URL,projectId:"constructor-acb61",storageBucket:Object({NODE_ENV:"production",PUBLIC_URL:"."}).REACT_APP_STORAGE_BUCKET,messagingSenderId:Object({NODE_ENV:"production",PUBLIC_URL:"."}).REACT_APP_MESSAGING_SENDER_ID,appId:Object({NODE_ENV:"production",PUBLIC_URL:"."}).REACT_APP_APPID},R=(n(57),n(59),new(function(){function e(){Object(v.a)(this,e),_.a.initializeApp(S),this.auth=_.a.auth(),this.db=_.a.firestore()}return Object(j.a)(e,[{key:"saveSession",value:function(e){return this.auth.setPersistence(_.a.auth.Auth.Persistence[e])}},{key:"login",value:function(e,t){return this.auth.signInWithEmailAndPassword(e,t)}},{key:"registration",value:function(e,t){return this.auth.createUserWithEmailAndPassword(e,t)}},{key:"signOut",value:function(){return this.auth.signOut()}},{key:"getCurrentUser",value:function(){return this.auth.currentUser}}]),e}()));R.saveSession("SESSION");var U=R,I=function(e,t){return function(){var n=Object(A.a)(P.a.mark(function n(a){return P.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,U.login(e,t).then(function(e){U.db.collection("users").doc(e.user.uid).get().then(function(e){var t=e.data();a(d({uid:e.id,projects:Object(p.a)(t.projects)}))})}).catch(function(e){return a(m(e.message))});case 2:case"end":return n.stop()}},n)}));return function(e){return n.apply(this,arguments)}}()},B=function(e){return function(){var e=Object(A.a)(P.a.mark(function e(t){return P.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,U.signOut().then(function(e){t({type:"LOG_OUT_CABINET",active:!1,idUser:null,error:"",projects:[]})}).catch(function(e){return t(m(e.message))});case 2:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},T=function(e){return function(t){return r.a.createElement(e,Object.assign({firebase:U},t))}},x=n(19),L=function(e){var t=Object(a.useState)(e.path),n=Object(x.a)(t,1)[0];return r.a.createElement("div",{className:"loaderBox"},r.a.createElement("img",{className:"loader",src:n,alt:"loader"}),r.a.createElement("p",null,"Loading ",e.type))},D=new(n(40).EventEmitter),H=(n(63),T(function(e){function t(){var e,n;Object(v.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(O.a)(this,(e=Object(C.a)(t)).call.apply(e,[this].concat(r)))).state={firebase:n.props.firebase,error:null},n.emailRef=null,n.passwordRef=null,n.setRefEmail=function(e){return n.emailRef=e},n.setRefPassword=function(e){return n.passwordRef=e},n.createUser=function(e){var t=n.emailRef.value,a=n.passwordRef.value,r=n.props.firebase;r.registration(t,a).then(function(e){r.db.collection("users").doc(e.user.uid).set({projects:[],email:t}).then(function(){return D.emit("EventRegistrationCorrect",e)})}).catch(function(e){return n.setState({error:e.message})})},n}return Object(w.a)(t,e),Object(j.a)(t,[{key:"render",value:function(){var e=this.state.error;return r.a.createElement("div",{className:"RegistrationBox"},r.a.createElement("div",{className:"RegistrationForm"},r.a.createElement("h3",null,"Registration"),r.a.createElement("div",{className:"RegForm"},e?r.a.createElement("p",{className:"error"},e):null,r.a.createElement("p",null,"E-mail"),r.a.createElement("input",{ref:this.setRefEmail,type:"text"}),r.a.createElement("p",null,"Password"),r.a.createElement("input",{ref:this.setRefPassword,type:"password"}),r.a.createElement("input",{onClick:this.createUser,className:"loginButton",type:"button",value:"registration"}))))}}]),t}(r.a.PureComponent))),W=(n(64),function(e){function t(){var e,n;Object(v.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(O.a)(this,(e=Object(C.a)(t)).call.apply(e,[this].concat(r)))).state={title:"Constructor",registrationActive:!1,regStatus:!1,wrongEnter:!1,error:""},n.statusRegistration=function(e){e.additionalUserInfo.isNewUser?n.setState(Object(u.a)({},n.state,{regStatus:!0,registrationActive:!1,error:"Account create!"})):console.log("error registration")},n.showBox=function(e){n.setState(Object(u.a)({},n.state,{registrationActive:!n.state.registrationActive}))},n.authTo=function(e){n.props.dispatch(I(n.emailImput.value,n.passwordImput.value))},n.emailImput=null,n.passwordImput=null,n.emailRef=function(e){return n.emailImput=e},n.passwordRef=function(e){return n.passwordImput=e},n.componentDidMount=function(e){D.on("EventRegistrationCorrect",n.statusRegistration)},n.componentWillUnmount=function(e){D.off("EventRegistrationCorrect",n.statusRegistration)},n}return Object(w.a)(t,e),Object(j.a)(t,[{key:"render",value:function(){if(console.log("index render"),console.log(this.props),this.props.active)return this.props.active?r.a.createElement(N.a,{to:"/Cabinet"}):r.a.createElement(L,{path:"/img/loading.gif",type:"session"});var e=this.state.registrationActive;return r.a.createElement("div",{className:"LoginPage flex-column"},r.a.createElement("h1",null,this.state.title),r.a.createElement("div",{className:"LoginBox"},r.a.createElement("div",{className:"LoginForm"},r.a.createElement("h3",null,"Connect form"),this.props.wrongEnter||this.state.regStatus?r.a.createElement("p",{className:"error"},this.props.wrongEnter):null,r.a.createElement("p",null,"E-mail"),r.a.createElement("input",{ref:this.emailRef,type:"text"}),r.a.createElement("p",null,"Password"),r.a.createElement("input",{ref:this.passwordRef,type:"password"}),r.a.createElement("input",{onClick:this.authTo,className:"loginButton",type:"button",value:"enter"}),r.a.createElement("input",{onClick:this.showBox,className:e?"loginButton selected":"loginButton",type:"button",value:"registration"}))),this.state.registrationActive?r.a.createElement(H,{auth:this.props.auth}):null)}}]),t}(r.a.PureComponent)),F=Object(i.b)(function(e){return{active:e.cabinet.active,wrongEnter:e.cabinet.error}})(W);n(66);var V=function(e){var t=Object(a.useState)(e.path),n=Object(x.a)(t,1)[0],o=Object(a.useState)(e.className?e.className:null),c=Object(x.a)(o,1)[0];return r.a.createElement("img",{onClick:e.onClick?e.onClick:null,className:c,title:e.title?e.title:null,src:n,alt:"icon"})},z=n(30).CabinetIcon,G=function(e){function t(){var e,n;Object(v.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(O.a)(this,(e=Object(C.a)(t)).call.apply(e,[this].concat(r)))).state={title:n.props.title},n.logOut=function(e){n.props.dispatch(B(n.props.idUser))},n.redirect=function(e){"/Cabinet/About"!==n.props.location.pathname&&n.props.history.push("/Cabinet/About")},n.add=function(e){D.emit("EventChangeWorkMode",{action:"newProject"})},n}return Object(w.a)(t,e),Object(j.a)(t,[{key:"render",value:function(){return r.a.createElement("header",null,r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"flex-row"},r.a.createElement("div",{className:"header__CabinetInfo"},r.a.createElement(V,{path:z}),r.a.createElement(y.b,{to:"/Cabinet"},r.a.createElement("h3",null,this.state.title))),"/Cabinet"===this.props.location.pathname?r.a.createElement("div",{onClick:this.add,className:"header__newProject__AddButton"},r.a.createElement(V,{path:"/img/plus.png"})):null,r.a.createElement("div",{className:"Navigator"},r.a.createElement(V,{onClick:this.redirect,title:"about",path:"/img/about_logo.svg"}),r.a.createElement(V,{onClick:this.logOut,title:"logOut",path:"/img/logOut.svg"})))))}}]),t}(r.a.Component),J=Object(i.b)()(Object(N.g)(G)),X=n(26),K=(n(67),function(e){function t(){var e,n;Object(v.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(O.a)(this,(e=Object(C.a)(t)).call.apply(e,[this].concat(r)))).state={workMode:n.props.workMode,newProject:{validateName:!1,validateType:!1,disabled:!0,name:"",type:"empty"},warning:{lengthMax:"Max length: 20 symbols",lengthMin:"Min length: 3 symbol",type:"Select type of webpage"}},n.inputSelect=null,n.disabledButton=function(e){},n.addNewProject=function(e){var t=n.state[n.state.workMode];t.validateType&&t.validateName&&(D.emit("EventAddProject",{title:n.state[n.state.workMode].name,type:n.state[n.state.workMode].type}),D.emit("EventChangeWorkMode",{action:"default"}))},n.selectOption=function(e){var t=Object(u.a)({},n.state[n.state.workMode]);t.type=e.target.value,t.validateType="empty"!==t.type,t.disabled=!t.validateType||!t.validateName,n.setState(Object(u.a)({},n.state,Object(X.a)({},n.state.workMode,t)))},n.validateName=function(e){var t=Object(u.a)({},n.state[n.state.workMode]);t.name=e.target.value;var a=t.name.length;t.validateName=a>0&&a<20,t.disabled=!t.validateType||!t.validateName,n.setState(Object(u.a)({},n.state,Object(X.a)({},n.state.workMode,t)))},n.cancel=function(e){D.emit("EventChangeWorkMode",{action:"default"})},n.refSelect=function(e){return n.inputSelect=e},n}return Object(w.a)(t,e),Object(j.a)(t,[{key:"render",value:function(){switch(this.state.workMode){case"newProject":return r.a.createElement("div",{className:"Modal"},r.a.createElement("h3",null,"Create new Project"),this.state[this.state.workMode].name.length<=0?r.a.createElement("span",{className:"warning"},this.state.warning.lengthMin):null,this.state[this.state.workMode].name.length>=20?r.a.createElement("span",{className:"warning"},this.state.warning.lengthMax):null,r.a.createElement("input",{className:this.state[this.state.workMode].validateName?"ready":"wrong",value:this.state[this.state.workMode].name,onChange:this.validateName,type:"text",placeholder:"Project name"}),this.state[this.state.workMode].validateType?null:r.a.createElement("span",{className:"warning"},this.state.warning.type),r.a.createElement("select",{onChange:this.selectOption},r.a.createElement("option",{value:"empty"},"--------"),r.a.createElement("option",{value:"landing"},"Landing"),r.a.createElement("option",{value:"portfolio"},"Portfolio")),r.a.createElement("input",{onClick:this.addNewProject,className:"acceptButton",disabled:this.state[this.state.workMode].disabled,type:"button",value:"Submit"}),r.a.createElement("input",{onClick:this.cancel,type:"button",value:"Cancel"}));default:return r.a.createElement(a.Fragment,null)}}}]),t}(r.a.PureComponent)),Y=function(e,t,n,a){return function(){var r=Object(A.a)(P.a.mark(function r(o){var c,i;return P.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return console.log("middlewareCreateProject"),c=Object(p.a)(t),i=c.length?c[c.length-1].id+1:0,c.push({id:i,title:n,type:a,components:{}}),r.next=6,U.db.collection("users").doc(e).update({projects:c}).then(function(){return o((e=c,{type:"CREATE_PROJECT",projects:Object(p.a)(e)}));var e}).catch(function(e){return o(m(e.message))});case 6:case"end":return r.stop()}},r)}));return function(e){return r.apply(this,arguments)}}()};n(68);var q=Object(N.g)(function(e){var t=Object(a.useState)(e.id),n=Object(x.a)(t,1)[0],o=Object(a.useState)(e.name),c=Object(x.a)(o,1)[0],i=Object(a.useState)(e.type),s=Object(x.a)(i,1)[0];return r.a.createElement("div",{onClick:function(t){e.history.push("/Cabinet/Build/".concat(n)),t.stopPropagation()},className:"item","data-id":n},r.a.createElement("p",{className:"ProjectName"},c),r.a.createElement("p",{className:"ProjectType"},s))}),Q=function(e){function t(){var e,n;Object(v.a)(this,t);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(n=Object(O.a)(this,(e=Object(C.a)(t)).call.apply(e,[this].concat(o)))).state={redirect:!1},n.addNewProject=function(e){n.props.idUser?n.props.dispatch(Y(n.props.idUser,n.props.list,e.title,e.type)):n.setState(Object(u.a)({},n.state,{redirect:!0}))},n.makeList=function(e){return e.map(function(e){return r.a.createElement(q,{key:e.id,id:e.id,name:e.title,type:e.type})})},n.componentWillMount=function(){return D.on("EventAddProject",n.addNewProject)},n.componentWillUnmount=function(){return D.off("EventAddProject",n.addNewProject)},n}return Object(w.a)(t,e),Object(j.a)(t,[{key:"render",value:function(){return this.state.redirect?r.a.createElement(N.a,{to:"/"}):r.a.createElement("div",{className:"projectsList__list"},this.makeList(Object(p.a)(this.props.list)))}}]),t}(r.a.PureComponent),Z=Object(i.b)(function(e){return{idUser:e.cabinet.idUser,list:Object(p.a)(e.cabinet.projects)}})(Q),$=(n(69),function(e){function t(){return Object(v.a)(this,t),Object(O.a)(this,Object(C.a)(t).apply(this,arguments))}return Object(w.a)(t,e),Object(j.a)(t,[{key:"render",value:function(){return r.a.createElement("section",{className:"projectsList"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"flex-column"},r.a.createElement("div",{className:"projectsList__about"},r.a.createElement("h3",null,"Your Projects")),r.a.createElement(Z,null))))}}]),t}(r.a.PureComponent)),ee=(n(70),n(30).title),te=function(e){function t(){var e,n;Object(v.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(O.a)(this,(e=Object(C.a)(t)).call.apply(e,[this].concat(r)))).state={workMode:"default"},n.logOut=function(e){n.props.dispatch(B(n.props.idUser))},n.changeWorkMode=function(e){n.setState(Object(u.a)({},n.state,{workMode:e.action}))},n.componentDidMount=function(){D.on("EventChangeWorkMode",n.changeWorkMode)},n.componentWillUnmount=function(){D.off("EventChangeWorkMode",n.changeWorkMode)},n}return Object(w.a)(t,e),Object(j.a)(t,[{key:"render",value:function(){return this.props.active?r.a.createElement(a.Fragment,null,r.a.createElement(J,{title:ee,idUser:this.props.idUser}),"newProject"===this.state.workMode?r.a.createElement(K,{workMode:this.state.workMode}):null,r.a.createElement($,null)):this.props.firebase.getCurrentUser()?r.a.createElement(L,{path:"/img/loading.gif",type:"Cabinet"}):r.a.createElement(N.a,{to:"/"})}}]),t}(r.a.PureComponent),ne=Object(i.b)(function(e){return{idUser:e.cabinet.idUser,projects:Object(p.a)(e.cabinet.projects),active:e.cabinet.active}})(T(te)),ae=(n(71),T(function(e){function t(){var e,n;Object(v.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(O.a)(this,(e=Object(C.a)(t)).call.apply(e,[this].concat(r)))).state={config:n.props.config},n}return Object(w.a)(t,e),Object(j.a)(t,[{key:"render",value:function(){if(console.log("About render"),this.props.firebase.getCurrentUser()){var e=this.state.config;return r.a.createElement(a.Fragment,null,r.a.createElement(J,{title:e.title}),r.a.createElement("section",{className:"About"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"col-12"},r.a.createElement("div",{className:"information"},r.a.createElement("img",{alt:"img",className:"logoAbout",src:"./img/about.jpg"}),r.a.createElement("p",{className:"developer"},r.a.createElement("span",null,"Developer:")," ",e.about.developer),r.a.createElement("p",{className:"year"},r.a.createElement("span",null,"Year:")," ",e.about.year))))))}return r.a.createElement(N.a,{to:"/"})}}]),t}(r.a.PureComponent))),re=(n(72),function(e){function t(){var e,n;Object(v.a)(this,t);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(n=Object(O.a)(this,(e=Object(C.a)(t)).call.apply(e,[this].concat(o)))).state={idProject:n.props.id,acceptInstruments:n.props.editComponent.edit},n.makePanelInstruments=function(e){return r.a.createElement("div",{className:"instuments"})},n.componentDidUpdate=function(e,t){e.editComponent.edit!==n.props.editComponent.edit&&n.setState(Object(u.a)({},n.state,{acceptInstruments:n.props.editComponent.edit}))},n}return Object(w.a)(t,e),Object(j.a)(t,[{key:"render",value:function(){return console.log(this.props),r.a.createElement("div",{className:"instumentsPanel"},r.a.createElement("h3",null,"Instruments"),this.state.acceptInstruments?r.a.createElement("p",{className:"titleComponent important"},this.props.editComponent.name):null,this.state.acceptInstruments?this.makePanelInstruments():r.a.createElement("p",{className:"warningInstruments"},"Select elements for accses edit instruments"))}}]),t}(r.a.PureComponent)),oe=n(34),ce=n(35);function ie(){var e=Object(oe.a)(["\n    width: 100%;\n    height: 95vh;\n    background-color: ","\n    background-image: ","\n"]);return ie=function(){return e},e}function se(){var e=Object(oe.a)(["\n    font-size: ",";\n    color: ",";\n    text-align: center;\n"]);return se=function(){return e},e}var le=ce.a.h1(se(),function(e){return e.size},function(e){return e.textColor}),ue=ce.a.div(ie(),function(e){return e.backgroundColor?e.backgroundColor:null},function(e){return e.backgroundImage?e.backgroundImage:null}),pe=function(e){return r.a.createElement(le,{textColor:e.color,size:e.size},e.title)},de=function(e){return r.a.createElement(ue,{backgroundColor:"red"})},me=(n(75),function(e){function t(){var e,n;Object(v.a)(this,t);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(n=Object(O.a)(this,(e=Object(C.a)(t)).call.apply(e,[this].concat(o)))).state={component:Object(u.a)({},n.props.component)},n.addText=function(e){var t=[];t.push(r.a.createElement(pe,{key:"header",title:"test",color:"red",size:"150px"})),D.emit("EventBuildHeaderComponents",{target:"Header",type:"text",component:t}),e.stopPropagation()},n.addBackground=function(e){var t=[];t.push(r.a.createElement(de,{key:"bgHeader",color:"red"})),D.emit("EventBuildHeaderComponents",{target:"Header",type:"background",component:t}),e.stopPropagation()},n}return Object(w.a)(t,e),Object(j.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"ComponentsMenu"},r.a.createElement("button",{onClick:this.addBackground,className:"ImageTool CompoentnsMenu_button"},r.a.createElement("span",null,"Image")),r.a.createElement("button",{onClick:this.addText,className:"TextTool CompoentnsMenu_button"},r.a.createElement("span",null,"Text")),r.a.createElement("button",{disabled:"Header"===this.state.component.name,className:"ButtonTool CompoentnsMenu_button"},r.a.createElement("span",null,"Button")),r.a.createElement("button",{className:"VideoTool CompoentnsMenu_button"},r.a.createElement("span",null,"Video")))}}]),t}(r.a.PureComponent)),he=(n(76),function(e){function t(){var e,n;Object(v.a)(this,t);for(var o=arguments.length,c=new Array(o),i=0;i<o;i++)c[i]=arguments[i];return(n=Object(O.a)(this,(e=Object(C.a)(t)).call.apply(e,[this].concat(c)))).state={idProject:n.props.id,viewComponentMenu:!1,component:Object(u.a)({},n.props.children)},n.changeMode=function(e){D.emit("EventModeEdit",Object(u.a)({},n.state))},n.componentMenu=function(e){n.setState({viewComponentMenu:!n.state.viewComponentMenu})},n.startMode=function(){return r.a.createElement(a.Fragment,null,n.props.menuActive?r.a.createElement("div",{className:"ControllersEditComponent"},r.a.createElement(V,{onClick:n.componentMenu,className:"addButton",path:"/img/addButton.png"}),n.state.viewComponentMenu?r.a.createElement(me,{component:Object(u.a)({},n.state.component)}):null):null)},n}return Object(w.a)(t,e),Object(j.a)(t,[{key:"render",value:function(){return console.log("headerBuild"),console.log(this.props.children),r.a.createElement(a.Fragment,null,r.a.createElement(a.Fragment,null,"background"===this.props.children.build.type?this.props.children.build.component:null),r.a.createElement(a.Fragment,null,r.a.createElement("div",{onClick:this.changeMode,className:"Header"},r.a.createElement("h2",{className:"titleCompoentBuild"},"Header"),this.props.children.build.component&&"text"===this.props.children.build.type?this.props.children.build.component:null,this.props.editStart?null:r.a.createElement("p",{className:"warningEdit"},"Click for start edit"),this.state.readyBuild?null:this.startMode())))}}]),t}(r.a.PureComponent)),be=(n(77),function(e){function t(){var e,n;Object(v.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(O.a)(this,(e=Object(C.a)(t)).call.apply(e,[this].concat(r)))).state={idProject:parseInt(n.props.match.params.param),typeProject:null,editComponent:{name:null,build:{},edit:!1},menuActive:!1},n.workModeEdit=function(e){console.log("workMode"),n.setState(Object(u.a)({},n.state,{idProject:e.idProject,editComponent:Object(u.a)({},e.component),menuActive:!0,editStart:!0}))},n.addHeaderComponent=function(e){n.setState(Object(u.a)({},n.state,{editComponent:Object(u.a)({},n.state.editComponent,{build:{target:e.target,type:e.type,component:Object(p.a)(e.component)}}),menuActive:!1}))},n.componentDidMount=function(){D.on("EventBuildHeaderComponents",n.addHeaderComponent),D.on("EventModeEdit",n.workModeEdit)},n.componentWillUnmount=function(){D.off("EventBuildHeaderComponents",n.addHeaderComponent),D.off("EventModeEdit",n.workModeEdit)},n}return Object(w.a)(t,e),Object(j.a)(t,[{key:"render",value:function(){return console.log("Build"),console.log(this.state),this.props.active?r.a.createElement(a.Fragment,null,r.a.createElement(J,{title:"Constructor"}),this.state.editComponent.edit?r.a.createElement(re,{editComponent:Object(u.a)({},this.state.editComponent,{name:"Header"}),id:this.state.idProject}):null,r.a.createElement(he,{editStart:this.state.editStart,menuActive:this.state.menuActive,id:this.state.idProject},Object(u.a)({},this.state.editComponent,{name:"Header"}))):this.props.firebase.getCurrentUser()?r.a.createElement(L,{path:"/img/loading.gif",type:"build"}):r.a.createElement(N.a,{to:"/"})}}]),t}(r.a.PureComponent)),fe=Object(i.b)(function(e){return Object(u.a)({},e.builder,{active:e.cabinet.active,idUser:e.cabinet.idUser,currentEditable:{}})})(T(be)),Ee=function(e){function t(){var e,n;Object(v.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(O.a)(this,(e=Object(C.a)(t)).call.apply(e,[this].concat(r)))).state={firebase:n.props.firebase,firebaseLoadState:!1},n}return Object(w.a)(t,e),Object(j.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.props.firebase.auth.onAuthStateChanged(function(t){var n;e.state.firebaseLoadState||(t&&e.props.dispatch((n=t.uid,function(){var e=Object(A.a)(P.a.mark(function e(t){return P.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,U.db.collection("users").doc(n).get().then(function(e){var a=e.data();t(d({uid:n,projects:Object(p.a)(a.projects)}))}).catch(function(e){return t(m(e.message))});case 2:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}())),e.setState({firebaseLoadState:!0}))})}},{key:"render",value:function(){var e=this;return this.state.firebaseLoadState?r.a.createElement(y.a,null,r.a.createElement(N.d,null,r.a.createElement(N.b,{path:"/",exact:!0,render:function(e){return r.a.createElement(F,e)}}),r.a.createElement(N.b,{path:"/Cabinet/",exact:!0,component:ne}),r.a.createElement(N.b,{path:"/Cabinet/About",render:function(t){return r.a.createElement(ae,Object.assign({},t,{config:e.props.config}))}}),r.a.createElement(N.b,{path:"/Cabinet/Build/:param",component:fe}))):r.a.createElement(L,{path:"/img/loading.gif",type:"application"})}}]),t}(r.a.PureComponent),ge=Object(i.b)(function(e){return{active:e.cabinet.active}})(T(Ee)),ve=(n(78),n(30));c.a.render(r.a.createElement(i.a,{store:g},r.a.createElement(ge,{config:ve})),document.getElementById("root"))}},[[47,1,2]]]);
//# sourceMappingURL=main.8c98ea3d.chunk.js.map