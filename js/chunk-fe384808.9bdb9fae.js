(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-fe384808"],{"0717":function(e,t,o){"use strict";o.r(t);var n=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("m-header",{attrs:{title:"Picker",fixed:!1}}),o("br"),o("div",{staticStyle:{padding:"0 20px"}},[o("m-button",{attrs:{type:"default"},on:{click:e.bottomPop}},[e._v("下侧弹出 Picker")]),o("br")],1),o("m-picker",{attrs:{slots:e.slots},on:{change:e.pickerEvent,confirm:e.confirm},model:{value:e.visibleBottom,callback:function(t){e.visibleBottom=t},expression:"visibleBottom"}})],1)},i=[],c={name:"Picker",data:function(){return{visibleBottom:!1,slots:[],answer:["2018"]}},mounted:function(){this.slots.push({flex:1,values:["2018","2019","2020","2021","2022","2023","2024","2025","2026","2022","2027","2028","2029","2030","2031","2032","2033","2034","2035","2036","2037"]},{divider:!0,content:"-"},{flex:1,values:["2018","2019","2020","2021","2022","2023","2024","2025","2026","2022","2027","2028","2029","2030","2031","2032","2033","2034","2035","2036","2037"]},{divider:!0,content:"-"},{flex:2,values:[{name:"北京",code:"PEK"},{name:"重庆",code:"PEK"},{name:"上海",code:"PEK"},{name:"天津",code:"PEK"},{name:"北京",code:"PEK"},{name:"重庆",code:"PEK"},{name:"上海",code:"PEK"},{name:"天津",code:"PEK"}],valueKey:"name"})},methods:{bottomPop:function(){this.visibleBottom=!0},pickerEvent:function(e,t){console.log(e)},confirm:function(e){console.log(e)}}},a=c,s=(o("d7a5"),o("2877")),l=Object(s["a"])(a,n,i,!1,null,"240fb452",null);t["default"]=l.exports},d7a5:function(e,t,o){"use strict";var n=o("e1fa"),i=o.n(n);i.a},e1fa:function(e,t,o){}}]);