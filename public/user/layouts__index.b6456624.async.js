(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[1],{"+ego":function(n,e,t){"use strict";t.r(e);var a=t("q1tI"),i=t.n(a),r=t("fFZ8"),o=t.n(r),c=t("TJpk"),s=t("vOnD"),l=t("3a4m"),u=t.n(l),p=t("YO1i"),f=t("xEAY");function d(){var n=o()(["\n  width: calc(100% - 100px);\n  height: 100%;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  user-select: none;\n\n  span {\n    padding: 0 15px;\n    cursor: pointer;\n  }\n"]);return d=function(){return n},n}function h(){var n=o()(["\n  width: 100%;\n  height: 40px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n\n  i {\n    height: 40px;\n    width: 30px;\n    cursor: pointer;\n    display: flex;\n    align-items: center;\n\n    &:nth-child(1) {\n      justify-content: flex-start;\n      font-size: 20px;\n    }\n    &:nth-child(3) {\n      justify-content: center;\n      margin-right: 20px;\n      font-weight: bold;\n      font-size: 18px;\n    }\n    &:nth-child(4) {\n      justify-content: flex-end;\n      font-size: 18px;\n    }\n  }\n"]);return h=function(){return n},n}function m(){var n=o()(["\n  width: 100%;\n  height: 40px;\n  line-height: 40px;\n  background: ",";\n  color: #fff;\n  position: fixed;\n  top: 0;\n  z-index: 999;\n\n  .bg {\n    position: absolute;\n    top: 40px;\n    left: 0;\n    width: 100vw;\n    height: calc(100vh - 40px);\n    z-index: -1;\n    background-color: rgba(0, 0, 0, 0.3);\n  }\n"]);return m=function(){return n},n}var g=s["a"].nav(m(),n=>Object(f["b"])(n.color,.9)),v=s["a"].div(h()),w=s["a"].div(d()),x=n=>{/^\/user/.test(n)?u.a.push(n.slice(5)):window.location.href=n},y=n=>{var e=n.config,t=e.color,a=e.name,r=e.pcMenu,o=e.information,s=r.map(n=>i.a.createElement("span",{onClick:()=>{x(n.link)},key:n.link},n.title));return i.a.createElement(g,{color:t},i.a.createElement(c["Helmet"],{title:a,meta:[{name:"description",content:o}]},i.a.createElement("link",{rel:"icon",href:e.favcion}),i.a.createElement("meta",{name:"description",content:e.information})),i.a.createElement("div",{className:"container"},i.a.createElement(v,null,i.a.createElement(p["a"],{type:"icon-zhuye",onClick:()=>x("/")}),i.a.createElement(w,null,s," "),i.a.createElement(p["a"],{type:"icon-sousuo",onClick:()=>x("/search")}),i.a.createElement(p["a"],{type:"icon-modx",onClick:()=>x("/user")}))))},E=y,b=t("mrSG"),j=t("Gwa3"),k=t("MuoO"),C=class extends a["Component"]{constructor(){super(...arguments),this.state={config:{color:"#ffad14",name:"Qinmei",slogan:"May Change The World",information:"\u4f60\u597d\u5927\u5b8b\u5927"}},this.initUser=(()=>{var n=localStorage.getItem("userInfo");if(n){n=JSON.parse(n);var e=this.props.dispatch;e({type:"auth/changeLoginStatus",payload:{status:!0}}),e({type:"user/saveInfo",payload:{info:n}})}}),this.initTongji=(()=>{if(window.config.tongji){var n=document.createElement("script");n.innerHTML='\n              var _hmt = _hmt || [];\n              (function() {\n                var hm = document.createElement("script");\n                hm.src = "'.concat(window.config.tongji,'";\n                var s = document.getElementsByTagName("script")[0];\n                s.parentNode.insertBefore(hm, s);\n              })();\n              '),document.body.appendChild(n)}})}componentDidMount(){this.setState({config:window.config}),this.initUser(),this.initTongji()}render(){var n=this.state.config,e=this.props.children;return i.a.createElement(j["a"].Provider,{value:n.color},e)}};C=Object(b["a"])([Object(k["connect"])(n=>{var e=n.category;return{category:e}})],C);var O=C,T=n=>{var e=n.children;return Object(a["useEffect"])(()=>{window.scrollTo(0,0)},[n.location.pathname]),i.a.createElement(O,null,i.a.createElement("div",{className:"layout"},i.a.createElement(E,{config:window.config}),i.a.createElement("div",{style:{minHeight:"calc(100vh - 60px)"}},e)))};e["default"]=T},Gwa3:function(n,e,t){"use strict";t.d(e,"a",function(){return r});var a=t("q1tI"),i=t.n(a),r=i.a.createContext("")},YO1i:function(n,e,t){"use strict";t("Pwec");var a=t("CtXQ"),i=a["a"].createFromIconfontCN({scriptUrl:"//at.alicdn.com/t/font_825484_ue8wrtczjy.js"});e["a"]=i},xEAY:function(n,e,t){"use strict";t.d(e,"b",function(){return r}),t.d(e,"a",function(){return o}),t.d(e,"c",function(){return c});t("p0pE");var a=t("wd/R"),i=t.n(a),r=(n,e)=>{var t=[];return n=n.substr(1),3===n.length&&(n=n.replace(/(.)/g,"$1$1")),n.replace(/../g,function(n){t.push(parseInt(n,16))}),"rgba(".concat(t.join(","),",").concat(e,")")};function o(n){return 1*n<10?"0".concat(n):n}var c=n=>{var e=i()(n),t=new Date,a=t.getDay();t.setHours(0),t.setMinutes(0),t.setSeconds(0),0===a?a=6:a-=1;var r=t.getTime()-1e3*a*3600*24;return e.valueOf()>r}}}]);