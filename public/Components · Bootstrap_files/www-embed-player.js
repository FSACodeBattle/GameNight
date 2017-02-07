(function(){var k,m=this;function p(a){return void 0!==a}
function q(a,b,c){a=a.split(".");c=c||m;a[0]in c||!c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)!a.length&&p(b)?c[d]=b:c[d]&&Object.prototype.hasOwnProperty.call(c,d)?c=c[d]:c=c[d]={}}
function r(a,b){for(var c=a.split("."),d=b||m,e;e=c.shift();)if(null!=d[e])d=d[e];else return null;return d}
function ba(){}
function ca(a){a.ma=void 0;a.getInstance=function(){return a.ma?a.ma:a.ma=new a}}
function da(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}
function ea(a){return"array"==da(a)}
function ga(a){var b=da(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function t(a){return"string"==typeof a}
function ha(a){return"function"==da(a)}
function ia(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
function ja(a){return a[ka]||(a[ka]=++la)}
var ka="closure_uid_"+(1E9*Math.random()>>>0),la=0;function oa(a,b,c){return a.call.apply(a.bind,arguments)}
function pa(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}
function u(a,b,c){u=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?oa:pa;return u.apply(null,arguments)}
function qa(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var b=c.slice();b.push.apply(b,arguments);return a.apply(this,b)}}
function ra(a,b){for(var c in b)a[c]=b[c]}
var v=Date.now||function(){return+new Date};
function w(a,b){function c(){}
c.prototype=b.prototype;a.B=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.ob=function(a,c,f){for(var d=Array(arguments.length-2),e=2;e<arguments.length;e++)d[e-2]=arguments[e];return b.prototype[c].apply(a,d)}}
;function sa(a,b,c){this.i=c;this.g=a;this.j=b;this.f=0;this.b=null}
sa.prototype.get=function(){var a;0<this.f?(this.f--,a=this.b,this.b=a.next,a.next=null):a=this.g();return a};
function ta(a,b){a.j(b);a.f<a.i&&(a.f++,b.next=a.b,a.b=b)}
;function ua(a){if(Error.captureStackTrace)Error.captureStackTrace(this,ua);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))}
w(ua,Error);ua.prototype.name="CustomError";function va(a,b){for(var c in a)b.call(void 0,a[c],c,a)}
function wa(a){var b=xa,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function ya(){var a=za,b;for(b in a)return!1;return!0}
function Aa(a,b){if(null!==a&&b in a)throw Error('The object already contains the key "'+b+'"');a[b]=!0}
function Ba(a){var b={},c;for(c in a)b[c]=a[c];return b}
var Ca="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Da(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<Ca.length;f++)c=Ca[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;var Ea=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")};
function Fa(a,b){return a<b?-1:a>b?1:0}
function Ga(a){for(var b=0,c=0;c<a.length;++c)b=31*b+a.charCodeAt(c)>>>0;return b}
;var Ha=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{};q("yt.config_",Ha,void 0);function Ia(a){a&&(a.dataset?a.dataset[Ja("loaded")]="true":a.setAttribute("data-loaded","true"))}
function Ka(a,b){return a?a.dataset?a.dataset[Ja(b)]:a.getAttribute("data-"+b):null}
var La={};function Ja(a){return La[a]||(La[a]=String(a).replace(/\-([a-z])/g,function(a,c){return c.toUpperCase()}))}
;function Ma(a,b){if(1<b.length){var c=b[0];a[c]=b[1]}else{var d=b[0];for(c in d)a[c]=d[c]}}
var Na=window.performance&&window.performance.timing&&window.performance.now?function(){return window.performance.timing.navigationStart+window.performance.now()}:function(){return(new Date).getTime()},Oa="Microsoft Internet Explorer"==navigator.appName;function x(){this.f=this.f;this.G=this.G}
x.prototype.f=!1;x.prototype.dispose=function(){this.f||(this.f=!0,this.o())};
function Pa(a,b){a.f?p(void 0)?b.call(void 0):b():(a.G||(a.G=[]),a.G.push(p(void 0)?u(b,void 0):b))}
x.prototype.o=function(){if(this.G)for(;this.G.length;)this.G.shift()()};
function Qa(a){a&&"function"==typeof a.dispose&&a.dispose()}
function Ra(a){for(var b=0,c=arguments.length;b<c;++b){var d=arguments[b];ga(d)?Ra.apply(null,d):Qa(d)}}
;var y;a:{var Sa=m.navigator;if(Sa){var Ta=Sa.userAgent;if(Ta){y=Ta;break a}}y=""}function z(a){return-1!=y.indexOf(a)}
;function A(a){Ma(Ha,arguments)}
function C(a,b){return a in Ha?Ha[a]:b}
;var Ua=Array.prototype.indexOf?function(a,b,c){return Array.prototype.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;
if(t(a))return t(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},D=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=t(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},Va=Array.prototype.map?function(a,b,c){return Array.prototype.map.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=Array(d),f=t(a)?a.split(""):a,g=0;g<d;g++)g in f&&(e[g]=b.call(c,f[g],g,a));
return e};
function Wa(a,b){var c;a:{c=a.length;for(var d=t(a)?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){c=e;break a}c=-1}return 0>c?null:t(a)?a.charAt(c):a[c]}
function Xa(a,b){var c=Ua(a,b);0<=c&&Array.prototype.splice.call(a,c,1)}
function Ya(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}
function Za(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(ga(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
function $a(a,b,c,d){return Array.prototype.splice.apply(a,ab(arguments,1))}
function ab(a,b,c){return 2>=arguments.length?Array.prototype.slice.call(a,b):Array.prototype.slice.call(a,b,c)}
;function bb(){this.f=this.b=null}
var db=new sa(function(){return new cb},function(a){a.reset()},100);
bb.prototype.remove=function(){var a=null;this.b&&(a=this.b,this.b=this.b.next,this.b||(this.f=null),a.next=null);return a};
function cb(){this.next=this.scope=this.b=null}
cb.prototype.set=function(a,b){this.b=a;this.scope=b;this.next=null};
cb.prototype.reset=function(){this.next=this.scope=this.b=null};function eb(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){E(b)}}:a}
function E(a,b){var c=r("yt.logging.errors.log");c?c(a,b,void 0,void 0,void 0):(c=C("ERRORS",[]),c.push([a,b,void 0,void 0,void 0]),A("ERRORS",c))}
;function fb(){this.b="";this.f=gb}
fb.prototype.la=!0;fb.prototype.ka=function(){return this.b};
var gb={};function hb(){return(z("Chrome")||z("CriOS"))&&!z("Edge")}
;function F(a,b){ha(a)&&(a=eb(a));return window.setTimeout(a,b)}
;function ib(a){m.setTimeout(function(){throw a;},0)}
var jb;
function kb(){var a=m.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!z("Presto")&&(a=function(){var a=document.createElement("IFRAME");a.style.display="none";a.src="";document.documentElement.appendChild(a);var b=a.contentWindow,a=b.document;a.open();a.write("");a.close();var c="callImmediate"+Math.random(),d="file:"==b.location.protocol?"*":b.location.protocol+"//"+b.location.host,a=u(function(a){if(("*"==d||a.origin==d)&&a.data==
c)this.port1.onmessage()},this);
b.addEventListener("message",a,!1);this.port1={};this.port2={postMessage:function(){b.postMessage(c,d)}}});
if("undefined"!==typeof a&&!z("Trident")&&!z("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(p(c.next)){c=c.next;var a=c.ta;c.ta=null;a()}};
return function(a){d.next={ta:a};d=d.next;b.port2.postMessage(0)}}return"undefined"!==typeof document&&"onreadystatechange"in document.createElement("SCRIPT")?function(a){var b=document.createElement("SCRIPT");
b.onreadystatechange=function(){b.onreadystatechange=null;b.parentNode.removeChild(b);b=null;a();a=null};
document.documentElement.appendChild(b)}:function(a){m.setTimeout(a,0)}}
;function lb(){this.b="";this.f=mb}
lb.prototype.la=!0;lb.prototype.ka=function(){return this.b};
function nb(a){return a instanceof lb&&a.constructor===lb&&a.f===mb?a.b:"type_error:SafeUrl"}
var ob=/^(?:(?:https?|mailto|ftp):|[^&:/?#]*(?:[/?#]|$))/i;function pb(a){if(a instanceof lb)return a;a=a.la?a.ka():String(a);ob.test(a)||(a="about:invalid#zClosurez");return qb(a)}
var mb={};function qb(a){var b=new lb;b.b=a;return b}
qb("about:blank");function rb(a,b,c){isNaN(c)&&(c=void 0);var d=r("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),NaN):F(a,c||0)}
function sb(a,b){return rb(a,1,b)}
;function tb(a,b){ub||vb();wb||(ub(),wb=!0);var c=xb,d=db.get();d.set(a,b);c.f?c.f.next=d:c.b=d;c.f=d}
var ub;function vb(){if(-1!=String(m.Promise).indexOf("[native code]")){var a=m.Promise.resolve(void 0);ub=function(){a.then(yb)}}else ub=function(){var a=yb;
!ha(m.setImmediate)||m.Window&&m.Window.prototype&&!z("Edge")&&m.Window.prototype.setImmediate==m.setImmediate?(jb||(jb=kb()),jb(a)):m.setImmediate(a)}}
var wb=!1,xb=new bb;function yb(){for(var a;a=xb.remove();){try{a.b.call(a.scope)}catch(b){ib(b)}ta(db,a)}wb=!1}
;function zb(){this.b=""}
zb.prototype.la=!0;zb.prototype.ka=function(){return this.b};
function Ab(a){var b=new zb;b.b=a;return b}
Ab("<!DOCTYPE html>");Ab("");Ab("<br>");function Bb(a,b){var c;c=b instanceof lb?b:pb(b);a.href=nb(c)}
function Cb(a,b){a.rel="stylesheet";a.href=b instanceof fb&&b.constructor===fb&&b.f===gb?b.b:"type_error:TrustedResourceUrl"}
;function G(a){x.call(this);this.l=1;this.i=[];this.j=0;this.b=[];this.g={};this.w=!!a}
w(G,x);k=G.prototype;k.subscribe=function(a,b,c){var d=this.g[a];d||(d=this.g[a]=[]);var e=this.l;this.b[e]=a;this.b[e+1]=b;this.b[e+2]=c;this.l=e+3;d.push(e);return e};
function Db(a,b,c,d){if(b=a.g[b]){var e=a.b;(b=Wa(b,function(a){return e[a+1]==c&&e[a+2]==d}))&&a.L(b)}}
k.L=function(a){var b=this.b[a];if(b){var c=this.g[b];0!=this.j?(this.i.push(a),this.b[a+1]=ba):(c&&Xa(c,a),delete this.b[a],delete this.b[a+1],delete this.b[a+2])}return!!b};
k.W=function(a,b){var c=this.g[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.w)for(e=0;e<c.length;e++){var g=c[e];Eb(this.b[g+1],this.b[g+2],d)}else{this.j++;try{for(e=0,f=c.length;e<f;e++)g=c[e],this.b[g+1].apply(this.b[g+2],d)}finally{if(this.j--,0<this.i.length&&0==this.j)for(;c=this.i.pop();)this.L(c)}}return 0!=e}return!1};
function Eb(a,b,c){tb(function(){a.apply(b,c)})}
k.clear=function(a){if(a){var b=this.g[a];b&&(D(b,this.L,this),delete this.g[a])}else this.b.length=0,this.g={}};
k.o=function(){G.B.o.call(this);this.clear();this.i.length=0};var Fb=r("yt.pubsub.instance_")||new G;G.prototype.subscribe=G.prototype.subscribe;G.prototype.unsubscribeByKey=G.prototype.L;G.prototype.publish=G.prototype.W;G.prototype.clear=G.prototype.clear;q("yt.pubsub.instance_",Fb,void 0);var Gb=r("yt.pubsub.subscribedKeys_")||{};q("yt.pubsub.subscribedKeys_",Gb,void 0);var Hb=r("yt.pubsub.topicToKeys_")||{};q("yt.pubsub.topicToKeys_",Hb,void 0);var Ib=r("yt.pubsub.isSynchronous_")||{};q("yt.pubsub.isSynchronous_",Ib,void 0);
var Jb=r("yt.pubsub.skipSubId_")||null;q("yt.pubsub.skipSubId_",Jb,void 0);function Kb(a,b){var c=Lb();if(c){var d=c.subscribe(a,function(){if(!Jb||Jb!=d){var c=arguments,f;f=function(){Gb[d]&&b.apply(window,c)};
try{Ib[a]?f():F(f,0)}catch(g){E(g)}}},void 0);
Gb[d]=!0;Hb[a]||(Hb[a]=[]);Hb[a].push(d);return d}return 0}
function Mb(a){var b=Lb();b&&("number"==typeof a?a=[a]:"string"==typeof a&&(a=[parseInt(a,10)]),D(a,function(a){b.unsubscribeByKey(a);delete Gb[a]}))}
function Nb(a,b){var c=Lb();return c?c.publish.apply(c,arguments):!1}
function Ob(a){Hb[a]&&(a=Hb[a],D(a,function(a){Gb[a]&&delete Gb[a]}),a.length=0)}
function Pb(a){var b=Lb();if(b)if(b.clear(a),a)Ob(a);else for(var c in Hb)Ob(c)}
function Lb(){return r("yt.pubsub.instance_")}
;function Qb(a,b){if(window.spf){var c="";if(a){var d=a.indexOf("jsbin/"),e=a.lastIndexOf(".js"),f=d+6;-1<d&&-1<e&&e>f&&(c=a.substring(f,e),c=c.replace(Rb,""),c=c.replace(Sb,""),c=c.replace("debug-",""),c=c.replace("tracing-",""))}spf.script.load(a,c,b)}else Tb(a,b)}
function Tb(a,b){var c=Ub(a),d=document.getElementById(c),e=d&&Ka(d,"loaded"),f=d&&!e;if(e)b&&b();else{if(b){var e=Kb(c,b),g=""+ja(b);Vb[g]=e}f||(d=Wb(a,c,function(){Ka(d,"loaded")||(Ia(d),Nb(c),F(qa(Pb,c),0))}))}}
function Wb(a,b,c){var d=document.createElement("script");d.id=b;d.onload=function(){c&&setTimeout(c,0)};
d.onreadystatechange=function(){switch(d.readyState){case "loaded":case "complete":d.onload()}};
d.src=a;a=document.getElementsByTagName("head")[0]||document.body;a.insertBefore(d,a.firstChild);return d}
function Xb(a,b){if(a&&b){var c=""+ja(b);(c=Vb[c])&&Mb(c)}}
function Ub(a){var b=document.createElement("a");Bb(b,a);a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"js-"+Ga(a)}
var Rb=/\.vflset|-vfl[a-zA-Z0-9_+=-]+/,Sb=/-[a-zA-Z]{2,3}_[a-zA-Z]{2,3}(?=(\/|$))/,Vb={};var Yb=null;function Zb(){var a=C("BG_I",null),b=C("BG_IU",null),c=C("BG_P",void 0);b?Qb(b,function(){Yb=new botguard.bg(c)}):a&&(eval(a),Yb=new botguard.bg(c))}
function $b(){return null!=Yb}
function ac(){return Yb?Yb.invoke():null}
;var bc=[],cc=!1;function dc(){function a(){cc=!0;"google_ad_status"in window?A("DCLKSTAT",1):A("DCLKSTAT",2)}
Qb("//static.doubleclick.net/instream/ad_status.js",a);bc.push(sb(function(){cc||"google_ad_status"in window||(Xb("//static.doubleclick.net/instream/ad_status.js",a),A("DCLKSTAT",3))},5E3))}
function ec(){return parseInt(C("DCLKSTAT",0),10)}
;function fc(a){if(!a)return"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));a=a.substring(0,a.indexOf("://"));if("http"!==a&&"https"!==a&&"chrome-extension"!==a&&"file"!==a&&"android-app"!==a)throw Error("Invalid URI scheme in origin");var c="",d=b.indexOf(":");if(-1!=d){var e=b.substring(d+1),b=b.substring(0,d);
if("http"===a&&"80"!==e||"https"===a&&"443"!==e)c=":"+e}return a+"://"+b+c}
;function gc(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;B=n=0}
function b(a){for(var b=g,c=0;64>c;c+=4)b[c/4]=a[c]<<24|a[c+1]<<16|a[c+2]<<8|a[c+3];for(c=16;80>c;c++)a=b[c-3]^b[c-8]^b[c-14]^b[c-16],b[c]=(a<<1|a>>>31)&4294967295;a=e[0];for(var d=e[1],f=e[2],h=e[3],l=e[4],n,I,c=0;80>c;c++)40>c?20>c?(n=h^d&(f^h),I=1518500249):(n=d^f^h,I=1859775393):60>c?(n=d&f|h&(d|f),I=2400959708):(n=d^f^h,I=3395469782),n=((a<<5|a>>>27)&4294967295)+n+l+I+b[c]&4294967295,l=h,h=f,f=(d<<30|d>>>2)&4294967295,d=a,a=n;e[0]=e[0]+a&4294967295;e[1]=e[1]+d&4294967295;e[2]=e[2]+f&4294967295;
e[3]=e[3]+h&4294967295;e[4]=e[4]+l&4294967295}
function c(a,c){if("string"===typeof a){a=unescape(encodeURIComponent(a));for(var d=[],e=0,g=a.length;e<g;++e)d.push(a.charCodeAt(e));a=d}c||(c=a.length);d=0;if(0==n)for(;d+64<c;)b(a.slice(d,d+64)),d+=64,B+=64;for(;d<c;)if(f[n++]=a[d++],B++,64==n)for(n=0,b(f);d+64<c;)b(a.slice(d,d+64)),d+=64,B+=64}
function d(){var a=[],d=8*B;56>n?c(h,56-n):c(h,64-(n-56));for(var g=63;56<=g;g--)f[g]=d&255,d>>>=8;b(f);for(g=d=0;5>g;g++)for(var l=24;0<=l;l-=8)a[d++]=e[g]>>l&255;return a}
for(var e=[],f=[],g=[],h=[128],l=1;64>l;++l)h[l]=0;var n,B;a();return{reset:a,update:c,digest:d,Ha:function(){for(var a=d(),b="",c=0;c<a.length;c++)b+="0123456789ABCDEF".charAt(Math.floor(a[c]/16))+"0123456789ABCDEF".charAt(a[c]%16);return b}}}
;/*
 gapi.loader.OBJECT_CREATE_TEST_OVERRIDE &&*/
var hc=window,ic=document,jc=hc.location;function kc(){}
var lc=/\[native code\]/;function H(a,b,c){return a[b]=a[b]||c}
function mc(a){for(var b=0;b<this.length;b++)if(this[b]===a)return b;return-1}
function nc(a){a=a.sort();for(var b=[],c=void 0,d=0;d<a.length;d++){var e=a[d];e!=c&&b.push(e);c=e}return b}
function J(){var a;if((a=Object.create)&&lc.test(a))a=a(null);else{a={};for(var b in a)a[b]=void 0}return a}
var oc=H(hc,"gapi",{});function pc(a){return/^\s*$/.test(a)?!1:/^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g,"@").replace(/(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g,"]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g,""))}
function qc(a){a=String(a);if(pc(a))try{return eval("("+a+")")}catch(b){}throw Error("Invalid JSON string: "+a);}
function rc(a){return eval("("+a+")")}
function sc(a){var b=[];tc(new uc,a,b);return b.join("")}
function uc(){}
function tc(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(ea(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),e=d[f],tc(a,e,c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");f="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(e=b[d],"function"!=typeof e&&(c.push(f),vc(d,c),c.push(":"),tc(a,e,c),f=","));c.push("}");return}}switch(typeof b){case "string":vc(b,c);break;case "number":c.push(isFinite(b)&&
!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}
var wc={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},xc=/\uffff/.test("\uffff")?/[\\\"\x00-\x1f\x7f-\uffff]/g:/[\\\"\x00-\x1f\x7f-\xff]/g;function vc(a,b){b.push('"',a.replace(xc,function(a){var b=wc[a];b||(b="\\u"+(a.charCodeAt(0)|65536).toString(16).substr(1),wc[a]=b);return b}),'"')}
;function yc(a,b){this.width=a;this.height=b}
k=yc.prototype;k.aspectRatio=function(){return this.width/this.height};
k.isEmpty=function(){return!(this.width*this.height)};
k.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
k.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
k.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function zc(a){this.b=a||{cookie:""}}
var Ac=/\s*;\s*/;k=zc.prototype;k.isEnabled=function(){return navigator.cookieEnabled};
k.set=function(a,b,c,d,e,f){if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');p(c)||(c=-1);e=e?";domain="+e:"";d=d?";path="+d:"";f=f?";secure":"";c=0>c?"":0==c?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(v()+1E3*c)).toUTCString();this.b.cookie=a+"="+b+e+d+c+f};
k.get=function(a,b){for(var c=a+"=",d=(this.b.cookie||"").split(Ac),e=0,f;f=d[e];e++){if(0==f.lastIndexOf(c,0))return f.substr(c.length);if(f==a)return""}return b};
k.remove=function(a,b,c){var d=p(this.get(a));this.set(a,"",0,b,c);return d};
k.isEmpty=function(){return!this.b.cookie};
k.clear=function(){for(var a=(this.b.cookie||"").split(Ac),b=[],c=[],d,e,f=0;e=a[f];f++)d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));for(a=b.length-1;0<=a;a--)this.remove(b[a])};
var Bc=new zc("undefined"==typeof document?null:document);Bc.f=3950;function Cc(a){a.prototype.then=a.prototype.then;a.prototype.$goog_Thenable=!0}
;function Dc(a,b){var c=Ec;return Object.prototype.hasOwnProperty.call(c,a)?c[a]:c[a]=b(a)}
;function Fc(){}
;function Gc(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.shiftKey=this.ctrlKey=this.altKey=!1;this.clientY=this.clientX=0;this.changedTouches=null;if(a=a||window.event){this.event=a;for(var b in a)b in Hc||(this[b]=a[b]);(b=a.target||a.srcElement)&&3==b.nodeType&&(b=b.parentNode);this.target=b;if(b=a.relatedTarget)try{b=b.nodeName?b:null}catch(c){b=null}else"mouseover"==this.type?b=a.fromElement:"mouseout"==
this.type&&(b=a.toElement);this.relatedTarget=b;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey}}
Gc.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
Gc.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
Gc.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};
var Hc={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};function Ic(a,b,c){this.b=a;this.g=b;this.f=c}
var Kc=1;function Lc(a){var b={};void 0!==a.b?b.trackingParams=a.b:(b.veType=a.g,null!=a.f&&(b.veCounter=a.f));return b}
;var Mc=null;"undefined"!=typeof XMLHttpRequest?Mc=function(){return new XMLHttpRequest}:"undefined"!=typeof ActiveXObject&&(Mc=function(){return new ActiveXObject("Microsoft.XMLHTTP")});
function Nc(a){switch(a&&"status"in a?a.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:return!0;default:return!1}}
;function Oc(a){this.b=a}
Oc.prototype.set=function(a,b){p(b)?this.b.set(a,sc(b)):this.b.remove(a)};
Oc.prototype.get=function(a){var b;try{b=this.b.get(a)}catch(c){return}if(null!==b)try{return qc(b)}catch(c){throw"Storage: Invalid value was encountered";}};
Oc.prototype.remove=function(a){this.b.remove(a)};var K;K=H(hc,"___jsl",J());H(K,"I",0);H(K,"hel",10);function Pc(){var a=jc.href,b;if(K.dpo)b=K.h;else{b=K.h;var c=RegExp("([#].*&|[#])jsh=([^&#]*)","g"),d=RegExp("([?#].*&|[?#])jsh=([^&#]*)","g");if(a=a&&(c.exec(a)||d.exec(a)))try{b=decodeURIComponent(a[2])}catch(e){}}return b}
function Qc(a){var b=H(K,"PQ",[]);K.PQ=[];var c=b.length;if(0===c)a();else for(var d=0,e=function(){++d===c&&a()},f=0;f<c;f++)b[f](e)}
function Rc(a){return H(H(K,"H",J()),a,J())}
;function Sc(){return z("iPhone")&&!z("iPod")&&!z("iPad")}
;function Tc(a){this.b=a}
w(Tc,Oc);function Uc(a){this.data=a}
function Vc(a){return!p(a)||a instanceof Uc?a:new Uc(a)}
Tc.prototype.set=function(a,b){Tc.B.set.call(this,a,Vc(b))};
Tc.prototype.f=function(a){a=Tc.B.get.call(this,a);if(!p(a)||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
Tc.prototype.get=function(a){if(a=this.f(a)){if(a=a.data,!p(a))throw"Storage: Invalid value was encountered";}else a=void 0;return a};var Wc=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function L(a){return a.match(Wc)}
function Xc(a){return a?decodeURI(a):a}
function Yc(a){if(a[1]){var b=a[0],c=b.indexOf("#");0<=c&&(a.push(b.substr(c)),a[0]=b=b.substr(0,c));c=b.indexOf("?");0>c?a[1]="?":c==b.length-1&&(a[1]=void 0)}return a.join("")}
function Zc(a,b,c){if(ea(b))for(var d=0;d<b.length;d++)Zc(a,String(b[d]),c);else null!=b&&c.push("&",a,""===b?"":"=",encodeURIComponent(String(b)))}
function $c(a,b,c){for(c=c||0;c<b.length;c+=2)Zc(b[c],b[c+1],a);return a}
function ad(a,b){for(var c in b)Zc(c,b[c],a);return a}
function bd(a){a=ad([],a);a[0]="";return a.join("")}
function cd(a,b){return Yc(2==arguments.length?$c([a],arguments[1],0):$c([a],arguments,1))}
;function M(a){return C("EXPERIMENT_FLAGS",{})[a]}
;function dd(){return{apiaryHost:C("APIARY_HOST",void 0),Fa:C("APIARY_HOST_FIRSTPARTY",void 0),gapiHintOverride:C("GAPI_HINT_OVERRIDE"),gapiHintParams:C("GAPI_HINT_PARAMS",void 0),innertubeApiKey:C("INNERTUBE_API_KEY",void 0),innertubeApiVersion:C("INNERTUBE_API_VERSION",void 0),Oa:C("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),innertubeContextClientVersion:C("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0),Qa:C("INNERTUBE_CONTEXT_HL",void 0),Pa:C("INNERTUBE_CONTEXT_GL",void 0),mb:C("XHR_APIARY_HOST",void 0)}}
function ed(a){a={client:{hl:a.Qa,gl:a.Pa,clientName:a.Oa,clientVersion:a.innertubeContextClientVersion}};C("DELEGATED_SESSION_ID")&&(a.user={onBehalfOfUser:C("DELEGATED_SESSION_ID")});return a}
;function fd(a,b,c){var d=[],e=[];if(1==(ea(c)?2:1))return e=[b,a],D(d,function(a){e.push(a)}),gd(e.join(" "));
var f=[],g=[];D(c,function(a){g.push(a.key);f.push(a.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];D(d,function(a){e.push(a)});
a=gd(e.join(" "));a=[c,a];0==g.length||a.push(g.join(""));return a.join("_")}
function gd(a){var b=gc();b.update(a);return b.Ha().toLowerCase()}
;var hd=H(K,"perf",J());H(hd,"g",J());var id=H(hd,"i",J());H(hd,"r",[]);J();J();function jd(a,b,c){b&&0<b.length&&(b=kd(b),c&&0<c.length&&(b+="___"+kd(c)),28<b.length&&(b=b.substr(0,28)+(b.length-28)),c=b,b=H(id,"_p",J()),H(b,c,J())[a]=(new Date).getTime(),b=hd.r,"function"===typeof b?b(a,"_p",c):b.push([a,"_p",c]))}
function kd(a){return a.join("__").replace(/\./g,"_").replace(/\-/g,"_").replace(/\,/g,"_")}
;function ld(a){this.b=a}
w(ld,Tc);ld.prototype.set=function(a,b,c){if(b=Vc(b)){if(c){if(c<v()){ld.prototype.remove.call(this,a);return}b.expiration=c}b.creation=v()}ld.B.set.call(this,a,b)};
ld.prototype.f=function(a,b){var c=ld.B.f.call(this,a);if(c){var d;if(d=!b){d=c.creation;var e=c.expiration;d=!!e&&e<v()||!!d&&d>v()}if(d)ld.prototype.remove.call(this,a);else return c}};function md(a){"?"==a.charAt(0)&&(a=a.substr(1));a=a.split("&");for(var b={},c=0,d=a.length;c<d;c++){var e=a[c].split("=");if(1==e.length&&e[0]||2==e.length){var f=decodeURIComponent((e[0]||"").replace(/\+/g," ")),e=decodeURIComponent((e[1]||"").replace(/\+/g," "));f in b?ea(b[f])?Za(b[f],e):b[f]=[b[f],e]:b[f]=e}}return b}
function nd(a,b){var c=a.split("#",2);a=c[0];var c=1<c.length?"#"+c[1]:"",d=a.split("?",2);a=d[0];var d=md(d[1]||""),e;for(e in b)d[e]=b[e];return Yc(ad([a],d))+c}
;var od=J(),pd=[];function N(a){throw Error("Bad hint"+(a?": "+a:""));}
pd.push(["jsl",function(a){for(var b in a)if(Object.prototype.hasOwnProperty.call(a,b)){var c=a[b];"object"==typeof c?K[b]=H(K,b,[]).concat(c):H(K,b,c)}if(b=a.u)a=H(K,"us",[]),a.push(b),(b=/^https:(.*)$/.exec(b))&&a.push("http:"+b[1])}]);
var qd=/^(\/[a-zA-Z0-9_\-]+)+$/,rd=[/\/amp\//,/\/amp$/,/^\/amp$/],sd=/^[a-zA-Z0-9\-_\.,!]+$/,td=/^gapi\.loaded_[0-9]+$/,ud=/^[a-zA-Z0-9,._-]+$/;function vd(a,b,c,d){var e=a.split(";"),f=e.shift(),g=od[f],h=null;g?h=g(e,b,c,d):N("no hint processor for: "+f);h||N("failed to generate load url");b=h;c=b.match(wd);(d=b.match(xd))&&1===d.length&&yd.test(b)&&c&&1===c.length||N("failed sanity: "+a);return h}
function zd(a,b,c,d){function e(a){return encodeURIComponent(a).replace(/%2C/g,",")}
a=Ad(a);td.test(c)||N("invalid_callback");b=Bd(b);d=d&&d.length?Bd(d):null;return[encodeURIComponent(a.$a).replace(/%2C/g,",").replace(/%2F/g,"/"),"/k=",e(a.version),"/m=",e(b),d?"/exm="+e(d):"","/rt=j/sv=1/d=1/ed=1",a.sa?"/am="+e(a.sa):"",a.za?"/rs="+e(a.za):"",a.Da?"/t="+e(a.Da):"","/cb=",e(c)].join("")}
function Ad(a){"/"!==a.charAt(0)&&N("relative path");for(var b=a.substring(1).split("/"),c=[];b.length;){a=b.shift();if(!a.length||0==a.indexOf("."))N("empty/relative directory");else if(0<a.indexOf("=")){b.unshift(a);break}c.push(a)}a={};for(var d=0,e=b.length;d<e;++d){var f=b[d].split("="),g=decodeURIComponent(f[0]),h=decodeURIComponent(f[1]);2==f.length&&g&&h&&(a[g]=a[g]||h)}b="/"+c.join("/");qd.test(b)||N("invalid_prefix");c=0;for(d=rd.length;c<d;++c)rd[c].test(b)&&N("invalid_prefix");c=Cd(a,
"k",!0);d=Cd(a,"am");e=Cd(a,"rs");a=Cd(a,"t");return{$a:b,version:c,sa:d,za:e,Da:a}}
function Bd(a){for(var b=[],c=0,d=a.length;c<d;++c){var e=a[c].replace(/\./g,"_").replace(/-/g,"_");ud.test(e)&&b.push(e)}return b.join(",")}
function Cd(a,b,c){a=a[b];!a&&c&&N("missing: "+b);if(a){if(sd.test(a))return a;N("invalid: "+b)}return null}
var yd=/^https?:\/\/[a-z0-9_.-]+\.google\.com(:\d+)?\/[a-zA-Z0-9_.,!=\-\/]+$/,xd=/\/cb=/g,wd=/\/\//g;function Dd(){var a=Pc();if(!a)throw Error("Bad hint");return a}
od.m=function(a,b,c,d){(a=a[0])||N("missing_hint");return"https://apis.google.com"+zd(a,b,c,d)};
var Ed=decodeURI("%73cript"),Fd=/^[-+_0-9\/A-Za-z]+={0,2}$/;function Gd(a,b){for(var c=[],d=0;d<a.length;++d){var e=a[d];e&&0>mc.call(b,e)&&c.push(e)}return c}
function Hd(){var a=K.nonce;if(void 0!==a)return a&&a===String(a)&&a.match(Fd)?a:K.nonce=null;var b=H(K,"us",[]);if(!b||!b.length)return K.nonce=null;for(var c=ic.getElementsByTagName(Ed),d=0,e=c.length;d<e;++d){var f=c[d];if(f.src&&(a=String(f.getAttribute("nonce")||"")||null)){for(var g=0,h=b.length;g<h&&b[g]!==f.src;++g);if(g!==h&&a&&a===String(a)&&a.match(Fd))return K.nonce=a}}return null}
function Id(a){if("loading"!=ic.readyState)Jd(a);else{var b=Hd(),c="";null!==b&&(c=' nonce="'+b+'"');ic.write("<"+Ed+' src="'+encodeURI(a)+'"'+c+"></"+Ed+">")}}
function Jd(a){var b=ic.createElement(Ed);b.setAttribute("src",a);a=Hd();null!==a&&b.setAttribute("nonce",a);b.async="true";(a=ic.getElementsByTagName(Ed)[0])?a.parentNode.insertBefore(b,a):(ic.head||ic.body||ic.documentElement).appendChild(b)}
function Kd(a,b){var c=b&&b._c;if(c)for(var d=0;d<pd.length;d++){var e=pd[d][0],f=pd[d][1];f&&Object.prototype.hasOwnProperty.call(c,e)&&f(c[e],a,b)}}
function Ld(a,b,c){Md(function(){var c;c=b===Pc()?H(oc,"_",J()):J();c=H(Rc(b),"_",c);a(c)},c)}
function Nd(a,b){var c=b||{};"function"==typeof b&&(c={},c.callback=b);Kd(a,c);var d=a?a.split(":"):[],e=c.h||Dd(),f=H(K,"ah",J());if(f["::"]&&d.length){for(var g=[],h=null;h=d.shift();){var l=h.split("."),l=f[h]||f[l[1]&&"ns:"+l[0]||""]||e,n=g.length&&g[g.length-1]||null,B=n;n&&n.hint==l||(B={hint:l,features:[]},g.push(B));B.features.push(h)}var I=g.length;if(1<I){var fa=c.callback;fa&&(c.callback=function(){0==--I&&fa()})}for(;d=g.shift();)Od(d.features,c,d.hint)}else Od(d||[],c,e)}
function Od(a,b,c){function d(a,b){if(I)return 0;hc.clearTimeout(B);fa.push.apply(fa,aa);var d=((oc||{}).config||{}).update;d?d(f):f&&H(K,"cu",[]).push(f);if(b){jd("me0",a,Z);try{Ld(b,c,n)}finally{jd("me1",a,Z)}}return 1}
a=nc(a)||[];var e=b.callback,f=b.config,g=b.timeout,h=b.ontimeout,l=b.onerror,n=void 0;"function"==typeof l&&(n=l);var B=null,I=!1;if(g&&!h||!g&&h)throw"Timeout requires both the timeout parameter and ontimeout parameter to be set";var l=H(Rc(c),"r",[]).sort(),fa=H(Rc(c),"L",[]).sort(),Z=[].concat(l);0<g&&(B=hc.setTimeout(function(){I=!0;h()},g));
var aa=Gd(a,fa);if(aa.length){var aa=Gd(a,l),ma=H(K,"CP",[]),na=ma.length;ma[na]=function(a){function b(){var a=ma[na+1];a&&a()}
function c(b){ma[na]=null;d(aa,a)&&Qc(function(){e&&e();b()})}
if(!a)return 0;jd("ml1",aa,Z);0<na&&ma[na-1]?ma[na]=function(){c(b)}:c(b)};
if(aa.length){var Jc="loaded_"+K.I++;oc[Jc]=function(a){ma[na](a);oc[Jc]=null};
a=vd(c,aa,"gapi."+Jc,l);l.push.apply(l,aa);jd("ml0",aa,Z);b.sync||hc.___gapisync?Id(a):Jd(a)}else ma[na](kc)}else d(aa)&&e&&e()}
function Md(a,b){if(K.hee&&0<K.hel)try{return a()}catch(c){b&&b(c),K.hel--,Nd("debug_error",function(){try{window.___jsl.hefn(c)}catch(d){throw c;}})}else try{return a()}catch(c){throw b&&b(c),c;
}}
oc.load=function(a,b){return Md(function(){return Nd(a,b)})};var Pd="StopIteration"in m?m.StopIteration:{message:"StopIteration",stack:""};function Qd(){}
Qd.prototype.next=function(){throw Pd;};
Qd.prototype.ca=function(){return this};
function Rd(a){if(a instanceof Qd)return a;if("function"==typeof a.ca)return a.ca(!1);if(ga(a)){var b=0,c=new Qd;c.next=function(){for(;;){if(b>=a.length)throw Pd;if(b in a)return a[b++];b++}};
return c}throw Error("Not implemented");}
function Sd(a,b){if(ga(a))try{D(a,b,void 0)}catch(c){if(c!==Pd)throw c;}else{a=Rd(a);try{for(;;)b.call(void 0,a.next(),void 0,a)}catch(c){if(c!==Pd)throw c;}}}
function Td(a){if(ga(a))return Ya(a);a=Rd(a);var b=[];Sd(a,function(a){b.push(a)});
return b}
;function Ud(a,b){this.b=p(a)?a:0;this.f=p(b)?b:0}
Ud.prototype.equals=function(a){return a instanceof Ud&&(this==a?!0:this&&a?this.b==a.b&&this.f==a.f:!1)};
Ud.prototype.ceil=function(){this.b=Math.ceil(this.b);this.f=Math.ceil(this.f);return this};
Ud.prototype.floor=function(){this.b=Math.floor(this.b);this.f=Math.floor(this.f);return this};
Ud.prototype.round=function(){this.b=Math.round(this.b);this.f=Math.round(this.f);return this};var Vd=z("Opera"),O=z("Trident")||z("MSIE"),Wd=z("Edge"),Xd=z("Gecko")&&!(-1!=y.toLowerCase().indexOf("webkit")&&!z("Edge"))&&!(z("Trident")||z("MSIE"))&&!z("Edge"),Yd=-1!=y.toLowerCase().indexOf("webkit")&&!z("Edge"),Zd=z("Macintosh"),$d=z("Windows"),ae=z("Android"),be=Sc(),ce=z("iPad"),de=z("iPod");function ee(){var a=m.document;return a?a.documentMode:void 0}
var fe;a:{var ge="",he=function(){var a=y;if(Xd)return/rv\:([^\);]+)(\)|;)/.exec(a);if(Wd)return/Edge\/([\d\.]+)/.exec(a);if(O)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(Yd)return/WebKit\/(\S+)/.exec(a);if(Vd)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
he&&(ge=he?he[1]:"");if(O){var ie=ee();if(null!=ie&&ie>parseFloat(ge)){fe=String(ie);break a}}fe=ge}var je=fe,Ec={};
function P(a){return Dc(a,function(){for(var b=0,c=Ea(String(je)).split("."),d=Ea(String(a)).split("."),e=Math.max(c.length,d.length),f=0;0==b&&f<e;f++){var g=c[f]||"",h=d[f]||"";do{g=/(\d*)(\D*)(.*)/.exec(g)||["","","",""];h=/(\d*)(\D*)(.*)/.exec(h)||["","","",""];if(0==g[0].length&&0==h[0].length)break;b=Fa(0==g[1].length?0:parseInt(g[1],10),0==h[1].length?0:parseInt(h[1],10))||Fa(0==g[2].length,0==h[2].length)||Fa(g[2],h[2]);g=g[3];h=h[3]}while(0==b)}return 0<=b})}
var ke;var le=m.document;ke=le&&O?ee()||("CSS1Compat"==le.compatMode?parseInt(je,10):5):void 0;!Xd&&!O||O&&9<=Number(ke)||Xd&&P("1.9.1");O&&P("9");function me(a){this.b=a}
w(me,ld);function ne(){}
w(ne,Fc);ne.prototype.clear=function(){var a=Td(this.ca(!0)),b=this;D(a,function(a){b.remove(a)})};var oe=z("Firefox"),pe=Sc()||z("iPod"),qe=z("iPad"),re=z("Android")&&!(hb()||z("Firefox")||z("Opera")||z("Silk")),se=hb(),te=z("Safari")&&!(hb()||z("Coast")||z("Opera")||z("Edge")||z("Silk")||z("Android"))&&!(Sc()||z("iPad")||z("iPod"));function ue(a){ve();var b=new fb;b.b=a;return b}
var ve=ba;function Q(a,b){this.b=0;this.w=void 0;this.i=this.f=this.g=null;this.j=this.l=!1;if(a!=ba)try{var c=this;a.call(b,function(a){we(c,2,a)},function(a){we(c,3,a)})}catch(d){we(this,3,d)}}
function xe(){this.next=this.context=this.f=this.g=this.b=null;this.i=!1}
xe.prototype.reset=function(){this.context=this.f=this.g=this.b=null;this.i=!1};
var ye=new sa(function(){return new xe},function(a){a.reset()},100);
function ze(a,b,c){var d=ye.get();d.g=a;d.f=b;d.context=c;return d}
function Ae(a){if(a instanceof Q)return a;var b=new Q(ba);we(b,2,a);return b}
function Be(a){return new Q(function(b,c){c(a)})}
Q.prototype.then=function(a,b,c){return Ce(this,ha(a)?a:null,ha(b)?b:null,c)};
Cc(Q);Q.prototype.cancel=function(a){0==this.b&&tb(function(){var b=new De(a);Ee(this,b)},this)};
function Ee(a,b){if(0==a.b)if(a.g){var c=a.g;if(c.f){for(var d=0,e=null,f=null,g=c.f;g&&(g.i||(d++,g.b==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.b&&1==d?Ee(c,b):(f?(d=f,d.next==c.i&&(c.i=d),d.next=d.next.next):Fe(c),Ge(c,e,3,b)))}a.g=null}else we(a,3,b)}
function He(a,b){a.f||2!=a.b&&3!=a.b||Ie(a);a.i?a.i.next=b:a.f=b;a.i=b}
function Ce(a,b,c,d){var e=ze(null,null,null);e.b=new Q(function(a,g){e.g=b?function(c){try{var e=b.call(d,c);a(e)}catch(n){g(n)}}:a;
e.f=c?function(b){try{var e=c.call(d,b);!p(e)&&b instanceof De?g(b):a(e)}catch(n){g(n)}}:g});
e.b.g=a;He(a,e);return e.b}
Q.prototype.C=function(a){this.b=0;we(this,2,a)};
Q.prototype.G=function(a){this.b=0;we(this,3,a)};
function we(a,b,c){if(0==a.b){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.b=1;var d;a:{var e=c,f=a.C,g=a.G;if(e instanceof Q)He(e,ze(f||ba,g||null,a)),d=!0;else{var h;if(e)try{h=!!e.$goog_Thenable}catch(n){h=!1}else h=!1;if(h)e.then(f,g,a),d=!0;else{if(ia(e))try{var l=e.then;if(ha(l)){Je(e,l,f,g,a);d=!0;break a}}catch(n){g.call(a,n);d=!0;break a}d=!1}}}d||(a.w=c,a.b=b,a.g=null,Ie(a),3!=b||c instanceof De||Ke(a,c))}}
function Je(a,b,c,d,e){function f(a){h||(h=!0,d.call(e,a))}
function g(a){h||(h=!0,c.call(e,a))}
var h=!1;try{b.call(a,g,f)}catch(l){f(l)}}
function Ie(a){a.l||(a.l=!0,tb(a.D,a))}
function Fe(a){var b=null;a.f&&(b=a.f,a.f=b.next,b.next=null);a.f||(a.i=null);return b}
Q.prototype.D=function(){for(var a;a=Fe(this);)Ge(this,a,this.b,this.w);this.l=!1};
function Ge(a,b,c,d){if(3==c&&b.f&&!b.i)for(;a&&a.j;a=a.g)a.j=!1;if(b.b)b.b.g=null,Le(b,c,d);else try{b.i?b.g.call(b.context):Le(b,c,d)}catch(e){Me.call(null,e)}ta(ye,b)}
function Le(a,b,c){2==b?a.g.call(a.context,c):a.f&&a.f.call(a.context,c)}
function Ke(a,b){a.j=!0;tb(function(){a.j&&Me.call(null,b)})}
var Me=ib;function De(a){ua.call(this,a)}
w(De,ua);De.prototype.name="cancel";function Ne(a){this.b=a}
w(Ne,ne);k=Ne.prototype;k.isAvailable=function(){if(!this.b)return!1;try{return this.b.setItem("__sak","1"),this.b.removeItem("__sak"),!0}catch(a){return!1}};
k.set=function(a,b){try{this.b.setItem(a,b)}catch(c){if(0==this.b.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
k.get=function(a){a=this.b.getItem(a);if(!t(a)&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
k.remove=function(a){this.b.removeItem(a)};
k.ca=function(a){var b=0,c=this.b,d=new Qd;d.next=function(){if(b>=c.length)throw Pd;var d=c.key(b++);if(a)return d;d=c.getItem(d);if(!t(d))throw"Storage mechanism: Invalid value was encountered";return d};
return d};
k.clear=function(){this.b.clear()};
k.key=function(a){return this.b.key(a)};function Oe(a){var b=document;return t(a)?b.getElementById(a):a}
function Pe(a){if(!a)return null;if(a.firstChild)return a.firstChild;for(;a&&!a.nextSibling;)a=a.parentNode;return a?a.nextSibling:null}
function Qe(a){if(!a)return null;if(!a.previousSibling)return a.parentNode;for(a=a.previousSibling;a&&a.lastChild;)a=a.lastChild;return a}
function Re(a,b){for(var c=0;a;){if(b(a))return a;a=a.parentNode;c++}return null}
;function Se(){var a=null;try{a=window.localStorage||null}catch(b){}this.b=a}
w(Se,Ne);function Te(){var a=null;try{a=window.sessionStorage||null}catch(b){}this.b=a}
w(Te,Ne);function Ue(a){this.b=a||dd();Ve||(Ve=We(this.b))}
var Ve=null;function We(a){return(new Q(function(b){try{var c={gapiHintOverride:a.gapiHintOverride,_c:{jsl:{h:a.gapiHintParams}},callback:b},d=ha(c)?{callback:c}:c||{};d._c&&d._c.jsl&&d._c.jsl.h||Da(d,{_c:{jsl:{h:C("GAPI_HINT_PARAMS",void 0)}}});if(d.gapiHintOverride||C("GAPI_HINT_OVERRIDE")){var e;var f=document.location.href;if(-1!=f.indexOf("?")){var f=(f||"").split("#")[0],g=f.split("?",2);e=md(1<g.length?g[1]:g[0])}else e={};var h=e.gapi_jsh;h&&Da(d,{_c:{jsl:{h:h}}})}Nd("client",d)}catch(l){E(l)}})).then(function(){})}
Ue.prototype.i=function(){var a=r("gapi.config.update");a("googleapis.config/auth/useFirstPartyAuth",!0);var b=this.b.apiaryHost;/^[\s\xa0]*$/.test(null==b?"":String(b))||a("googleapis.config/root",(-1==b.indexOf("://")?"//":"")+b);b=this.b.Fa;/^[\s\xa0]*$/.test(null==b?"":String(b))||a("googleapis.config/root-1p",(-1==b.indexOf("://")?"//":"")+b);a("googleapis.config/sessionIndex",C("SESSION_INDEX"));r("gapi.client.setApiKey")(this.b.innertubeApiKey)};
Ue.prototype.f=function(){return{context:ed(this.b)}};
Ue.prototype.g=function(a,b,c){var d,e=!1;0<c.timeout&&(d=F(function(){e||(e=!0,c.N&&c.N())},c.timeout));
Xe(this,a,b,function(a){if(!e)if(e=!0,d&&window.clearTimeout(d),a)c.F&&c.F(a);else if(c.onError)c.onError()})};
function Xe(a,b,c,d){var e={path:"/youtubei/"+a.b.innertubeApiVersion+"/"+b,headers:{"X-Goog-Visitor-Id":C("VISITOR_DATA")},method:"POST",body:sc(c)},f=u(a.i,a);Ve.then(function(){f();r("gapi.client.request")(e).execute(d||ba)})}
;var Ye=r("yt.dom.getNextId_");if(!Ye){Ye=function(){return++Ze};
q("yt.dom.getNextId_",Ye,void 0);var Ze=0};var $e={log_event:"events",log_interaction:"interactions"},af={},bf={},cf=0,za=r("yt.logging.transport.logsQueue_")||{};q("yt.logging.transport.logsQueue_",za,void 0);function df(a,b){za[a.endpoint]=za[a.endpoint]||[];var c=za[a.endpoint];c.push(a.wa);bf[a.endpoint]=b;c.length>=(Number(M("web_logging_max_batch")||0)||20)?ef():ff()}
function ef(){window.clearTimeout(cf);if(!ya()){for(var a in za){var b=af[a];if(!b){b=bf[a];if(!b)continue;b=new b;af[a]=b}var c=b.f();c.requestTimeMs=Math.round(Na());c[$e[a]]=za[a];b.g(a,c,{});delete za[a]}ya()||ff()}}
function ff(){window.clearTimeout(cf);cf=F(ef,C("LOGGING_BATCH_TIMEOUT",1E4))}
;function gf(){if(!hf&&!jf||!window.JSON)return null;var a;try{a=hf.get("yt-player-two-stage-token")}catch(b){}if(!t(a))try{a=jf.get("yt-player-two-stage-token")}catch(b){}if(!t(a))return null;try{a=JSON.parse(a,void 0)}catch(b){}return a}
var jf,kf=new Se;jf=kf.isAvailable()?new me(kf):null;var hf,lf=new Te;hf=lf.isAvailable()?new me(lf):null;var xa=r("yt.events.listeners_")||{};q("yt.events.listeners_",xa,void 0);var mf=r("yt.events.counter_")||{count:0};q("yt.events.counter_",mf,void 0);function nf(a,b,c){a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return wa(function(d){return d[0]==a&&d[1]==b&&d[2]==c&&0==d[4]})}
function of(a,b,c){if(!a||!a.addEventListener&&!a.attachEvent)return"";var d=nf(a,b,c);if(d)return d;var d=++mf.count+"",e=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document),f;f=e?function(d){d=new Gc(d);if(!Re(d.relatedTarget,function(b){return b==a}))return d.currentTarget=a,d.type=b,c.call(a,d)}:function(b){b=new Gc(b);
b.currentTarget=a;return c.call(a,b)};
f=eb(f);a.addEventListener?("mouseenter"==b&&e?b="mouseover":"mouseleave"==b&&e?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),a.addEventListener(b,f,!1)):a.attachEvent("on"+b,f);xa[d]=[a,b,c,f,!1];return d}
function pf(a){a&&("string"==typeof a&&(a=[a]),D(a,function(a){if(a in xa){var b=xa[a],d=b[0],e=b[1],f=b[3],b=b[4];d.removeEventListener?d.removeEventListener(e,f,b):d.detachEvent&&d.detachEvent("on"+e,f);delete xa[a]}}))}
;function qf(a,b,c,d,e,f,g){function h(){4==(l&&"readyState"in l?l.readyState:0)&&b&&eb(b)(l)}
var l=Mc&&Mc();if(!("open"in l))return null;"onloadend"in l?l.addEventListener("loadend",h,!1):l.onreadystatechange=h;c=(c||"GET").toUpperCase();d=d||"";l.open(c,a,!0);f&&(l.responseType=f);g&&(l.withCredentials=!0);f="POST"==c;if(e=rf(a,e))for(var n in e)l.setRequestHeader(n,e[n]),"content-type"==n.toLowerCase()&&(f=!1);f&&l.setRequestHeader("Content-Type","application/x-www-form-urlencoded");l.send(d);return l}
function rf(a,b){b=b||{};var c;c||(c=window.location.href);var d=L(a)[1]||null,e=Xc(L(a)[3]||null);d&&e?(d=c,c=L(a),d=L(d),c=c[3]==d[3]&&c[1]==d[1]&&c[4]==d[4]):c=e?Xc(L(c)[3]||null)==e&&(Number(L(c)[4]||null)||null)==(Number(L(a)[4]||null)||null):!0;for(var f in sf){if((e=d=C(sf[f]))&&!(e=c)){var e=f,g=C("CORS_HEADER_WHITELIST")||{},h=Xc(L(a)[3]||null);e=h?(g=g[h])?0<=Ua(g,e):!1:!0}e&&(b[f]=d)}return b}
function tf(a,b){b.method="POST";b.A||(b.A={});uf(a,b)}
function vf(a,b){var c=C("XSRF_FIELD_NAME",void 0),d;b.headers&&(d=b.headers["Content-Type"]);return!b.qb&&(!Xc(L(a)[3]||null)||b.withCredentials||Xc(L(a)[3]||null)==document.location.hostname)&&"POST"==b.method&&(!d||"application/x-www-form-urlencoded"==d)&&!(b.A&&b.A[c])}
function uf(a,b){var c=b.format||"JSON";b.Na&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var d=C("XSRF_FIELD_NAME",void 0),e=C("XSRF_TOKEN",void 0),f=b.oa;f&&(f[d]&&delete f[d],a=nd(a,f||{}));var g=b.postBody||"",f=b.A;vf(a,b)&&(f||(f={}),f[d]=e);f&&t(g)&&(d=md(g),Da(d,f),g=b.xa&&"JSON"==b.xa?JSON.stringify(d):bd(d));var h=!1,l,n=qf(a,function(a){if(!h){h=!0;l&&window.clearTimeout(l);var d=Nc(a),e=null;if(d||400<=a.status&&
500>a.status)e=wf(c,a,b.pb);if(d)a:if(204==a.status)d=!0;else{switch(c){case "XML":d=0==parseInt(e&&e.return_code,10);break a;case "RAW":d=!0;break a}d=!!e}var e=e||{},f=b.context||m;d?b.F&&b.F.call(f,a,e):b.onError&&b.onError.call(f,a,e);b.na&&b.na.call(f,a,e)}},b.method,g,b.headers,b.responseType,b.withCredentials);
b.N&&0<b.timeout&&(l=F(function(){h||(h=!0,n.abort(),window.clearTimeout(l),b.N.call(b.context||m,n))},b.timeout))}
function wf(a,b,c){var d=null;switch(a){case "JSON":a=b.responseText;b=b.getResponseHeader("Content-Type")||"";a&&0<=b.indexOf("json")&&(d=rc(a));break;case "XML":if(b=(b=b.responseXML)?xf(b):null)d={},D(b.getElementsByTagName("*"),function(a){d[a.tagName]=yf(a)})}c&&zf(d);
return d}
function zf(a){if(ia(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);if(c){c=b;var d;d=Ab(a[b]);a[c]=d}else zf(a[b])}}
function xf(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function yf(a){var b="";D(a.childNodes,function(a){b+=a.nodeValue});
return b}
var sf={"X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL","X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"};function Af(a,b,c,d,e){c={name:c||C("INNERTUBE_CONTEXT_CLIENT_NAME",1),version:d||C("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0)};e=window&&window.yterr||e||!1;if(a&&e&&!(5<=Bf)){e=a.stacktrace;d=a.columnNumber;var f=r("window.location.href");if(t(a))a={message:a,name:"Unknown error",lineNumber:"Not available",fileName:f,stack:"Not available"};else{var g,h,l=!1;try{g=a.lineNumber||a.line||"Not available"}catch(I){g="Not available",l=!0}try{h=a.fileName||a.filename||a.sourceURL||m.$googDebugFname||f}catch(I){h=
"Not available",l=!0}a=!l&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name?a:{message:a.message||"Not available",name:a.name||"UnknownError",lineNumber:g,fileName:h,stack:a.stack||"Not available"}}e=e||a.stack;g=a.lineNumber.toString();isNaN(g)||isNaN(d)||(g=g+":"+d);if(!(Cf[a.message]||0<=e.indexOf("/YouTubeCenter.js")||0<=e.indexOf("/mytube.js"))){b={oa:{a:"logerror",t:"jserror",type:a.name,msg:a.message.substr(0,1E3),line:g,level:b||"ERROR"},A:{url:C("PAGE_NAME",window.location.href),file:a.fileName},
method:"POST"};e&&(b.A.stack=e);for(var n in c)b.A["client."+n]=c[n];if(n=C("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS",void 0))for(var B in n)b.A[B]=n[B];uf("/error_204",b);Cf[a.message]=!0;Bf++}}}
var Cf={},Bf=0;function Df(){this.b=dd()}
Df.prototype.f=function(){return{context:ed(this.b)}};
Df.prototype.g=function(a,b,c){b={headers:{"Content-Type":"application/json","X-Goog-Visitor-Id":C("VISITOR_DATA")},A:b,xa:"JSON",N:c.N,F:c.F,onError:c.onError,timeout:c.timeout,withCredentials:!0};a:{c=[];var d=fc(String(m.location.href)),e=m.__OVERRIDE_SID;null==e&&(e=(new zc(document)).get("SID"));if(e&&(d=(e=0==d.indexOf("https:")||0==d.indexOf("chrome-extension:"))?m.__SAPISID:m.__APISID,null==d&&(d=(new zc(document)).get(e?"SAPISID":"APISID")),d)){var e=e?"SAPISIDHASH":"APISIDHASH",f=String(m.location.href);
c=f&&d&&e?[e,fd(fc(f),d,c||null)].join(" "):null;break a}c=null}c&&(b.headers.Authorization=c,b.headers["X-Goog-AuthUser"]=C("SESSION_INDEX",0));tf("//"+this.b.mb+("/youtubei/"+this.b.innertubeApiVersion+"/"+a)+"?alt=json&key="+this.b.innertubeApiKey,b)};function Ef(){if(null==r("_lact",window)){var a=parseInt(C("LACT"),10),a=isFinite(a)?v()-Math.max(a,0):-1;q("_lact",a,window);-1==a&&Ff();of(document,"keydown",Ff);of(document,"keyup",Ff);of(document,"mousedown",Ff);of(document,"mouseup",Ff);Kb("page-mouse",Ff);Kb("page-scroll",Ff);Kb("page-resize",Ff)}}
function Ff(){null==r("_lact",window)&&(Ef(),r("_lact",window));var a=v();q("_lact",a,window);Nb("USER_ACTIVE")}
function Gf(){var a=r("_lact",window);return null==a?-1:Math.max(v()-a,0)}
;function Hf(a,b,c,d){var e={};e.eventTimeMs=Math.round(d||Na());e[a]=b;M("web_gel_lact")&&(e.context={lastActivityMs:Gf()});df({endpoint:"log_event",wa:e},c)}
;function If(a,b,c){Jf(Kf(),{attachChild:{csn:a,parentVisualElement:Lc(b),visualElements:[Lc(c)]}},void 0)}
function Lf(a,b){var c=Kf(),d=Va(b,function(a){return Lc(a)});
Jf(c,{visibilityUpdate:{csn:a,visualElements:d}})}
function Jf(a,b,c){b.eventTimeMs=Math.round(Na());b.lactMs=Gf();c&&(b.clientData=Mf(c));df({endpoint:"log_interaction",wa:b},a)}
function Mf(a){var b={};a.analyticsChannelData&&(b.analyticsDatas=Va(a.analyticsChannelData,function(a){return{tabName:a.tabName,cardName:a.cardName,isChannelScreen:a.isChannelScreen,insightId:a.insightId,externalChannelId:a.externalChannelId,externalContentOwnerId:a.externalContentOwnerId}}));
return{playbackData:{clientPlaybackNonce:a.clientPlaybackNonce},analyticsChannelData:b,externalLinkData:a.externalLinkData}}
;function Kf(){return M("enable_youtubei_innertube")?Df:Ue}
;var Nf=r("yt.logging.latency.usageStats_")||{};q("yt.logging.latency.usageStats_",Nf,void 0);var Of=0;function Pf(a){Nf[a]=Nf[a]||{count:0};var b=Nf[a];b.count++;b.time=Na();Of||(Of=rb(Qf,0,5E3));return 10<b.count?(11==b.count&&Af(Error("CSI data exceeded logging limit with key: "+a)),!0):!1}
function Qf(){var a=Na(),b;for(b in Nf)6E4<a-Nf[b].time&&delete Nf[b];Of=0}
;function Rf(){var a=C("ROOT_VE_TYPE",void 0);return a?new Ic(void 0,a,void 0):null}
function Sf(){var a=C("client-screen-nonce",void 0);a||(a=C("EVENT_ID",void 0));return a}
;var Tf=window.yt&&window.yt.msgs_||window.ytcfg&&window.ytcfg.msgs||{};q("yt.msgs_",Tf,void 0);var Uf=v().toString();function Vf(a,b,c){b=void 0===b?{}:b;c=void 0===c?!1:c;var d=C("EVENT_ID");d&&(b.ei||(b.ei=d));if(b){var d=a,e=C("VALID_SESSION_TEMPDATA_DOMAINS",[]),f=Xc(L(window.location.href)[3]||null);f&&e.push(f);f=Xc(L(d)[3]||null);if(0<=Ua(e,f)||!f&&0==d.lastIndexOf("/",0))if(M("autoescape_tempdata_url")&&(e=document.createElement("a"),Bb(e,d),d=e.href),d){var f=L(d),d=f[5],e=f[6],f=f[7],g="";d&&(g+=d);e&&(g+="?"+e);f&&(g+="#"+f);d=g;e=d.indexOf("#");if(d=0>e?d:d.substr(0,e)){if(b.itct||b.ved)b.csn=b.csn||
Sf();d="ST-"+Ga(d).toString(36);e=b?bd(b):"";Bc.set(""+d,e,5,"/","youtube.com");b&&(b=b.itct||b.ved,d=r("yt.logging.screen.storeParentElement"),b&&d&&d(new Ic(b)))}}}if(c)return!1;if((window.ytspf||{}).enabled)spf.navigate(a);else{var h,l;h=void 0===h?{}:h;l=void 0===l?"":l;c=window.location;a=Yc(ad([a],h))+l;a=a instanceof lb?a:pb(a);c.href=nb(a)}return!0}
;function Wf(a){a=a||{};this.url=a.url||"";this.urlV9As2=a.url_v9as2||"";this.args=a.args||Ba(Xf);this.assets=a.assets||{};this.attrs=a.attrs||Ba(Yf);this.params=a.params||Ba(Zf);this.minVersion=a.min_version||"8.0.0";this.fallback=a.fallback||null;this.fallbackMessage=a.fallbackMessage||null;this.html5=!!a.html5;this.disable=a.disable||{};this.loaded=!!a.loaded;this.messages=a.messages||{}}
var Xf={enablejsapi:1},Yf={},Zf={allowscriptaccess:"always",allowfullscreen:"true",bgcolor:"#000000"};function $f(a){a instanceof Wf||(a=new Wf(a));return a}
function ag(a){var b=new Wf,c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];b[c]="object"==da(d)?Ba(d):d}return b}
;function bg(){this.g=this.f=this.b=0;this.i="";var a=r("window.navigator.plugins"),b=r("window.navigator.mimeTypes"),a=a&&a["Shockwave Flash"],b=b&&b["application/x-shockwave-flash"],b=a&&b&&b.enabledPlugin&&a.description||"";if(a=b){var c=a.indexOf("Shockwave Flash");0<=c&&(a=a.substr(c+15));for(var c=a.split(" "),d="",a="",e=0,f=c.length;e<f;e++)if(d)if(a)break;else a=c[e];else d=c[e];d=d.split(".");c=parseInt(d[0],10)||0;d=parseInt(d[1],10)||0;e=0;if("r"==a.charAt(0)||"d"==a.charAt(0))e=parseInt(a.substr(1),
10)||0;a=[c,d,e]}else a=[0,0,0];this.i=b;b=a;this.b=b[0];this.f=b[1];this.g=b[2];if(0>=this.b){var g,h,l,n;if(Oa)try{g=new ActiveXObject("ShockwaveFlash.ShockwaveFlash")}catch(B){g=null}else l=document.body,n=document.createElement("object"),n.setAttribute("type","application/x-shockwave-flash"),g=l.appendChild(n);if(g&&"GetVariable"in g)try{h=g.GetVariable("$version")}catch(B){h=""}l&&n&&l.removeChild(n);(g=h||"")?(g=g.split(" ")[1].split(","),g=[parseInt(g[0],10)||0,parseInt(g[1],10)||0,parseInt(g[2],
10)||0]):g=[0,0,0];this.b=g[0];this.f=g[1];this.g=g[2]}}
ca(bg);function cg(a,b,c,d){b="string"==typeof b?b.split("."):[b,c,d];b[0]=parseInt(b[0],10)||0;b[1]=parseInt(b[1],10)||0;b[2]=parseInt(b[2],10)||0;return a.b>b[0]||a.b==b[0]&&a.f>b[1]||a.b==b[0]&&a.f==b[1]&&a.g>=b[2]}
;function dg(){x.call(this);this.b=new G;Pa(this,qa(Qa,this.b))}
w(dg,x);dg.prototype.subscribe=function(a,b,c){return this.f?0:this.b.subscribe(a,b,c)};
dg.prototype.L=function(a){return this.f?!1:this.b.L(a)};
dg.prototype.j=function(a,b){this.f||this.b.W.apply(this.b,arguments)};function eg(a){"number"==typeof a&&(a=Math.round(a)+"px");return a}
;function fg(a,b,c,d){x.call(this);this.i=b||null;this.D="*";this.j=c||null;this.b=null;this.channel=d||null;this.J=!!a;this.C=u(this.K,this);window.addEventListener("message",this.C)}
w(fg,x);fg.prototype.K=function(a){if(!("*"!=this.j&&a.origin!=this.j||this.i&&a.source!=this.i)&&t(a.data)){var b;try{b=qc(a.data)}catch(c){return}if(!(null==b||this.J&&(this.b&&this.b!=b.id||this.channel&&this.channel!=b.channel))&&b)switch(b.event){case "listening":"null"!=a.origin?this.j=this.D=a.origin:E(Error("MessageEvent origin is null"),"WARNING");this.i=a.source;this.b=b.id;this.g&&(this.g(),this.g=null);break;case "command":this.l&&(this.w&&!(0<=Ua(this.w,b.func))||this.l(b.func,b.args))}}};
fg.prototype.sendMessage=function(a,b){var c=b||this.i;if(c){this.b&&(a.id=this.b);this.channel&&(a.channel=this.channel);try{var d=sc(a);c.postMessage(d,this.D)}catch(e){E(e,"WARNING")}}};
fg.prototype.o=function(){window.removeEventListener("message",this.C);fg.B.o.call(this)};function gg(a,b,c){fg.call(this,a,b,c||C("POST_MESSAGE_ORIGIN",void 0)||window.document.location.protocol+"//"+window.document.location.hostname,"widget");this.w=this.g=this.l=null}
w(gg,fg);function hg(a){if(window.spf){var b=a.match(ig);spf.style.load(a,b?b[1]:"",void 0)}else jg(a)}
function jg(a){var b=kg(a),c=document.getElementById(b),d=c&&Ka(c,"loaded");d||c&&!d||(c=lg(a,b,function(){Ka(c,"loaded")||(Ia(c),Nb(b),F(qa(Pb,b),0))}))}
function lg(a,b,c){var d=document.createElement("link");d.id=b;d.onload=function(){c&&setTimeout(c,0)};
a=ue(a);Cb(d,a);(document.getElementsByTagName("head")[0]||document.body).appendChild(d);return d}
function kg(a){var b=document.createElement("a");Bb(b,a);a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"css-"+Ga(a)}
var ig=/cssbin\/(?:debug-)?([a-zA-Z0-9_-]+?)(?:-2x|-web|-rtl|-vfl|.css)/;var mg={},ng=0;function og(a,b){a&&(C("USE_NET_AJAX_FOR_PING_TRANSPORT",!1)?qf(a,b):pg(a,b))}
function pg(a,b){var c=new Image,d=""+ng++;mg[d]=c;c.onload=c.onerror=function(){b&&mg[d]&&b();delete mg[d]};
c.src=a}
;function qg(){var a=Ba(rg);return new Q(function(b,c){a.F=function(a){Nc(a)?b(a):c(new sg("Request failed, status="+a.status,"net.badstatus"))};
a.onError=function(){c(new sg("Unknown request error","net.unknown"))};
a.N=function(){c(new sg("Request timed out","net.timeout"))};
uf("//googleads.g.doubleclick.net/pagead/id",a)})}
function sg(a,b){ua.call(this,a+", errorCode="+b);this.errorCode=b}
w(sg,ua);sg.prototype.name="PromiseAjaxError";var tg;var ug=y,ug=ug.toLowerCase();if(-1!=ug.indexOf("android")){var vg=ug.match(/android\D*(\d\.\d)[^\;|\)]*[\;\)]/);if(vg)tg=Number(vg[1]);else{var wg={cupcake:1.5,donut:1.6,eclair:2,froyo:2.2,gingerbread:2.3,honeycomb:3,"ice cream sandwich":4,jellybean:4.1,kitkat:4.4,lollipop:5.1,marshmallow:6,nougat:7.1},xg=[],yg=0,zg;for(zg in wg)xg[yg++]=zg;var Ag=ug.match("("+xg.join("|")+")");tg=Ag?wg[Ag[0]]:0}}else tg=void 0;var Bg=y,Cg=Bg.match(/\((BB10|PlayBook|BlackBerry);/);!Cg||2>Cg.length||Bg.match(/Version\/(\d+\.\d+)/);y.match(/Mozilla\/[\d\.]+ \(Mobile;.* rv:([\d\.]+)\) Gecko\/[\d\.]+ Firefox\/[\d\.]+/);var Dg;var Eg=y,Fg=Eg.match(/\((iPad|iPhone|iPod)( Simulator)?;/);if(!Fg||2>Fg.length)Dg=void 0;else{var Gg=Eg.match(/\((iPad|iPhone|iPod)( Simulator)?; (U; )?CPU (iPhone )?OS (\d+_\d)[_ ]/);Dg=Gg&&6==Gg.length?Number(Gg[5].replace("_",".")):0}0<=Dg&&0<=y.search("Safari")&&y.search("Version");var Hg=['video/mp4; codecs="avc1.42001E, mp4a.40.2"','video/webm; codecs="vp8.0, vorbis"'],Ig=['audio/mp4; codecs="mp4a.40.2"'];O&&P("9");!Yd||P("528");Xd&&P("1.9b")||O&&P("8")||Vd&&P("9.5")||Yd&&P("528");Xd&&!P("8")||O&&P("9");function Jg(a){x.call(this);this.b=[];this.g=a||this}
w(Jg,x);function Kg(a,b,c,d){d=eb(u(d,a.g));d={target:b,name:c,ha:d};b.addEventListener(c,d.ha,void 0);a.b.push(d)}
function Lg(a){for(;a.b.length;){var b=a.b.pop();b.target.removeEventListener(b.name,b.ha)}}
Jg.prototype.o=function(){Lg(this);Jg.B.o.call(this)};function R(a,b){this.version=a;this.args=b}
function Mg(a){if(!a.Ba){var b={};a.call(b);a.Ba=b.version}return a.Ba}
function Ng(a,b){function c(){a.apply(this,b.args)}
if(!b.args||!b.version)throw Error("yt.pubsub2.Data.deserialize(): serializedData is incomplete.");var d;try{d=Mg(a)}catch(e){}if(!d||b.version!=d)throw Error("yt.pubsub2.Data.deserialize(): serializedData version is incompatible.");c.prototype=a.prototype;try{return new c}catch(e){throw e.message="yt.pubsub2.Data.deserialize(): "+e.message,e;}}
function S(a,b){this.topic=a;this.b=b}
S.prototype.toString=function(){return this.topic};var Og=window.performance||window.mozPerformance||window.msPerformance||window.webkitPerformance||{};function Pg(a){R.call(this,1,arguments)}
w(Pg,R);var Qg=new S("timing-sent",Pg);var Rg=r("yt.pubsub2.instance_")||new G;G.prototype.subscribe=G.prototype.subscribe;G.prototype.unsubscribeByKey=G.prototype.L;G.prototype.publish=G.prototype.W;G.prototype.clear=G.prototype.clear;q("yt.pubsub2.instance_",Rg,void 0);var Sg=r("yt.pubsub2.subscribedKeys_")||{};q("yt.pubsub2.subscribedKeys_",Sg,void 0);var Tg=r("yt.pubsub2.topicToKeys_")||{};q("yt.pubsub2.topicToKeys_",Tg,void 0);var Ug=r("yt.pubsub2.isAsync_")||{};q("yt.pubsub2.isAsync_",Ug,void 0);q("yt.pubsub2.skipSubKey_",null,void 0);
function T(a,b){var c=Vg();c&&c.publish.call(c,a.toString(),a,b)}
function U(a,b){var c=Vg();if(!c)return 0;var d=c.subscribe(a.toString(),function(c,f){if(!window.yt.pubsub2.skipSubKey_||window.yt.pubsub2.skipSubKey_!=d){var e=function(){if(Sg[d])try{if(f&&a instanceof S&&a!=c)try{f=Ng(a.b,f)}catch(h){throw h.message="yt.pubsub2 cross-binary conversion error for "+a.toString()+": "+h.message,h;}b.call(window,f)}catch(h){E(h)}};
Ug[a.toString()]?r("yt.scheduler.instance")?sb(e):F(e,0):e()}});
Sg[d]=!0;Tg[a.toString()]||(Tg[a.toString()]=[]);Tg[a.toString()].push(d);return d}
function Wg(a){var b=Vg();b&&("number"==typeof a&&(a=[a]),D(a,function(a){b.unsubscribeByKey(a);delete Sg[a]}))}
function Vg(){return r("yt.pubsub2.instance_")}
;function Xg(a,b,c){x.call(this);this.b=a;this.j=b||0;this.g=c;this.i=u(this.Ia,this)}
w(Xg,x);k=Xg.prototype;k.V=0;k.o=function(){Xg.B.o.call(this);this.stop();delete this.b;delete this.g};
k.start=function(a){this.stop();var b=this.i;a=p(a)?a:this.j;if(!ha(b))if(b&&"function"==typeof b.handleEvent)b=u(b.handleEvent,b);else throw Error("Invalid listener argument");this.V=2147483647<Number(a)?-1:m.setTimeout(b,a||0)};
k.stop=function(){this.isActive()&&m.clearTimeout(this.V);this.V=0};
k.isActive=function(){return 0!=this.V};
k.Ia=function(){this.V=0;this.b&&this.b.call(this.g)};var Yg={vc:!0},Zg={ad_at:"adType",cpn:"clientPlaybackNonce",csn:"clientScreenNonce",is_nav:"isNavigation",yt_lt:"loadType",yt_ad:"isMonetized",yt_ad_pr:"prerollAllowed",yt_red:"isRedSubscriber",yt_vis:"isVisible",docid:"videoId",plid:"videoId"},$g="ap c cver ei yt_fss yt_li".split(" "),ah=["isNavigation","isMonetized","prerollAllowed","isRedSubscriber","isVisible"],bh=u(Og.clearResourceTimings||Og.webkitClearResourceTimings||Og.mozClearResourceTimings||Og.msClearResourceTimings||Og.oClearResourceTimings||
ba,Og);
function ch(a,b){if(!b&&"_"!=a[0]){var c=a;Og.mark&&(0==c.lastIndexOf("mark_",0)||(c="mark_"+c),Og.mark(c))}var c=dh(),d=b||Na();c[a]&&(c["_"+a]=c["_"+a]||[c[a]],c["_"+a].push(d));c[a]=d;(eh()["tick_"+a]=b)||Na();M("csi_on_gel")?(c=fh(),"_start"==a?Pf("baseline_"+c)||Hf("latencyActionBaselined",{clientActionNonce:c},Df,b):Pf("tick_"+a+"_"+c)||Hf("latencyActionTicked",{tickName:a,clientActionNonce:c},Df,b),c=!0):c=!1;if(c=!c)c=!r("yt.timing.pingSent_");if(c&&(d=C("TIMING_ACTION",void 0),c=dh(),r("yt.timing.ready_")&&
d&&c._start&&gh())){var d=!0,e=C("TIMING_WAIT",[]);if(e.length)for(var f=0,g=e.length;f<g;++f)if(!(e[f]in c)){d=!1;break}d&&hh()}}
function ih(){var a=jh().info.yt_lt="hot_bg";eh().info_yt_lt=a;if(M("csi_on_gel"))if("yt_lt"in Zg){var b={},c=Zg.yt_lt;0<=Ua(ah,c)&&(a=!!a);b[c]=a;a=fh();c=Object.keys(b).join("");Pf("info_"+c+"_"+a)||(b.clientActionNonce=a,Hf("latencyActionInfo",b,Df))}else"yt_lt"in $g||E(Error("Unknown label yt_lt logged with GEL CSI."))}
function gh(){var a=dh();if(a.aft)return a.aft;for(var b=C("TIMING_AFT_KEYS",["ol"]),c=b.length,d=0;d<c;d++){var e=a[b[d]];if(e)return e}return NaN}
function hh(){if(!M("csi_on_gel")){var a=dh(),b=jh().info,c=a._start,d;for(d in a)if(0==d.lastIndexOf("_",0)&&ea(a[d])){var e=d.slice(1);if(e in Yg){var f=Va(a[d],function(a){return Math.round(a-c)});
b["all_"+e]=f.join()}delete a[d]}e=!!b.ap;if(f=r("yt.timing.reportbuilder_")){if(f=f(a,b,void 0))kh(f,e),lh(),bh(),mh(!1,void 0),C("TIMING_ACTION")&&A("PREVIOUS_ACTION",C("TIMING_ACTION")),A("TIMING_ACTION","")}else{var g=C("CSI_SERVICE_NAME","youtube"),f={v:2,s:g,action:C("TIMING_ACTION",void 0)},h=b.srt;void 0!==a.srt&&delete b.srt;if(b.h5jse){var l=window.location.protocol+r("ytplayer.config.assets.js");(l=Og.getEntriesByName?Og.getEntriesByName(l)[0]:null)?b.h5jse=Math.round(b.h5jse-l.responseEnd):
delete b.h5jse}a.aft=gh();nh()&&"youtube"==g&&(ih(),g=a.vc,l=a.pbs,delete a.aft,b.aft=Math.round(l-g));for(var n in b)"_"!=n.charAt(0)&&(f[n]=b[n]);a.ps=Na();b={};n=[];for(d in a)"_"!=d.charAt(0)&&(g=Math.round(a[d]-c),b[d]=g,n.push(d+"."+g));f.rt=n.join(",");(a=r("ytdebug.logTiming"))&&a(f,b);kh(f,e,void 0);T(Qg,new Pg(b.aft+(h||0)))}}}
function kh(a,b,c){if(M("debug_csi_data")){var d=r("yt.timing.csiData");d||(d=[],q("yt.timing.csiData",d,void 0));d.push({page:location.href,time:new Date,args:a})}var d="",e;for(e in a)d+="&"+e+"="+a[e];a="/csi_204?"+d.substring(1);if(window.navigator&&window.navigator.sendBeacon&&b)try{window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,"")||og(a,void 0)}catch(f){og(a,void 0)}else og(a);mh(!0,c)}
function fh(){var a=jh().nonce;if(!a){var b;a:{if(window.crypto&&window.crypto.getRandomValues)try{var c=Array(16),d=new Uint8Array(16);window.crypto.getRandomValues(d);for(a=0;a<c.length;a++)c[a]=d[a];b=c;break a}catch(e){}b=Array(16);for(c=0;16>c;c++){d=v();for(a=0;a<d%23;a++)b[c]=Math.random();b[c]=Math.floor(256*Math.random())}if(Uf)for(c=1,d=0;d<Uf.length;d++)b[c%16]=b[c%16]^b[(c-1)%16]/4^Uf.charCodeAt(d),c++}c=[];for(d=0;d<b.length;d++)c.push("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-_".charAt(b[d]&
63));a=c.join("");jh().nonce=a}return a}
function dh(){return jh().tick}
function eh(){var a=jh();"gel"in a||(a.gel={});return a.gel}
function jh(){return r("ytcsi.data_")||lh()}
function lh(){var a={tick:{},info:{}};q("ytcsi.data_",a,void 0);return a}
function mh(a,b){q("yt.timing."+(b||"")+"pingSent_",a,void 0)}
function nh(){var a=dh(),b=a.pbr,c=a.vc,a=a.pbs;return b&&c&&a&&b<c&&c<a&&1==jh().info.yt_pvis}
;new Xg(oh,1E3);function oh(){ch("vptl",0);ch("vpl",0)}
;var ph={"api.invalidparam":2,auth:150,"drm.auth":150,"heartbeat.net":150,"heartbeat.servererror":150,"heartbeat.stop":150,"html5.unsupportedads":5,"fmt.noneavailable":5,"fmt.decode":5,"fmt.unplayable":5,"html5.missingapi":5,"html5.unsupportedlive":5,"drm.unavailable":5};function qh(a,b){x.call(this);this.w=this.l=a;this.T=b;this.C=!1;this.g={};this.$=this.S=null;this.U=new G;Pa(this,qa(Qa,this.U));this.j={};this.J=this.aa=this.i=this.ga=this.b=null;this.X=!1;this.K=this.D=this.P=this.R=null;this.ba={};this.Ea=["onReady"];this.Y=new Jg(this);Pa(this,qa(Qa,this.Y));this.ea=null;this.qa=NaN;this.Z={};rh(this);this.H("onDetailedError",u(this.Ua,this));this.H("onTabOrderChange",u(this.Ga,this));this.H("onTabAnnounce",u(this.ra,this));this.H("WATCH_LATER_VIDEO_ADDED",
u(this.Va,this));this.H("WATCH_LATER_VIDEO_REMOVED",u(this.Wa,this));oe||(this.H("onMouseWheelCapture",u(this.Sa,this)),this.H("onMouseWheelRelease",u(this.Ta,this)));this.H("onAdAnnounce",u(this.ra,this));this.M=new Jg(this);Pa(this,qa(Qa,this.M));this.fa=!1;this.da=null}
w(qh,x);var sh=["drm.unavailable","fmt.noneavailable","html5.missingapi","html5.unsupportedads","html5.unsupportedlive"];k=qh.prototype;k.pa=function(a,b){this.f||(th(this,a),uh(this,b),this.C&&vh(this))};
function th(a,b){a.ga=b;a.b=ag(b);a.i=a.b.attrs.id||a.i;"video-player"==a.i&&(a.i=a.T,a.b.attrs.id=a.T);a.w.id==a.i&&(a.i+="-player",a.b.attrs.id=a.i);a.b.args.enablejsapi="1";a.b.args.playerapiid=a.T;a.aa||(a.aa=wh(a,a.b.args.jsapicallback||"onYouTubePlayerReady"));a.b.args.jsapicallback=null;var c=a.b.attrs.width;c&&(a.w.style.width=eg(Number(c)||c));if(c=a.b.attrs.height)a.w.style.height=eg(Number(c)||c)}
k.Ka=function(){return this.ga};
function vh(a){a.b.loaded||(a.b.loaded=!0,"0"!=a.b.args.autoplay?a.g.loadVideoByPlayerVars(a.b.args):a.g.cueVideoByPlayerVars(a.b.args))}
function xh(a){if(!p(a.b.disable.flash)){var b=a.b.disable,c;c=cg(bg.getInstance(),a.b.minVersion);b.flash=!c}return!a.b.disable.flash}
function yh(a,b){if((!b||(5!=(ph[b.errorCode]||5)?0:-1!=sh.indexOf(b.errorCode)))&&xh(a)){var c=zh(a);c&&c.stopVideo&&c.stopVideo();var d=a.b;c&&c.getUpdatedConfigurationData&&(c=c.getUpdatedConfigurationData(),d=$f(c));d.args.autoplay=1;d.args.html5_unavailable="1";th(a,d);uh(a,"flash")}}
function uh(a,b){if(!a.f){if(!b){var c;if(!(c=!a.b.html5&&xh(a))){if(!p(a.b.disable.html5)){var d;c=!0;void 0!=a.b.args.deviceHasDisplay&&(c=a.b.args.deviceHasDisplay);if(2.2==tg)d=!0;else{a:{var e=c;c=r("yt.player.utils.videoElement_");c||(c=document.createElement("VIDEO"),q("yt.player.utils.videoElement_",c,void 0));try{if(c.canPlayType)for(var e=e?Hg:Ig,f=0;f<e.length;f++)if(c.canPlayType(e[f])){d=null;break a}d="fmt.noneavailable"}catch(g){d="html5.missingapi"}}d=!d}d&&(d=Ah(a)||a.b.assets.js);
a.b.disable.html5=!d;d||(a.b.args.html5_unavailable="1")}c=!!a.b.disable.html5}b=c?xh(a)?"flash":"unsupported":"html5"}("flash"==b?a.kb:a.lb).call(a)}}
function Ah(a){var b=!0,c=zh(a);c&&a.b&&(a=a.b,b=Ka(c,"version")==a.assets.js);return b&&!!r("yt.player.Application.create")}
k.lb=function(){if(!this.X){var a=Ah(this);a&&"html5"==Bh(this)?(this.J="html5",this.C||this.O()):(Ch(this),this.J="html5",a&&this.P?(this.l.appendChild(this.P),this.O()):(this.b.loaded=!0,this.R=u(function(){var a=this.l,c=ag(this.b);r("yt.player.Application.create")(a,c);this.O()},this),this.X=!0,a?this.R():(Qb(this.b.assets.js,this.R),hg(this.b.assets.css))))}};
k.kb=function(){var a=ag(this.b);if(!this.D){var b=zh(this);b&&(this.D=document.createElement("SPAN"),this.D.tabIndex=0,Kg(this.Y,this.D,"focus",this.ua),this.K=document.createElement("SPAN"),this.K.tabIndex=0,Kg(this.Y,this.K,"focus",this.ua),b.parentNode&&b.parentNode.insertBefore(this.D,b),b.parentNode&&b.parentNode.insertBefore(this.K,b.nextSibling))}a.attrs.width=a.attrs.width||"100%";a.attrs.height=a.attrs.height||"100%";if("flash"==Bh(this))this.J="flash",this.C||this.O();else{Ch(this);this.J=
"flash";this.b.loaded=!0;var b=bg.getInstance(),c=(-1<b.i.indexOf("Gnash")&&-1==b.i.indexOf("AVM2")||9==b.b&&1==b.f||9==b.b&&0==b.f&&1==b.g?0:9<=b.b)||-1<navigator.userAgent.indexOf("Sony/COM2")&&!cg(b,9,1,58)?a.url:a.urlV9As2;window!=window.top&&document.referrer&&(a.args.framer=document.referrer.substring(0,128));b=this.l;if(c){var b=t(b)?Oe(b):b,d=Ba(a.attrs);d.tabindex=0;var e=Ba(a.params);e.flashvars=bd(a.args);if(Oa){d.classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000";e.movie=c;var a=document.createElement("object"),
f;for(f in d)a.setAttribute(f,d[f]);for(var g in e)f=document.createElement("param"),f.setAttribute("name",g),f.setAttribute("value",e[g]),a.appendChild(f)}else{d.type="application/x-shockwave-flash";d.src=c;a=document.createElement("embed");a.setAttribute("name",d.id);for(var h in d)a.setAttribute(h,d[h]);for(var l in e)a.setAttribute(l,e[l])}g=document.createElement("div");g.appendChild(a);b.innerHTML=g.innerHTML}this.O()}};
k.ua=function(){zh(this).focus()};
function zh(a){var b=Oe(a.i);!b&&a.w&&a.w.querySelector&&(b=a.w.querySelector("#"+a.i));return b}
k.O=function(){if(!this.f){var a=zh(this),b=!1;try{a&&a.getApiInterface&&a.getApiInterface()&&(b=!0)}catch(f){}if(b)if(this.X=!1,a.isNotServable&&a.isNotServable(this.b.args.video_id))yh(this);else{rh(this);this.C=!0;a=zh(this);a.addEventListener&&(this.S=Dh(this,a,"addEventListener"));a.removeEventListener&&(this.$=Dh(this,a,"removeEventListener"));for(var b=a.getApiInterface(),b=b.concat(a.getInternalApiInterface()),c=0;c<b.length;c++){var d=b[c];this.g[d]||(this.g[d]=Dh(this,a,d))}for(var e in this.j)this.S(e,
this.j[e]);vh(this);this.aa&&this.aa(this.g);this.U.W("onReady",this.g)}else this.qa=F(u(this.O,this),50)}};
function Dh(a,b,c){var d=b[c];return function(){try{return a.ea=null,d.apply(b,arguments)}catch(e){"Bad NPObject as private data!"!=e.message&&"sendAbandonmentPing"!=c&&(e.message+=" ("+c+")",a.ea=e,E(e,"WARNING"))}}}
function rh(a){a.C=!1;if(a.$)for(var b in a.j)a.$(b,a.j[b]);for(var c in a.Z)window.clearTimeout(parseInt(c,10));a.Z={};a.S=null;a.$=null;for(var d in a.g)a.g[d]=null;a.g.addEventListener=u(a.H,a);a.g.removeEventListener=u(a.bb,a);a.g.destroy=u(a.dispose,a);a.g.getLastError=u(a.La,a);a.g.getPlayerType=u(a.Ma,a);a.g.getCurrentVideoConfig=u(a.Ka,a);a.g.loadNewVideoConfig=u(a.pa,a);a.g.isReady=u(a.nb,a)}
k.nb=function(){return this.C};
k.H=function(a,b){if(!this.f){var c=wh(this,b);if(c){if(!(0<=Ua(this.Ea,a)||this.j[a])){var d=Eh(this,a);this.S&&this.S(a,d)}this.U.subscribe(a,c);"onReady"==a&&this.C&&F(qa(c,this.g),0)}}};
k.bb=function(a,b){if(!this.f){var c=wh(this,b);c&&Db(this.U,a,c)}};
function wh(a,b){var c=b;if("string"==typeof b){if(a.ba[b])return a.ba[b];c=function(){var a=r(b);a&&a.apply(m,arguments)};
a.ba[b]=c}return c?c:null}
function Eh(a,b){var c="ytPlayer"+b+a.T;a.j[b]=c;m[c]=function(c){var d=F(function(){if(!a.f){a.U.W(b,c);var e=a.Z,g=String(d);g in e&&delete e[g]}},0);
Aa(a.Z,String(d))};
return c}
k.Ga=function(a){a=a?Qe:Pe;for(var b=a(document.activeElement);b&&(1!=b.nodeType||b==this.D||b==this.K||(b.focus(),b!=document.activeElement));)b=a(b)};
k.ra=function(a){Nb("a11y-announce",a)};
k.Ua=function(a){yh(this,a)};
k.Va=function(a){Nb("WATCH_LATER_VIDEO_ADDED",a)};
k.Wa=function(a){Nb("WATCH_LATER_VIDEO_REMOVED",a)};
k.Sa=function(){if(!this.fa){if(se){var a=document,b=a.scrollingElement?a.scrollingElement:Yd||"CSS1Compat"!=a.compatMode?a.body||a.documentElement:a.documentElement,a=a.parentWindow||a.defaultView;this.da=O&&P("10")&&a.pageYOffset!=b.scrollTop?new Ud(b.scrollLeft,b.scrollTop):new Ud(a.pageXOffset||b.scrollLeft,a.pageYOffset||b.scrollTop);Kg(this.M,window,"scroll",this.Za);Kg(this.M,this.l,"touchmove",this.Ya)}else Kg(this.M,this.l,"mousewheel",this.va),Kg(this.M,this.l,"wheel",this.va);this.fa=!0}};
k.Ta=function(){Lg(this.M);this.fa=!1};
k.va=function(a){a=a||window.event;a.returnValue=!1;a.preventDefault&&a.preventDefault()};
k.Za=function(){window.scrollTo(this.da.b,this.da.f)};
k.Ya=function(a){a.preventDefault()};
k.Ma=function(){return this.J||Bh(this)};
k.La=function(){return this.ea};
function Bh(a){return(a=zh(a))?"div"==a.tagName.toLowerCase()?"html5":"flash":null}
function Ch(a){ch("dcp");a.cancel();rh(a);a.J=null;a.b&&(a.b.loaded=!1);var b=zh(a);"html5"==Bh(a)?a.P=b:b&&b.destroy&&b.destroy();for(var b=a.l,c;c=b.firstChild;)b.removeChild(c);Lg(a.Y);a.D=null;a.K=null}
k.cancel=function(){this.R&&Xb(this.b.assets.js,this.R);window.clearTimeout(this.qa);this.X=!1};
k.o=function(){Ch(this);if(this.P&&this.b)try{this.P.destroy()}catch(b){E(b)}this.ba=null;for(var a in this.j)m[this.j[a]]=null;this.ga=this.b=this.g=null;delete this.l;delete this.w;qh.B.o.call(this)};var Fh={},Gh="player_uid_"+(1E9*Math.random()>>>0);function Hh(a,b){a=t(a)?Oe(a):a;b=$f(b);var c=Gh+"_"+ja(a),d=Fh[c];if(d)return d.pa(b),d.g;d=new qh(a,c);Fh[c]=d;Nb("player-added",d.g);Pa(d,qa(Ih,d));F(function(){d.pa(b)},0);
return d.g}
function Ih(a){Fh[a.T]=null}
function Jh(a){a=Oe(a);if(!a)return null;var b=Gh+"_"+ja(a),c=Fh[b];c||(c=new qh(a,b),Fh[b]=c);return c.g}
;var Kh=r("yt.abuse.botguardInitialized")||$b;q("yt.abuse.botguardInitialized",Kh,void 0);var Lh=r("yt.abuse.invokeBotguard")||ac;q("yt.abuse.invokeBotguard",Lh,void 0);var Mh=r("yt.abuse.dclkstatus.checkDclkStatus")||ec;q("yt.abuse.dclkstatus.checkDclkStatus",Mh,void 0);var Nh=r("yt.player.exports.navigate")||Vf;q("yt.player.exports.navigate",Nh,void 0);var Oh=r("yt.player.embed")||Hh;q("yt.player.embed",Oh,void 0);var Ph=r("yt.player.getPlayerByElement")||Jh;q("yt.player.getPlayerByElement",Ph,void 0);
var Qh=r("yt.util.activity.init")||Ef;q("yt.util.activity.init",Qh,void 0);var Rh=r("yt.util.activity.getTimeSinceActive")||Gf;q("yt.util.activity.getTimeSinceActive",Rh,void 0);var Sh=r("yt.util.activity.setTimestamp")||Ff;q("yt.util.activity.setTimestamp",Sh,void 0);function Th(a){return(0==a.search("cue")||0==a.search("load"))&&"loadModule"!=a}
function Uh(a,b,c){t(a)&&(a={mediaContentUrl:a,startSeconds:b,suggestedQuality:c});b=/\/([ve]|embed)\/([^#?]+)/.exec(a.mediaContentUrl);a.videoId=b&&b[2]?b[2]:null;return Vh(a)}
function Vh(a,b,c){if(ia(a)){b="endSeconds startSeconds mediaContentUrl suggestedQuality videoId two_stage_token".split(" ");c={};for(var d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}return{videoId:a,startSeconds:b,suggestedQuality:c}}
function Wh(a,b,c,d){if(ia(a)&&!ea(a)){b="playlist list listType index startSeconds suggestedQuality".split(" ");c={};for(d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}c={index:b,startSeconds:c,suggestedQuality:d};t(a)&&16==a.length?c.list="PL"+a:c.playlist=a;return c}
function Xh(a){var b=a.video_id||a.videoId;if(t(b)){var c=gf()||{},d=gf()||{};p(void 0)?d[b]=void 0:delete d[b];var e=v()+3E5,f=jf;if(f&&window.JSON){t(d)||(d=JSON.stringify(d,void 0));try{f.set("yt-player-two-stage-token",d,e)}catch(g){f.remove("yt-player-two-stage-token")}}(b=c[b])&&(a.two_stage_token=b)}}
;function Yh(a){R.call(this,1,arguments);this.b=a}
w(Yh,R);function V(a){R.call(this,1,arguments);this.b=a}
w(V,R);function Zh(a,b,c){R.call(this,3,arguments);this.g=a;this.f=b;this.b=null!=c?!!c:null}
w(Zh,R);function $h(a,b,c,d,e){R.call(this,2,arguments);this.f=a;this.b=b;this.i=c||null;this.g=d||null;this.source=e||null}
w($h,R);function ai(a,b,c){R.call(this,1,arguments);this.b=a;this.subscriptionId=b}
w(ai,R);function bi(a,b,c,d,e,f,g){R.call(this,1,arguments);this.f=a;this.subscriptionId=b;this.b=c;this.i=e||null;this.g=f||null;this.source=g||null}
w(bi,R);
var ci=new S("subscription-batch-subscribe",Yh),di=new S("subscription-batch-unsubscribe",Yh),ei=new S("subscription-subscribe",$h),fi=new S("subscription-subscribe-loading",V),gi=new S("subscription-subscribe-loaded",V),hi=new S("subscription-subscribe-success",ai),ii=new S("subscription-subscribe-external",$h),ji=new S("subscription-unsubscribe",bi),ki=new S("subscription-unsubscirbe-loading",V),li=new S("subscription-unsubscribe-loaded",V),mi=new S("subscription-unsubscribe-success",V),ni=new S("subscription-external-unsubscribe",
bi),oi=new S("subscription-enable-ypc",V),pi=new S("subscription-prefs",Zh),qi=new S("subscription-prefs-success",Zh),ri=new S("subscription-prefs-failure",Zh);function si(a){var b=cd("/signin?context=popup","next",document.location.protocol+"//"+document.domain+"/post_login"),b=cd(b,"feature","sub_button");if(b=window.open(b,"loginPopup","width=375,height=440,resizable=yes,scrollbars=yes",!0)){var c=Kb("LOGGED_IN",function(b){Mb(C("LOGGED_IN_PUBSUB_KEY",void 0));A("LOGGED_IN",!0);a(b)});
A("LOGGED_IN_PUBSUB_KEY",c);b.moveTo((screen.width-375)/2,(screen.height-440)/2)}}
q("yt.pubsub.publish",Nb,void 0);var W=null,ti=[];function ui(a){return{externalChannelId:a.externalChannelId,Ra:!!a.isChannelPaid,source:a.source,subscriptionId:a.subscriptionId}}
function vi(a){a&&a.externalChannelId&&wi(ui(a))}
function wi(a){var b=C("PLAYER_CONFIG");b&&b.args&&void 0!==b.args.authuser||C("SESSION_INDEX")||C("LOGGED_IN")?(T(ei,new $h(a.externalChannelId,a.Ra?{itemType:"U",itemId:a.externalChannelId}:null)),a=bd({event:"subscribe",source:a.source}),og("/gen_204?"+a,void 0)):xi(a)}
function xi(a){si(function(b){b.subscription_ajax&&wi(a)})}
function yi(a){a=ui(a);T(ji,new bi(a.externalChannelId,a.subscriptionId,null));a=bd({event:"unsubscribe",source:a.source});og("/gen_204?"+a,void 0)}
function zi(a){W&&W.channelSubscribed(a.b,a.subscriptionId)}
function Ai(a){W&&W.channelUnsubscribed(a.b)}
;function Bi(a){x.call(this);this.g=a;this.g.subscribe("command",this.ya,this);this.i={};this.j=!1}
w(Bi,x);k=Bi.prototype;k.start=function(){this.j||this.f||(this.j=!0,Ci(this.g,"RECEIVING"))};
k.ya=function(a,b){if(this.j&&!this.f){var c=b||{};switch(a){case "addEventListener":if(t(c.event)&&(c=c.event,!(c in this.i))){var d=u(this.eb,this,c);this.i[c]=d;this.addEventListener(c,d)}break;case "removeEventListener":t(c.event)&&Di(this,c.event);break;default:this.b.isReady()&&this.b[a]&&(c=Ei(a,b||{}),c=this.b[a].apply(this.b,c),(c=Fi(a,c))&&this.j&&!this.f&&Ci(this.g,a,c))}}};
k.eb=function(a,b){this.j&&!this.f&&Ci(this.g,a,this.ia(a,b))};
k.ia=function(a,b){if(null!=b)return{value:b}};
function Di(a,b){b in a.i&&(a.removeEventListener(b,a.i[b]),delete a.i[b])}
k.o=function(){var a=this.g;a.f||Db(a.b,"command",this.ya,this);this.g=null;for(var b in this.i)Di(this,b);Bi.B.o.call(this)};function Gi(a,b,c){dg.call(this);this.g=a;this.i=b;this.l=c}
w(Gi,dg);function Ci(a,b,c){if(!a.f){var d=a.g;d.f||a.i!=d.b||(a={id:a.l,command:b},c&&(a.data=c),d.b.postMessage(sc(a),d.i))}}
Gi.prototype.o=function(){this.i=this.g=null;Gi.B.o.call(this)};new G;function Hi(){var a=this.f=new gg(!!C("WIDGET_ID_ENFORCE")),b=u(this.ab,this);a.l=b;a.w=null;this.f.channel="widget";if(a=C("WIDGET_ID"))this.f.b=a;this.i=[];this.l=!1;this.j={}}
k=Hi.prototype;k.ab=function(a,b){if("addEventListener"==a&&b){var c=b[0];this.j[c]||"onReady"==c||(this.addEventListener(c,Ii(this,c)),this.j[c]=!0)}else this.Ca(a,b)};
k.Ca=function(){};
function Ii(a,b){return u(function(a){this.sendMessage(b,a)},a)}
k.addEventListener=function(){};
k.Ja=function(){this.l=!0;this.sendMessage("initialDelivery",this.ja());this.sendMessage("onReady");D(this.i,this.Aa,this);this.i=[]};
k.ja=function(){return null};
function Ji(a,b){a.sendMessage("infoDelivery",b)}
k.Aa=function(a){this.l?this.f.sendMessage(a):this.i.push(a)};
k.sendMessage=function(a,b){this.Aa({event:a,info:void 0==b?null:b})};
k.dispose=function(){this.f=null};function Ki(a,b,c){x.call(this);this.b=a;this.i=c;this.j=of(window,"message",u(this.l,this));this.g=new Gi(this,a,b);Pa(this,qa(Qa,this.g))}
w(Ki,x);Ki.prototype.l=function(a){var b;if(b=!this.f)if(b=a.origin==this.i)a:{b=this.b;do{var c;b:{c=a.source;do{if(c==b){c=!0;break b}if(c==c.parent)break;c=c.parent}while(null!=c);c=!1}if(c){b=!0;break a}b=b.opener}while(null!=b);b=!1}if(b&&(a=a.data,t(a))){try{a=qc(a)}catch(d){return}a.command&&(b=this.g,b.f||b.j("command",a.command,a.data))}};
Ki.prototype.o=function(){pf(this.j);this.b=null;Ki.B.o.call(this)};function Li(a,b){Bi.call(this,b);this.b=a;this.start()}
w(Li,Bi);Li.prototype.addEventListener=function(a,b){this.b.addEventListener(a,b)};
Li.prototype.removeEventListener=function(a,b){this.b.removeEventListener(a,b)};
function Ei(a,b){switch(a){case "loadVideoById":return b=Vh(b),Xh(b),[b];case "cueVideoById":return b=Vh(b),Xh(b),[b];case "loadVideoByPlayerVars":return Xh(b),[b];case "cueVideoByPlayerVars":return Xh(b),[b];case "loadPlaylist":return b=Wh(b),Xh(b),[b];case "cuePlaylist":return b=Wh(b),Xh(b),[b];case "seekTo":return[b.seconds,b.allowSeekAhead];case "playVideoAt":return[b.index];case "setVolume":return[b.volume];case "setPlaybackQuality":return[b.suggestedQuality];case "setPlaybackRate":return[b.suggestedRate];
case "setLoop":return[b.loopPlaylists];case "setShuffle":return[b.shufflePlaylist];case "getOptions":return[b.module];case "getOption":return[b.module,b.option];case "setOption":return[b.module,b.option,b.value];case "handleGlobalKeyDown":return[b.keyCode,b.shiftKey]}return[]}
function Fi(a,b){switch(a){case "isMuted":return{muted:b};case "getVolume":return{volume:b};case "getPlaybackRate":return{playbackRate:b};case "getAvailablePlaybackRates":return{availablePlaybackRates:b};case "getVideoLoadedFraction":return{videoLoadedFraction:b};case "getPlayerState":return{playerState:b};case "getCurrentTime":return{currentTime:b};case "getPlaybackQuality":return{playbackQuality:b};case "getAvailableQualityLevels":return{availableQualityLevels:b};case "getDuration":return{duration:b};
case "getVideoUrl":return{videoUrl:b};case "getVideoEmbedCode":return{videoEmbedCode:b};case "getPlaylist":return{playlist:b};case "getPlaylistIndex":return{playlistIndex:b};case "getOptions":return{options:b};case "getOption":return{option:b}}}
Li.prototype.ia=function(a,b){switch(a){case "onReady":return;case "onStateChange":return{playerState:b};case "onPlaybackQualityChange":return{playbackQuality:b};case "onPlaybackRateChange":return{playbackRate:b};case "onError":return{errorCode:b}}return Li.B.ia.call(this,a,b)};
Li.prototype.o=function(){Li.B.o.call(this);delete this.b};function Mi(a){Hi.call(this);this.b=a;this.g=[];this.addEventListener("onReady",u(this.Xa,this));this.addEventListener("onVideoProgress",u(this.ib,this));this.addEventListener("onVolumeChange",u(this.jb,this));this.addEventListener("onApiChange",u(this.cb,this));this.addEventListener("onPlaybackQualityChange",u(this.fb,this));this.addEventListener("onPlaybackRateChange",u(this.gb,this));this.addEventListener("onStateChange",u(this.hb,this))}
w(Mi,Hi);k=Mi.prototype;k.Ca=function(a,b){if(this.b[a]){b=b||[];if(0<b.length&&Th(a)){var c;c=b;if(ia(c[0])&&!ea(c[0]))c=c[0];else{var d={};switch(a){case "loadVideoById":case "cueVideoById":d=Vh.apply(window,c);break;case "loadVideoByUrl":case "cueVideoByUrl":d=Uh.apply(window,c);break;case "loadPlaylist":case "cuePlaylist":d=Wh.apply(window,c)}c=d}Xh(c);b.length=1;b[0]=c}this.b[a].apply(this.b,b);Th(a)&&Ji(this,this.ja())}};
k.Xa=function(){var a=u(this.Ja,this);this.f.g=a};
k.addEventListener=function(a,b){this.g.push({eventType:a,listener:b});this.b.addEventListener(a,b)};
k.ja=function(){if(!this.b)return null;var a=this.b.getApiInterface();Xa(a,"getVideoData");for(var b={apiInterface:a},c=0,d=a.length;c<d;c++){var e=a[c],f=e;if(0==f.search("get")||0==f.search("is")){var f=e,g=0;0==f.search("get")?g=3:0==f.search("is")&&(g=2);f=f.charAt(g).toLowerCase()+f.substr(g+1);try{var h=this.b[e]();b[f]=h}catch(l){}}}b.videoData=this.b.getVideoData();b.currentTimeLastUpdated_=v()/1E3;return b};
k.hb=function(a){a={playerState:a,currentTime:this.b.getCurrentTime(),duration:this.b.getDuration(),videoData:this.b.getVideoData(),videoStartBytes:0,videoBytesTotal:this.b.getVideoBytesTotal(),videoLoadedFraction:this.b.getVideoLoadedFraction(),playbackQuality:this.b.getPlaybackQuality(),availableQualityLevels:this.b.getAvailableQualityLevels(),videoUrl:this.b.getVideoUrl(),playlist:this.b.getPlaylist(),playlistIndex:this.b.getPlaylistIndex(),currentTimeLastUpdated_:v()/1E3,playbackRate:this.b.getPlaybackRate(),
mediaReferenceTime:this.b.getMediaReferenceTime()};this.b.getProgressState&&(a.progressState=this.b.getProgressState());this.b.getStoryboardFormat&&(a.storyboardFormat=this.b.getStoryboardFormat());Ji(this,a)};
k.fb=function(a){Ji(this,{playbackQuality:a})};
k.gb=function(a){Ji(this,{playbackRate:a})};
k.cb=function(){for(var a=this.b.getOptions(),b={namespaces:a},c=0,d=a.length;c<d;c++){var e=a[c],f=this.b.getOptions(e);b[e]={options:f};for(var g=0,h=f.length;g<h;g++){var l=f[g],n=this.b.getOption(e,l);b[e][l]=n}}this.sendMessage("apiInfoDelivery",b)};
k.jb=function(){Ji(this,{muted:this.b.isMuted(),volume:this.b.getVolume()})};
k.ib=function(a){a={currentTime:a,videoBytesLoaded:this.b.getVideoBytesLoaded(),videoLoadedFraction:this.b.getVideoLoadedFraction(),currentTimeLastUpdated_:v()/1E3,playbackRate:this.b.getPlaybackRate(),mediaReferenceTime:this.b.getMediaReferenceTime()};this.b.getProgressState&&(a.progressState=this.b.getProgressState());Ji(this,a)};
k.dispose=function(){Mi.B.dispose.call(this);for(var a=0;a<this.g.length;a++){var b=this.g[a];this.b.removeEventListener(b.eventType,b.listener)}this.g=[]};var Ni=document,X=window;var Oi=!1,Pi="";function Qi(a){a=a.match(/[\d]+/g);if(!a)return"";a.length=3;return a.join(".")}
(function(){if(navigator.plugins&&navigator.plugins.length){var a=navigator.plugins["Shockwave Flash"];if(a&&(Oi=!0,a.description)){Pi=Qi(a.description);return}if(navigator.plugins["Shockwave Flash 2.0"]){Oi=!0;Pi="2.0.0.11";return}}if(navigator.mimeTypes&&navigator.mimeTypes.length&&(a=navigator.mimeTypes["application/x-shockwave-flash"],Oi=!(!a||!a.enabledPlugin))){Pi=Qi(a.enabledPlugin.description);return}try{var b=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");Oi=!0;Pi=Qi(b.GetVariable("$version"));
return}catch(c){}try{b=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");Oi=!0;Pi="6.0.21";return}catch(c){}try{b=new ActiveXObject("ShockwaveFlash.ShockwaveFlash"),Oi=!0,Pi=Qi(b.GetVariable("$version"))}catch(c){}})();
var Ri=Oi,Si=Pi;(function(){var a;return $d?(a=/Windows NT ([0-9.]+)/,(a=a.exec(y))?a[1]:"0"):Zd?(a=/10[_.][0-9_.]+/,(a=a.exec(y))?a[0].replace(/_/g,"."):"10"):ae?(a=/Android\s+([^\);]+)(\)|;)/,(a=a.exec(y))?a[1]:""):be||ce||de?(a=/(?:iPhone|CPU)\s+OS\s+(\S+)/,(a=a.exec(y))?a[1].replace(/_/g,"."):""):""})();function Ti(a){return(a=a.exec(y))?a[1]:""}
(function(){if(oe)return Ti(/Firefox\/([0-9.]+)/);if(O||Wd||Vd)return je;if(se)return Ti(/Chrome\/([0-9.]+)/);if(te&&!(Sc()||z("iPad")||z("iPod")))return Ti(/Version\/([0-9.]+)/);if(pe||qe){var a=/Version\/(\S+).*Mobile\/(\S+)/.exec(y);if(a)return a[1]+"."+a[2]}else if(re)return(a=Ti(/Android\s+([0-9.]+)/))?a:Ti(/Version\/([0-9.]+)/);return""})();(function(){var a=!1;try{var b=Object.defineProperty({},"passive",{get:function(){a=!0}});
m.addEventListener("test",null,b)}catch(c){}return a})();var Ui=(new Date).getTime();function Vi(a){ua.call(this,a.message||a.description||a.name);this.b=a instanceof De}
w(Vi,ua);Vi.prototype.name="BiscottiError";function Wi(a,b){this.f=a;this.b=b}
Wi.prototype.then=function(a,b,c){try{if(p(this.f))return a?Ae(a.call(c,this.f)):Ae(this.f);if(p(this.b)){if(!b)return Be(this.b);var d=b.call(c,this.b);return!p(d)&&this.b.b?Be(this.b):Ae(d)}throw Error("Invalid Result_ state");}catch(e){return Be(e)}};
Cc(Wi);var rg={format:"RAW",method:"GET",timeout:5E3,withCredentials:!0},Xi=null;function Yi(a){a=a.responseText;if(0!=a.lastIndexOf(")]}'",0))return Zi(""),Xi=new Wi(""),"";a=JSON.parse(a.substr(4)).id;Zi(a);Xi=new Wi(a);$i(18E5,2);return a}
function aj(a,b){var c=new Vi(b);Zi("");Xi=new Wi(void 0,c);0<a&&$i(12E4,a-1);throw c;}
function $i(a,b){F(function(){var a=u(aj,m,b),a=qg().then(Yi,a);Ce(a,null,ba,void 0)},a)}
function Zi(a){q("yt.www.ads.biscotti.lastId_",a,void 0)}
;function bj(){}
function cj(){try{var a;try{var b=r("yt.www.ads.biscotti.getId_"),c;if(b)c=b();else{if(!Xi){var d=u(aj,m,2);Xi=qg().then(Yi,d)}c=Xi}a=c}catch(e){a=Be(e)}a.then(dj,bj);F(cj,18E5)}catch(e){E(e)}}
function dj(a){var b;a:{try{b=window.top.location.href}catch(Z){b=2;break a}b=null!=b?b==window.document.location.href?0:1:2}b={dt:Ui,flash:Si||"0",frm:b};b.u_tz=-(new Date).getTimezoneOffset();var c;try{c=X.history.length}catch(Z){c=0}b.u_his=c;b.u_java=!!X.navigator&&"unknown"!==typeof X.navigator.javaEnabled&&!!X.navigator.javaEnabled&&X.navigator.javaEnabled();X.screen&&(b.u_h=X.screen.height,b.u_w=X.screen.width,b.u_ah=X.screen.availHeight,b.u_aw=X.screen.availWidth,b.u_cd=X.screen.colorDepth);
X.navigator&&X.navigator.plugins&&(b.u_nplug=X.navigator.plugins.length);X.navigator&&X.navigator.mimeTypes&&(b.u_nmime=X.navigator.mimeTypes.length);b.bid=a;b.ca_type=Ri?"flash":"image";if(M("enable_server_side_search_pyv")||M("enable_server_side_mweb_search_pyv")){var d;a=window;try{d=a.screenX;var e=a.screenY}catch(Z){}try{var f=a.outerWidth,g=a.outerHeight}catch(Z){}try{var h=a.innerWidth,l=a.innerHeight}catch(Z){}d=[a.screenLeft,a.screenTop,d,e,a.screen?a.screen.availWidth:void 0,a.screen?a.screen.availTop:
void 0,f,g,h,l];var n;e=window.top||X;try{var B;if(e.document&&!e.document.body)B=new yc(-1,-1);else{var I=(e||window).document,fa="CSS1Compat"==I.compatMode?I.documentElement:I.body;B=(new yc(fa.clientWidth,fa.clientHeight)).round()}n=B}catch(Z){n=new yc(-12245933,-12245933)}B=0;window.SVGElement&&document.createElementNS&&(B|=1);ra(b,{bc:B,bih:n.height,biw:n.width,brdim:d.join(),vis:{visible:1,hidden:2,prerender:3,preview:4}[Ni.webkitVisibilityState||Ni.mozVisibilityState||Ni.visibilityState||""]||
0,wgl:!!X.WebGLRenderingContext})}tf("//www.youtube.com/ad_data_204",{Na:!1,A:b})}
;function ej(){this.b=C("ALT_PREF_COOKIE_NAME","PREF");var a;if(a=Bc.get(""+this.b,void 0)){a=unescape(a).split("&");for(var b=0;b<a.length;b++){var c=a[b].split("="),d=c[0];(c=c[1])&&(Y[d]=c.toString())}}}
ca(ej);var Y=r("yt.prefs.UserPrefs.prefs_")||{};q("yt.prefs.UserPrefs.prefs_",Y,void 0);function fj(a){if(/^f([1-9][0-9]*)$/.test(a))throw Error("ExpectedRegexMatch: "+a);}
function gj(a){if(!/^\w+$/.test(a))throw Error("ExpectedRegexMismatch: "+a);}
function hj(a){a=void 0!==Y[a]?Y[a].toString():null;return null!=a&&/^[A-Fa-f0-9]+$/.test(a)?parseInt(a,16):null}
ej.prototype.get=function(a,b){gj(a);fj(a);var c=void 0!==Y[a]?Y[a].toString():null;return null!=c?c:b?b:""};
ej.prototype.set=function(a,b){gj(a);fj(a);if(null==b)throw Error("ExpectedNotNull");Y[a]=b.toString()};
ej.prototype.remove=function(a){gj(a);fj(a);delete Y[a]};
ej.prototype.clear=function(){Y={}};function ij(a){for(var b=0;b<a.length;b++){var c=a[b];"send_follow_on_ping_action"==c.name&&c.data&&c.data.follow_on_url&&og(c.data.follow_on_url)}}
;function jj(a){R.call(this,1,arguments);this.ha=a}
w(jj,R);function kj(a,b){R.call(this,2,arguments);this.f=a;this.b=b}
w(kj,R);function lj(a,b,c,d){R.call(this,1,arguments);this.b=b;this.f=c||null;this.itemId=d||null}
w(lj,R);function mj(a,b){R.call(this,1,arguments);this.f=a;this.b=b||null}
w(mj,R);function nj(a){R.call(this,1,arguments)}
w(nj,R);var oj=new S("ypc-core-load",jj),pj=new S("ypc-guide-sync-success",kj),qj=new S("ypc-purchase-success",lj),rj=new S("ypc-subscription-cancel",nj),sj=new S("ypc-subscription-cancel-success",mj),tj=new S("ypc-init-subscription",nj);var uj=!1,vj=[],wj=[];function xj(a){a.b?uj?T(ii,a):T(oj,new jj(function(){T(tj,new nj(a.b))})):yj(a.f,a.i,a.g,a.source)}
function zj(a){a.b?uj?T(ni,a):T(oj,new jj(function(){T(rj,new nj(a.b))})):Aj(a.f,a.subscriptionId,a.i,a.g,a.source)}
function Bj(a){Cj(Ya(a.b))}
function Dj(a){Ej(Ya(a.b))}
function Fj(a){Gj(a.g,a.f,a.b)}
function Hj(a){var b=a.itemId,c=a.b.subscriptionId;b&&c&&T(hi,new ai(b,c,a.b.channelInfo))}
function Ij(a){var b=a.b;va(a.f,function(a,d){T(hi,new ai(d,a,b[d]))})}
function Jj(a){T(mi,new V(a.f.itemId));a.b&&a.b.length&&(Kj(a.b,mi),Kj(a.b,oi))}
function yj(a,b,c,d){var e=new V(a);T(fi,e);var f={};f.c=a;c&&(f.eurl=c);d&&(f.source=d);c={};(d=C("PLAYBACK_ID"))&&(c.plid=d);(d=C("EVENT_ID"))&&(c.ei=d);b&&Lj(b,c);uf("/subscription_ajax?action_create_subscription_to_channel=1",{method:"POST",oa:f,A:c,F:function(b,c){var d=c.response;T(hi,new ai(a,d.id,d.channel_info));d.show_feed_privacy_dialog&&Nb("SHOW-FEED-PRIVACY-SUBSCRIBE-DIALOG",a);d.actions&&ij(d.actions)},
na:function(){T(gi,e)}})}
function Aj(a,b,c,d,e){var f=new V(a);T(ki,f);var g={};d&&(g.eurl=d);e&&(g.source=e);d={};d.c=a;d.s=b;(a=C("PLAYBACK_ID"))&&(d.plid=a);(a=C("EVENT_ID"))&&(d.ei=a);c&&Lj(c,d);uf("/subscription_ajax?action_remove_subscriptions=1",{method:"POST",oa:g,A:d,F:function(a,b){var c=b.response;T(mi,f);c.actions&&ij(c.actions)},
na:function(){T(li,f)}})}
function Gj(a,b,c){if(a){var d={};d.channel_id=a;switch(b){case "receive-all-updates":d.receive_all_updates=!0;break;case "receive-no-updates":d.receive_no_updates=!0;d.receive_post_updates=!1;break;case "receive-highlight-updates":d.receive_all_updates=!1;d.receive_no_updates=!1;break;default:return}null===c||d.receive_no_updates||(d.receive_post_updates=c);var e=new Zh(a,b,c);uf("/subscription_ajax?action_update_subscription_preferences=1",{method:"POST",A:d,onError:function(){T(ri,e)},
F:function(){T(qi,e)}})}}
function Cj(a){if(a.length){var b=$a(a,0,40);T("subscription-batch-subscribe-loading");Kj(b,fi);var c={};c.a=b.join(",");var d=function(){T("subscription-batch-subscribe-loaded");Kj(b,gi)};
uf("/subscription_ajax?action_create_subscription_to_all=1",{method:"POST",A:c,F:function(c,f){d();var e=f.response,h=e.id;if(ea(h)&&h.length==b.length){var l=e.channel_info_map;D(h,function(a,c){var d=b[c];T(hi,new ai(d,a,l[d]))});
a.length?Cj(a):T("subscription-batch-subscribe-finished")}},
onError:function(){d();T("subscription-batch-subscribe-failure")}})}}
function Ej(a){if(a.length){var b=$a(a,0,40);T("subscription-batch-unsubscribe-loading");Kj(b,ki);var c={};c.c=b.join(",");var d=function(){T("subscription-batch-unsubscribe-loaded");Kj(b,li)};
uf("/subscription_ajax?action_remove_subscriptions=1",{method:"POST",A:c,F:function(){d();Kj(b,mi);a.length&&Ej(a)},
onError:function(){d()}})}}
function Kj(a,b){D(a,function(a){T(b,new V(a))})}
function Lj(a,b){var c=md(a);ra(b,c)}
;var Mj=null,Nj=null,Oj=null,Pj={};function Qj(a){Hf(a.payload_name,a.payload,M("enable_youtubei_innertube")?Df:Ue,void 0)}
function Rj(a){var b=a.id;a=a.ve_type;var c=Kc++;a=new Ic(void 0,a,c);Pj[b]=a;b=Sf();c=Rf();b&&c&&If(b,c,a)}
function Sj(a){var b=a.csn;a=a.root_ve_type;if(b&&a&&(A("client-screen-nonce",b),A("ROOT_VE_TYPE",a),a=Rf()))for(var c in Pj)If(b,a,Pj[c])}
function Tj(a){Pj[a.id]=new Ic(a.tracking_params)}
function Uj(a){var b=Sf();a=Pj[a.id];b&&a&&Jf(Kf(),{click:{csn:b,visualElement:Lc(a)}},void 0)}
function Vj(a){a=a.ids;var b=Sf();if(b){for(var c=[],d=0;d<a.length;d++){var e=Pj[a[d]];e&&c.push(e)}c.length&&Lf(b,c)}}
function Wj(){var a=Mj;a&&a.startInteractionLogging&&a.startInteractionLogging()}
;q("yt.setConfig",A,void 0);q("yt.setMsg",function(a){Ma(Tf,arguments)},void 0);
q("yt.logging.errors.log",Af,void 0);
q("writeEmbed",function(){var a=C("PLAYER_CONFIG",void 0);"1"!=a.privembed&&cj();"gvn"==a.args.ps&&(document.body.style.backgroundColor="transparent");var b=document.referrer,c=C("POST_MESSAGE_ORIGIN");window!=window.top&&b&&b!=document.URL&&(a.args.loaderUrl=b);C("LIGHTWEIGHT_AUTOPLAY")&&(a.args.autoplay="1");a.args.autoplay&&Xh(a.args);Mj=a=Hh("player",a);a.addEventListener("onScreenChanged",Sj);a.addEventListener("onLogClientVeCreated",Rj);a.addEventListener("onLogServerVeCreated",Tj);a.addEventListener("onLogToGel",
Qj);a.addEventListener("onLogVeClicked",Uj);a.addEventListener("onLogVesShown",Vj);a.addEventListener("onReady",Wj);b=C("POST_MESSAGE_ID","player");C("ENABLE_JS_API")?Oj=new Mi(a):C("ENABLE_POST_API")&&t(b)&&t(c)&&(Nj=new Ki(window.parent,b,c),Oj=new Li(a,Nj.g));C("BG_P")&&(C("BG_I")||C("BG_IU"))&&Zb();dc();W=a;W.addEventListener("SUBSCRIBE",vi);W.addEventListener("UNSUBSCRIBE",yi);ti.push(U(hi,zi),U(mi,Ai))},void 0);
q("yt.www.watch.ads.restrictioncookie.spr",function(a){og(a+"mac_204?action_fcts=1");return!0},void 0);
var Xj=eb(function(){ch("ol");uj=!0;wj.push(U(ei,xj),U(ji,zj));uj||wj.push(U(ii,xj),U(ni,zj),U(ci,Bj),U(di,Dj),U(pi,Fj),U(qj,Hj),U(sj,Jj),U(pj,Ij));var a=ej.getInstance(),b=1<window.devicePixelRatio;if(!!((hj("f"+(Math.floor(119/31)+1))||0)&67108864)!=b){var c="f"+(Math.floor(119/31)+1),d=hj(c)||0,d=b?d|67108864:d&-67108865;0==d?delete Y[c]:Y[c]=d.toString(16).toString();var a=a.b,b=[],e;for(e in Y)b.push(e+"="+escape(Y[e]));Bc.set(""+a,b.join("&"),63072E3,"/","youtube.com")}}),Yj=eb(function(){var a=
Mj;
a&&a.sendAbandonmentPing&&a.sendAbandonmentPing();C("PL_ATT")&&(Yb=null);for(var a=0,b=bc.length;a<b;a++){var c=bc[a];if(!isNaN(c)){var d=r("yt.scheduler.instance.cancelJob");d?d(c):window.clearTimeout(c)}}bc.length=0;a=Ub("//static.doubleclick.net/instream/ad_status.js");if(b=document.getElementById(a))Pb(a),b.parentNode.removeChild(b);cc=!1;A("DCLKSTAT",0);Mb(vj);vj.length=0;Wg(wj);wj.length=0;uj=!1;W&&(W.removeEventListener("SUBSCRIBE",wi),W.removeEventListener("UNSUBSCRIBE",yi));W=null;Wg(ti);
ti.length=0;Ra(Oj,Nj);if(a=Mj)a.removeEventListener("onScreenChanged",Sj),a.removeEventListener("onLogClientVeCreated",Rj),a.removeEventListener("onLogServerVeCreated",Tj),a.removeEventListener("onLogToGel",Qj),a.removeEventListener("onLogVeClicked",Uj),a.removeEventListener("onLogVesShown",Vj),a.removeEventListener("onReady",Wj),a.destroy();Pj={}});
window.addEventListener?(window.addEventListener("load",Xj),window.addEventListener("unload",Yj)):window.attachEvent&&(window.attachEvent("onload",Xj),window.attachEvent("onunload",Yj));}).call(this);
