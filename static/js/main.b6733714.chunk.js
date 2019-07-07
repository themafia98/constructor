(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{26:function(e){e.exports={title:"Constructor",mainIcon:"/img/logo.svg",about:{developer:"Pavel Petrovich",Year:"2019"}}},34:function(e,t,a){e.exports=a(51)},43:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){},47:function(e){e.exports={projects:[{id:1,title:"Project 1"}]}},48:function(e,t,a){},49:function(e,t,a){},51:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(19),c=a.n(o),l=a(14),i=a(2),s=a(3),u=a(5),m=a(4),d=a(6),h=a(15),p=a(12),b=a(21),v=new(a(32).EventEmitter),j=(a(43),a(22));var E=function(e){var t=Object(n.useState)("/constructor"),a=Object(j.a)(t,1)[0];return r.a.createElement("img",{title:e.title?e.title:null,src:a+e.path,alt:"icon"})},f=a(26).mainIcon,O=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={},a.redirect=function(e){a.props.history.push("/About")},a.add=function(e){console.log("add"),v.emit("EventChangeWorkMode",{action:"newProject"})},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("header",null,r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"flex-row"},r.a.createElement("div",{className:"col-12"},r.a.createElement("div",{className:"header__mainInfo"},r.a.createElement(E,{path:f}),this.props.children),r.a.createElement("div",{onClick:this.add,className:"header__newProject__AddButton"},r.a.createElement(E,{path:"/img/plus.png"})),r.a.createElement("div",{onClick:this.redirect,className:"Navigator"},r.a.createElement(E,{title:"about",path:"/img/about_logo.svg"}))))))}}]),t}(r.a.Component),g=Object(h.e)(O),w=a(17),k=(a(45),function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={workMode:a.props.workMode,newProject:{validate:!1,name:"",type:"empty"},warning:{lengthMax:"Max length: 20 symbols",lengthMin:"Min length: 3 symbol",type:"Select type of webpage"}},a.inputSelect=null,a.addNewProject=function(e){var t=a.state[a.state.workMode];t.validate&&"empty"!==t.type&&(v.emit("EventAddHTML",{title:a.state[a.state.workMode].name,type:a.state[a.state.workMode].type}),v.emit("EventChangeWorkMode",{action:"default"}))},a.selectOption=function(e){var t=Object(p.a)({},a.state[a.state.workMode]);t.type=e.target.value,a.setState(Object(p.a)({},a.state,Object(w.a)({},a.state.workMode,t)))},a.validateName=function(e){var t=Object(p.a)({},a.state[a.state.workMode]);t.name=e.target.value;var n=t.name.length;t.validate=n>0&&n<20,console.log(t),a.setState(Object(p.a)({},a.state,Object(w.a)({},a.state.workMode,t)))},a.refSelect=function(e){return a.inputSelect=e},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){switch(this.state.workMode){case"newProject":return r.a.createElement("div",{className:"Modal"},r.a.createElement("h3",null,"Create new Project"),this.state[this.state.workMode].name.length<=0?r.a.createElement("span",{className:"warning"},this.state.warning.lengthMin):null,this.state[this.state.workMode].name.length>=20?r.a.createElement("span",{className:"warning"},this.state.warning.lengthMax):null,r.a.createElement("input",{className:this.state[this.state.workMode].validate?"ready":"wrong",value:this.state[this.state.workMode].name,onChange:this.validateName,type:"text",placeholder:"Project name"}),"empty"===this.state[this.state.workMode].type?r.a.createElement("span",{className:"warning"},this.state.warning.type):null,r.a.createElement("select",{onChange:this.selectOption},r.a.createElement("option",{value:"empty"},"--------"),r.a.createElement("option",{value:"landing"},"Landing"),r.a.createElement("option",{value:"portfolio"},"Portfolio")),r.a.createElement("input",{onClick:this.addNewProject,className:"acceptButton",type:"button",value:"Submit"}));default:return r.a.createElement(n.Fragment,null)}}}]),t}(r.a.PureComponent)),y=a(23);a(46);var M=function(e){var t=Object(n.useState)(e.id),a=Object(j.a)(t,1)[0];return r.a.createElement("div",{className:"item","data-id":a},e.name)},N=a(47).projects,_=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).state={list:Object(y.a)(N),listCount:N.length},a.addHTML=function(e){var t=Object(y.a)(a.state.list),n=t[t.length-1].id+1;t.push({id:n,title:e.title}),a.setState(Object(p.a)({},a.state,{list:t,listCount:t.length}))},a.makeList=function(e){return e.map(function(e){return r.a.createElement(M,{key:e.id,id:e.id,name:e.title})})},a.componentWillMount=function(){v.on("EventAddHTML",a.addHTML)},a.componentWillUnmount=function(){v.off("EventAddHTML",a.addHTML)},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return console.log("render"),r.a.createElement("div",{className:"projectsList__list"},this.makeList(Object(y.a)(this.state.list)))}}]),t}(r.a.PureComponent),C=(a(48),function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("section",{className:"projectsList"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"flex-column"},r.a.createElement("div",{className:"projectsList__about"},r.a.createElement("h3",null,"Your Projects")),r.a.createElement(_,null))))}}]),t}(r.a.PureComponent)),P=(a(49),a(26).title),S=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={workMode:"default"},a.changeWorkMode=function(e){console.log(e.action),a.setState(Object(p.a)({},a.state,{workMode:e.action}))},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(n.Fragment,null,r.a.createElement(g,null,r.a.createElement(l.b,{to:"/"},r.a.createElement("h3",null,P))),"newProject"===this.state.workMode?r.a.createElement(k,{workMode:this.state.workMode}):null,r.a.createElement(C,null))}},{key:"componentDidMount",value:function(){v.on("EventChangeWorkMode",this.changeWorkMode)}},{key:"componentWillUnmount",value:function(){v.off("EventChangeWorkMode",this.changeWorkMode)}}]),t}(r.a.Component),L=Object(b.b)()(S),T=a(26),A=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(n.Fragment,null,r.a.createElement(g,null,r.a.createElement(l.b,{to:"/"},r.a.createElement("h3",null,T.title))),r.a.createElement("section",{className:"About"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"col-12"},r.a.createElement("p",null,"Developer: ",T.about.developer),r.a.createElement("p",null,"Year: ",T.about.year)))))}}]),t}(r.a.Component),x=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(n.Fragment,null,r.a.createElement(h.a,{path:"/",exact:!0,component:L}),r.a.createElement(h.a,{path:"/About",component:A}))}}]),t}(r.a.Component),W=a(16),I={test:0},D=Object(W.b)({root:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I;switch((arguments.length>1?arguments[1]:void 0).type){case"ROOT_INIT":return Object(p.a)({},e,{test:e.test+1});default:return e}}}),H=(a(50),Object(W.c)(D,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()));c.a.render(r.a.createElement(b.a,{store:H},r.a.createElement(l.a,null,r.a.createElement(x,null))),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.b6733714.chunk.js.map