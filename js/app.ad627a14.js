(function(t){function e(e){for(var n,i,s=e[0],c=e[1],l=e[2],f=0,d=[];f<s.length;f++)i=s[f],o[i]&&d.push(o[i][0]),o[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);h&&h(e);while(d.length)d.shift()();return a.push.apply(a,l||[]),r()}function r(){for(var t,e=0;e<a.length;e++){for(var r=a[e],n=!0,s=1;s<r.length;s++){var c=r[s];0!==o[c]&&(n=!1)}n&&(a.splice(e--,1),t=i(i.s=r[0]))}return t}var n={},o={app:0},a=[];function i(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=t,i.c=n,i.d=function(t,e,r){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(r,n,function(e){return t[e]}.bind(null,n));return r},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var h=c;a.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"0596":function(t,e,r){},"0ff3":function(t,e,r){},1:function(t,e){},"53d7":function(t,e,r){"use strict";var n=r("730d"),o=r.n(n);o.a},5452:function(t,e,r){"use strict";var n=r("0596"),o=r.n(n);o.a},"56d7":function(t,e,r){"use strict";r.r(e);r("cadf"),r("551c"),r("f751"),r("097d");var n=r("2b0e"),o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("Header"),r("router-view"),r("Footer")],1)},a=[],i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("header",[r("router-link",{attrs:{to:"/"}},[r("h1",{staticClass:"logo"},[t._v("Geometric Tattoo Generator")])])],1)},s=[],c=(r("5452"),r("2877")),l={},h=Object(c["a"])(l,i,s,!1,null,null,null),f=h.exports,d=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("footer",[t._m(0),r("nav",[r("router-link",{attrs:{to:"/about"}},[t._v("About")]),r("router-link",{attrs:{to:"/privacy"}},[t._v("Privacy")]),r("router-link",{attrs:{to:"/imprint"}},[t._v("Imprint")])],1)])},u=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"source"},[t._v("\n    Made with\n    "),r("span",[t._v("❤")]),t._v(" in Berlin.\n    "),r("br"),t._v("You can find the source code on\n    "),r("a",{attrs:{href:"https://github.com/ehmprah/geometric-tattoo-generator.com"}},[t._v("GitHub")]),t._v(".\n  ")])}],p=(r("53d7"),{}),g=Object(c["a"])(p,d,u,!1,null,null,null),m=g.exports,v={components:{Header:f,Footer:m}},w=v,y=(r("5c0b"),Object(c["a"])(w,o,a,!1,null,null,null)),k=y.exports,b=r("8c4f"),x=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("main",[r("div",{staticClass:"generator"},[r("div",{staticClass:"preview",attrs:{title:t.previewTitle},domProps:{innerHTML:t._s(t.svg)}}),r("div",{staticClass:"buttons"},[r("button",{staticClass:"button",on:{click:t.generate}},[r("svg",{attrs:{fill:"#000000",height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg"}},[r("path",{attrs:{d:"M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 1.01-.25 1.97-.7 2.8l1.46 1.46C19.54 15.03 20 13.57 20 12c0-4.42-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6 0-1.01.25-1.97.7-2.8L5.24 7.74C4.46 8.97 4 10.43 4 12c0 4.42 3.58 8 8 8v3l4-4-4-4v3z"}}),r("path",{attrs:{d:"M0 0h24v24H0z",fill:"none"}})]),r("span",[t._v("GENERATE")])]),r("button",{staticClass:"button",on:{click:t.download}},[r("svg",{attrs:{fill:"#000000",height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg"}},[r("path",{attrs:{d:"M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"}}),r("path",{attrs:{d:"M0 0h24v24H0z",fill:"none"}})]),r("span",[t._v("DOWNLOAD")])])]),r("Share")],1)])},_=[],A=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"share"},[r("a",{staticClass:"permalink",attrs:{title:"Copy Permalink",href:"#"},on:{click:t.copyPermalink}},[r("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"}},[r("path",{attrs:{d:"M0 0h24v24H0z",fill:"none"}}),r("path",{attrs:{d:"M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"}})])]),r("a",{staticClass:"mail",attrs:{onclick:"gtag('event', 'share', { 'event_label': 'Mail' });",target:"_blank",title:"Share via mail",href:"mailto:?body="+t.url}},[r("svg",{attrs:{width:"24",height:"24",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}},[r("path",{attrs:{fill:"none",d:"M0 0h24v24H0z"}}),r("path",{attrs:{d:"M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5 8-5v10zm-8-7L4 6h16l-8 5z"}})])]),r("a",{staticClass:"facebook",attrs:{onclick:"gtag('event', 'share', { 'event_label': 'Facebook' });",target:"_blank",title:"Share via Facebook",href:"http://www.facebook.com/sharer.php?u="+t.url}},[r("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24"}},[r("path",{attrs:{d:"M18.768 7.465H14.5V5.56c0-.896.594-1.105 1.012-1.105H18.5V.513L14.171.5C10.244.5 9.5 3.438 9.5 5.32v2.144h-3v4h3v12h5v-12h3.851l.417-3.999z"}}),r("path",{attrs:{fill:"none",d:"M0 0h24v24H0z"}})])]),r("a",{staticClass:"twitter",attrs:{onclick:"gtag('event', 'share', { 'event_label': 'Twitter' });",target:"_blank",title:"Share via Twitter",href:"http://twitter.com/share?url="+t.url}},[r("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24"}},[r("path",{attrs:{d:"M23.444 4.834c-.814.363-1.5.375-2.227.016.938-.562.981-.957 1.32-2.019-.878.521-1.851.9-2.886 1.104a4.545 4.545 0 0 0-7.743 4.145 12.897 12.897 0 0 1-9.366-4.748 4.525 4.525 0 0 0-.615 2.285c0 1.577.803 2.967 2.021 3.782a4.527 4.527 0 0 1-2.057-.568l-.001.057a4.547 4.547 0 0 0 3.646 4.456 4.575 4.575 0 0 1-2.053.079 4.551 4.551 0 0 0 4.245 3.155A9.138 9.138 0 0 1 1 18.459 12.865 12.865 0 0 0 7.966 20.5c8.358 0 12.928-6.924  12.928-12.929 0-.198-.003-.393-.012-.588.887-.64 1.953-1.237 2.562-2.149z"}}),r("path",{attrs:{fill:"none",d:"M0 0h24v24H0z"}})])]),r("a",{staticClass:"whatsapp",attrs:{onclick:"gtag('event', 'share', { 'event_label': 'Whatsapp' });",href:"whatsapp://send?text="+t.url,title:"Share via Whatsapp","data-action":"share/whatsapp/share"}},[r("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}},[r("path",{attrs:{d:"M11.999.68C5.658.68.499 5.797.499 12.089c0 2.497.815 4.809 2.191 6.69l-1.436 4.238 4.419-1.404A11.49 11.49 0 0 0 12 23.5c6.34 0 11.499-5.118 11.499-11.41 0-6.291-5.158-11.41-11.5-11.41zm4.448 17.698c-.615.056-.615.5-4.023-.831-3.408-1.332-5.56-4.801-5.728-5.023C5.124 10.449 4.711 8.25 6.5 6.309c.567-.613 1.976-.588 2.292.168.279.665.95 2.303 1.034 2.469.084.167.141.361.028.582-.134.267-.273.58-.838 1.138-.168.166-.343.346-.147.678.195.334.867 1.422 1.864 2.305 1.281 1.133 2.361 1.484 2.696 1.65.335.166.531.139.727-.084.195-.223.839-.971 1.062-1.304.224-.333.447-.277.755-.166.307.11 1.955.915 2.291 1.082.335.165.559.25.642.388.504.84-.692 3.004-2.459 3.163z"}}),r("path",{attrs:{fill:"none",d:"M0 0h24v24H0z"}})])])])},X=[],S={computed:{url:function(){return"https://geometric-tattoo-generator.com".concat(this.$route.fullPath)}},methods:{copyPermalink:function(t){var e=document.createElement("textarea");e.value=this.url,e.style.position="absolute",e.style.left="-9999px",document.body.appendChild(e),e.select(),document.execCommand("copy"),document.body.removeChild(e),t.preventDefault()}}},M=S,W=(r("84e2"),Object(c["a"])(M,A,X,!1,null,null,null)),D=W.exports,Y=(r("6c7b"),r("456d"),r("ac6a"),r("6125")),j=r.n(Y),z=[{title:"shapes-along-line",groups:[2,2,2,3,3,4],group:{items:[1,1,1,1,1,2,2,2,3],shape:["line","rect","circle","triangle","hexagon"],width:[25,50,75,100],centered:[!1,!0],rotation:[!1,!0],fill:"transparent",stroke:"#000",strokeDash:["","","","","","","","","10,5"],strokeWidth:[2,3,4],startX:"center",startY:"random",offsetStrategy:["mirrored","direction","random-y"],offsetAmount:[10,20,30]},overrides:[{shape:"line",width:300,strokeDash:"",rotation:!1,centered:!0,offsetStrategy:"mirrored",startY:"center"}]},{title:"shapes-around-center-same-size",groups:[2,3,4],group:{items:[1,1,1,2,2,3],shape:["line","rect","circle","triangle","hexagon"],width:120,centered:[!1,!0],rotation:[!1,!0],fill:"transparent",stroke:"#000",strokeDash:["","","","","","","10,5"],strokeWidth:[2,3,4,5],startX:["center"],startY:["center"],offsetStrategy:["distributed","mirrored"],offsetAmount:10},overrides:[{fill:["transparent","transparent","url(#topdown)"],rotation:!1,items:1}]},{title:"shapes-around-center",groups:[2,3,4],group:{items:[1,1,1,2,2,3],shape:["line","rect","circle","triangle","hexagon"],width:[40,50,60,70,80,90,100,110,120],centered:!0,rotation:[!1,!0],fill:"transparent",stroke:"#000",strokeDash:["","","","","","","","","5","30,10"],strokeWidth:[2,3,4,5],startX:["center"],startY:["center"],offsetStrategy:["distributed","mirrored"],offsetAmount:[10,20,30,40,50]}},{title:"random-shapes",groups:1,group:{items:[2,3,4,5,6,7],shape:["rect","circle","triangle","hexagon"],width:[40,50,60,70,80,90,100],centered:[!1,!0],rotation:[!1,!0],fill:"transparent",stroke:"#000",strokeDash:"",strokeWidth:[2,3,4,5],startX:["center","random"],startY:["center","random"],offsetStrategy:["distributed","random-x","random","random-y"],offsetAmount:[10,20,30,40,50]}},{title:"diamonds",groups:[2,3],group:{items:[1,1,1,1,1,2,2,2,3,4,5],shape:"rect",width:[25,50,75,100],centered:[!1,!0],rotation:!0,fill:"transparent",stroke:"#000",strokeDash:["","","","","","","","","10,5"],strokeWidth:[2,3,4],startX:"center",startY:"center",offsetStrategy:"mirrored",offsetAmount:[10,20,30]}},{title:"three-shapes",groups:3,group:{items:1,shape:["rect","circle","triangle","hexagon"],width:[25,50,75,100],centered:[!1,!0],rotation:[!1,!0],fill:["#000","transparent","url(#topdown)"],stroke:"#000",strokeDash:["","","","","","","10,5"],strokeWidth:[2,3,4],startX:["center","random"],startY:"center",offsetStrategy:"none",offsetAmount:0},overrides:[{fill:"transparent",width:100},{fill:"url(#topdown)",centered:!1},{fill:"#000",width:25}]},{title:"small-filled-shapes-along-line",groups:[2,3],group:{items:[1,1,2,3,4,5],shape:["rect","circle","triangle","hexagon"],width:[20,30],centered:[!1,!0],rotation:[!1,!0],fill:"#000",stroke:"#000",strokeDash:"",strokeWidth:0,startX:["center"],startY:["random"],offsetStrategy:["mirrored"],offsetAmount:[20,30]},overrides:[{shape:"line",width:300,stroke:["#000"],strokeDash:"",strokeWidth:[2,3,4],rotation:!1,centered:!0,offsetStrategy:"mirrored",startY:["center"]},{offsetStrategy:["random-y","direction"],items:[1,1,1,2,2,3]}]},{title:"circles-galore",groups:[1,2],group:{items:[1,1,2,2,2,3,4,5,6],shape:"circle",width:[25,50,75,100],centered:[!1,!0],rotation:[!1,!0],fill:"transparent",stroke:"#000",strokeDash:["","","","","","","","","5,5"],strokeWidth:[2,3,4],startX:"center",startY:"center",offsetStrategy:["mirrored","direction"],offsetAmount:[10,20,30]}},{title:"stacked-triangle",groups:1,group:{items:[3,4,5,6,7],shape:"triangle",width:[50],centered:[!1,!0],rotation:[!1,!0],fill:["transparent","url(#topdown)","#fff"],stroke:"#000",strokeDash:"",strokeWidth:[2,3,4],startX:"center",startY:"start",offsetStrategy:"direction",offsetAmount:[10,20,30]}},{title:"triangle-galore",groups:[2,3],group:{items:[1,1,1,1,1,2,2,2,3,4,5],shape:"triangle",width:[25,50,75,100],centered:[!1,!0],rotation:!0,fill:"transparent",stroke:"#000",strokeDash:["","","","","","","","","10,5"],strokeWidth:[2,3,4],startX:"center",startY:"center",offsetStrategy:"mirrored",offsetAmount:[10,20,30]}},{title:"hexagon-galore",groups:[2,3],group:{items:[1,2,3,4,5,6,7],shape:"hexagon",width:[25,50,75,100],centered:!0,rotation:!0,fill:"transparent",stroke:"#000",strokeDash:["","","","","","","","","10,5"],strokeWidth:[2,3,4],startX:"center",startY:"center",offsetStrategy:"mirrored",offsetAmount:[10,20,30]}}];function C(t){for(var e=[],r="",n=j.a.alea(t),o=E(n,z),a=300,i=300,s=Array.isArray(o.groups)?E(n,o.groups):o.groups,c=function(t){var s=[],c={rng:n,x:0,y:0};Object.keys(o.group).forEach(function(t){c[t]=Array.isArray(o.group[t])?E(n,o.group[t]):o.group[t]}),o.overrides&&o.overrides[t]&&Object.keys(c).forEach(function(e){var r=o.overrides[t][e];void 0!==r&&(c[e]=Array.isArray(r)?E(n,r):r)}),c.x="random"===c.startX?G(n,c.width,a-c.width):"center"===c.startX?a/2:c.width,c.y="random"===c.startY?G(n,c.width,i-c.width):"center"===c.startY?i/2:c.width,c.initialX=c.x,c.initialY=c.y,"url(#topdown)"===c.fill&&(r='\n        <defs>\n          <linearGradient id="topdown" x1="0" x2="0" y1="0" y2="1">\n            <stop offset="0%" stop-color="black"/>\n            <stop offset="100%" stop-color="transparent"/>\n          </linearGradient>\n        </defs>\n      '),"#000"===c.fill&&c.width>a/2&&(c.fill="transparent"),"transparent"!==c.fill&&""!==c.strokeDash&&(c.strokeDash="");for(var l=0;l<c.items;l++){"random"===c.offsetStrategy&&(c.x=G(n,c.width,a-c.width),c.y=G(n,c.width,i-c.width)),"random-y"===c.offsetStrategy&&(c.y=G(n,c.width,i-c.width)),"random-x"===c.offsetStrategy&&(c.x=G(n,c.width,a-c.width)),"direction"===c.offsetStrategy&&(c.y=c.initialY+c.offsetAmount*l),"mirrored"===c.offsetStrategy&&(c.items%2===0?(0===l&&(c.x=c.initialX+c.offsetAmount),1===l&&(c.x=c.initialX-c.offsetAmount),2===l&&(c.x=c.initialX+2*c.offsetAmount),3===l&&(c.x=c.initialX-2*c.offsetAmount),4===l&&(c.x=c.initialX+3*c.offsetAmount),5===l&&(c.x=c.initialX-3*c.offsetAmount)):(0===l&&(c.x=c.initialX),1===l&&(c.x=c.initialX+c.offsetAmount),2===l&&(c.x=c.initialX-c.offsetAmount),3===l&&(c.x=c.initialX+2*c.offsetAmount),4===l&&(c.x=c.initialX-2*c.offsetAmount),5===l&&(c.x=c.initialX+3*c.offsetAmount),6===l&&(c.x=c.initialX-3*c.offsetAmount)));var h=O(c);s.push(h)}e.push("".concat(s.join("")))},l=0;l<s;l++)c(l);return'\n    <svg xmlns="http://www.w3.org/2000/svg" width="'.concat(a,'" height="').concat(i,'" viewBox="0 0 ').concat(a," ").concat(i,'">\n      \x3c!-- ').concat(o.title," --\x3e\n      ").concat(r,"\n      ").concat(e.join(""),"\n    </svg>\n  ")}function O(t){if("hexagon"===t.shape){var e=t.x,r=t.y,n="";t.centered||(r+=t.width/2),t.rotation&&(n+=" rotate(90 ".concat(e," ").concat(r,")"));var o=t.width/2,a=Math.cos(Math.PI/6)*o,i=Math.sin(Math.PI/6)*o,s=e,c=r-o,l=e+a,h=r-i,f=e+a,d=r+i,u=e,p=r+o,g=e-a,m=r+i,v=e-a,w=r-i;return'<path\n      d="M '.concat(s,",").concat(c," L").concat(l,",").concat(h," L").concat(f,",").concat(d," L").concat(u,",").concat(p," L").concat(g,",").concat(m," L").concat(v,",").concat(w,' z"\n      stroke="').concat(t.stroke,'"\n      ').concat("transparent"!=t.fill?'fill="'.concat(t.fill,'"'):'fill="#000" fill-opacity="0"','\n      stroke-width="').concat(t.strokeWidth,'"\n      transform="').concat(n,'"\n    />')}if("triangle"==t.shape){var y=t.x,k=t.y,b="";return t.centered&&(t.rotation&&(b+=" rotate(180 ".concat(y," ").concat(k,")")),k-=t.width/2),'<path\n      d="M\n      '.concat(y,",").concat(k,"\n      ").concat(y+t.width/2,",").concat(k+t.width,"\n      ").concat(y-t.width/2,",").concat(k+t.width,'\n      z"\n      stroke="').concat(t.stroke,'"\n      ').concat("transparent"!=t.fill?'fill="'.concat(t.fill,'"'):'fill="#000" fill-opacity="0"','\n      stroke-width="').concat(t.strokeWidth,'"\n      transform="').concat(b,'"\n    />')}if("line"==t.shape){var x=t.x,_=t.y,A="";if(t.centered){if(t.rotation){E(t.rng,[45,90,135]);A+=" rotate(90 ".concat(x," ").concat(_,")")}_-=t.width/2}return'<line\n      x1="'.concat(x,'"\n      x2="').concat(x,'"\n      y1="').concat(_,'"\n      y2="').concat(_+t.width,'"\n      stroke="').concat(t.stroke,'"\n      stroke-width="').concat(t.strokeWidth,'"\n      stroke-dasharray="').concat(t.strokeDash,'"\n      transform="').concat(A,'"\n    />')}if("rect"==t.shape){var X=t.x,S=t.y,M="";return t.rotation&&(M+=" rotate(45 ".concat(X," ").concat(S,")")),'<rect\n      x="'.concat(X-t.width/2,'"\n      y="').concat(S-t.width/2,'"\n      width="').concat(t.width,'"\n      height="').concat(t.width,'"\n      stroke="').concat(t.stroke,'"\n      ').concat("transparent"!=t.fill?'fill="'.concat(t.fill,'"'):'fill="#000" fill-opacity="0"','\n      stroke-width="').concat(t.strokeWidth,'"\n      transform="').concat(M,'"\n    />')}if("circle"==t.shape){var W=t.x,D=t.y;return t.centered||(D-=t.width/2),'<circle\n      cx="'.concat(W,'"\n      cy="').concat(D,'"\n      r="').concat(t.width/2,'"\n      stroke="').concat(t.stroke,'"\n      ').concat("transparent"!=t.fill?'fill="'.concat(t.fill,'"'):'fill="#000" fill-opacity="0"','\n      stroke-width="').concat(t.strokeWidth,'"\n      stroke-dasharray="').concat(t.strokeDash,'"\n    />')}}function E(t,e){return e[Math.floor(t()*e.length)]}function G(t,e,r){return r>e?t()*(r-e)+e:t()*(e-r)+r}var H=C,P=[{title:"shapes-around-center-same-size",groups:[2,3,4],group:{items:[1,1,1,2,2,3],shape:["line","rect","circle","triangle","hexagon"],width:120,centered:!0,rotation:[!1,!0],fill:["transparent","transparent","#fff"],stroke:"#000",strokeDash:"",strokeWidth:2,startX:"center",startY:"center",offsetStrategy:["distributed","mirrored"],offsetAmount:10}},{title:"shapes-around-center",groups:[2,3],group:{items:[1,1,1,2,2,3],shape:["line","rect","circle","triangle","hexagon"],width:[40,60,80,100,120],centered:!0,rotation:[!1,!0],fill:["transparent","transparent","#fff"],stroke:"#000",strokeDash:"",strokeWidth:[2],startX:"center",startY:"center",offsetStrategy:["distributed","mirrored"],offsetAmount:[10,20,30,40,50]}},{title:"diamonds",groups:[2,3],group:{items:[1,1,1,1,1,2,2,2,3,4,5],shape:"rect",width:[25,50,75,100],centered:[!1,!0],rotation:!0,fill:"transparent",stroke:"#000",strokeDash:"",strokeWidth:[2,3,4],startX:"center",startY:"center",offsetStrategy:"mirrored",offsetAmount:[10,20,30]}},{title:"three-shapes",groups:[2,3],group:{items:1,shape:["rect","circle","triangle","hexagon"],width:[25,50,75,100,125],centered:!0,rotation:[!1,!0],fill:["transparent","transparent","#fff"],stroke:"#000",strokeDash:"",strokeWidth:2,startX:"center",startY:"center",offsetStrategy:"none",offsetAmount:0}},{title:"circle-galore",groups:[2,2,2,3],group:{items:[1,1,1,1,1,2,2,2,3,4,5],shape:"circle",width:[25,50,75,100,125],centered:!0,rotation:!0,fill:["transparent","transparent","#fff"],stroke:"#000",strokeDash:["","","","","","","","","10,5"],strokeWidth:[2,2,2,2,4],startX:"center",startY:"center",offsetStrategy:["mirrored","distributed"],offsetAmount:[10,20,30,40,50]}},{title:"triangle-galore",groups:[2,2,2,3],group:{items:[1,1,1,1,1,2,2,2,3,4,5],shape:"circle",width:[25,50,75,100,125],centered:!0,rotation:!0,fill:["transparent","transparent","#fff"],stroke:"#000",strokeDash:["","","","","","","","","10,5"],strokeWidth:[2,2,2,2,4],startX:"center",startY:"center",offsetStrategy:["mirrored","distributed"],offsetAmount:[10,20,30,40,50]}},{title:"hexagon-galore",groups:[1,2,3],group:{items:[1,2,3,4,5,6,7],shape:"hexagon",width:[25,50,75,100],centered:!0,rotation:!0,fill:["transparent","#fff"],stroke:"#000",strokeDash:["","","","","","","","","10,5"],strokeWidth:[2,2,2,2,3],startX:"center",startY:"center",offsetStrategy:"mirrored",offsetAmount:[10,20,30]}}];function $(t){for(var e=[],r="",n=j.a.alea(t),o=T(n,P),a=300,i=300,s=Array.isArray(o.groups)?T(n,o.groups):o.groups,c=function(t){var s=[],c={rng:n,x:0,y:0};Object.keys(o.group).forEach(function(t){c[t]=Array.isArray(o.group[t])?T(n,o.group[t]):o.group[t]}),o.overrides&&o.overrides[t]&&Object.keys(c).forEach(function(e){var r=o.overrides[t][e];void 0!==r&&(c[e]=Array.isArray(r)?T(n,r):r)}),c.x="random"===c.startX?B(n,c.width,a-c.width):"center"===c.startX?a/2:c.width,c.y="random"===c.startY?B(n,c.width,i-c.width):"center"===c.startY?i/2:c.width,c.initialX=c.x,c.initialY=c.y,"url(#topdown)"===c.fill&&(r='\n        <defs>\n          <linearGradient id="topdown" x1="0" x2="0" y1="0" y2="1">\n            <stop offset="0%" stop-color="black"/>\n            <stop offset="100%" stop-color="transparent"/>\n          </linearGradient>\n        </defs>\n      '),"#000"===c.fill&&c.width>a/2&&(c.fill="transparent"),"transparent"!==c.fill&&""!==c.strokeDash&&(c.strokeDash="");for(var l=0;l<c.items;l++){"random"===c.offsetStrategy&&(c.x=B(n,c.width,a-c.width),c.y=B(n,c.width,i-c.width)),"random-y"===c.offsetStrategy&&(c.y=B(n,c.width,i-c.width)),"random-x"===c.offsetStrategy&&(c.x=B(n,c.width,a-c.width)),"direction"===c.offsetStrategy&&(c.y=c.initialY+c.offsetAmount*l),"mirrored"===c.offsetStrategy&&(c.items%2===0?(0===l&&(c.x=c.initialX+c.offsetAmount),1===l&&(c.x=c.initialX-c.offsetAmount),2===l&&(c.x=c.initialX+2*c.offsetAmount),3===l&&(c.x=c.initialX-2*c.offsetAmount),4===l&&(c.x=c.initialX+3*c.offsetAmount),5===l&&(c.x=c.initialX-3*c.offsetAmount)):(0===l&&(c.x=c.initialX),1===l&&(c.x=c.initialX+c.offsetAmount),2===l&&(c.x=c.initialX-c.offsetAmount),3===l&&(c.x=c.initialX+2*c.offsetAmount),4===l&&(c.x=c.initialX-2*c.offsetAmount),5===l&&(c.x=c.initialX+3*c.offsetAmount),6===l&&(c.x=c.initialX-3*c.offsetAmount)));var h=L(c);s.push(h)}e.push("".concat(s.join("")))},l=0;l<s;l++)c(l);return'\n    <svg xmlns="http://www.w3.org/2000/svg" width="'.concat(a,'" height="').concat(i,'" viewBox="0 0 ').concat(a," ").concat(i,'">\n      \x3c!-- ').concat(o.title," --\x3e\n      ").concat(r,"\n      ").concat(e.join(""),"\n    </svg>\n  ")}function L(t){if("hexagon"===t.shape){var e=t.x,r=t.y,n="";t.centered||(r+=t.width/2),t.rotation&&(n+=" rotate(90 ".concat(e," ").concat(r,")"));var o=t.width/2,a=Math.cos(Math.PI/6)*o,i=Math.sin(Math.PI/6)*o,s=e,c=r-o,l=e+a,h=r-i,f=e+a,d=r+i,u=e,p=r+o,g=e-a,m=r+i,v=e-a,w=r-i;return'<path\n      d="M '.concat(s,",").concat(c," L").concat(l,",").concat(h," L").concat(f,",").concat(d," L").concat(u,",").concat(p," L").concat(g,",").concat(m," L").concat(v,",").concat(w,' z"\n      stroke="').concat(t.stroke,'"\n      ').concat("transparent"!=t.fill?'fill="'.concat(t.fill,'"'):'fill="#000" fill-opacity="0"','\n      stroke-width="').concat(t.strokeWidth,'"\n      transform="').concat(n,'"\n    />')}if("triangle"==t.shape){var y=t.x,k=t.y,b="";return t.centered&&(t.rotation&&(b+=" rotate(180 ".concat(y," ").concat(k,")")),k-=t.width/2),'<path\n      d="M\n      '.concat(y,",").concat(k,"\n      ").concat(y+t.width/2,",").concat(k+t.width,"\n      ").concat(y-t.width/2,",").concat(k+t.width,'\n      z"\n      stroke="').concat(t.stroke,'"\n      ').concat("transparent"!=t.fill?'fill="'.concat(t.fill,'"'):'fill="#000" fill-opacity="0"','\n      stroke-width="').concat(t.strokeWidth,'"\n      transform="').concat(b,'"\n    />')}if("line"==t.shape){var x=t.x,_=t.y,A="";if(t.centered){if(t.rotation){T(t.rng,[45,90,135]);A+=" rotate(90 ".concat(x," ").concat(_,")")}_-=t.width/2}return'<line\n      x1="'.concat(x,'"\n      x2="').concat(x,'"\n      y1="').concat(_,'"\n      y2="').concat(_+t.width,'"\n      stroke="').concat(t.stroke,'"\n      stroke-width="').concat(t.strokeWidth,'"\n      stroke-dasharray="').concat(t.strokeDash,'"\n      transform="').concat(A,'"\n    />')}if("rect"==t.shape){var X=t.x,S=t.y,M="";return t.rotation&&(M+=" rotate(45 ".concat(X," ").concat(S,")")),'<rect\n      x="'.concat(X-t.width/2,'"\n      y="').concat(S-t.width/2,'"\n      width="').concat(t.width,'"\n      height="').concat(t.width,'"\n      stroke="').concat(t.stroke,'"\n      ').concat("transparent"!=t.fill?'fill="'.concat(t.fill,'"'):'fill="#000" fill-opacity="0"','\n      stroke-width="').concat(t.strokeWidth,'"\n      transform="').concat(M,'"\n    />')}if("circle"==t.shape){var W=t.x,D=t.y;return t.centered||(D-=t.width/2),'<circle\n      cx="'.concat(W,'"\n      cy="').concat(D,'"\n      r="').concat(t.width/2,'"\n      stroke="').concat(t.stroke,'"\n      ').concat("transparent"!=t.fill?'fill="'.concat(t.fill,'"'):'fill="#000" fill-opacity="0"','\n      stroke-width="').concat(t.strokeWidth,'"\n      stroke-dasharray="').concat(t.strokeDash,'"\n    />')}}function T(t,e){return e[Math.floor(t()*e.length)]}function B(t,e,r){return r>e?t()*(r-e)+e:t()*(e-r)+r}var I=$,V={v1:H,v2:I};function F(t,e){return V[t](e)}function N(){for(var t="",e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",r=0;r<5;r++)t+=e.charAt(Math.floor(Math.random()*e.length));return t}var U={computed:{svg:function(){return F(this.$route.params.version,this.$route.params.hash)},previewTitle:function(){return"Geometric Tattoo Design #".concat(this.$route.params.hash)},previewBackground:function(){return"background-image: url(data:image/svg+xml;base64,".concat(btoa(this.svg),")")}},methods:{generate:function(){return this.$router.push("/t/v2/"+N())},download:function(){var t=document.createElement("a");t.download="geometric-tattoo-generator.com - ".concat(this.$route.params.version," - #").concat(this.$route.params.hash,".svg"),t.href="data:image/svg+xml;base64,".concat(btoa(this.svg)),t.style.position="absolute",t.style.left="-9999px",document.body.appendChild(t),t.click(),document.body.removeChild(t)}},components:{Share:D}},K=U,R=(r("b189"),Object(c["a"])(K,x,_,!1,null,null,null)),J=R.exports,q=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",[n("h2",[t._v("About")]),n("img",{attrs:{src:r("f6d7"),alt:""}}),n("p",[t._v('\n    This tattoo generator is a little side project by Mario "ehmprah" Kaiser. I\'m a web developer and love tattoos. I proudly wear one tattoo designed\n    '),n("router-link",{attrs:{to:"/t/v1/HWNjd"}},[t._v("by this generator")]),t._v(". If want to see more of my work, check out my blog at\n    "),n("a",{attrs:{href:"https://frgmnts.blog"}},[t._v("frgmnts.blog")]),t._v(" or follow me on\n    "),n("a",{attrs:{href:"https://twitter.com/ehmprah"}},[t._v("Twitter")]),t._v(".\n  ")],1),n("p")])},Q=[],Z={},tt=Object(c["a"])(Z,q,Q,!1,null,null,null),et=tt.exports,rt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},nt=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("main",[r("h2",[t._v("Privacy")]),r("p",[t._v('\n    This website uses Google Analytics, a web analytics service provided by\n    Google, Inc. ("Google"). Google Analytics uses "cookies", which are text files\n    placed on your computer, to help the website analyze how users use the site.\n    The information generated by the cookie about your use of the website will be\n    transmitted to and stored by Google on servers in the United States. Your IP\n    address will be truncated within the area of Member States of the European Union\n    or other parties to the Agreement on the European Economic Area. Only in\n    exceptional cases the whole IP address will be first transfered to a Google\n    server in the USA and truncated there.\n  ')]),r("p",[t._v("\n    Google will use this information on behalf of the operator of this website for\n    the purpose of evaluating your use of the website, compiling reports on website\n    activity for website operators and providing them other services relating to\n    website activity and internet usage. The IP-address, that your Browser conveys\n    within the scope of Google Analytics, will not be associated with any other\n    data held by Google. You may refuse the use of cookies by selecting the\n    appropriate settings on your browser, however please note that if you do this\n    you may not be able to use the full functionality of this website.\n  ")]),r("p",[t._v("\n    You can also opt-out from being tracked by Google Analytics with effect for the\n    future by downloading and installing Google Analytics Opt-out Browser Addon for\n    your current web browser: http://tools.google.com/dlpage/gaoptout?hl=en\n  ")])])}],ot={name:"imprint"},at=ot,it=Object(c["a"])(at,rt,nt,!1,null,null,null),st=it.exports,ct=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},lt=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("main",[r("h2",[t._v("Imprint")]),r("p",[t._v("\n    Mario Kaiser\n    "),r("br"),t._v("Graudenzer Str. 17\n    "),r("br"),t._v("10243 Berlin\n  ")]),r("h2",[t._v("Contact")]),r("p",[t._v("\n    Phone: 030/28090231\n    "),r("br"),t._v("Mail: info@geometric-tattoo-generator.com\n  ")]),r("h2",[t._v("Responsible as per § 55 RSTV")]),r("p",[t._v("\n    Mario Kaiser\n    "),r("br"),t._v("Graudenzer Str. 17\n    "),r("br"),t._v("10243 Berlin\n  ")])])}],ht={},ft=Object(c["a"])(ht,ct,lt,!1,null,null,null),dt=ft.exports,ut=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"home"},[t._v("Uhm ... nope.")])},pt=[],gt={name:"notfound"},mt=gt,vt=Object(c["a"])(mt,ut,pt,!1,null,null,null),wt=vt.exports;n["a"].use(b["a"]);var yt=new b["a"]({mode:"history",base:"/",routes:[{path:"/",redirect:function(){return"/t/v2/"+N()}},{path:"/t/:version/:hash",name:"generator",component:J},{path:"/about",component:et},{path:"/privacy",component:st},{path:"/imprint",component:dt},{path:"*",component:wt}]}),kt=r("9483");Object(kt["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}}),n["a"].config.productionTip=!1,new n["a"]({router:yt,render:function(t){return t(k)}}).$mount("#app")},"5c0b":function(t,e,r){"use strict";var n=r("5e27"),o=r.n(n);o.a},"5e27":function(t,e,r){},"730d":function(t,e,r){},"84e2":function(t,e,r){"use strict";var n=r("de43"),o=r.n(n);o.a},b189:function(t,e,r){"use strict";var n=r("0ff3"),o=r.n(n);o.a},de43:function(t,e,r){},f6d7:function(t,e,r){t.exports=r.p+"img/showcase.5b58b1ea.jpg"}});
//# sourceMappingURL=app.ad627a14.js.map