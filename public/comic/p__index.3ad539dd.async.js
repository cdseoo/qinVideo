(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[4],{QeBL:function(e,n,t){"use strict";t.r(n);t("T2oS");var a=t("W9HT"),i=t("mrSG"),o=t("q1tI"),r=t.n(o),c=t("XfOM"),l=t.n(c),s=(t("fV52"),t("3I+P")),d=t("qIgq"),u=t.n(d),p=t("fFZ8"),g=t.n(p),m=t("3a4m"),h=t.n(m),v=t("vOnD");function f(){var e=g()(["\n  background-color: rgba(0, 0, 0, 0.1);\n  height: ","px;\n  cursor: pointer;\n  background-size: cover;\n  background-position: center;\n  background-image: url(",");\n\n  span {\n    display: block;\n    padding: 0 15px;\n    height: 30px;\n    line-height: 30px;\n    color: white;\n    font-size: 18px;\n    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0));\n  }\n"]);return f=function(){return e},e}function x(){var e=g()(["\n  width: 100%;\n  display: grid;\n  grid-template-columns: repeat(5, 1fr);\n  grid-gap: 15px;\n\n  .scroll {\n    grid-area: 1 / 1 / 3 / 3;\n    border-radius: 4px;\n    overflow: hidden;\n  }\n\n  .top {\n    width: 100%;\n    height: 0;\n    padding-bottom: 56.75%;\n    border-radius: 4px;\n    background-color: rgba(0, 0, 0, 0.1);\n    background-size: cover;\n    background-position: center;\n    cursor: pointer;\n    overflow: hidden;\n    position: relative;\n\n    span {\n      position: absolute;\n      bottom: 0;\n      left: 0;\n      width: 100%;\n      line-height: 30px;\n      padding: 0 15px;\n      text-align: center;\n      color: white;\n      white-space: nowrap;\n      text-overflow: ellipsis;\n      overflow: hidden;\n      background: linear-gradient(to top, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0));\n    }\n  }\n"]);return x=function(){return e},e}var b=v["a"].div(x()),w=v["a"].div(f(),e=>e.height,e=>e.cover),y=e=>{var n=e.value,t=n.scroll,a=void 0===t?{}:t,i=n.top,c=void 0===i?{}:i,l=Object(o["useState"])(200),d=u()(l,2),p=d[0],g=d[1],m=Object(o["useRef"])(null),v=e=>{h.a.push("/slug/".concat(e))};Object(o["useEffect"])(()=>{g(m.current.clientHeight)});var f=a.list||[],x=c.list||[];return r.a.createElement(b,null,r.a.createElement("div",{className:"scroll",ref:m},r.a.createElement(s["a"],{autoplay:!0,autoplaySpeed:5e3,adaptiveHeight:!0},f.slice(0,6).map(e=>r.a.createElement(w,{height:p,cover:e.coverHorizontal,onClick:()=>{v(e.slug)}},r.a.createElement("span",null,e.title))))),x.slice(0,6).map(e=>r.a.createElement("div",{className:"top",style:{backgroundImage:"url(".concat(e.coverHorizontal,")")},onClick:()=>{v(e.slug)},key:e.slug},r.a.createElement("span",null,e.title))))},k=y,E=t("YO1i"),_=t("xEAY"),O=t("Gwa3");function I(){var e=g()(["\n  background-color: ",";\n  padding: 6px 16px;\n  border-radius: 4px;\n  cursor: pointer;\n  color: rgba(255, 255, 255, 0.8);\n\n  &:hover {\n    background-color: ",";\n  }\n"]);return I=function(){return e},e}var z=v["a"].div(I(),e=>e.color,e=>Object(_["b"])(e.color,.8)),j=e=>{var n=e.onChange,t=Object(o["useContext"])(O["a"]),a=Object(o["useMemo"])(()=>t,[t]);return r.a.createElement(z,{color:a,onClick:n},e.children)},N=j,M=t("/88p"),C=t("LLXN");function S(){var e=g()(["\n  width: 100%;\n\n  .head {\n    width: 100%;\n    height: 60px;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    margin-top: 15px;\n\n    .left {\n      display: flex;\n      justify-content: flex-start;\n      align-items: center;\n\n      i {\n        font-size: 26px;\n        margin-right: 15px;\n      }\n\n      span {\n        font-size: 18px;\n      }\n    }\n  }\n"]);return S=function(){return e},e}var q=v["a"].div(S()),H=e=>{var n=e.value,t=n.list,a=void 0===t?{}:t,i=n.info,o=void 0===i?{}:i,c=window.outerWidth,l=c>=1600?16:12,s=e=>{"custom"===e.status?h.a.push("/all"):h.a.push("/cate/".concat(e._id))},d=a.list||[];return r.a.createElement(q,null,r.a.createElement("div",{className:"head"},r.a.createElement("div",{className:"left"},r.a.createElement(E["a"],{type:o.icon}),r.a.createElement("span",null,o.name)),r.a.createElement(N,{onChange:()=>{s(o)}},Object(C["formatMessage"])({id:"index.loadMore"}))),r.a.createElement(M["b"],{type:o.type,list:d.slice(0,l)}))},L=H,R=t("zqYd"),B=t("MuoO"),D=t("p0pE"),P=t.n(D),J=e=>{var n=e._id,t={size:20,page:1};if("normal"===e.status)t.kind=n;else if("custom"===e.status){var a={};/newIndexNew/.test(n)?a={update:!0,size:100}:/newIndexRandom/.test(n)?a={sortBy:"introduce"}:/newIndexPlay/.test(n)?a={sortBy:"countPlay"}:/newIndexRate/.test(n)&&(a={sortBy:"countStar"}),t=P()({},t,a)}return t},W=e=>{return e.map((e,n)=>{var t;if(/new/.test(e))return/newIndexNew/.test(e)?t="icon-xinpin":/newIndexRandom/.test(e)?t="icon-three":/newIndexPlay/.test(e)?t="icon-ic_movie_filter":/newIndexRate/.test(e)&&(t="icon-huiyuan"),{_id:e,name:Object(C["formatMessage"])({id:"index.".concat(e)}),status:"custom",type:"comic",icon:t};e=JSON.parse(e);var a=["icon-zhandouzuozhan","icon-kafeibei","icon-zhinengyouhua","icon-yule","icon-youxian","icon-mudedi","icon-kongdiao"],i=a[n%6];return P()({},e,{type:"comic",status:"normal",icon:i})})},X=class extends o["Component"]{constructor(){super(...arguments),this.state={config:{color:"",name:"",slogan:"",information:"",headimg:"",pcMenu:[],comicIndex:[]}},this.initData=(e=>{var n=this.props.dispatch,t=W(e);t.forEach(e=>{var t=J(e);n({type:"comic/queryList",payload:{query:t,addon:{type:e._id}}})})})}componentDidMount(){this.setState({config:window.config}),this.initData(window.config.comicIndex)}render(){var e=this.state.config.comicIndex,n=this.props,t=n.comic,i=n.loading,o=W(e);return r.a.createElement(a["a"],{spinning:i&&Object.keys(t).length<3,size:"large"},r.a.createElement("div",{className:l.a.index},o.length>2&&r.a.createElement("div",{className:"container"},r.a.createElement(k,{value:{scroll:t[o[0]._id],top:t[o[1]._id],type:"comic"}}),o.slice(2,o.length).map(e=>{return/newIndexNew/.test(e._id)?r.a.createElement(R["a"],{value:{info:e,list:t[e._id]},key:e._id}):r.a.createElement(L,{value:{info:e,list:t[e._id]},key:e._id})}))))}};X=Object(i["a"])([Object(B["connect"])(e=>{var n=e.comic,t=e.loading;return{comic:n,loading:t.models.comic}})],X);n["default"]=X},XfOM:function(e,n,t){e.exports={index:"index___3vhrs",header:"header___1xHhn",title:"title___1AsLW"}}}]);