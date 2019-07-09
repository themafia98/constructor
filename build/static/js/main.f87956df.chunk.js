(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{20:function(e){e.exports={title:"Constructor",mainIcon:"/img/logo.svg",about:{developer:"Pavel Petrovich",year:"2019"}}},34:function(e,t,a){e.exports=a(56)},43:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){},47:function(e){e.exports={projects:[{id:1,title:"Project 1"}]}},48:function(e,t,a){},49:function(e,t,a){},50:function(e,t,a){},51:function(e,t,a){},52:function(e,t,a){},53:function(e,t,a){},54:function(e,t,a){},56:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),c=a(21),r=a.n(c),l=a(16),i=a(14),s=a(15),m=a(33),u=a(2),d={test:0},p=Object(s.b)({root:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d;switch((arguments.length>1?arguments[1]:void 0).type){case"ROOT_INIT":return Object(u.a)({},e,{test:e.test+1});default:return e}}}),h=a(3),b=a(4),E=a(6),v=a(5),j=a(7),f=new(a(31).EventEmitter),O=(a(43),a(19));var g=function(e){var t=Object(n.useState)(e.path),a=Object(O.a)(t,1)[0],c=Object(n.useState)(e.className?e.className:null),r=Object(O.a)(c,1)[0];return o.a.createElement("img",{onClick:e.onClick?e.onClick:null,className:r,title:e.title?e.title:null,src:a,alt:"icon"})},w=a(20).mainIcon,M=function(e){function t(){var e,a;Object(h.a)(this,t);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(a=Object(E.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(o)))).state={},a.redirect=function(e){a.props.history.push("/About")},a.add=function(e){console.log("add"),f.emit("EventChangeWorkMode",{action:"newProject"})},a}return Object(j.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){return o.a.createElement("header",null,o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"flex-row"},o.a.createElement("div",{className:"col-12"},o.a.createElement("div",{className:"header__mainInfo"},o.a.createElement(g,{path:w}),o.a.createElement(l.b,{to:"/"},o.a.createElement("h3",null,this.props.title))),"/"===this.props.location.pathname?o.a.createElement("div",{onClick:this.add,className:"header__newProject__AddButton"},o.a.createElement(g,{path:"/img/plus.png"})):null,o.a.createElement("div",{onClick:this.redirect,className:"Navigator"},o.a.createElement(g,{title:"about",path:"/img/about_logo.svg"}))))))}}]),t}(o.a.Component),k=Object(i.f)(M),y=a(18),N=(a(45),function(e){function t(){var e,a;Object(h.a)(this,t);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(a=Object(E.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(o)))).state={workMode:a.props.workMode,newProject:{validateName:!1,validateType:!1,disabled:!0,name:"",type:"empty"},warning:{lengthMax:"Max length: 20 symbols",lengthMin:"Min length: 3 symbol",type:"Select type of webpage"}},a.inputSelect=null,a.disabledButton=function(e){},a.addNewProject=function(e){var t=a.state[a.state.workMode];t.validateType&&t.validateName&&(f.emit("EventAddHTML",{title:a.state[a.state.workMode].name,type:a.state[a.state.workMode].type}),f.emit("EventChangeWorkMode",{action:"default"}))},a.selectOption=function(e){var t=Object(u.a)({},a.state[a.state.workMode]);t.type=e.target.value,t.validateType="empty"!==t.type,t.disabled=!t.validateType||!t.validateName,a.setState(Object(u.a)({},a.state,Object(y.a)({},a.state.workMode,t)))},a.validateName=function(e){var t=Object(u.a)({},a.state[a.state.workMode]);t.name=e.target.value;var n=t.name.length;t.validateName=n>0&&n<20,t.disabled=!t.validateType||!t.validateName,a.setState(Object(u.a)({},a.state,Object(y.a)({},a.state.workMode,t)))},a.cancel=function(e){f.emit("EventChangeWorkMode",{action:"default"})},a.refSelect=function(e){return a.inputSelect=e},a}return Object(j.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){switch(this.state.workMode){case"newProject":return o.a.createElement("div",{className:"Modal"},o.a.createElement("h3",null,"Create new Project"),this.state[this.state.workMode].name.length<=0?o.a.createElement("span",{className:"warning"},this.state.warning.lengthMin):null,this.state[this.state.workMode].name.length>=20?o.a.createElement("span",{className:"warning"},this.state.warning.lengthMax):null,o.a.createElement("input",{className:this.state[this.state.workMode].validateName?"ready":"wrong",value:this.state[this.state.workMode].name,onChange:this.validateName,type:"text",placeholder:"Project name"}),this.state[this.state.workMode].validateType?null:o.a.createElement("span",{className:"warning"},this.state.warning.type),o.a.createElement("select",{onChange:this.selectOption},o.a.createElement("option",{value:"empty"},"--------"),o.a.createElement("option",{value:"landing"},"Landing"),o.a.createElement("option",{value:"portfolio"},"Portfolio")),o.a.createElement("input",{onClick:this.addNewProject,className:"acceptButton",disabled:this.state[this.state.workMode].disabled,type:"button",value:"Submit"}),o.a.createElement("input",{onClick:this.cancel,type:"button",value:"Cancel"}));default:return o.a.createElement(n.Fragment,null)}}}]),t}(o.a.PureComponent)),C=a(23);a(46);var P=Object(i.f)(function(e){var t=Object(n.useState)(e.id),a=Object(O.a)(t,1)[0];return o.a.createElement("div",{onClick:function(t){return e.history.push("/Build/".concat(a))},className:"item","data-id":a},e.name)}),_=a(47).projects,T=function(e){function t(){var e,a;Object(h.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(E.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(c)))).state={list:Object(C.a)(_),listCount:_.length},a.addHTML=function(e){var t=Object(C.a)(a.state.list),n=t[t.length-1].id+1;t.push({id:n,title:e.title}),a.setState(Object(u.a)({},a.state,{list:t,listCount:t.length}))},a.makeList=function(e){return e.map(function(e){return o.a.createElement(P,{key:e.id,id:e.id,name:e.title})})},a.componentWillMount=function(){f.on("EventAddHTML",a.addHTML)},a.componentWillUnmount=function(){f.off("EventAddHTML",a.addHTML)},a}return Object(j.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){return console.log("render"),o.a.createElement("div",{className:"projectsList__list"},this.makeList(Object(C.a)(this.state.list)))}}]),t}(o.a.PureComponent),S=(a(48),function(e){function t(){return Object(h.a)(this,t),Object(E.a)(this,Object(v.a)(t).apply(this,arguments))}return Object(j.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){return o.a.createElement("section",{className:"projectsList"},o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"flex-column"},o.a.createElement("div",{className:"projectsList__about"},o.a.createElement("h3",null,"Your Projects")),o.a.createElement(T,null))))}}]),t}(o.a.PureComponent)),I=(a(49),a(20).title),A=function(e){function t(){var e,a;Object(h.a)(this,t);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(a=Object(E.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(o)))).state={workMode:"default"},a.changeWorkMode=function(e){console.log(e.action),a.setState(Object(u.a)({},a.state,{workMode:e.action}))},a}return Object(j.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){return o.a.createElement(n.Fragment,null,o.a.createElement(k,{title:I}),"newProject"===this.state.workMode?o.a.createElement(N,{workMode:this.state.workMode}):null,o.a.createElement(S,null))}},{key:"componentDidMount",value:function(){f.on("EventChangeWorkMode",this.changeWorkMode)}},{key:"componentWillUnmount",value:function(){f.off("EventChangeWorkMode",this.changeWorkMode)}}]),t}(o.a.Component),L=(a(50),a(20)),x=function(e){function t(){return Object(h.a)(this,t),Object(E.a)(this,Object(v.a)(t).apply(this,arguments))}return Object(j.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){return o.a.createElement(n.Fragment,null,o.a.createElement(k,{title:L.title}),o.a.createElement("section",{className:"About"},o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"col-12"},o.a.createElement("div",{className:"information"},o.a.createElement("img",{alt:"img",className:"logoAbout",src:"./img/about.jpg"}),o.a.createElement("p",{className:"developer"},o.a.createElement("span",null,"Developer:")," ",L.about.developer),o.a.createElement("p",{className:"year"},o.a.createElement("span",null,"Year:")," ",L.about.year))))))}}]),t}(o.a.Component),W=(a(51),function(e){function t(){var e,a;Object(h.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(E.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(c)))).state={idProject:a.props.id,acceptInstruments:a.props.editComponent.edit},a.makePanelInstruments=function(){return o.a.createElement("div",{className:"instuments"})},a.componentDidUpdate=function(e,t){e.editComponent.edit!==a.props.editComponent.edit&&a.setState(Object(u.a)({},a.state,{acceptInstruments:a.props.editComponent.edit}))},a}return Object(j.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"instumentsPanel"},o.a.createElement("h3",null,"Instruments"),this.state.acceptInstruments?o.a.createElement("p",{className:"titleComponent important"},this.props.editComponent.name):null,this.state.acceptInstruments?this.makePanelInstruments():o.a.createElement("p",{className:"warningInstruments"},"Select elements for accses edit instruments"))}}]),t}(o.a.PureComponent)),B=(a(52),function(e){function t(){var e,a;Object(h.a)(this,t);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(a=Object(E.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(o)))).state={component:Object(u.a)({},a.props.component)},a}return Object(j.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"ComponentsMenu"},o.a.createElement("button",{className:"ImageTool CompoentnsMenu_button"},o.a.createElement("span",null,"Image")),o.a.createElement("button",{className:"TextTool CompoentnsMenu_button"},o.a.createElement("span",null,"Text")),o.a.createElement("button",{disabled:"Header"===this.state.component.name,className:"ButtonTool CompoentnsMenu_button"},o.a.createElement("span",null,"Button")),o.a.createElement("button",{className:"VideoTool CompoentnsMenu_button"},o.a.createElement("span",null,"Video")))}}]),t}(o.a.PureComponent)),H=(a(53),function(e){function t(){var e,a;Object(h.a)(this,t);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(a=Object(E.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(o)))).state={idProject:a.props.id,viewComponentMenu:!1,component:Object(u.a)({},a.props.children)},a.changeMode=function(e){f.emit("EventModeEdit",Object(u.a)({},a.state))},a.componentMenu=function(e){a.setState({viewComponentMenu:!a.state.viewComponentMenu})},a.componentDidUpdate=function(e,t){e.children.edit!==a.props.children.edit&&a.setState(Object(u.a)({},a.state,{component:Object(u.a)({},a.props.children)}))},a}return Object(j.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{onClick:this.changeMode,className:"Header"},o.a.createElement("h2",{className:"titleCompoentBuild"},"Header"),this.state.component.edit?o.a.createElement("div",{className:"ControllersEditComponent"},o.a.createElement(g,{onClick:this.componentMenu,className:"addButton",path:"/img/addButton.png"}),this.state.viewComponentMenu?o.a.createElement(B,{component:Object(u.a)({},this.state.component)}):null):o.a.createElement("p",{className:"warningEdit"},"Click for start edit"))}}]),t}(o.a.PureComponent)),D=(a(54),a(20)),U=function(e){function t(){var e,a;Object(h.a)(this,t);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(a=Object(E.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(o)))).state={idProject:a.props.match.params.param,editComponent:{name:"",edit:!1}},a.workModeEdit=function(e){a.setState(Object(u.a)({},a.state,{idProject:e.idProject,editComponent:Object(u.a)({},e.component,{edit:!0})}))},a.componentDidMount=function(){f.on("EventModeEdit",a.workModeEdit)},a.componentWillUnmount=function(){f.on("EventModeEdit",a.workModeEdit)},a}return Object(j.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){return o.a.createElement(n.Fragment,null,o.a.createElement(k,{title:D.title}),this.state.editComponent.edit?o.a.createElement(W,{editComponent:Object(u.a)({},this.state.editComponent),id:this.state.idProject}):null,o.a.createElement(H,{id:this.state.idProject},Object(u.a)({},this.state.editComponent,{name:"Header"})))}}]),t}(o.a.PureComponent),F=Object(s.c)(p,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());var V=function(){return o.a.createElement(m.a,{store:F},o.a.createElement(l.a,null,o.a.createElement(i.c,null,o.a.createElement(i.a,{path:"/",exact:!0,component:A}),o.a.createElement(i.a,{path:"/About",component:x}),o.a.createElement(i.a,{path:"/Build/:param",component:U}))))};a(55);r.a.render(o.a.createElement(V,null),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.f87956df.chunk.js.map