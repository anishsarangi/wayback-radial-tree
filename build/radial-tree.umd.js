!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("lodash"),require("d3")):"function"==typeof define&&define.amd?define(["exports","lodash","d3"],t):t(e.wb={},null,e.d3)}(this,function(e,t,n){"use strict";t=t&&t.hasOwnProperty("default")?t.default:t;var r=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=function(e){return Array.isArray(e)?e:Array.from(e)};function u(e,t,n){var r=n.targetField;return t.reduce(function(t,n){var a,u=e.getValueByName(n,r).split("/"),o=i(u),c=o[0],l=o.slice(1);return t.name=(a=c)?(a=a.slice(0,a.length-1)).split(",").reverse().join("."):a,function e(t,n){if(n&&0!==n.length){var r=i(n),a=r[0],u=r.slice(1);if(a){var o=void 0;t.children?o=t.children.filter(function(e){return e.name===a})[0]:t.children=[],o||(o={name:a},t.children.push(o)),e(o,u)}}}(t,l),t},{})}var o=function(){function e(n){r(this,e),this.fields=n[0],this.getIndexByName=t.memoize(this.getIndexByName)}return a(e,[{key:"getIndexByName",value:function(e){return this.fields.indexOf(e)}},{key:"getValueByName",value:function(e,t){return e[this.getIndexByName(t)]}}]),e}();var c=n.arc().startAngle(function(e){return e.x0}).endAngle(function(e){return e.x1}).innerRadius(function(e){return Math.sqrt(e.y0)}).outerRadius(function(e){return Math.sqrt(e.y1)}),l=n.scaleOrdinal(n.schemePaired);function s(e,t,r,a,i,u){var o=n.partition().size([2*Math.PI,r*r])(n.hierarchy({children:[u]}).sum(function(e){return!e.children}).sort(function(e,t){return t.value-e.value})).descendants();function s(e){for(var t=e.ancestors().reverse(),n="",r=1;r<t.length&&"end"!==t[r].data.name;r++)n=n+"/"+t[r].data.name;return a+"/web/"+i+"0630"+n}function d(r){var a=r.ancestors().reverse();a.shift();var i=s(r);!function(t,n){var r="",a=document.createElement("span");a.setAttribute("class","symb"),a.innerHTML="/";for(var i=0;i<t.length;i++)r=0===i?" "+t[i].data.name:r+a.innerHTML+t[i].data.name;r=decodeURIComponent(r),e.querySelector(".sequence").innerHTML='<a href="'+n+'">'+r+"</a>"}(a,i),n.selectAll("path").style("opacity",.3),t.selectAll("path").filter(function(e){return a.indexOf(e)>=0}).style("opacity",1)}t.selectAll("path").data(o).enter().append("a").attr("xlink:href",s).on("touchstart",function(e){return n.event.preventDefault(),n.event.stopPropagation(),d(e),!1}).append("svg:path").attr("display",function(e){return e.depth?null:"none"}).attr("d",c).attr("fill-rule","evenodd").style("fill",function(e){return l((e.children?e:e.parent).data.name)}).style("opacity",1).style("cursor","pointer").on("mouseover",d),n.select("#d3_container").on("mouseleave",function(){e.querySelector(".sequence").innerHTML="",n.selectAll("path").on("mouseover",null),n.selectAll("path").transition().style("opacity",1).on("end",function(){n.select(this).on("mouseover",d)})})}function d(e,t,n){var r=e.querySelector(".div-btn");r.onclick=function(e){return n(e.target.id)},e.querySelector(".year-btn")||t.forEach(function(e){return r.appendChild(function(e){var t=document.createElement("button");return t.setAttribute("class","year-btn"),t.setAttribute("id",e),t.innerHTML=e,t}(e))})}e.RadialTree=function(e,r){var a=(arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}).baseURL||"https://web.archive.org",i=function(){var e=document.createElement("div");e.setAttribute("class","rt-content");var t=document.createElement("div");t.setAttribute("class","div-btn");var n=document.createElement("p");n.setAttribute("class","sequence");var r=document.createElement("div");return r.setAttribute("id","chart"),e.appendChild(t),e.appendChild(n),e.appendChild(r),e.style.display="block",e}();e.appendChild(i);var c,l=new o(r),f=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=n.groupBy,a=n.dedupBy,i=n.orderBy;if(!e)return e;var u=new o(e),c=e.slice(1).reduce(function(e,t){var n=e[u.getValueByName(t,r)]||{};return n[u.getValueByName(t,a)]||(n[u.getValueByName(t,a)]=t),e[u.getValueByName(t,r)]=n,e},{});return t(c).mapValues(function(e){return Object.values(e)}).mapValues(function(e){return t.sortBy(e,u.getIndexByName(i))}).value()}(r,{groupBy:"timestamp:4",dedupBy:"urlkey",orderBy:"urlkey"}),y=(c=f)?Object.keys(c).sort():c;function p(t){e.querySelector(".active-btn")&&e.querySelector(".active-btn").classList.remove("active-btn"),function(e,t){return e.ownerDocument.getElementById(t)}(e,t).classList.add("active-btn"),function(e,t){e.querySelector(".sequence").innerHTML="",e.querySelector("#chart").innerHTML="";var r=e.querySelector("#chart").offsetWidth,i=r,o=Math.min(r,i)/2,c=n.select("#chart").append("svg:svg").attr("width",r).attr("height",i).append("svg:g").attr("id","d3_container").attr("transform","translate("+r/2+","+i/2+")");c.append("svg:circle").attr("r",o).style("opacity",0);var d=f[t],y=u(l,d,{targetField:"urlkey"});s(e,c,o,a,t,y)}(e,t)}d(e,y,p),p(y[y.length-2]||y[0])},Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=radial-tree.umd.js.map
