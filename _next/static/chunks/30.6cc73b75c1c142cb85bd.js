(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[30],{iKC8:function(e,r,t){!function(e,r,t,n){"use strict";r=r&&"default"in r?r.default:r,t=t&&"default"in t?t.default:t,n=n&&"default"in n?n.default:n;var o=function(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")},i=function(){function e(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(r,t,n){return t&&e(r.prototype,t),n&&e(r,n),r}}(),a=function(e,r){if("function"!==typeof r&&null!==r)throw new TypeError("Super expression must either be null or a function, not "+typeof r);e.prototype=Object.create(r&&r.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),r&&(Object.setPrototypeOf?Object.setPrototypeOf(e,r):e.__proto__=r)},u=function(e,r){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!r||"object"!==typeof r&&"function"!==typeof r?e:r},l=function(e,l){var s=l.displayMode,c=function(t){function l(e){o(this,l);var r=u(this,(l.__proto__||Object.getPrototypeOf(l)).call(this,e));return r.usedProp=e.math?"math":"children",r.state=r.createNewState(null,e),r}return a(l,t),i(l,[{key:"componentWillReceiveProps",value:function(){this.setState(this.createNewState)}},{key:"shouldComponentUpdate",value:function(e){return e[this.usedProp]!==this.props[this.usedProp]}},{key:"createNewState",value:function(e,r){try{return{html:this.generateHtml(r),error:void 0}}catch(t){if(t instanceof n.ParseError||t instanceof TypeError)return{error:t};throw t}}},{key:"generateHtml",value:function(e){var r=e.errorColor,t=e.renderError;return n.renderToString(e[this.usedProp],{displayMode:s,errorColor:r,throwOnError:!!t})}},{key:"render",value:function(){var t=this.state,n=t.error,o=t.html,i=this.props.renderError;return n?i?i(n):r.createElement(e,{html:""+n.message}):r.createElement(e,{html:o})}}]),l}(r.Component);return c.propTypes={children:t.string,errorColor:t.string,math:t.string,renderError:t.func},c},s=function(e){var t=e.html;return r.createElement("span",{dangerouslySetInnerHTML:{__html:t}})};s.propTypes={html:t.string.isRequired};var c=l(s,{displayMode:!1}),p=function(e){var t=e.html;return r.createElement("div",{dangerouslySetInnerHTML:{__html:t}})};p.propTypes={html:t.string.isRequired};var f=l(p,{displayMode:!0});e.InlineMath=c,e.BlockMath=f,Object.defineProperty(e,"__esModule",{value:!0})}(r,t("mXGw"),t("17x9"),t("Oy/b"))}}]);