(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{7237:function(A,e,t){Promise.resolve().then(t.t.bind(t,6685,23)),Promise.resolve().then(t.t.bind(t,3222,23)),Promise.resolve().then(t.bind(t,8258)),Promise.resolve().then(t.bind(t,4029)),Promise.resolve().then(t.bind(t,3663)),Promise.resolve().then(t.bind(t,3574)),Promise.resolve().then(t.bind(t,7030)),Promise.resolve().then(t.bind(t,4278)),Promise.resolve().then(t.bind(t,3451)),Promise.resolve().then(t.bind(t,6123)),Promise.resolve().then(t.bind(t,8479)),Promise.resolve().then(t.bind(t,1197)),Promise.resolve().then(t.bind(t,6654)),Promise.resolve().then(t.bind(t,6430)),Promise.resolve().then(t.bind(t,8132)),Promise.resolve().then(t.bind(t,4489))},8479:function(A,e,t){"use strict";t.r(e),t.d(e,{FadeIn:function(){return g},FadeInStagger:function(){return h}});var i=t(7437),s=t(2265),r=t(9100),n=t(4982);let a=(0,s.createContext)(!1),l={once:!0,margin:"0px 0px -200px"};function g(A){let e=(0,r.J)(),t=(0,s.useContext)(a);return(0,i.jsx)(n.E.div,{variants:{hidden:{opacity:0,y:e?0:24},visible:{opacity:1,y:0}},transition:{duration:.5},...t?{}:{initial:"hidden",whileInView:"visible",viewport:l},...A})}function h(A){let{faster:e=!1,...t}=A;return(0,i.jsx)(a.Provider,{value:!0,children:(0,i.jsx)(n.E.div,{initial:"hidden",whileInView:"visible",viewport:l,transition:{staggerChildren:e?.12:.2},...t})})}},4489:function(A,e,t){"use strict";t.r(e),t.d(e,{GrayscaleTransitionImage:function(){return u}});var i=t(7437),s=t(2265),r=t(6691),n=t.n(r),a=t(4982),l=t(4570),g=t(9629),h=t(5258);let o=(0,a.E)(n());function u(A){let e=(0,s.useRef)(null),{scrollYProgress:t}=(0,l.v)({target:e,offset:["start 65%","end 35%"]}),r=h.Y`grayscale(${(0,g.H)(t,[0,.5,1],[1,0,1])})`;return(0,i.jsxs)("div",{ref:e,className:"group relative",children:[(0,i.jsx)(o,{alt:"",style:{filter:r},...A}),(0,i.jsx)("div",{className:"pointer-events-none absolute left-0 top-0 w-full opacity-0 transition duration-300 group-hover:opacity-100","aria-hidden":"true",children:(0,i.jsx)(n(),{alt:"",...A})})]})}},8132:function(A,e,t){"use strict";t.r(e),t.d(e,{GridPattern:function(){return a}});var i=t(7437),s=t(2265),r=t(4982);function n(A){let{x:e,y:t,...s}=A;return(0,i.jsx)(r.E.path,{transform:`translate(${-32*t+96*e} ${160*t})`,d:"M45.119 4.5a11.5 11.5 0 0 0-11.277 9.245l-25.6 128C6.82 148.861 12.262 155.5 19.52 155.5h63.366a11.5 11.5 0 0 0 11.277-9.245l25.6-128c1.423-7.116-4.02-13.755-11.277-13.755H45.119Z",...s})}function a(A){let{yOffset:e=0,interactive:t=!1,...r}=A,a=(0,s.useId)(),l=(0,s.useRef)(null),g=(0,s.useRef)(),h=(0,s.useRef)(0),[o,u]=(0,s.useState)([]);return(0,s.useEffect)(()=>{if(t)return window.addEventListener("mousemove",A),()=>{window.removeEventListener("mousemove",A)};function A(A){var t,i;if(!l.current)return;let s=l.current.getBoundingClientRect(),r=A.clientX-s.left,n=A.clientY-s.top;!(r<0)&&!(n<0)&&!(r>s.width)&&!(n>s.height)&&(r=r-s.width/2-32,n-=e,r+=Math.tan(.2)*n,r=Math.floor(r/96),n=Math.floor(n/160),((null===(t=g.current)||void 0===t?void 0:t[0])!==r||(null===(i=g.current)||void 0===i?void 0:i[1])!==n)&&(g.current=[r,n],u(A=>{let e=h.current++;return[...A,[r,n,e]].filter(A=>!(A[0]===r&&A[1]===n&&A[2]!==e))})))}},[e,t]),(0,i.jsxs)("svg",{ref:l,"aria-hidden":"true",...r,children:[(0,i.jsx)("rect",{width:"100%",height:"100%",fill:`url(#${a})`,strokeWidth:"0"}),(0,i.jsxs)("svg",{x:"50%",y:e,strokeWidth:"0",className:"overflow-visible",children:[[[1,1],[2,2],[4,3],[6,2],[7,4],[5,5]].map(A=>(0,i.jsx)(n,{x:A[0],y:A[1]},`${A}`)),o.map(A=>(0,i.jsx)(n,{x:A[0],y:A[1],animate:{opacity:[0,1,0]},transition:{duration:1,times:[0,0,1]},onAnimationComplete:()=>{u(e=>e.filter(e=>e[2]!==A[2]))}},A[2]))]}),(0,i.jsx)("defs",{children:(0,i.jsx)("pattern",{id:a,width:"96",height:"480",x:"50%",patternUnits:"userSpaceOnUse",patternTransform:`translate(0 ${e})`,fill:"none",children:(0,i.jsx)("path",{d:"M128 0 98.572 147.138A16 16 0 0 1 82.883 160H13.117a16 16 0 0 0-15.69 12.862l-26.855 134.276A16 16 0 0 1-45.117 320H-116M64-160 34.572-12.862A16 16 0 0 1 18.883 0h-69.766a16 16 0 0 0-15.69 12.862l-26.855 134.276A16 16 0 0 1-109.117 160H-180M192 160l-29.428 147.138A15.999 15.999 0 0 1 146.883 320H77.117a16 16 0 0 0-15.69 12.862L34.573 467.138A16 16 0 0 1 18.883 480H-52M-136 480h58.883a16 16 0 0 0 15.69-12.862l26.855-134.276A16 16 0 0 1-18.883 320h69.766a16 16 0 0 0 15.69-12.862l26.855-134.276A16 16 0 0 1 109.117 160H192M-72 640h58.883a16 16 0 0 0 15.69-12.862l26.855-134.276A16 16 0 0 1 45.117 480h69.766a15.999 15.999 0 0 0 15.689-12.862l26.856-134.276A15.999 15.999 0 0 1 173.117 320H256M-200 320h58.883a15.999 15.999 0 0 0 15.689-12.862l26.856-134.276A16 16 0 0 1-82.883 160h69.766a16 16 0 0 0 15.69-12.862L29.427 12.862A16 16 0 0 1 45.117 0H128"})})})]})}},8258:function(A,e,t){"use strict";t.r(e),e.default={src:"/site/_next/static/media/badgemagic.17923bc0.png",height:100,width:250,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAMAAACZFr56AAAAG1BMVEX/WoDrU1lMaXHxUlf7b3b4UlntVVruaG7/aXDFLCkaAAAACHRSTlMCLQC8SU3CxQIDYkIAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAAfSURBVHicY2BgYmRmZmRiYGBgYuXgYAEzGNnYGZkYAAMHAD16r9yUAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:3}},3574:function(A,e,t){"use strict";t.r(e),e.default={src:"/site/_next/static/media/eventyay.1320c48a.png",height:100,width:250,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAMAAACZFr56AAAADFBMVEVawd5rxuCT6/6H5/6uCnrtAAAAAnRSTlOUjx65HJcAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAAaSURBVHicY2CAASZmJmYmJiZmBkZGRhBmBAABOgAbbGNlIwAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:3}},3663:function(A,e,t){"use strict";t.r(e),e.default={src:"/site/_next/static/media/fossasia.e03173a2.png",height:100,width:250,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAMAAACZFr56AAAADFBMVEXTAADTAADSAADSAADiuvEMAAAABHRSTlMHZVBWWOv+fQAAAAlwSFlzAAAOxAAADsQBlSsOGwAAABNJREFUeJxjYIABJmZGEGCCCwAAAMIADcMIg0oAAAAASUVORK5CYII=",blurWidth:8,blurHeight:3}},7030:function(A,e,t){"use strict";t.r(e),e.default={src:"/site/_next/static/media/huekee.87fbd13a.png",height:100,width:250,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAMAAACZFr56AAAAG1BMVEV0dKyUiIyVjU2Li5SEhI2woj/Kxl1kYW2YmHGSo/0LAAAACXRSTlMBK+ofd+2IVPx/TnGQAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAHElEQVR4nGNgYGBgYWcAA2YmDkYwg5GVjYGBAQACBQAmaI6A5AAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:3}},4029:function(A,e,t){"use strict";t.r(e),e.default={src:"/site/_next/static/media/menck.9472d1cd.png",height:100,width:250,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAMAAACZFr56AAAAGFBMVEUWN3iPp8hMaXF6lr+qqqppibdkibq0xuBzyaCiAAAABnRSTlMDqwCrA6tQwUCaAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAH0lEQVR4nGNgYGJkY2NmYmBgYGJmY2MFMxjZ2RmZWAADeQBFqXaL2QAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:3}},3451:function(A,e,t){"use strict";t.r(e),e.default={src:"/site/_next/static/media/onestopfinancial.5c2a428a.png",height:100,width:250,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAMAAACZFr56AAAAJ1BMVEX49/b//v22trb3np7/tra0urrX19fLysq/xcXh4eGioKGnp6fExMR3e4HJAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAIElEQVR4nGNgYeZgZ2Pl4WRgYWblYuJmYmNgZAABRkYABv0AZTJ8BwgAAAAASUVORK5CYII=",blurWidth:8,blurHeight:3}},6123:function(A,e,t){"use strict";t.r(e),e.default={src:"/site/_next/static/media/pslab.39d45c7e.png",height:100,width:250,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAMAAACZFr56AAAAHlBMVEXTCgrYISHxubn57Oz9///yxsbxTU35g4P+zc30a2tKIAtoAAAABnRSTlO+v76/vr0gyCbSAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAIElEQVR4nAXBgQ0AIAzDsESwdvz/MDYIMJf0pekCqnM+A/QAT9RV9GIAAAAASUVORK5CYII=",blurWidth:8,blurHeight:3}},4278:function(A,e,t){"use strict";t.r(e),e.default={src:"/site/_next/static/media/susiai.ffa86120.png",height:100,width:250,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAMAAACZFr56AAAAGFBMVEUAgMAAgL4AgsQAgMAAfr8Af8AAhMUAeLSaFuG1AAAACHRSTlM2Q54hioJmEWMpY1oAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAAeSURBVHicBcGHAQAADIMgTdf/HxeAwrtiks52EAV5A1MANXzN5RYAAAAASUVORK5CYII=",blurWidth:8,blurHeight:3}},1197:function(A,e,t){"use strict";t.r(e),e.default={src:"/site/_next/static/media/laptop.22dcb094.jpg",height:3e3,width:2400,blurDataURL:"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAIAAYDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAX/xAAfEAABAwQDAQAAAAAAAAAAAAABAAMEAgUTIgYhMVH/xAAUAQEAAAAAAAAAAAAAAAAAAAAC/8QAFhEBAQEAAAAAAAAAAAAAAAAAAAER/9oADAMBAAIRAxEAPwCLL5lMinFc7kXC3q020zScVPepPnxERKjj/9k=",blurWidth:6,blurHeight:8}},6654:function(A,e,t){"use strict";t.r(e),e.default={src:"/site/_next/static/media/meeting.0efc6edc.jpg",height:1600,width:2400,blurDataURL:"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAFAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAX/xAAfEAABAwMFAAAAAAAAAAAAAAACAAEEAwUREyEiMWH/xAAVAQEBAAAAAAAAAAAAAAAAAAACA//EABgRAAMBAQAAAAAAAAAAAAAAAAABAhIx/9oADAMBAAIRAxEAPwC7ba86VbRlHMLVMXkPx2ybdY8wiIpw3kd9P//Z",blurWidth:8,blurHeight:5}},6430:function(A,e,t){"use strict";t.r(e),e.default={src:"/site/_next/static/media/whiteboard.2d6ee65a.jpg",height:1800,width:2400,blurDataURL:"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAGAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAT/xAAdEAEAAgEFAQAAAAAAAAAAAAABAAMCBAYREiRB/8QAFAEBAAAAAAAAAAAAAAAAAAAABP/EABkRAAMBAQEAAAAAAAAAAAAAAAECBAADEf/aAAwDAQACEQMRAD8Ap1e47qccPLV2LuK1yUB+IxERs8/Jl9IwKqeqMAp3/9k=",blurWidth:8,blurHeight:6}}},function(A){A.O(0,[794,991,222,424,971,596,744],function(){return A(A.s=7237)}),_N_E=A.O()}]);