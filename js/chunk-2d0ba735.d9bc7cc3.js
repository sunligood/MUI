(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0ba735"],{"36ea":function(t,s,a){"use strict";a.r(s);var r=function(){var t=this,s=t.$createElement;t._self._c;return t._m(0)},e=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("section",[a("h1",[t._v("Dialog")]),a("blockquote",[a("p",[t._v("会话框，含提示框，确认框，弹出式输入框")])]),a("hr"),a("h2",[t._v("alert")]),a("p",[t._v("提示框 基本用法")]),a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-javascript"}},[a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("this")]),t._v(".$alert("),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'操作成功'")]),t._v(")\n")])]),a("p",[t._v("或者传入一个对象")]),a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-javascript"}},[a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("this")]),t._v(".$alert({\n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("title")]),t._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'提示'")]),t._v(",\n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("message")]),t._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'确定执行此操作?'")]),t._v(",\n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("btnText")]),t._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'我知道了'")]),t._v("\n});\n")])]),a("p",[t._v("支持回调函数")]),a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-javascript"}},[a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("this")]),t._v(".$alert({"),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("title")]),t._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'提示'")]),t._v("}, () => {\n  "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[t._v("// do soming")]),t._v("\n});\n")])]),a("h3",[t._v("Options")]),a("div",{staticClass:"table-container"},[a("table",{staticClass:"table"},[a("thead",[a("tr",[a("th",[t._v("参数")]),a("th",[t._v("说明")]),a("th",[t._v("类型")]),a("th",[t._v("可选值")]),a("th",[t._v("默认值")])])]),a("tbody",[a("tr",[a("td",[t._v("title")]),a("td",[t._v("提示框标题")]),a("td",[t._v("String")]),a("td"),a("td")]),a("tr",[a("td",[t._v("message")]),a("td",[t._v("提示框内容")]),a("td",[t._v("String")]),a("td"),a("td")]),a("tr",[a("td",[t._v("btnText")]),a("td",[t._v("提示框按钮文字")]),a("td",[t._v("String")]),a("td"),a("td",[t._v("'确认'")])])])])]),a("h2",[t._v("confirm")]),a("p",[t._v("确认框 基本用法")]),a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-javascript"}},[a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("this")]),t._v(".$confirm("),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'你想好了吗？'")]),t._v(", (actions) => {\n  "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[t._v("// if (actions) {")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[t._v("//   Decide what to do")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[t._v("// }")]),t._v("\n  \n})\n")])]),a("p",[t._v("或者传入一个对象")]),a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-javascript"}},[a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("this")]),t._v(".$confirm({\n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("title")]),t._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'提示'")]),t._v(",\n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("message")]),t._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'你想好了吗？'")]),t._v(",\n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("confirmBtnText")]),t._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'我想好了'")]),t._v("\n}, (actions) => {\n    "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[t._v("// if (actions) {")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[t._v("//     Decide what to do")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[t._v("// }")]),t._v("\n});\n")])]),a("h3",[t._v("Options")]),a("div",{staticClass:"table-container"},[a("table",{staticClass:"table"},[a("thead",[a("tr",[a("th",[t._v("参数")]),a("th",[t._v("说明")]),a("th",[t._v("类型")]),a("th",[t._v("可选值")]),a("th",[t._v("默认值")])])]),a("tbody",[a("tr",[a("td",[t._v("title")]),a("td",[t._v("确认框标题")]),a("td",[t._v("String")]),a("td"),a("td")]),a("tr",[a("td",[t._v("message")]),a("td",[t._v("确认框内容")]),a("td",[t._v("String")]),a("td"),a("td")]),a("tr",[a("td",[t._v("showCancelBtn")]),a("td",[t._v("显示确认框取消按钮")]),a("td",[t._v("Boolean")]),a("td"),a("td",[t._v("true")])]),a("tr",[a("td",[t._v("showConfirmlBtn")]),a("td",[t._v("显示确认框确认按钮")]),a("td",[t._v("Boolean")]),a("td"),a("td",[t._v("true")])]),a("tr",[a("td",[t._v("cancelBtnText")]),a("td",[t._v("确认框取消按钮文字")]),a("td",[t._v("String")]),a("td"),a("td",[t._v("'取消'")])]),a("tr",[a("td",[t._v("confirmBtnText")]),a("td",[t._v("确认框确认按钮文字")]),a("td",[t._v("String")]),a("td"),a("td",[t._v("'确认'")])])])])]),a("h2",[t._v("prompt")]),a("p",[t._v("prompt 基本用法")]),a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-javascript"}},[a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("this")]),t._v(".$prompt("),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'请输入姓名'")]),t._v(", (actions, inputMessage) => {\n  "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[t._v("// if (actions) {")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[t._v("//   Decide what to do")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[t._v("// }")]),t._v("\n  \n})\n")])]),a("p",[t._v("或者传入一个对象")]),a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-javascript"}},[a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("this")]),t._v(".$confirm({\n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("title")]),t._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'请输入姓名'")]),t._v(",\n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("confirmBtnText")]),t._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'我已确认'")]),t._v("\n}, (actions, inputMessage) => {\n    "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[t._v("// if (actions) {")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[t._v("//     Decide what to do")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[t._v("// }")]),t._v("\n});\n")])]),a("h3",[t._v("Options")]),a("div",{staticClass:"table-container"},[a("table",{staticClass:"table"},[a("thead",[a("tr",[a("th",[t._v("参数")]),a("th",[t._v("说明")]),a("th",[t._v("类型")]),a("th",[t._v("可选值")]),a("th",[t._v("默认值")])])]),a("tbody",[a("tr",[a("td",[t._v("title")]),a("td",[t._v("确认框标题")]),a("td",[t._v("String")]),a("td"),a("td")]),a("tr",[a("td",[t._v("showCancelBtn")]),a("td",[t._v("显示确认框取消按钮")]),a("td",[t._v("Boolean")]),a("td"),a("td",[t._v("true")])]),a("tr",[a("td",[t._v("showConfirmlBtn")]),a("td",[t._v("显示确认框确认按钮")]),a("td",[t._v("Boolean")]),a("td"),a("td",[t._v("true")])]),a("tr",[a("td",[t._v("cancelBtnText")]),a("td",[t._v("确认框取消按钮文字")]),a("td",[t._v("String")]),a("td"),a("td",[t._v("'取消'")])]),a("tr",[a("td",[t._v("confirmBtnText")]),a("td",[t._v("确认框确认按钮文字")]),a("td",[t._v("String")]),a("td"),a("td",[t._v("'确认'")])])])])])])}],n=a("17cc"),v={},_=Object(n["a"])(v,r,e,!1,null,null,null);s["default"]=_.exports}}]);
//# sourceMappingURL=chunk-2d0ba735.d9bc7cc3.js.map