(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[9],{j8Ne:function(e,t,a){"use strict";a.r(t);a("+L6B");var s=a("2/Rp"),r=(a("Pwec"),a("CtXQ")),n=(a("5NDa"),a("5rEg")),i=(a("y8nQ"),a("Vl3Y")),o=(a("miYZ"),a("tsqr")),l=a("fFZ8"),m=a.n(l),c=a("mrSG"),d=a("q1tI"),p=a.n(d),h=a("MuoO"),u=a("wY1l"),g=a.n(u),f=a("aCH8"),w=a.n(f),E=a("vOnD"),b=a("LLXN"),y=a("YO1i"),v=a("Gwa3");function j(){var e=m()(["\n  width: 100%;\n  padding: 20px 40px;\n  margin-top: 60px;\n\n  .logo {\n    text-align: center;\n    font-size: 5em;\n    margin-bottom: 60px;\n\n    i {\n      animation: rotate infinite 6s linear;\n      color: ",";\n    }\n\n    @keyframes rotate {\n      from {\n        transform: rotate(0);\n      }\n      to {\n        transform: rotate(360deg);\n      }\n    }\n  }\n\n  .bottom {\n    width: 100%;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n  }\n\n  .form {\n    .email {\n      display: flex;\n      justify-content: space-between;\n      align-items: center;\n\n      .input {\n        width: calc(100% - 120px);\n      }\n      .sendEmail {\n        float: right;\n      }\n    }\n  }\n"]);return j=function(){return e},e}var O=E["a"].div(j(),e=>e.color),M=class extends d["Component"]{constructor(){super(...arguments),this.state={loading:!1,count:60},this.t=null,this.compareToFirstPassword=((e,t,a)=>{var s=this.props.form;t&&t!==s.getFieldValue("password")?a(Object(b["formatMessage"])({id:"auth.password.confirm.tips"})):a()}),this.validateToNextPassword=((e,t,a)=>{var s=this.props.form;t&&s.validateFields(["confirm"],{force:!0}),a()}),this.reset=(e=>{e.preventDefault(),this.props.form.validateFields((e,t)=>{if(e)return o["a"].error(Object(b["formatMessage"])({id:"common.form.error"}));var a=this.props.dispatch,s=t.password,r=t.token,n=w()(s);a({type:"auth/resetPasswordAuth",payload:{data:{password:n,token:r}}})})}),this.sendEmail=(()=>{if(!this.state.loading){var e=this.props.dispatch,t=this.props.form.getFieldValue,a=t("email");if(!a)return o["a"].error(Object(b["formatMessage"])({id:"auth.email.tips"}));e({type:"auth/resetPasswordMail",payload:{data:{email:a}}}),this.countTime()}}),this.countTime=(()=>{this.t&&clearInterval(this.t),this.setState({loading:!0,count:60});var e=60;this.t=setInterval(()=>{e--,0===e&&(this.setState({loading:!1}),this.t&&clearInterval(this.t)),this.setState({count:e})},1e3)})}componentDidMount(){}render(){var e=this.state,t=e.loading,a=e.count,o=this.props,l=o.loadingSendEmail,m=o.loadingReset,c=this.props.form.getFieldDecorator;return p.a.createElement(O,{color:this.context},p.a.createElement("div",{className:"logo"},p.a.createElement(y["a"],{type:"icon-zhinengyouhua"})),p.a.createElement("div",{className:"form"},p.a.createElement(i["a"],{onSubmit:this.reset},p.a.createElement(i["a"].Item,null,p.a.createElement("div",{className:"email"},p.a.createElement("div",{className:"input"},c("email",{rules:[{type:"email",message:Object(b["formatMessage"])({id:"auth.email.register.tips"})}],validateFirst:!0})(p.a.createElement(n["a"],{size:"large",prefix:p.a.createElement(r["a"],{type:"mail",style:{color:"rgba(0,0,0,.25)"}}),placeholder:Object(b["formatMessage"])({id:"auth.email"})}))),p.a.createElement("div",{className:"sendEmail"},p.a.createElement(s["a"],{type:"primary",size:"large",onClick:this.sendEmail,loading:l||t,style:{height:"38px"}},t?a:Object(b["formatMessage"])({id:"auth.email.send"}))))),p.a.createElement(i["a"].Item,null,c("token",{rules:[{required:!0,message:Object(b["formatMessage"])({id:"auth.token.tips"})}]})(p.a.createElement(n["a"],{size:"large",prefix:p.a.createElement(r["a"],{type:"lock",style:{color:"rgba(0,0,0,.25)"}}),placeholder:Object(b["formatMessage"])({id:"auth.token.tips"})}))),p.a.createElement(i["a"].Item,null,c("password",{rules:[{required:!0,message:Object(b["formatMessage"])({id:"auth.password.tips"})},{validator:this.validateToNextPassword},{min:8,message:Object(b["formatMessage"])({id:"auth.password.length.tips"})}]})(p.a.createElement(n["a"],{size:"large",prefix:p.a.createElement(r["a"],{type:"lock",style:{color:"rgba(0,0,0,.25)"}}),type:"password",placeholder:Object(b["formatMessage"])({id:"auth.password.new"})}))),p.a.createElement(i["a"].Item,null,c("confirm",{rules:[{required:!0,message:Object(b["formatMessage"])({id:"auth.password.tips"})},{validator:this.compareToFirstPassword}]})(p.a.createElement(n["a"],{size:"large",prefix:p.a.createElement(r["a"],{type:"lock",style:{color:"rgba(0,0,0,.25)"}}),type:"password",placeholder:Object(b["formatMessage"])({id:"auth.password.new.confirm"})}))),p.a.createElement(i["a"].Item,null,p.a.createElement(s["a"],{type:"primary",htmlType:"submit",className:"login-form-button",size:"large",style:{width:"100%"},loading:m},Object(b["formatMessage"])({id:"auth.reset"}))))),p.a.createElement("div",{className:"bottom"},p.a.createElement(g.a,{to:"/auth/login"},Object(b["formatMessage"])({id:"auth.login"})),p.a.createElement(g.a,{to:"/auth/register"},Object(b["formatMessage"])({id:"auth.register"}))))}};M.contextType=v["a"],M=Object(c["a"])([Object(h["connect"])(e=>{var t=e.auth,a=e.loading;return{auth:t,loadingSendEmail:a.effects["auth/resetPasswordMail"],loadingReset:a.effects["auth/resetPasswordAuth"]}})],M),t["default"]=i["a"].create()(M)}}]);