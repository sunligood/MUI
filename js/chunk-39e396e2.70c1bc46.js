(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-39e396e2"],{"39fa":function(t,o,n){"use strict";n.r(o);var s=function(){var t=this,o=t.$createElement,n=t._self._c||o;return n("div",[n("m-header",{attrs:{title:"Loadmore"}}),n("div",{staticClass:"title"}),n("div",[n("m-loadmore",{staticClass:"loadmore-wrapper",attrs:{allLoaded:t.allLoaded},on:{topMethod:t.topMethod,bottomMethod:t.bottomMethod}},[n("ul",{staticClass:"list"},t._l(t.counts,function(o,s){return n("li",[n("img",{attrs:{src:t.url}}),n("span",[t._v(t._s(s))])])}),0),n("div",{attrs:{slot:"top"},slot:"top"},[t._v("\n        下拉刷新\n      ")]),n("div",{attrs:{slot:"bottom"},slot:"bottom"},[t._v("\n        上拉加载更多\n      ")])])],1)],1)},a=[],e={name:"Loadmore",data:function(){return{url:n("6b42"),counts:20,allLoaded:!1}},methods:{topMethod:function(){var t=this;this.$loading.open({mask:!0}),setTimeout(function(){t.counts=20,t.$loading.close()},500)},bottomMethod:function(){var t=this;this.$loading.open({mask:!0}),setTimeout(function(){t.counts=t.counts+5,t.$loading.close()},500)}}},i=e,l=(n("6b26"),n("2877")),d=Object(l["a"])(i,s,a,!1,null,"039d0c10",null);o["default"]=d.exports},"6b26":function(t,o,n){"use strict";var s=n("d547"),a=n.n(s);a.a},"6b42":function(t,o,n){t.exports=n.p+"img/logo.82b9c7a5.png"},d547:function(t,o,n){}}]);