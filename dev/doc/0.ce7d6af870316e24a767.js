!function(e){var n={};function r(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=n,r.d=function(e,n,t){r.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,n){if(1&n&&(e=r(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(r.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)r.d(t,o,function(n){return e[n]}.bind(null,o));return t},r.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(n,"a",n),n},r.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},r.p="",r(r.s=0)}([function(module,exports){eval("const component = () => {\r\n  const element = document.createElement('div');\r\n\r\n  element.innerHTML = 'Hey, LaTi';\r\n\r\n  const tempStyle = {\r\n    width: '100px',\r\n    margin: '0 auto'\r\n  }\r\n  const te = {\r\n    ...element.style,\r\n    textAlign: 'center',\r\n    fontSize: 12,\r\n    color: '#a43',\r\n  }\r\n  \r\n  console.log(te)\r\n  return element;\r\n}\r\n\r\ndocument.body.appendChild(component())\n\n//# sourceURL=webpack:///./src/index.js?")}]);