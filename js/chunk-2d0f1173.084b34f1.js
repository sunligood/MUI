(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0f1173"],{"9ec4":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("m-header",{attrs:{title:"Action Sheet",fixed:!1}}),n("br"),n("div",{staticStyle:{padding:"0 20px"}},[n("m-button",{attrs:{type:"default"},on:{click:t.actionCancel}},[t._v("点击 Action sheet")]),n("br"),n("m-button",{attrs:{type:"default"},on:{click:t.action}},[t._v("不带取消按钮 Action sheet")])],1),n("m-actionsheet",{attrs:{actions:t.actions,cancelText:t.cancelText},model:{value:t.visible,callback:function(e){t.visible=e},expression:"visible"}})],1)},c=[],s={name:"Actionsheet",data:function(){return{visible:!1,actions:[{name:"拍照",methods:this.photos},{name:"拨电话",methods:this.phone}],cancelText:"确认"}},methods:{action:function(){this.cancelText="",this.visible=!0},actionCancel:function(){this.cancelText="确认",this.visible=!0},photos:function(){this.$toast("让我拍一张照片吧~")},phone:function(){this.$toast("沟通~")}}},o=s,a=n("2877"),l=Object(a["a"])(o,i,c,!1,null,null,null);e["default"]=l.exports}}]);