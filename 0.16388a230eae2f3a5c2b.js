!function(e){function t(t){for(var r,u,i=t[0],c=t[1],l=t[2],p=0,s=[];p<i.length;p++)u=i[p],o[u]&&s.push(o[u][0]),o[u]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);for(f&&f(t);s.length;)s.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,i=1;i<n.length;i++){var c=n[i];0!==o[c]&&(r=!1)}r&&(a.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},o={0:0},a=[];function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="";var i=window.webpackJsonp=window.webpackJsonp||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var f=c;a.push([356,1]),n()}({259:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],r=!0,o=!1,a=void 0;try{for(var u,i=e[Symbol.iterator]();!(r=(u=i.next()).done)&&(n.push(u.value),!t||n.length!==t);r=!0);}catch(e){o=!0,a=e}finally{try{!r&&i.return&&i.return()}finally{if(o)throw a}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),o=t.CALL_API="Call API";t.default=function(e){return function(e){return function(t){var n=t[o];if(void 0===n)return e(t);var a=n.url,u=n.types;if("string"!=typeof a)throw new Error("指定一个 url");if(!Array.isArray(u)||3!==u.length)throw new Error("预计有三种动作类型的数组。");if(!u.every(function(e){return"string"==typeof e}))throw new Error("预计动作类型为字符串。");var i=function(e){var n=Object.assign({},t,e);return delete n[o],n},c=r(u,3),l=c[0],f=c[1],p=c[2];return e(i({type:l})),function(e){var t=-1===e.indexOf("https://www.lalatina.cc/")?"https://www.lalatina.cc/"+e:e;return fetch(t).then(function(e){return e.json().then(function(t){return e.ok?t:Promise.reject(t)})})}(a).then(function(t){return e(i({type:f,response:t}))},function(t){return e(i({type:p,error:t.message||"Something bad happend"}))})}}}},276:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.EXPERIENCE_REQUEST="EXPERIENCE_REQUEST",t.EXPERIENCE_SUCCESS="EXPERIENCE_SUCCESS",t.EXPERIENCE_FAILURE="EXPERIENCE_FAILURE",t.EXPERIENCE_UPDATE="EXPERIENCE_UPDATE",t.experienceTypes={REQUEST:"REQUEST",SUCCESS:"SUCCESS",FAILURE:"FAILURE",UPDATE:"UPDATE"}},356:function(e,t,n){n(357),n(362),e.exports=n(564)},357:function(e,t,n){"use strict";"undefined"==typeof Promise&&(n(358).enable(),window.Promise=n(360)),n(361),Object.assign=n(138)},564:function(e,t,n){"use strict";var r=u(n(1)),o=u(n(27)),a=u(n(572));function u(e){return e&&e.__esModule?e:{default:e}}document.getElementById("root")&&o.default.render(r.default.createElement(a.default,null),document.getElementById("root"))},572:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(1),a=s(o),u=n(31),i=s(n(171)),c=n(352),l=s(n(624)),f=s(n(625)),p=s(n(696));function s(e){return e&&e.__esModule?e:{default:e}}n(857);var d=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.Component),r(t,[{key:"render",value:function(){return a.default.createElement(c.Provider,{store:f.default},a.default.createElement(u.MuiThemeProvider,{theme:l.default},a.default.createElement(i.default,null),a.default.createElement(p.default,null)))}}]),t}();t.default=d},624:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(31);t.default=(0,r.createMuiTheme)({palette:{primary:{main:"#f1d8b9"},secondary:{main:"#d32f2f"}},typography:{htmlFontSize:18},shape:{borderRadius:2}})},625:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(136),o=i(n(626)),a=i(n(259)),u=i(n(627));function i(e){return e&&e.__esModule?e:{default:e}}var c=(0,r.createStore)(u.default,(0,r.applyMiddleware)(o.default,a.default));t.default=c},627:function(e,t,n){"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0});var o=n(136),a=function(e){return e&&e.__esModule?e:{default:e}}(n(628)),u=n(695),i=n(276);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var l=(0,u.createReducer)({data:[],loading:!1},(c(r={},i.experienceTypes.REQUEST,function(e){return(0,a.default)({},e,{loading:!0})}),c(r,i.experienceTypes.SUCCESS,function(e,t){return(0,a.default)({},e,{data:t.response.data,loading:!1})}),c(r,i.experienceTypes.FAILURE,function(e){return(0,a.default)({},e,{loading:!1})}),c(r,i.experienceTypes.UPDATE,function(e,t){var n=e.data.map(function(e){return e.id==t.updatedDataItem.id?t.updatedDataItem:e});return(0,a.default)({},e,{data:n})}),r));t.default=(0,o.combineReducers)({experience:l})},695:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.createReducer=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e,r=arguments[1];return t.hasOwnProperty(r.type)?t[r.type](n,r):e}}},696:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(1),a=s(o),u=s(n(2)),i=n(31),c=n(697),l=n(855),f=n(352),p=s(n(856));function s(e){return e&&e.__esModule?e:{default:e}}var d=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.Component),r(t,[{key:"componentDidMount",value:function(){this.props.loadExperience()}},{key:"componentWillReceiveProps",value:function(e){}},{key:"switchExperienceActive",value:function(e){e.is_active=!e.is_active,this.props.updateExperience(e)}},{key:"render",value:function(){var e=this,t=this.props,n=t.classes,r=t.experience,o=r.loading,u=r.data;return a.default.createElement("div",null,a.default.createElement(c.Card,{className:n.card_layout},a.default.createElement(c.CardContent,{className:n.cardcontent_laylout},a.default.createElement(c.Typography,{variant:"headline",component:"h1"},"ダスティネス・フォード・ララティーナ"),a.default.createElement(c.Typography,{color:"textSecondary"},"Lalatina Dustiness Ford"),a.default.createElement(c.Typography,{component:"p"},"达斯提尼斯·福特·拉拉蒂娜是晓なつめ所创作的轻小说《为美好的世界献上祝福》及其衍生作品的登场角色。")),a.default.createElement(c.CardActions,{className:n.cardactions_laylout},a.default.createElement("a",{href:"https://github.com/ubbcou/ubbcou.github.io",target:"__blank"},a.default.createElement(c.Button,{size:"small"},"Repository")))),a.default.createElement(c.Grid,{container:!0,spacing:0},a.default.createElement(c.Grid,{item:!0,lg:8,md:10,sm:12,xs:12,className:n.page_container_layout},o?a.default.createElement(c.CircularProgress,{size:36,color:"secondary"}):null,a.default.createElement(c.Stepper,{orientation:"vertical",className:n.stepper_layout},u.map(function(t){return a.default.createElement(c.Step,{key:t.id,active:t.is_active,className:n.step_style,onClick:function(){return e.switchExperienceActive(t)}},a.default.createElement(c.StepLabel,null,t.title),a.default.createElement(c.StepContent,null,a.default.createElement(c.Typography,null,t.description)))})))),a.default.createElement(p.default,null))}}]),t}();d.propTypes={classes:u.default.object.isRequired};t.default=(0,i.withStyles)(function(e){return{card_layout:{boxShadow:"none",backgroundColor:e.palette.primary.main,borderRadius:0},cardcontent_laylout:{textAlign:"center"},cardactions_laylout:{justifyContent:"center"},page_container_layout:{margin:"0 auto"},stepper_layout:{backgroundColor:"transparent",borderLeft:"3px dashed"+e.palette.primary.main,borderRight:"3px dashed"+e.palette.primary.main},step_style:{cursor:"pointer"},steps_heading:{borderLeft:e.spacing.unit+"px solid "+e.palette.primary.main,paddingLeft:e.spacing.unit/2,marginLeft:"-"+e.spacing.unit/4+"px"},steps_heading_paper:{paddingLeft:e.spacing.unit/2,paddingTop:3*e.spacing.unit/2,paddingBottom:3*e.spacing.unit/2}}})((0,f.connect)(function(e){return e},{loadExperience:l.loadExperience,updateExperience:l.updateExperience})(d))},855:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.updateExperience=t.loadExperience=void 0;var r=n(276),o=n(259);var a=function(){return function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}({},o.CALL_API,{types:[r.experienceTypes.REQUEST,r.experienceTypes.SUCCESS,r.experienceTypes.FAILURE],url:"static/data/timeline.json"})};t.loadExperience=function(){return function(e){return e(a())}},t.updateExperience=function(e){return function(t){return t(function(e){return{type:r.experienceTypes.UPDATE,updatedDataItem:e}}(e))}}},856:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(1),a=f(o),u=f(n(177)),i=f(n(135)),c=f(n(36)),l=n(31);function f(e){return e&&e.__esModule?e:{default:e}}var p=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.Component),r(t,[{key:"render",value:function(){return a.default.createElement(u.default,{position:"static",color:"primary"},a.default.createElement(i.default,null,a.default.createElement(c.default,{variant:"caption",color:"inherit"},"@UBBCOU")))}}]),t}();t.default=(0,l.withStyles)(function(e){})(p)},857:function(e,t,n){var r=n(858);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(860)(r,o);r.locals&&(e.exports=r.locals)},858:function(e,t,n){(e.exports=n(859)(!1)).push([e.i,"body {\n  background-image: -webkit-linear-gradient(315deg, #fdfcfb 0%, #e2d1c3 100%);\n  background-image: -o-linear-gradient(315deg, #fdfcfb 0%, #e2d1c3 100%);\n  background-image: linear-gradient(135deg, #fdfcfb 0%, #e2d1c3 100%);\n}\n",""])}});