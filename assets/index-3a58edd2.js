(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();function Ea(n,e){const t=Object.create(null),i=n.split(",");for(let r=0;r<i.length;r++)t[i[r]]=!0;return e?r=>!!t[r.toLowerCase()]:r=>!!t[r]}function Ta(n){if(Ue(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],r=dt(i)?uh(i):Ta(i);if(r)for(const s in r)e[s]=r[s]}return e}else{if(dt(n))return n;if(et(n))return n}}const ah=/;(?![^(]*\))/g,lh=/:([^]+)/,ch=/\/\*.*?\*\//gs;function uh(n){const e={};return n.replace(ch,"").split(ah).forEach(t=>{if(t){const i=t.split(lh);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Aa(n){let e="";if(dt(n))e=n;else if(Ue(n))for(let t=0;t<n.length;t++){const i=Aa(n[t]);i&&(e+=i+" ")}else if(et(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const fh="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",hh=Ea(fh);function _u(n){return!!n||n===""}const As=n=>dt(n)?n:n==null?"":Ue(n)||et(n)&&(n.toString===Mu||!Fe(n.toString))?JSON.stringify(n,vu,2):String(n),vu=(n,e)=>e&&e.__v_isRef?vu(n,e.value):Xi(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,r])=>(t[`${i} =>`]=r,t),{})}:xu(e)?{[`Set(${e.size})`]:[...e.values()]}:et(e)&&!Ue(e)&&!Su(e)?String(e):e,Qe={},qi=[],an=()=>{},dh=()=>!1,ph=/^on[^a-z]/,Is=n=>ph.test(n),Ca=n=>n.startsWith("onUpdate:"),yt=Object.assign,La=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},mh=Object.prototype.hasOwnProperty,We=(n,e)=>mh.call(n,e),Ue=Array.isArray,Xi=n=>Us(n)==="[object Map]",xu=n=>Us(n)==="[object Set]",Fe=n=>typeof n=="function",dt=n=>typeof n=="string",Ra=n=>typeof n=="symbol",et=n=>n!==null&&typeof n=="object",yu=n=>et(n)&&Fe(n.then)&&Fe(n.catch),Mu=Object.prototype.toString,Us=n=>Mu.call(n),gh=n=>Us(n).slice(8,-1),Su=n=>Us(n)==="[object Object]",Pa=n=>dt(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Ms=Ea(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Fs=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},_h=/-(\w)/g,xn=Fs(n=>n.replace(_h,(e,t)=>t?t.toUpperCase():"")),vh=/\B([A-Z])/g,ar=Fs(n=>n.replace(vh,"-$1").toLowerCase()),zs=Fs(n=>n.charAt(0).toUpperCase()+n.slice(1)),ro=Fs(n=>n?`on${zs(n)}`:""),Pr=(n,e)=>!Object.is(n,e),so=(n,e)=>{for(let t=0;t<n.length;t++)n[t](e)},Cs=(n,e,t)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,value:t})},xh=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let nl;const yh=()=>nl||(nl=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let tn;class Mh{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=tn,!e&&tn&&(this.index=(tn.scopes||(tn.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const t=tn;try{return tn=this,e()}finally{tn=t}}}on(){tn=this}off(){tn=this.parent}stop(e){if(this._active){let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.scopes)for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function Sh(n,e=tn){e&&e.active&&e.effects.push(n)}function bh(){return tn}const Da=n=>{const e=new Set(n);return e.w=0,e.n=0,e},bu=n=>(n.w&Jn)>0,wu=n=>(n.n&Jn)>0,wh=({deps:n})=>{if(n.length)for(let e=0;e<n.length;e++)n[e].w|=Jn},Eh=n=>{const{deps:e}=n;if(e.length){let t=0;for(let i=0;i<e.length;i++){const r=e[i];bu(r)&&!wu(r)?r.delete(n):e[t++]=r,r.w&=~Jn,r.n&=~Jn}e.length=t}},Jo=new WeakMap;let wr=0,Jn=1;const Qo=30;let nn;const yi=Symbol(""),ea=Symbol("");class Ia{constructor(e,t=null,i){this.fn=e,this.scheduler=t,this.active=!0,this.deps=[],this.parent=void 0,Sh(this,i)}run(){if(!this.active)return this.fn();let e=nn,t=Yn;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=nn,nn=this,Yn=!0,Jn=1<<++wr,wr<=Qo?wh(this):il(this),this.fn()}finally{wr<=Qo&&Eh(this),Jn=1<<--wr,nn=this.parent,Yn=t,this.parent=void 0,this.deferStop&&this.stop()}}stop(){nn===this?this.deferStop=!0:this.active&&(il(this),this.onStop&&this.onStop(),this.active=!1)}}function il(n){const{deps:e}=n;if(e.length){for(let t=0;t<e.length;t++)e[t].delete(n);e.length=0}}let Yn=!0;const Eu=[];function lr(){Eu.push(Yn),Yn=!1}function cr(){const n=Eu.pop();Yn=n===void 0?!0:n}function Dt(n,e,t){if(Yn&&nn){let i=Jo.get(n);i||Jo.set(n,i=new Map);let r=i.get(t);r||i.set(t,r=Da()),Tu(r)}}function Tu(n,e){let t=!1;wr<=Qo?wu(n)||(n.n|=Jn,t=!bu(n)):t=!n.has(nn),t&&(n.add(nn),nn.deps.push(n))}function zn(n,e,t,i,r,s){const a=Jo.get(n);if(!a)return;let o=[];if(e==="clear")o=[...a.values()];else if(t==="length"&&Ue(n)){const l=Number(i);a.forEach((c,u)=>{(u==="length"||u>=l)&&o.push(c)})}else switch(t!==void 0&&o.push(a.get(t)),e){case"add":Ue(n)?Pa(t)&&o.push(a.get("length")):(o.push(a.get(yi)),Xi(n)&&o.push(a.get(ea)));break;case"delete":Ue(n)||(o.push(a.get(yi)),Xi(n)&&o.push(a.get(ea)));break;case"set":Xi(n)&&o.push(a.get(yi));break}if(o.length===1)o[0]&&ta(o[0]);else{const l=[];for(const c of o)c&&l.push(...c);ta(Da(l))}}function ta(n,e){const t=Ue(n)?n:[...n];for(const i of t)i.computed&&rl(i);for(const i of t)i.computed||rl(i)}function rl(n,e){(n!==nn||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const Th=Ea("__proto__,__v_isRef,__isVue"),Au=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Ra)),Ah=Ua(),Ch=Ua(!1,!0),Lh=Ua(!0),sl=Rh();function Rh(){const n={};return["includes","indexOf","lastIndexOf"].forEach(e=>{n[e]=function(...t){const i=je(this);for(let s=0,a=this.length;s<a;s++)Dt(i,"get",s+"");const r=i[e](...t);return r===-1||r===!1?i[e](...t.map(je)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{n[e]=function(...t){lr();const i=je(this)[e].apply(this,t);return cr(),i}}),n}function Ph(n){const e=je(this);return Dt(e,"has",n),e.hasOwnProperty(n)}function Ua(n=!1,e=!1){return function(i,r,s){if(r==="__v_isReactive")return!n;if(r==="__v_isReadonly")return n;if(r==="__v_isShallow")return e;if(r==="__v_raw"&&s===(n?e?jh:Du:e?Pu:Ru).get(i))return i;const a=Ue(i);if(!n){if(a&&We(sl,r))return Reflect.get(sl,r,s);if(r==="hasOwnProperty")return Ph}const o=Reflect.get(i,r,s);return(Ra(r)?Au.has(r):Th(r))||(n||Dt(i,"get",r),e)?o:vt(o)?a&&Pa(r)?o:o.value:et(o)?n?Iu(o):Gr(o):o}}const Dh=Cu(),Ih=Cu(!0);function Cu(n=!1){return function(t,i,r,s){let a=t[i];if(Qi(a)&&vt(a)&&!vt(r))return!1;if(!n&&(!Ls(r)&&!Qi(r)&&(a=je(a),r=je(r)),!Ue(t)&&vt(a)&&!vt(r)))return a.value=r,!0;const o=Ue(t)&&Pa(i)?Number(i)<t.length:We(t,i),l=Reflect.set(t,i,r,s);return t===je(s)&&(o?Pr(r,a)&&zn(t,"set",i,r):zn(t,"add",i,r)),l}}function Uh(n,e){const t=We(n,e);n[e];const i=Reflect.deleteProperty(n,e);return i&&t&&zn(n,"delete",e,void 0),i}function Fh(n,e){const t=Reflect.has(n,e);return(!Ra(e)||!Au.has(e))&&Dt(n,"has",e),t}function zh(n){return Dt(n,"iterate",Ue(n)?"length":yi),Reflect.ownKeys(n)}const Lu={get:Ah,set:Dh,deleteProperty:Uh,has:Fh,ownKeys:zh},Oh={get:Lh,set(n,e){return!0},deleteProperty(n,e){return!0}},Nh=yt({},Lu,{get:Ch,set:Ih}),Fa=n=>n,Os=n=>Reflect.getPrototypeOf(n);function jr(n,e,t=!1,i=!1){n=n.__v_raw;const r=je(n),s=je(e);t||(e!==s&&Dt(r,"get",e),Dt(r,"get",s));const{has:a}=Os(r),o=i?Fa:t?Na:Dr;if(a.call(r,e))return o(n.get(e));if(a.call(r,s))return o(n.get(s));n!==r&&n.get(e)}function $r(n,e=!1){const t=this.__v_raw,i=je(t),r=je(n);return e||(n!==r&&Dt(i,"has",n),Dt(i,"has",r)),n===r?t.has(n):t.has(n)||t.has(r)}function Yr(n,e=!1){return n=n.__v_raw,!e&&Dt(je(n),"iterate",yi),Reflect.get(n,"size",n)}function ol(n){n=je(n);const e=je(this);return Os(e).has.call(e,n)||(e.add(n),zn(e,"add",n,n)),this}function al(n,e){e=je(e);const t=je(this),{has:i,get:r}=Os(t);let s=i.call(t,n);s||(n=je(n),s=i.call(t,n));const a=r.call(t,n);return t.set(n,e),s?Pr(e,a)&&zn(t,"set",n,e):zn(t,"add",n,e),this}function ll(n){const e=je(this),{has:t,get:i}=Os(e);let r=t.call(e,n);r||(n=je(n),r=t.call(e,n)),i&&i.call(e,n);const s=e.delete(n);return r&&zn(e,"delete",n,void 0),s}function cl(){const n=je(this),e=n.size!==0,t=n.clear();return e&&zn(n,"clear",void 0,void 0),t}function Kr(n,e){return function(i,r){const s=this,a=s.__v_raw,o=je(a),l=e?Fa:n?Na:Dr;return!n&&Dt(o,"iterate",yi),a.forEach((c,u)=>i.call(r,l(c),l(u),s))}}function Zr(n,e,t){return function(...i){const r=this.__v_raw,s=je(r),a=Xi(s),o=n==="entries"||n===Symbol.iterator&&a,l=n==="keys"&&a,c=r[n](...i),u=t?Fa:e?Na:Dr;return!e&&Dt(s,"iterate",l?ea:yi),{next(){const{value:f,done:h}=c.next();return h?{value:f,done:h}:{value:o?[u(f[0]),u(f[1])]:u(f),done:h}},[Symbol.iterator](){return this}}}}function Nn(n){return function(...e){return n==="delete"?!1:this}}function Bh(){const n={get(s){return jr(this,s)},get size(){return Yr(this)},has:$r,add:ol,set:al,delete:ll,clear:cl,forEach:Kr(!1,!1)},e={get(s){return jr(this,s,!1,!0)},get size(){return Yr(this)},has:$r,add:ol,set:al,delete:ll,clear:cl,forEach:Kr(!1,!0)},t={get(s){return jr(this,s,!0)},get size(){return Yr(this,!0)},has(s){return $r.call(this,s,!0)},add:Nn("add"),set:Nn("set"),delete:Nn("delete"),clear:Nn("clear"),forEach:Kr(!0,!1)},i={get(s){return jr(this,s,!0,!0)},get size(){return Yr(this,!0)},has(s){return $r.call(this,s,!0)},add:Nn("add"),set:Nn("set"),delete:Nn("delete"),clear:Nn("clear"),forEach:Kr(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=Zr(s,!1,!1),t[s]=Zr(s,!0,!1),e[s]=Zr(s,!1,!0),i[s]=Zr(s,!0,!0)}),[n,t,e,i]}const[Hh,kh,Gh,Vh]=Bh();function za(n,e){const t=e?n?Vh:Gh:n?kh:Hh;return(i,r,s)=>r==="__v_isReactive"?!n:r==="__v_isReadonly"?n:r==="__v_raw"?i:Reflect.get(We(t,r)&&r in i?t:i,r,s)}const Wh={get:za(!1,!1)},qh={get:za(!1,!0)},Xh={get:za(!0,!1)},Ru=new WeakMap,Pu=new WeakMap,Du=new WeakMap,jh=new WeakMap;function $h(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Yh(n){return n.__v_skip||!Object.isExtensible(n)?0:$h(gh(n))}function Gr(n){return Qi(n)?n:Oa(n,!1,Lu,Wh,Ru)}function Kh(n){return Oa(n,!1,Nh,qh,Pu)}function Iu(n){return Oa(n,!0,Oh,Xh,Du)}function Oa(n,e,t,i,r){if(!et(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const s=r.get(n);if(s)return s;const a=Yh(n);if(a===0)return n;const o=new Proxy(n,a===2?i:t);return r.set(n,o),o}function ji(n){return Qi(n)?ji(n.__v_raw):!!(n&&n.__v_isReactive)}function Qi(n){return!!(n&&n.__v_isReadonly)}function Ls(n){return!!(n&&n.__v_isShallow)}function Uu(n){return ji(n)||Qi(n)}function je(n){const e=n&&n.__v_raw;return e?je(e):n}function Fu(n){return Cs(n,"__v_skip",!0),n}const Dr=n=>et(n)?Gr(n):n,Na=n=>et(n)?Iu(n):n;function zu(n){Yn&&nn&&(n=je(n),Tu(n.dep||(n.dep=Da())))}function Ou(n,e){n=je(n);const t=n.dep;t&&ta(t)}function vt(n){return!!(n&&n.__v_isRef===!0)}function Nu(n){return Bu(n,!1)}function Zh(n){return Bu(n,!0)}function Bu(n,e){return vt(n)?n:new Jh(n,e)}class Jh{constructor(e,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?e:je(e),this._value=t?e:Dr(e)}get value(){return zu(this),this._value}set value(e){const t=this.__v_isShallow||Ls(e)||Qi(e);e=t?e:je(e),Pr(e,this._rawValue)&&(this._rawValue=e,this._value=t?e:Dr(e),Ou(this))}}function $i(n){return vt(n)?n.value:n}const Qh={get:(n,e,t)=>$i(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const r=n[e];return vt(r)&&!vt(t)?(r.value=t,!0):Reflect.set(n,e,t,i)}};function Hu(n){return ji(n)?n:new Proxy(n,Qh)}var ku;class ed{constructor(e,t,i,r){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this[ku]=!1,this._dirty=!0,this.effect=new Ia(e,()=>{this._dirty||(this._dirty=!0,Ou(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=i}get value(){const e=je(this);return zu(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}ku="__v_isReadonly";function td(n,e,t=!1){let i,r;const s=Fe(n);return s?(i=n,r=an):(i=n.get,r=n.set),new ed(i,r,s||!r,t)}function Kn(n,e,t,i){let r;try{r=i?n(...i):n()}catch(s){Ns(s,e,t)}return r}function Kt(n,e,t,i){if(Fe(n)){const s=Kn(n,e,t,i);return s&&yu(s)&&s.catch(a=>{Ns(a,e,t)}),s}const r=[];for(let s=0;s<n.length;s++)r.push(Kt(n[s],e,t,i));return r}function Ns(n,e,t,i=!0){const r=e?e.vnode:null;if(e){let s=e.parent;const a=e.proxy,o=t;for(;s;){const c=s.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](n,a,o)===!1)return}s=s.parent}const l=e.appContext.config.errorHandler;if(l){Kn(l,null,10,[n,a,o]);return}}nd(n,t,r,i)}function nd(n,e,t,i=!0){console.error(n)}let Ir=!1,na=!1;const _t=[];let gn=0;const Yi=[];let Rn=null,pi=0;const Gu=Promise.resolve();let Ba=null;function Vu(n){const e=Ba||Gu;return n?e.then(this?n.bind(this):n):e}function id(n){let e=gn+1,t=_t.length;for(;e<t;){const i=e+t>>>1;Ur(_t[i])<n?e=i+1:t=i}return e}function Ha(n){(!_t.length||!_t.includes(n,Ir&&n.allowRecurse?gn+1:gn))&&(n.id==null?_t.push(n):_t.splice(id(n.id),0,n),Wu())}function Wu(){!Ir&&!na&&(na=!0,Ba=Gu.then(Xu))}function rd(n){const e=_t.indexOf(n);e>gn&&_t.splice(e,1)}function sd(n){Ue(n)?Yi.push(...n):(!Rn||!Rn.includes(n,n.allowRecurse?pi+1:pi))&&Yi.push(n),Wu()}function ul(n,e=Ir?gn+1:0){for(;e<_t.length;e++){const t=_t[e];t&&t.pre&&(_t.splice(e,1),e--,t())}}function qu(n){if(Yi.length){const e=[...new Set(Yi)];if(Yi.length=0,Rn){Rn.push(...e);return}for(Rn=e,Rn.sort((t,i)=>Ur(t)-Ur(i)),pi=0;pi<Rn.length;pi++)Rn[pi]();Rn=null,pi=0}}const Ur=n=>n.id==null?1/0:n.id,od=(n,e)=>{const t=Ur(n)-Ur(e);if(t===0){if(n.pre&&!e.pre)return-1;if(e.pre&&!n.pre)return 1}return t};function Xu(n){na=!1,Ir=!0,_t.sort(od);const e=an;try{for(gn=0;gn<_t.length;gn++){const t=_t[gn];t&&t.active!==!1&&Kn(t,null,14)}}finally{gn=0,_t.length=0,qu(),Ir=!1,Ba=null,(_t.length||Yi.length)&&Xu()}}function ad(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||Qe;let r=t;const s=e.startsWith("update:"),a=s&&e.slice(7);if(a&&a in i){const u=`${a==="modelValue"?"model":a}Modifiers`,{number:f,trim:h}=i[u]||Qe;h&&(r=t.map(m=>dt(m)?m.trim():m)),f&&(r=t.map(xh))}let o,l=i[o=ro(e)]||i[o=ro(xn(e))];!l&&s&&(l=i[o=ro(ar(e))]),l&&Kt(l,n,6,r);const c=i[o+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[o])return;n.emitted[o]=!0,Kt(c,n,6,r)}}function ju(n,e,t=!1){const i=e.emitsCache,r=i.get(n);if(r!==void 0)return r;const s=n.emits;let a={},o=!1;if(!Fe(n)){const l=c=>{const u=ju(c,e,!0);u&&(o=!0,yt(a,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!s&&!o?(et(n)&&i.set(n,null),null):(Ue(s)?s.forEach(l=>a[l]=null):yt(a,s),et(n)&&i.set(n,a),a)}function Bs(n,e){return!n||!Is(e)?!1:(e=e.slice(2).replace(/Once$/,""),We(n,e[0].toLowerCase()+e.slice(1))||We(n,ar(e))||We(n,e))}let Yt=null,Hs=null;function Rs(n){const e=Yt;return Yt=n,Hs=n&&n.type.__scopeId||null,e}function ld(n){Hs=n}function cd(){Hs=null}function ud(n,e=Yt,t){if(!e||n._n)return n;const i=(...r)=>{i._d&&Ml(-1);const s=Rs(e);let a;try{a=n(...r)}finally{Rs(s),i._d&&Ml(1)}return a};return i._n=!0,i._c=!0,i._d=!0,i}function oo(n){const{type:e,vnode:t,proxy:i,withProxy:r,props:s,propsOptions:[a],slots:o,attrs:l,emit:c,render:u,renderCache:f,data:h,setupState:m,ctx:_,inheritAttrs:p}=n;let d,v;const E=Rs(n);try{if(t.shapeFlag&4){const S=r||i;d=pn(u.call(S,S,f,s,m,h,_)),v=l}else{const S=e;d=pn(S.length>1?S(s,{attrs:l,slots:o,emit:c}):S(s,null)),v=e.props?l:fd(l)}}catch(S){Cr.length=0,Ns(S,n,1),d=Bt(Un)}let x=d;if(v&&p!==!1){const S=Object.keys(v),{shapeFlag:T}=x;S.length&&T&7&&(a&&S.some(Ca)&&(v=hd(v,a)),x=Qn(x,v))}return t.dirs&&(x=Qn(x),x.dirs=x.dirs?x.dirs.concat(t.dirs):t.dirs),t.transition&&(x.transition=t.transition),d=x,Rs(E),d}const fd=n=>{let e;for(const t in n)(t==="class"||t==="style"||Is(t))&&((e||(e={}))[t]=n[t]);return e},hd=(n,e)=>{const t={};for(const i in n)(!Ca(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function dd(n,e,t){const{props:i,children:r,component:s}=n,{props:a,children:o,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?fl(i,a,c):!!a;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const h=u[f];if(a[h]!==i[h]&&!Bs(c,h))return!0}}}else return(r||o)&&(!o||!o.$stable)?!0:i===a?!1:i?a?fl(i,a,c):!0:!!a;return!1}function fl(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(e[s]!==n[s]&&!Bs(t,s))return!0}return!1}function pd({vnode:n,parent:e},t){for(;e&&e.subTree===n;)(n=e.vnode).el=t,e=e.parent}const md=n=>n.__isSuspense;function gd(n,e){e&&e.pendingBranch?Ue(n)?e.effects.push(...n):e.effects.push(n):sd(n)}function Ss(n,e){if(it){let t=it.provides;const i=it.parent&&it.parent.provides;i===t&&(t=it.provides=Object.create(i)),t[n]=e}}function In(n,e,t=!1){const i=it||Yt;if(i){const r=i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides;if(r&&n in r)return r[n];if(arguments.length>1)return t&&Fe(e)?e.call(i.proxy):e}}const Jr={};function bs(n,e,t){return $u(n,e,t)}function $u(n,e,{immediate:t,deep:i,flush:r,onTrack:s,onTrigger:a}=Qe){const o=bh()===(it==null?void 0:it.scope)?it:null;let l,c=!1,u=!1;if(vt(n)?(l=()=>n.value,c=Ls(n)):ji(n)?(l=()=>n,i=!0):Ue(n)?(u=!0,c=n.some(x=>ji(x)||Ls(x)),l=()=>n.map(x=>{if(vt(x))return x.value;if(ji(x))return Vi(x);if(Fe(x))return Kn(x,o,2)})):Fe(n)?e?l=()=>Kn(n,o,2):l=()=>{if(!(o&&o.isUnmounted))return f&&f(),Kt(n,o,3,[h])}:l=an,e&&i){const x=l;l=()=>Vi(x())}let f,h=x=>{f=v.onStop=()=>{Kn(x,o,4)}},m;if(zr)if(h=an,e?t&&Kt(e,o,3,[l(),u?[]:void 0,h]):l(),r==="sync"){const x=hp();m=x.__watcherHandles||(x.__watcherHandles=[])}else return an;let _=u?new Array(n.length).fill(Jr):Jr;const p=()=>{if(v.active)if(e){const x=v.run();(i||c||(u?x.some((S,T)=>Pr(S,_[T])):Pr(x,_)))&&(f&&f(),Kt(e,o,3,[x,_===Jr?void 0:u&&_[0]===Jr?[]:_,h]),_=x)}else v.run()};p.allowRecurse=!!e;let d;r==="sync"?d=p:r==="post"?d=()=>Lt(p,o&&o.suspense):(p.pre=!0,o&&(p.id=o.uid),d=()=>Ha(p));const v=new Ia(l,d);e?t?p():_=v.run():r==="post"?Lt(v.run.bind(v),o&&o.suspense):v.run();const E=()=>{v.stop(),o&&o.scope&&La(o.scope.effects,v)};return m&&m.push(E),E}function _d(n,e,t){const i=this.proxy,r=dt(n)?n.includes(".")?Yu(i,n):()=>i[n]:n.bind(i,i);let s;Fe(e)?s=e:(s=e.handler,t=e);const a=it;er(this);const o=$u(r,s.bind(i),t);return a?er(a):Mi(),o}function Yu(n,e){const t=e.split(".");return()=>{let i=n;for(let r=0;r<t.length&&i;r++)i=i[t[r]];return i}}function Vi(n,e){if(!et(n)||n.__v_skip||(e=e||new Set,e.has(n)))return n;if(e.add(n),vt(n))Vi(n.value,e);else if(Ue(n))for(let t=0;t<n.length;t++)Vi(n[t],e);else if(xu(n)||Xi(n))n.forEach(t=>{Vi(t,e)});else if(Su(n))for(const t in n)Vi(n[t],e);return n}function vd(){const n={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Qu(()=>{n.isMounted=!0}),ef(()=>{n.isUnmounting=!0}),n}const Wt=[Function,Array],xd={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Wt,onEnter:Wt,onAfterEnter:Wt,onEnterCancelled:Wt,onBeforeLeave:Wt,onLeave:Wt,onAfterLeave:Wt,onLeaveCancelled:Wt,onBeforeAppear:Wt,onAppear:Wt,onAfterAppear:Wt,onAppearCancelled:Wt},setup(n,{slots:e}){const t=rp(),i=vd();let r;return()=>{const s=e.default&&Zu(e.default(),!0);if(!s||!s.length)return;let a=s[0];if(s.length>1){for(const p of s)if(p.type!==Un){a=p;break}}const o=je(n),{mode:l}=o;if(i.isLeaving)return ao(a);const c=hl(a);if(!c)return ao(a);const u=ia(c,o,i,t);ra(c,u);const f=t.subTree,h=f&&hl(f);let m=!1;const{getTransitionKey:_}=c.type;if(_){const p=_();r===void 0?r=p:p!==r&&(r=p,m=!0)}if(h&&h.type!==Un&&(!mi(c,h)||m)){const p=ia(h,o,i,t);if(ra(h,p),l==="out-in")return i.isLeaving=!0,p.afterLeave=()=>{i.isLeaving=!1,t.update.active!==!1&&t.update()},ao(a);l==="in-out"&&c.type!==Un&&(p.delayLeave=(d,v,E)=>{const x=Ku(i,h);x[String(h.key)]=h,d._leaveCb=()=>{v(),d._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=E})}return a}}},yd=xd;function Ku(n,e){const{leavingVNodes:t}=n;let i=t.get(e.type);return i||(i=Object.create(null),t.set(e.type,i)),i}function ia(n,e,t,i){const{appear:r,mode:s,persisted:a=!1,onBeforeEnter:o,onEnter:l,onAfterEnter:c,onEnterCancelled:u,onBeforeLeave:f,onLeave:h,onAfterLeave:m,onLeaveCancelled:_,onBeforeAppear:p,onAppear:d,onAfterAppear:v,onAppearCancelled:E}=e,x=String(n.key),S=Ku(t,n),T=(y,C)=>{y&&Kt(y,i,9,C)},P=(y,C)=>{const I=C[1];T(y,C),Ue(y)?y.every(Z=>Z.length<=1)&&I():y.length<=1&&I()},F={mode:s,persisted:a,beforeEnter(y){let C=o;if(!t.isMounted)if(r)C=p||o;else return;y._leaveCb&&y._leaveCb(!0);const I=S[x];I&&mi(n,I)&&I.el._leaveCb&&I.el._leaveCb(),T(C,[y])},enter(y){let C=l,I=c,Z=u;if(!t.isMounted)if(r)C=d||l,I=v||c,Z=E||u;else return;let Y=!1;const B=y._enterCb=z=>{Y||(Y=!0,z?T(Z,[y]):T(I,[y]),F.delayedLeave&&F.delayedLeave(),y._enterCb=void 0)};C?P(C,[y,B]):B()},leave(y,C){const I=String(n.key);if(y._enterCb&&y._enterCb(!0),t.isUnmounting)return C();T(f,[y]);let Z=!1;const Y=y._leaveCb=B=>{Z||(Z=!0,C(),B?T(_,[y]):T(m,[y]),y._leaveCb=void 0,S[I]===n&&delete S[I])};S[I]=n,h?P(h,[y,Y]):Y()},clone(y){return ia(y,e,t,i)}};return F}function ao(n){if(ks(n))return n=Qn(n),n.children=null,n}function hl(n){return ks(n)?n.children?n.children[0]:void 0:n}function ra(n,e){n.shapeFlag&6&&n.component?ra(n.component.subTree,e):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function Zu(n,e=!1,t){let i=[],r=0;for(let s=0;s<n.length;s++){let a=n[s];const o=t==null?a.key:String(t)+String(a.key!=null?a.key:s);a.type===Xt?(a.patchFlag&128&&r++,i=i.concat(Zu(a.children,e,o))):(e||a.type!==Un)&&i.push(o!=null?Qn(a,{key:o}):a)}if(r>1)for(let s=0;s<i.length;s++)i[s].patchFlag=-2;return i}function ka(n){return Fe(n)?{setup:n,name:n.name}:n}const ws=n=>!!n.type.__asyncLoader,ks=n=>n.type.__isKeepAlive;function Md(n,e){Ju(n,"a",e)}function Sd(n,e){Ju(n,"da",e)}function Ju(n,e,t=it){const i=n.__wdc||(n.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return n()});if(Gs(e,i,t),t){let r=t.parent;for(;r&&r.parent;)ks(r.parent.vnode)&&bd(i,e,t,r),r=r.parent}}function bd(n,e,t,i){const r=Gs(e,n,i,!0);tf(()=>{La(i[e],r)},t)}function Gs(n,e,t=it,i=!1){if(t){const r=t[n]||(t[n]=[]),s=e.__weh||(e.__weh=(...a)=>{if(t.isUnmounted)return;lr(),er(t);const o=Kt(e,t,n,a);return Mi(),cr(),o});return i?r.unshift(s):r.push(s),s}}const On=n=>(e,t=it)=>(!zr||n==="sp")&&Gs(n,(...i)=>e(...i),t),wd=On("bm"),Qu=On("m"),Ed=On("bu"),Td=On("u"),ef=On("bum"),tf=On("um"),Ad=On("sp"),Cd=On("rtg"),Ld=On("rtc");function Rd(n,e=it){Gs("ec",n,e)}function oi(n,e,t,i){const r=n.dirs,s=e&&e.dirs;for(let a=0;a<r.length;a++){const o=r[a];s&&(o.oldValue=s[a].value);let l=o.dir[i];l&&(lr(),Kt(l,t,8,[n.el,o,n,e]),cr())}}const nf="components";function dl(n,e){return Dd(nf,n,!0,e)||n}const Pd=Symbol();function Dd(n,e,t=!0,i=!1){const r=Yt||it;if(r){const s=r.type;if(n===nf){const o=cp(s,!1);if(o&&(o===e||o===xn(e)||o===zs(xn(e))))return s}const a=pl(r[n]||s[n],e)||pl(r.appContext[n],e);return!a&&i?s:a}}function pl(n,e){return n&&(n[e]||n[xn(e)]||n[zs(xn(e))])}const sa=n=>n?df(n)?qa(n)||n.proxy:sa(n.parent):null,Ar=yt(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>sa(n.parent),$root:n=>sa(n.root),$emit:n=>n.emit,$options:n=>Ga(n),$forceUpdate:n=>n.f||(n.f=()=>Ha(n.update)),$nextTick:n=>n.n||(n.n=Vu.bind(n.proxy)),$watch:n=>_d.bind(n)}),lo=(n,e)=>n!==Qe&&!n.__isScriptSetup&&We(n,e),Id={get({_:n},e){const{ctx:t,setupState:i,data:r,props:s,accessCache:a,type:o,appContext:l}=n;let c;if(e[0]!=="$"){const m=a[e];if(m!==void 0)switch(m){case 1:return i[e];case 2:return r[e];case 4:return t[e];case 3:return s[e]}else{if(lo(i,e))return a[e]=1,i[e];if(r!==Qe&&We(r,e))return a[e]=2,r[e];if((c=n.propsOptions[0])&&We(c,e))return a[e]=3,s[e];if(t!==Qe&&We(t,e))return a[e]=4,t[e];oa&&(a[e]=0)}}const u=Ar[e];let f,h;if(u)return e==="$attrs"&&Dt(n,"get",e),u(n);if((f=o.__cssModules)&&(f=f[e]))return f;if(t!==Qe&&We(t,e))return a[e]=4,t[e];if(h=l.config.globalProperties,We(h,e))return h[e]},set({_:n},e,t){const{data:i,setupState:r,ctx:s}=n;return lo(r,e)?(r[e]=t,!0):i!==Qe&&We(i,e)?(i[e]=t,!0):We(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(s[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:r,propsOptions:s}},a){let o;return!!t[a]||n!==Qe&&We(n,a)||lo(e,a)||(o=s[0])&&We(o,a)||We(i,a)||We(Ar,a)||We(r.config.globalProperties,a)},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:We(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};let oa=!0;function Ud(n){const e=Ga(n),t=n.proxy,i=n.ctx;oa=!1,e.beforeCreate&&ml(e.beforeCreate,n,"bc");const{data:r,computed:s,methods:a,watch:o,provide:l,inject:c,created:u,beforeMount:f,mounted:h,beforeUpdate:m,updated:_,activated:p,deactivated:d,beforeDestroy:v,beforeUnmount:E,destroyed:x,unmounted:S,render:T,renderTracked:P,renderTriggered:F,errorCaptured:y,serverPrefetch:C,expose:I,inheritAttrs:Z,components:Y,directives:B,filters:z}=e;if(c&&Fd(c,i,null,n.appContext.config.unwrapInjectedRef),a)for(const se in a){const W=a[se];Fe(W)&&(i[se]=W.bind(t))}if(r){const se=r.call(t,t);et(se)&&(n.data=Gr(se))}if(oa=!0,s)for(const se in s){const W=s[se],fe=Fe(W)?W.bind(t,t):Fe(W.get)?W.get.bind(t,t):an,le=!Fe(W)&&Fe(W.set)?W.set.bind(t):an,Te=$t({get:fe,set:le});Object.defineProperty(i,se,{enumerable:!0,configurable:!0,get:()=>Te.value,set:k=>Te.value=k})}if(o)for(const se in o)rf(o[se],i,t,se);if(l){const se=Fe(l)?l.call(t):l;Reflect.ownKeys(se).forEach(W=>{Ss(W,se[W])})}u&&ml(u,n,"c");function re(se,W){Ue(W)?W.forEach(fe=>se(fe.bind(t))):W&&se(W.bind(t))}if(re(wd,f),re(Qu,h),re(Ed,m),re(Td,_),re(Md,p),re(Sd,d),re(Rd,y),re(Ld,P),re(Cd,F),re(ef,E),re(tf,S),re(Ad,C),Ue(I))if(I.length){const se=n.exposed||(n.exposed={});I.forEach(W=>{Object.defineProperty(se,W,{get:()=>t[W],set:fe=>t[W]=fe})})}else n.exposed||(n.exposed={});T&&n.render===an&&(n.render=T),Z!=null&&(n.inheritAttrs=Z),Y&&(n.components=Y),B&&(n.directives=B)}function Fd(n,e,t=an,i=!1){Ue(n)&&(n=aa(n));for(const r in n){const s=n[r];let a;et(s)?"default"in s?a=In(s.from||r,s.default,!0):a=In(s.from||r):a=In(s),vt(a)&&i?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>a.value,set:o=>a.value=o}):e[r]=a}}function ml(n,e,t){Kt(Ue(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function rf(n,e,t,i){const r=i.includes(".")?Yu(t,i):()=>t[i];if(dt(n)){const s=e[n];Fe(s)&&bs(r,s)}else if(Fe(n))bs(r,n.bind(t));else if(et(n))if(Ue(n))n.forEach(s=>rf(s,e,t,i));else{const s=Fe(n.handler)?n.handler.bind(t):e[n.handler];Fe(s)&&bs(r,s,n)}}function Ga(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:a}}=n.appContext,o=s.get(e);let l;return o?l=o:!r.length&&!t&&!i?l=e:(l={},r.length&&r.forEach(c=>Ps(l,c,a,!0)),Ps(l,e,a)),et(e)&&s.set(e,l),l}function Ps(n,e,t,i=!1){const{mixins:r,extends:s}=e;s&&Ps(n,s,t,!0),r&&r.forEach(a=>Ps(n,a,t,!0));for(const a in e)if(!(i&&a==="expose")){const o=zd[a]||t&&t[a];n[a]=o?o(n[a],e[a]):e[a]}return n}const zd={data:gl,props:fi,emits:fi,methods:fi,computed:fi,beforeCreate:wt,created:wt,beforeMount:wt,mounted:wt,beforeUpdate:wt,updated:wt,beforeDestroy:wt,beforeUnmount:wt,destroyed:wt,unmounted:wt,activated:wt,deactivated:wt,errorCaptured:wt,serverPrefetch:wt,components:fi,directives:fi,watch:Nd,provide:gl,inject:Od};function gl(n,e){return e?n?function(){return yt(Fe(n)?n.call(this,this):n,Fe(e)?e.call(this,this):e)}:e:n}function Od(n,e){return fi(aa(n),aa(e))}function aa(n){if(Ue(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function wt(n,e){return n?[...new Set([].concat(n,e))]:e}function fi(n,e){return n?yt(yt(Object.create(null),n),e):e}function Nd(n,e){if(!n)return e;if(!e)return n;const t=yt(Object.create(null),n);for(const i in e)t[i]=wt(n[i],e[i]);return t}function Bd(n,e,t,i=!1){const r={},s={};Cs(s,Ws,1),n.propsDefaults=Object.create(null),sf(n,e,r,s);for(const a in n.propsOptions[0])a in r||(r[a]=void 0);t?n.props=i?r:Kh(r):n.type.props?n.props=r:n.props=s,n.attrs=s}function Hd(n,e,t,i){const{props:r,attrs:s,vnode:{patchFlag:a}}=n,o=je(r),[l]=n.propsOptions;let c=!1;if((i||a>0)&&!(a&16)){if(a&8){const u=n.vnode.dynamicProps;for(let f=0;f<u.length;f++){let h=u[f];if(Bs(n.emitsOptions,h))continue;const m=e[h];if(l)if(We(s,h))m!==s[h]&&(s[h]=m,c=!0);else{const _=xn(h);r[_]=la(l,o,_,m,n,!1)}else m!==s[h]&&(s[h]=m,c=!0)}}}else{sf(n,e,r,s)&&(c=!0);let u;for(const f in o)(!e||!We(e,f)&&((u=ar(f))===f||!We(e,u)))&&(l?t&&(t[f]!==void 0||t[u]!==void 0)&&(r[f]=la(l,o,f,void 0,n,!0)):delete r[f]);if(s!==o)for(const f in s)(!e||!We(e,f))&&(delete s[f],c=!0)}c&&zn(n,"set","$attrs")}function sf(n,e,t,i){const[r,s]=n.propsOptions;let a=!1,o;if(e)for(let l in e){if(Ms(l))continue;const c=e[l];let u;r&&We(r,u=xn(l))?!s||!s.includes(u)?t[u]=c:(o||(o={}))[u]=c:Bs(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,a=!0)}if(s){const l=je(t),c=o||Qe;for(let u=0;u<s.length;u++){const f=s[u];t[f]=la(r,l,f,c[f],n,!We(c,f))}}return a}function la(n,e,t,i,r,s){const a=n[t];if(a!=null){const o=We(a,"default");if(o&&i===void 0){const l=a.default;if(a.type!==Function&&Fe(l)){const{propsDefaults:c}=r;t in c?i=c[t]:(er(r),i=c[t]=l.call(null,e),Mi())}else i=l}a[0]&&(s&&!o?i=!1:a[1]&&(i===""||i===ar(t))&&(i=!0))}return i}function of(n,e,t=!1){const i=e.propsCache,r=i.get(n);if(r)return r;const s=n.props,a={},o=[];let l=!1;if(!Fe(n)){const u=f=>{l=!0;const[h,m]=of(f,e,!0);yt(a,h),m&&o.push(...m)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!s&&!l)return et(n)&&i.set(n,qi),qi;if(Ue(s))for(let u=0;u<s.length;u++){const f=xn(s[u]);_l(f)&&(a[f]=Qe)}else if(s)for(const u in s){const f=xn(u);if(_l(f)){const h=s[u],m=a[f]=Ue(h)||Fe(h)?{type:h}:Object.assign({},h);if(m){const _=yl(Boolean,m.type),p=yl(String,m.type);m[0]=_>-1,m[1]=p<0||_<p,(_>-1||We(m,"default"))&&o.push(f)}}}const c=[a,o];return et(n)&&i.set(n,c),c}function _l(n){return n[0]!=="$"}function vl(n){const e=n&&n.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:n===null?"null":""}function xl(n,e){return vl(n)===vl(e)}function yl(n,e){return Ue(e)?e.findIndex(t=>xl(t,n)):Fe(e)&&xl(e,n)?0:-1}const af=n=>n[0]==="_"||n==="$stable",Va=n=>Ue(n)?n.map(pn):[pn(n)],kd=(n,e,t)=>{if(e._n)return e;const i=ud((...r)=>Va(e(...r)),t);return i._c=!1,i},lf=(n,e,t)=>{const i=n._ctx;for(const r in n){if(af(r))continue;const s=n[r];if(Fe(s))e[r]=kd(r,s,i);else if(s!=null){const a=Va(s);e[r]=()=>a}}},cf=(n,e)=>{const t=Va(e);n.slots.default=()=>t},Gd=(n,e)=>{if(n.vnode.shapeFlag&32){const t=e._;t?(n.slots=je(e),Cs(e,"_",t)):lf(e,n.slots={})}else n.slots={},e&&cf(n,e);Cs(n.slots,Ws,1)},Vd=(n,e,t)=>{const{vnode:i,slots:r}=n;let s=!0,a=Qe;if(i.shapeFlag&32){const o=e._;o?t&&o===1?s=!1:(yt(r,e),!t&&o===1&&delete r._):(s=!e.$stable,lf(e,r)),a=e}else e&&(cf(n,e),a={default:1});if(s)for(const o in r)!af(o)&&!(o in a)&&delete r[o]};function uf(){return{app:null,config:{isNativeTag:dh,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Wd=0;function qd(n,e){return function(i,r=null){Fe(i)||(i=Object.assign({},i)),r!=null&&!et(r)&&(r=null);const s=uf(),a=new Set;let o=!1;const l=s.app={_uid:Wd++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:dp,get config(){return s.config},set config(c){},use(c,...u){return a.has(c)||(c&&Fe(c.install)?(a.add(c),c.install(l,...u)):Fe(c)&&(a.add(c),c(l,...u))),l},mixin(c){return s.mixins.includes(c)||s.mixins.push(c),l},component(c,u){return u?(s.components[c]=u,l):s.components[c]},directive(c,u){return u?(s.directives[c]=u,l):s.directives[c]},mount(c,u,f){if(!o){const h=Bt(i,r);return h.appContext=s,u&&e?e(h,c):n(h,c,f),o=!0,l._container=c,c.__vue_app__=l,qa(h.component)||h.component.proxy}},unmount(){o&&(n(null,l._container),delete l._container.__vue_app__)},provide(c,u){return s.provides[c]=u,l}};return l}}function ca(n,e,t,i,r=!1){if(Ue(n)){n.forEach((h,m)=>ca(h,e&&(Ue(e)?e[m]:e),t,i,r));return}if(ws(i)&&!r)return;const s=i.shapeFlag&4?qa(i.component)||i.component.proxy:i.el,a=r?null:s,{i:o,r:l}=n,c=e&&e.r,u=o.refs===Qe?o.refs={}:o.refs,f=o.setupState;if(c!=null&&c!==l&&(dt(c)?(u[c]=null,We(f,c)&&(f[c]=null)):vt(c)&&(c.value=null)),Fe(l))Kn(l,o,12,[a,u]);else{const h=dt(l),m=vt(l);if(h||m){const _=()=>{if(n.f){const p=h?We(f,l)?f[l]:u[l]:l.value;r?Ue(p)&&La(p,s):Ue(p)?p.includes(s)||p.push(s):h?(u[l]=[s],We(f,l)&&(f[l]=u[l])):(l.value=[s],n.k&&(u[n.k]=l.value))}else h?(u[l]=a,We(f,l)&&(f[l]=a)):m&&(l.value=a,n.k&&(u[n.k]=a))};a?(_.id=-1,Lt(_,t)):_()}}}const Lt=gd;function Xd(n){return jd(n)}function jd(n,e){const t=yh();t.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:a,createText:o,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:h,setScopeId:m=an,insertStaticContent:_}=n,p=(b,R,G,X=null,Q=null,ce=null,pe=!1,oe=null,me=!!R.dynamicChildren)=>{if(b===R)return;b&&!mi(b,R)&&(X=q(b),k(b,Q,ce,!0),b=null),R.patchFlag===-2&&(me=!1,R.dynamicChildren=null);const{type:ae,ref:M,shapeFlag:g}=R;switch(ae){case Vs:d(b,R,G,X);break;case Un:v(b,R,G,X);break;case co:b==null&&E(R,G,X,pe);break;case Xt:Y(b,R,G,X,Q,ce,pe,oe,me);break;default:g&1?T(b,R,G,X,Q,ce,pe,oe,me):g&6?B(b,R,G,X,Q,ce,pe,oe,me):(g&64||g&128)&&ae.process(b,R,G,X,Q,ce,pe,oe,me,de)}M!=null&&Q&&ca(M,b&&b.ref,ce,R||b,!R)},d=(b,R,G,X)=>{if(b==null)i(R.el=o(R.children),G,X);else{const Q=R.el=b.el;R.children!==b.children&&c(Q,R.children)}},v=(b,R,G,X)=>{b==null?i(R.el=l(R.children||""),G,X):R.el=b.el},E=(b,R,G,X)=>{[b.el,b.anchor]=_(b.children,R,G,X,b.el,b.anchor)},x=({el:b,anchor:R},G,X)=>{let Q;for(;b&&b!==R;)Q=h(b),i(b,G,X),b=Q;i(R,G,X)},S=({el:b,anchor:R})=>{let G;for(;b&&b!==R;)G=h(b),r(b),b=G;r(R)},T=(b,R,G,X,Q,ce,pe,oe,me)=>{pe=pe||R.type==="svg",b==null?P(R,G,X,Q,ce,pe,oe,me):C(b,R,Q,ce,pe,oe,me)},P=(b,R,G,X,Q,ce,pe,oe)=>{let me,ae;const{type:M,props:g,shapeFlag:U,transition:$,dirs:ee}=b;if(me=b.el=a(b.type,ce,g&&g.is,g),U&8?u(me,b.children):U&16&&y(b.children,me,null,X,Q,ce&&M!=="foreignObject",pe,oe),ee&&oi(b,null,X,"created"),F(me,b,b.scopeId,pe,X),g){for(const _e in g)_e!=="value"&&!Ms(_e)&&s(me,_e,null,g[_e],ce,b.children,X,Q,j);"value"in g&&s(me,"value",null,g.value),(ae=g.onVnodeBeforeMount)&&fn(ae,X,b)}ee&&oi(b,null,X,"beforeMount");const he=(!Q||Q&&!Q.pendingBranch)&&$&&!$.persisted;he&&$.beforeEnter(me),i(me,R,G),((ae=g&&g.onVnodeMounted)||he||ee)&&Lt(()=>{ae&&fn(ae,X,b),he&&$.enter(me),ee&&oi(b,null,X,"mounted")},Q)},F=(b,R,G,X,Q)=>{if(G&&m(b,G),X)for(let ce=0;ce<X.length;ce++)m(b,X[ce]);if(Q){let ce=Q.subTree;if(R===ce){const pe=Q.vnode;F(b,pe,pe.scopeId,pe.slotScopeIds,Q.parent)}}},y=(b,R,G,X,Q,ce,pe,oe,me=0)=>{for(let ae=me;ae<b.length;ae++){const M=b[ae]=oe?Xn(b[ae]):pn(b[ae]);p(null,M,R,G,X,Q,ce,pe,oe)}},C=(b,R,G,X,Q,ce,pe)=>{const oe=R.el=b.el;let{patchFlag:me,dynamicChildren:ae,dirs:M}=R;me|=b.patchFlag&16;const g=b.props||Qe,U=R.props||Qe;let $;G&&ai(G,!1),($=U.onVnodeBeforeUpdate)&&fn($,G,R,b),M&&oi(R,b,G,"beforeUpdate"),G&&ai(G,!0);const ee=Q&&R.type!=="foreignObject";if(ae?I(b.dynamicChildren,ae,oe,G,X,ee,ce):pe||W(b,R,oe,null,G,X,ee,ce,!1),me>0){if(me&16)Z(oe,R,g,U,G,X,Q);else if(me&2&&g.class!==U.class&&s(oe,"class",null,U.class,Q),me&4&&s(oe,"style",g.style,U.style,Q),me&8){const he=R.dynamicProps;for(let _e=0;_e<he.length;_e++){const L=he[_e],O=g[L],be=U[L];(be!==O||L==="value")&&s(oe,L,O,be,Q,b.children,G,X,j)}}me&1&&b.children!==R.children&&u(oe,R.children)}else!pe&&ae==null&&Z(oe,R,g,U,G,X,Q);(($=U.onVnodeUpdated)||M)&&Lt(()=>{$&&fn($,G,R,b),M&&oi(R,b,G,"updated")},X)},I=(b,R,G,X,Q,ce,pe)=>{for(let oe=0;oe<R.length;oe++){const me=b[oe],ae=R[oe],M=me.el&&(me.type===Xt||!mi(me,ae)||me.shapeFlag&70)?f(me.el):G;p(me,ae,M,null,X,Q,ce,pe,!0)}},Z=(b,R,G,X,Q,ce,pe)=>{if(G!==X){if(G!==Qe)for(const oe in G)!Ms(oe)&&!(oe in X)&&s(b,oe,G[oe],null,pe,R.children,Q,ce,j);for(const oe in X){if(Ms(oe))continue;const me=X[oe],ae=G[oe];me!==ae&&oe!=="value"&&s(b,oe,ae,me,pe,R.children,Q,ce,j)}"value"in X&&s(b,"value",G.value,X.value)}},Y=(b,R,G,X,Q,ce,pe,oe,me)=>{const ae=R.el=b?b.el:o(""),M=R.anchor=b?b.anchor:o("");let{patchFlag:g,dynamicChildren:U,slotScopeIds:$}=R;$&&(oe=oe?oe.concat($):$),b==null?(i(ae,G,X),i(M,G,X),y(R.children,G,M,Q,ce,pe,oe,me)):g>0&&g&64&&U&&b.dynamicChildren?(I(b.dynamicChildren,U,G,Q,ce,pe,oe),(R.key!=null||Q&&R===Q.subTree)&&ff(b,R,!0)):W(b,R,G,M,Q,ce,pe,oe,me)},B=(b,R,G,X,Q,ce,pe,oe,me)=>{R.slotScopeIds=oe,b==null?R.shapeFlag&512?Q.ctx.activate(R,G,X,pe,me):z(R,G,X,Q,ce,pe,me):K(b,R,me)},z=(b,R,G,X,Q,ce,pe)=>{const oe=b.component=ip(b,X,Q);if(ks(b)&&(oe.ctx.renderer=de),sp(oe),oe.asyncDep){if(Q&&Q.registerDep(oe,re),!b.el){const me=oe.subTree=Bt(Un);v(null,me,R,G)}return}re(oe,b,R,G,Q,ce,pe)},K=(b,R,G)=>{const X=R.component=b.component;if(dd(b,R,G))if(X.asyncDep&&!X.asyncResolved){se(X,R,G);return}else X.next=R,rd(X.update),X.update();else R.el=b.el,X.vnode=R},re=(b,R,G,X,Q,ce,pe)=>{const oe=()=>{if(b.isMounted){let{next:M,bu:g,u:U,parent:$,vnode:ee}=b,he=M,_e;ai(b,!1),M?(M.el=ee.el,se(b,M,pe)):M=ee,g&&so(g),(_e=M.props&&M.props.onVnodeBeforeUpdate)&&fn(_e,$,M,ee),ai(b,!0);const L=oo(b),O=b.subTree;b.subTree=L,p(O,L,f(O.el),q(O),b,Q,ce),M.el=L.el,he===null&&pd(b,L.el),U&&Lt(U,Q),(_e=M.props&&M.props.onVnodeUpdated)&&Lt(()=>fn(_e,$,M,ee),Q)}else{let M;const{el:g,props:U}=R,{bm:$,m:ee,parent:he}=b,_e=ws(R);if(ai(b,!1),$&&so($),!_e&&(M=U&&U.onVnodeBeforeMount)&&fn(M,he,R),ai(b,!0),g&&xe){const L=()=>{b.subTree=oo(b),xe(g,b.subTree,b,Q,null)};_e?R.type.__asyncLoader().then(()=>!b.isUnmounted&&L()):L()}else{const L=b.subTree=oo(b);p(null,L,G,X,b,Q,ce),R.el=L.el}if(ee&&Lt(ee,Q),!_e&&(M=U&&U.onVnodeMounted)){const L=R;Lt(()=>fn(M,he,L),Q)}(R.shapeFlag&256||he&&ws(he.vnode)&&he.vnode.shapeFlag&256)&&b.a&&Lt(b.a,Q),b.isMounted=!0,R=G=X=null}},me=b.effect=new Ia(oe,()=>Ha(ae),b.scope),ae=b.update=()=>me.run();ae.id=b.uid,ai(b,!0),ae()},se=(b,R,G)=>{R.component=b;const X=b.vnode.props;b.vnode=R,b.next=null,Hd(b,R.props,X,G),Vd(b,R.children,G),lr(),ul(),cr()},W=(b,R,G,X,Q,ce,pe,oe,me=!1)=>{const ae=b&&b.children,M=b?b.shapeFlag:0,g=R.children,{patchFlag:U,shapeFlag:$}=R;if(U>0){if(U&128){le(ae,g,G,X,Q,ce,pe,oe,me);return}else if(U&256){fe(ae,g,G,X,Q,ce,pe,oe,me);return}}$&8?(M&16&&j(ae,Q,ce),g!==ae&&u(G,g)):M&16?$&16?le(ae,g,G,X,Q,ce,pe,oe,me):j(ae,Q,ce,!0):(M&8&&u(G,""),$&16&&y(g,G,X,Q,ce,pe,oe,me))},fe=(b,R,G,X,Q,ce,pe,oe,me)=>{b=b||qi,R=R||qi;const ae=b.length,M=R.length,g=Math.min(ae,M);let U;for(U=0;U<g;U++){const $=R[U]=me?Xn(R[U]):pn(R[U]);p(b[U],$,G,null,Q,ce,pe,oe,me)}ae>M?j(b,Q,ce,!0,!1,g):y(R,G,X,Q,ce,pe,oe,me,g)},le=(b,R,G,X,Q,ce,pe,oe,me)=>{let ae=0;const M=R.length;let g=b.length-1,U=M-1;for(;ae<=g&&ae<=U;){const $=b[ae],ee=R[ae]=me?Xn(R[ae]):pn(R[ae]);if(mi($,ee))p($,ee,G,null,Q,ce,pe,oe,me);else break;ae++}for(;ae<=g&&ae<=U;){const $=b[g],ee=R[U]=me?Xn(R[U]):pn(R[U]);if(mi($,ee))p($,ee,G,null,Q,ce,pe,oe,me);else break;g--,U--}if(ae>g){if(ae<=U){const $=U+1,ee=$<M?R[$].el:X;for(;ae<=U;)p(null,R[ae]=me?Xn(R[ae]):pn(R[ae]),G,ee,Q,ce,pe,oe,me),ae++}}else if(ae>U)for(;ae<=g;)k(b[ae],Q,ce,!0),ae++;else{const $=ae,ee=ae,he=new Map;for(ae=ee;ae<=U;ae++){const we=R[ae]=me?Xn(R[ae]):pn(R[ae]);we.key!=null&&he.set(we.key,ae)}let _e,L=0;const O=U-ee+1;let be=!1,ye=0;const Ae=new Array(O);for(ae=0;ae<O;ae++)Ae[ae]=0;for(ae=$;ae<=g;ae++){const we=b[ae];if(L>=O){k(we,Q,ce,!0);continue}let Pe;if(we.key!=null)Pe=he.get(we.key);else for(_e=ee;_e<=U;_e++)if(Ae[_e-ee]===0&&mi(we,R[_e])){Pe=_e;break}Pe===void 0?k(we,Q,ce,!0):(Ae[Pe-ee]=ae+1,Pe>=ye?ye=Pe:be=!0,p(we,R[Pe],G,null,Q,ce,pe,oe,me),L++)}const Le=be?$d(Ae):qi;for(_e=Le.length-1,ae=O-1;ae>=0;ae--){const we=ee+ae,Pe=R[we],Be=we+1<M?R[we+1].el:X;Ae[ae]===0?p(null,Pe,G,Be,Q,ce,pe,oe,me):be&&(_e<0||ae!==Le[_e]?Te(Pe,G,Be,2):_e--)}}},Te=(b,R,G,X,Q=null)=>{const{el:ce,type:pe,transition:oe,children:me,shapeFlag:ae}=b;if(ae&6){Te(b.component.subTree,R,G,X);return}if(ae&128){b.suspense.move(R,G,X);return}if(ae&64){pe.move(b,R,G,de);return}if(pe===Xt){i(ce,R,G);for(let g=0;g<me.length;g++)Te(me[g],R,G,X);i(b.anchor,R,G);return}if(pe===co){x(b,R,G);return}if(X!==2&&ae&1&&oe)if(X===0)oe.beforeEnter(ce),i(ce,R,G),Lt(()=>oe.enter(ce),Q);else{const{leave:g,delayLeave:U,afterLeave:$}=oe,ee=()=>i(ce,R,G),he=()=>{g(ce,()=>{ee(),$&&$()})};U?U(ce,ee,he):he()}else i(ce,R,G)},k=(b,R,G,X=!1,Q=!1)=>{const{type:ce,props:pe,ref:oe,children:me,dynamicChildren:ae,shapeFlag:M,patchFlag:g,dirs:U}=b;if(oe!=null&&ca(oe,null,G,b,!0),M&256){R.ctx.deactivate(b);return}const $=M&1&&U,ee=!ws(b);let he;if(ee&&(he=pe&&pe.onVnodeBeforeUnmount)&&fn(he,R,b),M&6)A(b.component,G,X);else{if(M&128){b.suspense.unmount(G,X);return}$&&oi(b,null,R,"beforeUnmount"),M&64?b.type.remove(b,R,G,Q,de,X):ae&&(ce!==Xt||g>0&&g&64)?j(ae,R,G,!1,!0):(ce===Xt&&g&384||!Q&&M&16)&&j(me,R,G),X&&ue(b)}(ee&&(he=pe&&pe.onVnodeUnmounted)||$)&&Lt(()=>{he&&fn(he,R,b),$&&oi(b,null,R,"unmounted")},G)},ue=b=>{const{type:R,el:G,anchor:X,transition:Q}=b;if(R===Xt){ve(G,X);return}if(R===co){S(b);return}const ce=()=>{r(G),Q&&!Q.persisted&&Q.afterLeave&&Q.afterLeave()};if(b.shapeFlag&1&&Q&&!Q.persisted){const{leave:pe,delayLeave:oe}=Q,me=()=>pe(G,ce);oe?oe(b.el,ce,me):me()}else ce()},ve=(b,R)=>{let G;for(;b!==R;)G=h(b),r(b),b=G;r(R)},A=(b,R,G)=>{const{bum:X,scope:Q,update:ce,subTree:pe,um:oe}=b;X&&so(X),Q.stop(),ce&&(ce.active=!1,k(pe,b,R,G)),oe&&Lt(oe,R),Lt(()=>{b.isUnmounted=!0},R),R&&R.pendingBranch&&!R.isUnmounted&&b.asyncDep&&!b.asyncResolved&&b.suspenseId===R.pendingId&&(R.deps--,R.deps===0&&R.resolve())},j=(b,R,G,X=!1,Q=!1,ce=0)=>{for(let pe=ce;pe<b.length;pe++)k(b[pe],R,G,X,Q)},q=b=>b.shapeFlag&6?q(b.component.subTree):b.shapeFlag&128?b.suspense.next():h(b.anchor||b.el),ie=(b,R,G)=>{b==null?R._vnode&&k(R._vnode,null,null,!0):p(R._vnode||null,b,R,null,null,null,G),ul(),qu(),R._vnode=b},de={p,um:k,m:Te,r:ue,mt:z,mc:y,pc:W,pbc:I,n:q,o:n};let Se,xe;return e&&([Se,xe]=e(de)),{render:ie,hydrate:Se,createApp:qd(ie,Se)}}function ai({effect:n,update:e},t){n.allowRecurse=e.allowRecurse=t}function ff(n,e,t=!1){const i=n.children,r=e.children;if(Ue(i)&&Ue(r))for(let s=0;s<i.length;s++){const a=i[s];let o=r[s];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=r[s]=Xn(r[s]),o.el=a.el),t||ff(a,o)),o.type===Vs&&(o.el=a.el)}}function $d(n){const e=n.slice(),t=[0];let i,r,s,a,o;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(r=t[t.length-1],n[r]<c){e[i]=r,t.push(i);continue}for(s=0,a=t.length-1;s<a;)o=s+a>>1,n[t[o]]<c?s=o+1:a=o;c<n[t[s]]&&(s>0&&(e[i]=t[s-1]),t[s]=i)}}for(s=t.length,a=t[s-1];s-- >0;)t[s]=a,a=e[a];return t}const Yd=n=>n.__isTeleport,Xt=Symbol(void 0),Vs=Symbol(void 0),Un=Symbol(void 0),co=Symbol(void 0),Cr=[];let on=null;function ur(n=!1){Cr.push(on=n?null:[])}function Kd(){Cr.pop(),on=Cr[Cr.length-1]||null}let Fr=1;function Ml(n){Fr+=n}function Zd(n){return n.dynamicChildren=Fr>0?on||qi:null,Kd(),Fr>0&&on&&on.push(n),n}function fr(n,e,t,i,r,s){return Zd(Ct(n,e,t,i,r,s,!0))}function ua(n){return n?n.__v_isVNode===!0:!1}function mi(n,e){return n.type===e.type&&n.key===e.key}const Ws="__vInternal",hf=({key:n})=>n??null,Es=({ref:n,ref_key:e,ref_for:t})=>n!=null?dt(n)||vt(n)||Fe(n)?{i:Yt,r:n,k:e,f:!!t}:n:null;function Ct(n,e=null,t=null,i=0,r=null,s=n===Xt?0:1,a=!1,o=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&hf(e),ref:e&&Es(e),scopeId:Hs,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Yt};return o?(Wa(l,t),s&128&&n.normalize(l)):t&&(l.shapeFlag|=dt(t)?8:16),Fr>0&&!a&&on&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&on.push(l),l}const Bt=Jd;function Jd(n,e=null,t=null,i=0,r=null,s=!1){if((!n||n===Pd)&&(n=Un),ua(n)){const o=Qn(n,e,!0);return t&&Wa(o,t),Fr>0&&!s&&on&&(o.shapeFlag&6?on[on.indexOf(n)]=o:on.push(o)),o.patchFlag|=-2,o}if(up(n)&&(n=n.__vccOpts),e){e=Qd(e);let{class:o,style:l}=e;o&&!dt(o)&&(e.class=Aa(o)),et(l)&&(Uu(l)&&!Ue(l)&&(l=yt({},l)),e.style=Ta(l))}const a=dt(n)?1:md(n)?128:Yd(n)?64:et(n)?4:Fe(n)?2:0;return Ct(n,e,t,i,r,a,s,!0)}function Qd(n){return n?Uu(n)||Ws in n?yt({},n):n:null}function Qn(n,e,t=!1){const{props:i,ref:r,patchFlag:s,children:a}=n,o=e?ep(i||{},e):i;return{__v_isVNode:!0,__v_skip:!0,type:n.type,props:o,key:o&&hf(o),ref:e&&e.ref?t&&r?Ue(r)?r.concat(Es(e)):[r,Es(e)]:Es(e):r,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==Xt?s===-1?16:s|16:s,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:n.transition,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&Qn(n.ssContent),ssFallback:n.ssFallback&&Qn(n.ssFallback),el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce}}function bi(n=" ",e=0){return Bt(Vs,null,n,e)}function pn(n){return n==null||typeof n=="boolean"?Bt(Un):Ue(n)?Bt(Xt,null,n.slice()):typeof n=="object"?Xn(n):Bt(Vs,null,String(n))}function Xn(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:Qn(n)}function Wa(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(Ue(e))t=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),Wa(n,r()),r._c&&(r._d=!0));return}else{t=32;const r=e._;!r&&!(Ws in e)?e._ctx=Yt:r===3&&Yt&&(Yt.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else Fe(e)?(e={default:e,_ctx:Yt},t=32):(e=String(e),i&64?(t=16,e=[bi(e)]):t=8);n.children=e,n.shapeFlag|=t}function ep(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=Aa([e.class,i.class]));else if(r==="style")e.style=Ta([e.style,i.style]);else if(Is(r)){const s=e[r],a=i[r];a&&s!==a&&!(Ue(s)&&s.includes(a))&&(e[r]=s?[].concat(s,a):a)}else r!==""&&(e[r]=i[r])}return e}function fn(n,e,t,i=null){Kt(n,e,7,[t,i])}const tp=uf();let np=0;function ip(n,e,t){const i=n.type,r=(e?e.appContext:n.appContext)||tp,s={uid:np++,vnode:n,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new Mh(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:of(i,r),emitsOptions:ju(i,r),emit:null,emitted:null,propsDefaults:Qe,inheritAttrs:i.inheritAttrs,ctx:Qe,data:Qe,props:Qe,attrs:Qe,slots:Qe,refs:Qe,setupState:Qe,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=ad.bind(null,s),n.ce&&n.ce(s),s}let it=null;const rp=()=>it||Yt,er=n=>{it=n,n.scope.on()},Mi=()=>{it&&it.scope.off(),it=null};function df(n){return n.vnode.shapeFlag&4}let zr=!1;function sp(n,e=!1){zr=e;const{props:t,children:i}=n.vnode,r=df(n);Bd(n,t,r,e),Gd(n,i);const s=r?op(n,e):void 0;return zr=!1,s}function op(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=Fu(new Proxy(n.ctx,Id));const{setup:i}=t;if(i){const r=n.setupContext=i.length>1?lp(n):null;er(n),lr();const s=Kn(i,n,0,[n.props,r]);if(cr(),Mi(),yu(s)){if(s.then(Mi,Mi),e)return s.then(a=>{Sl(n,a,e)}).catch(a=>{Ns(a,n,0)});n.asyncDep=s}else Sl(n,s,e)}else pf(n,e)}function Sl(n,e,t){Fe(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:et(e)&&(n.setupState=Hu(e)),pf(n,t)}let bl;function pf(n,e,t){const i=n.type;if(!n.render){if(!e&&bl&&!i.render){const r=i.template||Ga(n).template;if(r){const{isCustomElement:s,compilerOptions:a}=n.appContext.config,{delimiters:o,compilerOptions:l}=i,c=yt(yt({isCustomElement:s,delimiters:o},a),l);i.render=bl(r,c)}}n.render=i.render||an}er(n),lr(),Ud(n),cr(),Mi()}function ap(n){return new Proxy(n.attrs,{get(e,t){return Dt(n,"get","$attrs"),e[t]}})}function lp(n){const e=i=>{n.exposed=i||{}};let t;return{get attrs(){return t||(t=ap(n))},slots:n.slots,emit:n.emit,expose:e}}function qa(n){if(n.exposed)return n.exposeProxy||(n.exposeProxy=new Proxy(Hu(Fu(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in Ar)return Ar[t](n)},has(e,t){return t in e||t in Ar}}))}function cp(n,e=!0){return Fe(n)?n.displayName||n.name:n.name||e&&n.__name}function up(n){return Fe(n)&&"__vccOpts"in n}const $t=(n,e)=>td(n,e,zr);function mf(n,e,t){const i=arguments.length;return i===2?et(e)&&!Ue(e)?ua(e)?Bt(n,null,[e]):Bt(n,e):Bt(n,null,e):(i>3?t=Array.prototype.slice.call(arguments,2):i===3&&ua(t)&&(t=[t]),Bt(n,e,t))}const fp=Symbol(""),hp=()=>In(fp),dp="3.2.47",pp="http://www.w3.org/2000/svg",gi=typeof document<"u"?document:null,wl=gi&&gi.createElement("template"),mp={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const r=e?gi.createElementNS(pp,n):gi.createElement(n,t?{is:t}:void 0);return n==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:n=>gi.createTextNode(n),createComment:n=>gi.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>gi.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,r,s){const a=t?t.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),t),!(r===s||!(r=r.nextSibling)););else{wl.innerHTML=i?`<svg>${n}</svg>`:n;const o=wl.content;if(i){const l=o.firstChild;for(;l.firstChild;)o.appendChild(l.firstChild);o.removeChild(l)}e.insertBefore(o,t)}return[a?a.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}};function gp(n,e,t){const i=n._vtc;i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}function _p(n,e,t){const i=n.style,r=dt(t);if(t&&!r){if(e&&!dt(e))for(const s in e)t[s]==null&&fa(i,s,"");for(const s in t)fa(i,s,t[s])}else{const s=i.display;r?e!==t&&(i.cssText=t):e&&n.removeAttribute("style"),"_vod"in n&&(i.display=s)}}const El=/\s*!important$/;function fa(n,e,t){if(Ue(t))t.forEach(i=>fa(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=vp(n,e);El.test(t)?n.setProperty(ar(i),t.replace(El,""),"important"):n[i]=t}}const Tl=["Webkit","Moz","ms"],uo={};function vp(n,e){const t=uo[e];if(t)return t;let i=xn(e);if(i!=="filter"&&i in n)return uo[e]=i;i=zs(i);for(let r=0;r<Tl.length;r++){const s=Tl[r]+i;if(s in n)return uo[e]=s}return e}const Al="http://www.w3.org/1999/xlink";function xp(n,e,t,i,r){if(i&&e.startsWith("xlink:"))t==null?n.removeAttributeNS(Al,e.slice(6,e.length)):n.setAttributeNS(Al,e,t);else{const s=hh(e);t==null||s&&!_u(t)?n.removeAttribute(e):n.setAttribute(e,s?"":t)}}function yp(n,e,t,i,r,s,a){if(e==="innerHTML"||e==="textContent"){i&&a(i,r,s),n[e]=t??"";return}if(e==="value"&&n.tagName!=="PROGRESS"&&!n.tagName.includes("-")){n._value=t;const l=t??"";(n.value!==l||n.tagName==="OPTION")&&(n.value=l),t==null&&n.removeAttribute(e);return}let o=!1;if(t===""||t==null){const l=typeof n[e];l==="boolean"?t=_u(t):t==null&&l==="string"?(t="",o=!0):l==="number"&&(t=0,o=!0)}try{n[e]=t}catch{}o&&n.removeAttribute(e)}function Mp(n,e,t,i){n.addEventListener(e,t,i)}function Sp(n,e,t,i){n.removeEventListener(e,t,i)}function bp(n,e,t,i,r=null){const s=n._vei||(n._vei={}),a=s[e];if(i&&a)a.value=i;else{const[o,l]=wp(e);if(i){const c=s[e]=Ap(i,r);Mp(n,o,c,l)}else a&&(Sp(n,o,a,l),s[e]=void 0)}}const Cl=/(?:Once|Passive|Capture)$/;function wp(n){let e;if(Cl.test(n)){e={};let i;for(;i=n.match(Cl);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):ar(n.slice(2)),e]}let fo=0;const Ep=Promise.resolve(),Tp=()=>fo||(Ep.then(()=>fo=0),fo=Date.now());function Ap(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;Kt(Cp(i,t.value),e,5,[i])};return t.value=n,t.attached=Tp(),t}function Cp(n,e){if(Ue(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const Ll=/^on[a-z]/,Lp=(n,e,t,i,r=!1,s,a,o,l)=>{e==="class"?gp(n,i,r):e==="style"?_p(n,t,i):Is(e)?Ca(e)||bp(n,e,t,i,a):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Rp(n,e,i,r))?yp(n,e,i,s,a,o,l):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),xp(n,e,i,r))};function Rp(n,e,t,i){return i?!!(e==="innerHTML"||e==="textContent"||e in n&&Ll.test(e)&&Fe(t)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA"||Ll.test(e)&&dt(t)?!1:e in n}const Pp={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};yd.props;const Dp=yt({patchProp:Lp},mp);let Rl;function Ip(){return Rl||(Rl=Xd(Dp))}const Up=(...n)=>{const e=Ip().createApp(...n),{mount:t}=e;return e.mount=i=>{const r=Fp(i);if(!r)return;const s=e._component;!Fe(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.innerHTML="";const a=t(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),a},e};function Fp(n){return dt(n)?document.querySelector(n):n}const qs=n=>(ld("data-v-2e19c9f2"),n=n(),cd(),n),zp={class:"card"},Op=qs(()=>Ct("p",null,[bi(" Edit "),Ct("code",null,"components/HelloWorld.vue"),bi(" to test HMR ")],-1)),Np=qs(()=>Ct("p",null,[bi(" Check out "),Ct("a",{href:"https://vuejs.org/guide/quick-start.html#local",target:"_blank"},"create-vue"),bi(", the official Vue + Vite starter ")],-1)),Bp=qs(()=>Ct("p",null,[bi(" Install "),Ct("a",{href:"https://github.com/johnsoncodehk/volar",target:"_blank"},"Volar"),bi(" in your IDE for a better DX ")],-1)),Hp=qs(()=>Ct("p",{class:"read-the-docs"},"Click on the Vite and Vue logos to learn more",-1)),kp=ka({__name:"HelloWorld",props:{msg:null},setup(n){const e=Nu(0);return(t,i)=>(ur(),fr(Xt,null,[Ct("h1",null,As(n.msg),1),Ct("div",zp,[Ct("button",{type:"button",onClick:i[0]||(i[0]=r=>e.value++)},"count is "+As(e.value),1),Op]),Np,Bp,Hp],64))}});const hr=(n,e)=>{const t=n.__vccOpts||n;for(const[i,r]of e)t[i]=r;return t},Gp=hr(kp,[["__scopeId","data-v-2e19c9f2"]]);/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Xs="150",Ei={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Ti={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Vp=0,Pl=1,Wp=2,gf=1,qp=2,Er=3,ei=0,Ht=1,Dn=2,kt=0,Ki=1,Dl=2,Il=3,Ul=4,Xp=5,ki=100,jp=101,$p=102,Fl=103,zl=104,Yp=200,Kp=201,Zp=202,Jp=203,_f=204,vf=205,Qp=206,em=207,tm=208,nm=209,im=210,rm=0,sm=1,om=2,ha=3,am=4,lm=5,cm=6,um=7,Xa=0,fm=1,hm=2,Fn=0,dm=1,pm=2,mm=3,gm=4,_m=5,xf=300,tr=301,nr=302,da=303,pa=304,js=306,ma=1e3,rn=1001,ga=1002,Tt=1003,Ol=1004,ho=1005,jt=1006,vm=1007,Or=1008,yn=1009,xm=1010,ym=1011,yf=1012,Mm=1013,vi=1014,xi=1015,Nr=1016,Sm=1017,bm=1018,Zi=1020,wm=1021,sn=1023,Em=1024,Tm=1025,Si=1026,ir=1027,Am=1028,Cm=1029,Lm=1030,Rm=1031,Pm=1033,po=33776,mo=33777,go=33778,_o=33779,Nl=35840,Bl=35841,Hl=35842,kl=35843,Dm=36196,Gl=37492,Vl=37496,Wl=37808,ql=37809,Xl=37810,jl=37811,$l=37812,Yl=37813,Kl=37814,Zl=37815,Jl=37816,Ql=37817,ec=37818,tc=37819,nc=37820,ic=37821,vo=36492,Im=36283,rc=36284,sc=36285,oc=36286,ti=3e3,Xe=3001,ja=3200,Um=3201,Mf=0,Fm=1,dn="srgb",Br="srgb-linear",Sf="display-p3",xo=7680,zm=519,ac=35044,lc="300 es",_a=1035;class Mn{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const mt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],yo=Math.PI/180,cc=180/Math.PI;function Vr(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(mt[n&255]+mt[n>>8&255]+mt[n>>16&255]+mt[n>>24&255]+"-"+mt[e&255]+mt[e>>8&255]+"-"+mt[e>>16&15|64]+mt[e>>24&255]+"-"+mt[t&63|128]+mt[t>>8&255]+"-"+mt[t>>16&255]+mt[t>>24&255]+mt[i&255]+mt[i>>8&255]+mt[i>>16&255]+mt[i>>24&255]).toLowerCase()}function Rt(n,e,t){return Math.max(e,Math.min(t,n))}function Om(n,e){return(n%e+e)%e}function Mo(n,e,t){return(1-t)*n+t*e}function uc(n){return(n&n-1)===0&&n!==0}function Nm(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Qr(n,e){switch(e.constructor){case Float32Array:return n;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Ft(n,e){switch(e.constructor){case Float32Array:return n;case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class De{constructor(e=0,t=0){De.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class At{constructor(){At.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,i,r,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],f=i[7],h=i[2],m=i[5],_=i[8],p=r[0],d=r[3],v=r[6],E=r[1],x=r[4],S=r[7],T=r[2],P=r[5],F=r[8];return s[0]=a*p+o*E+l*T,s[3]=a*d+o*x+l*P,s[6]=a*v+o*S+l*F,s[1]=c*p+u*E+f*T,s[4]=c*d+u*x+f*P,s[7]=c*v+u*S+f*F,s[2]=h*p+m*E+_*T,s[5]=h*d+m*x+_*P,s[8]=h*v+m*S+_*F,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-i*s*u+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=u*a-o*c,h=o*l-u*s,m=c*s-a*l,_=t*f+i*h+r*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const p=1/_;return e[0]=f*p,e[1]=(r*c-u*i)*p,e[2]=(o*i-r*a)*p,e[3]=h*p,e[4]=(u*t-r*l)*p,e[5]=(r*s-o*t)*p,e[6]=m*p,e[7]=(i*l-c*t)*p,e[8]=(a*t-i*s)*p,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(So.makeScale(e,t)),this}rotate(e){return this.premultiply(So.makeRotation(-e)),this}translate(e,t){return this.premultiply(So.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const So=new At;function bf(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Hr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}class wi{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3];const h=s[a+0],m=s[a+1],_=s[a+2],p=s[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(o===1){e[t+0]=h,e[t+1]=m,e[t+2]=_,e[t+3]=p;return}if(f!==p||l!==h||c!==m||u!==_){let d=1-o;const v=l*h+c*m+u*_+f*p,E=v>=0?1:-1,x=1-v*v;if(x>Number.EPSILON){const T=Math.sqrt(x),P=Math.atan2(T,v*E);d=Math.sin(d*P)/T,o=Math.sin(o*P)/T}const S=o*E;if(l=l*d+h*S,c=c*d+m*S,u=u*d+_*S,f=f*d+p*S,d===1-o){const T=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=T,c*=T,u*=T,f*=T}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[a],h=s[a+1],m=s[a+2],_=s[a+3];return e[t]=o*_+u*f+l*m-c*h,e[t+1]=l*_+u*h+c*f-o*m,e[t+2]=c*_+u*m+o*h-l*f,e[t+3]=u*_-o*f-l*h-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(r/2),f=o(s/2),h=l(i/2),m=l(r/2),_=l(s/2);switch(a){case"XYZ":this._x=h*u*f+c*m*_,this._y=c*m*f-h*u*_,this._z=c*u*_+h*m*f,this._w=c*u*f-h*m*_;break;case"YXZ":this._x=h*u*f+c*m*_,this._y=c*m*f-h*u*_,this._z=c*u*_-h*m*f,this._w=c*u*f+h*m*_;break;case"ZXY":this._x=h*u*f-c*m*_,this._y=c*m*f+h*u*_,this._z=c*u*_+h*m*f,this._w=c*u*f-h*m*_;break;case"ZYX":this._x=h*u*f-c*m*_,this._y=c*m*f+h*u*_,this._z=c*u*_-h*m*f,this._w=c*u*f+h*m*_;break;case"YZX":this._x=h*u*f+c*m*_,this._y=c*m*f+h*u*_,this._z=c*u*_-h*m*f,this._w=c*u*f-h*m*_;break;case"XZY":this._x=h*u*f-c*m*_,this._y=c*m*f-h*u*_,this._z=c*u*_+h*m*f,this._w=c*u*f+h*m*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],f=t[10],h=i+o+f;if(h>0){const m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(u-l)*m,this._y=(s-c)*m,this._z=(a-r)*m}else if(i>o&&i>f){const m=2*Math.sqrt(1+i-o-f);this._w=(u-l)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+c)/m}else if(o>f){const m=2*Math.sqrt(1+o-i-f);this._w=(s-c)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+f-i-o);this._w=(a-r)/m,this._x=(s+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Rt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+a*o+r*c-s*l,this._y=r*u+a*l+s*o-i*c,this._z=s*u+a*c+i*l-r*o,this._w=a*u-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-t;return this._w=m*a+t*this._w,this._x=m*i+t*this._x,this._y=m*r+t*this._y,this._z=m*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),f=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=a*f+this._w*h,this._x=i*f+this._x*h,this._y=r*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),i*Math.sin(s),i*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{constructor(e=0,t=0,i=0){N.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(fc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(fc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=l*t+a*r-o*i,u=l*i+o*t-s*r,f=l*r+s*i-a*t,h=-s*t-a*i-o*r;return this.x=c*l+h*-s+u*-o-f*-a,this.y=u*l+h*-a+f*-s-c*-o,this.z=f*l+h*-o+c*-a-u*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return bo.copy(this).projectOnVector(e),this.sub(bo)}reflect(e){return this.sub(bo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Rt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const bo=new N,fc=new wi;function Ji(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function wo(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const Bm=new At().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),Hm=new At().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]),$n=new N;function km(n){return n.convertSRGBToLinear(),$n.set(n.r,n.g,n.b).applyMatrix3(Hm),n.setRGB($n.x,$n.y,$n.z)}function Gm(n){return $n.set(n.r,n.g,n.b).applyMatrix3(Bm),n.setRGB($n.x,$n.y,$n.z).convertLinearToSRGB()}const Vm={[Br]:n=>n,[dn]:n=>n.convertSRGBToLinear(),[Sf]:km},Wm={[Br]:n=>n,[dn]:n=>n.convertLinearToSRGB(),[Sf]:Gm},bt={enabled:!1,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(n){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!n},get workingColorSpace(){return Br},set workingColorSpace(n){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=Vm[e],r=Wm[t];if(i===void 0||r===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)}};let Ai;class wf{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ai===void 0&&(Ai=Hr("canvas")),Ai.width=e.width,Ai.height=e.height;const i=Ai.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Ai}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Hr("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Ji(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Ji(t[i]/255)*255):t[i]=Ji(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class Ef{constructor(e=null){this.isSource=!0,this.uuid=Vr(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Eo(r[a].image)):s.push(Eo(r[a]))}else s=Eo(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Eo(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?wf.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let qm=0;class xt extends Mn{constructor(e=xt.DEFAULT_IMAGE,t=xt.DEFAULT_MAPPING,i=rn,r=rn,s=jt,a=Or,o=sn,l=yn,c=xt.DEFAULT_ANISOTROPY,u=ti){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:qm++}),this.uuid=Vr(),this.name="",this.source=new Ef(e),this.mipmaps=[],this.mapping=t,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new De(0,0),this.repeat=new De(1,1),this.center=new De(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new At,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==xf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ma:e.x=e.x-Math.floor(e.x);break;case rn:e.x=e.x<0?0:1;break;case ga:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ma:e.y=e.y-Math.floor(e.y);break;case rn:e.y=e.y<0?0:1;break;case ga:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}xt.DEFAULT_IMAGE=null;xt.DEFAULT_MAPPING=xf;xt.DEFAULT_ANISOTROPY=1;class Ze{constructor(e=0,t=0,i=0,r=1){Ze.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],m=l[5],_=l[9],p=l[2],d=l[6],v=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-p)<.01&&Math.abs(_-d)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+p)<.1&&Math.abs(_+d)<.1&&Math.abs(c+m+v-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(c+1)/2,S=(m+1)/2,T=(v+1)/2,P=(u+h)/4,F=(f+p)/4,y=(_+d)/4;return x>S&&x>T?x<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(x),r=P/i,s=F/i):S>T?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=P/r,s=y/r):T<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(T),i=F/s,r=y/s),this.set(i,r,s,t),this}let E=Math.sqrt((d-_)*(d-_)+(f-p)*(f-p)+(h-u)*(h-u));return Math.abs(E)<.001&&(E=1),this.x=(d-_)/E,this.y=(f-p)/E,this.z=(h-u)/E,this.w=Math.acos((c+m+v-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Gt extends Mn{constructor(e=1,t=1,i={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Ze(0,0,e,t),this.scissorTest=!1,this.viewport=new Ze(0,0,e,t);const r={width:e,height:t,depth:1};this.texture=new xt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:jt,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Ef(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Tf extends xt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Tt,this.minFilter=Tt,this.wrapR=rn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Xm extends xt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Tt,this.minFilter=Tt,this.wrapR=rn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Wr{constructor(e=new N(1/0,1/0,1/0),t=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,i=1/0,r=1/0,s=-1/0,a=-1/0,o=-1/0;for(let l=0,c=e.length;l<c;l+=3){const u=e[l],f=e[l+1],h=e[l+2];u<t&&(t=u),f<i&&(i=f),h<r&&(r=h),u>s&&(s=u),f>a&&(a=f),h>o&&(o=h)}return this.min.set(t,i,r),this.max.set(s,a,o),this}setFromBufferAttribute(e){let t=1/0,i=1/0,r=1/0,s=-1/0,a=-1/0,o=-1/0;for(let l=0,c=e.count;l<c;l++){const u=e.getX(l),f=e.getY(l),h=e.getZ(l);u<t&&(t=u),f<i&&(i=f),h<r&&(r=h),u>s&&(s=u),f>a&&(a=f),h>o&&(o=h)}return this.min.set(t,i,r),this.max.set(s,a,o),this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=li.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0)if(t&&i.attributes!=null&&i.attributes.position!==void 0){const s=i.attributes.position;for(let a=0,o=s.count;a<o;a++)li.fromBufferAttribute(s,a).applyMatrix4(e.matrixWorld),this.expandByPoint(li)}else i.boundingBox===null&&i.computeBoundingBox(),To.copy(i.boundingBox),To.applyMatrix4(e.matrixWorld),this.union(To);const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,li),li.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(mr),es.subVectors(this.max,mr),Ci.subVectors(e.a,mr),Li.subVectors(e.b,mr),Ri.subVectors(e.c,mr),Bn.subVectors(Li,Ci),Hn.subVectors(Ri,Li),ci.subVectors(Ci,Ri);let t=[0,-Bn.z,Bn.y,0,-Hn.z,Hn.y,0,-ci.z,ci.y,Bn.z,0,-Bn.x,Hn.z,0,-Hn.x,ci.z,0,-ci.x,-Bn.y,Bn.x,0,-Hn.y,Hn.x,0,-ci.y,ci.x,0];return!Ao(t,Ci,Li,Ri,es)||(t=[1,0,0,0,1,0,0,0,1],!Ao(t,Ci,Li,Ri,es))?!1:(ts.crossVectors(Bn,Hn),t=[ts.x,ts.y,ts.z],Ao(t,Ci,Li,Ri,es))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,li).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(li).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(wn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),wn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),wn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),wn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),wn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),wn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),wn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),wn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(wn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const wn=[new N,new N,new N,new N,new N,new N,new N,new N],li=new N,To=new Wr,Ci=new N,Li=new N,Ri=new N,Bn=new N,Hn=new N,ci=new N,mr=new N,es=new N,ts=new N,ui=new N;function Ao(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){ui.fromArray(n,s);const o=r.x*Math.abs(ui.x)+r.y*Math.abs(ui.y)+r.z*Math.abs(ui.z),l=e.dot(ui),c=t.dot(ui),u=i.dot(ui);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const jm=new Wr,gr=new N,Co=new N;class $s{constructor(e=new N,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):jm.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;gr.subVectors(e,this.center);const t=gr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(gr,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Co.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(gr.copy(e.center).add(Co)),this.expandByPoint(gr.copy(e.center).sub(Co))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const En=new N,Lo=new N,ns=new N,kn=new N,Ro=new N,is=new N,Po=new N;class Af{constructor(e=new N,t=new N(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,En)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=En.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(En.copy(this.origin).addScaledVector(this.direction,t),En.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Lo.copy(e).add(t).multiplyScalar(.5),ns.copy(t).sub(e).normalize(),kn.copy(this.origin).sub(Lo);const s=e.distanceTo(t)*.5,a=-this.direction.dot(ns),o=kn.dot(this.direction),l=-kn.dot(ns),c=kn.lengthSq(),u=Math.abs(1-a*a);let f,h,m,_;if(u>0)if(f=a*l-o,h=a*o-l,_=s*u,f>=0)if(h>=-_)if(h<=_){const p=1/u;f*=p,h*=p,m=f*(f+a*h+2*o)+h*(a*f+h+2*l)+c}else h=s,f=Math.max(0,-(a*h+o)),m=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(a*h+o)),m=-f*f+h*(h+2*l)+c;else h<=-_?(f=Math.max(0,-(-a*s+o)),h=f>0?-s:Math.min(Math.max(-s,-l),s),m=-f*f+h*(h+2*l)+c):h<=_?(f=0,h=Math.min(Math.max(-s,-l),s),m=h*(h+2*l)+c):(f=Math.max(0,-(a*s+o)),h=f>0?s:Math.min(Math.max(-s,-l),s),m=-f*f+h*(h+2*l)+c);else h=a>0?-s:s,f=Math.max(0,-(a*h+o)),m=-f*f+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Lo).addScaledVector(ns,h),m}intersectSphere(e,t){En.subVectors(e.center,this.origin);const i=En.dot(this.direction),r=En.dot(En)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,a=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,a=(e.min.y-h.y)*u),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),f>=0?(o=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(o=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,En)!==null}intersectTriangle(e,t,i,r,s){Ro.subVectors(t,e),is.subVectors(i,e),Po.crossVectors(Ro,is);let a=this.direction.dot(Po),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;kn.subVectors(this.origin,e);const l=o*this.direction.dot(is.crossVectors(kn,is));if(l<0)return null;const c=o*this.direction.dot(Ro.cross(kn));if(c<0||l+c>a)return null;const u=-o*kn.dot(Po);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class tt{constructor(){tt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,i,r,s,a,o,l,c,u,f,h,m,_,p,d){const v=this.elements;return v[0]=e,v[4]=t,v[8]=i,v[12]=r,v[1]=s,v[5]=a,v[9]=o,v[13]=l,v[2]=c,v[6]=u,v[10]=f,v[14]=h,v[3]=m,v[7]=_,v[11]=p,v[15]=d,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new tt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Pi.setFromMatrixColumn(e,0).length(),s=1/Pi.setFromMatrixColumn(e,1).length(),a=1/Pi.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=a*u,m=a*f,_=o*u,p=o*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=m+_*c,t[5]=h-p*c,t[9]=-o*l,t[2]=p-h*c,t[6]=_+m*c,t[10]=a*l}else if(e.order==="YXZ"){const h=l*u,m=l*f,_=c*u,p=c*f;t[0]=h+p*o,t[4]=_*o-m,t[8]=a*c,t[1]=a*f,t[5]=a*u,t[9]=-o,t[2]=m*o-_,t[6]=p+h*o,t[10]=a*l}else if(e.order==="ZXY"){const h=l*u,m=l*f,_=c*u,p=c*f;t[0]=h-p*o,t[4]=-a*f,t[8]=_+m*o,t[1]=m+_*o,t[5]=a*u,t[9]=p-h*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const h=a*u,m=a*f,_=o*u,p=o*f;t[0]=l*u,t[4]=_*c-m,t[8]=h*c+p,t[1]=l*f,t[5]=p*c+h,t[9]=m*c-_,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const h=a*l,m=a*c,_=o*l,p=o*c;t[0]=l*u,t[4]=p-h*f,t[8]=_*f+m,t[1]=f,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=m*f+_,t[10]=h-p*f}else if(e.order==="XZY"){const h=a*l,m=a*c,_=o*l,p=o*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=h*f+p,t[5]=a*u,t[9]=m*f-_,t[2]=_*f-m,t[6]=o*u,t[10]=p*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose($m,e,Ym)}lookAt(e,t,i){const r=this.elements;return zt.subVectors(e,t),zt.lengthSq()===0&&(zt.z=1),zt.normalize(),Gn.crossVectors(i,zt),Gn.lengthSq()===0&&(Math.abs(i.z)===1?zt.x+=1e-4:zt.z+=1e-4,zt.normalize(),Gn.crossVectors(i,zt)),Gn.normalize(),rs.crossVectors(zt,Gn),r[0]=Gn.x,r[4]=rs.x,r[8]=zt.x,r[1]=Gn.y,r[5]=rs.y,r[9]=zt.y,r[2]=Gn.z,r[6]=rs.z,r[10]=zt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],f=i[5],h=i[9],m=i[13],_=i[2],p=i[6],d=i[10],v=i[14],E=i[3],x=i[7],S=i[11],T=i[15],P=r[0],F=r[4],y=r[8],C=r[12],I=r[1],Z=r[5],Y=r[9],B=r[13],z=r[2],K=r[6],re=r[10],se=r[14],W=r[3],fe=r[7],le=r[11],Te=r[15];return s[0]=a*P+o*I+l*z+c*W,s[4]=a*F+o*Z+l*K+c*fe,s[8]=a*y+o*Y+l*re+c*le,s[12]=a*C+o*B+l*se+c*Te,s[1]=u*P+f*I+h*z+m*W,s[5]=u*F+f*Z+h*K+m*fe,s[9]=u*y+f*Y+h*re+m*le,s[13]=u*C+f*B+h*se+m*Te,s[2]=_*P+p*I+d*z+v*W,s[6]=_*F+p*Z+d*K+v*fe,s[10]=_*y+p*Y+d*re+v*le,s[14]=_*C+p*B+d*se+v*Te,s[3]=E*P+x*I+S*z+T*W,s[7]=E*F+x*Z+S*K+T*fe,s[11]=E*y+x*Y+S*re+T*le,s[15]=E*C+x*B+S*se+T*Te,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],m=e[14],_=e[3],p=e[7],d=e[11],v=e[15];return _*(+s*l*f-r*c*f-s*o*h+i*c*h+r*o*m-i*l*m)+p*(+t*l*m-t*c*h+s*a*h-r*a*m+r*c*u-s*l*u)+d*(+t*c*f-t*o*m-s*a*f+i*a*m+s*o*u-i*c*u)+v*(-r*o*u-t*l*f+t*o*h+r*a*f-i*a*h+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],m=e[11],_=e[12],p=e[13],d=e[14],v=e[15],E=f*d*c-p*h*c+p*l*m-o*d*m-f*l*v+o*h*v,x=_*h*c-u*d*c-_*l*m+a*d*m+u*l*v-a*h*v,S=u*p*c-_*f*c+_*o*m-a*p*m-u*o*v+a*f*v,T=_*f*l-u*p*l-_*o*h+a*p*h+u*o*d-a*f*d,P=t*E+i*x+r*S+s*T;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const F=1/P;return e[0]=E*F,e[1]=(p*h*s-f*d*s-p*r*m+i*d*m+f*r*v-i*h*v)*F,e[2]=(o*d*s-p*l*s+p*r*c-i*d*c-o*r*v+i*l*v)*F,e[3]=(f*l*s-o*h*s-f*r*c+i*h*c+o*r*m-i*l*m)*F,e[4]=x*F,e[5]=(u*d*s-_*h*s+_*r*m-t*d*m-u*r*v+t*h*v)*F,e[6]=(_*l*s-a*d*s-_*r*c+t*d*c+a*r*v-t*l*v)*F,e[7]=(a*h*s-u*l*s+u*r*c-t*h*c-a*r*m+t*l*m)*F,e[8]=S*F,e[9]=(_*f*s-u*p*s-_*i*m+t*p*m+u*i*v-t*f*v)*F,e[10]=(a*p*s-_*o*s+_*i*c-t*p*c-a*i*v+t*o*v)*F,e[11]=(u*o*s-a*f*s-u*i*c+t*f*c+a*i*m-t*o*m)*F,e[12]=T*F,e[13]=(u*p*r-_*f*r+_*i*h-t*p*h-u*i*d+t*f*d)*F,e[14]=(_*o*r-a*p*r-_*i*l+t*p*l+a*i*d-t*o*d)*F,e[15]=(a*f*r-u*o*r+u*i*l-t*f*l-a*i*h+t*o*h)*F,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+i,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,f=o+o,h=s*c,m=s*u,_=s*f,p=a*u,d=a*f,v=o*f,E=l*c,x=l*u,S=l*f,T=i.x,P=i.y,F=i.z;return r[0]=(1-(p+v))*T,r[1]=(m+S)*T,r[2]=(_-x)*T,r[3]=0,r[4]=(m-S)*P,r[5]=(1-(h+v))*P,r[6]=(d+E)*P,r[7]=0,r[8]=(_+x)*F,r[9]=(d-E)*F,r[10]=(1-(h+p))*F,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=Pi.set(r[0],r[1],r[2]).length();const a=Pi.set(r[4],r[5],r[6]).length(),o=Pi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Jt.copy(this);const c=1/s,u=1/a,f=1/o;return Jt.elements[0]*=c,Jt.elements[1]*=c,Jt.elements[2]*=c,Jt.elements[4]*=u,Jt.elements[5]*=u,Jt.elements[6]*=u,Jt.elements[8]*=f,Jt.elements[9]*=f,Jt.elements[10]*=f,t.setFromRotationMatrix(Jt),i.x=s,i.y=a,i.z=o,this}makePerspective(e,t,i,r,s,a){const o=this.elements,l=2*s/(t-e),c=2*s/(i-r),u=(t+e)/(t-e),f=(i+r)/(i-r),h=-(a+s)/(a-s),m=-2*a*s/(a-s);return o[0]=l,o[4]=0,o[8]=u,o[12]=0,o[1]=0,o[5]=c,o[9]=f,o[13]=0,o[2]=0,o[6]=0,o[10]=h,o[14]=m,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(e,t,i,r,s,a){const o=this.elements,l=1/(t-e),c=1/(i-r),u=1/(a-s),f=(t+e)*l,h=(i+r)*c,m=(a+s)*u;return o[0]=2*l,o[4]=0,o[8]=0,o[12]=-f,o[1]=0,o[5]=2*c,o[9]=0,o[13]=-h,o[2]=0,o[6]=0,o[10]=-2*u,o[14]=-m,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Pi=new N,Jt=new tt,$m=new N(0,0,0),Ym=new N(1,1,1),Gn=new N,rs=new N,zt=new N,hc=new tt,dc=new wi;class Ys{constructor(e=0,t=0,i=0,r=Ys.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],f=r[2],h=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(Rt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Rt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Rt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Rt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Rt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Rt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return hc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(hc,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return dc.setFromEuler(this),this.setFromQuaternion(dc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ys.DEFAULT_ORDER="XYZ";class Cf{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Km=0;const pc=new N,Di=new wi,Tn=new tt,ss=new N,_r=new N,Zm=new N,Jm=new wi,mc=new N(1,0,0),gc=new N(0,1,0),_c=new N(0,0,1),Qm={type:"added"},vc={type:"removed"};class pt extends Mn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Km++}),this.uuid=Vr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=pt.DEFAULT_UP.clone();const e=new N,t=new Ys,i=new wi,r=new N(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new tt},normalMatrix:{value:new At}}),this.matrix=new tt,this.matrixWorld=new tt,this.matrixAutoUpdate=pt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=pt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Cf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Di.setFromAxisAngle(e,t),this.quaternion.multiply(Di),this}rotateOnWorldAxis(e,t){return Di.setFromAxisAngle(e,t),this.quaternion.premultiply(Di),this}rotateX(e){return this.rotateOnAxis(mc,e)}rotateY(e){return this.rotateOnAxis(gc,e)}rotateZ(e){return this.rotateOnAxis(_c,e)}translateOnAxis(e,t){return pc.copy(e).applyQuaternion(this.quaternion),this.position.add(pc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(mc,e)}translateY(e){return this.translateOnAxis(gc,e)}translateZ(e){return this.translateOnAxis(_c,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Tn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?ss.copy(e):ss.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),_r.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Tn.lookAt(_r,ss,this.up):Tn.lookAt(ss,_r,this.up),this.quaternion.setFromRotationMatrix(Tn),r&&(Tn.extractRotation(r.matrixWorld),Di.setFromRotationMatrix(Tn),this.quaternion.premultiply(Di.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Qm)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(vc)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(vc)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Tn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Tn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Tn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t){let i=[];this[e]===t&&i.push(this);for(let r=0,s=this.children.length;r<s;r++){const a=this.children[r].getObjectsByProperty(e,t);a.length>0&&(i=i.concat(a))}return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_r,e,Zm),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_r,Jm,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++){const s=t[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++){const o=r[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),f=a(e.shapes),h=a(e.skeletons),m=a(e.animations),_=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),m.length>0&&(i.animations=m),_.length>0&&(i.nodes=_)}return i.object=r,i;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}pt.DEFAULT_UP=new N(0,1,0);pt.DEFAULT_MATRIX_AUTO_UPDATE=!0;pt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Qt=new N,An=new N,Do=new N,Cn=new N,Ii=new N,Ui=new N,xc=new N,Io=new N,Uo=new N,Fo=new N;class Pn{constructor(e=new N,t=new N,i=new N){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Qt.subVectors(e,t),r.cross(Qt);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Qt.subVectors(r,t),An.subVectors(i,t),Do.subVectors(e,t);const a=Qt.dot(Qt),o=Qt.dot(An),l=Qt.dot(Do),c=An.dot(An),u=An.dot(Do),f=a*c-o*o;if(f===0)return s.set(-2,-1,-1);const h=1/f,m=(c*l-o*u)*h,_=(a*u-o*l)*h;return s.set(1-m-_,_,m)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Cn),Cn.x>=0&&Cn.y>=0&&Cn.x+Cn.y<=1}static getUV(e,t,i,r,s,a,o,l){return this.getBarycoord(e,t,i,r,Cn),l.set(0,0),l.addScaledVector(s,Cn.x),l.addScaledVector(a,Cn.y),l.addScaledVector(o,Cn.z),l}static isFrontFacing(e,t,i,r){return Qt.subVectors(i,t),An.subVectors(e,t),Qt.cross(An).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Qt.subVectors(this.c,this.b),An.subVectors(this.a,this.b),Qt.cross(An).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Pn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Pn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,r,s){return Pn.getUV(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return Pn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Pn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let a,o;Ii.subVectors(r,i),Ui.subVectors(s,i),Io.subVectors(e,i);const l=Ii.dot(Io),c=Ui.dot(Io);if(l<=0&&c<=0)return t.copy(i);Uo.subVectors(e,r);const u=Ii.dot(Uo),f=Ui.dot(Uo);if(u>=0&&f<=u)return t.copy(r);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(i).addScaledVector(Ii,a);Fo.subVectors(e,s);const m=Ii.dot(Fo),_=Ui.dot(Fo);if(_>=0&&m<=_)return t.copy(s);const p=m*c-l*_;if(p<=0&&c>=0&&_<=0)return o=c/(c-_),t.copy(i).addScaledVector(Ui,o);const d=u*_-m*f;if(d<=0&&f-u>=0&&m-_>=0)return xc.subVectors(s,r),o=(f-u)/(f-u+(m-_)),t.copy(r).addScaledVector(xc,o);const v=1/(d+p+h);return a=p*v,o=h*v,t.copy(i).addScaledVector(Ii,a).addScaledVector(Ui,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let eg=0;class ni extends Mn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:eg++}),this.uuid=Vr(),this.name="",this.type="Material",this.blending=Ki,this.side=ei,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=_f,this.blendDst=vf,this.blendEquation=ki,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=ha,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=zm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=xo,this.stencilZFail=xo,this.stencilZPass=xo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}const r=this[t];if(r===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ki&&(i.blending=this.blending),this.side!==ei&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(i.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Lf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},en={h:0,s:0,l:0},os={h:0,s:0,l:0};function zo(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class $e{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&i===void 0?this.set(e):this.setRGB(e,t,i)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=dn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,bt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=bt.workingColorSpace){return this.r=e,this.g=t,this.b=i,bt.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=bt.workingColorSpace){if(e=Om(e,1),t=Rt(t,0,1),i=Rt(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=zo(a,s,e+1/3),this.g=zo(a,s,e),this.b=zo(a,s,e-1/3)}return bt.toWorkingColorSpace(this,r),this}setStyle(e,t=dn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,bt.toWorkingColorSpace(this,t),i(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,bt.toWorkingColorSpace(this,t),i(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)){const l=parseFloat(s[1])/360,c=parseFloat(s[2])/100,u=parseFloat(s[3])/100;return i(s[4]),this.setHSL(l,c,u,t)}break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,bt.toWorkingColorSpace(this,t),this;if(a===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,bt.toWorkingColorSpace(this,t),this;console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=dn){const i=Lf[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ji(e.r),this.g=Ji(e.g),this.b=Ji(e.b),this}copyLinearToSRGB(e){return this.r=wo(e.r),this.g=wo(e.g),this.b=wo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=dn){return bt.fromWorkingColorSpace(gt.copy(this),e),Rt(gt.r*255,0,255)<<16^Rt(gt.g*255,0,255)<<8^Rt(gt.b*255,0,255)<<0}getHexString(e=dn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=bt.workingColorSpace){bt.fromWorkingColorSpace(gt.copy(this),t);const i=gt.r,r=gt.g,s=gt.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=u<=.5?f/(a+o):f/(2-a-o),a){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=bt.workingColorSpace){return bt.fromWorkingColorSpace(gt.copy(this),t),e.r=gt.r,e.g=gt.g,e.b=gt.b,e}getStyle(e=dn){bt.fromWorkingColorSpace(gt.copy(this),e);const t=gt.r,i=gt.g,r=gt.b;return e!==dn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${t*255|0},${i*255|0},${r*255|0})`}offsetHSL(e,t,i){return this.getHSL(en),en.h+=e,en.s+=t,en.l+=i,this.setHSL(en.h,en.s,en.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(en),e.getHSL(os);const i=Mo(en.h,os.h,t),r=Mo(en.s,os.s,t),s=Mo(en.l,os.l,t);return this.setHSL(i,r,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const gt=new $e;$e.NAMES=Lf;class Rf extends ni{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new $e(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Xa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const at=new N,as=new De;class Pt{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=ac,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)as.fromBufferAttribute(this,t),as.applyMatrix3(e),this.setXY(t,as.x,as.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)at.fromBufferAttribute(this,t),at.applyMatrix3(e),this.setXYZ(t,at.x,at.y,at.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)at.fromBufferAttribute(this,t),at.applyMatrix4(e),this.setXYZ(t,at.x,at.y,at.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)at.fromBufferAttribute(this,t),at.applyNormalMatrix(e),this.setXYZ(t,at.x,at.y,at.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)at.fromBufferAttribute(this,t),at.transformDirection(e),this.setXYZ(t,at.x,at.y,at.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Qr(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Qr(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Qr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Qr(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Ft(t,this.array),i=Ft(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Ft(t,this.array),i=Ft(i,this.array),r=Ft(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Ft(t,this.array),i=Ft(i,this.array),r=Ft(r,this.array),s=Ft(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ac&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class Pf extends Pt{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Df extends Pt{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Zn extends Pt{constructor(e,t,i){super(new Float32Array(e),t,i)}}let tg=0;const qt=new tt,Oo=new pt,Fi=new N,Ot=new Wr,vr=new Wr,ht=new N;class Sn extends Mn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:tg++}),this.uuid=Vr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(bf(e)?Df:Pf)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new At().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return qt.makeRotationFromQuaternion(e),this.applyMatrix4(qt),this}rotateX(e){return qt.makeRotationX(e),this.applyMatrix4(qt),this}rotateY(e){return qt.makeRotationY(e),this.applyMatrix4(qt),this}rotateZ(e){return qt.makeRotationZ(e),this.applyMatrix4(qt),this}translate(e,t,i){return qt.makeTranslation(e,t,i),this.applyMatrix4(qt),this}scale(e,t,i){return qt.makeScale(e,t,i),this.applyMatrix4(qt),this}lookAt(e){return Oo.lookAt(e),Oo.updateMatrix(),this.applyMatrix4(Oo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Fi).negate(),this.translate(Fi.x,Fi.y,Fi.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Zn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Wr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Ot.setFromBufferAttribute(s),this.morphTargetsRelative?(ht.addVectors(this.boundingBox.min,Ot.min),this.boundingBox.expandByPoint(ht),ht.addVectors(this.boundingBox.max,Ot.max),this.boundingBox.expandByPoint(ht)):(this.boundingBox.expandByPoint(Ot.min),this.boundingBox.expandByPoint(Ot.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new $s);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new N,1/0);return}if(e){const i=this.boundingSphere.center;if(Ot.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];vr.setFromBufferAttribute(o),this.morphTargetsRelative?(ht.addVectors(Ot.min,vr.min),Ot.expandByPoint(ht),ht.addVectors(Ot.max,vr.max),Ot.expandByPoint(ht)):(Ot.expandByPoint(vr.min),Ot.expandByPoint(vr.max))}Ot.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)ht.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(ht));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)ht.fromBufferAttribute(o,c),l&&(Fi.fromBufferAttribute(e,c),ht.add(Fi)),r=Math.max(r,i.distanceToSquared(ht))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=t.position.array,s=t.normal.array,a=t.uv.array,o=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Pt(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let I=0;I<o;I++)c[I]=new N,u[I]=new N;const f=new N,h=new N,m=new N,_=new De,p=new De,d=new De,v=new N,E=new N;function x(I,Z,Y){f.fromArray(r,I*3),h.fromArray(r,Z*3),m.fromArray(r,Y*3),_.fromArray(a,I*2),p.fromArray(a,Z*2),d.fromArray(a,Y*2),h.sub(f),m.sub(f),p.sub(_),d.sub(_);const B=1/(p.x*d.y-d.x*p.y);isFinite(B)&&(v.copy(h).multiplyScalar(d.y).addScaledVector(m,-p.y).multiplyScalar(B),E.copy(m).multiplyScalar(p.x).addScaledVector(h,-d.x).multiplyScalar(B),c[I].add(v),c[Z].add(v),c[Y].add(v),u[I].add(E),u[Z].add(E),u[Y].add(E))}let S=this.groups;S.length===0&&(S=[{start:0,count:i.length}]);for(let I=0,Z=S.length;I<Z;++I){const Y=S[I],B=Y.start,z=Y.count;for(let K=B,re=B+z;K<re;K+=3)x(i[K+0],i[K+1],i[K+2])}const T=new N,P=new N,F=new N,y=new N;function C(I){F.fromArray(s,I*3),y.copy(F);const Z=c[I];T.copy(Z),T.sub(F.multiplyScalar(F.dot(Z))).normalize(),P.crossVectors(y,Z);const B=P.dot(u[I])<0?-1:1;l[I*4]=T.x,l[I*4+1]=T.y,l[I*4+2]=T.z,l[I*4+3]=B}for(let I=0,Z=S.length;I<Z;++I){const Y=S[I],B=Y.start,z=Y.count;for(let K=B,re=B+z;K<re;K+=3)C(i[K+0]),C(i[K+1]),C(i[K+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Pt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,m=i.count;h<m;h++)i.setXYZ(h,0,0,0);const r=new N,s=new N,a=new N,o=new N,l=new N,c=new N,u=new N,f=new N;if(e)for(let h=0,m=e.count;h<m;h+=3){const _=e.getX(h+0),p=e.getX(h+1),d=e.getX(h+2);r.fromBufferAttribute(t,_),s.fromBufferAttribute(t,p),a.fromBufferAttribute(t,d),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),o.fromBufferAttribute(i,_),l.fromBufferAttribute(i,p),c.fromBufferAttribute(i,d),o.add(u),l.add(u),c.add(u),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(p,l.x,l.y,l.z),i.setXYZ(d,c.x,c.y,c.z)}else for(let h=0,m=t.count;h<m;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)ht.fromBufferAttribute(e,t),ht.normalize(),e.setXYZ(t,ht.x,ht.y,ht.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,f=o.normalized,h=new c.constructor(l.length*u);let m=0,_=0;for(let p=0,d=l.length;p<d;p++){o.isInterleavedBufferAttribute?m=l[p]*o.data.stride+o.offset:m=l[p]*u;for(let v=0;v<u;v++)h[_++]=c[m++]}return new Pt(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Sn,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,f=c.length;u<f;u++){const h=c[u],m=e(h,i);l.push(m)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const m=c[f];u.push(m.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let h=0,m=f.length;h<m;h++)u.push(f[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const yc=new tt,hn=new Af,ls=new $s,Mc=new N,xr=new N,yr=new N,Mr=new N,No=new N,cs=new N,us=new De,fs=new De,hs=new De,Bo=new N,ds=new N;class _n extends pt{constructor(e=new Sn,t=new Rf){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){cs.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],f=s[l];u!==0&&(No.fromBufferAttribute(f,e),a?cs.addScaledVector(No,u):cs.addScaledVector(No.sub(t),u))}t.add(cs)}return this.isSkinnedMesh&&this.boneTransform(e,t),t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;if(r===void 0||(i.boundingSphere===null&&i.computeBoundingSphere(),ls.copy(i.boundingSphere),ls.applyMatrix4(s),hn.copy(e.ray).recast(e.near),ls.containsPoint(hn.origin)===!1&&(hn.intersectSphere(ls,Mc)===null||hn.origin.distanceToSquared(Mc)>(e.far-e.near)**2))||(yc.copy(s).invert(),hn.copy(e.ray).applyMatrix4(yc),i.boundingBox!==null&&hn.intersectsBox(i.boundingBox)===!1))return;let a;const o=i.index,l=i.attributes.position,c=i.attributes.uv,u=i.attributes.uv2,f=i.groups,h=i.drawRange;if(o!==null)if(Array.isArray(r))for(let m=0,_=f.length;m<_;m++){const p=f[m],d=r[p.materialIndex],v=Math.max(p.start,h.start),E=Math.min(o.count,Math.min(p.start+p.count,h.start+h.count));for(let x=v,S=E;x<S;x+=3){const T=o.getX(x),P=o.getX(x+1),F=o.getX(x+2);a=ps(this,d,e,hn,c,u,T,P,F),a&&(a.faceIndex=Math.floor(x/3),a.face.materialIndex=p.materialIndex,t.push(a))}}else{const m=Math.max(0,h.start),_=Math.min(o.count,h.start+h.count);for(let p=m,d=_;p<d;p+=3){const v=o.getX(p),E=o.getX(p+1),x=o.getX(p+2);a=ps(this,r,e,hn,c,u,v,E,x),a&&(a.faceIndex=Math.floor(p/3),t.push(a))}}else if(l!==void 0)if(Array.isArray(r))for(let m=0,_=f.length;m<_;m++){const p=f[m],d=r[p.materialIndex],v=Math.max(p.start,h.start),E=Math.min(l.count,Math.min(p.start+p.count,h.start+h.count));for(let x=v,S=E;x<S;x+=3){const T=x,P=x+1,F=x+2;a=ps(this,d,e,hn,c,u,T,P,F),a&&(a.faceIndex=Math.floor(x/3),a.face.materialIndex=p.materialIndex,t.push(a))}}else{const m=Math.max(0,h.start),_=Math.min(l.count,h.start+h.count);for(let p=m,d=_;p<d;p+=3){const v=p,E=p+1,x=p+2;a=ps(this,r,e,hn,c,u,v,E,x),a&&(a.faceIndex=Math.floor(p/3),t.push(a))}}}}function ng(n,e,t,i,r,s,a,o){let l;if(e.side===Ht?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===ei,o),l===null)return null;ds.copy(o),ds.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(ds);return c<t.near||c>t.far?null:{distance:c,point:ds.clone(),object:n}}function ps(n,e,t,i,r,s,a,o,l){n.getVertexPosition(a,xr),n.getVertexPosition(o,yr),n.getVertexPosition(l,Mr);const c=ng(n,e,t,i,xr,yr,Mr,Bo);if(c){r&&(us.fromBufferAttribute(r,a),fs.fromBufferAttribute(r,o),hs.fromBufferAttribute(r,l),c.uv=Pn.getUV(Bo,xr,yr,Mr,us,fs,hs,new De)),s&&(us.fromBufferAttribute(s,a),fs.fromBufferAttribute(s,o),hs.fromBufferAttribute(s,l),c.uv2=Pn.getUV(Bo,xr,yr,Mr,us,fs,hs,new De));const u={a,b:o,c:l,normal:new N,materialIndex:0};Pn.getNormal(xr,yr,Mr,u.normal),c.face=u}return c}class qr extends Sn{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],f=[];let h=0,m=0;_("z","y","x",-1,-1,i,t,e,a,s,0),_("z","y","x",1,-1,i,t,-e,a,s,1),_("x","z","y",1,1,e,i,t,r,a,2),_("x","z","y",1,-1,e,i,-t,r,a,3),_("x","y","z",1,-1,e,t,i,r,s,4),_("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Zn(c,3)),this.setAttribute("normal",new Zn(u,3)),this.setAttribute("uv",new Zn(f,2));function _(p,d,v,E,x,S,T,P,F,y,C){const I=S/F,Z=T/y,Y=S/2,B=T/2,z=P/2,K=F+1,re=y+1;let se=0,W=0;const fe=new N;for(let le=0;le<re;le++){const Te=le*Z-B;for(let k=0;k<K;k++){const ue=k*I-Y;fe[p]=ue*E,fe[d]=Te*x,fe[v]=z,c.push(fe.x,fe.y,fe.z),fe[p]=0,fe[d]=0,fe[v]=P>0?1:-1,u.push(fe.x,fe.y,fe.z),f.push(k/F),f.push(1-le/y),se+=1}}for(let le=0;le<y;le++)for(let Te=0;Te<F;Te++){const k=h+Te+K*le,ue=h+Te+K*(le+1),ve=h+(Te+1)+K*(le+1),A=h+(Te+1)+K*le;l.push(k,ue,A),l.push(ue,ve,A),W+=6}o.addGroup(m,W,C),m+=W,h+=se}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function rr(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Et(n){const e={};for(let t=0;t<n.length;t++){const i=rr(n[t]);for(const r in i)e[r]=i[r]}return e}function ig(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function If(n){return n.getRenderTarget()===null&&n.outputEncoding===Xe?dn:Br}const rg={clone:rr,merge:Et};var sg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,og=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Zt extends ni{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=sg,this.fragmentShader=og,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=rr(e.uniforms),this.uniformsGroups=ig(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class $a extends pt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new tt,this.projectionMatrix=new tt,this.projectionMatrixInverse=new tt}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Nt extends $a{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=cc*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(yo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return cc*2*Math.atan(Math.tan(yo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(yo*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const zi=-90,Oi=1;class ag extends pt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i;const r=new Nt(zi,Oi,e,t);r.layers=this.layers,r.up.set(0,1,0),r.lookAt(1,0,0),this.add(r);const s=new Nt(zi,Oi,e,t);s.layers=this.layers,s.up.set(0,1,0),s.lookAt(-1,0,0),this.add(s);const a=new Nt(zi,Oi,e,t);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(0,1,0),this.add(a);const o=new Nt(zi,Oi,e,t);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(0,-1,0),this.add(o);const l=new Nt(zi,Oi,e,t);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,1),this.add(l);const c=new Nt(zi,Oi,e,t);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,-1),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget,[r,s,a,o,l,c]=this.children,u=e.getRenderTarget(),f=e.toneMapping,h=e.xr.enabled;e.toneMapping=Fn,e.xr.enabled=!1;const m=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(t,r),e.setRenderTarget(i,1),e.render(t,s),e.setRenderTarget(i,2),e.render(t,a),e.setRenderTarget(i,3),e.render(t,o),e.setRenderTarget(i,4),e.render(t,l),i.texture.generateMipmaps=m,e.setRenderTarget(i,5),e.render(t,c),e.setRenderTarget(u),e.toneMapping=f,e.xr.enabled=h,i.texture.needsPMREMUpdate=!0}}class Uf extends xt{constructor(e,t,i,r,s,a,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:tr,super(e,t,i,r,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class lg extends Gt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Uf(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:jt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new qr(5,5,5),s=new Zt({name:"CubemapFromEquirect",uniforms:rr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ht,blending:kt});s.uniforms.tEquirect.value=t;const a=new _n(r,s),o=t.minFilter;return t.minFilter===Or&&(t.minFilter=jt),new ag(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}}const Ho=new N,cg=new N,ug=new At;class hi{constructor(e=new N(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Ho.subVectors(i,t).cross(cg.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Ho),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||ug.getNormalMatrix(e),r=this.coplanarPoint(Ho).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ni=new $s,ms=new N;class Ya{constructor(e=new hi,t=new hi,i=new hi,r=new hi,s=new hi,a=new hi){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e){const t=this.planes,i=e.elements,r=i[0],s=i[1],a=i[2],o=i[3],l=i[4],c=i[5],u=i[6],f=i[7],h=i[8],m=i[9],_=i[10],p=i[11],d=i[12],v=i[13],E=i[14],x=i[15];return t[0].setComponents(o-r,f-l,p-h,x-d).normalize(),t[1].setComponents(o+r,f+l,p+h,x+d).normalize(),t[2].setComponents(o+s,f+c,p+m,x+v).normalize(),t[3].setComponents(o-s,f-c,p-m,x-v).normalize(),t[4].setComponents(o-a,f-u,p-_,x-E).normalize(),t[5].setComponents(o+a,f+u,p+_,x+E).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),Ni.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(Ni)}intersectsSprite(e){return Ni.center.set(0,0,0),Ni.radius=.7071067811865476,Ni.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ni)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(ms.x=r.normal.x>0?e.max.x:e.min.x,ms.y=r.normal.y>0?e.max.y:e.min.y,ms.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ms)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Ff(){let n=null,e=!1,t=null,i=null;function r(s,a){t(s,a),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function fg(n,e){const t=e.isWebGL2,i=new WeakMap;function r(c,u){const f=c.array,h=c.usage,m=n.createBuffer();n.bindBuffer(u,m),n.bufferData(u,f,h),c.onUploadCallback();let _;if(f instanceof Float32Array)_=5126;else if(f instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)_=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=5123;else if(f instanceof Int16Array)_=5122;else if(f instanceof Uint32Array)_=5125;else if(f instanceof Int32Array)_=5124;else if(f instanceof Int8Array)_=5120;else if(f instanceof Uint8Array)_=5121;else if(f instanceof Uint8ClampedArray)_=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:m,type:_,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version}}function s(c,u,f){const h=u.array,m=u.updateRange;n.bindBuffer(f,c),m.count===-1?n.bufferSubData(f,0,h):(t?n.bufferSubData(f,m.offset*h.BYTES_PER_ELEMENT,h,m.offset,m.count):n.bufferSubData(f,m.offset*h.BYTES_PER_ELEMENT,h.subarray(m.offset,m.offset+m.count)),m.count=-1),u.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=i.get(c);u&&(n.deleteBuffer(u.buffer),i.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const h=i.get(c);(!h||h.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const f=i.get(c);f===void 0?i.set(c,r(c,u)):f.version<c.version&&(s(f.buffer,c,u),f.version=c.version)}return{get:a,remove:o,update:l}}class Ks extends Sn{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(i),l=Math.floor(r),c=o+1,u=l+1,f=e/o,h=t/l,m=[],_=[],p=[],d=[];for(let v=0;v<u;v++){const E=v*h-a;for(let x=0;x<c;x++){const S=x*f-s;_.push(S,-E,0),p.push(0,0,1),d.push(x/o),d.push(1-v/l)}}for(let v=0;v<l;v++)for(let E=0;E<o;E++){const x=E+c*v,S=E+c*(v+1),T=E+1+c*(v+1),P=E+1+c*v;m.push(x,S,P),m.push(S,T,P)}this.setIndex(m),this.setAttribute("position",new Zn(_,3)),this.setAttribute("normal",new Zn(p,3)),this.setAttribute("uv",new Zn(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ks(e.width,e.height,e.widthSegments,e.heightSegments)}}var hg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,dg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,pg=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,mg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,gg=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,_g=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,vg="vec3 transformed = vec3( position );",xg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,yg=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
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
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
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
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
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
float G_BlinnPhong_Implicit( ) {
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
#endif`,Mg=`#ifdef USE_IRIDESCENCE
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
		float R21 = R12;
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
#endif`,Sg=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,bg=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,wg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Eg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Tg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ag=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Cg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Lg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Rg=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Pg=`#define PI 3.141592653589793
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
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
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
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,Dg=`#ifdef ENVMAP_TYPE_CUBE_UV
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
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
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
#endif`,Ig=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Ug=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Fg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,zg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Og=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ng="gl_FragColor = linearToOutputTexel( gl_FragColor );",Bg=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Hg=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,kg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Gg=`#ifdef USE_ENVMAP
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
#endif`,Vg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Wg=`#ifdef USE_ENVMAP
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
#endif`,qg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Xg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,jg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,$g=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Yg=`#ifdef USE_GRADIENTMAP
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
}`,Kg=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Zg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Jg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Qg=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,e_=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
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
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
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
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
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
#endif`,t_=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,n_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,i_=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,r_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,s_=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,o_=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
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
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,a_=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
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
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
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
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
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
}`,l_=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
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
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getSpotLightInfo( spotLight, geometry, directLight );
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,c_=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,u_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,f_=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,h_=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,d_=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,p_=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,m_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,g_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,__=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,v_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,x_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,y_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,M_=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,S_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,b_=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,w_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,E_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,T_=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,A_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,C_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,L_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,R_=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,P_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,D_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,I_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,U_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,F_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,z_=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,O_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,N_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,B_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,H_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,k_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,G_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,V_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return shadow;
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
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
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,W_=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,q_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,X_=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,j_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,$_=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,Y_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,K_=`#ifdef USE_SKINNING
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
#endif`,Z_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,J_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Q_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ev=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,tv=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,nv=`#ifdef USE_TRANSMISSION
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
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, vec2 fullSize, float lod ) {
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
		
		vec2 lodFudge = pow( 1.95, lod ) / fullSize;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec2 fullSize = vec2( textureSize( sampler, 0 ) );
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), fullSize, floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), fullSize, ceil( lod ) );
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
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,iv=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,rv=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,sv=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,ov=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,av=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,lv=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,cv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const uv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,fv=`uniform sampler2D t2D;
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
	#include <encodings_fragment>
}`,hv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,dv=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,pv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,gv=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,_v=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,vv=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,xv=`#define DISTANCE
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
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,yv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Mv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Sv=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,bv=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,wv=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,Ev=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Tv=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,Av=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Cv=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
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
	#include <morphcolor_vertex>
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
}`,Lv=`#define MATCAP
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
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Rv=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Pv=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
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
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Dv=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,Iv=`#define PHONG
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
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Uv=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,Fv=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
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
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zv=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,Ov=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Nv=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
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
}`,Bv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Hv=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
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
}`,kv=`uniform vec3 color;
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
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Gv=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,Vv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,ze={alphamap_fragment:hg,alphamap_pars_fragment:dg,alphatest_fragment:pg,alphatest_pars_fragment:mg,aomap_fragment:gg,aomap_pars_fragment:_g,begin_vertex:vg,beginnormal_vertex:xg,bsdfs:yg,iridescence_fragment:Mg,bumpmap_pars_fragment:Sg,clipping_planes_fragment:bg,clipping_planes_pars_fragment:wg,clipping_planes_pars_vertex:Eg,clipping_planes_vertex:Tg,color_fragment:Ag,color_pars_fragment:Cg,color_pars_vertex:Lg,color_vertex:Rg,common:Pg,cube_uv_reflection_fragment:Dg,defaultnormal_vertex:Ig,displacementmap_pars_vertex:Ug,displacementmap_vertex:Fg,emissivemap_fragment:zg,emissivemap_pars_fragment:Og,encodings_fragment:Ng,encodings_pars_fragment:Bg,envmap_fragment:Hg,envmap_common_pars_fragment:kg,envmap_pars_fragment:Gg,envmap_pars_vertex:Vg,envmap_physical_pars_fragment:t_,envmap_vertex:Wg,fog_vertex:qg,fog_pars_vertex:Xg,fog_fragment:jg,fog_pars_fragment:$g,gradientmap_pars_fragment:Yg,lightmap_fragment:Kg,lightmap_pars_fragment:Zg,lights_lambert_fragment:Jg,lights_lambert_pars_fragment:Qg,lights_pars_begin:e_,lights_toon_fragment:n_,lights_toon_pars_fragment:i_,lights_phong_fragment:r_,lights_phong_pars_fragment:s_,lights_physical_fragment:o_,lights_physical_pars_fragment:a_,lights_fragment_begin:l_,lights_fragment_maps:c_,lights_fragment_end:u_,logdepthbuf_fragment:f_,logdepthbuf_pars_fragment:h_,logdepthbuf_pars_vertex:d_,logdepthbuf_vertex:p_,map_fragment:m_,map_pars_fragment:g_,map_particle_fragment:__,map_particle_pars_fragment:v_,metalnessmap_fragment:x_,metalnessmap_pars_fragment:y_,morphcolor_vertex:M_,morphnormal_vertex:S_,morphtarget_pars_vertex:b_,morphtarget_vertex:w_,normal_fragment_begin:E_,normal_fragment_maps:T_,normal_pars_fragment:A_,normal_pars_vertex:C_,normal_vertex:L_,normalmap_pars_fragment:R_,clearcoat_normal_fragment_begin:P_,clearcoat_normal_fragment_maps:D_,clearcoat_pars_fragment:I_,iridescence_pars_fragment:U_,output_fragment:F_,packing:z_,premultiplied_alpha_fragment:O_,project_vertex:N_,dithering_fragment:B_,dithering_pars_fragment:H_,roughnessmap_fragment:k_,roughnessmap_pars_fragment:G_,shadowmap_pars_fragment:V_,shadowmap_pars_vertex:W_,shadowmap_vertex:q_,shadowmask_pars_fragment:X_,skinbase_vertex:j_,skinning_pars_vertex:$_,skinning_vertex:Y_,skinnormal_vertex:K_,specularmap_fragment:Z_,specularmap_pars_fragment:J_,tonemapping_fragment:Q_,tonemapping_pars_fragment:ev,transmission_fragment:tv,transmission_pars_fragment:nv,uv_pars_fragment:iv,uv_pars_vertex:rv,uv_vertex:sv,uv2_pars_fragment:ov,uv2_pars_vertex:av,uv2_vertex:lv,worldpos_vertex:cv,background_vert:uv,background_frag:fv,backgroundCube_vert:hv,backgroundCube_frag:dv,cube_vert:pv,cube_frag:mv,depth_vert:gv,depth_frag:_v,distanceRGBA_vert:vv,distanceRGBA_frag:xv,equirect_vert:yv,equirect_frag:Mv,linedashed_vert:Sv,linedashed_frag:bv,meshbasic_vert:wv,meshbasic_frag:Ev,meshlambert_vert:Tv,meshlambert_frag:Av,meshmatcap_vert:Cv,meshmatcap_frag:Lv,meshnormal_vert:Rv,meshnormal_frag:Pv,meshphong_vert:Dv,meshphong_frag:Iv,meshphysical_vert:Uv,meshphysical_frag:Fv,meshtoon_vert:zv,meshtoon_frag:Ov,points_vert:Nv,points_frag:Bv,shadow_vert:Hv,shadow_frag:kv,sprite_vert:Gv,sprite_frag:Vv},Me={common:{diffuse:{value:new $e(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new At},uv2Transform:{value:new At},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new De(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new $e(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new $e(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new At}},sprite:{diffuse:{value:new $e(16777215)},opacity:{value:1},center:{value:new De(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new At}}},mn={basic:{uniforms:Et([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.fog]),vertexShader:ze.meshbasic_vert,fragmentShader:ze.meshbasic_frag},lambert:{uniforms:Et([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new $e(0)}}]),vertexShader:ze.meshlambert_vert,fragmentShader:ze.meshlambert_frag},phong:{uniforms:Et([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new $e(0)},specular:{value:new $e(1118481)},shininess:{value:30}}]),vertexShader:ze.meshphong_vert,fragmentShader:ze.meshphong_frag},standard:{uniforms:Et([Me.common,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.roughnessmap,Me.metalnessmap,Me.fog,Me.lights,{emissive:{value:new $e(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag},toon:{uniforms:Et([Me.common,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.gradientmap,Me.fog,Me.lights,{emissive:{value:new $e(0)}}]),vertexShader:ze.meshtoon_vert,fragmentShader:ze.meshtoon_frag},matcap:{uniforms:Et([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,{matcap:{value:null}}]),vertexShader:ze.meshmatcap_vert,fragmentShader:ze.meshmatcap_frag},points:{uniforms:Et([Me.points,Me.fog]),vertexShader:ze.points_vert,fragmentShader:ze.points_frag},dashed:{uniforms:Et([Me.common,Me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ze.linedashed_vert,fragmentShader:ze.linedashed_frag},depth:{uniforms:Et([Me.common,Me.displacementmap]),vertexShader:ze.depth_vert,fragmentShader:ze.depth_frag},normal:{uniforms:Et([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,{opacity:{value:1}}]),vertexShader:ze.meshnormal_vert,fragmentShader:ze.meshnormal_frag},sprite:{uniforms:Et([Me.sprite,Me.fog]),vertexShader:ze.sprite_vert,fragmentShader:ze.sprite_frag},background:{uniforms:{uvTransform:{value:new At},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ze.background_vert,fragmentShader:ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:ze.backgroundCube_vert,fragmentShader:ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ze.cube_vert,fragmentShader:ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ze.equirect_vert,fragmentShader:ze.equirect_frag},distanceRGBA:{uniforms:Et([Me.common,Me.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ze.distanceRGBA_vert,fragmentShader:ze.distanceRGBA_frag},shadow:{uniforms:Et([Me.lights,Me.fog,{color:{value:new $e(0)},opacity:{value:1}}]),vertexShader:ze.shadow_vert,fragmentShader:ze.shadow_frag}};mn.physical={uniforms:Et([mn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new De(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new $e(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new De},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new $e(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new $e(1,1,1)},specularColorMap:{value:null}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag};const gs={r:0,b:0,g:0};function Wv(n,e,t,i,r,s,a){const o=new $e(0);let l=s===!0?0:1,c,u,f=null,h=0,m=null;function _(d,v){let E=!1,x=v.isScene===!0?v.background:null;x&&x.isTexture&&(x=(v.backgroundBlurriness>0?t:e).get(x));const S=n.xr,T=S.getSession&&S.getSession();T&&T.environmentBlendMode==="additive"&&(x=null),x===null?p(o,l):x&&x.isColor&&(p(x,1),E=!0),(n.autoClear||E)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),x&&(x.isCubeTexture||x.mapping===js)?(u===void 0&&(u=new _n(new qr(1,1,1),new Zt({name:"BackgroundCubeMaterial",uniforms:rr(mn.backgroundCube.uniforms),vertexShader:mn.backgroundCube.vertexShader,fragmentShader:mn.backgroundCube.fragmentShader,side:Ht,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(P,F,y){this.matrixWorld.copyPosition(y.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),u.material.uniforms.envMap.value=x,u.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.toneMapped=x.encoding!==Xe,(f!==x||h!==x.version||m!==n.toneMapping)&&(u.material.needsUpdate=!0,f=x,h=x.version,m=n.toneMapping),u.layers.enableAll(),d.unshift(u,u.geometry,u.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new _n(new Ks(2,2),new Zt({name:"BackgroundMaterial",uniforms:rr(mn.background.uniforms),vertexShader:mn.background.vertexShader,fragmentShader:mn.background.fragmentShader,side:ei,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=x.encoding!==Xe,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(f!==x||h!==x.version||m!==n.toneMapping)&&(c.material.needsUpdate=!0,f=x,h=x.version,m=n.toneMapping),c.layers.enableAll(),d.unshift(c,c.geometry,c.material,0,0,null))}function p(d,v){d.getRGB(gs,If(n)),i.buffers.color.setClear(gs.r,gs.g,gs.b,v,a)}return{getClearColor:function(){return o},setClearColor:function(d,v=1){o.set(d),l=v,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(d){l=d,p(o,l)},render:_}}function qv(n,e,t,i){const r=n.getParameter(34921),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),a=i.isWebGL2||s!==null,o={},l=d(null);let c=l,u=!1;function f(z,K,re,se,W){let fe=!1;if(a){const le=p(se,re,K);c!==le&&(c=le,m(c.object)),fe=v(z,se,re,W),fe&&E(z,se,re,W)}else{const le=K.wireframe===!0;(c.geometry!==se.id||c.program!==re.id||c.wireframe!==le)&&(c.geometry=se.id,c.program=re.id,c.wireframe=le,fe=!0)}W!==null&&t.update(W,34963),(fe||u)&&(u=!1,y(z,K,re,se),W!==null&&n.bindBuffer(34963,t.get(W).buffer))}function h(){return i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function m(z){return i.isWebGL2?n.bindVertexArray(z):s.bindVertexArrayOES(z)}function _(z){return i.isWebGL2?n.deleteVertexArray(z):s.deleteVertexArrayOES(z)}function p(z,K,re){const se=re.wireframe===!0;let W=o[z.id];W===void 0&&(W={},o[z.id]=W);let fe=W[K.id];fe===void 0&&(fe={},W[K.id]=fe);let le=fe[se];return le===void 0&&(le=d(h()),fe[se]=le),le}function d(z){const K=[],re=[],se=[];for(let W=0;W<r;W++)K[W]=0,re[W]=0,se[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:K,enabledAttributes:re,attributeDivisors:se,object:z,attributes:{},index:null}}function v(z,K,re,se){const W=c.attributes,fe=K.attributes;let le=0;const Te=re.getAttributes();for(const k in Te)if(Te[k].location>=0){const ve=W[k];let A=fe[k];if(A===void 0&&(k==="instanceMatrix"&&z.instanceMatrix&&(A=z.instanceMatrix),k==="instanceColor"&&z.instanceColor&&(A=z.instanceColor)),ve===void 0||ve.attribute!==A||A&&ve.data!==A.data)return!0;le++}return c.attributesNum!==le||c.index!==se}function E(z,K,re,se){const W={},fe=K.attributes;let le=0;const Te=re.getAttributes();for(const k in Te)if(Te[k].location>=0){let ve=fe[k];ve===void 0&&(k==="instanceMatrix"&&z.instanceMatrix&&(ve=z.instanceMatrix),k==="instanceColor"&&z.instanceColor&&(ve=z.instanceColor));const A={};A.attribute=ve,ve&&ve.data&&(A.data=ve.data),W[k]=A,le++}c.attributes=W,c.attributesNum=le,c.index=se}function x(){const z=c.newAttributes;for(let K=0,re=z.length;K<re;K++)z[K]=0}function S(z){T(z,0)}function T(z,K){const re=c.newAttributes,se=c.enabledAttributes,W=c.attributeDivisors;re[z]=1,se[z]===0&&(n.enableVertexAttribArray(z),se[z]=1),W[z]!==K&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](z,K),W[z]=K)}function P(){const z=c.newAttributes,K=c.enabledAttributes;for(let re=0,se=K.length;re<se;re++)K[re]!==z[re]&&(n.disableVertexAttribArray(re),K[re]=0)}function F(z,K,re,se,W,fe){i.isWebGL2===!0&&(re===5124||re===5125)?n.vertexAttribIPointer(z,K,re,W,fe):n.vertexAttribPointer(z,K,re,se,W,fe)}function y(z,K,re,se){if(i.isWebGL2===!1&&(z.isInstancedMesh||se.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();const W=se.attributes,fe=re.getAttributes(),le=K.defaultAttributeValues;for(const Te in fe){const k=fe[Te];if(k.location>=0){let ue=W[Te];if(ue===void 0&&(Te==="instanceMatrix"&&z.instanceMatrix&&(ue=z.instanceMatrix),Te==="instanceColor"&&z.instanceColor&&(ue=z.instanceColor)),ue!==void 0){const ve=ue.normalized,A=ue.itemSize,j=t.get(ue);if(j===void 0)continue;const q=j.buffer,ie=j.type,de=j.bytesPerElement;if(ue.isInterleavedBufferAttribute){const Se=ue.data,xe=Se.stride,b=ue.offset;if(Se.isInstancedInterleavedBuffer){for(let R=0;R<k.locationSize;R++)T(k.location+R,Se.meshPerAttribute);z.isInstancedMesh!==!0&&se._maxInstanceCount===void 0&&(se._maxInstanceCount=Se.meshPerAttribute*Se.count)}else for(let R=0;R<k.locationSize;R++)S(k.location+R);n.bindBuffer(34962,q);for(let R=0;R<k.locationSize;R++)F(k.location+R,A/k.locationSize,ie,ve,xe*de,(b+A/k.locationSize*R)*de)}else{if(ue.isInstancedBufferAttribute){for(let Se=0;Se<k.locationSize;Se++)T(k.location+Se,ue.meshPerAttribute);z.isInstancedMesh!==!0&&se._maxInstanceCount===void 0&&(se._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let Se=0;Se<k.locationSize;Se++)S(k.location+Se);n.bindBuffer(34962,q);for(let Se=0;Se<k.locationSize;Se++)F(k.location+Se,A/k.locationSize,ie,ve,A*de,A/k.locationSize*Se*de)}}else if(le!==void 0){const ve=le[Te];if(ve!==void 0)switch(ve.length){case 2:n.vertexAttrib2fv(k.location,ve);break;case 3:n.vertexAttrib3fv(k.location,ve);break;case 4:n.vertexAttrib4fv(k.location,ve);break;default:n.vertexAttrib1fv(k.location,ve)}}}}P()}function C(){Y();for(const z in o){const K=o[z];for(const re in K){const se=K[re];for(const W in se)_(se[W].object),delete se[W];delete K[re]}delete o[z]}}function I(z){if(o[z.id]===void 0)return;const K=o[z.id];for(const re in K){const se=K[re];for(const W in se)_(se[W].object),delete se[W];delete K[re]}delete o[z.id]}function Z(z){for(const K in o){const re=o[K];if(re[z.id]===void 0)continue;const se=re[z.id];for(const W in se)_(se[W].object),delete se[W];delete re[z.id]}}function Y(){B(),u=!0,c!==l&&(c=l,m(c.object))}function B(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:Y,resetDefaultState:B,dispose:C,releaseStatesOfGeometry:I,releaseStatesOfProgram:Z,initAttributes:x,enableAttribute:S,disableUnusedAttributes:P}}function Xv(n,e,t,i){const r=i.isWebGL2;let s;function a(c){s=c}function o(c,u){n.drawArrays(s,c,u),t.update(u,s,1)}function l(c,u,f){if(f===0)return;let h,m;if(r)h=n,m="drawArraysInstanced";else if(h=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",h===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[m](s,c,u,f),t.update(u,s,f)}this.setMode=a,this.render=o,this.renderInstances=l}function jv(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const F=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(F){if(F==="highp"){if(n.getShaderPrecisionFormat(35633,36338).precision>0&&n.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";F="mediump"}return F==="mediump"&&n.getShaderPrecisionFormat(35633,36337).precision>0&&n.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&n instanceof WebGL2RenderingContext;let o=t.precision!==void 0?t.precision:"highp";const l=s(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=a||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,f=n.getParameter(34930),h=n.getParameter(35660),m=n.getParameter(3379),_=n.getParameter(34076),p=n.getParameter(34921),d=n.getParameter(36347),v=n.getParameter(36348),E=n.getParameter(36349),x=h>0,S=a||e.has("OES_texture_float"),T=x&&S,P=a?n.getParameter(36183):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:h,maxTextureSize:m,maxCubemapSize:_,maxAttributes:p,maxVertexUniforms:d,maxVaryings:v,maxFragmentUniforms:E,vertexTextures:x,floatFragmentTextures:S,floatVertexTextures:T,maxSamples:P}}function $v(n){const e=this;let t=null,i=0,r=!1,s=!1;const a=new hi,o=new At,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const m=f.length!==0||h||i!==0||r;return r=h,i=f.length,m},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){t=u(f,h,0)},this.setState=function(f,h,m){const _=f.clippingPlanes,p=f.clipIntersection,d=f.clipShadows,v=n.get(f);if(!r||_===null||_.length===0||s&&!d)s?u(null):c();else{const E=s?0:i,x=E*4;let S=v.clippingState||null;l.value=S,S=u(_,h,x,m);for(let T=0;T!==x;++T)S[T]=t[T];v.clippingState=S,this.numIntersection=p?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,h,m,_){const p=f!==null?f.length:0;let d=null;if(p!==0){if(d=l.value,_!==!0||d===null){const v=m+p*4,E=h.matrixWorldInverse;o.getNormalMatrix(E),(d===null||d.length<v)&&(d=new Float32Array(v));for(let x=0,S=m;x!==p;++x,S+=4)a.copy(f[x]).applyMatrix4(E,o),a.normal.toArray(d,S),d[S+3]=a.constant}l.value=d,l.needsUpdate=!0}return e.numPlanes=p,e.numIntersection=0,d}}function Yv(n){let e=new WeakMap;function t(a,o){return o===da?a.mapping=tr:o===pa&&(a.mapping=nr),a}function i(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const o=a.mapping;if(o===da||o===pa)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new lg(l.height/2);return c.fromEquirectangularTexture(n,a),e.set(a,c),a.addEventListener("dispose",r),t(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class zf extends $a{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Wi=4,Sc=[.125,.215,.35,.446,.526,.582],_i=20,ko=new zf,bc=new $e;let Go=null;const di=(1+Math.sqrt(5))/2,Bi=1/di,wc=[new N(1,1,1),new N(-1,1,1),new N(1,1,-1),new N(-1,1,-1),new N(0,di,Bi),new N(0,di,-Bi),new N(Bi,0,di),new N(-Bi,0,di),new N(di,Bi,0),new N(-di,Bi,0)];class Ec{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){Go=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Cc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ac(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Go),e.scissorTest=!1,_s(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===tr||e.mapping===nr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Go=this._renderer.getRenderTarget();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:jt,minFilter:jt,generateMipmaps:!1,type:Nr,format:sn,encoding:ti,depthBuffer:!1},r=Tc(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Tc(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Kv(s)),this._blurMaterial=Zv(s,e,t)}return r}_compileMaterial(e){const t=new _n(this._lodPlanes[0],e);this._renderer.compile(t,ko)}_sceneToCubeUV(e,t,i,r){const o=new Nt(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,h=u.toneMapping;u.getClearColor(bc),u.toneMapping=Fn,u.autoClear=!1;const m=new Rf({name:"PMREM.Background",side:Ht,depthWrite:!1,depthTest:!1}),_=new _n(new qr,m);let p=!1;const d=e.background;d?d.isColor&&(m.color.copy(d),e.background=null,p=!0):(m.color.copy(bc),p=!0);for(let v=0;v<6;v++){const E=v%3;E===0?(o.up.set(0,l[v],0),o.lookAt(c[v],0,0)):E===1?(o.up.set(0,0,l[v]),o.lookAt(0,c[v],0)):(o.up.set(0,l[v],0),o.lookAt(0,0,c[v]));const x=this._cubeSize;_s(r,E*x,v>2?x:0,x,x),u.setRenderTarget(r),p&&u.render(_,o),u.render(e,o)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=h,u.autoClear=f,e.background=d}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===tr||e.mapping===nr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Cc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ac());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new _n(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;_s(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,ko)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=wc[(r-1)%wc.length];this._blur(e,r-1,r,s,a)}t.autoClear=i}_blur(e,t,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new _n(this._lodPlanes[r],c),h=c.uniforms,m=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*_i-1),p=s/_,d=isFinite(s)?1+Math.floor(u*p):_i;d>_i&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${d} samples when the maximum is set to ${_i}`);const v=[];let E=0;for(let F=0;F<_i;++F){const y=F/p,C=Math.exp(-y*y/2);v.push(C),F===0?E+=C:F<d&&(E+=2*C)}for(let F=0;F<v.length;F++)v[F]=v[F]/E;h.envMap.value=e.texture,h.samples.value=d,h.weights.value=v,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:x}=this;h.dTheta.value=_,h.mipInt.value=x-i;const S=this._sizeLods[r],T=3*S*(r>x-Wi?r-x+Wi:0),P=4*(this._cubeSize-S);_s(t,T,P,3*S,2*S),l.setRenderTarget(t),l.render(f,ko)}}function Kv(n){const e=[],t=[],i=[];let r=n;const s=n-Wi+1+Sc.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let l=1/o;a>n-Wi?l=Sc[a-n+Wi-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],m=6,_=6,p=3,d=2,v=1,E=new Float32Array(p*_*m),x=new Float32Array(d*_*m),S=new Float32Array(v*_*m);for(let P=0;P<m;P++){const F=P%3*2/3-1,y=P>2?0:-1,C=[F,y,0,F+2/3,y,0,F+2/3,y+1,0,F,y,0,F+2/3,y+1,0,F,y+1,0];E.set(C,p*_*P),x.set(h,d*_*P);const I=[P,P,P,P,P,P];S.set(I,v*_*P)}const T=new Sn;T.setAttribute("position",new Pt(E,p)),T.setAttribute("uv",new Pt(x,d)),T.setAttribute("faceIndex",new Pt(S,v)),e.push(T),r>Wi&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Tc(n,e,t){const i=new Gt(n,e,t);return i.texture.mapping=js,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function _s(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function Zv(n,e,t){const i=new Float32Array(_i),r=new N(0,1,0);return new Zt({name:"SphericalGaussianBlur",defines:{n:_i,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Ka(),fragmentShader:`

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
		`,blending:kt,depthTest:!1,depthWrite:!1})}function Ac(){return new Zt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ka(),fragmentShader:`

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
		`,blending:kt,depthTest:!1,depthWrite:!1})}function Cc(){return new Zt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ka(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:kt,depthTest:!1,depthWrite:!1})}function Ka(){return`

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
	`}function Jv(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===da||l===pa,u=l===tr||l===nr;if(c||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let f=e.get(o);return t===null&&(t=new Ec(n)),f=c?t.fromEquirectangular(o,f):t.fromCubemap(o,f),e.set(o,f),f.texture}else{if(e.has(o))return e.get(o).texture;{const f=o.image;if(c&&f&&f.height>0||u&&f&&r(f)){t===null&&(t=new Ec(n));const h=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,h),o.addEventListener("dispose",s),h.texture}else return null}}}return o}function r(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function Qv(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function e0(n,e,t,i){const r={},s=new WeakMap;function a(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const _ in h.attributes)e.remove(h.attributes[_]);h.removeEventListener("dispose",a),delete r[h.id];const m=s.get(h);m&&(e.remove(m),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(f,h){return r[h.id]===!0||(h.addEventListener("dispose",a),r[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const _ in h)e.update(h[_],34962);const m=f.morphAttributes;for(const _ in m){const p=m[_];for(let d=0,v=p.length;d<v;d++)e.update(p[d],34962)}}function c(f){const h=[],m=f.index,_=f.attributes.position;let p=0;if(m!==null){const E=m.array;p=m.version;for(let x=0,S=E.length;x<S;x+=3){const T=E[x+0],P=E[x+1],F=E[x+2];h.push(T,P,P,F,F,T)}}else{const E=_.array;p=_.version;for(let x=0,S=E.length/3-1;x<S;x+=3){const T=x+0,P=x+1,F=x+2;h.push(T,P,P,F,F,T)}}const d=new(bf(h)?Df:Pf)(h,1);d.version=p;const v=s.get(f);v&&e.remove(v),s.set(f,d)}function u(f){const h=s.get(f);if(h){const m=f.index;m!==null&&h.version<m.version&&c(f)}else c(f);return s.get(f)}return{get:o,update:l,getWireframeAttribute:u}}function t0(n,e,t,i){const r=i.isWebGL2;let s;function a(h){s=h}let o,l;function c(h){o=h.type,l=h.bytesPerElement}function u(h,m){n.drawElements(s,m,o,h*l),t.update(m,s,1)}function f(h,m,_){if(_===0)return;let p,d;if(r)p=n,d="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[d](s,m,o,h*l,_),t.update(m,s,_)}this.setMode=a,this.setIndex=c,this.render=u,this.renderInstances=f}function n0(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case 4:t.triangles+=o*(s/3);break;case 1:t.lines+=o*(s/2);break;case 3:t.lines+=o*(s-1);break;case 2:t.lines+=o*s;break;case 0:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function i0(n,e){return n[0]-e[0]}function r0(n,e){return Math.abs(e[1])-Math.abs(n[1])}function s0(n,e,t){const i={},r=new Float32Array(8),s=new WeakMap,a=new Ze,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,u,f){const h=c.morphTargetInfluences;if(e.isWebGL2===!0){const _=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,p=_!==void 0?_.length:0;let d=s.get(u);if(d===void 0||d.count!==p){let K=function(){B.dispose(),s.delete(u),u.removeEventListener("dispose",K)};var m=K;d!==void 0&&d.texture.dispose();const x=u.morphAttributes.position!==void 0,S=u.morphAttributes.normal!==void 0,T=u.morphAttributes.color!==void 0,P=u.morphAttributes.position||[],F=u.morphAttributes.normal||[],y=u.morphAttributes.color||[];let C=0;x===!0&&(C=1),S===!0&&(C=2),T===!0&&(C=3);let I=u.attributes.position.count*C,Z=1;I>e.maxTextureSize&&(Z=Math.ceil(I/e.maxTextureSize),I=e.maxTextureSize);const Y=new Float32Array(I*Z*4*p),B=new Tf(Y,I,Z,p);B.type=xi,B.needsUpdate=!0;const z=C*4;for(let re=0;re<p;re++){const se=P[re],W=F[re],fe=y[re],le=I*Z*4*re;for(let Te=0;Te<se.count;Te++){const k=Te*z;x===!0&&(a.fromBufferAttribute(se,Te),Y[le+k+0]=a.x,Y[le+k+1]=a.y,Y[le+k+2]=a.z,Y[le+k+3]=0),S===!0&&(a.fromBufferAttribute(W,Te),Y[le+k+4]=a.x,Y[le+k+5]=a.y,Y[le+k+6]=a.z,Y[le+k+7]=0),T===!0&&(a.fromBufferAttribute(fe,Te),Y[le+k+8]=a.x,Y[le+k+9]=a.y,Y[le+k+10]=a.z,Y[le+k+11]=fe.itemSize===4?a.w:1)}}d={count:p,texture:B,size:new De(I,Z)},s.set(u,d),u.addEventListener("dispose",K)}let v=0;for(let x=0;x<h.length;x++)v+=h[x];const E=u.morphTargetsRelative?1:1-v;f.getUniforms().setValue(n,"morphTargetBaseInfluence",E),f.getUniforms().setValue(n,"morphTargetInfluences",h),f.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),f.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}else{const _=h===void 0?0:h.length;let p=i[u.id];if(p===void 0||p.length!==_){p=[];for(let S=0;S<_;S++)p[S]=[S,0];i[u.id]=p}for(let S=0;S<_;S++){const T=p[S];T[0]=S,T[1]=h[S]}p.sort(r0);for(let S=0;S<8;S++)S<_&&p[S][1]?(o[S][0]=p[S][0],o[S][1]=p[S][1]):(o[S][0]=Number.MAX_SAFE_INTEGER,o[S][1]=0);o.sort(i0);const d=u.morphAttributes.position,v=u.morphAttributes.normal;let E=0;for(let S=0;S<8;S++){const T=o[S],P=T[0],F=T[1];P!==Number.MAX_SAFE_INTEGER&&F?(d&&u.getAttribute("morphTarget"+S)!==d[P]&&u.setAttribute("morphTarget"+S,d[P]),v&&u.getAttribute("morphNormal"+S)!==v[P]&&u.setAttribute("morphNormal"+S,v[P]),r[S]=F,E+=F):(d&&u.hasAttribute("morphTarget"+S)===!0&&u.deleteAttribute("morphTarget"+S),v&&u.hasAttribute("morphNormal"+S)===!0&&u.deleteAttribute("morphNormal"+S),r[S]=0)}const x=u.morphTargetsRelative?1:1-E;f.getUniforms().setValue(n,"morphTargetBaseInfluence",x),f.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:l}}function o0(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);return r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),f}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}const Of=new xt,Nf=new Tf,Bf=new Xm,Hf=new Uf,Lc=[],Rc=[],Pc=new Float32Array(16),Dc=new Float32Array(9),Ic=new Float32Array(4);function dr(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Lc[r];if(s===void 0&&(s=new Float32Array(r),Lc[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function lt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function ct(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Zs(n,e){let t=Rc[e];t===void 0&&(t=new Int32Array(e),Rc[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function a0(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function l0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(lt(t,e))return;n.uniform2fv(this.addr,e),ct(t,e)}}function c0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(lt(t,e))return;n.uniform3fv(this.addr,e),ct(t,e)}}function u0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(lt(t,e))return;n.uniform4fv(this.addr,e),ct(t,e)}}function f0(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(lt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),ct(t,e)}else{if(lt(t,i))return;Ic.set(i),n.uniformMatrix2fv(this.addr,!1,Ic),ct(t,i)}}function h0(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(lt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),ct(t,e)}else{if(lt(t,i))return;Dc.set(i),n.uniformMatrix3fv(this.addr,!1,Dc),ct(t,i)}}function d0(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(lt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),ct(t,e)}else{if(lt(t,i))return;Pc.set(i),n.uniformMatrix4fv(this.addr,!1,Pc),ct(t,i)}}function p0(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function m0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(lt(t,e))return;n.uniform2iv(this.addr,e),ct(t,e)}}function g0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(lt(t,e))return;n.uniform3iv(this.addr,e),ct(t,e)}}function _0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(lt(t,e))return;n.uniform4iv(this.addr,e),ct(t,e)}}function v0(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function x0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(lt(t,e))return;n.uniform2uiv(this.addr,e),ct(t,e)}}function y0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(lt(t,e))return;n.uniform3uiv(this.addr,e),ct(t,e)}}function M0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(lt(t,e))return;n.uniform4uiv(this.addr,e),ct(t,e)}}function S0(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2D(e||Of,r)}function b0(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Bf,r)}function w0(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Hf,r)}function E0(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Nf,r)}function T0(n){switch(n){case 5126:return a0;case 35664:return l0;case 35665:return c0;case 35666:return u0;case 35674:return f0;case 35675:return h0;case 35676:return d0;case 5124:case 35670:return p0;case 35667:case 35671:return m0;case 35668:case 35672:return g0;case 35669:case 35673:return _0;case 5125:return v0;case 36294:return x0;case 36295:return y0;case 36296:return M0;case 35678:case 36198:case 36298:case 36306:case 35682:return S0;case 35679:case 36299:case 36307:return b0;case 35680:case 36300:case 36308:case 36293:return w0;case 36289:case 36303:case 36311:case 36292:return E0}}function A0(n,e){n.uniform1fv(this.addr,e)}function C0(n,e){const t=dr(e,this.size,2);n.uniform2fv(this.addr,t)}function L0(n,e){const t=dr(e,this.size,3);n.uniform3fv(this.addr,t)}function R0(n,e){const t=dr(e,this.size,4);n.uniform4fv(this.addr,t)}function P0(n,e){const t=dr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function D0(n,e){const t=dr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function I0(n,e){const t=dr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function U0(n,e){n.uniform1iv(this.addr,e)}function F0(n,e){n.uniform2iv(this.addr,e)}function z0(n,e){n.uniform3iv(this.addr,e)}function O0(n,e){n.uniform4iv(this.addr,e)}function N0(n,e){n.uniform1uiv(this.addr,e)}function B0(n,e){n.uniform2uiv(this.addr,e)}function H0(n,e){n.uniform3uiv(this.addr,e)}function k0(n,e){n.uniform4uiv(this.addr,e)}function G0(n,e,t){const i=this.cache,r=e.length,s=Zs(t,r);lt(i,s)||(n.uniform1iv(this.addr,s),ct(i,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||Of,s[a])}function V0(n,e,t){const i=this.cache,r=e.length,s=Zs(t,r);lt(i,s)||(n.uniform1iv(this.addr,s),ct(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||Bf,s[a])}function W0(n,e,t){const i=this.cache,r=e.length,s=Zs(t,r);lt(i,s)||(n.uniform1iv(this.addr,s),ct(i,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||Hf,s[a])}function q0(n,e,t){const i=this.cache,r=e.length,s=Zs(t,r);lt(i,s)||(n.uniform1iv(this.addr,s),ct(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||Nf,s[a])}function X0(n){switch(n){case 5126:return A0;case 35664:return C0;case 35665:return L0;case 35666:return R0;case 35674:return P0;case 35675:return D0;case 35676:return I0;case 5124:case 35670:return U0;case 35667:case 35671:return F0;case 35668:case 35672:return z0;case 35669:case 35673:return O0;case 5125:return N0;case 36294:return B0;case 36295:return H0;case 36296:return k0;case 35678:case 36198:case 36298:case 36306:case 35682:return G0;case 35679:case 36299:case 36307:return V0;case 35680:case 36300:case 36308:case 36293:return W0;case 36289:case 36303:case 36311:case 36292:return q0}}class j0{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.setValue=T0(t.type)}}class $0{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.size=t.size,this.setValue=X0(t.type)}}class Y0{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],i)}}}const Vo=/(\w+)(\])?(\[|\.)?/g;function Uc(n,e){n.seq.push(e),n.map[e.id]=e}function K0(n,e,t){const i=n.name,r=i.length;for(Vo.lastIndex=0;;){const s=Vo.exec(i),a=Vo.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){Uc(t,c===void 0?new j0(o,n,e):new $0(o,n,e));break}else{let f=t.map[o];f===void 0&&(f=new Y0(o),Uc(t,f)),t=f}}}class Ts{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,35718);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);K0(s,a,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&i.push(a)}return i}}function Fc(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}let Z0=0;function J0(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}function Q0(n){switch(n){case ti:return["Linear","( value )"];case Xe:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",n),["Linear","( value )"]}}function zc(n,e,t){const i=n.getShaderParameter(e,35713),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+J0(n.getShaderSource(e),a)}else return r}function ex(n,e){const t=Q0(e);return"vec4 "+n+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function tx(n,e){let t;switch(e){case dm:t="Linear";break;case pm:t="Reinhard";break;case mm:t="OptimizedCineon";break;case gm:t="ACESFilmic";break;case _m:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function nx(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.tangentSpaceNormalMap||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Tr).join(`
`)}function ix(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function rx(n,e){const t={},i=n.getProgramParameter(e,35721);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),a=s.name;let o=1;s.type===35674&&(o=2),s.type===35675&&(o=3),s.type===35676&&(o=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function Tr(n){return n!==""}function Oc(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Nc(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const sx=/^[ \t]*#include +<([\w\d./]+)>/gm;function va(n){return n.replace(sx,ox)}function ox(n,e){const t=ze[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return va(t)}const ax=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Bc(n){return n.replace(ax,lx)}function lx(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Hc(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function cx(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===gf?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===qp?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Er&&(e="SHADOWMAP_TYPE_VSM"),e}function ux(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case tr:case nr:e="ENVMAP_TYPE_CUBE";break;case js:e="ENVMAP_TYPE_CUBE_UV";break}return e}function fx(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case nr:e="ENVMAP_MODE_REFRACTION";break}return e}function hx(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Xa:e="ENVMAP_BLENDING_MULTIPLY";break;case fm:e="ENVMAP_BLENDING_MIX";break;case hm:e="ENVMAP_BLENDING_ADD";break}return e}function dx(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function px(n,e,t,i){const r=n.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=cx(t),c=ux(t),u=fx(t),f=hx(t),h=dx(t),m=t.isWebGL2?"":nx(t),_=ix(s),p=r.createProgram();let d,v,E=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(d=[_].filter(Tr).join(`
`),d.length>0&&(d+=`
`),v=[m,_].filter(Tr).join(`
`),v.length>0&&(v+=`
`)):(d=[Hc(t),"#define SHADER_NAME "+t.shaderName,_,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Tr).join(`
`),v=[m,Hc(t),"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Fn?"#define TONE_MAPPING":"",t.toneMapping!==Fn?ze.tonemapping_pars_fragment:"",t.toneMapping!==Fn?tx("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ze.encodings_pars_fragment,ex("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Tr).join(`
`)),a=va(a),a=Oc(a,t),a=Nc(a,t),o=va(o),o=Oc(o,t),o=Nc(o,t),a=Bc(a),o=Bc(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,d=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,v=["#define varying in",t.glslVersion===lc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===lc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const x=E+d+a,S=E+v+o,T=Fc(r,35633,x),P=Fc(r,35632,S);if(r.attachShader(p,T),r.attachShader(p,P),t.index0AttributeName!==void 0?r.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(p,0,"position"),r.linkProgram(p),n.debug.checkShaderErrors){const C=r.getProgramInfoLog(p).trim(),I=r.getShaderInfoLog(T).trim(),Z=r.getShaderInfoLog(P).trim();let Y=!0,B=!0;if(r.getProgramParameter(p,35714)===!1){Y=!1;const z=zc(r,T,"vertex"),K=zc(r,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(p,35715)+`

Program Info Log: `+C+`
`+z+`
`+K)}else C!==""?console.warn("THREE.WebGLProgram: Program Info Log:",C):(I===""||Z==="")&&(B=!1);B&&(this.diagnostics={runnable:Y,programLog:C,vertexShader:{log:I,prefix:d},fragmentShader:{log:Z,prefix:v}})}r.deleteShader(T),r.deleteShader(P);let F;this.getUniforms=function(){return F===void 0&&(F=new Ts(r,p)),F};let y;return this.getAttributes=function(){return y===void 0&&(y=rx(r,p)),y},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(p),this.program=void 0},this.name=t.shaderName,this.id=Z0++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=T,this.fragmentShader=P,this}let mx=0;class gx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new _x(e),t.set(e,i)),i}}class _x{constructor(e){this.id=mx++,this.code=e,this.usedTimes=0}}function vx(n,e,t,i,r,s,a){const o=new Cf,l=new gx,c=[],u=r.isWebGL2,f=r.logarithmicDepthBuffer,h=r.vertexTextures;let m=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(y,C,I,Z,Y){const B=Z.fog,z=Y.geometry,K=y.isMeshStandardMaterial?Z.environment:null,re=(y.isMeshStandardMaterial?t:e).get(y.envMap||K),se=re&&re.mapping===js?re.image.height:null,W=_[y.type];y.precision!==null&&(m=r.getMaxPrecision(y.precision),m!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",m,"instead."));const fe=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,le=fe!==void 0?fe.length:0;let Te=0;z.morphAttributes.position!==void 0&&(Te=1),z.morphAttributes.normal!==void 0&&(Te=2),z.morphAttributes.color!==void 0&&(Te=3);let k,ue,ve,A;if(W){const xe=mn[W];k=xe.vertexShader,ue=xe.fragmentShader}else k=y.vertexShader,ue=y.fragmentShader,l.update(y),ve=l.getVertexShaderID(y),A=l.getFragmentShaderID(y);const j=n.getRenderTarget(),q=y.alphaTest>0,ie=y.clearcoat>0,de=y.iridescence>0;return{isWebGL2:u,shaderID:W,shaderName:y.type,vertexShader:k,fragmentShader:ue,defines:y.defines,customVertexShaderID:ve,customFragmentShaderID:A,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:m,instancing:Y.isInstancedMesh===!0,instancingColor:Y.isInstancedMesh===!0&&Y.instanceColor!==null,supportsVertexTextures:h,outputEncoding:j===null?n.outputEncoding:j.isXRRenderTarget===!0?j.texture.encoding:ti,map:!!y.map,matcap:!!y.matcap,envMap:!!re,envMapMode:re&&re.mapping,envMapCubeUVHeight:se,lightMap:!!y.lightMap,aoMap:!!y.aoMap,emissiveMap:!!y.emissiveMap,bumpMap:!!y.bumpMap,normalMap:!!y.normalMap,objectSpaceNormalMap:y.normalMapType===Fm,tangentSpaceNormalMap:y.normalMapType===Mf,decodeVideoTexture:!!y.map&&y.map.isVideoTexture===!0&&y.map.encoding===Xe,clearcoat:ie,clearcoatMap:ie&&!!y.clearcoatMap,clearcoatRoughnessMap:ie&&!!y.clearcoatRoughnessMap,clearcoatNormalMap:ie&&!!y.clearcoatNormalMap,iridescence:de,iridescenceMap:de&&!!y.iridescenceMap,iridescenceThicknessMap:de&&!!y.iridescenceThicknessMap,displacementMap:!!y.displacementMap,roughnessMap:!!y.roughnessMap,metalnessMap:!!y.metalnessMap,specularMap:!!y.specularMap,specularIntensityMap:!!y.specularIntensityMap,specularColorMap:!!y.specularColorMap,opaque:y.transparent===!1&&y.blending===Ki,alphaMap:!!y.alphaMap,alphaTest:q,gradientMap:!!y.gradientMap,sheen:y.sheen>0,sheenColorMap:!!y.sheenColorMap,sheenRoughnessMap:!!y.sheenRoughnessMap,transmission:y.transmission>0,transmissionMap:!!y.transmissionMap,thicknessMap:!!y.thicknessMap,combine:y.combine,vertexTangents:!!y.normalMap&&!!z.attributes.tangent,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,vertexUvs:!!y.map||!!y.bumpMap||!!y.normalMap||!!y.specularMap||!!y.alphaMap||!!y.emissiveMap||!!y.roughnessMap||!!y.metalnessMap||!!y.clearcoatMap||!!y.clearcoatRoughnessMap||!!y.clearcoatNormalMap||!!y.iridescenceMap||!!y.iridescenceThicknessMap||!!y.displacementMap||!!y.transmissionMap||!!y.thicknessMap||!!y.specularIntensityMap||!!y.specularColorMap||!!y.sheenColorMap||!!y.sheenRoughnessMap,uvsVertexOnly:!(y.map||y.bumpMap||y.normalMap||y.specularMap||y.alphaMap||y.emissiveMap||y.roughnessMap||y.metalnessMap||y.clearcoatNormalMap||y.iridescenceMap||y.iridescenceThicknessMap||y.transmission>0||y.transmissionMap||y.thicknessMap||y.specularIntensityMap||y.specularColorMap||y.sheen>0||y.sheenColorMap||y.sheenRoughnessMap)&&!!y.displacementMap,fog:!!B,useFog:y.fog===!0,fogExp2:B&&B.isFogExp2,flatShading:!!y.flatShading,sizeAttenuation:y.sizeAttenuation,logarithmicDepthBuffer:f,skinning:Y.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:le,morphTextureStride:Te,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:y.dithering,shadowMapEnabled:n.shadowMap.enabled&&I.length>0,shadowMapType:n.shadowMap.type,toneMapping:y.toneMapped?n.toneMapping:Fn,useLegacyLights:n.useLegacyLights,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Dn,flipSided:y.side===Ht,useDepthPacking:!!y.depthPacking,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionDerivatives:y.extensions&&y.extensions.derivatives,extensionFragDepth:y.extensions&&y.extensions.fragDepth,extensionDrawBuffers:y.extensions&&y.extensions.drawBuffers,extensionShaderTextureLOD:y.extensions&&y.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),customProgramCacheKey:y.customProgramCacheKey()}}function d(y){const C=[];if(y.shaderID?C.push(y.shaderID):(C.push(y.customVertexShaderID),C.push(y.customFragmentShaderID)),y.defines!==void 0)for(const I in y.defines)C.push(I),C.push(y.defines[I]);return y.isRawShaderMaterial===!1&&(v(C,y),E(C,y),C.push(n.outputEncoding)),C.push(y.customProgramCacheKey),C.join()}function v(y,C){y.push(C.precision),y.push(C.outputEncoding),y.push(C.envMapMode),y.push(C.envMapCubeUVHeight),y.push(C.combine),y.push(C.vertexUvs),y.push(C.fogExp2),y.push(C.sizeAttenuation),y.push(C.morphTargetsCount),y.push(C.morphAttributeCount),y.push(C.numDirLights),y.push(C.numPointLights),y.push(C.numSpotLights),y.push(C.numSpotLightMaps),y.push(C.numHemiLights),y.push(C.numRectAreaLights),y.push(C.numDirLightShadows),y.push(C.numPointLightShadows),y.push(C.numSpotLightShadows),y.push(C.numSpotLightShadowsWithMaps),y.push(C.shadowMapType),y.push(C.toneMapping),y.push(C.numClippingPlanes),y.push(C.numClipIntersection),y.push(C.depthPacking)}function E(y,C){o.disableAll(),C.isWebGL2&&o.enable(0),C.supportsVertexTextures&&o.enable(1),C.instancing&&o.enable(2),C.instancingColor&&o.enable(3),C.map&&o.enable(4),C.matcap&&o.enable(5),C.envMap&&o.enable(6),C.lightMap&&o.enable(7),C.aoMap&&o.enable(8),C.emissiveMap&&o.enable(9),C.bumpMap&&o.enable(10),C.normalMap&&o.enable(11),C.objectSpaceNormalMap&&o.enable(12),C.tangentSpaceNormalMap&&o.enable(13),C.clearcoat&&o.enable(14),C.clearcoatMap&&o.enable(15),C.clearcoatRoughnessMap&&o.enable(16),C.clearcoatNormalMap&&o.enable(17),C.iridescence&&o.enable(18),C.iridescenceMap&&o.enable(19),C.iridescenceThicknessMap&&o.enable(20),C.displacementMap&&o.enable(21),C.specularMap&&o.enable(22),C.roughnessMap&&o.enable(23),C.metalnessMap&&o.enable(24),C.gradientMap&&o.enable(25),C.alphaMap&&o.enable(26),C.alphaTest&&o.enable(27),C.vertexColors&&o.enable(28),C.vertexAlphas&&o.enable(29),C.vertexUvs&&o.enable(30),C.vertexTangents&&o.enable(31),C.uvsVertexOnly&&o.enable(32),y.push(o.mask),o.disableAll(),C.fog&&o.enable(0),C.useFog&&o.enable(1),C.flatShading&&o.enable(2),C.logarithmicDepthBuffer&&o.enable(3),C.skinning&&o.enable(4),C.morphTargets&&o.enable(5),C.morphNormals&&o.enable(6),C.morphColors&&o.enable(7),C.premultipliedAlpha&&o.enable(8),C.shadowMapEnabled&&o.enable(9),C.useLegacyLights&&o.enable(10),C.doubleSided&&o.enable(11),C.flipSided&&o.enable(12),C.useDepthPacking&&o.enable(13),C.dithering&&o.enable(14),C.specularIntensityMap&&o.enable(15),C.specularColorMap&&o.enable(16),C.transmission&&o.enable(17),C.transmissionMap&&o.enable(18),C.thicknessMap&&o.enable(19),C.sheen&&o.enable(20),C.sheenColorMap&&o.enable(21),C.sheenRoughnessMap&&o.enable(22),C.decodeVideoTexture&&o.enable(23),C.opaque&&o.enable(24),y.push(o.mask)}function x(y){const C=_[y.type];let I;if(C){const Z=mn[C];I=rg.clone(Z.uniforms)}else I=y.uniforms;return I}function S(y,C){let I;for(let Z=0,Y=c.length;Z<Y;Z++){const B=c[Z];if(B.cacheKey===C){I=B,++I.usedTimes;break}}return I===void 0&&(I=new px(n,C,y,s),c.push(I)),I}function T(y){if(--y.usedTimes===0){const C=c.indexOf(y);c[C]=c[c.length-1],c.pop(),y.destroy()}}function P(y){l.remove(y)}function F(){l.dispose()}return{getParameters:p,getProgramCacheKey:d,getUniforms:x,acquireProgram:S,releaseProgram:T,releaseShaderCache:P,programs:c,dispose:F}}function xx(){let n=new WeakMap;function e(s){let a=n.get(s);return a===void 0&&(a={},n.set(s,a)),a}function t(s){n.delete(s)}function i(s,a,o){n.get(s)[a]=o}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function yx(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function kc(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Gc(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(f,h,m,_,p,d){let v=n[e];return v===void 0?(v={id:f.id,object:f,geometry:h,material:m,groupOrder:_,renderOrder:f.renderOrder,z:p,group:d},n[e]=v):(v.id=f.id,v.object=f,v.geometry=h,v.material=m,v.groupOrder=_,v.renderOrder=f.renderOrder,v.z=p,v.group=d),e++,v}function o(f,h,m,_,p,d){const v=a(f,h,m,_,p,d);m.transmission>0?i.push(v):m.transparent===!0?r.push(v):t.push(v)}function l(f,h,m,_,p,d){const v=a(f,h,m,_,p,d);m.transmission>0?i.unshift(v):m.transparent===!0?r.unshift(v):t.unshift(v)}function c(f,h){t.length>1&&t.sort(f||yx),i.length>1&&i.sort(h||kc),r.length>1&&r.sort(h||kc)}function u(){for(let f=e,h=n.length;f<h;f++){const m=n[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:u,sort:c}}function Mx(){let n=new WeakMap;function e(i,r){const s=n.get(i);let a;return s===void 0?(a=new Gc,n.set(i,[a])):r>=s.length?(a=new Gc,s.push(a)):a=s[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function Sx(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new N,color:new $e};break;case"SpotLight":t={position:new N,direction:new N,color:new $e,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new N,color:new $e,distance:0,decay:0};break;case"HemisphereLight":t={direction:new N,skyColor:new $e,groundColor:new $e};break;case"RectAreaLight":t={color:new $e,position:new N,halfWidth:new N,halfHeight:new N};break}return n[e.id]=t,t}}}function bx(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let wx=0;function Ex(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Tx(n,e){const t=new Sx,i=bx(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)r.probe.push(new N);const s=new N,a=new tt,o=new tt;function l(u,f){let h=0,m=0,_=0;for(let Z=0;Z<9;Z++)r.probe[Z].set(0,0,0);let p=0,d=0,v=0,E=0,x=0,S=0,T=0,P=0,F=0,y=0;u.sort(Ex);const C=f===!0?Math.PI:1;for(let Z=0,Y=u.length;Z<Y;Z++){const B=u[Z],z=B.color,K=B.intensity,re=B.distance,se=B.shadow&&B.shadow.map?B.shadow.map.texture:null;if(B.isAmbientLight)h+=z.r*K*C,m+=z.g*K*C,_+=z.b*K*C;else if(B.isLightProbe)for(let W=0;W<9;W++)r.probe[W].addScaledVector(B.sh.coefficients[W],K);else if(B.isDirectionalLight){const W=t.get(B);if(W.color.copy(B.color).multiplyScalar(B.intensity*C),B.castShadow){const fe=B.shadow,le=i.get(B);le.shadowBias=fe.bias,le.shadowNormalBias=fe.normalBias,le.shadowRadius=fe.radius,le.shadowMapSize=fe.mapSize,r.directionalShadow[p]=le,r.directionalShadowMap[p]=se,r.directionalShadowMatrix[p]=B.shadow.matrix,S++}r.directional[p]=W,p++}else if(B.isSpotLight){const W=t.get(B);W.position.setFromMatrixPosition(B.matrixWorld),W.color.copy(z).multiplyScalar(K*C),W.distance=re,W.coneCos=Math.cos(B.angle),W.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),W.decay=B.decay,r.spot[v]=W;const fe=B.shadow;if(B.map&&(r.spotLightMap[F]=B.map,F++,fe.updateMatrices(B),B.castShadow&&y++),r.spotLightMatrix[v]=fe.matrix,B.castShadow){const le=i.get(B);le.shadowBias=fe.bias,le.shadowNormalBias=fe.normalBias,le.shadowRadius=fe.radius,le.shadowMapSize=fe.mapSize,r.spotShadow[v]=le,r.spotShadowMap[v]=se,P++}v++}else if(B.isRectAreaLight){const W=t.get(B);W.color.copy(z).multiplyScalar(K),W.halfWidth.set(B.width*.5,0,0),W.halfHeight.set(0,B.height*.5,0),r.rectArea[E]=W,E++}else if(B.isPointLight){const W=t.get(B);if(W.color.copy(B.color).multiplyScalar(B.intensity*C),W.distance=B.distance,W.decay=B.decay,B.castShadow){const fe=B.shadow,le=i.get(B);le.shadowBias=fe.bias,le.shadowNormalBias=fe.normalBias,le.shadowRadius=fe.radius,le.shadowMapSize=fe.mapSize,le.shadowCameraNear=fe.camera.near,le.shadowCameraFar=fe.camera.far,r.pointShadow[d]=le,r.pointShadowMap[d]=se,r.pointShadowMatrix[d]=B.shadow.matrix,T++}r.point[d]=W,d++}else if(B.isHemisphereLight){const W=t.get(B);W.skyColor.copy(B.color).multiplyScalar(K*C),W.groundColor.copy(B.groundColor).multiplyScalar(K*C),r.hemi[x]=W,x++}}E>0&&(e.isWebGL2||n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Me.LTC_FLOAT_1,r.rectAreaLTC2=Me.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=Me.LTC_HALF_1,r.rectAreaLTC2=Me.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=h,r.ambient[1]=m,r.ambient[2]=_;const I=r.hash;(I.directionalLength!==p||I.pointLength!==d||I.spotLength!==v||I.rectAreaLength!==E||I.hemiLength!==x||I.numDirectionalShadows!==S||I.numPointShadows!==T||I.numSpotShadows!==P||I.numSpotMaps!==F)&&(r.directional.length=p,r.spot.length=v,r.rectArea.length=E,r.point.length=d,r.hemi.length=x,r.directionalShadow.length=S,r.directionalShadowMap.length=S,r.pointShadow.length=T,r.pointShadowMap.length=T,r.spotShadow.length=P,r.spotShadowMap.length=P,r.directionalShadowMatrix.length=S,r.pointShadowMatrix.length=T,r.spotLightMatrix.length=P+F-y,r.spotLightMap.length=F,r.numSpotLightShadowsWithMaps=y,I.directionalLength=p,I.pointLength=d,I.spotLength=v,I.rectAreaLength=E,I.hemiLength=x,I.numDirectionalShadows=S,I.numPointShadows=T,I.numSpotShadows=P,I.numSpotMaps=F,r.version=wx++)}function c(u,f){let h=0,m=0,_=0,p=0,d=0;const v=f.matrixWorldInverse;for(let E=0,x=u.length;E<x;E++){const S=u[E];if(S.isDirectionalLight){const T=r.directional[h];T.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(v),h++}else if(S.isSpotLight){const T=r.spot[_];T.position.setFromMatrixPosition(S.matrixWorld),T.position.applyMatrix4(v),T.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(v),_++}else if(S.isRectAreaLight){const T=r.rectArea[p];T.position.setFromMatrixPosition(S.matrixWorld),T.position.applyMatrix4(v),o.identity(),a.copy(S.matrixWorld),a.premultiply(v),o.extractRotation(a),T.halfWidth.set(S.width*.5,0,0),T.halfHeight.set(0,S.height*.5,0),T.halfWidth.applyMatrix4(o),T.halfHeight.applyMatrix4(o),p++}else if(S.isPointLight){const T=r.point[m];T.position.setFromMatrixPosition(S.matrixWorld),T.position.applyMatrix4(v),m++}else if(S.isHemisphereLight){const T=r.hemi[d];T.direction.setFromMatrixPosition(S.matrixWorld),T.direction.transformDirection(v),d++}}}return{setup:l,setupView:c,state:r}}function Vc(n,e){const t=new Tx(n,e),i=[],r=[];function s(){i.length=0,r.length=0}function a(f){i.push(f)}function o(f){r.push(f)}function l(f){t.setup(i,f)}function c(f){t.setupView(i,f)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function Ax(n,e){let t=new WeakMap;function i(s,a=0){const o=t.get(s);let l;return o===void 0?(l=new Vc(n,e),t.set(s,[l])):a>=o.length?(l=new Vc(n,e),o.push(l)):l=o[a],l}function r(){t=new WeakMap}return{get:i,dispose:r}}class Cx extends ni{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ja,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Lx extends ni{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new N,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Rx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Px=`uniform sampler2D shadow_pass;
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
}`;function Dx(n,e,t){let i=new Ya;const r=new De,s=new De,a=new Ze,o=new Cx({depthPacking:Um}),l=new Lx,c={},u=t.maxTextureSize,f={[ei]:Ht,[Ht]:ei,[Dn]:Dn},h=new Zt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new De},radius:{value:4}},vertexShader:Rx,fragmentShader:Px}),m=h.clone();m.defines.HORIZONTAL_PASS=1;const _=new Sn;_.setAttribute("position",new Pt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const p=new _n(_,h),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=gf,this.render=function(S,T,P){if(d.enabled===!1||d.autoUpdate===!1&&d.needsUpdate===!1||S.length===0)return;const F=n.getRenderTarget(),y=n.getActiveCubeFace(),C=n.getActiveMipmapLevel(),I=n.state;I.setBlending(kt),I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);for(let Z=0,Y=S.length;Z<Y;Z++){const B=S[Z],z=B.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",B,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;r.copy(z.mapSize);const K=z.getFrameExtents();if(r.multiply(K),s.copy(z.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/K.x),r.x=s.x*K.x,z.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/K.y),r.y=s.y*K.y,z.mapSize.y=s.y)),z.map===null){const se=this.type!==Er?{minFilter:Tt,magFilter:Tt}:{};z.map=new Gt(r.x,r.y,se),z.map.texture.name=B.name+".shadowMap",z.camera.updateProjectionMatrix()}n.setRenderTarget(z.map),n.clear();const re=z.getViewportCount();for(let se=0;se<re;se++){const W=z.getViewport(se);a.set(s.x*W.x,s.y*W.y,s.x*W.z,s.y*W.w),I.viewport(a),z.updateMatrices(B,se),i=z.getFrustum(),x(T,P,z.camera,B,this.type)}z.isPointLightShadow!==!0&&this.type===Er&&v(z,P),z.needsUpdate=!1}d.needsUpdate=!1,n.setRenderTarget(F,y,C)};function v(S,T){const P=e.update(p);h.defines.VSM_SAMPLES!==S.blurSamples&&(h.defines.VSM_SAMPLES=S.blurSamples,m.defines.VSM_SAMPLES=S.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new Gt(r.x,r.y)),h.uniforms.shadow_pass.value=S.map.texture,h.uniforms.resolution.value=S.mapSize,h.uniforms.radius.value=S.radius,n.setRenderTarget(S.mapPass),n.clear(),n.renderBufferDirect(T,null,P,h,p,null),m.uniforms.shadow_pass.value=S.mapPass.texture,m.uniforms.resolution.value=S.mapSize,m.uniforms.radius.value=S.radius,n.setRenderTarget(S.map),n.clear(),n.renderBufferDirect(T,null,P,m,p,null)}function E(S,T,P,F,y,C){let I=null;const Z=P.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(Z!==void 0)I=Z;else if(I=P.isPointLight===!0?l:o,n.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const Y=I.uuid,B=T.uuid;let z=c[Y];z===void 0&&(z={},c[Y]=z);let K=z[B];K===void 0&&(K=I.clone(),z[B]=K),I=K}return I.visible=T.visible,I.wireframe=T.wireframe,C===Er?I.side=T.shadowSide!==null?T.shadowSide:T.side:I.side=T.shadowSide!==null?T.shadowSide:f[T.side],I.alphaMap=T.alphaMap,I.alphaTest=T.alphaTest,I.map=T.map,I.clipShadows=T.clipShadows,I.clippingPlanes=T.clippingPlanes,I.clipIntersection=T.clipIntersection,I.displacementMap=T.displacementMap,I.displacementScale=T.displacementScale,I.displacementBias=T.displacementBias,I.wireframeLinewidth=T.wireframeLinewidth,I.linewidth=T.linewidth,P.isPointLight===!0&&I.isMeshDistanceMaterial===!0&&(I.referencePosition.setFromMatrixPosition(P.matrixWorld),I.nearDistance=F,I.farDistance=y),I}function x(S,T,P,F,y){if(S.visible===!1)return;if(S.layers.test(T.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&y===Er)&&(!S.frustumCulled||i.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,S.matrixWorld);const Z=e.update(S),Y=S.material;if(Array.isArray(Y)){const B=Z.groups;for(let z=0,K=B.length;z<K;z++){const re=B[z],se=Y[re.materialIndex];if(se&&se.visible){const W=E(S,se,F,P.near,P.far,y);n.renderBufferDirect(P,null,Z,W,S,re)}}}else if(Y.visible){const B=E(S,Y,F,P.near,P.far,y);n.renderBufferDirect(P,null,Z,B,S,null)}}const I=S.children;for(let Z=0,Y=I.length;Z<Y;Z++)x(I[Z],T,P,F,y)}}function Ix(n,e,t){const i=t.isWebGL2;function r(){let D=!1;const te=new Ze;let ge=null;const Ee=new Ze(0,0,0,0);return{setMask:function(Ce){ge!==Ce&&!D&&(n.colorMask(Ce,Ce,Ce,Ce),ge=Ce)},setLocked:function(Ce){D=Ce},setClear:function(Ce,Je,ut,Mt,cn){cn===!0&&(Ce*=Mt,Je*=Mt,ut*=Mt),te.set(Ce,Je,ut,Mt),Ee.equals(te)===!1&&(n.clearColor(Ce,Je,ut,Mt),Ee.copy(te))},reset:function(){D=!1,ge=null,Ee.set(-1,0,0,0)}}}function s(){let D=!1,te=null,ge=null,Ee=null;return{setTest:function(Ce){Ce?q(2929):ie(2929)},setMask:function(Ce){te!==Ce&&!D&&(n.depthMask(Ce),te=Ce)},setFunc:function(Ce){if(ge!==Ce){switch(Ce){case rm:n.depthFunc(512);break;case sm:n.depthFunc(519);break;case om:n.depthFunc(513);break;case ha:n.depthFunc(515);break;case am:n.depthFunc(514);break;case lm:n.depthFunc(518);break;case cm:n.depthFunc(516);break;case um:n.depthFunc(517);break;default:n.depthFunc(515)}ge=Ce}},setLocked:function(Ce){D=Ce},setClear:function(Ce){Ee!==Ce&&(n.clearDepth(Ce),Ee=Ce)},reset:function(){D=!1,te=null,ge=null,Ee=null}}}function a(){let D=!1,te=null,ge=null,Ee=null,Ce=null,Je=null,ut=null,Mt=null,cn=null;return{setTest:function(nt){D||(nt?q(2960):ie(2960))},setMask:function(nt){te!==nt&&!D&&(n.stencilMask(nt),te=nt)},setFunc:function(nt,Vt,un){(ge!==nt||Ee!==Vt||Ce!==un)&&(n.stencilFunc(nt,Vt,un),ge=nt,Ee=Vt,Ce=un)},setOp:function(nt,Vt,un){(Je!==nt||ut!==Vt||Mt!==un)&&(n.stencilOp(nt,Vt,un),Je=nt,ut=Vt,Mt=un)},setLocked:function(nt){D=nt},setClear:function(nt){cn!==nt&&(n.clearStencil(nt),cn=nt)},reset:function(){D=!1,te=null,ge=null,Ee=null,Ce=null,Je=null,ut=null,Mt=null,cn=null}}}const o=new r,l=new s,c=new a,u=new WeakMap,f=new WeakMap;let h={},m={},_=new WeakMap,p=[],d=null,v=!1,E=null,x=null,S=null,T=null,P=null,F=null,y=null,C=!1,I=null,Z=null,Y=null,B=null,z=null;const K=n.getParameter(35661);let re=!1,se=0;const W=n.getParameter(7938);W.indexOf("WebGL")!==-1?(se=parseFloat(/^WebGL (\d)/.exec(W)[1]),re=se>=1):W.indexOf("OpenGL ES")!==-1&&(se=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),re=se>=2);let fe=null,le={};const Te=n.getParameter(3088),k=n.getParameter(2978),ue=new Ze().fromArray(Te),ve=new Ze().fromArray(k);function A(D,te,ge){const Ee=new Uint8Array(4),Ce=n.createTexture();n.bindTexture(D,Ce),n.texParameteri(D,10241,9728),n.texParameteri(D,10240,9728);for(let Je=0;Je<ge;Je++)n.texImage2D(te+Je,0,6408,1,1,0,6408,5121,Ee);return Ce}const j={};j[3553]=A(3553,3553,1),j[34067]=A(34067,34069,6),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),q(2929),l.setFunc(ha),Q(!1),ce(Pl),q(2884),G(kt);function q(D){h[D]!==!0&&(n.enable(D),h[D]=!0)}function ie(D){h[D]!==!1&&(n.disable(D),h[D]=!1)}function de(D,te){return m[D]!==te?(n.bindFramebuffer(D,te),m[D]=te,i&&(D===36009&&(m[36160]=te),D===36160&&(m[36009]=te)),!0):!1}function Se(D,te){let ge=p,Ee=!1;if(D)if(ge=_.get(te),ge===void 0&&(ge=[],_.set(te,ge)),D.isWebGLMultipleRenderTargets){const Ce=D.texture;if(ge.length!==Ce.length||ge[0]!==36064){for(let Je=0,ut=Ce.length;Je<ut;Je++)ge[Je]=36064+Je;ge.length=Ce.length,Ee=!0}}else ge[0]!==36064&&(ge[0]=36064,Ee=!0);else ge[0]!==1029&&(ge[0]=1029,Ee=!0);Ee&&(t.isWebGL2?n.drawBuffers(ge):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ge))}function xe(D){return d!==D?(n.useProgram(D),d=D,!0):!1}const b={[ki]:32774,[jp]:32778,[$p]:32779};if(i)b[Fl]=32775,b[zl]=32776;else{const D=e.get("EXT_blend_minmax");D!==null&&(b[Fl]=D.MIN_EXT,b[zl]=D.MAX_EXT)}const R={[Yp]:0,[Kp]:1,[Zp]:768,[_f]:770,[im]:776,[tm]:774,[Qp]:772,[Jp]:769,[vf]:771,[nm]:775,[em]:773};function G(D,te,ge,Ee,Ce,Je,ut,Mt){if(D===kt){v===!0&&(ie(3042),v=!1);return}if(v===!1&&(q(3042),v=!0),D!==Xp){if(D!==E||Mt!==C){if((x!==ki||P!==ki)&&(n.blendEquation(32774),x=ki,P=ki),Mt)switch(D){case Ki:n.blendFuncSeparate(1,771,1,771);break;case Dl:n.blendFunc(1,1);break;case Il:n.blendFuncSeparate(0,769,0,1);break;case Ul:n.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case Ki:n.blendFuncSeparate(770,771,1,771);break;case Dl:n.blendFunc(770,1);break;case Il:n.blendFuncSeparate(0,769,0,1);break;case Ul:n.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}S=null,T=null,F=null,y=null,E=D,C=Mt}return}Ce=Ce||te,Je=Je||ge,ut=ut||Ee,(te!==x||Ce!==P)&&(n.blendEquationSeparate(b[te],b[Ce]),x=te,P=Ce),(ge!==S||Ee!==T||Je!==F||ut!==y)&&(n.blendFuncSeparate(R[ge],R[Ee],R[Je],R[ut]),S=ge,T=Ee,F=Je,y=ut),E=D,C=!1}function X(D,te){D.side===Dn?ie(2884):q(2884);let ge=D.side===Ht;te&&(ge=!ge),Q(ge),D.blending===Ki&&D.transparent===!1?G(kt):G(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.premultipliedAlpha),l.setFunc(D.depthFunc),l.setTest(D.depthTest),l.setMask(D.depthWrite),o.setMask(D.colorWrite);const Ee=D.stencilWrite;c.setTest(Ee),Ee&&(c.setMask(D.stencilWriteMask),c.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),c.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),oe(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?q(32926):ie(32926)}function Q(D){I!==D&&(D?n.frontFace(2304):n.frontFace(2305),I=D)}function ce(D){D!==Vp?(q(2884),D!==Z&&(D===Pl?n.cullFace(1029):D===Wp?n.cullFace(1028):n.cullFace(1032))):ie(2884),Z=D}function pe(D){D!==Y&&(re&&n.lineWidth(D),Y=D)}function oe(D,te,ge){D?(q(32823),(B!==te||z!==ge)&&(n.polygonOffset(te,ge),B=te,z=ge)):ie(32823)}function me(D){D?q(3089):ie(3089)}function ae(D){D===void 0&&(D=33984+K-1),fe!==D&&(n.activeTexture(D),fe=D)}function M(D,te,ge){ge===void 0&&(fe===null?ge=33984+K-1:ge=fe);let Ee=le[ge];Ee===void 0&&(Ee={type:void 0,texture:void 0},le[ge]=Ee),(Ee.type!==D||Ee.texture!==te)&&(fe!==ge&&(n.activeTexture(ge),fe=ge),n.bindTexture(D,te||j[D]),Ee.type=D,Ee.texture=te)}function g(){const D=le[fe];D!==void 0&&D.type!==void 0&&(n.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function U(){try{n.compressedTexImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function $(){try{n.compressedTexImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ee(){try{n.texSubImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function he(){try{n.texSubImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function _e(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function L(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function O(){try{n.texStorage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function be(){try{n.texStorage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ye(){try{n.texImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ae(){try{n.texImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Le(D){ue.equals(D)===!1&&(n.scissor(D.x,D.y,D.z,D.w),ue.copy(D))}function we(D){ve.equals(D)===!1&&(n.viewport(D.x,D.y,D.z,D.w),ve.copy(D))}function Pe(D,te){let ge=f.get(te);ge===void 0&&(ge=new WeakMap,f.set(te,ge));let Ee=ge.get(D);Ee===void 0&&(Ee=n.getUniformBlockIndex(te,D.name),ge.set(D,Ee))}function Be(D,te){const Ee=f.get(te).get(D);u.get(te)!==Ee&&(n.uniformBlockBinding(te,Ee,D.__bindingPointIndex),u.set(te,Ee))}function Ke(){n.disable(3042),n.disable(2884),n.disable(2929),n.disable(32823),n.disable(3089),n.disable(2960),n.disable(32926),n.blendEquation(32774),n.blendFunc(1,0),n.blendFuncSeparate(1,0,1,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(513),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(519,0,4294967295),n.stencilOp(7680,7680,7680),n.clearStencil(0),n.cullFace(1029),n.frontFace(2305),n.polygonOffset(0,0),n.activeTexture(33984),n.bindFramebuffer(36160,null),i===!0&&(n.bindFramebuffer(36009,null),n.bindFramebuffer(36008,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},fe=null,le={},m={},_=new WeakMap,p=[],d=null,v=!1,E=null,x=null,S=null,T=null,P=null,F=null,y=null,C=!1,I=null,Z=null,Y=null,B=null,z=null,ue.set(0,0,n.canvas.width,n.canvas.height),ve.set(0,0,n.canvas.width,n.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:q,disable:ie,bindFramebuffer:de,drawBuffers:Se,useProgram:xe,setBlending:G,setMaterial:X,setFlipSided:Q,setCullFace:ce,setLineWidth:pe,setPolygonOffset:oe,setScissorTest:me,activeTexture:ae,bindTexture:M,unbindTexture:g,compressedTexImage2D:U,compressedTexImage3D:$,texImage2D:ye,texImage3D:Ae,updateUBOMapping:Pe,uniformBlockBinding:Be,texStorage2D:O,texStorage3D:be,texSubImage2D:ee,texSubImage3D:he,compressedTexSubImage2D:_e,compressedTexSubImage3D:L,scissor:Le,viewport:we,reset:Ke}}function Ux(n,e,t,i,r,s,a){const o=r.isWebGL2,l=r.maxTextures,c=r.maxCubemapSize,u=r.maxTextureSize,f=r.maxSamples,h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),_=new WeakMap;let p;const d=new WeakMap;let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(M,g){return v?new OffscreenCanvas(M,g):Hr("canvas")}function x(M,g,U,$){let ee=1;if((M.width>$||M.height>$)&&(ee=$/Math.max(M.width,M.height)),ee<1||g===!0)if(typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&M instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&M instanceof ImageBitmap){const he=g?Nm:Math.floor,_e=he(ee*M.width),L=he(ee*M.height);p===void 0&&(p=E(_e,L));const O=U?E(_e,L):p;return O.width=_e,O.height=L,O.getContext("2d").drawImage(M,0,0,_e,L),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+M.width+"x"+M.height+") to ("+_e+"x"+L+")."),O}else return"data"in M&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+M.width+"x"+M.height+")."),M;return M}function S(M){return uc(M.width)&&uc(M.height)}function T(M){return o?!1:M.wrapS!==rn||M.wrapT!==rn||M.minFilter!==Tt&&M.minFilter!==jt}function P(M,g){return M.generateMipmaps&&g&&M.minFilter!==Tt&&M.minFilter!==jt}function F(M){n.generateMipmap(M)}function y(M,g,U,$,ee=!1){if(o===!1)return g;if(M!==null){if(n[M]!==void 0)return n[M];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+M+"'")}let he=g;return g===6403&&(U===5126&&(he=33326),U===5131&&(he=33325),U===5121&&(he=33321)),g===33319&&(U===5126&&(he=33328),U===5131&&(he=33327),U===5121&&(he=33323)),g===6408&&(U===5126&&(he=34836),U===5131&&(he=34842),U===5121&&(he=$===Xe&&ee===!1?35907:32856),U===32819&&(he=32854),U===32820&&(he=32855)),(he===33325||he===33326||he===33327||he===33328||he===34842||he===34836)&&e.get("EXT_color_buffer_float"),he}function C(M,g,U){return P(M,U)===!0||M.isFramebufferTexture&&M.minFilter!==Tt&&M.minFilter!==jt?Math.log2(Math.max(g.width,g.height))+1:M.mipmaps!==void 0&&M.mipmaps.length>0?M.mipmaps.length:M.isCompressedTexture&&Array.isArray(M.image)?g.mipmaps.length:1}function I(M){return M===Tt||M===Ol||M===ho?9728:9729}function Z(M){const g=M.target;g.removeEventListener("dispose",Z),B(g),g.isVideoTexture&&_.delete(g)}function Y(M){const g=M.target;g.removeEventListener("dispose",Y),K(g)}function B(M){const g=i.get(M);if(g.__webglInit===void 0)return;const U=M.source,$=d.get(U);if($){const ee=$[g.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&z(M),Object.keys($).length===0&&d.delete(U)}i.remove(M)}function z(M){const g=i.get(M);n.deleteTexture(g.__webglTexture);const U=M.source,$=d.get(U);delete $[g.__cacheKey],a.memory.textures--}function K(M){const g=M.texture,U=i.get(M),$=i.get(g);if($.__webglTexture!==void 0&&(n.deleteTexture($.__webglTexture),a.memory.textures--),M.depthTexture&&M.depthTexture.dispose(),M.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++)n.deleteFramebuffer(U.__webglFramebuffer[ee]),U.__webglDepthbuffer&&n.deleteRenderbuffer(U.__webglDepthbuffer[ee]);else{if(n.deleteFramebuffer(U.__webglFramebuffer),U.__webglDepthbuffer&&n.deleteRenderbuffer(U.__webglDepthbuffer),U.__webglMultisampledFramebuffer&&n.deleteFramebuffer(U.__webglMultisampledFramebuffer),U.__webglColorRenderbuffer)for(let ee=0;ee<U.__webglColorRenderbuffer.length;ee++)U.__webglColorRenderbuffer[ee]&&n.deleteRenderbuffer(U.__webglColorRenderbuffer[ee]);U.__webglDepthRenderbuffer&&n.deleteRenderbuffer(U.__webglDepthRenderbuffer)}if(M.isWebGLMultipleRenderTargets)for(let ee=0,he=g.length;ee<he;ee++){const _e=i.get(g[ee]);_e.__webglTexture&&(n.deleteTexture(_e.__webglTexture),a.memory.textures--),i.remove(g[ee])}i.remove(g),i.remove(M)}let re=0;function se(){re=0}function W(){const M=re;return M>=l&&console.warn("THREE.WebGLTextures: Trying to use "+M+" texture units while this GPU supports only "+l),re+=1,M}function fe(M){const g=[];return g.push(M.wrapS),g.push(M.wrapT),g.push(M.wrapR||0),g.push(M.magFilter),g.push(M.minFilter),g.push(M.anisotropy),g.push(M.internalFormat),g.push(M.format),g.push(M.type),g.push(M.generateMipmaps),g.push(M.premultiplyAlpha),g.push(M.flipY),g.push(M.unpackAlignment),g.push(M.encoding),g.join()}function le(M,g){const U=i.get(M);if(M.isVideoTexture&&me(M),M.isRenderTargetTexture===!1&&M.version>0&&U.__version!==M.version){const $=M.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ie(U,M,g);return}}t.bindTexture(3553,U.__webglTexture,33984+g)}function Te(M,g){const U=i.get(M);if(M.version>0&&U.__version!==M.version){ie(U,M,g);return}t.bindTexture(35866,U.__webglTexture,33984+g)}function k(M,g){const U=i.get(M);if(M.version>0&&U.__version!==M.version){ie(U,M,g);return}t.bindTexture(32879,U.__webglTexture,33984+g)}function ue(M,g){const U=i.get(M);if(M.version>0&&U.__version!==M.version){de(U,M,g);return}t.bindTexture(34067,U.__webglTexture,33984+g)}const ve={[ma]:10497,[rn]:33071,[ga]:33648},A={[Tt]:9728,[Ol]:9984,[ho]:9986,[jt]:9729,[vm]:9985,[Or]:9987};function j(M,g,U){if(U?(n.texParameteri(M,10242,ve[g.wrapS]),n.texParameteri(M,10243,ve[g.wrapT]),(M===32879||M===35866)&&n.texParameteri(M,32882,ve[g.wrapR]),n.texParameteri(M,10240,A[g.magFilter]),n.texParameteri(M,10241,A[g.minFilter])):(n.texParameteri(M,10242,33071),n.texParameteri(M,10243,33071),(M===32879||M===35866)&&n.texParameteri(M,32882,33071),(g.wrapS!==rn||g.wrapT!==rn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(M,10240,I(g.magFilter)),n.texParameteri(M,10241,I(g.minFilter)),g.minFilter!==Tt&&g.minFilter!==jt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const $=e.get("EXT_texture_filter_anisotropic");if(g.magFilter===Tt||g.minFilter!==ho&&g.minFilter!==Or||g.type===xi&&e.has("OES_texture_float_linear")===!1||o===!1&&g.type===Nr&&e.has("OES_texture_half_float_linear")===!1)return;(g.anisotropy>1||i.get(g).__currentAnisotropy)&&(n.texParameterf(M,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,r.getMaxAnisotropy())),i.get(g).__currentAnisotropy=g.anisotropy)}}function q(M,g){let U=!1;M.__webglInit===void 0&&(M.__webglInit=!0,g.addEventListener("dispose",Z));const $=g.source;let ee=d.get($);ee===void 0&&(ee={},d.set($,ee));const he=fe(g);if(he!==M.__cacheKey){ee[he]===void 0&&(ee[he]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,U=!0),ee[he].usedTimes++;const _e=ee[M.__cacheKey];_e!==void 0&&(ee[M.__cacheKey].usedTimes--,_e.usedTimes===0&&z(g)),M.__cacheKey=he,M.__webglTexture=ee[he].texture}return U}function ie(M,g,U){let $=3553;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&($=35866),g.isData3DTexture&&($=32879);const ee=q(M,g),he=g.source;t.bindTexture($,M.__webglTexture,33984+U);const _e=i.get(he);if(he.version!==_e.__version||ee===!0){t.activeTexture(33984+U),n.pixelStorei(37440,g.flipY),n.pixelStorei(37441,g.premultiplyAlpha),n.pixelStorei(3317,g.unpackAlignment),n.pixelStorei(37443,0);const L=T(g)&&S(g.image)===!1;let O=x(g.image,L,!1,u);O=ae(g,O);const be=S(O)||o,ye=s.convert(g.format,g.encoding);let Ae=s.convert(g.type),Le=y(g.internalFormat,ye,Ae,g.encoding,g.isVideoTexture);j($,g,be);let we;const Pe=g.mipmaps,Be=o&&g.isVideoTexture!==!0,Ke=_e.__version===void 0||ee===!0,D=C(g,O,be);if(g.isDepthTexture)Le=6402,o?g.type===xi?Le=36012:g.type===vi?Le=33190:g.type===Zi?Le=35056:Le=33189:g.type===xi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),g.format===Si&&Le===6402&&g.type!==yf&&g.type!==vi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),g.type=vi,Ae=s.convert(g.type)),g.format===ir&&Le===6402&&(Le=34041,g.type!==Zi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),g.type=Zi,Ae=s.convert(g.type))),Ke&&(Be?t.texStorage2D(3553,1,Le,O.width,O.height):t.texImage2D(3553,0,Le,O.width,O.height,0,ye,Ae,null));else if(g.isDataTexture)if(Pe.length>0&&be){Be&&Ke&&t.texStorage2D(3553,D,Le,Pe[0].width,Pe[0].height);for(let te=0,ge=Pe.length;te<ge;te++)we=Pe[te],Be?t.texSubImage2D(3553,te,0,0,we.width,we.height,ye,Ae,we.data):t.texImage2D(3553,te,Le,we.width,we.height,0,ye,Ae,we.data);g.generateMipmaps=!1}else Be?(Ke&&t.texStorage2D(3553,D,Le,O.width,O.height),t.texSubImage2D(3553,0,0,0,O.width,O.height,ye,Ae,O.data)):t.texImage2D(3553,0,Le,O.width,O.height,0,ye,Ae,O.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){Be&&Ke&&t.texStorage3D(35866,D,Le,Pe[0].width,Pe[0].height,O.depth);for(let te=0,ge=Pe.length;te<ge;te++)we=Pe[te],g.format!==sn?ye!==null?Be?t.compressedTexSubImage3D(35866,te,0,0,0,we.width,we.height,O.depth,ye,we.data,0,0):t.compressedTexImage3D(35866,te,Le,we.width,we.height,O.depth,0,we.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Be?t.texSubImage3D(35866,te,0,0,0,we.width,we.height,O.depth,ye,Ae,we.data):t.texImage3D(35866,te,Le,we.width,we.height,O.depth,0,ye,Ae,we.data)}else{Be&&Ke&&t.texStorage2D(3553,D,Le,Pe[0].width,Pe[0].height);for(let te=0,ge=Pe.length;te<ge;te++)we=Pe[te],g.format!==sn?ye!==null?Be?t.compressedTexSubImage2D(3553,te,0,0,we.width,we.height,ye,we.data):t.compressedTexImage2D(3553,te,Le,we.width,we.height,0,we.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Be?t.texSubImage2D(3553,te,0,0,we.width,we.height,ye,Ae,we.data):t.texImage2D(3553,te,Le,we.width,we.height,0,ye,Ae,we.data)}else if(g.isDataArrayTexture)Be?(Ke&&t.texStorage3D(35866,D,Le,O.width,O.height,O.depth),t.texSubImage3D(35866,0,0,0,0,O.width,O.height,O.depth,ye,Ae,O.data)):t.texImage3D(35866,0,Le,O.width,O.height,O.depth,0,ye,Ae,O.data);else if(g.isData3DTexture)Be?(Ke&&t.texStorage3D(32879,D,Le,O.width,O.height,O.depth),t.texSubImage3D(32879,0,0,0,0,O.width,O.height,O.depth,ye,Ae,O.data)):t.texImage3D(32879,0,Le,O.width,O.height,O.depth,0,ye,Ae,O.data);else if(g.isFramebufferTexture){if(Ke)if(Be)t.texStorage2D(3553,D,Le,O.width,O.height);else{let te=O.width,ge=O.height;for(let Ee=0;Ee<D;Ee++)t.texImage2D(3553,Ee,Le,te,ge,0,ye,Ae,null),te>>=1,ge>>=1}}else if(Pe.length>0&&be){Be&&Ke&&t.texStorage2D(3553,D,Le,Pe[0].width,Pe[0].height);for(let te=0,ge=Pe.length;te<ge;te++)we=Pe[te],Be?t.texSubImage2D(3553,te,0,0,ye,Ae,we):t.texImage2D(3553,te,Le,ye,Ae,we);g.generateMipmaps=!1}else Be?(Ke&&t.texStorage2D(3553,D,Le,O.width,O.height),t.texSubImage2D(3553,0,0,0,ye,Ae,O)):t.texImage2D(3553,0,Le,ye,Ae,O);P(g,be)&&F($),_e.__version=he.version,g.onUpdate&&g.onUpdate(g)}M.__version=g.version}function de(M,g,U){if(g.image.length!==6)return;const $=q(M,g),ee=g.source;t.bindTexture(34067,M.__webglTexture,33984+U);const he=i.get(ee);if(ee.version!==he.__version||$===!0){t.activeTexture(33984+U),n.pixelStorei(37440,g.flipY),n.pixelStorei(37441,g.premultiplyAlpha),n.pixelStorei(3317,g.unpackAlignment),n.pixelStorei(37443,0);const _e=g.isCompressedTexture||g.image[0].isCompressedTexture,L=g.image[0]&&g.image[0].isDataTexture,O=[];for(let te=0;te<6;te++)!_e&&!L?O[te]=x(g.image[te],!1,!0,c):O[te]=L?g.image[te].image:g.image[te],O[te]=ae(g,O[te]);const be=O[0],ye=S(be)||o,Ae=s.convert(g.format,g.encoding),Le=s.convert(g.type),we=y(g.internalFormat,Ae,Le,g.encoding),Pe=o&&g.isVideoTexture!==!0,Be=he.__version===void 0||$===!0;let Ke=C(g,be,ye);j(34067,g,ye);let D;if(_e){Pe&&Be&&t.texStorage2D(34067,Ke,we,be.width,be.height);for(let te=0;te<6;te++){D=O[te].mipmaps;for(let ge=0;ge<D.length;ge++){const Ee=D[ge];g.format!==sn?Ae!==null?Pe?t.compressedTexSubImage2D(34069+te,ge,0,0,Ee.width,Ee.height,Ae,Ee.data):t.compressedTexImage2D(34069+te,ge,we,Ee.width,Ee.height,0,Ee.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Pe?t.texSubImage2D(34069+te,ge,0,0,Ee.width,Ee.height,Ae,Le,Ee.data):t.texImage2D(34069+te,ge,we,Ee.width,Ee.height,0,Ae,Le,Ee.data)}}}else{D=g.mipmaps,Pe&&Be&&(D.length>0&&Ke++,t.texStorage2D(34067,Ke,we,O[0].width,O[0].height));for(let te=0;te<6;te++)if(L){Pe?t.texSubImage2D(34069+te,0,0,0,O[te].width,O[te].height,Ae,Le,O[te].data):t.texImage2D(34069+te,0,we,O[te].width,O[te].height,0,Ae,Le,O[te].data);for(let ge=0;ge<D.length;ge++){const Ce=D[ge].image[te].image;Pe?t.texSubImage2D(34069+te,ge+1,0,0,Ce.width,Ce.height,Ae,Le,Ce.data):t.texImage2D(34069+te,ge+1,we,Ce.width,Ce.height,0,Ae,Le,Ce.data)}}else{Pe?t.texSubImage2D(34069+te,0,0,0,Ae,Le,O[te]):t.texImage2D(34069+te,0,we,Ae,Le,O[te]);for(let ge=0;ge<D.length;ge++){const Ee=D[ge];Pe?t.texSubImage2D(34069+te,ge+1,0,0,Ae,Le,Ee.image[te]):t.texImage2D(34069+te,ge+1,we,Ae,Le,Ee.image[te])}}}P(g,ye)&&F(34067),he.__version=ee.version,g.onUpdate&&g.onUpdate(g)}M.__version=g.version}function Se(M,g,U,$,ee){const he=s.convert(U.format,U.encoding),_e=s.convert(U.type),L=y(U.internalFormat,he,_e,U.encoding);i.get(g).__hasExternalTextures||(ee===32879||ee===35866?t.texImage3D(ee,0,L,g.width,g.height,g.depth,0,he,_e,null):t.texImage2D(ee,0,L,g.width,g.height,0,he,_e,null)),t.bindFramebuffer(36160,M),oe(g)?h.framebufferTexture2DMultisampleEXT(36160,$,ee,i.get(U).__webglTexture,0,pe(g)):(ee===3553||ee>=34069&&ee<=34074)&&n.framebufferTexture2D(36160,$,ee,i.get(U).__webglTexture,0),t.bindFramebuffer(36160,null)}function xe(M,g,U){if(n.bindRenderbuffer(36161,M),g.depthBuffer&&!g.stencilBuffer){let $=33189;if(U||oe(g)){const ee=g.depthTexture;ee&&ee.isDepthTexture&&(ee.type===xi?$=36012:ee.type===vi&&($=33190));const he=pe(g);oe(g)?h.renderbufferStorageMultisampleEXT(36161,he,$,g.width,g.height):n.renderbufferStorageMultisample(36161,he,$,g.width,g.height)}else n.renderbufferStorage(36161,$,g.width,g.height);n.framebufferRenderbuffer(36160,36096,36161,M)}else if(g.depthBuffer&&g.stencilBuffer){const $=pe(g);U&&oe(g)===!1?n.renderbufferStorageMultisample(36161,$,35056,g.width,g.height):oe(g)?h.renderbufferStorageMultisampleEXT(36161,$,35056,g.width,g.height):n.renderbufferStorage(36161,34041,g.width,g.height),n.framebufferRenderbuffer(36160,33306,36161,M)}else{const $=g.isWebGLMultipleRenderTargets===!0?g.texture:[g.texture];for(let ee=0;ee<$.length;ee++){const he=$[ee],_e=s.convert(he.format,he.encoding),L=s.convert(he.type),O=y(he.internalFormat,_e,L,he.encoding),be=pe(g);U&&oe(g)===!1?n.renderbufferStorageMultisample(36161,be,O,g.width,g.height):oe(g)?h.renderbufferStorageMultisampleEXT(36161,be,O,g.width,g.height):n.renderbufferStorage(36161,O,g.width,g.height)}}n.bindRenderbuffer(36161,null)}function b(M,g){if(g&&g.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,M),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(g.depthTexture).__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),le(g.depthTexture,0);const $=i.get(g.depthTexture).__webglTexture,ee=pe(g);if(g.depthTexture.format===Si)oe(g)?h.framebufferTexture2DMultisampleEXT(36160,36096,3553,$,0,ee):n.framebufferTexture2D(36160,36096,3553,$,0);else if(g.depthTexture.format===ir)oe(g)?h.framebufferTexture2DMultisampleEXT(36160,33306,3553,$,0,ee):n.framebufferTexture2D(36160,33306,3553,$,0);else throw new Error("Unknown depthTexture format")}function R(M){const g=i.get(M),U=M.isWebGLCubeRenderTarget===!0;if(M.depthTexture&&!g.__autoAllocateDepthBuffer){if(U)throw new Error("target.depthTexture not supported in Cube render targets");b(g.__webglFramebuffer,M)}else if(U){g.__webglDepthbuffer=[];for(let $=0;$<6;$++)t.bindFramebuffer(36160,g.__webglFramebuffer[$]),g.__webglDepthbuffer[$]=n.createRenderbuffer(),xe(g.__webglDepthbuffer[$],M,!1)}else t.bindFramebuffer(36160,g.__webglFramebuffer),g.__webglDepthbuffer=n.createRenderbuffer(),xe(g.__webglDepthbuffer,M,!1);t.bindFramebuffer(36160,null)}function G(M,g,U){const $=i.get(M);g!==void 0&&Se($.__webglFramebuffer,M,M.texture,36064,3553),U!==void 0&&R(M)}function X(M){const g=M.texture,U=i.get(M),$=i.get(g);M.addEventListener("dispose",Y),M.isWebGLMultipleRenderTargets!==!0&&($.__webglTexture===void 0&&($.__webglTexture=n.createTexture()),$.__version=g.version,a.memory.textures++);const ee=M.isWebGLCubeRenderTarget===!0,he=M.isWebGLMultipleRenderTargets===!0,_e=S(M)||o;if(ee){U.__webglFramebuffer=[];for(let L=0;L<6;L++)U.__webglFramebuffer[L]=n.createFramebuffer()}else{if(U.__webglFramebuffer=n.createFramebuffer(),he)if(r.drawBuffers){const L=M.texture;for(let O=0,be=L.length;O<be;O++){const ye=i.get(L[O]);ye.__webglTexture===void 0&&(ye.__webglTexture=n.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&M.samples>0&&oe(M)===!1){const L=he?g:[g];U.__webglMultisampledFramebuffer=n.createFramebuffer(),U.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,U.__webglMultisampledFramebuffer);for(let O=0;O<L.length;O++){const be=L[O];U.__webglColorRenderbuffer[O]=n.createRenderbuffer(),n.bindRenderbuffer(36161,U.__webglColorRenderbuffer[O]);const ye=s.convert(be.format,be.encoding),Ae=s.convert(be.type),Le=y(be.internalFormat,ye,Ae,be.encoding,M.isXRRenderTarget===!0),we=pe(M);n.renderbufferStorageMultisample(36161,we,Le,M.width,M.height),n.framebufferRenderbuffer(36160,36064+O,36161,U.__webglColorRenderbuffer[O])}n.bindRenderbuffer(36161,null),M.depthBuffer&&(U.__webglDepthRenderbuffer=n.createRenderbuffer(),xe(U.__webglDepthRenderbuffer,M,!0)),t.bindFramebuffer(36160,null)}}if(ee){t.bindTexture(34067,$.__webglTexture),j(34067,g,_e);for(let L=0;L<6;L++)Se(U.__webglFramebuffer[L],M,g,36064,34069+L);P(g,_e)&&F(34067),t.unbindTexture()}else if(he){const L=M.texture;for(let O=0,be=L.length;O<be;O++){const ye=L[O],Ae=i.get(ye);t.bindTexture(3553,Ae.__webglTexture),j(3553,ye,_e),Se(U.__webglFramebuffer,M,ye,36064+O,3553),P(ye,_e)&&F(3553)}t.unbindTexture()}else{let L=3553;(M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(o?L=M.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(L,$.__webglTexture),j(L,g,_e),Se(U.__webglFramebuffer,M,g,36064,L),P(g,_e)&&F(L),t.unbindTexture()}M.depthBuffer&&R(M)}function Q(M){const g=S(M)||o,U=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let $=0,ee=U.length;$<ee;$++){const he=U[$];if(P(he,g)){const _e=M.isWebGLCubeRenderTarget?34067:3553,L=i.get(he).__webglTexture;t.bindTexture(_e,L),F(_e),t.unbindTexture()}}}function ce(M){if(o&&M.samples>0&&oe(M)===!1){const g=M.isWebGLMultipleRenderTargets?M.texture:[M.texture],U=M.width,$=M.height;let ee=16384;const he=[],_e=M.stencilBuffer?33306:36096,L=i.get(M),O=M.isWebGLMultipleRenderTargets===!0;if(O)for(let be=0;be<g.length;be++)t.bindFramebuffer(36160,L.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(36160,36064+be,36161,null),t.bindFramebuffer(36160,L.__webglFramebuffer),n.framebufferTexture2D(36009,36064+be,3553,null,0);t.bindFramebuffer(36008,L.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,L.__webglFramebuffer);for(let be=0;be<g.length;be++){he.push(36064+be),M.depthBuffer&&he.push(_e);const ye=L.__ignoreDepthValues!==void 0?L.__ignoreDepthValues:!1;if(ye===!1&&(M.depthBuffer&&(ee|=256),M.stencilBuffer&&(ee|=1024)),O&&n.framebufferRenderbuffer(36008,36064,36161,L.__webglColorRenderbuffer[be]),ye===!0&&(n.invalidateFramebuffer(36008,[_e]),n.invalidateFramebuffer(36009,[_e])),O){const Ae=i.get(g[be]).__webglTexture;n.framebufferTexture2D(36009,36064,3553,Ae,0)}n.blitFramebuffer(0,0,U,$,0,0,U,$,ee,9728),m&&n.invalidateFramebuffer(36008,he)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),O)for(let be=0;be<g.length;be++){t.bindFramebuffer(36160,L.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(36160,36064+be,36161,L.__webglColorRenderbuffer[be]);const ye=i.get(g[be]).__webglTexture;t.bindFramebuffer(36160,L.__webglFramebuffer),n.framebufferTexture2D(36009,36064+be,3553,ye,0)}t.bindFramebuffer(36009,L.__webglMultisampledFramebuffer)}}function pe(M){return Math.min(f,M.samples)}function oe(M){const g=i.get(M);return o&&M.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function me(M){const g=a.render.frame;_.get(M)!==g&&(_.set(M,g),M.update())}function ae(M,g){const U=M.encoding,$=M.format,ee=M.type;return M.isCompressedTexture===!0||M.isVideoTexture===!0||M.format===_a||U!==ti&&(U===Xe?o===!1?e.has("EXT_sRGB")===!0&&$===sn?(M.format=_a,M.minFilter=jt,M.generateMipmaps=!1):g=wf.sRGBToLinear(g):($!==sn||ee!==yn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",U)),g}this.allocateTextureUnit=W,this.resetTextureUnits=se,this.setTexture2D=le,this.setTexture2DArray=Te,this.setTexture3D=k,this.setTextureCube=ue,this.rebindTextures=G,this.setupRenderTarget=X,this.updateRenderTargetMipmap=Q,this.updateMultisampleRenderTarget=ce,this.setupDepthRenderbuffer=R,this.setupFrameBufferTexture=Se,this.useMultisampledRTT=oe}function Fx(n,e,t){const i=t.isWebGL2;function r(s,a=null){let o;if(s===yn)return 5121;if(s===Sm)return 32819;if(s===bm)return 32820;if(s===xm)return 5120;if(s===ym)return 5122;if(s===yf)return 5123;if(s===Mm)return 5124;if(s===vi)return 5125;if(s===xi)return 5126;if(s===Nr)return i?5131:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===wm)return 6406;if(s===sn)return 6408;if(s===Em)return 6409;if(s===Tm)return 6410;if(s===Si)return 6402;if(s===ir)return 34041;if(s===_a)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===Am)return 6403;if(s===Cm)return 36244;if(s===Lm)return 33319;if(s===Rm)return 33320;if(s===Pm)return 36249;if(s===po||s===mo||s===go||s===_o)if(a===Xe)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===po)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===mo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===go)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===_o)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===po)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===mo)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===go)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===_o)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Nl||s===Bl||s===Hl||s===kl)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===Nl)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Bl)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Hl)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===kl)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Dm)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Gl||s===Vl)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(s===Gl)return a===Xe?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===Vl)return a===Xe?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Wl||s===ql||s===Xl||s===jl||s===$l||s===Yl||s===Kl||s===Zl||s===Jl||s===Ql||s===ec||s===tc||s===nc||s===ic)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(s===Wl)return a===Xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===ql)return a===Xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Xl)return a===Xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===jl)return a===Xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===$l)return a===Xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Yl)return a===Xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Kl)return a===Xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Zl)return a===Xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Jl)return a===Xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Ql)return a===Xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===ec)return a===Xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===tc)return a===Xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===nc)return a===Xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===ic)return a===Xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===vo)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(s===vo)return a===Xe?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(s===Im||s===rc||s===sc||s===oc)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(s===vo)return o.COMPRESSED_RED_RGTC1_EXT;if(s===rc)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===sc)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===oc)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Zi?i?34042:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):n[s]!==void 0?n[s]:null}return{convert:r}}class zx extends Nt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class vs extends pt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Ox={type:"move"};class Wo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new vs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new vs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new vs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const p of e.hand.values()){const d=t.getJointPose(p,i),v=this._getHandJoint(c,p);d!==null&&(v.matrix.fromArray(d.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.jointRadius=d.radius),v.visible=d!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),m=.02,_=.005;c.inputState.pinching&&h>m+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=m-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Ox)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new vs;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class Nx extends xt{constructor(e,t,i,r,s,a,o,l,c,u){if(u=u!==void 0?u:Si,u!==Si&&u!==ir)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Si&&(i=vi),i===void 0&&u===ir&&(i=Zi),super(null,r,s,a,o,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Tt,this.minFilter=l!==void 0?l:Tt,this.flipY=!1,this.generateMipmaps=!1}}class Bx extends Mn{constructor(e,t){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,f=null,h=null,m=null,_=null;const p=t.getContextAttributes();let d=null,v=null;const E=[],x=[],S=new Set,T=new Map,P=new Nt;P.layers.enable(1),P.viewport=new Ze;const F=new Nt;F.layers.enable(2),F.viewport=new Ze;const y=[P,F],C=new zx;C.layers.enable(1),C.layers.enable(2);let I=null,Z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(k){let ue=E[k];return ue===void 0&&(ue=new Wo,E[k]=ue),ue.getTargetRaySpace()},this.getControllerGrip=function(k){let ue=E[k];return ue===void 0&&(ue=new Wo,E[k]=ue),ue.getGripSpace()},this.getHand=function(k){let ue=E[k];return ue===void 0&&(ue=new Wo,E[k]=ue),ue.getHandSpace()};function Y(k){const ue=x.indexOf(k.inputSource);if(ue===-1)return;const ve=E[ue];ve!==void 0&&ve.dispatchEvent({type:k.type,data:k.inputSource})}function B(){r.removeEventListener("select",Y),r.removeEventListener("selectstart",Y),r.removeEventListener("selectend",Y),r.removeEventListener("squeeze",Y),r.removeEventListener("squeezestart",Y),r.removeEventListener("squeezeend",Y),r.removeEventListener("end",B),r.removeEventListener("inputsourceschange",z);for(let k=0;k<E.length;k++){const ue=x[k];ue!==null&&(x[k]=null,E[k].disconnect(ue))}I=null,Z=null,e.setRenderTarget(d),m=null,h=null,f=null,r=null,v=null,Te.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(k){s=k,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(k){o=k,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(k){c=k},this.getBaseLayer=function(){return h!==null?h:m},this.getBinding=function(){return f},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(k){if(r=k,r!==null){if(d=e.getRenderTarget(),r.addEventListener("select",Y),r.addEventListener("selectstart",Y),r.addEventListener("selectend",Y),r.addEventListener("squeeze",Y),r.addEventListener("squeezestart",Y),r.addEventListener("squeezeend",Y),r.addEventListener("end",B),r.addEventListener("inputsourceschange",z),p.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const ue={antialias:r.renderState.layers===void 0?p.antialias:!0,alpha:p.alpha,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,t,ue),r.updateRenderState({baseLayer:m}),v=new Gt(m.framebufferWidth,m.framebufferHeight,{format:sn,type:yn,encoding:e.outputEncoding,stencilBuffer:p.stencil})}else{let ue=null,ve=null,A=null;p.depth&&(A=p.stencil?35056:33190,ue=p.stencil?ir:Si,ve=p.stencil?Zi:vi);const j={colorFormat:32856,depthFormat:A,scaleFactor:s};f=new XRWebGLBinding(r,t),h=f.createProjectionLayer(j),r.updateRenderState({layers:[h]}),v=new Gt(h.textureWidth,h.textureHeight,{format:sn,type:yn,depthTexture:new Nx(h.textureWidth,h.textureHeight,ve,void 0,void 0,void 0,void 0,void 0,void 0,ue),stencilBuffer:p.stencil,encoding:e.outputEncoding,samples:p.antialias?4:0});const q=e.properties.get(v);q.__ignoreDepthValues=h.ignoreDepthValues}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),Te.setContext(r),Te.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}};function z(k){for(let ue=0;ue<k.removed.length;ue++){const ve=k.removed[ue],A=x.indexOf(ve);A>=0&&(x[A]=null,E[A].disconnect(ve))}for(let ue=0;ue<k.added.length;ue++){const ve=k.added[ue];let A=x.indexOf(ve);if(A===-1){for(let q=0;q<E.length;q++)if(q>=x.length){x.push(ve),A=q;break}else if(x[q]===null){x[q]=ve,A=q;break}if(A===-1)break}const j=E[A];j&&j.connect(ve)}}const K=new N,re=new N;function se(k,ue,ve){K.setFromMatrixPosition(ue.matrixWorld),re.setFromMatrixPosition(ve.matrixWorld);const A=K.distanceTo(re),j=ue.projectionMatrix.elements,q=ve.projectionMatrix.elements,ie=j[14]/(j[10]-1),de=j[14]/(j[10]+1),Se=(j[9]+1)/j[5],xe=(j[9]-1)/j[5],b=(j[8]-1)/j[0],R=(q[8]+1)/q[0],G=ie*b,X=ie*R,Q=A/(-b+R),ce=Q*-b;ue.matrixWorld.decompose(k.position,k.quaternion,k.scale),k.translateX(ce),k.translateZ(Q),k.matrixWorld.compose(k.position,k.quaternion,k.scale),k.matrixWorldInverse.copy(k.matrixWorld).invert();const pe=ie+Q,oe=de+Q,me=G-ce,ae=X+(A-ce),M=Se*de/oe*pe,g=xe*de/oe*pe;k.projectionMatrix.makePerspective(me,ae,M,g,pe,oe)}function W(k,ue){ue===null?k.matrixWorld.copy(k.matrix):k.matrixWorld.multiplyMatrices(ue.matrixWorld,k.matrix),k.matrixWorldInverse.copy(k.matrixWorld).invert()}this.updateCamera=function(k){if(r===null)return;C.near=F.near=P.near=k.near,C.far=F.far=P.far=k.far,(I!==C.near||Z!==C.far)&&(r.updateRenderState({depthNear:C.near,depthFar:C.far}),I=C.near,Z=C.far);const ue=k.parent,ve=C.cameras;W(C,ue);for(let j=0;j<ve.length;j++)W(ve[j],ue);C.matrixWorld.decompose(C.position,C.quaternion,C.scale),k.matrix.copy(C.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale);const A=k.children;for(let j=0,q=A.length;j<q;j++)A[j].updateMatrixWorld(!0);ve.length===2?se(C,P,F):C.projectionMatrix.copy(P.projectionMatrix)},this.getCamera=function(){return C},this.getFoveation=function(){if(!(h===null&&m===null))return l},this.setFoveation=function(k){l=k,h!==null&&(h.fixedFoveation=k),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=k)},this.getPlanes=function(){return S};let fe=null;function le(k,ue){if(u=ue.getViewerPose(c||a),_=ue,u!==null){const ve=u.views;m!==null&&(e.setRenderTargetFramebuffer(v,m.framebuffer),e.setRenderTarget(v));let A=!1;ve.length!==C.cameras.length&&(C.cameras.length=0,A=!0);for(let j=0;j<ve.length;j++){const q=ve[j];let ie=null;if(m!==null)ie=m.getViewport(q);else{const Se=f.getViewSubImage(h,q);ie=Se.viewport,j===0&&(e.setRenderTargetTextures(v,Se.colorTexture,h.ignoreDepthValues?void 0:Se.depthStencilTexture),e.setRenderTarget(v))}let de=y[j];de===void 0&&(de=new Nt,de.layers.enable(j),de.viewport=new Ze,y[j]=de),de.matrix.fromArray(q.transform.matrix),de.projectionMatrix.fromArray(q.projectionMatrix),de.viewport.set(ie.x,ie.y,ie.width,ie.height),j===0&&C.matrix.copy(de.matrix),A===!0&&C.cameras.push(de)}}for(let ve=0;ve<E.length;ve++){const A=x[ve],j=E[ve];A!==null&&j!==void 0&&j.update(A,ue,c||a)}if(fe&&fe(k,ue),ue.detectedPlanes){i.dispatchEvent({type:"planesdetected",data:ue.detectedPlanes});let ve=null;for(const A of S)ue.detectedPlanes.has(A)||(ve===null&&(ve=[]),ve.push(A));if(ve!==null)for(const A of ve)S.delete(A),T.delete(A),i.dispatchEvent({type:"planeremoved",data:A});for(const A of ue.detectedPlanes)if(!S.has(A))S.add(A),T.set(A,ue.lastChangedTime),i.dispatchEvent({type:"planeadded",data:A});else{const j=T.get(A);A.lastChangedTime>j&&(T.set(A,A.lastChangedTime),i.dispatchEvent({type:"planechanged",data:A}))}}_=null}const Te=new Ff;Te.setAnimationLoop(le),this.setAnimationLoop=function(k){fe=k},this.dispose=function(){}}}function Hx(n,e){function t(p,d){d.color.getRGB(p.fogColor.value,If(n)),d.isFog?(p.fogNear.value=d.near,p.fogFar.value=d.far):d.isFogExp2&&(p.fogDensity.value=d.density)}function i(p,d,v,E,x){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(p,d):d.isMeshToonMaterial?(r(p,d),u(p,d)):d.isMeshPhongMaterial?(r(p,d),c(p,d)):d.isMeshStandardMaterial?(r(p,d),f(p,d),d.isMeshPhysicalMaterial&&h(p,d,x)):d.isMeshMatcapMaterial?(r(p,d),m(p,d)):d.isMeshDepthMaterial?r(p,d):d.isMeshDistanceMaterial?(r(p,d),_(p,d)):d.isMeshNormalMaterial?r(p,d):d.isLineBasicMaterial?(s(p,d),d.isLineDashedMaterial&&a(p,d)):d.isPointsMaterial?o(p,d,v,E):d.isSpriteMaterial?l(p,d):d.isShadowMaterial?(p.color.value.copy(d.color),p.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(p,d){p.opacity.value=d.opacity,d.color&&p.diffuse.value.copy(d.color),d.emissive&&p.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(p.map.value=d.map),d.alphaMap&&(p.alphaMap.value=d.alphaMap),d.bumpMap&&(p.bumpMap.value=d.bumpMap,p.bumpScale.value=d.bumpScale,d.side===Ht&&(p.bumpScale.value*=-1)),d.displacementMap&&(p.displacementMap.value=d.displacementMap,p.displacementScale.value=d.displacementScale,p.displacementBias.value=d.displacementBias),d.emissiveMap&&(p.emissiveMap.value=d.emissiveMap),d.normalMap&&(p.normalMap.value=d.normalMap,p.normalScale.value.copy(d.normalScale),d.side===Ht&&p.normalScale.value.negate()),d.specularMap&&(p.specularMap.value=d.specularMap),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);const v=e.get(d).envMap;if(v&&(p.envMap.value=v,p.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=d.reflectivity,p.ior.value=d.ior,p.refractionRatio.value=d.refractionRatio),d.lightMap){p.lightMap.value=d.lightMap;const S=n.useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=d.lightMapIntensity*S}d.aoMap&&(p.aoMap.value=d.aoMap,p.aoMapIntensity.value=d.aoMapIntensity);let E;d.map?E=d.map:d.specularMap?E=d.specularMap:d.displacementMap?E=d.displacementMap:d.normalMap?E=d.normalMap:d.bumpMap?E=d.bumpMap:d.roughnessMap?E=d.roughnessMap:d.metalnessMap?E=d.metalnessMap:d.alphaMap?E=d.alphaMap:d.emissiveMap?E=d.emissiveMap:d.clearcoatMap?E=d.clearcoatMap:d.clearcoatNormalMap?E=d.clearcoatNormalMap:d.clearcoatRoughnessMap?E=d.clearcoatRoughnessMap:d.iridescenceMap?E=d.iridescenceMap:d.iridescenceThicknessMap?E=d.iridescenceThicknessMap:d.specularIntensityMap?E=d.specularIntensityMap:d.specularColorMap?E=d.specularColorMap:d.transmissionMap?E=d.transmissionMap:d.thicknessMap?E=d.thicknessMap:d.sheenColorMap?E=d.sheenColorMap:d.sheenRoughnessMap&&(E=d.sheenRoughnessMap),E!==void 0&&(E.isWebGLRenderTarget&&(E=E.texture),E.matrixAutoUpdate===!0&&E.updateMatrix(),p.uvTransform.value.copy(E.matrix));let x;d.aoMap?x=d.aoMap:d.lightMap&&(x=d.lightMap),x!==void 0&&(x.isWebGLRenderTarget&&(x=x.texture),x.matrixAutoUpdate===!0&&x.updateMatrix(),p.uv2Transform.value.copy(x.matrix))}function s(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity}function a(p,d){p.dashSize.value=d.dashSize,p.totalSize.value=d.dashSize+d.gapSize,p.scale.value=d.scale}function o(p,d,v,E){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.size.value=d.size*v,p.scale.value=E*.5,d.map&&(p.map.value=d.map),d.alphaMap&&(p.alphaMap.value=d.alphaMap),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);let x;d.map?x=d.map:d.alphaMap&&(x=d.alphaMap),x!==void 0&&(x.matrixAutoUpdate===!0&&x.updateMatrix(),p.uvTransform.value.copy(x.matrix))}function l(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.rotation.value=d.rotation,d.map&&(p.map.value=d.map),d.alphaMap&&(p.alphaMap.value=d.alphaMap),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);let v;d.map?v=d.map:d.alphaMap&&(v=d.alphaMap),v!==void 0&&(v.matrixAutoUpdate===!0&&v.updateMatrix(),p.uvTransform.value.copy(v.matrix))}function c(p,d){p.specular.value.copy(d.specular),p.shininess.value=Math.max(d.shininess,1e-4)}function u(p,d){d.gradientMap&&(p.gradientMap.value=d.gradientMap)}function f(p,d){p.roughness.value=d.roughness,p.metalness.value=d.metalness,d.roughnessMap&&(p.roughnessMap.value=d.roughnessMap),d.metalnessMap&&(p.metalnessMap.value=d.metalnessMap),e.get(d).envMap&&(p.envMapIntensity.value=d.envMapIntensity)}function h(p,d,v){p.ior.value=d.ior,d.sheen>0&&(p.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),p.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(p.sheenColorMap.value=d.sheenColorMap),d.sheenRoughnessMap&&(p.sheenRoughnessMap.value=d.sheenRoughnessMap)),d.clearcoat>0&&(p.clearcoat.value=d.clearcoat,p.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(p.clearcoatMap.value=d.clearcoatMap),d.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap),d.clearcoatNormalMap&&(p.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),p.clearcoatNormalMap.value=d.clearcoatNormalMap,d.side===Ht&&p.clearcoatNormalScale.value.negate())),d.iridescence>0&&(p.iridescence.value=d.iridescence,p.iridescenceIOR.value=d.iridescenceIOR,p.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(p.iridescenceMap.value=d.iridescenceMap),d.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=d.iridescenceThicknessMap)),d.transmission>0&&(p.transmission.value=d.transmission,p.transmissionSamplerMap.value=v.texture,p.transmissionSamplerSize.value.set(v.width,v.height),d.transmissionMap&&(p.transmissionMap.value=d.transmissionMap),p.thickness.value=d.thickness,d.thicknessMap&&(p.thicknessMap.value=d.thicknessMap),p.attenuationDistance.value=d.attenuationDistance,p.attenuationColor.value.copy(d.attenuationColor)),p.specularIntensity.value=d.specularIntensity,p.specularColor.value.copy(d.specularColor),d.specularIntensityMap&&(p.specularIntensityMap.value=d.specularIntensityMap),d.specularColorMap&&(p.specularColorMap.value=d.specularColorMap)}function m(p,d){d.matcap&&(p.matcap.value=d.matcap)}function _(p,d){p.referencePosition.value.copy(d.referencePosition),p.nearDistance.value=d.nearDistance,p.farDistance.value=d.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:i}}function kx(n,e,t,i){let r={},s={},a=[];const o=t.isWebGL2?n.getParameter(35375):0;function l(E,x){const S=x.program;i.uniformBlockBinding(E,S)}function c(E,x){let S=r[E.id];S===void 0&&(_(E),S=u(E),r[E.id]=S,E.addEventListener("dispose",d));const T=x.program;i.updateUBOMapping(E,T);const P=e.render.frame;s[E.id]!==P&&(h(E),s[E.id]=P)}function u(E){const x=f();E.__bindingPointIndex=x;const S=n.createBuffer(),T=E.__size,P=E.usage;return n.bindBuffer(35345,S),n.bufferData(35345,T,P),n.bindBuffer(35345,null),n.bindBufferBase(35345,x,S),S}function f(){for(let E=0;E<o;E++)if(a.indexOf(E)===-1)return a.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(E){const x=r[E.id],S=E.uniforms,T=E.__cache;n.bindBuffer(35345,x);for(let P=0,F=S.length;P<F;P++){const y=S[P];if(m(y,P,T)===!0){const C=y.__offset,I=Array.isArray(y.value)?y.value:[y.value];let Z=0;for(let Y=0;Y<I.length;Y++){const B=I[Y],z=p(B);typeof B=="number"?(y.__data[0]=B,n.bufferSubData(35345,C+Z,y.__data)):B.isMatrix3?(y.__data[0]=B.elements[0],y.__data[1]=B.elements[1],y.__data[2]=B.elements[2],y.__data[3]=B.elements[0],y.__data[4]=B.elements[3],y.__data[5]=B.elements[4],y.__data[6]=B.elements[5],y.__data[7]=B.elements[0],y.__data[8]=B.elements[6],y.__data[9]=B.elements[7],y.__data[10]=B.elements[8],y.__data[11]=B.elements[0]):(B.toArray(y.__data,Z),Z+=z.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(35345,C,y.__data)}}n.bindBuffer(35345,null)}function m(E,x,S){const T=E.value;if(S[x]===void 0){if(typeof T=="number")S[x]=T;else{const P=Array.isArray(T)?T:[T],F=[];for(let y=0;y<P.length;y++)F.push(P[y].clone());S[x]=F}return!0}else if(typeof T=="number"){if(S[x]!==T)return S[x]=T,!0}else{const P=Array.isArray(S[x])?S[x]:[S[x]],F=Array.isArray(T)?T:[T];for(let y=0;y<P.length;y++){const C=P[y];if(C.equals(F[y])===!1)return C.copy(F[y]),!0}}return!1}function _(E){const x=E.uniforms;let S=0;const T=16;let P=0;for(let F=0,y=x.length;F<y;F++){const C=x[F],I={boundary:0,storage:0},Z=Array.isArray(C.value)?C.value:[C.value];for(let Y=0,B=Z.length;Y<B;Y++){const z=Z[Y],K=p(z);I.boundary+=K.boundary,I.storage+=K.storage}if(C.__data=new Float32Array(I.storage/Float32Array.BYTES_PER_ELEMENT),C.__offset=S,F>0){P=S%T;const Y=T-P;P!==0&&Y-I.boundary<0&&(S+=T-P,C.__offset=S)}S+=I.storage}return P=S%T,P>0&&(S+=T-P),E.__size=S,E.__cache={},this}function p(E){const x={boundary:0,storage:0};return typeof E=="number"?(x.boundary=4,x.storage=4):E.isVector2?(x.boundary=8,x.storage=8):E.isVector3||E.isColor?(x.boundary=16,x.storage=12):E.isVector4?(x.boundary=16,x.storage=16):E.isMatrix3?(x.boundary=48,x.storage=48):E.isMatrix4?(x.boundary=64,x.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),x}function d(E){const x=E.target;x.removeEventListener("dispose",d);const S=a.indexOf(x.__bindingPointIndex);a.splice(S,1),n.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function v(){for(const E in r)n.deleteBuffer(r[E]);a=[],r={},s={}}return{bind:l,update:c,dispose:v}}function Gx(){const n=Hr("canvas");return n.style.display="block",n}function Za(n={}){this.isWebGLRenderer=!0;const e=n.canvas!==void 0?n.canvas:Gx(),t=n.context!==void 0?n.context:null,i=n.depth!==void 0?n.depth:!0,r=n.stencil!==void 0?n.stencil:!0,s=n.antialias!==void 0?n.antialias:!1,a=n.premultipliedAlpha!==void 0?n.premultipliedAlpha:!0,o=n.preserveDrawingBuffer!==void 0?n.preserveDrawingBuffer:!1,l=n.powerPreference!==void 0?n.powerPreference:"default",c=n.failIfMajorPerformanceCaveat!==void 0?n.failIfMajorPerformanceCaveat:!1;let u;t!==null?u=t.getContextAttributes().alpha:u=n.alpha!==void 0?n.alpha:!1;let f=null,h=null;const m=[],_=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=ti,this.useLegacyLights=!0,this.toneMapping=Fn,this.toneMappingExposure=1;const p=this;let d=!1,v=0,E=0,x=null,S=-1,T=null;const P=new Ze,F=new Ze;let y=null,C=e.width,I=e.height,Z=1,Y=null,B=null;const z=new Ze(0,0,C,I),K=new Ze(0,0,C,I);let re=!1;const se=new Ya;let W=!1,fe=!1,le=null;const Te=new tt,k=new N,ue={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ve(){return x===null?Z:1}let A=t;function j(w,V){for(let J=0;J<w.length;J++){const H=w[J],ne=e.getContext(H,V);if(ne!==null)return ne}return null}try{const w={alpha:!0,depth:i,stencil:r,antialias:s,premultipliedAlpha:a,preserveDrawingBuffer:o,powerPreference:l,failIfMajorPerformanceCaveat:c};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Xs}`),e.addEventListener("webglcontextlost",Ae,!1),e.addEventListener("webglcontextrestored",Le,!1),e.addEventListener("webglcontextcreationerror",we,!1),A===null){const V=["webgl2","webgl","experimental-webgl"];if(p.isWebGL1Renderer===!0&&V.shift(),A=j(V,w),A===null)throw j(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}A.getShaderPrecisionFormat===void 0&&(A.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let q,ie,de,Se,xe,b,R,G,X,Q,ce,pe,oe,me,ae,M,g,U,$,ee,he,_e,L,O;function be(){q=new Qv(A),ie=new jv(A,q,n),q.init(ie),_e=new Fx(A,q,ie),de=new Ix(A,q,ie),Se=new n0,xe=new xx,b=new Ux(A,q,de,xe,ie,_e,Se),R=new Yv(p),G=new Jv(p),X=new fg(A,ie),L=new qv(A,q,X,ie),Q=new e0(A,X,Se,L),ce=new o0(A,Q,X,Se),$=new s0(A,ie,b),M=new $v(xe),pe=new vx(p,R,G,q,ie,L,M),oe=new Hx(p,xe),me=new Mx,ae=new Ax(q,ie),U=new Wv(p,R,G,de,ce,u,a),g=new Dx(p,ce,ie),O=new kx(A,Se,ie,de),ee=new Xv(A,q,Se,ie),he=new t0(A,q,Se,ie),Se.programs=pe.programs,p.capabilities=ie,p.extensions=q,p.properties=xe,p.renderLists=me,p.shadowMap=g,p.state=de,p.info=Se}be();const ye=new Bx(p,A);this.xr=ye,this.getContext=function(){return A},this.getContextAttributes=function(){return A.getContextAttributes()},this.forceContextLoss=function(){const w=q.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=q.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(w){w!==void 0&&(Z=w,this.setSize(C,I,!1))},this.getSize=function(w){return w.set(C,I)},this.setSize=function(w,V,J=!0){if(ye.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}C=w,I=V,e.width=Math.floor(w*Z),e.height=Math.floor(V*Z),J===!0&&(e.style.width=w+"px",e.style.height=V+"px"),this.setViewport(0,0,w,V)},this.getDrawingBufferSize=function(w){return w.set(C*Z,I*Z).floor()},this.setDrawingBufferSize=function(w,V,J){C=w,I=V,Z=J,e.width=Math.floor(w*J),e.height=Math.floor(V*J),this.setViewport(0,0,w,V)},this.getCurrentViewport=function(w){return w.copy(P)},this.getViewport=function(w){return w.copy(z)},this.setViewport=function(w,V,J,H){w.isVector4?z.set(w.x,w.y,w.z,w.w):z.set(w,V,J,H),de.viewport(P.copy(z).multiplyScalar(Z).floor())},this.getScissor=function(w){return w.copy(K)},this.setScissor=function(w,V,J,H){w.isVector4?K.set(w.x,w.y,w.z,w.w):K.set(w,V,J,H),de.scissor(F.copy(K).multiplyScalar(Z).floor())},this.getScissorTest=function(){return re},this.setScissorTest=function(w){de.setScissorTest(re=w)},this.setOpaqueSort=function(w){Y=w},this.setTransparentSort=function(w){B=w},this.getClearColor=function(w){return w.copy(U.getClearColor())},this.setClearColor=function(){U.setClearColor.apply(U,arguments)},this.getClearAlpha=function(){return U.getClearAlpha()},this.setClearAlpha=function(){U.setClearAlpha.apply(U,arguments)},this.clear=function(w=!0,V=!0,J=!0){let H=0;w&&(H|=16384),V&&(H|=256),J&&(H|=1024),A.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Ae,!1),e.removeEventListener("webglcontextrestored",Le,!1),e.removeEventListener("webglcontextcreationerror",we,!1),me.dispose(),ae.dispose(),xe.dispose(),R.dispose(),G.dispose(),ce.dispose(),L.dispose(),O.dispose(),pe.dispose(),ye.dispose(),ye.removeEventListener("sessionstart",ge),ye.removeEventListener("sessionend",Ee),le&&(le.dispose(),le=null),Ce.stop()};function Ae(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),d=!0}function Le(){console.log("THREE.WebGLRenderer: Context Restored."),d=!1;const w=Se.autoReset,V=g.enabled,J=g.autoUpdate,H=g.needsUpdate,ne=g.type;be(),Se.autoReset=w,g.enabled=V,g.autoUpdate=J,g.needsUpdate=H,g.type=ne}function we(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Pe(w){const V=w.target;V.removeEventListener("dispose",Pe),Be(V)}function Be(w){Ke(w),xe.remove(w)}function Ke(w){const V=xe.get(w).programs;V!==void 0&&(V.forEach(function(J){pe.releaseProgram(J)}),w.isShaderMaterial&&pe.releaseShaderCache(w))}this.renderBufferDirect=function(w,V,J,H,ne,Re){V===null&&(V=ue);const Ie=ne.isMesh&&ne.matrixWorld.determinant()<0,Oe=ih(w,V,J,H,ne);de.setMaterial(H,Ie);let Ne=J.index,qe=1;H.wireframe===!0&&(Ne=Q.getWireframeAttribute(J),qe=2);const ke=J.drawRange,Ge=J.attributes.position;let st=ke.start*qe,It=(ke.start+ke.count)*qe;Re!==null&&(st=Math.max(st,Re.start*qe),It=Math.min(It,(Re.start+Re.count)*qe)),Ne!==null?(st=Math.max(st,0),It=Math.min(It,Ne.count)):Ge!=null&&(st=Math.max(st,0),It=Math.min(It,Ge.count));const bn=It-st;if(bn<0||bn===1/0)return;L.setup(ne,H,Oe,J,Ne);let ii,ot=ee;if(Ne!==null&&(ii=X.get(Ne),ot=he,ot.setIndex(ii)),ne.isMesh)H.wireframe===!0?(de.setLineWidth(H.wireframeLinewidth*ve()),ot.setMode(1)):ot.setMode(4);else if(ne.isLine){let Ve=H.linewidth;Ve===void 0&&(Ve=1),de.setLineWidth(Ve*ve()),ne.isLineSegments?ot.setMode(1):ne.isLineLoop?ot.setMode(2):ot.setMode(3)}else ne.isPoints?ot.setMode(0):ne.isSprite&&ot.setMode(4);if(ne.isInstancedMesh)ot.renderInstances(st,bn,ne.count);else if(J.isInstancedBufferGeometry){const Ve=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,eo=Math.min(J.instanceCount,Ve);ot.renderInstances(st,bn,eo)}else ot.render(st,bn)},this.compile=function(w,V){function J(H,ne,Re){H.transparent===!0&&H.side===Dn&&H.forceSinglePass===!1?(H.side=Ht,H.needsUpdate=!0,Vt(H,ne,Re),H.side=ei,H.needsUpdate=!0,Vt(H,ne,Re),H.side=Dn):Vt(H,ne,Re)}h=ae.get(w),h.init(),_.push(h),w.traverseVisible(function(H){H.isLight&&H.layers.test(V.layers)&&(h.pushLight(H),H.castShadow&&h.pushShadow(H))}),h.setupLights(p.useLegacyLights),w.traverse(function(H){const ne=H.material;if(ne)if(Array.isArray(ne))for(let Re=0;Re<ne.length;Re++){const Ie=ne[Re];J(Ie,w,H)}else J(ne,w,H)}),_.pop(),h=null};let D=null;function te(w){D&&D(w)}function ge(){Ce.stop()}function Ee(){Ce.start()}const Ce=new Ff;Ce.setAnimationLoop(te),typeof self<"u"&&Ce.setContext(self),this.setAnimationLoop=function(w){D=w,ye.setAnimationLoop(w),w===null?Ce.stop():Ce.start()},ye.addEventListener("sessionstart",ge),ye.addEventListener("sessionend",Ee),this.render=function(w,V){if(V!==void 0&&V.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(d===!0)return;w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),ye.enabled===!0&&ye.isPresenting===!0&&(ye.cameraAutoUpdate===!0&&ye.updateCamera(V),V=ye.getCamera()),w.isScene===!0&&w.onBeforeRender(p,w,V,x),h=ae.get(w,_.length),h.init(),_.push(h),Te.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),se.setFromProjectionMatrix(Te),fe=this.localClippingEnabled,W=M.init(this.clippingPlanes,fe),f=me.get(w,m.length),f.init(),m.push(f),Je(w,V,0,p.sortObjects),f.finish(),p.sortObjects===!0&&f.sort(Y,B),W===!0&&M.beginShadows();const J=h.state.shadowsArray;if(g.render(J,w,V),W===!0&&M.endShadows(),this.info.autoReset===!0&&this.info.reset(),U.render(f,w),h.setupLights(p.useLegacyLights),V.isArrayCamera){const H=V.cameras;for(let ne=0,Re=H.length;ne<Re;ne++){const Ie=H[ne];ut(f,w,Ie,Ie.viewport)}}else ut(f,w,V);x!==null&&(b.updateMultisampleRenderTarget(x),b.updateRenderTargetMipmap(x)),w.isScene===!0&&w.onAfterRender(p,w,V),L.resetDefaultState(),S=-1,T=null,_.pop(),_.length>0?h=_[_.length-1]:h=null,m.pop(),m.length>0?f=m[m.length-1]:f=null};function Je(w,V,J,H){if(w.visible===!1)return;if(w.layers.test(V.layers)){if(w.isGroup)J=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(V);else if(w.isLight)h.pushLight(w),w.castShadow&&h.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||se.intersectsSprite(w)){H&&k.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Te);const Ie=ce.update(w),Oe=w.material;Oe.visible&&f.push(w,Ie,Oe,J,k.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(w.isSkinnedMesh&&w.skeleton.frame!==Se.render.frame&&(w.skeleton.update(),w.skeleton.frame=Se.render.frame),!w.frustumCulled||se.intersectsObject(w))){H&&k.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Te);const Ie=ce.update(w),Oe=w.material;if(Array.isArray(Oe)){const Ne=Ie.groups;for(let qe=0,ke=Ne.length;qe<ke;qe++){const Ge=Ne[qe],st=Oe[Ge.materialIndex];st&&st.visible&&f.push(w,Ie,st,J,k.z,Ge)}}else Oe.visible&&f.push(w,Ie,Oe,J,k.z,null)}}const Re=w.children;for(let Ie=0,Oe=Re.length;Ie<Oe;Ie++)Je(Re[Ie],V,J,H)}function ut(w,V,J,H){const ne=w.opaque,Re=w.transmissive,Ie=w.transparent;h.setupLightsView(J),W===!0&&M.setGlobalState(p.clippingPlanes,J),Re.length>0&&Mt(ne,V,J),H&&de.viewport(P.copy(H)),ne.length>0&&cn(ne,V,J),Re.length>0&&cn(Re,V,J),Ie.length>0&&cn(Ie,V,J),de.buffers.depth.setTest(!0),de.buffers.depth.setMask(!0),de.buffers.color.setMask(!0),de.setPolygonOffset(!1)}function Mt(w,V,J){const H=ie.isWebGL2;le===null&&(le=new Gt(1024,1024,{generateMipmaps:!0,type:q.has("EXT_color_buffer_half_float")?Nr:yn,minFilter:Or,samples:H&&s===!0?4:0}));const ne=p.getRenderTarget();p.setRenderTarget(le),p.clear();const Re=p.toneMapping;p.toneMapping=Fn,cn(w,V,J),p.toneMapping=Re,b.updateMultisampleRenderTarget(le),b.updateRenderTargetMipmap(le),p.setRenderTarget(ne)}function cn(w,V,J){const H=V.isScene===!0?V.overrideMaterial:null;for(let ne=0,Re=w.length;ne<Re;ne++){const Ie=w[ne],Oe=Ie.object,Ne=Ie.geometry,qe=H===null?Ie.material:H,ke=Ie.group;Oe.layers.test(J.layers)&&nt(Oe,V,J,Ne,qe,ke)}}function nt(w,V,J,H,ne,Re){w.onBeforeRender(p,V,J,H,ne,Re),w.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),ne.onBeforeRender(p,V,J,H,w,Re),ne.transparent===!0&&ne.side===Dn&&ne.forceSinglePass===!1?(ne.side=Ht,ne.needsUpdate=!0,p.renderBufferDirect(J,V,H,ne,w,Re),ne.side=ei,ne.needsUpdate=!0,p.renderBufferDirect(J,V,H,ne,w,Re),ne.side=Dn):p.renderBufferDirect(J,V,H,ne,w,Re),w.onAfterRender(p,V,J,H,ne,Re)}function Vt(w,V,J){V.isScene!==!0&&(V=ue);const H=xe.get(w),ne=h.state.lights,Re=h.state.shadowsArray,Ie=ne.state.version,Oe=pe.getParameters(w,ne.state,Re,V,J),Ne=pe.getProgramCacheKey(Oe);let qe=H.programs;H.environment=w.isMeshStandardMaterial?V.environment:null,H.fog=V.fog,H.envMap=(w.isMeshStandardMaterial?G:R).get(w.envMap||H.environment),qe===void 0&&(w.addEventListener("dispose",Pe),qe=new Map,H.programs=qe);let ke=qe.get(Ne);if(ke!==void 0){if(H.currentProgram===ke&&H.lightsStateVersion===Ie)return un(w,Oe),ke}else Oe.uniforms=pe.getUniforms(w),w.onBuild(J,Oe,p),w.onBeforeCompile(Oe,p),ke=pe.acquireProgram(Oe,Ne),qe.set(Ne,ke),H.uniforms=Oe.uniforms;const Ge=H.uniforms;(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Ge.clippingPlanes=M.uniform),un(w,Oe),H.needsLights=sh(w),H.lightsStateVersion=Ie,H.needsLights&&(Ge.ambientLightColor.value=ne.state.ambient,Ge.lightProbe.value=ne.state.probe,Ge.directionalLights.value=ne.state.directional,Ge.directionalLightShadows.value=ne.state.directionalShadow,Ge.spotLights.value=ne.state.spot,Ge.spotLightShadows.value=ne.state.spotShadow,Ge.rectAreaLights.value=ne.state.rectArea,Ge.ltc_1.value=ne.state.rectAreaLTC1,Ge.ltc_2.value=ne.state.rectAreaLTC2,Ge.pointLights.value=ne.state.point,Ge.pointLightShadows.value=ne.state.pointShadow,Ge.hemisphereLights.value=ne.state.hemi,Ge.directionalShadowMap.value=ne.state.directionalShadowMap,Ge.directionalShadowMatrix.value=ne.state.directionalShadowMatrix,Ge.spotShadowMap.value=ne.state.spotShadowMap,Ge.spotLightMatrix.value=ne.state.spotLightMatrix,Ge.spotLightMap.value=ne.state.spotLightMap,Ge.pointShadowMap.value=ne.state.pointShadowMap,Ge.pointShadowMatrix.value=ne.state.pointShadowMatrix);const st=ke.getUniforms(),It=Ts.seqWithValue(st.seq,Ge);return H.currentProgram=ke,H.uniformsList=It,ke}function un(w,V){const J=xe.get(w);J.outputEncoding=V.outputEncoding,J.instancing=V.instancing,J.skinning=V.skinning,J.morphTargets=V.morphTargets,J.morphNormals=V.morphNormals,J.morphColors=V.morphColors,J.morphTargetsCount=V.morphTargetsCount,J.numClippingPlanes=V.numClippingPlanes,J.numIntersection=V.numClipIntersection,J.vertexAlphas=V.vertexAlphas,J.vertexTangents=V.vertexTangents,J.toneMapping=V.toneMapping}function ih(w,V,J,H,ne){V.isScene!==!0&&(V=ue),b.resetTextureUnits();const Re=V.fog,Ie=H.isMeshStandardMaterial?V.environment:null,Oe=x===null?p.outputEncoding:x.isXRRenderTarget===!0?x.texture.encoding:ti,Ne=(H.isMeshStandardMaterial?G:R).get(H.envMap||Ie),qe=H.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,ke=!!H.normalMap&&!!J.attributes.tangent,Ge=!!J.morphAttributes.position,st=!!J.morphAttributes.normal,It=!!J.morphAttributes.color,bn=H.toneMapped?p.toneMapping:Fn,ii=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,ot=ii!==void 0?ii.length:0,Ve=xe.get(H),eo=h.state.lights;if(W===!0&&(fe===!0||w!==T)){const Ut=w===T&&H.id===S;M.setState(H,w,Ut)}let ft=!1;H.version===Ve.__version?(Ve.needsLights&&Ve.lightsStateVersion!==eo.state.version||Ve.outputEncoding!==Oe||ne.isInstancedMesh&&Ve.instancing===!1||!ne.isInstancedMesh&&Ve.instancing===!0||ne.isSkinnedMesh&&Ve.skinning===!1||!ne.isSkinnedMesh&&Ve.skinning===!0||Ve.envMap!==Ne||H.fog===!0&&Ve.fog!==Re||Ve.numClippingPlanes!==void 0&&(Ve.numClippingPlanes!==M.numPlanes||Ve.numIntersection!==M.numIntersection)||Ve.vertexAlphas!==qe||Ve.vertexTangents!==ke||Ve.morphTargets!==Ge||Ve.morphNormals!==st||Ve.morphColors!==It||Ve.toneMapping!==bn||ie.isWebGL2===!0&&Ve.morphTargetsCount!==ot)&&(ft=!0):(ft=!0,Ve.__version=H.version);let ri=Ve.currentProgram;ft===!0&&(ri=Vt(H,V,ne));let el=!1,pr=!1,to=!1;const St=ri.getUniforms(),si=Ve.uniforms;if(de.useProgram(ri.program)&&(el=!0,pr=!0,to=!0),H.id!==S&&(S=H.id,pr=!0),el||T!==w){if(St.setValue(A,"projectionMatrix",w.projectionMatrix),ie.logarithmicDepthBuffer&&St.setValue(A,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),T!==w&&(T=w,pr=!0,to=!0),H.isShaderMaterial||H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshStandardMaterial||H.envMap){const Ut=St.map.cameraPosition;Ut!==void 0&&Ut.setValue(A,k.setFromMatrixPosition(w.matrixWorld))}(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&St.setValue(A,"isOrthographic",w.isOrthographicCamera===!0),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial||H.isShadowMaterial||ne.isSkinnedMesh)&&St.setValue(A,"viewMatrix",w.matrixWorldInverse)}if(ne.isSkinnedMesh){St.setOptional(A,ne,"bindMatrix"),St.setOptional(A,ne,"bindMatrixInverse");const Ut=ne.skeleton;Ut&&(ie.floatVertexTextures?(Ut.boneTexture===null&&Ut.computeBoneTexture(),St.setValue(A,"boneTexture",Ut.boneTexture,b),St.setValue(A,"boneTextureSize",Ut.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const no=J.morphAttributes;if((no.position!==void 0||no.normal!==void 0||no.color!==void 0&&ie.isWebGL2===!0)&&$.update(ne,J,ri),(pr||Ve.receiveShadow!==ne.receiveShadow)&&(Ve.receiveShadow=ne.receiveShadow,St.setValue(A,"receiveShadow",ne.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(si.envMap.value=Ne,si.flipEnvMap.value=Ne.isCubeTexture&&Ne.isRenderTargetTexture===!1?-1:1),pr&&(St.setValue(A,"toneMappingExposure",p.toneMappingExposure),Ve.needsLights&&rh(si,to),Re&&H.fog===!0&&oe.refreshFogUniforms(si,Re),oe.refreshMaterialUniforms(si,H,Z,I,le),Ts.upload(A,Ve.uniformsList,si,b)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(Ts.upload(A,Ve.uniformsList,si,b),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&St.setValue(A,"center",ne.center),St.setValue(A,"modelViewMatrix",ne.modelViewMatrix),St.setValue(A,"normalMatrix",ne.normalMatrix),St.setValue(A,"modelMatrix",ne.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const Ut=H.uniformsGroups;for(let io=0,oh=Ut.length;io<oh;io++)if(ie.isWebGL2){const tl=Ut[io];O.update(tl,ri),O.bind(tl,ri)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return ri}function rh(w,V){w.ambientLightColor.needsUpdate=V,w.lightProbe.needsUpdate=V,w.directionalLights.needsUpdate=V,w.directionalLightShadows.needsUpdate=V,w.pointLights.needsUpdate=V,w.pointLightShadows.needsUpdate=V,w.spotLights.needsUpdate=V,w.spotLightShadows.needsUpdate=V,w.rectAreaLights.needsUpdate=V,w.hemisphereLights.needsUpdate=V}function sh(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return v},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return x},this.setRenderTargetTextures=function(w,V,J){xe.get(w.texture).__webglTexture=V,xe.get(w.depthTexture).__webglTexture=J;const H=xe.get(w);H.__hasExternalTextures=!0,H.__hasExternalTextures&&(H.__autoAllocateDepthBuffer=J===void 0,H.__autoAllocateDepthBuffer||q.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),H.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(w,V){const J=xe.get(w);J.__webglFramebuffer=V,J.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(w,V=0,J=0){x=w,v=V,E=J;let H=!0,ne=null,Re=!1,Ie=!1;if(w){const Ne=xe.get(w);Ne.__useDefaultFramebuffer!==void 0?(de.bindFramebuffer(36160,null),H=!1):Ne.__webglFramebuffer===void 0?b.setupRenderTarget(w):Ne.__hasExternalTextures&&b.rebindTextures(w,xe.get(w.texture).__webglTexture,xe.get(w.depthTexture).__webglTexture);const qe=w.texture;(qe.isData3DTexture||qe.isDataArrayTexture||qe.isCompressedArrayTexture)&&(Ie=!0);const ke=xe.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(ne=ke[V],Re=!0):ie.isWebGL2&&w.samples>0&&b.useMultisampledRTT(w)===!1?ne=xe.get(w).__webglMultisampledFramebuffer:ne=ke,P.copy(w.viewport),F.copy(w.scissor),y=w.scissorTest}else P.copy(z).multiplyScalar(Z).floor(),F.copy(K).multiplyScalar(Z).floor(),y=re;if(de.bindFramebuffer(36160,ne)&&ie.drawBuffers&&H&&de.drawBuffers(w,ne),de.viewport(P),de.scissor(F),de.setScissorTest(y),Re){const Ne=xe.get(w.texture);A.framebufferTexture2D(36160,36064,34069+V,Ne.__webglTexture,J)}else if(Ie){const Ne=xe.get(w.texture),qe=V||0;A.framebufferTextureLayer(36160,36064,Ne.__webglTexture,J||0,qe)}S=-1},this.readRenderTargetPixels=function(w,V,J,H,ne,Re,Ie){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Oe=xe.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Ie!==void 0&&(Oe=Oe[Ie]),Oe){de.bindFramebuffer(36160,Oe);try{const Ne=w.texture,qe=Ne.format,ke=Ne.type;if(qe!==sn&&_e.convert(qe)!==A.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ge=ke===Nr&&(q.has("EXT_color_buffer_half_float")||ie.isWebGL2&&q.has("EXT_color_buffer_float"));if(ke!==yn&&_e.convert(ke)!==A.getParameter(35738)&&!(ke===xi&&(ie.isWebGL2||q.has("OES_texture_float")||q.has("WEBGL_color_buffer_float")))&&!Ge){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=w.width-H&&J>=0&&J<=w.height-ne&&A.readPixels(V,J,H,ne,_e.convert(qe),_e.convert(ke),Re)}finally{const Ne=x!==null?xe.get(x).__webglFramebuffer:null;de.bindFramebuffer(36160,Ne)}}},this.copyFramebufferToTexture=function(w,V,J=0){const H=Math.pow(2,-J),ne=Math.floor(V.image.width*H),Re=Math.floor(V.image.height*H);b.setTexture2D(V,0),A.copyTexSubImage2D(3553,J,0,0,w.x,w.y,ne,Re),de.unbindTexture()},this.copyTextureToTexture=function(w,V,J,H=0){const ne=V.image.width,Re=V.image.height,Ie=_e.convert(J.format),Oe=_e.convert(J.type);b.setTexture2D(J,0),A.pixelStorei(37440,J.flipY),A.pixelStorei(37441,J.premultiplyAlpha),A.pixelStorei(3317,J.unpackAlignment),V.isDataTexture?A.texSubImage2D(3553,H,w.x,w.y,ne,Re,Ie,Oe,V.image.data):V.isCompressedTexture?A.compressedTexSubImage2D(3553,H,w.x,w.y,V.mipmaps[0].width,V.mipmaps[0].height,Ie,V.mipmaps[0].data):A.texSubImage2D(3553,H,w.x,w.y,Ie,Oe,V.image),H===0&&J.generateMipmaps&&A.generateMipmap(3553),de.unbindTexture()},this.copyTextureToTexture3D=function(w,V,J,H,ne=0){if(p.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Re=w.max.x-w.min.x+1,Ie=w.max.y-w.min.y+1,Oe=w.max.z-w.min.z+1,Ne=_e.convert(H.format),qe=_e.convert(H.type);let ke;if(H.isData3DTexture)b.setTexture3D(H,0),ke=32879;else if(H.isDataArrayTexture)b.setTexture2DArray(H,0),ke=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}A.pixelStorei(37440,H.flipY),A.pixelStorei(37441,H.premultiplyAlpha),A.pixelStorei(3317,H.unpackAlignment);const Ge=A.getParameter(3314),st=A.getParameter(32878),It=A.getParameter(3316),bn=A.getParameter(3315),ii=A.getParameter(32877),ot=J.isCompressedTexture?J.mipmaps[0]:J.image;A.pixelStorei(3314,ot.width),A.pixelStorei(32878,ot.height),A.pixelStorei(3316,w.min.x),A.pixelStorei(3315,w.min.y),A.pixelStorei(32877,w.min.z),J.isDataTexture||J.isData3DTexture?A.texSubImage3D(ke,ne,V.x,V.y,V.z,Re,Ie,Oe,Ne,qe,ot.data):J.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),A.compressedTexSubImage3D(ke,ne,V.x,V.y,V.z,Re,Ie,Oe,Ne,ot.data)):A.texSubImage3D(ke,ne,V.x,V.y,V.z,Re,Ie,Oe,Ne,qe,ot),A.pixelStorei(3314,Ge),A.pixelStorei(32878,st),A.pixelStorei(3316,It),A.pixelStorei(3315,bn),A.pixelStorei(32877,ii),ne===0&&H.generateMipmaps&&A.generateMipmap(ke),de.unbindTexture()},this.initTexture=function(w){w.isCubeTexture?b.setTextureCube(w,0):w.isData3DTexture?b.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?b.setTexture2DArray(w,0):b.setTexture2D(w,0),de.unbindTexture()},this.resetState=function(){v=0,E=0,x=null,de.reset(),L.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}Object.defineProperties(Za.prototype,{physicallyCorrectLights:{get:function(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights},set:function(n){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!n}}});class Vx extends Za{}Vx.prototype.isWebGL1Renderer=!0;class xa extends pt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class ya extends ni{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new $e(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Wc=new tt,Ma=new Af,xs=new $s,ys=new N;class qc extends pt{constructor(e=new Sn,t=new ya){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),xs.copy(i.boundingSphere),xs.applyMatrix4(r),xs.radius+=s,e.ray.intersectsSphere(xs)===!1)return;Wc.copy(r).invert(),Ma.copy(e.ray).applyMatrix4(Wc);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,f=i.attributes.position;if(c!==null){const h=Math.max(0,a.start),m=Math.min(c.count,a.start+a.count);for(let _=h,p=m;_<p;_++){const d=c.getX(_);ys.fromBufferAttribute(f,d),Xc(ys,d,l,r,e,t,this)}}else{const h=Math.max(0,a.start),m=Math.min(f.count,a.start+a.count);for(let _=h,p=m;_<p;_++)ys.fromBufferAttribute(f,_),Xc(ys,_,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Xc(n,e,t,i,r,s,a){const o=Ma.distanceSqToPoint(n);if(o<t){const l=new N;Ma.closestPointToPoint(n,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,object:a})}}class Wx extends ni{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new $e(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new $e(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Mf,this.normalScale=new De(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Xa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const jc={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class qx{constructor(e,t,i){const r=this;let s=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(u){o++,s===!1&&r.onStart!==void 0&&r.onStart(u,a,o),s=!0},this.itemEnd=function(u){a++,r.onProgress!==void 0&&r.onProgress(u,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){const f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=c.length;f<h;f+=2){const m=c[f],_=c[f+1];if(m.global&&(m.lastIndex=0),m.test(u))return _}return null}}}const Xx=new qx;class kf{constructor(e){this.manager=e!==void 0?e:Xx,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}class jx extends kf{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=jc.get(e);if(a!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a;const o=Hr("img");function l(){u(),jc.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(f){u(),r&&r(f),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(e),o.src=e,o}}class $c extends kf{constructor(e){super(e)}load(e,t,i,r){const s=new xt,a=new jx(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},i,r),s}}class Gf extends pt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new $e(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const qo=new tt,Yc=new N,Kc=new N;class Vf{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new De(512,512),this.map=null,this.mapPass=null,this.matrix=new tt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ya,this._frameExtents=new De(1,1),this._viewportCount=1,this._viewports=[new Ze(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Yc.setFromMatrixPosition(e.matrixWorld),t.position.copy(Yc),Kc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Kc),t.updateMatrixWorld(),qo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(qo),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(qo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Zc=new tt,Sr=new N,Xo=new N;class $x extends Vf{constructor(){super(new Nt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new De(4,2),this._viewportCount=6,this._viewports=[new Ze(2,1,1,1),new Ze(0,1,1,1),new Ze(3,1,1,1),new Ze(1,1,1,1),new Ze(3,0,1,1),new Ze(1,0,1,1)],this._cubeDirections=[new N(1,0,0),new N(-1,0,0),new N(0,0,1),new N(0,0,-1),new N(0,1,0),new N(0,-1,0)],this._cubeUps=[new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,0,1),new N(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),Sr.setFromMatrixPosition(e.matrixWorld),i.position.copy(Sr),Xo.copy(i.position),Xo.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Xo),i.updateMatrixWorld(),r.makeTranslation(-Sr.x,-Sr.y,-Sr.z),Zc.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Zc)}}class jo extends Gf{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new $x}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Yx extends Vf{constructor(){super(new zf(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Kx extends Gf{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(pt.DEFAULT_UP),this.updateMatrix(),this.target=new pt,this.shadow=new Yx}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class rt{constructor(e){this.value=e}clone(){return new rt(this.value.clone===void 0?this.value:this.value.clone())}}class Jc{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Rt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Xs}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Xs);const Qc={type:"change"},$o={type:"start"},eu={type:"end"};class Zx extends Mn{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new N,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ei.ROTATE,MIDDLE:Ei.DOLLY,RIGHT:Ei.PAN},this.touches={ONE:Ti.ROTATE,TWO:Ti.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(L){L.addEventListener("keydown",ae),this._domElementKeyEvents=L},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",ae),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(Qc),i.update(),s=r.NONE},this.update=function(){const L=new N,O=new wi().setFromUnitVectors(e.up,new N(0,1,0)),be=O.clone().invert(),ye=new N,Ae=new wi,Le=2*Math.PI;return function(){const Pe=i.object.position;L.copy(Pe).sub(i.target),L.applyQuaternion(O),o.setFromVector3(L),i.autoRotate&&s===r.NONE&&C(F()),i.enableDamping?(o.theta+=l.theta*i.dampingFactor,o.phi+=l.phi*i.dampingFactor):(o.theta+=l.theta,o.phi+=l.phi);let Be=i.minAzimuthAngle,Ke=i.maxAzimuthAngle;return isFinite(Be)&&isFinite(Ke)&&(Be<-Math.PI?Be+=Le:Be>Math.PI&&(Be-=Le),Ke<-Math.PI?Ke+=Le:Ke>Math.PI&&(Ke-=Le),Be<=Ke?o.theta=Math.max(Be,Math.min(Ke,o.theta)):o.theta=o.theta>(Be+Ke)/2?Math.max(Be,o.theta):Math.min(Ke,o.theta)),o.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,o.phi)),o.makeSafe(),o.radius*=c,o.radius=Math.max(i.minDistance,Math.min(i.maxDistance,o.radius)),i.enableDamping===!0?i.target.addScaledVector(u,i.dampingFactor):i.target.add(u),L.setFromSpherical(o),L.applyQuaternion(be),Pe.copy(i.target).add(L),i.object.lookAt(i.target),i.enableDamping===!0?(l.theta*=1-i.dampingFactor,l.phi*=1-i.dampingFactor,u.multiplyScalar(1-i.dampingFactor)):(l.set(0,0,0),u.set(0,0,0)),c=1,f||ye.distanceToSquared(i.object.position)>a||8*(1-Ae.dot(i.object.quaternion))>a?(i.dispatchEvent(Qc),ye.copy(i.object.position),Ae.copy(i.object.quaternion),f=!1,!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",U),i.domElement.removeEventListener("pointerdown",G),i.domElement.removeEventListener("pointercancel",ce),i.domElement.removeEventListener("wheel",me),i.domElement.removeEventListener("pointermove",X),i.domElement.removeEventListener("pointerup",Q),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",ae),i._domElementKeyEvents=null)};const i=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const a=1e-6,o=new Jc,l=new Jc;let c=1;const u=new N;let f=!1;const h=new De,m=new De,_=new De,p=new De,d=new De,v=new De,E=new De,x=new De,S=new De,T=[],P={};function F(){return 2*Math.PI/60/60*i.autoRotateSpeed}function y(){return Math.pow(.95,i.zoomSpeed)}function C(L){l.theta-=L}function I(L){l.phi-=L}const Z=function(){const L=new N;return function(be,ye){L.setFromMatrixColumn(ye,0),L.multiplyScalar(-be),u.add(L)}}(),Y=function(){const L=new N;return function(be,ye){i.screenSpacePanning===!0?L.setFromMatrixColumn(ye,1):(L.setFromMatrixColumn(ye,0),L.crossVectors(i.object.up,L)),L.multiplyScalar(be),u.add(L)}}(),B=function(){const L=new N;return function(be,ye){const Ae=i.domElement;if(i.object.isPerspectiveCamera){const Le=i.object.position;L.copy(Le).sub(i.target);let we=L.length();we*=Math.tan(i.object.fov/2*Math.PI/180),Z(2*be*we/Ae.clientHeight,i.object.matrix),Y(2*ye*we/Ae.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(Z(be*(i.object.right-i.object.left)/i.object.zoom/Ae.clientWidth,i.object.matrix),Y(ye*(i.object.top-i.object.bottom)/i.object.zoom/Ae.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function z(L){i.object.isPerspectiveCamera?c/=L:i.object.isOrthographicCamera?(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom*L)),i.object.updateProjectionMatrix(),f=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function K(L){i.object.isPerspectiveCamera?c*=L:i.object.isOrthographicCamera?(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/L)),i.object.updateProjectionMatrix(),f=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function re(L){h.set(L.clientX,L.clientY)}function se(L){E.set(L.clientX,L.clientY)}function W(L){p.set(L.clientX,L.clientY)}function fe(L){m.set(L.clientX,L.clientY),_.subVectors(m,h).multiplyScalar(i.rotateSpeed);const O=i.domElement;C(2*Math.PI*_.x/O.clientHeight),I(2*Math.PI*_.y/O.clientHeight),h.copy(m),i.update()}function le(L){x.set(L.clientX,L.clientY),S.subVectors(x,E),S.y>0?z(y()):S.y<0&&K(y()),E.copy(x),i.update()}function Te(L){d.set(L.clientX,L.clientY),v.subVectors(d,p).multiplyScalar(i.panSpeed),B(v.x,v.y),p.copy(d),i.update()}function k(L){L.deltaY<0?K(y()):L.deltaY>0&&z(y()),i.update()}function ue(L){let O=!1;switch(L.code){case i.keys.UP:L.ctrlKey||L.metaKey||L.shiftKey?I(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):B(0,i.keyPanSpeed),O=!0;break;case i.keys.BOTTOM:L.ctrlKey||L.metaKey||L.shiftKey?I(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):B(0,-i.keyPanSpeed),O=!0;break;case i.keys.LEFT:L.ctrlKey||L.metaKey||L.shiftKey?C(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):B(i.keyPanSpeed,0),O=!0;break;case i.keys.RIGHT:L.ctrlKey||L.metaKey||L.shiftKey?C(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):B(-i.keyPanSpeed,0),O=!0;break}O&&(L.preventDefault(),i.update())}function ve(){if(T.length===1)h.set(T[0].pageX,T[0].pageY);else{const L=.5*(T[0].pageX+T[1].pageX),O=.5*(T[0].pageY+T[1].pageY);h.set(L,O)}}function A(){if(T.length===1)p.set(T[0].pageX,T[0].pageY);else{const L=.5*(T[0].pageX+T[1].pageX),O=.5*(T[0].pageY+T[1].pageY);p.set(L,O)}}function j(){const L=T[0].pageX-T[1].pageX,O=T[0].pageY-T[1].pageY,be=Math.sqrt(L*L+O*O);E.set(0,be)}function q(){i.enableZoom&&j(),i.enablePan&&A()}function ie(){i.enableZoom&&j(),i.enableRotate&&ve()}function de(L){if(T.length==1)m.set(L.pageX,L.pageY);else{const be=_e(L),ye=.5*(L.pageX+be.x),Ae=.5*(L.pageY+be.y);m.set(ye,Ae)}_.subVectors(m,h).multiplyScalar(i.rotateSpeed);const O=i.domElement;C(2*Math.PI*_.x/O.clientHeight),I(2*Math.PI*_.y/O.clientHeight),h.copy(m)}function Se(L){if(T.length===1)d.set(L.pageX,L.pageY);else{const O=_e(L),be=.5*(L.pageX+O.x),ye=.5*(L.pageY+O.y);d.set(be,ye)}v.subVectors(d,p).multiplyScalar(i.panSpeed),B(v.x,v.y),p.copy(d)}function xe(L){const O=_e(L),be=L.pageX-O.x,ye=L.pageY-O.y,Ae=Math.sqrt(be*be+ye*ye);x.set(0,Ae),S.set(0,Math.pow(x.y/E.y,i.zoomSpeed)),z(S.y),E.copy(x)}function b(L){i.enableZoom&&xe(L),i.enablePan&&Se(L)}function R(L){i.enableZoom&&xe(L),i.enableRotate&&de(L)}function G(L){i.enabled!==!1&&(T.length===0&&(i.domElement.setPointerCapture(L.pointerId),i.domElement.addEventListener("pointermove",X),i.domElement.addEventListener("pointerup",Q)),$(L),L.pointerType==="touch"?M(L):pe(L))}function X(L){i.enabled!==!1&&(L.pointerType==="touch"?g(L):oe(L))}function Q(L){ee(L),T.length===0&&(i.domElement.releasePointerCapture(L.pointerId),i.domElement.removeEventListener("pointermove",X),i.domElement.removeEventListener("pointerup",Q)),i.dispatchEvent(eu),s=r.NONE}function ce(L){ee(L)}function pe(L){let O;switch(L.button){case 0:O=i.mouseButtons.LEFT;break;case 1:O=i.mouseButtons.MIDDLE;break;case 2:O=i.mouseButtons.RIGHT;break;default:O=-1}switch(O){case Ei.DOLLY:if(i.enableZoom===!1)return;se(L),s=r.DOLLY;break;case Ei.ROTATE:if(L.ctrlKey||L.metaKey||L.shiftKey){if(i.enablePan===!1)return;W(L),s=r.PAN}else{if(i.enableRotate===!1)return;re(L),s=r.ROTATE}break;case Ei.PAN:if(L.ctrlKey||L.metaKey||L.shiftKey){if(i.enableRotate===!1)return;re(L),s=r.ROTATE}else{if(i.enablePan===!1)return;W(L),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent($o)}function oe(L){switch(s){case r.ROTATE:if(i.enableRotate===!1)return;fe(L);break;case r.DOLLY:if(i.enableZoom===!1)return;le(L);break;case r.PAN:if(i.enablePan===!1)return;Te(L);break}}function me(L){i.enabled===!1||i.enableZoom===!1||s!==r.NONE||(L.preventDefault(),i.dispatchEvent($o),k(L),i.dispatchEvent(eu))}function ae(L){i.enabled===!1||i.enablePan===!1||ue(L)}function M(L){switch(he(L),T.length){case 1:switch(i.touches.ONE){case Ti.ROTATE:if(i.enableRotate===!1)return;ve(),s=r.TOUCH_ROTATE;break;case Ti.PAN:if(i.enablePan===!1)return;A(),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(i.touches.TWO){case Ti.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;q(),s=r.TOUCH_DOLLY_PAN;break;case Ti.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;ie(),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent($o)}function g(L){switch(he(L),s){case r.TOUCH_ROTATE:if(i.enableRotate===!1)return;de(L),i.update();break;case r.TOUCH_PAN:if(i.enablePan===!1)return;Se(L),i.update();break;case r.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;b(L),i.update();break;case r.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;R(L),i.update();break;default:s=r.NONE}}function U(L){i.enabled!==!1&&L.preventDefault()}function $(L){T.push(L)}function ee(L){delete P[L.pointerId];for(let O=0;O<T.length;O++)if(T[O].pointerId==L.pointerId){T.splice(O,1);return}}function he(L){let O=P[L.pointerId];O===void 0&&(O=new De,P[L.pointerId]=O),O.set(L.pageX,L.pageY)}function _e(L){const O=L.pointerId===T[0].pointerId?T[1]:T[0];return P[O.pointerId]}i.domElement.addEventListener("contextmenu",U),i.domElement.addEventListener("pointerdown",G),i.domElement.addEventListener("pointercancel",ce),i.domElement.addEventListener("wheel",me,{passive:!1}),this.update()}}/**
 * postprocessing v6.30.1 build Fri Feb 24 2023
 * https://github.com/pmndrs/postprocessing
 * Copyright 2015-2023 Raoul van Rüschen
 * @license Zlib
 */var Wf="varying vec2 vUv;void main(){vUv=position.xy*0.5+0.5;gl_Position=vec4(position.xy,1.0,1.0);}",He={SKIP:9,SET:30,ADD:0,ALPHA:1,AVERAGE:2,COLOR:3,COLOR_BURN:4,COLOR_DODGE:5,DARKEN:6,DIFFERENCE:7,DIVIDE:8,DST:9,EXCLUSION:10,HARD_LIGHT:11,HARD_MIX:12,HUE:13,INVERT:14,INVERT_RGB:15,LIGHTEN:16,LINEAR_BURN:17,LINEAR_DODGE:18,LINEAR_LIGHT:19,LUMINOSITY:20,MULTIPLY:21,NEGATION:22,NORMAL:23,OVERLAY:24,PIN_LIGHT:25,REFLECT:26,SATURATION:27,SCREEN:28,SOFT_LIGHT:29,SRC:30,SUBTRACT:31,VIVID_LIGHT:32},Jx={NONE:0,DEPTH:1,CONVOLUTION:2},Js={VERY_SMALL:0,SMALL:1,MEDIUM:2,LARGE:3,VERY_LARGE:4,HUGE:5},Qx=`#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;void main(){vec4 sum=texture2D(inputBuffer,vUv0);sum+=texture2D(inputBuffer,vUv1);sum+=texture2D(inputBuffer,vUv2);sum+=texture2D(inputBuffer,vUv3);gl_FragColor=sum*0.25;
#include <encodings_fragment>
}`,ey="uniform vec4 texelSize;uniform float kernel;uniform float scale;varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;void main(){vec2 uv=position.xy*0.5+0.5;vec2 dUv=(texelSize.xy*vec2(kernel)+texelSize.zw)*scale;vUv0=vec2(uv.x-dUv.x,uv.y+dUv.y);vUv1=vec2(uv.x+dUv.x,uv.y+dUv.y);vUv2=vec2(uv.x+dUv.x,uv.y-dUv.y);vUv3=vec2(uv.x-dUv.x,uv.y-dUv.y);gl_Position=vec4(position.xy,1.0,1.0);}",ty=[new Float32Array([0,0]),new Float32Array([0,1,1]),new Float32Array([0,1,1,2]),new Float32Array([0,1,2,2,3]),new Float32Array([0,1,2,3,4,4,5]),new Float32Array([0,1,2,3,4,5,7,8,9,10])],ny=class extends Zt{constructor(n=new Ze){super({name:"KawaseBlurMaterial",uniforms:{inputBuffer:new rt(null),texelSize:new rt(new Ze),scale:new rt(1),kernel:new rt(0)},blending:kt,depthWrite:!1,depthTest:!1,fragmentShader:Qx,vertexShader:ey}),this.toneMapped=!1,this.setTexelSize(n.x,n.y),this.kernelSize=Js.MEDIUM}set inputBuffer(n){this.uniforms.inputBuffer.value=n}setInputBuffer(n){this.inputBuffer=n}get kernelSequence(){return ty[this.kernelSize]}get scale(){return this.uniforms.scale.value}set scale(n){this.uniforms.scale.value=n}getScale(){return this.uniforms.scale.value}setScale(n){this.uniforms.scale.value=n}getKernel(){return null}get kernel(){return this.uniforms.kernel.value}set kernel(n){this.uniforms.kernel.value=n}setKernel(n){this.kernel=n}setTexelSize(n,e){this.uniforms.texelSize.value.set(n,e,n*.5,e*.5)}setSize(n,e){const t=1/n,i=1/e;this.uniforms.texelSize.value.set(t,i,t*.5,i*.5)}},iy=`#include <common>
#include <dithering_pars_fragment>
#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
uniform float opacity;varying vec2 vUv;void main(){vec4 texel=texture2D(inputBuffer,vUv);gl_FragColor=opacity*texel;
#include <encodings_fragment>
#include <dithering_fragment>
}`,ry=class extends Zt{constructor(){super({name:"CopyMaterial",uniforms:{inputBuffer:new rt(null),opacity:new rt(1)},blending:kt,depthWrite:!1,depthTest:!1,fragmentShader:iy,vertexShader:Wf}),this.toneMapped=!1}set inputBuffer(n){this.uniforms.inputBuffer.value=n}setInputBuffer(n){this.uniforms.inputBuffer.value=n}getOpacity(n){return this.uniforms.opacity.value}setOpacity(n){this.uniforms.opacity.value=n}},sy=`#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#define WEIGHT_INNER 0.125
#define WEIGHT_OUTER 0.0555555
varying vec2 vUv;varying vec2 vUv00;varying vec2 vUv01;varying vec2 vUv02;varying vec2 vUv03;varying vec2 vUv04;varying vec2 vUv05;varying vec2 vUv06;varying vec2 vUv07;varying vec2 vUv08;varying vec2 vUv09;varying vec2 vUv10;varying vec2 vUv11;float clampToBorder(const in vec2 uv){return float(uv.s>=0.0&&uv.s<=1.0&&uv.t>=0.0&&uv.t<=1.0);}void main(){vec4 c=vec4(0.0);vec4 w=WEIGHT_INNER*vec4(clampToBorder(vUv00),clampToBorder(vUv01),clampToBorder(vUv02),clampToBorder(vUv03));c+=w.x*texture2D(inputBuffer,vUv00);c+=w.y*texture2D(inputBuffer,vUv01);c+=w.z*texture2D(inputBuffer,vUv02);c+=w.w*texture2D(inputBuffer,vUv03);w=WEIGHT_OUTER*vec4(clampToBorder(vUv04),clampToBorder(vUv05),clampToBorder(vUv06),clampToBorder(vUv07));c+=w.x*texture2D(inputBuffer,vUv04);c+=w.y*texture2D(inputBuffer,vUv05);c+=w.z*texture2D(inputBuffer,vUv06);c+=w.w*texture2D(inputBuffer,vUv07);w=WEIGHT_OUTER*vec4(clampToBorder(vUv08),clampToBorder(vUv09),clampToBorder(vUv10),clampToBorder(vUv11));c+=w.x*texture2D(inputBuffer,vUv08);c+=w.y*texture2D(inputBuffer,vUv09);c+=w.z*texture2D(inputBuffer,vUv10);c+=w.w*texture2D(inputBuffer,vUv11);c+=WEIGHT_OUTER*texture2D(inputBuffer,vUv);gl_FragColor=c;
#include <encodings_fragment>
}`,oy="uniform vec2 texelSize;varying vec2 vUv;varying vec2 vUv00;varying vec2 vUv01;varying vec2 vUv02;varying vec2 vUv03;varying vec2 vUv04;varying vec2 vUv05;varying vec2 vUv06;varying vec2 vUv07;varying vec2 vUv08;varying vec2 vUv09;varying vec2 vUv10;varying vec2 vUv11;void main(){vUv=position.xy*0.5+0.5;vUv00=vUv+texelSize*vec2(-1.0,1.0);vUv01=vUv+texelSize*vec2(1.0,1.0);vUv02=vUv+texelSize*vec2(-1.0,-1.0);vUv03=vUv+texelSize*vec2(1.0,-1.0);vUv04=vUv+texelSize*vec2(-2.0,2.0);vUv05=vUv+texelSize*vec2(0.0,2.0);vUv06=vUv+texelSize*vec2(2.0,2.0);vUv07=vUv+texelSize*vec2(-2.0,0.0);vUv08=vUv+texelSize*vec2(2.0,0.0);vUv09=vUv+texelSize*vec2(-2.0,-2.0);vUv10=vUv+texelSize*vec2(0.0,-2.0);vUv11=vUv+texelSize*vec2(2.0,-2.0);gl_Position=vec4(position.xy,1.0,1.0);}",ay=class extends Zt{constructor(){super({name:"DownsamplingMaterial",uniforms:{inputBuffer:new rt(null),texelSize:new rt(new De)},blending:kt,depthWrite:!1,depthTest:!1,fragmentShader:sy,vertexShader:oy}),this.toneMapped=!1}set inputBuffer(n){this.uniforms.inputBuffer.value=n}setSize(n,e){this.uniforms.texelSize.value.set(1/n,1/e)}},ly=`#include <common>
#if THREE_REVISION < 143
#define luminance(v) linearToRelativeLuminance(v)
#endif
#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#ifdef RANGE
uniform vec2 range;
#elif defined(THRESHOLD)
uniform float threshold;uniform float smoothing;
#endif
varying vec2 vUv;void main(){vec4 texel=texture2D(inputBuffer,vUv);float l=luminance(texel.rgb);
#ifdef RANGE
float low=step(range.x,l);float high=step(l,range.y);l*=low*high;
#elif defined(THRESHOLD)
l=smoothstep(threshold,threshold+smoothing,l);
#endif
#ifdef COLOR
gl_FragColor=vec4(texel.rgb*l,l);
#else
gl_FragColor=vec4(l);
#endif
}`,cy=class extends Zt{constructor(n=!1,e=null){super({name:"LuminanceMaterial",defines:{THREE_REVISION:Xs.replace(/\D+/g,"")},uniforms:{inputBuffer:new rt(null),threshold:new rt(0),smoothing:new rt(1),range:new rt(null)},blending:kt,depthWrite:!1,depthTest:!1,fragmentShader:ly,vertexShader:Wf}),this.toneMapped=!1,this.colorOutput=n,this.luminanceRange=e}set inputBuffer(n){this.uniforms.inputBuffer.value=n}setInputBuffer(n){this.uniforms.inputBuffer.value=n}get threshold(){return this.uniforms.threshold.value}set threshold(n){this.smoothing>0||n>0?this.defines.THRESHOLD="1":delete this.defines.THRESHOLD,this.uniforms.threshold.value=n}getThreshold(){return this.threshold}setThreshold(n){this.threshold=n}get smoothing(){return this.uniforms.smoothing.value}set smoothing(n){this.threshold>0||n>0?this.defines.THRESHOLD="1":delete this.defines.THRESHOLD,this.uniforms.smoothing.value=n}getSmoothingFactor(){return this.smoothing}setSmoothingFactor(n){this.smoothing=n}get useThreshold(){return this.threshold>0||this.smoothing>0}set useThreshold(n){}get colorOutput(){return this.defines.COLOR!==void 0}set colorOutput(n){n?this.defines.COLOR="1":delete this.defines.COLOR,this.needsUpdate=!0}isColorOutputEnabled(n){return this.colorOutput}setColorOutputEnabled(n){this.colorOutput=n}get useRange(){return this.luminanceRange!==null}set useRange(n){this.luminanceRange=null}get luminanceRange(){return this.uniforms.range.value}set luminanceRange(n){n!==null?this.defines.RANGE="1":delete this.defines.RANGE,this.uniforms.range.value=n,this.needsUpdate=!0}getLuminanceRange(){return this.luminanceRange}setLuminanceRange(n){this.luminanceRange=n}},uy=`#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;uniform mediump sampler2D supportBuffer;
#else
uniform lowp sampler2D inputBuffer;uniform lowp sampler2D supportBuffer;
#endif
uniform float radius;varying vec2 vUv;varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;varying vec2 vUv4;varying vec2 vUv5;varying vec2 vUv6;varying vec2 vUv7;void main(){vec4 c=vec4(0.0);c+=texture2D(inputBuffer,vUv0)*0.0625;c+=texture2D(inputBuffer,vUv1)*0.125;c+=texture2D(inputBuffer,vUv2)*0.0625;c+=texture2D(inputBuffer,vUv3)*0.125;c+=texture2D(inputBuffer,vUv)*0.25;c+=texture2D(inputBuffer,vUv4)*0.125;c+=texture2D(inputBuffer,vUv5)*0.0625;c+=texture2D(inputBuffer,vUv6)*0.125;c+=texture2D(inputBuffer,vUv7)*0.0625;vec4 baseColor=texture2D(supportBuffer,vUv);gl_FragColor=mix(baseColor,c,radius);
#include <encodings_fragment>
}`,fy="uniform vec2 texelSize;varying vec2 vUv;varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;varying vec2 vUv4;varying vec2 vUv5;varying vec2 vUv6;varying vec2 vUv7;void main(){vUv=position.xy*0.5+0.5;vUv0=vUv+texelSize*vec2(-1.0,1.0);vUv1=vUv+texelSize*vec2(0.0,1.0);vUv2=vUv+texelSize*vec2(1.0,1.0);vUv3=vUv+texelSize*vec2(-1.0,0.0);vUv4=vUv+texelSize*vec2(1.0,0.0);vUv5=vUv+texelSize*vec2(-1.0,-1.0);vUv6=vUv+texelSize*vec2(0.0,-1.0);vUv7=vUv+texelSize*vec2(1.0,-1.0);gl_Position=vec4(position.xy,1.0,1.0);}",hy=class extends Zt{constructor(){super({name:"UpsamplingMaterial",uniforms:{inputBuffer:new rt(null),supportBuffer:new rt(null),texelSize:new rt(new De),radius:new rt(.85)},blending:kt,depthWrite:!1,depthTest:!1,fragmentShader:uy,vertexShader:fy}),this.toneMapped=!1}set inputBuffer(n){this.uniforms.inputBuffer.value=n}set supportBuffer(n){this.uniforms.supportBuffer.value=n}get radius(){return this.uniforms.radius.value}set radius(n){this.uniforms.radius.value=n}setSize(n,e){this.uniforms.texelSize.value.set(1/n,1/e)}},dy=new $a,Vn=null;function py(){if(Vn===null){const n=new Float32Array([-1,-1,0,3,-1,0,-1,3,0]),e=new Float32Array([0,0,2,0,0,2]);Vn=new Sn,Vn.setAttribute!==void 0?(Vn.setAttribute("position",new Pt(n,3)),Vn.setAttribute("uv",new Pt(e,2))):(Vn.addAttribute("position",new Pt(n,3)),Vn.addAttribute("uv",new Pt(e,2)))}return Vn}var Xr=class{constructor(n="Pass",e=new xa,t=dy){this.name=n,this.renderer=null,this.scene=e,this.camera=t,this.screen=null,this.rtt=!0,this.needsSwap=!0,this.needsDepthTexture=!1,this.enabled=!0}get renderToScreen(){return!this.rtt}set renderToScreen(n){if(this.rtt===n){const e=this.fullscreenMaterial;e!==null&&(e.needsUpdate=!0),this.rtt=!n}}set mainScene(n){}set mainCamera(n){}setRenderer(n){this.renderer=n}isEnabled(){return this.enabled}setEnabled(n){this.enabled=n}get fullscreenMaterial(){return this.screen!==null?this.screen.material:null}set fullscreenMaterial(n){let e=this.screen;e!==null?e.material=n:(e=new _n(py(),n),e.frustumCulled=!1,this.scene===null&&(this.scene=new xa),this.scene.add(e),this.screen=e)}getFullscreenMaterial(){return this.fullscreenMaterial}setFullscreenMaterial(n){this.fullscreenMaterial=n}getDepthTexture(){return null}setDepthTexture(n,e=ja){}render(n,e,t,i,r){throw new Error("Render method not implemented!")}setSize(n,e){}initialize(n,e,t){}dispose(){for(const n of Object.keys(this)){const e=this[n];(e instanceof Gt||e instanceof ni||e instanceof xt||e instanceof Xr)&&this[n].dispose()}}};new $e;var Wn=-1,vn=class extends Mn{constructor(n,e=Wn,t=Wn,i=1){super(),this.resizable=n,this.baseSize=new De(1,1),this.preferredSize=new De(e,t),this.target=this.preferredSize,this.s=i,this.effectiveSize=new De,this.addEventListener("change",()=>this.updateEffectiveSize()),this.updateEffectiveSize()}updateEffectiveSize(){const n=this.baseSize,e=this.preferredSize,t=this.effectiveSize,i=this.scale;e.width!==Wn?t.width=e.width:e.height!==Wn?t.width=Math.round(e.height*(n.width/Math.max(n.height,1))):t.width=Math.round(n.width*i),e.height!==Wn?t.height=e.height:e.width!==Wn?t.height=Math.round(e.width/Math.max(n.width/Math.max(n.height,1),1)):t.height=Math.round(n.height*i)}get width(){return this.effectiveSize.width}set width(n){this.preferredWidth=n}get height(){return this.effectiveSize.height}set height(n){this.preferredHeight=n}getWidth(){return this.width}getHeight(){return this.height}get scale(){return this.s}set scale(n){this.s!==n&&(this.s=n,this.preferredSize.setScalar(Wn),this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}getScale(){return this.scale}setScale(n){this.scale=n}get baseWidth(){return this.baseSize.width}set baseWidth(n){this.baseSize.width!==n&&(this.baseSize.width=n,this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}getBaseWidth(){return this.baseWidth}setBaseWidth(n){this.baseWidth=n}get baseHeight(){return this.baseSize.height}set baseHeight(n){this.baseSize.height!==n&&(this.baseSize.height=n,this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}getBaseHeight(){return this.baseHeight}setBaseHeight(n){this.baseHeight=n}setBaseSize(n,e){(this.baseSize.width!==n||this.baseSize.height!==e)&&(this.baseSize.set(n,e),this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}get preferredWidth(){return this.preferredSize.width}set preferredWidth(n){this.preferredSize.width!==n&&(this.preferredSize.width=n,this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}getPreferredWidth(){return this.preferredWidth}setPreferredWidth(n){this.preferredWidth=n}get preferredHeight(){return this.preferredSize.height}set preferredHeight(n){this.preferredSize.height!==n&&(this.preferredSize.height=n,this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}getPreferredHeight(){return this.preferredHeight}setPreferredHeight(n){this.preferredHeight=n}setPreferredSize(n,e){(this.preferredSize.width!==n||this.preferredSize.height!==e)&&(this.preferredSize.set(n,e),this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}copy(n){this.s=n.scale,this.baseSize.set(n.baseWidth,n.baseHeight),this.preferredSize.set(n.preferredWidth,n.preferredHeight),this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height)}static get AUTO_SIZE(){return Wn}},my=class extends Xr{constructor({kernelSize:n=Js.MEDIUM,resolutionScale:e=.5,width:t=vn.AUTO_SIZE,height:i=vn.AUTO_SIZE,resolutionX:r=t,resolutionY:s=i}={}){super("KawaseBlurPass"),this.renderTargetA=new Gt(1,1,{depthBuffer:!1}),this.renderTargetA.texture.name="Blur.Target.A",this.renderTargetB=this.renderTargetA.clone(),this.renderTargetB.texture.name="Blur.Target.B";const a=this.resolution=new vn(this,r,s,e);a.addEventListener("change",o=>this.setSize(a.baseWidth,a.baseHeight)),this._blurMaterial=new ny,this._blurMaterial.kernelSize=n,this.copyMaterial=new ry}getResolution(){return this.resolution}get blurMaterial(){return this._blurMaterial}set blurMaterial(n){this._blurMaterial=n}get dithering(){return this.copyMaterial.dithering}set dithering(n){this.copyMaterial.dithering=n}get kernelSize(){return this.blurMaterial.kernelSize}set kernelSize(n){this.blurMaterial.kernelSize=n}get width(){return this.resolution.width}set width(n){this.resolution.preferredWidth=n}get height(){return this.resolution.height}set height(n){this.resolution.preferredHeight=n}get scale(){return this.blurMaterial.scale}set scale(n){this.blurMaterial.scale=n}getScale(){return this.blurMaterial.scale}setScale(n){this.blurMaterial.scale=n}getKernelSize(){return this.kernelSize}setKernelSize(n){this.kernelSize=n}getResolutionScale(){return this.resolution.scale}setResolutionScale(n){this.resolution.scale=n}render(n,e,t,i,r){const s=this.scene,a=this.camera,o=this.renderTargetA,l=this.renderTargetB,c=this.blurMaterial,u=c.kernelSequence;let f=e;this.fullscreenMaterial=c;for(let h=0,m=u.length;h<m;++h){const _=h&1?l:o;c.kernel=u[h],c.inputBuffer=f.texture,n.setRenderTarget(_),n.render(s,a),f=_}this.fullscreenMaterial=this.copyMaterial,this.copyMaterial.inputBuffer=f.texture,n.setRenderTarget(this.renderToScreen?null:t),n.render(s,a)}setSize(n,e){const t=this.resolution;t.setBaseSize(n,e);const i=t.width,r=t.height;this.renderTargetA.setSize(i,r),this.renderTargetB.setSize(i,r),this.blurMaterial.setSize(n,e)}initialize(n,e,t){t!==void 0&&(this.renderTargetA.texture.type=t,this.renderTargetB.texture.type=t,t!==yn?(this.blurMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1",this.copyMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1"):n.outputEncoding===Xe&&(this.renderTargetA.texture.encoding=Xe,this.renderTargetB.texture.encoding=Xe))}static get AUTO_SIZE(){return vn.AUTO_SIZE}},gy=class extends Xr{constructor({renderTarget:n,luminanceRange:e,colorOutput:t,resolutionScale:i=1,width:r=vn.AUTO_SIZE,height:s=vn.AUTO_SIZE,resolutionX:a=r,resolutionY:o=s}={}){super("LuminancePass"),this.fullscreenMaterial=new cy(t,e),this.needsSwap=!1,this.renderTarget=n,this.renderTarget===void 0&&(this.renderTarget=new Gt(1,1,{depthBuffer:!1}),this.renderTarget.texture.name="LuminancePass.Target");const l=this.resolution=new vn(this,a,o,i);l.addEventListener("change",c=>this.setSize(l.baseWidth,l.baseHeight))}get texture(){return this.renderTarget.texture}getTexture(){return this.renderTarget.texture}getResolution(){return this.resolution}render(n,e,t,i,r){const s=this.fullscreenMaterial;s.inputBuffer=e.texture,n.setRenderTarget(this.renderToScreen?null:this.renderTarget),n.render(this.scene,this.camera)}setSize(n,e){const t=this.resolution;t.setBaseSize(n,e),this.renderTarget.setSize(t.width,t.height)}initialize(n,e,t){t!==void 0&&t!==yn&&(this.renderTarget.texture.type=t,this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1")}},_y=class extends Xr{constructor(){super("MipmapBlurPass"),this.needsSwap=!1,this.renderTarget=new Gt(1,1,{depthBuffer:!1}),this.renderTarget.texture.name="Upsampling.Mipmap0",this.downsamplingMipmaps=[],this.upsamplingMipmaps=[],this.downsamplingMaterial=new ay,this.upsamplingMaterial=new hy,this.resolution=new De}get texture(){return this.renderTarget.texture}get levels(){return this.downsamplingMipmaps.length}set levels(n){if(this.levels!==n){const e=this.renderTarget;this.dispose(),this.downsamplingMipmaps=[],this.upsamplingMipmaps=[];for(let t=0;t<n;++t){const i=e.clone();i.texture.name="Downsampling.Mipmap"+t,this.downsamplingMipmaps.push(i)}this.upsamplingMipmaps.push(e);for(let t=1,i=n-1;t<i;++t){const r=e.clone();r.texture.name="Upsampling.Mipmap"+t,this.upsamplingMipmaps.push(r)}this.setSize(this.resolution.x,this.resolution.y)}}get radius(){return this.upsamplingMaterial.radius}set radius(n){this.upsamplingMaterial.radius=n}render(n,e,t,i,r){const{scene:s,camera:a}=this,{downsamplingMaterial:o,upsamplingMaterial:l}=this,{downsamplingMipmaps:c,upsamplingMipmaps:u}=this;let f=e;this.fullscreenMaterial=o;for(let h=0,m=c.length;h<m;++h){const _=c[h];o.setSize(f.width,f.height),o.inputBuffer=f.texture,n.setRenderTarget(_),n.render(s,a),f=_}this.fullscreenMaterial=l;for(let h=u.length-1;h>=0;--h){const m=u[h];l.setSize(f.width,f.height),l.inputBuffer=f.texture,l.supportBuffer=c[h].texture,n.setRenderTarget(m),n.render(s,a),f=m}}setSize(n,e){const t=this.resolution;t.set(n,e);let i=t.width,r=t.height;for(let s=0,a=this.downsamplingMipmaps.length;s<a;++s)i=Math.round(i*.5),r=Math.round(r*.5),this.downsamplingMipmaps[s].setSize(i,r),s<this.upsamplingMipmaps.length&&this.upsamplingMipmaps[s].setSize(i,r)}initialize(n,e,t){if(t!==void 0){const i=this.downsamplingMipmaps.concat(this.upsamplingMipmaps);for(const r of i)r.texture.type=t;if(t!==yn)this.downsamplingMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1",this.upsamplingMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1";else if(n.outputEncoding===Xe)for(const r of i)r.texture.encoding=Xe}}dispose(){super.dispose();for(const n of this.downsamplingMipmaps.concat(this.upsamplingMipmaps))n.dispose()}},vy="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,x+y,opacity);}",xy="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,y,min(y.a,opacity));}",yy="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,(x+y)*0.5,opacity);}",My="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 xHSL=RGBToHSL(x.rgb);vec3 yHSL=RGBToHSL(y.rgb);vec3 z=HSLToRGB(vec3(yHSL.rg,xHSL.b));return vec4(mix(x.rgb,z,opacity),y.a);}",Sy="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 z=mix(step(0.0,y)*(1.0-min(vec4(1.0),(1.0-x)/y)),vec4(1.0),step(1.0,x));return mix(x,z,opacity);}",by="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 z=step(0.0,x)*mix(min(vec4(1.0),x/max(1.0-y,1e-9)),vec4(1.0),step(1.0,y));return mix(x,z,opacity);}",wy="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,min(x,y),opacity);}",Ey="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,abs(x-y),opacity);}",Ty="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,x/max(y,1e-12),opacity);}",Ay="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,(x+y-2.0*x*y),opacity);}",Cy="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 a=min(x,1.0),b=min(y,1.0);vec4 z=mix(2.0*a*b,1.0-2.0*(1.0-a)*(1.0-b),step(0.5,y));return mix(x,z,opacity);}",Ly="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,step(1.0,x+y),opacity);}",Ry="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 xHSL=RGBToHSL(x.rgb);vec3 yHSL=RGBToHSL(y.rgb);vec3 z=HSLToRGB(vec3(yHSL.r,xHSL.gb));return vec4(mix(x.rgb,z,opacity),y.a);}",Py="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,1.0-y,opacity);}",Dy="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,y*(1.0-x),opacity);}",Iy="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,max(x,y),opacity);}",Uy="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,clamp(y+x-1.0,0.0,1.0),opacity);}",Fy="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,min(x+y,1.0),opacity);}",zy="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,clamp(2.0*y+x-1.0,0.0,1.0),opacity);}",Oy="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 xHSL=RGBToHSL(x.rgb);vec3 yHSL=RGBToHSL(y.rgb);vec3 z=HSLToRGB(vec3(xHSL.rg,yHSL.b));return vec4(mix(x.rgb,z,opacity),y.a);}",Ny="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,x*y,opacity);}",By="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,1.0-abs(1.0-x-y),opacity);}",Hy="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,y,opacity);}",ky="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 z=mix(2.0*y*x,1.0-2.0*(1.0-y)*(1.0-x),step(0.5,x));return mix(x,z,opacity);}",Gy="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 y2=2.0*y;vec4 z=mix(mix(y2,x,step(0.5*x,y)),max(vec4(0.0),y2-1.0),step(x,(y2-1.0)));return mix(x,z,opacity);}",Vy="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 z=mix(min(x*x/max(1.0-y,1e-12),1.0),y,step(1.0,y));return mix(x,z,opacity);}",Wy="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 xHSL=RGBToHSL(x.rgb);vec3 yHSL=RGBToHSL(y.rgb);vec3 z=HSLToRGB(vec3(xHSL.r,yHSL.g,xHSL.b));return vec4(mix(x.rgb,z,opacity),y.a);}",qy="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,x+y-min(x*y,1.0),opacity);}",Xy="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 y2=2.0*y;vec4 w=step(0.5,y);vec4 z=mix(x-(1.0-y2)*x*(1.0-x),mix(x+(y2-1.0)*(sqrt(x)-x),x+(y2-1.0)*x*((16.0*x-12.0)*x+3.0),w*(1.0-step(0.25,x))),w);return mix(x,z,opacity);}",jy="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return y;}",$y="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,max(x+y-1.0,0.0),opacity);}",Yy="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 z=mix(max(1.0-min((1.0-x)/(2.0*y),1.0),0.0),min(x/(2.0*(1.0-y)),1.0),step(0.5,y));return mix(x,z,opacity);}",Ky=new Map([[He.ADD,vy],[He.ALPHA,xy],[He.AVERAGE,yy],[He.COLOR,My],[He.COLOR_BURN,Sy],[He.COLOR_DODGE,by],[He.DARKEN,wy],[He.DIFFERENCE,Ey],[He.DIVIDE,Ty],[He.DST,null],[He.EXCLUSION,Ay],[He.HARD_LIGHT,Cy],[He.HARD_MIX,Ly],[He.HUE,Ry],[He.INVERT,Py],[He.INVERT_RGB,Dy],[He.LIGHTEN,Iy],[He.LINEAR_BURN,Uy],[He.LINEAR_DODGE,Fy],[He.LINEAR_LIGHT,zy],[He.LUMINOSITY,Oy],[He.MULTIPLY,Ny],[He.NEGATION,By],[He.NORMAL,Hy],[He.OVERLAY,ky],[He.PIN_LIGHT,Gy],[He.REFLECT,Vy],[He.SATURATION,Wy],[He.SCREEN,qy],[He.SOFT_LIGHT,Xy],[He.SRC,jy],[He.SUBTRACT,$y],[He.VIVID_LIGHT,Yy]]),Zy=class extends Mn{constructor(n,e=1){super(),this._blendFunction=n,this.opacity=new rt(e)}getOpacity(){return this.opacity.value}setOpacity(n){this.opacity.value=n}get blendFunction(){return this._blendFunction}set blendFunction(n){this._blendFunction=n,this.dispatchEvent({type:"change"})}getBlendFunction(){return this.blendFunction}setBlendFunction(n){this.blendFunction=n}getShaderCode(){return Ky.get(this.blendFunction)}},Jy=class extends Mn{constructor(n,e,{attributes:t=Jx.NONE,blendFunction:i=He.NORMAL,defines:r=new Map,uniforms:s=new Map,extensions:a=null,vertexShader:o=null}={}){super(),this.name=n,this.renderer=null,this.attributes=t,this.fragmentShader=e,this.vertexShader=o,this.defines=r,this.uniforms=s,this.extensions=a,this.blendMode=new Zy(i),this.blendMode.addEventListener("change",l=>this.setChanged()),this._inputColorSpace=ti,this._outputColorSpace=null}get inputColorSpace(){return this._inputColorSpace}set inputColorSpace(n){this._inputColorSpace=n,this.setChanged()}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(n){this._outputColorSpace=n,this.setChanged()}set mainScene(n){}set mainCamera(n){}getName(){return this.name}setRenderer(n){this.renderer=n}getDefines(){return this.defines}getUniforms(){return this.uniforms}getExtensions(){return this.extensions}getBlendMode(){return this.blendMode}getAttributes(){return this.attributes}setAttributes(n){this.attributes=n,this.setChanged()}getFragmentShader(){return this.fragmentShader}setFragmentShader(n){this.fragmentShader=n,this.setChanged()}getVertexShader(){return this.vertexShader}setVertexShader(n){this.vertexShader=n,this.setChanged()}setChanged(){this.dispatchEvent({type:"change"})}setDepthTexture(n,e=ja){}update(n,e,t){}setSize(n,e){}initialize(n,e,t){}dispose(){for(const n of Object.keys(this)){const e=this[n];(e instanceof Gt||e instanceof ni||e instanceof xt||e instanceof Xr)&&this[n].dispose()}}},Qy=`#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D map;
#else
uniform lowp sampler2D map;
#endif
uniform float intensity;void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){outputColor=texture2D(map,uv)*intensity;}`,eM=class extends Jy{constructor({blendFunction:n=He.SCREEN,luminanceThreshold:e=.9,luminanceSmoothing:t=.025,mipmapBlur:i=!1,intensity:r=1,radius:s=.85,levels:a=8,kernelSize:o=Js.LARGE,resolutionScale:l=.5,width:c=vn.AUTO_SIZE,height:u=vn.AUTO_SIZE,resolutionX:f=c,resolutionY:h=u}={}){super("BloomEffect",Qy,{blendFunction:n,uniforms:new Map([["map",new rt(null)],["intensity",new rt(r)]])}),this.renderTarget=new Gt(1,1,{depthBuffer:!1}),this.renderTarget.texture.name="Bloom.Target",this.blurPass=new my({kernelSize:o}),this.luminancePass=new gy({colorOutput:!0}),this.luminanceMaterial.threshold=e,this.luminanceMaterial.smoothing=t,this.mipmapBlurPass=new _y,this.mipmapBlurPass.enabled=i,this.mipmapBlurPass.radius=s,this.mipmapBlurPass.levels=a,this.uniforms.get("map").value=i?this.mipmapBlurPass.texture:this.renderTarget.texture;const m=this.resolution=new vn(this,f,h,l);m.addEventListener("change",_=>this.setSize(m.baseWidth,m.baseHeight))}get texture(){return this.mipmapBlurPass.enabled?this.mipmapBlurPass.texture:this.renderTarget.texture}getTexture(){return this.texture}getResolution(){return this.resolution}getBlurPass(){return this.blurPass}getLuminancePass(){return this.luminancePass}get luminanceMaterial(){return this.luminancePass.fullscreenMaterial}getLuminanceMaterial(){return this.luminancePass.fullscreenMaterial}get width(){return this.resolution.width}set width(n){this.resolution.preferredWidth=n}get height(){return this.resolution.height}set height(n){this.resolution.preferredHeight=n}get dithering(){return this.blurPass.dithering}set dithering(n){this.blurPass.dithering=n}get kernelSize(){return this.blurPass.kernelSize}set kernelSize(n){this.blurPass.kernelSize=n}get distinction(){return console.warn(this.name,"distinction was removed"),1}set distinction(n){console.warn(this.name,"distinction was removed")}get intensity(){return this.uniforms.get("intensity").value}set intensity(n){this.uniforms.get("intensity").value=n}getIntensity(){return this.intensity}setIntensity(n){this.intensity=n}getResolutionScale(){return this.resolution.scale}setResolutionScale(n){this.resolution.scale=n}update(n,e,t){const i=this.renderTarget,r=this.luminancePass;r.enabled?(r.render(n,e),this.mipmapBlurPass.enabled?this.mipmapBlurPass.render(n,r.renderTarget):this.blurPass.render(n,r.renderTarget,i)):this.mipmapBlurPass.enabled?this.mipmapBlurPass.render(n,e):this.blurPass.render(n,e,i)}setSize(n,e){const t=this.resolution;t.setBaseSize(n,e),this.renderTarget.setSize(t.width,t.height),this.blurPass.resolution.copy(t),this.luminancePass.setSize(n,e),this.mipmapBlurPass.setSize(n,e)}initialize(n,e,t){this.blurPass.initialize(n,e,t),this.luminancePass.initialize(n,e,t),this.mipmapBlurPass.initialize(n,e,t),t!==void 0&&(this.renderTarget.texture.type=t,n.outputEncoding===Xe&&(this.renderTarget.texture.encoding=Xe))}};new N;new tt;new $e;new N;new N;const tM="/smoke.png",nM={data(){return{}},components:{},mounted(){const n=document.getElementById("div_universe"),e=new xa,t={width:window.innerWidth,height:window.innerHeight},i=new Nt(45,window.innerWidth/window.innerHeight,.1,2e3);i.position.z=100,e.add(i);const r=new Za({antialias:!0});r.setSize(t.width,t.height),r.setPixelRatio(Math.min(window.devicePixelRatio,2)),r.setClearColor(new $e("#11181a"),1),n==null||n.appendChild(r.domElement);const s=new Zx(i,r.domElement);s.minDistance=1,s.maxDistance=1e3;let a=[];const o=d=>{const v=[],E=Z=>{let Y,B,z;do Y=Math.random()*2-1,B=Math.random()*2-1,z=Math.random()*2-1;while(Y**2+B**2+z**2>1);const K=1-Math.sqrt(Y*Y+B*B+z*z);return[Y/K*Z,B/K*Z,z/K*Z]};for(let Z=0;Z<(d==null?void 0:d.count);Z++){const Y=E(10);v.push(...Y)}let x=document.createElement("canvas"),S=x.getContext("2d");x.width=100,x.height=100,S&&(S.fillStyle=d.color,S.beginPath(),S.arc(50,50,25,0,2*Math.PI),S.fill());let T=x.toDataURL("image/png");const P=new $c,F=new Sn;F.setAttribute("position",new Zn(v,3));let y=new ya({size:d.size,sizeAttenuation:!0,map:P.load(T),alphaTest:.5,transparent:!0}),C=new qc(F,y);e.add(C),S&&(S.clearRect(0,0,x.width,x.height),S.fillStyle=`rgba(${d.color.replace(/\#(..)(..)(..)/,(Z,Y,B,z)=>`${parseInt(Y,16)}, ${parseInt(B,16)}, ${parseInt(z,16)}`)}, 0.5)`,S.beginPath(),S.arc(50,50,25,0,2*Math.PI),S.fill()),T=x.toDataURL("image/png"),y=new ya({size:d.size*1.5,sizeAttenuation:!0,map:P.load(T),alphaTest:.5,transparent:!0});let I=new qc(F,y);return e.add(I),[C,I]};a.push(...o({color:"#BFDFFF",count:1e3,size:1})),a.push(...o({color:"#DFEFFF",count:1e3,size:.9})),a.push(...o({color:"#FFFFFF",count:1e3,size:.8})),a.push(...o({color:"#FFDFBF",count:1e3,size:.7})),a.push(...o({color:"#FFBF7F",count:1e3,size:.6}));const l=d=>{let E=new $c().load(tM),x=new Ks(d.size,d.size),S=new Wx({map:E,transparent:!0,alphaTest:.1,side:Dn}),T=[Math.random()*100-50,Math.random()*100-50,Math.random()*100-50];for(let P=0;P<d.count;P++){let F=new _n(x,S);F.position.set(T[0]+Math.random()*d.size/2-d.size/4,T[1]+Math.random()*d.size/2-d.size/4,T[2]+Math.random()*d.size/2-d.size/4),F.rotation.x=0,F.rotation.y=0,F.rotation.z=Math.random()*2*Math.PI,F.material.opacity=.5,e.add(F)}};l({size:20,count:5}),l({size:15,count:6}),l({size:12,count:7}),l({size:10,count:8}),l({size:7,count:9}),l({size:5,count:10});let c=new Kx(16747545);c.position.set(0,0,1),e.add(c);const u=new eM({blendFunction:He.COLOR_DODGE,kernelSize:Js.SMALL,luminanceThreshold:.3,luminanceSmoothing:.75});u.blendMode.opacity.value=1.5;let f=new jo(13395456,50,450,1.7);f.position.set(200,300,100),e.add(f);let h=new jo(14177406,50,450,1.7);h.position.set(100,300,100),e.add(h);let m=new jo(3569580,50,450,1.7);m.position.set(300,300,200),e.add(m);let _=0;const p=()=>{requestAnimationFrame(p),a.forEach(d=>{d.rotation&&(d.rotation.y=Math.atan2(Math.sin(_),Math.cos(_)))}),_+=1e-4,s.update(),r.render(e,i)};p(),window.onresize=d=>{r.setSize(window.innerWidth,window.innerHeight),i.aspect=window.innerWidth/window.innerHeight,i.updateProjectionMatrix()}}};const iM={id:"div_universe"};function rM(n,e,t,i,r,s){return ur(),fr("div",iM)}const sM=hr(nM,[["render",rM],["__scopeId","data-v-a70d4b37"]]),oM={data(){return{}},components:{HelloWorld:Gp,Universe:sM},mounted(){}};function aM(n,e,t,i,r,s){const a=dl("Universe"),o=dl("router-view");return ur(),fr(Xt,null,[Bt(a),Bt(o)],64)}const lM=hr(oM,[["render",aM],["__scopeId","data-v-bfa0ac4a"]]);/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const Gi=typeof window<"u";function cM(n){return n.__esModule||n[Symbol.toStringTag]==="Module"}const Ye=Object.assign;function Yo(n,e){const t={};for(const i in e){const r=e[i];t[i]=ln(r)?r.map(n):n(r)}return t}const Lr=()=>{},ln=Array.isArray,uM=/\/$/,fM=n=>n.replace(uM,"");function Ko(n,e,t="/"){let i,r={},s="",a="";const o=e.indexOf("#");let l=e.indexOf("?");return o<l&&o>=0&&(l=-1),l>-1&&(i=e.slice(0,l),s=e.slice(l+1,o>-1?o:e.length),r=n(s)),o>-1&&(i=i||e.slice(0,o),a=e.slice(o,e.length)),i=mM(i??e,t),{fullPath:i+(s&&"?")+s+a,path:i,query:r,hash:a}}function hM(n,e){const t=e.query?n(e.query):"";return e.path+(t&&"?")+t+(e.hash||"")}function tu(n,e){return!e||!n.toLowerCase().startsWith(e.toLowerCase())?n:n.slice(e.length)||"/"}function dM(n,e,t){const i=e.matched.length-1,r=t.matched.length-1;return i>-1&&i===r&&sr(e.matched[i],t.matched[r])&&qf(e.params,t.params)&&n(e.query)===n(t.query)&&e.hash===t.hash}function sr(n,e){return(n.aliasOf||n)===(e.aliasOf||e)}function qf(n,e){if(Object.keys(n).length!==Object.keys(e).length)return!1;for(const t in n)if(!pM(n[t],e[t]))return!1;return!0}function pM(n,e){return ln(n)?nu(n,e):ln(e)?nu(e,n):n===e}function nu(n,e){return ln(e)?n.length===e.length&&n.every((t,i)=>t===e[i]):n.length===1&&n[0]===e}function mM(n,e){if(n.startsWith("/"))return n;if(!n)return e;const t=e.split("/"),i=n.split("/");let r=t.length-1,s,a;for(s=0;s<i.length;s++)if(a=i[s],a!==".")if(a==="..")r>1&&r--;else break;return t.slice(0,r).join("/")+"/"+i.slice(s-(s===i.length?1:0)).join("/")}var kr;(function(n){n.pop="pop",n.push="push"})(kr||(kr={}));var Rr;(function(n){n.back="back",n.forward="forward",n.unknown=""})(Rr||(Rr={}));function gM(n){if(!n)if(Gi){const e=document.querySelector("base");n=e&&e.getAttribute("href")||"/",n=n.replace(/^\w+:\/\/[^\/]+/,"")}else n="/";return n[0]!=="/"&&n[0]!=="#"&&(n="/"+n),fM(n)}const _M=/^[^#]+#/;function vM(n,e){return n.replace(_M,"#")+e}function xM(n,e){const t=document.documentElement.getBoundingClientRect(),i=n.getBoundingClientRect();return{behavior:e.behavior,left:i.left-t.left-(e.left||0),top:i.top-t.top-(e.top||0)}}const Qs=()=>({left:window.pageXOffset,top:window.pageYOffset});function yM(n){let e;if("el"in n){const t=n.el,i=typeof t=="string"&&t.startsWith("#"),r=typeof t=="string"?i?document.getElementById(t.slice(1)):document.querySelector(t):t;if(!r)return;e=xM(r,n)}else e=n;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function iu(n,e){return(history.state?history.state.position-e:-1)+n}const Sa=new Map;function MM(n,e){Sa.set(n,e)}function SM(n){const e=Sa.get(n);return Sa.delete(n),e}let bM=()=>location.protocol+"//"+location.host;function Xf(n,e){const{pathname:t,search:i,hash:r}=e,s=n.indexOf("#");if(s>-1){let o=r.includes(n.slice(s))?n.slice(s).length:1,l=r.slice(o);return l[0]!=="/"&&(l="/"+l),tu(l,"")}return tu(t,n)+i+r}function wM(n,e,t,i){let r=[],s=[],a=null;const o=({state:h})=>{const m=Xf(n,location),_=t.value,p=e.value;let d=0;if(h){if(t.value=m,e.value=h,a&&a===_){a=null;return}d=p?h.position-p.position:0}else i(m);r.forEach(v=>{v(t.value,_,{delta:d,type:kr.pop,direction:d?d>0?Rr.forward:Rr.back:Rr.unknown})})};function l(){a=t.value}function c(h){r.push(h);const m=()=>{const _=r.indexOf(h);_>-1&&r.splice(_,1)};return s.push(m),m}function u(){const{history:h}=window;h.state&&h.replaceState(Ye({},h.state,{scroll:Qs()}),"")}function f(){for(const h of s)h();s=[],window.removeEventListener("popstate",o),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",o),window.addEventListener("beforeunload",u),{pauseListeners:l,listen:c,destroy:f}}function ru(n,e,t,i=!1,r=!1){return{back:n,current:e,forward:t,replaced:i,position:window.history.length,scroll:r?Qs():null}}function EM(n){const{history:e,location:t}=window,i={value:Xf(n,t)},r={value:e.state};r.value||s(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function s(l,c,u){const f=n.indexOf("#"),h=f>-1?(t.host&&document.querySelector("base")?n:n.slice(f))+l:bM()+n+l;try{e[u?"replaceState":"pushState"](c,"",h),r.value=c}catch(m){console.error(m),t[u?"replace":"assign"](h)}}function a(l,c){const u=Ye({},e.state,ru(r.value.back,l,r.value.forward,!0),c,{position:r.value.position});s(l,u,!0),i.value=l}function o(l,c){const u=Ye({},r.value,e.state,{forward:l,scroll:Qs()});s(u.current,u,!0);const f=Ye({},ru(i.value,l,null),{position:u.position+1},c);s(l,f,!1),i.value=l}return{location:i,state:r,push:o,replace:a}}function TM(n){n=gM(n);const e=EM(n),t=wM(n,e.state,e.location,e.replace);function i(s,a=!0){a||t.pauseListeners(),history.go(s)}const r=Ye({location:"",base:n,go:i,createHref:vM.bind(null,n)},e,t);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function AM(n){return typeof n=="string"||n&&typeof n=="object"}function jf(n){return typeof n=="string"||typeof n=="symbol"}const qn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},$f=Symbol("");var su;(function(n){n[n.aborted=4]="aborted",n[n.cancelled=8]="cancelled",n[n.duplicated=16]="duplicated"})(su||(su={}));function or(n,e){return Ye(new Error,{type:n,[$f]:!0},e)}function Ln(n,e){return n instanceof Error&&$f in n&&(e==null||!!(n.type&e))}const ou="[^/]+?",CM={sensitive:!1,strict:!1,start:!0,end:!0},LM=/[.+*?^${}()[\]/\\]/g;function RM(n,e){const t=Ye({},CM,e),i=[];let r=t.start?"^":"";const s=[];for(const c of n){const u=c.length?[]:[90];t.strict&&!c.length&&(r+="/");for(let f=0;f<c.length;f++){const h=c[f];let m=40+(t.sensitive?.25:0);if(h.type===0)f||(r+="/"),r+=h.value.replace(LM,"\\$&"),m+=40;else if(h.type===1){const{value:_,repeatable:p,optional:d,regexp:v}=h;s.push({name:_,repeatable:p,optional:d});const E=v||ou;if(E!==ou){m+=10;try{new RegExp(`(${E})`)}catch(S){throw new Error(`Invalid custom RegExp for param "${_}" (${E}): `+S.message)}}let x=p?`((?:${E})(?:/(?:${E}))*)`:`(${E})`;f||(x=d&&c.length<2?`(?:/${x})`:"/"+x),d&&(x+="?"),r+=x,m+=20,d&&(m+=-8),p&&(m+=-20),E===".*"&&(m+=-50)}u.push(m)}i.push(u)}if(t.strict&&t.end){const c=i.length-1;i[c][i[c].length-1]+=.7000000000000001}t.strict||(r+="/?"),t.end?r+="$":t.strict&&(r+="(?:/|$)");const a=new RegExp(r,t.sensitive?"":"i");function o(c){const u=c.match(a),f={};if(!u)return null;for(let h=1;h<u.length;h++){const m=u[h]||"",_=s[h-1];f[_.name]=m&&_.repeatable?m.split("/"):m}return f}function l(c){let u="",f=!1;for(const h of n){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const m of h)if(m.type===0)u+=m.value;else if(m.type===1){const{value:_,repeatable:p,optional:d}=m,v=_ in c?c[_]:"";if(ln(v)&&!p)throw new Error(`Provided param "${_}" is an array but it is not repeatable (* or + modifiers)`);const E=ln(v)?v.join("/"):v;if(!E)if(d)h.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${_}"`);u+=E}}return u||"/"}return{re:a,score:i,keys:s,parse:o,stringify:l}}function PM(n,e){let t=0;for(;t<n.length&&t<e.length;){const i=e[t]-n[t];if(i)return i;t++}return n.length<e.length?n.length===1&&n[0]===40+40?-1:1:n.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function DM(n,e){let t=0;const i=n.score,r=e.score;for(;t<i.length&&t<r.length;){const s=PM(i[t],r[t]);if(s)return s;t++}if(Math.abs(r.length-i.length)===1){if(au(i))return 1;if(au(r))return-1}return r.length-i.length}function au(n){const e=n[n.length-1];return n.length>0&&e[e.length-1]<0}const IM={type:0,value:""},UM=/[a-zA-Z0-9_]/;function FM(n){if(!n)return[[]];if(n==="/")return[[IM]];if(!n.startsWith("/"))throw new Error(`Invalid path "${n}"`);function e(m){throw new Error(`ERR (${t})/"${c}": ${m}`)}let t=0,i=t;const r=[];let s;function a(){s&&r.push(s),s=[]}let o=0,l,c="",u="";function f(){c&&(t===0?s.push({type:0,value:c}):t===1||t===2||t===3?(s.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function h(){c+=l}for(;o<n.length;){if(l=n[o++],l==="\\"&&t!==2){i=t,t=4;continue}switch(t){case 0:l==="/"?(c&&f(),a()):l===":"?(f(),t=1):h();break;case 4:h(),t=i;break;case 1:l==="("?t=2:UM.test(l)?h():(f(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&o--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:t=3:u+=l;break;case 3:f(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&o--,u="";break;default:e("Unknown state");break}}return t===2&&e(`Unfinished custom RegExp for param "${c}"`),f(),a(),r}function zM(n,e,t){const i=RM(FM(n.path),t),r=Ye(i,{record:n,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function OM(n,e){const t=[],i=new Map;e=uu({strict:!1,end:!0,sensitive:!1},e);function r(u){return i.get(u)}function s(u,f,h){const m=!h,_=NM(u);_.aliasOf=h&&h.record;const p=uu(e,u),d=[_];if("alias"in u){const x=typeof u.alias=="string"?[u.alias]:u.alias;for(const S of x)d.push(Ye({},_,{components:h?h.record.components:_.components,path:S,aliasOf:h?h.record:_}))}let v,E;for(const x of d){const{path:S}=x;if(f&&S[0]!=="/"){const T=f.record.path,P=T[T.length-1]==="/"?"":"/";x.path=f.record.path+(S&&P+S)}if(v=zM(x,f,p),h?h.alias.push(v):(E=E||v,E!==v&&E.alias.push(v),m&&u.name&&!cu(v)&&a(u.name)),_.children){const T=_.children;for(let P=0;P<T.length;P++)s(T[P],v,h&&h.children[P])}h=h||v,(v.record.components&&Object.keys(v.record.components).length||v.record.name||v.record.redirect)&&l(v)}return E?()=>{a(E)}:Lr}function a(u){if(jf(u)){const f=i.get(u);f&&(i.delete(u),t.splice(t.indexOf(f),1),f.children.forEach(a),f.alias.forEach(a))}else{const f=t.indexOf(u);f>-1&&(t.splice(f,1),u.record.name&&i.delete(u.record.name),u.children.forEach(a),u.alias.forEach(a))}}function o(){return t}function l(u){let f=0;for(;f<t.length&&DM(u,t[f])>=0&&(u.record.path!==t[f].record.path||!Yf(u,t[f]));)f++;t.splice(f,0,u),u.record.name&&!cu(u)&&i.set(u.record.name,u)}function c(u,f){let h,m={},_,p;if("name"in u&&u.name){if(h=i.get(u.name),!h)throw or(1,{location:u});p=h.record.name,m=Ye(lu(f.params,h.keys.filter(E=>!E.optional).map(E=>E.name)),u.params&&lu(u.params,h.keys.map(E=>E.name))),_=h.stringify(m)}else if("path"in u)_=u.path,h=t.find(E=>E.re.test(_)),h&&(m=h.parse(_),p=h.record.name);else{if(h=f.name?i.get(f.name):t.find(E=>E.re.test(f.path)),!h)throw or(1,{location:u,currentLocation:f});p=h.record.name,m=Ye({},f.params,u.params),_=h.stringify(m)}const d=[];let v=h;for(;v;)d.unshift(v.record),v=v.parent;return{name:p,path:_,params:m,matched:d,meta:HM(d)}}return n.forEach(u=>s(u)),{addRoute:s,resolve:c,removeRoute:a,getRoutes:o,getRecordMatcher:r}}function lu(n,e){const t={};for(const i of e)i in n&&(t[i]=n[i]);return t}function NM(n){return{path:n.path,redirect:n.redirect,name:n.name,meta:n.meta||{},aliasOf:void 0,beforeEnter:n.beforeEnter,props:BM(n),children:n.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in n?n.components||null:n.component&&{default:n.component}}}function BM(n){const e={},t=n.props||!1;if("component"in n)e.default=t;else for(const i in n.components)e[i]=typeof t=="boolean"?t:t[i];return e}function cu(n){for(;n;){if(n.record.aliasOf)return!0;n=n.parent}return!1}function HM(n){return n.reduce((e,t)=>Ye(e,t.meta),{})}function uu(n,e){const t={};for(const i in n)t[i]=i in e?e[i]:n[i];return t}function Yf(n,e){return e.children.some(t=>t===n||Yf(n,t))}const Kf=/#/g,kM=/&/g,GM=/\//g,VM=/=/g,WM=/\?/g,Zf=/\+/g,qM=/%5B/g,XM=/%5D/g,Jf=/%5E/g,jM=/%60/g,Qf=/%7B/g,$M=/%7C/g,eh=/%7D/g,YM=/%20/g;function Ja(n){return encodeURI(""+n).replace($M,"|").replace(qM,"[").replace(XM,"]")}function KM(n){return Ja(n).replace(Qf,"{").replace(eh,"}").replace(Jf,"^")}function ba(n){return Ja(n).replace(Zf,"%2B").replace(YM,"+").replace(Kf,"%23").replace(kM,"%26").replace(jM,"`").replace(Qf,"{").replace(eh,"}").replace(Jf,"^")}function ZM(n){return ba(n).replace(VM,"%3D")}function JM(n){return Ja(n).replace(Kf,"%23").replace(WM,"%3F")}function QM(n){return n==null?"":JM(n).replace(GM,"%2F")}function Ds(n){try{return decodeURIComponent(""+n)}catch{}return""+n}function eS(n){const e={};if(n===""||n==="?")return e;const i=(n[0]==="?"?n.slice(1):n).split("&");for(let r=0;r<i.length;++r){const s=i[r].replace(Zf," "),a=s.indexOf("="),o=Ds(a<0?s:s.slice(0,a)),l=a<0?null:Ds(s.slice(a+1));if(o in e){let c=e[o];ln(c)||(c=e[o]=[c]),c.push(l)}else e[o]=l}return e}function fu(n){let e="";for(let t in n){const i=n[t];if(t=ZM(t),i==null){i!==void 0&&(e+=(e.length?"&":"")+t);continue}(ln(i)?i.map(s=>s&&ba(s)):[i&&ba(i)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+t,s!=null&&(e+="="+s))})}return e}function tS(n){const e={};for(const t in n){const i=n[t];i!==void 0&&(e[t]=ln(i)?i.map(r=>r==null?null:""+r):i==null?i:""+i)}return e}const nS=Symbol(""),hu=Symbol(""),Qa=Symbol(""),th=Symbol(""),wa=Symbol("");function br(){let n=[];function e(i){return n.push(i),()=>{const r=n.indexOf(i);r>-1&&n.splice(r,1)}}function t(){n=[]}return{add:e,list:()=>n,reset:t}}function jn(n,e,t,i,r){const s=i&&(i.enterCallbacks[r]=i.enterCallbacks[r]||[]);return()=>new Promise((a,o)=>{const l=f=>{f===!1?o(or(4,{from:t,to:e})):f instanceof Error?o(f):AM(f)?o(or(2,{from:e,to:f})):(s&&i.enterCallbacks[r]===s&&typeof f=="function"&&s.push(f),a())},c=n.call(i&&i.instances[r],e,t,l);let u=Promise.resolve(c);n.length<3&&(u=u.then(l)),u.catch(f=>o(f))})}function Zo(n,e,t,i){const r=[];for(const s of n)for(const a in s.components){let o=s.components[a];if(!(e!=="beforeRouteEnter"&&!s.instances[a]))if(iS(o)){const c=(o.__vccOpts||o)[e];c&&r.push(jn(c,t,i,s,a))}else{let l=o();r.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${a}" at "${s.path}"`));const u=cM(c)?c.default:c;s.components[a]=u;const h=(u.__vccOpts||u)[e];return h&&jn(h,t,i,s,a)()}))}}return r}function iS(n){return typeof n=="object"||"displayName"in n||"props"in n||"__vccOpts"in n}function du(n){const e=In(Qa),t=In(th),i=$t(()=>e.resolve($i(n.to))),r=$t(()=>{const{matched:l}=i.value,{length:c}=l,u=l[c-1],f=t.matched;if(!u||!f.length)return-1;const h=f.findIndex(sr.bind(null,u));if(h>-1)return h;const m=pu(l[c-2]);return c>1&&pu(u)===m&&f[f.length-1].path!==m?f.findIndex(sr.bind(null,l[c-2])):h}),s=$t(()=>r.value>-1&&aS(t.params,i.value.params)),a=$t(()=>r.value>-1&&r.value===t.matched.length-1&&qf(t.params,i.value.params));function o(l={}){return oS(l)?e[$i(n.replace)?"replace":"push"]($i(n.to)).catch(Lr):Promise.resolve()}return{route:i,href:$t(()=>i.value.href),isActive:s,isExactActive:a,navigate:o}}const rS=ka({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:du,setup(n,{slots:e}){const t=Gr(du(n)),{options:i}=In(Qa),r=$t(()=>({[mu(n.activeClass,i.linkActiveClass,"router-link-active")]:t.isActive,[mu(n.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:t.isExactActive}));return()=>{const s=e.default&&e.default(t);return n.custom?s:mf("a",{"aria-current":t.isExactActive?n.ariaCurrentValue:null,href:t.href,onClick:t.navigate,class:r.value},s)}}}),sS=rS;function oS(n){if(!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)&&!n.defaultPrevented&&!(n.button!==void 0&&n.button!==0)){if(n.currentTarget&&n.currentTarget.getAttribute){const e=n.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return n.preventDefault&&n.preventDefault(),!0}}function aS(n,e){for(const t in e){const i=e[t],r=n[t];if(typeof i=="string"){if(i!==r)return!1}else if(!ln(r)||r.length!==i.length||i.some((s,a)=>s!==r[a]))return!1}return!0}function pu(n){return n?n.aliasOf?n.aliasOf.path:n.path:""}const mu=(n,e,t)=>n??e??t,lS=ka({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(n,{attrs:e,slots:t}){const i=In(wa),r=$t(()=>n.route||i.value),s=In(hu,0),a=$t(()=>{let c=$i(s);const{matched:u}=r.value;let f;for(;(f=u[c])&&!f.components;)c++;return c}),o=$t(()=>r.value.matched[a.value]);Ss(hu,$t(()=>a.value+1)),Ss(nS,o),Ss(wa,r);const l=Nu();return bs(()=>[l.value,o.value,n.name],([c,u,f],[h,m,_])=>{u&&(u.instances[f]=c,m&&m!==u&&c&&c===h&&(u.leaveGuards.size||(u.leaveGuards=m.leaveGuards),u.updateGuards.size||(u.updateGuards=m.updateGuards))),c&&u&&(!m||!sr(u,m)||!h)&&(u.enterCallbacks[f]||[]).forEach(p=>p(c))},{flush:"post"}),()=>{const c=r.value,u=n.name,f=o.value,h=f&&f.components[u];if(!h)return gu(t.default,{Component:h,route:c});const m=f.props[u],_=m?m===!0?c.params:typeof m=="function"?m(c):m:null,d=mf(h,Ye({},_,e,{onVnodeUnmounted:v=>{v.component.isUnmounted&&(f.instances[u]=null)},ref:l}));return gu(t.default,{Component:d,route:c})||d}}});function gu(n,e){if(!n)return null;const t=n(e);return t.length===1?t[0]:t}const cS=lS;function uS(n){const e=OM(n.routes,n),t=n.parseQuery||eS,i=n.stringifyQuery||fu,r=n.history,s=br(),a=br(),o=br(),l=Zh(qn);let c=qn;Gi&&n.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Yo.bind(null,A=>""+A),f=Yo.bind(null,QM),h=Yo.bind(null,Ds);function m(A,j){let q,ie;return jf(A)?(q=e.getRecordMatcher(A),ie=j):ie=A,e.addRoute(ie,q)}function _(A){const j=e.getRecordMatcher(A);j&&e.removeRoute(j)}function p(){return e.getRoutes().map(A=>A.record)}function d(A){return!!e.getRecordMatcher(A)}function v(A,j){if(j=Ye({},j||l.value),typeof A=="string"){const b=Ko(t,A,j.path),R=e.resolve({path:b.path},j),G=r.createHref(b.fullPath);return Ye(b,R,{params:h(R.params),hash:Ds(b.hash),redirectedFrom:void 0,href:G})}let q;if("path"in A)q=Ye({},A,{path:Ko(t,A.path,j.path).path});else{const b=Ye({},A.params);for(const R in b)b[R]==null&&delete b[R];q=Ye({},A,{params:f(A.params)}),j.params=f(j.params)}const ie=e.resolve(q,j),de=A.hash||"";ie.params=u(h(ie.params));const Se=hM(i,Ye({},A,{hash:KM(de),path:ie.path})),xe=r.createHref(Se);return Ye({fullPath:Se,hash:de,query:i===fu?tS(A.query):A.query||{}},ie,{redirectedFrom:void 0,href:xe})}function E(A){return typeof A=="string"?Ko(t,A,l.value.path):Ye({},A)}function x(A,j){if(c!==A)return or(8,{from:j,to:A})}function S(A){return F(A)}function T(A){return S(Ye(E(A),{replace:!0}))}function P(A){const j=A.matched[A.matched.length-1];if(j&&j.redirect){const{redirect:q}=j;let ie=typeof q=="function"?q(A):q;return typeof ie=="string"&&(ie=ie.includes("?")||ie.includes("#")?ie=E(ie):{path:ie},ie.params={}),Ye({query:A.query,hash:A.hash,params:"path"in ie?{}:A.params},ie)}}function F(A,j){const q=c=v(A),ie=l.value,de=A.state,Se=A.force,xe=A.replace===!0,b=P(q);if(b)return F(Ye(E(b),{state:typeof b=="object"?Ye({},de,b.state):de,force:Se,replace:xe}),j||q);const R=q;R.redirectedFrom=j;let G;return!Se&&dM(i,ie,q)&&(G=or(16,{to:R,from:ie}),le(ie,ie,!0,!1)),(G?Promise.resolve(G):C(R,ie)).catch(X=>Ln(X)?Ln(X,2)?X:fe(X):se(X,R,ie)).then(X=>{if(X){if(Ln(X,2))return F(Ye({replace:xe},E(X.to),{state:typeof X.to=="object"?Ye({},de,X.to.state):de,force:Se}),j||R)}else X=Z(R,ie,!0,xe,de);return I(R,ie,X),X})}function y(A,j){const q=x(A,j);return q?Promise.reject(q):Promise.resolve()}function C(A,j){let q;const[ie,de,Se]=fS(A,j);q=Zo(ie.reverse(),"beforeRouteLeave",A,j);for(const b of ie)b.leaveGuards.forEach(R=>{q.push(jn(R,A,j))});const xe=y.bind(null,A,j);return q.push(xe),Hi(q).then(()=>{q=[];for(const b of s.list())q.push(jn(b,A,j));return q.push(xe),Hi(q)}).then(()=>{q=Zo(de,"beforeRouteUpdate",A,j);for(const b of de)b.updateGuards.forEach(R=>{q.push(jn(R,A,j))});return q.push(xe),Hi(q)}).then(()=>{q=[];for(const b of A.matched)if(b.beforeEnter&&!j.matched.includes(b))if(ln(b.beforeEnter))for(const R of b.beforeEnter)q.push(jn(R,A,j));else q.push(jn(b.beforeEnter,A,j));return q.push(xe),Hi(q)}).then(()=>(A.matched.forEach(b=>b.enterCallbacks={}),q=Zo(Se,"beforeRouteEnter",A,j),q.push(xe),Hi(q))).then(()=>{q=[];for(const b of a.list())q.push(jn(b,A,j));return q.push(xe),Hi(q)}).catch(b=>Ln(b,8)?b:Promise.reject(b))}function I(A,j,q){for(const ie of o.list())ie(A,j,q)}function Z(A,j,q,ie,de){const Se=x(A,j);if(Se)return Se;const xe=j===qn,b=Gi?history.state:{};q&&(ie||xe?r.replace(A.fullPath,Ye({scroll:xe&&b&&b.scroll},de)):r.push(A.fullPath,de)),l.value=A,le(A,j,q,xe),fe()}let Y;function B(){Y||(Y=r.listen((A,j,q)=>{if(!ve.listening)return;const ie=v(A),de=P(ie);if(de){F(Ye(de,{replace:!0}),ie).catch(Lr);return}c=ie;const Se=l.value;Gi&&MM(iu(Se.fullPath,q.delta),Qs()),C(ie,Se).catch(xe=>Ln(xe,12)?xe:Ln(xe,2)?(F(xe.to,ie).then(b=>{Ln(b,20)&&!q.delta&&q.type===kr.pop&&r.go(-1,!1)}).catch(Lr),Promise.reject()):(q.delta&&r.go(-q.delta,!1),se(xe,ie,Se))).then(xe=>{xe=xe||Z(ie,Se,!1),xe&&(q.delta&&!Ln(xe,8)?r.go(-q.delta,!1):q.type===kr.pop&&Ln(xe,20)&&r.go(-1,!1)),I(ie,Se,xe)}).catch(Lr)}))}let z=br(),K=br(),re;function se(A,j,q){fe(A);const ie=K.list();return ie.length?ie.forEach(de=>de(A,j,q)):console.error(A),Promise.reject(A)}function W(){return re&&l.value!==qn?Promise.resolve():new Promise((A,j)=>{z.add([A,j])})}function fe(A){return re||(re=!A,B(),z.list().forEach(([j,q])=>A?q(A):j()),z.reset()),A}function le(A,j,q,ie){const{scrollBehavior:de}=n;if(!Gi||!de)return Promise.resolve();const Se=!q&&SM(iu(A.fullPath,0))||(ie||!q)&&history.state&&history.state.scroll||null;return Vu().then(()=>de(A,j,Se)).then(xe=>xe&&yM(xe)).catch(xe=>se(xe,A,j))}const Te=A=>r.go(A);let k;const ue=new Set,ve={currentRoute:l,listening:!0,addRoute:m,removeRoute:_,hasRoute:d,getRoutes:p,resolve:v,options:n,push:S,replace:T,go:Te,back:()=>Te(-1),forward:()=>Te(1),beforeEach:s.add,beforeResolve:a.add,afterEach:o.add,onError:K.add,isReady:W,install(A){const j=this;A.component("RouterLink",sS),A.component("RouterView",cS),A.config.globalProperties.$router=j,Object.defineProperty(A.config.globalProperties,"$route",{enumerable:!0,get:()=>$i(l)}),Gi&&!k&&l.value===qn&&(k=!0,S(r.location).catch(de=>{}));const q={};for(const de in qn)q[de]=$t(()=>l.value[de]);A.provide(Qa,j),A.provide(th,Gr(q)),A.provide(wa,l);const ie=A.unmount;ue.add(A),A.unmount=function(){ue.delete(A),ue.size<1&&(c=qn,Y&&Y(),Y=null,l.value=qn,k=!1,re=!1),ie()}}};return ve}function Hi(n){return n.reduce((e,t)=>e.then(()=>t()),Promise.resolve())}function fS(n,e){const t=[],i=[],r=[],s=Math.max(e.matched.length,n.matched.length);for(let a=0;a<s;a++){const o=e.matched[a];o&&(n.matched.find(c=>sr(c,o))?i.push(o):t.push(o));const l=n.matched[a];l&&(e.matched.find(c=>sr(c,l))||r.push(l))}return[t,i,r]}const hS={data(){return{msg:""}},mounted(){},components:{}},dS={class:"home"};function pS(n,e,t,i,r,s){return ur(),fr("div",dS,[Ct("h1",null,As(r.msg),1)])}const mS=hr(hS,[["render",pS]]),gS={},_S={class:"about"},vS=Ct("h1",null,"This is an about page",-1),xS=[vS];function yS(n,e){return ur(),fr("div",_S,xS)}const MS=hr(gS,[["render",yS]]),SS={data(){return{msg:"Chat 123"}},mounted(){},components:{}},bS={class:"home"};function wS(n,e,t,i,r,s){return ur(),fr("div",bS,[Ct("h1",null,As(r.msg),1)])}const ES=hr(SS,[["render",wS]]),TS=[{path:"/",name:"Home",component:mS},{path:"/about",name:"About",component:MS},{path:"/chat",name:"Chat",component:ES}],AS=uS({history:TM(),routes:TS}),nh=Up(lM);nh.use(AS);nh.mount("#app");
