(this["webpackJsonp@react-page/examples"]=this["webpackJsonp@react-page/examples"]||[]).push([[30],{1154:function(e,n,t){"use strict";(function(e){var r=t(0),o=t.n(r),l=function(e,n){var t="function"===typeof Symbol&&e[Symbol.iterator];if(!t)return e;var r,o,l=t.call(e),i=[];try{for(;(void 0===n||n-- >0)&&!(r=l.next()).done;)i.push(r.value)}catch(a){o={error:a}}finally{try{r&&!r.done&&(t=l.return)&&t.call(l)}finally{if(o)throw o.error}}return i};n.a=function(n){var t=n.children,i=o.a.createRef(),a=o.a.createRef(),c=l(Object(r.useState)(!1),2),u=c[0],d=c[1],s=l(Object(r.useState)(!0),2),f=s[0],v=s[1],b=l(Object(r.useState)(0),2),h=b[0],p=b[1];return o.a.useEffect((function(){var n=function(){if(i.current){var e=i.current.getBoundingClientRect(),n=e.top,t=e.left,r=n+i.current.clientHeight,o=document.documentElement.clientWidth-t-i.current.clientWidth,l=a.current?a.current.clientHeight:400;p(o),d(n>window.innerHeight-l),v(r<window.innerHeight)}};document.addEventListener("scroll",n),window.addEventListener("resize",n);var t=null;return e.IntersectionObserver&&(t=new IntersectionObserver(n),i.current&&t.observe(i.current)),n(),function(){document.removeEventListener("scroll",n),window.removeEventListener("resize",n),null===t||void 0===t||t.disconnect()}}),[i,a]),o.a.createElement("div",{style:{position:"relative"},ref:i},t({rightOffset:h,stickyElRef:a,shouldStickToTop:u,shouldStickToBottom:f}))}}).call(this,t(45))},1420:function(e,n,t){"use strict";t.r(n);var r=t(360),o=t(54),l=t(0),i=t.n(l),a=t(1408),c=t(1351),u=t(296),d=t(305);var s,f=function(e){var n=e.defaultMode,t=e.disabled,r=e.children,o=function(e){var n=e.defaultMode,t=void 0===n?u.b:n,r=e.disabled,o=i.a.useRef(),a=Object(d.c)(),c=Object(d.K)(),s=Object(d.s)();return Object(l.useEffect)((function(){if(!r&&o.current&&(document||document.body)){var e=function(e){(function(e,n){if(!e)return!1;for(var t=function(e){for(var n in e)if(n.startsWith("__reactInternalInstance$"))return e[n];return null}(n);t;){if(t.stateNode===e)return!0;t=t.return}return!1})(o.current,e.target)||(a(),s&&c(t))};return document.body.addEventListener("mousedown",e),function(){document.body.removeEventListener("mousedown",e)}}}),[o.current,r,s,c,a]),o}({defaultMode:n,disabled:t});return i.a.createElement("div",{ref:o},r)},v=t(340),b=function(e){var n=e.editor,t=e.children,o=void 0===t?[]:t,i=e.dndBackend,u=void 0===i?c.a:i,d=e.blurGateDisabled,s=void 0!==d&&d,b=e.blurGateDefaultMode;return l.createElement(a.a,{backend:u},l.createElement(v.a,{store:n.store},l.createElement(r.a.Provider,{value:n},l.createElement(f,{disabled:s,defaultMode:b},o))))},h=t(293),p=t(1155),m=t.n(p),y=t(300),g=t(295),O=function(e,n,t,r){return new(t||(t=Promise))((function(o,l){function i(e){try{c(r.next(e))}catch(n){l(n)}}function a(e){try{c(r.throw(e))}catch(n){l(n)}}function c(e){var n;e.done?o(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(i,a)}c((r=r.apply(e,n||[])).next())}))},A=function(e,n){var t,r,o,l,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return l={next:a(0),throw:a(1),return:a(2)},"function"===typeof Symbol&&(l[Symbol.iterator]=function(){return this}),l;function a(l){return function(a){return function(l){if(t)throw new TypeError("Generator is already executing.");for(;i;)try{if(t=1,r&&(o=2&l[0]?r.return:l[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,l[1])).done)return o;switch(r=0,o&&(l=[2&l[0],o.value]),l[0]){case 0:case 1:o=l;break;case 4:return i.label++,{value:l[1],done:!1};case 5:i.label++,r=l[1],l=[0];continue;case 7:l=i.ops.pop(),i.trys.pop();continue;default:if(!(o=(o=i.trys).length>0&&o[o.length-1])&&(6===l[0]||2===l[0])){i=0;continue}if(3===l[0]&&(!o||l[1]>o[0]&&l[1]<o[3])){i.label=l[1];break}if(6===l[0]&&i.label<o[1]){i.label=o[1],o=l;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(l);break}o[2]&&i.ops.pop(),i.trys.pop();continue}l=n.call(e,i)}catch(a){l=[6,a],r=0}finally{t=o=0}if(5&l[0])throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}([l,a])}}},j=function(e,n){var t="function"===typeof Symbol&&e[Symbol.iterator];if(!t)return e;var r,o,l=t.call(e),i=[];try{for(;(void 0===n||n-- >0)&&!(r=l.next()).done;)i.push(r.value)}catch(a){o={error:a}}finally{try{r&&!r.done&&(t=l.return)&&t.call(l)}finally{if(o)throw o.error}}return i},w=function(){for(var e=[],n=0;n<arguments.length;n++)e=e.concat(j(arguments[n]));return e},E=function(e,n){var t;return void 0===e&&(e=[]),e.find((function(e){return t===n?e.isLeaf:(t=e.id,!1)}))},H=function(e,n,t){return O(void 0,void 0,void 0,(function(){var r,o,l,i;return A(this,(function(a){switch(a.label){case 0:return Object(g.c)(n)?[2]:(null===(r=null!==(l=null===(o=null===n||void 0===n?void 0:n.layout)||void 0===o?void 0:o.plugin)&&void 0!==l?l:null===(i=null===n||void 0===n?void 0:n.content)||void 0===i?void 0:i.plugin)||void 0===r?void 0:r[t])?[4,r[t](e,n)]:[3,2];case 1:a.sent(),a.label=2;case 2:return[2]}}))}))},C=function(e){var n=e.children,t=Object(d.k)(),r=Object(d.j)(),o=Object(d.N)(),a=Object(d.z)(),c=Object(d.n)(),u=Object(d.m)(),s=Object(d.B)(),f=Object(l.useCallback)((function(e,n,o,l){return O(void 0,void 0,void 0,(function(){var i,a;return A(this,(function(c){switch(c.label){case 0:i=t.getNode(null===r||void 0===r?void 0:r.id,n),c.label=1;case 1:return c.trys.push([1,5,,6]),i?[4,H(e,i,o)]:[3,3];case 2:c.sent(),c.label=3;case 3:return[4,l(e,i)];case 4:return c.sent(),[3,6];case 5:return(a=c.sent())&&console.error(a),[3,6];case 6:return[2]}}))}))}),[null===r||void 0===r?void 0:r.id,t]),v=Object(l.useMemo)((function(){return[{hotkeys:["ctrl+z","command+z"],handler:function(){o()}},{hotkeys:["ctrl+shift+z","ctrl+y","command+shift+z","command+y"],handler:function(){a()}},{hotkeys:["alt+del","alt+backspace"],handler:function(e){f(e,c,"handleRemoveHotKey",(function(){s(c)}))}},{hotkeys:["alt+down","alt+right"],handler:function(e){f(e,c,"handleFocusNextHotKey",(function(){var e=E(r.cellOrder,c);e&&(Object(y.j)(),u(e.id,!0))}))}},{hotkeys:["alt+up","alt+left"],handler:function(e){f(e,c,"handleFocusPreviousHotKey",(function(){var e,n,t=(e=r.cellOrder,n=c,E(w(e).reverse(),n));t&&(Object(y.j)(),u(t.id,!0))}))}}]}),[r,c,y.j,u,s]),b=Object(d.q)();return Object(l.useEffect)((function(){if(!b||focus){var e=function(e){var n=v.find((function(n){return n.hotkeys.some((function(n){return m()(n,e)}))}));null===n||void 0===n||n.handler(e)};return document.addEventListener("keydown",e),function(){document.removeEventListener("keydown",e)}}}),[v,focus,b]),i.a.createElement(i.a.Fragment,null,n)},R=t(1432),I=function(e,n){var t="function"===typeof Symbol&&e[Symbol.iterator];if(!t)return e;var r,o,l=t.call(e),i=[];try{for(;(void 0===n||n-- >0)&&!(r=l.next()).done;)i.push(r.value)}catch(a){o={error:a}}finally{try{r&&!r.done&&(t=l.return)&&t.call(l)}finally{if(o)throw o.error}}return i},L=function(e){var n=e.children,t=Object(d.p)(),r=I(Object(R.a)({accept:"cell",drop:function(e,n){n.didDrop()||t(e.cell)}}),2)[1];return i.a.createElement("div",{ref:r},n)},B=t(760),x=t.n(B),k=t(1429),P=t(353),S=t(456),N=t.n(S),z=function(e){var n=e.node,t=e.error,r=Object(d.q)(),o=Object(d.A)(n.id);return l.createElement("div",{className:"ory-cell-error"},l.createElement("strong",null,"An error occurred!"),l.createElement("small",null,l.createElement("dl",null,l.createElement("dt",null,"Cause:"),l.createElement("dd",null,t.message),l.createElement("dt",null,"Cell:"),l.createElement("dd",null,n.id))),r?l.createElement("button",{onClick:function(){return o()}},"Remove"):null)},M=t(352),D=t(1433),W=t(1409),T=function(e,n){var t="function"===typeof Symbol&&e[Symbol.iterator];if(!t)return e;var r,o,l=t.call(e),i=[];try{for(;(void 0===n||n-- >0)&&!(r=l.next()).done;)i.push(r.value)}catch(a){o={error:a}}finally{try{r&&!r.done&&(t=l.return)&&t.call(l)}finally{if(o)throw o.error}}return i},_="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAhCAYAAACbffiEAAAA6UlEQVRYhe2ZQQ6CMBBFX0njHg7ESXTp1p3uvIBewc3Em3AfdelSFwRDCAm01JRO+pa0lP8zzc9kMCKyAa7AFqhIixdwB44WuACHuHq8KWm1vwtgF1lMCPaWkevUNE3Qr9R17XTu1P5uvUdV+IpbG2qMGBH5xBYRAjUVUWPEjj10SS3XRFry3kha/VBTETVGcmqtDTVGFqdWn7k9ku96f88QNRVRYySn1tpQY8QptXz7qinmnpt7rZTIqbU21BgJ2mv1+XfCDVFTETVGjIg8SG8KP+RZ0I7lU+dmgRNgaKfyZVw9znT/R85fOHJJE77U6UcAAAAASUVORK5CYII=",F=function(){return l.createElement("div",{className:"ory-cell-draggable-overlay-handle"},l.createElement("div",{className:"ory-cell-draggable-overlay-handle-icon"}))},G=function(e){var n,t,r=e.isLeaf,o=e.children,i=e.nodeId,a=l.useCallback((function(e){e.stopPropagation()}),[]),c=Object(d.d)(i),u=Object(d.f)(i),s=Object(d.o)(),f=T(Object(D.a)({item:{type:"cell",cell:c},collect:function(e){return{isDragging:e.isDragging()}},begin:function(e){s.dragCell(c.id)},end:function(e,n){n.didDrop()||s.cancelCellDrag()}}),3),v=f[0].isDragging,b=f[1],h=f[2],p=Object(d.r)(i),m=Object(d.t)(),y=Object(d.y)();return m||y.allowMoveInEditMode?y.allowMoveInEditMode&&!m?l.createElement(l.Fragment,null,l.createElement(W.a,{connect:h,src:_}),l.createElement("div",{className:N()({"ory-cell-draggable-in-edit":y.allowMoveInEditMode,"ory-cell-draggable":m&&!y.allowMoveInEditMode,"ory-cell-draggable-is-dragging":v}),onMouseDown:a},p?l.createElement("div",{ref:b},null!==(t=y.editModeResizeHandle)&&void 0!==t?t:l.createElement(F,null)):null,l.createElement("div",null,o))):l.createElement(l.Fragment,null,l.createElement(W.a,{connect:h,src:_}),l.createElement("div",{ref:b,className:N()({"ory-cell-draggable":m,"ory-cell-draggable-is-dragging":v})},l.createElement("div",{className:N()((n={"ory-cell-draggable-overlay":m},n["ory-cell-draggable-inline-"+c.inline]=c.inline,n["ory-cell-draggable-leaf"]=r,n))},l.createElement("div",{className:"ory-cell-draggable-overlay-description"},l.createElement("span",null,null===u||void 0===u?void 0:u.text))),l.createElement("div",null,o))):l.createElement("div",{className:"ory-cell-draggable-container"},l.createElement("div",{className:"ory-cell-draggable-overlay-placeholder"}),o)},U=t(299).b?40:60,V=function(e,n){var t="function"===typeof Symbol&&e[Symbol.iterator];if(!t)return e;var r,o,l=t.call(e),i=[];try{for(;(void 0===n||n-- >0)&&!(r=l.next()).done;)i.push(r.value)}catch(a){o={error:a}}finally{try{r&&!r.done&&(t=l.return)&&t.call(l)}finally{if(o)throw o.error}}return i},q=function(){for(var e=[],n=0;n<arguments.length;n++)e=e.concat(V(arguments[n]));return e},K=function(){return new Error("dummy").stack.replace(/^[^(]+?[\n$]/gm,"").replace(/^\s+at\s+/gm,"").replace(/^Object.<anonymous>\s*\(/gm,"{anonymous}()@").split("\n")},Q=new(function(){function e(){}return e.prototype.warn=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];console.warn.apply(console,q(["Warning:"],e))},e.prototype.debug=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];console.log.apply(console,q(["Debug:"],e))},e.prototype.info=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];console.log.apply(console,q(["Info:"],e))},e.prototype.error=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];console.error.apply(console,q(["Error:"],e)),console.error("Trace:",K())},e.prototype.fatal=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];throw console.error.apply(console,q(["Fatal:"],e)),console.error("Trace:",K()),new Error(e.join(" "))},e.prototype.log=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];console.log.apply(console,q(["Fatal:"],e)),console.log("Trace:",K())},e}()),J=function(){return(J=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e}).apply(this,arguments)},X={NO:0,C1:10,C2:11,C3:12,C4:13,AH:200,AA:201,BH:210,BA:211,LH:220,LA:221,RH:230,RA:231,IL:300,IR:301},Y={"6x6":[[X.C1,X.AA,X.AA,X.AA,X.AA,X.C2],[X.LA,X.IL,X.AH,X.AH,X.IR,X.RA],[X.LA,X.LH,X.NO,X.NO,X.RH,X.RA],[X.LA,X.LH,X.NO,X.NO,X.RH,X.RA],[X.LA,X.C4,X.BH,X.BH,X.C3,X.RA],[X.C4,X.BA,X.BA,X.BA,X.BA,X.C3]],"10x10":[[X.C1,X.AA,X.AA,X.AA,X.AA,X.AA,X.AA,X.AA,X.AA,X.C2],[X.LA,X.IL,X.IL,X.IL,X.AH,X.AH,X.IR,X.IR,X.IR,X.RA],[X.LA,X.IL,X.IL,X.IL,X.AH,X.AH,X.IR,X.IR,X.IR,X.RA],[X.LA,X.IL,X.IL,X.IL,X.AH,X.AH,X.IR,X.IR,X.IR,X.RA],[X.LA,X.LH,X.LH,X.LH,X.C1,X.C2,X.RH,X.RH,X.RH,X.RA],[X.LA,X.LH,X.LH,X.LH,X.C4,X.C3,X.RH,X.RH,X.RH,X.RA],[X.LA,X.LH,X.LH,X.C4,X.BH,X.BH,X.C3,X.IR,X.RH,X.RA],[X.LA,X.LH,X.C4,X.BH,X.BH,X.BH,X.BH,X.C3,X.RH,X.RA],[X.LA,X.C4,X.BH,X.BH,X.BH,X.BH,X.BH,X.BH,X.C3,X.RA],[X.C4,X.BA,X.BA,X.BA,X.BA,X.BA,X.BA,X.BA,X.BA,X.C3]],"10x10-no-inline":[[X.C1,X.AA,X.AA,X.AA,X.AA,X.AA,X.AA,X.AA,X.AA,X.C2],[X.LA,X.C1,X.AH,X.AH,X.AH,X.AH,X.AH,X.AH,X.C2,X.RA],[X.LA,X.LH,X.C1,X.AH,X.AH,X.AH,X.AH,X.C2,X.RH,X.RA],[X.LA,X.LH,X.LH,X.C1,X.AH,X.AH,X.C2,X.RH,X.RH,X.RA],[X.LA,X.LH,X.LH,X.LH,X.C1,X.C2,X.RH,X.RH,X.RH,X.RA],[X.LA,X.LH,X.LH,X.LH,X.C4,X.C3,X.RH,X.RH,X.RH,X.RA],[X.LA,X.LH,X.LH,X.C4,X.BH,X.BH,X.C3,X.RH,X.RH,X.RA],[X.LA,X.LH,X.C4,X.BH,X.BH,X.BH,X.BH,X.C3,X.RH,X.RA],[X.LA,X.C4,X.BH,X.BH,X.BH,X.BH,X.BH,X.BH,X.C3,X.RA],[X.C4,X.BA,X.BA,X.BA,X.BA,X.BA,X.BA,X.BA,X.BA,X.C3]]},Z={"10x10":null,"10x10-no-inline":null},$=function(e,n,t,r,l){var i=r.room,a=r.mouse,c=r.matrix,u=r.callbacks,d=function(e){var n=e.room,t=e.matrix,r=t.length,o=t[0].length;return{x:n.width/o,y:n.height/r}}({room:i,matrix:c}),s=function(e){var n=e.mouse,t=e.scale;return{cell:Math.floor(n.x/t.x),row:Math.floor(n.y/t.y)}}({mouse:a,scale:d}),f=c.length,v=c[0].length;s.row>=f?s.row=f-1:s.row<0&&(s.row=0),s.cell>=v?s.cell=v-1:s.cell<0&&(s.cell=0);var b=c[s.row][s.cell];if(u[b]){var h={item:e.id,hover:n.id,actions:t,ctx:{room:i,mouse:a,position:s,size:{rows:f,cells:v},scale:d}};if(!Object(o.a)(h,Z[l]))return Z[l]=h,u[b](e,n,t,{room:i,mouse:a,position:s,size:{rows:f,cells:v},scale:d})}else Q.error("Matrix callback not found.",{room:i,mouse:a,matrix:c,scale:d,hoverCell:s,rows:f,cells:v})},ee=function(e){var n=e.mouse,t=e.position,r=e.scale;return{x:Math.round(n.x-t.cell*r.x),y:Math.round(n.y-t.row*r.y)}},ne=function(e){var n=e.size,t=e.levels,r=e.position;if(n<=2*(t+1))return Math.round(r/(n/t));for(var o=[0],l=n-2*(t+1),i=0;i<=t;i++)if(o.push(o[i]+l/2),l/=2,r>=o[i]+2*i&&r<o[i+1]+2*(i+1))return i;return t},te=function(e,n){var t=e.mouse,r=e.position,o=e.hover,l=e.scale,i=e.level;void 0===n&&(n=!1);var a=ee({mouse:t,position:r,scale:l}).x,c=ne({size:l.x,position:a,levels:i});return Object(g.c)(o)?i:(o.inline&&0===c&&(c=1),n?i-c:c)},re=function(e,n){var t=e.level,r=e.mouse,o=e.hover,l=e.position,i=e.scale;void 0===n&&(n=!1);var a=ee({mouse:r,position:l,scale:i}).y,c=ne({size:i.y,position:a,levels:t});return Object(g.c)(o)?t:(o.inline&&0===c&&(c=1),n?t-c:c)},oe=function(e){return!Object(g.c)(e)&&e.inline?1:0},le=((s={})[X.NO]=function(e,n,t){return(0,t.clear)()},s[X.C1]=function(e,n,t,r){var o=t.leftOf,l=t.above,i=ee(r),a=oe(n);if(i.x<i.y)return o(e,n,a);l(e,n,a)},s[X.C2]=function(e,n,t,r){var o=t.rightOf,l=t.above,i=ee(r),a=oe(n);if(i.x>i.y)return o(e,n,a);l(e,n,a)},s[X.C3]=function(e,n,t,r){var o=t.rightOf,l=t.below,i=ee(r),a=oe(n);if(i.x>i.y)return o(e,n,a);l(e,n,a)},s[X.C4]=function(e,n,t,r){var o=t.leftOf,l=t.below,i=ee(r),a=oe(n);if(i.x<i.y)return o(e,n,a);l(e,n,a)},s[X.AH]=function(e,n,t){(0,t.above)(e,n,oe(n))},s[X.BH]=function(e,n,t){(0,t.below)(e,n,oe(n))},s[X.LH]=function(e,n,t){(0,t.leftOf)(e,n,oe(n))},s[X.RH]=function(e,n,t){(0,t.rightOf)(e,n,oe(n))},s[X.AA]=function(e,n,t,r){return(0,t.above)(e,n,re(J(J({},r),{hover:n,level:n.levels.above}),!0))},s[X.BA]=function(e,n,t,r){return(0,t.below)(e,n,re(J(J({},r),{hover:n,level:n.levels.below})))},s[X.LA]=function(e,n,t,r){return(0,t.leftOf)(e,n,te(J(J({},r),{hover:n,level:n.levels.left}),!0))},s[X.RA]=function(e,n,t,r){return(0,t.rightOf)(e,n,te(J(J({},r),{hover:n,level:n.levels.right})))},s[X.IL]=function(e,n,t){var r=t.inlineLeft,o=t.leftOf;if(!Object(g.c)(e)&&!Object(g.c)(n)){var l=n.inline,i=n.hasInlineNeighbour,a=e.content,c=(void 0===a?{}:a).plugin,u=(void 0===c?{}:c).isInlineable;return l||!(void 0!==u&&u)||i&&i!==e.id||i&&i===e.id&&"left"===e.inline?o(e,n,2):void r(e,n)}},s[X.IR]=function(e,n,t){var r=t.inlineRight,o=t.rightOf;if(!Object(g.c)(e)&&!Object(g.c)(n)){var l=n.inline,i=n.hasInlineNeighbour,a=e.content,c=(void 0===a?{}:a).plugin,u=(void 0===c?{}:c).isInlineable;return l||!(void 0!==u&&u)||i&&i!==e.id||i&&i===e.id&&"right"===e.inline?o(e,n,2):void r(e,n)}},s),ie=new(function(){function e(e){var n=void 0===e?{}:e,t=n.matrices,r=n.callbacks;this.callbacks=le,this.matrices=Y,this.matrices=t||this.matrices,this.callbacks=r||this.callbacks}return e.prototype.hover=function(e,n,t,r){var o=r.room,l=r.mouse,i=r.matrix,a=void 0===i?"10x10":i;return $(e,n,t,{room:o,mouse:l,matrix:this.matrices[a],callbacks:this.callbacks},a)},e}()),ae=function(e,n,t,r,o,l){var i=r.getClientOffset(),a=o.getBoundingClientRect(),c={height:a.bottom-a.top,width:a.right-a.left},u={y:i.y-a.top,x:i.x-a.left};ie.hover(t,n,e,{room:c,mouse:u,matrix:l})},ce={hoverId:"",dragId:""},ue=function(e,n){return(e!==ce.hoverId||n!==ce.dragId)&&(ce={hoverId:e,dragId:n},!0)},de=x()((function(e,n,t,r){var o,l,i,a=n.getItem();if(a)if(a.cell.id!==e.id){if(n.isOver({shallow:!0}))if(e.ancestors.some((function(e){return e.id===a.cell.id})))ue(e.id,a.cell.id)&&r.clear();else if(e.id){ce={hoverId:e.id,dragId:a.cell.id};var c=null!==(i=!Object(g.c)(e)&&(null===(l=null===(o=null===e||void 0===e?void 0:e.content)||void 0===o?void 0:o.plugin)||void 0===l?void 0:l.allowInlineNeighbours))&&void 0!==i&&i;!function(e,n,t,r,o,l){void 0===l&&(l="10x10"),ae(o,e,n,t,r,l)}(e,a.cell,n,t,r,"10x10"+(c?"":"-no-inline"))}else Q.warn("Canceled cell drop, no id given.",e,a)}else ue(e.id,a.cell.id)&&r.clear()}),U,{leading:!1}),se=function(e,n,t,r){var o,l,i,a=n.getItem();if(!n.didDrop()&&n.isOver({shallow:!0}))if(a.cell.id!==e.id)if(e.ancestors.some((function(e){return e.id===a.cell.id})))r.cancelCellDrag();else{ce={hoverId:e.id,dragId:a.cell.id};var c=null!==(i=!Object(g.c)(e)&&(null===(l=null===(o=null===e||void 0===e?void 0:e.content)||void 0===o?void 0:o.plugin)||void 0===l?void 0:l.allowInlineNeighbours))&&void 0!==i&&i;!function(e,n,t,r,o,l){void 0===l&&(l="10x10"),ae(o,e,n,t,r,l)}(e,a.cell,n,t,r,"10x10"+(c?"":"-no-inline"))}else r.cancelCellDrag()},fe=function(e,n){var t="function"===typeof Symbol&&e[Symbol.iterator];if(!t)return e;var r,o,l=t.call(e),i=[];try{for(;(void 0===n||n-- >0)&&!(r=l.next()).done;)i.push(r.value)}catch(a){o={error:a}}finally{try{r&&!r.done&&(t=l.return)&&t.call(l)}finally{if(o)throw o.error}}return i},ve=function(e){var n=l.useRef(null),t=Object(d.x)(e),r=Object(d.o)(),o=Object(d.g)(),i=fe(Object(R.a)({accept:"cell",canDrop:function(e){return e.cell.id!==t.id&&!t.ancestors.some((function(n){return n.id===e.cell.id}))},hover:function(e,o){de(t,o,n.current,r)},drop:function(e,r){se(t,r,n.current,o)}}),2)[1];return l.useCallback((function(e){i(e),n.current=e}),[i])},be=function(e){var n,t=Object(d.t)(),r=Object(d.s)(),o=ve(e.nodeId),i=Object(d.x)(e.nodeId),a=Object(d.y)();return t||r||a.allowMoveInEditMode?l.createElement("div",{ref:o,className:N()("ory-cell-droppable",(n={"ory-cell-droppable-is-over-current":i.hoverPosition},n["ory-cell-droppable-is-over-"+i.hoverPosition]=i.hoverPosition,n["ory-cell-droppable-leaf"]=e.isLeaf,n))},e.children):l.createElement("div",{className:"ory-cell-droppable-container"},e.children)},he=function(e){var n=e.children,t=e.nodeId,r=Object(d.t)(),o=Object(d.s)(),i=ve(t);return r||o?l.createElement("div",{ref:i,className:"ory-row-droppable"},n):l.createElement("div",{className:"ory-row-droppable-container"},n)},pe=function(e,n){var t="function"===typeof Symbol&&e[Symbol.iterator];if(!t)return e;var r,o,l=t.call(e),i=[];try{for(;(void 0===n||n-- >0)&&!(r=l.next()).done;)i.push(r.value)}catch(a){o={error:a}}finally{try{r&&!r.done&&(t=l.return)&&t.call(l)}finally{if(o)throw o.error}}return i},me=function(e){var n=e.cells;return Boolean(2===n.length&&Boolean(n[0].inline))},ye=l.memo((function(e){var n,t=e.nodeId,r=pe(Object(k.a)(),2),o=r[0],i=r[1].width,a=Object(d.D)(t),c=Object(d.c)();return l.createElement(he,{nodeId:t},l.createElement("div",{ref:o,className:N()("ory-row",(n={"ory-row-is-hovering-this":Boolean(a.hoverPosition)},n["ory-row-is-hovering-"+(a.hoverPosition||"")]=Boolean(a.hoverPosition),n["ory-row-has-floating-children"]=me(a),n)),onClick:c},a.cells.map((function(e){return l.createElement(ke,{nodeId:e.id,rowWidth:i,key:e.id})}))))})),ge=function(e){var n=e.nodeId,t=Object(d.d)(n),r=Object(d.w)(),o=Object(d.i)(),i=Object(d.u)(),a=Object(d.q)(),c=Object(d.P)(t.id),u=Object(d.e)(t),s=Object(d.l)(t.id),f=Object(d.r)(t.id),v=l.useRef(),b=t.layout.plugin.Component,h=Object(d.A)(t.id),p=l.useCallback((function(e){return f||e.target.closest(".ory-cell-inner")!==v.current||s(!1,"onMouseDown"),!0}),[t]);return l.createElement("div",{onMouseDown:i?void 0:p,tabIndex:-1,className:"ory-cell-inner",ref:v},l.createElement(b,{editable:o,cell:t,nodeId:n,lang:r,state:u,pluginConfig:t.layout.plugin,focused:a&&f,readOnly:!a,onChange:c,isEditMode:a,isPreviewMode:i,remove:h},t.rows.map((function(e){return l.createElement(ye,{nodeId:e.id,key:e.id})}))))},Oe=l.memo((function(e){var n=e.nodeId,t=Object(d.d)(n).rows,r=void 0===t?[]:t;return l.createElement("div",{className:"ory-cell-inner ory-cell-rows"},r.map((function(e){return l.createElement(ye,{nodeId:e.id,key:e.id})})))})),Ae=function(){return(Ae=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e}).apply(this,arguments)},je=l.memo((function(e){var n=Object(d.d)(e.nodeId),t=n.rows,r=void 0===t?[]:t,o=n.layout,i=(void 0===o?{}:o).plugin,a=(void 0===i?{}:i).Component,c=void 0===a?void 0:a,u=n.content,s=(void 0===u?{}:u).plugin,f=(void 0===s?{}:s).Component,v=void 0===f?void 0:f;return r.length&&c?l.createElement(be,Ae({},e),l.createElement(G,Ae({},e),l.createElement(ge,Ae({},e)))):r.length?l.createElement(be,Ae({},e),l.createElement(Oe,Ae({},e))):v?l.createElement(be,Ae({},e,{isLeaf:!0}),l.createElement(G,Ae({},e,{isLeaf:!0}),l.createElement(M.a,Ae({},e)))):l.createElement(z,{node:n,error:new Error("The content plugin could not be found.")})})),we=t(1157),Ee=t.n(we),He=t(1167),Ce=function(e,n){var t=e.stepWidth,r=e.steps,o=e.inline,l=Math.round(n.width/t);return"right"===o&&(l=r-l),l>r?l=r:l<1&&(l=1),l},Re=function(){var e=function(n,t){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])})(n,t)};return function(n,t){function r(){this.constructor=n}e(n,t),n.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}}(),Ie=function(e){function n(n){var t=e.call(this,n)||this;t.onChangeSize=function(e){if(!isNaN(e.width)){var n=Ce({steps:t.state.steps,stepWidth:t.state.stepWidth,inline:t.props.node.inline},e);t.props.onChange(n)}},t.onResize=function(e,n){var r=n.size;isNaN(r.width)||(t.setState({width:r.width}),t.onChangeSizeThrottled(r))},t.onResizeStop=function(e,n){var r=n.size;if(!isNaN(r.width)){t.onChangeSize(r);var o=Ce({steps:t.state.steps,stepWidth:t.state.stepWidth,inline:t.props.node.inline},r);t.setState({width:o*t.state.stepWidth})}};var r=function(e){var n=e.rowWidth,t=e.steps;return Math.round(n/(t||12))}({rowWidth:n.rowWidth,steps:n.node.size});return t.onChangeSizeThrottled=Ee()(t.onChangeSize,100),t.state={stepWidth:r,width:n.node.size*r,steps:n.steps-1||11},t}return Re(n,e),n.prototype.render=function(){var e,n=this.props,t=n.node,r=t.bounds,o=t.inline,i=n.children;return l.createElement(He.Resizable,{className:N()("ory-cell-inner","ory-cell-resizable",(e={},e["ory-cell-resizable-inline-"+(o||"")]=o,e)),onResize:this.onResize,onResizeStop:this.onResizeStop,minConstraints:o?null:[this.state.stepWidth,1/0],maxConstraints:o?null:[r.right*this.state.stepWidth,1/0],draggableOpts:{axis:"none",offsetParent:document.body},width:this.state.width,height:0},l.createElement("div",null,i))},n}(l.PureComponent),Le=function(){var e=function(n,t){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])})(n,t)};return function(n,t){function r(){this.constructor=n}e(n,t),n.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}}(),Be=function(e){var n=e.isPreviewMode,t=e.isEditMode,r=e.size;return n||t?"ory-cell-"+(n||t?"sm":"xs")+"-"+(r||12)+" ory-cell-xs-12":"ory-cell-xs-"+(r||12)},xe=function(e){function n(){var n=null!==e&&e.apply(this,arguments)||this;return n.state={error:null},n}return Le(n,e),n.prototype.componentDidCatch=function(e){this.setState({error:e})},n.prototype.render=function(){return this.state.error?l.createElement(z,{node:this.props.node,error:this.state.error}):this.props.children},n}(l.Component),ke=l.memo((function(e){var n,t,r,o=e.nodeId,i=e.rowWidth,a=Object(d.d)(o),c=Object(d.r)(o),u=a.inline,s=a.hasInlineNeighbour,f=a.isDraft,v=a.isDraftI18n,b=a.size,h=a.resizable,p=Object(d.w)(),m=Object(d.u)(),y=Object(d.v)(),g=Object(d.q)(),O=Object(d.t)(),A=Object(d.y)().allowResizeInEditMode,j=Object(d.C)(o),w=null!==(t=null===v||void 0===v?void 0:v[p])&&void 0!==t?t:f;return w&&m?null:l.createElement("div",{className:N()("ory-cell",Be({isEditMode:g,isPreviewMode:m,size:b}),(n={"ory-cell-has-inline-neighbour":s},n["ory-cell-inline-"+(u||"")]=u,n["ory-cell-focused"]=c,n["ory-cell-is-draft"]=w,n["ory-cell-resizing-overlay"]=y,n["ory-cell-bring-to-front"]=!y&&!O&&u,n)),onClick:(r=g,function(e){return r?e.stopPropagation():null})},l.createElement(xe,{node:a},h&&(y||A)&&i?l.createElement(Ie,{rowWidth:i,node:a,steps:12,onChange:j},l.createElement(je,{nodeId:o})):l.createElement(je,{nodeId:o})))})),Pe=function(e,n){var t="function"===typeof Symbol&&e[Symbol.iterator];if(!t)return e;var r,o,l=t.call(e),i=[];try{for(;(void 0===n||n-- >0)&&!(r=l.next()).done;)i.push(r.value)}catch(a){o={error:a}}finally{try{r&&!r.done&&(t=l.return)&&t.call(l)}finally{if(o)throw o.error}}return i};var Se=function(e){var n,t=e.defaultPlugin,r=Object(d.j)(),o=Object(l.useRef)(),i=Pe(Object(k.a)(),2),a=i[0],c=i[1].width,u=null!==(n=null===r||void 0===r?void 0:r.cells)&&void 0!==n?n:[],s=l.useRef();Object(l.useEffect)((function(){var e=x()((function(){if(o.current){var e=Array.prototype.find.call(o.current.getElementsByClassName("ory-cell"),(function(e){return function(e){var n=e.getBoundingClientRect();return n.top>=0&&n.left>=0&&n.bottom<=(window.innerHeight||document.documentElement.clientHeight)&&n.right<=(window.innerWidth||document.documentElement.clientWidth)}(e)}));s.current=e?{el:e,topOffset:e.getBoundingClientRect().top}:null}}),600);return window.addEventListener("scroll",e),function(){window.removeEventListener("scroll",e)}}));var f=Object(v.c)(),b=Object(l.useCallback)((function(e){f(Object(y.m)(e,null===r||void 0===r?void 0:r.id))}),[f,null===r||void 0===r?void 0:r.id]),h=r&&0===u.length;return Object(l.useEffect)((function(){h&&b(t)}),[h]),Object(l.useEffect)((function(){if(s.current){var e=s.current,n=e.el,t=e.topOffset;setTimeout((function(){Object(P.a)(n,t,"auto")}),0)}}),[s.current]),r?l.createElement("div",{ref:a},l.createElement("div",{ref:o,className:"ory-editable"},u.map((function(e){return l.createElement(ke,{nodeId:e.id,rowWidth:c,key:e.id})})))):null},Ne=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)n.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(t[r[o]]=e[r[o]])}return t},ze=i.a.memo((function(e){var n=e.id,t=e.onChange,r=e.onChangeLang,a=e.lang,c=Ne(e,["id","onChange","onChangeLang","lang"]),u=Object(d.k)();Object(l.useEffect)((function(){u.setLang(a)}),[a,u]);var s=Object(l.useRef)();return Object(l.useEffect)((function(){var e=a,l=u.store.subscribe((function(){var l=u.store.getState().reactPage.settings.lang;l===e&&l===a||(e=l,null===r||void 0===r||r(l));var i=Object(h.editable)(u.store.getState(),{id:n});if(i){var c=u.plugins.serialize(i);Object(o.a)(s.current,c)||(s.current=c,t(c))}}));return function(){l()}}),[u,n,t]),i.a.createElement(d.b.Provider,{value:c},i.a.createElement(d.a.Provider,{value:n},i.a.createElement(C,null,i.a.createElement(L,null,i.a.createElement(Se,{id:n,defaultPlugin:u.defaultPlugin})))))})),Me=t(236),De=t(1154),We=function(){return(We=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e}).apply(this,arguments)},Te=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)n.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(t[r[o]]=e[r[o]])}return t};n.default=function(e){var n=e.plugins,t=e.defaultPlugin,a=e.value,c=e.onChange,u=e.dndBackend,d=e.defaultDisplayMode,s=e.blurGateDisabled,f=e.lang,v=e.languages,h=e.onChangeLang,p=e.hideEditorSidebar,m=Te(e,["plugins","defaultPlugin","value","onChange","dndBackend","defaultDisplayMode","blurGateDisabled","lang","languages","onChangeLang","hideEditorSidebar"]),y=a||Object(r.b)(),g=Object(l.useRef)(),O=Object(l.useRef)(new r.c({defaultPlugin:t,plugins:n,languages:v,lang:f})),A=Object(l.useCallback)((function(e){g.current=e,c(e)}),[c]),j=Object(o.a)(y,null===g||void 0===g?void 0:g.current);Object(l.useEffect)((function(){j||(g.current=y,O.current.update(y))}),[j]);var w=O.current;return i.a.createElement(b,{editor:w,dndBackend:u,blurGateDisabled:s,blurGateDefaultMode:d},i.a.createElement(De.a,null,(function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(ze,We({lang:f,onChangeLang:h,id:null===y||void 0===y?void 0:y.id,onChange:A},m)),i.a.createElement(Me.d,{stickyNess:e,hideEditorSidebar:p}))})))}},236:function(e,n,t){"use strict";t.d(n,"a",(function(){return o})),t.d(n,"c",(function(){return i})),t.d(n,"b",(function(){return a}));var r=t(318),o=(Object(r.a)((function(){return Promise.all([t.e(1),t.e(2),t.e(3),t.e(9),t.e(19)]).then(t.bind(null,355))})),Object(r.a)((function(){return Promise.all([t.e(1),t.e(2),t.e(3),t.e(5),t.e(16)]).then(t.bind(null,359))})),Object(r.a)((function(){return Promise.all([t.e(1),t.e(2),t.e(3),t.e(8),t.e(24)]).then(t.bind(null,361))})),Object(r.a)((function(){return Promise.all([t.e(1),t.e(2),t.e(3),t.e(5),t.e(17)]).then(t.bind(null,385))}))),l=Object(r.a)((function(){return Promise.all([t.e(1),t.e(2),t.e(3),t.e(5),t.e(15)]).then(t.bind(null,382))})),i=(Object(r.a)((function(){return Promise.all([t.e(1),t.e(35)]).then(t.bind(null,337))})),Object(r.a)((function(){return Promise.all([t.e(1),t.e(2),t.e(28)]).then(t.bind(null,386))}))),a=Object(r.a)((function(){return Promise.all([t.e(1),t.e(2),t.e(5),t.e(13),t.e(61)]).then(t.bind(null,383))}));n.d=l}}]);
//# sourceMappingURL=30.0978317e.chunk.js.map