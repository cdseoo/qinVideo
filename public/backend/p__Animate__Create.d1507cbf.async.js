(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[5],{enlI:function(t,a,n){"use strict";n.r(a);n("T2oS");var e,i,o,r=n("W9HT"),s=(n("miYZ"),n("tsqr")),c=n("2Taf"),u=n.n(c),p=n("vZ4D"),l=n.n(p),f=n("l4Ni"),m=n.n(f),d=n("ujKo"),h=n.n(d),y=n("MhPg"),g=n.n(y),v=n("q1tI"),w=n.n(v),b=n("MuoO"),k=n("3a4m"),T=n.n(k),C=n("LLXN"),I=n("x+KT"),M=(e=Object(b["connect"])(function(t){var a=t.animate,n=t.category,e=t.loading;return{animate:a,category:n,loading:e.effects["animate/postAnimate"]}}),e((o=function(t){function a(){var t,n;u()(this,a);for(var e=arguments.length,i=new Array(e),o=0;o<e;o++)i[o]=arguments[o];return n=m()(this,(t=h()(a)).call.apply(t,[this].concat(i))),n.state={animateInfo:{title:"",slug:"",status:"draft",introduce:"",isUpdate:!1,updateDay:0,rateStar:4,rateCount:1e3,impression:"",eposideCount:12,staff:"",actor:"",playType:"mp4",noPrefix:!1,level:0,firstPlay:"20160606",coverVertical:"",coverHorizontal:"",area:[],kind:[],year:[],tag:[]}},n.handleSubmit=function(t){var a=n.props.dispatch;a({type:"animate/postAnimate",payload:{data:t}}).then(function(t){t&&(s["a"].success(Object(C["formatMessage"])({id:"common.success.tips"})),T.a.push("/animate/list"))})},n}return g()(a,t),l()(a,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var t=this.props.loading,a=this.state.animateInfo;return w.a.createElement(r["a"],{spinning:!!t},w.a.createElement(I["a"],{onChange:this.handleSubmit,info:a}))}}]),a}(v["Component"]),i=o))||i);a["default"]=M}}]);