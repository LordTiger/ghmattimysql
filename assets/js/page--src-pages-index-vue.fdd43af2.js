(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{196:function(t,e,n){},197:function(t,e){},198:function(t,e,n){"use strict";var a=n(220),r=n(223),o={components:{BButton:a.a,BTable:r.a},data:function(){return{fields:[{key:"name",label:"Implementation"},{key:"avgdev",label:"Average Speed"},{key:"minmax",label:"[Min, Max]"},{key:"download",label:"Download Link"}],items:[{name:"MariaDB 10.4",avg:13.94,dev:5.2,min:3,max:151,download:"https://downloads.mariadb.org/mariadb/10.4/"},{name:"MariaDB 10.3",avg:16.38,dev:7.85,min:2,max:200,download:"https://downloads.mariadb.org/mariadb/10.3/"},{name:"MySQL 5.7",avg:15.81,dev:5.81,min:2,max:119,download:"https://dev.mysql.com/downloads/mysql/5.7.html"},{name:"MySQL 8.0",avg:27.14,dev:66.58,min:3,max:1323,download:"https://dev.mysql.com/downloads/mysql/"}]}}},i=n(46),l=Object(i.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-table",{attrs:{fields:t.fields,items:t.items},scopedSlots:t._u([{key:"cell(name)",fn:function(e){return[n("b",[t._v(t._s(e.item.name))])]}},{key:"cell(avgdev)",fn:function(e){return[t._v("\n    "+t._s(e.item.avg)+"ms ± "+t._s(e.item.dev)+"ms\n  ")]}},{key:"cell(minmax)",fn:function(e){return[t._v("\n    ["+t._s(e.item.min)+"ms, "+t._s(e.item.max)+"ms]\n  ")]}},{key:"cell(download)",fn:function(e){return[n("b-button",{attrs:{variant:"outline-primary",href:e.item.download,target:"_blank"}},[t._v("Download")])]}}])})}),[],!1,null,null,null);e.a=l.exports},218:function(t,e,n){"use strict";var a=n(196);n.n(a).a},219:function(t,e,n){"use strict";var a=n(197),r=n.n(a);e.default=r.a},225:function(t,e,n){"use strict";n.r(e);var a=n(8),r=n(23),o=n(2);var i={tag:{type:String,default:"div"},flush:{type:Boolean,default:!1},horizontal:{type:[Boolean,String],default:!1}},l=a.a.extend({name:"BListGroup",functional:!0,props:i,render:function(t,e){var n=e.props,a=e.data,i=e.children,l=""===n.horizontal||n.horizontal;l=!n.flush&&l;var s,u,c,d={staticClass:"list-group",class:(s={"list-group-flush":n.flush,"list-group-horizontal":!0===l},u="list-group-horizontal-".concat(l),c=Object(o.i)(l),u in s?Object.defineProperty(s,u,{value:c,enumerable:!0,configurable:!0,writable:!0}):s[u]=c,s)};return t(n.tag,Object(r.a)(a,d),i)}}),s=n(3),u=n(29),c=n(0),d=n(1),m=n(36),p=n(44),f=n(37);function b(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function v(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var g="BListGroupItem",y=["a","router-link","button","b-link"],O=Object(d.i)(f.b,["event","routerTag"]);delete O.href.default,delete O.to.default;var w=function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?b(Object(n),!0).forEach((function(e){v(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({tag:{type:String,default:"div"},action:{type:Boolean,default:null},button:{type:Boolean,default:null},variant:{type:String,default:function(){return Object(u.b)(g,"variant")}}},O),h=a.a.extend({name:g,functional:!0,props:w,render:function(t,e){var n,a=e.props,o=e.data,i=e.children,l=a.button,u=a.variant,d=a.active,b=a.disabled,g=Object(p.d)(a),w=l?"button":g?f.a:a.tag,h=!!(a.action||g||l||Object(s.a)(y,a.tag)),j={},_={};return Object(c.o)(w,"button")?(o.attrs&&o.attrs.type||(j.type="button"),a.disabled&&(j.disabled=!0)):_=Object(m.a)(O,a),t(w,Object(r.a)(o,{attrs:j,props:_,staticClass:"list-group-item",class:(n={},v(n,"list-group-item-".concat(u),u),v(n,"list-group-item-action",h),v(n,"active",d),v(n,"disabled",b),n)}),i)}}),j=(n(198),{metaInfo:{title:"Documentation"},components:{BListGroup:l,BListGroupItem:h}}),_=(n(218),n(46)),k=n(219),B=Object(_.a)(j,(function(){var t=this.$createElement,e=this._self._c||t;return e("Layout",[e("div",{directives:[{name:"g-image",rawName:"v-g-image"}],domProps:{innerHTML:this._s(this.$page.webPage.content)}})])}),[],!1,null,null,null);"function"==typeof k.default&&Object(k.default)(B);e.default=B.exports}}]);