(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[44],{IdUK:function(e,t,n){"use strict";n.d(t,"b",(function(){return l})),n.d(t,"c",(function(){return s})),n.d(t,"a",(function(){return p})),n.d(t,"d",(function(){return m}));var r=n("k1fw"),a=n("WmNS"),c=n.n(a),i=n("9og8"),u=n("io9h");function l(e){return o.apply(this,arguments)}function o(){return o=Object(i["a"])(c.a.mark((function e(t){return c.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(u["a"])("/api/xadmin/v1/label",{params:t}));case 1:case"end":return e.stop()}}),e)}))),o.apply(this,arguments)}function s(e){return d.apply(this,arguments)}function d(){return d=Object(i["a"])(c.a.mark((function e(t){return c.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(u["a"])("/api/xadmin/v1/label/".concat(t),{method:"DELETE"}));case 1:case"end":return e.stop()}}),e)}))),d.apply(this,arguments)}function p(e){return f.apply(this,arguments)}function f(){return f=Object(i["a"])(c.a.mark((function e(t){return c.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(u["a"])("/api/xadmin/v1/label",{method:"POST",data:Object(r["a"])(Object(r["a"])({},t),{},{method:"post"})}));case 1:case"end":return e.stop()}}),e)}))),f.apply(this,arguments)}function m(e,t){return b.apply(this,arguments)}function b(){return b=Object(i["a"])(c.a.mark((function e(t,n){return c.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(u["a"])("/api/xadmin/v1/label/".concat(n),{method:"PUT",data:Object(r["a"])(Object(r["a"])({},t),{},{id:n})}));case 1:case"end":return e.stop()}}),e)}))),b.apply(this,arguments)}},IpcI:function(e,t,n){e.exports={container:"container___nT1ry"}},PkmJ:function(e,t,n){"use strict";n("DZo9");var r=n("8z0m"),a=n("oBTY"),c=n("fWQN"),i=n("mtLc"),u=n("yKVA"),l=n("879j"),o=n("q1tI"),s=n.n(o),d=n("ye1Q"),p=n("xvlK"),f=n("IpcI"),m=n.n(f);function b(e,t){var n=new FileReader;n.addEventListener("load",(function(){return t(n.result)})),n.readAsDataURL(e)}var h=function(e){Object(u["a"])(n,e);var t=Object(l["a"])(n);function n(e){var r;return Object(c["a"])(this,n),r=t.call(this,e),r.state={loading:!1,fileList:[]},r.handleChange=function(e){var t=Object(a["a"])(e.fileList);t=t.slice(-1),t=t.map((function(e){return e.response&&(e.url=e.response.url),e})),r.props.onChange(e),e.file&&b(t[0].originFileObj,(function(e){return r.setState({fileList:t,imageUrl:e,loading:!1})}))},r}return Object(i["a"])(n,[{key:"render",value:function(e){console.log(this.props),console.log("props");var t=s.a.createElement("div",null,this.state.loading?s.a.createElement(d["default"],null):s.a.createElement(p["default"],null),s.a.createElement("div",{className:"ant-upload-text"},"Upload")),n=this.state.imageUrl;return"img"in this.props&&"string"==typeof this.props.img&&(n=this.props.img),s.a.createElement(r["a"],{name:"avatar",listType:"picture-card",showUploadList:!1,beforeUpload:this.props.beforeUpload,onChange:this.handleChange,fileList:this.state.fileList},n?s.a.createElement("img",{src:n,alt:"avatar",style:{width:"100%"}}):t)}}]),n}(s.a.Component);t["a"]=function(e){return s.a.createElement("div",{className:m.a.container},s.a.createElement("div",{id:"components-upload-demo-avatar"},s.a.createElement(h,e)))}},X1Pa:function(e,t,n){"use strict";n.r(t);n("qVdP");var r=n("jsC+"),a=(n("lUTK"),n("BvKs")),c=(n("5NDa"),n("5rEg")),i=(n("+L6B"),n("2/Rp")),u=(n("P2fV"),n("NJEC")),l=(n("/zsF"),n("PArb")),o=(n("DYRE"),n("zeV3")),s=(n("+BJd"),n("mr32")),d=(n("BoS7"),n("Sdc0")),p=n("PpiC"),f=n("WmNS"),m=n.n(f),b=n("k1fw"),h=(n("miYZ"),n("tsqr")),v=n("9og8"),w=n("tJVT"),O=(n("OaEy"),n("2fM7")),j=n("G3dp"),y=n("/MfK"),g=n("xvlK"),x=n("8Skl"),E=n("q1tI"),k=n.n(E),R=n("Hx5s"),S=n("56R7"),C=(n("2qtc"),n("kLXV")),I=function(e){var t=e.modalVisible,n=e.onCancel;return k.a.createElement(C["a"],{destroyOnClose:!0,title:"\u65b0\u5efa\u95ee\u9898",visible:t,width:600,onCancel:function(){return n()},footer:null},e.children)},q=I,T=n("io9h"),V=n("+n12");function F(e){return L.apply(this,arguments)}function L(){return L=Object(v["a"])(m.a.mark((function e(t){return m.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(T["a"])("/api/xadmin/v1/question",{params:t}));case 1:case"end":return e.stop()}}),e)}))),L.apply(this,arguments)}function K(e){return U.apply(this,arguments)}function U(){return U=Object(v["a"])(m.a.mark((function e(t){return m.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(T["a"])("/api/xadmin/v1/question/".concat(t),{method:"DELETE"}));case 1:case"end":return e.stop()}}),e)}))),U.apply(this,arguments)}function P(e){return N.apply(this,arguments)}function N(){return N=Object(v["a"])(m.a.mark((function e(t){var n,r;return m.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=["icon"],r=Object(V["b"])(t,n),e.abrupt("return",Object(T["a"])("/api/xadmin/v1/question",{method:"POST",data:r}));case 3:case"end":return e.stop()}}),e)}))),N.apply(this,arguments)}function _(e,t){return A.apply(this,arguments)}function A(){return A=Object(v["a"])(m.a.mark((function e(t,n){var r,a;return m.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=["icon"],a=Object(V["b"])(t,r),e.abrupt("return",Object(T["a"])("/api/xadmin/v1/question/".concat(n),{method:"PUT",data:a}));case 3:case"end":return e.stop()}}),e)}))),A.apply(this,arguments)}var D=function(e){var t=e.modalVisible,n=e.onCancel;return k.a.createElement(C["a"],{destroyOnClose:!0,title:"\u4fee\u6539\u95ee\u9898",visible:t,width:600,onCancel:function(){return n()},footer:null},e.children)},J=D,B=n("PkmJ"),z=n("IdUK"),W=(n("wd/R"),n("Lzxq"),O["a"].Option),M=function(){var e=Object(E["useState"])(!1),t=Object(w["a"])(e,2),n=t[0],f=t[1],C=Object(E["useState"])(!1),I=Object(w["a"])(C,2),T=I[0],L=I[1],U=Object(E["useState"])({}),N=Object(w["a"])(U,2),A=N[0],D=N[1],M=Object(E["useRef"])(),Y=Object(E["useRef"])(),Q=Object(E["useRef"])(),X=function(){var e=Object(v["a"])(m.a.mark((function e(t){var n,r,a;return m.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=h["b"].loading("\u6b63\u5728\u6dfb\u52a0"),e.prev=1,e.next=4,P(Object(b["a"])({},t));case 4:return n(),h["b"].success("\u6dfb\u52a0\u6210\u529f"),e.abrupt("return",!0);case 9:if(e.prev=9,e.t0=e["catch"](1),"fields_errors"in e.t0.data)for(r in e.t0.data.fields_errors)a=e.t0.data.fields_errors[r],Y.current.setFields([{name:r,errors:a}]);else h["b"].error("\u975e\u5b57\u6bb5\u7c7b\u578b\u9519\u8bef");return n(),h["b"].error("\u6dfb\u52a0\u5931\u8d25"),e.abrupt("return",!1);case 15:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}(),Z=function(){var e=Object(v["a"])(m.a.mark((function e(t,n){var r,a;return m.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=h["b"].loading("\u6b63\u5728\u4fee\u6539"),e.prev=1,e.next=4,_(t,n);case 4:return r(),h["b"].success("\u4fee\u6539\u6210\u529f"),e.abrupt("return",!0);case 9:if(e.prev=9,e.t0=e["catch"](1),"fields_errors"in e.t0.data)for(a in e.t0.data.fields_errors)t=e.t0.data.fields_errors[a],Q.current.setFields([{name:a,errors:t}]);else h["b"].error("\u975e\u5b57\u6bb5\u7c7b\u578b\u9519\u8bef");return r(),h["b"].error("\u4fee\u6539\u5931\u8d25\u8bf7\u91cd\u8bd5\uff01"),e.abrupt("return",!1);case 15:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t,n){return e.apply(this,arguments)}}(),G=function(){var e=Object(v["a"])(m.a.mark((function e(t){var n,r;return m.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n=h["b"].loading("\u6b63\u5728\u5220\u9664"),t){e.next=3;break}return e.abrupt("return",!0);case 3:return e.prev=3,r=t.map((function(e){return e.id})).join(","),e.next=7,K(r);case 7:return n(),h["b"].success("\u5220\u9664\u6210\u529f"),e.abrupt("return",!0);case 12:return e.prev=12,e.t0=e["catch"](3),n(),h["b"].error("\u5220\u9664\u5931\u8d25\uff0c\u8bf7\u91cd\u8bd5"),e.abrupt("return",!1);case 17:case"end":return e.stop()}}),e,null,[[3,12]])})));return function(t){return e.apply(this,arguments)}}(),H=[],$=[{title:"ID",dataIndex:"id",hideInForm:!0,hideInSearch:!0,rules:[{required:!0,message:"ID\u4e3a\u5fc5\u586b\u9879"}]},{title:"\u95ee\u9898\u6807\u9898",dataIndex:"title",rules:[{required:!0,message:"\u95ee\u9898\u6807\u9898\u4e3a\u5fc5\u586b\u9879"}]},{title:"\u95ee\u9898\u56de\u7b54",dataIndex:"answers",valueType:"digit",rules:[{required:!0,message:"\u95ee\u9898\u56de\u7b54\u4e3a\u5fc5\u586b\u9879"}]},{title:"\u95ee\u9898\u70b9\u51fb\u91cf",dataIndex:"views",valueType:"digit",rules:[{required:!0,message:"\u95ee\u9898\u70b9\u51fb\u91cf\u4e3a\u5fc5\u586b\u9879"}]},{title:"\u95ee\u9898\u56fe\u6807",dataIndex:"icon",render:function(e,t){return k.a.createElement("img",{src:e,width:"80px",alt:""})},hideInSearch:!0,rules:[{required:!0,message:"\u95ee\u9898\u56fe\u6807\u4e3a\u5fc5\u586b\u9879"}],renderFormItem:function(e,t,n){t.type,t.defaultRender,Object(p["a"])(t,["type","defaultRender"]);var r=n.getFieldValue("icon");return k.a.createElement(B["a"],{img:r})}},{title:"\u95ee\u9898\u662f\u5426\u89e3\u51b3",dataIndex:"isResolve",rules:[{required:!0,message:"\u95ee\u9898\u662f\u5426\u89e3\u51b3\u4e3a\u5fc5\u586b\u9879"}],render:function(e,t){return Object(V["a"])(e)},renderFormItem:function(e,t,n){var r=t.type,a=(t.defaultRender,Object(p["a"])(t,["type","defaultRender"]),n.getFieldValue("isResolve"));return"form"!==r||a||n.setFieldsValue({isResolve:!1}),k.a.createElement(d["a"],{checked:a,onClick:function(e){n.setFieldsValue({isResolve:e})}})}},{title:"\u95ee\u9898\u62e5\u6709\u7684label",dataIndex:"tags",rules:[{required:!0,message:"\u95ee\u9898\u62e5\u6709\u7684label\u4e3a\u5fc5\u586b\u9879"}],renderFormItem:function(e,t){t.value;var n=t.onChange,r=me.map((function(e){return k.a.createElement(W,{key:e.id,value:e.id},e.text)}));return k.a.createElement(O["a"],{mode:"multiple",placeholder:"\u8bf7\u9009\u62e9\u95ee\u9898\u62e5\u6709\u7684label",onChange:n},r)},render:function(e,t){var n=["green","cyan","blue","geekblue","purple","magenta","red","volcano","orange","gold","lime"],r=[];return e.forEach((function(e,t,a){r.push(k.a.createElement(s["a"],{color:n[e%10]},we[e]))})),k.a.createElement(o["a"],null,r)}},{title:"\u64cd\u4f5c",dataIndex:"option",valueType:"option",fixed:"right",width:100,render:function(e,t){return k.a.createElement(k.a.Fragment,null,k.a.createElement(j["default"],{title:"\u7f16\u8f91",className:"icon",onClick:Object(v["a"])(m.a.mark((function e(){return m.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:L(!0),D(t);case 2:case"end":return e.stop()}}),e)})))}),k.a.createElement(l["a"],{type:"vertical"}),k.a.createElement(u["a"],{title:"\u60a8\u786e\u5b9a\u8981\u5220\u9664\u95ee\u9898\u5417\uff1f",placement:"topRight",onConfirm:function(){G([t]),M.current.reloadAndRest()},okText:"\u786e\u5b9a",cancelText:"\u53d6\u6d88"},k.a.createElement(y["default"],{title:"\u5220\u9664",className:"icon"})))}}],ee=Object(V["e"])($),te=Object(V["k"])(ee),ne=[].concat($),re=[].concat($),ae=Object(E["useState"])({}),ce=Object(w["a"])(ae,2),ie=ce[0],ue=ce[1],le=Object(E["useState"])({}),oe=Object(w["a"])(le,2),se=oe[0],de=oe[1],pe=Object(E["useState"])([]),fe=Object(w["a"])(pe,2),me=fe[0],be=fe[1],he=Object(E["useState"])([]),ve=Object(w["a"])(he,2),we=ve[0],Oe=ve[1];return Object(E["useEffect"])((function(){Object(z["b"])().then((function(e){be(e.data);var t={};for(var n in e.data){var r=e.data[n];t[r.id.toString()]=r.text}Oe(t)}))}),[]),k.a.createElement(R["c"],null,k.a.createElement(S["a"],{beforeSearchSubmit:function(e){return Object(V["d"])(e,H),e},params:se,scroll:{x:"100%"},columnsStateMap:ie,onColumnsStateChange:function(e){return ue(e)},headerTitle:"\u95ee\u9898\u8868\u683c",actionRef:M,rowKey:"id",toolBarRender:function(e,t){var n=t.selectedRows;return[k.a.createElement(i["a"],{type:"primary",onClick:function(){return f(!0)}},k.a.createElement(g["default"],null)," \u65b0\u5efa"),k.a.createElement(c["a"].Search,{style:{marginRight:20},placeholder:"\u641c\u7d22\u95ee\u9898 ",onSearch:function(e){de({search:e}),M.current.reload()}}),n&&n.length>0&&k.a.createElement(r["a"],{overlay:k.a.createElement(a["a"],{onClick:function(){var e=Object(v["a"])(m.a.mark((function e(t){return m.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if("remove"!==t.key){e.next=4;break}return e.next=3,G(n);case 3:M.current.reloadAndRest();case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),selectedKeys:[]},k.a.createElement(a["a"].Item,{key:"remove"},"\u6279\u91cf\u5220\u9664"))},k.a.createElement(i["a"],null,"\u6279\u91cf\u64cd\u4f5c ",k.a.createElement(x["default"],null)))]},tableAlertRender:function(e){var t=e.selectedRowKeys;e.selectedRows;return t.length>0&&k.a.createElement("div",null,"\u5df2\u9009\u62e9"," ",k.a.createElement("a",{style:{fontWeight:600}},t.length)," ","\u9879\xa0\xa0")},request:function(e,t,n){return F(Object(b["a"])(Object(b["a"])({},e),{},{sorter:t,filter:n}))},columns:te,rowSelection:{}}),k.a.createElement(q,{onCancel:function(){return f(!1)},modalVisible:n},k.a.createElement(S["a"],{formRef:Y,onSubmit:function(){var e=Object(v["a"])(m.a.mark((function e(t){var n;return m.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return Object(V["l"])(t),e.next=3,X(t);case 3:n=e.sent,n&&(f(!1),M.current&&M.current.reload());case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),rowKey:"key",type:"form",form:{labelCol:{span:6},labelAlign:"left"},columns:re,rowSelection:{}})),k.a.createElement(J,{onCancel:function(){return L(!1)},modalVisible:T},k.a.createElement(S["a"],{formRef:Q,onSubmit:function(){var e=Object(v["a"])(m.a.mark((function e(t){var n;return m.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return Object(V["l"])(t),e.next=3,Z(t,A.id);case 3:n=e.sent,n&&(L(!1),M.current&&M.current.reload());case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),rowKey:"key",type:"form",form:{initialValues:A,labelCol:{span:6},labelAlign:"left"},columns:ne,rowSelection:{}})))};t["default"]=M}}]);