(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0baae6"],{"37f2":function(t,a,s){"use strict";s.r(a);var o=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("m-header",{attrs:{title:"Toast",fixed:!1}}),s("br"),s("div",{staticStyle:{padding:"0 20px"}},[s("m-button",{attrs:{type:"default"},on:{click:t.toast}},[t._v("默认 Toast")]),s("br"),s("m-button",{attrs:{type:"default"},on:{click:t.toast2}},[t._v("自定义 Toast")]),s("br"),s("m-button",{attrs:{type:"default"},on:{click:t.toast3}},[t._v("Toast执行后回调")])],1)],1)},e=[],n={name:"Toast",data:function(){return{}},methods:{toast:function(){this.$toast("默认 Toast")},toast2:function(){this.$toast({message:"自定义 toast",position:"middle"})},toast3:function(){var t=this;this.$toast({message:"自定义 toast",callback:function(){t.$toast({message:"toast callback !",position:"middle"})}})}}},i=n,c=s("2877"),l=Object(c["a"])(i,o,e,!1,null,null,null);a["default"]=l.exports}}]);