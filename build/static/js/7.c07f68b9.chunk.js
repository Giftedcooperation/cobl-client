(window.webpackJsonpclient=window.webpackJsonpclient||[]).push([[7],{183:function(e,t,n){"use strict";var r=n(1),a=n(6),c=n(0),o=n.n(c),i=n(12),s=n.n(i),u=n(39),l=n.n(u),f=n(40),p={tag:f.b,type:s.a.string,size:s.a.string,color:s.a.string,className:s.a.string,cssModule:s.a.object,children:s.a.string},d=function(e){var t=e.className,n=e.cssModule,c=e.type,i=e.size,s=e.color,u=e.children,p=e.tag,d=Object(a.a)(e,["className","cssModule","type","size","color","children","tag"]),m=Object(f.a)(l()(t,!!i&&"spinner-"+c+"-"+i,"spinner-"+c,!!s&&"text-"+s),n);return o.a.createElement(p,Object(r.a)({role:"status"},d,{className:m}),u&&o.a.createElement("span",{className:Object(f.a)("sr-only",n)},u))};d.propTypes=p,d.defaultProps={tag:"div",type:"border",children:"Loading..."},t.a=d},188:function(e,t,n){"use strict";n.r(t);var r=n(41),a=n(0),c=n.n(a),o=n(183),i=localStorage.getItem("user"),s=JSON.parse(i)._id;t.default=function(){var e=Object(a.useState)({}),t=Object(r.a)(e,2),n=t[0],i=t[1];return Object(a.useEffect)(function(){fetch("https://cobl.herokuapp.com/getProducts/".concat(s),{method:"get",headers:{"content-type":"application/json"}}).then(function(e){return e.json()}).then(function(e){i(e)})},[n]),c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"col-10 col-md-6 mx-auto"},c.a.createElement("h3",{className:"text-center text-slant"},"Your products"),n.products?c.a.createElement("div",{className:"row"},n.products.map(function(e){return c.a.createElement("div",{key:e.name,className:"col-10 col-md-4 mx-auto my-4"},c.a.createElement("div",{className:"card product"},c.a.createElement("div",{className:"card-body"},c.a.createElement("h5",null,e.name),c.a.createElement("hr",null),e.description),c.a.createElement("div",{className:"price badge bg-primary"},"\u20a6",e.price)))})):c.a.createElement("h2",{className:"text-center mx-auto my-4"},c.a.createElement(o.a,{key:"Loading",size:"sm"}))))}},39:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var c=typeof r;if("string"===c||"number"===c)e.push(r);else if(Array.isArray(r)&&r.length){var o=a.apply(null,r);o&&e.push(o)}else if("object"===c)for(var i in r)n.call(r,i)&&r[i]&&e.push(i)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()},40:function(e,t,n){"use strict";n.d(t,"a",function(){return o}),n.d(t,"b",function(){return s});n(43);var r,a=n(12),c=n.n(a);function o(e,t){return void 0===e&&(e=""),void 0===t&&(t=r),t?e.split(" ").map(function(e){return t[e]||e}).join(" "):e}var i="object"===typeof window&&window.Element||function(){};c.a.oneOfType([c.a.string,c.a.func,function(e,t,n){if(!(e[t]instanceof i))return new Error("Invalid prop `"+t+"` supplied to `"+n+"`. Expected prop to be an instance of Element. Validation failed.")},c.a.shape({current:c.a.any})]);var s=c.a.oneOfType([c.a.func,c.a.string,c.a.shape({$$typeof:c.a.symbol,render:c.a.func}),c.a.arrayOf(c.a.oneOfType([c.a.func,c.a.string,c.a.shape({$$typeof:c.a.symbol,render:c.a.func})]))]);"undefined"===typeof window||!window.document||window.document.createElement},41:function(e,t,n){"use strict";function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,a=!1,c=void 0;try{for(var o,i=e[Symbol.iterator]();!(r=(o=i.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(s){a=!0,c=s}finally{try{r||null==i.return||i.return()}finally{if(a)throw c}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}n.d(t,"a",function(){return r})},43:function(e,t,n){(function(t){var n="[object AsyncFunction]",r="[object Function]",a="[object GeneratorFunction]",c="[object Null]",o="[object Proxy]",i="[object Undefined]",s="object"==typeof t&&t&&t.Object===Object&&t,u="object"==typeof self&&self&&self.Object===Object&&self,l=s||u||Function("return this")(),f=Object.prototype,p=f.hasOwnProperty,d=f.toString,m=l.Symbol,y=m?m.toStringTag:void 0;function b(e){return null==e?void 0===e?i:c:y&&y in Object(e)?function(e){var t=p.call(e,y),n=e[y];try{e[y]=void 0;var r=!0}catch(c){}var a=d.call(e);r&&(t?e[y]=n:delete e[y]);return a}(e):function(e){return d.call(e)}(e)}e.exports=function(e){if(!function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}(e))return!1;var t=b(e);return t==r||t==a||t==n||t==o}}).call(this,n(25))}}]);
//# sourceMappingURL=7.c07f68b9.chunk.js.map