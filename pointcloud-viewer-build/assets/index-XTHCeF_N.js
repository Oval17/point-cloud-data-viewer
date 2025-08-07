(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const h of u.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(l){if(l.ep)return;l.ep=!0;const u=i(l);fetch(l.href,u)}})();function kx(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var If={exports:{}},Mo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var j_;function Xx(){if(j_)return Mo;j_=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(s,l,u){var h=null;if(u!==void 0&&(h=""+u),l.key!==void 0&&(h=""+l.key),"key"in l){u={};for(var d in l)d!=="key"&&(u[d]=l[d])}else u=l;return l=u.ref,{$$typeof:o,type:s,key:h,ref:l!==void 0?l:null,props:u}}return Mo.Fragment=t,Mo.jsx=i,Mo.jsxs=i,Mo}var K_;function Wx(){return K_||(K_=1,If.exports=Xx()),If.exports}var Ai=Wx(),Bf={exports:{}},Eo={},Ff={exports:{}},Hf={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Q_;function qx(){return Q_||(Q_=1,function(o){function t(z,j){var Y=z.length;z.push(j);t:for(;0<Y;){var Mt=Y-1>>>1,L=z[Mt];if(0<l(L,j))z[Mt]=j,z[Y]=L,Y=Mt;else break t}}function i(z){return z.length===0?null:z[0]}function s(z){if(z.length===0)return null;var j=z[0],Y=z.pop();if(Y!==j){z[0]=Y;t:for(var Mt=0,L=z.length,$=L>>>1;Mt<$;){var vt=2*(Mt+1)-1,St=z[vt],Q=vt+1,pt=z[Q];if(0>l(St,Y))Q<L&&0>l(pt,St)?(z[Mt]=pt,z[Q]=Y,Mt=Q):(z[Mt]=St,z[vt]=Y,Mt=vt);else if(Q<L&&0>l(pt,Y))z[Mt]=pt,z[Q]=Y,Mt=Q;else break t}}return j}function l(z,j){var Y=z.sortIndex-j.sortIndex;return Y!==0?Y:z.id-j.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;o.unstable_now=function(){return u.now()}}else{var h=Date,d=h.now();o.unstable_now=function(){return h.now()-d}}var m=[],p=[],_=1,v=null,x=3,M=!1,E=!1,R=!1,S=!1,g=typeof setTimeout=="function"?setTimeout:null,N=typeof clearTimeout=="function"?clearTimeout:null,D=typeof setImmediate<"u"?setImmediate:null;function w(z){for(var j=i(p);j!==null;){if(j.callback===null)s(p);else if(j.startTime<=z)s(p),j.sortIndex=j.expirationTime,t(m,j);else break;j=i(p)}}function B(z){if(R=!1,w(z),!E)if(i(m)!==null)E=!0,H||(H=!0,lt());else{var j=i(p);j!==null&&ht(B,j.startTime-z)}}var H=!1,I=-1,X=5,U=-1;function C(){return S?!0:!(o.unstable_now()-U<X)}function G(){if(S=!1,H){var z=o.unstable_now();U=z;var j=!0;try{t:{E=!1,R&&(R=!1,N(I),I=-1),M=!0;var Y=x;try{e:{for(w(z),v=i(m);v!==null&&!(v.expirationTime>z&&C());){var Mt=v.callback;if(typeof Mt=="function"){v.callback=null,x=v.priorityLevel;var L=Mt(v.expirationTime<=z);if(z=o.unstable_now(),typeof L=="function"){v.callback=L,w(z),j=!0;break e}v===i(m)&&s(m),w(z)}else s(m);v=i(m)}if(v!==null)j=!0;else{var $=i(p);$!==null&&ht(B,$.startTime-z),j=!1}}break t}finally{v=null,x=Y,M=!1}j=void 0}}finally{j?lt():H=!1}}}var lt;if(typeof D=="function")lt=function(){D(G)};else if(typeof MessageChannel<"u"){var rt=new MessageChannel,gt=rt.port2;rt.port1.onmessage=G,lt=function(){gt.postMessage(null)}}else lt=function(){g(G,0)};function ht(z,j){I=g(function(){z(o.unstable_now())},j)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(z){z.callback=null},o.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):X=0<z?Math.floor(1e3/z):5},o.unstable_getCurrentPriorityLevel=function(){return x},o.unstable_next=function(z){switch(x){case 1:case 2:case 3:var j=3;break;default:j=x}var Y=x;x=j;try{return z()}finally{x=Y}},o.unstable_requestPaint=function(){S=!0},o.unstable_runWithPriority=function(z,j){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var Y=x;x=z;try{return j()}finally{x=Y}},o.unstable_scheduleCallback=function(z,j,Y){var Mt=o.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?Mt+Y:Mt):Y=Mt,z){case 1:var L=-1;break;case 2:L=250;break;case 5:L=1073741823;break;case 4:L=1e4;break;default:L=5e3}return L=Y+L,z={id:_++,callback:j,priorityLevel:z,startTime:Y,expirationTime:L,sortIndex:-1},Y>Mt?(z.sortIndex=Y,t(p,z),i(m)===null&&z===i(p)&&(R?(N(I),I=-1):R=!0,ht(B,Y-Mt))):(z.sortIndex=L,t(m,z),E||M||(E=!0,H||(H=!0,lt()))),z},o.unstable_shouldYield=C,o.unstable_wrapCallback=function(z){var j=x;return function(){var Y=x;x=j;try{return z.apply(this,arguments)}finally{x=Y}}}}(Hf)),Hf}var J_;function Yx(){return J_||(J_=1,Ff.exports=qx()),Ff.exports}var Gf={exports:{}},ae={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $_;function Zx(){if($_)return ae;$_=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),v=Symbol.iterator;function x(L){return L===null||typeof L!="object"?null:(L=v&&L[v]||L["@@iterator"],typeof L=="function"?L:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,R={};function S(L,$,vt){this.props=L,this.context=$,this.refs=R,this.updater=vt||M}S.prototype.isReactComponent={},S.prototype.setState=function(L,$){if(typeof L!="object"&&typeof L!="function"&&L!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,L,$,"setState")},S.prototype.forceUpdate=function(L){this.updater.enqueueForceUpdate(this,L,"forceUpdate")};function g(){}g.prototype=S.prototype;function N(L,$,vt){this.props=L,this.context=$,this.refs=R,this.updater=vt||M}var D=N.prototype=new g;D.constructor=N,E(D,S.prototype),D.isPureReactComponent=!0;var w=Array.isArray,B={H:null,A:null,T:null,S:null,V:null},H=Object.prototype.hasOwnProperty;function I(L,$,vt,St,Q,pt){return vt=pt.ref,{$$typeof:o,type:L,key:$,ref:vt!==void 0?vt:null,props:pt}}function X(L,$){return I(L.type,$,void 0,void 0,void 0,L.props)}function U(L){return typeof L=="object"&&L!==null&&L.$$typeof===o}function C(L){var $={"=":"=0",":":"=2"};return"$"+L.replace(/[=:]/g,function(vt){return $[vt]})}var G=/\/+/g;function lt(L,$){return typeof L=="object"&&L!==null&&L.key!=null?C(""+L.key):$.toString(36)}function rt(){}function gt(L){switch(L.status){case"fulfilled":return L.value;case"rejected":throw L.reason;default:switch(typeof L.status=="string"?L.then(rt,rt):(L.status="pending",L.then(function($){L.status==="pending"&&(L.status="fulfilled",L.value=$)},function($){L.status==="pending"&&(L.status="rejected",L.reason=$)})),L.status){case"fulfilled":return L.value;case"rejected":throw L.reason}}throw L}function ht(L,$,vt,St,Q){var pt=typeof L;(pt==="undefined"||pt==="boolean")&&(L=null);var yt=!1;if(L===null)yt=!0;else switch(pt){case"bigint":case"string":case"number":yt=!0;break;case"object":switch(L.$$typeof){case o:case t:yt=!0;break;case _:return yt=L._init,ht(yt(L._payload),$,vt,St,Q)}}if(yt)return Q=Q(L),yt=St===""?"."+lt(L,0):St,w(Q)?(vt="",yt!=null&&(vt=yt.replace(G,"$&/")+"/"),ht(Q,$,vt,"",function(oe){return oe})):Q!=null&&(U(Q)&&(Q=X(Q,vt+(Q.key==null||L&&L.key===Q.key?"":(""+Q.key).replace(G,"$&/")+"/")+yt)),$.push(Q)),1;yt=0;var At=St===""?".":St+":";if(w(L))for(var Ct=0;Ct<L.length;Ct++)St=L[Ct],pt=At+lt(St,Ct),yt+=ht(St,$,vt,pt,Q);else if(Ct=x(L),typeof Ct=="function")for(L=Ct.call(L),Ct=0;!(St=L.next()).done;)St=St.value,pt=At+lt(St,Ct++),yt+=ht(St,$,vt,pt,Q);else if(pt==="object"){if(typeof L.then=="function")return ht(gt(L),$,vt,St,Q);throw $=String(L),Error("Objects are not valid as a React child (found: "+($==="[object Object]"?"object with keys {"+Object.keys(L).join(", ")+"}":$)+"). If you meant to render a collection of children, use an array instead.")}return yt}function z(L,$,vt){if(L==null)return L;var St=[],Q=0;return ht(L,St,"","",function(pt){return $.call(vt,pt,Q++)}),St}function j(L){if(L._status===-1){var $=L._result;$=$(),$.then(function(vt){(L._status===0||L._status===-1)&&(L._status=1,L._result=vt)},function(vt){(L._status===0||L._status===-1)&&(L._status=2,L._result=vt)}),L._status===-1&&(L._status=0,L._result=$)}if(L._status===1)return L._result.default;throw L._result}var Y=typeof reportError=="function"?reportError:function(L){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var $=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof L=="object"&&L!==null&&typeof L.message=="string"?String(L.message):String(L),error:L});if(!window.dispatchEvent($))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",L);return}console.error(L)};function Mt(){}return ae.Children={map:z,forEach:function(L,$,vt){z(L,function(){$.apply(this,arguments)},vt)},count:function(L){var $=0;return z(L,function(){$++}),$},toArray:function(L){return z(L,function($){return $})||[]},only:function(L){if(!U(L))throw Error("React.Children.only expected to receive a single React element child.");return L}},ae.Component=S,ae.Fragment=i,ae.Profiler=l,ae.PureComponent=N,ae.StrictMode=s,ae.Suspense=m,ae.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=B,ae.__COMPILER_RUNTIME={__proto__:null,c:function(L){return B.H.useMemoCache(L)}},ae.cache=function(L){return function(){return L.apply(null,arguments)}},ae.cloneElement=function(L,$,vt){if(L==null)throw Error("The argument must be a React element, but you passed "+L+".");var St=E({},L.props),Q=L.key,pt=void 0;if($!=null)for(yt in $.ref!==void 0&&(pt=void 0),$.key!==void 0&&(Q=""+$.key),$)!H.call($,yt)||yt==="key"||yt==="__self"||yt==="__source"||yt==="ref"&&$.ref===void 0||(St[yt]=$[yt]);var yt=arguments.length-2;if(yt===1)St.children=vt;else if(1<yt){for(var At=Array(yt),Ct=0;Ct<yt;Ct++)At[Ct]=arguments[Ct+2];St.children=At}return I(L.type,Q,void 0,void 0,pt,St)},ae.createContext=function(L){return L={$$typeof:h,_currentValue:L,_currentValue2:L,_threadCount:0,Provider:null,Consumer:null},L.Provider=L,L.Consumer={$$typeof:u,_context:L},L},ae.createElement=function(L,$,vt){var St,Q={},pt=null;if($!=null)for(St in $.key!==void 0&&(pt=""+$.key),$)H.call($,St)&&St!=="key"&&St!=="__self"&&St!=="__source"&&(Q[St]=$[St]);var yt=arguments.length-2;if(yt===1)Q.children=vt;else if(1<yt){for(var At=Array(yt),Ct=0;Ct<yt;Ct++)At[Ct]=arguments[Ct+2];Q.children=At}if(L&&L.defaultProps)for(St in yt=L.defaultProps,yt)Q[St]===void 0&&(Q[St]=yt[St]);return I(L,pt,void 0,void 0,null,Q)},ae.createRef=function(){return{current:null}},ae.forwardRef=function(L){return{$$typeof:d,render:L}},ae.isValidElement=U,ae.lazy=function(L){return{$$typeof:_,_payload:{_status:-1,_result:L},_init:j}},ae.memo=function(L,$){return{$$typeof:p,type:L,compare:$===void 0?null:$}},ae.startTransition=function(L){var $=B.T,vt={};B.T=vt;try{var St=L(),Q=B.S;Q!==null&&Q(vt,St),typeof St=="object"&&St!==null&&typeof St.then=="function"&&St.then(Mt,Y)}catch(pt){Y(pt)}finally{B.T=$}},ae.unstable_useCacheRefresh=function(){return B.H.useCacheRefresh()},ae.use=function(L){return B.H.use(L)},ae.useActionState=function(L,$,vt){return B.H.useActionState(L,$,vt)},ae.useCallback=function(L,$){return B.H.useCallback(L,$)},ae.useContext=function(L){return B.H.useContext(L)},ae.useDebugValue=function(){},ae.useDeferredValue=function(L,$){return B.H.useDeferredValue(L,$)},ae.useEffect=function(L,$,vt){var St=B.H;if(typeof vt=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return St.useEffect(L,$)},ae.useId=function(){return B.H.useId()},ae.useImperativeHandle=function(L,$,vt){return B.H.useImperativeHandle(L,$,vt)},ae.useInsertionEffect=function(L,$){return B.H.useInsertionEffect(L,$)},ae.useLayoutEffect=function(L,$){return B.H.useLayoutEffect(L,$)},ae.useMemo=function(L,$){return B.H.useMemo(L,$)},ae.useOptimistic=function(L,$){return B.H.useOptimistic(L,$)},ae.useReducer=function(L,$,vt){return B.H.useReducer(L,$,vt)},ae.useRef=function(L){return B.H.useRef(L)},ae.useState=function(L){return B.H.useState(L)},ae.useSyncExternalStore=function(L,$,vt){return B.H.useSyncExternalStore(L,$,vt)},ae.useTransition=function(){return B.H.useTransition()},ae.version="19.1.0",ae}var tg;function cd(){return tg||(tg=1,Gf.exports=Zx()),Gf.exports}var Vf={exports:{}},Cn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var eg;function jx(){if(eg)return Cn;eg=1;var o=cd();function t(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)p+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function u(m,p,_){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:v==null?null:""+v,children:m,containerInfo:p,implementation:_}}var h=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Cn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Cn.createPortal=function(m,p){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return u(m,p,null,_)},Cn.flushSync=function(m){var p=h.T,_=s.p;try{if(h.T=null,s.p=2,m)return m()}finally{h.T=p,s.p=_,s.d.f()}},Cn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,s.d.C(m,p))},Cn.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},Cn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var _=p.as,v=d(_,p.crossOrigin),x=typeof p.integrity=="string"?p.integrity:void 0,M=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;_==="style"?s.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:v,integrity:x,fetchPriority:M}):_==="script"&&s.d.X(m,{crossOrigin:v,integrity:x,fetchPriority:M,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Cn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var _=d(p.as,p.crossOrigin);s.d.M(m,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&s.d.M(m)},Cn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var _=p.as,v=d(_,p.crossOrigin);s.d.L(m,_,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Cn.preloadModule=function(m,p){if(typeof m=="string")if(p){var _=d(p.as,p.crossOrigin);s.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else s.d.m(m)},Cn.requestFormReset=function(m){s.d.r(m)},Cn.unstable_batchedUpdates=function(m,p){return m(p)},Cn.useFormState=function(m,p,_){return h.H.useFormState(m,p,_)},Cn.useFormStatus=function(){return h.H.useHostTransitionStatus()},Cn.version="19.1.0",Cn}var ng;function Kx(){if(ng)return Vf.exports;ng=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),Vf.exports=jx(),Vf.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ig;function Qx(){if(ig)return Eo;ig=1;var o=Yx(),t=cd(),i=Kx();function s(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function u(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function h(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function d(e){if(u(e)!==e)throw Error(s(188))}function m(e){var n=e.alternate;if(!n){if(n=u(e),n===null)throw Error(s(188));return n!==e?null:e}for(var a=e,r=n;;){var c=a.return;if(c===null)break;var f=c.alternate;if(f===null){if(r=c.return,r!==null){a=r;continue}break}if(c.child===f.child){for(f=c.child;f;){if(f===a)return d(c),e;if(f===r)return d(c),n;f=f.sibling}throw Error(s(188))}if(a.return!==r.return)a=c,r=f;else{for(var y=!1,b=c.child;b;){if(b===a){y=!0,a=c,r=f;break}if(b===r){y=!0,r=c,a=f;break}b=b.sibling}if(!y){for(b=f.child;b;){if(b===a){y=!0,a=f,r=c;break}if(b===r){y=!0,r=f,a=c;break}b=b.sibling}if(!y)throw Error(s(189))}}if(a.alternate!==r)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:n}function p(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=p(e),n!==null)return n;e=e.sibling}return null}var _=Object.assign,v=Symbol.for("react.element"),x=Symbol.for("react.transitional.element"),M=Symbol.for("react.portal"),E=Symbol.for("react.fragment"),R=Symbol.for("react.strict_mode"),S=Symbol.for("react.profiler"),g=Symbol.for("react.provider"),N=Symbol.for("react.consumer"),D=Symbol.for("react.context"),w=Symbol.for("react.forward_ref"),B=Symbol.for("react.suspense"),H=Symbol.for("react.suspense_list"),I=Symbol.for("react.memo"),X=Symbol.for("react.lazy"),U=Symbol.for("react.activity"),C=Symbol.for("react.memo_cache_sentinel"),G=Symbol.iterator;function lt(e){return e===null||typeof e!="object"?null:(e=G&&e[G]||e["@@iterator"],typeof e=="function"?e:null)}var rt=Symbol.for("react.client.reference");function gt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===rt?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case E:return"Fragment";case S:return"Profiler";case R:return"StrictMode";case B:return"Suspense";case H:return"SuspenseList";case U:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case M:return"Portal";case D:return(e.displayName||"Context")+".Provider";case N:return(e._context.displayName||"Context")+".Consumer";case w:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case I:return n=e.displayName||null,n!==null?n:gt(e.type)||"Memo";case X:n=e._payload,e=e._init;try{return gt(e(n))}catch{}}return null}var ht=Array.isArray,z=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,j=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Y={pending:!1,data:null,method:null,action:null},Mt=[],L=-1;function $(e){return{current:e}}function vt(e){0>L||(e.current=Mt[L],Mt[L]=null,L--)}function St(e,n){L++,Mt[L]=e.current,e.current=n}var Q=$(null),pt=$(null),yt=$(null),At=$(null);function Ct(e,n){switch(St(yt,n),St(pt,e),St(Q,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?E_(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=E_(n),e=T_(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}vt(Q),St(Q,e)}function oe(){vt(Q),vt(pt),vt(yt)}function Kt(e){e.memoizedState!==null&&St(At,e);var n=Q.current,a=T_(n,e.type);n!==a&&(St(pt,e),St(Q,a))}function Le(e){pt.current===e&&(vt(Q),vt(pt)),At.current===e&&(vt(At),go._currentValue=Y)}var Fe=Object.prototype.hasOwnProperty,ge=o.unstable_scheduleCallback,F=o.unstable_cancelCallback,xn=o.unstable_shouldYield,ye=o.unstable_requestPaint,de=o.unstable_now,Gt=o.unstable_getCurrentPriorityLevel,ve=o.unstable_ImmediatePriority,Yt=o.unstable_UserBlockingPriority,ie=o.unstable_NormalPriority,Qe=o.unstable_LowPriority,O=o.unstable_IdlePriority,T=o.log,et=o.unstable_setDisableYieldValue,ut=null,dt=null;function ot(e){if(typeof T=="function"&&et(e),dt&&typeof dt.setStrictMode=="function")try{dt.setStrictMode(ut,e)}catch{}}var Ot=Math.clz32?Math.clz32:Vt,Dt=Math.log,Ht=Math.LN2;function Vt(e){return e>>>=0,e===0?32:31-(Dt(e)/Ht|0)|0}var xt=256,Pt=4194304;function Wt(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function qt(e,n,a){var r=e.pendingLanes;if(r===0)return 0;var c=0,f=e.suspendedLanes,y=e.pingedLanes;e=e.warmLanes;var b=r&134217727;return b!==0?(r=b&~f,r!==0?c=Wt(r):(y&=b,y!==0?c=Wt(y):a||(a=b&~e,a!==0&&(c=Wt(a))))):(b=r&~f,b!==0?c=Wt(b):y!==0?c=Wt(y):a||(a=r&~e,a!==0&&(c=Wt(a)))),c===0?0:n!==0&&n!==c&&(n&f)===0&&(f=c&-c,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:c}function Rt(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function ne(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function k(){var e=xt;return xt<<=1,(xt&4194048)===0&&(xt=256),e}function Ut(){var e=Pt;return Pt<<=1,(Pt&62914560)===0&&(Pt=4194304),e}function Et(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function zt(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function bt(e,n,a,r,c,f){var y=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var b=e.entanglements,P=e.expirationTimes,J=e.hiddenUpdates;for(a=y&~a;0<a;){var ct=31-Ot(a),mt=1<<ct;b[ct]=0,P[ct]=-1;var nt=J[ct];if(nt!==null)for(J[ct]=null,ct=0;ct<nt.length;ct++){var it=nt[ct];it!==null&&(it.lane&=-536870913)}a&=~mt}r!==0&&_t(e,r,0),f!==0&&c===0&&e.tag!==0&&(e.suspendedLanes|=f&~(y&~n))}function _t(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var r=31-Ot(n);e.entangledLanes|=n,e.entanglements[r]=e.entanglements[r]|1073741824|a&4194090}function Bt(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var r=31-Ot(a),c=1<<r;c&n|e[r]&n&&(e[r]|=n),a&=~c}}function ee(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function we(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Me(){var e=j.p;return e!==0?e:(e=window.event,e===void 0?32:k_(e.type))}function kn(e,n){var a=j.p;try{return j.p=e,n()}finally{j.p=a}}var hn=Math.random().toString(36).slice(2),sn="__reactFiber$"+hn,Sn="__reactProps$"+hn,On="__reactContainer$"+hn,qa="__reactEvents$"+hn,Ho="__reactListeners$"+hn,Go="__reactHandles$"+hn,Ya="__reactResources$"+hn,la="__reactMarker$"+hn;function ca(e){delete e[sn],delete e[Sn],delete e[qa],delete e[Ho],delete e[Go]}function wi(e){var n=e[sn];if(n)return n;for(var a=e.parentNode;a;){if(n=a[On]||a[sn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=C_(e);e!==null;){if(a=e[sn])return a;e=C_(e)}return n}e=a,a=e.parentNode}return null}function Di(e){if(e=e[sn]||e[On]){var n=e.tag;if(n===5||n===6||n===13||n===26||n===27||n===3)return e}return null}function Za(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(s(33))}function ua(e){var n=e[Ya];return n||(n=e[Ya]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function tn(e){e[la]=!0}var Vo=new Set,ko={};function Ui(e,n){A(e,n),A(e+"Capture",n)}function A(e,n){for(ko[e]=n,e=0;e<n.length;e++)Vo.add(n[e])}var q=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),at={},st={};function Z(e){return Fe.call(st,e)?!0:Fe.call(at,e)?!1:q.test(e)?st[e]=!0:(at[e]=!0,!1)}function Tt(e,n,a){if(Z(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var r=n.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function wt(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function Nt(e,n,a,r){if(r===null)e.removeAttribute(a);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+r)}}var It,$t;function jt(e){if(It===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);It=n&&n[1]||"",$t=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+It+e+$t}var kt=!1;function le(e,n){if(!e||kt)return"";kt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(n){var mt=function(){throw Error()};if(Object.defineProperty(mt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(mt,[])}catch(it){var nt=it}Reflect.construct(e,[],mt)}else{try{mt.call()}catch(it){nt=it}e.call(mt.prototype)}}else{try{throw Error()}catch(it){nt=it}(mt=e())&&typeof mt.catch=="function"&&mt.catch(function(){})}}catch(it){if(it&&nt&&typeof it.stack=="string")return[it.stack,nt.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=r.DetermineComponentFrameRoot(),y=f[0],b=f[1];if(y&&b){var P=y.split(`
`),J=b.split(`
`);for(c=r=0;r<P.length&&!P[r].includes("DetermineComponentFrameRoot");)r++;for(;c<J.length&&!J[c].includes("DetermineComponentFrameRoot");)c++;if(r===P.length||c===J.length)for(r=P.length-1,c=J.length-1;1<=r&&0<=c&&P[r]!==J[c];)c--;for(;1<=r&&0<=c;r--,c--)if(P[r]!==J[c]){if(r!==1||c!==1)do if(r--,c--,0>c||P[r]!==J[c]){var ct=`
`+P[r].replace(" at new "," at ");return e.displayName&&ct.includes("<anonymous>")&&(ct=ct.replace("<anonymous>",e.displayName)),ct}while(1<=r&&0<=c);break}}}finally{kt=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?jt(a):""}function Re(e){switch(e.tag){case 26:case 27:case 5:return jt(e.type);case 16:return jt("Lazy");case 13:return jt("Suspense");case 19:return jt("SuspenseList");case 0:case 15:return le(e.type,!1);case 11:return le(e.type.render,!1);case 1:return le(e.type,!0);case 31:return jt("Activity");default:return""}}function Xe(e){try{var n="";do n+=Re(e),e=e.return;while(e);return n}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function fe(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ce(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Zt(e){var n=Ce(e)?"checked":"value",a=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),r=""+e[n];if(!e.hasOwnProperty(n)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var c=a.get,f=a.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return c.call(this)},set:function(y){r=""+y,f.call(this,y)}}),Object.defineProperty(e,n,{enumerable:a.enumerable}),{getValue:function(){return r},setValue:function(y){r=""+y},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Ne(e){e._valueTracker||(e._valueTracker=Zt(e))}function xe(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),r="";return e&&(r=Ce(e)?e.checked?"true":"false":e.value),e=r,e!==a?(n.setValue(e),!0):!1}function dn(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var fa=/[\n"\\]/g;function Ve(e){return e.replace(fa,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Li(e,n,a,r,c,f,y,b){e.name="",y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"?e.type=y:e.removeAttribute("type"),n!=null?y==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+fe(n)):e.value!==""+fe(n)&&(e.value=""+fe(n)):y!=="submit"&&y!=="reset"||e.removeAttribute("value"),n!=null?An(e,y,fe(n)):a!=null?An(e,y,fe(a)):r!=null&&e.removeAttribute("value"),c==null&&f!=null&&(e.defaultChecked=!!f),c!=null&&(e.checked=c&&typeof c!="function"&&typeof c!="symbol"),b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?e.name=""+fe(b):e.removeAttribute("name")}function He(e,n,a,r,c,f,y,b){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null))return;a=a!=null?""+fe(a):"",n=n!=null?""+fe(n):a,b||n===e.value||(e.value=n),e.defaultValue=n}r=r??c,r=typeof r!="function"&&typeof r!="symbol"&&!!r,e.checked=b?e.checked:!!r,e.defaultChecked=!!r,y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"&&(e.name=y)}function An(e,n,a){n==="number"&&dn(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function rn(e,n,a,r){if(e=e.options,n){n={};for(var c=0;c<a.length;c++)n["$"+a[c]]=!0;for(a=0;a<e.length;a++)c=n.hasOwnProperty("$"+e[a].value),e[a].selected!==c&&(e[a].selected=c),c&&r&&(e[a].defaultSelected=!0)}else{for(a=""+fe(a),n=null,c=0;c<e.length;c++){if(e[c].value===a){e[c].selected=!0,r&&(e[c].defaultSelected=!0);return}n!==null||e[c].disabled||(n=e[c])}n!==null&&(n.selected=!0)}}function pn(e,n,a){if(n!=null&&(n=""+fe(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+fe(a):""}function yn(e,n,a,r){if(n==null){if(r!=null){if(a!=null)throw Error(s(92));if(ht(r)){if(1<r.length)throw Error(s(93));r=r[0]}a=r}a==null&&(a=""),n=a}a=fe(n),e.defaultValue=a,r=e.textContent,r===a&&r!==""&&r!==null&&(e.value=r)}function xi(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var Ni=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Ed(e,n,a){var r=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?r?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":r?e.setProperty(n,a):typeof a!="number"||a===0||Ni.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function Td(e,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(e=e.style,a!=null){for(var r in a)!a.hasOwnProperty(r)||n!=null&&n.hasOwnProperty(r)||(r.indexOf("--")===0?e.setProperty(r,""):r==="float"?e.cssFloat="":e[r]="");for(var c in n)r=n[c],n.hasOwnProperty(c)&&a[c]!==r&&Ed(e,c,r)}else for(var f in n)n.hasOwnProperty(f)&&Ed(e,f,n[f])}function Pc(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var G0=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),V0=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Xo(e){return V0.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var zc=null;function Ic(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var As=null,Rs=null;function bd(e){var n=Di(e);if(n&&(e=n.stateNode)){var a=e[Sn]||null;t:switch(e=n.stateNode,n.type){case"input":if(Li(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Ve(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var r=a[n];if(r!==e&&r.form===e.form){var c=r[Sn]||null;if(!c)throw Error(s(90));Li(r,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<a.length;n++)r=a[n],r.form===e.form&&xe(r)}break t;case"textarea":pn(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&rn(e,!!a.multiple,n,!1)}}}var Bc=!1;function Ad(e,n,a){if(Bc)return e(n,a);Bc=!0;try{var r=e(n);return r}finally{if(Bc=!1,(As!==null||Rs!==null)&&(wl(),As&&(n=As,e=Rs,Rs=As=null,bd(n),e)))for(n=0;n<e.length;n++)bd(e[n])}}function wr(e,n){var a=e.stateNode;if(a===null)return null;var r=a[Sn]||null;if(r===null)return null;a=r[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var Oi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Fc=!1;if(Oi)try{var Dr={};Object.defineProperty(Dr,"passive",{get:function(){Fc=!0}}),window.addEventListener("test",Dr,Dr),window.removeEventListener("test",Dr,Dr)}catch{Fc=!1}var ha=null,Hc=null,Wo=null;function Rd(){if(Wo)return Wo;var e,n=Hc,a=n.length,r,c="value"in ha?ha.value:ha.textContent,f=c.length;for(e=0;e<a&&n[e]===c[e];e++);var y=a-e;for(r=1;r<=y&&n[a-r]===c[f-r];r++);return Wo=c.slice(e,1<r?1-r:void 0)}function qo(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Yo(){return!0}function Cd(){return!1}function Pn(e){function n(a,r,c,f,y){this._reactName=a,this._targetInst=c,this.type=r,this.nativeEvent=f,this.target=y,this.currentTarget=null;for(var b in e)e.hasOwnProperty(b)&&(a=e[b],this[b]=a?a(f):f[b]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?Yo:Cd,this.isPropagationStopped=Cd,this}return _(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Yo)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Yo)},persist:function(){},isPersistent:Yo}),n}var ja={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Zo=Pn(ja),Ur=_({},ja,{view:0,detail:0}),k0=Pn(Ur),Gc,Vc,Lr,jo=_({},Ur,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Xc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Lr&&(Lr&&e.type==="mousemove"?(Gc=e.screenX-Lr.screenX,Vc=e.screenY-Lr.screenY):Vc=Gc=0,Lr=e),Gc)},movementY:function(e){return"movementY"in e?e.movementY:Vc}}),wd=Pn(jo),X0=_({},jo,{dataTransfer:0}),W0=Pn(X0),q0=_({},Ur,{relatedTarget:0}),kc=Pn(q0),Y0=_({},ja,{animationName:0,elapsedTime:0,pseudoElement:0}),Z0=Pn(Y0),j0=_({},ja,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),K0=Pn(j0),Q0=_({},ja,{data:0}),Dd=Pn(Q0),J0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},$0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},tv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ev(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=tv[e])?!!n[e]:!1}function Xc(){return ev}var nv=_({},Ur,{key:function(e){if(e.key){var n=J0[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=qo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?$0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Xc,charCode:function(e){return e.type==="keypress"?qo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?qo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),iv=Pn(nv),av=_({},jo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ud=Pn(av),sv=_({},Ur,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Xc}),rv=Pn(sv),ov=_({},ja,{propertyName:0,elapsedTime:0,pseudoElement:0}),lv=Pn(ov),cv=_({},jo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),uv=Pn(cv),fv=_({},ja,{newState:0,oldState:0}),hv=Pn(fv),dv=[9,13,27,32],Wc=Oi&&"CompositionEvent"in window,Nr=null;Oi&&"documentMode"in document&&(Nr=document.documentMode);var pv=Oi&&"TextEvent"in window&&!Nr,Ld=Oi&&(!Wc||Nr&&8<Nr&&11>=Nr),Nd=" ",Od=!1;function Pd(e,n){switch(e){case"keyup":return dv.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function zd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Cs=!1;function mv(e,n){switch(e){case"compositionend":return zd(n);case"keypress":return n.which!==32?null:(Od=!0,Nd);case"textInput":return e=n.data,e===Nd&&Od?null:e;default:return null}}function _v(e,n){if(Cs)return e==="compositionend"||!Wc&&Pd(e,n)?(e=Rd(),Wo=Hc=ha=null,Cs=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Ld&&n.locale!=="ko"?null:n.data;default:return null}}var gv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Id(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!gv[e.type]:n==="textarea"}function Bd(e,n,a,r){As?Rs?Rs.push(r):Rs=[r]:As=r,n=Pl(n,"onChange"),0<n.length&&(a=new Zo("onChange","change",null,a,r),e.push({event:a,listeners:n}))}var Or=null,Pr=null;function vv(e){v_(e,0)}function Ko(e){var n=Za(e);if(xe(n))return e}function Fd(e,n){if(e==="change")return n}var Hd=!1;if(Oi){var qc;if(Oi){var Yc="oninput"in document;if(!Yc){var Gd=document.createElement("div");Gd.setAttribute("oninput","return;"),Yc=typeof Gd.oninput=="function"}qc=Yc}else qc=!1;Hd=qc&&(!document.documentMode||9<document.documentMode)}function Vd(){Or&&(Or.detachEvent("onpropertychange",kd),Pr=Or=null)}function kd(e){if(e.propertyName==="value"&&Ko(Pr)){var n=[];Bd(n,Pr,e,Ic(e)),Ad(vv,n)}}function xv(e,n,a){e==="focusin"?(Vd(),Or=n,Pr=a,Or.attachEvent("onpropertychange",kd)):e==="focusout"&&Vd()}function Sv(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ko(Pr)}function yv(e,n){if(e==="click")return Ko(n)}function Mv(e,n){if(e==="input"||e==="change")return Ko(n)}function Ev(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Xn=typeof Object.is=="function"?Object.is:Ev;function zr(e,n){if(Xn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),r=Object.keys(n);if(a.length!==r.length)return!1;for(r=0;r<a.length;r++){var c=a[r];if(!Fe.call(n,c)||!Xn(e[c],n[c]))return!1}return!0}function Xd(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Wd(e,n){var a=Xd(e);e=0;for(var r;a;){if(a.nodeType===3){if(r=e+a.textContent.length,e<=n&&r>=n)return{node:a,offset:n-e};e=r}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Xd(a)}}function qd(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?qd(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Yd(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=dn(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=dn(e.document)}return n}function Zc(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var Tv=Oi&&"documentMode"in document&&11>=document.documentMode,ws=null,jc=null,Ir=null,Kc=!1;function Zd(e,n,a){var r=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Kc||ws==null||ws!==dn(r)||(r=ws,"selectionStart"in r&&Zc(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ir&&zr(Ir,r)||(Ir=r,r=Pl(jc,"onSelect"),0<r.length&&(n=new Zo("onSelect","select",null,n,a),e.push({event:n,listeners:r}),n.target=ws)))}function Ka(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var Ds={animationend:Ka("Animation","AnimationEnd"),animationiteration:Ka("Animation","AnimationIteration"),animationstart:Ka("Animation","AnimationStart"),transitionrun:Ka("Transition","TransitionRun"),transitionstart:Ka("Transition","TransitionStart"),transitioncancel:Ka("Transition","TransitionCancel"),transitionend:Ka("Transition","TransitionEnd")},Qc={},jd={};Oi&&(jd=document.createElement("div").style,"AnimationEvent"in window||(delete Ds.animationend.animation,delete Ds.animationiteration.animation,delete Ds.animationstart.animation),"TransitionEvent"in window||delete Ds.transitionend.transition);function Qa(e){if(Qc[e])return Qc[e];if(!Ds[e])return e;var n=Ds[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in jd)return Qc[e]=n[a];return e}var Kd=Qa("animationend"),Qd=Qa("animationiteration"),Jd=Qa("animationstart"),bv=Qa("transitionrun"),Av=Qa("transitionstart"),Rv=Qa("transitioncancel"),$d=Qa("transitionend"),tp=new Map,Jc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Jc.push("scrollEnd");function li(e,n){tp.set(e,n),Ui(n,[e])}var ep=new WeakMap;function $n(e,n){if(typeof e=="object"&&e!==null){var a=ep.get(e);return a!==void 0?a:(n={value:e,source:n,stack:Xe(n)},ep.set(e,n),n)}return{value:e,source:n,stack:Xe(n)}}var ti=[],Us=0,$c=0;function Qo(){for(var e=Us,n=$c=Us=0;n<e;){var a=ti[n];ti[n++]=null;var r=ti[n];ti[n++]=null;var c=ti[n];ti[n++]=null;var f=ti[n];if(ti[n++]=null,r!==null&&c!==null){var y=r.pending;y===null?c.next=c:(c.next=y.next,y.next=c),r.pending=c}f!==0&&np(a,c,f)}}function Jo(e,n,a,r){ti[Us++]=e,ti[Us++]=n,ti[Us++]=a,ti[Us++]=r,$c|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function tu(e,n,a,r){return Jo(e,n,a,r),$o(e)}function Ls(e,n){return Jo(e,null,null,n),$o(e)}function np(e,n,a){e.lanes|=a;var r=e.alternate;r!==null&&(r.lanes|=a);for(var c=!1,f=e.return;f!==null;)f.childLanes|=a,r=f.alternate,r!==null&&(r.childLanes|=a),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(c=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,c&&n!==null&&(c=31-Ot(a),e=f.hiddenUpdates,r=e[c],r===null?e[c]=[n]:r.push(n),n.lane=a|536870912),f):null}function $o(e){if(50<lo)throw lo=0,of=null,Error(s(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Ns={};function Cv(e,n,a,r){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Wn(e,n,a,r){return new Cv(e,n,a,r)}function eu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Pi(e,n){var a=e.alternate;return a===null?(a=Wn(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function ip(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function tl(e,n,a,r,c,f){var y=0;if(r=e,typeof e=="function")eu(e)&&(y=1);else if(typeof e=="string")y=Dx(e,a,Q.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case U:return e=Wn(31,a,n,c),e.elementType=U,e.lanes=f,e;case E:return Ja(a.children,c,f,n);case R:y=8,c|=24;break;case S:return e=Wn(12,a,n,c|2),e.elementType=S,e.lanes=f,e;case B:return e=Wn(13,a,n,c),e.elementType=B,e.lanes=f,e;case H:return e=Wn(19,a,n,c),e.elementType=H,e.lanes=f,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case g:case D:y=10;break t;case N:y=9;break t;case w:y=11;break t;case I:y=14;break t;case X:y=16,r=null;break t}y=29,a=Error(s(130,e===null?"null":typeof e,"")),r=null}return n=Wn(y,a,n,c),n.elementType=e,n.type=r,n.lanes=f,n}function Ja(e,n,a,r){return e=Wn(7,e,r,n),e.lanes=a,e}function nu(e,n,a){return e=Wn(6,e,null,n),e.lanes=a,e}function iu(e,n,a){return n=Wn(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var Os=[],Ps=0,el=null,nl=0,ei=[],ni=0,$a=null,zi=1,Ii="";function ts(e,n){Os[Ps++]=nl,Os[Ps++]=el,el=e,nl=n}function ap(e,n,a){ei[ni++]=zi,ei[ni++]=Ii,ei[ni++]=$a,$a=e;var r=zi;e=Ii;var c=32-Ot(r)-1;r&=~(1<<c),a+=1;var f=32-Ot(n)+c;if(30<f){var y=c-c%5;f=(r&(1<<y)-1).toString(32),r>>=y,c-=y,zi=1<<32-Ot(n)+c|a<<c|r,Ii=f+e}else zi=1<<f|a<<c|r,Ii=e}function au(e){e.return!==null&&(ts(e,1),ap(e,1,0))}function su(e){for(;e===el;)el=Os[--Ps],Os[Ps]=null,nl=Os[--Ps],Os[Ps]=null;for(;e===$a;)$a=ei[--ni],ei[ni]=null,Ii=ei[--ni],ei[ni]=null,zi=ei[--ni],ei[ni]=null}var Un=null,Ze=null,Ae=!1,es=null,Si=!1,ru=Error(s(519));function ns(e){var n=Error(s(418,""));throw Hr($n(n,e)),ru}function sp(e){var n=e.stateNode,a=e.type,r=e.memoizedProps;switch(n[sn]=e,n[Sn]=r,a){case"dialog":me("cancel",n),me("close",n);break;case"iframe":case"object":case"embed":me("load",n);break;case"video":case"audio":for(a=0;a<uo.length;a++)me(uo[a],n);break;case"source":me("error",n);break;case"img":case"image":case"link":me("error",n),me("load",n);break;case"details":me("toggle",n);break;case"input":me("invalid",n),He(n,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0),Ne(n);break;case"select":me("invalid",n);break;case"textarea":me("invalid",n),yn(n,r.value,r.defaultValue,r.children),Ne(n)}a=r.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||r.suppressHydrationWarning===!0||M_(n.textContent,a)?(r.popover!=null&&(me("beforetoggle",n),me("toggle",n)),r.onScroll!=null&&me("scroll",n),r.onScrollEnd!=null&&me("scrollend",n),r.onClick!=null&&(n.onclick=zl),n=!0):n=!1,n||ns(e)}function rp(e){for(Un=e.return;Un;)switch(Un.tag){case 5:case 13:Si=!1;return;case 27:case 3:Si=!0;return;default:Un=Un.return}}function Br(e){if(e!==Un)return!1;if(!Ae)return rp(e),Ae=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Ef(e.type,e.memoizedProps)),a=!a),a&&Ze&&ns(e),rp(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));t:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8)if(a=e.data,a==="/$"){if(n===0){Ze=ui(e.nextSibling);break t}n--}else a!=="$"&&a!=="$!"&&a!=="$?"||n++;e=e.nextSibling}Ze=null}}else n===27?(n=Ze,Ca(e.type)?(e=Rf,Rf=null,Ze=e):Ze=n):Ze=Un?ui(e.stateNode.nextSibling):null;return!0}function Fr(){Ze=Un=null,Ae=!1}function op(){var e=es;return e!==null&&(Bn===null?Bn=e:Bn.push.apply(Bn,e),es=null),e}function Hr(e){es===null?es=[e]:es.push(e)}var ou=$(null),is=null,Bi=null;function da(e,n,a){St(ou,n._currentValue),n._currentValue=a}function Fi(e){e._currentValue=ou.current,vt(ou)}function lu(e,n,a){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===a)break;e=e.return}}function cu(e,n,a,r){var c=e.child;for(c!==null&&(c.return=e);c!==null;){var f=c.dependencies;if(f!==null){var y=c.child;f=f.firstContext;t:for(;f!==null;){var b=f;f=c;for(var P=0;P<n.length;P++)if(b.context===n[P]){f.lanes|=a,b=f.alternate,b!==null&&(b.lanes|=a),lu(f.return,a,e),r||(y=null);break t}f=b.next}}else if(c.tag===18){if(y=c.return,y===null)throw Error(s(341));y.lanes|=a,f=y.alternate,f!==null&&(f.lanes|=a),lu(y,a,e),y=null}else y=c.child;if(y!==null)y.return=c;else for(y=c;y!==null;){if(y===e){y=null;break}if(c=y.sibling,c!==null){c.return=y.return,y=c;break}y=y.return}c=y}}function Gr(e,n,a,r){e=null;for(var c=n,f=!1;c!==null;){if(!f){if((c.flags&524288)!==0)f=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var y=c.alternate;if(y===null)throw Error(s(387));if(y=y.memoizedProps,y!==null){var b=c.type;Xn(c.pendingProps.value,y.value)||(e!==null?e.push(b):e=[b])}}else if(c===At.current){if(y=c.alternate,y===null)throw Error(s(387));y.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(e!==null?e.push(go):e=[go])}c=c.return}e!==null&&cu(n,e,a,r),n.flags|=262144}function il(e){for(e=e.firstContext;e!==null;){if(!Xn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function as(e){is=e,Bi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Rn(e){return lp(is,e)}function al(e,n){return is===null&&as(e),lp(e,n)}function lp(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Bi===null){if(e===null)throw Error(s(308));Bi=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else Bi=Bi.next=n;return a}var wv=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,r){e.push(r)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},Dv=o.unstable_scheduleCallback,Uv=o.unstable_NormalPriority,on={$$typeof:D,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function uu(){return{controller:new wv,data:new Map,refCount:0}}function Vr(e){e.refCount--,e.refCount===0&&Dv(Uv,function(){e.controller.abort()})}var kr=null,fu=0,zs=0,Is=null;function Lv(e,n){if(kr===null){var a=kr=[];fu=0,zs=pf(),Is={status:"pending",value:void 0,then:function(r){a.push(r)}}}return fu++,n.then(cp,cp),n}function cp(){if(--fu===0&&kr!==null){Is!==null&&(Is.status="fulfilled");var e=kr;kr=null,zs=0,Is=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function Nv(e,n){var a=[],r={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return e.then(function(){r.status="fulfilled",r.value=n;for(var c=0;c<a.length;c++)(0,a[c])(n)},function(c){for(r.status="rejected",r.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),r}var up=z.S;z.S=function(e,n){typeof n=="object"&&n!==null&&typeof n.then=="function"&&Lv(e,n),up!==null&&up(e,n)};var ss=$(null);function hu(){var e=ss.current;return e!==null?e:ke.pooledCache}function sl(e,n){n===null?St(ss,ss.current):St(ss,n.pool)}function fp(){var e=hu();return e===null?null:{parent:on._currentValue,pool:e}}var Xr=Error(s(460)),hp=Error(s(474)),rl=Error(s(542)),du={then:function(){}};function dp(e){return e=e.status,e==="fulfilled"||e==="rejected"}function ol(){}function pp(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(ol,ol),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,_p(e),e;default:if(typeof n.status=="string")n.then(ol,ol);else{if(e=ke,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=n,e.status="pending",e.then(function(r){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=r}},function(r){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=r}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,_p(e),e}throw Wr=n,Xr}}var Wr=null;function mp(){if(Wr===null)throw Error(s(459));var e=Wr;return Wr=null,e}function _p(e){if(e===Xr||e===rl)throw Error(s(483))}var pa=!1;function pu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function mu(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function ma(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function _a(e,n,a){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(De&2)!==0){var c=r.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),r.pending=n,n=$o(e),np(e,null,a),n}return Jo(e,r,n,a),$o(e)}function qr(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var r=n.lanes;r&=e.pendingLanes,a|=r,n.lanes=a,Bt(e,a)}}function _u(e,n){var a=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,a===r)){var c=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var y={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?c=f=y:f=f.next=y,a=a.next}while(a!==null);f===null?c=f=n:f=f.next=n}else c=f=n;a={baseState:r.baseState,firstBaseUpdate:c,lastBaseUpdate:f,shared:r.shared,callbacks:r.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var gu=!1;function Yr(){if(gu){var e=Is;if(e!==null)throw e}}function Zr(e,n,a,r){gu=!1;var c=e.updateQueue;pa=!1;var f=c.firstBaseUpdate,y=c.lastBaseUpdate,b=c.shared.pending;if(b!==null){c.shared.pending=null;var P=b,J=P.next;P.next=null,y===null?f=J:y.next=J,y=P;var ct=e.alternate;ct!==null&&(ct=ct.updateQueue,b=ct.lastBaseUpdate,b!==y&&(b===null?ct.firstBaseUpdate=J:b.next=J,ct.lastBaseUpdate=P))}if(f!==null){var mt=c.baseState;y=0,ct=J=P=null,b=f;do{var nt=b.lane&-536870913,it=nt!==b.lane;if(it?(Se&nt)===nt:(r&nt)===nt){nt!==0&&nt===zs&&(gu=!0),ct!==null&&(ct=ct.next={lane:0,tag:b.tag,payload:b.payload,callback:null,next:null});t:{var te=e,Qt=b;nt=n;var ze=a;switch(Qt.tag){case 1:if(te=Qt.payload,typeof te=="function"){mt=te.call(ze,mt,nt);break t}mt=te;break t;case 3:te.flags=te.flags&-65537|128;case 0:if(te=Qt.payload,nt=typeof te=="function"?te.call(ze,mt,nt):te,nt==null)break t;mt=_({},mt,nt);break t;case 2:pa=!0}}nt=b.callback,nt!==null&&(e.flags|=64,it&&(e.flags|=8192),it=c.callbacks,it===null?c.callbacks=[nt]:it.push(nt))}else it={lane:nt,tag:b.tag,payload:b.payload,callback:b.callback,next:null},ct===null?(J=ct=it,P=mt):ct=ct.next=it,y|=nt;if(b=b.next,b===null){if(b=c.shared.pending,b===null)break;it=b,b=it.next,it.next=null,c.lastBaseUpdate=it,c.shared.pending=null}}while(!0);ct===null&&(P=mt),c.baseState=P,c.firstBaseUpdate=J,c.lastBaseUpdate=ct,f===null&&(c.shared.lanes=0),Ta|=y,e.lanes=y,e.memoizedState=mt}}function gp(e,n){if(typeof e!="function")throw Error(s(191,e));e.call(n)}function vp(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)gp(a[e],n)}var Bs=$(null),ll=$(0);function xp(e,n){e=qi,St(ll,e),St(Bs,n),qi=e|n.baseLanes}function vu(){St(ll,qi),St(Bs,Bs.current)}function xu(){qi=ll.current,vt(Bs),vt(ll)}var ga=0,ue=null,Oe=null,en=null,cl=!1,Fs=!1,rs=!1,ul=0,jr=0,Hs=null,Ov=0;function Je(){throw Error(s(321))}function Su(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!Xn(e[a],n[a]))return!1;return!0}function yu(e,n,a,r,c,f){return ga=f,ue=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,z.H=e===null||e.memoizedState===null?nm:im,rs=!1,f=a(r,c),rs=!1,Fs&&(f=yp(n,a,r,c)),Sp(e),f}function Sp(e){z.H=_l;var n=Oe!==null&&Oe.next!==null;if(ga=0,en=Oe=ue=null,cl=!1,jr=0,Hs=null,n)throw Error(s(300));e===null||mn||(e=e.dependencies,e!==null&&il(e)&&(mn=!0))}function yp(e,n,a,r){ue=e;var c=0;do{if(Fs&&(Hs=null),jr=0,Fs=!1,25<=c)throw Error(s(301));if(c+=1,en=Oe=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}z.H=Gv,f=n(a,r)}while(Fs);return f}function Pv(){var e=z.H,n=e.useState()[0];return n=typeof n.then=="function"?Kr(n):n,e=e.useState()[0],(Oe!==null?Oe.memoizedState:null)!==e&&(ue.flags|=1024),n}function Mu(){var e=ul!==0;return ul=0,e}function Eu(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function Tu(e){if(cl){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}cl=!1}ga=0,en=Oe=ue=null,Fs=!1,jr=ul=0,Hs=null}function zn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return en===null?ue.memoizedState=en=e:en=en.next=e,en}function nn(){if(Oe===null){var e=ue.alternate;e=e!==null?e.memoizedState:null}else e=Oe.next;var n=en===null?ue.memoizedState:en.next;if(n!==null)en=n,Oe=e;else{if(e===null)throw ue.alternate===null?Error(s(467)):Error(s(310));Oe=e,e={memoizedState:Oe.memoizedState,baseState:Oe.baseState,baseQueue:Oe.baseQueue,queue:Oe.queue,next:null},en===null?ue.memoizedState=en=e:en=en.next=e}return en}function bu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Kr(e){var n=jr;return jr+=1,Hs===null&&(Hs=[]),e=pp(Hs,e,n),n=ue,(en===null?n.memoizedState:en.next)===null&&(n=n.alternate,z.H=n===null||n.memoizedState===null?nm:im),e}function fl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Kr(e);if(e.$$typeof===D)return Rn(e)}throw Error(s(438,String(e)))}function Au(e){var n=null,a=ue.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var r=ue.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(n={data:r.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=bu(),ue.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),r=0;r<e;r++)a[r]=C;return n.index++,a}function Hi(e,n){return typeof n=="function"?n(e):n}function hl(e){var n=nn();return Ru(n,Oe,e)}function Ru(e,n,a){var r=e.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=a;var c=e.baseQueue,f=r.pending;if(f!==null){if(c!==null){var y=c.next;c.next=f.next,f.next=y}n.baseQueue=c=f,r.pending=null}if(f=e.baseState,c===null)e.memoizedState=f;else{n=c.next;var b=y=null,P=null,J=n,ct=!1;do{var mt=J.lane&-536870913;if(mt!==J.lane?(Se&mt)===mt:(ga&mt)===mt){var nt=J.revertLane;if(nt===0)P!==null&&(P=P.next={lane:0,revertLane:0,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null}),mt===zs&&(ct=!0);else if((ga&nt)===nt){J=J.next,nt===zs&&(ct=!0);continue}else mt={lane:0,revertLane:J.revertLane,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null},P===null?(b=P=mt,y=f):P=P.next=mt,ue.lanes|=nt,Ta|=nt;mt=J.action,rs&&a(f,mt),f=J.hasEagerState?J.eagerState:a(f,mt)}else nt={lane:mt,revertLane:J.revertLane,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null},P===null?(b=P=nt,y=f):P=P.next=nt,ue.lanes|=mt,Ta|=mt;J=J.next}while(J!==null&&J!==n);if(P===null?y=f:P.next=b,!Xn(f,e.memoizedState)&&(mn=!0,ct&&(a=Is,a!==null)))throw a;e.memoizedState=f,e.baseState=y,e.baseQueue=P,r.lastRenderedState=f}return c===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function Cu(e){var n=nn(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var r=a.dispatch,c=a.pending,f=n.memoizedState;if(c!==null){a.pending=null;var y=c=c.next;do f=e(f,y.action),y=y.next;while(y!==c);Xn(f,n.memoizedState)||(mn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,r]}function Mp(e,n,a){var r=ue,c=nn(),f=Ae;if(f){if(a===void 0)throw Error(s(407));a=a()}else a=n();var y=!Xn((Oe||c).memoizedState,a);y&&(c.memoizedState=a,mn=!0),c=c.queue;var b=bp.bind(null,r,c,e);if(Qr(2048,8,b,[e]),c.getSnapshot!==n||y||en!==null&&en.memoizedState.tag&1){if(r.flags|=2048,Gs(9,dl(),Tp.bind(null,r,c,a,n),null),ke===null)throw Error(s(349));f||(ga&124)!==0||Ep(r,n,a)}return a}function Ep(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=ue.updateQueue,n===null?(n=bu(),ue.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function Tp(e,n,a,r){n.value=a,n.getSnapshot=r,Ap(n)&&Rp(e)}function bp(e,n,a){return a(function(){Ap(n)&&Rp(e)})}function Ap(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!Xn(e,a)}catch{return!0}}function Rp(e){var n=Ls(e,2);n!==null&&Kn(n,e,2)}function wu(e){var n=zn();if(typeof e=="function"){var a=e;if(e=a(),rs){ot(!0);try{a()}finally{ot(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Hi,lastRenderedState:e},n}function Cp(e,n,a,r){return e.baseState=a,Ru(e,Oe,typeof r=="function"?r:Hi)}function zv(e,n,a,r,c){if(ml(e))throw Error(s(485));if(e=n.action,e!==null){var f={payload:c,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(y){f.listeners.push(y)}};z.T!==null?a(!0):f.isTransition=!1,r(f),a=n.pending,a===null?(f.next=n.pending=f,wp(n,f)):(f.next=a.next,n.pending=a.next=f)}}function wp(e,n){var a=n.action,r=n.payload,c=e.state;if(n.isTransition){var f=z.T,y={};z.T=y;try{var b=a(c,r),P=z.S;P!==null&&P(y,b),Dp(e,n,b)}catch(J){Du(e,n,J)}finally{z.T=f}}else try{f=a(c,r),Dp(e,n,f)}catch(J){Du(e,n,J)}}function Dp(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(r){Up(e,n,r)},function(r){return Du(e,n,r)}):Up(e,n,a)}function Up(e,n,a){n.status="fulfilled",n.value=a,Lp(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,wp(e,a)))}function Du(e,n,a){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do n.status="rejected",n.reason=a,Lp(n),n=n.next;while(n!==r)}e.action=null}function Lp(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function Np(e,n){return n}function Op(e,n){if(Ae){var a=ke.formState;if(a!==null){t:{var r=ue;if(Ae){if(Ze){e:{for(var c=Ze,f=Si;c.nodeType!==8;){if(!f){c=null;break e}if(c=ui(c.nextSibling),c===null){c=null;break e}}f=c.data,c=f==="F!"||f==="F"?c:null}if(c){Ze=ui(c.nextSibling),r=c.data==="F!";break t}}ns(r)}r=!1}r&&(n=a[0])}}return a=zn(),a.memoizedState=a.baseState=n,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Np,lastRenderedState:n},a.queue=r,a=$p.bind(null,ue,r),r.dispatch=a,r=wu(!1),f=Pu.bind(null,ue,!1,r.queue),r=zn(),c={state:n,dispatch:null,action:e,pending:null},r.queue=c,a=zv.bind(null,ue,c,f,a),c.dispatch=a,r.memoizedState=e,[n,a,!1]}function Pp(e){var n=nn();return zp(n,Oe,e)}function zp(e,n,a){if(n=Ru(e,n,Np)[0],e=hl(Hi)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var r=Kr(n)}catch(y){throw y===Xr?rl:y}else r=n;n=nn();var c=n.queue,f=c.dispatch;return a!==n.memoizedState&&(ue.flags|=2048,Gs(9,dl(),Iv.bind(null,c,a),null)),[r,f,e]}function Iv(e,n){e.action=n}function Ip(e){var n=nn(),a=Oe;if(a!==null)return zp(n,a,e);nn(),n=n.memoizedState,a=nn();var r=a.queue.dispatch;return a.memoizedState=e,[n,r,!1]}function Gs(e,n,a,r){return e={tag:e,create:a,deps:r,inst:n,next:null},n=ue.updateQueue,n===null&&(n=bu(),ue.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(r=a.next,a.next=e,e.next=r,n.lastEffect=e),e}function dl(){return{destroy:void 0,resource:void 0}}function Bp(){return nn().memoizedState}function pl(e,n,a,r){var c=zn();r=r===void 0?null:r,ue.flags|=e,c.memoizedState=Gs(1|n,dl(),a,r)}function Qr(e,n,a,r){var c=nn();r=r===void 0?null:r;var f=c.memoizedState.inst;Oe!==null&&r!==null&&Su(r,Oe.memoizedState.deps)?c.memoizedState=Gs(n,f,a,r):(ue.flags|=e,c.memoizedState=Gs(1|n,f,a,r))}function Fp(e,n){pl(8390656,8,e,n)}function Hp(e,n){Qr(2048,8,e,n)}function Gp(e,n){return Qr(4,2,e,n)}function Vp(e,n){return Qr(4,4,e,n)}function kp(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Xp(e,n,a){a=a!=null?a.concat([e]):null,Qr(4,4,kp.bind(null,n,e),a)}function Uu(){}function Wp(e,n){var a=nn();n=n===void 0?null:n;var r=a.memoizedState;return n!==null&&Su(n,r[1])?r[0]:(a.memoizedState=[e,n],e)}function qp(e,n){var a=nn();n=n===void 0?null:n;var r=a.memoizedState;if(n!==null&&Su(n,r[1]))return r[0];if(r=e(),rs){ot(!0);try{e()}finally{ot(!1)}}return a.memoizedState=[r,n],r}function Lu(e,n,a){return a===void 0||(ga&1073741824)!==0?e.memoizedState=n:(e.memoizedState=a,e=jm(),ue.lanes|=e,Ta|=e,a)}function Yp(e,n,a,r){return Xn(a,n)?a:Bs.current!==null?(e=Lu(e,a,r),Xn(e,n)||(mn=!0),e):(ga&42)===0?(mn=!0,e.memoizedState=a):(e=jm(),ue.lanes|=e,Ta|=e,n)}function Zp(e,n,a,r,c){var f=j.p;j.p=f!==0&&8>f?f:8;var y=z.T,b={};z.T=b,Pu(e,!1,n,a);try{var P=c(),J=z.S;if(J!==null&&J(b,P),P!==null&&typeof P=="object"&&typeof P.then=="function"){var ct=Nv(P,r);Jr(e,n,ct,jn(e))}else Jr(e,n,r,jn(e))}catch(mt){Jr(e,n,{then:function(){},status:"rejected",reason:mt},jn())}finally{j.p=f,z.T=y}}function Bv(){}function Nu(e,n,a,r){if(e.tag!==5)throw Error(s(476));var c=jp(e).queue;Zp(e,c,n,Y,a===null?Bv:function(){return Kp(e),a(r)})}function jp(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:Y,baseState:Y,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Hi,lastRenderedState:Y},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Hi,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function Kp(e){var n=jp(e).next.queue;Jr(e,n,{},jn())}function Ou(){return Rn(go)}function Qp(){return nn().memoizedState}function Jp(){return nn().memoizedState}function Fv(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=jn();e=ma(a);var r=_a(n,e,a);r!==null&&(Kn(r,n,a),qr(r,n,a)),n={cache:uu()},e.payload=n;return}n=n.return}}function Hv(e,n,a){var r=jn();a={lane:r,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},ml(e)?tm(n,a):(a=tu(e,n,a,r),a!==null&&(Kn(a,e,r),em(a,n,r)))}function $p(e,n,a){var r=jn();Jr(e,n,a,r)}function Jr(e,n,a,r){var c={lane:r,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(ml(e))tm(n,c);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var y=n.lastRenderedState,b=f(y,a);if(c.hasEagerState=!0,c.eagerState=b,Xn(b,y))return Jo(e,n,c,0),ke===null&&Qo(),!1}catch{}finally{}if(a=tu(e,n,c,r),a!==null)return Kn(a,e,r),em(a,n,r),!0}return!1}function Pu(e,n,a,r){if(r={lane:2,revertLane:pf(),action:r,hasEagerState:!1,eagerState:null,next:null},ml(e)){if(n)throw Error(s(479))}else n=tu(e,a,r,2),n!==null&&Kn(n,e,2)}function ml(e){var n=e.alternate;return e===ue||n!==null&&n===ue}function tm(e,n){Fs=cl=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function em(e,n,a){if((a&4194048)!==0){var r=n.lanes;r&=e.pendingLanes,a|=r,n.lanes=a,Bt(e,a)}}var _l={readContext:Rn,use:fl,useCallback:Je,useContext:Je,useEffect:Je,useImperativeHandle:Je,useLayoutEffect:Je,useInsertionEffect:Je,useMemo:Je,useReducer:Je,useRef:Je,useState:Je,useDebugValue:Je,useDeferredValue:Je,useTransition:Je,useSyncExternalStore:Je,useId:Je,useHostTransitionStatus:Je,useFormState:Je,useActionState:Je,useOptimistic:Je,useMemoCache:Je,useCacheRefresh:Je},nm={readContext:Rn,use:fl,useCallback:function(e,n){return zn().memoizedState=[e,n===void 0?null:n],e},useContext:Rn,useEffect:Fp,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,pl(4194308,4,kp.bind(null,n,e),a)},useLayoutEffect:function(e,n){return pl(4194308,4,e,n)},useInsertionEffect:function(e,n){pl(4,2,e,n)},useMemo:function(e,n){var a=zn();n=n===void 0?null:n;var r=e();if(rs){ot(!0);try{e()}finally{ot(!1)}}return a.memoizedState=[r,n],r},useReducer:function(e,n,a){var r=zn();if(a!==void 0){var c=a(n);if(rs){ot(!0);try{a(n)}finally{ot(!1)}}}else c=n;return r.memoizedState=r.baseState=c,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:c},r.queue=e,e=e.dispatch=Hv.bind(null,ue,e),[r.memoizedState,e]},useRef:function(e){var n=zn();return e={current:e},n.memoizedState=e},useState:function(e){e=wu(e);var n=e.queue,a=$p.bind(null,ue,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:Uu,useDeferredValue:function(e,n){var a=zn();return Lu(a,e,n)},useTransition:function(){var e=wu(!1);return e=Zp.bind(null,ue,e.queue,!0,!1),zn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var r=ue,c=zn();if(Ae){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),ke===null)throw Error(s(349));(Se&124)!==0||Ep(r,n,a)}c.memoizedState=a;var f={value:a,getSnapshot:n};return c.queue=f,Fp(bp.bind(null,r,f,e),[e]),r.flags|=2048,Gs(9,dl(),Tp.bind(null,r,f,a,n),null),a},useId:function(){var e=zn(),n=ke.identifierPrefix;if(Ae){var a=Ii,r=zi;a=(r&~(1<<32-Ot(r)-1)).toString(32)+a,n="«"+n+"R"+a,a=ul++,0<a&&(n+="H"+a.toString(32)),n+="»"}else a=Ov++,n="«"+n+"r"+a.toString(32)+"»";return e.memoizedState=n},useHostTransitionStatus:Ou,useFormState:Op,useActionState:Op,useOptimistic:function(e){var n=zn();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Pu.bind(null,ue,!0,a),a.dispatch=n,[e,n]},useMemoCache:Au,useCacheRefresh:function(){return zn().memoizedState=Fv.bind(null,ue)}},im={readContext:Rn,use:fl,useCallback:Wp,useContext:Rn,useEffect:Hp,useImperativeHandle:Xp,useInsertionEffect:Gp,useLayoutEffect:Vp,useMemo:qp,useReducer:hl,useRef:Bp,useState:function(){return hl(Hi)},useDebugValue:Uu,useDeferredValue:function(e,n){var a=nn();return Yp(a,Oe.memoizedState,e,n)},useTransition:function(){var e=hl(Hi)[0],n=nn().memoizedState;return[typeof e=="boolean"?e:Kr(e),n]},useSyncExternalStore:Mp,useId:Qp,useHostTransitionStatus:Ou,useFormState:Pp,useActionState:Pp,useOptimistic:function(e,n){var a=nn();return Cp(a,Oe,e,n)},useMemoCache:Au,useCacheRefresh:Jp},Gv={readContext:Rn,use:fl,useCallback:Wp,useContext:Rn,useEffect:Hp,useImperativeHandle:Xp,useInsertionEffect:Gp,useLayoutEffect:Vp,useMemo:qp,useReducer:Cu,useRef:Bp,useState:function(){return Cu(Hi)},useDebugValue:Uu,useDeferredValue:function(e,n){var a=nn();return Oe===null?Lu(a,e,n):Yp(a,Oe.memoizedState,e,n)},useTransition:function(){var e=Cu(Hi)[0],n=nn().memoizedState;return[typeof e=="boolean"?e:Kr(e),n]},useSyncExternalStore:Mp,useId:Qp,useHostTransitionStatus:Ou,useFormState:Ip,useActionState:Ip,useOptimistic:function(e,n){var a=nn();return Oe!==null?Cp(a,Oe,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Au,useCacheRefresh:Jp},Vs=null,$r=0;function gl(e){var n=$r;return $r+=1,Vs===null&&(Vs=[]),pp(Vs,e,n)}function to(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function vl(e,n){throw n.$$typeof===v?Error(s(525)):(e=Object.prototype.toString.call(n),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function am(e){var n=e._init;return n(e._payload)}function sm(e){function n(W,V){if(e){var K=W.deletions;K===null?(W.deletions=[V],W.flags|=16):K.push(V)}}function a(W,V){if(!e)return null;for(;V!==null;)n(W,V),V=V.sibling;return null}function r(W){for(var V=new Map;W!==null;)W.key!==null?V.set(W.key,W):V.set(W.index,W),W=W.sibling;return V}function c(W,V){return W=Pi(W,V),W.index=0,W.sibling=null,W}function f(W,V,K){return W.index=K,e?(K=W.alternate,K!==null?(K=K.index,K<V?(W.flags|=67108866,V):K):(W.flags|=67108866,V)):(W.flags|=1048576,V)}function y(W){return e&&W.alternate===null&&(W.flags|=67108866),W}function b(W,V,K,ft){return V===null||V.tag!==6?(V=nu(K,W.mode,ft),V.return=W,V):(V=c(V,K),V.return=W,V)}function P(W,V,K,ft){var Ft=K.type;return Ft===E?ct(W,V,K.props.children,ft,K.key):V!==null&&(V.elementType===Ft||typeof Ft=="object"&&Ft!==null&&Ft.$$typeof===X&&am(Ft)===V.type)?(V=c(V,K.props),to(V,K),V.return=W,V):(V=tl(K.type,K.key,K.props,null,W.mode,ft),to(V,K),V.return=W,V)}function J(W,V,K,ft){return V===null||V.tag!==4||V.stateNode.containerInfo!==K.containerInfo||V.stateNode.implementation!==K.implementation?(V=iu(K,W.mode,ft),V.return=W,V):(V=c(V,K.children||[]),V.return=W,V)}function ct(W,V,K,ft,Ft){return V===null||V.tag!==7?(V=Ja(K,W.mode,ft,Ft),V.return=W,V):(V=c(V,K),V.return=W,V)}function mt(W,V,K){if(typeof V=="string"&&V!==""||typeof V=="number"||typeof V=="bigint")return V=nu(""+V,W.mode,K),V.return=W,V;if(typeof V=="object"&&V!==null){switch(V.$$typeof){case x:return K=tl(V.type,V.key,V.props,null,W.mode,K),to(K,V),K.return=W,K;case M:return V=iu(V,W.mode,K),V.return=W,V;case X:var ft=V._init;return V=ft(V._payload),mt(W,V,K)}if(ht(V)||lt(V))return V=Ja(V,W.mode,K,null),V.return=W,V;if(typeof V.then=="function")return mt(W,gl(V),K);if(V.$$typeof===D)return mt(W,al(W,V),K);vl(W,V)}return null}function nt(W,V,K,ft){var Ft=V!==null?V.key:null;if(typeof K=="string"&&K!==""||typeof K=="number"||typeof K=="bigint")return Ft!==null?null:b(W,V,""+K,ft);if(typeof K=="object"&&K!==null){switch(K.$$typeof){case x:return K.key===Ft?P(W,V,K,ft):null;case M:return K.key===Ft?J(W,V,K,ft):null;case X:return Ft=K._init,K=Ft(K._payload),nt(W,V,K,ft)}if(ht(K)||lt(K))return Ft!==null?null:ct(W,V,K,ft,null);if(typeof K.then=="function")return nt(W,V,gl(K),ft);if(K.$$typeof===D)return nt(W,V,al(W,K),ft);vl(W,K)}return null}function it(W,V,K,ft,Ft){if(typeof ft=="string"&&ft!==""||typeof ft=="number"||typeof ft=="bigint")return W=W.get(K)||null,b(V,W,""+ft,Ft);if(typeof ft=="object"&&ft!==null){switch(ft.$$typeof){case x:return W=W.get(ft.key===null?K:ft.key)||null,P(V,W,ft,Ft);case M:return W=W.get(ft.key===null?K:ft.key)||null,J(V,W,ft,Ft);case X:var he=ft._init;return ft=he(ft._payload),it(W,V,K,ft,Ft)}if(ht(ft)||lt(ft))return W=W.get(K)||null,ct(V,W,ft,Ft,null);if(typeof ft.then=="function")return it(W,V,K,gl(ft),Ft);if(ft.$$typeof===D)return it(W,V,K,al(V,ft),Ft);vl(V,ft)}return null}function te(W,V,K,ft){for(var Ft=null,he=null,Xt=V,Jt=V=0,gn=null;Xt!==null&&Jt<K.length;Jt++){Xt.index>Jt?(gn=Xt,Xt=null):gn=Xt.sibling;var Ee=nt(W,Xt,K[Jt],ft);if(Ee===null){Xt===null&&(Xt=gn);break}e&&Xt&&Ee.alternate===null&&n(W,Xt),V=f(Ee,V,Jt),he===null?Ft=Ee:he.sibling=Ee,he=Ee,Xt=gn}if(Jt===K.length)return a(W,Xt),Ae&&ts(W,Jt),Ft;if(Xt===null){for(;Jt<K.length;Jt++)Xt=mt(W,K[Jt],ft),Xt!==null&&(V=f(Xt,V,Jt),he===null?Ft=Xt:he.sibling=Xt,he=Xt);return Ae&&ts(W,Jt),Ft}for(Xt=r(Xt);Jt<K.length;Jt++)gn=it(Xt,W,Jt,K[Jt],ft),gn!==null&&(e&&gn.alternate!==null&&Xt.delete(gn.key===null?Jt:gn.key),V=f(gn,V,Jt),he===null?Ft=gn:he.sibling=gn,he=gn);return e&&Xt.forEach(function(Na){return n(W,Na)}),Ae&&ts(W,Jt),Ft}function Qt(W,V,K,ft){if(K==null)throw Error(s(151));for(var Ft=null,he=null,Xt=V,Jt=V=0,gn=null,Ee=K.next();Xt!==null&&!Ee.done;Jt++,Ee=K.next()){Xt.index>Jt?(gn=Xt,Xt=null):gn=Xt.sibling;var Na=nt(W,Xt,Ee.value,ft);if(Na===null){Xt===null&&(Xt=gn);break}e&&Xt&&Na.alternate===null&&n(W,Xt),V=f(Na,V,Jt),he===null?Ft=Na:he.sibling=Na,he=Na,Xt=gn}if(Ee.done)return a(W,Xt),Ae&&ts(W,Jt),Ft;if(Xt===null){for(;!Ee.done;Jt++,Ee=K.next())Ee=mt(W,Ee.value,ft),Ee!==null&&(V=f(Ee,V,Jt),he===null?Ft=Ee:he.sibling=Ee,he=Ee);return Ae&&ts(W,Jt),Ft}for(Xt=r(Xt);!Ee.done;Jt++,Ee=K.next())Ee=it(Xt,W,Jt,Ee.value,ft),Ee!==null&&(e&&Ee.alternate!==null&&Xt.delete(Ee.key===null?Jt:Ee.key),V=f(Ee,V,Jt),he===null?Ft=Ee:he.sibling=Ee,he=Ee);return e&&Xt.forEach(function(Vx){return n(W,Vx)}),Ae&&ts(W,Jt),Ft}function ze(W,V,K,ft){if(typeof K=="object"&&K!==null&&K.type===E&&K.key===null&&(K=K.props.children),typeof K=="object"&&K!==null){switch(K.$$typeof){case x:t:{for(var Ft=K.key;V!==null;){if(V.key===Ft){if(Ft=K.type,Ft===E){if(V.tag===7){a(W,V.sibling),ft=c(V,K.props.children),ft.return=W,W=ft;break t}}else if(V.elementType===Ft||typeof Ft=="object"&&Ft!==null&&Ft.$$typeof===X&&am(Ft)===V.type){a(W,V.sibling),ft=c(V,K.props),to(ft,K),ft.return=W,W=ft;break t}a(W,V);break}else n(W,V);V=V.sibling}K.type===E?(ft=Ja(K.props.children,W.mode,ft,K.key),ft.return=W,W=ft):(ft=tl(K.type,K.key,K.props,null,W.mode,ft),to(ft,K),ft.return=W,W=ft)}return y(W);case M:t:{for(Ft=K.key;V!==null;){if(V.key===Ft)if(V.tag===4&&V.stateNode.containerInfo===K.containerInfo&&V.stateNode.implementation===K.implementation){a(W,V.sibling),ft=c(V,K.children||[]),ft.return=W,W=ft;break t}else{a(W,V);break}else n(W,V);V=V.sibling}ft=iu(K,W.mode,ft),ft.return=W,W=ft}return y(W);case X:return Ft=K._init,K=Ft(K._payload),ze(W,V,K,ft)}if(ht(K))return te(W,V,K,ft);if(lt(K)){if(Ft=lt(K),typeof Ft!="function")throw Error(s(150));return K=Ft.call(K),Qt(W,V,K,ft)}if(typeof K.then=="function")return ze(W,V,gl(K),ft);if(K.$$typeof===D)return ze(W,V,al(W,K),ft);vl(W,K)}return typeof K=="string"&&K!==""||typeof K=="number"||typeof K=="bigint"?(K=""+K,V!==null&&V.tag===6?(a(W,V.sibling),ft=c(V,K),ft.return=W,W=ft):(a(W,V),ft=nu(K,W.mode,ft),ft.return=W,W=ft),y(W)):a(W,V)}return function(W,V,K,ft){try{$r=0;var Ft=ze(W,V,K,ft);return Vs=null,Ft}catch(Xt){if(Xt===Xr||Xt===rl)throw Xt;var he=Wn(29,Xt,null,W.mode);return he.lanes=ft,he.return=W,he}finally{}}}var ks=sm(!0),rm=sm(!1),ii=$(null),yi=null;function va(e){var n=e.alternate;St(ln,ln.current&1),St(ii,e),yi===null&&(n===null||Bs.current!==null||n.memoizedState!==null)&&(yi=e)}function om(e){if(e.tag===22){if(St(ln,ln.current),St(ii,e),yi===null){var n=e.alternate;n!==null&&n.memoizedState!==null&&(yi=e)}}else xa()}function xa(){St(ln,ln.current),St(ii,ii.current)}function Gi(e){vt(ii),yi===e&&(yi=null),vt(ln)}var ln=$(0);function xl(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||Af(a)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}function zu(e,n,a,r){n=e.memoizedState,a=a(r,n),a=a==null?n:_({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Iu={enqueueSetState:function(e,n,a){e=e._reactInternals;var r=jn(),c=ma(r);c.payload=n,a!=null&&(c.callback=a),n=_a(e,c,r),n!==null&&(Kn(n,e,r),qr(n,e,r))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var r=jn(),c=ma(r);c.tag=1,c.payload=n,a!=null&&(c.callback=a),n=_a(e,c,r),n!==null&&(Kn(n,e,r),qr(n,e,r))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=jn(),r=ma(a);r.tag=2,n!=null&&(r.callback=n),n=_a(e,r,a),n!==null&&(Kn(n,e,a),qr(n,e,a))}};function lm(e,n,a,r,c,f,y){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,f,y):n.prototype&&n.prototype.isPureReactComponent?!zr(a,r)||!zr(c,f):!0}function cm(e,n,a,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,r),n.state!==e&&Iu.enqueueReplaceState(n,n.state,null)}function os(e,n){var a=n;if("ref"in n){a={};for(var r in n)r!=="ref"&&(a[r]=n[r])}if(e=e.defaultProps){a===n&&(a=_({},a));for(var c in e)a[c]===void 0&&(a[c]=e[c])}return a}var Sl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function um(e){Sl(e)}function fm(e){console.error(e)}function hm(e){Sl(e)}function yl(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(r){setTimeout(function(){throw r})}}function dm(e,n,a){try{var r=e.onCaughtError;r(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function Bu(e,n,a){return a=ma(a),a.tag=3,a.payload={element:null},a.callback=function(){yl(e,n)},a}function pm(e){return e=ma(e),e.tag=3,e}function mm(e,n,a,r){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var f=r.value;e.payload=function(){return c(f)},e.callback=function(){dm(n,a,r)}}var y=a.stateNode;y!==null&&typeof y.componentDidCatch=="function"&&(e.callback=function(){dm(n,a,r),typeof c!="function"&&(ba===null?ba=new Set([this]):ba.add(this));var b=r.stack;this.componentDidCatch(r.value,{componentStack:b!==null?b:""})})}function Vv(e,n,a,r,c){if(a.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(n=a.alternate,n!==null&&Gr(n,a,c,!0),a=ii.current,a!==null){switch(a.tag){case 13:return yi===null?cf():a.alternate===null&&je===0&&(je=3),a.flags&=-257,a.flags|=65536,a.lanes=c,r===du?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([r]):n.add(r),ff(e,r,c)),!1;case 22:return a.flags|=65536,r===du?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([r])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([r]):a.add(r)),ff(e,r,c)),!1}throw Error(s(435,a.tag))}return ff(e,r,c),cf(),!1}if(Ae)return n=ii.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,r!==ru&&(e=Error(s(422),{cause:r}),Hr($n(e,a)))):(r!==ru&&(n=Error(s(423),{cause:r}),Hr($n(n,a))),e=e.current.alternate,e.flags|=65536,c&=-c,e.lanes|=c,r=$n(r,a),c=Bu(e.stateNode,r,c),_u(e,c),je!==4&&(je=2)),!1;var f=Error(s(520),{cause:r});if(f=$n(f,a),oo===null?oo=[f]:oo.push(f),je!==4&&(je=2),n===null)return!0;r=$n(r,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=c&-c,a.lanes|=e,e=Bu(a.stateNode,r,e),_u(a,e),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(ba===null||!ba.has(f))))return a.flags|=65536,c&=-c,a.lanes|=c,c=pm(c),mm(c,e,a,r),_u(a,c),!1}a=a.return}while(a!==null);return!1}var _m=Error(s(461)),mn=!1;function Mn(e,n,a,r){n.child=e===null?rm(n,null,a,r):ks(n,e.child,a,r)}function gm(e,n,a,r,c){a=a.render;var f=n.ref;if("ref"in r){var y={};for(var b in r)b!=="ref"&&(y[b]=r[b])}else y=r;return as(n),r=yu(e,n,a,y,f,c),b=Mu(),e!==null&&!mn?(Eu(e,n,c),Vi(e,n,c)):(Ae&&b&&au(n),n.flags|=1,Mn(e,n,r,c),n.child)}function vm(e,n,a,r,c){if(e===null){var f=a.type;return typeof f=="function"&&!eu(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,xm(e,n,f,r,c)):(e=tl(a.type,null,r,n,n.mode,c),e.ref=n.ref,e.return=n,n.child=e)}if(f=e.child,!qu(e,c)){var y=f.memoizedProps;if(a=a.compare,a=a!==null?a:zr,a(y,r)&&e.ref===n.ref)return Vi(e,n,c)}return n.flags|=1,e=Pi(f,r),e.ref=n.ref,e.return=n,n.child=e}function xm(e,n,a,r,c){if(e!==null){var f=e.memoizedProps;if(zr(f,r)&&e.ref===n.ref)if(mn=!1,n.pendingProps=r=f,qu(e,c))(e.flags&131072)!==0&&(mn=!0);else return n.lanes=e.lanes,Vi(e,n,c)}return Fu(e,n,a,r,c)}function Sm(e,n,a){var r=n.pendingProps,c=r.children,f=e!==null?e.memoizedState:null;if(r.mode==="hidden"){if((n.flags&128)!==0){if(r=f!==null?f.baseLanes|a:a,e!==null){for(c=n.child=e.child,f=0;c!==null;)f=f|c.lanes|c.childLanes,c=c.sibling;n.childLanes=f&~r}else n.childLanes=0,n.child=null;return ym(e,n,r,a)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&sl(n,f!==null?f.cachePool:null),f!==null?xp(n,f):vu(),om(n);else return n.lanes=n.childLanes=536870912,ym(e,n,f!==null?f.baseLanes|a:a,a)}else f!==null?(sl(n,f.cachePool),xp(n,f),xa(),n.memoizedState=null):(e!==null&&sl(n,null),vu(),xa());return Mn(e,n,c,a),n.child}function ym(e,n,a,r){var c=hu();return c=c===null?null:{parent:on._currentValue,pool:c},n.memoizedState={baseLanes:a,cachePool:c},e!==null&&sl(n,null),vu(),om(n),e!==null&&Gr(e,n,r,!0),null}function Ml(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function Fu(e,n,a,r,c){return as(n),a=yu(e,n,a,r,void 0,c),r=Mu(),e!==null&&!mn?(Eu(e,n,c),Vi(e,n,c)):(Ae&&r&&au(n),n.flags|=1,Mn(e,n,a,c),n.child)}function Mm(e,n,a,r,c,f){return as(n),n.updateQueue=null,a=yp(n,r,a,c),Sp(e),r=Mu(),e!==null&&!mn?(Eu(e,n,f),Vi(e,n,f)):(Ae&&r&&au(n),n.flags|=1,Mn(e,n,a,f),n.child)}function Em(e,n,a,r,c){if(as(n),n.stateNode===null){var f=Ns,y=a.contextType;typeof y=="object"&&y!==null&&(f=Rn(y)),f=new a(r,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=Iu,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=r,f.state=n.memoizedState,f.refs={},pu(n),y=a.contextType,f.context=typeof y=="object"&&y!==null?Rn(y):Ns,f.state=n.memoizedState,y=a.getDerivedStateFromProps,typeof y=="function"&&(zu(n,a,y,r),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(y=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),y!==f.state&&Iu.enqueueReplaceState(f,f.state,null),Zr(n,r,f,c),Yr(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),r=!0}else if(e===null){f=n.stateNode;var b=n.memoizedProps,P=os(a,b);f.props=P;var J=f.context,ct=a.contextType;y=Ns,typeof ct=="object"&&ct!==null&&(y=Rn(ct));var mt=a.getDerivedStateFromProps;ct=typeof mt=="function"||typeof f.getSnapshotBeforeUpdate=="function",b=n.pendingProps!==b,ct||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(b||J!==y)&&cm(n,f,r,y),pa=!1;var nt=n.memoizedState;f.state=nt,Zr(n,r,f,c),Yr(),J=n.memoizedState,b||nt!==J||pa?(typeof mt=="function"&&(zu(n,a,mt,r),J=n.memoizedState),(P=pa||lm(n,a,P,r,nt,J,y))?(ct||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=J),f.props=r,f.state=J,f.context=y,r=P):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{f=n.stateNode,mu(e,n),y=n.memoizedProps,ct=os(a,y),f.props=ct,mt=n.pendingProps,nt=f.context,J=a.contextType,P=Ns,typeof J=="object"&&J!==null&&(P=Rn(J)),b=a.getDerivedStateFromProps,(J=typeof b=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(y!==mt||nt!==P)&&cm(n,f,r,P),pa=!1,nt=n.memoizedState,f.state=nt,Zr(n,r,f,c),Yr();var it=n.memoizedState;y!==mt||nt!==it||pa||e!==null&&e.dependencies!==null&&il(e.dependencies)?(typeof b=="function"&&(zu(n,a,b,r),it=n.memoizedState),(ct=pa||lm(n,a,ct,r,nt,it,P)||e!==null&&e.dependencies!==null&&il(e.dependencies))?(J||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(r,it,P),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(r,it,P)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||y===e.memoizedProps&&nt===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||y===e.memoizedProps&&nt===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=it),f.props=r,f.state=it,f.context=P,r=ct):(typeof f.componentDidUpdate!="function"||y===e.memoizedProps&&nt===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||y===e.memoizedProps&&nt===e.memoizedState||(n.flags|=1024),r=!1)}return f=r,Ml(e,n),r=(n.flags&128)!==0,f||r?(f=n.stateNode,a=r&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,e!==null&&r?(n.child=ks(n,e.child,null,c),n.child=ks(n,null,a,c)):Mn(e,n,a,c),n.memoizedState=f.state,e=n.child):e=Vi(e,n,c),e}function Tm(e,n,a,r){return Fr(),n.flags|=256,Mn(e,n,a,r),n.child}var Hu={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Gu(e){return{baseLanes:e,cachePool:fp()}}function Vu(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=ai),e}function bm(e,n,a){var r=n.pendingProps,c=!1,f=(n.flags&128)!==0,y;if((y=f)||(y=e!==null&&e.memoizedState===null?!1:(ln.current&2)!==0),y&&(c=!0,n.flags&=-129),y=(n.flags&32)!==0,n.flags&=-33,e===null){if(Ae){if(c?va(n):xa(),Ae){var b=Ze,P;if(P=b){t:{for(P=b,b=Si;P.nodeType!==8;){if(!b){b=null;break t}if(P=ui(P.nextSibling),P===null){b=null;break t}}b=P}b!==null?(n.memoizedState={dehydrated:b,treeContext:$a!==null?{id:zi,overflow:Ii}:null,retryLane:536870912,hydrationErrors:null},P=Wn(18,null,null,0),P.stateNode=b,P.return=n,n.child=P,Un=n,Ze=null,P=!0):P=!1}P||ns(n)}if(b=n.memoizedState,b!==null&&(b=b.dehydrated,b!==null))return Af(b)?n.lanes=32:n.lanes=536870912,null;Gi(n)}return b=r.children,r=r.fallback,c?(xa(),c=n.mode,b=El({mode:"hidden",children:b},c),r=Ja(r,c,a,null),b.return=n,r.return=n,b.sibling=r,n.child=b,c=n.child,c.memoizedState=Gu(a),c.childLanes=Vu(e,y,a),n.memoizedState=Hu,r):(va(n),ku(n,b))}if(P=e.memoizedState,P!==null&&(b=P.dehydrated,b!==null)){if(f)n.flags&256?(va(n),n.flags&=-257,n=Xu(e,n,a)):n.memoizedState!==null?(xa(),n.child=e.child,n.flags|=128,n=null):(xa(),c=r.fallback,b=n.mode,r=El({mode:"visible",children:r.children},b),c=Ja(c,b,a,null),c.flags|=2,r.return=n,c.return=n,r.sibling=c,n.child=r,ks(n,e.child,null,a),r=n.child,r.memoizedState=Gu(a),r.childLanes=Vu(e,y,a),n.memoizedState=Hu,n=c);else if(va(n),Af(b)){if(y=b.nextSibling&&b.nextSibling.dataset,y)var J=y.dgst;y=J,r=Error(s(419)),r.stack="",r.digest=y,Hr({value:r,source:null,stack:null}),n=Xu(e,n,a)}else if(mn||Gr(e,n,a,!1),y=(a&e.childLanes)!==0,mn||y){if(y=ke,y!==null&&(r=a&-a,r=(r&42)!==0?1:ee(r),r=(r&(y.suspendedLanes|a))!==0?0:r,r!==0&&r!==P.retryLane))throw P.retryLane=r,Ls(e,r),Kn(y,e,r),_m;b.data==="$?"||cf(),n=Xu(e,n,a)}else b.data==="$?"?(n.flags|=192,n.child=e.child,n=null):(e=P.treeContext,Ze=ui(b.nextSibling),Un=n,Ae=!0,es=null,Si=!1,e!==null&&(ei[ni++]=zi,ei[ni++]=Ii,ei[ni++]=$a,zi=e.id,Ii=e.overflow,$a=n),n=ku(n,r.children),n.flags|=4096);return n}return c?(xa(),c=r.fallback,b=n.mode,P=e.child,J=P.sibling,r=Pi(P,{mode:"hidden",children:r.children}),r.subtreeFlags=P.subtreeFlags&65011712,J!==null?c=Pi(J,c):(c=Ja(c,b,a,null),c.flags|=2),c.return=n,r.return=n,r.sibling=c,n.child=r,r=c,c=n.child,b=e.child.memoizedState,b===null?b=Gu(a):(P=b.cachePool,P!==null?(J=on._currentValue,P=P.parent!==J?{parent:J,pool:J}:P):P=fp(),b={baseLanes:b.baseLanes|a,cachePool:P}),c.memoizedState=b,c.childLanes=Vu(e,y,a),n.memoizedState=Hu,r):(va(n),a=e.child,e=a.sibling,a=Pi(a,{mode:"visible",children:r.children}),a.return=n,a.sibling=null,e!==null&&(y=n.deletions,y===null?(n.deletions=[e],n.flags|=16):y.push(e)),n.child=a,n.memoizedState=null,a)}function ku(e,n){return n=El({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function El(e,n){return e=Wn(22,e,null,n),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function Xu(e,n,a){return ks(n,e.child,null,a),e=ku(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Am(e,n,a){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),lu(e.return,n,a)}function Wu(e,n,a,r,c){var f=e.memoizedState;f===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:a,tailMode:c}:(f.isBackwards=n,f.rendering=null,f.renderingStartTime=0,f.last=r,f.tail=a,f.tailMode=c)}function Rm(e,n,a){var r=n.pendingProps,c=r.revealOrder,f=r.tail;if(Mn(e,n,r.children,a),r=ln.current,(r&2)!==0)r=r&1|2,n.flags|=128;else{if(e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Am(e,a,n);else if(e.tag===19)Am(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}switch(St(ln,r),c){case"forwards":for(a=n.child,c=null;a!==null;)e=a.alternate,e!==null&&xl(e)===null&&(c=a),a=a.sibling;a=c,a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null),Wu(n,!1,c,a,f);break;case"backwards":for(a=null,c=n.child,n.child=null;c!==null;){if(e=c.alternate,e!==null&&xl(e)===null){n.child=c;break}e=c.sibling,c.sibling=a,a=c,c=e}Wu(n,!0,a,null,f);break;case"together":Wu(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Vi(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),Ta|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(Gr(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(s(153));if(n.child!==null){for(e=n.child,a=Pi(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=Pi(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function qu(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&il(e)))}function kv(e,n,a){switch(n.tag){case 3:Ct(n,n.stateNode.containerInfo),da(n,on,e.memoizedState.cache),Fr();break;case 27:case 5:Kt(n);break;case 4:Ct(n,n.stateNode.containerInfo);break;case 10:da(n,n.type,n.memoizedProps.value);break;case 13:var r=n.memoizedState;if(r!==null)return r.dehydrated!==null?(va(n),n.flags|=128,null):(a&n.child.childLanes)!==0?bm(e,n,a):(va(n),e=Vi(e,n,a),e!==null?e.sibling:null);va(n);break;case 19:var c=(e.flags&128)!==0;if(r=(a&n.childLanes)!==0,r||(Gr(e,n,a,!1),r=(a&n.childLanes)!==0),c){if(r)return Rm(e,n,a);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),St(ln,ln.current),r)break;return null;case 22:case 23:return n.lanes=0,Sm(e,n,a);case 24:da(n,on,e.memoizedState.cache)}return Vi(e,n,a)}function Cm(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)mn=!0;else{if(!qu(e,a)&&(n.flags&128)===0)return mn=!1,kv(e,n,a);mn=(e.flags&131072)!==0}else mn=!1,Ae&&(n.flags&1048576)!==0&&ap(n,nl,n.index);switch(n.lanes=0,n.tag){case 16:t:{e=n.pendingProps;var r=n.elementType,c=r._init;if(r=c(r._payload),n.type=r,typeof r=="function")eu(r)?(e=os(r,e),n.tag=1,n=Em(null,n,r,e,a)):(n.tag=0,n=Fu(null,n,r,e,a));else{if(r!=null){if(c=r.$$typeof,c===w){n.tag=11,n=gm(null,n,r,e,a);break t}else if(c===I){n.tag=14,n=vm(null,n,r,e,a);break t}}throw n=gt(r)||r,Error(s(306,n,""))}}return n;case 0:return Fu(e,n,n.type,n.pendingProps,a);case 1:return r=n.type,c=os(r,n.pendingProps),Em(e,n,r,c,a);case 3:t:{if(Ct(n,n.stateNode.containerInfo),e===null)throw Error(s(387));r=n.pendingProps;var f=n.memoizedState;c=f.element,mu(e,n),Zr(n,r,null,a);var y=n.memoizedState;if(r=y.cache,da(n,on,r),r!==f.cache&&cu(n,[on],a,!0),Yr(),r=y.element,f.isDehydrated)if(f={element:r,isDehydrated:!1,cache:y.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=Tm(e,n,r,a);break t}else if(r!==c){c=$n(Error(s(424)),n),Hr(c),n=Tm(e,n,r,a);break t}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Ze=ui(e.firstChild),Un=n,Ae=!0,es=null,Si=!0,a=rm(n,null,r,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Fr(),r===c){n=Vi(e,n,a);break t}Mn(e,n,r,a)}n=n.child}return n;case 26:return Ml(e,n),e===null?(a=L_(n.type,null,n.pendingProps,null))?n.memoizedState=a:Ae||(a=n.type,e=n.pendingProps,r=Il(yt.current).createElement(a),r[sn]=n,r[Sn]=e,Tn(r,a,e),tn(r),n.stateNode=r):n.memoizedState=L_(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return Kt(n),e===null&&Ae&&(r=n.stateNode=w_(n.type,n.pendingProps,yt.current),Un=n,Si=!0,c=Ze,Ca(n.type)?(Rf=c,Ze=ui(r.firstChild)):Ze=c),Mn(e,n,n.pendingProps.children,a),Ml(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Ae&&((c=r=Ze)&&(r=gx(r,n.type,n.pendingProps,Si),r!==null?(n.stateNode=r,Un=n,Ze=ui(r.firstChild),Si=!1,c=!0):c=!1),c||ns(n)),Kt(n),c=n.type,f=n.pendingProps,y=e!==null?e.memoizedProps:null,r=f.children,Ef(c,f)?r=null:y!==null&&Ef(c,y)&&(n.flags|=32),n.memoizedState!==null&&(c=yu(e,n,Pv,null,null,a),go._currentValue=c),Ml(e,n),Mn(e,n,r,a),n.child;case 6:return e===null&&Ae&&((e=a=Ze)&&(a=vx(a,n.pendingProps,Si),a!==null?(n.stateNode=a,Un=n,Ze=null,e=!0):e=!1),e||ns(n)),null;case 13:return bm(e,n,a);case 4:return Ct(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=ks(n,null,r,a):Mn(e,n,r,a),n.child;case 11:return gm(e,n,n.type,n.pendingProps,a);case 7:return Mn(e,n,n.pendingProps,a),n.child;case 8:return Mn(e,n,n.pendingProps.children,a),n.child;case 12:return Mn(e,n,n.pendingProps.children,a),n.child;case 10:return r=n.pendingProps,da(n,n.type,r.value),Mn(e,n,r.children,a),n.child;case 9:return c=n.type._context,r=n.pendingProps.children,as(n),c=Rn(c),r=r(c),n.flags|=1,Mn(e,n,r,a),n.child;case 14:return vm(e,n,n.type,n.pendingProps,a);case 15:return xm(e,n,n.type,n.pendingProps,a);case 19:return Rm(e,n,a);case 31:return r=n.pendingProps,a=n.mode,r={mode:r.mode,children:r.children},e===null?(a=El(r,a),a.ref=n.ref,n.child=a,a.return=n,n=a):(a=Pi(e.child,r),a.ref=n.ref,n.child=a,a.return=n,n=a),n;case 22:return Sm(e,n,a);case 24:return as(n),r=Rn(on),e===null?(c=hu(),c===null&&(c=ke,f=uu(),c.pooledCache=f,f.refCount++,f!==null&&(c.pooledCacheLanes|=a),c=f),n.memoizedState={parent:r,cache:c},pu(n),da(n,on,c)):((e.lanes&a)!==0&&(mu(e,n),Zr(n,null,null,a),Yr()),c=e.memoizedState,f=n.memoizedState,c.parent!==r?(c={parent:r,cache:r},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),da(n,on,r)):(r=f.cache,da(n,on,r),r!==c.cache&&cu(n,[on],a,!0))),Mn(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function ki(e){e.flags|=4}function wm(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!I_(n)){if(n=ii.current,n!==null&&((Se&4194048)===Se?yi!==null:(Se&62914560)!==Se&&(Se&536870912)===0||n!==yi))throw Wr=du,hp;e.flags|=8192}}function Tl(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Ut():536870912,e.lanes|=n,Ys|=n)}function eo(e,n){if(!Ae)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var r=null;a!==null;)a.alternate!==null&&(r=a),a=a.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function qe(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,r=0;if(n)for(var c=e.child;c!==null;)a|=c.lanes|c.childLanes,r|=c.subtreeFlags&65011712,r|=c.flags&65011712,c.return=e,c=c.sibling;else for(c=e.child;c!==null;)a|=c.lanes|c.childLanes,r|=c.subtreeFlags,r|=c.flags,c.return=e,c=c.sibling;return e.subtreeFlags|=r,e.childLanes=a,n}function Xv(e,n,a){var r=n.pendingProps;switch(su(n),n.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return qe(n),null;case 1:return qe(n),null;case 3:return a=n.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),n.memoizedState.cache!==r&&(n.flags|=2048),Fi(on),oe(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Br(n)?ki(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,op())),qe(n),null;case 26:return a=n.memoizedState,e===null?(ki(n),a!==null?(qe(n),wm(n,a)):(qe(n),n.flags&=-16777217)):a?a!==e.memoizedState?(ki(n),qe(n),wm(n,a)):(qe(n),n.flags&=-16777217):(e.memoizedProps!==r&&ki(n),qe(n),n.flags&=-16777217),null;case 27:Le(n),a=yt.current;var c=n.type;if(e!==null&&n.stateNode!=null)e.memoizedProps!==r&&ki(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return qe(n),null}e=Q.current,Br(n)?sp(n):(e=w_(c,r,a),n.stateNode=e,ki(n))}return qe(n),null;case 5:if(Le(n),a=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==r&&ki(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return qe(n),null}if(e=Q.current,Br(n))sp(n);else{switch(c=Il(yt.current),e){case 1:e=c.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:e=c.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":e=c.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":e=c.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":e=c.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof r.is=="string"?c.createElement("select",{is:r.is}):c.createElement("select"),r.multiple?e.multiple=!0:r.size&&(e.size=r.size);break;default:e=typeof r.is=="string"?c.createElement(a,{is:r.is}):c.createElement(a)}}e[sn]=n,e[Sn]=r;t:for(c=n.child;c!==null;){if(c.tag===5||c.tag===6)e.appendChild(c.stateNode);else if(c.tag!==4&&c.tag!==27&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===n)break t;for(;c.sibling===null;){if(c.return===null||c.return===n)break t;c=c.return}c.sibling.return=c.return,c=c.sibling}n.stateNode=e;t:switch(Tn(e,a,r),a){case"button":case"input":case"select":case"textarea":e=!!r.autoFocus;break t;case"img":e=!0;break t;default:e=!1}e&&ki(n)}}return qe(n),n.flags&=-16777217,null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==r&&ki(n);else{if(typeof r!="string"&&n.stateNode===null)throw Error(s(166));if(e=yt.current,Br(n)){if(e=n.stateNode,a=n.memoizedProps,r=null,c=Un,c!==null)switch(c.tag){case 27:case 5:r=c.memoizedProps}e[sn]=n,e=!!(e.nodeValue===a||r!==null&&r.suppressHydrationWarning===!0||M_(e.nodeValue,a)),e||ns(n)}else e=Il(e).createTextNode(r),e[sn]=n,n.stateNode=e}return qe(n),null;case 13:if(r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(c=Br(n),r!==null&&r.dehydrated!==null){if(e===null){if(!c)throw Error(s(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(s(317));c[sn]=n}else Fr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;qe(n),c=!1}else c=op(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=c),c=!0;if(!c)return n.flags&256?(Gi(n),n):(Gi(n),null)}if(Gi(n),(n.flags&128)!==0)return n.lanes=a,n;if(a=r!==null,e=e!==null&&e.memoizedState!==null,a){r=n.child,c=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(c=r.alternate.memoizedState.cachePool.pool);var f=null;r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(f=r.memoizedState.cachePool.pool),f!==c&&(r.flags|=2048)}return a!==e&&a&&(n.child.flags|=8192),Tl(n,n.updateQueue),qe(n),null;case 4:return oe(),e===null&&vf(n.stateNode.containerInfo),qe(n),null;case 10:return Fi(n.type),qe(n),null;case 19:if(vt(ln),c=n.memoizedState,c===null)return qe(n),null;if(r=(n.flags&128)!==0,f=c.rendering,f===null)if(r)eo(c,!1);else{if(je!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(f=xl(e),f!==null){for(n.flags|=128,eo(c,!1),e=f.updateQueue,n.updateQueue=e,Tl(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)ip(a,e),a=a.sibling;return St(ln,ln.current&1|2),n.child}e=e.sibling}c.tail!==null&&de()>Rl&&(n.flags|=128,r=!0,eo(c,!1),n.lanes=4194304)}else{if(!r)if(e=xl(f),e!==null){if(n.flags|=128,r=!0,e=e.updateQueue,n.updateQueue=e,Tl(n,e),eo(c,!0),c.tail===null&&c.tailMode==="hidden"&&!f.alternate&&!Ae)return qe(n),null}else 2*de()-c.renderingStartTime>Rl&&a!==536870912&&(n.flags|=128,r=!0,eo(c,!1),n.lanes=4194304);c.isBackwards?(f.sibling=n.child,n.child=f):(e=c.last,e!==null?e.sibling=f:n.child=f,c.last=f)}return c.tail!==null?(n=c.tail,c.rendering=n,c.tail=n.sibling,c.renderingStartTime=de(),n.sibling=null,e=ln.current,St(ln,r?e&1|2:e&1),n):(qe(n),null);case 22:case 23:return Gi(n),xu(),r=n.memoizedState!==null,e!==null?e.memoizedState!==null!==r&&(n.flags|=8192):r&&(n.flags|=8192),r?(a&536870912)!==0&&(n.flags&128)===0&&(qe(n),n.subtreeFlags&6&&(n.flags|=8192)):qe(n),a=n.updateQueue,a!==null&&Tl(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),r=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(r=n.memoizedState.cachePool.pool),r!==a&&(n.flags|=2048),e!==null&&vt(ss),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Fi(on),qe(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function Wv(e,n){switch(su(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Fi(on),oe(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return Le(n),null;case 13:if(Gi(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(s(340));Fr()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return vt(ln),null;case 4:return oe(),null;case 10:return Fi(n.type),null;case 22:case 23:return Gi(n),xu(),e!==null&&vt(ss),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return Fi(on),null;case 25:return null;default:return null}}function Dm(e,n){switch(su(n),n.tag){case 3:Fi(on),oe();break;case 26:case 27:case 5:Le(n);break;case 4:oe();break;case 13:Gi(n);break;case 19:vt(ln);break;case 10:Fi(n.type);break;case 22:case 23:Gi(n),xu(),e!==null&&vt(ss);break;case 24:Fi(on)}}function no(e,n){try{var a=n.updateQueue,r=a!==null?a.lastEffect:null;if(r!==null){var c=r.next;a=c;do{if((a.tag&e)===e){r=void 0;var f=a.create,y=a.inst;r=f(),y.destroy=r}a=a.next}while(a!==c)}}catch(b){Ge(n,n.return,b)}}function Sa(e,n,a){try{var r=n.updateQueue,c=r!==null?r.lastEffect:null;if(c!==null){var f=c.next;r=f;do{if((r.tag&e)===e){var y=r.inst,b=y.destroy;if(b!==void 0){y.destroy=void 0,c=n;var P=a,J=b;try{J()}catch(ct){Ge(c,P,ct)}}}r=r.next}while(r!==f)}}catch(ct){Ge(n,n.return,ct)}}function Um(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{vp(n,a)}catch(r){Ge(e,e.return,r)}}}function Lm(e,n,a){a.props=os(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(r){Ge(e,n,r)}}function io(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof a=="function"?e.refCleanup=a(r):a.current=r}}catch(c){Ge(e,n,c)}}function Mi(e,n){var a=e.ref,r=e.refCleanup;if(a!==null)if(typeof r=="function")try{r()}catch(c){Ge(e,n,c)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){Ge(e,n,c)}else a.current=null}function Nm(e){var n=e.type,a=e.memoizedProps,r=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&r.focus();break t;case"img":a.src?r.src=a.src:a.srcSet&&(r.srcset=a.srcSet)}}catch(c){Ge(e,e.return,c)}}function Yu(e,n,a){try{var r=e.stateNode;hx(r,e.type,a,n),r[Sn]=n}catch(c){Ge(e,e.return,c)}}function Om(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ca(e.type)||e.tag===4}function Zu(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||Om(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ca(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ju(e,n,a){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=zl));else if(r!==4&&(r===27&&Ca(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(ju(e,n,a),e=e.sibling;e!==null;)ju(e,n,a),e=e.sibling}function bl(e,n,a){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(r!==4&&(r===27&&Ca(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(bl(e,n,a),e=e.sibling;e!==null;)bl(e,n,a),e=e.sibling}function Pm(e){var n=e.stateNode,a=e.memoizedProps;try{for(var r=e.type,c=n.attributes;c.length;)n.removeAttributeNode(c[0]);Tn(n,r,a),n[sn]=e,n[Sn]=a}catch(f){Ge(e,e.return,f)}}var Xi=!1,$e=!1,Ku=!1,zm=typeof WeakSet=="function"?WeakSet:Set,_n=null;function qv(e,n){if(e=e.containerInfo,yf=kl,e=Yd(e),Zc(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var r=a.getSelection&&a.getSelection();if(r&&r.rangeCount!==0){a=r.anchorNode;var c=r.anchorOffset,f=r.focusNode;r=r.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var y=0,b=-1,P=-1,J=0,ct=0,mt=e,nt=null;e:for(;;){for(var it;mt!==a||c!==0&&mt.nodeType!==3||(b=y+c),mt!==f||r!==0&&mt.nodeType!==3||(P=y+r),mt.nodeType===3&&(y+=mt.nodeValue.length),(it=mt.firstChild)!==null;)nt=mt,mt=it;for(;;){if(mt===e)break e;if(nt===a&&++J===c&&(b=y),nt===f&&++ct===r&&(P=y),(it=mt.nextSibling)!==null)break;mt=nt,nt=mt.parentNode}mt=it}a=b===-1||P===-1?null:{start:b,end:P}}else a=null}a=a||{start:0,end:0}}else a=null;for(Mf={focusedElem:e,selectionRange:a},kl=!1,_n=n;_n!==null;)if(n=_n,e=n.child,(n.subtreeFlags&1024)!==0&&e!==null)e.return=n,_n=e;else for(;_n!==null;){switch(n=_n,f=n.alternate,e=n.flags,n.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&f!==null){e=void 0,a=n,c=f.memoizedProps,f=f.memoizedState,r=a.stateNode;try{var te=os(a.type,c,a.elementType===a.type);e=r.getSnapshotBeforeUpdate(te,f),r.__reactInternalSnapshotBeforeUpdate=e}catch(Qt){Ge(a,a.return,Qt)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)bf(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":bf(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=n.sibling,e!==null){e.return=n.return,_n=e;break}_n=n.return}}function Im(e,n,a){var r=a.flags;switch(a.tag){case 0:case 11:case 15:ya(e,a),r&4&&no(5,a);break;case 1:if(ya(e,a),r&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(y){Ge(a,a.return,y)}else{var c=os(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(c,n,e.__reactInternalSnapshotBeforeUpdate)}catch(y){Ge(a,a.return,y)}}r&64&&Um(a),r&512&&io(a,a.return);break;case 3:if(ya(e,a),r&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{vp(e,n)}catch(y){Ge(a,a.return,y)}}break;case 27:n===null&&r&4&&Pm(a);case 26:case 5:ya(e,a),n===null&&r&4&&Nm(a),r&512&&io(a,a.return);break;case 12:ya(e,a);break;case 13:ya(e,a),r&4&&Hm(e,a),r&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=ex.bind(null,a),xx(e,a))));break;case 22:if(r=a.memoizedState!==null||Xi,!r){n=n!==null&&n.memoizedState!==null||$e,c=Xi;var f=$e;Xi=r,($e=n)&&!f?Ma(e,a,(a.subtreeFlags&8772)!==0):ya(e,a),Xi=c,$e=f}break;case 30:break;default:ya(e,a)}}function Bm(e){var n=e.alternate;n!==null&&(e.alternate=null,Bm(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&ca(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var We=null,In=!1;function Wi(e,n,a){for(a=a.child;a!==null;)Fm(e,n,a),a=a.sibling}function Fm(e,n,a){if(dt&&typeof dt.onCommitFiberUnmount=="function")try{dt.onCommitFiberUnmount(ut,a)}catch{}switch(a.tag){case 26:$e||Mi(a,n),Wi(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:$e||Mi(a,n);var r=We,c=In;Ca(a.type)&&(We=a.stateNode,In=!1),Wi(e,n,a),ho(a.stateNode),We=r,In=c;break;case 5:$e||Mi(a,n);case 6:if(r=We,c=In,We=null,Wi(e,n,a),We=r,In=c,We!==null)if(In)try{(We.nodeType===9?We.body:We.nodeName==="HTML"?We.ownerDocument.body:We).removeChild(a.stateNode)}catch(f){Ge(a,n,f)}else try{We.removeChild(a.stateNode)}catch(f){Ge(a,n,f)}break;case 18:We!==null&&(In?(e=We,R_(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),yo(e)):R_(We,a.stateNode));break;case 4:r=We,c=In,We=a.stateNode.containerInfo,In=!0,Wi(e,n,a),We=r,In=c;break;case 0:case 11:case 14:case 15:$e||Sa(2,a,n),$e||Sa(4,a,n),Wi(e,n,a);break;case 1:$e||(Mi(a,n),r=a.stateNode,typeof r.componentWillUnmount=="function"&&Lm(a,n,r)),Wi(e,n,a);break;case 21:Wi(e,n,a);break;case 22:$e=(r=$e)||a.memoizedState!==null,Wi(e,n,a),$e=r;break;default:Wi(e,n,a)}}function Hm(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{yo(e)}catch(a){Ge(n,n.return,a)}}function Yv(e){switch(e.tag){case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new zm),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new zm),n;default:throw Error(s(435,e.tag))}}function Qu(e,n){var a=Yv(e);n.forEach(function(r){var c=nx.bind(null,e,r);a.has(r)||(a.add(r),r.then(c,c))})}function qn(e,n){var a=n.deletions;if(a!==null)for(var r=0;r<a.length;r++){var c=a[r],f=e,y=n,b=y;t:for(;b!==null;){switch(b.tag){case 27:if(Ca(b.type)){We=b.stateNode,In=!1;break t}break;case 5:We=b.stateNode,In=!1;break t;case 3:case 4:We=b.stateNode.containerInfo,In=!0;break t}b=b.return}if(We===null)throw Error(s(160));Fm(f,y,c),We=null,In=!1,f=c.alternate,f!==null&&(f.return=null),c.return=null}if(n.subtreeFlags&13878)for(n=n.child;n!==null;)Gm(n,e),n=n.sibling}var ci=null;function Gm(e,n){var a=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:qn(n,e),Yn(e),r&4&&(Sa(3,e,e.return),no(3,e),Sa(5,e,e.return));break;case 1:qn(n,e),Yn(e),r&512&&($e||a===null||Mi(a,a.return)),r&64&&Xi&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?r:a.concat(r))));break;case 26:var c=ci;if(qn(n,e),Yn(e),r&512&&($e||a===null||Mi(a,a.return)),r&4){var f=a!==null?a.memoizedState:null;if(r=e.memoizedState,a===null)if(r===null)if(e.stateNode===null){t:{r=e.type,a=e.memoizedProps,c=c.ownerDocument||c;e:switch(r){case"title":f=c.getElementsByTagName("title")[0],(!f||f[la]||f[sn]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=c.createElement(r),c.head.insertBefore(f,c.querySelector("head > title"))),Tn(f,r,a),f[sn]=e,tn(f),r=f;break t;case"link":var y=P_("link","href",c).get(r+(a.href||""));if(y){for(var b=0;b<y.length;b++)if(f=y[b],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){y.splice(b,1);break e}}f=c.createElement(r),Tn(f,r,a),c.head.appendChild(f);break;case"meta":if(y=P_("meta","content",c).get(r+(a.content||""))){for(b=0;b<y.length;b++)if(f=y[b],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){y.splice(b,1);break e}}f=c.createElement(r),Tn(f,r,a),c.head.appendChild(f);break;default:throw Error(s(468,r))}f[sn]=e,tn(f),r=f}e.stateNode=r}else z_(c,e.type,e.stateNode);else e.stateNode=O_(c,r,e.memoizedProps);else f!==r?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,r===null?z_(c,e.type,e.stateNode):O_(c,r,e.memoizedProps)):r===null&&e.stateNode!==null&&Yu(e,e.memoizedProps,a.memoizedProps)}break;case 27:qn(n,e),Yn(e),r&512&&($e||a===null||Mi(a,a.return)),a!==null&&r&4&&Yu(e,e.memoizedProps,a.memoizedProps);break;case 5:if(qn(n,e),Yn(e),r&512&&($e||a===null||Mi(a,a.return)),e.flags&32){c=e.stateNode;try{xi(c,"")}catch(it){Ge(e,e.return,it)}}r&4&&e.stateNode!=null&&(c=e.memoizedProps,Yu(e,c,a!==null?a.memoizedProps:c)),r&1024&&(Ku=!0);break;case 6:if(qn(n,e),Yn(e),r&4){if(e.stateNode===null)throw Error(s(162));r=e.memoizedProps,a=e.stateNode;try{a.nodeValue=r}catch(it){Ge(e,e.return,it)}}break;case 3:if(Hl=null,c=ci,ci=Bl(n.containerInfo),qn(n,e),ci=c,Yn(e),r&4&&a!==null&&a.memoizedState.isDehydrated)try{yo(n.containerInfo)}catch(it){Ge(e,e.return,it)}Ku&&(Ku=!1,Vm(e));break;case 4:r=ci,ci=Bl(e.stateNode.containerInfo),qn(n,e),Yn(e),ci=r;break;case 12:qn(n,e),Yn(e);break;case 13:qn(n,e),Yn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(af=de()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,Qu(e,r)));break;case 22:c=e.memoizedState!==null;var P=a!==null&&a.memoizedState!==null,J=Xi,ct=$e;if(Xi=J||c,$e=ct||P,qn(n,e),$e=ct,Xi=J,Yn(e),r&8192)t:for(n=e.stateNode,n._visibility=c?n._visibility&-2:n._visibility|1,c&&(a===null||P||Xi||$e||ls(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){P=a=n;try{if(f=P.stateNode,c)y=f.style,typeof y.setProperty=="function"?y.setProperty("display","none","important"):y.display="none";else{b=P.stateNode;var mt=P.memoizedProps.style,nt=mt!=null&&mt.hasOwnProperty("display")?mt.display:null;b.style.display=nt==null||typeof nt=="boolean"?"":(""+nt).trim()}}catch(it){Ge(P,P.return,it)}}}else if(n.tag===6){if(a===null){P=n;try{P.stateNode.nodeValue=c?"":P.memoizedProps}catch(it){Ge(P,P.return,it)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}r&4&&(r=e.updateQueue,r!==null&&(a=r.retryQueue,a!==null&&(r.retryQueue=null,Qu(e,a))));break;case 19:qn(n,e),Yn(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,Qu(e,r)));break;case 30:break;case 21:break;default:qn(n,e),Yn(e)}}function Yn(e){var n=e.flags;if(n&2){try{for(var a,r=e.return;r!==null;){if(Om(r)){a=r;break}r=r.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var c=a.stateNode,f=Zu(e);bl(e,f,c);break;case 5:var y=a.stateNode;a.flags&32&&(xi(y,""),a.flags&=-33);var b=Zu(e);bl(e,b,y);break;case 3:case 4:var P=a.stateNode.containerInfo,J=Zu(e);ju(e,J,P);break;default:throw Error(s(161))}}catch(ct){Ge(e,e.return,ct)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Vm(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;Vm(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function ya(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Im(e,n.alternate,n),n=n.sibling}function ls(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:Sa(4,n,n.return),ls(n);break;case 1:Mi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&Lm(n,n.return,a),ls(n);break;case 27:ho(n.stateNode);case 26:case 5:Mi(n,n.return),ls(n);break;case 22:n.memoizedState===null&&ls(n);break;case 30:ls(n);break;default:ls(n)}e=e.sibling}}function Ma(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var r=n.alternate,c=e,f=n,y=f.flags;switch(f.tag){case 0:case 11:case 15:Ma(c,f,a),no(4,f);break;case 1:if(Ma(c,f,a),r=f,c=r.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(J){Ge(r,r.return,J)}if(r=f,c=r.updateQueue,c!==null){var b=r.stateNode;try{var P=c.shared.hiddenCallbacks;if(P!==null)for(c.shared.hiddenCallbacks=null,c=0;c<P.length;c++)gp(P[c],b)}catch(J){Ge(r,r.return,J)}}a&&y&64&&Um(f),io(f,f.return);break;case 27:Pm(f);case 26:case 5:Ma(c,f,a),a&&r===null&&y&4&&Nm(f),io(f,f.return);break;case 12:Ma(c,f,a);break;case 13:Ma(c,f,a),a&&y&4&&Hm(c,f);break;case 22:f.memoizedState===null&&Ma(c,f,a),io(f,f.return);break;case 30:break;default:Ma(c,f,a)}n=n.sibling}}function Ju(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Vr(a))}function $u(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Vr(e))}function Ei(e,n,a,r){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)km(e,n,a,r),n=n.sibling}function km(e,n,a,r){var c=n.flags;switch(n.tag){case 0:case 11:case 15:Ei(e,n,a,r),c&2048&&no(9,n);break;case 1:Ei(e,n,a,r);break;case 3:Ei(e,n,a,r),c&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Vr(e)));break;case 12:if(c&2048){Ei(e,n,a,r),e=n.stateNode;try{var f=n.memoizedProps,y=f.id,b=f.onPostCommit;typeof b=="function"&&b(y,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(P){Ge(n,n.return,P)}}else Ei(e,n,a,r);break;case 13:Ei(e,n,a,r);break;case 23:break;case 22:f=n.stateNode,y=n.alternate,n.memoizedState!==null?f._visibility&2?Ei(e,n,a,r):ao(e,n):f._visibility&2?Ei(e,n,a,r):(f._visibility|=2,Xs(e,n,a,r,(n.subtreeFlags&10256)!==0)),c&2048&&Ju(y,n);break;case 24:Ei(e,n,a,r),c&2048&&$u(n.alternate,n);break;default:Ei(e,n,a,r)}}function Xs(e,n,a,r,c){for(c=c&&(n.subtreeFlags&10256)!==0,n=n.child;n!==null;){var f=e,y=n,b=a,P=r,J=y.flags;switch(y.tag){case 0:case 11:case 15:Xs(f,y,b,P,c),no(8,y);break;case 23:break;case 22:var ct=y.stateNode;y.memoizedState!==null?ct._visibility&2?Xs(f,y,b,P,c):ao(f,y):(ct._visibility|=2,Xs(f,y,b,P,c)),c&&J&2048&&Ju(y.alternate,y);break;case 24:Xs(f,y,b,P,c),c&&J&2048&&$u(y.alternate,y);break;default:Xs(f,y,b,P,c)}n=n.sibling}}function ao(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,r=n,c=r.flags;switch(r.tag){case 22:ao(a,r),c&2048&&Ju(r.alternate,r);break;case 24:ao(a,r),c&2048&&$u(r.alternate,r);break;default:ao(a,r)}n=n.sibling}}var so=8192;function Ws(e){if(e.subtreeFlags&so)for(e=e.child;e!==null;)Xm(e),e=e.sibling}function Xm(e){switch(e.tag){case 26:Ws(e),e.flags&so&&e.memoizedState!==null&&Lx(ci,e.memoizedState,e.memoizedProps);break;case 5:Ws(e);break;case 3:case 4:var n=ci;ci=Bl(e.stateNode.containerInfo),Ws(e),ci=n;break;case 22:e.memoizedState===null&&(n=e.alternate,n!==null&&n.memoizedState!==null?(n=so,so=16777216,Ws(e),so=n):Ws(e));break;default:Ws(e)}}function Wm(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function ro(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];_n=r,Ym(r,e)}Wm(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)qm(e),e=e.sibling}function qm(e){switch(e.tag){case 0:case 11:case 15:ro(e),e.flags&2048&&Sa(9,e,e.return);break;case 3:ro(e);break;case 12:ro(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Al(e)):ro(e);break;default:ro(e)}}function Al(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];_n=r,Ym(r,e)}Wm(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Sa(8,n,n.return),Al(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Al(n));break;default:Al(n)}e=e.sibling}}function Ym(e,n){for(;_n!==null;){var a=_n;switch(a.tag){case 0:case 11:case 15:Sa(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var r=a.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:Vr(a.memoizedState.cache)}if(r=a.child,r!==null)r.return=a,_n=r;else t:for(a=e;_n!==null;){r=_n;var c=r.sibling,f=r.return;if(Bm(r),r===a){_n=null;break t}if(c!==null){c.return=f,_n=c;break t}_n=f}}}var Zv={getCacheForType:function(e){var n=Rn(on),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a}},jv=typeof WeakMap=="function"?WeakMap:Map,De=0,ke=null,pe=null,Se=0,Ue=0,Zn=null,Ea=!1,qs=!1,tf=!1,qi=0,je=0,Ta=0,cs=0,ef=0,ai=0,Ys=0,oo=null,Bn=null,nf=!1,af=0,Rl=1/0,Cl=null,ba=null,En=0,Aa=null,Zs=null,js=0,sf=0,rf=null,Zm=null,lo=0,of=null;function jn(){if((De&2)!==0&&Se!==0)return Se&-Se;if(z.T!==null){var e=zs;return e!==0?e:pf()}return Me()}function jm(){ai===0&&(ai=(Se&536870912)===0||Ae?k():536870912);var e=ii.current;return e!==null&&(e.flags|=32),ai}function Kn(e,n,a){(e===ke&&(Ue===2||Ue===9)||e.cancelPendingCommit!==null)&&(Ks(e,0),Ra(e,Se,ai,!1)),zt(e,a),((De&2)===0||e!==ke)&&(e===ke&&((De&2)===0&&(cs|=a),je===4&&Ra(e,Se,ai,!1)),Ti(e))}function Km(e,n,a){if((De&6)!==0)throw Error(s(327));var r=!a&&(n&124)===0&&(n&e.expiredLanes)===0||Rt(e,n),c=r?Jv(e,n):uf(e,n,!0),f=r;do{if(c===0){qs&&!r&&Ra(e,n,0,!1);break}else{if(a=e.current.alternate,f&&!Kv(a)){c=uf(e,n,!1),f=!1;continue}if(c===2){if(f=n,e.errorRecoveryDisabledLanes&f)var y=0;else y=e.pendingLanes&-536870913,y=y!==0?y:y&536870912?536870912:0;if(y!==0){n=y;t:{var b=e;c=oo;var P=b.current.memoizedState.isDehydrated;if(P&&(Ks(b,y).flags|=256),y=uf(b,y,!1),y!==2){if(tf&&!P){b.errorRecoveryDisabledLanes|=f,cs|=f,c=4;break t}f=Bn,Bn=c,f!==null&&(Bn===null?Bn=f:Bn.push.apply(Bn,f))}c=y}if(f=!1,c!==2)continue}}if(c===1){Ks(e,0),Ra(e,n,0,!0);break}t:{switch(r=e,f=c,f){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:Ra(r,n,ai,!Ea);break t;case 2:Bn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(c=af+300-de(),10<c)){if(Ra(r,n,ai,!Ea),qt(r,0,!0)!==0)break t;r.timeoutHandle=b_(Qm.bind(null,r,a,Bn,Cl,nf,n,ai,cs,Ys,Ea,f,2,-0,0),c);break t}Qm(r,a,Bn,Cl,nf,n,ai,cs,Ys,Ea,f,0,-0,0)}}break}while(!0);Ti(e)}function Qm(e,n,a,r,c,f,y,b,P,J,ct,mt,nt,it){if(e.timeoutHandle=-1,mt=n.subtreeFlags,(mt&8192||(mt&16785408)===16785408)&&(_o={stylesheets:null,count:0,unsuspend:Ux},Xm(n),mt=Nx(),mt!==null)){e.cancelPendingCommit=mt(a_.bind(null,e,n,f,a,r,c,y,b,P,ct,1,nt,it)),Ra(e,f,y,!J);return}a_(e,n,f,a,r,c,y,b,P)}function Kv(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var r=0;r<a.length;r++){var c=a[r],f=c.getSnapshot;c=c.value;try{if(!Xn(f(),c))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ra(e,n,a,r){n&=~ef,n&=~cs,e.suspendedLanes|=n,e.pingedLanes&=~n,r&&(e.warmLanes|=n),r=e.expirationTimes;for(var c=n;0<c;){var f=31-Ot(c),y=1<<f;r[f]=-1,c&=~y}a!==0&&_t(e,a,n)}function wl(){return(De&6)===0?(co(0),!1):!0}function lf(){if(pe!==null){if(Ue===0)var e=pe.return;else e=pe,Bi=is=null,Tu(e),Vs=null,$r=0,e=pe;for(;e!==null;)Dm(e.alternate,e),e=e.return;pe=null}}function Ks(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,px(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),lf(),ke=e,pe=a=Pi(e.current,null),Se=n,Ue=0,Zn=null,Ea=!1,qs=Rt(e,n),tf=!1,Ys=ai=ef=cs=Ta=je=0,Bn=oo=null,nf=!1,(n&8)!==0&&(n|=n&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=n;0<r;){var c=31-Ot(r),f=1<<c;n|=e[c],r&=~f}return qi=n,Qo(),a}function Jm(e,n){ue=null,z.H=_l,n===Xr||n===rl?(n=mp(),Ue=3):n===hp?(n=mp(),Ue=4):Ue=n===_m?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Zn=n,pe===null&&(je=1,yl(e,$n(n,e.current)))}function $m(){var e=z.H;return z.H=_l,e===null?_l:e}function t_(){var e=z.A;return z.A=Zv,e}function cf(){je=4,Ea||(Se&4194048)!==Se&&ii.current!==null||(qs=!0),(Ta&134217727)===0&&(cs&134217727)===0||ke===null||Ra(ke,Se,ai,!1)}function uf(e,n,a){var r=De;De|=2;var c=$m(),f=t_();(ke!==e||Se!==n)&&(Cl=null,Ks(e,n)),n=!1;var y=je;t:do try{if(Ue!==0&&pe!==null){var b=pe,P=Zn;switch(Ue){case 8:lf(),y=6;break t;case 3:case 2:case 9:case 6:ii.current===null&&(n=!0);var J=Ue;if(Ue=0,Zn=null,Qs(e,b,P,J),a&&qs){y=0;break t}break;default:J=Ue,Ue=0,Zn=null,Qs(e,b,P,J)}}Qv(),y=je;break}catch(ct){Jm(e,ct)}while(!0);return n&&e.shellSuspendCounter++,Bi=is=null,De=r,z.H=c,z.A=f,pe===null&&(ke=null,Se=0,Qo()),y}function Qv(){for(;pe!==null;)e_(pe)}function Jv(e,n){var a=De;De|=2;var r=$m(),c=t_();ke!==e||Se!==n?(Cl=null,Rl=de()+500,Ks(e,n)):qs=Rt(e,n);t:do try{if(Ue!==0&&pe!==null){n=pe;var f=Zn;e:switch(Ue){case 1:Ue=0,Zn=null,Qs(e,n,f,1);break;case 2:case 9:if(dp(f)){Ue=0,Zn=null,n_(n);break}n=function(){Ue!==2&&Ue!==9||ke!==e||(Ue=7),Ti(e)},f.then(n,n);break t;case 3:Ue=7;break t;case 4:Ue=5;break t;case 7:dp(f)?(Ue=0,Zn=null,n_(n)):(Ue=0,Zn=null,Qs(e,n,f,7));break;case 5:var y=null;switch(pe.tag){case 26:y=pe.memoizedState;case 5:case 27:var b=pe;if(!y||I_(y)){Ue=0,Zn=null;var P=b.sibling;if(P!==null)pe=P;else{var J=b.return;J!==null?(pe=J,Dl(J)):pe=null}break e}}Ue=0,Zn=null,Qs(e,n,f,5);break;case 6:Ue=0,Zn=null,Qs(e,n,f,6);break;case 8:lf(),je=6;break t;default:throw Error(s(462))}}$v();break}catch(ct){Jm(e,ct)}while(!0);return Bi=is=null,z.H=r,z.A=c,De=a,pe!==null?0:(ke=null,Se=0,Qo(),je)}function $v(){for(;pe!==null&&!xn();)e_(pe)}function e_(e){var n=Cm(e.alternate,e,qi);e.memoizedProps=e.pendingProps,n===null?Dl(e):pe=n}function n_(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=Mm(a,n,n.pendingProps,n.type,void 0,Se);break;case 11:n=Mm(a,n,n.pendingProps,n.type.render,n.ref,Se);break;case 5:Tu(n);default:Dm(a,n),n=pe=ip(n,qi),n=Cm(a,n,qi)}e.memoizedProps=e.pendingProps,n===null?Dl(e):pe=n}function Qs(e,n,a,r){Bi=is=null,Tu(n),Vs=null,$r=0;var c=n.return;try{if(Vv(e,c,n,a,Se)){je=1,yl(e,$n(a,e.current)),pe=null;return}}catch(f){if(c!==null)throw pe=c,f;je=1,yl(e,$n(a,e.current)),pe=null;return}n.flags&32768?(Ae||r===1?e=!0:qs||(Se&536870912)!==0?e=!1:(Ea=e=!0,(r===2||r===9||r===3||r===6)&&(r=ii.current,r!==null&&r.tag===13&&(r.flags|=16384))),i_(n,e)):Dl(n)}function Dl(e){var n=e;do{if((n.flags&32768)!==0){i_(n,Ea);return}e=n.return;var a=Xv(n.alternate,n,qi);if(a!==null){pe=a;return}if(n=n.sibling,n!==null){pe=n;return}pe=n=e}while(n!==null);je===0&&(je=5)}function i_(e,n){do{var a=Wv(e.alternate,e);if(a!==null){a.flags&=32767,pe=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){pe=e;return}pe=e=a}while(e!==null);je=6,pe=null}function a_(e,n,a,r,c,f,y,b,P){e.cancelPendingCommit=null;do Ul();while(En!==0);if((De&6)!==0)throw Error(s(327));if(n!==null){if(n===e.current)throw Error(s(177));if(f=n.lanes|n.childLanes,f|=$c,bt(e,a,f,y,b,P),e===ke&&(pe=ke=null,Se=0),Zs=n,Aa=e,js=a,sf=f,rf=c,Zm=r,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,ix(ie,function(){return c_(),null})):(e.callbackNode=null,e.callbackPriority=0),r=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||r){r=z.T,z.T=null,c=j.p,j.p=2,y=De,De|=4;try{qv(e,n,a)}finally{De=y,j.p=c,z.T=r}}En=1,s_(),r_(),o_()}}function s_(){if(En===1){En=0;var e=Aa,n=Zs,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=z.T,z.T=null;var r=j.p;j.p=2;var c=De;De|=4;try{Gm(n,e);var f=Mf,y=Yd(e.containerInfo),b=f.focusedElem,P=f.selectionRange;if(y!==b&&b&&b.ownerDocument&&qd(b.ownerDocument.documentElement,b)){if(P!==null&&Zc(b)){var J=P.start,ct=P.end;if(ct===void 0&&(ct=J),"selectionStart"in b)b.selectionStart=J,b.selectionEnd=Math.min(ct,b.value.length);else{var mt=b.ownerDocument||document,nt=mt&&mt.defaultView||window;if(nt.getSelection){var it=nt.getSelection(),te=b.textContent.length,Qt=Math.min(P.start,te),ze=P.end===void 0?Qt:Math.min(P.end,te);!it.extend&&Qt>ze&&(y=ze,ze=Qt,Qt=y);var W=Wd(b,Qt),V=Wd(b,ze);if(W&&V&&(it.rangeCount!==1||it.anchorNode!==W.node||it.anchorOffset!==W.offset||it.focusNode!==V.node||it.focusOffset!==V.offset)){var K=mt.createRange();K.setStart(W.node,W.offset),it.removeAllRanges(),Qt>ze?(it.addRange(K),it.extend(V.node,V.offset)):(K.setEnd(V.node,V.offset),it.addRange(K))}}}}for(mt=[],it=b;it=it.parentNode;)it.nodeType===1&&mt.push({element:it,left:it.scrollLeft,top:it.scrollTop});for(typeof b.focus=="function"&&b.focus(),b=0;b<mt.length;b++){var ft=mt[b];ft.element.scrollLeft=ft.left,ft.element.scrollTop=ft.top}}kl=!!yf,Mf=yf=null}finally{De=c,j.p=r,z.T=a}}e.current=n,En=2}}function r_(){if(En===2){En=0;var e=Aa,n=Zs,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=z.T,z.T=null;var r=j.p;j.p=2;var c=De;De|=4;try{Im(e,n.alternate,n)}finally{De=c,j.p=r,z.T=a}}En=3}}function o_(){if(En===4||En===3){En=0,ye();var e=Aa,n=Zs,a=js,r=Zm;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?En=5:(En=0,Zs=Aa=null,l_(e,e.pendingLanes));var c=e.pendingLanes;if(c===0&&(ba=null),we(a),n=n.stateNode,dt&&typeof dt.onCommitFiberRoot=="function")try{dt.onCommitFiberRoot(ut,n,void 0,(n.current.flags&128)===128)}catch{}if(r!==null){n=z.T,c=j.p,j.p=2,z.T=null;try{for(var f=e.onRecoverableError,y=0;y<r.length;y++){var b=r[y];f(b.value,{componentStack:b.stack})}}finally{z.T=n,j.p=c}}(js&3)!==0&&Ul(),Ti(e),c=e.pendingLanes,(a&4194090)!==0&&(c&42)!==0?e===of?lo++:(lo=0,of=e):lo=0,co(0)}}function l_(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,Vr(n)))}function Ul(e){return s_(),r_(),o_(),c_()}function c_(){if(En!==5)return!1;var e=Aa,n=sf;sf=0;var a=we(js),r=z.T,c=j.p;try{j.p=32>a?32:a,z.T=null,a=rf,rf=null;var f=Aa,y=js;if(En=0,Zs=Aa=null,js=0,(De&6)!==0)throw Error(s(331));var b=De;if(De|=4,qm(f.current),km(f,f.current,y,a),De=b,co(0,!1),dt&&typeof dt.onPostCommitFiberRoot=="function")try{dt.onPostCommitFiberRoot(ut,f)}catch{}return!0}finally{j.p=c,z.T=r,l_(e,n)}}function u_(e,n,a){n=$n(a,n),n=Bu(e.stateNode,n,2),e=_a(e,n,2),e!==null&&(zt(e,2),Ti(e))}function Ge(e,n,a){if(e.tag===3)u_(e,e,a);else for(;n!==null;){if(n.tag===3){u_(n,e,a);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(ba===null||!ba.has(r))){e=$n(a,e),a=pm(2),r=_a(n,a,2),r!==null&&(mm(a,r,n,e),zt(r,2),Ti(r));break}}n=n.return}}function ff(e,n,a){var r=e.pingCache;if(r===null){r=e.pingCache=new jv;var c=new Set;r.set(n,c)}else c=r.get(n),c===void 0&&(c=new Set,r.set(n,c));c.has(a)||(tf=!0,c.add(a),e=tx.bind(null,e,n,a),n.then(e,e))}function tx(e,n,a){var r=e.pingCache;r!==null&&r.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,ke===e&&(Se&a)===a&&(je===4||je===3&&(Se&62914560)===Se&&300>de()-af?(De&2)===0&&Ks(e,0):ef|=a,Ys===Se&&(Ys=0)),Ti(e)}function f_(e,n){n===0&&(n=Ut()),e=Ls(e,n),e!==null&&(zt(e,n),Ti(e))}function ex(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),f_(e,a)}function nx(e,n){var a=0;switch(e.tag){case 13:var r=e.stateNode,c=e.memoizedState;c!==null&&(a=c.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(s(314))}r!==null&&r.delete(n),f_(e,a)}function ix(e,n){return ge(e,n)}var Ll=null,Js=null,hf=!1,Nl=!1,df=!1,us=0;function Ti(e){e!==Js&&e.next===null&&(Js===null?Ll=Js=e:Js=Js.next=e),Nl=!0,hf||(hf=!0,sx())}function co(e,n){if(!df&&Nl){df=!0;do for(var a=!1,r=Ll;r!==null;){if(e!==0){var c=r.pendingLanes;if(c===0)var f=0;else{var y=r.suspendedLanes,b=r.pingedLanes;f=(1<<31-Ot(42|e)+1)-1,f&=c&~(y&~b),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,m_(r,f))}else f=Se,f=qt(r,r===ke?f:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(f&3)===0||Rt(r,f)||(a=!0,m_(r,f));r=r.next}while(a);df=!1}}function ax(){h_()}function h_(){Nl=hf=!1;var e=0;us!==0&&(dx()&&(e=us),us=0);for(var n=de(),a=null,r=Ll;r!==null;){var c=r.next,f=d_(r,n);f===0?(r.next=null,a===null?Ll=c:a.next=c,c===null&&(Js=a)):(a=r,(e!==0||(f&3)!==0)&&(Nl=!0)),r=c}co(e)}function d_(e,n){for(var a=e.suspendedLanes,r=e.pingedLanes,c=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var y=31-Ot(f),b=1<<y,P=c[y];P===-1?((b&a)===0||(b&r)!==0)&&(c[y]=ne(b,n)):P<=n&&(e.expiredLanes|=b),f&=~b}if(n=ke,a=Se,a=qt(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,a===0||e===n&&(Ue===2||Ue===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&F(r),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Rt(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(r!==null&&F(r),we(a)){case 2:case 8:a=Yt;break;case 32:a=ie;break;case 268435456:a=O;break;default:a=ie}return r=p_.bind(null,e),a=ge(a,r),e.callbackPriority=n,e.callbackNode=a,n}return r!==null&&r!==null&&F(r),e.callbackPriority=2,e.callbackNode=null,2}function p_(e,n){if(En!==0&&En!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Ul()&&e.callbackNode!==a)return null;var r=Se;return r=qt(e,e===ke?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(Km(e,r,n),d_(e,de()),e.callbackNode!=null&&e.callbackNode===a?p_.bind(null,e):null)}function m_(e,n){if(Ul())return null;Km(e,n,!0)}function sx(){mx(function(){(De&6)!==0?ge(ve,ax):h_()})}function pf(){return us===0&&(us=k()),us}function __(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Xo(""+e)}function g_(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function rx(e,n,a,r,c){if(n==="submit"&&a&&a.stateNode===c){var f=__((c[Sn]||null).action),y=r.submitter;y&&(n=(n=y[Sn]||null)?__(n.formAction):y.getAttribute("formAction"),n!==null&&(f=n,y=null));var b=new Zo("action","action",null,r,c);e.push({event:b,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(us!==0){var P=y?g_(c,y):new FormData(c);Nu(a,{pending:!0,data:P,method:c.method,action:f},null,P)}}else typeof f=="function"&&(b.preventDefault(),P=y?g_(c,y):new FormData(c),Nu(a,{pending:!0,data:P,method:c.method,action:f},f,P))},currentTarget:c}]})}}for(var mf=0;mf<Jc.length;mf++){var _f=Jc[mf],ox=_f.toLowerCase(),lx=_f[0].toUpperCase()+_f.slice(1);li(ox,"on"+lx)}li(Kd,"onAnimationEnd"),li(Qd,"onAnimationIteration"),li(Jd,"onAnimationStart"),li("dblclick","onDoubleClick"),li("focusin","onFocus"),li("focusout","onBlur"),li(bv,"onTransitionRun"),li(Av,"onTransitionStart"),li(Rv,"onTransitionCancel"),li($d,"onTransitionEnd"),A("onMouseEnter",["mouseout","mouseover"]),A("onMouseLeave",["mouseout","mouseover"]),A("onPointerEnter",["pointerout","pointerover"]),A("onPointerLeave",["pointerout","pointerover"]),Ui("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ui("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ui("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ui("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ui("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ui("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var uo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),cx=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(uo));function v_(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var r=e[a],c=r.event;r=r.listeners;t:{var f=void 0;if(n)for(var y=r.length-1;0<=y;y--){var b=r[y],P=b.instance,J=b.currentTarget;if(b=b.listener,P!==f&&c.isPropagationStopped())break t;f=b,c.currentTarget=J;try{f(c)}catch(ct){Sl(ct)}c.currentTarget=null,f=P}else for(y=0;y<r.length;y++){if(b=r[y],P=b.instance,J=b.currentTarget,b=b.listener,P!==f&&c.isPropagationStopped())break t;f=b,c.currentTarget=J;try{f(c)}catch(ct){Sl(ct)}c.currentTarget=null,f=P}}}}function me(e,n){var a=n[qa];a===void 0&&(a=n[qa]=new Set);var r=e+"__bubble";a.has(r)||(x_(n,e,2,!1),a.add(r))}function gf(e,n,a){var r=0;n&&(r|=4),x_(a,e,r,n)}var Ol="_reactListening"+Math.random().toString(36).slice(2);function vf(e){if(!e[Ol]){e[Ol]=!0,Vo.forEach(function(a){a!=="selectionchange"&&(cx.has(a)||gf(a,!1,e),gf(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Ol]||(n[Ol]=!0,gf("selectionchange",!1,n))}}function x_(e,n,a,r){switch(k_(n)){case 2:var c=zx;break;case 8:c=Ix;break;default:c=Lf}a=c.bind(null,n,a,e),c=void 0,!Fc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),r?c!==void 0?e.addEventListener(n,a,{capture:!0,passive:c}):e.addEventListener(n,a,!0):c!==void 0?e.addEventListener(n,a,{passive:c}):e.addEventListener(n,a,!1)}function xf(e,n,a,r,c){var f=r;if((n&1)===0&&(n&2)===0&&r!==null)t:for(;;){if(r===null)return;var y=r.tag;if(y===3||y===4){var b=r.stateNode.containerInfo;if(b===c)break;if(y===4)for(y=r.return;y!==null;){var P=y.tag;if((P===3||P===4)&&y.stateNode.containerInfo===c)return;y=y.return}for(;b!==null;){if(y=wi(b),y===null)return;if(P=y.tag,P===5||P===6||P===26||P===27){r=f=y;continue t}b=b.parentNode}}r=r.return}Ad(function(){var J=f,ct=Ic(a),mt=[];t:{var nt=tp.get(e);if(nt!==void 0){var it=Zo,te=e;switch(e){case"keypress":if(qo(a)===0)break t;case"keydown":case"keyup":it=iv;break;case"focusin":te="focus",it=kc;break;case"focusout":te="blur",it=kc;break;case"beforeblur":case"afterblur":it=kc;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":it=wd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":it=W0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":it=rv;break;case Kd:case Qd:case Jd:it=Z0;break;case $d:it=lv;break;case"scroll":case"scrollend":it=k0;break;case"wheel":it=uv;break;case"copy":case"cut":case"paste":it=K0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":it=Ud;break;case"toggle":case"beforetoggle":it=hv}var Qt=(n&4)!==0,ze=!Qt&&(e==="scroll"||e==="scrollend"),W=Qt?nt!==null?nt+"Capture":null:nt;Qt=[];for(var V=J,K;V!==null;){var ft=V;if(K=ft.stateNode,ft=ft.tag,ft!==5&&ft!==26&&ft!==27||K===null||W===null||(ft=wr(V,W),ft!=null&&Qt.push(fo(V,ft,K))),ze)break;V=V.return}0<Qt.length&&(nt=new it(nt,te,null,a,ct),mt.push({event:nt,listeners:Qt}))}}if((n&7)===0){t:{if(nt=e==="mouseover"||e==="pointerover",it=e==="mouseout"||e==="pointerout",nt&&a!==zc&&(te=a.relatedTarget||a.fromElement)&&(wi(te)||te[On]))break t;if((it||nt)&&(nt=ct.window===ct?ct:(nt=ct.ownerDocument)?nt.defaultView||nt.parentWindow:window,it?(te=a.relatedTarget||a.toElement,it=J,te=te?wi(te):null,te!==null&&(ze=u(te),Qt=te.tag,te!==ze||Qt!==5&&Qt!==27&&Qt!==6)&&(te=null)):(it=null,te=J),it!==te)){if(Qt=wd,ft="onMouseLeave",W="onMouseEnter",V="mouse",(e==="pointerout"||e==="pointerover")&&(Qt=Ud,ft="onPointerLeave",W="onPointerEnter",V="pointer"),ze=it==null?nt:Za(it),K=te==null?nt:Za(te),nt=new Qt(ft,V+"leave",it,a,ct),nt.target=ze,nt.relatedTarget=K,ft=null,wi(ct)===J&&(Qt=new Qt(W,V+"enter",te,a,ct),Qt.target=K,Qt.relatedTarget=ze,ft=Qt),ze=ft,it&&te)e:{for(Qt=it,W=te,V=0,K=Qt;K;K=$s(K))V++;for(K=0,ft=W;ft;ft=$s(ft))K++;for(;0<V-K;)Qt=$s(Qt),V--;for(;0<K-V;)W=$s(W),K--;for(;V--;){if(Qt===W||W!==null&&Qt===W.alternate)break e;Qt=$s(Qt),W=$s(W)}Qt=null}else Qt=null;it!==null&&S_(mt,nt,it,Qt,!1),te!==null&&ze!==null&&S_(mt,ze,te,Qt,!0)}}t:{if(nt=J?Za(J):window,it=nt.nodeName&&nt.nodeName.toLowerCase(),it==="select"||it==="input"&&nt.type==="file")var Ft=Fd;else if(Id(nt))if(Hd)Ft=Mv;else{Ft=Sv;var he=xv}else it=nt.nodeName,!it||it.toLowerCase()!=="input"||nt.type!=="checkbox"&&nt.type!=="radio"?J&&Pc(J.elementType)&&(Ft=Fd):Ft=yv;if(Ft&&(Ft=Ft(e,J))){Bd(mt,Ft,a,ct);break t}he&&he(e,nt,J),e==="focusout"&&J&&nt.type==="number"&&J.memoizedProps.value!=null&&An(nt,"number",nt.value)}switch(he=J?Za(J):window,e){case"focusin":(Id(he)||he.contentEditable==="true")&&(ws=he,jc=J,Ir=null);break;case"focusout":Ir=jc=ws=null;break;case"mousedown":Kc=!0;break;case"contextmenu":case"mouseup":case"dragend":Kc=!1,Zd(mt,a,ct);break;case"selectionchange":if(Tv)break;case"keydown":case"keyup":Zd(mt,a,ct)}var Xt;if(Wc)t:{switch(e){case"compositionstart":var Jt="onCompositionStart";break t;case"compositionend":Jt="onCompositionEnd";break t;case"compositionupdate":Jt="onCompositionUpdate";break t}Jt=void 0}else Cs?Pd(e,a)&&(Jt="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(Jt="onCompositionStart");Jt&&(Ld&&a.locale!=="ko"&&(Cs||Jt!=="onCompositionStart"?Jt==="onCompositionEnd"&&Cs&&(Xt=Rd()):(ha=ct,Hc="value"in ha?ha.value:ha.textContent,Cs=!0)),he=Pl(J,Jt),0<he.length&&(Jt=new Dd(Jt,e,null,a,ct),mt.push({event:Jt,listeners:he}),Xt?Jt.data=Xt:(Xt=zd(a),Xt!==null&&(Jt.data=Xt)))),(Xt=pv?mv(e,a):_v(e,a))&&(Jt=Pl(J,"onBeforeInput"),0<Jt.length&&(he=new Dd("onBeforeInput","beforeinput",null,a,ct),mt.push({event:he,listeners:Jt}),he.data=Xt)),rx(mt,e,J,a,ct)}v_(mt,n)})}function fo(e,n,a){return{instance:e,listener:n,currentTarget:a}}function Pl(e,n){for(var a=n+"Capture",r=[];e!==null;){var c=e,f=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||f===null||(c=wr(e,a),c!=null&&r.unshift(fo(e,c,f)),c=wr(e,n),c!=null&&r.push(fo(e,c,f))),e.tag===3)return r;e=e.return}return[]}function $s(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function S_(e,n,a,r,c){for(var f=n._reactName,y=[];a!==null&&a!==r;){var b=a,P=b.alternate,J=b.stateNode;if(b=b.tag,P!==null&&P===r)break;b!==5&&b!==26&&b!==27||J===null||(P=J,c?(J=wr(a,f),J!=null&&y.unshift(fo(a,J,P))):c||(J=wr(a,f),J!=null&&y.push(fo(a,J,P)))),a=a.return}y.length!==0&&e.push({event:n,listeners:y})}var ux=/\r\n?/g,fx=/\u0000|\uFFFD/g;function y_(e){return(typeof e=="string"?e:""+e).replace(ux,`
`).replace(fx,"")}function M_(e,n){return n=y_(n),y_(e)===n}function zl(){}function Pe(e,n,a,r,c,f){switch(a){case"children":typeof r=="string"?n==="body"||n==="textarea"&&r===""||xi(e,r):(typeof r=="number"||typeof r=="bigint")&&n!=="body"&&xi(e,""+r);break;case"className":wt(e,"class",r);break;case"tabIndex":wt(e,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":wt(e,a,r);break;case"style":Td(e,r,f);break;case"data":if(n!=="object"){wt(e,"data",r);break}case"src":case"href":if(r===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(a);break}r=Xo(""+r),e.setAttribute(a,r);break;case"action":case"formAction":if(typeof r=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Pe(e,n,"name",c.name,c,null),Pe(e,n,"formEncType",c.formEncType,c,null),Pe(e,n,"formMethod",c.formMethod,c,null),Pe(e,n,"formTarget",c.formTarget,c,null)):(Pe(e,n,"encType",c.encType,c,null),Pe(e,n,"method",c.method,c,null),Pe(e,n,"target",c.target,c,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(a);break}r=Xo(""+r),e.setAttribute(a,r);break;case"onClick":r!=null&&(e.onclick=zl);break;case"onScroll":r!=null&&me("scroll",e);break;case"onScrollEnd":r!=null&&me("scrollend",e);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(c.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"multiple":e.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":e.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){e.removeAttribute("xlink:href");break}a=Xo(""+r),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(a,""+r):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":r===!0?e.setAttribute(a,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(a,r):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?e.setAttribute(a,r):e.removeAttribute(a);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?e.removeAttribute(a):e.setAttribute(a,r);break;case"popover":me("beforetoggle",e),me("toggle",e),Tt(e,"popover",r);break;case"xlinkActuate":Nt(e,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":Nt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":Nt(e,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":Nt(e,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":Nt(e,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":Nt(e,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":Nt(e,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":Nt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":Nt(e,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":Tt(e,"is",r);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=G0.get(a)||a,Tt(e,a,r))}}function Sf(e,n,a,r,c,f){switch(a){case"style":Td(e,r,f);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(c.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"children":typeof r=="string"?xi(e,r):(typeof r=="number"||typeof r=="bigint")&&xi(e,""+r);break;case"onScroll":r!=null&&me("scroll",e);break;case"onScrollEnd":r!=null&&me("scrollend",e);break;case"onClick":r!=null&&(e.onclick=zl);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!ko.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),n=a.slice(2,c?a.length-7:void 0),f=e[Sn]||null,f=f!=null?f[a]:null,typeof f=="function"&&e.removeEventListener(n,f,c),typeof r=="function")){typeof f!="function"&&f!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,r,c);break t}a in e?e[a]=r:r===!0?e.setAttribute(a,""):Tt(e,a,r)}}}function Tn(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":me("error",e),me("load",e);var r=!1,c=!1,f;for(f in a)if(a.hasOwnProperty(f)){var y=a[f];if(y!=null)switch(f){case"src":r=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Pe(e,n,f,y,a,null)}}c&&Pe(e,n,"srcSet",a.srcSet,a,null),r&&Pe(e,n,"src",a.src,a,null);return;case"input":me("invalid",e);var b=f=y=c=null,P=null,J=null;for(r in a)if(a.hasOwnProperty(r)){var ct=a[r];if(ct!=null)switch(r){case"name":c=ct;break;case"type":y=ct;break;case"checked":P=ct;break;case"defaultChecked":J=ct;break;case"value":f=ct;break;case"defaultValue":b=ct;break;case"children":case"dangerouslySetInnerHTML":if(ct!=null)throw Error(s(137,n));break;default:Pe(e,n,r,ct,a,null)}}He(e,f,b,P,J,y,c,!1),Ne(e);return;case"select":me("invalid",e),r=y=f=null;for(c in a)if(a.hasOwnProperty(c)&&(b=a[c],b!=null))switch(c){case"value":f=b;break;case"defaultValue":y=b;break;case"multiple":r=b;default:Pe(e,n,c,b,a,null)}n=f,a=y,e.multiple=!!r,n!=null?rn(e,!!r,n,!1):a!=null&&rn(e,!!r,a,!0);return;case"textarea":me("invalid",e),f=c=r=null;for(y in a)if(a.hasOwnProperty(y)&&(b=a[y],b!=null))switch(y){case"value":r=b;break;case"defaultValue":c=b;break;case"children":f=b;break;case"dangerouslySetInnerHTML":if(b!=null)throw Error(s(91));break;default:Pe(e,n,y,b,a,null)}yn(e,r,c,f),Ne(e);return;case"option":for(P in a)if(a.hasOwnProperty(P)&&(r=a[P],r!=null))switch(P){case"selected":e.selected=r&&typeof r!="function"&&typeof r!="symbol";break;default:Pe(e,n,P,r,a,null)}return;case"dialog":me("beforetoggle",e),me("toggle",e),me("cancel",e),me("close",e);break;case"iframe":case"object":me("load",e);break;case"video":case"audio":for(r=0;r<uo.length;r++)me(uo[r],e);break;case"image":me("error",e),me("load",e);break;case"details":me("toggle",e);break;case"embed":case"source":case"link":me("error",e),me("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(J in a)if(a.hasOwnProperty(J)&&(r=a[J],r!=null))switch(J){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Pe(e,n,J,r,a,null)}return;default:if(Pc(n)){for(ct in a)a.hasOwnProperty(ct)&&(r=a[ct],r!==void 0&&Sf(e,n,ct,r,a,void 0));return}}for(b in a)a.hasOwnProperty(b)&&(r=a[b],r!=null&&Pe(e,n,b,r,a,null))}function hx(e,n,a,r){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,f=null,y=null,b=null,P=null,J=null,ct=null;for(it in a){var mt=a[it];if(a.hasOwnProperty(it)&&mt!=null)switch(it){case"checked":break;case"value":break;case"defaultValue":P=mt;default:r.hasOwnProperty(it)||Pe(e,n,it,null,r,mt)}}for(var nt in r){var it=r[nt];if(mt=a[nt],r.hasOwnProperty(nt)&&(it!=null||mt!=null))switch(nt){case"type":f=it;break;case"name":c=it;break;case"checked":J=it;break;case"defaultChecked":ct=it;break;case"value":y=it;break;case"defaultValue":b=it;break;case"children":case"dangerouslySetInnerHTML":if(it!=null)throw Error(s(137,n));break;default:it!==mt&&Pe(e,n,nt,it,r,mt)}}Li(e,y,b,P,J,ct,f,c);return;case"select":it=y=b=nt=null;for(f in a)if(P=a[f],a.hasOwnProperty(f)&&P!=null)switch(f){case"value":break;case"multiple":it=P;default:r.hasOwnProperty(f)||Pe(e,n,f,null,r,P)}for(c in r)if(f=r[c],P=a[c],r.hasOwnProperty(c)&&(f!=null||P!=null))switch(c){case"value":nt=f;break;case"defaultValue":b=f;break;case"multiple":y=f;default:f!==P&&Pe(e,n,c,f,r,P)}n=b,a=y,r=it,nt!=null?rn(e,!!a,nt,!1):!!r!=!!a&&(n!=null?rn(e,!!a,n,!0):rn(e,!!a,a?[]:"",!1));return;case"textarea":it=nt=null;for(b in a)if(c=a[b],a.hasOwnProperty(b)&&c!=null&&!r.hasOwnProperty(b))switch(b){case"value":break;case"children":break;default:Pe(e,n,b,null,r,c)}for(y in r)if(c=r[y],f=a[y],r.hasOwnProperty(y)&&(c!=null||f!=null))switch(y){case"value":nt=c;break;case"defaultValue":it=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(s(91));break;default:c!==f&&Pe(e,n,y,c,r,f)}pn(e,nt,it);return;case"option":for(var te in a)if(nt=a[te],a.hasOwnProperty(te)&&nt!=null&&!r.hasOwnProperty(te))switch(te){case"selected":e.selected=!1;break;default:Pe(e,n,te,null,r,nt)}for(P in r)if(nt=r[P],it=a[P],r.hasOwnProperty(P)&&nt!==it&&(nt!=null||it!=null))switch(P){case"selected":e.selected=nt&&typeof nt!="function"&&typeof nt!="symbol";break;default:Pe(e,n,P,nt,r,it)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Qt in a)nt=a[Qt],a.hasOwnProperty(Qt)&&nt!=null&&!r.hasOwnProperty(Qt)&&Pe(e,n,Qt,null,r,nt);for(J in r)if(nt=r[J],it=a[J],r.hasOwnProperty(J)&&nt!==it&&(nt!=null||it!=null))switch(J){case"children":case"dangerouslySetInnerHTML":if(nt!=null)throw Error(s(137,n));break;default:Pe(e,n,J,nt,r,it)}return;default:if(Pc(n)){for(var ze in a)nt=a[ze],a.hasOwnProperty(ze)&&nt!==void 0&&!r.hasOwnProperty(ze)&&Sf(e,n,ze,void 0,r,nt);for(ct in r)nt=r[ct],it=a[ct],!r.hasOwnProperty(ct)||nt===it||nt===void 0&&it===void 0||Sf(e,n,ct,nt,r,it);return}}for(var W in a)nt=a[W],a.hasOwnProperty(W)&&nt!=null&&!r.hasOwnProperty(W)&&Pe(e,n,W,null,r,nt);for(mt in r)nt=r[mt],it=a[mt],!r.hasOwnProperty(mt)||nt===it||nt==null&&it==null||Pe(e,n,mt,nt,r,it)}var yf=null,Mf=null;function Il(e){return e.nodeType===9?e:e.ownerDocument}function E_(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function T_(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function Ef(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Tf=null;function dx(){var e=window.event;return e&&e.type==="popstate"?e===Tf?!1:(Tf=e,!0):(Tf=null,!1)}var b_=typeof setTimeout=="function"?setTimeout:void 0,px=typeof clearTimeout=="function"?clearTimeout:void 0,A_=typeof Promise=="function"?Promise:void 0,mx=typeof queueMicrotask=="function"?queueMicrotask:typeof A_<"u"?function(e){return A_.resolve(null).then(e).catch(_x)}:b_;function _x(e){setTimeout(function(){throw e})}function Ca(e){return e==="head"}function R_(e,n){var a=n,r=0,c=0;do{var f=a.nextSibling;if(e.removeChild(a),f&&f.nodeType===8)if(a=f.data,a==="/$"){if(0<r&&8>r){a=r;var y=e.ownerDocument;if(a&1&&ho(y.documentElement),a&2&&ho(y.body),a&4)for(a=y.head,ho(a),y=a.firstChild;y;){var b=y.nextSibling,P=y.nodeName;y[la]||P==="SCRIPT"||P==="STYLE"||P==="LINK"&&y.rel.toLowerCase()==="stylesheet"||a.removeChild(y),y=b}}if(c===0){e.removeChild(f),yo(n);return}c--}else a==="$"||a==="$?"||a==="$!"?c++:r=a.charCodeAt(0)-48;else r=0;a=f}while(a);yo(n)}function bf(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":bf(a),ca(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function gx(e,n,a,r){for(;e.nodeType===1;){var c=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!r&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(r){if(!e[la])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==c.rel||e.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||e.getAttribute("title")!==(c.title==null?null:c.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(c.src==null?null:c.src)||e.getAttribute("type")!==(c.type==null?null:c.type)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var f=c.name==null?null:""+c.name;if(c.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=ui(e.nextSibling),e===null)break}return null}function vx(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=ui(e.nextSibling),e===null))return null;return e}function Af(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function xx(e,n){var a=e.ownerDocument;if(e.data!=="$?"||a.readyState==="complete")n();else{var r=function(){n(),a.removeEventListener("DOMContentLoaded",r)};a.addEventListener("DOMContentLoaded",r),e._reactRetry=r}}function ui(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="F!"||n==="F")break;if(n==="/$")return null}}return e}var Rf=null;function C_(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"){if(n===0)return e;n--}else a==="/$"&&n++}e=e.previousSibling}return null}function w_(e,n,a){switch(n=Il(a),e){case"html":if(e=n.documentElement,!e)throw Error(s(452));return e;case"head":if(e=n.head,!e)throw Error(s(453));return e;case"body":if(e=n.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function ho(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);ca(e)}var si=new Map,D_=new Set;function Bl(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Yi=j.d;j.d={f:Sx,r:yx,D:Mx,C:Ex,L:Tx,m:bx,X:Rx,S:Ax,M:Cx};function Sx(){var e=Yi.f(),n=wl();return e||n}function yx(e){var n=Di(e);n!==null&&n.tag===5&&n.type==="form"?Kp(n):Yi.r(e)}var tr=typeof document>"u"?null:document;function U_(e,n,a){var r=tr;if(r&&typeof n=="string"&&n){var c=Ve(n);c='link[rel="'+e+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),D_.has(c)||(D_.add(c),e={rel:e,crossOrigin:a,href:n},r.querySelector(c)===null&&(n=r.createElement("link"),Tn(n,"link",e),tn(n),r.head.appendChild(n)))}}function Mx(e){Yi.D(e),U_("dns-prefetch",e,null)}function Ex(e,n){Yi.C(e,n),U_("preconnect",e,n)}function Tx(e,n,a){Yi.L(e,n,a);var r=tr;if(r&&e&&n){var c='link[rel="preload"][as="'+Ve(n)+'"]';n==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+Ve(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+Ve(a.imageSizes)+'"]')):c+='[href="'+Ve(e)+'"]';var f=c;switch(n){case"style":f=er(e);break;case"script":f=nr(e)}si.has(f)||(e=_({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),si.set(f,e),r.querySelector(c)!==null||n==="style"&&r.querySelector(po(f))||n==="script"&&r.querySelector(mo(f))||(n=r.createElement("link"),Tn(n,"link",e),tn(n),r.head.appendChild(n)))}}function bx(e,n){Yi.m(e,n);var a=tr;if(a&&e){var r=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+Ve(r)+'"][href="'+Ve(e)+'"]',f=c;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=nr(e)}if(!si.has(f)&&(e=_({rel:"modulepreload",href:e},n),si.set(f,e),a.querySelector(c)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(mo(f)))return}r=a.createElement("link"),Tn(r,"link",e),tn(r),a.head.appendChild(r)}}}function Ax(e,n,a){Yi.S(e,n,a);var r=tr;if(r&&e){var c=ua(r).hoistableStyles,f=er(e);n=n||"default";var y=c.get(f);if(!y){var b={loading:0,preload:null};if(y=r.querySelector(po(f)))b.loading=5;else{e=_({rel:"stylesheet",href:e,"data-precedence":n},a),(a=si.get(f))&&Cf(e,a);var P=y=r.createElement("link");tn(P),Tn(P,"link",e),P._p=new Promise(function(J,ct){P.onload=J,P.onerror=ct}),P.addEventListener("load",function(){b.loading|=1}),P.addEventListener("error",function(){b.loading|=2}),b.loading|=4,Fl(y,n,r)}y={type:"stylesheet",instance:y,count:1,state:b},c.set(f,y)}}}function Rx(e,n){Yi.X(e,n);var a=tr;if(a&&e){var r=ua(a).hoistableScripts,c=nr(e),f=r.get(c);f||(f=a.querySelector(mo(c)),f||(e=_({src:e,async:!0},n),(n=si.get(c))&&wf(e,n),f=a.createElement("script"),tn(f),Tn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},r.set(c,f))}}function Cx(e,n){Yi.M(e,n);var a=tr;if(a&&e){var r=ua(a).hoistableScripts,c=nr(e),f=r.get(c);f||(f=a.querySelector(mo(c)),f||(e=_({src:e,async:!0,type:"module"},n),(n=si.get(c))&&wf(e,n),f=a.createElement("script"),tn(f),Tn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},r.set(c,f))}}function L_(e,n,a,r){var c=(c=yt.current)?Bl(c):null;if(!c)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=er(a.href),a=ua(c).hoistableStyles,r=a.get(n),r||(r={type:"style",instance:null,count:0,state:null},a.set(n,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=er(a.href);var f=ua(c).hoistableStyles,y=f.get(e);if(y||(c=c.ownerDocument||c,y={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,y),(f=c.querySelector(po(e)))&&!f._p&&(y.instance=f,y.state.loading=5),si.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},si.set(e,a),f||wx(c,e,a,y.state))),n&&r===null)throw Error(s(528,""));return y}if(n&&r!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=nr(a),a=ua(c).hoistableScripts,r=a.get(n),r||(r={type:"script",instance:null,count:0,state:null},a.set(n,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function er(e){return'href="'+Ve(e)+'"'}function po(e){return'link[rel="stylesheet"]['+e+"]"}function N_(e){return _({},e,{"data-precedence":e.precedence,precedence:null})}function wx(e,n,a,r){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?r.loading=1:(n=e.createElement("link"),r.preload=n,n.addEventListener("load",function(){return r.loading|=1}),n.addEventListener("error",function(){return r.loading|=2}),Tn(n,"link",a),tn(n),e.head.appendChild(n))}function nr(e){return'[src="'+Ve(e)+'"]'}function mo(e){return"script[async]"+e}function O_(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var r=e.querySelector('style[data-href~="'+Ve(a.href)+'"]');if(r)return n.instance=r,tn(r),r;var c=_({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement("style"),tn(r),Tn(r,"style",c),Fl(r,a.precedence,e),n.instance=r;case"stylesheet":c=er(a.href);var f=e.querySelector(po(c));if(f)return n.state.loading|=4,n.instance=f,tn(f),f;r=N_(a),(c=si.get(c))&&Cf(r,c),f=(e.ownerDocument||e).createElement("link"),tn(f);var y=f;return y._p=new Promise(function(b,P){y.onload=b,y.onerror=P}),Tn(f,"link",r),n.state.loading|=4,Fl(f,a.precedence,e),n.instance=f;case"script":return f=nr(a.src),(c=e.querySelector(mo(f)))?(n.instance=c,tn(c),c):(r=a,(c=si.get(f))&&(r=_({},a),wf(r,c)),e=e.ownerDocument||e,c=e.createElement("script"),tn(c),Tn(c,"link",r),e.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(r=n.instance,n.state.loading|=4,Fl(r,a.precedence,e));return n.instance}function Fl(e,n,a){for(var r=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=r.length?r[r.length-1]:null,f=c,y=0;y<r.length;y++){var b=r[y];if(b.dataset.precedence===n)f=b;else if(f!==c)break}f?f.parentNode.insertBefore(e,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function Cf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function wf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var Hl=null;function P_(e,n,a){if(Hl===null){var r=new Map,c=Hl=new Map;c.set(a,r)}else c=Hl,r=c.get(a),r||(r=new Map,c.set(a,r));if(r.has(e))return r;for(r.set(e,null),a=a.getElementsByTagName(e),c=0;c<a.length;c++){var f=a[c];if(!(f[la]||f[sn]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var y=f.getAttribute(n)||"";y=e+y;var b=r.get(y);b?b.push(f):r.set(y,[f])}}return r}function z_(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function Dx(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function I_(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var _o=null;function Ux(){}function Lx(e,n,a){if(_o===null)throw Error(s(475));var r=_o;if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var c=er(a.href),f=e.querySelector(po(c));if(f){e=f._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(r.count++,r=Gl.bind(r),e.then(r,r)),n.state.loading|=4,n.instance=f,tn(f);return}f=e.ownerDocument||e,a=N_(a),(c=si.get(c))&&Cf(a,c),f=f.createElement("link"),tn(f);var y=f;y._p=new Promise(function(b,P){y.onload=b,y.onerror=P}),Tn(f,"link",a),n.instance=f}r.stylesheets===null&&(r.stylesheets=new Map),r.stylesheets.set(n,e),(e=n.state.preload)&&(n.state.loading&3)===0&&(r.count++,n=Gl.bind(r),e.addEventListener("load",n),e.addEventListener("error",n))}}function Nx(){if(_o===null)throw Error(s(475));var e=_o;return e.stylesheets&&e.count===0&&Df(e,e.stylesheets),0<e.count?function(n){var a=setTimeout(function(){if(e.stylesheets&&Df(e,e.stylesheets),e.unsuspend){var r=e.unsuspend;e.unsuspend=null,r()}},6e4);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(a)}}:null}function Gl(){if(this.count--,this.count===0){if(this.stylesheets)Df(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Vl=null;function Df(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Vl=new Map,n.forEach(Ox,e),Vl=null,Gl.call(e))}function Ox(e,n){if(!(n.state.loading&4)){var a=Vl.get(e);if(a)var r=a.get(null);else{a=new Map,Vl.set(e,a);for(var c=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<c.length;f++){var y=c[f];(y.nodeName==="LINK"||y.getAttribute("media")!=="not all")&&(a.set(y.dataset.precedence,y),r=y)}r&&a.set(null,r)}c=n.instance,y=c.getAttribute("data-precedence"),f=a.get(y)||r,f===r&&a.set(null,c),a.set(y,c),this.count++,r=Gl.bind(this),c.addEventListener("load",r),c.addEventListener("error",r),f?f.parentNode.insertBefore(c,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(c,e.firstChild)),n.state.loading|=4}}var go={$$typeof:D,Provider:null,Consumer:null,_currentValue:Y,_currentValue2:Y,_threadCount:0};function Px(e,n,a,r,c,f,y,b){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Et(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Et(0),this.hiddenUpdates=Et(null),this.identifierPrefix=r,this.onUncaughtError=c,this.onCaughtError=f,this.onRecoverableError=y,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=b,this.incompleteTransitions=new Map}function B_(e,n,a,r,c,f,y,b,P,J,ct,mt){return e=new Px(e,n,a,y,b,P,J,mt),n=1,f===!0&&(n|=24),f=Wn(3,null,null,n),e.current=f,f.stateNode=e,n=uu(),n.refCount++,e.pooledCache=n,n.refCount++,f.memoizedState={element:r,isDehydrated:a,cache:n},pu(f),e}function F_(e){return e?(e=Ns,e):Ns}function H_(e,n,a,r,c,f){c=F_(c),r.context===null?r.context=c:r.pendingContext=c,r=ma(n),r.payload={element:a},f=f===void 0?null:f,f!==null&&(r.callback=f),a=_a(e,r,n),a!==null&&(Kn(a,e,n),qr(a,e,n))}function G_(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function Uf(e,n){G_(e,n),(e=e.alternate)&&G_(e,n)}function V_(e){if(e.tag===13){var n=Ls(e,67108864);n!==null&&Kn(n,e,67108864),Uf(e,67108864)}}var kl=!0;function zx(e,n,a,r){var c=z.T;z.T=null;var f=j.p;try{j.p=2,Lf(e,n,a,r)}finally{j.p=f,z.T=c}}function Ix(e,n,a,r){var c=z.T;z.T=null;var f=j.p;try{j.p=8,Lf(e,n,a,r)}finally{j.p=f,z.T=c}}function Lf(e,n,a,r){if(kl){var c=Nf(r);if(c===null)xf(e,n,r,Xl,a),X_(e,r);else if(Fx(c,e,n,a,r))r.stopPropagation();else if(X_(e,r),n&4&&-1<Bx.indexOf(e)){for(;c!==null;){var f=Di(c);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var y=Wt(f.pendingLanes);if(y!==0){var b=f;for(b.pendingLanes|=2,b.entangledLanes|=2;y;){var P=1<<31-Ot(y);b.entanglements[1]|=P,y&=~P}Ti(f),(De&6)===0&&(Rl=de()+500,co(0))}}break;case 13:b=Ls(f,2),b!==null&&Kn(b,f,2),wl(),Uf(f,2)}if(f=Nf(r),f===null&&xf(e,n,r,Xl,a),f===c)break;c=f}c!==null&&r.stopPropagation()}else xf(e,n,r,null,a)}}function Nf(e){return e=Ic(e),Of(e)}var Xl=null;function Of(e){if(Xl=null,e=wi(e),e!==null){var n=u(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=h(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return Xl=e,null}function k_(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Gt()){case ve:return 2;case Yt:return 8;case ie:case Qe:return 32;case O:return 268435456;default:return 32}default:return 32}}var Pf=!1,wa=null,Da=null,Ua=null,vo=new Map,xo=new Map,La=[],Bx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function X_(e,n){switch(e){case"focusin":case"focusout":wa=null;break;case"dragenter":case"dragleave":Da=null;break;case"mouseover":case"mouseout":Ua=null;break;case"pointerover":case"pointerout":vo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":xo.delete(n.pointerId)}}function So(e,n,a,r,c,f){return e===null||e.nativeEvent!==f?(e={blockedOn:n,domEventName:a,eventSystemFlags:r,nativeEvent:f,targetContainers:[c]},n!==null&&(n=Di(n),n!==null&&V_(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),e)}function Fx(e,n,a,r,c){switch(n){case"focusin":return wa=So(wa,e,n,a,r,c),!0;case"dragenter":return Da=So(Da,e,n,a,r,c),!0;case"mouseover":return Ua=So(Ua,e,n,a,r,c),!0;case"pointerover":var f=c.pointerId;return vo.set(f,So(vo.get(f)||null,e,n,a,r,c)),!0;case"gotpointercapture":return f=c.pointerId,xo.set(f,So(xo.get(f)||null,e,n,a,r,c)),!0}return!1}function W_(e){var n=wi(e.target);if(n!==null){var a=u(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){e.blockedOn=n,kn(e.priority,function(){if(a.tag===13){var r=jn();r=ee(r);var c=Ls(a,r);c!==null&&Kn(c,a,r),Uf(a,r)}});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Wl(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=Nf(e.nativeEvent);if(a===null){a=e.nativeEvent;var r=new a.constructor(a.type,a);zc=r,a.target.dispatchEvent(r),zc=null}else return n=Di(a),n!==null&&V_(n),e.blockedOn=a,!1;n.shift()}return!0}function q_(e,n,a){Wl(e)&&a.delete(n)}function Hx(){Pf=!1,wa!==null&&Wl(wa)&&(wa=null),Da!==null&&Wl(Da)&&(Da=null),Ua!==null&&Wl(Ua)&&(Ua=null),vo.forEach(q_),xo.forEach(q_)}function ql(e,n){e.blockedOn===n&&(e.blockedOn=null,Pf||(Pf=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,Hx)))}var Yl=null;function Y_(e){Yl!==e&&(Yl=e,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){Yl===e&&(Yl=null);for(var n=0;n<e.length;n+=3){var a=e[n],r=e[n+1],c=e[n+2];if(typeof r!="function"){if(Of(r||a)===null)continue;break}var f=Di(a);f!==null&&(e.splice(n,3),n-=3,Nu(f,{pending:!0,data:c,method:a.method,action:r},r,c))}}))}function yo(e){function n(P){return ql(P,e)}wa!==null&&ql(wa,e),Da!==null&&ql(Da,e),Ua!==null&&ql(Ua,e),vo.forEach(n),xo.forEach(n);for(var a=0;a<La.length;a++){var r=La[a];r.blockedOn===e&&(r.blockedOn=null)}for(;0<La.length&&(a=La[0],a.blockedOn===null);)W_(a),a.blockedOn===null&&La.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(r=0;r<a.length;r+=3){var c=a[r],f=a[r+1],y=c[Sn]||null;if(typeof f=="function")y||Y_(a);else if(y){var b=null;if(f&&f.hasAttribute("formAction")){if(c=f,y=f[Sn]||null)b=y.formAction;else if(Of(c)!==null)continue}else b=y.action;typeof b=="function"?a[r+1]=b:(a.splice(r,3),r-=3),Y_(a)}}}function zf(e){this._internalRoot=e}Zl.prototype.render=zf.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,r=jn();H_(a,r,e,n,null,null)},Zl.prototype.unmount=zf.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;H_(e.current,2,null,e,null,null),wl(),n[On]=null}};function Zl(e){this._internalRoot=e}Zl.prototype.unstable_scheduleHydration=function(e){if(e){var n=Me();e={blockedOn:null,target:e,priority:n};for(var a=0;a<La.length&&n!==0&&n<La[a].priority;a++);La.splice(a,0,e),a===0&&W_(e)}};var Z_=t.version;if(Z_!=="19.1.0")throw Error(s(527,Z_,"19.1.0"));j.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=m(n),e=e!==null?p(e):null,e=e===null?null:e.stateNode,e};var Gx={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:z,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var jl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!jl.isDisabled&&jl.supportsFiber)try{ut=jl.inject(Gx),dt=jl}catch{}}return Eo.createRoot=function(e,n){if(!l(e))throw Error(s(299));var a=!1,r="",c=um,f=fm,y=hm,b=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(y=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(b=n.unstable_transitionCallbacks)),n=B_(e,1,!1,null,null,a,r,c,f,y,b,null),e[On]=n.current,vf(e),new zf(n)},Eo.hydrateRoot=function(e,n,a){if(!l(e))throw Error(s(299));var r=!1,c="",f=um,y=fm,b=hm,P=null,J=null;return a!=null&&(a.unstable_strictMode===!0&&(r=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(y=a.onCaughtError),a.onRecoverableError!==void 0&&(b=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(P=a.unstable_transitionCallbacks),a.formState!==void 0&&(J=a.formState)),n=B_(e,1,!0,n,a??null,r,c,f,y,b,P,J),n.context=F_(null),a=n.current,r=jn(),r=ee(r),c=ma(r),c.callback=null,_a(a,c,r),a=r,n.current.lanes=a,zt(n,a),Ti(n),e[On]=n.current,vf(e),new Zl(n)},Eo.version="19.1.0",Eo}var ag;function Jx(){if(ag)return Bf.exports;ag=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),Bf.exports=Qx(),Bf.exports}var $x=Jx();const tS=kx($x);var wo=cd();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ud="178",xr={ROTATE:0,DOLLY:1,PAN:2},gr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},eS=0,sg=1,nS=2,l0=1,c0=2,ta=3,Xa=0,Gn=1,ea=2,Va=0,Sr=1,rg=2,og=3,lg=4,iS=5,vs=100,aS=101,sS=102,rS=103,oS=104,lS=200,cS=201,uS=202,fS=203,yh=204,Mh=205,hS=206,dS=207,pS=208,mS=209,_S=210,gS=211,vS=212,xS=213,SS=214,Eh=0,Th=1,bh=2,Er=3,Ah=4,Rh=5,Ch=6,wh=7,u0=0,yS=1,MS=2,ka=0,ES=1,TS=2,bS=3,AS=4,RS=5,CS=6,wS=7,f0=300,Tr=301,br=302,Dh=303,Uh=304,Uc=306,Lh=1e3,Ss=1001,Nh=1002,gi=1003,DS=1004,Kl=1005,Ri=1006,kf=1007,ys=1008,Ci=1009,h0=1010,d0=1011,Uo=1012,fd=1013,Ms=1014,na=1015,Po=1016,hd=1017,dd=1018,Lo=1020,p0=35902,m0=1021,_0=1022,mi=1023,No=1026,Oo=1027,g0=1028,pd=1029,v0=1030,md=1031,_d=1033,yc=33776,Mc=33777,Ec=33778,Tc=33779,Oh=35840,Ph=35841,zh=35842,Ih=35843,Bh=36196,Fh=37492,Hh=37496,Gh=37808,Vh=37809,kh=37810,Xh=37811,Wh=37812,qh=37813,Yh=37814,Zh=37815,jh=37816,Kh=37817,Qh=37818,Jh=37819,$h=37820,td=37821,bc=36492,ed=36494,nd=36495,x0=36283,id=36284,ad=36285,sd=36286,US=3200,LS=3201,NS=0,OS=1,Ga="",Nn="srgb",Ar="srgb-linear",Cc="linear",Ie="srgb",ir=7680,cg=519,PS=512,zS=513,IS=514,S0=515,BS=516,FS=517,HS=518,GS=519,ug=35044,fg="300 es",ia=2e3,wc=2001;class bs{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[t]===void 0&&(s[t]=[]),s[t].indexOf(i)===-1&&s[t].push(i)}hasEventListener(t,i){const s=this._listeners;return s===void 0?!1:s[t]!==void 0&&s[t].indexOf(i)!==-1}removeEventListener(t,i){const s=this._listeners;if(s===void 0)return;const l=s[t];if(l!==void 0){const u=l.indexOf(i);u!==-1&&l.splice(u,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const s=i[t.type];if(s!==void 0){t.target=this;const l=s.slice(0);for(let u=0,h=l.length;u<h;u++)l[u].call(this,t);t.target=null}}}const wn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ac=Math.PI/180,rd=180/Math.PI;function zo(){const o=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(wn[o&255]+wn[o>>8&255]+wn[o>>16&255]+wn[o>>24&255]+"-"+wn[t&255]+wn[t>>8&255]+"-"+wn[t>>16&15|64]+wn[t>>24&255]+"-"+wn[i&63|128]+wn[i>>8&255]+"-"+wn[i>>16&255]+wn[i>>24&255]+wn[s&255]+wn[s>>8&255]+wn[s>>16&255]+wn[s>>24&255]).toLowerCase()}function _e(o,t,i){return Math.max(t,Math.min(i,o))}function VS(o,t){return(o%t+t)%t}function Xf(o,t,i){return(1-i)*o+i*t}function To(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Fn(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}const kS={DEG2RAD:Ac};class re{constructor(t=0,i=0){re.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,s=this.y,l=t.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=_e(this.x,t.x,i.x),this.y=_e(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=_e(this.x,t,i),this.y=_e(this.y,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(_e(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(_e(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y;return i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const s=Math.cos(i),l=Math.sin(i),u=this.x-t.x,h=this.y-t.y;return this.x=u*s-h*l+t.x,this.y=u*l+h*s+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Es{constructor(t=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=s,this._w=l}static slerpFlat(t,i,s,l,u,h,d){let m=s[l+0],p=s[l+1],_=s[l+2],v=s[l+3];const x=u[h+0],M=u[h+1],E=u[h+2],R=u[h+3];if(d===0){t[i+0]=m,t[i+1]=p,t[i+2]=_,t[i+3]=v;return}if(d===1){t[i+0]=x,t[i+1]=M,t[i+2]=E,t[i+3]=R;return}if(v!==R||m!==x||p!==M||_!==E){let S=1-d;const g=m*x+p*M+_*E+v*R,N=g>=0?1:-1,D=1-g*g;if(D>Number.EPSILON){const B=Math.sqrt(D),H=Math.atan2(B,g*N);S=Math.sin(S*H)/B,d=Math.sin(d*H)/B}const w=d*N;if(m=m*S+x*w,p=p*S+M*w,_=_*S+E*w,v=v*S+R*w,S===1-d){const B=1/Math.sqrt(m*m+p*p+_*_+v*v);m*=B,p*=B,_*=B,v*=B}}t[i]=m,t[i+1]=p,t[i+2]=_,t[i+3]=v}static multiplyQuaternionsFlat(t,i,s,l,u,h){const d=s[l],m=s[l+1],p=s[l+2],_=s[l+3],v=u[h],x=u[h+1],M=u[h+2],E=u[h+3];return t[i]=d*E+_*v+m*M-p*x,t[i+1]=m*E+_*x+p*v-d*M,t[i+2]=p*E+_*M+d*x-m*v,t[i+3]=_*E-d*v-m*x-p*M,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,s,l){return this._x=t,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const s=t._x,l=t._y,u=t._z,h=t._order,d=Math.cos,m=Math.sin,p=d(s/2),_=d(l/2),v=d(u/2),x=m(s/2),M=m(l/2),E=m(u/2);switch(h){case"XYZ":this._x=x*_*v+p*M*E,this._y=p*M*v-x*_*E,this._z=p*_*E+x*M*v,this._w=p*_*v-x*M*E;break;case"YXZ":this._x=x*_*v+p*M*E,this._y=p*M*v-x*_*E,this._z=p*_*E-x*M*v,this._w=p*_*v+x*M*E;break;case"ZXY":this._x=x*_*v-p*M*E,this._y=p*M*v+x*_*E,this._z=p*_*E+x*M*v,this._w=p*_*v-x*M*E;break;case"ZYX":this._x=x*_*v-p*M*E,this._y=p*M*v+x*_*E,this._z=p*_*E-x*M*v,this._w=p*_*v+x*M*E;break;case"YZX":this._x=x*_*v+p*M*E,this._y=p*M*v+x*_*E,this._z=p*_*E-x*M*v,this._w=p*_*v-x*M*E;break;case"XZY":this._x=x*_*v-p*M*E,this._y=p*M*v-x*_*E,this._z=p*_*E+x*M*v,this._w=p*_*v+x*M*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const s=i/2,l=Math.sin(s);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,s=i[0],l=i[4],u=i[8],h=i[1],d=i[5],m=i[9],p=i[2],_=i[6],v=i[10],x=s+d+v;if(x>0){const M=.5/Math.sqrt(x+1);this._w=.25/M,this._x=(_-m)*M,this._y=(u-p)*M,this._z=(h-l)*M}else if(s>d&&s>v){const M=2*Math.sqrt(1+s-d-v);this._w=(_-m)/M,this._x=.25*M,this._y=(l+h)/M,this._z=(u+p)/M}else if(d>v){const M=2*Math.sqrt(1+d-s-v);this._w=(u-p)/M,this._x=(l+h)/M,this._y=.25*M,this._z=(m+_)/M}else{const M=2*Math.sqrt(1+v-s-d);this._w=(h-l)/M,this._x=(u+p)/M,this._y=(m+_)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let s=t.dot(i)+1;return s<1e-8?(s=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=s):(this._x=0,this._y=-t.z,this._z=t.y,this._w=s)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=s),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(_e(this.dot(t),-1,1)))}rotateTowards(t,i){const s=this.angleTo(t);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const s=t._x,l=t._y,u=t._z,h=t._w,d=i._x,m=i._y,p=i._z,_=i._w;return this._x=s*_+h*d+l*p-u*m,this._y=l*_+h*m+u*d-s*p,this._z=u*_+h*p+s*m-l*d,this._w=h*_-s*d-l*m-u*p,this._onChangeCallback(),this}slerp(t,i){if(i===0)return this;if(i===1)return this.copy(t);const s=this._x,l=this._y,u=this._z,h=this._w;let d=h*t._w+s*t._x+l*t._y+u*t._z;if(d<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,d=-d):this.copy(t),d>=1)return this._w=h,this._x=s,this._y=l,this._z=u,this;const m=1-d*d;if(m<=Number.EPSILON){const M=1-i;return this._w=M*h+i*this._w,this._x=M*s+i*this._x,this._y=M*l+i*this._y,this._z=M*u+i*this._z,this.normalize(),this}const p=Math.sqrt(m),_=Math.atan2(p,d),v=Math.sin((1-i)*_)/p,x=Math.sin(i*_)/p;return this._w=h*v+this._w*x,this._x=s*v+this._x*x,this._y=l*v+this._y*x,this._z=u*v+this._z*x,this._onChangeCallback(),this}slerpQuaternions(t,i,s){return this.copy(t).slerp(i,s)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),u=Math.sqrt(s);return this.set(l*Math.sin(t),l*Math.cos(t),u*Math.sin(i),u*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class tt{constructor(t=0,i=0,s=0){tt.prototype.isVector3=!0,this.x=t,this.y=i,this.z=s}set(t,i,s){return s===void 0&&(s=this.z),this.x=t,this.y=i,this.z=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(hg.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(hg.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,s=this.y,l=this.z,u=t.elements;return this.x=u[0]*i+u[3]*s+u[6]*l,this.y=u[1]*i+u[4]*s+u[7]*l,this.z=u[2]*i+u[5]*s+u[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,u=t.elements,h=1/(u[3]*i+u[7]*s+u[11]*l+u[15]);return this.x=(u[0]*i+u[4]*s+u[8]*l+u[12])*h,this.y=(u[1]*i+u[5]*s+u[9]*l+u[13])*h,this.z=(u[2]*i+u[6]*s+u[10]*l+u[14])*h,this}applyQuaternion(t){const i=this.x,s=this.y,l=this.z,u=t.x,h=t.y,d=t.z,m=t.w,p=2*(h*l-d*s),_=2*(d*i-u*l),v=2*(u*s-h*i);return this.x=i+m*p+h*v-d*_,this.y=s+m*_+d*p-u*v,this.z=l+m*v+u*_-h*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,s=this.y,l=this.z,u=t.elements;return this.x=u[0]*i+u[4]*s+u[8]*l,this.y=u[1]*i+u[5]*s+u[9]*l,this.z=u[2]*i+u[6]*s+u[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=_e(this.x,t.x,i.x),this.y=_e(this.y,t.y,i.y),this.z=_e(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=_e(this.x,t,i),this.y=_e(this.y,t,i),this.z=_e(this.z,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(_e(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const s=t.x,l=t.y,u=t.z,h=i.x,d=i.y,m=i.z;return this.x=l*m-u*d,this.y=u*h-s*m,this.z=s*d-l*h,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const s=t.dot(this)/i;return this.copy(t).multiplyScalar(s)}projectOnPlane(t){return Wf.copy(this).projectOnVector(t),this.sub(Wf)}reflect(t){return this.sub(Wf.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(_e(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y,l=this.z-t.z;return i*i+s*s+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,s){const l=Math.sin(i)*t;return this.x=l*Math.sin(s),this.y=Math.cos(i)*t,this.z=l*Math.cos(s),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,s){return this.x=t*Math.sin(i),this.y=s,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),s=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(t),this.y=i,this.z=s*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Wf=new tt,hg=new Es;class se{constructor(t,i,s,l,u,h,d,m,p){se.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,s,l,u,h,d,m,p)}set(t,i,s,l,u,h,d,m,p){const _=this.elements;return _[0]=t,_[1]=l,_[2]=d,_[3]=i,_[4]=u,_[5]=m,_[6]=s,_[7]=h,_[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(t,i,s){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,u=this.elements,h=s[0],d=s[3],m=s[6],p=s[1],_=s[4],v=s[7],x=s[2],M=s[5],E=s[8],R=l[0],S=l[3],g=l[6],N=l[1],D=l[4],w=l[7],B=l[2],H=l[5],I=l[8];return u[0]=h*R+d*N+m*B,u[3]=h*S+d*D+m*H,u[6]=h*g+d*w+m*I,u[1]=p*R+_*N+v*B,u[4]=p*S+_*D+v*H,u[7]=p*g+_*w+v*I,u[2]=x*R+M*N+E*B,u[5]=x*S+M*D+E*H,u[8]=x*g+M*w+E*I,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[1],l=t[2],u=t[3],h=t[4],d=t[5],m=t[6],p=t[7],_=t[8];return i*h*_-i*d*p-s*u*_+s*d*m+l*u*p-l*h*m}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],u=t[3],h=t[4],d=t[5],m=t[6],p=t[7],_=t[8],v=_*h-d*p,x=d*m-_*u,M=p*u-h*m,E=i*v+s*x+l*M;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const R=1/E;return t[0]=v*R,t[1]=(l*p-_*s)*R,t[2]=(d*s-l*h)*R,t[3]=x*R,t[4]=(_*i-l*m)*R,t[5]=(l*u-d*i)*R,t[6]=M*R,t[7]=(s*m-p*i)*R,t[8]=(h*i-s*u)*R,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,s,l,u,h,d){const m=Math.cos(u),p=Math.sin(u);return this.set(s*m,s*p,-s*(m*h+p*d)+h+t,-l*p,l*m,-l*(-p*h+m*d)+d+i,0,0,1),this}scale(t,i){return this.premultiply(qf.makeScale(t,i)),this}rotate(t){return this.premultiply(qf.makeRotation(-t)),this}translate(t,i){return this.premultiply(qf.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<9;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const qf=new se;function y0(o){for(let t=o.length-1;t>=0;--t)if(o[t]>=65535)return!0;return!1}function Dc(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function XS(){const o=Dc("canvas");return o.style.display="block",o}const dg={};function yr(o){o in dg||(dg[o]=!0,console.warn(o))}function WS(o,t,i){return new Promise(function(s,l){function u(){switch(o.clientWaitSync(t,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(u,i);break;default:s()}}setTimeout(u,i)})}function qS(o){const t=o.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function YS(o){const t=o.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const pg=new se().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),mg=new se().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ZS(){const o={enabled:!0,workingColorSpace:Ar,spaces:{},convert:function(l,u,h){return this.enabled===!1||u===h||!u||!h||(this.spaces[u].transfer===Ie&&(l.r=sa(l.r),l.g=sa(l.g),l.b=sa(l.b)),this.spaces[u].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[u].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===Ie&&(l.r=Mr(l.r),l.g=Mr(l.g),l.b=Mr(l.b))),l},workingToColorSpace:function(l,u){return this.convert(l,this.workingColorSpace,u)},colorSpaceToWorking:function(l,u){return this.convert(l,u,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Ga?Cc:this.spaces[l].transfer},getLuminanceCoefficients:function(l,u=this.workingColorSpace){return l.fromArray(this.spaces[u].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,u,h){return l.copy(this.spaces[u].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,u){return yr("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(l,u)},toWorkingColorSpace:function(l,u){return yr("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(l,u)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return o.define({[Ar]:{primaries:t,whitePoint:s,transfer:Cc,toXYZ:pg,fromXYZ:mg,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:Nn},outputColorSpaceConfig:{drawingBufferColorSpace:Nn}},[Nn]:{primaries:t,whitePoint:s,transfer:Ie,toXYZ:pg,fromXYZ:mg,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:Nn}}}),o}const Te=ZS();function sa(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Mr(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let ar;class jS{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let s;if(t instanceof HTMLCanvasElement)s=t;else{ar===void 0&&(ar=Dc("canvas")),ar.width=t.width,ar.height=t.height;const l=ar.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),s=ar}return s.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=Dc("canvas");i.width=t.width,i.height=t.height;const s=i.getContext("2d");s.drawImage(t,0,0,t.width,t.height);const l=s.getImageData(0,0,t.width,t.height),u=l.data;for(let h=0;h<u.length;h++)u[h]=sa(u[h]/255)*255;return s.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(sa(i[s]/255)*255):i[s]=sa(i[s]);return{data:i,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let KS=0;class gd{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:KS++}),this.uuid=zo(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let u;if(Array.isArray(l)){u=[];for(let h=0,d=l.length;h<d;h++)l[h].isDataTexture?u.push(Yf(l[h].image)):u.push(Yf(l[h]))}else u=Yf(l);s.url=u}return i||(t.images[this.uuid]=s),s}}function Yf(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?jS.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let QS=0;const Zf=new tt;class Vn extends bs{constructor(t=Vn.DEFAULT_IMAGE,i=Vn.DEFAULT_MAPPING,s=Ss,l=Ss,u=Ri,h=ys,d=mi,m=Ci,p=Vn.DEFAULT_ANISOTROPY,_=Ga){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:QS++}),this.uuid=zo(),this.name="",this.source=new gd(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=u,this.minFilter=h,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new re(0,0),this.repeat=new re(1,1),this.center=new re(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new se,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Zf).x}get height(){return this.source.getSize(Zf).y}get depth(){return this.source.getSize(Zf).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const s=t[i];if(s===void 0){console.warn(`THREE.Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(t.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==f0)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Lh:t.x=t.x-Math.floor(t.x);break;case Ss:t.x=t.x<0?0:1;break;case Nh:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Lh:t.y=t.y-Math.floor(t.y);break;case Ss:t.y=t.y<0?0:1;break;case Nh:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Vn.DEFAULT_IMAGE=null;Vn.DEFAULT_MAPPING=f0;Vn.DEFAULT_ANISOTROPY=1;class Ke{constructor(t=0,i=0,s=0,l=1){Ke.prototype.isVector4=!0,this.x=t,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,s,l){return this.x=t,this.y=i,this.z=s,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,u=this.w,h=t.elements;return this.x=h[0]*i+h[4]*s+h[8]*l+h[12]*u,this.y=h[1]*i+h[5]*s+h[9]*l+h[13]*u,this.z=h[2]*i+h[6]*s+h[10]*l+h[14]*u,this.w=h[3]*i+h[7]*s+h[11]*l+h[15]*u,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,s,l,u;const m=t.elements,p=m[0],_=m[4],v=m[8],x=m[1],M=m[5],E=m[9],R=m[2],S=m[6],g=m[10];if(Math.abs(_-x)<.01&&Math.abs(v-R)<.01&&Math.abs(E-S)<.01){if(Math.abs(_+x)<.1&&Math.abs(v+R)<.1&&Math.abs(E+S)<.1&&Math.abs(p+M+g-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const D=(p+1)/2,w=(M+1)/2,B=(g+1)/2,H=(_+x)/4,I=(v+R)/4,X=(E+S)/4;return D>w&&D>B?D<.01?(s=0,l=.707106781,u=.707106781):(s=Math.sqrt(D),l=H/s,u=I/s):w>B?w<.01?(s=.707106781,l=0,u=.707106781):(l=Math.sqrt(w),s=H/l,u=X/l):B<.01?(s=.707106781,l=.707106781,u=0):(u=Math.sqrt(B),s=I/u,l=X/u),this.set(s,l,u,i),this}let N=Math.sqrt((S-E)*(S-E)+(v-R)*(v-R)+(x-_)*(x-_));return Math.abs(N)<.001&&(N=1),this.x=(S-E)/N,this.y=(v-R)/N,this.z=(x-_)/N,this.w=Math.acos((p+M+g-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=_e(this.x,t.x,i.x),this.y=_e(this.y,t.y,i.y),this.z=_e(this.z,t.z,i.z),this.w=_e(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=_e(this.x,t,i),this.y=_e(this.y,t,i),this.z=_e(this.z,t,i),this.w=_e(this.w,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(_e(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this.w=t.w+(i.w-t.w)*s,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class JS extends bs{constructor(t=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ri,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=s.depth,this.scissor=new Ke(0,0,t,i),this.scissorTest=!1,this.viewport=new Ke(0,0,t,i);const l={width:t,height:i,depth:s.depth},u=new Vn(l);this.textures=[];const h=s.count;for(let d=0;d<h;d++)this.textures[d]=u.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(t={}){const i={minFilter:Ri,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,s=1){if(this.width!==t||this.height!==i||this.depth!==s){this.width=t,this.height=i,this.depth=s;for(let l=0,u=this.textures.length;l<u;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isArrayTexture=this.textures[l].image.depth>1;this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new gd(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ts extends JS{constructor(t=1,i=1,s={}){super(t,i,s),this.isWebGLRenderTarget=!0}}class M0 extends Vn{constructor(t=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=gi,this.minFilter=gi,this.wrapR=Ss,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class $S extends Vn{constructor(t=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=gi,this.minFilter=gi,this.wrapR=Ss,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Io{constructor(t=new tt(1/0,1/0,1/0),i=new tt(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i+=3)this.expandByPoint(fi.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,s=t.count;i<s;i++)this.expandByPoint(fi.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const s=fi.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(s),this.max.copy(t).add(s),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const s=t.geometry;if(s!==void 0){const u=s.getAttribute("position");if(i===!0&&u!==void 0&&t.isInstancedMesh!==!0)for(let h=0,d=u.count;h<d;h++)t.isMesh===!0?t.getVertexPosition(h,fi):fi.fromBufferAttribute(u,h),fi.applyMatrix4(t.matrixWorld),this.expandByPoint(fi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ql.copy(t.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),Ql.copy(s.boundingBox)),Ql.applyMatrix4(t.matrixWorld),this.union(Ql)}const l=t.children;for(let u=0,h=l.length;u<h;u++)this.expandByObject(l[u],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,fi),fi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,s;return t.normal.x>0?(i=t.normal.x*this.min.x,s=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,s=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,s+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,s+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,s+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,s+=t.normal.z*this.min.z),i<=-t.constant&&s>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(bo),Jl.subVectors(this.max,bo),sr.subVectors(t.a,bo),rr.subVectors(t.b,bo),or.subVectors(t.c,bo),Oa.subVectors(rr,sr),Pa.subVectors(or,rr),fs.subVectors(sr,or);let i=[0,-Oa.z,Oa.y,0,-Pa.z,Pa.y,0,-fs.z,fs.y,Oa.z,0,-Oa.x,Pa.z,0,-Pa.x,fs.z,0,-fs.x,-Oa.y,Oa.x,0,-Pa.y,Pa.x,0,-fs.y,fs.x,0];return!jf(i,sr,rr,or,Jl)||(i=[1,0,0,0,1,0,0,0,1],!jf(i,sr,rr,or,Jl))?!1:($l.crossVectors(Oa,Pa),i=[$l.x,$l.y,$l.z],jf(i,sr,rr,or,Jl))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,fi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(fi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Zi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Zi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Zi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Zi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Zi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Zi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Zi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Zi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Zi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Zi=[new tt,new tt,new tt,new tt,new tt,new tt,new tt,new tt],fi=new tt,Ql=new Io,sr=new tt,rr=new tt,or=new tt,Oa=new tt,Pa=new tt,fs=new tt,bo=new tt,Jl=new tt,$l=new tt,hs=new tt;function jf(o,t,i,s,l){for(let u=0,h=o.length-3;u<=h;u+=3){hs.fromArray(o,u);const d=l.x*Math.abs(hs.x)+l.y*Math.abs(hs.y)+l.z*Math.abs(hs.z),m=t.dot(hs),p=i.dot(hs),_=s.dot(hs);if(Math.max(-Math.max(m,p,_),Math.min(m,p,_))>d)return!1}return!0}const ty=new Io,Ao=new tt,Kf=new tt;class Lc{constructor(t=new tt,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const s=this.center;i!==void 0?s.copy(i):ty.setFromPoints(t).getCenter(s);let l=0;for(let u=0,h=t.length;u<h;u++)l=Math.max(l,s.distanceToSquared(t[u]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const s=this.center.distanceToSquared(t);return i.copy(t),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ao.subVectors(t,this.center);const i=Ao.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(Ao,l/s),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Kf.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ao.copy(t.center).add(Kf)),this.expandByPoint(Ao.copy(t.center).sub(Kf))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const ji=new tt,Qf=new tt,tc=new tt,za=new tt,Jf=new tt,ec=new tt,$f=new tt;class vd{constructor(t=new tt,i=new tt(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ji)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=ji.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(ji.copy(this.origin).addScaledVector(this.direction,i),ji.distanceToSquared(t))}distanceSqToSegment(t,i,s,l){Qf.copy(t).add(i).multiplyScalar(.5),tc.copy(i).sub(t).normalize(),za.copy(this.origin).sub(Qf);const u=t.distanceTo(i)*.5,h=-this.direction.dot(tc),d=za.dot(this.direction),m=-za.dot(tc),p=za.lengthSq(),_=Math.abs(1-h*h);let v,x,M,E;if(_>0)if(v=h*m-d,x=h*d-m,E=u*_,v>=0)if(x>=-E)if(x<=E){const R=1/_;v*=R,x*=R,M=v*(v+h*x+2*d)+x*(h*v+x+2*m)+p}else x=u,v=Math.max(0,-(h*x+d)),M=-v*v+x*(x+2*m)+p;else x=-u,v=Math.max(0,-(h*x+d)),M=-v*v+x*(x+2*m)+p;else x<=-E?(v=Math.max(0,-(-h*u+d)),x=v>0?-u:Math.min(Math.max(-u,-m),u),M=-v*v+x*(x+2*m)+p):x<=E?(v=0,x=Math.min(Math.max(-u,-m),u),M=x*(x+2*m)+p):(v=Math.max(0,-(h*u+d)),x=v>0?u:Math.min(Math.max(-u,-m),u),M=-v*v+x*(x+2*m)+p);else x=h>0?-u:u,v=Math.max(0,-(h*x+d)),M=-v*v+x*(x+2*m)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,v),l&&l.copy(Qf).addScaledVector(tc,x),M}intersectSphere(t,i){ji.subVectors(t.center,this.origin);const s=ji.dot(this.direction),l=ji.dot(ji)-s*s,u=t.radius*t.radius;if(l>u)return null;const h=Math.sqrt(u-l),d=s-h,m=s+h;return m<0?null:d<0?this.at(m,i):this.at(d,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(t.normal)+t.constant)/i;return s>=0?s:null}intersectPlane(t,i){const s=this.distanceToPlane(t);return s===null?null:this.at(s,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let s,l,u,h,d,m;const p=1/this.direction.x,_=1/this.direction.y,v=1/this.direction.z,x=this.origin;return p>=0?(s=(t.min.x-x.x)*p,l=(t.max.x-x.x)*p):(s=(t.max.x-x.x)*p,l=(t.min.x-x.x)*p),_>=0?(u=(t.min.y-x.y)*_,h=(t.max.y-x.y)*_):(u=(t.max.y-x.y)*_,h=(t.min.y-x.y)*_),s>h||u>l||((u>s||isNaN(s))&&(s=u),(h<l||isNaN(l))&&(l=h),v>=0?(d=(t.min.z-x.z)*v,m=(t.max.z-x.z)*v):(d=(t.max.z-x.z)*v,m=(t.min.z-x.z)*v),s>m||d>l)||((d>s||s!==s)&&(s=d),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(t){return this.intersectBox(t,ji)!==null}intersectTriangle(t,i,s,l,u){Jf.subVectors(i,t),ec.subVectors(s,t),$f.crossVectors(Jf,ec);let h=this.direction.dot($f),d;if(h>0){if(l)return null;d=1}else if(h<0)d=-1,h=-h;else return null;za.subVectors(this.origin,t);const m=d*this.direction.dot(ec.crossVectors(za,ec));if(m<0)return null;const p=d*this.direction.dot(Jf.cross(za));if(p<0||m+p>h)return null;const _=-d*za.dot($f);return _<0?null:this.at(_/h,u)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ye{constructor(t,i,s,l,u,h,d,m,p,_,v,x,M,E,R,S){Ye.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,s,l,u,h,d,m,p,_,v,x,M,E,R,S)}set(t,i,s,l,u,h,d,m,p,_,v,x,M,E,R,S){const g=this.elements;return g[0]=t,g[4]=i,g[8]=s,g[12]=l,g[1]=u,g[5]=h,g[9]=d,g[13]=m,g[2]=p,g[6]=_,g[10]=v,g[14]=x,g[3]=M,g[7]=E,g[11]=R,g[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ye().fromArray(this.elements)}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(t){const i=this.elements,s=t.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,s){return t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this}makeBasis(t,i,s){return this.set(t.x,i.x,s.x,0,t.y,i.y,s.y,0,t.z,i.z,s.z,0,0,0,0,1),this}extractRotation(t){const i=this.elements,s=t.elements,l=1/lr.setFromMatrixColumn(t,0).length(),u=1/lr.setFromMatrixColumn(t,1).length(),h=1/lr.setFromMatrixColumn(t,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*u,i[5]=s[5]*u,i[6]=s[6]*u,i[7]=0,i[8]=s[8]*h,i[9]=s[9]*h,i[10]=s[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,s=t.x,l=t.y,u=t.z,h=Math.cos(s),d=Math.sin(s),m=Math.cos(l),p=Math.sin(l),_=Math.cos(u),v=Math.sin(u);if(t.order==="XYZ"){const x=h*_,M=h*v,E=d*_,R=d*v;i[0]=m*_,i[4]=-m*v,i[8]=p,i[1]=M+E*p,i[5]=x-R*p,i[9]=-d*m,i[2]=R-x*p,i[6]=E+M*p,i[10]=h*m}else if(t.order==="YXZ"){const x=m*_,M=m*v,E=p*_,R=p*v;i[0]=x+R*d,i[4]=E*d-M,i[8]=h*p,i[1]=h*v,i[5]=h*_,i[9]=-d,i[2]=M*d-E,i[6]=R+x*d,i[10]=h*m}else if(t.order==="ZXY"){const x=m*_,M=m*v,E=p*_,R=p*v;i[0]=x-R*d,i[4]=-h*v,i[8]=E+M*d,i[1]=M+E*d,i[5]=h*_,i[9]=R-x*d,i[2]=-h*p,i[6]=d,i[10]=h*m}else if(t.order==="ZYX"){const x=h*_,M=h*v,E=d*_,R=d*v;i[0]=m*_,i[4]=E*p-M,i[8]=x*p+R,i[1]=m*v,i[5]=R*p+x,i[9]=M*p-E,i[2]=-p,i[6]=d*m,i[10]=h*m}else if(t.order==="YZX"){const x=h*m,M=h*p,E=d*m,R=d*p;i[0]=m*_,i[4]=R-x*v,i[8]=E*v+M,i[1]=v,i[5]=h*_,i[9]=-d*_,i[2]=-p*_,i[6]=M*v+E,i[10]=x-R*v}else if(t.order==="XZY"){const x=h*m,M=h*p,E=d*m,R=d*p;i[0]=m*_,i[4]=-v,i[8]=p*_,i[1]=x*v+R,i[5]=h*_,i[9]=M*v-E,i[2]=E*v-M,i[6]=d*_,i[10]=R*v+x}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(ey,t,ny)}lookAt(t,i,s){const l=this.elements;return Qn.subVectors(t,i),Qn.lengthSq()===0&&(Qn.z=1),Qn.normalize(),Ia.crossVectors(s,Qn),Ia.lengthSq()===0&&(Math.abs(s.z)===1?Qn.x+=1e-4:Qn.z+=1e-4,Qn.normalize(),Ia.crossVectors(s,Qn)),Ia.normalize(),nc.crossVectors(Qn,Ia),l[0]=Ia.x,l[4]=nc.x,l[8]=Qn.x,l[1]=Ia.y,l[5]=nc.y,l[9]=Qn.y,l[2]=Ia.z,l[6]=nc.z,l[10]=Qn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,u=this.elements,h=s[0],d=s[4],m=s[8],p=s[12],_=s[1],v=s[5],x=s[9],M=s[13],E=s[2],R=s[6],S=s[10],g=s[14],N=s[3],D=s[7],w=s[11],B=s[15],H=l[0],I=l[4],X=l[8],U=l[12],C=l[1],G=l[5],lt=l[9],rt=l[13],gt=l[2],ht=l[6],z=l[10],j=l[14],Y=l[3],Mt=l[7],L=l[11],$=l[15];return u[0]=h*H+d*C+m*gt+p*Y,u[4]=h*I+d*G+m*ht+p*Mt,u[8]=h*X+d*lt+m*z+p*L,u[12]=h*U+d*rt+m*j+p*$,u[1]=_*H+v*C+x*gt+M*Y,u[5]=_*I+v*G+x*ht+M*Mt,u[9]=_*X+v*lt+x*z+M*L,u[13]=_*U+v*rt+x*j+M*$,u[2]=E*H+R*C+S*gt+g*Y,u[6]=E*I+R*G+S*ht+g*Mt,u[10]=E*X+R*lt+S*z+g*L,u[14]=E*U+R*rt+S*j+g*$,u[3]=N*H+D*C+w*gt+B*Y,u[7]=N*I+D*G+w*ht+B*Mt,u[11]=N*X+D*lt+w*z+B*L,u[15]=N*U+D*rt+w*j+B*$,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[4],l=t[8],u=t[12],h=t[1],d=t[5],m=t[9],p=t[13],_=t[2],v=t[6],x=t[10],M=t[14],E=t[3],R=t[7],S=t[11],g=t[15];return E*(+u*m*v-l*p*v-u*d*x+s*p*x+l*d*M-s*m*M)+R*(+i*m*M-i*p*x+u*h*x-l*h*M+l*p*_-u*m*_)+S*(+i*p*v-i*d*M-u*h*v+s*h*M+u*d*_-s*p*_)+g*(-l*d*_-i*m*v+i*d*x+l*h*v-s*h*x+s*m*_)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,s){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=s),this}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],u=t[3],h=t[4],d=t[5],m=t[6],p=t[7],_=t[8],v=t[9],x=t[10],M=t[11],E=t[12],R=t[13],S=t[14],g=t[15],N=v*S*p-R*x*p+R*m*M-d*S*M-v*m*g+d*x*g,D=E*x*p-_*S*p-E*m*M+h*S*M+_*m*g-h*x*g,w=_*R*p-E*v*p+E*d*M-h*R*M-_*d*g+h*v*g,B=E*v*m-_*R*m-E*d*x+h*R*x+_*d*S-h*v*S,H=i*N+s*D+l*w+u*B;if(H===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/H;return t[0]=N*I,t[1]=(R*x*u-v*S*u-R*l*M+s*S*M+v*l*g-s*x*g)*I,t[2]=(d*S*u-R*m*u+R*l*p-s*S*p-d*l*g+s*m*g)*I,t[3]=(v*m*u-d*x*u-v*l*p+s*x*p+d*l*M-s*m*M)*I,t[4]=D*I,t[5]=(_*S*u-E*x*u+E*l*M-i*S*M-_*l*g+i*x*g)*I,t[6]=(E*m*u-h*S*u-E*l*p+i*S*p+h*l*g-i*m*g)*I,t[7]=(h*x*u-_*m*u+_*l*p-i*x*p-h*l*M+i*m*M)*I,t[8]=w*I,t[9]=(E*v*u-_*R*u-E*s*M+i*R*M+_*s*g-i*v*g)*I,t[10]=(h*R*u-E*d*u+E*s*p-i*R*p-h*s*g+i*d*g)*I,t[11]=(_*d*u-h*v*u-_*s*p+i*v*p+h*s*M-i*d*M)*I,t[12]=B*I,t[13]=(_*R*l-E*v*l+E*s*x-i*R*x-_*s*S+i*v*S)*I,t[14]=(E*d*l-h*R*l-E*s*m+i*R*m+h*s*S-i*d*S)*I,t[15]=(h*v*l-_*d*l+_*s*m-i*v*m-h*s*x+i*d*x)*I,this}scale(t){const i=this.elements,s=t.x,l=t.y,u=t.z;return i[0]*=s,i[4]*=l,i[8]*=u,i[1]*=s,i[5]*=l,i[9]*=u,i[2]*=s,i[6]*=l,i[10]*=u,i[3]*=s,i[7]*=l,i[11]*=u,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],s=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(t,i,s){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),s=Math.sin(t);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const s=Math.cos(i),l=Math.sin(i),u=1-s,h=t.x,d=t.y,m=t.z,p=u*h,_=u*d;return this.set(p*h+s,p*d-l*m,p*m+l*d,0,p*d+l*m,_*d+s,_*m-l*h,0,p*m-l*d,_*m+l*h,u*m*m+s,0,0,0,0,1),this}makeScale(t,i,s){return this.set(t,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(t,i,s,l,u,h){return this.set(1,s,u,0,t,1,h,0,i,l,1,0,0,0,0,1),this}compose(t,i,s){const l=this.elements,u=i._x,h=i._y,d=i._z,m=i._w,p=u+u,_=h+h,v=d+d,x=u*p,M=u*_,E=u*v,R=h*_,S=h*v,g=d*v,N=m*p,D=m*_,w=m*v,B=s.x,H=s.y,I=s.z;return l[0]=(1-(R+g))*B,l[1]=(M+w)*B,l[2]=(E-D)*B,l[3]=0,l[4]=(M-w)*H,l[5]=(1-(x+g))*H,l[6]=(S+N)*H,l[7]=0,l[8]=(E+D)*I,l[9]=(S-N)*I,l[10]=(1-(x+R))*I,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,s){const l=this.elements;let u=lr.set(l[0],l[1],l[2]).length();const h=lr.set(l[4],l[5],l[6]).length(),d=lr.set(l[8],l[9],l[10]).length();this.determinant()<0&&(u=-u),t.x=l[12],t.y=l[13],t.z=l[14],hi.copy(this);const p=1/u,_=1/h,v=1/d;return hi.elements[0]*=p,hi.elements[1]*=p,hi.elements[2]*=p,hi.elements[4]*=_,hi.elements[5]*=_,hi.elements[6]*=_,hi.elements[8]*=v,hi.elements[9]*=v,hi.elements[10]*=v,i.setFromRotationMatrix(hi),s.x=u,s.y=h,s.z=d,this}makePerspective(t,i,s,l,u,h,d=ia){const m=this.elements,p=2*u/(i-t),_=2*u/(s-l),v=(i+t)/(i-t),x=(s+l)/(s-l);let M,E;if(d===ia)M=-(h+u)/(h-u),E=-2*h*u/(h-u);else if(d===wc)M=-h/(h-u),E=-h*u/(h-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return m[0]=p,m[4]=0,m[8]=v,m[12]=0,m[1]=0,m[5]=_,m[9]=x,m[13]=0,m[2]=0,m[6]=0,m[10]=M,m[14]=E,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(t,i,s,l,u,h,d=ia){const m=this.elements,p=1/(i-t),_=1/(s-l),v=1/(h-u),x=(i+t)*p,M=(s+l)*_;let E,R;if(d===ia)E=(h+u)*v,R=-2*v;else if(d===wc)E=u*v,R=-1*v;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return m[0]=2*p,m[4]=0,m[8]=0,m[12]=-x,m[1]=0,m[5]=2*_,m[9]=0,m[13]=-M,m[2]=0,m[6]=0,m[10]=R,m[14]=-E,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<16;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t[i+9]=s[9],t[i+10]=s[10],t[i+11]=s[11],t[i+12]=s[12],t[i+13]=s[13],t[i+14]=s[14],t[i+15]=s[15],t}}const lr=new tt,hi=new Ye,ey=new tt(0,0,0),ny=new tt(1,1,1),Ia=new tt,nc=new tt,Qn=new tt,_g=new Ye,gg=new Es;class ra{constructor(t=0,i=0,s=0,l=ra.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,s,l=this._order){return this._x=t,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,s=!0){const l=t.elements,u=l[0],h=l[4],d=l[8],m=l[1],p=l[5],_=l[9],v=l[2],x=l[6],M=l[10];switch(i){case"XYZ":this._y=Math.asin(_e(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-_,M),this._z=Math.atan2(-h,u)):(this._x=Math.atan2(x,p),this._z=0);break;case"YXZ":this._x=Math.asin(-_e(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(d,M),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-v,u),this._z=0);break;case"ZXY":this._x=Math.asin(_e(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-v,M),this._z=Math.atan2(-h,p)):(this._y=0,this._z=Math.atan2(m,u));break;case"ZYX":this._y=Math.asin(-_e(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(x,M),this._z=Math.atan2(m,u)):(this._x=0,this._z=Math.atan2(-h,p));break;case"YZX":this._z=Math.asin(_e(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-_,p),this._y=Math.atan2(-v,u)):(this._x=0,this._y=Math.atan2(d,M));break;case"XZY":this._z=Math.asin(-_e(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(x,p),this._y=Math.atan2(d,u)):(this._x=Math.atan2(-_,M),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,s){return _g.makeRotationFromQuaternion(t),this.setFromRotationMatrix(_g,i,s)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return gg.setFromEuler(this),this.setFromQuaternion(gg,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ra.DEFAULT_ORDER="XYZ";class E0{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let iy=0;const vg=new tt,cr=new Es,Ki=new Ye,ic=new tt,Ro=new tt,ay=new tt,sy=new Es,xg=new tt(1,0,0),Sg=new tt(0,1,0),yg=new tt(0,0,1),Mg={type:"added"},ry={type:"removed"},ur={type:"childadded",child:null},th={type:"childremoved",child:null};class bn extends bs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:iy++}),this.uuid=zo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=bn.DEFAULT_UP.clone();const t=new tt,i=new ra,s=new Es,l=new tt(1,1,1);function u(){s.setFromEuler(i,!1)}function h(){i.setFromQuaternion(s,void 0,!1)}i._onChange(u),s._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new Ye},normalMatrix:{value:new se}}),this.matrix=new Ye,this.matrixWorld=new Ye,this.matrixAutoUpdate=bn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=bn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new E0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return cr.setFromAxisAngle(t,i),this.quaternion.multiply(cr),this}rotateOnWorldAxis(t,i){return cr.setFromAxisAngle(t,i),this.quaternion.premultiply(cr),this}rotateX(t){return this.rotateOnAxis(xg,t)}rotateY(t){return this.rotateOnAxis(Sg,t)}rotateZ(t){return this.rotateOnAxis(yg,t)}translateOnAxis(t,i){return vg.copy(t).applyQuaternion(this.quaternion),this.position.add(vg.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(xg,t)}translateY(t){return this.translateOnAxis(Sg,t)}translateZ(t){return this.translateOnAxis(yg,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ki.copy(this.matrixWorld).invert())}lookAt(t,i,s){t.isVector3?ic.copy(t):ic.set(t,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),Ro.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ki.lookAt(Ro,ic,this.up):Ki.lookAt(ic,Ro,this.up),this.quaternion.setFromRotationMatrix(Ki),l&&(Ki.extractRotation(l.matrixWorld),cr.setFromRotationMatrix(Ki),this.quaternion.premultiply(cr.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Mg),ur.child=t,this.dispatchEvent(ur),ur.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(ry),th.child=t,this.dispatchEvent(th),th.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ki.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ki.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ki),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Mg),ur.child=t,this.dispatchEvent(ur),ur.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const h=this.children[s].getObjectByProperty(t,i);if(h!==void 0)return h}}getObjectsByProperty(t,i,s=[]){this[t]===i&&s.push(this);const l=this.children;for(let u=0,h=l.length;u<h;u++)l[u].getObjectsByProperty(t,i,s);return s}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ro,t,ay),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ro,sy,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(t)}updateWorldMatrix(t,i){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let u=0,h=l.length;u<h;u++)l[u].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",s={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(d=>({...d})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function u(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=u(t.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,_=m.length;p<_;p++){const v=m[p];u(t.shapes,v)}else u(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(u(t.materials,this.material[m]));l.material=d}else l.material=u(t.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];l.animations.push(u(t.animations,m))}}if(i){const d=h(t.geometries),m=h(t.materials),p=h(t.textures),_=h(t.images),v=h(t.shapes),x=h(t.skeletons),M=h(t.animations),E=h(t.nodes);d.length>0&&(s.geometries=d),m.length>0&&(s.materials=m),p.length>0&&(s.textures=p),_.length>0&&(s.images=_),v.length>0&&(s.shapes=v),x.length>0&&(s.skeletons=x),M.length>0&&(s.animations=M),E.length>0&&(s.nodes=E)}return s.object=l,s;function h(d){const m=[];for(const p in d){const _=d[p];delete _.metadata,m.push(_)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let s=0;s<t.children.length;s++){const l=t.children[s];this.add(l.clone())}return this}}bn.DEFAULT_UP=new tt(0,1,0);bn.DEFAULT_MATRIX_AUTO_UPDATE=!0;bn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const di=new tt,Qi=new tt,eh=new tt,Ji=new tt,fr=new tt,hr=new tt,Eg=new tt,nh=new tt,ih=new tt,ah=new tt,sh=new Ke,rh=new Ke,oh=new Ke;class pi{constructor(t=new tt,i=new tt,s=new tt){this.a=t,this.b=i,this.c=s}static getNormal(t,i,s,l){l.subVectors(s,i),di.subVectors(t,i),l.cross(di);const u=l.lengthSq();return u>0?l.multiplyScalar(1/Math.sqrt(u)):l.set(0,0,0)}static getBarycoord(t,i,s,l,u){di.subVectors(l,i),Qi.subVectors(s,i),eh.subVectors(t,i);const h=di.dot(di),d=di.dot(Qi),m=di.dot(eh),p=Qi.dot(Qi),_=Qi.dot(eh),v=h*p-d*d;if(v===0)return u.set(0,0,0),null;const x=1/v,M=(p*m-d*_)*x,E=(h*_-d*m)*x;return u.set(1-M-E,E,M)}static containsPoint(t,i,s,l){return this.getBarycoord(t,i,s,l,Ji)===null?!1:Ji.x>=0&&Ji.y>=0&&Ji.x+Ji.y<=1}static getInterpolation(t,i,s,l,u,h,d,m){return this.getBarycoord(t,i,s,l,Ji)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(u,Ji.x),m.addScaledVector(h,Ji.y),m.addScaledVector(d,Ji.z),m)}static getInterpolatedAttribute(t,i,s,l,u,h){return sh.setScalar(0),rh.setScalar(0),oh.setScalar(0),sh.fromBufferAttribute(t,i),rh.fromBufferAttribute(t,s),oh.fromBufferAttribute(t,l),h.setScalar(0),h.addScaledVector(sh,u.x),h.addScaledVector(rh,u.y),h.addScaledVector(oh,u.z),h}static isFrontFacing(t,i,s,l){return di.subVectors(s,i),Qi.subVectors(t,i),di.cross(Qi).dot(l)<0}set(t,i,s){return this.a.copy(t),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(t,i,s,l){return this.a.copy(t[i]),this.b.copy(t[s]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,s,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,s),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return di.subVectors(this.c,this.b),Qi.subVectors(this.a,this.b),di.cross(Qi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return pi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return pi.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,s,l,u){return pi.getInterpolation(t,this.a,this.b,this.c,i,s,l,u)}containsPoint(t){return pi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return pi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const s=this.a,l=this.b,u=this.c;let h,d;fr.subVectors(l,s),hr.subVectors(u,s),nh.subVectors(t,s);const m=fr.dot(nh),p=hr.dot(nh);if(m<=0&&p<=0)return i.copy(s);ih.subVectors(t,l);const _=fr.dot(ih),v=hr.dot(ih);if(_>=0&&v<=_)return i.copy(l);const x=m*v-_*p;if(x<=0&&m>=0&&_<=0)return h=m/(m-_),i.copy(s).addScaledVector(fr,h);ah.subVectors(t,u);const M=fr.dot(ah),E=hr.dot(ah);if(E>=0&&M<=E)return i.copy(u);const R=M*p-m*E;if(R<=0&&p>=0&&E<=0)return d=p/(p-E),i.copy(s).addScaledVector(hr,d);const S=_*E-M*v;if(S<=0&&v-_>=0&&M-E>=0)return Eg.subVectors(u,l),d=(v-_)/(v-_+(M-E)),i.copy(l).addScaledVector(Eg,d);const g=1/(S+R+x);return h=R*g,d=x*g,i.copy(s).addScaledVector(fr,h).addScaledVector(hr,d)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const T0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ba={h:0,s:0,l:0},ac={h:0,s:0,l:0};function lh(o,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(t-o)*6*i:i<1/2?t:i<2/3?o+(t-o)*6*(2/3-i):o}class be{constructor(t,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,s)}set(t,i,s){if(i===void 0&&s===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,s);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=Nn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Te.colorSpaceToWorking(this,i),this}setRGB(t,i,s,l=Te.workingColorSpace){return this.r=t,this.g=i,this.b=s,Te.colorSpaceToWorking(this,l),this}setHSL(t,i,s,l=Te.workingColorSpace){if(t=VS(t,1),i=_e(i,0,1),s=_e(s,0,1),i===0)this.r=this.g=this.b=s;else{const u=s<=.5?s*(1+i):s+i-s*i,h=2*s-u;this.r=lh(h,u,t+1/3),this.g=lh(h,u,t),this.b=lh(h,u,t-1/3)}return Te.colorSpaceToWorking(this,l),this}setStyle(t,i=Nn){function s(u){u!==void 0&&parseFloat(u)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let u;const h=l[1],d=l[2];switch(h){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,i);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,i);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const u=l[1],h=u.length;if(h===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(u,16),i);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=Nn){const s=T0[t.toLowerCase()];return s!==void 0?this.setHex(s,i):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=sa(t.r),this.g=sa(t.g),this.b=sa(t.b),this}copyLinearToSRGB(t){return this.r=Mr(t.r),this.g=Mr(t.g),this.b=Mr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Nn){return Te.workingToColorSpace(Dn.copy(this),t),Math.round(_e(Dn.r*255,0,255))*65536+Math.round(_e(Dn.g*255,0,255))*256+Math.round(_e(Dn.b*255,0,255))}getHexString(t=Nn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=Te.workingColorSpace){Te.workingToColorSpace(Dn.copy(this),i);const s=Dn.r,l=Dn.g,u=Dn.b,h=Math.max(s,l,u),d=Math.min(s,l,u);let m,p;const _=(d+h)/2;if(d===h)m=0,p=0;else{const v=h-d;switch(p=_<=.5?v/(h+d):v/(2-h-d),h){case s:m=(l-u)/v+(l<u?6:0);break;case l:m=(u-s)/v+2;break;case u:m=(s-l)/v+4;break}m/=6}return t.h=m,t.s=p,t.l=_,t}getRGB(t,i=Te.workingColorSpace){return Te.workingToColorSpace(Dn.copy(this),i),t.r=Dn.r,t.g=Dn.g,t.b=Dn.b,t}getStyle(t=Nn){Te.workingToColorSpace(Dn.copy(this),t);const i=Dn.r,s=Dn.g,l=Dn.b;return t!==Nn?`color(${t} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(t,i,s){return this.getHSL(Ba),this.setHSL(Ba.h+t,Ba.s+i,Ba.l+s)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,s){return this.r=t.r+(i.r-t.r)*s,this.g=t.g+(i.g-t.g)*s,this.b=t.b+(i.b-t.b)*s,this}lerpHSL(t,i){this.getHSL(Ba),t.getHSL(ac);const s=Xf(Ba.h,ac.h,i),l=Xf(Ba.s,ac.s,i),u=Xf(Ba.l,ac.l,i);return this.setHSL(s,l,u),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,s=this.g,l=this.b,u=t.elements;return this.r=u[0]*i+u[3]*s+u[6]*l,this.g=u[1]*i+u[4]*s+u[7]*l,this.b=u[2]*i+u[5]*s+u[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Dn=new be;be.NAMES=T0;let oy=0;class Bo extends bs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:oy++}),this.uuid=zo(),this.name="",this.type="Material",this.blending=Sr,this.side=Xa,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=yh,this.blendDst=Mh,this.blendEquation=vs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new be(0,0,0),this.blendAlpha=0,this.depthFunc=Er,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=cg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ir,this.stencilZFail=ir,this.stencilZPass=ir,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const s=t[i];if(s===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(t).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(t).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(t).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(t).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(t).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Sr&&(s.blending=this.blending),this.side!==Xa&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==yh&&(s.blendSrc=this.blendSrc),this.blendDst!==Mh&&(s.blendDst=this.blendDst),this.blendEquation!==vs&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Er&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==cg&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ir&&(s.stencilFail=this.stencilFail),this.stencilZFail!==ir&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==ir&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(u){const h=[];for(const d in u){const m=u[d];delete m.metadata,h.push(m)}return h}if(i){const u=l(t.textures),h=l(t.images);u.length>0&&(s.textures=u),h.length>0&&(s.images=h)}return s}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let u=0;u!==l;++u)s[u]=i[u].clone()}return this.clippingPlanes=s,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class b0 extends Bo{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ra,this.combine=u0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const an=new tt,sc=new re;let ly=0;class vi{constructor(t,i,s=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:ly++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=s,this.usage=ug,this.updateRanges=[],this.gpuType=na,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,s){t*=this.itemSize,s*=i.itemSize;for(let l=0,u=this.itemSize;l<u;l++)this.array[t+l]=i.array[s+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)sc.fromBufferAttribute(this,i),sc.applyMatrix3(t),this.setXY(i,sc.x,sc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)an.fromBufferAttribute(this,i),an.applyMatrix3(t),this.setXYZ(i,an.x,an.y,an.z);return this}applyMatrix4(t){for(let i=0,s=this.count;i<s;i++)an.fromBufferAttribute(this,i),an.applyMatrix4(t),this.setXYZ(i,an.x,an.y,an.z);return this}applyNormalMatrix(t){for(let i=0,s=this.count;i<s;i++)an.fromBufferAttribute(this,i),an.applyNormalMatrix(t),this.setXYZ(i,an.x,an.y,an.z);return this}transformDirection(t){for(let i=0,s=this.count;i<s;i++)an.fromBufferAttribute(this,i),an.transformDirection(t),this.setXYZ(i,an.x,an.y,an.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let s=this.array[t*this.itemSize+i];return this.normalized&&(s=To(s,this.array)),s}setComponent(t,i,s){return this.normalized&&(s=Fn(s,this.array)),this.array[t*this.itemSize+i]=s,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=To(i,this.array)),i}setX(t,i){return this.normalized&&(i=Fn(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=To(i,this.array)),i}setY(t,i){return this.normalized&&(i=Fn(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=To(i,this.array)),i}setZ(t,i){return this.normalized&&(i=Fn(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=To(i,this.array)),i}setW(t,i){return this.normalized&&(i=Fn(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,s){return t*=this.itemSize,this.normalized&&(i=Fn(i,this.array),s=Fn(s,this.array)),this.array[t+0]=i,this.array[t+1]=s,this}setXYZ(t,i,s,l){return t*=this.itemSize,this.normalized&&(i=Fn(i,this.array),s=Fn(s,this.array),l=Fn(l,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this}setXYZW(t,i,s,l,u){return t*=this.itemSize,this.normalized&&(i=Fn(i,this.array),s=Fn(s,this.array),l=Fn(l,this.array),u=Fn(u,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this.array[t+3]=u,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==ug&&(t.usage=this.usage),t}}class A0 extends vi{constructor(t,i,s){super(new Uint16Array(t),i,s)}}class cy extends vi{constructor(t,i,s){super(new Int32Array(t),i,s)}}class R0 extends vi{constructor(t,i,s){super(new Uint32Array(t),i,s)}}class _i extends vi{constructor(t,i,s){super(new Float32Array(t),i,s)}}let uy=0;const ri=new Ye,ch=new bn,dr=new tt,Jn=new Io,Co=new Io,vn=new tt;class oa extends bs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:uy++}),this.uuid=zo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(y0(t)?R0:A0)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,s=0){this.groups.push({start:t,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const u=new se().getNormalMatrix(t);s.applyNormalMatrix(u),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return ri.makeRotationFromQuaternion(t),this.applyMatrix4(ri),this}rotateX(t){return ri.makeRotationX(t),this.applyMatrix4(ri),this}rotateY(t){return ri.makeRotationY(t),this.applyMatrix4(ri),this}rotateZ(t){return ri.makeRotationZ(t),this.applyMatrix4(ri),this}translate(t,i,s){return ri.makeTranslation(t,i,s),this.applyMatrix4(ri),this}scale(t,i,s){return ri.makeScale(t,i,s),this.applyMatrix4(ri),this}lookAt(t){return ch.lookAt(t),ch.updateMatrix(),this.applyMatrix4(ch.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(dr).negate(),this.translate(dr.x,dr.y,dr.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,u=t.length;l<u;l++){const h=t[l];s.push(h.x,h.y,h.z||0)}this.setAttribute("position",new _i(s,3))}else{const s=Math.min(t.length,i.count);for(let l=0;l<s;l++){const u=t[l];i.setXYZ(l,u.x,u.y,u.z||0)}t.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Io);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new tt(-1/0,-1/0,-1/0),new tt(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let s=0,l=i.length;s<l;s++){const u=i[s];Jn.setFromBufferAttribute(u),this.morphTargetsRelative?(vn.addVectors(this.boundingBox.min,Jn.min),this.boundingBox.expandByPoint(vn),vn.addVectors(this.boundingBox.max,Jn.max),this.boundingBox.expandByPoint(vn)):(this.boundingBox.expandByPoint(Jn.min),this.boundingBox.expandByPoint(Jn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Lc);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new tt,1/0);return}if(t){const s=this.boundingSphere.center;if(Jn.setFromBufferAttribute(t),i)for(let u=0,h=i.length;u<h;u++){const d=i[u];Co.setFromBufferAttribute(d),this.morphTargetsRelative?(vn.addVectors(Jn.min,Co.min),Jn.expandByPoint(vn),vn.addVectors(Jn.max,Co.max),Jn.expandByPoint(vn)):(Jn.expandByPoint(Co.min),Jn.expandByPoint(Co.max))}Jn.getCenter(s);let l=0;for(let u=0,h=t.count;u<h;u++)vn.fromBufferAttribute(t,u),l=Math.max(l,s.distanceToSquared(vn));if(i)for(let u=0,h=i.length;u<h;u++){const d=i[u],m=this.morphTargetsRelative;for(let p=0,_=d.count;p<_;p++)vn.fromBufferAttribute(d,p),m&&(dr.fromBufferAttribute(t,p),vn.add(dr)),l=Math.max(l,s.distanceToSquared(vn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,u=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new vi(new Float32Array(4*s.count),4));const h=this.getAttribute("tangent"),d=[],m=[];for(let X=0;X<s.count;X++)d[X]=new tt,m[X]=new tt;const p=new tt,_=new tt,v=new tt,x=new re,M=new re,E=new re,R=new tt,S=new tt;function g(X,U,C){p.fromBufferAttribute(s,X),_.fromBufferAttribute(s,U),v.fromBufferAttribute(s,C),x.fromBufferAttribute(u,X),M.fromBufferAttribute(u,U),E.fromBufferAttribute(u,C),_.sub(p),v.sub(p),M.sub(x),E.sub(x);const G=1/(M.x*E.y-E.x*M.y);isFinite(G)&&(R.copy(_).multiplyScalar(E.y).addScaledVector(v,-M.y).multiplyScalar(G),S.copy(v).multiplyScalar(M.x).addScaledVector(_,-E.x).multiplyScalar(G),d[X].add(R),d[U].add(R),d[C].add(R),m[X].add(S),m[U].add(S),m[C].add(S))}let N=this.groups;N.length===0&&(N=[{start:0,count:t.count}]);for(let X=0,U=N.length;X<U;++X){const C=N[X],G=C.start,lt=C.count;for(let rt=G,gt=G+lt;rt<gt;rt+=3)g(t.getX(rt+0),t.getX(rt+1),t.getX(rt+2))}const D=new tt,w=new tt,B=new tt,H=new tt;function I(X){B.fromBufferAttribute(l,X),H.copy(B);const U=d[X];D.copy(U),D.sub(B.multiplyScalar(B.dot(U))).normalize(),w.crossVectors(H,U);const G=w.dot(m[X])<0?-1:1;h.setXYZW(X,D.x,D.y,D.z,G)}for(let X=0,U=N.length;X<U;++X){const C=N[X],G=C.start,lt=C.count;for(let rt=G,gt=G+lt;rt<gt;rt+=3)I(t.getX(rt+0)),I(t.getX(rt+1)),I(t.getX(rt+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new vi(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let x=0,M=s.count;x<M;x++)s.setXYZ(x,0,0,0);const l=new tt,u=new tt,h=new tt,d=new tt,m=new tt,p=new tt,_=new tt,v=new tt;if(t)for(let x=0,M=t.count;x<M;x+=3){const E=t.getX(x+0),R=t.getX(x+1),S=t.getX(x+2);l.fromBufferAttribute(i,E),u.fromBufferAttribute(i,R),h.fromBufferAttribute(i,S),_.subVectors(h,u),v.subVectors(l,u),_.cross(v),d.fromBufferAttribute(s,E),m.fromBufferAttribute(s,R),p.fromBufferAttribute(s,S),d.add(_),m.add(_),p.add(_),s.setXYZ(E,d.x,d.y,d.z),s.setXYZ(R,m.x,m.y,m.z),s.setXYZ(S,p.x,p.y,p.z)}else for(let x=0,M=i.count;x<M;x+=3)l.fromBufferAttribute(i,x+0),u.fromBufferAttribute(i,x+1),h.fromBufferAttribute(i,x+2),_.subVectors(h,u),v.subVectors(l,u),_.cross(v),s.setXYZ(x+0,_.x,_.y,_.z),s.setXYZ(x+1,_.x,_.y,_.z),s.setXYZ(x+2,_.x,_.y,_.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,s=t.count;i<s;i++)vn.fromBufferAttribute(t,i),vn.normalize(),t.setXYZ(i,vn.x,vn.y,vn.z)}toNonIndexed(){function t(d,m){const p=d.array,_=d.itemSize,v=d.normalized,x=new p.constructor(m.length*_);let M=0,E=0;for(let R=0,S=m.length;R<S;R++){d.isInterleavedBufferAttribute?M=m[R]*d.data.stride+d.offset:M=m[R]*_;for(let g=0;g<_;g++)x[E++]=p[M++]}return new vi(x,_,v)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new oa,s=this.index.array,l=this.attributes;for(const d in l){const m=l[d],p=t(m,s);i.setAttribute(d,p)}const u=this.morphAttributes;for(const d in u){const m=[],p=u[d];for(let _=0,v=p.length;_<v;_++){const x=p[_],M=t(x,s);m.push(M)}i.morphAttributes[d]=m}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,m=h.length;d<m;d++){const p=h[d];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(t[p]=m[p]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const p=s[m];t.data.attributes[m]=p.toJSON(t.data)}const l={};let u=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],_=[];for(let v=0,x=p.length;v<x;v++){const M=p[v];_.push(M.toJSON(t.data))}_.length>0&&(l[m]=_,u=!0)}u&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(t.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(t.data.boundingSphere=d.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const s=t.index;s!==null&&this.setIndex(s.clone());const l=t.attributes;for(const p in l){const _=l[p];this.setAttribute(p,_.clone(i))}const u=t.morphAttributes;for(const p in u){const _=[],v=u[p];for(let x=0,M=v.length;x<M;x++)_.push(v[x].clone(i));this.morphAttributes[p]=_}this.morphTargetsRelative=t.morphTargetsRelative;const h=t.groups;for(let p=0,_=h.length;p<_;p++){const v=h[p];this.addGroup(v.start,v.count,v.materialIndex)}const d=t.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Tg=new Ye,ds=new vd,rc=new Lc,bg=new tt,oc=new tt,lc=new tt,cc=new tt,uh=new tt,uc=new tt,Ag=new tt,fc=new tt;class aa extends bn{constructor(t=new oa,i=new b0){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,h=l.length;u<h;u++){const d=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}getVertexPosition(t,i){const s=this.geometry,l=s.attributes.position,u=s.morphAttributes.position,h=s.morphTargetsRelative;i.fromBufferAttribute(l,t);const d=this.morphTargetInfluences;if(u&&d){uc.set(0,0,0);for(let m=0,p=u.length;m<p;m++){const _=d[m],v=u[m];_!==0&&(uh.fromBufferAttribute(v,t),h?uc.addScaledVector(uh,_):uc.addScaledVector(uh.sub(i),_))}i.add(uc)}return i}raycast(t,i){const s=this.geometry,l=this.material,u=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),rc.copy(s.boundingSphere),rc.applyMatrix4(u),ds.copy(t.ray).recast(t.near),!(rc.containsPoint(ds.origin)===!1&&(ds.intersectSphere(rc,bg)===null||ds.origin.distanceToSquared(bg)>(t.far-t.near)**2))&&(Tg.copy(u).invert(),ds.copy(t.ray).applyMatrix4(Tg),!(s.boundingBox!==null&&ds.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(t,i,ds)))}_computeIntersections(t,i,s){let l;const u=this.geometry,h=this.material,d=u.index,m=u.attributes.position,p=u.attributes.uv,_=u.attributes.uv1,v=u.attributes.normal,x=u.groups,M=u.drawRange;if(d!==null)if(Array.isArray(h))for(let E=0,R=x.length;E<R;E++){const S=x[E],g=h[S.materialIndex],N=Math.max(S.start,M.start),D=Math.min(d.count,Math.min(S.start+S.count,M.start+M.count));for(let w=N,B=D;w<B;w+=3){const H=d.getX(w),I=d.getX(w+1),X=d.getX(w+2);l=hc(this,g,t,s,p,_,v,H,I,X),l&&(l.faceIndex=Math.floor(w/3),l.face.materialIndex=S.materialIndex,i.push(l))}}else{const E=Math.max(0,M.start),R=Math.min(d.count,M.start+M.count);for(let S=E,g=R;S<g;S+=3){const N=d.getX(S),D=d.getX(S+1),w=d.getX(S+2);l=hc(this,h,t,s,p,_,v,N,D,w),l&&(l.faceIndex=Math.floor(S/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(h))for(let E=0,R=x.length;E<R;E++){const S=x[E],g=h[S.materialIndex],N=Math.max(S.start,M.start),D=Math.min(m.count,Math.min(S.start+S.count,M.start+M.count));for(let w=N,B=D;w<B;w+=3){const H=w,I=w+1,X=w+2;l=hc(this,g,t,s,p,_,v,H,I,X),l&&(l.faceIndex=Math.floor(w/3),l.face.materialIndex=S.materialIndex,i.push(l))}}else{const E=Math.max(0,M.start),R=Math.min(m.count,M.start+M.count);for(let S=E,g=R;S<g;S+=3){const N=S,D=S+1,w=S+2;l=hc(this,h,t,s,p,_,v,N,D,w),l&&(l.faceIndex=Math.floor(S/3),i.push(l))}}}}function fy(o,t,i,s,l,u,h,d){let m;if(t.side===Gn?m=s.intersectTriangle(h,u,l,!0,d):m=s.intersectTriangle(l,u,h,t.side===Xa,d),m===null)return null;fc.copy(d),fc.applyMatrix4(o.matrixWorld);const p=i.ray.origin.distanceTo(fc);return p<i.near||p>i.far?null:{distance:p,point:fc.clone(),object:o}}function hc(o,t,i,s,l,u,h,d,m,p){o.getVertexPosition(d,oc),o.getVertexPosition(m,lc),o.getVertexPosition(p,cc);const _=fy(o,t,i,s,oc,lc,cc,Ag);if(_){const v=new tt;pi.getBarycoord(Ag,oc,lc,cc,v),l&&(_.uv=pi.getInterpolatedAttribute(l,d,m,p,v,new re)),u&&(_.uv1=pi.getInterpolatedAttribute(u,d,m,p,v,new re)),h&&(_.normal=pi.getInterpolatedAttribute(h,d,m,p,v,new tt),_.normal.dot(s.direction)>0&&_.normal.multiplyScalar(-1));const x={a:d,b:m,c:p,normal:new tt,materialIndex:0};pi.getNormal(oc,lc,cc,x.normal),_.face=x,_.barycoord=v}return _}class Fo extends oa{constructor(t=1,i=1,s=1,l=1,u=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:s,widthSegments:l,heightSegments:u,depthSegments:h};const d=this;l=Math.floor(l),u=Math.floor(u),h=Math.floor(h);const m=[],p=[],_=[],v=[];let x=0,M=0;E("z","y","x",-1,-1,s,i,t,h,u,0),E("z","y","x",1,-1,s,i,-t,h,u,1),E("x","z","y",1,1,t,s,i,l,h,2),E("x","z","y",1,-1,t,s,-i,l,h,3),E("x","y","z",1,-1,t,i,s,l,u,4),E("x","y","z",-1,-1,t,i,-s,l,u,5),this.setIndex(m),this.setAttribute("position",new _i(p,3)),this.setAttribute("normal",new _i(_,3)),this.setAttribute("uv",new _i(v,2));function E(R,S,g,N,D,w,B,H,I,X,U){const C=w/I,G=B/X,lt=w/2,rt=B/2,gt=H/2,ht=I+1,z=X+1;let j=0,Y=0;const Mt=new tt;for(let L=0;L<z;L++){const $=L*G-rt;for(let vt=0;vt<ht;vt++){const St=vt*C-lt;Mt[R]=St*N,Mt[S]=$*D,Mt[g]=gt,p.push(Mt.x,Mt.y,Mt.z),Mt[R]=0,Mt[S]=0,Mt[g]=H>0?1:-1,_.push(Mt.x,Mt.y,Mt.z),v.push(vt/I),v.push(1-L/X),j+=1}}for(let L=0;L<X;L++)for(let $=0;$<I;$++){const vt=x+$+ht*L,St=x+$+ht*(L+1),Q=x+($+1)+ht*(L+1),pt=x+($+1)+ht*L;m.push(vt,St,pt),m.push(St,Q,pt),Y+=6}d.addGroup(M,Y,U),M+=Y,x+=j}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Fo(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Rr(o){const t={};for(const i in o){t[i]={};for(const s in o[i]){const l=o[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][s]=null):t[i][s]=l.clone():Array.isArray(l)?t[i][s]=l.slice():t[i][s]=l}}return t}function Ln(o){const t={};for(let i=0;i<o.length;i++){const s=Rr(o[i]);for(const l in s)t[l]=s[l]}return t}function hy(o){const t=[];for(let i=0;i<o.length;i++)t.push(o[i].clone());return t}function C0(o){const t=o.getRenderTarget();return t===null?o.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Te.workingColorSpace}const dy={clone:Rr,merge:Ln};var py=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,my=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Wa extends Bo{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=py,this.fragmentShader=my,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Rr(t.uniforms),this.uniformsGroups=hy(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(t).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class w0 extends bn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ye,this.projectionMatrix=new Ye,this.projectionMatrixInverse=new Ye,this.coordinateSystem=ia}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Fa=new tt,Rg=new re,Cg=new re;class oi extends w0{constructor(t=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=rd*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Ac*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return rd*2*Math.atan(Math.tan(Ac*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,s){Fa.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Fa.x,Fa.y).multiplyScalar(-t/Fa.z),Fa.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(Fa.x,Fa.y).multiplyScalar(-t/Fa.z)}getViewSize(t,i){return this.getViewBounds(t,Rg,Cg),i.subVectors(Cg,Rg)}setViewOffset(t,i,s,l,u,h){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=u,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(Ac*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,u=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const m=h.fullWidth,p=h.fullHeight;u+=h.offsetX*l/m,i-=h.offsetY*s/p,l*=h.width/m,s*=h.height/p}const d=this.filmOffset;d!==0&&(u+=t*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+l,i,i-s,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const pr=-90,mr=1;class _y extends bn{constructor(t,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new oi(pr,mr,t,i);l.layers=this.layers,this.add(l);const u=new oi(pr,mr,t,i);u.layers=this.layers,this.add(u);const h=new oi(pr,mr,t,i);h.layers=this.layers,this.add(h);const d=new oi(pr,mr,t,i);d.layers=this.layers,this.add(d);const m=new oi(pr,mr,t,i);m.layers=this.layers,this.add(m);const p=new oi(pr,mr,t,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[s,l,u,h,d,m]=i;for(const p of i)this.remove(p);if(t===ia)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===wc)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of i)this.add(p),p.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[u,h,d,m,p,_]=this.children,v=t.getRenderTarget(),x=t.getActiveCubeFace(),M=t.getActiveMipmapLevel(),E=t.xr.enabled;t.xr.enabled=!1;const R=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,t.setRenderTarget(s,0,l),t.render(i,u),t.setRenderTarget(s,1,l),t.render(i,h),t.setRenderTarget(s,2,l),t.render(i,d),t.setRenderTarget(s,3,l),t.render(i,m),t.setRenderTarget(s,4,l),t.render(i,p),s.texture.generateMipmaps=R,t.setRenderTarget(s,5,l),t.render(i,_),t.setRenderTarget(v,x,M),t.xr.enabled=E,s.texture.needsPMREMUpdate=!0}}class D0 extends Vn{constructor(t=[],i=Tr,s,l,u,h,d,m,p,_){super(t,i,s,l,u,h,d,m,p,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class gy extends Ts{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const s={width:t,height:t,depth:1},l=[s,s,s,s,s,s];this.texture=new D0(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new Fo(5,5,5),u=new Wa({name:"CubemapFromEquirect",uniforms:Rr(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Gn,blending:Va});u.uniforms.tEquirect.value=i;const h=new aa(l,u),d=i.minFilter;return i.minFilter===ys&&(i.minFilter=Ri),new _y(1,10,this).update(t,h),i.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(t,i=!0,s=!0,l=!0){const u=t.getRenderTarget();for(let h=0;h<6;h++)t.setRenderTarget(this,h),t.clear(i,s,l);t.setRenderTarget(u)}}class dc extends bn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const vy={type:"move"};class fh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new dc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new dc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new tt,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new tt),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new dc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new tt,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new tt),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const s of t.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,s){let l=null,u=null,h=null;const d=this._targetRay,m=this._grip,p=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(p&&t.hand){h=!0;for(const R of t.hand.values()){const S=i.getJointPose(R,s),g=this._getHandJoint(p,R);S!==null&&(g.matrix.fromArray(S.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=S.radius),g.visible=S!==null}const _=p.joints["index-finger-tip"],v=p.joints["thumb-tip"],x=_.position.distanceTo(v.position),M=.02,E=.005;p.inputState.pinching&&x>M+E?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&x<=M-E&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(u=i.getPose(t.gripSpace,s),u!==null&&(m.matrix.fromArray(u.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,u.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(u.linearVelocity)):m.hasLinearVelocity=!1,u.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(u.angularVelocity)):m.hasAngularVelocity=!1));d!==null&&(l=i.getPose(t.targetRaySpace,s),l===null&&u!==null&&(l=u),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(vy)))}return d!==null&&(d.visible=l!==null),m!==null&&(m.visible=u!==null),p!==null&&(p.visible=h!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const s=new dc;s.matrixAutoUpdate=!1,s.visible=!1,t.joints[i.jointName]=s,t.add(s)}return t.joints[i.jointName]}}class xy extends bn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ra,this.environmentIntensity=1,this.environmentRotation=new ra,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const hh=new tt,Sy=new tt,yy=new se;class Ha{constructor(t=new tt(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,s,l){return this.normal.set(t,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,s){const l=hh.subVectors(s,i).cross(Sy.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const s=t.delta(hh),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const u=-(t.start.dot(this.normal)+this.constant)/l;return u<0||u>1?null:i.copy(t.start).addScaledVector(s,u)}intersectsLine(t){const i=this.distanceToPoint(t.start),s=this.distanceToPoint(t.end);return i<0&&s>0||s<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const s=i||yy.getNormalMatrix(t),l=this.coplanarPoint(hh).applyMatrix4(t),u=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(u),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ps=new Lc,My=new re(.5,.5),pc=new tt;class xd{constructor(t=new Ha,i=new Ha,s=new Ha,l=new Ha,u=new Ha,h=new Ha){this.planes=[t,i,s,l,u,h]}set(t,i,s,l,u,h){const d=this.planes;return d[0].copy(t),d[1].copy(i),d[2].copy(s),d[3].copy(l),d[4].copy(u),d[5].copy(h),this}copy(t){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(t.planes[s]);return this}setFromProjectionMatrix(t,i=ia){const s=this.planes,l=t.elements,u=l[0],h=l[1],d=l[2],m=l[3],p=l[4],_=l[5],v=l[6],x=l[7],M=l[8],E=l[9],R=l[10],S=l[11],g=l[12],N=l[13],D=l[14],w=l[15];if(s[0].setComponents(m-u,x-p,S-M,w-g).normalize(),s[1].setComponents(m+u,x+p,S+M,w+g).normalize(),s[2].setComponents(m+h,x+_,S+E,w+N).normalize(),s[3].setComponents(m-h,x-_,S-E,w-N).normalize(),s[4].setComponents(m-d,x-v,S-R,w-D).normalize(),i===ia)s[5].setComponents(m+d,x+v,S+R,w+D).normalize();else if(i===wc)s[5].setComponents(d,v,R,D).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ps.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),ps.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ps)}intersectsSprite(t){ps.center.set(0,0,0);const i=My.distanceTo(t.center);return ps.radius=.7071067811865476+i,ps.applyMatrix4(t.matrixWorld),this.intersectsSphere(ps)}intersectsSphere(t){const i=this.planes,s=t.center,l=-t.radius;for(let u=0;u<6;u++)if(i[u].distanceToPoint(s)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(pc.x=l.normal.x>0?t.max.x:t.min.x,pc.y=l.normal.y>0?t.max.y:t.min.y,pc.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(pc)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class U0 extends Bo{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new be(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const wg=new Ye,od=new vd,mc=new Lc,_c=new tt;class Ey extends bn{constructor(t=new oa,i=new U0){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,i){const s=this.geometry,l=this.matrixWorld,u=t.params.Points.threshold,h=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),mc.copy(s.boundingSphere),mc.applyMatrix4(l),mc.radius+=u,t.ray.intersectsSphere(mc)===!1)return;wg.copy(l).invert(),od.copy(t.ray).applyMatrix4(wg);const d=u/((this.scale.x+this.scale.y+this.scale.z)/3),m=d*d,p=s.index,v=s.attributes.position;if(p!==null){const x=Math.max(0,h.start),M=Math.min(p.count,h.start+h.count);for(let E=x,R=M;E<R;E++){const S=p.getX(E);_c.fromBufferAttribute(v,S),Dg(_c,S,m,l,t,i,this)}}else{const x=Math.max(0,h.start),M=Math.min(v.count,h.start+h.count);for(let E=x,R=M;E<R;E++)_c.fromBufferAttribute(v,E),Dg(_c,E,m,l,t,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,h=l.length;u<h;u++){const d=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}}function Dg(o,t,i,s,l,u,h){const d=od.distanceSqToPoint(o);if(d<i){const m=new tt;od.closestPointToPoint(o,m),m.applyMatrix4(s);const p=l.ray.origin.distanceTo(m);if(p<l.near||p>l.far)return;u.push({distance:p,distanceToRay:Math.sqrt(d),point:m,index:t,face:null,faceIndex:null,barycoord:null,object:h})}}class L0 extends Vn{constructor(t,i,s=Ms,l,u,h,d=gi,m=gi,p,_=No,v=1){if(_!==No&&_!==Oo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const x={width:t,height:i,depth:v};super(x,l,u,h,d,m,_,s,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new gd(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class Nc extends oa{constructor(t=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:s,heightSegments:l};const u=t/2,h=i/2,d=Math.floor(s),m=Math.floor(l),p=d+1,_=m+1,v=t/d,x=i/m,M=[],E=[],R=[],S=[];for(let g=0;g<_;g++){const N=g*x-h;for(let D=0;D<p;D++){const w=D*v-u;E.push(w,-N,0),R.push(0,0,1),S.push(D/d),S.push(1-g/m)}}for(let g=0;g<m;g++)for(let N=0;N<d;N++){const D=N+p*g,w=N+p*(g+1),B=N+1+p*(g+1),H=N+1+p*g;M.push(D,w,H),M.push(w,B,H)}this.setIndex(M),this.setAttribute("position",new _i(E,3)),this.setAttribute("normal",new _i(R,3)),this.setAttribute("uv",new _i(S,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Nc(t.width,t.height,t.widthSegments,t.heightSegments)}}class Ty extends Bo{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=US,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class by extends Bo{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Ug={enabled:!1,files:{},add:function(o,t){this.enabled!==!1&&(this.files[o]=t)},get:function(o){if(this.enabled!==!1)return this.files[o]},remove:function(o){delete this.files[o]},clear:function(){this.files={}}};class Ay{constructor(t,i,s){const l=this;let u=!1,h=0,d=0,m;const p=[];this.onStart=void 0,this.onLoad=t,this.onProgress=i,this.onError=s,this.itemStart=function(_){d++,u===!1&&l.onStart!==void 0&&l.onStart(_,h,d),u=!0},this.itemEnd=function(_){h++,l.onProgress!==void 0&&l.onProgress(_,h,d),h===d&&(u=!1,l.onLoad!==void 0&&l.onLoad())},this.itemError=function(_){l.onError!==void 0&&l.onError(_)},this.resolveURL=function(_){return m?m(_):_},this.setURLModifier=function(_){return m=_,this},this.addHandler=function(_,v){return p.push(_,v),this},this.removeHandler=function(_){const v=p.indexOf(_);return v!==-1&&p.splice(v,2),this},this.getHandler=function(_){for(let v=0,x=p.length;v<x;v+=2){const M=p[v],E=p[v+1];if(M.global&&(M.lastIndex=0),M.test(_))return E}return null}}}const Ry=new Ay;class Sd{constructor(t){this.manager=t!==void 0?t:Ry,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,i){const s=this;return new Promise(function(l,u){s.load(t,l,i,u)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}Sd.DEFAULT_MATERIAL_NAME="__DEFAULT";const $i={};class Cy extends Error{constructor(t,i){super(t),this.response=i}}class wy extends Sd{constructor(t){super(t),this.mimeType="",this.responseType=""}load(t,i,s,l){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const u=Ug.get(`file:${t}`);if(u!==void 0)return this.manager.itemStart(t),setTimeout(()=>{i&&i(u),this.manager.itemEnd(t)},0),u;if($i[t]!==void 0){$i[t].push({onLoad:i,onProgress:s,onError:l});return}$i[t]=[],$i[t].push({onLoad:i,onProgress:s,onError:l});const h=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),d=this.mimeType,m=this.responseType;fetch(h).then(p=>{if(p.status===200||p.status===0){if(p.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||p.body===void 0||p.body.getReader===void 0)return p;const _=$i[t],v=p.body.getReader(),x=p.headers.get("X-File-Size")||p.headers.get("Content-Length"),M=x?parseInt(x):0,E=M!==0;let R=0;const S=new ReadableStream({start(g){N();function N(){v.read().then(({done:D,value:w})=>{if(D)g.close();else{R+=w.byteLength;const B=new ProgressEvent("progress",{lengthComputable:E,loaded:R,total:M});for(let H=0,I=_.length;H<I;H++){const X=_[H];X.onProgress&&X.onProgress(B)}g.enqueue(w),N()}},D=>{g.error(D)})}}});return new Response(S)}else throw new Cy(`fetch for "${p.url}" responded with ${p.status}: ${p.statusText}`,p)}).then(p=>{switch(m){case"arraybuffer":return p.arrayBuffer();case"blob":return p.blob();case"document":return p.text().then(_=>new DOMParser().parseFromString(_,d));case"json":return p.json();default:if(d==="")return p.text();{const v=/charset="?([^;"\s]*)"?/i.exec(d),x=v&&v[1]?v[1].toLowerCase():void 0,M=new TextDecoder(x);return p.arrayBuffer().then(E=>M.decode(E))}}}).then(p=>{Ug.add(`file:${t}`,p);const _=$i[t];delete $i[t];for(let v=0,x=_.length;v<x;v++){const M=_[v];M.onLoad&&M.onLoad(p)}}).catch(p=>{const _=$i[t];if(_===void 0)throw this.manager.itemError(t),p;delete $i[t];for(let v=0,x=_.length;v<x;v++){const M=_[v];M.onError&&M.onError(p)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}}class N0 extends bn{constructor(t,i=1){super(),this.isLight=!0,this.type="Light",this.color=new be(t),this.intensity=i}dispose(){}copy(t,i){return super.copy(t,i),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const i=super.toJSON(t);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(i.object.target=this.target.uuid),i}}const dh=new Ye,Lg=new tt,Ng=new tt;class Dy{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new re(512,512),this.mapType=Ci,this.map=null,this.mapPass=null,this.matrix=new Ye,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new xd,this._frameExtents=new re(1,1),this._viewportCount=1,this._viewports=[new Ke(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const i=this.camera,s=this.matrix;Lg.setFromMatrixPosition(t.matrixWorld),i.position.copy(Lg),Ng.setFromMatrixPosition(t.target.matrixWorld),i.lookAt(Ng),i.updateMatrixWorld(),dh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(dh),s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(dh)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class O0 extends w0{constructor(t=-1,i=1,s=1,l=-1,u=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=s,this.bottom=l,this.near=u,this.far=h,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,s,l,u,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=u,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let u=s-t,h=s+t,d=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=p*this.view.offsetX,h=u+p*this.view.width,d-=_*this.view.offsetY,m=d-_*this.view.height}this.projectionMatrix.makeOrthographic(u,h,d,m,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class Uy extends Dy{constructor(){super(new O0(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Ly extends N0{constructor(t,i){super(t,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(bn.DEFAULT_UP),this.updateMatrix(),this.target=new bn,this.shadow=new Uy}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Ny extends N0{constructor(t,i){super(t,i),this.isAmbientLight=!0,this.type="AmbientLight"}}class Oy extends oi{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class Og{constructor(t=1,i=0,s=0){this.radius=t,this.phi=i,this.theta=s}set(t,i,s){return this.radius=t,this.phi=i,this.theta=s,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=_e(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,i,s){return this.radius=Math.sqrt(t*t+i*i+s*s),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,s),this.phi=Math.acos(_e(i/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Py extends bs{constructor(t,i=null){super(),this.object=t,this.domElement=i,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function Pg(o,t,i,s){const l=zy(s);switch(i){case m0:return o*t;case g0:return o*t/l.components*l.byteLength;case pd:return o*t/l.components*l.byteLength;case v0:return o*t*2/l.components*l.byteLength;case md:return o*t*2/l.components*l.byteLength;case _0:return o*t*3/l.components*l.byteLength;case mi:return o*t*4/l.components*l.byteLength;case _d:return o*t*4/l.components*l.byteLength;case yc:case Mc:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case Ec:case Tc:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case Ph:case Ih:return Math.max(o,16)*Math.max(t,8)/4;case Oh:case zh:return Math.max(o,8)*Math.max(t,8)/2;case Bh:case Fh:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case Hh:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case Gh:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case Vh:return Math.floor((o+4)/5)*Math.floor((t+3)/4)*16;case kh:return Math.floor((o+4)/5)*Math.floor((t+4)/5)*16;case Xh:return Math.floor((o+5)/6)*Math.floor((t+4)/5)*16;case Wh:return Math.floor((o+5)/6)*Math.floor((t+5)/6)*16;case qh:return Math.floor((o+7)/8)*Math.floor((t+4)/5)*16;case Yh:return Math.floor((o+7)/8)*Math.floor((t+5)/6)*16;case Zh:return Math.floor((o+7)/8)*Math.floor((t+7)/8)*16;case jh:return Math.floor((o+9)/10)*Math.floor((t+4)/5)*16;case Kh:return Math.floor((o+9)/10)*Math.floor((t+5)/6)*16;case Qh:return Math.floor((o+9)/10)*Math.floor((t+7)/8)*16;case Jh:return Math.floor((o+9)/10)*Math.floor((t+9)/10)*16;case $h:return Math.floor((o+11)/12)*Math.floor((t+9)/10)*16;case td:return Math.floor((o+11)/12)*Math.floor((t+11)/12)*16;case bc:case ed:case nd:return Math.ceil(o/4)*Math.ceil(t/4)*16;case x0:case id:return Math.ceil(o/4)*Math.ceil(t/4)*8;case ad:case sd:return Math.ceil(o/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function zy(o){switch(o){case Ci:case h0:return{byteLength:1,components:1};case Uo:case d0:case Po:return{byteLength:2,components:1};case hd:case dd:return{byteLength:2,components:4};case Ms:case fd:case na:return{byteLength:4,components:1};case p0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ud}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ud);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function P0(){let o=null,t=!1,i=null,s=null;function l(u,h){i(u,h),s=o.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(s=o.requestAnimationFrame(l),t=!0)},stop:function(){o.cancelAnimationFrame(s),t=!1},setAnimationLoop:function(u){i=u},setContext:function(u){o=u}}}function Iy(o){const t=new WeakMap;function i(d,m){const p=d.array,_=d.usage,v=p.byteLength,x=o.createBuffer();o.bindBuffer(m,x),o.bufferData(m,p,_),d.onUploadCallback();let M;if(p instanceof Float32Array)M=o.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)M=o.HALF_FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?M=o.HALF_FLOAT:M=o.UNSIGNED_SHORT;else if(p instanceof Int16Array)M=o.SHORT;else if(p instanceof Uint32Array)M=o.UNSIGNED_INT;else if(p instanceof Int32Array)M=o.INT;else if(p instanceof Int8Array)M=o.BYTE;else if(p instanceof Uint8Array)M=o.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)M=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:x,type:M,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:v}}function s(d,m,p){const _=m.array,v=m.updateRanges;if(o.bindBuffer(p,d),v.length===0)o.bufferSubData(p,0,_);else{v.sort((M,E)=>M.start-E.start);let x=0;for(let M=1;M<v.length;M++){const E=v[x],R=v[M];R.start<=E.start+E.count+1?E.count=Math.max(E.count,R.start+R.count-E.start):(++x,v[x]=R)}v.length=x+1;for(let M=0,E=v.length;M<E;M++){const R=v[M];o.bufferSubData(p,R.start*_.BYTES_PER_ELEMENT,_,R.start,R.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),t.get(d)}function u(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=t.get(d);m&&(o.deleteBuffer(m.buffer),t.delete(d))}function h(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const _=t.get(d);(!_||_.version<d.version)&&t.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=t.get(d);if(p===void 0)t.set(d,i(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,d,m),p.version=d.version}}return{get:l,remove:u,update:h}}var By=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Fy=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Hy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Gy=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Vy=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ky=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Xy=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Wy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,qy=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Yy=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Zy=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,jy=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ky=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Qy=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Jy=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,$y=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,tM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,eM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,nM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,iM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,aM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,sM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,rM=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,oM=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,lM=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,cM=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,uM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,fM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,hM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,dM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,pM="gl_FragColor = linearToOutputTexel( gl_FragColor );",mM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,_M=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,gM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,vM=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,xM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,SM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,yM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,MM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,EM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,TM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,bM=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,AM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,RM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,CM=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,wM=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,DM=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,UM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,LM=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,NM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,OM=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,PM=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,zM=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,IM=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,BM=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,FM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,HM=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,GM=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,VM=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,kM=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,XM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,WM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,qM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,YM=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ZM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,jM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,KM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,QM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,JM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$M=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,tE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,eE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,nE=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,iE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,aE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,rE=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,oE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,lE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,cE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,uE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,fE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,hE=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,dE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,pE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,mE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,_E=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,gE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,vE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,xE=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,SE=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,yE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,ME=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,EE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,TE=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,bE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,AE=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,RE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,CE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,wE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,DE=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,UE=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,LE=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,NE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,OE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,PE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,zE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const IE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,BE=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,FE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,HE=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,GE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,VE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,XE=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,WE=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,qE=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,YE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ZE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jE=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,KE=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,QE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,JE=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$E=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,tT=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,eT=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,nT=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,iT=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,aT=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,sT=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,rT=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,oT=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,lT=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cT=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,uT=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fT=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,hT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,dT=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,pT=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,mT=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,_T=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ce={alphahash_fragment:By,alphahash_pars_fragment:Fy,alphamap_fragment:Hy,alphamap_pars_fragment:Gy,alphatest_fragment:Vy,alphatest_pars_fragment:ky,aomap_fragment:Xy,aomap_pars_fragment:Wy,batching_pars_vertex:qy,batching_vertex:Yy,begin_vertex:Zy,beginnormal_vertex:jy,bsdfs:Ky,iridescence_fragment:Qy,bumpmap_pars_fragment:Jy,clipping_planes_fragment:$y,clipping_planes_pars_fragment:tM,clipping_planes_pars_vertex:eM,clipping_planes_vertex:nM,color_fragment:iM,color_pars_fragment:aM,color_pars_vertex:sM,color_vertex:rM,common:oM,cube_uv_reflection_fragment:lM,defaultnormal_vertex:cM,displacementmap_pars_vertex:uM,displacementmap_vertex:fM,emissivemap_fragment:hM,emissivemap_pars_fragment:dM,colorspace_fragment:pM,colorspace_pars_fragment:mM,envmap_fragment:_M,envmap_common_pars_fragment:gM,envmap_pars_fragment:vM,envmap_pars_vertex:xM,envmap_physical_pars_fragment:DM,envmap_vertex:SM,fog_vertex:yM,fog_pars_vertex:MM,fog_fragment:EM,fog_pars_fragment:TM,gradientmap_pars_fragment:bM,lightmap_pars_fragment:AM,lights_lambert_fragment:RM,lights_lambert_pars_fragment:CM,lights_pars_begin:wM,lights_toon_fragment:UM,lights_toon_pars_fragment:LM,lights_phong_fragment:NM,lights_phong_pars_fragment:OM,lights_physical_fragment:PM,lights_physical_pars_fragment:zM,lights_fragment_begin:IM,lights_fragment_maps:BM,lights_fragment_end:FM,logdepthbuf_fragment:HM,logdepthbuf_pars_fragment:GM,logdepthbuf_pars_vertex:VM,logdepthbuf_vertex:kM,map_fragment:XM,map_pars_fragment:WM,map_particle_fragment:qM,map_particle_pars_fragment:YM,metalnessmap_fragment:ZM,metalnessmap_pars_fragment:jM,morphinstance_vertex:KM,morphcolor_vertex:QM,morphnormal_vertex:JM,morphtarget_pars_vertex:$M,morphtarget_vertex:tE,normal_fragment_begin:eE,normal_fragment_maps:nE,normal_pars_fragment:iE,normal_pars_vertex:aE,normal_vertex:sE,normalmap_pars_fragment:rE,clearcoat_normal_fragment_begin:oE,clearcoat_normal_fragment_maps:lE,clearcoat_pars_fragment:cE,iridescence_pars_fragment:uE,opaque_fragment:fE,packing:hE,premultiplied_alpha_fragment:dE,project_vertex:pE,dithering_fragment:mE,dithering_pars_fragment:_E,roughnessmap_fragment:gE,roughnessmap_pars_fragment:vE,shadowmap_pars_fragment:xE,shadowmap_pars_vertex:SE,shadowmap_vertex:yE,shadowmask_pars_fragment:ME,skinbase_vertex:EE,skinning_pars_vertex:TE,skinning_vertex:bE,skinnormal_vertex:AE,specularmap_fragment:RE,specularmap_pars_fragment:CE,tonemapping_fragment:wE,tonemapping_pars_fragment:DE,transmission_fragment:UE,transmission_pars_fragment:LE,uv_pars_fragment:NE,uv_pars_vertex:OE,uv_vertex:PE,worldpos_vertex:zE,background_vert:IE,background_frag:BE,backgroundCube_vert:FE,backgroundCube_frag:HE,cube_vert:GE,cube_frag:VE,depth_vert:kE,depth_frag:XE,distanceRGBA_vert:WE,distanceRGBA_frag:qE,equirect_vert:YE,equirect_frag:ZE,linedashed_vert:jE,linedashed_frag:KE,meshbasic_vert:QE,meshbasic_frag:JE,meshlambert_vert:$E,meshlambert_frag:tT,meshmatcap_vert:eT,meshmatcap_frag:nT,meshnormal_vert:iT,meshnormal_frag:aT,meshphong_vert:sT,meshphong_frag:rT,meshphysical_vert:oT,meshphysical_frag:lT,meshtoon_vert:cT,meshtoon_frag:uT,points_vert:fT,points_frag:hT,shadow_vert:dT,shadow_frag:pT,sprite_vert:mT,sprite_frag:_T},Lt={common:{diffuse:{value:new be(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new se},alphaMap:{value:null},alphaMapTransform:{value:new se},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new se}},envmap:{envMap:{value:null},envMapRotation:{value:new se},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new se}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new se}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new se},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new se},normalScale:{value:new re(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new se},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new se}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new se}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new se}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new be(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new be(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new se},alphaTest:{value:0},uvTransform:{value:new se}},sprite:{diffuse:{value:new be(16777215)},opacity:{value:1},center:{value:new re(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new se},alphaMap:{value:null},alphaMapTransform:{value:new se},alphaTest:{value:0}}},bi={basic:{uniforms:Ln([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.fog]),vertexShader:ce.meshbasic_vert,fragmentShader:ce.meshbasic_frag},lambert:{uniforms:Ln([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,Lt.lights,{emissive:{value:new be(0)}}]),vertexShader:ce.meshlambert_vert,fragmentShader:ce.meshlambert_frag},phong:{uniforms:Ln([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,Lt.lights,{emissive:{value:new be(0)},specular:{value:new be(1118481)},shininess:{value:30}}]),vertexShader:ce.meshphong_vert,fragmentShader:ce.meshphong_frag},standard:{uniforms:Ln([Lt.common,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.roughnessmap,Lt.metalnessmap,Lt.fog,Lt.lights,{emissive:{value:new be(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ce.meshphysical_vert,fragmentShader:ce.meshphysical_frag},toon:{uniforms:Ln([Lt.common,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.gradientmap,Lt.fog,Lt.lights,{emissive:{value:new be(0)}}]),vertexShader:ce.meshtoon_vert,fragmentShader:ce.meshtoon_frag},matcap:{uniforms:Ln([Lt.common,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,{matcap:{value:null}}]),vertexShader:ce.meshmatcap_vert,fragmentShader:ce.meshmatcap_frag},points:{uniforms:Ln([Lt.points,Lt.fog]),vertexShader:ce.points_vert,fragmentShader:ce.points_frag},dashed:{uniforms:Ln([Lt.common,Lt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ce.linedashed_vert,fragmentShader:ce.linedashed_frag},depth:{uniforms:Ln([Lt.common,Lt.displacementmap]),vertexShader:ce.depth_vert,fragmentShader:ce.depth_frag},normal:{uniforms:Ln([Lt.common,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,{opacity:{value:1}}]),vertexShader:ce.meshnormal_vert,fragmentShader:ce.meshnormal_frag},sprite:{uniforms:Ln([Lt.sprite,Lt.fog]),vertexShader:ce.sprite_vert,fragmentShader:ce.sprite_frag},background:{uniforms:{uvTransform:{value:new se},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ce.background_vert,fragmentShader:ce.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new se}},vertexShader:ce.backgroundCube_vert,fragmentShader:ce.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ce.cube_vert,fragmentShader:ce.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ce.equirect_vert,fragmentShader:ce.equirect_frag},distanceRGBA:{uniforms:Ln([Lt.common,Lt.displacementmap,{referencePosition:{value:new tt},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ce.distanceRGBA_vert,fragmentShader:ce.distanceRGBA_frag},shadow:{uniforms:Ln([Lt.lights,Lt.fog,{color:{value:new be(0)},opacity:{value:1}}]),vertexShader:ce.shadow_vert,fragmentShader:ce.shadow_frag}};bi.physical={uniforms:Ln([bi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new se},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new se},clearcoatNormalScale:{value:new re(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new se},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new se},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new se},sheen:{value:0},sheenColor:{value:new be(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new se},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new se},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new se},transmissionSamplerSize:{value:new re},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new se},attenuationDistance:{value:0},attenuationColor:{value:new be(0)},specularColor:{value:new be(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new se},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new se},anisotropyVector:{value:new re},anisotropyMap:{value:null},anisotropyMapTransform:{value:new se}}]),vertexShader:ce.meshphysical_vert,fragmentShader:ce.meshphysical_frag};const gc={r:0,b:0,g:0},ms=new ra,gT=new Ye;function vT(o,t,i,s,l,u,h){const d=new be(0);let m=u===!0?0:1,p,_,v=null,x=0,M=null;function E(D){let w=D.isScene===!0?D.background:null;return w&&w.isTexture&&(w=(D.backgroundBlurriness>0?i:t).get(w)),w}function R(D){let w=!1;const B=E(D);B===null?g(d,m):B&&B.isColor&&(g(B,1),w=!0);const H=o.xr.getEnvironmentBlendMode();H==="additive"?s.buffers.color.setClear(0,0,0,1,h):H==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,h),(o.autoClear||w)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function S(D,w){const B=E(w);B&&(B.isCubeTexture||B.mapping===Uc)?(_===void 0&&(_=new aa(new Fo(1,1,1),new Wa({name:"BackgroundCubeMaterial",uniforms:Rr(bi.backgroundCube.uniforms),vertexShader:bi.backgroundCube.vertexShader,fragmentShader:bi.backgroundCube.fragmentShader,side:Gn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),_.geometry.deleteAttribute("normal"),_.geometry.deleteAttribute("uv"),_.onBeforeRender=function(H,I,X){this.matrixWorld.copyPosition(X.matrixWorld)},Object.defineProperty(_.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(_)),ms.copy(w.backgroundRotation),ms.x*=-1,ms.y*=-1,ms.z*=-1,B.isCubeTexture&&B.isRenderTargetTexture===!1&&(ms.y*=-1,ms.z*=-1),_.material.uniforms.envMap.value=B,_.material.uniforms.flipEnvMap.value=B.isCubeTexture&&B.isRenderTargetTexture===!1?-1:1,_.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,_.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,_.material.uniforms.backgroundRotation.value.setFromMatrix4(gT.makeRotationFromEuler(ms)),_.material.toneMapped=Te.getTransfer(B.colorSpace)!==Ie,(v!==B||x!==B.version||M!==o.toneMapping)&&(_.material.needsUpdate=!0,v=B,x=B.version,M=o.toneMapping),_.layers.enableAll(),D.unshift(_,_.geometry,_.material,0,0,null)):B&&B.isTexture&&(p===void 0&&(p=new aa(new Nc(2,2),new Wa({name:"BackgroundMaterial",uniforms:Rr(bi.background.uniforms),vertexShader:bi.background.vertexShader,fragmentShader:bi.background.fragmentShader,side:Xa,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=B,p.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,p.material.toneMapped=Te.getTransfer(B.colorSpace)!==Ie,B.matrixAutoUpdate===!0&&B.updateMatrix(),p.material.uniforms.uvTransform.value.copy(B.matrix),(v!==B||x!==B.version||M!==o.toneMapping)&&(p.material.needsUpdate=!0,v=B,x=B.version,M=o.toneMapping),p.layers.enableAll(),D.unshift(p,p.geometry,p.material,0,0,null))}function g(D,w){D.getRGB(gc,C0(o)),s.buffers.color.setClear(gc.r,gc.g,gc.b,w,h)}function N(){_!==void 0&&(_.geometry.dispose(),_.material.dispose(),_=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return d},setClearColor:function(D,w=1){d.set(D),m=w,g(d,m)},getClearAlpha:function(){return m},setClearAlpha:function(D){m=D,g(d,m)},render:R,addToRenderList:S,dispose:N}}function xT(o,t){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),s={},l=x(null);let u=l,h=!1;function d(C,G,lt,rt,gt){let ht=!1;const z=v(rt,lt,G);u!==z&&(u=z,p(u.object)),ht=M(C,rt,lt,gt),ht&&E(C,rt,lt,gt),gt!==null&&t.update(gt,o.ELEMENT_ARRAY_BUFFER),(ht||h)&&(h=!1,w(C,G,lt,rt),gt!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,t.get(gt).buffer))}function m(){return o.createVertexArray()}function p(C){return o.bindVertexArray(C)}function _(C){return o.deleteVertexArray(C)}function v(C,G,lt){const rt=lt.wireframe===!0;let gt=s[C.id];gt===void 0&&(gt={},s[C.id]=gt);let ht=gt[G.id];ht===void 0&&(ht={},gt[G.id]=ht);let z=ht[rt];return z===void 0&&(z=x(m()),ht[rt]=z),z}function x(C){const G=[],lt=[],rt=[];for(let gt=0;gt<i;gt++)G[gt]=0,lt[gt]=0,rt[gt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:lt,attributeDivisors:rt,object:C,attributes:{},index:null}}function M(C,G,lt,rt){const gt=u.attributes,ht=G.attributes;let z=0;const j=lt.getAttributes();for(const Y in j)if(j[Y].location>=0){const L=gt[Y];let $=ht[Y];if($===void 0&&(Y==="instanceMatrix"&&C.instanceMatrix&&($=C.instanceMatrix),Y==="instanceColor"&&C.instanceColor&&($=C.instanceColor)),L===void 0||L.attribute!==$||$&&L.data!==$.data)return!0;z++}return u.attributesNum!==z||u.index!==rt}function E(C,G,lt,rt){const gt={},ht=G.attributes;let z=0;const j=lt.getAttributes();for(const Y in j)if(j[Y].location>=0){let L=ht[Y];L===void 0&&(Y==="instanceMatrix"&&C.instanceMatrix&&(L=C.instanceMatrix),Y==="instanceColor"&&C.instanceColor&&(L=C.instanceColor));const $={};$.attribute=L,L&&L.data&&($.data=L.data),gt[Y]=$,z++}u.attributes=gt,u.attributesNum=z,u.index=rt}function R(){const C=u.newAttributes;for(let G=0,lt=C.length;G<lt;G++)C[G]=0}function S(C){g(C,0)}function g(C,G){const lt=u.newAttributes,rt=u.enabledAttributes,gt=u.attributeDivisors;lt[C]=1,rt[C]===0&&(o.enableVertexAttribArray(C),rt[C]=1),gt[C]!==G&&(o.vertexAttribDivisor(C,G),gt[C]=G)}function N(){const C=u.newAttributes,G=u.enabledAttributes;for(let lt=0,rt=G.length;lt<rt;lt++)G[lt]!==C[lt]&&(o.disableVertexAttribArray(lt),G[lt]=0)}function D(C,G,lt,rt,gt,ht,z){z===!0?o.vertexAttribIPointer(C,G,lt,gt,ht):o.vertexAttribPointer(C,G,lt,rt,gt,ht)}function w(C,G,lt,rt){R();const gt=rt.attributes,ht=lt.getAttributes(),z=G.defaultAttributeValues;for(const j in ht){const Y=ht[j];if(Y.location>=0){let Mt=gt[j];if(Mt===void 0&&(j==="instanceMatrix"&&C.instanceMatrix&&(Mt=C.instanceMatrix),j==="instanceColor"&&C.instanceColor&&(Mt=C.instanceColor)),Mt!==void 0){const L=Mt.normalized,$=Mt.itemSize,vt=t.get(Mt);if(vt===void 0)continue;const St=vt.buffer,Q=vt.type,pt=vt.bytesPerElement,yt=Q===o.INT||Q===o.UNSIGNED_INT||Mt.gpuType===fd;if(Mt.isInterleavedBufferAttribute){const At=Mt.data,Ct=At.stride,oe=Mt.offset;if(At.isInstancedInterleavedBuffer){for(let Kt=0;Kt<Y.locationSize;Kt++)g(Y.location+Kt,At.meshPerAttribute);C.isInstancedMesh!==!0&&rt._maxInstanceCount===void 0&&(rt._maxInstanceCount=At.meshPerAttribute*At.count)}else for(let Kt=0;Kt<Y.locationSize;Kt++)S(Y.location+Kt);o.bindBuffer(o.ARRAY_BUFFER,St);for(let Kt=0;Kt<Y.locationSize;Kt++)D(Y.location+Kt,$/Y.locationSize,Q,L,Ct*pt,(oe+$/Y.locationSize*Kt)*pt,yt)}else{if(Mt.isInstancedBufferAttribute){for(let At=0;At<Y.locationSize;At++)g(Y.location+At,Mt.meshPerAttribute);C.isInstancedMesh!==!0&&rt._maxInstanceCount===void 0&&(rt._maxInstanceCount=Mt.meshPerAttribute*Mt.count)}else for(let At=0;At<Y.locationSize;At++)S(Y.location+At);o.bindBuffer(o.ARRAY_BUFFER,St);for(let At=0;At<Y.locationSize;At++)D(Y.location+At,$/Y.locationSize,Q,L,$*pt,$/Y.locationSize*At*pt,yt)}}else if(z!==void 0){const L=z[j];if(L!==void 0)switch(L.length){case 2:o.vertexAttrib2fv(Y.location,L);break;case 3:o.vertexAttrib3fv(Y.location,L);break;case 4:o.vertexAttrib4fv(Y.location,L);break;default:o.vertexAttrib1fv(Y.location,L)}}}}N()}function B(){X();for(const C in s){const G=s[C];for(const lt in G){const rt=G[lt];for(const gt in rt)_(rt[gt].object),delete rt[gt];delete G[lt]}delete s[C]}}function H(C){if(s[C.id]===void 0)return;const G=s[C.id];for(const lt in G){const rt=G[lt];for(const gt in rt)_(rt[gt].object),delete rt[gt];delete G[lt]}delete s[C.id]}function I(C){for(const G in s){const lt=s[G];if(lt[C.id]===void 0)continue;const rt=lt[C.id];for(const gt in rt)_(rt[gt].object),delete rt[gt];delete lt[C.id]}}function X(){U(),h=!0,u!==l&&(u=l,p(u.object))}function U(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:X,resetDefaultState:U,dispose:B,releaseStatesOfGeometry:H,releaseStatesOfProgram:I,initAttributes:R,enableAttribute:S,disableUnusedAttributes:N}}function ST(o,t,i){let s;function l(p){s=p}function u(p,_){o.drawArrays(s,p,_),i.update(_,s,1)}function h(p,_,v){v!==0&&(o.drawArraysInstanced(s,p,_,v),i.update(_,s,v))}function d(p,_,v){if(v===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,p,0,_,0,v);let M=0;for(let E=0;E<v;E++)M+=_[E];i.update(M,s,1)}function m(p,_,v,x){if(v===0)return;const M=t.get("WEBGL_multi_draw");if(M===null)for(let E=0;E<p.length;E++)h(p[E],_[E],x[E]);else{M.multiDrawArraysInstancedWEBGL(s,p,0,_,0,x,0,v);let E=0;for(let R=0;R<v;R++)E+=_[R]*x[R];i.update(E,s,1)}}this.setMode=l,this.render=u,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function yT(o,t,i,s){let l;function u(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const I=t.get("EXT_texture_filter_anisotropic");l=o.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(I){return!(I!==mi&&s.convert(I)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(I){const X=I===Po&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(I!==Ci&&s.convert(I)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==na&&!X)}function m(I){if(I==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const _=m(p);_!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",_,"instead."),p=_);const v=i.logarithmicDepthBuffer===!0,x=i.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),M=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),E=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),R=o.getParameter(o.MAX_TEXTURE_SIZE),S=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),g=o.getParameter(o.MAX_VERTEX_ATTRIBS),N=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),D=o.getParameter(o.MAX_VARYING_VECTORS),w=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),B=E>0,H=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:m,textureFormatReadable:h,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:v,reverseDepthBuffer:x,maxTextures:M,maxVertexTextures:E,maxTextureSize:R,maxCubemapSize:S,maxAttributes:g,maxVertexUniforms:N,maxVaryings:D,maxFragmentUniforms:w,vertexTextures:B,maxSamples:H}}function MT(o){const t=this;let i=null,s=0,l=!1,u=!1;const h=new Ha,d=new se,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(v,x){const M=v.length!==0||x||s!==0||l;return l=x,s=v.length,M},this.beginShadows=function(){u=!0,_(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(v,x){i=_(v,x,0)},this.setState=function(v,x,M){const E=v.clippingPlanes,R=v.clipIntersection,S=v.clipShadows,g=o.get(v);if(!l||E===null||E.length===0||u&&!S)u?_(null):p();else{const N=u?0:s,D=N*4;let w=g.clippingState||null;m.value=w,w=_(E,x,D,M);for(let B=0;B!==D;++B)w[B]=i[B];g.clippingState=w,this.numIntersection=R?this.numPlanes:0,this.numPlanes+=N}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),t.numPlanes=s,t.numIntersection=0}function _(v,x,M,E){const R=v!==null?v.length:0;let S=null;if(R!==0){if(S=m.value,E!==!0||S===null){const g=M+R*4,N=x.matrixWorldInverse;d.getNormalMatrix(N),(S===null||S.length<g)&&(S=new Float32Array(g));for(let D=0,w=M;D!==R;++D,w+=4)h.copy(v[D]).applyMatrix4(N,d),h.normal.toArray(S,w),S[w+3]=h.constant}m.value=S,m.needsUpdate=!0}return t.numPlanes=R,t.numIntersection=0,S}}function ET(o){let t=new WeakMap;function i(h,d){return d===Dh?h.mapping=Tr:d===Uh&&(h.mapping=br),h}function s(h){if(h&&h.isTexture){const d=h.mapping;if(d===Dh||d===Uh)if(t.has(h)){const m=t.get(h).texture;return i(m,h.mapping)}else{const m=h.image;if(m&&m.height>0){const p=new gy(m.height);return p.fromEquirectangularTexture(o,h),t.set(h,p),h.addEventListener("dispose",l),i(p.texture,h.mapping)}else return null}}return h}function l(h){const d=h.target;d.removeEventListener("dispose",l);const m=t.get(d);m!==void 0&&(t.delete(d),m.dispose())}function u(){t=new WeakMap}return{get:s,dispose:u}}const vr=4,zg=[.125,.215,.35,.446,.526,.582],xs=20,ph=new O0,Ig=new be;let mh=null,_h=0,gh=0,vh=!1;const gs=(1+Math.sqrt(5))/2,_r=1/gs,Bg=[new tt(-gs,_r,0),new tt(gs,_r,0),new tt(-_r,0,gs),new tt(_r,0,gs),new tt(0,gs,-_r),new tt(0,gs,_r),new tt(-1,1,-1),new tt(1,1,-1),new tt(-1,1,1),new tt(1,1,1)],TT=new tt;class Fg{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,i=0,s=.1,l=100,u={}){const{size:h=256,position:d=TT}=u;mh=this._renderer.getRenderTarget(),_h=this._renderer.getActiveCubeFace(),gh=this._renderer.getActiveMipmapLevel(),vh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(h);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,s,l,m,d),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Vg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Gg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(mh,_h,gh),this._renderer.xr.enabled=vh,t.scissorTest=!1,vc(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===Tr||t.mapping===br?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),mh=this._renderer.getRenderTarget(),_h=this._renderer.getActiveCubeFace(),gh=this._renderer.getActiveMipmapLevel(),vh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(t,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:Ri,minFilter:Ri,generateMipmaps:!1,type:Po,format:mi,colorSpace:Ar,depthBuffer:!1},l=Hg(t,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Hg(t,i,s);const{_lodMax:u}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=bT(u)),this._blurMaterial=AT(u,t,i)}return l}_compileMaterial(t){const i=new aa(this._lodPlanes[0],t);this._renderer.compile(i,ph)}_sceneToCubeUV(t,i,s,l,u){const m=new oi(90,1,i,s),p=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],v=this._renderer,x=v.autoClear,M=v.toneMapping;v.getClearColor(Ig),v.toneMapping=ka,v.autoClear=!1;const E=new b0({name:"PMREM.Background",side:Gn,depthWrite:!1,depthTest:!1}),R=new aa(new Fo,E);let S=!1;const g=t.background;g?g.isColor&&(E.color.copy(g),t.background=null,S=!0):(E.color.copy(Ig),S=!0);for(let N=0;N<6;N++){const D=N%3;D===0?(m.up.set(0,p[N],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x+_[N],u.y,u.z)):D===1?(m.up.set(0,0,p[N]),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y+_[N],u.z)):(m.up.set(0,p[N],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y,u.z+_[N]));const w=this._cubeSize;vc(l,D*w,N>2?w:0,w,w),v.setRenderTarget(l),S&&v.render(R,m),v.render(t,m)}R.geometry.dispose(),R.material.dispose(),v.toneMapping=M,v.autoClear=x,t.background=g}_textureToCubeUV(t,i){const s=this._renderer,l=t.mapping===Tr||t.mapping===br;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=Vg()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Gg());const u=l?this._cubemapMaterial:this._equirectMaterial,h=new aa(this._lodPlanes[0],u),d=u.uniforms;d.envMap.value=t;const m=this._cubeSize;vc(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(h,ph)}_applyPMREM(t){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let u=1;u<l;u++){const h=Math.sqrt(this._sigmas[u]*this._sigmas[u]-this._sigmas[u-1]*this._sigmas[u-1]),d=Bg[(l-u-1)%Bg.length];this._blur(t,u-1,u,h,d)}i.autoClear=s}_blur(t,i,s,l,u){const h=this._pingPongRenderTarget;this._halfBlur(t,h,i,s,l,"latitudinal",u),this._halfBlur(h,t,s,s,l,"longitudinal",u)}_halfBlur(t,i,s,l,u,h,d){const m=this._renderer,p=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const _=3,v=new aa(this._lodPlanes[l],p),x=p.uniforms,M=this._sizeLods[s]-1,E=isFinite(u)?Math.PI/(2*M):2*Math.PI/(2*xs-1),R=u/E,S=isFinite(u)?1+Math.floor(_*R):xs;S>xs&&console.warn(`sigmaRadians, ${u}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${xs}`);const g=[];let N=0;for(let I=0;I<xs;++I){const X=I/R,U=Math.exp(-X*X/2);g.push(U),I===0?N+=U:I<S&&(N+=2*U)}for(let I=0;I<g.length;I++)g[I]=g[I]/N;x.envMap.value=t.texture,x.samples.value=S,x.weights.value=g,x.latitudinal.value=h==="latitudinal",d&&(x.poleAxis.value=d);const{_lodMax:D}=this;x.dTheta.value=E,x.mipInt.value=D-s;const w=this._sizeLods[l],B=3*w*(l>D-vr?l-D+vr:0),H=4*(this._cubeSize-w);vc(i,B,H,3*w,2*w),m.setRenderTarget(i),m.render(v,ph)}}function bT(o){const t=[],i=[],s=[];let l=o;const u=o-vr+1+zg.length;for(let h=0;h<u;h++){const d=Math.pow(2,l);i.push(d);let m=1/d;h>o-vr?m=zg[h-o+vr-1]:h===0&&(m=0),s.push(m);const p=1/(d-2),_=-p,v=1+p,x=[_,_,v,_,v,v,_,_,v,v,_,v],M=6,E=6,R=3,S=2,g=1,N=new Float32Array(R*E*M),D=new Float32Array(S*E*M),w=new Float32Array(g*E*M);for(let H=0;H<M;H++){const I=H%3*2/3-1,X=H>2?0:-1,U=[I,X,0,I+2/3,X,0,I+2/3,X+1,0,I,X,0,I+2/3,X+1,0,I,X+1,0];N.set(U,R*E*H),D.set(x,S*E*H);const C=[H,H,H,H,H,H];w.set(C,g*E*H)}const B=new oa;B.setAttribute("position",new vi(N,R)),B.setAttribute("uv",new vi(D,S)),B.setAttribute("faceIndex",new vi(w,g)),t.push(B),l>vr&&l--}return{lodPlanes:t,sizeLods:i,sigmas:s}}function Hg(o,t,i){const s=new Ts(o,t,i);return s.texture.mapping=Uc,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function vc(o,t,i,s,l){o.viewport.set(t,i,s,l),o.scissor.set(t,i,s,l)}function AT(o,t,i){const s=new Float32Array(xs),l=new tt(0,1,0);return new Wa({name:"SphericalGaussianBlur",defines:{n:xs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:yd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Va,depthTest:!1,depthWrite:!1})}function Gg(){return new Wa({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:yd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Va,depthTest:!1,depthWrite:!1})}function Vg(){return new Wa({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:yd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Va,depthTest:!1,depthWrite:!1})}function yd(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function RT(o){let t=new WeakMap,i=null;function s(d){if(d&&d.isTexture){const m=d.mapping,p=m===Dh||m===Uh,_=m===Tr||m===br;if(p||_){let v=t.get(d);const x=v!==void 0?v.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==x)return i===null&&(i=new Fg(o)),v=p?i.fromEquirectangular(d,v):i.fromCubemap(d,v),v.texture.pmremVersion=d.pmremVersion,t.set(d,v),v.texture;if(v!==void 0)return v.texture;{const M=d.image;return p&&M&&M.height>0||_&&M&&l(M)?(i===null&&(i=new Fg(o)),v=p?i.fromEquirectangular(d):i.fromCubemap(d),v.texture.pmremVersion=d.pmremVersion,t.set(d,v),d.addEventListener("dispose",u),v.texture):null}}}return d}function l(d){let m=0;const p=6;for(let _=0;_<p;_++)d[_]!==void 0&&m++;return m===p}function u(d){const m=d.target;m.removeEventListener("dispose",u);const p=t.get(m);p!==void 0&&(t.delete(m),p.dispose())}function h(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:h}}function CT(o){const t={};function i(s){if(t[s]!==void 0)return t[s];let l;switch(s){case"WEBGL_depth_texture":l=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=o.getExtension(s)}return t[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&yr("THREE.WebGLRenderer: "+s+" extension not supported."),l}}}function wT(o,t,i,s){const l={},u=new WeakMap;function h(v){const x=v.target;x.index!==null&&t.remove(x.index);for(const E in x.attributes)t.remove(x.attributes[E]);x.removeEventListener("dispose",h),delete l[x.id];const M=u.get(x);M&&(t.remove(M),u.delete(x)),s.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,i.memory.geometries--}function d(v,x){return l[x.id]===!0||(x.addEventListener("dispose",h),l[x.id]=!0,i.memory.geometries++),x}function m(v){const x=v.attributes;for(const M in x)t.update(x[M],o.ARRAY_BUFFER)}function p(v){const x=[],M=v.index,E=v.attributes.position;let R=0;if(M!==null){const N=M.array;R=M.version;for(let D=0,w=N.length;D<w;D+=3){const B=N[D+0],H=N[D+1],I=N[D+2];x.push(B,H,H,I,I,B)}}else if(E!==void 0){const N=E.array;R=E.version;for(let D=0,w=N.length/3-1;D<w;D+=3){const B=D+0,H=D+1,I=D+2;x.push(B,H,H,I,I,B)}}else return;const S=new(y0(x)?R0:A0)(x,1);S.version=R;const g=u.get(v);g&&t.remove(g),u.set(v,S)}function _(v){const x=u.get(v);if(x){const M=v.index;M!==null&&x.version<M.version&&p(v)}else p(v);return u.get(v)}return{get:d,update:m,getWireframeAttribute:_}}function DT(o,t,i){let s;function l(x){s=x}let u,h;function d(x){u=x.type,h=x.bytesPerElement}function m(x,M){o.drawElements(s,M,u,x*h),i.update(M,s,1)}function p(x,M,E){E!==0&&(o.drawElementsInstanced(s,M,u,x*h,E),i.update(M,s,E))}function _(x,M,E){if(E===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,M,0,u,x,0,E);let S=0;for(let g=0;g<E;g++)S+=M[g];i.update(S,s,1)}function v(x,M,E,R){if(E===0)return;const S=t.get("WEBGL_multi_draw");if(S===null)for(let g=0;g<x.length;g++)p(x[g]/h,M[g],R[g]);else{S.multiDrawElementsInstancedWEBGL(s,M,0,u,x,0,R,0,E);let g=0;for(let N=0;N<E;N++)g+=M[N]*R[N];i.update(g,s,1)}}this.setMode=l,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=_,this.renderMultiDrawInstances=v}function UT(o){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(u,h,d){switch(i.calls++,h){case o.TRIANGLES:i.triangles+=d*(u/3);break;case o.LINES:i.lines+=d*(u/2);break;case o.LINE_STRIP:i.lines+=d*(u-1);break;case o.LINE_LOOP:i.lines+=d*u;break;case o.POINTS:i.points+=d*u;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:s}}function LT(o,t,i){const s=new WeakMap,l=new Ke;function u(h,d,m){const p=h.morphTargetInfluences,_=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,v=_!==void 0?_.length:0;let x=s.get(d);if(x===void 0||x.count!==v){let C=function(){X.dispose(),s.delete(d),d.removeEventListener("dispose",C)};var M=C;x!==void 0&&x.texture.dispose();const E=d.morphAttributes.position!==void 0,R=d.morphAttributes.normal!==void 0,S=d.morphAttributes.color!==void 0,g=d.morphAttributes.position||[],N=d.morphAttributes.normal||[],D=d.morphAttributes.color||[];let w=0;E===!0&&(w=1),R===!0&&(w=2),S===!0&&(w=3);let B=d.attributes.position.count*w,H=1;B>t.maxTextureSize&&(H=Math.ceil(B/t.maxTextureSize),B=t.maxTextureSize);const I=new Float32Array(B*H*4*v),X=new M0(I,B,H,v);X.type=na,X.needsUpdate=!0;const U=w*4;for(let G=0;G<v;G++){const lt=g[G],rt=N[G],gt=D[G],ht=B*H*4*G;for(let z=0;z<lt.count;z++){const j=z*U;E===!0&&(l.fromBufferAttribute(lt,z),I[ht+j+0]=l.x,I[ht+j+1]=l.y,I[ht+j+2]=l.z,I[ht+j+3]=0),R===!0&&(l.fromBufferAttribute(rt,z),I[ht+j+4]=l.x,I[ht+j+5]=l.y,I[ht+j+6]=l.z,I[ht+j+7]=0),S===!0&&(l.fromBufferAttribute(gt,z),I[ht+j+8]=l.x,I[ht+j+9]=l.y,I[ht+j+10]=l.z,I[ht+j+11]=gt.itemSize===4?l.w:1)}}x={count:v,texture:X,size:new re(B,H)},s.set(d,x),d.addEventListener("dispose",C)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)m.getUniforms().setValue(o,"morphTexture",h.morphTexture,i);else{let E=0;for(let S=0;S<p.length;S++)E+=p[S];const R=d.morphTargetsRelative?1:1-E;m.getUniforms().setValue(o,"morphTargetBaseInfluence",R),m.getUniforms().setValue(o,"morphTargetInfluences",p)}m.getUniforms().setValue(o,"morphTargetsTexture",x.texture,i),m.getUniforms().setValue(o,"morphTargetsTextureSize",x.size)}return{update:u}}function NT(o,t,i,s){let l=new WeakMap;function u(m){const p=s.render.frame,_=m.geometry,v=t.get(m,_);if(l.get(v)!==p&&(t.update(v),l.set(v,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",d)===!1&&m.addEventListener("dispose",d),l.get(m)!==p&&(i.update(m.instanceMatrix,o.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,o.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const x=m.skeleton;l.get(x)!==p&&(x.update(),l.set(x,p))}return v}function h(){l=new WeakMap}function d(m){const p=m.target;p.removeEventListener("dispose",d),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:u,dispose:h}}const z0=new Vn,kg=new L0(1,1),I0=new M0,B0=new $S,F0=new D0,Xg=[],Wg=[],qg=new Float32Array(16),Yg=new Float32Array(9),Zg=new Float32Array(4);function Cr(o,t,i){const s=o[0];if(s<=0||s>0)return o;const l=t*i;let u=Xg[l];if(u===void 0&&(u=new Float32Array(l),Xg[l]=u),t!==0){s.toArray(u,0);for(let h=1,d=0;h!==t;++h)d+=i,o[h].toArray(u,d)}return u}function un(o,t){if(o.length!==t.length)return!1;for(let i=0,s=o.length;i<s;i++)if(o[i]!==t[i])return!1;return!0}function fn(o,t){for(let i=0,s=t.length;i<s;i++)o[i]=t[i]}function Oc(o,t){let i=Wg[t];i===void 0&&(i=new Int32Array(t),Wg[t]=i);for(let s=0;s!==t;++s)i[s]=o.allocateTextureUnit();return i}function OT(o,t){const i=this.cache;i[0]!==t&&(o.uniform1f(this.addr,t),i[0]=t)}function PT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(un(i,t))return;o.uniform2fv(this.addr,t),fn(i,t)}}function zT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(o.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(un(i,t))return;o.uniform3fv(this.addr,t),fn(i,t)}}function IT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(un(i,t))return;o.uniform4fv(this.addr,t),fn(i,t)}}function BT(o,t){const i=this.cache,s=t.elements;if(s===void 0){if(un(i,t))return;o.uniformMatrix2fv(this.addr,!1,t),fn(i,t)}else{if(un(i,s))return;Zg.set(s),o.uniformMatrix2fv(this.addr,!1,Zg),fn(i,s)}}function FT(o,t){const i=this.cache,s=t.elements;if(s===void 0){if(un(i,t))return;o.uniformMatrix3fv(this.addr,!1,t),fn(i,t)}else{if(un(i,s))return;Yg.set(s),o.uniformMatrix3fv(this.addr,!1,Yg),fn(i,s)}}function HT(o,t){const i=this.cache,s=t.elements;if(s===void 0){if(un(i,t))return;o.uniformMatrix4fv(this.addr,!1,t),fn(i,t)}else{if(un(i,s))return;qg.set(s),o.uniformMatrix4fv(this.addr,!1,qg),fn(i,s)}}function GT(o,t){const i=this.cache;i[0]!==t&&(o.uniform1i(this.addr,t),i[0]=t)}function VT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(un(i,t))return;o.uniform2iv(this.addr,t),fn(i,t)}}function kT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(un(i,t))return;o.uniform3iv(this.addr,t),fn(i,t)}}function XT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(un(i,t))return;o.uniform4iv(this.addr,t),fn(i,t)}}function WT(o,t){const i=this.cache;i[0]!==t&&(o.uniform1ui(this.addr,t),i[0]=t)}function qT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(un(i,t))return;o.uniform2uiv(this.addr,t),fn(i,t)}}function YT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(un(i,t))return;o.uniform3uiv(this.addr,t),fn(i,t)}}function ZT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(un(i,t))return;o.uniform4uiv(this.addr,t),fn(i,t)}}function jT(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l);let u;this.type===o.SAMPLER_2D_SHADOW?(kg.compareFunction=S0,u=kg):u=z0,i.setTexture2D(t||u,l)}function KT(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(t||B0,l)}function QT(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(t||F0,l)}function JT(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(t||I0,l)}function $T(o){switch(o){case 5126:return OT;case 35664:return PT;case 35665:return zT;case 35666:return IT;case 35674:return BT;case 35675:return FT;case 35676:return HT;case 5124:case 35670:return GT;case 35667:case 35671:return VT;case 35668:case 35672:return kT;case 35669:case 35673:return XT;case 5125:return WT;case 36294:return qT;case 36295:return YT;case 36296:return ZT;case 35678:case 36198:case 36298:case 36306:case 35682:return jT;case 35679:case 36299:case 36307:return KT;case 35680:case 36300:case 36308:case 36293:return QT;case 36289:case 36303:case 36311:case 36292:return JT}}function tb(o,t){o.uniform1fv(this.addr,t)}function eb(o,t){const i=Cr(t,this.size,2);o.uniform2fv(this.addr,i)}function nb(o,t){const i=Cr(t,this.size,3);o.uniform3fv(this.addr,i)}function ib(o,t){const i=Cr(t,this.size,4);o.uniform4fv(this.addr,i)}function ab(o,t){const i=Cr(t,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function sb(o,t){const i=Cr(t,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function rb(o,t){const i=Cr(t,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function ob(o,t){o.uniform1iv(this.addr,t)}function lb(o,t){o.uniform2iv(this.addr,t)}function cb(o,t){o.uniform3iv(this.addr,t)}function ub(o,t){o.uniform4iv(this.addr,t)}function fb(o,t){o.uniform1uiv(this.addr,t)}function hb(o,t){o.uniform2uiv(this.addr,t)}function db(o,t){o.uniform3uiv(this.addr,t)}function pb(o,t){o.uniform4uiv(this.addr,t)}function mb(o,t,i){const s=this.cache,l=t.length,u=Oc(i,l);un(s,u)||(o.uniform1iv(this.addr,u),fn(s,u));for(let h=0;h!==l;++h)i.setTexture2D(t[h]||z0,u[h])}function _b(o,t,i){const s=this.cache,l=t.length,u=Oc(i,l);un(s,u)||(o.uniform1iv(this.addr,u),fn(s,u));for(let h=0;h!==l;++h)i.setTexture3D(t[h]||B0,u[h])}function gb(o,t,i){const s=this.cache,l=t.length,u=Oc(i,l);un(s,u)||(o.uniform1iv(this.addr,u),fn(s,u));for(let h=0;h!==l;++h)i.setTextureCube(t[h]||F0,u[h])}function vb(o,t,i){const s=this.cache,l=t.length,u=Oc(i,l);un(s,u)||(o.uniform1iv(this.addr,u),fn(s,u));for(let h=0;h!==l;++h)i.setTexture2DArray(t[h]||I0,u[h])}function xb(o){switch(o){case 5126:return tb;case 35664:return eb;case 35665:return nb;case 35666:return ib;case 35674:return ab;case 35675:return sb;case 35676:return rb;case 5124:case 35670:return ob;case 35667:case 35671:return lb;case 35668:case 35672:return cb;case 35669:case 35673:return ub;case 5125:return fb;case 36294:return hb;case 36295:return db;case 36296:return pb;case 35678:case 36198:case 36298:case 36306:case 35682:return mb;case 35679:case 36299:case 36307:return _b;case 35680:case 36300:case 36308:case 36293:return gb;case 36289:case 36303:case 36311:case 36292:return vb}}class Sb{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.setValue=$T(i.type)}}class yb{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=xb(i.type)}}class Mb{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,s){const l=this.seq;for(let u=0,h=l.length;u!==h;++u){const d=l[u];d.setValue(t,i[d.id],s)}}}const xh=/(\w+)(\])?(\[|\.)?/g;function jg(o,t){o.seq.push(t),o.map[t.id]=t}function Eb(o,t,i){const s=o.name,l=s.length;for(xh.lastIndex=0;;){const u=xh.exec(s),h=xh.lastIndex;let d=u[1];const m=u[2]==="]",p=u[3];if(m&&(d=d|0),p===void 0||p==="["&&h+2===l){jg(i,p===void 0?new Sb(d,o,t):new yb(d,o,t));break}else{let v=i.map[d];v===void 0&&(v=new Mb(d),jg(i,v)),i=v}}}class Rc{constructor(t,i){this.seq=[],this.map={};const s=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let l=0;l<s;++l){const u=t.getActiveUniform(i,l),h=t.getUniformLocation(i,u.name);Eb(u,h,this)}}setValue(t,i,s,l){const u=this.map[i];u!==void 0&&u.setValue(t,s,l)}setOptional(t,i,s){const l=i[s];l!==void 0&&this.setValue(t,s,l)}static upload(t,i,s,l){for(let u=0,h=i.length;u!==h;++u){const d=i[u],m=s[d.id];m.needsUpdate!==!1&&d.setValue(t,m.value,l)}}static seqWithValue(t,i){const s=[];for(let l=0,u=t.length;l!==u;++l){const h=t[l];h.id in i&&s.push(h)}return s}}function Kg(o,t,i){const s=o.createShader(t);return o.shaderSource(s,i),o.compileShader(s),s}const Tb=37297;let bb=0;function Ab(o,t){const i=o.split(`
`),s=[],l=Math.max(t-6,0),u=Math.min(t+6,i.length);for(let h=l;h<u;h++){const d=h+1;s.push(`${d===t?">":" "} ${d}: ${i[h]}`)}return s.join(`
`)}const Qg=new se;function Rb(o){Te._getMatrix(Qg,Te.workingColorSpace,o);const t=`mat3( ${Qg.elements.map(i=>i.toFixed(4))} )`;switch(Te.getTransfer(o)){case Cc:return[t,"LinearTransferOETF"];case Ie:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",o),[t,"LinearTransferOETF"]}}function Jg(o,t,i){const s=o.getShaderParameter(t,o.COMPILE_STATUS),l=o.getShaderInfoLog(t).trim();if(s&&l==="")return"";const u=/ERROR: 0:(\d+)/.exec(l);if(u){const h=parseInt(u[1]);return i.toUpperCase()+`

`+l+`

`+Ab(o.getShaderSource(t),h)}else return l}function Cb(o,t){const i=Rb(t);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function wb(o,t){let i;switch(t){case ES:i="Linear";break;case TS:i="Reinhard";break;case bS:i="Cineon";break;case AS:i="ACESFilmic";break;case CS:i="AgX";break;case wS:i="Neutral";break;case RS:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),i="Linear"}return"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const xc=new tt;function Db(){Te.getLuminanceCoefficients(xc);const o=xc.x.toFixed(4),t=xc.y.toFixed(4),i=xc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ub(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Do).join(`
`)}function Lb(o){const t=[];for(const i in o){const s=o[i];s!==!1&&t.push("#define "+i+" "+s)}return t.join(`
`)}function Nb(o,t){const i={},s=o.getProgramParameter(t,o.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const u=o.getActiveAttrib(t,l),h=u.name;let d=1;u.type===o.FLOAT_MAT2&&(d=2),u.type===o.FLOAT_MAT3&&(d=3),u.type===o.FLOAT_MAT4&&(d=4),i[h]={type:u.type,location:o.getAttribLocation(t,h),locationSize:d}}return i}function Do(o){return o!==""}function $g(o,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function t0(o,t){return o.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Ob=/^[ \t]*#include +<([\w\d./]+)>/gm;function ld(o){return o.replace(Ob,zb)}const Pb=new Map;function zb(o,t){let i=ce[t];if(i===void 0){const s=Pb.get(t);if(s!==void 0)i=ce[s],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,s);else throw new Error("Can not resolve #include <"+t+">")}return ld(i)}const Ib=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function e0(o){return o.replace(Ib,Bb)}function Bb(o,t,i,s){let l="";for(let u=parseInt(t);u<parseInt(i);u++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return l}function n0(o){let t=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?t+=`
#define HIGH_PRECISION`:o.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Fb(o){let t="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===l0?t="SHADOWMAP_TYPE_PCF":o.shadowMapType===c0?t="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===ta&&(t="SHADOWMAP_TYPE_VSM"),t}function Hb(o){let t="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case Tr:case br:t="ENVMAP_TYPE_CUBE";break;case Uc:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Gb(o){let t="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case br:t="ENVMAP_MODE_REFRACTION";break}return t}function Vb(o){let t="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case u0:t="ENVMAP_BLENDING_MULTIPLY";break;case yS:t="ENVMAP_BLENDING_MIX";break;case MS:t="ENVMAP_BLENDING_ADD";break}return t}function kb(o){const t=o.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,s=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),7*16)),texelHeight:s,maxMip:i}}function Xb(o,t,i,s){const l=o.getContext(),u=i.defines;let h=i.vertexShader,d=i.fragmentShader;const m=Fb(i),p=Hb(i),_=Gb(i),v=Vb(i),x=kb(i),M=Ub(i),E=Lb(u),R=l.createProgram();let S,g,N=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(S=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(Do).join(`
`),S.length>0&&(S+=`
`),g=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(Do).join(`
`),g.length>0&&(g+=`
`)):(S=[n0(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+_:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Do).join(`
`),g=[n0(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+_:"",i.envMap?"#define "+v:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==ka?"#define TONE_MAPPING":"",i.toneMapping!==ka?ce.tonemapping_pars_fragment:"",i.toneMapping!==ka?wb("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",ce.colorspace_pars_fragment,Cb("linearToOutputTexel",i.outputColorSpace),Db(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Do).join(`
`)),h=ld(h),h=$g(h,i),h=t0(h,i),d=ld(d),d=$g(d,i),d=t0(d,i),h=e0(h),d=e0(d),i.isRawShaderMaterial!==!0&&(N=`#version 300 es
`,S=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,g=["#define varying in",i.glslVersion===fg?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===fg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const D=N+S+h,w=N+g+d,B=Kg(l,l.VERTEX_SHADER,D),H=Kg(l,l.FRAGMENT_SHADER,w);l.attachShader(R,B),l.attachShader(R,H),i.index0AttributeName!==void 0?l.bindAttribLocation(R,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(R,0,"position"),l.linkProgram(R);function I(G){if(o.debug.checkShaderErrors){const lt=l.getProgramInfoLog(R).trim(),rt=l.getShaderInfoLog(B).trim(),gt=l.getShaderInfoLog(H).trim();let ht=!0,z=!0;if(l.getProgramParameter(R,l.LINK_STATUS)===!1)if(ht=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,R,B,H);else{const j=Jg(l,B,"vertex"),Y=Jg(l,H,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(R,l.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+lt+`
`+j+`
`+Y)}else lt!==""?console.warn("THREE.WebGLProgram: Program Info Log:",lt):(rt===""||gt==="")&&(z=!1);z&&(G.diagnostics={runnable:ht,programLog:lt,vertexShader:{log:rt,prefix:S},fragmentShader:{log:gt,prefix:g}})}l.deleteShader(B),l.deleteShader(H),X=new Rc(l,R),U=Nb(l,R)}let X;this.getUniforms=function(){return X===void 0&&I(this),X};let U;this.getAttributes=function(){return U===void 0&&I(this),U};let C=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=l.getProgramParameter(R,Tb)),C},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(R),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=bb++,this.cacheKey=t,this.usedTimes=1,this.program=R,this.vertexShader=B,this.fragmentShader=H,this}let Wb=0;class qb{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,s=t.fragmentShader,l=this._getShaderStage(i),u=this._getShaderStage(s),h=this._getShaderCacheForMaterial(t);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(u)===!1&&(h.add(u),u.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let s=i.get(t);return s===void 0&&(s=new Set,i.set(t,s)),s}_getShaderStage(t){const i=this.shaderCache;let s=i.get(t);return s===void 0&&(s=new Yb(t),i.set(t,s)),s}}class Yb{constructor(t){this.id=Wb++,this.code=t,this.usedTimes=0}}function Zb(o,t,i,s,l,u,h){const d=new E0,m=new qb,p=new Set,_=[],v=l.logarithmicDepthBuffer,x=l.vertexTextures;let M=l.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function R(U){return p.add(U),U===0?"uv":`uv${U}`}function S(U,C,G,lt,rt){const gt=lt.fog,ht=rt.geometry,z=U.isMeshStandardMaterial?lt.environment:null,j=(U.isMeshStandardMaterial?i:t).get(U.envMap||z),Y=j&&j.mapping===Uc?j.image.height:null,Mt=E[U.type];U.precision!==null&&(M=l.getMaxPrecision(U.precision),M!==U.precision&&console.warn("THREE.WebGLProgram.getParameters:",U.precision,"not supported, using",M,"instead."));const L=ht.morphAttributes.position||ht.morphAttributes.normal||ht.morphAttributes.color,$=L!==void 0?L.length:0;let vt=0;ht.morphAttributes.position!==void 0&&(vt=1),ht.morphAttributes.normal!==void 0&&(vt=2),ht.morphAttributes.color!==void 0&&(vt=3);let St,Q,pt,yt;if(Mt){const Me=bi[Mt];St=Me.vertexShader,Q=Me.fragmentShader}else St=U.vertexShader,Q=U.fragmentShader,m.update(U),pt=m.getVertexShaderID(U),yt=m.getFragmentShaderID(U);const At=o.getRenderTarget(),Ct=o.state.buffers.depth.getReversed(),oe=rt.isInstancedMesh===!0,Kt=rt.isBatchedMesh===!0,Le=!!U.map,Fe=!!U.matcap,ge=!!j,F=!!U.aoMap,xn=!!U.lightMap,ye=!!U.bumpMap,de=!!U.normalMap,Gt=!!U.displacementMap,ve=!!U.emissiveMap,Yt=!!U.metalnessMap,ie=!!U.roughnessMap,Qe=U.anisotropy>0,O=U.clearcoat>0,T=U.dispersion>0,et=U.iridescence>0,ut=U.sheen>0,dt=U.transmission>0,ot=Qe&&!!U.anisotropyMap,Ot=O&&!!U.clearcoatMap,Dt=O&&!!U.clearcoatNormalMap,Ht=O&&!!U.clearcoatRoughnessMap,Vt=et&&!!U.iridescenceMap,xt=et&&!!U.iridescenceThicknessMap,Pt=ut&&!!U.sheenColorMap,Wt=ut&&!!U.sheenRoughnessMap,qt=!!U.specularMap,Rt=!!U.specularColorMap,ne=!!U.specularIntensityMap,k=dt&&!!U.transmissionMap,Ut=dt&&!!U.thicknessMap,Et=!!U.gradientMap,zt=!!U.alphaMap,bt=U.alphaTest>0,_t=!!U.alphaHash,Bt=!!U.extensions;let ee=ka;U.toneMapped&&(At===null||At.isXRRenderTarget===!0)&&(ee=o.toneMapping);const we={shaderID:Mt,shaderType:U.type,shaderName:U.name,vertexShader:St,fragmentShader:Q,defines:U.defines,customVertexShaderID:pt,customFragmentShaderID:yt,isRawShaderMaterial:U.isRawShaderMaterial===!0,glslVersion:U.glslVersion,precision:M,batching:Kt,batchingColor:Kt&&rt._colorsTexture!==null,instancing:oe,instancingColor:oe&&rt.instanceColor!==null,instancingMorph:oe&&rt.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:At===null?o.outputColorSpace:At.isXRRenderTarget===!0?At.texture.colorSpace:Ar,alphaToCoverage:!!U.alphaToCoverage,map:Le,matcap:Fe,envMap:ge,envMapMode:ge&&j.mapping,envMapCubeUVHeight:Y,aoMap:F,lightMap:xn,bumpMap:ye,normalMap:de,displacementMap:x&&Gt,emissiveMap:ve,normalMapObjectSpace:de&&U.normalMapType===OS,normalMapTangentSpace:de&&U.normalMapType===NS,metalnessMap:Yt,roughnessMap:ie,anisotropy:Qe,anisotropyMap:ot,clearcoat:O,clearcoatMap:Ot,clearcoatNormalMap:Dt,clearcoatRoughnessMap:Ht,dispersion:T,iridescence:et,iridescenceMap:Vt,iridescenceThicknessMap:xt,sheen:ut,sheenColorMap:Pt,sheenRoughnessMap:Wt,specularMap:qt,specularColorMap:Rt,specularIntensityMap:ne,transmission:dt,transmissionMap:k,thicknessMap:Ut,gradientMap:Et,opaque:U.transparent===!1&&U.blending===Sr&&U.alphaToCoverage===!1,alphaMap:zt,alphaTest:bt,alphaHash:_t,combine:U.combine,mapUv:Le&&R(U.map.channel),aoMapUv:F&&R(U.aoMap.channel),lightMapUv:xn&&R(U.lightMap.channel),bumpMapUv:ye&&R(U.bumpMap.channel),normalMapUv:de&&R(U.normalMap.channel),displacementMapUv:Gt&&R(U.displacementMap.channel),emissiveMapUv:ve&&R(U.emissiveMap.channel),metalnessMapUv:Yt&&R(U.metalnessMap.channel),roughnessMapUv:ie&&R(U.roughnessMap.channel),anisotropyMapUv:ot&&R(U.anisotropyMap.channel),clearcoatMapUv:Ot&&R(U.clearcoatMap.channel),clearcoatNormalMapUv:Dt&&R(U.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ht&&R(U.clearcoatRoughnessMap.channel),iridescenceMapUv:Vt&&R(U.iridescenceMap.channel),iridescenceThicknessMapUv:xt&&R(U.iridescenceThicknessMap.channel),sheenColorMapUv:Pt&&R(U.sheenColorMap.channel),sheenRoughnessMapUv:Wt&&R(U.sheenRoughnessMap.channel),specularMapUv:qt&&R(U.specularMap.channel),specularColorMapUv:Rt&&R(U.specularColorMap.channel),specularIntensityMapUv:ne&&R(U.specularIntensityMap.channel),transmissionMapUv:k&&R(U.transmissionMap.channel),thicknessMapUv:Ut&&R(U.thicknessMap.channel),alphaMapUv:zt&&R(U.alphaMap.channel),vertexTangents:!!ht.attributes.tangent&&(de||Qe),vertexColors:U.vertexColors,vertexAlphas:U.vertexColors===!0&&!!ht.attributes.color&&ht.attributes.color.itemSize===4,pointsUvs:rt.isPoints===!0&&!!ht.attributes.uv&&(Le||zt),fog:!!gt,useFog:U.fog===!0,fogExp2:!!gt&&gt.isFogExp2,flatShading:U.flatShading===!0&&U.wireframe===!1,sizeAttenuation:U.sizeAttenuation===!0,logarithmicDepthBuffer:v,reverseDepthBuffer:Ct,skinning:rt.isSkinnedMesh===!0,morphTargets:ht.morphAttributes.position!==void 0,morphNormals:ht.morphAttributes.normal!==void 0,morphColors:ht.morphAttributes.color!==void 0,morphTargetsCount:$,morphTextureStride:vt,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:U.dithering,shadowMapEnabled:o.shadowMap.enabled&&G.length>0,shadowMapType:o.shadowMap.type,toneMapping:ee,decodeVideoTexture:Le&&U.map.isVideoTexture===!0&&Te.getTransfer(U.map.colorSpace)===Ie,decodeVideoTextureEmissive:ve&&U.emissiveMap.isVideoTexture===!0&&Te.getTransfer(U.emissiveMap.colorSpace)===Ie,premultipliedAlpha:U.premultipliedAlpha,doubleSided:U.side===ea,flipSided:U.side===Gn,useDepthPacking:U.depthPacking>=0,depthPacking:U.depthPacking||0,index0AttributeName:U.index0AttributeName,extensionClipCullDistance:Bt&&U.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Bt&&U.extensions.multiDraw===!0||Kt)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:U.customProgramCacheKey()};return we.vertexUv1s=p.has(1),we.vertexUv2s=p.has(2),we.vertexUv3s=p.has(3),p.clear(),we}function g(U){const C=[];if(U.shaderID?C.push(U.shaderID):(C.push(U.customVertexShaderID),C.push(U.customFragmentShaderID)),U.defines!==void 0)for(const G in U.defines)C.push(G),C.push(U.defines[G]);return U.isRawShaderMaterial===!1&&(N(C,U),D(C,U),C.push(o.outputColorSpace)),C.push(U.customProgramCacheKey),C.join()}function N(U,C){U.push(C.precision),U.push(C.outputColorSpace),U.push(C.envMapMode),U.push(C.envMapCubeUVHeight),U.push(C.mapUv),U.push(C.alphaMapUv),U.push(C.lightMapUv),U.push(C.aoMapUv),U.push(C.bumpMapUv),U.push(C.normalMapUv),U.push(C.displacementMapUv),U.push(C.emissiveMapUv),U.push(C.metalnessMapUv),U.push(C.roughnessMapUv),U.push(C.anisotropyMapUv),U.push(C.clearcoatMapUv),U.push(C.clearcoatNormalMapUv),U.push(C.clearcoatRoughnessMapUv),U.push(C.iridescenceMapUv),U.push(C.iridescenceThicknessMapUv),U.push(C.sheenColorMapUv),U.push(C.sheenRoughnessMapUv),U.push(C.specularMapUv),U.push(C.specularColorMapUv),U.push(C.specularIntensityMapUv),U.push(C.transmissionMapUv),U.push(C.thicknessMapUv),U.push(C.combine),U.push(C.fogExp2),U.push(C.sizeAttenuation),U.push(C.morphTargetsCount),U.push(C.morphAttributeCount),U.push(C.numDirLights),U.push(C.numPointLights),U.push(C.numSpotLights),U.push(C.numSpotLightMaps),U.push(C.numHemiLights),U.push(C.numRectAreaLights),U.push(C.numDirLightShadows),U.push(C.numPointLightShadows),U.push(C.numSpotLightShadows),U.push(C.numSpotLightShadowsWithMaps),U.push(C.numLightProbes),U.push(C.shadowMapType),U.push(C.toneMapping),U.push(C.numClippingPlanes),U.push(C.numClipIntersection),U.push(C.depthPacking)}function D(U,C){d.disableAll(),C.supportsVertexTextures&&d.enable(0),C.instancing&&d.enable(1),C.instancingColor&&d.enable(2),C.instancingMorph&&d.enable(3),C.matcap&&d.enable(4),C.envMap&&d.enable(5),C.normalMapObjectSpace&&d.enable(6),C.normalMapTangentSpace&&d.enable(7),C.clearcoat&&d.enable(8),C.iridescence&&d.enable(9),C.alphaTest&&d.enable(10),C.vertexColors&&d.enable(11),C.vertexAlphas&&d.enable(12),C.vertexUv1s&&d.enable(13),C.vertexUv2s&&d.enable(14),C.vertexUv3s&&d.enable(15),C.vertexTangents&&d.enable(16),C.anisotropy&&d.enable(17),C.alphaHash&&d.enable(18),C.batching&&d.enable(19),C.dispersion&&d.enable(20),C.batchingColor&&d.enable(21),C.gradientMap&&d.enable(22),U.push(d.mask),d.disableAll(),C.fog&&d.enable(0),C.useFog&&d.enable(1),C.flatShading&&d.enable(2),C.logarithmicDepthBuffer&&d.enable(3),C.reverseDepthBuffer&&d.enable(4),C.skinning&&d.enable(5),C.morphTargets&&d.enable(6),C.morphNormals&&d.enable(7),C.morphColors&&d.enable(8),C.premultipliedAlpha&&d.enable(9),C.shadowMapEnabled&&d.enable(10),C.doubleSided&&d.enable(11),C.flipSided&&d.enable(12),C.useDepthPacking&&d.enable(13),C.dithering&&d.enable(14),C.transmission&&d.enable(15),C.sheen&&d.enable(16),C.opaque&&d.enable(17),C.pointsUvs&&d.enable(18),C.decodeVideoTexture&&d.enable(19),C.decodeVideoTextureEmissive&&d.enable(20),C.alphaToCoverage&&d.enable(21),U.push(d.mask)}function w(U){const C=E[U.type];let G;if(C){const lt=bi[C];G=dy.clone(lt.uniforms)}else G=U.uniforms;return G}function B(U,C){let G;for(let lt=0,rt=_.length;lt<rt;lt++){const gt=_[lt];if(gt.cacheKey===C){G=gt,++G.usedTimes;break}}return G===void 0&&(G=new Xb(o,C,U,u),_.push(G)),G}function H(U){if(--U.usedTimes===0){const C=_.indexOf(U);_[C]=_[_.length-1],_.pop(),U.destroy()}}function I(U){m.remove(U)}function X(){m.dispose()}return{getParameters:S,getProgramCacheKey:g,getUniforms:w,acquireProgram:B,releaseProgram:H,releaseShaderCache:I,programs:_,dispose:X}}function jb(){let o=new WeakMap;function t(h){return o.has(h)}function i(h){let d=o.get(h);return d===void 0&&(d={},o.set(h,d)),d}function s(h){o.delete(h)}function l(h,d,m){o.get(h)[d]=m}function u(){o=new WeakMap}return{has:t,get:i,remove:s,update:l,dispose:u}}function Kb(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.material.id!==t.material.id?o.material.id-t.material.id:o.z!==t.z?o.z-t.z:o.id-t.id}function i0(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.z!==t.z?t.z-o.z:o.id-t.id}function a0(){const o=[];let t=0;const i=[],s=[],l=[];function u(){t=0,i.length=0,s.length=0,l.length=0}function h(v,x,M,E,R,S){let g=o[t];return g===void 0?(g={id:v.id,object:v,geometry:x,material:M,groupOrder:E,renderOrder:v.renderOrder,z:R,group:S},o[t]=g):(g.id=v.id,g.object=v,g.geometry=x,g.material=M,g.groupOrder=E,g.renderOrder=v.renderOrder,g.z=R,g.group=S),t++,g}function d(v,x,M,E,R,S){const g=h(v,x,M,E,R,S);M.transmission>0?s.push(g):M.transparent===!0?l.push(g):i.push(g)}function m(v,x,M,E,R,S){const g=h(v,x,M,E,R,S);M.transmission>0?s.unshift(g):M.transparent===!0?l.unshift(g):i.unshift(g)}function p(v,x){i.length>1&&i.sort(v||Kb),s.length>1&&s.sort(x||i0),l.length>1&&l.sort(x||i0)}function _(){for(let v=t,x=o.length;v<x;v++){const M=o[v];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:i,transmissive:s,transparent:l,init:u,push:d,unshift:m,finish:_,sort:p}}function Qb(){let o=new WeakMap;function t(s,l){const u=o.get(s);let h;return u===void 0?(h=new a0,o.set(s,[h])):l>=u.length?(h=new a0,u.push(h)):h=u[l],h}function i(){o=new WeakMap}return{get:t,dispose:i}}function Jb(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new tt,color:new be};break;case"SpotLight":i={position:new tt,direction:new tt,color:new be,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new tt,color:new be,distance:0,decay:0};break;case"HemisphereLight":i={direction:new tt,skyColor:new be,groundColor:new be};break;case"RectAreaLight":i={color:new be,position:new tt,halfWidth:new tt,halfHeight:new tt};break}return o[t.id]=i,i}}}function $b(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[t.id]=i,i}}}let tA=0;function eA(o,t){return(t.castShadow?2:0)-(o.castShadow?2:0)+(t.map?1:0)-(o.map?1:0)}function nA(o){const t=new Jb,i=$b(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new tt);const l=new tt,u=new Ye,h=new Ye;function d(p){let _=0,v=0,x=0;for(let U=0;U<9;U++)s.probe[U].set(0,0,0);let M=0,E=0,R=0,S=0,g=0,N=0,D=0,w=0,B=0,H=0,I=0;p.sort(eA);for(let U=0,C=p.length;U<C;U++){const G=p[U],lt=G.color,rt=G.intensity,gt=G.distance,ht=G.shadow&&G.shadow.map?G.shadow.map.texture:null;if(G.isAmbientLight)_+=lt.r*rt,v+=lt.g*rt,x+=lt.b*rt;else if(G.isLightProbe){for(let z=0;z<9;z++)s.probe[z].addScaledVector(G.sh.coefficients[z],rt);I++}else if(G.isDirectionalLight){const z=t.get(G);if(z.color.copy(G.color).multiplyScalar(G.intensity),G.castShadow){const j=G.shadow,Y=i.get(G);Y.shadowIntensity=j.intensity,Y.shadowBias=j.bias,Y.shadowNormalBias=j.normalBias,Y.shadowRadius=j.radius,Y.shadowMapSize=j.mapSize,s.directionalShadow[M]=Y,s.directionalShadowMap[M]=ht,s.directionalShadowMatrix[M]=G.shadow.matrix,N++}s.directional[M]=z,M++}else if(G.isSpotLight){const z=t.get(G);z.position.setFromMatrixPosition(G.matrixWorld),z.color.copy(lt).multiplyScalar(rt),z.distance=gt,z.coneCos=Math.cos(G.angle),z.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),z.decay=G.decay,s.spot[R]=z;const j=G.shadow;if(G.map&&(s.spotLightMap[B]=G.map,B++,j.updateMatrices(G),G.castShadow&&H++),s.spotLightMatrix[R]=j.matrix,G.castShadow){const Y=i.get(G);Y.shadowIntensity=j.intensity,Y.shadowBias=j.bias,Y.shadowNormalBias=j.normalBias,Y.shadowRadius=j.radius,Y.shadowMapSize=j.mapSize,s.spotShadow[R]=Y,s.spotShadowMap[R]=ht,w++}R++}else if(G.isRectAreaLight){const z=t.get(G);z.color.copy(lt).multiplyScalar(rt),z.halfWidth.set(G.width*.5,0,0),z.halfHeight.set(0,G.height*.5,0),s.rectArea[S]=z,S++}else if(G.isPointLight){const z=t.get(G);if(z.color.copy(G.color).multiplyScalar(G.intensity),z.distance=G.distance,z.decay=G.decay,G.castShadow){const j=G.shadow,Y=i.get(G);Y.shadowIntensity=j.intensity,Y.shadowBias=j.bias,Y.shadowNormalBias=j.normalBias,Y.shadowRadius=j.radius,Y.shadowMapSize=j.mapSize,Y.shadowCameraNear=j.camera.near,Y.shadowCameraFar=j.camera.far,s.pointShadow[E]=Y,s.pointShadowMap[E]=ht,s.pointShadowMatrix[E]=G.shadow.matrix,D++}s.point[E]=z,E++}else if(G.isHemisphereLight){const z=t.get(G);z.skyColor.copy(G.color).multiplyScalar(rt),z.groundColor.copy(G.groundColor).multiplyScalar(rt),s.hemi[g]=z,g++}}S>0&&(o.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Lt.LTC_FLOAT_1,s.rectAreaLTC2=Lt.LTC_FLOAT_2):(s.rectAreaLTC1=Lt.LTC_HALF_1,s.rectAreaLTC2=Lt.LTC_HALF_2)),s.ambient[0]=_,s.ambient[1]=v,s.ambient[2]=x;const X=s.hash;(X.directionalLength!==M||X.pointLength!==E||X.spotLength!==R||X.rectAreaLength!==S||X.hemiLength!==g||X.numDirectionalShadows!==N||X.numPointShadows!==D||X.numSpotShadows!==w||X.numSpotMaps!==B||X.numLightProbes!==I)&&(s.directional.length=M,s.spot.length=R,s.rectArea.length=S,s.point.length=E,s.hemi.length=g,s.directionalShadow.length=N,s.directionalShadowMap.length=N,s.pointShadow.length=D,s.pointShadowMap.length=D,s.spotShadow.length=w,s.spotShadowMap.length=w,s.directionalShadowMatrix.length=N,s.pointShadowMatrix.length=D,s.spotLightMatrix.length=w+B-H,s.spotLightMap.length=B,s.numSpotLightShadowsWithMaps=H,s.numLightProbes=I,X.directionalLength=M,X.pointLength=E,X.spotLength=R,X.rectAreaLength=S,X.hemiLength=g,X.numDirectionalShadows=N,X.numPointShadows=D,X.numSpotShadows=w,X.numSpotMaps=B,X.numLightProbes=I,s.version=tA++)}function m(p,_){let v=0,x=0,M=0,E=0,R=0;const S=_.matrixWorldInverse;for(let g=0,N=p.length;g<N;g++){const D=p[g];if(D.isDirectionalLight){const w=s.directional[v];w.direction.setFromMatrixPosition(D.matrixWorld),l.setFromMatrixPosition(D.target.matrixWorld),w.direction.sub(l),w.direction.transformDirection(S),v++}else if(D.isSpotLight){const w=s.spot[M];w.position.setFromMatrixPosition(D.matrixWorld),w.position.applyMatrix4(S),w.direction.setFromMatrixPosition(D.matrixWorld),l.setFromMatrixPosition(D.target.matrixWorld),w.direction.sub(l),w.direction.transformDirection(S),M++}else if(D.isRectAreaLight){const w=s.rectArea[E];w.position.setFromMatrixPosition(D.matrixWorld),w.position.applyMatrix4(S),h.identity(),u.copy(D.matrixWorld),u.premultiply(S),h.extractRotation(u),w.halfWidth.set(D.width*.5,0,0),w.halfHeight.set(0,D.height*.5,0),w.halfWidth.applyMatrix4(h),w.halfHeight.applyMatrix4(h),E++}else if(D.isPointLight){const w=s.point[x];w.position.setFromMatrixPosition(D.matrixWorld),w.position.applyMatrix4(S),x++}else if(D.isHemisphereLight){const w=s.hemi[R];w.direction.setFromMatrixPosition(D.matrixWorld),w.direction.transformDirection(S),R++}}}return{setup:d,setupView:m,state:s}}function s0(o){const t=new nA(o),i=[],s=[];function l(_){p.camera=_,i.length=0,s.length=0}function u(_){i.push(_)}function h(_){s.push(_)}function d(){t.setup(i)}function m(_){t.setupView(i,_)}const p={lightsArray:i,shadowsArray:s,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:d,setupLightsView:m,pushLight:u,pushShadow:h}}function iA(o){let t=new WeakMap;function i(l,u=0){const h=t.get(l);let d;return h===void 0?(d=new s0(o),t.set(l,[d])):u>=h.length?(d=new s0(o),h.push(d)):d=h[u],d}function s(){t=new WeakMap}return{get:i,dispose:s}}const aA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,sA=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function rA(o,t,i){let s=new xd;const l=new re,u=new re,h=new Ke,d=new Ty({depthPacking:LS}),m=new by,p={},_=i.maxTextureSize,v={[Xa]:Gn,[Gn]:Xa,[ea]:ea},x=new Wa({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new re},radius:{value:4}},vertexShader:aA,fragmentShader:sA}),M=x.clone();M.defines.HORIZONTAL_PASS=1;const E=new oa;E.setAttribute("position",new vi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const R=new aa(E,x),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=l0;let g=this.type;this.render=function(H,I,X){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||H.length===0)return;const U=o.getRenderTarget(),C=o.getActiveCubeFace(),G=o.getActiveMipmapLevel(),lt=o.state;lt.setBlending(Va),lt.buffers.color.setClear(1,1,1,1),lt.buffers.depth.setTest(!0),lt.setScissorTest(!1);const rt=g!==ta&&this.type===ta,gt=g===ta&&this.type!==ta;for(let ht=0,z=H.length;ht<z;ht++){const j=H[ht],Y=j.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;l.copy(Y.mapSize);const Mt=Y.getFrameExtents();if(l.multiply(Mt),u.copy(Y.mapSize),(l.x>_||l.y>_)&&(l.x>_&&(u.x=Math.floor(_/Mt.x),l.x=u.x*Mt.x,Y.mapSize.x=u.x),l.y>_&&(u.y=Math.floor(_/Mt.y),l.y=u.y*Mt.y,Y.mapSize.y=u.y)),Y.map===null||rt===!0||gt===!0){const $=this.type!==ta?{minFilter:gi,magFilter:gi}:{};Y.map!==null&&Y.map.dispose(),Y.map=new Ts(l.x,l.y,$),Y.map.texture.name=j.name+".shadowMap",Y.camera.updateProjectionMatrix()}o.setRenderTarget(Y.map),o.clear();const L=Y.getViewportCount();for(let $=0;$<L;$++){const vt=Y.getViewport($);h.set(u.x*vt.x,u.y*vt.y,u.x*vt.z,u.y*vt.w),lt.viewport(h),Y.updateMatrices(j,$),s=Y.getFrustum(),w(I,X,Y.camera,j,this.type)}Y.isPointLightShadow!==!0&&this.type===ta&&N(Y,X),Y.needsUpdate=!1}g=this.type,S.needsUpdate=!1,o.setRenderTarget(U,C,G)};function N(H,I){const X=t.update(R);x.defines.VSM_SAMPLES!==H.blurSamples&&(x.defines.VSM_SAMPLES=H.blurSamples,M.defines.VSM_SAMPLES=H.blurSamples,x.needsUpdate=!0,M.needsUpdate=!0),H.mapPass===null&&(H.mapPass=new Ts(l.x,l.y)),x.uniforms.shadow_pass.value=H.map.texture,x.uniforms.resolution.value=H.mapSize,x.uniforms.radius.value=H.radius,o.setRenderTarget(H.mapPass),o.clear(),o.renderBufferDirect(I,null,X,x,R,null),M.uniforms.shadow_pass.value=H.mapPass.texture,M.uniforms.resolution.value=H.mapSize,M.uniforms.radius.value=H.radius,o.setRenderTarget(H.map),o.clear(),o.renderBufferDirect(I,null,X,M,R,null)}function D(H,I,X,U){let C=null;const G=X.isPointLight===!0?H.customDistanceMaterial:H.customDepthMaterial;if(G!==void 0)C=G;else if(C=X.isPointLight===!0?m:d,o.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){const lt=C.uuid,rt=I.uuid;let gt=p[lt];gt===void 0&&(gt={},p[lt]=gt);let ht=gt[rt];ht===void 0&&(ht=C.clone(),gt[rt]=ht,I.addEventListener("dispose",B)),C=ht}if(C.visible=I.visible,C.wireframe=I.wireframe,U===ta?C.side=I.shadowSide!==null?I.shadowSide:I.side:C.side=I.shadowSide!==null?I.shadowSide:v[I.side],C.alphaMap=I.alphaMap,C.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,C.map=I.map,C.clipShadows=I.clipShadows,C.clippingPlanes=I.clippingPlanes,C.clipIntersection=I.clipIntersection,C.displacementMap=I.displacementMap,C.displacementScale=I.displacementScale,C.displacementBias=I.displacementBias,C.wireframeLinewidth=I.wireframeLinewidth,C.linewidth=I.linewidth,X.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const lt=o.properties.get(C);lt.light=X}return C}function w(H,I,X,U,C){if(H.visible===!1)return;if(H.layers.test(I.layers)&&(H.isMesh||H.isLine||H.isPoints)&&(H.castShadow||H.receiveShadow&&C===ta)&&(!H.frustumCulled||s.intersectsObject(H))){H.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,H.matrixWorld);const rt=t.update(H),gt=H.material;if(Array.isArray(gt)){const ht=rt.groups;for(let z=0,j=ht.length;z<j;z++){const Y=ht[z],Mt=gt[Y.materialIndex];if(Mt&&Mt.visible){const L=D(H,Mt,U,C);H.onBeforeShadow(o,H,I,X,rt,L,Y),o.renderBufferDirect(X,null,rt,L,H,Y),H.onAfterShadow(o,H,I,X,rt,L,Y)}}}else if(gt.visible){const ht=D(H,gt,U,C);H.onBeforeShadow(o,H,I,X,rt,ht,null),o.renderBufferDirect(X,null,rt,ht,H,null),H.onAfterShadow(o,H,I,X,rt,ht,null)}}const lt=H.children;for(let rt=0,gt=lt.length;rt<gt;rt++)w(lt[rt],I,X,U,C)}function B(H){H.target.removeEventListener("dispose",B);for(const X in p){const U=p[X],C=H.target.uuid;C in U&&(U[C].dispose(),delete U[C])}}}const oA={[Eh]:Th,[bh]:Ch,[Ah]:wh,[Er]:Rh,[Th]:Eh,[Ch]:bh,[wh]:Ah,[Rh]:Er};function lA(o,t){function i(){let k=!1;const Ut=new Ke;let Et=null;const zt=new Ke(0,0,0,0);return{setMask:function(bt){Et!==bt&&!k&&(o.colorMask(bt,bt,bt,bt),Et=bt)},setLocked:function(bt){k=bt},setClear:function(bt,_t,Bt,ee,we){we===!0&&(bt*=ee,_t*=ee,Bt*=ee),Ut.set(bt,_t,Bt,ee),zt.equals(Ut)===!1&&(o.clearColor(bt,_t,Bt,ee),zt.copy(Ut))},reset:function(){k=!1,Et=null,zt.set(-1,0,0,0)}}}function s(){let k=!1,Ut=!1,Et=null,zt=null,bt=null;return{setReversed:function(_t){if(Ut!==_t){const Bt=t.get("EXT_clip_control");_t?Bt.clipControlEXT(Bt.LOWER_LEFT_EXT,Bt.ZERO_TO_ONE_EXT):Bt.clipControlEXT(Bt.LOWER_LEFT_EXT,Bt.NEGATIVE_ONE_TO_ONE_EXT),Ut=_t;const ee=bt;bt=null,this.setClear(ee)}},getReversed:function(){return Ut},setTest:function(_t){_t?At(o.DEPTH_TEST):Ct(o.DEPTH_TEST)},setMask:function(_t){Et!==_t&&!k&&(o.depthMask(_t),Et=_t)},setFunc:function(_t){if(Ut&&(_t=oA[_t]),zt!==_t){switch(_t){case Eh:o.depthFunc(o.NEVER);break;case Th:o.depthFunc(o.ALWAYS);break;case bh:o.depthFunc(o.LESS);break;case Er:o.depthFunc(o.LEQUAL);break;case Ah:o.depthFunc(o.EQUAL);break;case Rh:o.depthFunc(o.GEQUAL);break;case Ch:o.depthFunc(o.GREATER);break;case wh:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}zt=_t}},setLocked:function(_t){k=_t},setClear:function(_t){bt!==_t&&(Ut&&(_t=1-_t),o.clearDepth(_t),bt=_t)},reset:function(){k=!1,Et=null,zt=null,bt=null,Ut=!1}}}function l(){let k=!1,Ut=null,Et=null,zt=null,bt=null,_t=null,Bt=null,ee=null,we=null;return{setTest:function(Me){k||(Me?At(o.STENCIL_TEST):Ct(o.STENCIL_TEST))},setMask:function(Me){Ut!==Me&&!k&&(o.stencilMask(Me),Ut=Me)},setFunc:function(Me,kn,hn){(Et!==Me||zt!==kn||bt!==hn)&&(o.stencilFunc(Me,kn,hn),Et=Me,zt=kn,bt=hn)},setOp:function(Me,kn,hn){(_t!==Me||Bt!==kn||ee!==hn)&&(o.stencilOp(Me,kn,hn),_t=Me,Bt=kn,ee=hn)},setLocked:function(Me){k=Me},setClear:function(Me){we!==Me&&(o.clearStencil(Me),we=Me)},reset:function(){k=!1,Ut=null,Et=null,zt=null,bt=null,_t=null,Bt=null,ee=null,we=null}}}const u=new i,h=new s,d=new l,m=new WeakMap,p=new WeakMap;let _={},v={},x=new WeakMap,M=[],E=null,R=!1,S=null,g=null,N=null,D=null,w=null,B=null,H=null,I=new be(0,0,0),X=0,U=!1,C=null,G=null,lt=null,rt=null,gt=null;const ht=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,j=0;const Y=o.getParameter(o.VERSION);Y.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(Y)[1]),z=j>=1):Y.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),z=j>=2);let Mt=null,L={};const $=o.getParameter(o.SCISSOR_BOX),vt=o.getParameter(o.VIEWPORT),St=new Ke().fromArray($),Q=new Ke().fromArray(vt);function pt(k,Ut,Et,zt){const bt=new Uint8Array(4),_t=o.createTexture();o.bindTexture(k,_t),o.texParameteri(k,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(k,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let Bt=0;Bt<Et;Bt++)k===o.TEXTURE_3D||k===o.TEXTURE_2D_ARRAY?o.texImage3D(Ut,0,o.RGBA,1,1,zt,0,o.RGBA,o.UNSIGNED_BYTE,bt):o.texImage2D(Ut+Bt,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,bt);return _t}const yt={};yt[o.TEXTURE_2D]=pt(o.TEXTURE_2D,o.TEXTURE_2D,1),yt[o.TEXTURE_CUBE_MAP]=pt(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),yt[o.TEXTURE_2D_ARRAY]=pt(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),yt[o.TEXTURE_3D]=pt(o.TEXTURE_3D,o.TEXTURE_3D,1,1),u.setClear(0,0,0,1),h.setClear(1),d.setClear(0),At(o.DEPTH_TEST),h.setFunc(Er),ye(!1),de(sg),At(o.CULL_FACE),F(Va);function At(k){_[k]!==!0&&(o.enable(k),_[k]=!0)}function Ct(k){_[k]!==!1&&(o.disable(k),_[k]=!1)}function oe(k,Ut){return v[k]!==Ut?(o.bindFramebuffer(k,Ut),v[k]=Ut,k===o.DRAW_FRAMEBUFFER&&(v[o.FRAMEBUFFER]=Ut),k===o.FRAMEBUFFER&&(v[o.DRAW_FRAMEBUFFER]=Ut),!0):!1}function Kt(k,Ut){let Et=M,zt=!1;if(k){Et=x.get(Ut),Et===void 0&&(Et=[],x.set(Ut,Et));const bt=k.textures;if(Et.length!==bt.length||Et[0]!==o.COLOR_ATTACHMENT0){for(let _t=0,Bt=bt.length;_t<Bt;_t++)Et[_t]=o.COLOR_ATTACHMENT0+_t;Et.length=bt.length,zt=!0}}else Et[0]!==o.BACK&&(Et[0]=o.BACK,zt=!0);zt&&o.drawBuffers(Et)}function Le(k){return E!==k?(o.useProgram(k),E=k,!0):!1}const Fe={[vs]:o.FUNC_ADD,[aS]:o.FUNC_SUBTRACT,[sS]:o.FUNC_REVERSE_SUBTRACT};Fe[rS]=o.MIN,Fe[oS]=o.MAX;const ge={[lS]:o.ZERO,[cS]:o.ONE,[uS]:o.SRC_COLOR,[yh]:o.SRC_ALPHA,[_S]:o.SRC_ALPHA_SATURATE,[pS]:o.DST_COLOR,[hS]:o.DST_ALPHA,[fS]:o.ONE_MINUS_SRC_COLOR,[Mh]:o.ONE_MINUS_SRC_ALPHA,[mS]:o.ONE_MINUS_DST_COLOR,[dS]:o.ONE_MINUS_DST_ALPHA,[gS]:o.CONSTANT_COLOR,[vS]:o.ONE_MINUS_CONSTANT_COLOR,[xS]:o.CONSTANT_ALPHA,[SS]:o.ONE_MINUS_CONSTANT_ALPHA};function F(k,Ut,Et,zt,bt,_t,Bt,ee,we,Me){if(k===Va){R===!0&&(Ct(o.BLEND),R=!1);return}if(R===!1&&(At(o.BLEND),R=!0),k!==iS){if(k!==S||Me!==U){if((g!==vs||w!==vs)&&(o.blendEquation(o.FUNC_ADD),g=vs,w=vs),Me)switch(k){case Sr:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case rg:o.blendFunc(o.ONE,o.ONE);break;case og:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case lg:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case Sr:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case rg:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case og:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case lg:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}N=null,D=null,B=null,H=null,I.set(0,0,0),X=0,S=k,U=Me}return}bt=bt||Ut,_t=_t||Et,Bt=Bt||zt,(Ut!==g||bt!==w)&&(o.blendEquationSeparate(Fe[Ut],Fe[bt]),g=Ut,w=bt),(Et!==N||zt!==D||_t!==B||Bt!==H)&&(o.blendFuncSeparate(ge[Et],ge[zt],ge[_t],ge[Bt]),N=Et,D=zt,B=_t,H=Bt),(ee.equals(I)===!1||we!==X)&&(o.blendColor(ee.r,ee.g,ee.b,we),I.copy(ee),X=we),S=k,U=!1}function xn(k,Ut){k.side===ea?Ct(o.CULL_FACE):At(o.CULL_FACE);let Et=k.side===Gn;Ut&&(Et=!Et),ye(Et),k.blending===Sr&&k.transparent===!1?F(Va):F(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),h.setFunc(k.depthFunc),h.setTest(k.depthTest),h.setMask(k.depthWrite),u.setMask(k.colorWrite);const zt=k.stencilWrite;d.setTest(zt),zt&&(d.setMask(k.stencilWriteMask),d.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),d.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),ve(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?At(o.SAMPLE_ALPHA_TO_COVERAGE):Ct(o.SAMPLE_ALPHA_TO_COVERAGE)}function ye(k){C!==k&&(k?o.frontFace(o.CW):o.frontFace(o.CCW),C=k)}function de(k){k!==eS?(At(o.CULL_FACE),k!==G&&(k===sg?o.cullFace(o.BACK):k===nS?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Ct(o.CULL_FACE),G=k}function Gt(k){k!==lt&&(z&&o.lineWidth(k),lt=k)}function ve(k,Ut,Et){k?(At(o.POLYGON_OFFSET_FILL),(rt!==Ut||gt!==Et)&&(o.polygonOffset(Ut,Et),rt=Ut,gt=Et)):Ct(o.POLYGON_OFFSET_FILL)}function Yt(k){k?At(o.SCISSOR_TEST):Ct(o.SCISSOR_TEST)}function ie(k){k===void 0&&(k=o.TEXTURE0+ht-1),Mt!==k&&(o.activeTexture(k),Mt=k)}function Qe(k,Ut,Et){Et===void 0&&(Mt===null?Et=o.TEXTURE0+ht-1:Et=Mt);let zt=L[Et];zt===void 0&&(zt={type:void 0,texture:void 0},L[Et]=zt),(zt.type!==k||zt.texture!==Ut)&&(Mt!==Et&&(o.activeTexture(Et),Mt=Et),o.bindTexture(k,Ut||yt[k]),zt.type=k,zt.texture=Ut)}function O(){const k=L[Mt];k!==void 0&&k.type!==void 0&&(o.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function T(){try{o.compressedTexImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function et(){try{o.compressedTexImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ut(){try{o.texSubImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function dt(){try{o.texSubImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ot(){try{o.compressedTexSubImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ot(){try{o.compressedTexSubImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Dt(){try{o.texStorage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ht(){try{o.texStorage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Vt(){try{o.texImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function xt(){try{o.texImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Pt(k){St.equals(k)===!1&&(o.scissor(k.x,k.y,k.z,k.w),St.copy(k))}function Wt(k){Q.equals(k)===!1&&(o.viewport(k.x,k.y,k.z,k.w),Q.copy(k))}function qt(k,Ut){let Et=p.get(Ut);Et===void 0&&(Et=new WeakMap,p.set(Ut,Et));let zt=Et.get(k);zt===void 0&&(zt=o.getUniformBlockIndex(Ut,k.name),Et.set(k,zt))}function Rt(k,Ut){const zt=p.get(Ut).get(k);m.get(Ut)!==zt&&(o.uniformBlockBinding(Ut,zt,k.__bindingPointIndex),m.set(Ut,zt))}function ne(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),h.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),_={},Mt=null,L={},v={},x=new WeakMap,M=[],E=null,R=!1,S=null,g=null,N=null,D=null,w=null,B=null,H=null,I=new be(0,0,0),X=0,U=!1,C=null,G=null,lt=null,rt=null,gt=null,St.set(0,0,o.canvas.width,o.canvas.height),Q.set(0,0,o.canvas.width,o.canvas.height),u.reset(),h.reset(),d.reset()}return{buffers:{color:u,depth:h,stencil:d},enable:At,disable:Ct,bindFramebuffer:oe,drawBuffers:Kt,useProgram:Le,setBlending:F,setMaterial:xn,setFlipSided:ye,setCullFace:de,setLineWidth:Gt,setPolygonOffset:ve,setScissorTest:Yt,activeTexture:ie,bindTexture:Qe,unbindTexture:O,compressedTexImage2D:T,compressedTexImage3D:et,texImage2D:Vt,texImage3D:xt,updateUBOMapping:qt,uniformBlockBinding:Rt,texStorage2D:Dt,texStorage3D:Ht,texSubImage2D:ut,texSubImage3D:dt,compressedTexSubImage2D:ot,compressedTexSubImage3D:Ot,scissor:Pt,viewport:Wt,reset:ne}}function cA(o,t,i,s,l,u,h){const d=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new re,_=new WeakMap;let v;const x=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(O,T){return M?new OffscreenCanvas(O,T):Dc("canvas")}function R(O,T,et){let ut=1;const dt=Qe(O);if((dt.width>et||dt.height>et)&&(ut=et/Math.max(dt.width,dt.height)),ut<1)if(typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&O instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&O instanceof ImageBitmap||typeof VideoFrame<"u"&&O instanceof VideoFrame){const ot=Math.floor(ut*dt.width),Ot=Math.floor(ut*dt.height);v===void 0&&(v=E(ot,Ot));const Dt=T?E(ot,Ot):v;return Dt.width=ot,Dt.height=Ot,Dt.getContext("2d").drawImage(O,0,0,ot,Ot),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+dt.width+"x"+dt.height+") to ("+ot+"x"+Ot+")."),Dt}else return"data"in O&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+dt.width+"x"+dt.height+")."),O;return O}function S(O){return O.generateMipmaps}function g(O){o.generateMipmap(O)}function N(O){return O.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:O.isWebGL3DRenderTarget?o.TEXTURE_3D:O.isWebGLArrayRenderTarget||O.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function D(O,T,et,ut,dt=!1){if(O!==null){if(o[O]!==void 0)return o[O];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+O+"'")}let ot=T;if(T===o.RED&&(et===o.FLOAT&&(ot=o.R32F),et===o.HALF_FLOAT&&(ot=o.R16F),et===o.UNSIGNED_BYTE&&(ot=o.R8)),T===o.RED_INTEGER&&(et===o.UNSIGNED_BYTE&&(ot=o.R8UI),et===o.UNSIGNED_SHORT&&(ot=o.R16UI),et===o.UNSIGNED_INT&&(ot=o.R32UI),et===o.BYTE&&(ot=o.R8I),et===o.SHORT&&(ot=o.R16I),et===o.INT&&(ot=o.R32I)),T===o.RG&&(et===o.FLOAT&&(ot=o.RG32F),et===o.HALF_FLOAT&&(ot=o.RG16F),et===o.UNSIGNED_BYTE&&(ot=o.RG8)),T===o.RG_INTEGER&&(et===o.UNSIGNED_BYTE&&(ot=o.RG8UI),et===o.UNSIGNED_SHORT&&(ot=o.RG16UI),et===o.UNSIGNED_INT&&(ot=o.RG32UI),et===o.BYTE&&(ot=o.RG8I),et===o.SHORT&&(ot=o.RG16I),et===o.INT&&(ot=o.RG32I)),T===o.RGB_INTEGER&&(et===o.UNSIGNED_BYTE&&(ot=o.RGB8UI),et===o.UNSIGNED_SHORT&&(ot=o.RGB16UI),et===o.UNSIGNED_INT&&(ot=o.RGB32UI),et===o.BYTE&&(ot=o.RGB8I),et===o.SHORT&&(ot=o.RGB16I),et===o.INT&&(ot=o.RGB32I)),T===o.RGBA_INTEGER&&(et===o.UNSIGNED_BYTE&&(ot=o.RGBA8UI),et===o.UNSIGNED_SHORT&&(ot=o.RGBA16UI),et===o.UNSIGNED_INT&&(ot=o.RGBA32UI),et===o.BYTE&&(ot=o.RGBA8I),et===o.SHORT&&(ot=o.RGBA16I),et===o.INT&&(ot=o.RGBA32I)),T===o.RGB&&et===o.UNSIGNED_INT_5_9_9_9_REV&&(ot=o.RGB9_E5),T===o.RGBA){const Ot=dt?Cc:Te.getTransfer(ut);et===o.FLOAT&&(ot=o.RGBA32F),et===o.HALF_FLOAT&&(ot=o.RGBA16F),et===o.UNSIGNED_BYTE&&(ot=Ot===Ie?o.SRGB8_ALPHA8:o.RGBA8),et===o.UNSIGNED_SHORT_4_4_4_4&&(ot=o.RGBA4),et===o.UNSIGNED_SHORT_5_5_5_1&&(ot=o.RGB5_A1)}return(ot===o.R16F||ot===o.R32F||ot===o.RG16F||ot===o.RG32F||ot===o.RGBA16F||ot===o.RGBA32F)&&t.get("EXT_color_buffer_float"),ot}function w(O,T){let et;return O?T===null||T===Ms||T===Lo?et=o.DEPTH24_STENCIL8:T===na?et=o.DEPTH32F_STENCIL8:T===Uo&&(et=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Ms||T===Lo?et=o.DEPTH_COMPONENT24:T===na?et=o.DEPTH_COMPONENT32F:T===Uo&&(et=o.DEPTH_COMPONENT16),et}function B(O,T){return S(O)===!0||O.isFramebufferTexture&&O.minFilter!==gi&&O.minFilter!==Ri?Math.log2(Math.max(T.width,T.height))+1:O.mipmaps!==void 0&&O.mipmaps.length>0?O.mipmaps.length:O.isCompressedTexture&&Array.isArray(O.image)?T.mipmaps.length:1}function H(O){const T=O.target;T.removeEventListener("dispose",H),X(T),T.isVideoTexture&&_.delete(T)}function I(O){const T=O.target;T.removeEventListener("dispose",I),C(T)}function X(O){const T=s.get(O);if(T.__webglInit===void 0)return;const et=O.source,ut=x.get(et);if(ut){const dt=ut[T.__cacheKey];dt.usedTimes--,dt.usedTimes===0&&U(O),Object.keys(ut).length===0&&x.delete(et)}s.remove(O)}function U(O){const T=s.get(O);o.deleteTexture(T.__webglTexture);const et=O.source,ut=x.get(et);delete ut[T.__cacheKey],h.memory.textures--}function C(O){const T=s.get(O);if(O.depthTexture&&(O.depthTexture.dispose(),s.remove(O.depthTexture)),O.isWebGLCubeRenderTarget)for(let ut=0;ut<6;ut++){if(Array.isArray(T.__webglFramebuffer[ut]))for(let dt=0;dt<T.__webglFramebuffer[ut].length;dt++)o.deleteFramebuffer(T.__webglFramebuffer[ut][dt]);else o.deleteFramebuffer(T.__webglFramebuffer[ut]);T.__webglDepthbuffer&&o.deleteRenderbuffer(T.__webglDepthbuffer[ut])}else{if(Array.isArray(T.__webglFramebuffer))for(let ut=0;ut<T.__webglFramebuffer.length;ut++)o.deleteFramebuffer(T.__webglFramebuffer[ut]);else o.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&o.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&o.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let ut=0;ut<T.__webglColorRenderbuffer.length;ut++)T.__webglColorRenderbuffer[ut]&&o.deleteRenderbuffer(T.__webglColorRenderbuffer[ut]);T.__webglDepthRenderbuffer&&o.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const et=O.textures;for(let ut=0,dt=et.length;ut<dt;ut++){const ot=s.get(et[ut]);ot.__webglTexture&&(o.deleteTexture(ot.__webglTexture),h.memory.textures--),s.remove(et[ut])}s.remove(O)}let G=0;function lt(){G=0}function rt(){const O=G;return O>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+O+" texture units while this GPU supports only "+l.maxTextures),G+=1,O}function gt(O){const T=[];return T.push(O.wrapS),T.push(O.wrapT),T.push(O.wrapR||0),T.push(O.magFilter),T.push(O.minFilter),T.push(O.anisotropy),T.push(O.internalFormat),T.push(O.format),T.push(O.type),T.push(O.generateMipmaps),T.push(O.premultiplyAlpha),T.push(O.flipY),T.push(O.unpackAlignment),T.push(O.colorSpace),T.join()}function ht(O,T){const et=s.get(O);if(O.isVideoTexture&&Yt(O),O.isRenderTargetTexture===!1&&O.version>0&&et.__version!==O.version){const ut=O.image;if(ut===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ut.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{yt(et,O,T);return}}i.bindTexture(o.TEXTURE_2D,et.__webglTexture,o.TEXTURE0+T)}function z(O,T){const et=s.get(O);if(O.version>0&&et.__version!==O.version){yt(et,O,T);return}i.bindTexture(o.TEXTURE_2D_ARRAY,et.__webglTexture,o.TEXTURE0+T)}function j(O,T){const et=s.get(O);if(O.version>0&&et.__version!==O.version){yt(et,O,T);return}i.bindTexture(o.TEXTURE_3D,et.__webglTexture,o.TEXTURE0+T)}function Y(O,T){const et=s.get(O);if(O.version>0&&et.__version!==O.version){At(et,O,T);return}i.bindTexture(o.TEXTURE_CUBE_MAP,et.__webglTexture,o.TEXTURE0+T)}const Mt={[Lh]:o.REPEAT,[Ss]:o.CLAMP_TO_EDGE,[Nh]:o.MIRRORED_REPEAT},L={[gi]:o.NEAREST,[DS]:o.NEAREST_MIPMAP_NEAREST,[Kl]:o.NEAREST_MIPMAP_LINEAR,[Ri]:o.LINEAR,[kf]:o.LINEAR_MIPMAP_NEAREST,[ys]:o.LINEAR_MIPMAP_LINEAR},$={[PS]:o.NEVER,[GS]:o.ALWAYS,[zS]:o.LESS,[S0]:o.LEQUAL,[IS]:o.EQUAL,[HS]:o.GEQUAL,[BS]:o.GREATER,[FS]:o.NOTEQUAL};function vt(O,T){if(T.type===na&&t.has("OES_texture_float_linear")===!1&&(T.magFilter===Ri||T.magFilter===kf||T.magFilter===Kl||T.magFilter===ys||T.minFilter===Ri||T.minFilter===kf||T.minFilter===Kl||T.minFilter===ys)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(O,o.TEXTURE_WRAP_S,Mt[T.wrapS]),o.texParameteri(O,o.TEXTURE_WRAP_T,Mt[T.wrapT]),(O===o.TEXTURE_3D||O===o.TEXTURE_2D_ARRAY)&&o.texParameteri(O,o.TEXTURE_WRAP_R,Mt[T.wrapR]),o.texParameteri(O,o.TEXTURE_MAG_FILTER,L[T.magFilter]),o.texParameteri(O,o.TEXTURE_MIN_FILTER,L[T.minFilter]),T.compareFunction&&(o.texParameteri(O,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(O,o.TEXTURE_COMPARE_FUNC,$[T.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===gi||T.minFilter!==Kl&&T.minFilter!==ys||T.type===na&&t.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||s.get(T).__currentAnisotropy){const et=t.get("EXT_texture_filter_anisotropic");o.texParameterf(O,et.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,l.getMaxAnisotropy())),s.get(T).__currentAnisotropy=T.anisotropy}}}function St(O,T){let et=!1;O.__webglInit===void 0&&(O.__webglInit=!0,T.addEventListener("dispose",H));const ut=T.source;let dt=x.get(ut);dt===void 0&&(dt={},x.set(ut,dt));const ot=gt(T);if(ot!==O.__cacheKey){dt[ot]===void 0&&(dt[ot]={texture:o.createTexture(),usedTimes:0},h.memory.textures++,et=!0),dt[ot].usedTimes++;const Ot=dt[O.__cacheKey];Ot!==void 0&&(dt[O.__cacheKey].usedTimes--,Ot.usedTimes===0&&U(T)),O.__cacheKey=ot,O.__webglTexture=dt[ot].texture}return et}function Q(O,T,et){return Math.floor(Math.floor(O/et)/T)}function pt(O,T,et,ut){const ot=O.updateRanges;if(ot.length===0)i.texSubImage2D(o.TEXTURE_2D,0,0,0,T.width,T.height,et,ut,T.data);else{ot.sort((xt,Pt)=>xt.start-Pt.start);let Ot=0;for(let xt=1;xt<ot.length;xt++){const Pt=ot[Ot],Wt=ot[xt],qt=Pt.start+Pt.count,Rt=Q(Wt.start,T.width,4),ne=Q(Pt.start,T.width,4);Wt.start<=qt+1&&Rt===ne&&Q(Wt.start+Wt.count-1,T.width,4)===Rt?Pt.count=Math.max(Pt.count,Wt.start+Wt.count-Pt.start):(++Ot,ot[Ot]=Wt)}ot.length=Ot+1;const Dt=o.getParameter(o.UNPACK_ROW_LENGTH),Ht=o.getParameter(o.UNPACK_SKIP_PIXELS),Vt=o.getParameter(o.UNPACK_SKIP_ROWS);o.pixelStorei(o.UNPACK_ROW_LENGTH,T.width);for(let xt=0,Pt=ot.length;xt<Pt;xt++){const Wt=ot[xt],qt=Math.floor(Wt.start/4),Rt=Math.ceil(Wt.count/4),ne=qt%T.width,k=Math.floor(qt/T.width),Ut=Rt,Et=1;o.pixelStorei(o.UNPACK_SKIP_PIXELS,ne),o.pixelStorei(o.UNPACK_SKIP_ROWS,k),i.texSubImage2D(o.TEXTURE_2D,0,ne,k,Ut,Et,et,ut,T.data)}O.clearUpdateRanges(),o.pixelStorei(o.UNPACK_ROW_LENGTH,Dt),o.pixelStorei(o.UNPACK_SKIP_PIXELS,Ht),o.pixelStorei(o.UNPACK_SKIP_ROWS,Vt)}}function yt(O,T,et){let ut=o.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(ut=o.TEXTURE_2D_ARRAY),T.isData3DTexture&&(ut=o.TEXTURE_3D);const dt=St(O,T),ot=T.source;i.bindTexture(ut,O.__webglTexture,o.TEXTURE0+et);const Ot=s.get(ot);if(ot.version!==Ot.__version||dt===!0){i.activeTexture(o.TEXTURE0+et);const Dt=Te.getPrimaries(Te.workingColorSpace),Ht=T.colorSpace===Ga?null:Te.getPrimaries(T.colorSpace),Vt=T.colorSpace===Ga||Dt===Ht?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,T.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,T.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Vt);let xt=R(T.image,!1,l.maxTextureSize);xt=ie(T,xt);const Pt=u.convert(T.format,T.colorSpace),Wt=u.convert(T.type);let qt=D(T.internalFormat,Pt,Wt,T.colorSpace,T.isVideoTexture);vt(ut,T);let Rt;const ne=T.mipmaps,k=T.isVideoTexture!==!0,Ut=Ot.__version===void 0||dt===!0,Et=ot.dataReady,zt=B(T,xt);if(T.isDepthTexture)qt=w(T.format===Oo,T.type),Ut&&(k?i.texStorage2D(o.TEXTURE_2D,1,qt,xt.width,xt.height):i.texImage2D(o.TEXTURE_2D,0,qt,xt.width,xt.height,0,Pt,Wt,null));else if(T.isDataTexture)if(ne.length>0){k&&Ut&&i.texStorage2D(o.TEXTURE_2D,zt,qt,ne[0].width,ne[0].height);for(let bt=0,_t=ne.length;bt<_t;bt++)Rt=ne[bt],k?Et&&i.texSubImage2D(o.TEXTURE_2D,bt,0,0,Rt.width,Rt.height,Pt,Wt,Rt.data):i.texImage2D(o.TEXTURE_2D,bt,qt,Rt.width,Rt.height,0,Pt,Wt,Rt.data);T.generateMipmaps=!1}else k?(Ut&&i.texStorage2D(o.TEXTURE_2D,zt,qt,xt.width,xt.height),Et&&pt(T,xt,Pt,Wt)):i.texImage2D(o.TEXTURE_2D,0,qt,xt.width,xt.height,0,Pt,Wt,xt.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){k&&Ut&&i.texStorage3D(o.TEXTURE_2D_ARRAY,zt,qt,ne[0].width,ne[0].height,xt.depth);for(let bt=0,_t=ne.length;bt<_t;bt++)if(Rt=ne[bt],T.format!==mi)if(Pt!==null)if(k){if(Et)if(T.layerUpdates.size>0){const Bt=Pg(Rt.width,Rt.height,T.format,T.type);for(const ee of T.layerUpdates){const we=Rt.data.subarray(ee*Bt/Rt.data.BYTES_PER_ELEMENT,(ee+1)*Bt/Rt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,bt,0,0,ee,Rt.width,Rt.height,1,Pt,we)}T.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,bt,0,0,0,Rt.width,Rt.height,xt.depth,Pt,Rt.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,bt,qt,Rt.width,Rt.height,xt.depth,0,Rt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else k?Et&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,bt,0,0,0,Rt.width,Rt.height,xt.depth,Pt,Wt,Rt.data):i.texImage3D(o.TEXTURE_2D_ARRAY,bt,qt,Rt.width,Rt.height,xt.depth,0,Pt,Wt,Rt.data)}else{k&&Ut&&i.texStorage2D(o.TEXTURE_2D,zt,qt,ne[0].width,ne[0].height);for(let bt=0,_t=ne.length;bt<_t;bt++)Rt=ne[bt],T.format!==mi?Pt!==null?k?Et&&i.compressedTexSubImage2D(o.TEXTURE_2D,bt,0,0,Rt.width,Rt.height,Pt,Rt.data):i.compressedTexImage2D(o.TEXTURE_2D,bt,qt,Rt.width,Rt.height,0,Rt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):k?Et&&i.texSubImage2D(o.TEXTURE_2D,bt,0,0,Rt.width,Rt.height,Pt,Wt,Rt.data):i.texImage2D(o.TEXTURE_2D,bt,qt,Rt.width,Rt.height,0,Pt,Wt,Rt.data)}else if(T.isDataArrayTexture)if(k){if(Ut&&i.texStorage3D(o.TEXTURE_2D_ARRAY,zt,qt,xt.width,xt.height,xt.depth),Et)if(T.layerUpdates.size>0){const bt=Pg(xt.width,xt.height,T.format,T.type);for(const _t of T.layerUpdates){const Bt=xt.data.subarray(_t*bt/xt.data.BYTES_PER_ELEMENT,(_t+1)*bt/xt.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,_t,xt.width,xt.height,1,Pt,Wt,Bt)}T.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,xt.width,xt.height,xt.depth,Pt,Wt,xt.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,qt,xt.width,xt.height,xt.depth,0,Pt,Wt,xt.data);else if(T.isData3DTexture)k?(Ut&&i.texStorage3D(o.TEXTURE_3D,zt,qt,xt.width,xt.height,xt.depth),Et&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,xt.width,xt.height,xt.depth,Pt,Wt,xt.data)):i.texImage3D(o.TEXTURE_3D,0,qt,xt.width,xt.height,xt.depth,0,Pt,Wt,xt.data);else if(T.isFramebufferTexture){if(Ut)if(k)i.texStorage2D(o.TEXTURE_2D,zt,qt,xt.width,xt.height);else{let bt=xt.width,_t=xt.height;for(let Bt=0;Bt<zt;Bt++)i.texImage2D(o.TEXTURE_2D,Bt,qt,bt,_t,0,Pt,Wt,null),bt>>=1,_t>>=1}}else if(ne.length>0){if(k&&Ut){const bt=Qe(ne[0]);i.texStorage2D(o.TEXTURE_2D,zt,qt,bt.width,bt.height)}for(let bt=0,_t=ne.length;bt<_t;bt++)Rt=ne[bt],k?Et&&i.texSubImage2D(o.TEXTURE_2D,bt,0,0,Pt,Wt,Rt):i.texImage2D(o.TEXTURE_2D,bt,qt,Pt,Wt,Rt);T.generateMipmaps=!1}else if(k){if(Ut){const bt=Qe(xt);i.texStorage2D(o.TEXTURE_2D,zt,qt,bt.width,bt.height)}Et&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Pt,Wt,xt)}else i.texImage2D(o.TEXTURE_2D,0,qt,Pt,Wt,xt);S(T)&&g(ut),Ot.__version=ot.version,T.onUpdate&&T.onUpdate(T)}O.__version=T.version}function At(O,T,et){if(T.image.length!==6)return;const ut=St(O,T),dt=T.source;i.bindTexture(o.TEXTURE_CUBE_MAP,O.__webglTexture,o.TEXTURE0+et);const ot=s.get(dt);if(dt.version!==ot.__version||ut===!0){i.activeTexture(o.TEXTURE0+et);const Ot=Te.getPrimaries(Te.workingColorSpace),Dt=T.colorSpace===Ga?null:Te.getPrimaries(T.colorSpace),Ht=T.colorSpace===Ga||Ot===Dt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,T.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,T.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ht);const Vt=T.isCompressedTexture||T.image[0].isCompressedTexture,xt=T.image[0]&&T.image[0].isDataTexture,Pt=[];for(let _t=0;_t<6;_t++)!Vt&&!xt?Pt[_t]=R(T.image[_t],!0,l.maxCubemapSize):Pt[_t]=xt?T.image[_t].image:T.image[_t],Pt[_t]=ie(T,Pt[_t]);const Wt=Pt[0],qt=u.convert(T.format,T.colorSpace),Rt=u.convert(T.type),ne=D(T.internalFormat,qt,Rt,T.colorSpace),k=T.isVideoTexture!==!0,Ut=ot.__version===void 0||ut===!0,Et=dt.dataReady;let zt=B(T,Wt);vt(o.TEXTURE_CUBE_MAP,T);let bt;if(Vt){k&&Ut&&i.texStorage2D(o.TEXTURE_CUBE_MAP,zt,ne,Wt.width,Wt.height);for(let _t=0;_t<6;_t++){bt=Pt[_t].mipmaps;for(let Bt=0;Bt<bt.length;Bt++){const ee=bt[Bt];T.format!==mi?qt!==null?k?Et&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Bt,0,0,ee.width,ee.height,qt,ee.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Bt,ne,ee.width,ee.height,0,ee.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?Et&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Bt,0,0,ee.width,ee.height,qt,Rt,ee.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Bt,ne,ee.width,ee.height,0,qt,Rt,ee.data)}}}else{if(bt=T.mipmaps,k&&Ut){bt.length>0&&zt++;const _t=Qe(Pt[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,zt,ne,_t.width,_t.height)}for(let _t=0;_t<6;_t++)if(xt){k?Et&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,Pt[_t].width,Pt[_t].height,qt,Rt,Pt[_t].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,ne,Pt[_t].width,Pt[_t].height,0,qt,Rt,Pt[_t].data);for(let Bt=0;Bt<bt.length;Bt++){const we=bt[Bt].image[_t].image;k?Et&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Bt+1,0,0,we.width,we.height,qt,Rt,we.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Bt+1,ne,we.width,we.height,0,qt,Rt,we.data)}}else{k?Et&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,qt,Rt,Pt[_t]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,ne,qt,Rt,Pt[_t]);for(let Bt=0;Bt<bt.length;Bt++){const ee=bt[Bt];k?Et&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Bt+1,0,0,qt,Rt,ee.image[_t]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Bt+1,ne,qt,Rt,ee.image[_t])}}}S(T)&&g(o.TEXTURE_CUBE_MAP),ot.__version=dt.version,T.onUpdate&&T.onUpdate(T)}O.__version=T.version}function Ct(O,T,et,ut,dt,ot){const Ot=u.convert(et.format,et.colorSpace),Dt=u.convert(et.type),Ht=D(et.internalFormat,Ot,Dt,et.colorSpace),Vt=s.get(T),xt=s.get(et);if(xt.__renderTarget=T,!Vt.__hasExternalTextures){const Pt=Math.max(1,T.width>>ot),Wt=Math.max(1,T.height>>ot);dt===o.TEXTURE_3D||dt===o.TEXTURE_2D_ARRAY?i.texImage3D(dt,ot,Ht,Pt,Wt,T.depth,0,Ot,Dt,null):i.texImage2D(dt,ot,Ht,Pt,Wt,0,Ot,Dt,null)}i.bindFramebuffer(o.FRAMEBUFFER,O),ve(T)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,ut,dt,xt.__webglTexture,0,Gt(T)):(dt===o.TEXTURE_2D||dt>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&dt<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,ut,dt,xt.__webglTexture,ot),i.bindFramebuffer(o.FRAMEBUFFER,null)}function oe(O,T,et){if(o.bindRenderbuffer(o.RENDERBUFFER,O),T.depthBuffer){const ut=T.depthTexture,dt=ut&&ut.isDepthTexture?ut.type:null,ot=w(T.stencilBuffer,dt),Ot=T.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Dt=Gt(T);ve(T)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Dt,ot,T.width,T.height):et?o.renderbufferStorageMultisample(o.RENDERBUFFER,Dt,ot,T.width,T.height):o.renderbufferStorage(o.RENDERBUFFER,ot,T.width,T.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Ot,o.RENDERBUFFER,O)}else{const ut=T.textures;for(let dt=0;dt<ut.length;dt++){const ot=ut[dt],Ot=u.convert(ot.format,ot.colorSpace),Dt=u.convert(ot.type),Ht=D(ot.internalFormat,Ot,Dt,ot.colorSpace),Vt=Gt(T);et&&ve(T)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,Vt,Ht,T.width,T.height):ve(T)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Vt,Ht,T.width,T.height):o.renderbufferStorage(o.RENDERBUFFER,Ht,T.width,T.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Kt(O,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(o.FRAMEBUFFER,O),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ut=s.get(T.depthTexture);ut.__renderTarget=T,(!ut.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),ht(T.depthTexture,0);const dt=ut.__webglTexture,ot=Gt(T);if(T.depthTexture.format===No)ve(T)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,dt,0,ot):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,dt,0);else if(T.depthTexture.format===Oo)ve(T)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,dt,0,ot):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,dt,0);else throw new Error("Unknown depthTexture format")}function Le(O){const T=s.get(O),et=O.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==O.depthTexture){const ut=O.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),ut){const dt=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,ut.removeEventListener("dispose",dt)};ut.addEventListener("dispose",dt),T.__depthDisposeCallback=dt}T.__boundDepthTexture=ut}if(O.depthTexture&&!T.__autoAllocateDepthBuffer){if(et)throw new Error("target.depthTexture not supported in Cube render targets");const ut=O.texture.mipmaps;ut&&ut.length>0?Kt(T.__webglFramebuffer[0],O):Kt(T.__webglFramebuffer,O)}else if(et){T.__webglDepthbuffer=[];for(let ut=0;ut<6;ut++)if(i.bindFramebuffer(o.FRAMEBUFFER,T.__webglFramebuffer[ut]),T.__webglDepthbuffer[ut]===void 0)T.__webglDepthbuffer[ut]=o.createRenderbuffer(),oe(T.__webglDepthbuffer[ut],O,!1);else{const dt=O.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ot=T.__webglDepthbuffer[ut];o.bindRenderbuffer(o.RENDERBUFFER,ot),o.framebufferRenderbuffer(o.FRAMEBUFFER,dt,o.RENDERBUFFER,ot)}}else{const ut=O.texture.mipmaps;if(ut&&ut.length>0?i.bindFramebuffer(o.FRAMEBUFFER,T.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=o.createRenderbuffer(),oe(T.__webglDepthbuffer,O,!1);else{const dt=O.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ot=T.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,ot),o.framebufferRenderbuffer(o.FRAMEBUFFER,dt,o.RENDERBUFFER,ot)}}i.bindFramebuffer(o.FRAMEBUFFER,null)}function Fe(O,T,et){const ut=s.get(O);T!==void 0&&Ct(ut.__webglFramebuffer,O,O.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),et!==void 0&&Le(O)}function ge(O){const T=O.texture,et=s.get(O),ut=s.get(T);O.addEventListener("dispose",I);const dt=O.textures,ot=O.isWebGLCubeRenderTarget===!0,Ot=dt.length>1;if(Ot||(ut.__webglTexture===void 0&&(ut.__webglTexture=o.createTexture()),ut.__version=T.version,h.memory.textures++),ot){et.__webglFramebuffer=[];for(let Dt=0;Dt<6;Dt++)if(T.mipmaps&&T.mipmaps.length>0){et.__webglFramebuffer[Dt]=[];for(let Ht=0;Ht<T.mipmaps.length;Ht++)et.__webglFramebuffer[Dt][Ht]=o.createFramebuffer()}else et.__webglFramebuffer[Dt]=o.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){et.__webglFramebuffer=[];for(let Dt=0;Dt<T.mipmaps.length;Dt++)et.__webglFramebuffer[Dt]=o.createFramebuffer()}else et.__webglFramebuffer=o.createFramebuffer();if(Ot)for(let Dt=0,Ht=dt.length;Dt<Ht;Dt++){const Vt=s.get(dt[Dt]);Vt.__webglTexture===void 0&&(Vt.__webglTexture=o.createTexture(),h.memory.textures++)}if(O.samples>0&&ve(O)===!1){et.__webglMultisampledFramebuffer=o.createFramebuffer(),et.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,et.__webglMultisampledFramebuffer);for(let Dt=0;Dt<dt.length;Dt++){const Ht=dt[Dt];et.__webglColorRenderbuffer[Dt]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,et.__webglColorRenderbuffer[Dt]);const Vt=u.convert(Ht.format,Ht.colorSpace),xt=u.convert(Ht.type),Pt=D(Ht.internalFormat,Vt,xt,Ht.colorSpace,O.isXRRenderTarget===!0),Wt=Gt(O);o.renderbufferStorageMultisample(o.RENDERBUFFER,Wt,Pt,O.width,O.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Dt,o.RENDERBUFFER,et.__webglColorRenderbuffer[Dt])}o.bindRenderbuffer(o.RENDERBUFFER,null),O.depthBuffer&&(et.__webglDepthRenderbuffer=o.createRenderbuffer(),oe(et.__webglDepthRenderbuffer,O,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(ot){i.bindTexture(o.TEXTURE_CUBE_MAP,ut.__webglTexture),vt(o.TEXTURE_CUBE_MAP,T);for(let Dt=0;Dt<6;Dt++)if(T.mipmaps&&T.mipmaps.length>0)for(let Ht=0;Ht<T.mipmaps.length;Ht++)Ct(et.__webglFramebuffer[Dt][Ht],O,T,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,Ht);else Ct(et.__webglFramebuffer[Dt],O,T,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,0);S(T)&&g(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Ot){for(let Dt=0,Ht=dt.length;Dt<Ht;Dt++){const Vt=dt[Dt],xt=s.get(Vt);i.bindTexture(o.TEXTURE_2D,xt.__webglTexture),vt(o.TEXTURE_2D,Vt),Ct(et.__webglFramebuffer,O,Vt,o.COLOR_ATTACHMENT0+Dt,o.TEXTURE_2D,0),S(Vt)&&g(o.TEXTURE_2D)}i.unbindTexture()}else{let Dt=o.TEXTURE_2D;if((O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(Dt=O.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Dt,ut.__webglTexture),vt(Dt,T),T.mipmaps&&T.mipmaps.length>0)for(let Ht=0;Ht<T.mipmaps.length;Ht++)Ct(et.__webglFramebuffer[Ht],O,T,o.COLOR_ATTACHMENT0,Dt,Ht);else Ct(et.__webglFramebuffer,O,T,o.COLOR_ATTACHMENT0,Dt,0);S(T)&&g(Dt),i.unbindTexture()}O.depthBuffer&&Le(O)}function F(O){const T=O.textures;for(let et=0,ut=T.length;et<ut;et++){const dt=T[et];if(S(dt)){const ot=N(O),Ot=s.get(dt).__webglTexture;i.bindTexture(ot,Ot),g(ot),i.unbindTexture()}}}const xn=[],ye=[];function de(O){if(O.samples>0){if(ve(O)===!1){const T=O.textures,et=O.width,ut=O.height;let dt=o.COLOR_BUFFER_BIT;const ot=O.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Ot=s.get(O),Dt=T.length>1;if(Dt)for(let Vt=0;Vt<T.length;Vt++)i.bindFramebuffer(o.FRAMEBUFFER,Ot.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Vt,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,Ot.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Vt,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,Ot.__webglMultisampledFramebuffer);const Ht=O.texture.mipmaps;Ht&&Ht.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ot.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ot.__webglFramebuffer);for(let Vt=0;Vt<T.length;Vt++){if(O.resolveDepthBuffer&&(O.depthBuffer&&(dt|=o.DEPTH_BUFFER_BIT),O.stencilBuffer&&O.resolveStencilBuffer&&(dt|=o.STENCIL_BUFFER_BIT)),Dt){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Ot.__webglColorRenderbuffer[Vt]);const xt=s.get(T[Vt]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,xt,0)}o.blitFramebuffer(0,0,et,ut,0,0,et,ut,dt,o.NEAREST),m===!0&&(xn.length=0,ye.length=0,xn.push(o.COLOR_ATTACHMENT0+Vt),O.depthBuffer&&O.resolveDepthBuffer===!1&&(xn.push(ot),ye.push(ot),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,ye)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,xn))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Dt)for(let Vt=0;Vt<T.length;Vt++){i.bindFramebuffer(o.FRAMEBUFFER,Ot.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Vt,o.RENDERBUFFER,Ot.__webglColorRenderbuffer[Vt]);const xt=s.get(T[Vt]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,Ot.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Vt,o.TEXTURE_2D,xt,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ot.__webglMultisampledFramebuffer)}else if(O.depthBuffer&&O.resolveDepthBuffer===!1&&m){const T=O.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[T])}}}function Gt(O){return Math.min(l.maxSamples,O.samples)}function ve(O){const T=s.get(O);return O.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Yt(O){const T=h.render.frame;_.get(O)!==T&&(_.set(O,T),O.update())}function ie(O,T){const et=O.colorSpace,ut=O.format,dt=O.type;return O.isCompressedTexture===!0||O.isVideoTexture===!0||et!==Ar&&et!==Ga&&(Te.getTransfer(et)===Ie?(ut!==mi||dt!==Ci)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",et)),T}function Qe(O){return typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement?(p.width=O.naturalWidth||O.width,p.height=O.naturalHeight||O.height):typeof VideoFrame<"u"&&O instanceof VideoFrame?(p.width=O.displayWidth,p.height=O.displayHeight):(p.width=O.width,p.height=O.height),p}this.allocateTextureUnit=rt,this.resetTextureUnits=lt,this.setTexture2D=ht,this.setTexture2DArray=z,this.setTexture3D=j,this.setTextureCube=Y,this.rebindTextures=Fe,this.setupRenderTarget=ge,this.updateRenderTargetMipmap=F,this.updateMultisampleRenderTarget=de,this.setupDepthRenderbuffer=Le,this.setupFrameBufferTexture=Ct,this.useMultisampledRTT=ve}function uA(o,t){function i(s,l=Ga){let u;const h=Te.getTransfer(l);if(s===Ci)return o.UNSIGNED_BYTE;if(s===hd)return o.UNSIGNED_SHORT_4_4_4_4;if(s===dd)return o.UNSIGNED_SHORT_5_5_5_1;if(s===p0)return o.UNSIGNED_INT_5_9_9_9_REV;if(s===h0)return o.BYTE;if(s===d0)return o.SHORT;if(s===Uo)return o.UNSIGNED_SHORT;if(s===fd)return o.INT;if(s===Ms)return o.UNSIGNED_INT;if(s===na)return o.FLOAT;if(s===Po)return o.HALF_FLOAT;if(s===m0)return o.ALPHA;if(s===_0)return o.RGB;if(s===mi)return o.RGBA;if(s===No)return o.DEPTH_COMPONENT;if(s===Oo)return o.DEPTH_STENCIL;if(s===g0)return o.RED;if(s===pd)return o.RED_INTEGER;if(s===v0)return o.RG;if(s===md)return o.RG_INTEGER;if(s===_d)return o.RGBA_INTEGER;if(s===yc||s===Mc||s===Ec||s===Tc)if(h===Ie)if(u=t.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(s===yc)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Mc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Ec)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Tc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=t.get("WEBGL_compressed_texture_s3tc"),u!==null){if(s===yc)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Mc)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Ec)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Tc)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Oh||s===Ph||s===zh||s===Ih)if(u=t.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(s===Oh)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Ph)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===zh)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Ih)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Bh||s===Fh||s===Hh)if(u=t.get("WEBGL_compressed_texture_etc"),u!==null){if(s===Bh||s===Fh)return h===Ie?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(s===Hh)return h===Ie?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Gh||s===Vh||s===kh||s===Xh||s===Wh||s===qh||s===Yh||s===Zh||s===jh||s===Kh||s===Qh||s===Jh||s===$h||s===td)if(u=t.get("WEBGL_compressed_texture_astc"),u!==null){if(s===Gh)return h===Ie?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Vh)return h===Ie?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===kh)return h===Ie?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Xh)return h===Ie?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Wh)return h===Ie?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===qh)return h===Ie?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Yh)return h===Ie?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Zh)return h===Ie?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===jh)return h===Ie?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Kh)return h===Ie?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Qh)return h===Ie?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Jh)return h===Ie?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===$h)return h===Ie?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===td)return h===Ie?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===bc||s===ed||s===nd)if(u=t.get("EXT_texture_compression_bptc"),u!==null){if(s===bc)return h===Ie?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===ed)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===nd)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===x0||s===id||s===ad||s===sd)if(u=t.get("EXT_texture_compression_rgtc"),u!==null){if(s===bc)return u.COMPRESSED_RED_RGTC1_EXT;if(s===id)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===ad)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===sd)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Lo?o.UNSIGNED_INT_24_8:o[s]!==void 0?o[s]:null}return{convert:i}}const fA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,hA=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class dA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i,s){if(this.texture===null){const l=new Vn,u=t.properties.get(l);u.__webglTexture=i.texture,(i.depthNear!==s.depthNear||i.depthFar!==s.depthFar)&&(this.depthNear=i.depthNear,this.depthFar=i.depthFar),this.texture=l}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,s=new Wa({vertexShader:fA,fragmentShader:hA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new aa(new Nc(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class pA extends bs{constructor(t,i){super();const s=this;let l=null,u=1,h=null,d="local-floor",m=1,p=null,_=null,v=null,x=null,M=null,E=null;const R=new dA,S=i.getContextAttributes();let g=null,N=null;const D=[],w=[],B=new re;let H=null;const I=new oi;I.viewport=new Ke;const X=new oi;X.viewport=new Ke;const U=[I,X],C=new Oy;let G=null,lt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let pt=D[Q];return pt===void 0&&(pt=new fh,D[Q]=pt),pt.getTargetRaySpace()},this.getControllerGrip=function(Q){let pt=D[Q];return pt===void 0&&(pt=new fh,D[Q]=pt),pt.getGripSpace()},this.getHand=function(Q){let pt=D[Q];return pt===void 0&&(pt=new fh,D[Q]=pt),pt.getHandSpace()};function rt(Q){const pt=w.indexOf(Q.inputSource);if(pt===-1)return;const yt=D[pt];yt!==void 0&&(yt.update(Q.inputSource,Q.frame,p||h),yt.dispatchEvent({type:Q.type,data:Q.inputSource}))}function gt(){l.removeEventListener("select",rt),l.removeEventListener("selectstart",rt),l.removeEventListener("selectend",rt),l.removeEventListener("squeeze",rt),l.removeEventListener("squeezestart",rt),l.removeEventListener("squeezeend",rt),l.removeEventListener("end",gt),l.removeEventListener("inputsourceschange",ht);for(let Q=0;Q<D.length;Q++){const pt=w[Q];pt!==null&&(w[Q]=null,D[Q].disconnect(pt))}G=null,lt=null,R.reset(),t.setRenderTarget(g),M=null,x=null,v=null,l=null,N=null,St.stop(),s.isPresenting=!1,t.setPixelRatio(H),t.setSize(B.width,B.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){u=Q,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){d=Q,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||h},this.setReferenceSpace=function(Q){p=Q},this.getBaseLayer=function(){return x!==null?x:M},this.getBinding=function(){return v},this.getFrame=function(){return E},this.getSession=function(){return l},this.setSession=async function(Q){if(l=Q,l!==null){if(g=t.getRenderTarget(),l.addEventListener("select",rt),l.addEventListener("selectstart",rt),l.addEventListener("selectend",rt),l.addEventListener("squeeze",rt),l.addEventListener("squeezestart",rt),l.addEventListener("squeezeend",rt),l.addEventListener("end",gt),l.addEventListener("inputsourceschange",ht),S.xrCompatible!==!0&&await i.makeXRCompatible(),H=t.getPixelRatio(),t.getSize(B),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let yt=null,At=null,Ct=null;S.depth&&(Ct=S.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,yt=S.stencil?Oo:No,At=S.stencil?Lo:Ms);const oe={colorFormat:i.RGBA8,depthFormat:Ct,scaleFactor:u};v=new XRWebGLBinding(l,i),x=v.createProjectionLayer(oe),l.updateRenderState({layers:[x]}),t.setPixelRatio(1),t.setSize(x.textureWidth,x.textureHeight,!1),N=new Ts(x.textureWidth,x.textureHeight,{format:mi,type:Ci,depthTexture:new L0(x.textureWidth,x.textureHeight,At,void 0,void 0,void 0,void 0,void 0,void 0,yt),stencilBuffer:S.stencil,colorSpace:t.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}else{const yt={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:u};M=new XRWebGLLayer(l,i,yt),l.updateRenderState({baseLayer:M}),t.setPixelRatio(1),t.setSize(M.framebufferWidth,M.framebufferHeight,!1),N=new Ts(M.framebufferWidth,M.framebufferHeight,{format:mi,type:Ci,colorSpace:t.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}N.isXRRenderTarget=!0,this.setFoveation(m),p=null,h=await l.requestReferenceSpace(d),St.setContext(l),St.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return R.getDepthTexture()};function ht(Q){for(let pt=0;pt<Q.removed.length;pt++){const yt=Q.removed[pt],At=w.indexOf(yt);At>=0&&(w[At]=null,D[At].disconnect(yt))}for(let pt=0;pt<Q.added.length;pt++){const yt=Q.added[pt];let At=w.indexOf(yt);if(At===-1){for(let oe=0;oe<D.length;oe++)if(oe>=w.length){w.push(yt),At=oe;break}else if(w[oe]===null){w[oe]=yt,At=oe;break}if(At===-1)break}const Ct=D[At];Ct&&Ct.connect(yt)}}const z=new tt,j=new tt;function Y(Q,pt,yt){z.setFromMatrixPosition(pt.matrixWorld),j.setFromMatrixPosition(yt.matrixWorld);const At=z.distanceTo(j),Ct=pt.projectionMatrix.elements,oe=yt.projectionMatrix.elements,Kt=Ct[14]/(Ct[10]-1),Le=Ct[14]/(Ct[10]+1),Fe=(Ct[9]+1)/Ct[5],ge=(Ct[9]-1)/Ct[5],F=(Ct[8]-1)/Ct[0],xn=(oe[8]+1)/oe[0],ye=Kt*F,de=Kt*xn,Gt=At/(-F+xn),ve=Gt*-F;if(pt.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(ve),Q.translateZ(Gt),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),Ct[10]===-1)Q.projectionMatrix.copy(pt.projectionMatrix),Q.projectionMatrixInverse.copy(pt.projectionMatrixInverse);else{const Yt=Kt+Gt,ie=Le+Gt,Qe=ye-ve,O=de+(At-ve),T=Fe*Le/ie*Yt,et=ge*Le/ie*Yt;Q.projectionMatrix.makePerspective(Qe,O,T,et,Yt,ie),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function Mt(Q,pt){pt===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(pt.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(l===null)return;let pt=Q.near,yt=Q.far;R.texture!==null&&(R.depthNear>0&&(pt=R.depthNear),R.depthFar>0&&(yt=R.depthFar)),C.near=X.near=I.near=pt,C.far=X.far=I.far=yt,(G!==C.near||lt!==C.far)&&(l.updateRenderState({depthNear:C.near,depthFar:C.far}),G=C.near,lt=C.far),I.layers.mask=Q.layers.mask|2,X.layers.mask=Q.layers.mask|4,C.layers.mask=I.layers.mask|X.layers.mask;const At=Q.parent,Ct=C.cameras;Mt(C,At);for(let oe=0;oe<Ct.length;oe++)Mt(Ct[oe],At);Ct.length===2?Y(C,I,X):C.projectionMatrix.copy(I.projectionMatrix),L(Q,C,At)};function L(Q,pt,yt){yt===null?Q.matrix.copy(pt.matrixWorld):(Q.matrix.copy(yt.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(pt.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(pt.projectionMatrix),Q.projectionMatrixInverse.copy(pt.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=rd*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(x===null&&M===null))return m},this.setFoveation=function(Q){m=Q,x!==null&&(x.fixedFoveation=Q),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=Q)},this.hasDepthSensing=function(){return R.texture!==null},this.getDepthSensingMesh=function(){return R.getMesh(C)};let $=null;function vt(Q,pt){if(_=pt.getViewerPose(p||h),E=pt,_!==null){const yt=_.views;M!==null&&(t.setRenderTargetFramebuffer(N,M.framebuffer),t.setRenderTarget(N));let At=!1;yt.length!==C.cameras.length&&(C.cameras.length=0,At=!0);for(let Kt=0;Kt<yt.length;Kt++){const Le=yt[Kt];let Fe=null;if(M!==null)Fe=M.getViewport(Le);else{const F=v.getViewSubImage(x,Le);Fe=F.viewport,Kt===0&&(t.setRenderTargetTextures(N,F.colorTexture,F.depthStencilTexture),t.setRenderTarget(N))}let ge=U[Kt];ge===void 0&&(ge=new oi,ge.layers.enable(Kt),ge.viewport=new Ke,U[Kt]=ge),ge.matrix.fromArray(Le.transform.matrix),ge.matrix.decompose(ge.position,ge.quaternion,ge.scale),ge.projectionMatrix.fromArray(Le.projectionMatrix),ge.projectionMatrixInverse.copy(ge.projectionMatrix).invert(),ge.viewport.set(Fe.x,Fe.y,Fe.width,Fe.height),Kt===0&&(C.matrix.copy(ge.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),At===!0&&C.cameras.push(ge)}const Ct=l.enabledFeatures;if(Ct&&Ct.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&v){const Kt=v.getDepthInformation(yt[0]);Kt&&Kt.isValid&&Kt.texture&&R.init(t,Kt,l.renderState)}}for(let yt=0;yt<D.length;yt++){const At=w[yt],Ct=D[yt];At!==null&&Ct!==void 0&&Ct.update(At,pt,p||h)}$&&$(Q,pt),pt.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:pt}),E=null}const St=new P0;St.setAnimationLoop(vt),this.setAnimationLoop=function(Q){$=Q},this.dispose=function(){}}}const _s=new ra,mA=new Ye;function _A(o,t){function i(S,g){S.matrixAutoUpdate===!0&&S.updateMatrix(),g.value.copy(S.matrix)}function s(S,g){g.color.getRGB(S.fogColor.value,C0(o)),g.isFog?(S.fogNear.value=g.near,S.fogFar.value=g.far):g.isFogExp2&&(S.fogDensity.value=g.density)}function l(S,g,N,D,w){g.isMeshBasicMaterial||g.isMeshLambertMaterial?u(S,g):g.isMeshToonMaterial?(u(S,g),v(S,g)):g.isMeshPhongMaterial?(u(S,g),_(S,g)):g.isMeshStandardMaterial?(u(S,g),x(S,g),g.isMeshPhysicalMaterial&&M(S,g,w)):g.isMeshMatcapMaterial?(u(S,g),E(S,g)):g.isMeshDepthMaterial?u(S,g):g.isMeshDistanceMaterial?(u(S,g),R(S,g)):g.isMeshNormalMaterial?u(S,g):g.isLineBasicMaterial?(h(S,g),g.isLineDashedMaterial&&d(S,g)):g.isPointsMaterial?m(S,g,N,D):g.isSpriteMaterial?p(S,g):g.isShadowMaterial?(S.color.value.copy(g.color),S.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function u(S,g){S.opacity.value=g.opacity,g.color&&S.diffuse.value.copy(g.color),g.emissive&&S.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(S.map.value=g.map,i(g.map,S.mapTransform)),g.alphaMap&&(S.alphaMap.value=g.alphaMap,i(g.alphaMap,S.alphaMapTransform)),g.bumpMap&&(S.bumpMap.value=g.bumpMap,i(g.bumpMap,S.bumpMapTransform),S.bumpScale.value=g.bumpScale,g.side===Gn&&(S.bumpScale.value*=-1)),g.normalMap&&(S.normalMap.value=g.normalMap,i(g.normalMap,S.normalMapTransform),S.normalScale.value.copy(g.normalScale),g.side===Gn&&S.normalScale.value.negate()),g.displacementMap&&(S.displacementMap.value=g.displacementMap,i(g.displacementMap,S.displacementMapTransform),S.displacementScale.value=g.displacementScale,S.displacementBias.value=g.displacementBias),g.emissiveMap&&(S.emissiveMap.value=g.emissiveMap,i(g.emissiveMap,S.emissiveMapTransform)),g.specularMap&&(S.specularMap.value=g.specularMap,i(g.specularMap,S.specularMapTransform)),g.alphaTest>0&&(S.alphaTest.value=g.alphaTest);const N=t.get(g),D=N.envMap,w=N.envMapRotation;D&&(S.envMap.value=D,_s.copy(w),_s.x*=-1,_s.y*=-1,_s.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(_s.y*=-1,_s.z*=-1),S.envMapRotation.value.setFromMatrix4(mA.makeRotationFromEuler(_s)),S.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=g.reflectivity,S.ior.value=g.ior,S.refractionRatio.value=g.refractionRatio),g.lightMap&&(S.lightMap.value=g.lightMap,S.lightMapIntensity.value=g.lightMapIntensity,i(g.lightMap,S.lightMapTransform)),g.aoMap&&(S.aoMap.value=g.aoMap,S.aoMapIntensity.value=g.aoMapIntensity,i(g.aoMap,S.aoMapTransform))}function h(S,g){S.diffuse.value.copy(g.color),S.opacity.value=g.opacity,g.map&&(S.map.value=g.map,i(g.map,S.mapTransform))}function d(S,g){S.dashSize.value=g.dashSize,S.totalSize.value=g.dashSize+g.gapSize,S.scale.value=g.scale}function m(S,g,N,D){S.diffuse.value.copy(g.color),S.opacity.value=g.opacity,S.size.value=g.size*N,S.scale.value=D*.5,g.map&&(S.map.value=g.map,i(g.map,S.uvTransform)),g.alphaMap&&(S.alphaMap.value=g.alphaMap,i(g.alphaMap,S.alphaMapTransform)),g.alphaTest>0&&(S.alphaTest.value=g.alphaTest)}function p(S,g){S.diffuse.value.copy(g.color),S.opacity.value=g.opacity,S.rotation.value=g.rotation,g.map&&(S.map.value=g.map,i(g.map,S.mapTransform)),g.alphaMap&&(S.alphaMap.value=g.alphaMap,i(g.alphaMap,S.alphaMapTransform)),g.alphaTest>0&&(S.alphaTest.value=g.alphaTest)}function _(S,g){S.specular.value.copy(g.specular),S.shininess.value=Math.max(g.shininess,1e-4)}function v(S,g){g.gradientMap&&(S.gradientMap.value=g.gradientMap)}function x(S,g){S.metalness.value=g.metalness,g.metalnessMap&&(S.metalnessMap.value=g.metalnessMap,i(g.metalnessMap,S.metalnessMapTransform)),S.roughness.value=g.roughness,g.roughnessMap&&(S.roughnessMap.value=g.roughnessMap,i(g.roughnessMap,S.roughnessMapTransform)),g.envMap&&(S.envMapIntensity.value=g.envMapIntensity)}function M(S,g,N){S.ior.value=g.ior,g.sheen>0&&(S.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),S.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(S.sheenColorMap.value=g.sheenColorMap,i(g.sheenColorMap,S.sheenColorMapTransform)),g.sheenRoughnessMap&&(S.sheenRoughnessMap.value=g.sheenRoughnessMap,i(g.sheenRoughnessMap,S.sheenRoughnessMapTransform))),g.clearcoat>0&&(S.clearcoat.value=g.clearcoat,S.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(S.clearcoatMap.value=g.clearcoatMap,i(g.clearcoatMap,S.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,i(g.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(S.clearcoatNormalMap.value=g.clearcoatNormalMap,i(g.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Gn&&S.clearcoatNormalScale.value.negate())),g.dispersion>0&&(S.dispersion.value=g.dispersion),g.iridescence>0&&(S.iridescence.value=g.iridescence,S.iridescenceIOR.value=g.iridescenceIOR,S.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(S.iridescenceMap.value=g.iridescenceMap,i(g.iridescenceMap,S.iridescenceMapTransform)),g.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=g.iridescenceThicknessMap,i(g.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),g.transmission>0&&(S.transmission.value=g.transmission,S.transmissionSamplerMap.value=N.texture,S.transmissionSamplerSize.value.set(N.width,N.height),g.transmissionMap&&(S.transmissionMap.value=g.transmissionMap,i(g.transmissionMap,S.transmissionMapTransform)),S.thickness.value=g.thickness,g.thicknessMap&&(S.thicknessMap.value=g.thicknessMap,i(g.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=g.attenuationDistance,S.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(S.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(S.anisotropyMap.value=g.anisotropyMap,i(g.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=g.specularIntensity,S.specularColor.value.copy(g.specularColor),g.specularColorMap&&(S.specularColorMap.value=g.specularColorMap,i(g.specularColorMap,S.specularColorMapTransform)),g.specularIntensityMap&&(S.specularIntensityMap.value=g.specularIntensityMap,i(g.specularIntensityMap,S.specularIntensityMapTransform))}function E(S,g){g.matcap&&(S.matcap.value=g.matcap)}function R(S,g){const N=t.get(g).light;S.referencePosition.value.setFromMatrixPosition(N.matrixWorld),S.nearDistance.value=N.shadow.camera.near,S.farDistance.value=N.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function gA(o,t,i,s){let l={},u={},h=[];const d=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function m(N,D){const w=D.program;s.uniformBlockBinding(N,w)}function p(N,D){let w=l[N.id];w===void 0&&(E(N),w=_(N),l[N.id]=w,N.addEventListener("dispose",S));const B=D.program;s.updateUBOMapping(N,B);const H=t.render.frame;u[N.id]!==H&&(x(N),u[N.id]=H)}function _(N){const D=v();N.__bindingPointIndex=D;const w=o.createBuffer(),B=N.__size,H=N.usage;return o.bindBuffer(o.UNIFORM_BUFFER,w),o.bufferData(o.UNIFORM_BUFFER,B,H),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,D,w),w}function v(){for(let N=0;N<d;N++)if(h.indexOf(N)===-1)return h.push(N),N;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(N){const D=l[N.id],w=N.uniforms,B=N.__cache;o.bindBuffer(o.UNIFORM_BUFFER,D);for(let H=0,I=w.length;H<I;H++){const X=Array.isArray(w[H])?w[H]:[w[H]];for(let U=0,C=X.length;U<C;U++){const G=X[U];if(M(G,H,U,B)===!0){const lt=G.__offset,rt=Array.isArray(G.value)?G.value:[G.value];let gt=0;for(let ht=0;ht<rt.length;ht++){const z=rt[ht],j=R(z);typeof z=="number"||typeof z=="boolean"?(G.__data[0]=z,o.bufferSubData(o.UNIFORM_BUFFER,lt+gt,G.__data)):z.isMatrix3?(G.__data[0]=z.elements[0],G.__data[1]=z.elements[1],G.__data[2]=z.elements[2],G.__data[3]=0,G.__data[4]=z.elements[3],G.__data[5]=z.elements[4],G.__data[6]=z.elements[5],G.__data[7]=0,G.__data[8]=z.elements[6],G.__data[9]=z.elements[7],G.__data[10]=z.elements[8],G.__data[11]=0):(z.toArray(G.__data,gt),gt+=j.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,lt,G.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function M(N,D,w,B){const H=N.value,I=D+"_"+w;if(B[I]===void 0)return typeof H=="number"||typeof H=="boolean"?B[I]=H:B[I]=H.clone(),!0;{const X=B[I];if(typeof H=="number"||typeof H=="boolean"){if(X!==H)return B[I]=H,!0}else if(X.equals(H)===!1)return X.copy(H),!0}return!1}function E(N){const D=N.uniforms;let w=0;const B=16;for(let I=0,X=D.length;I<X;I++){const U=Array.isArray(D[I])?D[I]:[D[I]];for(let C=0,G=U.length;C<G;C++){const lt=U[C],rt=Array.isArray(lt.value)?lt.value:[lt.value];for(let gt=0,ht=rt.length;gt<ht;gt++){const z=rt[gt],j=R(z),Y=w%B,Mt=Y%j.boundary,L=Y+Mt;w+=Mt,L!==0&&B-L<j.storage&&(w+=B-L),lt.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),lt.__offset=w,w+=j.storage}}}const H=w%B;return H>0&&(w+=B-H),N.__size=w,N.__cache={},this}function R(N){const D={boundary:0,storage:0};return typeof N=="number"||typeof N=="boolean"?(D.boundary=4,D.storage=4):N.isVector2?(D.boundary=8,D.storage=8):N.isVector3||N.isColor?(D.boundary=16,D.storage=12):N.isVector4?(D.boundary=16,D.storage=16):N.isMatrix3?(D.boundary=48,D.storage=48):N.isMatrix4?(D.boundary=64,D.storage=64):N.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",N),D}function S(N){const D=N.target;D.removeEventListener("dispose",S);const w=h.indexOf(D.__bindingPointIndex);h.splice(w,1),o.deleteBuffer(l[D.id]),delete l[D.id],delete u[D.id]}function g(){for(const N in l)o.deleteBuffer(l[N]);h=[],l={},u={}}return{bind:m,update:p,dispose:g}}class vA{constructor(t={}){const{canvas:i=XS(),context:s=null,depth:l=!0,stencil:u=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:v=!1,reverseDepthBuffer:x=!1}=t;this.isWebGLRenderer=!0;let M;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=s.getContextAttributes().alpha}else M=h;const E=new Uint32Array(4),R=new Int32Array(4);let S=null,g=null;const N=[],D=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ka,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const w=this;let B=!1;this._outputColorSpace=Nn;let H=0,I=0,X=null,U=-1,C=null;const G=new Ke,lt=new Ke;let rt=null;const gt=new be(0);let ht=0,z=i.width,j=i.height,Y=1,Mt=null,L=null;const $=new Ke(0,0,z,j),vt=new Ke(0,0,z,j);let St=!1;const Q=new xd;let pt=!1,yt=!1;const At=new Ye,Ct=new Ye,oe=new tt,Kt=new Ke,Le={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Fe=!1;function ge(){return X===null?Y:1}let F=s;function xn(A,q){return i.getContext(A,q)}try{const A={alpha:!0,depth:l,stencil:u,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:_,failIfMajorPerformanceCaveat:v};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${ud}`),i.addEventListener("webglcontextlost",zt,!1),i.addEventListener("webglcontextrestored",bt,!1),i.addEventListener("webglcontextcreationerror",_t,!1),F===null){const q="webgl2";if(F=xn(q,A),F===null)throw xn(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let ye,de,Gt,ve,Yt,ie,Qe,O,T,et,ut,dt,ot,Ot,Dt,Ht,Vt,xt,Pt,Wt,qt,Rt,ne,k;function Ut(){ye=new CT(F),ye.init(),Rt=new uA(F,ye),de=new yT(F,ye,t,Rt),Gt=new lA(F,ye),de.reverseDepthBuffer&&x&&Gt.buffers.depth.setReversed(!0),ve=new UT(F),Yt=new jb,ie=new cA(F,ye,Gt,Yt,de,Rt,ve),Qe=new ET(w),O=new RT(w),T=new Iy(F),ne=new xT(F,T),et=new wT(F,T,ve,ne),ut=new NT(F,et,T,ve),Pt=new LT(F,de,ie),Ht=new MT(Yt),dt=new Zb(w,Qe,O,ye,de,ne,Ht),ot=new _A(w,Yt),Ot=new Qb,Dt=new iA(ye),xt=new vT(w,Qe,O,Gt,ut,M,m),Vt=new rA(w,ut,de),k=new gA(F,ve,de,Gt),Wt=new ST(F,ye,ve),qt=new DT(F,ye,ve),ve.programs=dt.programs,w.capabilities=de,w.extensions=ye,w.properties=Yt,w.renderLists=Ot,w.shadowMap=Vt,w.state=Gt,w.info=ve}Ut();const Et=new pA(w,F);this.xr=Et,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const A=ye.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=ye.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(A){A!==void 0&&(Y=A,this.setSize(z,j,!1))},this.getSize=function(A){return A.set(z,j)},this.setSize=function(A,q,at=!0){if(Et.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=A,j=q,i.width=Math.floor(A*Y),i.height=Math.floor(q*Y),at===!0&&(i.style.width=A+"px",i.style.height=q+"px"),this.setViewport(0,0,A,q)},this.getDrawingBufferSize=function(A){return A.set(z*Y,j*Y).floor()},this.setDrawingBufferSize=function(A,q,at){z=A,j=q,Y=at,i.width=Math.floor(A*at),i.height=Math.floor(q*at),this.setViewport(0,0,A,q)},this.getCurrentViewport=function(A){return A.copy(G)},this.getViewport=function(A){return A.copy($)},this.setViewport=function(A,q,at,st){A.isVector4?$.set(A.x,A.y,A.z,A.w):$.set(A,q,at,st),Gt.viewport(G.copy($).multiplyScalar(Y).round())},this.getScissor=function(A){return A.copy(vt)},this.setScissor=function(A,q,at,st){A.isVector4?vt.set(A.x,A.y,A.z,A.w):vt.set(A,q,at,st),Gt.scissor(lt.copy(vt).multiplyScalar(Y).round())},this.getScissorTest=function(){return St},this.setScissorTest=function(A){Gt.setScissorTest(St=A)},this.setOpaqueSort=function(A){Mt=A},this.setTransparentSort=function(A){L=A},this.getClearColor=function(A){return A.copy(xt.getClearColor())},this.setClearColor=function(){xt.setClearColor(...arguments)},this.getClearAlpha=function(){return xt.getClearAlpha()},this.setClearAlpha=function(){xt.setClearAlpha(...arguments)},this.clear=function(A=!0,q=!0,at=!0){let st=0;if(A){let Z=!1;if(X!==null){const Tt=X.texture.format;Z=Tt===_d||Tt===md||Tt===pd}if(Z){const Tt=X.texture.type,wt=Tt===Ci||Tt===Ms||Tt===Uo||Tt===Lo||Tt===hd||Tt===dd,Nt=xt.getClearColor(),It=xt.getClearAlpha(),$t=Nt.r,jt=Nt.g,kt=Nt.b;wt?(E[0]=$t,E[1]=jt,E[2]=kt,E[3]=It,F.clearBufferuiv(F.COLOR,0,E)):(R[0]=$t,R[1]=jt,R[2]=kt,R[3]=It,F.clearBufferiv(F.COLOR,0,R))}else st|=F.COLOR_BUFFER_BIT}q&&(st|=F.DEPTH_BUFFER_BIT),at&&(st|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(st)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",zt,!1),i.removeEventListener("webglcontextrestored",bt,!1),i.removeEventListener("webglcontextcreationerror",_t,!1),xt.dispose(),Ot.dispose(),Dt.dispose(),Yt.dispose(),Qe.dispose(),O.dispose(),ut.dispose(),ne.dispose(),k.dispose(),dt.dispose(),Et.dispose(),Et.removeEventListener("sessionstart",sn),Et.removeEventListener("sessionend",Sn),On.stop()};function zt(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),B=!0}function bt(){console.log("THREE.WebGLRenderer: Context Restored."),B=!1;const A=ve.autoReset,q=Vt.enabled,at=Vt.autoUpdate,st=Vt.needsUpdate,Z=Vt.type;Ut(),ve.autoReset=A,Vt.enabled=q,Vt.autoUpdate=at,Vt.needsUpdate=st,Vt.type=Z}function _t(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Bt(A){const q=A.target;q.removeEventListener("dispose",Bt),ee(q)}function ee(A){we(A),Yt.remove(A)}function we(A){const q=Yt.get(A).programs;q!==void 0&&(q.forEach(function(at){dt.releaseProgram(at)}),A.isShaderMaterial&&dt.releaseShaderCache(A))}this.renderBufferDirect=function(A,q,at,st,Z,Tt){q===null&&(q=Le);const wt=Z.isMesh&&Z.matrixWorld.determinant()<0,Nt=Za(A,q,at,st,Z);Gt.setMaterial(st,wt);let It=at.index,$t=1;if(st.wireframe===!0){if(It=et.getWireframeAttribute(at),It===void 0)return;$t=2}const jt=at.drawRange,kt=at.attributes.position;let le=jt.start*$t,Re=(jt.start+jt.count)*$t;Tt!==null&&(le=Math.max(le,Tt.start*$t),Re=Math.min(Re,(Tt.start+Tt.count)*$t)),It!==null?(le=Math.max(le,0),Re=Math.min(Re,It.count)):kt!=null&&(le=Math.max(le,0),Re=Math.min(Re,kt.count));const Xe=Re-le;if(Xe<0||Xe===1/0)return;ne.setup(Z,st,Nt,at,It);let fe,Ce=Wt;if(It!==null&&(fe=T.get(It),Ce=qt,Ce.setIndex(fe)),Z.isMesh)st.wireframe===!0?(Gt.setLineWidth(st.wireframeLinewidth*ge()),Ce.setMode(F.LINES)):Ce.setMode(F.TRIANGLES);else if(Z.isLine){let Zt=st.linewidth;Zt===void 0&&(Zt=1),Gt.setLineWidth(Zt*ge()),Z.isLineSegments?Ce.setMode(F.LINES):Z.isLineLoop?Ce.setMode(F.LINE_LOOP):Ce.setMode(F.LINE_STRIP)}else Z.isPoints?Ce.setMode(F.POINTS):Z.isSprite&&Ce.setMode(F.TRIANGLES);if(Z.isBatchedMesh)if(Z._multiDrawInstances!==null)yr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ce.renderMultiDrawInstances(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount,Z._multiDrawInstances);else if(ye.get("WEBGL_multi_draw"))Ce.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{const Zt=Z._multiDrawStarts,Ne=Z._multiDrawCounts,xe=Z._multiDrawCount,dn=It?T.get(It).bytesPerElement:1,fa=Yt.get(st).currentProgram.getUniforms();for(let Ve=0;Ve<xe;Ve++)fa.setValue(F,"_gl_DrawID",Ve),Ce.render(Zt[Ve]/dn,Ne[Ve])}else if(Z.isInstancedMesh)Ce.renderInstances(le,Xe,Z.count);else if(at.isInstancedBufferGeometry){const Zt=at._maxInstanceCount!==void 0?at._maxInstanceCount:1/0,Ne=Math.min(at.instanceCount,Zt);Ce.renderInstances(le,Xe,Ne)}else Ce.render(le,Xe)};function Me(A,q,at){A.transparent===!0&&A.side===ea&&A.forceSinglePass===!1?(A.side=Gn,A.needsUpdate=!0,ca(A,q,at),A.side=Xa,A.needsUpdate=!0,ca(A,q,at),A.side=ea):ca(A,q,at)}this.compile=function(A,q,at=null){at===null&&(at=A),g=Dt.get(at),g.init(q),D.push(g),at.traverseVisible(function(Z){Z.isLight&&Z.layers.test(q.layers)&&(g.pushLight(Z),Z.castShadow&&g.pushShadow(Z))}),A!==at&&A.traverseVisible(function(Z){Z.isLight&&Z.layers.test(q.layers)&&(g.pushLight(Z),Z.castShadow&&g.pushShadow(Z))}),g.setupLights();const st=new Set;return A.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;const Tt=Z.material;if(Tt)if(Array.isArray(Tt))for(let wt=0;wt<Tt.length;wt++){const Nt=Tt[wt];Me(Nt,at,Z),st.add(Nt)}else Me(Tt,at,Z),st.add(Tt)}),g=D.pop(),st},this.compileAsync=function(A,q,at=null){const st=this.compile(A,q,at);return new Promise(Z=>{function Tt(){if(st.forEach(function(wt){Yt.get(wt).currentProgram.isReady()&&st.delete(wt)}),st.size===0){Z(A);return}setTimeout(Tt,10)}ye.get("KHR_parallel_shader_compile")!==null?Tt():setTimeout(Tt,10)})};let kn=null;function hn(A){kn&&kn(A)}function sn(){On.stop()}function Sn(){On.start()}const On=new P0;On.setAnimationLoop(hn),typeof self<"u"&&On.setContext(self),this.setAnimationLoop=function(A){kn=A,Et.setAnimationLoop(A),A===null?On.stop():On.start()},Et.addEventListener("sessionstart",sn),Et.addEventListener("sessionend",Sn),this.render=function(A,q){if(q!==void 0&&q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(B===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),Et.enabled===!0&&Et.isPresenting===!0&&(Et.cameraAutoUpdate===!0&&Et.updateCamera(q),q=Et.getCamera()),A.isScene===!0&&A.onBeforeRender(w,A,q,X),g=Dt.get(A,D.length),g.init(q),D.push(g),Ct.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),Q.setFromProjectionMatrix(Ct),yt=this.localClippingEnabled,pt=Ht.init(this.clippingPlanes,yt),S=Ot.get(A,N.length),S.init(),N.push(S),Et.enabled===!0&&Et.isPresenting===!0){const Tt=w.xr.getDepthSensingMesh();Tt!==null&&qa(Tt,q,-1/0,w.sortObjects)}qa(A,q,0,w.sortObjects),S.finish(),w.sortObjects===!0&&S.sort(Mt,L),Fe=Et.enabled===!1||Et.isPresenting===!1||Et.hasDepthSensing()===!1,Fe&&xt.addToRenderList(S,A),this.info.render.frame++,pt===!0&&Ht.beginShadows();const at=g.state.shadowsArray;Vt.render(at,A,q),pt===!0&&Ht.endShadows(),this.info.autoReset===!0&&this.info.reset();const st=S.opaque,Z=S.transmissive;if(g.setupLights(),q.isArrayCamera){const Tt=q.cameras;if(Z.length>0)for(let wt=0,Nt=Tt.length;wt<Nt;wt++){const It=Tt[wt];Go(st,Z,A,It)}Fe&&xt.render(A);for(let wt=0,Nt=Tt.length;wt<Nt;wt++){const It=Tt[wt];Ho(S,A,It,It.viewport)}}else Z.length>0&&Go(st,Z,A,q),Fe&&xt.render(A),Ho(S,A,q);X!==null&&I===0&&(ie.updateMultisampleRenderTarget(X),ie.updateRenderTargetMipmap(X)),A.isScene===!0&&A.onAfterRender(w,A,q),ne.resetDefaultState(),U=-1,C=null,D.pop(),D.length>0?(g=D[D.length-1],pt===!0&&Ht.setGlobalState(w.clippingPlanes,g.state.camera)):g=null,N.pop(),N.length>0?S=N[N.length-1]:S=null};function qa(A,q,at,st){if(A.visible===!1)return;if(A.layers.test(q.layers)){if(A.isGroup)at=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(q);else if(A.isLight)g.pushLight(A),A.castShadow&&g.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Q.intersectsSprite(A)){st&&Kt.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Ct);const wt=ut.update(A),Nt=A.material;Nt.visible&&S.push(A,wt,Nt,at,Kt.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Q.intersectsObject(A))){const wt=ut.update(A),Nt=A.material;if(st&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Kt.copy(A.boundingSphere.center)):(wt.boundingSphere===null&&wt.computeBoundingSphere(),Kt.copy(wt.boundingSphere.center)),Kt.applyMatrix4(A.matrixWorld).applyMatrix4(Ct)),Array.isArray(Nt)){const It=wt.groups;for(let $t=0,jt=It.length;$t<jt;$t++){const kt=It[$t],le=Nt[kt.materialIndex];le&&le.visible&&S.push(A,wt,le,at,Kt.z,kt)}}else Nt.visible&&S.push(A,wt,Nt,at,Kt.z,null)}}const Tt=A.children;for(let wt=0,Nt=Tt.length;wt<Nt;wt++)qa(Tt[wt],q,at,st)}function Ho(A,q,at,st){const Z=A.opaque,Tt=A.transmissive,wt=A.transparent;g.setupLightsView(at),pt===!0&&Ht.setGlobalState(w.clippingPlanes,at),st&&Gt.viewport(G.copy(st)),Z.length>0&&Ya(Z,q,at),Tt.length>0&&Ya(Tt,q,at),wt.length>0&&Ya(wt,q,at),Gt.buffers.depth.setTest(!0),Gt.buffers.depth.setMask(!0),Gt.buffers.color.setMask(!0),Gt.setPolygonOffset(!1)}function Go(A,q,at,st){if((at.isScene===!0?at.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[st.id]===void 0&&(g.state.transmissionRenderTarget[st.id]=new Ts(1,1,{generateMipmaps:!0,type:ye.has("EXT_color_buffer_half_float")||ye.has("EXT_color_buffer_float")?Po:Ci,minFilter:ys,samples:4,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Te.workingColorSpace}));const Tt=g.state.transmissionRenderTarget[st.id],wt=st.viewport||G;Tt.setSize(wt.z*w.transmissionResolutionScale,wt.w*w.transmissionResolutionScale);const Nt=w.getRenderTarget(),It=w.getActiveCubeFace(),$t=w.getActiveMipmapLevel();w.setRenderTarget(Tt),w.getClearColor(gt),ht=w.getClearAlpha(),ht<1&&w.setClearColor(16777215,.5),w.clear(),Fe&&xt.render(at);const jt=w.toneMapping;w.toneMapping=ka;const kt=st.viewport;if(st.viewport!==void 0&&(st.viewport=void 0),g.setupLightsView(st),pt===!0&&Ht.setGlobalState(w.clippingPlanes,st),Ya(A,at,st),ie.updateMultisampleRenderTarget(Tt),ie.updateRenderTargetMipmap(Tt),ye.has("WEBGL_multisampled_render_to_texture")===!1){let le=!1;for(let Re=0,Xe=q.length;Re<Xe;Re++){const fe=q[Re],Ce=fe.object,Zt=fe.geometry,Ne=fe.material,xe=fe.group;if(Ne.side===ea&&Ce.layers.test(st.layers)){const dn=Ne.side;Ne.side=Gn,Ne.needsUpdate=!0,la(Ce,at,st,Zt,Ne,xe),Ne.side=dn,Ne.needsUpdate=!0,le=!0}}le===!0&&(ie.updateMultisampleRenderTarget(Tt),ie.updateRenderTargetMipmap(Tt))}w.setRenderTarget(Nt,It,$t),w.setClearColor(gt,ht),kt!==void 0&&(st.viewport=kt),w.toneMapping=jt}function Ya(A,q,at){const st=q.isScene===!0?q.overrideMaterial:null;for(let Z=0,Tt=A.length;Z<Tt;Z++){const wt=A[Z],Nt=wt.object,It=wt.geometry,$t=wt.group;let jt=wt.material;jt.allowOverride===!0&&st!==null&&(jt=st),Nt.layers.test(at.layers)&&la(Nt,q,at,It,jt,$t)}}function la(A,q,at,st,Z,Tt){A.onBeforeRender(w,q,at,st,Z,Tt),A.modelViewMatrix.multiplyMatrices(at.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),Z.onBeforeRender(w,q,at,st,A,Tt),Z.transparent===!0&&Z.side===ea&&Z.forceSinglePass===!1?(Z.side=Gn,Z.needsUpdate=!0,w.renderBufferDirect(at,q,st,Z,A,Tt),Z.side=Xa,Z.needsUpdate=!0,w.renderBufferDirect(at,q,st,Z,A,Tt),Z.side=ea):w.renderBufferDirect(at,q,st,Z,A,Tt),A.onAfterRender(w,q,at,st,Z,Tt)}function ca(A,q,at){q.isScene!==!0&&(q=Le);const st=Yt.get(A),Z=g.state.lights,Tt=g.state.shadowsArray,wt=Z.state.version,Nt=dt.getParameters(A,Z.state,Tt,q,at),It=dt.getProgramCacheKey(Nt);let $t=st.programs;st.environment=A.isMeshStandardMaterial?q.environment:null,st.fog=q.fog,st.envMap=(A.isMeshStandardMaterial?O:Qe).get(A.envMap||st.environment),st.envMapRotation=st.environment!==null&&A.envMap===null?q.environmentRotation:A.envMapRotation,$t===void 0&&(A.addEventListener("dispose",Bt),$t=new Map,st.programs=$t);let jt=$t.get(It);if(jt!==void 0){if(st.currentProgram===jt&&st.lightsStateVersion===wt)return Di(A,Nt),jt}else Nt.uniforms=dt.getUniforms(A),A.onBeforeCompile(Nt,w),jt=dt.acquireProgram(Nt,It),$t.set(It,jt),st.uniforms=Nt.uniforms;const kt=st.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(kt.clippingPlanes=Ht.uniform),Di(A,Nt),st.needsLights=tn(A),st.lightsStateVersion=wt,st.needsLights&&(kt.ambientLightColor.value=Z.state.ambient,kt.lightProbe.value=Z.state.probe,kt.directionalLights.value=Z.state.directional,kt.directionalLightShadows.value=Z.state.directionalShadow,kt.spotLights.value=Z.state.spot,kt.spotLightShadows.value=Z.state.spotShadow,kt.rectAreaLights.value=Z.state.rectArea,kt.ltc_1.value=Z.state.rectAreaLTC1,kt.ltc_2.value=Z.state.rectAreaLTC2,kt.pointLights.value=Z.state.point,kt.pointLightShadows.value=Z.state.pointShadow,kt.hemisphereLights.value=Z.state.hemi,kt.directionalShadowMap.value=Z.state.directionalShadowMap,kt.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,kt.spotShadowMap.value=Z.state.spotShadowMap,kt.spotLightMatrix.value=Z.state.spotLightMatrix,kt.spotLightMap.value=Z.state.spotLightMap,kt.pointShadowMap.value=Z.state.pointShadowMap,kt.pointShadowMatrix.value=Z.state.pointShadowMatrix),st.currentProgram=jt,st.uniformsList=null,jt}function wi(A){if(A.uniformsList===null){const q=A.currentProgram.getUniforms();A.uniformsList=Rc.seqWithValue(q.seq,A.uniforms)}return A.uniformsList}function Di(A,q){const at=Yt.get(A);at.outputColorSpace=q.outputColorSpace,at.batching=q.batching,at.batchingColor=q.batchingColor,at.instancing=q.instancing,at.instancingColor=q.instancingColor,at.instancingMorph=q.instancingMorph,at.skinning=q.skinning,at.morphTargets=q.morphTargets,at.morphNormals=q.morphNormals,at.morphColors=q.morphColors,at.morphTargetsCount=q.morphTargetsCount,at.numClippingPlanes=q.numClippingPlanes,at.numIntersection=q.numClipIntersection,at.vertexAlphas=q.vertexAlphas,at.vertexTangents=q.vertexTangents,at.toneMapping=q.toneMapping}function Za(A,q,at,st,Z){q.isScene!==!0&&(q=Le),ie.resetTextureUnits();const Tt=q.fog,wt=st.isMeshStandardMaterial?q.environment:null,Nt=X===null?w.outputColorSpace:X.isXRRenderTarget===!0?X.texture.colorSpace:Ar,It=(st.isMeshStandardMaterial?O:Qe).get(st.envMap||wt),$t=st.vertexColors===!0&&!!at.attributes.color&&at.attributes.color.itemSize===4,jt=!!at.attributes.tangent&&(!!st.normalMap||st.anisotropy>0),kt=!!at.morphAttributes.position,le=!!at.morphAttributes.normal,Re=!!at.morphAttributes.color;let Xe=ka;st.toneMapped&&(X===null||X.isXRRenderTarget===!0)&&(Xe=w.toneMapping);const fe=at.morphAttributes.position||at.morphAttributes.normal||at.morphAttributes.color,Ce=fe!==void 0?fe.length:0,Zt=Yt.get(st),Ne=g.state.lights;if(pt===!0&&(yt===!0||A!==C)){const pn=A===C&&st.id===U;Ht.setState(st,A,pn)}let xe=!1;st.version===Zt.__version?(Zt.needsLights&&Zt.lightsStateVersion!==Ne.state.version||Zt.outputColorSpace!==Nt||Z.isBatchedMesh&&Zt.batching===!1||!Z.isBatchedMesh&&Zt.batching===!0||Z.isBatchedMesh&&Zt.batchingColor===!0&&Z.colorTexture===null||Z.isBatchedMesh&&Zt.batchingColor===!1&&Z.colorTexture!==null||Z.isInstancedMesh&&Zt.instancing===!1||!Z.isInstancedMesh&&Zt.instancing===!0||Z.isSkinnedMesh&&Zt.skinning===!1||!Z.isSkinnedMesh&&Zt.skinning===!0||Z.isInstancedMesh&&Zt.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&Zt.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&Zt.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&Zt.instancingMorph===!1&&Z.morphTexture!==null||Zt.envMap!==It||st.fog===!0&&Zt.fog!==Tt||Zt.numClippingPlanes!==void 0&&(Zt.numClippingPlanes!==Ht.numPlanes||Zt.numIntersection!==Ht.numIntersection)||Zt.vertexAlphas!==$t||Zt.vertexTangents!==jt||Zt.morphTargets!==kt||Zt.morphNormals!==le||Zt.morphColors!==Re||Zt.toneMapping!==Xe||Zt.morphTargetsCount!==Ce)&&(xe=!0):(xe=!0,Zt.__version=st.version);let dn=Zt.currentProgram;xe===!0&&(dn=ca(st,q,Z));let fa=!1,Ve=!1,Li=!1;const He=dn.getUniforms(),An=Zt.uniforms;if(Gt.useProgram(dn.program)&&(fa=!0,Ve=!0,Li=!0),st.id!==U&&(U=st.id,Ve=!0),fa||C!==A){Gt.buffers.depth.getReversed()?(At.copy(A.projectionMatrix),qS(At),YS(At),He.setValue(F,"projectionMatrix",At)):He.setValue(F,"projectionMatrix",A.projectionMatrix),He.setValue(F,"viewMatrix",A.matrixWorldInverse);const yn=He.map.cameraPosition;yn!==void 0&&yn.setValue(F,oe.setFromMatrixPosition(A.matrixWorld)),de.logarithmicDepthBuffer&&He.setValue(F,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(st.isMeshPhongMaterial||st.isMeshToonMaterial||st.isMeshLambertMaterial||st.isMeshBasicMaterial||st.isMeshStandardMaterial||st.isShaderMaterial)&&He.setValue(F,"isOrthographic",A.isOrthographicCamera===!0),C!==A&&(C=A,Ve=!0,Li=!0)}if(Z.isSkinnedMesh){He.setOptional(F,Z,"bindMatrix"),He.setOptional(F,Z,"bindMatrixInverse");const pn=Z.skeleton;pn&&(pn.boneTexture===null&&pn.computeBoneTexture(),He.setValue(F,"boneTexture",pn.boneTexture,ie))}Z.isBatchedMesh&&(He.setOptional(F,Z,"batchingTexture"),He.setValue(F,"batchingTexture",Z._matricesTexture,ie),He.setOptional(F,Z,"batchingIdTexture"),He.setValue(F,"batchingIdTexture",Z._indirectTexture,ie),He.setOptional(F,Z,"batchingColorTexture"),Z._colorsTexture!==null&&He.setValue(F,"batchingColorTexture",Z._colorsTexture,ie));const rn=at.morphAttributes;if((rn.position!==void 0||rn.normal!==void 0||rn.color!==void 0)&&Pt.update(Z,at,dn),(Ve||Zt.receiveShadow!==Z.receiveShadow)&&(Zt.receiveShadow=Z.receiveShadow,He.setValue(F,"receiveShadow",Z.receiveShadow)),st.isMeshGouraudMaterial&&st.envMap!==null&&(An.envMap.value=It,An.flipEnvMap.value=It.isCubeTexture&&It.isRenderTargetTexture===!1?-1:1),st.isMeshStandardMaterial&&st.envMap===null&&q.environment!==null&&(An.envMapIntensity.value=q.environmentIntensity),Ve&&(He.setValue(F,"toneMappingExposure",w.toneMappingExposure),Zt.needsLights&&ua(An,Li),Tt&&st.fog===!0&&ot.refreshFogUniforms(An,Tt),ot.refreshMaterialUniforms(An,st,Y,j,g.state.transmissionRenderTarget[A.id]),Rc.upload(F,wi(Zt),An,ie)),st.isShaderMaterial&&st.uniformsNeedUpdate===!0&&(Rc.upload(F,wi(Zt),An,ie),st.uniformsNeedUpdate=!1),st.isSpriteMaterial&&He.setValue(F,"center",Z.center),He.setValue(F,"modelViewMatrix",Z.modelViewMatrix),He.setValue(F,"normalMatrix",Z.normalMatrix),He.setValue(F,"modelMatrix",Z.matrixWorld),st.isShaderMaterial||st.isRawShaderMaterial){const pn=st.uniformsGroups;for(let yn=0,xi=pn.length;yn<xi;yn++){const Ni=pn[yn];k.update(Ni,dn),k.bind(Ni,dn)}}return dn}function ua(A,q){A.ambientLightColor.needsUpdate=q,A.lightProbe.needsUpdate=q,A.directionalLights.needsUpdate=q,A.directionalLightShadows.needsUpdate=q,A.pointLights.needsUpdate=q,A.pointLightShadows.needsUpdate=q,A.spotLights.needsUpdate=q,A.spotLightShadows.needsUpdate=q,A.rectAreaLights.needsUpdate=q,A.hemisphereLights.needsUpdate=q}function tn(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return X},this.setRenderTargetTextures=function(A,q,at){const st=Yt.get(A);st.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,st.__autoAllocateDepthBuffer===!1&&(st.__useRenderToTexture=!1),Yt.get(A.texture).__webglTexture=q,Yt.get(A.depthTexture).__webglTexture=st.__autoAllocateDepthBuffer?void 0:at,st.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,q){const at=Yt.get(A);at.__webglFramebuffer=q,at.__useDefaultFramebuffer=q===void 0};const Vo=F.createFramebuffer();this.setRenderTarget=function(A,q=0,at=0){X=A,H=q,I=at;let st=!0,Z=null,Tt=!1,wt=!1;if(A){const It=Yt.get(A);if(It.__useDefaultFramebuffer!==void 0)Gt.bindFramebuffer(F.FRAMEBUFFER,null),st=!1;else if(It.__webglFramebuffer===void 0)ie.setupRenderTarget(A);else if(It.__hasExternalTextures)ie.rebindTextures(A,Yt.get(A.texture).__webglTexture,Yt.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const kt=A.depthTexture;if(It.__boundDepthTexture!==kt){if(kt!==null&&Yt.has(kt)&&(A.width!==kt.image.width||A.height!==kt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ie.setupDepthRenderbuffer(A)}}const $t=A.texture;($t.isData3DTexture||$t.isDataArrayTexture||$t.isCompressedArrayTexture)&&(wt=!0);const jt=Yt.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(jt[q])?Z=jt[q][at]:Z=jt[q],Tt=!0):A.samples>0&&ie.useMultisampledRTT(A)===!1?Z=Yt.get(A).__webglMultisampledFramebuffer:Array.isArray(jt)?Z=jt[at]:Z=jt,G.copy(A.viewport),lt.copy(A.scissor),rt=A.scissorTest}else G.copy($).multiplyScalar(Y).floor(),lt.copy(vt).multiplyScalar(Y).floor(),rt=St;if(at!==0&&(Z=Vo),Gt.bindFramebuffer(F.FRAMEBUFFER,Z)&&st&&Gt.drawBuffers(A,Z),Gt.viewport(G),Gt.scissor(lt),Gt.setScissorTest(rt),Tt){const It=Yt.get(A.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+q,It.__webglTexture,at)}else if(wt){const It=Yt.get(A.texture),$t=q;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,It.__webglTexture,at,$t)}else if(A!==null&&at!==0){const It=Yt.get(A.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,It.__webglTexture,at)}U=-1},this.readRenderTargetPixels=function(A,q,at,st,Z,Tt,wt,Nt=0){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let It=Yt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&wt!==void 0&&(It=It[wt]),It){Gt.bindFramebuffer(F.FRAMEBUFFER,It);try{const $t=A.textures[Nt],jt=$t.format,kt=$t.type;if(!de.textureFormatReadable(jt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!de.textureTypeReadable(kt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=A.width-st&&at>=0&&at<=A.height-Z&&(A.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+Nt),F.readPixels(q,at,st,Z,Rt.convert(jt),Rt.convert(kt),Tt))}finally{const $t=X!==null?Yt.get(X).__webglFramebuffer:null;Gt.bindFramebuffer(F.FRAMEBUFFER,$t)}}},this.readRenderTargetPixelsAsync=async function(A,q,at,st,Z,Tt,wt,Nt=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let It=Yt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&wt!==void 0&&(It=It[wt]),It)if(q>=0&&q<=A.width-st&&at>=0&&at<=A.height-Z){Gt.bindFramebuffer(F.FRAMEBUFFER,It);const $t=A.textures[Nt],jt=$t.format,kt=$t.type;if(!de.textureFormatReadable(jt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!de.textureTypeReadable(kt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const le=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,le),F.bufferData(F.PIXEL_PACK_BUFFER,Tt.byteLength,F.STREAM_READ),A.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+Nt),F.readPixels(q,at,st,Z,Rt.convert(jt),Rt.convert(kt),0);const Re=X!==null?Yt.get(X).__webglFramebuffer:null;Gt.bindFramebuffer(F.FRAMEBUFFER,Re);const Xe=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await WS(F,Xe,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,le),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,Tt),F.deleteBuffer(le),F.deleteSync(Xe),Tt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,q=null,at=0){const st=Math.pow(2,-at),Z=Math.floor(A.image.width*st),Tt=Math.floor(A.image.height*st),wt=q!==null?q.x:0,Nt=q!==null?q.y:0;ie.setTexture2D(A,0),F.copyTexSubImage2D(F.TEXTURE_2D,at,0,0,wt,Nt,Z,Tt),Gt.unbindTexture()};const ko=F.createFramebuffer(),Ui=F.createFramebuffer();this.copyTextureToTexture=function(A,q,at=null,st=null,Z=0,Tt=null){Tt===null&&(Z!==0?(yr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Tt=Z,Z=0):Tt=0);let wt,Nt,It,$t,jt,kt,le,Re,Xe;const fe=A.isCompressedTexture?A.mipmaps[Tt]:A.image;if(at!==null)wt=at.max.x-at.min.x,Nt=at.max.y-at.min.y,It=at.isBox3?at.max.z-at.min.z:1,$t=at.min.x,jt=at.min.y,kt=at.isBox3?at.min.z:0;else{const rn=Math.pow(2,-Z);wt=Math.floor(fe.width*rn),Nt=Math.floor(fe.height*rn),A.isDataArrayTexture?It=fe.depth:A.isData3DTexture?It=Math.floor(fe.depth*rn):It=1,$t=0,jt=0,kt=0}st!==null?(le=st.x,Re=st.y,Xe=st.z):(le=0,Re=0,Xe=0);const Ce=Rt.convert(q.format),Zt=Rt.convert(q.type);let Ne;q.isData3DTexture?(ie.setTexture3D(q,0),Ne=F.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(ie.setTexture2DArray(q,0),Ne=F.TEXTURE_2D_ARRAY):(ie.setTexture2D(q,0),Ne=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,q.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,q.unpackAlignment);const xe=F.getParameter(F.UNPACK_ROW_LENGTH),dn=F.getParameter(F.UNPACK_IMAGE_HEIGHT),fa=F.getParameter(F.UNPACK_SKIP_PIXELS),Ve=F.getParameter(F.UNPACK_SKIP_ROWS),Li=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,fe.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,fe.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,$t),F.pixelStorei(F.UNPACK_SKIP_ROWS,jt),F.pixelStorei(F.UNPACK_SKIP_IMAGES,kt);const He=A.isDataArrayTexture||A.isData3DTexture,An=q.isDataArrayTexture||q.isData3DTexture;if(A.isDepthTexture){const rn=Yt.get(A),pn=Yt.get(q),yn=Yt.get(rn.__renderTarget),xi=Yt.get(pn.__renderTarget);Gt.bindFramebuffer(F.READ_FRAMEBUFFER,yn.__webglFramebuffer),Gt.bindFramebuffer(F.DRAW_FRAMEBUFFER,xi.__webglFramebuffer);for(let Ni=0;Ni<It;Ni++)He&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Yt.get(A).__webglTexture,Z,kt+Ni),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Yt.get(q).__webglTexture,Tt,Xe+Ni)),F.blitFramebuffer($t,jt,wt,Nt,le,Re,wt,Nt,F.DEPTH_BUFFER_BIT,F.NEAREST);Gt.bindFramebuffer(F.READ_FRAMEBUFFER,null),Gt.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(Z!==0||A.isRenderTargetTexture||Yt.has(A)){const rn=Yt.get(A),pn=Yt.get(q);Gt.bindFramebuffer(F.READ_FRAMEBUFFER,ko),Gt.bindFramebuffer(F.DRAW_FRAMEBUFFER,Ui);for(let yn=0;yn<It;yn++)He?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,rn.__webglTexture,Z,kt+yn):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,rn.__webglTexture,Z),An?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,pn.__webglTexture,Tt,Xe+yn):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,pn.__webglTexture,Tt),Z!==0?F.blitFramebuffer($t,jt,wt,Nt,le,Re,wt,Nt,F.COLOR_BUFFER_BIT,F.NEAREST):An?F.copyTexSubImage3D(Ne,Tt,le,Re,Xe+yn,$t,jt,wt,Nt):F.copyTexSubImage2D(Ne,Tt,le,Re,$t,jt,wt,Nt);Gt.bindFramebuffer(F.READ_FRAMEBUFFER,null),Gt.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else An?A.isDataTexture||A.isData3DTexture?F.texSubImage3D(Ne,Tt,le,Re,Xe,wt,Nt,It,Ce,Zt,fe.data):q.isCompressedArrayTexture?F.compressedTexSubImage3D(Ne,Tt,le,Re,Xe,wt,Nt,It,Ce,fe.data):F.texSubImage3D(Ne,Tt,le,Re,Xe,wt,Nt,It,Ce,Zt,fe):A.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,Tt,le,Re,wt,Nt,Ce,Zt,fe.data):A.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,Tt,le,Re,fe.width,fe.height,Ce,fe.data):F.texSubImage2D(F.TEXTURE_2D,Tt,le,Re,wt,Nt,Ce,Zt,fe);F.pixelStorei(F.UNPACK_ROW_LENGTH,xe),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,dn),F.pixelStorei(F.UNPACK_SKIP_PIXELS,fa),F.pixelStorei(F.UNPACK_SKIP_ROWS,Ve),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Li),Tt===0&&q.generateMipmaps&&F.generateMipmap(Ne),Gt.unbindTexture()},this.copyTextureToTexture3D=function(A,q,at=null,st=null,Z=0){return yr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(A,q,at,st,Z)},this.initRenderTarget=function(A){Yt.get(A).__webglFramebuffer===void 0&&ie.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?ie.setTextureCube(A,0):A.isData3DTexture?ie.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?ie.setTexture2DArray(A,0):ie.setTexture2D(A,0),Gt.unbindTexture()},this.resetState=function(){H=0,I=0,X=null,Gt.reset(),ne.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ia}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=Te._getDrawingBufferColorSpace(t),i.unpackColorSpace=Te._getUnpackColorSpace()}}const r0={type:"change"},Md={type:"start"},H0={type:"end"},Sc=new vd,o0=new Ha,xA=Math.cos(70*kS.DEG2RAD),cn=new tt,Hn=2*Math.PI,Be={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Sh=1e-6;class SA extends Py{constructor(t,i=null){super(t,i),this.state=Be.NONE,this.target=new tt,this.cursor=new tt,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:xr.ROTATE,MIDDLE:xr.DOLLY,RIGHT:xr.PAN},this.touches={ONE:gr.ROTATE,TWO:gr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new tt,this._lastQuaternion=new Es,this._lastTargetPosition=new tt,this._quat=new Es().setFromUnitVectors(t.up,new tt(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Og,this._sphericalDelta=new Og,this._scale=1,this._panOffset=new tt,this._rotateStart=new re,this._rotateEnd=new re,this._rotateDelta=new re,this._panStart=new re,this._panEnd=new re,this._panDelta=new re,this._dollyStart=new re,this._dollyEnd=new re,this._dollyDelta=new re,this._dollyDirection=new tt,this._mouse=new re,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=MA.bind(this),this._onPointerDown=yA.bind(this),this._onPointerUp=EA.bind(this),this._onContextMenu=DA.bind(this),this._onMouseWheel=AA.bind(this),this._onKeyDown=RA.bind(this),this._onTouchStart=CA.bind(this),this._onTouchMove=wA.bind(this),this._onMouseDown=TA.bind(this),this._onMouseMove=bA.bind(this),this._interceptControlDown=UA.bind(this),this._interceptControlUp=LA.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(r0),this.update(),this.state=Be.NONE}update(t=null){const i=this.object.position;cn.copy(i).sub(this.target),cn.applyQuaternion(this._quat),this._spherical.setFromVector3(cn),this.autoRotate&&this.state===Be.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let s=this.minAzimuthAngle,l=this.maxAzimuthAngle;isFinite(s)&&isFinite(l)&&(s<-Math.PI?s+=Hn:s>Math.PI&&(s-=Hn),l<-Math.PI?l+=Hn:l>Math.PI&&(l-=Hn),s<=l?this._spherical.theta=Math.max(s,Math.min(l,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(s+l)/2?Math.max(s,this._spherical.theta):Math.min(l,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let u=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const h=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),u=h!=this._spherical.radius}if(cn.setFromSpherical(this._spherical),cn.applyQuaternion(this._quatInverse),i.copy(this.target).add(cn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let h=null;if(this.object.isPerspectiveCamera){const d=cn.length();h=this._clampDistance(d*this._scale);const m=d-h;this.object.position.addScaledVector(this._dollyDirection,m),this.object.updateMatrixWorld(),u=!!m}else if(this.object.isOrthographicCamera){const d=new tt(this._mouse.x,this._mouse.y,0);d.unproject(this.object);const m=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),u=m!==this.object.zoom;const p=new tt(this._mouse.x,this._mouse.y,0);p.unproject(this.object),this.object.position.sub(p).add(d),this.object.updateMatrixWorld(),h=cn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;h!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(h).add(this.object.position):(Sc.origin.copy(this.object.position),Sc.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Sc.direction))<xA?this.object.lookAt(this.target):(o0.setFromNormalAndCoplanarPoint(this.object.up,this.target),Sc.intersectPlane(o0,this.target))))}else if(this.object.isOrthographicCamera){const h=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),h!==this.object.zoom&&(this.object.updateProjectionMatrix(),u=!0)}return this._scale=1,this._performCursorZoom=!1,u||this._lastPosition.distanceToSquared(this.object.position)>Sh||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Sh||this._lastTargetPosition.distanceToSquared(this.target)>Sh?(this.dispatchEvent(r0),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Hn/60*this.autoRotateSpeed*t:Hn/60/60*this.autoRotateSpeed}_getZoomScale(t){const i=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*i)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,i){cn.setFromMatrixColumn(i,0),cn.multiplyScalar(-t),this._panOffset.add(cn)}_panUp(t,i){this.screenSpacePanning===!0?cn.setFromMatrixColumn(i,1):(cn.setFromMatrixColumn(i,0),cn.crossVectors(this.object.up,cn)),cn.multiplyScalar(t),this._panOffset.add(cn)}_pan(t,i){const s=this.domElement;if(this.object.isPerspectiveCamera){const l=this.object.position;cn.copy(l).sub(this.target);let u=cn.length();u*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*u/s.clientHeight,this.object.matrix),this._panUp(2*i*u/s.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/s.clientWidth,this.object.matrix),this._panUp(i*(this.object.top-this.object.bottom)/this.object.zoom/s.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,i){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const s=this.domElement.getBoundingClientRect(),l=t-s.left,u=i-s.top,h=s.width,d=s.height;this._mouse.x=l/h*2-1,this._mouse.y=-(u/d)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(Hn*this._rotateDelta.x/i.clientHeight),this._rotateUp(Hn*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let i=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(Hn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),i=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-Hn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),i=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(Hn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),i=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-Hn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),i=!0;break}i&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._rotateStart.set(s,l)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._panStart.set(s,l)}}_handleTouchStartDolly(t){const i=this._getSecondPointerPosition(t),s=t.pageX-i.x,l=t.pageY-i.y,u=Math.sqrt(s*s+l*l);this._dollyStart.set(0,u)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const s=this._getSecondPointerPosition(t),l=.5*(t.pageX+s.x),u=.5*(t.pageY+s.y);this._rotateEnd.set(l,u)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(Hn*this._rotateDelta.x/i.clientHeight),this._rotateUp(Hn*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._panEnd.set(s,l)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const i=this._getSecondPointerPosition(t),s=t.pageX-i.x,l=t.pageY-i.y,u=Math.sqrt(s*s+l*l);this._dollyEnd.set(0,u),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const h=(t.pageX+i.x)*.5,d=(t.pageY+i.y)*.5;this._updateZoomParameters(h,d)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==t.pointerId){this._pointers.splice(i,1);return}}_isTrackingPointer(t){for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==t.pointerId)return!0;return!1}_trackPointer(t){let i=this._pointerPositions[t.pointerId];i===void 0&&(i=new re,this._pointerPositions[t.pointerId]=i),i.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const i=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[i]}_customWheelEvent(t){const i=t.deltaMode,s={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(i){case 1:s.deltaY*=16;break;case 2:s.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(s.deltaY*=10),s}}function yA(o){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(o.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(o)&&(this._addPointer(o),o.pointerType==="touch"?this._onTouchStart(o):this._onMouseDown(o)))}function MA(o){this.enabled!==!1&&(o.pointerType==="touch"?this._onTouchMove(o):this._onMouseMove(o))}function EA(o){switch(this._removePointer(o),this._pointers.length){case 0:this.domElement.releasePointerCapture(o.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(H0),this.state=Be.NONE;break;case 1:const t=this._pointers[0],i=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:i.x,pageY:i.y});break}}function TA(o){let t;switch(o.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case xr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(o),this.state=Be.DOLLY;break;case xr.ROTATE:if(o.ctrlKey||o.metaKey||o.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(o),this.state=Be.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(o),this.state=Be.ROTATE}break;case xr.PAN:if(o.ctrlKey||o.metaKey||o.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(o),this.state=Be.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(o),this.state=Be.PAN}break;default:this.state=Be.NONE}this.state!==Be.NONE&&this.dispatchEvent(Md)}function bA(o){switch(this.state){case Be.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(o);break;case Be.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(o);break;case Be.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(o);break}}function AA(o){this.enabled===!1||this.enableZoom===!1||this.state!==Be.NONE||(o.preventDefault(),this.dispatchEvent(Md),this._handleMouseWheel(this._customWheelEvent(o)),this.dispatchEvent(H0))}function RA(o){this.enabled!==!1&&this._handleKeyDown(o)}function CA(o){switch(this._trackPointer(o),this._pointers.length){case 1:switch(this.touches.ONE){case gr.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(o),this.state=Be.TOUCH_ROTATE;break;case gr.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(o),this.state=Be.TOUCH_PAN;break;default:this.state=Be.NONE}break;case 2:switch(this.touches.TWO){case gr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(o),this.state=Be.TOUCH_DOLLY_PAN;break;case gr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(o),this.state=Be.TOUCH_DOLLY_ROTATE;break;default:this.state=Be.NONE}break;default:this.state=Be.NONE}this.state!==Be.NONE&&this.dispatchEvent(Md)}function wA(o){switch(this._trackPointer(o),this.state){case Be.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(o),this.update();break;case Be.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(o),this.update();break;case Be.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(o),this.update();break;case Be.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(o),this.update();break;default:this.state=Be.NONE}}function DA(o){this.enabled!==!1&&o.preventDefault()}function UA(o){o.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function LA(o){o.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class NA extends Sd{constructor(t){super(t),this.littleEndian=!0}load(t,i,s,l){const u=this,h=new wy(u.manager);h.setPath(u.path),h.setResponseType("arraybuffer"),h.setRequestHeader(u.requestHeader),h.setWithCredentials(u.withCredentials),h.load(t,function(d){try{i(u.parse(d))}catch(m){l?l(m):console.error(m),u.manager.itemError(t)}},s,l)}_getDataView(t,i,s,l){switch(s){case"F":return l===8?t.getFloat64(i,this.littleEndian):t.getFloat32(i,this.littleEndian);case"I":return l===1?t.getInt8(i):l===2?t.getInt16(i,this.littleEndian):t.getInt32(i,this.littleEndian);case"U":return l===1?t.getUint8(i):l===2?t.getUint16(i,this.littleEndian):t.getUint32(i,this.littleEndian)}}parse(t){function i(M,E){const R=M.length,S=new Uint8Array(E);let g=0,N=0,D,w,B;do if(D=M[g++],D<32){if(D++,N+D>E)throw new Error("Output buffer is not large enough");if(g+D>R)throw new Error("Invalid compressed data");do S[N++]=M[g++];while(--D)}else{if(w=D>>5,B=N-((D&31)<<8)-1,g>=R)throw new Error("Invalid compressed data");if(w===7&&(w+=M[g++],g>=R))throw new Error("Invalid compressed data");if(B-=M[g++],N+w+2>E)throw new Error("Output buffer is not large enough");if(B<0)throw new Error("Invalid compressed data");if(B>=N)throw new Error("Invalid compressed data");do S[N++]=S[B++];while(--w+2)}while(g<R);return S}function s(M){const E={},R=new Uint8Array(M);let S="",g="",N=0,D=!1;const w=R.length;for(;N<w&&D===!1;){const X=String.fromCharCode(R[N++]);X===`
`||X==="\r"?(g.trim().toLowerCase().startsWith("data")&&(D=!0),g=""):g+=X,S+=X}const B=S.search(/[\r\n]DATA\s(\S*)\s/i),H=/[\r\n]DATA\s(\S*)\s/i.exec(S.slice(B-1));if(E.data=H[1],E.headerLen=H[0].length+B,E.str=S.slice(0,E.headerLen),E.str=E.str.replace(/#.*/gi,""),E.version=/^VERSION (.*)/im.exec(E.str),E.fields=/^FIELDS (.*)/im.exec(E.str),E.size=/^SIZE (.*)/im.exec(E.str),E.type=/^TYPE (.*)/im.exec(E.str),E.count=/^COUNT (.*)/im.exec(E.str),E.width=/^WIDTH (.*)/im.exec(E.str),E.height=/^HEIGHT (.*)/im.exec(E.str),E.viewpoint=/^VIEWPOINT (.*)/im.exec(E.str),E.points=/^POINTS (.*)/im.exec(E.str),E.version!==null&&(E.version=parseFloat(E.version[1])),E.fields=E.fields!==null?E.fields[1].split(" "):[],E.type!==null&&(E.type=E.type[1].split(" ")),E.width!==null&&(E.width=parseInt(E.width[1])),E.height!==null&&(E.height=parseInt(E.height[1])),E.viewpoint!==null&&(E.viewpoint=E.viewpoint[1]),E.points!==null&&(E.points=parseInt(E.points[1],10)),E.points===null&&(E.points=E.width*E.height),E.size!==null&&(E.size=E.size[1].split(" ").map(function(X){return parseInt(X,10)})),E.count!==null)E.count=E.count[1].split(" ").map(function(X){return parseInt(X,10)});else{E.count=[];for(let X=0,U=E.fields.length;X<U;X++)E.count.push(1)}E.offset={};let I=0;for(let X=0,U=E.fields.length;X<U;X++)E.data==="ascii"?E.offset[E.fields[X]]=X:(E.offset[E.fields[X]]=I,I+=E.size[X]*E.count[X]);return E.rowSize=I,E}const l=s(t),u=[],h=[],d=[],m=[],p=[],_=new be;if(l.data==="ascii"){const M=l.offset,S=new TextDecoder().decode(t).slice(l.headerLen).split(`
`);for(let g=0,N=S.length;g<N;g++){if(S[g]==="")continue;const D=S[g].split(" ");if(M.x!==void 0&&(u.push(parseFloat(D[M.x])),u.push(parseFloat(D[M.y])),u.push(parseFloat(D[M.z]))),M.rgb!==void 0){const w=l.fields.findIndex(G=>G==="rgb"),B=l.type[w],H=parseFloat(D[M.rgb]);let I=H;if(B==="F"){const G=new Float32Array(1);G[0]=H,I=new Int32Array(G.buffer)[0]}const X=(I>>16&255)/255,U=(I>>8&255)/255,C=(I>>0&255)/255;_.setRGB(X,U,C,Nn),d.push(_.r,_.g,_.b)}M.normal_x!==void 0&&(h.push(parseFloat(D[M.normal_x])),h.push(parseFloat(D[M.normal_y])),h.push(parseFloat(D[M.normal_z]))),M.intensity!==void 0&&m.push(parseFloat(D[M.intensity])),M.label!==void 0&&p.push(parseInt(D[M.label]))}}if(l.data==="binary_compressed"){const M=new Uint32Array(t.slice(l.headerLen,l.headerLen+8)),E=M[0],R=M[1],S=i(new Uint8Array(t,l.headerLen+8,E),R),g=new DataView(S.buffer),N=l.offset;for(let D=0;D<l.points;D++){if(N.x!==void 0){const w=l.fields.indexOf("x"),B=l.fields.indexOf("y"),H=l.fields.indexOf("z");u.push(this._getDataView(g,l.points*N.x+l.size[w]*D,l.type[w],l.size[w])),u.push(this._getDataView(g,l.points*N.y+l.size[B]*D,l.type[B],l.size[B])),u.push(this._getDataView(g,l.points*N.z+l.size[H]*D,l.type[H],l.size[H]))}if(N.rgb!==void 0){const w=l.fields.indexOf("rgb"),B=g.getUint8(l.points*N.rgb+l.size[w]*D+2)/255,H=g.getUint8(l.points*N.rgb+l.size[w]*D+1)/255,I=g.getUint8(l.points*N.rgb+l.size[w]*D+0)/255;_.setRGB(B,H,I,Nn),d.push(_.r,_.g,_.b)}if(N.normal_x!==void 0){const w=l.fields.indexOf("normal_x"),B=l.fields.indexOf("normal_y"),H=l.fields.indexOf("normal_z");h.push(this._getDataView(g,l.points*N.normal_x+l.size[w]*D,l.type[w],l.size[w])),h.push(this._getDataView(g,l.points*N.normal_y+l.size[B]*D,l.type[B],l.size[B])),h.push(this._getDataView(g,l.points*N.normal_z+l.size[H]*D,l.type[H],l.size[H]))}if(N.intensity!==void 0){const w=l.fields.indexOf("intensity");m.push(this._getDataView(g,l.points*N.intensity+l.size[w]*D,l.type[w],l.size[w]))}if(N.label!==void 0){const w=l.fields.indexOf("label");p.push(g.getInt32(l.points*N.label+l.size[w]*D,this.littleEndian))}}}if(l.data==="binary"){const M=new DataView(t,l.headerLen),E=l.offset;for(let R=0,S=0;R<l.points;R++,S+=l.rowSize){if(E.x!==void 0){const g=l.fields.indexOf("x"),N=l.fields.indexOf("y"),D=l.fields.indexOf("z");u.push(this._getDataView(M,S+E.x,l.type[g],l.size[g])),u.push(this._getDataView(M,S+E.y,l.type[N],l.size[N])),u.push(this._getDataView(M,S+E.z,l.type[D],l.size[D]))}if(E.rgb!==void 0){const g=M.getUint8(S+E.rgb+2)/255,N=M.getUint8(S+E.rgb+1)/255,D=M.getUint8(S+E.rgb+0)/255;_.setRGB(g,N,D,Nn),d.push(_.r,_.g,_.b)}if(E.normal_x!==void 0){const g=l.fields.indexOf("normal_x"),N=l.fields.indexOf("normal_y"),D=l.fields.indexOf("normal_z");h.push(this._getDataView(M,S+E.normal_x,l.type[g],l.size[g])),h.push(this._getDataView(M,S+E.normal_y,l.type[N],l.size[N])),h.push(this._getDataView(M,S+E.normal_z,l.type[D],l.size[D]))}if(E.intensity!==void 0){const g=l.fields.indexOf("intensity");m.push(this._getDataView(M,S+E.intensity,l.type[g],l.size[g]))}E.label!==void 0&&p.push(M.getInt32(S+E.label,this.littleEndian))}}const v=new oa;u.length>0&&v.setAttribute("position",new _i(u,3)),h.length>0&&v.setAttribute("normal",new _i(h,3)),d.length>0&&v.setAttribute("color",new _i(d,3)),m.length>0&&v.setAttribute("intensity",new _i(m,1)),p.length>0&&v.setAttribute("label",new cy(p,1)),v.computeBoundingSphere();const x=new U0({size:.005});return d.length>0&&(x.vertexColors=!0),new Ey(v,x)}}class OA{spatialEnvironment;perspectiveViewpoint;webGLRenderingEngine;orbitNavigationControls;pointCloudDataLoader;geometricPointCollections=[];htmlRenderingContainer;constructor(t){this.htmlRenderingContainer=t,this.spatialEnvironment=new xy,this.spatialEnvironment.background=new be(1118481);const i=t.clientWidth,s=t.clientHeight;this.perspectiveViewpoint=new oi(75,i/s,.1,1e3),this.perspectiveViewpoint.position.set(2,2,2),this.webGLRenderingEngine=new vA({antialias:!0,alpha:!0}),this.webGLRenderingEngine.setSize(i,s),this.webGLRenderingEngine.shadowMap.enabled=!0,this.webGLRenderingEngine.shadowMap.type=c0,t.appendChild(this.webGLRenderingEngine.domElement),this.orbitNavigationControls=new SA(this.perspectiveViewpoint,this.webGLRenderingEngine.domElement),this.orbitNavigationControls.enableDamping=!0,this.orbitNavigationControls.dampingFactor=.05,this.orbitNavigationControls.enableZoom=!0,this.orbitNavigationControls.enablePan=!0,this.pointCloudDataLoader=new NA;const l=new Ny(4210752,.6);this.spatialEnvironment.add(l);const u=new Ly(16777215,.8);u.position.set(10,10,5),this.spatialEnvironment.add(u)}async loadPointClouds(t){for(const i of t){const s=await this.pointCloudDataLoader.loadAsync(i);s.visible=!1,this.geometricPointCollections.push(s),this.spatialEnvironment.add(s)}}showFrame(t){this.geometricPointCollections.forEach((i,s)=>{i.visible=s===t})}animate=()=>{const t=()=>{requestAnimationFrame(t),this.orbitNavigationControls.update(),this.webGLRenderingEngine.render(this.spatialEnvironment,this.perspectiveViewpoint)};t()};dispose(){for(this.webGLRenderingEngine.dispose(),this.orbitNavigationControls.dispose(),this.geometricPointCollections.forEach(t=>this.spatialEnvironment.remove(t));this.htmlRenderingContainer.firstChild;)this.htmlRenderingContainer.removeChild(this.htmlRenderingContainer.firstChild)}}const PA=({geometryPaths:o,selectedModelIndex:t})=>{const i=wo.useRef(null),s=wo.useRef(null);wo.useEffect(()=>{if(i.current)return s.current=new OA(i.current),s.current.loadPointClouds(o).then(()=>{s.current.showFrame(t)}),s.current.animate(),()=>{s.current?.dispose()}}),wo.useEffect(()=>{s.current?.showFrame(t)},[t]);const l={width:"100%",height:"90vh",border:"2px solid #34495e",borderRadius:"10px",backgroundColor:"#1a1a1a",boxShadow:"0 8px 16px rgba(0, 0, 0, 0.3)",overflow:"hidden"};return Ai.jsx("div",{ref:i,style:l})},zA=({modelPaths:o,setActiveGeometry:t})=>{const i=()=>t(d=>(d+1)%o.length),s=()=>t(d=>(d-1+o.length)%o.length),l={marginTop:20,padding:"15px 25px",backgroundColor:"#2c3e50",borderRadius:"8px",display:"flex",justifyContent:"center",gap:"15px",boxShadow:"0 4px 6px rgba(0, 0, 0, 0.1)"},u={padding:"10px 20px",fontSize:"16px",fontWeight:"bold",color:"#ffffff",backgroundColor:"#3498db",border:"none",borderRadius:"5px",cursor:"pointer",transition:"all 0.3s ease",minWidth:"80px"},h={backgroundColor:"#2980b9",transform:"translateY(-2px)"};return Ai.jsxs("div",{style:l,children:[Ai.jsx("button",{onClick:s,style:u,onMouseOver:d=>{d.currentTarget.style.backgroundColor=h.backgroundColor,d.currentTarget.style.transform=h.transform},onMouseOut:d=>{d.currentTarget.style.backgroundColor=u.backgroundColor,d.currentTarget.style.transform="translateY(0px)"},children:"← Previous"}),Ai.jsx("button",{onClick:i,style:u,onMouseOver:d=>{d.currentTarget.style.backgroundColor=h.backgroundColor,d.currentTarget.style.transform=h.transform},onMouseOut:d=>{d.currentTarget.style.backgroundColor=u.backgroundColor,d.currentTarget.style.transform="translateY(0px)"},children:"Next →"})]})},IA=()=>{const o=["./assets/sphere.pcd","./assets/cuboid.pcd"],[t,i]=wo.useState(0),s={minHeight:"100vh",backgroundColor:"#ecf0f1",padding:"20px",fontFamily:'-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'},l={textAlign:"center",color:"#2c3e50",fontSize:"28px",fontWeight:"bold",marginBottom:"20px",textShadow:"2px 2px 4px rgba(0,0,0,0.1)"},u={maxWidth:"1200px",margin:"0 auto",backgroundColor:"#ffffff",borderRadius:"12px",padding:"25px",boxShadow:"0 10px 25px rgba(0, 0, 0, 0.15)"};return Ai.jsx("div",{style:s,children:Ai.jsxs("div",{style:u,children:[Ai.jsx("h1",{style:l,children:"3D Geometric Point Cloud Visualizer"}),Ai.jsx(PA,{geometryPaths:o,selectedModelIndex:t}),Ai.jsx(zA,{modelPaths:o,setActiveGeometry:i})]})})},BA=tS.createRoot(document.getElementById("root"));BA.render(Ai.jsx(IA,{}));
