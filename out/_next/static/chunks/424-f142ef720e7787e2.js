(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[424],{1295:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{default:function(){return u},unstable_getImgProps:function(){return f}});let r=n(1024),o=n(2301),i=n(7873),l=n(3222),s=r._(n(5033)),f=e=>{(0,i.warnOnce)("Warning: unstable_getImgProps() is experimental and may change or be removed at any time. Use at your own risk.");let{props:t}=(0,o.getImgProps)(e,{defaultLoader:s.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/site/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,n]of Object.entries(t))void 0===n&&delete t[e];return{props:t}},u=l.Image},6691:function(e,t,n){e.exports=n(1295)},5630:function(e,t,n){"use strict";n.d(t,{N:function(){return u}});var r=n(2265),o=n(4101),i=n(5968),l=n(961),s=n(538),f=n(3041);function u(e,t){let n=function(e){let t=(0,l.h)(()=>(0,o.B)(e)),{isStatic:n}=(0,r.useContext)(i._);if(n){let[,n]=(0,r.useState)(e);(0,r.useEffect)(()=>t.on("change",n),[])}return t}(t()),u=()=>n.set(t());return u(),(0,s.L)(()=>{let t=()=>f.Wi.update(u,!1,!0),n=e.map(e=>e.on("change",t));return()=>{n.forEach(e=>e()),(0,f.Pn)(u)}}),n}},5258:function(e,t,n){"use strict";n.d(t,{Y:function(){return i}});var r=n(5630),o=n(5735);function i(e,...t){let n=e.length;return(0,r.N)(t.filter(o.i),function(){let r="";for(let i=0;i<n;i++){r+=e[i];let n=t[i];n&&(r+=(0,o.i)(n)?n.get():n)}return r})}},4570:function(e,t,n){"use strict";let r,o;n.d(t,{v:function(){return Y}});var i=n(4101),l=n(961),s=n(2265),f=n(6567);let u=new WeakMap;function c({target:e,contentRect:t,borderBoxSize:n}){var r;null===(r=u.get(e))||void 0===r||r.forEach(r=>{r({target:e,contentSize:t,get size(){return function(e,t){if(t){let{inlineSize:e,blockSize:n}=t[0];return{width:e,height:n}}return e instanceof SVGElement&&"getBBox"in e?e.getBBox():{width:e.offsetWidth,height:e.offsetHeight}}(e,n)}})})}function a(e){e.forEach(c)}let d=new Set;var g=n(2868),h=n(9815);let p=()=>({current:0,offset:[],progress:0,scrollLength:0,targetOffset:0,targetLength:0,containerLength:0,velocity:0}),m=()=>({time:0,x:p(),y:p()}),v={x:{length:"Width",position:"Left"},y:{length:"Height",position:"Top"}};function y(e,t,n,r){let o=n[t],{length:i,position:l}=v[t],s=o.current,f=n.time;o.current=e["scroll"+l],o.scrollLength=e["scroll"+i]-e["client"+i],o.offset.length=0,o.offset[0]=0,o.offset[1]=o.scrollLength,o.progress=(0,g.Y)(0,o.scrollLength,o.current);let u=r-f;o.velocity=u>50?0:(0,h.R)(o.current-s,u)}let w={All:[[0,0],[1,1]]},E={start:0,center:.5,end:1};function W(e,t,n=0){let r=0;if(void 0!==E[e]&&(e=E[e]),"string"==typeof e){let t=parseFloat(e);e.endsWith("px")?r=t:e.endsWith("%")?e=t/100:e.endsWith("vw")?r=t/100*document.documentElement.clientWidth:e.endsWith("vh")?r=t/100*document.documentElement.clientHeight:e=t}return"number"==typeof e&&(r=t*e),n+r}let x=[0,0];var L=n(3245),b=n(4269);let S={x:0,y:0};var z=n(3041);let B=new WeakMap,O=new WeakMap,P=new WeakMap,A=e=>e===document.documentElement?window:e;var H=n(538);function _(e,t){(0,f.K)(!!(!t||t.current),`You have defined a ${e} options but the provided ref is not yet hydrated, probably because it's defined higher up the tree. Try calling useScroll() in the same component as the ref, or setting its \`layoutEffect: false\` option.`)}let k=()=>({scrollX:(0,i.B)(0),scrollY:(0,i.B)(0),scrollXProgress:(0,i.B)(0),scrollYProgress:(0,i.B)(0)});function Y({container:e,target:t,layoutEffect:n=!0,...i}={}){let c=(0,l.h)(k),g=n?H.L:s.useEffect;return g(()=>(_("target",t),_("container",e),function(e,{container:t=document.documentElement,...n}={}){let i=P.get(t);i||(i=new Set,P.set(t,i));let l=m(),s=function(e,t,n,r={}){return{measure:()=>(function(e,t=e,n){if(n.x.targetOffset=0,n.y.targetOffset=0,t!==e){let r=t;for(;r&&r!==e;)n.x.targetOffset+=r.offsetLeft,n.y.targetOffset+=r.offsetTop,r=r.offsetParent}n.x.targetLength=t===e?t.scrollWidth:t.clientWidth,n.y.targetLength=t===e?t.scrollHeight:t.clientHeight,n.x.containerLength=e.clientWidth,n.y.containerLength=e.clientHeight})(e,r.target,n),update:t=>{y(e,"x",n,t),y(e,"y",n,t),n.time=t,(r.offset||r.target)&&function(e,t,n){let{offset:r=w.All}=n,{target:o=e,axis:i="y"}=n,l="y"===i?"height":"width",s=o!==e?function(e,t){let n={x:0,y:0},r=e;for(;r&&r!==t;)if(r instanceof HTMLElement)n.x+=r.offsetLeft,n.y+=r.offsetTop,r=r.offsetParent;else if(r instanceof SVGGraphicsElement&&"getBBox"in r){let{top:e,left:t}=r.getBBox();for(n.x+=t,n.y+=e;r&&"svg"!==r.tagName;)r=r.parentNode}return n}(o,e):S,f=o===e?{width:e.scrollWidth,height:e.scrollHeight}:{width:o.clientWidth,height:o.clientHeight},u={width:e.clientWidth,height:e.clientHeight};t[i].offset.length=0;let c=!t[i].interpolate,a=r.length;for(let e=0;e<a;e++){let n=function(e,t,n,r){let o=Array.isArray(e)?e:x,i=0;return"number"==typeof e?o=[e,e]:"string"==typeof e&&(o=(e=e.trim()).includes(" ")?e.split(" "):[e,E[e]?e:"0"]),W(o[0],n,r)-W(o[1],t)}(r[e],u[l],f[l],s[i]);c||n===t[i].interpolatorOffsets[e]||(c=!0),t[i].offset[e]=n}c&&(t[i].interpolate=(0,L.s)(t[i].offset,(0,b.Y)(r)),t[i].interpolatorOffsets=[...t[i].offset]),t[i].progress=t[i].interpolate(t[i].current)}(e,n,r)},notify:()=>t(n)}}(t,e,l,n);if(i.add(s),!B.has(t)){let e=()=>{for(let e of i)e.measure()},n=()=>{for(let e of i)e.update(z.frameData.timestamp)},l=()=>{for(let e of i)e.notify()},s=()=>{z.Wi.read(e,!1,!0),z.Wi.update(n,!1,!0),z.Wi.update(l,!1,!0)};B.set(t,s);let c=A(t);window.addEventListener("resize",s,{passive:!0}),t!==document.documentElement&&O.set(t,"function"==typeof t?(d.add(t),o||(o=()=>{let e={width:window.innerWidth,height:window.innerHeight},t={target:window,size:e,contentSize:e};d.forEach(e=>e(t))},window.addEventListener("resize",o)),()=>{d.delete(t),!d.size&&o&&(o=void 0)}):function(e,t){r||"undefined"==typeof ResizeObserver||(r=new ResizeObserver(a));let n=function(e,t,n){var r;if("string"==typeof e){let o=document;t&&((0,f.k)(!!t.current,"Scope provided, but no element detected."),o=t.current),n?(null!==(r=n[e])&&void 0!==r||(n[e]=o.querySelectorAll(e)),e=n[e]):e=o.querySelectorAll(e)}else e instanceof Element&&(e=[e]);return Array.from(e||[])}(e);return n.forEach(e=>{let n=u.get(e);n||(n=new Set,u.set(e,n)),n.add(t),null==r||r.observe(e)}),()=>{n.forEach(e=>{let n=u.get(e);null==n||n.delete(t),(null==n?void 0:n.size)||null==r||r.unobserve(e)})}}(t,s)),c.addEventListener("scroll",s,{passive:!0})}let c=B.get(t);return z.Wi.read(c,!1,!0),()=>{var e;(0,z.Pn)(c);let n=P.get(t);if(!n||(n.delete(s),n.size))return;let r=B.get(t);B.delete(t),r&&(A(t).removeEventListener("scroll",r),null===(e=O.get(t))||void 0===e||e(),window.removeEventListener("resize",r))}}(({x:e,y:t})=>{c.scrollX.set(e.current),c.scrollXProgress.set(e.progress),c.scrollY.set(t.current),c.scrollYProgress.set(t.progress)},{...i,container:(null==e?void 0:e.current)||void 0,target:(null==t?void 0:t.current)||void 0})),[]),c}},9629:function(e,t,n){"use strict";n.d(t,{H:function(){return f}});var r=n(3245);let o=e=>"object"==typeof e&&e.mix,i=e=>o(e)?e.mix:void 0;var l=n(5630),s=n(961);function f(e,t,n,o){let l="function"==typeof t?t:function(...e){let t=!Array.isArray(e[0]),n=t?0:-1,o=e[0+n],l=e[1+n],s=e[2+n],f=e[3+n],u=(0,r.s)(l,s,{mixer:i(s[0]),...f});return t?u(o):u}(t,n,o);return Array.isArray(e)?u(e,l):u([e],([e])=>l(e))}function u(e,t){let n=(0,s.h)(()=>[]);return(0,l.N)(e,()=>{n.length=0;let r=e.length;for(let t=0;t<r;t++)n[t]=e[t].get();return t(n)})}}}]);