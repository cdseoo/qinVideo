(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[29],{VFPk:function(e,t,a){"use strict";a.r(t);a("IzEo");var n,r,i,o=a("bx4M"),l=(a("g9YV"),a("wCAj")),d=(a("14J3"),a("BMrR")),s=(a("jCWc"),a("kPKH")),c=(a("+L6B"),a("2/Rp")),u=(a("/zsF"),a("PArb")),m=(a("2qtc"),a("kLXV")),p=a("p0pE"),f=a.n(p),h=a("2Taf"),y=a.n(h),g=a("vZ4D"),b=a.n(g),w=a("l4Ni"),O=a.n(w),M=a("ujKo"),v=a.n(M),j=a("rlhR"),R=a.n(j),C=a("MhPg"),E=a.n(C),k=a("q1tI"),q=a.n(k),D=a("MuoO"),I=a("LLXN"),S=a("wd/R"),x=a.n(S),A=(a("giR+"),a("fyUT")),K=(a("y8nQ"),a("Vl3Y")),z=a("jehZ"),B=a.n(z),V=a("XII7"),N=function(e){function t(){var e,a;y()(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return a=O()(this,(e=v()(t)).call.apply(e,[this].concat(r))),a.state={show:!1,data:{}},a.handleSubmit=function(){var e=a.state.data,t=a.props,n=t.form,r=t.submit;n.validateFields(function(t,a){t||(a.target&&(a.target=a.target.key,a.onModel="Animate"),r(f()({},e,a)))})},a.handleCancel=function(){var e=a.props.cancel;a.setState({show:!1,data:{}}),e&&e()},a.modalShow=function(e){var t=e.type,n=e.data;a.setState({show:!0,data:f()({type:t},n)})},a}return E()(t,e),b()(t,[{key:"render",value:function(){var e=this.state,t=e.show,a=e.data,n=this.props.form.getFieldDecorator,r={labelCol:{span:4},wrapperCol:{span:18}};return q.a.createElement(m["a"],{title:Object(I["formatMessage"])({id:"common.edit"}),visible:t,maskClosable:!1,forceRender:"true",onOk:this.handleSubmit,onCancel:this.handleCancel,destroyOnClose:!0},q.a.createElement(K["a"],null,"new"===a.type&&q.a.createElement(K["a"].Item,B()({},r,{label:Object(I["formatMessage"])({id:"report.target"})}),n("target",{initialValue:void 0})(q.a.createElement(V["a"],null))),q.a.createElement(K["a"].Item,B()({},r,{label:Object(I["formatMessage"])({id:"rate.rate"})}),n("rate",{initialValue:a.rate||0})(q.a.createElement(A["a"],{max:10,min:0,style:{width:"100%"}})))))}}]),t}(k["PureComponent"]),T=K["a"].create()(N),Y=a("ZeOv"),L=(n=Object(D["connect"])(function(e){var t=e.rate,a=e.loading;return{rate:t,loading:a.models.rate}}),n((i=function(e){function t(e){var a;y()(this,t),a=O()(this,v()(t).call(this,e)),a.editRef=q.a.createRef(null),a.submit=function(e){var t=a.props.dispatch,n=a.state.selectedRowKeys,r=e.type;if("many"===r||"all"===r||"one"===r){var i="one"===r?[e.id]:"all"===r?[]:n;t({type:"rate/putRateBatch",payload:{data:f()({},e,{ids:i})}}).then(function(e){e&&a.editRef.handleCancel(),a.initData()})}else t({type:"rate/postRate",payload:{data:f()({},e)}}).then(function(e){e&&a.editRef.handleCancel(),a.initData()})},a.editNew=function(){a.edit({type:"new",data:{}})},a.editOne=function(e){var t={rate:e.rate,id:e._id};a.edit({type:"one",data:t})},a.editMany=function(){a.edit({type:"many"})},a.editAll=function(){a.edit({type:"all"})},a.edit=function(e){var t=e.type,n=e.data;a.editRef.modalShow({type:t,data:n})},a.deleteMany=function(){var e=a.state.selectedRowKeys;a.destroy(e)},a.deleteAll=function(){a.destroy([])},a.deleteOne=function(e){return function(){a.destroy([e])}},a.destroy=function(e){var t=a.props.dispatch;m["a"].confirm({title:Object(I["formatMessage"])({id:"rate.list.delete.rate"}),content:Object(I["formatMessage"])({id:"common.delete.tips"}),okText:Object(I["formatMessage"])({id:"common.confirm"}),cancelText:Object(I["formatMessage"])({id:"common.cancel"}),onOk:function(){return t({type:"rate/deleteRateBatch",payload:{data:{ids:e}}}).then(function(e){e&&(a.initData(),a.setState({selectedRowKeys:[]}))})}})},a.onSearchVideo=function(e){a.query.title=e,a.query.page=1,a.initData()},a.onChangeTable=function(e,t,n){var r,i,o=e.current,l=e.pageSize;n.order&&(r="descend"===n.order?-1:1,i=n.field),a.query=f()({},a.query,{size:l,page:o,sortBy:i,sortOrder:r}),a.initData()},a.initData=function(){var e=R()(a),t=e.query,n=a.props.dispatch;n({type:"rate/queryRate",payload:{query:t}});var r=a.props,i=r.location.pathname,o=r.history;o.push({pathname:i,state:a.query})};var n=e.location.state,r=void 0===n?{}:n;return a.state={selectedRowKeys:[]},a.query={size:r.size?r.size:10,page:r.page?r.page:1,sortBy:r.sortBy,sortOrder:r.sortOrder},a}return E()(t,e),b()(t,[{key:"componentDidMount",value:function(){this.initData()}},{key:"render",value:function(){var e=this,t=this.state.selectedRowKeys,a=this.props,n=a.rate,r=n.list,i=n.total,m=a.loading,p=r.map(function(e){return e.children&&e.children.length>0?e.countChild=e.children.length:(delete e.children,e.countChild=0),e}),f=[{title:Object(I["formatMessage"])({id:"rate.target"}),dataIndex:"target",render:function(e){return e?e.title||e.name||e.content:Object(I["formatMessage"])({id:"common.deleted"})}},{title:Object(I["formatMessage"])({id:"rate.type"}),dataIndex:"onModel",render:function(e){return Object(I["formatMessage"])({id:"rate.type.".concat(e)})}},{title:Object(I["formatMessage"])({id:"rate.author"}),dataIndex:"author.name"},{title:Object(I["formatMessage"])({id:"rate.rate"}),dataIndex:"rate",sorter:!0},{title:Object(I["formatMessage"])({id:"rate.createdAt"}),dataIndex:"createdAt",sorter:!0,render:function(e){return x()(e).format("YYYY-MM-DD HH:mm:ss")}},{title:Object(I["formatMessage"])({id:"rate.option"}),key:"action",dataIndex:"_id",align:"center",render:function(t,a){return q.a.createElement("span",null,q.a.createElement("a",{onClick:function(){return e.editOne(a)}},Object(I["formatMessage"])({id:"common.edit"})),q.a.createElement(u["a"],{type:"vertical"}),q.a.createElement("a",{onClick:e.deleteOne(t)},Object(I["formatMessage"])({id:"common.delete"})))}}],h={selectedRowKeys:t,onChange:function(t){e.setState({selectedRowKeys:t})}},y=Object(Y["h"])(this.query.page,this.query.size,i);return q.a.createElement(o["a"],{className:"tableList",bordered:!1},q.a.createElement(d["a"],{className:"head"},q.a.createElement(s["a"],{span:16},q.a.createElement(c["a"],{icon:"plus",type:"primary",onClick:this.editNew},Object(I["formatMessage"])({id:"common.add.new"})),t.length>0&&q.a.createElement(Y["b"],{edit:this.editMany,delete:this.deleteMany}),q.a.createElement(Y["a"],{edit:this.editAll,delete:this.deleteAll})),q.a.createElement(s["a"],{span:8})),q.a.createElement(d["a"],null,q.a.createElement(l["a"],{loading:m,rowKey:"_id",rowSelection:h,columns:f,onChange:this.onChangeTable,dataSource:p,pagination:y})),q.a.createElement(T,{submit:this.submit,wrappedComponentRef:function(t){return e.editRef=t}}))}}]),t}(k["Component"]),r=i))||r);t["default"]=L}}]);