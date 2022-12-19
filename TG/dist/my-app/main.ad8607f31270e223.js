"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[179],{794:()=>{function de(t){return"function"==typeof t}function Hc(t){const n=t(r=>{Error.call(r),r.stack=(new Error).stack});return n.prototype=Object.create(Error.prototype),n.prototype.constructor=n,n}const $c=Hc(t=>function(n){t(this),this.message=n?`${n.length} errors occurred during unsubscription:\n${n.map((r,i)=>`${i+1}) ${r.toString()}`).join("\n  ")}`:"",this.name="UnsubscriptionError",this.errors=n});function Xs(t,e){if(t){const n=t.indexOf(e);0<=n&&t.splice(n,1)}}class ct{constructor(e){this.initialTeardown=e,this.closed=!1,this._parentage=null,this._finalizers=null}unsubscribe(){let e;if(!this.closed){this.closed=!0;const{_parentage:n}=this;if(n)if(this._parentage=null,Array.isArray(n))for(const s of n)s.remove(this);else n.remove(this);const{initialTeardown:r}=this;if(de(r))try{r()}catch(s){e=s instanceof $c?s.errors:[s]}const{_finalizers:i}=this;if(i){this._finalizers=null;for(const s of i)try{Vy(s)}catch(o){e=e??[],o instanceof $c?e=[...e,...o.errors]:e.push(o)}}if(e)throw new $c(e)}}add(e){var n;if(e&&e!==this)if(this.closed)Vy(e);else{if(e instanceof ct){if(e.closed||e._hasParent(this))return;e._addParent(this)}(this._finalizers=null!==(n=this._finalizers)&&void 0!==n?n:[]).push(e)}}_hasParent(e){const{_parentage:n}=this;return n===e||Array.isArray(n)&&n.includes(e)}_addParent(e){const{_parentage:n}=this;this._parentage=Array.isArray(n)?(n.push(e),n):n?[n,e]:e}_removeParent(e){const{_parentage:n}=this;n===e?this._parentage=null:Array.isArray(n)&&Xs(n,e)}remove(e){const{_finalizers:n}=this;n&&Xs(n,e),e instanceof ct&&e._removeParent(this)}}ct.EMPTY=(()=>{const t=new ct;return t.closed=!0,t})();const Py=ct.EMPTY;function Ly(t){return t instanceof ct||t&&"closed"in t&&de(t.remove)&&de(t.add)&&de(t.unsubscribe)}function Vy(t){de(t)?t():t.unsubscribe()}const Ni={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1},Uc={setTimeout(t,e,...n){const{delegate:r}=Uc;return r?.setTimeout?r.setTimeout(t,e,...n):setTimeout(t,e,...n)},clearTimeout(t){const{delegate:e}=Uc;return(e?.clearTimeout||clearTimeout)(t)},delegate:void 0};function By(t){Uc.setTimeout(()=>{const{onUnhandledError:e}=Ni;if(!e)throw t;e(t)})}function gf(){}const EA=yf("C",void 0,void 0);function yf(t,e,n){return{kind:t,value:e,error:n}}let Oi=null;function zc(t){if(Ni.useDeprecatedSynchronousErrorHandling){const e=!Oi;if(e&&(Oi={errorThrown:!1,error:null}),t(),e){const{errorThrown:n,error:r}=Oi;if(Oi=null,n)throw r}}else t()}class _f extends ct{constructor(e){super(),this.isStopped=!1,e?(this.destination=e,Ly(e)&&e.add(this)):this.destination=xA}static create(e,n,r){return new Ya(e,n,r)}next(e){this.isStopped?bf(function MA(t){return yf("N",t,void 0)}(e),this):this._next(e)}error(e){this.isStopped?bf(function wA(t){return yf("E",void 0,t)}(e),this):(this.isStopped=!0,this._error(e))}complete(){this.isStopped?bf(EA,this):(this.isStopped=!0,this._complete())}unsubscribe(){this.closed||(this.isStopped=!0,super.unsubscribe(),this.destination=null)}_next(e){this.destination.next(e)}_error(e){try{this.destination.error(e)}finally{this.unsubscribe()}}_complete(){try{this.destination.complete()}finally{this.unsubscribe()}}}const AA=Function.prototype.bind;function vf(t,e){return AA.call(t,e)}class SA{constructor(e){this.partialObserver=e}next(e){const{partialObserver:n}=this;if(n.next)try{n.next(e)}catch(r){Gc(r)}}error(e){const{partialObserver:n}=this;if(n.error)try{n.error(e)}catch(r){Gc(r)}else Gc(e)}complete(){const{partialObserver:e}=this;if(e.complete)try{e.complete()}catch(n){Gc(n)}}}class Ya extends _f{constructor(e,n,r){let i;if(super(),de(e)||!e)i={next:e??void 0,error:n??void 0,complete:r??void 0};else{let s;this&&Ni.useDeprecatedNextContext?(s=Object.create(e),s.unsubscribe=()=>this.unsubscribe(),i={next:e.next&&vf(e.next,s),error:e.error&&vf(e.error,s),complete:e.complete&&vf(e.complete,s)}):i=e}this.destination=new SA(i)}}function Gc(t){Ni.useDeprecatedSynchronousErrorHandling?function IA(t){Ni.useDeprecatedSynchronousErrorHandling&&Oi&&(Oi.errorThrown=!0,Oi.error=t)}(t):By(t)}function bf(t,e){const{onStoppedNotification:n}=Ni;n&&Uc.setTimeout(()=>n(t,e))}const xA={closed:!0,next:gf,error:function TA(t){throw t},complete:gf},Df="function"==typeof Symbol&&Symbol.observable||"@@observable";function Js(t){return t}function jy(t){return 0===t.length?Js:1===t.length?t[0]:function(n){return t.reduce((r,i)=>i(r),n)}}class ge{constructor(e){e&&(this._subscribe=e)}lift(e){const n=new ge;return n.source=this,n.operator=e,n}subscribe(e,n,r){const i=function OA(t){return t&&t instanceof _f||function NA(t){return t&&de(t.next)&&de(t.error)&&de(t.complete)}(t)&&Ly(t)}(e)?e:new Ya(e,n,r);return zc(()=>{const{operator:s,source:o}=this;i.add(s?s.call(i,o):o?this._subscribe(i):this._trySubscribe(i))}),i}_trySubscribe(e){try{return this._subscribe(e)}catch(n){e.error(n)}}forEach(e,n){return new(n=Hy(n))((r,i)=>{const s=new Ya({next:o=>{try{e(o)}catch(a){i(a),s.unsubscribe()}},error:i,complete:r});this.subscribe(s)})}_subscribe(e){var n;return null===(n=this.source)||void 0===n?void 0:n.subscribe(e)}[Df](){return this}pipe(...e){return jy(e)(this)}toPromise(e){return new(e=Hy(e))((n,r)=>{let i;this.subscribe(s=>i=s,s=>r(s),()=>n(i))})}}function Hy(t){var e;return null!==(e=t??Ni.Promise)&&void 0!==e?e:Promise}ge.create=t=>new ge(t);const FA=Hc(t=>function(){t(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"});class Kt extends ge{constructor(){super(),this.closed=!1,this.currentObservers=null,this.observers=[],this.isStopped=!1,this.hasError=!1,this.thrownError=null}lift(e){const n=new $y(this,this);return n.operator=e,n}_throwIfClosed(){if(this.closed)throw new FA}next(e){zc(()=>{if(this._throwIfClosed(),!this.isStopped){this.currentObservers||(this.currentObservers=Array.from(this.observers));for(const n of this.currentObservers)n.next(e)}})}error(e){zc(()=>{if(this._throwIfClosed(),!this.isStopped){this.hasError=this.isStopped=!0,this.thrownError=e;const{observers:n}=this;for(;n.length;)n.shift().error(e)}})}complete(){zc(()=>{if(this._throwIfClosed(),!this.isStopped){this.isStopped=!0;const{observers:e}=this;for(;e.length;)e.shift().complete()}})}unsubscribe(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null}get observed(){var e;return(null===(e=this.observers)||void 0===e?void 0:e.length)>0}_trySubscribe(e){return this._throwIfClosed(),super._trySubscribe(e)}_subscribe(e){return this._throwIfClosed(),this._checkFinalizedStatuses(e),this._innerSubscribe(e)}_innerSubscribe(e){const{hasError:n,isStopped:r,observers:i}=this;return n||r?Py:(this.currentObservers=null,i.push(e),new ct(()=>{this.currentObservers=null,Xs(i,e)}))}_checkFinalizedStatuses(e){const{hasError:n,thrownError:r,isStopped:i}=this;n?e.error(r):i&&e.complete()}asObservable(){const e=new ge;return e.source=this,e}}Kt.create=(t,e)=>new $y(t,e);class $y extends Kt{constructor(e,n){super(),this.destination=e,this.source=n}next(e){var n,r;null===(r=null===(n=this.destination)||void 0===n?void 0:n.next)||void 0===r||r.call(n,e)}error(e){var n,r;null===(r=null===(n=this.destination)||void 0===n?void 0:n.error)||void 0===r||r.call(n,e)}complete(){var e,n;null===(n=null===(e=this.destination)||void 0===e?void 0:e.complete)||void 0===n||n.call(e)}_subscribe(e){var n,r;return null!==(r=null===(n=this.source)||void 0===n?void 0:n.subscribe(e))&&void 0!==r?r:Py}}function rt(t){return e=>{if(function kA(t){return de(t?.lift)}(e))return e.lift(function(n){try{return t(n,this)}catch(r){this.error(r)}});throw new TypeError("Unable to lift unknown Observable type")}}function ut(t,e,n,r,i){return new RA(t,e,n,r,i)}class RA extends _f{constructor(e,n,r,i,s,o){super(e),this.onFinalize=s,this.shouldUnsubscribe=o,this._next=n?function(a){try{n(a)}catch(l){e.error(l)}}:super._next,this._error=i?function(a){try{i(a)}catch(l){e.error(l)}finally{this.unsubscribe()}}:super._error,this._complete=r?function(){try{r()}catch(a){e.error(a)}finally{this.unsubscribe()}}:super._complete}unsubscribe(){var e;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){const{closed:n}=this;super.unsubscribe(),!n&&(null===(e=this.onFinalize)||void 0===e||e.call(this))}}}function it(t,e){return rt((n,r)=>{let i=0;n.subscribe(ut(r,s=>{r.next(t.call(e,s,i++))}))})}function PA(t,e,n,r){return new(n||(n=Promise))(function(s,o){function a(u){try{c(r.next(u))}catch(d){o(d)}}function l(u){try{c(r.throw(u))}catch(d){o(d)}}function c(u){u.done?s(u.value):function i(s){return s instanceof n?s:new n(function(o){o(s)})}(u.value).then(a,l)}c((r=r.apply(t,e||[])).next())})}Object.create;function Gy(t){var e="function"==typeof Symbol&&Symbol.iterator,n=e&&t[e],r=0;if(n)return n.call(t);if(t&&"number"==typeof t.length)return{next:function(){return t&&r>=t.length&&(t=void 0),{value:t&&t[r++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function Fi(t){return this instanceof Fi?(this.v=t,this):new Fi(t)}function VA(t,e,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var i,r=n.apply(t,e||[]),s=[];return i={},o("next"),o("throw"),o("return"),i[Symbol.asyncIterator]=function(){return this},i;function o(f){r[f]&&(i[f]=function(h){return new Promise(function(p,m){s.push([f,h,p,m])>1||a(f,h)})})}function a(f,h){try{!function l(f){f.value instanceof Fi?Promise.resolve(f.value.v).then(c,u):d(s[0][2],f)}(r[f](h))}catch(p){d(s[0][3],p)}}function c(f){a("next",f)}function u(f){a("throw",f)}function d(f,h){f(h),s.shift(),s.length&&a(s[0][0],s[0][1])}}function BA(t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var n,e=t[Symbol.asyncIterator];return e?e.call(t):(t=Gy(t),n={},r("next"),r("throw"),r("return"),n[Symbol.asyncIterator]=function(){return this},n);function r(s){n[s]=t[s]&&function(o){return new Promise(function(a,l){(function i(s,o,a,l){Promise.resolve(l).then(function(c){s({value:c,done:a})},o)})(a,l,(o=t[s](o)).done,o.value)})}}}Object.create;const Wy=t=>t&&"number"==typeof t.length&&"function"!=typeof t;function qy(t){return de(t?.then)}function Ky(t){return de(t[Df])}function Yy(t){return Symbol.asyncIterator&&de(t?.[Symbol.asyncIterator])}function Qy(t){return new TypeError(`You provided ${null!==t&&"object"==typeof t?"an invalid object":`'${t}'`} where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`)}const Zy=function HA(){return"function"==typeof Symbol&&Symbol.iterator?Symbol.iterator:"@@iterator"}();function Xy(t){return de(t?.[Zy])}function Jy(t){return VA(this,arguments,function*(){const n=t.getReader();try{for(;;){const{value:r,done:i}=yield Fi(n.read());if(i)return yield Fi(void 0);yield yield Fi(r)}}finally{n.releaseLock()}})}function e0(t){return de(t?.getReader)}function pn(t){if(t instanceof ge)return t;if(null!=t){if(Ky(t))return function $A(t){return new ge(e=>{const n=t[Df]();if(de(n.subscribe))return n.subscribe(e);throw new TypeError("Provided object does not correctly implement Symbol.observable")})}(t);if(Wy(t))return function UA(t){return new ge(e=>{for(let n=0;n<t.length&&!e.closed;n++)e.next(t[n]);e.complete()})}(t);if(qy(t))return function zA(t){return new ge(e=>{t.then(n=>{e.closed||(e.next(n),e.complete())},n=>e.error(n)).then(null,By)})}(t);if(Yy(t))return t0(t);if(Xy(t))return function GA(t){return new ge(e=>{for(const n of t)if(e.next(n),e.closed)return;e.complete()})}(t);if(e0(t))return function WA(t){return t0(Jy(t))}(t)}throw Qy(t)}function t0(t){return new ge(e=>{(function qA(t,e){var n,r,i,s;return PA(this,void 0,void 0,function*(){try{for(n=BA(t);!(r=yield n.next()).done;){const o=r.value;if(e.next(o),e.closed)return}}catch(o){i={error:o}}finally{try{r&&!r.done&&(s=n.return)&&(yield s.call(n))}finally{if(i)throw i.error}}e.complete()})})(t,e).catch(n=>e.error(n))})}function Pn(t,e,n,r=0,i=!1){const s=e.schedule(function(){n(),i?t.add(this.schedule(null,r)):this.unsubscribe()},r);if(t.add(s),!i)return s}function Wc(t,e,n=1/0){return de(e)?Wc((r,i)=>it((s,o)=>e(r,s,i,o))(pn(t(r,i))),n):("number"==typeof e&&(n=e),rt((r,i)=>function KA(t,e,n,r,i,s,o,a){const l=[];let c=0,u=0,d=!1;const f=()=>{d&&!l.length&&!c&&e.complete()},h=m=>c<r?p(m):l.push(m),p=m=>{s&&e.next(m),c++;let g=!1;pn(n(m,u++)).subscribe(ut(e,_=>{i?.(_),s?h(_):e.next(_)},()=>{g=!0},void 0,()=>{if(g)try{for(c--;l.length&&c<r;){const _=l.shift();o?Pn(e,o,()=>p(_)):p(_)}f()}catch(_){e.error(_)}}))};return t.subscribe(ut(e,h,()=>{d=!0,f()})),()=>{a?.()}}(r,i,t,n)))}function n0(t=1/0){return Wc(Js,t)}const Ef=new ge(t=>t.complete());function wf(t){return t[t.length-1]}function r0(t){return de(wf(t))?t.pop():void 0}function Qa(t){return function QA(t){return t&&de(t.schedule)}(wf(t))?t.pop():void 0}function i0(t,e=0){return rt((n,r)=>{n.subscribe(ut(r,i=>Pn(r,t,()=>r.next(i),e),()=>Pn(r,t,()=>r.complete(),e),i=>Pn(r,t,()=>r.error(i),e)))})}function s0(t,e=0){return rt((n,r)=>{r.add(t.schedule(()=>n.subscribe(r),e))})}function o0(t,e){if(!t)throw new Error("Iterable cannot be null");return new ge(n=>{Pn(n,e,()=>{const r=t[Symbol.asyncIterator]();Pn(n,e,()=>{r.next().then(i=>{i.done?n.complete():n.next(i.value)})},0,!0)})})}function rS(t,e){if(null!=t){if(Ky(t))return function XA(t,e){return pn(t).pipe(s0(e),i0(e))}(t,e);if(Wy(t))return function eS(t,e){return new ge(n=>{let r=0;return e.schedule(function(){r===t.length?n.complete():(n.next(t[r++]),n.closed||this.schedule())})})}(t,e);if(qy(t))return function JA(t,e){return pn(t).pipe(s0(e),i0(e))}(t,e);if(Yy(t))return o0(t,e);if(Xy(t))return function tS(t,e){return new ge(n=>{let r;return Pn(n,e,()=>{r=t[Zy](),Pn(n,e,()=>{let i,s;try{({value:i,done:s}=r.next())}catch(o){return void n.error(o)}s?n.complete():n.next(i)},0,!0)}),()=>de(r?.return)&&r.return()})}(t,e);if(e0(t))return function nS(t,e){return o0(Jy(t),e)}(t,e)}throw Qy(t)}function eo(t,e){return e?rS(t,e):pn(t)}function iS(...t){const e=Qa(t),n=function ZA(t,e){return"number"==typeof wf(t)?t.pop():e}(t,1/0),r=t;return r.length?1===r.length?pn(r[0]):n0(n)(eo(r,e)):Ef}function a0(t={}){const{connector:e=(()=>new Kt),resetOnError:n=!0,resetOnComplete:r=!0,resetOnRefCountZero:i=!0}=t;return s=>{let o,a,l,c=0,u=!1,d=!1;const f=()=>{a?.unsubscribe(),a=void 0},h=()=>{f(),o=l=void 0,u=d=!1},p=()=>{const m=o;h(),m?.unsubscribe()};return rt((m,g)=>{c++,!d&&!u&&f();const _=l=l??e();g.add(()=>{c--,0===c&&!d&&!u&&(a=Mf(p,i))}),_.subscribe(g),!o&&c>0&&(o=new Ya({next:E=>_.next(E),error:E=>{d=!0,f(),a=Mf(h,n,E),_.error(E)},complete:()=>{u=!0,f(),a=Mf(h,r),_.complete()}}),pn(m).subscribe(o))})(s)}}function Mf(t,e,...n){if(!0===e)return void t();if(!1===e)return;const r=new Ya({next:()=>{r.unsubscribe(),t()}});return e(...n).subscribe(r)}
/**
       * @license Angular v14.2.10
       * (c) 2010-2022 Google LLC. https://angular.io/
       * License: MIT
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function se(t){for(let e in t)if(t[e]===se)return e;throw Error("Could not find renamed property on target object.")}function If(t,e){for(const n in e)e.hasOwnProperty(n)&&!t.hasOwnProperty(n)&&(t[n]=e[n])}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function oe(t){if("string"==typeof t)return t;if(Array.isArray(t))return"["+t.map(oe).join(", ")+"]";if(null==t)return""+t;if(t.overriddenName)return`${t.overriddenName}`;if(t.name)return`${t.name}`;const e=t.toString();if(null==e)return""+e;const n=e.indexOf("\n");return-1===n?e:e.substring(0,n)}function Af(t,e){return null==t||""===t?null===e?"":e:null==e||""===e?t:t+" "+e}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const sS=se({__forward_ref__:se});function ae(t){return t.__forward_ref__=ae,t.toString=function(){return oe(this())},t}function F(t){return Sf(t)?t():t}function Sf(t){return"function"==typeof t&&t.hasOwnProperty(sS)&&t.__forward_ref__===ae}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class D extends Error{constructor(e,n){super(Ln(e,n)),this.code=e}}function Ln(t,e){return`NG0${Math.abs(t)}${e?": "+e.trim():""}`}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function R(t){return"string"==typeof t?t:null==t?"":String(t)}function Q(t){return"function"==typeof t?t.name||t.toString():"object"==typeof t&&null!=t&&"function"==typeof t.type?t.type.name||t.type.toString():R(t)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function qc(t,e){throw new D(-201,!1)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Vn(t,e,n){t!=e&&ee(n,t,e,"==")}function ft(t,e){null==t&&ee(e,t,null,"!=")}function ee(t,e,n,r){throw new Error(`ASSERTION ERROR: ${t}`+(null==r?"":` [Expected=> ${n} ${r} ${e} <=Actual]`))}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function w(t){return{token:t.token,providedIn:t.providedIn||null,factory:t.factory,value:void 0}}function q(t){return{providers:t.providers||[],imports:t.imports||[]}}function Kc(t){return l0(t,Yc)||l0(t,u0)}function l0(t,e){return t.hasOwnProperty(e)?t[e]:null}function c0(t){return t&&(t.hasOwnProperty(Tf)||t.hasOwnProperty(hS))?t[Tf]:null}const Yc=se({\u0275prov:se}),Tf=se({\u0275inj:se}),u0=se({ngInjectableDef:se}),hS=se({ngInjectorDef:se});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */var $,t;
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
let xf;function xt(t){const e=xf;return xf=t,e}function d0(t,e,n){const r=Kc(t);return r&&"root"==r.providedIn?void 0===r.value?r.value=r.factory():r.value:n&$.Optional?null:void 0!==e?e:void qc(oe(t))}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function Wr(t){return{toString:t}.toString()}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */var ki,f0,mn;(t=$||($={}))[t.Default=0]="Default",t[t.Host=1]="Host",t[t.Self=2]="Self",t[t.SkipSelf=4]="SkipSelf",t[t.Optional=8]="Optional",function(t){t[t.OnPush=0]="OnPush",t[t.Default=1]="Default"}(ki||(ki={})),function(t){t[t.CheckOnce=0]="CheckOnce",t[t.Checked=1]="Checked",t[t.CheckAlways=2]="CheckAlways",t[t.Detached=3]="Detached",t[t.Errored=4]="Errored",t[t.Destroyed=5]="Destroyed"}(f0||(f0={})),function(t){t[t.Emulated=0]="Emulated",t[t.None=2]="None",t[t.ShadowDom=3]="ShadowDom"}(mn||(mn={}));
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const fe=(()=>typeof globalThis<"u"&&globalThis||typeof global<"u"&&global||typeof window<"u"&&window||typeof self<"u"&&typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&self)();
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const to={},X=[],Qc=se({\u0275cmp:se}),Nf=se({\u0275dir:se}),Of=se({\u0275pipe:se}),h0=se({\u0275mod:se}),Bn=se({\u0275fac:se}),Za=se({__NG_ELEMENT_ID__:se});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
let mS=0;function Nt(t){return Wr(()=>{const e=t.type,n=!0===t.standalone,r={},i={type:e,providersResolver:null,decls:t.decls,vars:t.vars,factory:null,template:t.template||null,consts:t.consts||null,ngContentSelectors:t.ngContentSelectors,hostBindings:t.hostBindings||null,hostVars:t.hostVars||0,hostAttrs:t.hostAttrs||null,contentQueries:t.contentQueries||null,declaredInputs:r,inputs:null,outputs:null,exportAs:t.exportAs||null,onPush:t.changeDetection===ki.OnPush,directiveDefs:null,pipeDefs:null,standalone:n,dependencies:n&&t.dependencies||null,getStandaloneInjector:null,selectors:t.selectors||X,viewQuery:t.viewQuery||null,features:t.features||null,data:t.data||{},encapsulation:t.encapsulation||mn.Emulated,id:"c"+mS++,styles:t.styles||X,_:null,setInput:null,schemas:t.schemas||null,tView:null},s=t.dependencies,o=t.features;return i.inputs=g0(t.inputs,r),i.outputs=g0(t.outputs),o&&o.forEach(a=>a(i)),i.directiveDefs=s?()=>("function"==typeof s?s():s).map(p0).filter(m0):null,i.pipeDefs=s?()=>("function"==typeof s?s():s).map(Ye).filter(m0):null,i})}function gS(t,e,n){const r=t.\u0275cmp;r.directiveDefs=()=>("function"==typeof e?e():e).map(p0),r.pipeDefs=()=>("function"==typeof n?n():n).map(Ye)}function p0(t){return te(t)||Ke(t)}function m0(t){return null!==t}function J(t){return Wr(()=>({type:t.type,bootstrap:t.bootstrap||X,declarations:t.declarations||X,imports:t.imports||X,exports:t.exports||X,transitiveCompileScopes:null,schemas:t.schemas||null,id:t.id||null}))}function yS(t,e){return Wr(()=>{const n=ht(t,!0);n.declarations=e.declarations||X,n.imports=e.imports||X,n.exports=e.exports||X})}function g0(t,e){if(null==t)return to;const n={};for(const r in t)if(t.hasOwnProperty(r)){let i=t[r],s=i;Array.isArray(i)&&(s=i[1],i=i[0]),n[i]=r,e&&(e[i]=s)}return n}const T=Nt;function st(t){return{type:t.type,name:t.name,factory:null,pure:!1!==t.pure,standalone:!0===t.standalone,onDestroy:t.type.prototype.ngOnDestroy||null}}function te(t){return t[Qc]||null}function Ke(t){return t[Nf]||null}function Ye(t){return t[Of]||null}function Xa(t){const e=te(t)||Ke(t)||Ye(t);return null!==e&&e.standalone}function ht(t,e){const n=t[h0]||null;if(!n&&!0===e)throw new Error(`Type ${oe(t)} does not have '\u0275mod' property.`);return n}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const j=11;
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function ot(t){return Array.isArray(t)&&"object"==typeof t[1]}function Qt(t){return Array.isArray(t)&&!0===t[1]}function Rf(t){return 0!=(8&t.flags)}function eu(t){return 2==(2&t.flags)}function tu(t){return 1==(1&t.flags)}function Zt(t){return null!==t.template}function DS(t){return 0!=(256&t[2])}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function Bi(t,e){return t.hasOwnProperty(Bn)?t[Bn]:null}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class wS{constructor(e,n,r){this.previousValue=e,this.currentValue=n,this.firstChange=r}isFirstChange(){return this.firstChange}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Xt(){return v0}function v0(t){return t.type.prototype.ngOnChanges&&(t.setInput=IS),MS}function MS(){const t=D0(this),e=t?.current;if(e){const n=t.previous;if(n===to)t.previous=e;else for(let r in e)n[r]=e[r];t.current=null,this.ngOnChanges(e)}}function IS(t,e,n,r){const i=D0(t)||function AS(t,e){return t[b0]=e}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(t,{previous:to,current:null}),s=i.current||(i.current={}),o=i.previous,a=this.declaredInputs[n],l=o[a];s[a]=new wS(l&&l.currentValue,e,o===to),t[r]=e}Xt.ngInherit=!0;const b0="__ngSimpleChanges__";function D0(t){return t[b0]||null}let Lf=null;const Ft=function(t,e,n){Lf?.(t,e,n)},Bf="math";
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function we(t){for(;Array.isArray(t);)t=t[0];return t}function nu(t,e){return we(e[t])}function kt(t,e){return we(e[t.index])}function jf(t,e){return t.data[e]}function so(t,e){return t[e]}function mt(t,e){const n=e[t];return ot(n)?n:n[0]}function ru(t){return 64==(64&t[2])}function qr(t,e){return null==e?null:t[e]}function C0(t){t[18]=0}function Hf(t,e){t[5]+=e;let n=t,r=t[3];for(;null!==r&&(1===e&&1===n[5]||-1===e&&0===n[5]);)r[5]+=e,n=r,r=r[3]
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */}const k={lFrame:O0(null),bindingsEnabled:!0};function w0(){return k.bindingsEnabled}function VS(){k.bindingsEnabled=!0}function BS(){k.bindingsEnabled=!1}function C(){return k.lFrame.lView}function z(){return k.lFrame.tView}function jS(t){return k.lFrame.contextLView=t,t[8]}function HS(t){return k.lFrame.contextLView=null,t}function Ae(){let t=M0();for(;null!==t&&64===t.type;)t=t.parent;return t}function M0(){return k.lFrame.currentTNode}function rl(){const t=k.lFrame,e=t.currentTNode;return t.isParent?e:e.parent}function gn(t,e){const n=k.lFrame;n.currentTNode=t,n.isParent=e}function $f(){return k.lFrame.isParent}function Uf(){k.lFrame.isParent=!1}function Qe(){const t=k.lFrame;let e=t.bindingRootIndex;return-1===e&&(e=t.bindingRootIndex=t.tView.bindingStartIndex),e}function jn(){return k.lFrame.bindingIndex}function A0(t){return k.lFrame.bindingIndex=t}function oo(){return k.lFrame.bindingIndex++}function Hn(t){const e=k.lFrame,n=e.bindingIndex;return e.bindingIndex=e.bindingIndex+t,n}function S0(t){k.lFrame.inI18n=t}function zS(t,e){const n=k.lFrame;n.bindingIndex=n.bindingRootIndex=t,zf(e)}function zf(t){k.lFrame.currentDirectiveIndex=t}function Gf(t){const e=k.lFrame.currentDirectiveIndex;return-1===e?null:t[e]}function T0(){return k.lFrame.currentQueryIndex}function Wf(t){k.lFrame.currentQueryIndex=t}function WS(t){const e=t[1];return 2===e.type?e.declTNode:1===e.type?t[6]:null}function x0(t,e,n){if(n&$.SkipSelf){let i=e,s=t;for(;(i=i.parent,null===i&&!(n&$.Host))&&(i=WS(s),!(null===i||(s=s[15],10&i.type))););if(null===i)return!1;e=i,t=s}const r=k.lFrame=N0();return r.currentTNode=e,r.lView=t,!0}function qf(t){const e=N0(),n=t[1];k.lFrame=e,e.currentTNode=n.firstChild,e.lView=t,e.tView=n,e.contextLView=t,e.bindingIndex=n.bindingStartIndex,e.inI18n=!1}function N0(){const t=k.lFrame,e=null===t?null:t.child;return null===e?O0(t):e}function O0(t){const e={currentTNode:null,isParent:!0,lView:null,tView:null,selectedIndex:-1,contextLView:null,elementDepthCount:0,currentNamespace:null,currentDirectiveIndex:-1,bindingRootIndex:-1,bindingIndex:-1,currentQueryIndex:0,parent:t,child:null,inI18n:!1};return null!==t&&(t.child=e),e}function F0(){const t=k.lFrame;return k.lFrame=t.parent,t.currentTNode=null,t.lView=null,t}const k0=F0;function Kf(){const t=F0();t.isParent=!0,t.tView=null,t.selectedIndex=-1,t.contextLView=null,t.elementDepthCount=0,t.currentDirectiveIndex=-1,t.currentNamespace=null,t.bindingRootIndex=-1,t.bindingIndex=-1,t.currentQueryIndex=0}function qS(t){return(k.lFrame.contextLView=function KS(t,e){for(;t>0;)e=e[15],t--;return e}(t,k.lFrame.contextLView))[8]}function Ze(){return k.lFrame.selectedIndex}function Kr(t){k.lFrame.selectedIndex=t}function De(){const t=k.lFrame;return jf(t.tView,t.selectedIndex)}function YS(){k.lFrame.currentNamespace="svg"}function QS(){k.lFrame.currentNamespace=Bf}function ZS(){!function XS(){k.lFrame.currentNamespace=null}()}function iu(t,e){for(let n=e.directiveStart,r=e.directiveEnd;n<r;n++){const s=t.data[n].type.prototype,{ngAfterContentInit:o,ngAfterContentChecked:a,ngAfterViewInit:l,ngAfterViewChecked:c,ngOnDestroy:u}=s;o&&(t.contentHooks||(t.contentHooks=[])).push(-n,o),a&&((t.contentHooks||(t.contentHooks=[])).push(n,a),(t.contentCheckHooks||(t.contentCheckHooks=[])).push(n,a)),l&&(t.viewHooks||(t.viewHooks=[])).push(-n,l),c&&((t.viewHooks||(t.viewHooks=[])).push(n,c),(t.viewCheckHooks||(t.viewCheckHooks=[])).push(n,c)),null!=u&&(t.destroyHooks||(t.destroyHooks=[])).push(n,u)}}function su(t,e,n){R0(t,e,3,n)}function ou(t,e,n,r){(3&t[2])===n&&R0(t,e,n,r)}function Yf(t,e){let n=t[2];(3&n)===e&&(n&=2047,n+=1,t[2]=n)}function R0(t,e,n,r){const i=void 0!==r?65535&t[18]:0,s=r??-1,o=e.length-1;let a=0;for(let l=i;l<o;l++)if("number"==typeof e[l+1]){if(a=e[l],null!=r&&a>=r)break}else e[l]<0&&(t[18]+=65536),(a<s||-1==s)&&(tT(t,n,e,l),t[18]=(4294901760&t[18])+l+2),l++}function tT(t,e,n,r){const i=n[r]<0,s=n[r+1],a=t[i?-n[r]:n[r]];if(i){if(t[2]>>11<t[18]>>16&&(3&t[2])===e){t[2]+=2048,Ft(4,a,s);try{s.call(a)}finally{Ft(5,a,s)}}}else{Ft(4,a,s);try{s.call(a)}finally{Ft(5,a,s)}}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class il{constructor(e,n,r){this.factory=e,this.resolving=!1,this.canSeeViewProviders=n,this.injectImpl=r}}function au(t,e,n){let r=0;for(;r<n.length;){const i=n[r];if("number"==typeof i){if(0!==i)break;r++;const s=n[r++],o=n[r++],a=n[r++];t.setAttribute(e,o,a,s)}else{const s=i,o=n[++r];L0(s)?t.setProperty(e,s,o):t.setAttribute(e,s,o),r++}}return r}function P0(t){return 3===t||4===t||6===t}function L0(t){return 64===t.charCodeAt(0)}function lu(t,e){if(null!==e&&0!==e.length)if(null===t||0===t.length)t=e.slice();else{let n=-1;for(let r=0;r<e.length;r++){const i=e[r];"number"==typeof i?n=i:0===n||V0(t,n,i,null,-1===n||2===n?e[++r]:null)}}return t}function V0(t,e,n,r,i){let s=0,o=t.length;if(-1===e)o=-1;else for(;s<t.length;){const a=t[s++];if("number"==typeof a){if(a===e){o=-1;break}if(a>e){o=s-1;break}}}for(;s<t.length;){const a=t[s];if("number"==typeof a)break;if(a===n){if(null===r)return void(null!==i&&(t[s+1]=i));if(r===t[s+1])return void(t[s+2]=i)}s++,null!==r&&s++,null!==i&&s++}-1!==o&&(t.splice(o,0,e),s=o+1),t.splice(s++,0,n),null!==r&&t.splice(s++,0,r),null!==i&&t.splice(s++,0,i)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function B0(t){return-1!==t}function ao(t){return 32767&t}function lo(t,e){let n=function oT(t){return t>>16}(t),r=e;for(;n>0;)r=r[15],n--;return r}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let Zf=!0;function cu(t){const e=Zf;return Zf=t,e}let aT=0;const yn={};function ol(t,e){const n=Jf(t,e);if(-1!==n)return n;const r=e[1];r.firstCreatePass&&(t.injectorIndex=e.length,Xf(r.data,t),Xf(e,null),Xf(r.blueprint,null));const i=uu(t,e),s=t.injectorIndex;if(B0(i)){const o=ao(i),a=lo(i,e),l=a[1].data;for(let c=0;c<8;c++)e[s+c]=a[o+c]|l[o+c]}return e[s+8]=i,s}function Xf(t,e){t.push(0,0,0,0,0,0,0,0,e)}function Jf(t,e){return-1===t.injectorIndex||t.parent&&t.parent.injectorIndex===t.injectorIndex||null===e[t.injectorIndex+8]?-1:t.injectorIndex}function uu(t,e){if(t.parent&&-1!==t.parent.injectorIndex)return t.parent.injectorIndex;let n=0,r=null,i=e;for(;null!==i;){if(r=K0(i),null===r)return-1;if(n++,i=i[15],-1!==r.injectorIndex)return r.injectorIndex|n<<16}return-1}function du(t,e,n){!function lT(t,e,n){let r;"string"==typeof n?r=n.charCodeAt(0)||0:n.hasOwnProperty(Za)&&(r=n[Za]),null==r&&(r=n[Za]=aT++);const i=255&r,s=1<<i;e.data[t+(i>>5)]|=s}(t,e,n)}function $0(t,e,n){if(n&$.Optional||void 0!==t)return t;qc()}function U0(t,e,n,r){if(n&$.Optional&&void 0===r&&(r=null),0==(n&($.Self|$.Host))){const i=t[9],s=xt(void 0);try{return i?i.get(e,r,n&$.Optional):d0(e,r,n&$.Optional)}finally{xt(s)}}return $0(r,0,n)}function z0(t,e,n,r=$.Default,i){if(null!==t){if(1024&e[2]){const o=function hT(t,e,n,r,i){let s=t,o=e;for(;null!==s&&null!==o&&1024&o[2]&&!(256&o[2]);){const a=G0(s,o,n,r|$.Self,yn);if(a!==yn)return a;let l=s.parent;if(!l){const c=o[21];if(c){const u=c.get(n,yn,r);if(u!==yn)return u}l=K0(o),o=o[15]}s=l}return i}(t,e,n,r,yn);if(o!==yn)return o}const s=G0(t,e,n,r,yn);if(s!==yn)return s}return U0(e,n,r,i)}function G0(t,e,n,r,i){const s=function dT(t){if("string"==typeof t)return t.charCodeAt(0)||0;const e=t.hasOwnProperty(Za)?t[Za]:void 0;return"number"==typeof e?e>=0?255&e:fT:e}(n);if("function"==typeof s){if(!x0(e,t,r))return r&$.Host?$0(i,0,r):U0(e,n,r,i);try{const o=s(r);if(null!=o||r&$.Optional)return o;qc()}finally{k0()}}else if("number"==typeof s){let o=null,a=Jf(t,e),l=-1,c=r&$.Host?e[16][6]:null;for((-1===a||r&$.SkipSelf)&&(l=-1===a?uu(t,e):e[a+8],-1!==l&&q0(r,!1)?(o=e[1],a=ao(l),e=lo(l,e)):a=-1);-1!==a;){const u=e[1];if(W0(s,a,u.data)){const d=uT(a,e,n,o,r,c);if(d!==yn)return d}l=e[a+8],-1!==l&&q0(r,e[1].data[a+8]===c)&&W0(s,a,e)?(o=u,a=ao(l),e=lo(l,e)):a=-1}}return i}function uT(t,e,n,r,i,s){const o=e[1],a=o.data[t+8],u=fu(a,o,n,null==r?eu(a)&&Zf:r!=o&&0!=(3&a.type),i&$.Host&&s===a);return null!==u?al(e,o,u,a):yn}function fu(t,e,n,r,i){const s=t.providerIndexes,o=e.data,a=1048575&s,l=t.directiveStart,c=t.directiveEnd,u=s>>20,f=i?a+u:c;for(let h=r?a:a+u;h<f;h++){const p=o[h];if(h<l&&n===p||h>=l&&p.type===n)return h}if(i){const h=o[l];if(h&&Zt(h)&&h.type===n)return l}return null}function al(t,e,n,r){let i=t[n];const s=e.data;if(function nT(t){return t instanceof il}(i)){const o=i;o.resolving&&function oS(t,e){const n=e?`. Dependency path: ${e.join(" > ")} > ${t}`:"";throw new D(-200,`Circular dependency in DI detected for ${t}${n}`)}(Q(s[n]));const a=cu(o.canSeeViewProviders);o.resolving=!0;const l=o.injectImpl?xt(o.injectImpl):null;x0(t,r,$.Default);try{i=t[n]=o.factory(void 0,s,t,r),e.firstCreatePass&&n>=r.directiveStart&&
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function eT(t,e,n){const{ngOnChanges:r,ngOnInit:i,ngDoCheck:s}=e.type.prototype;if(r){const o=v0(e);(n.preOrderHooks||(n.preOrderHooks=[])).push(t,o),(n.preOrderCheckHooks||(n.preOrderCheckHooks=[])).push(t,o)}i&&(n.preOrderHooks||(n.preOrderHooks=[])).push(0-t,i),s&&((n.preOrderHooks||(n.preOrderHooks=[])).push(t,s),(n.preOrderCheckHooks||(n.preOrderCheckHooks=[])).push(t,s))}(n,s[n],e)}finally{null!==l&&xt(l),cu(a),o.resolving=!1,k0()}}return i}function W0(t,e,n){const r=1<<t;return!!(n[e+(t>>5)]&r)}function q0(t,e){return!(t&$.Self||t&$.Host&&e)}class co{constructor(e,n){this._tNode=e,this._lView=n}get(e,n,r){return z0(this._tNode,this._lView,e,r,n)}}function fT(){return new co(Ae(),C())}function Oe(t){return Wr(()=>{const e=t.prototype.constructor,n=e[Bn]||eh(e),r=Object.prototype;let i=Object.getPrototypeOf(t.prototype).constructor;for(;i&&i!==r;){const s=i[Bn]||eh(i);if(s&&s!==n)return s;i=Object.getPrototypeOf(i)}return s=>new s})}function eh(t){return Sf(t)?()=>{const e=eh(F(t));return e&&e()}:Bi(t)}function K0(t){const e=t[1],n=e.type;return 2===n?e.declTNode:1===n?t[6]:null}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function ll(t){return function cT(t,e){if("class"===e)return t.classes;if("style"===e)return t.styles;const n=t.attrs;if(n){const r=n.length;let i=0;for(;i<r;){const s=n[i];if(P0(s))break;if(0===s)i+=2;else if("number"==typeof s)for(i++;i<r&&"string"==typeof n[i];)i++;else{if(s===e)return n[i+1];i+=2}}}return null}(Ae(),t)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const uo="__annotations__",fo="__parameters__",ho="__prop__metadata__";function cl(t,e,n,r,i){return Wr(()=>{const s=th(e);function o(...a){if(this instanceof o)return s.call(this,...a),this;const l=new o(...a);return function(u){return i&&i(u,...a),(u.hasOwnProperty(uo)?u[uo]:Object.defineProperty(u,uo,{value:[]})[uo]).push(l),r&&r(u),u}}return n&&(o.prototype=Object.create(n.prototype)),o.prototype.ngMetadataName=t,o.annotationCls=o,o})}function th(t){return function(...n){if(t){const r=t(...n);for(const i in r)this[i]=r[i]}}}function po(t,e,n){return Wr(()=>{const r=th(e);function i(...s){if(this instanceof i)return r.apply(this,s),this;const o=new i(...s);return a.annotation=o,a;function a(l,c,u){const d=l.hasOwnProperty(fo)?l[fo]:Object.defineProperty(l,fo,{value:[]})[fo];for(;d.length<=u;)d.push(null);return(d[u]=d[u]||[]).push(o),l}}return n&&(i.prototype=Object.create(n.prototype)),i.prototype.ngMetadataName=t,i.annotationCls=i,i})}function Qr(t,e,n,r){return Wr(()=>{const i=th(e);function s(...o){if(this instanceof s)return i.apply(this,o),this;const a=new s(...o);return function l(c,u){const d=c.constructor,f=d.hasOwnProperty(ho)?d[ho]:Object.defineProperty(d,ho,{value:{}})[ho];f[u]=f.hasOwnProperty(u)&&f[u]||[],f[u].unshift(a),r&&r(c,u,...o)}}return n&&(s.prototype=Object.create(n.prototype)),s.prototype.ngMetadataName=t,s.annotationCls=s,s})}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const pT=po("Attribute",t=>({attributeName:t,__NG_ELEMENT_ID__:()=>ll(t)}));
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class x{constructor(e,n){this._desc=e,this.ngMetadataName="InjectionToken",this.\u0275prov=void 0,"number"==typeof n?this.__NG_ELEMENT_ID__=n:void 0!==n&&(this.\u0275prov=w({token:this,providedIn:n.providedIn||"root",factory:n.factory}))}get multi(){return this}toString(){return`InjectionToken ${this._desc}`}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */new x("AnalyzeForEntryComponents");class hu{}Qr("ContentChildren",(t,e={})=>({selector:t,first:!1,isViewQuery:!1,descendants:!1,emitDistinctChangesOnly:true,...e}),hu),Qr("ContentChild",(t,e={})=>({selector:t,first:!0,isViewQuery:!1,descendants:!0,...e}),hu),Qr("ViewChildren",(t,e={})=>({selector:t,first:!1,isViewQuery:!0,descendants:!0,emitDistinctChangesOnly:true,...e}),hu),Qr("ViewChild",(t,e)=>({selector:t,first:!0,isViewQuery:!0,descendants:!0,...e}),hu)
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */;var ji,Q0,Z0;
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function Se(t){const e=fe.ng;if(e&&e.\u0275compilerFacade)return e.\u0275compilerFacade;throw new Error("JIT compiler unavailable")}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */!function(t){t[t.Directive=0]="Directive",t[t.Component=1]="Component",t[t.Injectable=2]="Injectable",t[t.Pipe=3]="Pipe",t[t.NgModule=4]="NgModule"}(ji||(ji={})),function(t){t[t.Directive=0]="Directive",t[t.Pipe=1]="Pipe",t[t.NgModule=2]="NgModule"}(Q0||(Q0={})),function(t){t[t.Emulated=0]="Emulated",t[t.None=2]="None",t[t.ShadowDom=3]="ShadowDom"}(Z0||(Z0={}));const nh=Function;function ul(t){return"function"==typeof t}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function gt(t,e){void 0===e&&(e=t);for(let n=0;n<t.length;n++){let r=t[n];Array.isArray(r)?(e===t&&(e=t.slice(0,n)),gt(r,e)):e!==t&&e.push(r)}return e}function $n(t,e){t.forEach(n=>Array.isArray(n)?$n(n,e):e(n))}function X0(t,e,n){e>=t.length?t.push(n):t.splice(e,0,n)}function pu(t,e){return e>=t.length-1?t.pop():t.splice(e,1)[0]}function dl(t,e){const n=[];for(let r=0;r<t;r++)n.push(e);return n}function yt(t,e,n){let r=mo(t,e);return r>=0?t[1|r]=n:(r=~r,function yT(t,e,n,r){let i=t.length;if(i==e)t.push(n,r);else if(1===i)t.push(r,t[0]),t[0]=n;else{for(i--,t.push(t[i-1],t[i]);i>e;){const s=i-2;t[i]=t[s],i--}t[e]=n,t[e+1]=r}}(t,r,e,n)),r}function rh(t,e){const n=mo(t,e);if(n>=0)return t[1|n]}function mo(t,e){return t_(t,e,1)}function t_(t,e,n){let r=0,i=t.length>>n;for(;i!==r;){const s=r+(i-r>>1),o=t[s<<n];if(e===o)return s<<n;o>e?i=s:r=s+1}return~(i<<n)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const _T=/^function\s+\S+\(\)\s*{[\s\S]+\.apply\(this,\s*(arguments|(?:[^()]+\(\[\],)?[^()]+\(arguments\).*)\)/,vT=/^class\s+[A-Za-z\d$_]*\s*extends\s+[^{]+{/,bT=/^class\s+[A-Za-z\d$_]*\s*extends\s+[^{]+{[\s\S]*constructor\s*\(/,DT=/^class\s+[A-Za-z\d$_]*\s*extends\s+[^{]+{[\s\S]*constructor\s*\(\)\s*{[^}]*super\(\.\.\.arguments\)/;class ET{constructor(e){this._reflect=e||fe.Reflect}factory(e){return(...n)=>new e(...n)}_zipTypesAndAnnotations(e,n){let r;r=dl(typeof e>"u"?n.length:e.length);for(let i=0;i<r.length;i++)typeof e>"u"?r[i]=[]:e[i]&&e[i]!=Object?r[i]=[e[i]]:r[i]=[],n&&null!=n[i]&&(r[i]=r[i].concat(n[i]));return r}_ownParameters(e,n){if(function CT(t){return _T.test(t)||DT.test(t)||vT.test(t)&&!bT.test(t)}(e.toString()))return null;if(e.parameters&&e.parameters!==n.parameters)return e.parameters;const i=e.ctorParameters;if(i&&i!==n.ctorParameters){const a="function"==typeof i?i():i,l=a.map(u=>u&&u.type),c=a.map(u=>u&&ih(u.decorators));return this._zipTypesAndAnnotations(l,c)}const s=e.hasOwnProperty(fo)&&e[fo],o=this._reflect&&this._reflect.getOwnMetadata&&this._reflect.getOwnMetadata("design:paramtypes",e);return o||s?this._zipTypesAndAnnotations(o,s):dl(e.length)}parameters(e){if(!ul(e))return[];const n=mu(e);let r=this._ownParameters(e,n);return!r&&n!==Object&&(r=this.parameters(n)),r||[]}_ownAnnotations(e,n){if(e.annotations&&e.annotations!==n.annotations){let r=e.annotations;return"function"==typeof r&&r.annotations&&(r=r.annotations),r}return e.decorators&&e.decorators!==n.decorators?ih(e.decorators):e.hasOwnProperty(uo)?e[uo]:null}annotations(e){if(!ul(e))return[];const n=mu(e),r=this._ownAnnotations(e,n)||[];return(n!==Object?this.annotations(n):[]).concat(r)}_ownPropMetadata(e,n){if(e.propMetadata&&e.propMetadata!==n.propMetadata){let r=e.propMetadata;return"function"==typeof r&&r.propMetadata&&(r=r.propMetadata),r}if(e.propDecorators&&e.propDecorators!==n.propDecorators){const r=e.propDecorators,i={};return Object.keys(r).forEach(s=>{i[s]=ih(r[s])}),i}return e.hasOwnProperty(ho)?e[ho]:null}propMetadata(e){if(!ul(e))return{};const n=mu(e),r={};if(n!==Object){const s=this.propMetadata(n);Object.keys(s).forEach(o=>{r[o]=s[o]})}const i=this._ownPropMetadata(e,n);return i&&Object.keys(i).forEach(s=>{const o=[];r.hasOwnProperty(s)&&o.push(...r[s]),o.push(...i[s]),r[s]=o}),r}ownPropMetadata(e){return ul(e)&&this._ownPropMetadata(e,mu(e))||{}}hasLifecycleHook(e,n){return e instanceof nh&&n in e.prototype}}function ih(t){return t?t.map(e=>new(0,e.type.annotationCls)(...e.args?e.args:[])):[]}function mu(t){const e=t.prototype?Object.getPrototypeOf(t.prototype):null;return(e?e.constructor:null)||Object}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const Zr={},sh="__NG_DI_FLAG__",gu="ngTempTokenPath",MT=/\n/gm,n_="__source";let fl;function go(t){const e=fl;return fl=t,e}function AT(t,e=$.Default){if(void 0===fl)throw new D(-203,!1);return null===fl?d0(t,void 0,e):fl.get(t,e&$.Optional?null:void 0,e)}function b(t,e=$.Default){return(function pS(){return xf}()||AT)(F(t),e)}function r_(t){throw new D(202,!1)}function Fe(t,e=$.Default){return"number"!=typeof e&&(e=0|(e.optional&&8)|(e.host&&1)|(e.self&&2)|(e.skipSelf&&4)),b(t,e)}function oh(t){const e=[];for(let n=0;n<t.length;n++){const r=F(t[n]);if(Array.isArray(r)){if(0===r.length)throw new D(900,!1);let i,s=$.Default;for(let o=0;o<r.length;o++){const a=r[o],l=ST(a);"number"==typeof l?-1===l?i=a.token:s|=l:i=a}e.push(b(i,s))}else e.push(b(r))}return e}function hl(t,e){return t[sh]=e,t.prototype[sh]=e,t}function ST(t){return t[sh]}function TT(t,e,n,r){const i=t[gu];throw e[n_]&&i.unshift(e[n_]),t.message=function xT(t,e,n,r=null){t=t&&"\n"===t.charAt(0)&&"\u0275"==t.charAt(1)?t.slice(2):t;let i=oe(e);if(Array.isArray(e))i=e.map(oe).join(" -> ");else if("object"==typeof e){let s=[];for(let o in e)if(e.hasOwnProperty(o)){let a=e[o];s.push(o+":"+("string"==typeof a?JSON.stringify(a):oe(a)))}i=`{${s.join(", ")}}`}return`${n}${r?"("+r+")":""}[${i}]: ${t.replace(MT,"\n  ")}`}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */("\n"+t.message,i,n,r),t.ngTokenPath=i,t[gu]=null,t}const ah=hl(po("Inject",t=>({token:t})),-1),Xr=hl(po("Optional"),8),lh=hl(po("Self"),2),yo=hl(po("SkipSelf"),4),NT=hl(po("Host"),1);
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let i_=null;function pl(){return i_=i_||new ET}function yu(t){return s_(pl().parameters(t))}function s_(t){return t.map(e=>function OT(t){const e={token:null,attribute:null,host:!1,optional:!1,self:!1,skipSelf:!1};if(Array.isArray(t)&&t.length>0)for(let n=0;n<t.length;n++){const r=t[n];if(void 0===r)continue;const i=Object.getPrototypeOf(r);if(r instanceof Xr||"Optional"===i.ngMetadataName)e.optional=!0;else if(r instanceof yo||"SkipSelf"===i.ngMetadataName)e.skipSelf=!0;else if(r instanceof lh||"Self"===i.ngMetadataName)e.self=!0;else if(r instanceof NT||"Host"===i.ngMetadataName)e.host=!0;else if(r instanceof ah)e.token=r.token;else if(r instanceof pT){if(void 0===r.attributeName)throw new D(204,!1);e.attribute=r.attributeName}else e.token=r}else void 0===t||Array.isArray(t)&&0===t.length?e.token=null:e.token=t;return e}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(e))}function FT(t){const e=[],n=new Map;function r(i){let s=n.get(i);if(!s){const o=t(i);n.set(i,s=o.then(LT))}return s}return _o.forEach((i,s)=>{const o=[];i.templateUrl&&o.push(r(i.templateUrl).then(d=>{i.template=d}));const a=i.styleUrls,l=i.styles||(i.styles=[]),c=i.styles.length;a&&a.forEach((d,f)=>{l.push(""),o.push(r(d).then(h=>{l[c+f]=h,a.splice(a.indexOf(d),1),0==a.length&&(i.styleUrls=void 0)}))});const u=Promise.all(o).then(()=>function VT(t){ml.delete(t)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(s));e.push(u)}),function RT(){const t=_o;return _o=new Map,t}(),Promise.all(e).then(()=>{})}let _o=new Map;const ml=new Set;function o_(t){return!!(t.templateUrl&&!t.hasOwnProperty("template")||t.styleUrls&&t.styleUrls.length)}function LT(t){return"string"==typeof t?t:t.text()}const _u=new Map;let ch,vu,bu,a_=!0;function l_(t,e){(function BT(t,e,n){if(e&&e!==n&&a_)throw new Error(`Duplicate module registered for ${t} - ${oe(e)} vs ${oe(e.name)}`)})(e,_u.get(e)||null,t),_u.set(e,t)}function u_(){return void 0!==ch?ch:typeof document<"u"?document:void 0}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function uh(){if(void 0===vu&&(vu=null,fe.trustedTypes))try{vu=fe.trustedTypes.createPolicy("angular",{createHTML:t=>t,createScript:t=>t,createScriptURL:t=>t})}catch{}return vu}function vo(t){return uh()?.createHTML(t)||t}function dh(){if(void 0===bu&&(bu=null,fe.trustedTypes))try{bu=fe.trustedTypes.createPolicy("angular#unsafe-bypass",{createHTML:t=>t,createScript:t=>t,createScriptURL:t=>t})}catch{}return bu}function d_(t){return dh()?.createHTML(t)||t}function f_(t){return dh()?.createScript(t)||t}function h_(t){return dh()?.createScriptURL(t)||t}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class Hi{constructor(e){this.changingThisBreaksApplicationSecurity=e}toString(){return`SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity} (see https://g.co/ng/security#xss)`}}class UT extends Hi{getTypeName(){return"HTML"}}class zT extends Hi{getTypeName(){return"Style"}}class GT extends Hi{getTypeName(){return"Script"}}class WT extends Hi{getTypeName(){return"URL"}}class qT extends Hi{getTypeName(){return"ResourceURL"}}function _t(t){return t instanceof Hi?t.changingThisBreaksApplicationSecurity:t}function _n(t,e){const n=function KT(t){return t instanceof Hi&&t.getTypeName()||null}(t);if(null!=n&&n!==e){if("ResourceURL"===n&&"URL"===e)return!0;throw new Error(`Required a safe ${e}, got a ${n} (see https://g.co/ng/security#xss)`)}return n===e}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function p_(t){const e=new tx(t);return function nx(){try{return!!(new window.DOMParser).parseFromString(vo(""),"text/html")}catch{return!1}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */()?new ex(e):e}class ex{constructor(e){this.inertDocumentHelper=e}getInertBodyElement(e){e="<body><remove></remove>"+e;try{const n=(new window.DOMParser).parseFromString(vo(e),"text/html").body;return null===n?this.inertDocumentHelper.getInertBodyElement(e):(n.removeChild(n.firstChild),n)}catch{return null}}}class tx{constructor(e){if(this.defaultDoc=e,this.inertDocument=this.defaultDoc.implementation.createHTMLDocument("sanitization-inert"),null==this.inertDocument.body){const n=this.inertDocument.createElement("html");this.inertDocument.appendChild(n);const r=this.inertDocument.createElement("body");n.appendChild(r)}}getInertBodyElement(e){const n=this.inertDocument.createElement("template");if("content"in n)return n.innerHTML=vo(e),n;const r=this.inertDocument.createElement("body");return r.innerHTML=vo(e),this.defaultDoc.documentMode&&this.stripCustomNsAttrs(r),r}stripCustomNsAttrs(e){const n=e.attributes;for(let i=n.length-1;0<i;i--){const o=n.item(i).name;("xmlns:ns1"===o||0===o.indexOf("ns1:"))&&e.removeAttribute(o)}let r=e.firstChild;for(;r;)r.nodeType===Node.ELEMENT_NODE&&this.stripCustomNsAttrs(r),r=r.nextSibling}}const rx=/^(?:(?:https?|mailto|data|ftp|tel|file|sms):|[^&:/?#]*(?:[/?#]|$))/gi;function Du(t){return(t=String(t)).match(rx)?t:"unsafe:"+t}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Un(t){const e={};for(const n of t.split(","))e[n]=!0;return e}function gl(...t){const e={};for(const n of t)for(const r in n)n.hasOwnProperty(r)&&(e[r]=!0);return e}const m_=Un("area,br,col,hr,img,wbr"),g_=Un("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"),y_=Un("rp,rt"),ix=gl(y_,g_),sx=gl(g_,Un("address,article,aside,blockquote,caption,center,del,details,dialog,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,main,map,menu,nav,ol,pre,section,summary,table,ul")),ox=gl(y_,Un("a,abbr,acronym,audio,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,picture,q,ruby,rp,rt,s,samp,small,source,span,strike,strong,sub,sup,time,track,tt,u,var,video")),fh=gl(m_,sx,ox,ix),hh=Un("background,cite,href,itemtype,longdesc,poster,src,xlink:href"),ax=Un("abbr,accesskey,align,alt,autoplay,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,controls,coords,datetime,default,dir,download,face,headers,height,hidden,hreflang,hspace,ismap,itemscope,itemprop,kind,label,lang,language,loop,media,muted,nohref,nowrap,open,preload,rel,rev,role,rows,rowspan,rules,scope,scrolling,shape,size,sizes,span,srclang,srcset,start,summary,tabindex,target,title,translate,type,usemap,valign,value,vspace,width"),lx=Un("aria-activedescendant,aria-atomic,aria-autocomplete,aria-busy,aria-checked,aria-colcount,aria-colindex,aria-colspan,aria-controls,aria-current,aria-describedby,aria-details,aria-disabled,aria-dropeffect,aria-errormessage,aria-expanded,aria-flowto,aria-grabbed,aria-haspopup,aria-hidden,aria-invalid,aria-keyshortcuts,aria-label,aria-labelledby,aria-level,aria-live,aria-modal,aria-multiline,aria-multiselectable,aria-orientation,aria-owns,aria-placeholder,aria-posinset,aria-pressed,aria-readonly,aria-relevant,aria-required,aria-roledescription,aria-rowcount,aria-rowindex,aria-rowspan,aria-selected,aria-setsize,aria-sort,aria-valuemax,aria-valuemin,aria-valuenow,aria-valuetext"),__=gl(hh,ax,lx),cx=Un("script,style,template");class ux{constructor(){this.sanitizedSomething=!1,this.buf=[]}sanitizeChildren(e){let n=e.firstChild,r=!0;for(;n;)if(n.nodeType===Node.ELEMENT_NODE?r=this.startElement(n):n.nodeType===Node.TEXT_NODE?this.chars(n.nodeValue):this.sanitizedSomething=!0,r&&n.firstChild)n=n.firstChild;else for(;n;){n.nodeType===Node.ELEMENT_NODE&&this.endElement(n);let i=this.checkClobberedElement(n,n.nextSibling);if(i){n=i;break}n=this.checkClobberedElement(n,n.parentNode)}return this.buf.join("")}startElement(e){const n=e.nodeName.toLowerCase();if(!fh.hasOwnProperty(n))return this.sanitizedSomething=!0,!cx.hasOwnProperty(n);this.buf.push("<"),this.buf.push(n);const r=e.attributes;for(let i=0;i<r.length;i++){const s=r.item(i),o=s.name,a=o.toLowerCase();if(!__.hasOwnProperty(a)){this.sanitizedSomething=!0;continue}let l=s.value;hh[a]&&(l=Du(l)),this.buf.push(" ",o,'="',v_(l),'"')}return this.buf.push(">"),!0}endElement(e){const n=e.nodeName.toLowerCase();fh.hasOwnProperty(n)&&!m_.hasOwnProperty(n)&&(this.buf.push("</"),this.buf.push(n),this.buf.push(">"))}chars(e){this.buf.push(v_(e))}checkClobberedElement(e,n){if(n&&(e.compareDocumentPosition(n)&Node.DOCUMENT_POSITION_CONTAINED_BY)===Node.DOCUMENT_POSITION_CONTAINED_BY)throw new Error(`Failed to sanitize html because the element is clobbered: ${e.outerHTML}`);return n}}const dx=/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,fx=/([^\#-~ |!])/g;function v_(t){return t.replace(/&/g,"&amp;").replace(dx,function(e){return"&#"+(1024*(e.charCodeAt(0)-55296)+(e.charCodeAt(1)-56320)+65536)+";"}).replace(fx,function(e){return"&#"+e.charCodeAt(0)+";"}).replace(/</g,"&lt;").replace(/>/g,"&gt;")}let Cu;function b_(t,e){let n=null;try{Cu=Cu||p_(t);let r=e?String(e):"";n=Cu.getInertBodyElement(r);let i=5,s=r;do{if(0===i)throw new Error("Failed to sanitize html because the input is unstable");i--,r=s,s=n.innerHTML,n=Cu.getInertBodyElement(r)}while(r!==s);return vo((new ux).sanitizeChildren(ph(n)||n))}finally{if(n){const r=ph(n)||n;for(;r.firstChild;)r.removeChild(r.firstChild)}}}function ph(t){return"content"in t&&function hx(t){return t.nodeType===Node.ELEMENT_NODE&&"TEMPLATE"===t.nodeName}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(t)?t.content:null}var ke;
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function px(t){const e=yl();return e?d_(e.sanitize(ke.HTML,t)||""):_n(t,"HTML")?d_(_t(t)):b_(u_(),R(t))}function mx(t){const e=yl();return e?e.sanitize(ke.STYLE,t)||"":_n(t,"Style")?_t(t):R(t)}function D_(t){const e=yl();return e?e.sanitize(ke.URL,t)||"":_n(t,"URL")?_t(t):Du(R(t))}function C_(t){const e=yl();if(e)return h_(e.sanitize(ke.RESOURCE_URL,t)||"");if(_n(t,"ResourceURL"))return h_(_t(t));throw new D(904,!1)}function gx(t){const e=yl();if(e)return f_(e.sanitize(ke.SCRIPT,t)||"");if(_n(t,"Script"))return f_(_t(t));throw new D(905,!1)}function yx(t){return vo(t[0])}function _x(t){return function $T(t){return uh()?.createScriptURL(t)||t}(t[0])}function bx(t,e,n){return function vx(t,e){return"src"===e&&("embed"===t||"frame"===t||"iframe"===t||"media"===t||"script"===t)||"href"===e&&("base"===t||"link"===t)?C_:D_}(e,n)(t)}function yl(){const t=C();return t&&t[12]}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */!function(t){t[t.NONE=0]="NONE",t[t.HTML=1]="HTML",t[t.STYLE=2]="STYLE",t[t.SCRIPT=3]="SCRIPT",t[t.URL=4]="URL",t[t.RESOURCE_URL=5]="RESOURCE_URL"}(ke||(ke={}));const E_=new x("ENVIRONMENT_INITIALIZER"),w_=new x("INJECTOR",-1),M_=new x("INJECTOR_DEF_TYPES");
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class I_{get(e,n=Zr){if(n===Zr){const r=new Error(`NullInjectorError: No provider for ${oe(e)}!`);throw r.name="NullInjectorError",r}return n}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Dx(...t){return{\u0275providers:A_(!0,t)}}function A_(t,...e){const n=[],r=new Set;let i;return $n(e,s=>{const o=s;mh(o,n,[],r)&&(i||(i=[]),i.push(o))}),void 0!==i&&S_(i,n),n}function S_(t,e){for(let n=0;n<t.length;n++){const{ngModule:r,providers:i}=t[n];$n(i,s=>{e.push(s)})}}function mh(t,e,n,r){if(!(t=F(t)))return!1;let i=null,s=c0(t);const o=!s&&te(t);if(s||o){if(o&&!o.standalone)return!1;i=t}else{const l=t.ngModule;if(s=c0(l),!s)return!1;i=l}const a=r.has(i);if(o){if(a)return!1;if(r.add(i),o.dependencies){const l="function"==typeof o.dependencies?o.dependencies():o.dependencies;for(const c of l)mh(c,e,n,r)}}else{if(!s)return!1;{if(null!=s.imports&&!a){let c;r.add(i);try{$n(s.imports,u=>{mh(u,e,n,r)&&(c||(c=[]),c.push(u))})}finally{}void 0!==c&&S_(c,e)}if(!a){const c=Bi(i)||(()=>new i);e.push({provide:i,useFactory:c,deps:X},{provide:M_,useValue:i,multi:!0},{provide:E_,useValue:()=>b(i),multi:!0})}const l=s.providers;if(null!=l&&!a){$n(l,u=>{e.push(u)})}}}return i!==t&&void 0!==t.providers}const Cx=se({provide:String,useValue:se});function gh(t){return null!==t&&"object"==typeof t&&Cx in t}function T_(t){return!(!t||!t.useExisting)}function x_(t){return!(!t||!t.useFactory)}function $i(t){return"function"==typeof t}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const yh=new x("Set Injector scope."),Eu={},wx={};
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let _h;function wu(){return void 0===_h&&(_h=new I_),_h}class bo{}class N_ extends bo{constructor(e,n,r,i){super(),this.parent=n,this.source=r,this.scopes=i,this.records=new Map,this._ngOnDestroyHooks=new Set,this._onDestroyHooks=[],this._destroyed=!1,bh(e,o=>this.processProvider(o)),this.records.set(w_,Do(void 0,this)),i.has("environment")&&this.records.set(bo,Do(void 0,this));const s=this.records.get(yh);null!=s&&"string"==typeof s.value&&this.scopes.add(s.value),this.injectorDefTypes=new Set(this.get(M_.multi,X,$.Self))}get destroyed(){return this._destroyed}destroy(){this.assertNotDestroyed(),this._destroyed=!0;try{for(const e of this._ngOnDestroyHooks)e.ngOnDestroy();for(const e of this._onDestroyHooks)e()}finally{this.records.clear(),this._ngOnDestroyHooks.clear(),this.injectorDefTypes.clear(),this._onDestroyHooks.length=0}}onDestroy(e){this._onDestroyHooks.push(e)}runInContext(e){this.assertNotDestroyed();const n=go(this),r=xt(void 0);try{return e()}finally{go(n),xt(r)}}get(e,n=Zr,r=$.Default){this.assertNotDestroyed();const i=go(this),s=xt(void 0);try{if(!(r&$.SkipSelf)){let a=this.records.get(e);if(void 0===a){const l=function Tx(t){return"function"==typeof t||"object"==typeof t&&t instanceof x}(e)&&Kc(e);a=l&&this.injectableDefInScope(l)?Do(vh(e),Eu):null,this.records.set(e,a)}if(null!=a)return this.hydrate(e,a)}const o=r&$.Self?wu():this.parent;return n=r&$.Optional&&n===Zr?null:n,o.get(e,n)}catch(o){if("NullInjectorError"===o.name){if((o[gu]=o[gu]||[]).unshift(oe(e)),i)throw o;return TT(o,e,"R3InjectorError",this.source)}throw o}finally{xt(s),go(i)}}resolveInjectorInitializers(){const e=go(this),n=xt(void 0);try{const r=this.get(E_.multi,X,$.Self);for(const i of r)i()}finally{go(e),xt(n)}}toString(){const e=[],n=this.records;for(const r of n.keys())e.push(oe(r));return`R3Injector[${e.join(", ")}]`}assertNotDestroyed(){if(this._destroyed)throw new D(205,!1)}processProvider(e){let n=$i(e=F(e))?e:F(e&&e.provide);const r=function Ix(t){if(gh(t))return Do(void 0,t.useValue);return Do(O_(t),Eu)}(e);if($i(e)||!0!==e.multi){this.records.get(n)}else{let i=this.records.get(n);i||(i=Do(void 0,Eu,!0),i.factory=()=>oh(i.multi),this.records.set(n,i)),n=e,i.multi.push(e)}this.records.set(n,r)}hydrate(e,n){return n.value===Eu&&(n.value=wx,n.value=n.factory()),"object"==typeof n.value&&n.value&&function Sx(t){return null!==t&&"object"==typeof t&&"function"==typeof t.ngOnDestroy}(n.value)&&this._ngOnDestroyHooks.add(n.value),n.value}injectableDefInScope(e){if(!e.providedIn)return!1;const n=F(e.providedIn);return"string"==typeof n?"any"===n||this.scopes.has(n):this.injectorDefTypes.has(n)}}function vh(t){const e=Kc(t),n=null!==e?e.factory:Bi(t);if(null!==n)return n;if(t instanceof x)throw new D(204,!1);if(t instanceof Function)return function Mx(t){const e=t.length;if(e>0){dl(e,"?");throw new D(204,!1)}const n=function dS(t){const e=t&&(t[Yc]||t[u0]);if(e){const n=function fS(t){if(t.hasOwnProperty("name"))return t.name;const e=(""+t).match(/^function\s*([^\s(]+)/);return null===e?"":e[1]}(t);return console.warn(`DEPRECATED: DI is instantiating a token "${n}" that inherits its @Injectable decorator but does not provide one itself.\nThis will become an error in a future version of Angular. Please add @Injectable() to the "${n}" class.`),e}return null}(t);return null!==n?()=>n.factory(t):()=>new t}(t);throw new D(204,!1)}function O_(t,e,n){let r;if($i(t)){const i=F(t);return Bi(i)||vh(i)}if(gh(t))r=()=>F(t.useValue);else if(x_(t))r=()=>t.useFactory(...oh(t.deps||[]));else if(T_(t))r=()=>b(F(t.useExisting));else{const i=F(t&&(t.useClass||t.provide));if(!function Ax(t){return!!t.deps}(t))return Bi(i)||vh(i);r=()=>new i(...oh(t.deps))}return r}function Do(t,e,n=!1){return{factory:t,value:e,multi:n?[]:void 0}}function xx(t){return!!t.\u0275providers}function bh(t,e){for(const n of t)Array.isArray(n)?bh(n,e):xx(n)?bh(n.\u0275providers,e):e(n)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class F_{}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const k_="ngComponent";class Fx{resolveComponentFactory(e){throw function Ox(t){const e=Error(`No component factory found for ${oe(t)}. Did you add it to @NgModule.entryComponents?`);return e[k_]=t,e}(e)}}class _l{}function Co(t,e){return new Ce(kt(t,e))}_l.NULL=new Fx;class Ce{constructor(e){this.nativeElement=e}}function Rx(t){return t instanceof Ce?t.nativeElement:t}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */Ce.__NG_ELEMENT_ID__=
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function kx(){return Co(Ae(),C())};new x("Renderer2Interceptor");class vl{}class zn{}zn.__NG_ELEMENT_ID__=()=>function Px(){const t=C(),n=mt(Ae().index,t);return(ot(n)?n:t)[j]}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */();class Dh{}Dh.\u0275prov=w({token:Dh,providedIn:"root",factory:()=>null});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class Eo{constructor(e){this.full=e,this.major=e.split(".")[0],this.minor=e.split(".")[1],this.patch=e.split(".").slice(2).join(".")}}const Lx=new Eo("14.2.10"),Ch={};
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const Ih="ngOriginalError";function Ah(t){return t[Ih]}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class Gn{constructor(){this._console=console}handleError(e){const n=this._findOriginalError(e);this._console.error("ERROR",e),n&&this._console.error("ORIGINAL ERROR",n)}_findOriginalError(e){let n=e&&Ah(e);for(;n&&Ah(n);)n=Ah(n);return n||null}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const $x=/^>|^->|<!--|-->|--!>|<!-$/g,Ux=/(<|>)/;function B_(t){return t.replace($x,e=>e.replace(Ux,"\u200b$1\u200b"))}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const Sh=new Map;let Yx=0;const xh="__ngContext__";function Ue(t,e){ot(e)?(t[xh]=e[20],function Zx(t){Sh.set(t[20],t)}(e)):t[xh]=e}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function o1(t){return t.ownerDocument.defaultView}function a1(t){return t.ownerDocument}function l1(t){return t.ownerDocument.body}function Wn(t){return t instanceof Function?t():t}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
var qn;
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
let Nh;function Oh(t,e){return Nh(t,e)}!function(t){t[t.Important=1]="Important",t[t.DashCase=2]="DashCase"}(qn||(qn={}));
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function Dl(t){const e=t[3];return Qt(e)?e[3]:e}function Fh(t){return K_(t[13])}function kh(t){return K_(t[4])}function K_(t){for(;null!==t&&!Qt(t);)t=t[4];return t}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Mo(t,e,n,r,i){if(null!=r){let s,o=!1;Qt(r)?s=r:ot(r)&&(o=!0,r=r[0]);const a=we(r);0===t&&null!==n?null==i?ev(e,n,a):Ui(e,n,a,i||null,!0):1===t&&null!==n?Ui(e,n,a,i||null,!0):2===t?av(e,a,o):3===t&&e.destroyNode(a),null!=s&&function A1(t,e,n,r,i){const s=n[7],o=we(n);s!==o&&Mo(e,t,r,s,i);for(let a=10;a<n.length;a++){const l=n[a];Cl(l[1],l,t,e,r,s)}}(e,t,s,n,i)}}function Rh(t,e){return t.createText(e)}function Y_(t,e,n){t.setValue(e,n)}function m1(t,e){return t.createComment(B_(e))}function Ph(t,e,n){return t.createElement(e,n)}function b1(t,e,n,r){const i=10+r,s=n.length;r>0&&(n[i-1][4]=e),r<s-10?(e[4]=n[i],X0(n,10+r,e)):(n.push(e),e[4]=null),e[3]=n;const o=e[17];null!==o&&n!==o&&function D1(t,e){const n=t[9],i=e[3][3][16];e[16]!==i&&(t[2]=!0),null===n?t[9]=[e]:n.push(e)}(o,e);const a=e[19];null!==a&&a.insertView(t),e[2]|=64}function Q_(t,e){const n=t[9],r=n.indexOf(e),i=e[3];512&e[2]&&(e[2]&=-513,Hf(i,-1)),n.splice(r,1)}function Lh(t,e){if(t.length<=10)return;const n=10+e,r=t[n];if(r){const i=r[17];null!==i&&i!==t&&Q_(i,r),e>0&&(t[n-1][4]=r[4]);const s=pu(t,10+e);!function g1(t,e){Cl(t,e,e[j],2,null,null),e[0]=null,e[6]=null}(r[1],r);const o=s[19];null!==o&&o.detachView(s[1]),r[3]=null,r[4]=null,r[2]&=-65}return r}function Z_(t,e){if(!(128&e[2])){const n=e[j];n.destroyNode&&Cl(t,e,n,3,null,null),function v1(t){let e=t[13];if(!e)return Vh(t[1],t);for(;e;){let n=null;if(ot(e))n=e[13];else{const r=e[10];r&&(n=r)}if(!n){for(;e&&!e[4]&&e!==t;)ot(e)&&Vh(e[1],e),e=e[3];null===e&&(e=t),ot(e)&&Vh(e[1],e),n=e&&e[4]}e=n}}(e)}}function Vh(t,e){if(!(128&e[2])){e[2]&=-65,e[2]|=128,function E1(t,e){let n;if(null!=t&&null!=(n=t.destroyHooks))for(let r=0;r<n.length;r+=2){const i=e[n[r]];if(!(i instanceof il)){const s=n[r+1];if(Array.isArray(s))for(let o=0;o<s.length;o+=2){const a=i[s[o]],l=s[o+1];Ft(4,a,l);try{l.call(a)}finally{Ft(5,a,l)}}else{Ft(4,i,s);try{s.call(i)}finally{Ft(5,i,s)}}}}}(t,e),function C1(t,e){const n=t.cleanup,r=e[7];let i=-1;if(null!==n)for(let s=0;s<n.length-1;s+=2)if("string"==typeof n[s]){const o=n[s+1],a="function"==typeof o?o(e):we(e[o]),l=r[i=n[s+2]],c=n[s+3];"boolean"==typeof c?a.removeEventListener(n[s],l,c):c>=0?r[i=c]():r[i=-c].unsubscribe(),s+=2}else{const o=r[i=n[s+1]];n[s].call(o)}if(null!==r){for(let s=i+1;s<r.length;s++){(0,r[s])()}e[7]=null}}(t,e),1===e[1].type&&e[j].destroy();const n=e[17];if(null!==n&&Qt(e[3])){n!==e[3]&&Q_(n,e);const r=e[19];null!==r&&r.detachView(t)}!function Xx(t){Sh.delete(t[20])}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(e)}}function X_(t,e,n){return J_(t,e.parent,n)}function J_(t,e,n){let r=e;for(;null!==r&&40&r.type;)r=(e=r).parent;if(null===r)return n[0];if(2&r.flags){const i=t.data[r.directiveStart].encapsulation;if(i===mn.None||i===mn.Emulated)return null}return kt(r,n)}function Ui(t,e,n,r,i){t.insertBefore(e,n,r,i)}function ev(t,e,n){t.appendChild(e,n)}function tv(t,e,n,r,i){null!==r?Ui(t,e,n,r,i):ev(t,e,n)}function Mu(t,e){return t.parentNode(e)}function nv(t,e,n){return iv(t,e,n)}function rv(t,e,n){return 40&t.type?kt(t,n):null}let Bh,iv=rv;function sv(t,e){iv=t,Bh=e}function Iu(t,e,n,r){const i=X_(t,r,e),s=e[j],a=nv(r.parent||e[6],r,e);if(null!=i)if(Array.isArray(n))for(let l=0;l<n.length;l++)tv(s,i,n[l],a,!1);else tv(s,i,n,a,!1);void 0!==Bh&&Bh(s,r,e,n,i)}function Au(t,e){if(null!==e){const n=e.type;if(3&n)return kt(e,t);if(4&n)return jh(-1,t[e.index]);if(8&n){const r=e.child;if(null!==r)return Au(t,r);{const i=t[e.index];return Qt(i)?jh(-1,i):we(i)}}if(32&n)return Oh(e,t)()||we(t[e.index]);{const r=ov(t,e);if(null!==r){if(Array.isArray(r))return r[0];return Au(Dl(t[16]),r)}return Au(t,e.next)}}return null}function ov(t,e){if(null!==e){const r=t[16][6],i=e.projection;return r.projection[i]}return null}function jh(t,e){const n=10+t+1;if(n<e.length){const r=e[n],i=r[1].firstChild;if(null!==i)return Au(r,i)}return e[7]}function av(t,e,n){const r=Mu(t,e);r&&function w1(t,e,n,r){t.removeChild(e,n,r)}(t,r,e,n)}function Hh(t,e,n,r,i,s,o){for(;null!=n;){const a=r[n.index],l=n.type;if(o&&0===e&&(a&&Ue(we(a),r),n.flags|=4),64!=(64&n.flags))if(8&l)Hh(t,e,n.child,r,i,s,!1),Mo(e,t,i,a,s);else if(32&l){const c=Oh(n,r);let u;for(;u=c();)Mo(e,t,i,u,s);Mo(e,t,i,a,s)}else 16&l?lv(t,e,r,n,i,s):Mo(e,t,i,a,s);n=o?n.projectionNext:n.next}}function Cl(t,e,n,r,i,s){Hh(n,r,t.firstChild,e,i,s,!1)}function lv(t,e,n,r,i,s){const o=n[16],l=o[6].projection[r.projection];if(Array.isArray(l))for(let c=0;c<l.length;c++){Mo(e,t,i,l[c],s)}else{Hh(t,e,l,o[3],i,s,!0)}}function cv(t,e,n){t.setAttribute(e,"style",n)}function $h(t,e,n){""===n?t.removeAttribute(e,"class"):t.setAttribute(e,"class",n)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function uv(t,e,n){let r=t.length;for(;;){const i=t.indexOf(e,n);if(-1===i)return i;if(0===i||t.charCodeAt(i-1)<=32){const s=e.length;if(i+s===r||t.charCodeAt(i+s)<=32)return i}n=i+1}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const dv="ng-template";function T1(t,e,n){let r=0;for(;r<t.length;){let i=t[r++];if(n&&"class"===i){if(i=t[r],-1!==uv(i.toLowerCase(),e,0))return!0}else if(1===i){for(;r<t.length&&"string"==typeof(i=t[r++]);)if(i.toLowerCase()===e)return!0;return!1}}return!1}function fv(t){return 4===t.type&&t.value!==dv}function x1(t,e,n){return e===(4!==t.type||n?t.value:dv)}function N1(t,e,n){let r=4;const i=t.attrs||[],s=function k1(t){for(let e=0;e<t.length;e++){if(P0(t[e]))return e}return t.length}(i);let o=!1;for(let a=0;a<e.length;a++){const l=e[a];if("number"!=typeof l){if(!o)if(4&r){if(r=2|1&r,""!==l&&!x1(t,l,n)||""===l&&1===e.length){if(Jt(r))return!1;o=!0}}else{const c=8&r?l:e[++a];if(8&r&&null!==t.attrs){if(!T1(t.attrs,c,n)){if(Jt(r))return!1;o=!0}continue}const d=O1(8&r?"class":l,i,fv(t),n);if(-1===d){if(Jt(r))return!1;o=!0;continue}if(""!==c){let f;f=d>s?"":i[d+1].toLowerCase();const h=8&r?f:null;if(h&&-1!==uv(h,c,0)||2&r&&c!==f){if(Jt(r))return!1;o=!0}}}}else{if(!o&&!Jt(r)&&!Jt(l))return!1;if(o&&Jt(l))continue;o=!1,r=l|1&r}}return Jt(r)||o}function Jt(t){return 0==(1&t)}function O1(t,e,n,r){if(null===e)return-1;let i=0;if(r||!n){let s=!1;for(;i<e.length;){const o=e[i];if(o===t)return i;if(3===o||6===o)s=!0;else{if(1===o||2===o){let a=e[++i];for(;"string"==typeof a;)a=e[++i];continue}if(4===o)break;if(0===o){i+=4;continue}}i+=s?1:2}return-1}return function R1(t,e){let n=t.indexOf(4);if(n>-1)for(n++;n<t.length;){const r=t[n];if("number"==typeof r)return-1;if(r===e)return n;n++}return-1}(e,t)}function hv(t,e,n=!1){for(let r=0;r<e.length;r++)if(N1(t,e[r],n))return!0;return!1}function P1(t,e){e:for(let n=0;n<e.length;n++){const r=e[n];if(t.length===r.length){for(let i=0;i<t.length;i++)if(t[i]!==r[i])continue e;return!0}}return!1}function pv(t,e){return t?":not("+e.trim()+")":e}function L1(t){let e=t[0],n=1,r=2,i="",s=!1;for(;n<t.length;){let o=t[n];if("string"==typeof o)if(2&r){const a=t[++n];i+="["+o+(a.length>0?'="'+a+'"':"")+"]"}else 8&r?i+="."+o:4&r&&(i+=" "+o);else""!==i&&!Jt(o)&&(e+=pv(s,i),i=""),r=o,s=s||!Jt(r);n++}return""!==i&&(e+=pv(s,i)),e}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const P={};
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function vt(t){mv(z(),C(),Ze()+t,!1)}function mv(t,e,n,r){if(!r)if(3==(3&e[2])){const s=t.preOrderCheckHooks;null!==s&&su(e,s,n)}else{const s=t.preOrderHooks;null!==s&&ou(e,s,0,n)}Kr(n)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const gv={\u0275\u0275defineInjectable:w,\u0275\u0275defineInjector:q,\u0275\u0275inject:b,\u0275\u0275invalidFactoryDep:r_,resolveForwardRef:F};
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function j1(t,e){let n=null,r=null;t.hasOwnProperty(Yc)||Object.defineProperty(t,Yc,{get:()=>(null===n&&(n=Se().compileInjectable(gv,`ng:///${t.name}/\u0275prov.js`,function z1(t,e){const n=e||{providedIn:null},r={name:t.name,type:t,typeArgumentCount:0,providedIn:n.providedIn};return(yv(n)||_v(n))&&void 0!==n.deps&&(r.deps=s_(n.deps)),yv(n)?r.useClass=n.useClass:function $1(t){return H1 in t}(n)?r.useValue=n.useValue:_v(n)?r.useFactory=n.useFactory:function U1(t){return void 0!==t.useExisting}(n)&&(r.useExisting=n.useExisting),r
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */}(t,e))),n)}),t.hasOwnProperty(Bn)||Object.defineProperty(t,Bn,{get:()=>{if(null===r){const i=Se();r=i.compileFactory(gv,`ng:///${t.name}/\u0275fac.js`,{name:t.name,type:t,typeArgumentCount:0,deps:yu(t),target:i.FactoryTarget.Injectable})}return r},configurable:!0})}const H1=se({provide:String,useValue:se});function yv(t){return void 0!==t.useClass}function _v(t){return void 0!==t.useFactory}cl("Injectable",void 0,void 0,void 0,(t,e)=>j1(t,e));
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function vv(t,e=null,n=null,r){const i=bv(t,e,n,r);return i.resolveInjectorInitializers(),i}function bv(t,e=null,n=null,r,i=new Set){const s=[n||X,Dx(t)];return r=r||("object"==typeof t?void 0:oe(t)),new N_(s,e||wu(),r||null,i)
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */}class Ve{static create(e,n){if(Array.isArray(e))return vv({name:""},n,e,"");{const r=e.name??"";return vv({name:r},e.parent,e.providers,r)}}}function Uh(t){if(t.length>1){return" ("+
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function G1(t){const e=[];for(let n=0;n<t.length;++n){if(e.indexOf(t[n])>-1)return e.push(t[n]),e;e.push(t[n])}return e}(t.slice().reverse()).map(r=>oe(r.token)).join(" -> ")+")"}return""}function zh(t,e,n,r){const i=[e],s=n(i),o=r?function Hx(t,e){const n=`${t} caused by: ${e instanceof Error?e.message:e}`,r=Error(n);return r[Ih]=e,r}(s,r):Error(s);return o.addKey=W1,o.keys=i,o.injectors=[t],o.constructResolvingMessage=n,o[Ih]=r,o}function W1(t,e){this.injectors.push(t),this.keys.push(e),this.message=this.constructResolvingMessage(this.keys)}function Dv(t,e){const n=[];for(let r=0,i=e.length;r<i;r++){const s=e[r];s&&0!=s.length?n.push(s.map(oe).join(" ")):n.push("?")}return Error("Cannot resolve all parameters for '"+oe(t)+"'("+n.join(", ")+"). Make sure that all the parameters are decorated with Inject or have valid type annotations and that '"+oe(t)+"' is decorated with Injectable.")}function X1(t,e){return Error(`Cannot mix multi providers and regular providers, got: ${t} ${e}`)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */Ve.THROW_IF_NOT_FOUND=Zr,Ve.NULL=new I_,Ve.\u0275prov=w({token:Ve,providedIn:"any",factory:()=>b(w_)}),Ve.__NG_ELEMENT_ID__=-1;class Jr{constructor(e,n){if(this.token=e,this.id=n,!e)throw new D(208,!1);this.displayName=oe(this.token)}static get(e){return Cv.get(F(e))}static get numberOfKeys(){return Cv.numberOfKeys}}const Cv=new class J1{constructor(){this._allKeys=new Map}get(e){if(e instanceof Jr)return e;if(this._allKeys.has(e))return this._allKeys.get(e);const n=new Jr(e,Jr.numberOfKeys);return this._allKeys.set(e,n),n}get numberOfKeys(){return this._allKeys.size}};
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class Su{constructor(e,n,r){this.key=e,this.optional=n,this.visibility=r}static fromKey(e){return new Su(e,!1,null)}}const eN=[];class Ev{constructor(e,n,r){this.key=e,this.resolvedFactories=n,this.multiProvider=r,this.resolvedFactory=this.resolvedFactories[0]}}class tN{constructor(e,n){this.factory=e,this.dependencies=n}}function nN(t){let e,n;if(t.useClass){const r=F(t.useClass);e=pl().factory(r),n=Mv(r)}else t.useExisting?(e=r=>r,n=[Su.fromKey(Jr.get(t.useExisting))]):t.useFactory?(e=t.useFactory,n=function oN(t,e){if(e){const n=e.map(r=>[r]);return e.map(r=>Iv(t,r,n))}return Mv(t)}(t.useFactory,t.deps)):(e=()=>t.useValue,n=eN);return new tN(e,n)}function rN(t){return new Ev(Jr.get(t.provide),[nN(t)],t.multi||!1)}function iN(t){const r=function sN(t,e){for(let n=0;n<t.length;n++){const r=t[n],i=e.get(r.key.id);if(i){if(r.multiProvider!==i.multiProvider)throw X1(i,r);if(r.multiProvider)for(let s=0;s<r.resolvedFactories.length;s++)i.resolvedFactories.push(r.resolvedFactories[s]);else e.set(r.key.id,r)}else{let s;s=r.multiProvider?new Ev(r.key,r.resolvedFactories.slice(),r.multiProvider):r,e.set(r.key.id,s)}}return e}(wv(t,[]).map(rN),new Map);return Array.from(r.values())}function wv(t,e){return t.forEach(n=>{if(n instanceof nh)e.push({provide:n,useClass:n});else if(n&&"object"==typeof n&&void 0!==n.provide)e.push(n);else{if(!Array.isArray(n))throw function Q1(t){return Error(`Invalid provider - only instances of Provider and Type are allowed, got: ${t}`)}(n);wv(n,e)}}),e}function Mv(t){const e=pl().parameters(t);if(!e)return[];if(e.some(n=>null==n))throw Dv(t,e);return e.map(n=>Iv(t,n,e))}function Iv(t,e,n){let r=null,i=!1;if(!Array.isArray(e))return Gh(e instanceof ah?e.token:e,i,null);let s=null;for(let o=0;o<e.length;++o){const a=e[o];a instanceof nh?r=a:a instanceof ah?r=a.token:a instanceof Xr?i=!0:a instanceof lh||a instanceof yo?s=a:a instanceof x&&(r=a)}if(r=F(r),null!=r)return Gh(r,i,s);throw Dv(t,n)}function Gh(t,e,n){return new Su(Jr.get(t),e,n)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const El={};class wl{static resolve(e){return iN(e)}static resolveAndCreate(e,n){const r=wl.resolve(e);return wl.fromResolvedProviders(r,n)}static fromResolvedProviders(e,n){return new Io(e,n)}}class Io{constructor(e,n){this._constructionCounter=0,this._providers=e,this.parent=n||null;const r=e.length;this.keyIds=[],this.objs=[];for(let i=0;i<r;i++)this.keyIds[i]=e[i].key.id,this.objs[i]=El}get(e,n=Zr){return this._getByKey(Jr.get(e),null,n)}resolveAndCreateChild(e){const n=wl.resolve(e);return this.createChildFromResolved(n)}createChildFromResolved(e){const n=new Io(e);return n.parent=this,n}resolveAndInstantiate(e){return this.instantiateResolved(wl.resolve([e])[0])}instantiateResolved(e){return this._instantiateProvider(e)}getProviderAtIndex(e){if(e<0||e>=this._providers.length)throw function Z1(t){return Error(`Index ${t} is out-of-bounds.`)}(e);return this._providers[e]}_new(e){if(this._constructionCounter++>this._getMaxNumberOfObjects())throw function K1(t,e){return zh(t,e,function(n){return`Cannot instantiate cyclic dependency!${Uh(n)}`})}(this,e.key);return this._instantiateProvider(e)}_getMaxNumberOfObjects(){return this.objs.length}_instantiateProvider(e){if(e.multiProvider){const n=[];for(let r=0;r<e.resolvedFactories.length;++r)n[r]=this._instantiate(e,e.resolvedFactories[r]);return n}return this._instantiate(e,e.resolvedFactories[0])}_instantiate(e,n){const r=n.factory;let i,s;try{i=n.dependencies.map(o=>this._getByReflectiveDependency(o))}catch(o){throw o.addKey&&o.addKey(this,e.key),o}try{s=r(...i)}catch(o){throw function Y1(t,e,n,r){return zh(t,r,function(i){const s=oe(i[0].token);return`${e.message}: Error during instantiation of ${s}!${Uh(i)}.`},e)}(this,o,o.stack,e.key)}return s}_getByReflectiveDependency(e){return this._getByKey(e.key,e.visibility,e.optional?null:Zr)}_getByKey(e,n,r){return e===Io.INJECTOR_KEY?this:n instanceof lh?this._getByKeySelf(e,r):this._getByKeyDefault(e,r,n)}_getObjByKeyId(e){for(let n=0;n<this.keyIds.length;n++)if(this.keyIds[n]===e)return this.objs[n]===El&&(this.objs[n]=this._new(this._providers[n])),this.objs[n];return El}_throwOrNull(e,n){if(n!==Zr)return n;throw function q1(t,e){return zh(t,e,function(n){return`No provider for ${oe(n[0].token)}!${Uh(n)}`})}(this,e)}_getByKeySelf(e,n){const r=this._getObjByKeyId(e.id);return r!==El?r:this._throwOrNull(e,n)}_getByKeyDefault(e,n,r){let i;for(i=r instanceof yo?this.parent:this;i instanceof Io;){const s=i,o=s._getObjByKeyId(e.id);if(o!==El)return o;i=s.parent}return null!==i?i.get(e.token,n):this._throwOrNull(e,n)}get displayName(){return`ReflectiveInjector(providers: [${function aN(t,e){const n=[];for(let r=0;r<t._providers.length;++r)n[r]=e(t.getProviderAtIndex(r));return n}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(this,n=>' "'+n.key.displayName+'" ').join(", ")}])`}toString(){return this.displayName}}function v(t,e=$.Default){const n=C();if(null===n)return b(t,e);return z0(Ae(),n,F(t),e)}function Av(){throw new Error("invalid")}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function Tu(t,e){return t<<17|e<<2}function en(t){return t>>17&32767}function Tv(t){return 2==(2&t)}function Wh(t){return 2|t}function Kn(t){return(131068&t)>>2}function qh(t,e){return-131069&t|e<<2}function xv(t){return 1==(1&t)}function Kh(t){return 1|t}Io.INJECTOR_KEY=Jr.get(Ve);function Vv(t,e){const n=t.contentQueries;if(null!==n)for(let r=0;r<n.length;r+=2){const i=n[r],s=n[r+1];if(-1!==s){const o=t.data[s];Wf(i),o.contentQueries(2,e[s],s)}}}function Ou(t,e,n,r,i,s,o,a,l,c,u){const d=e.blueprint.slice();return d[0]=i,d[2]=76|r,(null!==u||t&&1024&t[2])&&(d[2]|=1024),C0(d),d[3]=d[15]=t,d[8]=n,d[10]=o||t&&t[10],d[j]=a||t&&t[j],d[12]=l||t&&t[12]||null,d[9]=c||t&&t[9]||null,d[6]=s,d[20]=function Qx(){return Yx++}(),d[21]=u,d[16]=2==e.type?t[16]:d,d}function Ao(t,e,n,r,i){let s=t.data[e];if(null===s)s=np(t,e,n,r,i),function US(){return k.lFrame.inI18n}()&&(s.flags|=64);else if(64&s.type){s.type=n,s.value=r,s.attrs=i;const o=rl();s.injectorIndex=null===o?-1:o.injectorIndex}return gn(s,!0),s}function np(t,e,n,r,i){const s=M0(),o=$f(),a=o?s:s&&s.parent,l=t.data[e]=function EN(t,e,n,r,i,s){let o=e?e.injectorIndex:-1;return{type:n,index:r,insertBeforeIndex:null,injectorIndex:o,directiveStart:-1,directiveEnd:-1,directiveStylingLast:-1,propertyBindings:null,flags:0,providerIndexes:0,value:i,attrs:s,mergedAttrs:null,localNames:null,initialInputs:void 0,inputs:null,outputs:null,tViews:null,next:null,projectionNext:null,child:null,parent:e,projection:null,styles:null,stylesWithoutHost:null,residualStyles:void 0,classes:null,classesWithoutHost:null,residualClasses:void 0,classBindings:0,styleBindings:0}}(0,a,n,e,r,i);return null===t.firstChild&&(t.firstChild=l),null!==s&&(o?null==s.child&&null!==l.parent&&(s.child=l):null===s.next&&(s.next=l)),l}function So(t,e,n,r){if(0===n)return-1;const i=e.length;for(let s=0;s<n;s++)e.push(r),t.blueprint.push(r),t.data.push(null);return i}function rp(t,e,n){qf(e);try{const r=t.viewQuery;null!==r&&dp(1,r,n);const i=t.template;null!==i&&Bv(t,e,i,1,n),t.firstCreatePass&&(t.firstCreatePass=!1),t.staticContentQueries&&Vv(t,e),t.staticViewQueries&&dp(2,t.viewQuery,n);const s=t.components;null!==s&&function bN(t,e){for(let n=0;n<e.length;n++)BN(t,e[n])}(e,s)}catch(r){throw t.firstCreatePass&&(t.incompleteFirstPass=!0,t.firstCreatePass=!1),r}finally{e[2]&=-5,Kf()}}function Fu(t,e,n,r){const i=e[2];if(128==(128&i))return;qf(e);try{C0(e),A0(t.bindingStartIndex),null!==n&&Bv(t,e,n,2,r);const o=3==(3&i);if(o){const c=t.preOrderCheckHooks;null!==c&&su(e,c,null)}else{const c=t.preOrderHooks;null!==c&&ou(e,c,0,null),Yf(e,0)}if(function LN(t){for(let e=Fh(t);null!==e;e=kh(e)){if(!e[2])continue;const n=e[9];for(let r=0;r<n.length;r++){const i=n[r],s=i[3];0==(512&i[2])&&Hf(s,1),i[2]|=512}}}(e),function PN(t){for(let e=Fh(t);null!==e;e=kh(e))for(let n=10;n<e.length;n++){const r=e[n],i=r[1];ru(r)&&Fu(i,r,i.template,r[8])}}(e),null!==t.contentQueries&&Vv(t,e),o){const c=t.contentCheckHooks;null!==c&&su(e,c)}else{const c=t.contentHooks;null!==c&&ou(e,c,1),Yf(e,1)}!
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function _N(t,e){const n=t.hostBindingOpCodes;if(null!==n)try{for(let r=0;r<n.length;r++){const i=n[r];if(i<0)Kr(~i);else{const s=i,o=n[++r],a=n[++r];zS(o,s),a(2,e[s])}}}finally{Kr(-1)}}(t,e);const a=t.components;null!==a&&function vN(t,e){for(let n=0;n<e.length;n++)VN(t,e[n])}(e,a);const l=t.viewQuery;if(null!==l&&dp(2,l,r),o){const c=t.viewCheckHooks;null!==c&&su(e,c)}else{const c=t.viewHooks;null!==c&&ou(e,c,2),Yf(e,2)}!0===t.firstUpdatePass&&(t.firstUpdatePass=!1),e[2]&=-41,512&e[2]&&(e[2]&=-513,Hf(e[3],-1))}finally{Kf()}}function Bv(t,e,n,r,i){const s=Ze(),o=2&r;try{Kr(-1),o&&e.length>22&&mv(t,e,22,!1),Ft(o?2:0,i),n(r,i)}finally{Kr(s),Ft(o?3:1,i)}}function jv(t,e,n){if(Rf(e)){const r=e.directiveStart,i=e.directiveEnd;for(let s=r;s<i;s++){const o=t.data[s];o.contentQueries&&o.contentQueries(1,n[s],s)}}}function ip(t,e,n){!w0()||(function SN(t,e,n,r){const i=n.directiveStart,s=n.directiveEnd;t.firstCreatePass||ol(n,e),Ue(r,e);const o=n.initialInputs;for(let a=i;a<s;a++){const l=t.data[a],c=Zt(l);c&&FN(e,n,l);const u=al(e,t,a,n);if(Ue(u,e),null!==o&&kN(e,a-i,u,l,n,o),c){mt(n.index,e)[8]=u}}}(t,e,n,kt(n,e)),128==(128&n.flags)&&function TN(t,e,n){const r=n.directiveStart,i=n.directiveEnd,s=n.index,o=function GS(){return k.lFrame.currentDirectiveIndex}();try{Kr(s);for(let a=r;a<i;a++){const l=t.data[a],c=e[a];zf(a),(null!==l.hostBindings||0!==l.hostVars||null!==l.hostAttrs)&&qv(l,c)}}finally{Kr(-1),zf(o)}}(t,e,n))}function sp(t,e,n=kt){const r=e.localNames;if(null!==r){let i=e.index+1;for(let s=0;s<r.length;s+=2){const o=r[s+1],a=-1===o?n(e,t):t[o];t[i++]=a}}}function Hv(t){const e=t.tView;return null===e||e.incompleteFirstPass?t.tView=op(1,null,t.template,t.decls,t.vars,t.directiveDefs,t.pipeDefs,t.viewQuery,t.schemas,t.consts):e}function op(t,e,n,r,i,s,o,a,l,c){const u=22+r,d=u+i,f=function DN(t,e){const n=[];for(let r=0;r<e;r++)n.push(r<t?null:P);return n}(u,d),h="function"==typeof c?c():c;return f[1]={type:t,blueprint:f,template:n,queries:null,viewQuery:a,declTNode:e,data:f.slice().fill(null,u),bindingStartIndex:u,expandoStartIndex:d,hostBindingOpCodes:null,firstCreatePass:!0,firstUpdatePass:!0,staticViewQueries:!1,staticContentQueries:!1,preOrderHooks:null,preOrderCheckHooks:null,contentHooks:null,contentCheckHooks:null,viewHooks:null,viewCheckHooks:null,destroyHooks:null,cleanup:null,contentQueries:null,components:null,directiveRegistry:"function"==typeof s?s():s,pipeRegistry:"function"==typeof o?o():o,firstChild:null,schemas:l,consts:h,incompleteFirstPass:!1}}function $v(t,e,n,r){const i=Xv(e);null===n?i.push(r):(i.push(n),t.firstCreatePass&&Jv(t).push(r,i.length-1))}function Uv(t,e,n){for(let r in t)if(t.hasOwnProperty(r)){n=null===n?{}:n;const i=t[r];n.hasOwnProperty(r)?n[r].push(e,i):n[r]=[e,i]}return n}function zv(t,e){const n=e.directiveStart,r=e.directiveEnd,i=t.data,s=e.attrs,o=[];let a=null,l=null;for(let c=n;c<r;c++){const u=i[c],d=u.inputs,f=null===s||fv(e)?null:RN(d,s);o.push(f),a=Uv(d,c,a),l=Uv(u.outputs,c,l)}null!==a&&(a.hasOwnProperty("class")&&(e.flags|=16),a.hasOwnProperty("style")&&(e.flags|=32)),e.initialInputs=o,e.inputs=a,e.outputs=l}function bt(t,e,n,r,i,s,o,a){const l=kt(e,n);let u,c=e.inputs;!a&&null!=c&&(u=c[r])?(fp(t,n,u,r,i),eu(e)&&Gv(n,e.index)):3&e.type?(r=function wN(t){return"class"===t?"className":"for"===t?"htmlFor":"formaction"===t?"formAction":"innerHtml"===t?"innerHTML":"readonly"===t?"readOnly":"tabindex"===t?"tabIndex":t}(r),i=null!=o?o(i,e.value||"",r):i,s.setProperty(l,r,i)):e.type}function Gv(t,e){const n=mt(e,t);16&n[2]||(n[2]|=32)}function ap(t,e,n,r){let i=!1;if(w0()){const s=function xN(t,e,n){const r=t.directiveRegistry;let i=null;if(r)for(let s=0;s<r.length;s++){const o=r[s];hv(n,o.selectors,!1)&&(i||(i=[]),du(ol(n,e),t,o.type),Zt(o)?(Kv(t,n),i.unshift(o)):i.push(o))}return i}(t,e,n),o=null===r?null:{"":-1};if(null!==s){i=!0,Yv(n,t.data.length,s.length);for(let u=0;u<s.length;u++){const d=s[u];d.providersResolver&&d.providersResolver(d)}let a=!1,l=!1,c=So(t,e,s.length,null);for(let u=0;u<s.length;u++){const d=s[u];n.mergedAttrs=lu(n.mergedAttrs,d.hostAttrs),Qv(t,n,e,c,d),ON(c,d,o),null!==d.contentQueries&&(n.flags|=8),(null!==d.hostBindings||null!==d.hostAttrs||0!==d.hostVars)&&(n.flags|=128);const f=d.type.prototype;!a&&(f.ngOnChanges||f.ngOnInit||f.ngDoCheck)&&((t.preOrderHooks||(t.preOrderHooks=[])).push(n.index),a=!0),!l&&(f.ngOnChanges||f.ngDoCheck)&&((t.preOrderCheckHooks||(t.preOrderCheckHooks=[])).push(n.index),l=!0),c++}zv(t,n)}o&&function NN(t,e,n){if(e){const r=t.localNames=[];for(let i=0;i<e.length;i+=2){const s=n[e[i+1]];if(null==s)throw new D(-301,!1);r.push(e[i],s)}}}(n,r,o)}return n.mergedAttrs=lu(n.mergedAttrs,n.attrs),i}function Wv(t,e,n,r,i,s){const o=s.hostBindings;if(o){let a=t.hostBindingOpCodes;null===a&&(a=t.hostBindingOpCodes=[]);const l=~e.index;(function AN(t){let e=t.length;for(;e>0;){const n=t[--e];if("number"==typeof n&&n<0)return n}return 0})(a)!=l&&a.push(l),a.push(r,i,o)}}function qv(t,e){null!==t.hostBindings&&t.hostBindings(1,e)}function Kv(t,e){e.flags|=2,(t.components||(t.components=[])).push(e.index)}function ON(t,e,n){if(n){if(e.exportAs)for(let r=0;r<e.exportAs.length;r++)n[e.exportAs[r]]=t;Zt(e)&&(n[""]=t)}}function Yv(t,e,n){t.flags|=1,t.directiveStart=e,t.directiveEnd=e+n,t.providerIndexes=e}function Qv(t,e,n,r,i){t.data[r]=i;const s=i.factory||(i.factory=Bi(i.type)),o=new il(s,Zt(i),v);t.blueprint[r]=o,n[r]=o,Wv(t,e,0,r,So(t,n,i.hostVars,P),i)}function FN(t,e,n){const r=kt(e,t),i=Hv(n),s=t[10],o=ku(t,Ou(t,i,null,n.onPush?32:16,r,e,s,s.createRenderer(r,n),null,null,null));t[e.index]=o}function vn(t,e,n,r,i,s){const o=kt(t,e);lp(e[j],o,s,t.value,n,r,i)}function lp(t,e,n,r,i,s,o){if(null==s)t.removeAttribute(e,i,n);else{const a=null==o?R(s):o(s,r||"",i);t.setAttribute(e,i,a,n)}}function kN(t,e,n,r,i,s){const o=s[e];if(null!==o){const a=r.setInput;for(let l=0;l<o.length;){const c=o[l++],u=o[l++],d=o[l++];null!==a?r.setInput(n,d,c,u):n[u]=d}}}function RN(t,e){let n=null,r=0;for(;r<e.length;){const i=e[r];if(0!==i)if(5!==i){if("number"==typeof i)break;t.hasOwnProperty(i)&&(null===n&&(n=[]),n.push(i,t[i],e[r+1])),r+=2}else r+=2;else r+=4}return n}function Zv(t,e,n,r){return new Array(t,!0,!1,e,null,0,r,n,null,null)}function VN(t,e){const n=mt(e,t);if(ru(n)){const r=n[1];48&n[2]?Fu(r,n,r.template,n[8]):n[5]>0&&cp(n)}}function cp(t){for(let r=Fh(t);null!==r;r=kh(r))for(let i=10;i<r.length;i++){const s=r[i];if(ru(s))if(512&s[2]){const o=s[1];Fu(o,s,o.template,s[8])}else s[5]>0&&cp(s)}const n=t[1].components;if(null!==n)for(let r=0;r<n.length;r++){const i=mt(n[r],t);ru(i)&&i[5]>0&&cp(i)}}function BN(t,e){const n=mt(e,t),r=n[1];(function jN(t,e){for(let n=e.length;n<t.blueprint.length;n++)e.push(t.blueprint[n])})(r,n),rp(r,n,n[8])}function ku(t,e){return t[13]?t[14][4]=e:t[13]=e,t[14]=e,e}function up(t){for(;t;){t[2]|=32;const e=Dl(t);if(DS(t)&&!e)return t;t=e}return null}function Ru(t,e,n,r=!0){const i=e[10];i.begin&&i.begin();try{Fu(t,e,t.template,n)}catch(o){throw r&&tb(e,o),o}finally{i.end&&i.end()}}function dp(t,e,n){Wf(0),e(t,n)}function Xv(t){return t[7]||(t[7]=[])}function Jv(t){return t.cleanup||(t.cleanup=[])}function eb(t,e,n){return(null===t||Zt(t))&&(n=function NS(t){for(;Array.isArray(t);){if("object"==typeof t[1])return t;t=t[0]}return null}(n[e.index])),n[j]}function tb(t,e){const n=t[9],r=n?n.get(Gn,null):null;r&&r.handleError(e)}function fp(t,e,n,r,i){for(let s=0;s<n.length;){const o=n[s++],a=n[s++],l=e[o],c=t.data[o];null!==c.setInput?c.setInput(l,i,r,a):l[a]=i}}function Yn(t,e,n){const r=nu(e,t);Y_(t[j],r,n)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Pu(t,e,n){let r=n?t.styles:null,i=n?t.classes:null,s=0;if(null!==e)for(let o=0;o<e.length;o++){const a=e[o];if("number"==typeof a)s=a;else if(1==s)i=Af(i,a);else if(2==s){r=Af(r,a+": "+e[++o]+";")}}n?t.styles=r:t.stylesWithoutHost=r,n?t.classes=i:t.classesWithoutHost=i}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Lu(t,e,n,r,i=!1){for(;null!==n;){const s=e[n.index];if(null!==s&&r.push(we(s)),Qt(s))for(let a=10;a<s.length;a++){const l=s[a],c=l[1].firstChild;null!==c&&Lu(l[1],l,c,r)}const o=n.type;if(8&o)Lu(t,e,n.child,r);else if(32&o){const a=Oh(n,e);let l;for(;l=a();)r.push(l)}else if(16&o){const a=ov(e,n);if(Array.isArray(a))r.push(...a);else{const l=Dl(e[16]);Lu(l[1],l,a,r,!0)}}n=i?n.projectionNext:n.next}return r}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class Ml{constructor(e,n){this._lView=e,this._cdRefInjectingView=n,this._appRef=null,this._attachedToViewContainer=!1}get rootNodes(){const e=this._lView,n=e[1];return Lu(n,e,n.firstChild,[])}get context(){return this._lView[8]}set context(e){this._lView[8]=e}get destroyed(){return 128==(128&this._lView[2])}destroy(){if(this._appRef)this._appRef.detachView(this);else if(this._attachedToViewContainer){const e=this._lView[3];if(Qt(e)){const n=e[8],r=n?n.indexOf(this):-1;r>-1&&(Lh(e,r),pu(n,r))}this._attachedToViewContainer=!1}Z_(this._lView[1],this._lView)}onDestroy(e){$v(this._lView[1],this._lView,null,e)}markForCheck(){up(this._cdRefInjectingView||this._lView)}detach(){this._lView[2]&=-65}reattach(){this._lView[2]|=64}detectChanges(){Ru(this._lView[1],this._lView,this.context)}checkNoChanges(){}attachToViewContainerRef(){if(this._appRef)throw new D(902,!1);this._attachedToViewContainer=!0}detachFromAppRef(){this._appRef=null,function _1(t,e){Cl(t,e,e[j],2,null,null)}(this._lView[1],this._lView)}attachToAppRef(e){if(this._attachedToViewContainer)throw new D(902,!1);this._appRef=e}}class HN extends Ml{constructor(e){super(e),this._view=e}detectChanges(){const e=this._view;Ru(e[1],e,e[8],!1)}checkNoChanges(){}get context(){return null}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class hp extends _l{constructor(e){super(),this.ngModule=e}resolveComponentFactory(e){const n=te(e);return new Il(n,this.ngModule)}}function nb(t){const e=[];for(let n in t)if(t.hasOwnProperty(n)){const r=t[n];e.push({propName:r,templateName:n})}return e}class UN{constructor(e,n){this.injector=e,this.parentInjector=n}get(e,n,r){const i=this.injector.get(e,Ch,r);return i!==Ch||n===Ch?i:this.parentInjector.get(e,n,r)}}class Il extends F_{constructor(e,n){super(),this.componentDef=e,this.ngModule=n,this.componentType=e.type,this.selector=function V1(t){return t.map(L1).join(",")}(e.selectors),this.ngContentSelectors=e.ngContentSelectors?e.ngContentSelectors:[],this.isBoundToModule=!!n}get inputs(){return nb(this.componentDef.inputs)}get outputs(){return nb(this.componentDef.outputs)}create(e,n,r,i){let s=(i=i||this.ngModule)instanceof bo?i:i?.injector;s&&null!==this.componentDef.getStandaloneInjector&&(s=this.componentDef.getStandaloneInjector(s)||s);const o=s?new UN(e,s):e,a=o.get(vl,null);if(null===a)throw new D(407,!1);const l=o.get(Dh,null),c=a.createRenderer(null,this.componentDef),u=this.componentDef.selectors[0][0]||"div",d=r?function CN(t,e,n){const r=n===mn.ShadowDom;return t.selectRootElement(e,r)}(c,r,this.componentDef.encapsulation):Ph(c,u,function $N(t){const e=t.toLowerCase();return"svg"===e?"svg":"math"===e?Bf:null}(u)),f=this.componentDef.onPush?288:272,h=op(0,null,null,1,0,null,null,null,null,null),p=Ou(null,h,null,f,null,null,a,c,l,o,null);let m,g;qf(p);try{const _=function WN(t,e,n,r,i,s){const o=n[1],a=22;n[a]=t;const l=Ao(o,a,2,"#host",null),c=l.mergedAttrs=e.hostAttrs;null!==c&&(Pu(l,c,!0),null!==t&&(au(i,t,c),null!==l.classes&&$h(i,t,l.classes),null!==l.styles&&cv(i,t,l.styles)));const u=r.createRenderer(t,e),d=Ou(n,Hv(e),null,e.onPush?32:16,n[a],l,r,u,s||null,null,null);return o.firstCreatePass&&(du(ol(l,n),o,e.type),Kv(o,l),Yv(l,n.length,1)),ku(n,d),n[a]=d}(d,this.componentDef,p,a,c);if(d)if(r)au(c,d,["ng-version",Lx.full]);else{const{attrs:E,classes:y}=function B1(t){const e=[],n=[];let r=1,i=2;for(;r<t.length;){let s=t[r];if("string"==typeof s)2===i?""!==s&&e.push(s,t[++r]):8===i&&n.push(s);else{if(!Jt(i))break;i=s}r++}return{attrs:e,classes:n}}(this.componentDef.selectors[0]);E&&au(c,d,E),y&&y.length>0&&$h(c,d,y.join(" "))}if(g=jf(h,22),void 0!==n){const E=g.projection=[];for(let y=0;y<this.ngContentSelectors.length;y++){const I=n[y];E.push(null!=I?Array.from(I):null)}}m=function qN(t,e,n,r){const i=n[1],s=function IN(t,e,n){const r=Ae();t.firstCreatePass&&(n.providersResolver&&n.providersResolver(n),Qv(t,r,e,So(t,e,1,null),n),zv(t,r));const i=al(e,t,r.directiveStart,r);Ue(i,e);const s=kt(r,e);return s&&Ue(s,e),i}(i,n,e);if(t[8]=n[8]=s,null!==r)for(const a of r)a(s,e);if(e.contentQueries){const a=Ae();e.contentQueries(1,s,a.directiveStart)}const o=Ae();if(i.firstCreatePass&&(null!==e.hostBindings||null!==e.hostAttrs)){Kr(o.index);Wv(n[1],o,0,o.directiveStart,o.directiveEnd,e),qv(e,s)}return s}(_,this.componentDef,p,[KN]),rp(h,p,null)}finally{Kf()}return new GN(this.componentType,m,Co(g,p),p,g)}}new hp;class GN extends class Nx{}{constructor(e,n,r,i,s){super(),this.location=r,this._rootLView=i,this._tNode=s,this.instance=n,this.hostView=this.changeDetectorRef=new HN(i),this.componentType=e}setInput(e,n){const r=this._tNode.inputs;let i;if(null!==r&&(i=r[e])){const s=this._rootLView;fp(s[1],s,i,e,n),Gv(s,this._tNode.index)}}get injector(){return new co(this._tNode,this._rootLView)}destroy(){this.hostView.destroy()}onDestroy(e){this.hostView.onDestroy(e)}}function KN(){const t=Ae();iu(C()[1],t)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function rb(t){return Object.getPrototypeOf(t.prototype).constructor}function G(t){let e=rb(t.type),n=!0;const r=[t];for(;e;){let i;if(Zt(t))i=e.\u0275cmp||e.\u0275dir;else{if(e.\u0275cmp)throw new D(903,!1);i=e.\u0275dir}if(i){if(n){r.push(i);const o=t;o.inputs=pp(t.inputs),o.declaredInputs=pp(t.declaredInputs),o.outputs=pp(t.outputs);const a=i.hostBindings;a&&XN(t,a);const l=i.viewQuery,c=i.contentQueries;if(l&&QN(t,l),c&&ZN(t,c),If(t.inputs,i.inputs),If(t.declaredInputs,i.declaredInputs),If(t.outputs,i.outputs),Zt(i)&&i.data.animation){const u=t.data;u.animation=(u.animation||[]).concat(i.data.animation)}}const s=i.features;if(s)for(let o=0;o<s.length;o++){const a=s[o];a&&a.ngInherit&&a(t),a===G&&(n=!1)}}e=Object.getPrototypeOf(e)}!function YN(t){let e=0,n=null;for(let r=t.length-1;r>=0;r--){const i=t[r];i.hostVars=e+=i.hostVars,i.hostAttrs=lu(i.hostAttrs,n=lu(n,i.hostAttrs))}}(r)}function pp(t){return t===to?{}:t===X?[]:t}function QN(t,e){const n=t.viewQuery;t.viewQuery=n?(r,i)=>{e(r,i),n(r,i)}:e}function ZN(t,e){const n=t.contentQueries;t.contentQueries=n?(r,i,s)=>{e(r,i,s),n(r,i,s)}:e}function XN(t,e){const n=t.hostBindings;t.hostBindings=n?(r,i)=>{e(r,i),n(r,i)}:e}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const JN=["providersResolver"],eO=["template","decls","consts","vars","onPush","ngContentSelectors","styles","encapsulation","schemas"];function tO(t){let n,e=rb(t.type);n=Zt(t)?e.\u0275cmp:e.\u0275dir;const r=t;for(const i of JN)r[i]=n[i];if(Zt(n))for(const i of eO)r[i]=n[i]}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let Vu=null;function zi(){if(!Vu){const t=fe.Symbol;if(t&&t.iterator)Vu=t.iterator;else{const e=Object.getOwnPropertyNames(Map.prototype);for(let n=0;n<e.length;++n){const r=e[n];"entries"!==r&&"size"!==r&&Map.prototype[r]===Map.prototype.entries&&(Vu=r)}}}return Vu}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Al(t){return!!mp(t)&&(Array.isArray(t)||!(t instanceof Map)&&zi()in t)}function mp(t){return null!==t&&("function"==typeof t||"object"==typeof t)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function bn(t,e,n){return t[e]=n}function Sl(t,e){return t[e]}function ze(t,e,n){const r=t[e];return!Object.is(r,n)&&(t[e]=n,!0)}function Gi(t,e,n,r){const i=ze(t,e,n);return ze(t,e+1,r)||i}function Bu(t,e,n,r,i){const s=Gi(t,e,n,r);return ze(t,e+2,i)||s}function Rt(t,e,n,r,i,s){const o=Gi(t,e,n,r);return Gi(t,e+2,i,s)||o}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function at(t,e,n,r){const i=C();if(ze(i,oo(),e)){z();vn(De(),i,t,e,n,r)}return at}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function To(t,e){let n=!1,r=jn();for(let s=1;s<e.length;s+=2)n=ze(t,r++,e[s])||n;if(A0(r),!n)return P;let i=e[0];for(let s=1;s<e.length;s+=2)i+=R(e[s])+e[s+1];return i}function xo(t,e,n,r){return ze(t,oo(),n)?e+R(n)+r:P}function No(t,e,n,r,i,s){const a=Gi(t,jn(),n,i);return Hn(2),a?e+R(n)+r+R(i)+s:P}function Oo(t,e,n,r,i,s,o,a){const c=Bu(t,jn(),n,i,o);return Hn(3),c?e+R(n)+r+R(i)+s+R(o)+a:P}function Fo(t,e,n,r,i,s,o,a,l,c){const d=Rt(t,jn(),n,i,o,l);return Hn(4),d?e+R(n)+r+R(i)+s+R(o)+a+R(l)+c:P}function ko(t,e,n,r,i,s,o,a,l,c,u,d){const f=jn();let h=Rt(t,f,n,i,o,l);return h=ze(t,f+4,u)||h,Hn(5),h?e+R(n)+r+R(i)+s+R(o)+a+R(l)+c+R(u)+d:P}function Ro(t,e,n,r,i,s,o,a,l,c,u,d,f,h){const p=jn();let m=Rt(t,p,n,i,o,l);return m=Gi(t,p+4,u,f)||m,Hn(6),m?e+R(n)+r+R(i)+s+R(o)+a+R(l)+c+R(u)+d+R(f)+h:P}function Po(t,e,n,r,i,s,o,a,l,c,u,d,f,h,p,m){const g=jn();let _=Rt(t,g,n,i,o,l);return _=Bu(t,g+4,u,f,p)||_,Hn(7),_?e+R(n)+r+R(i)+s+R(o)+a+R(l)+c+R(u)+d+R(f)+h+R(p)+m:P}function Lo(t,e,n,r,i,s,o,a,l,c,u,d,f,h,p,m,g,_){const E=jn();let y=Rt(t,E,n,i,o,l);return y=Rt(t,E+4,u,f,p,g)||y,Hn(8),y?e+R(n)+r+R(i)+s+R(o)+a+R(l)+c+R(u)+d+R(f)+h+R(p)+m+R(g)+_:P}function ib(t,e,n,r,i,s){const o=C(),a=xo(o,e,n,r);if(a!==P){vn(De(),o,t,a,i,s)}return ib}function sb(t,e,n,r,i,s,o,a){const l=C(),c=No(l,e,n,r,i,s);if(c!==P){vn(De(),l,t,c,o,a)}return sb}function ob(t,e,n,r,i,s,o,a,l,c){const u=C(),d=Oo(u,e,n,r,i,s,o,a);if(d!==P){vn(De(),u,t,d,l,c)}return ob}function ab(t,e,n,r,i,s,o,a,l,c,u,d){const f=C(),h=Fo(f,e,n,r,i,s,o,a,l,c);if(h!==P){vn(De(),f,t,h,u,d)}return ab}function lb(t,e,n,r,i,s,o,a,l,c,u,d,f,h){const p=C(),m=ko(p,e,n,r,i,s,o,a,l,c,u,d);if(m!==P){vn(De(),p,t,m,f,h)}return lb}function cb(t,e,n,r,i,s,o,a,l,c,u,d,f,h,p,m){const g=C(),_=Ro(g,e,n,r,i,s,o,a,l,c,u,d,f,h);if(_!==P){vn(De(),g,t,_,p,m)}return cb}function ub(t,e,n,r,i,s,o,a,l,c,u,d,f,h,p,m,g,_){const E=C(),y=Po(E,e,n,r,i,s,o,a,l,c,u,d,f,h,p,m);if(y!==P){vn(De(),E,t,y,g,_)}return ub}function db(t,e,n,r,i,s,o,a,l,c,u,d,f,h,p,m,g,_,E,y){const I=C(),B=Lo(I,e,n,r,i,s,o,a,l,c,u,d,f,h,p,m,g,_);if(B!==P){vn(De(),I,t,B,E,y)}return db}function fb(t,e,n,r){const i=C(),s=To(i,e);if(s!==P){vn(De(),i,t,s,n,r)}return fb}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function gp(t,e,n,r,i,s,o,a){const l=C(),c=z(),u=t+22,d=c.firstCreatePass?
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function oO(t,e,n,r,i,s,o,a,l){const c=e.consts,u=Ao(e,t,4,o||null,qr(c,a));ap(e,n,u,qr(c,l)),iu(e,u);const d=u.tViews=op(2,u,r,i,s,e.directiveRegistry,e.pipeRegistry,null,e.schemas,c);return null!==e.queries&&(e.queries.template(e,u),d.queries=e.queries.embeddedTView(u)),u}(u,c,l,e,n,r,i,s,o):c.data[u];gn(d,!1);const f=l[j].createComment("");Iu(c,l,f,d),Ue(f,l),ku(l,l[u]=Zv(f,l,f,d)),tu(d)&&ip(c,l,d),null!=o&&sp(l,d,a)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function lO(t){return so(function $S(){return k.lFrame.contextLView}(),22+t)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Pt(t,e,n){const r=C();if(ze(r,oo(),e)){bt(z(),De(),r,t,e,r[j],n,!1)}return Pt}function yp(t,e,n,r,i){const o=i?"class":"style";fp(t,n,e.inputs[o],o,r)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Me(t,e,n,r){const i=C(),s=z(),o=22+t,a=i[j],l=i[o]=Ph(a,e,function JS(){return k.lFrame.currentNamespace}()),c=s.firstCreatePass?function cO(t,e,n,r,i,s,o){const a=e.consts,c=Ao(e,t,2,i,qr(a,s));return ap(e,n,c,qr(a,o)),null!==c.attrs&&Pu(c,c.attrs,!1),null!==c.mergedAttrs&&Pu(c,c.mergedAttrs,!0),null!==e.queries&&e.queries.elementStart(e,c),c}(o,s,i,0,e,n,r):s.data[o];gn(c,!0);const u=c.mergedAttrs;null!==u&&au(a,l,u);const d=c.classes;null!==d&&$h(a,l,d);const f=c.styles;return null!==f&&cv(a,l,f),64!=(64&c.flags)&&Iu(s,i,l,c),0===function RS(){return k.lFrame.elementDepthCount}()&&Ue(l,i),function PS(){k.lFrame.elementDepthCount++}(),tu(c)&&(ip(s,i,c),jv(s,c,i)),null!==r&&sp(i,c),Me}function Re(){let t=Ae();$f()?Uf():(t=t.parent,gn(t,!1));const e=t;!function LS(){k.lFrame.elementDepthCount--}();const n=z();return n.firstCreatePass&&(iu(n,t),Rf(t)&&n.queries.elementEnd(t)),null!=e.classesWithoutHost&&function iT(t){return 0!=(16&t.flags)}(e)&&yp(n,e,C(),e.classesWithoutHost,!0),null!=e.stylesWithoutHost&&function sT(t){return 0!=(32&t.flags)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(e)&&yp(n,e,C(),e.stylesWithoutHost,!1),Re}function Qn(t,e,n,r){return Me(t,e,n,r),Re(),Qn
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */}function _p(t,e,n){const r=C(),i=z(),s=t+22,o=i.firstCreatePass?function uO(t,e,n,r,i){const s=e.consts,o=qr(s,r),a=Ao(e,t,8,"ng-container",o);return null!==o&&Pu(a,o,!0),ap(e,n,a,qr(s,i)),null!==e.queries&&e.queries.elementStart(e,a),a}(s,i,r,e,n):i.data[s];gn(o,!0);const a=r[s]=r[j].createComment("");return Iu(i,r,a,o),Ue(a,r),tu(o)&&(ip(i,r,o),jv(i,o,r)),null!=n&&sp(r,o),_p}function vp(){let t=Ae();const e=z();return $f()?Uf():(t=t.parent,gn(t,!1)),e.firstCreatePass&&(iu(e,t),Rf(t)&&e.queries.elementEnd(t)),vp}function hb(t,e,n){return _p(t,e,n),vp(),hb}function dO(){return C()}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function ju(t){return!!t&&"function"==typeof t.then}function pb(t){return!!t&&"function"==typeof t.subscribe}const mb=pb;
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Pe(t,e,n,r){const i=C(),s=z(),o=Ae();return yb(s,i,i[j],o,t,e,!!n,r),Pe}function gb(t,e){const n=Ae(),r=C(),i=z();return yb(i,r,eb(Gf(i.data),n,r),n,t,e,!1),gb}function yb(t,e,n,r,i,s,o,a){const l=tu(r),u=t.firstCreatePass&&Jv(t),d=e[8],f=Xv(e);let h=!0;if(3&r.type||a){const g=kt(r,e),_=a?a(g):g,E=f.length,y=a?B=>a(we(B[r.index])):r.index;let I=null;if(!a&&l&&(I=function fO(t,e,n,r){const i=t.cleanup;if(null!=i)for(let s=0;s<i.length-1;s+=2){const o=i[s];if(o===n&&i[s+1]===r){const a=e[7],l=i[s+2];return a.length>l?a[l]:null}"string"==typeof o&&(s+=2)}return null}(t,e,i,r.index)),null!==I){(I.__ngLastListenerFn__||I).__ngNextListenerFn__=s,I.__ngLastListenerFn__=s,h=!1}else{s=vb(r,e,d,s,!1);const B=n.listen(_,i,s);f.push(s,B),u&&u.push(i,y,E,E+1)}}else s=vb(r,e,d,s,!1);const p=r.outputs;let m;if(h&&null!==p&&(m=p[i])){const g=m.length;if(g)for(let _=0;_<g;_+=2){const E=m[_],y=m[_+1],U=e[E][y].subscribe(s),_e=f.length;f.push(s,U),u&&u.push(i,r.index,_e,-(_e+1))}}}function _b(t,e,n,r){try{return Ft(6,e,n),!1!==n(r)}catch(i){return tb(t,i),!1}finally{Ft(7,e,n)}}function vb(t,e,n,r,i){return function s(o){if(o===Function)return r;up(2&t.flags?mt(t.index,e):e);let l=_b(e,n,r,o),c=s.__ngNextListenerFn__;for(;c;)l=_b(e,n,c,o)&&l,c=c.__ngNextListenerFn__;return i&&!1===l&&(o.preventDefault(),o.returnValue=!1),l}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function bp(t=1){return qS(t)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function hO(t,e){let n=null;const r=function F1(t){const e=t.attrs;if(null!=e){const n=e.indexOf(5);if(0==(1&n))return e[n+1]}return null}(t);for(let i=0;i<e.length;i++){const s=e[i];if("*"!==s){if(null===r?hv(t,s,!0):P1(r,s))return i}else n=i}return n}function Wi(t){const e=C()[16][6];if(!e.projection){const n=t?t.length:1,r=e.projection=dl(n,null),i=r.slice();let s=e.child;for(;null!==s;){const o=t?hO(s,t):0;null!==o&&(i[o]?i[o].projectionNext=s:r[o]=s,i[o]=s),s=s.next}}}function Dt(t,e=0,n){const r=C(),i=z(),s=Ao(i,22+t,16,null,n||null);null===s.projection&&(s.projection=e),Uf(),64!=(64&s.flags)&&function I1(t,e,n){lv(e[j],0,e,n,X_(t,n,e),nv(n.parent||e[6],n,e))}(i,r,s)}function Dp(t,e,n){return Cp(t,"",e,"",n),Dp}function Cp(t,e,n,r,i){const s=C(),o=xo(s,e,n,r);if(o!==P){bt(z(),De(),s,t,o,s[j],i,!1)}return Cp}function bb(t,e,n,r,i,s,o){const a=C(),l=No(a,e,n,r,i,s);if(l!==P){bt(z(),De(),a,t,l,a[j],o,!1)}return bb}function Db(t,e,n,r,i,s,o,a,l){const c=C(),u=Oo(c,e,n,r,i,s,o,a);if(u!==P){bt(z(),De(),c,t,u,c[j],l,!1)}return Db}function Cb(t,e,n,r,i,s,o,a,l,c,u){const d=C(),f=Fo(d,e,n,r,i,s,o,a,l,c);if(f!==P){bt(z(),De(),d,t,f,d[j],u,!1)}return Cb}function Eb(t,e,n,r,i,s,o,a,l,c,u,d,f){const h=C(),p=ko(h,e,n,r,i,s,o,a,l,c,u,d);if(p!==P){bt(z(),De(),h,t,p,h[j],f,!1)}return Eb}function wb(t,e,n,r,i,s,o,a,l,c,u,d,f,h,p){const m=C(),g=Ro(m,e,n,r,i,s,o,a,l,c,u,d,f,h);if(g!==P){bt(z(),De(),m,t,g,m[j],p,!1)}return wb}function Mb(t,e,n,r,i,s,o,a,l,c,u,d,f,h,p,m,g){const _=C(),E=Po(_,e,n,r,i,s,o,a,l,c,u,d,f,h,p,m);if(E!==P){bt(z(),De(),_,t,E,_[j],g,!1)}return Mb}function Ib(t,e,n,r,i,s,o,a,l,c,u,d,f,h,p,m,g,_,E){const y=C(),I=Lo(y,e,n,r,i,s,o,a,l,c,u,d,f,h,p,m,g,_);if(I!==P){bt(z(),De(),y,t,I,y[j],E,!1)}return Ib}function Ab(t,e,n){const r=C(),i=To(r,e);if(i!==P){bt(z(),De(),r,t,i,r[j],n,!1)}return Ab}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function pO(t,e,n,r,i,s){let o=s?e.classBindings:e.styleBindings,a=en(o),l=Kn(o);t[r]=n;let u,c=!1;if(Array.isArray(n)){const d=n;u=d[1],(null===u||mo(d,u)>0)&&(c=!0)}else u=n;if(i)if(0!==l){const f=en(t[a+1]);t[r+1]=Tu(f,a),0!==f&&(t[f+1]=qh(t[f+1],r)),t[a+1]=function lN(t,e){return 131071&t|e<<17}(t[a+1],r)}else t[r+1]=Tu(a,0),0!==a&&(t[a+1]=qh(t[a+1],r)),a=r;else t[r+1]=Tu(l,0),0===a?a=r:t[l+1]=qh(t[l+1],r),l=r;c&&(t[r+1]=Wh(t[r+1])),Sb(t,u,r,!0,s),Sb(t,u,r,!1,s),function mO(t,e,n,r,i){const s=i?t.residualClasses:t.residualStyles;null!=s&&"string"==typeof e&&mo(s,e)>=0&&(n[r+1]=Kh(n[r+1]))}(e,u,t,r,s),o=Tu(a,l),s?e.classBindings=o:e.styleBindings=o}function Sb(t,e,n,r,i){const s=t[n+1],o=null===e;let a=r?en(s):Kn(s),l=!1;for(;0!==a&&(!1===l||o);){const c=t[a],u=t[a+1];gO(c,e)&&(l=!0,t[a+1]=r?Kh(u):Wh(u)),a=r?en(u):Kn(u)}l&&(t[n+1]=r?Wh(s):Kh(s))}function gO(t,e){return null===t||null==e||(Array.isArray(t)?t[1]:t)===e||!(!Array.isArray(t)||"string"!=typeof e)&&mo(t,e)>=0}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const Te={textEnd:0,key:0,keyEnd:0,value:0,valueEnd:0};function Tb(t){return t.substring(Te.key,Te.keyEnd)}function yO(t){return t.substring(Te.value,Te.valueEnd)}function xb(t,e){const n=Te.textEnd;return n===e?-1:(e=Te.keyEnd=function bO(t,e,n){for(;e<n&&t.charCodeAt(e)>32;)e++;return e}(t,Te.key=e,n),Vo(t,e,n))}function Nb(t,e){const n=Te.textEnd;let r=Te.key=Vo(t,e,n);return n===r?-1:(r=Te.keyEnd=function DO(t,e,n){let r;for(;e<n&&(45===(r=t.charCodeAt(e))||95===r||(-33&r)>=65&&(-33&r)<=90||r>=48&&r<=57);)e++;return e}(t,r,n),r=Fb(t,r,n,58),r=Te.value=Vo(t,r,n),r=Te.valueEnd=function CO(t,e,n){let r=-1,i=-1,s=-1,o=e,a=o;for(;o<n;){const l=t.charCodeAt(o++);if(59===l)return a;34===l||39===l?a=o=kb(t,l,o,n):e===o-4&&85===s&&82===i&&76===r&&40===l?a=o=kb(t,41,o,n):l>32&&(a=o),s=i,i=r,r=-33&l}return a}(t,r,n),Fb(t,r,n,59))}function Ob(t){Te.key=0,Te.keyEnd=0,Te.value=0,Te.valueEnd=0,Te.textEnd=t.length}function Vo(t,e,n){for(;e<n&&t.charCodeAt(e)<=32;)e++;return e}function Fb(t,e,n,r){return(e=Vo(t,e,n))<n&&e++,e}function kb(t,e,n,r){let i=-1,s=n;for(;s<r;){const o=t.charCodeAt(s++);if(o==e&&92!==i)return s;i=92==o&&92===i?0:o}throw new Error}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function Rb(t,e,n){return tn(t,e,n,!1),Rb}function Lt(t,e){return tn(t,e,null,!0),Lt}function Dn(t){nn(Vb,EO,t,!1)}function EO(t,e){for(let n=function vO(t){return Ob(t),Nb(t,Vo(t,0,Te.textEnd))}(e);n>=0;n=Nb(e,n))Vb(t,Tb(e),yO(e))}function wO(t){nn(yt,Cn,t,!0)}function Cn(t,e){for(let n=function _O(t){return Ob(t),xb(t,Vo(t,0,Te.textEnd))}(e);n>=0;n=xb(e,n))yt(t,Tb(e),!0)}function tn(t,e,n,r){const i=C(),s=z(),o=Hn(2);if(s.firstUpdatePass&&Lb(s,t,o,r),e!==P&&ze(i,o,e)){Bb(s,s.data[Ze()],i,i[j],t,i[o+1]=function NO(t,e){return null==t||("string"==typeof e?t+=e:"object"==typeof t&&(t=oe(_t(t)))),t}(e,n),r,o)}}function nn(t,e,n,r){const i=z(),s=Hn(2);i.firstUpdatePass&&Lb(i,null,s,r);const o=C();if(n!==P&&ze(o,s,n)){const a=i.data[Ze()];if(Hb(a,r)&&!Pb(i,s)){let l=r?a.classesWithoutHost:a.stylesWithoutHost;null!==l&&(n=Af(l,n||"")),yp(i,a,o,n,r)}else!function xO(t,e,n,r,i,s,o,a){i===P&&(i=X);let l=0,c=0,u=0<i.length?i[0]:null,d=0<s.length?s[0]:null;for(;null!==u||null!==d;){const f=l<i.length?i[l+1]:void 0,h=c<s.length?s[c+1]:void 0;let m,p=null;u===d?(l+=2,c+=2,f!==h&&(p=d,m=h)):null===d||null!==u&&u<d?(l+=2,p=u):(c+=2,p=d,m=h),null!==p&&Bb(t,e,n,r,p,m,o,a),u=l<i.length?i[l]:null,d=c<s.length?s[c]:null}}(i,a,o,o[j],o[s+1],o[s+1]=function TO(t,e,n){if(null==n||""===n)return X;const r=[],i=_t(n);if(Array.isArray(i))for(let s=0;s<i.length;s++)t(r,i[s],!0);else if("object"==typeof i)for(const s in i)i.hasOwnProperty(s)&&t(r,s,i[s]);else"string"==typeof i&&e(r,i);return r}(t,e,n),r,s)}}function Pb(t,e){return e>=t.expandoStartIndex}function Lb(t,e,n,r){const i=t.data;if(null===i[n+1]){const s=i[Ze()],o=Pb(t,n);Hb(s,r)&&null===e&&!o&&(e=!1),e=function MO(t,e,n,r){const i=Gf(t);let s=r?e.residualClasses:e.residualStyles;if(null===i)0===(r?e.classBindings:e.styleBindings)&&(n=Tl(n=Ep(null,t,e,n,r),e.attrs,r),s=null);else{const o=e.directiveStylingLast;if(-1===o||t[o]!==i)if(n=Ep(i,t,e,n,r),null===s){let l=function IO(t,e,n){const r=n?e.classBindings:e.styleBindings;if(0!==Kn(r))return t[en(r)]}(t,e,r);void 0!==l&&Array.isArray(l)&&(l=Ep(null,t,e,l[1],r),l=Tl(l,e.attrs,r),function AO(t,e,n,r){const i=n?e.classBindings:e.styleBindings;t[en(i)]=r}(t,e,r,l))}else s=function SO(t,e,n){let r;const i=e.directiveEnd;for(let s=1+e.directiveStylingLast;s<i;s++){r=Tl(r,t[s].hostAttrs,n)}return Tl(r,e.attrs,n)}(t,e,r)}return void 0!==s&&(r?e.residualClasses=s:e.residualStyles=s),n}(i,s,e,r),pO(i,s,e,n,o,r)}}function Ep(t,e,n,r,i){let s=null;const o=n.directiveEnd;let a=n.directiveStylingLast;for(-1===a?a=n.directiveStart:a++;a<o&&(s=e[a],r=Tl(r,s.hostAttrs,i),s!==t);)a++;return null!==t&&(n.directiveStylingLast=a),r}function Tl(t,e,n){const r=n?1:2;let i=-1;if(null!==e)for(let s=0;s<e.length;s++){const o=e[s];"number"==typeof o?i=o:i===r&&(Array.isArray(t)||(t=void 0===t?[]:["",t]),yt(t,o,!!n||e[++s]))}return void 0===t?null:t}function Vb(t,e,n){yt(t,e,_t(n))}function Bb(t,e,n,r,i,s,o,a){if(!(3&e.type))return;const l=t.data,c=l[a+1];if(!Hu(xv(c)?jb(l,e,n,i,Kn(c),o):void 0)){Hu(s)||Tv(c)&&(s=jb(l,null,n,i,a,o));!function S1(t,e,n,r,i){if(e)i?t.addClass(n,r):t.removeClass(n,r);else{let s=-1===r.indexOf("-")?void 0:qn.DashCase;null==i?t.removeStyle(n,r,s):("string"==typeof i&&i.endsWith("!important")&&(i=i.slice(0,-10),s|=qn.Important),t.setStyle(n,r,i,s))}}(r,o,nu(Ze(),n),i,s)}}function jb(t,e,n,r,i,s){const o=null===e;let a;for(;i>0;){const l=t[i],c=Array.isArray(l),u=c?l[1]:l,d=null===u;let f=n[i+1];f===P&&(f=d?X:void 0);let h=d?rh(f,r):u===r?f:void 0;if(c&&!Hu(h)&&(h=rh(l,r)),Hu(h)&&(a=h,o))return a;const p=t[i+1];i=o?en(p):Kn(p)}if(null!==e){let l=s?e.residualClasses:e.residualStyles;null!=l&&(a=rh(l,r))}return a}function Hu(t){return void 0!==t}function Hb(t,e){return 0!=(t.flags&(e?16:32))}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function xl(t,e=""){const n=C(),r=z(),i=t+22,s=r.firstCreatePass?Ao(r,i,1,e,null):r.data[i],o=n[i]=Rh(n[j],e);Iu(r,n,o,s),gn(s,!1)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function $u(t){return Nl("",t,""),$u}function Nl(t,e,n){const r=C(),i=xo(r,t,e,n);return i!==P&&Yn(r,Ze(),i),Nl}function $b(t,e,n,r,i){const s=C(),o=No(s,t,e,n,r,i);return o!==P&&Yn(s,Ze(),o),$b}function Ub(t,e,n,r,i,s,o){const a=C(),l=Oo(a,t,e,n,r,i,s,o);return l!==P&&Yn(a,Ze(),l),Ub}function zb(t,e,n,r,i,s,o,a,l){const c=C(),u=Fo(c,t,e,n,r,i,s,o,a,l);return u!==P&&Yn(c,Ze(),u),zb}function Gb(t,e,n,r,i,s,o,a,l,c,u){const d=C(),f=ko(d,t,e,n,r,i,s,o,a,l,c,u);return f!==P&&Yn(d,Ze(),f),Gb}function Wb(t,e,n,r,i,s,o,a,l,c,u,d,f){const h=C(),p=Ro(h,t,e,n,r,i,s,o,a,l,c,u,d,f);return p!==P&&Yn(h,Ze(),p),Wb}function qb(t,e,n,r,i,s,o,a,l,c,u,d,f,h,p){const m=C(),g=Po(m,t,e,n,r,i,s,o,a,l,c,u,d,f,h,p);return g!==P&&Yn(m,Ze(),g),qb}function Kb(t,e,n,r,i,s,o,a,l,c,u,d,f,h,p,m,g){const _=C(),E=Lo(_,t,e,n,r,i,s,o,a,l,c,u,d,f,h,p,m,g);return E!==P&&Yn(_,Ze(),E),Kb}function Yb(t){const e=C(),n=To(e,t);return n!==P&&Yn(e,Ze(),n),Yb
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */}function OO(t,e,n){nn(yt,Cn,xo(C(),t,e,n),!0)}function FO(t,e,n,r,i){nn(yt,Cn,No(C(),t,e,n,r,i),!0)}function kO(t,e,n,r,i,s,o){nn(yt,Cn,Oo(C(),t,e,n,r,i,s,o),!0)}function RO(t,e,n,r,i,s,o,a,l){nn(yt,Cn,Fo(C(),t,e,n,r,i,s,o,a,l),!0)}function PO(t,e,n,r,i,s,o,a,l,c,u){nn(yt,Cn,ko(C(),t,e,n,r,i,s,o,a,l,c,u),!0)}function LO(t,e,n,r,i,s,o,a,l,c,u,d,f){nn(yt,Cn,Ro(C(),t,e,n,r,i,s,o,a,l,c,u,d,f),!0)}function VO(t,e,n,r,i,s,o,a,l,c,u,d,f,h,p){nn(yt,Cn,Po(C(),t,e,n,r,i,s,o,a,l,c,u,d,f,h,p),!0)}function BO(t,e,n,r,i,s,o,a,l,c,u,d,f,h,p,m,g){nn(yt,Cn,Lo(C(),t,e,n,r,i,s,o,a,l,c,u,d,f,h,p,m,g),!0)}function jO(t){nn(yt,Cn,To(C(),t),!0)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function HO(t,e,n){Dn(xo(C(),t,e,n))}function $O(t,e,n,r,i){Dn(No(C(),t,e,n,r,i))}function UO(t,e,n,r,i,s,o){Dn(Oo(C(),t,e,n,r,i,s,o))}function zO(t,e,n,r,i,s,o,a,l){Dn(Fo(C(),t,e,n,r,i,s,o,a,l))}function GO(t,e,n,r,i,s,o,a,l,c,u){Dn(ko(C(),t,e,n,r,i,s,o,a,l,c,u))}function WO(t,e,n,r,i,s,o,a,l,c,u,d,f){Dn(Ro(C(),t,e,n,r,i,s,o,a,l,c,u,d,f))}function qO(t,e,n,r,i,s,o,a,l,c,u,d,f,h,p){Dn(Po(C(),t,e,n,r,i,s,o,a,l,c,u,d,f,h,p))}function KO(t,e,n,r,i,s,o,a,l,c,u,d,f,h,p,m,g){Dn(Lo(C(),t,e,n,r,i,s,o,a,l,c,u,d,f,h,p,m,g))}function YO(t){Dn(To(C(),t))}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Qb(t,e,n,r,i){return tn(t,xo(C(),e,n,r),i,!1),Qb}function Zb(t,e,n,r,i,s,o){return tn(t,No(C(),e,n,r,i,s),o,!1),Zb}function Xb(t,e,n,r,i,s,o,a,l){return tn(t,Oo(C(),e,n,r,i,s,o,a),l,!1),Xb}function Jb(t,e,n,r,i,s,o,a,l,c,u){return tn(t,Fo(C(),e,n,r,i,s,o,a,l,c),u,!1),Jb}function eD(t,e,n,r,i,s,o,a,l,c,u,d,f){return tn(t,ko(C(),e,n,r,i,s,o,a,l,c,u,d),f,!1),eD}function tD(t,e,n,r,i,s,o,a,l,c,u,d,f,h,p){return tn(t,Ro(C(),e,n,r,i,s,o,a,l,c,u,d,f,h),p,!1),tD}function nD(t,e,n,r,i,s,o,a,l,c,u,d,f,h,p,m,g){return tn(t,Po(C(),e,n,r,i,s,o,a,l,c,u,d,f,h,p,m),g,!1),nD}function rD(t,e,n,r,i,s,o,a,l,c,u,d,f,h,p,m,g,_,E){return tn(t,Lo(C(),e,n,r,i,s,o,a,l,c,u,d,f,h,p,m,g,_),E,!1),rD}function iD(t,e,n){return tn(t,To(C(),e),n,!1),iD
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */}function Uu(t,e,n){const r=C();if(ze(r,oo(),e)){bt(z(),De(),r,t,e,r[j],n,!0)}return Uu}function sD(t,e,n){const r=C();if(ze(r,oo(),e)){const s=z(),o=De();bt(s,o,r,t,e,eb(Gf(s.data),o,r),n,!0)}return sD}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const qi=void 0;var ZO=["en",[["a","p"],["AM","PM"],qi],[["AM","PM"],qi,qi],[["S","M","T","W","T","F","S"],["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],["Su","Mo","Tu","We","Th","Fr","Sa"]],qi,[["J","F","M","A","M","J","J","A","S","O","N","D"],["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],["January","February","March","April","May","June","July","August","September","October","November","December"]],qi,[["B","A"],["BC","AD"],["Before Christ","Anno Domini"]],0,[6,0],["M/d/yy","MMM d, y","MMMM d, y","EEEE, MMMM d, y"],["h:mm a","h:mm:ss a","h:mm:ss a z","h:mm:ss a zzzz"],["{1}, {0}",qi,"{1} 'at' {0}",qi],[".",",",";","%","+","-","E","\xd7","\u2030","\u221e","NaN",":"],["#,##0.###","#,##0%","\xa4#,##0.00","#E0"],"USD","$","US Dollar",{},"ltr",function QO(t){const n=Math.floor(Math.abs(t)),r=t.toString().replace(/^[^.]*\.?/,"").length;return 1===n&&0===r?1:5}];
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let Bo={};function Je(t){const e=function XO(t){return t.toLowerCase().replace(/_/g,"-")}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(t);let n=aD(e);if(n)return n;const r=e.split("-")[0];if(n=aD(r),n)return n;if("en"===r)return ZO;throw new D(701,!1)}function oD(t){return Je(t)[le.PluralCase]}function aD(t){return t in Bo||(Bo[t]=fe.ng&&fe.ng.common&&fe.ng.common.locales&&fe.ng.common.locales[t]),Bo[t]}var le;!function(t){t[t.LocaleId=0]="LocaleId",t[t.DayPeriodsFormat=1]="DayPeriodsFormat",t[t.DayPeriodsStandalone=2]="DayPeriodsStandalone",t[t.DaysFormat=3]="DaysFormat",t[t.DaysStandalone=4]="DaysStandalone",t[t.MonthsFormat=5]="MonthsFormat",t[t.MonthsStandalone=6]="MonthsStandalone",t[t.Eras=7]="Eras",t[t.FirstDayOfWeek=8]="FirstDayOfWeek",t[t.WeekendRange=9]="WeekendRange",t[t.DateFormat=10]="DateFormat",t[t.TimeFormat=11]="TimeFormat",t[t.DateTimeFormat=12]="DateTimeFormat",t[t.NumberSymbols=13]="NumberSymbols",t[t.NumberFormats=14]="NumberFormats",t[t.CurrencyCode=15]="CurrencyCode",t[t.CurrencySymbol=16]="CurrencySymbol",t[t.CurrencyName=17]="CurrencyName",t[t.Currencies=18]="Currencies",t[t.Directionality=19]="Directionality",t[t.PluralCase=20]="PluralCase",t[t.ExtraData=21]="ExtraData"}(le||(le={}));const JO=["zero","one","two","few","many"];const jo="en-US",zu={marker:"element"},Gu={marker:"ICU"};
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */var et;!function(t){t[t.SHIFT=2]="SHIFT",t[t.APPEND_EAGERLY=1]="APPEND_EAGERLY",t[t.COMMENT=2]="COMMENT"}(et||(et={}));
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
let lD=jo;function cD(t){ft(t,"Expected localeId to be defined"),"string"==typeof t&&(lD=t.toLowerCase().replace(/_/g,"-"))}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function uD(t,e,n){const r=e.insertBeforeIndex,i=Array.isArray(r)?r[0]:r;return null===i?rv(t,0,n):we(n[i])}function dD(t,e,n,r,i){const s=e.insertBeforeIndex;if(Array.isArray(s)){let o=r,a=null;if(3&e.type||(a=o,o=i),null!==o&&0==(2&e.flags))for(let l=1;l<s.length;l++){Ui(t,o,n[s[l]],a,!1)}}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function fD(t,e){if(t.push(e),t.length>1)for(let n=t.length-2;n>=0;n--){const r=t[n];hD(r)||rF(r,e)&&null===iF(r)&&sF(r,e.index)}}function hD(t){return!(64&t.type)}function rF(t,e){return hD(e)||t.index>e.index}function iF(t){const e=t.insertBeforeIndex;return Array.isArray(e)?e[0]:e}function sF(t,e){const n=t.insertBeforeIndex;Array.isArray(n)?n[0]=e:(sv(uD,dD),t.insertBeforeIndex=e)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Ol(t,e){const n=t.data[e];return null===n||"string"==typeof n?null:n.hasOwnProperty("currentCaseLViewIndex")?n:n.value}function lF(t,e,n){const r=np(t,n,64,null,null);return fD(e,r),r}function Wu(t,e){const n=e[t.currentCaseLViewIndex];return null===n?n:n<0?~n:n}function pD(t){return t>>>17}function mD(t){return(131070&t)>>>1}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
let Fl=0,kl=0;function yD(t,e,n,r){const i=n[j];let o,s=null;for(let a=0;a<e.length;a++){const l=e[a];if("string"==typeof l){const c=e[++a];null===n[c]&&(n[c]=Rh(i,l))}else if("number"==typeof l)switch(1&l){case 0:const c=pD(l);let u,d;if(null===s&&(s=c,o=Mu(i,r)),c===s?(u=r,d=o):(u=null,d=we(n[c])),null!==d){const m=mD(l);Ui(i,d,n[m],u,!1);const _=Ol(t,m);if(null!==_&&"object"==typeof _){const E=Wu(_,n);null!==E&&yD(t,_.create[E],n,n[_.anchorIdx])}}break;case 1:const f=l>>>1,h=e[++a],p=e[++a];lp(i,nu(f,n),null,null,h,p,null)}else switch(l){case Gu:const c=e[++a],u=e[++a];if(null===n[u]){Ue(n[u]=m1(i,c),n)}break;case zu:const d=e[++a],f=e[++a];if(null===n[f]){Ue(n[f]=Ph(i,d,null),n)}}}}function _D(t,e,n,r,i){for(let s=0;s<n.length;s++){const o=n[s],a=n[++s];if(o&i){let l="";for(let c=s+1;c<=s+a;c++){const u=n[c];if("string"==typeof u)l+=u;else if("number"==typeof u)if(u<0)l+=R(e[r-u]);else{const d=u>>>2;switch(3&u){case 1:const f=n[++c],h=n[++c],p=t.data[d];"string"==typeof p?lp(e[j],e[d],null,p,f,l,h):bt(t,p,e,f,l,e[j],h,!1);break;case 0:const m=e[d];null!==m&&Y_(e[j],m,l);break;case 2:hF(t,Ol(t,d),e,l);break;case 3:vD(t,Ol(t,d),r,e)}}}}else{const l=n[s+1];if(l>0&&3==(3&l)){const u=Ol(t,l>>>2);e[u.currentCaseLViewIndex]<0&&vD(t,u,r,e)}}s+=a}}function vD(t,e,n,r){let i=r[e.currentCaseLViewIndex];if(null!==i){let s=Fl;i<0&&(i=r[e.currentCaseLViewIndex]=~i,s=-1),_D(t,r,e.update[i],n,s)}}function hF(t,e,n,r){const i=function pF(t,e){let n=t.cases.indexOf(e);if(-1===n)switch(t.type){case 1:{const r=function eF(t,e){const n=oD(e)(parseInt(t,10)),r=JO[n];return void 0!==r?r:"other"}(e,function nF(){return lD}());n=t.cases.indexOf(r),-1===n&&"other"!==r&&(n=t.cases.indexOf("other"));break}case 0:n=t.cases.indexOf("other")}return-1===n?null:n}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(e,r);if(Wu(e,n)!==i&&(bD(t,e,n),n[e.currentCaseLViewIndex]=null===i?null:~i,null!==i)){const o=n[e.anchorIdx];o&&yD(t,e.create[i],n,o)}}function bD(t,e,n){let r=Wu(e,n);if(null!==r){const i=e.remove[r];for(let s=0;s<i.length;s++){const o=i[s];if(o>0){const a=nu(o,n);null!==a&&av(n[j],a)}else bD(t,Ol(t,~o),n)}}}function mF(){const t=[];let n,r,e=-1;function s(a,l){e=0;const c=Wu(a,l);r=null!==c?a.remove[c]:X}function o(){if(e<r.length){const a=r[e++];if(a>0)return n[a];{t.push(e,r);const l=~a;return s(n[1].data[l],n),o()}}return 0===t.length?null:(r=t.pop(),e=t.pop(),o())}return function i(a,l){for(n=l;t.length;)t.pop();return s(a.value,l),o}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const qu=/\ufffd(\d+):?\d*\ufffd/gi,gF=/({\s*\ufffd\d+:?\d*\ufffd\s*,\s*\S{6}\s*,[\s\S]*})/gi,yF=/\ufffd(\d+)\ufffd/,CD=/^\s*(\ufffd\d+:?\d*\ufffd)\s*,\s*(select|plural)\s*,/,_F=/\ufffd\/?\*(\d+:\d+)\ufffd/gi,vF=/\ufffd(\/?[#*]\d+):?\d*\ufffd/gi,bF=/\uE500/g;function CF(t,e,n,r,i,s){const o=rl(),a=[],l=[],c=[[]];i=function AF(t,e){if(function IF(t){return-1===t}(e))return MD(t);{const n=t.indexOf(`:${e}\ufffd`)+2+e.toString().length,r=t.search(new RegExp(`\ufffd\\/\\*\\d+:${e}\ufffd`));return MD(t.substring(n,r))}}(i,s);const u=function DF(t){return t.replace(bF," ")}(i).split(vF);for(let d=0;d<u.length;d++){let f=u[d];if(0==(1&d)){const h=wp(f);for(let p=0;p<h.length;p++){let m=h[p];if(0==(1&p)){const g=m;""!==g&&EF(t,o,c[0],a,l,n,g)}else{const g=m;if("object"!=typeof g)throw new Error(`Unable to parse ICU expression in "${i}" message.`);ID(t,n,l,e,g,ED(t,o,c[0],n,a,"",!0).index)}}}else{const h=47===f.charCodeAt(0),m=(f.charCodeAt(h?1:0),22+Number.parseInt(f.substring(h?2:1)));if(h)c.shift(),gn(rl(),!1);else{const g=lF(t,c[0],m);c.unshift([]),gn(g,!0)}}}t.data[r]={create:a,update:l}}function ED(t,e,n,r,i,s,o){const a=So(t,r,1,null);let l=a<<et.SHIFT,c=rl();e===c&&(c=null),null===c&&(l|=et.APPEND_EAGERLY),o&&(l|=et.COMMENT,function d1(t){void 0===Nh&&(Nh=t())}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(mF)),i.push(l,null===s?"":s);const u=np(t,a,o?32:1,null===s?"":s,null);fD(n,u);const d=u.index;return gn(u,!1),null!==c&&e!==c&&function aF(t,e){let n=t.insertBeforeIndex;null===n?(sv(uD,dD),n=t.insertBeforeIndex=[null,e]):(Vn(Array.isArray(n),!0,"Expecting array here"),n.push(e))}(c,d),u}function EF(t,e,n,r,i,s,o){const a=o.match(qu),l=ED(t,e,n,s,r,a?null:o,!1);a&&Pl(i,o,l.index,null,0,null)}function Pl(t,e,n,r,i,s){const o=t.length,a=o+1;t.push(null,null);const l=o+2,c=e.split(qu);let u=0;for(let d=0;d<c.length;d++){const f=c[d];if(1&d){const h=i+parseInt(f,10);t.push(-1-h),u|=wD(h)}else""!==f&&t.push(f)}return t.push(n<<2|(r?1:0)),r&&t.push(r,s),t[o]=u,t[a]=t.length-l,u}function MF(t){let e=0;for(let n=0;n<t.length;n++){const r=t[n];"number"==typeof r&&r<0&&e++}return e}function wD(t){return 1<<Math.min(t,31)}function MD(t){let e,s,n="",r=0,i=!1;for(;null!==(e=_F.exec(t));)i?e[0]===`\ufffd/*${s}\ufffd`&&(r=e.index,i=!1):(n+=t.substring(r,e.index+e[0].length),s=e[1],i=!0);return n+=t.slice(r),n}function ID(t,e,n,r,i,s){let o=0;const a={type:i.type,currentCaseLViewIndex:So(t,e,1,null),anchorIdx:s,cases:[],create:[],remove:[],update:[]};(function NF(t,e,n){t.push(wD(e.mainBinding),2,-1-e.mainBinding,n<<2|2)})(n,i,s),function oF(t,e,n){const r=t.data[e];null===r?t.data[e]=n:r.value=n}(t,s,a);const l=i.values;for(let c=0;c<l.length;c++){const u=l[c],d=[];for(let f=0;f<u.length;f++){const h=u[f];if("string"!=typeof h){const p=d.push(h)-1;u[f]=`\x3c!--\ufffd${p}\ufffd--\x3e`}}o=TF(t,a,e,n,r,i.cases[c],u.join(""),d)|o}o&&function OF(t,e,n){t.push(e,1,n<<2|3)}(n,o,s)}function SF(t){const e=[],n=[];let r=1,i=0;const s=wp(t=t.replace(CD,function(o,a,l){return r="select"===l?0:1,i=parseInt(a.slice(1),10),""}));for(let o=0;o<s.length;){let a=s[o++].trim();1===r&&(a=a.replace(/\s*(?:=)?(\w+)\s*/,"$1")),a.length&&e.push(a);const l=wp(s[o++]);e.length>n.length&&n.push(l)}return{type:r,mainBinding:i,cases:e,values:n}}function wp(t){if(!t)return[];let e=0;const n=[],r=[],i=/[{}]/g;let s;for(i.lastIndex=0;s=i.exec(t);){const a=s.index;if("}"==s[0]){if(n.pop(),0==n.length){const l=t.substring(e,a);CD.test(l)?r.push(SF(l)):r.push(l),e=a+1}}else{if(0==n.length){const l=t.substring(e,a);r.push(l),e=a+1}n.push("{")}}const o=t.substring(e);return r.push(o),r}function TF(t,e,n,r,i,s,o,a){const l=[],c=[],u=[];e.cases.push(s),e.create.push(l),e.remove.push(c),e.update.push(u);const f=p_(u_()).getInertBodyElement(o),h=ph(f)||f;return h?AD(t,e,n,r,l,c,u,h,i,a,0):0}function AD(t,e,n,r,i,s,o,a,l,c,u){let d=0,f=a.firstChild;for(;f;){const h=So(t,n,1,null);switch(f.nodeType){case Node.ELEMENT_NODE:const p=f,m=p.tagName.toLowerCase();if(fh.hasOwnProperty(m)){Mp(i,zu,m,l,h),t.data[h]=m;const y=p.attributes;for(let I=0;I<y.length;I++){const B=y.item(I),U=B.name.toLowerCase();B.value.match(qu)?__.hasOwnProperty(U)&&(hh[U]?Pl(o,B.value,h,B.name,0,Du):Pl(o,B.value,h,B.name,0,null)):FF(i,h,B)}d=AD(t,e,n,r,i,s,o,f,h,c,u+1)|d,SD(s,h,u)}break;case Node.TEXT_NODE:const g=f.textContent||"",_=g.match(qu);Mp(i,null,_?"":g,l,h),SD(s,h,u),_&&(d=Pl(o,g,h,null,0,null)|d);break;case Node.COMMENT_NODE:const E=yF.exec(f.textContent||"");if(E){const I=c[parseInt(E[1],10)];Mp(i,Gu,"",l,h),ID(t,n,r,l,I,h),xF(s,h,u)}}f=f.nextSibling}return d}function SD(t,e,n){0===n&&t.push(e)}function xF(t,e,n){0===n&&(t.push(~e),t.push(e))}function Mp(t,e,n,r,i){null!==e&&t.push(e),t.push(n,i,function cF(t,e,n){return t|e<<17|n<<1}(0,r,i))}function FF(t,e,n){t.push(e<<1|1,n.name,n.value)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const kF=/\[(\ufffd.+?\ufffd?)\]/,RF=/\[(\ufffd.+?\ufffd?)\]|(\ufffd\/?\*\d+:\d+\ufffd)/g,PF=/({\s*)(VAR_(PLURAL|SELECT)(_\d+)?)(\s*,)/g,LF=/{([A-Z0-9_]+)}/g,VF=/\ufffdI18N_EXP_(ICU(_\d+)?)\ufffd/g,BF=/\/\*/,jF=/\d+\:(\d+)/;
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function xD(t,e,n=-1){const r=z(),i=C(),s=22+t,o=qr(r.consts,e),a=rl();r.firstCreatePass&&CF(r,null===a?0:a.index,i,s,o,n);const l=r.data[s],u=J_(r,a===i[6]?null:a,i),d=a&&8&a.type?i[a.index]:null;(function fF(t,e,n,r){const i=t[j];for(let s=0;s<e.length;s++){const o=e[s++],a=e[s],l=(o&et.COMMENT)===et.COMMENT,c=(o&et.APPEND_EAGERLY)===et.APPEND_EAGERLY,u=o>>>et.SHIFT;let d=t[u];null===d&&(d=t[u]=l?i.createComment(a):Rh(i,a)),c&&null!==n&&Ui(i,n,d,r,!1)}})(i,l.create,u,d),S0(!0)}function ND(){S0(!1)}function $F(t,e,n){xD(t,e,n),ND()}function UF(t,e){const n=z();!function wF(t,e,n){const i=Ae().index,s=[];if(t.firstCreatePass&&null===t.data[e]){for(let o=0;o<n.length;o+=2){const a=n[o],l=n[o+1];if(""!==l){if(gF.test(l))throw new Error(`ICU expressions are not supported in attributes. Message: "${l}".`);Pl(s,l,i,a,MF(s),null)}}t.data[e]=s}}(n,t+22,qr(n.consts,e))}function OD(t){return function uF(t){t&&(Fl|=1<<Math.min(kl,31)),kl++}(ze(C(),oo(),t)),OD}function zF(t){!function dF(t,e,n){if(kl>0){const r=t.data[n];_D(t,e,Array.isArray(r)?r:r.update,jn()-kl-1,Fl)}Fl=0,kl=0}(z(),C(),t+22)}function GF(t,e={}){return function HF(t,e={}){let n=t;if(kF.test(t)){const r={},i=[0];n=n.replace(RF,(s,o,a)=>{const l=o||a,c=r[l]||[];if(c.length||(l.split("|").forEach(m=>{const g=m.match(jF),_=g?parseInt(g[1],10):0,E=BF.test(m);c.push([_,E,m])}),r[l]=c),!c.length)throw new Error(`i18n postprocess: unmatched placeholder - ${l}`);const u=i[i.length-1];let d=0;for(let m=0;m<c.length;m++)if(c[m][0]===u){d=m;break}const[f,h,p]=c[d];return h?i.pop():u!==f&&i.push(f),c.splice(d,1),p})}return Object.keys(e).length&&(n=n.replace(PF,(r,i,s,o,a,l)=>e.hasOwnProperty(s)?`${i}${e[s]}${l}`:r),n=n.replace(LF,(r,i)=>e.hasOwnProperty(i)?e[i]:r),n=n.replace(VF,(r,i)=>{if(e.hasOwnProperty(i)){const s=e[i];if(!s.length)throw new Error(`i18n postprocess: unmatched ICU - ${r} with key: ${i}`);return s.shift()}return r})),n}(t,e)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Ip(t,e,n,r,i){if(t=F(t),Array.isArray(t))for(let s=0;s<t.length;s++)Ip(t[s],e,n,r,i);else{const s=z(),o=C();let a=$i(t)?t:F(t.provide),l=O_(t);const c=Ae(),u=1048575&c.providerIndexes,d=c.directiveStart,f=c.providerIndexes>>20;if($i(t)||!t.multi){const h=new il(l,i,v),p=Sp(a,e,i?u:u+f,d);-1===p?(du(ol(c,o),s,a),Ap(s,t,e.length),e.push(a),c.directiveStart++,c.directiveEnd++,i&&(c.providerIndexes+=1048576),n.push(h),o.push(h)):(n[p]=h,o[p]=h)}else{const h=Sp(a,e,u+f,d),p=Sp(a,e,u,u+f),m=h>=0&&n[h],g=p>=0&&n[p];if(i&&!g||!i&&!m){du(ol(c,o),s,a);const _=function YF(t,e,n,r,i){const s=new il(t,n,v);return s.multi=[],s.index=e,s.componentProviders=0,FD(s,i,r&&!n),s}(i?KF:qF,n.length,i,r,l);!i&&g&&(n[p].providerFactory=_),Ap(s,t,e.length,0),e.push(a),c.directiveStart++,c.directiveEnd++,i&&(c.providerIndexes+=1048576),n.push(_),o.push(_)}else{Ap(s,t,h>-1?h:p,FD(n[i?p:h],l,!i&&r))}!i&&r&&g&&n[p].componentProviders++}}}function Ap(t,e,n,r){const i=$i(e),s=function Ex(t){return!!t.useClass}(e);if(i||s){const l=(s?F(e.useClass):e).prototype.ngOnDestroy;if(l){const c=t.destroyHooks||(t.destroyHooks=[]);if(!i&&e.multi){const u=c.indexOf(n);-1===u?c.push(n,[r,l]):c[u+1].push(r,l)}else c.push(n,l)}}}function FD(t,e,n){return n&&t.componentProviders++,t.multi.push(e)-1}function Sp(t,e,n,r){for(let i=n;i<r;i++)if(e[i]===t)return i;return-1}function qF(t,e,n,r){return Tp(this.multi,[])}function KF(t,e,n,r){const i=this.multi;let s;if(this.providerFactory){const o=this.providerFactory.componentProviders,a=al(n,n[1],this.providerFactory.index,r);s=a.slice(0,o),Tp(i,s);for(let l=o;l<a.length;l++)s.push(a[l])}else s=[],Tp(i,s);return s}function Tp(t,e){for(let n=0;n<t.length;n++){const r=t[n];e.push(r())}return e}function ce(t,e=[]){return n=>{n.providersResolver=(r,i)=>function WF(t,e,n){const r=z();if(r.firstCreatePass){const i=Zt(t);Ip(n,r.data,r.blueprint,i,!0),Ip(e,r.data,r.blueprint,i,!1)}}(r,i?i(t):t,e)}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class Ho{}class kD extends Ho{constructor(e,n){super(),this._parent=n,this._bootstrapComponents=[],this.destroyCbs=[],this.componentFactoryResolver=new hp(this);const r=ht(e);this._bootstrapComponents=Wn(r.bootstrap),this._r3Injector=bv(e,n,[{provide:Ho,useValue:this},{provide:_l,useValue:this.componentFactoryResolver}],oe(e),new Set(["environment"])),this._r3Injector.resolveInjectorInitializers(),this.instance=this._r3Injector.get(e)}get injector(){return this._r3Injector}destroy(){const e=this._r3Injector;!e.destroyed&&e.destroy(),this.destroyCbs.forEach(n=>n()),this.destroyCbs=null}onDestroy(e){this.destroyCbs.push(e)}}class xp extends class QF{}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */{constructor(e){super(),this.moduleType=e}create(e){return new kD(this.moduleType,e)}}class XF extends Ho{constructor(e,n,r){super(),this.componentFactoryResolver=new hp(this),this.instance=null;const i=new N_([...e,{provide:Ho,useValue:this},{provide:_l,useValue:this.componentFactoryResolver}],n||wu(),r,new Set(["environment"]));this.injector=i,i.resolveInjectorInitializers()}destroy(){this.injector.destroy()}onDestroy(e){this.injector.onDestroy(e)}}function RD(t,e,n=null){return new XF(t,e,n).injector}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class Ku{constructor(e){this._injector=e,this.cachedInjectors=new Map}getOrCreateStandaloneInjector(e){if(!e.standalone)return null;if(!this.cachedInjectors.has(e.id)){const n=A_(0,e.type),r=n.length>0?RD([n],this._injector,`Standalone[${e.type.name}]`):null;this.cachedInjectors.set(e.id,r)}return this.cachedInjectors.get(e.id)}ngOnDestroy(){try{for(const e of this.cachedInjectors.values())null!==e&&e.destroy()}finally{this.cachedInjectors.clear()}}}function JF(t){t.getStandaloneInjector=e=>e.get(Ku).getOrCreateStandaloneInjector(t)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function lk(t,e,n){const r=Qe()+t,i=C();return i[r]===P?bn(i,r,n?e.call(n):e()):Sl(i,r)}function ck(t,e,n,r){return $D(C(),Qe(),t,e,n,r)}function uk(t,e,n,r,i){return UD(C(),Qe(),t,e,n,r,i)}function dk(t,e,n,r,i,s){return zD(C(),Qe(),t,e,n,r,i,s)}function fk(t,e,n,r,i,s,o){return GD(C(),Qe(),t,e,n,r,i,s,o)}function hk(t,e,n,r,i,s,o,a){const l=Qe()+t,c=C(),u=Rt(c,l,n,r,i,s);return ze(c,l+4,o)||u?bn(c,l+5,a?e.call(a,n,r,i,s,o):e(n,r,i,s,o)):Sl(c,l+5)}function pk(t,e,n,r,i,s,o,a,l){const c=Qe()+t,u=C(),d=Rt(u,c,n,r,i,s);return Gi(u,c+4,o,a)||d?bn(u,c+6,l?e.call(l,n,r,i,s,o,a):e(n,r,i,s,o,a)):Sl(u,c+6)}function mk(t,e,n,r,i,s,o,a,l,c){const u=Qe()+t,d=C();let f=Rt(d,u,n,r,i,s);return Bu(d,u+4,o,a,l)||f?bn(d,u+7,c?e.call(c,n,r,i,s,o,a,l):e(n,r,i,s,o,a,l)):Sl(d,u+7)}function gk(t,e,n,r,i,s,o,a,l,c,u){const d=Qe()+t,f=C(),h=Rt(f,d,n,r,i,s);return Rt(f,d+4,o,a,l,c)||h?bn(f,d+8,u?e.call(u,n,r,i,s,o,a,l,c):e(n,r,i,s,o,a,l,c)):Sl(f,d+8)}function yk(t,e,n,r){return WD(C(),Qe(),t,e,n,r)}function Ll(t,e){const n=t[e];return n===P?void 0:n}function $D(t,e,n,r,i,s){const o=e+n;return ze(t,o,i)?bn(t,o+1,s?r.call(s,i):r(i)):Ll(t,o+1)}function UD(t,e,n,r,i,s,o){const a=e+n;return Gi(t,a,i,s)?bn(t,a+2,o?r.call(o,i,s):r(i,s)):Ll(t,a+2)}function zD(t,e,n,r,i,s,o,a){const l=e+n;return Bu(t,l,i,s,o)?bn(t,l+3,a?r.call(a,i,s,o):r(i,s,o)):Ll(t,l+3)}function GD(t,e,n,r,i,s,o,a,l){const c=e+n;return Rt(t,c,i,s,o,a)?bn(t,c+4,l?r.call(l,i,s,o,a):r(i,s,o,a)):Ll(t,c+4)}function WD(t,e,n,r,i,s){let o=e+n,a=!1;for(let l=0;l<i.length;l++)ze(t,o++,i[l])&&(a=!0);return a?bn(t,o,r.apply(s,i)):Ll(t,o)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function _k(t,e){const n=z();let r;const i=t+22;n.firstCreatePass?(r=function vk(t,e){if(e)for(let n=e.length-1;n>=0;n--){const r=e[n];if(t===r.name)return r}}(e,n.pipeRegistry),n.data[i]=r,r.onDestroy&&(n.destroyHooks||(n.destroyHooks=[])).push(i,r.onDestroy)):r=n.data[i];const s=r.factory||(r.factory=Bi(r.type)),o=xt(v);try{const a=cu(!1),l=s();return cu(a),function aO(t,e,n,r){n>=t.data.length&&(t.data[n]=null,t.blueprint[n]=null),e[n]=r}(n,C(),i,l),l}finally{xt(o)}}function bk(t,e,n){const r=t+22,i=C(),s=so(i,r);return Vl(i,r)?$D(i,Qe(),e,s.transform,n,s):s.transform(n)}function Dk(t,e,n,r){const i=t+22,s=C(),o=so(s,i);return Vl(s,i)?UD(s,Qe(),e,o.transform,n,r,o):o.transform(n,r)}function Ck(t,e,n,r,i){const s=t+22,o=C(),a=so(o,s);return Vl(o,s)?zD(o,Qe(),e,a.transform,n,r,i,a):a.transform(n,r,i)}function Ek(t,e,n,r,i,s){const o=t+22,a=C(),l=so(a,o);return Vl(a,o)?GD(a,Qe(),e,l.transform,n,r,i,s,l):l.transform(n,r,i,s)}function wk(t,e,n){const r=t+22,i=C(),s=so(i,r);return Vl(i,r)?WD(i,Qe(),e,s.transform,n,s):s.transform.apply(s,n)}function Vl(t,e){return t[1].data[e].pure}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */Ku.\u0275prov=w({token:Ku,providedIn:"environment",factory:()=>new Ku(b(bo))});function Op(t){return e=>{setTimeout(t,void 0,e)}}const ue=class Mk extends Kt{constructor(e=!1){super(),this.__isAsync=e}emit(e){super.next(e)}subscribe(e,n,r){let i=e,s=n||(()=>null),o=r;if(e&&"object"==typeof e){const l=e;i=l.next?.bind(l),s=l.error?.bind(l),o=l.complete?.bind(l)}this.__isAsync&&(s=Op(s),i&&(i=Op(i)),o&&(o=Op(o)));const a=super.subscribe({next:i,error:s,complete:o});return e instanceof ct&&e.add(a),a}};
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Ik(){return this._results[zi()]()}class Fp{constructor(e=!1){this._emitDistinctChangesOnly=e,this.dirty=!0,this._results=[],this._changesDetected=!1,this._changes=null,this.length=0,this.first=void 0,this.last=void 0;const n=zi(),r=Fp.prototype;r[n]||(r[n]=Ik)}get changes(){return this._changes||(this._changes=new ue)}get(e){return this._results[e]}map(e){return this._results.map(e)}filter(e){return this._results.filter(e)}find(e){return this._results.find(e)}reduce(e,n){return this._results.reduce(e,n)}forEach(e){this._results.forEach(e)}some(e){return this._results.some(e)}toArray(){return this._results.slice()}toString(){return this._results.toString()}reset(e,n){const r=this;r.dirty=!1;const i=gt(e);(this._changesDetected=!function mT(t,e,n){if(t.length!==e.length)return!1;for(let r=0;r<t.length;r++){let i=t[r],s=e[r];if(n&&(i=n(i),s=n(s)),s!==i)return!1}return!0}(r._results,i,n))&&(r._results=i,r.length=i.length,r.last=i[this.length-1],r.first=i[0])}notifyOnChanges(){this._changes&&(this._changesDetected||!this._emitDistinctChangesOnly)&&this._changes.emit(this)}setDirty(){this.dirty=!0}destroy(){this.changes.complete(),this.changes.unsubscribe()}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class En{}En.__NG_ELEMENT_ID__=function Tk(){return Yu(Ae(),C())};const Ak=En,Sk=class extends Ak{constructor(e,n,r){super(),this._declarationLView=e,this._declarationTContainer=n,this.elementRef=r}createEmbeddedView(e,n){const r=this._declarationTContainer.tViews,i=Ou(this._declarationLView,r,e,16,null,r.declTNode,null,null,null,null,n||null),s=this._declarationLView[this._declarationTContainer.index];i[17]=s;const o=this._declarationLView[19];return null!==o&&(i[19]=o.createEmbeddedView(r)),rp(r,i,e),new Ml(i)}};function Yu(t,e){return 4&t.type?new Sk(e,t,Co(t,e)):null}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class rn{}rn.__NG_ELEMENT_ID__=function xk(){return YD(Ae(),C())};const Nk=rn,qD=class extends Nk{constructor(e,n,r){super(),this._lContainer=e,this._hostTNode=n,this._hostLView=r}get element(){return Co(this._hostTNode,this._hostLView)}get injector(){return new co(this._hostTNode,this._hostLView)}get parentInjector(){const e=uu(this._hostTNode,this._hostLView);if(B0(e)){const n=lo(e,this._hostLView),r=ao(e),i=n[1].data[r+8];return new co(i,n)}return new co(null,this._hostLView)}clear(){for(;this.length>0;)this.remove(this.length-1)}get(e){const n=KD(this._lContainer);return null!==n&&n[e]||null}get length(){return this._lContainer.length-10}createEmbeddedView(e,n,r){let i,s;"number"==typeof r?i=r:null!=r&&(i=r.index,s=r.injector);const o=e.createEmbeddedView(n||{},s);return this.insert(o,i),o}createComponent(e,n,r,i,s){const o=e&&!ul(e);let a;if(o)a=n;else{const d=n||{};a=d.index,r=d.injector,i=d.projectableNodes,s=d.environmentInjector||d.ngModuleRef}const l=o?e:new Il(te(e)),c=r||this.parentInjector;if(!s&&null==l.ngModule){const f=(o?c:this.parentInjector).get(bo,null);f&&(s=f)}const u=l.create(c,i,void 0,s);return this.insert(u.hostView,a),u}insert(e,n){const r=e._lView,i=r[1];if(function kS(t){return Qt(t[3])}(r)){const u=this.indexOf(e);if(-1!==u)this.detach(u);else{const d=r[3],f=new qD(d,d[6],d[3]);f.detach(f.indexOf(e))}}const s=this._adjustIndex(n),o=this._lContainer;b1(i,r,o,s);const a=jh(s,o),l=r[j],c=Mu(l,o[7]);return null!==c&&function y1(t,e,n,r,i,s){r[0]=i,r[6]=e,Cl(t,r,n,1,i,s)}(i,o[6],l,r,c,a),e.attachToViewContainerRef(),X0(kp(o),s,e),e}move(e,n){return this.insert(e,n)}indexOf(e){const n=KD(this._lContainer);return null!==n?n.indexOf(e):-1}remove(e){const n=this._adjustIndex(e,-1),r=Lh(this._lContainer,n);r&&(pu(kp(this._lContainer),n),Z_(r[1],r))}detach(e){const n=this._adjustIndex(e,-1),r=Lh(this._lContainer,n);return r&&null!=pu(kp(this._lContainer),n)?new Ml(r):null}_adjustIndex(e,n=0){return e??this.length+n}};function KD(t){return t[8]}function kp(t){return t[8]||(t[8]=[])}function YD(t,e){let n;const r=e[t.index];if(Qt(r))n=r;else{let i;if(8&t.type)i=we(r);else{const s=e[j];i=s.createComment("");const o=kt(t,e);Ui(s,Mu(s,o),i,function M1(t,e){return t.nextSibling(e)}(s,o),!1)}e[t.index]=n=Zv(r,e,i,t),ku(e,n)}return new qD(n,t,e)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class Rp{constructor(e){this.queryList=e,this.matches=null}clone(){return new Rp(this.queryList)}setDirty(){this.queryList.setDirty()}}class Pp{constructor(e=[]){this.queries=e}createEmbeddedView(e){const n=e.queries;if(null!==n){const r=null!==e.contentQueries?e.contentQueries[0]:n.length,i=[];for(let s=0;s<r;s++){const o=n.getByIndex(s),a=this.queries[o.indexInDeclarationView];i.push(a.clone())}return new Pp(i)}return null}insertView(e){this.dirtyQueriesWithMatches(e)}detachView(e){this.dirtyQueriesWithMatches(e)}dirtyQueriesWithMatches(e){for(let n=0;n<this.queries.length;n++)null!==rC(e,n).matches&&this.queries[n].setDirty()}}class QD{constructor(e,n,r=null){this.predicate=e,this.flags=n,this.read=r}}class Lp{constructor(e=[]){this.queries=e}elementStart(e,n){for(let r=0;r<this.queries.length;r++)this.queries[r].elementStart(e,n)}elementEnd(e){for(let n=0;n<this.queries.length;n++)this.queries[n].elementEnd(e)}embeddedTView(e){let n=null;for(let r=0;r<this.length;r++){const i=null!==n?n.length:0,s=this.getByIndex(r).embeddedTView(e,i);s&&(s.indexInDeclarationView=r,null!==n?n.push(s):n=[s])}return null!==n?new Lp(n):null}template(e,n){for(let r=0;r<this.queries.length;r++)this.queries[r].template(e,n)}getByIndex(e){return this.queries[e]}get length(){return this.queries.length}track(e){this.queries.push(e)}}class Vp{constructor(e,n=-1){this.metadata=e,this.matches=null,this.indexInDeclarationView=-1,this.crossesNgTemplate=!1,this._appliesToNextNode=!0,this._declarationNodeIndex=n}elementStart(e,n){this.isApplyingToNode(n)&&this.matchTNode(e,n)}elementEnd(e){this._declarationNodeIndex===e.index&&(this._appliesToNextNode=!1)}template(e,n){this.elementStart(e,n)}embeddedTView(e,n){return this.isApplyingToNode(e)?(this.crossesNgTemplate=!0,this.addMatch(-e.index,n),new Vp(this.metadata)):null}isApplyingToNode(e){if(this._appliesToNextNode&&1!=(1&this.metadata.flags)){const n=this._declarationNodeIndex;let r=e.parent;for(;null!==r&&8&r.type&&r.index!==n;)r=r.parent;return n===(null!==r?r.index:-1)}return this._appliesToNextNode}matchTNode(e,n){const r=this.metadata.predicate;if(Array.isArray(r))for(let i=0;i<r.length;i++){const s=r[i];this.matchTNodeWithReadOption(e,n,kk(n,s)),this.matchTNodeWithReadOption(e,n,fu(n,e,s,!1,!1))}else r===En?4&n.type&&this.matchTNodeWithReadOption(e,n,-1):this.matchTNodeWithReadOption(e,n,fu(n,e,r,!1,!1))}matchTNodeWithReadOption(e,n,r){if(null!==r){const i=this.metadata.read;if(null!==i)if(i===Ce||i===rn||i===En&&4&n.type)this.addMatch(n.index,-2);else{const s=fu(n,e,i,!1,!1);null!==s&&this.addMatch(n.index,s)}else this.addMatch(n.index,r)}}addMatch(e,n){null===this.matches?this.matches=[e,n]:this.matches.push(e,n)}}function kk(t,e){const n=t.localNames;if(null!==n)for(let r=0;r<n.length;r+=2)if(n[r]===e)return n[r+1];return null}function Pk(t,e,n,r){return-1===n?function Rk(t,e){return 11&t.type?Co(t,e):4&t.type?Yu(t,e):null}(e,t):-2===n?function Lk(t,e,n){if(n===Ce)return Co(e,t);if(n===En)return Yu(e,t);if(n===rn)return YD(e,t)}(t,e,r):al(t,t[1],n,e)}function ZD(t,e,n,r){const i=e[19].queries[r];if(null===i.matches){const s=t.data,o=n.matches,a=[];for(let l=0;l<o.length;l+=2){const c=o[l];if(c<0)a.push(null);else{const u=s[c];a.push(Pk(e,u,o[l+1],n.metadata.read))}}i.matches=a}return i.matches}function Bp(t,e,n,r){const i=t.queries.getByIndex(n),s=i.matches;if(null!==s){const o=ZD(t,e,i,n);for(let a=0;a<s.length;a+=2){const l=s[a];if(l>0)r.push(o[a/2]);else{const c=s[a+1],u=e[-l];for(let d=10;d<u.length;d++){const f=u[d];f[17]===f[3]&&Bp(f[1],f,c,r)}if(null!==u[9]){const d=u[9];for(let f=0;f<d.length;f++){const h=d[f];Bp(h[1],h,c,r)}}}}}return r}function XD(t){const e=C(),n=z(),r=T0();Wf(r+1);const i=rC(n,r);if(t.dirty&&function FS(t){return 4==(4&t[2])}(e)===(2==(2&i.metadata.flags))){if(null===i.matches)t.reset([]);else{const s=i.crossesNgTemplate?Bp(n,e,r,[]):ZD(n,e,i,r);t.reset(s,Rx),t.notifyOnChanges()}return!0}return!1}function JD(t,e,n){const r=z();r.firstCreatePass&&(nC(r,new QD(t,e,n),-1),2==(2&e)&&(r.staticViewQueries=!0)),tC(r,C(),e)}function Vk(t,e,n,r){const i=z();if(i.firstCreatePass){const s=Ae();nC(i,new QD(e,n,r),s.index),function jk(t,e){const n=t.contentQueries||(t.contentQueries=[]),r=n.length?n[n.length-1]:-1;e!==r&&n.push(t.queries.length-1,e)}(i,t),2==(2&n)&&(i.staticContentQueries=!0)}tC(i,C(),n)}function eC(){return function Bk(t,e){return t[19].queries[e].queryList}(C(),T0())}function tC(t,e,n){const r=new Fp(4==(4&n));$v(t,e,r,r.destroy),null===e[19]&&(e[19]=new Pp),e[19].queries.push(new Rp(r))}function nC(t,e,n){null===t.queries&&(t.queries=new Lp),t.queries.track(new Vp(e,n))}function rC(t,e){return t.queries.getByIndex(e)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Hk(t,e){return Yu(t,e)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const tt={\u0275\u0275attribute:at,\u0275\u0275attributeInterpolate1:ib,\u0275\u0275attributeInterpolate2:sb,\u0275\u0275attributeInterpolate3:ob,\u0275\u0275attributeInterpolate4:ab,\u0275\u0275attributeInterpolate5:lb,\u0275\u0275attributeInterpolate6:cb,\u0275\u0275attributeInterpolate7:ub,\u0275\u0275attributeInterpolate8:db,\u0275\u0275attributeInterpolateV:fb,\u0275\u0275defineComponent:Nt,\u0275\u0275defineDirective:T,\u0275\u0275defineInjectable:w,\u0275\u0275defineInjector:q,\u0275\u0275defineNgModule:J,\u0275\u0275definePipe:st,\u0275\u0275directiveInject:v,\u0275\u0275getInheritedFactory:Oe,\u0275\u0275inject:b,\u0275\u0275injectAttribute:ll,\u0275\u0275invalidFactory:Av,\u0275\u0275invalidFactoryDep:r_,\u0275\u0275templateRefExtractor:Hk,\u0275\u0275resetView:HS,\u0275\u0275NgOnChangesFeature:Xt,\u0275\u0275ProvidersFeature:ce,\u0275\u0275CopyDefinitionFeature:tO,\u0275\u0275InheritDefinitionFeature:G,\u0275\u0275StandaloneFeature:JF,\u0275\u0275nextContext:bp,\u0275\u0275namespaceHTML:ZS,\u0275\u0275namespaceMathML:QS,\u0275\u0275namespaceSVG:YS,\u0275\u0275enableBindings:VS,\u0275\u0275disableBindings:BS,\u0275\u0275elementStart:Me,\u0275\u0275elementEnd:Re,\u0275\u0275element:Qn,\u0275\u0275elementContainerStart:_p,\u0275\u0275elementContainerEnd:vp,\u0275\u0275elementContainer:hb,\u0275\u0275pureFunction0:lk,\u0275\u0275pureFunction1:ck,\u0275\u0275pureFunction2:uk,\u0275\u0275pureFunction3:dk,\u0275\u0275pureFunction4:fk,\u0275\u0275pureFunction5:hk,\u0275\u0275pureFunction6:pk,\u0275\u0275pureFunction7:mk,\u0275\u0275pureFunction8:gk,\u0275\u0275pureFunctionV:yk,\u0275\u0275getCurrentView:dO,\u0275\u0275restoreView:jS,\u0275\u0275listener:Pe,\u0275\u0275projection:Dt,\u0275\u0275syntheticHostProperty:sD,\u0275\u0275syntheticHostListener:gb,\u0275\u0275pipeBind1:bk,\u0275\u0275pipeBind2:Dk,\u0275\u0275pipeBind3:Ck,\u0275\u0275pipeBind4:Ek,\u0275\u0275pipeBindV:wk,\u0275\u0275projectionDef:Wi,\u0275\u0275hostProperty:Uu,\u0275\u0275property:Pt,\u0275\u0275propertyInterpolate:Dp,\u0275\u0275propertyInterpolate1:Cp,\u0275\u0275propertyInterpolate2:bb,\u0275\u0275propertyInterpolate3:Db,\u0275\u0275propertyInterpolate4:Cb,\u0275\u0275propertyInterpolate5:Eb,\u0275\u0275propertyInterpolate6:wb,\u0275\u0275propertyInterpolate7:Mb,\u0275\u0275propertyInterpolate8:Ib,\u0275\u0275propertyInterpolateV:Ab,\u0275\u0275pipe:_k,\u0275\u0275queryRefresh:XD,\u0275\u0275viewQuery:JD,\u0275\u0275loadQuery:eC,\u0275\u0275contentQuery:Vk,\u0275\u0275reference:lO,\u0275\u0275classMap:wO,\u0275\u0275classMapInterpolate1:OO,\u0275\u0275classMapInterpolate2:FO,\u0275\u0275classMapInterpolate3:kO,\u0275\u0275classMapInterpolate4:RO,\u0275\u0275classMapInterpolate5:PO,\u0275\u0275classMapInterpolate6:LO,\u0275\u0275classMapInterpolate7:VO,\u0275\u0275classMapInterpolate8:BO,\u0275\u0275classMapInterpolateV:jO,\u0275\u0275styleMap:Dn,\u0275\u0275styleMapInterpolate1:HO,\u0275\u0275styleMapInterpolate2:$O,\u0275\u0275styleMapInterpolate3:UO,\u0275\u0275styleMapInterpolate4:zO,\u0275\u0275styleMapInterpolate5:GO,\u0275\u0275styleMapInterpolate6:WO,\u0275\u0275styleMapInterpolate7:qO,\u0275\u0275styleMapInterpolate8:KO,\u0275\u0275styleMapInterpolateV:YO,\u0275\u0275styleProp:Rb,\u0275\u0275stylePropInterpolate1:Qb,\u0275\u0275stylePropInterpolate2:Zb,\u0275\u0275stylePropInterpolate3:Xb,\u0275\u0275stylePropInterpolate4:Jb,\u0275\u0275stylePropInterpolate5:eD,\u0275\u0275stylePropInterpolate6:tD,\u0275\u0275stylePropInterpolate7:nD,\u0275\u0275stylePropInterpolate8:rD,\u0275\u0275stylePropInterpolateV:iD,\u0275\u0275classProp:Lt,\u0275\u0275advance:vt,\u0275\u0275template:gp,\u0275\u0275text:xl,\u0275\u0275textInterpolate:$u,\u0275\u0275textInterpolate1:Nl,\u0275\u0275textInterpolate2:$b,\u0275\u0275textInterpolate3:Ub,\u0275\u0275textInterpolate4:zb,\u0275\u0275textInterpolate5:Gb,\u0275\u0275textInterpolate6:Wb,\u0275\u0275textInterpolate7:qb,\u0275\u0275textInterpolate8:Kb,\u0275\u0275textInterpolateV:Yb,\u0275\u0275i18n:$F,\u0275\u0275i18nAttributes:UF,\u0275\u0275i18nExp:OD,\u0275\u0275i18nStart:xD,\u0275\u0275i18nEnd:ND,\u0275\u0275i18nApply:zF,\u0275\u0275i18nPostprocess:GF,\u0275\u0275resolveWindow:o1,\u0275\u0275resolveDocument:a1,\u0275\u0275resolveBody:l1,\u0275\u0275setComponentScope:gS,\u0275\u0275setNgModuleScope:yS,\u0275\u0275registerNgModuleType:l_,\u0275\u0275sanitizeHtml:px,\u0275\u0275sanitizeStyle:mx,\u0275\u0275sanitizeResourceUrl:C_,\u0275\u0275sanitizeScript:gx,\u0275\u0275sanitizeUrl:D_,\u0275\u0275sanitizeUrlOrResourceUrl:bx,\u0275\u0275trustConstantHtml:yx,\u0275\u0275trustConstantResourceUrl:_x,forwardRef:ae,resolveForwardRef:F};let $o=null;
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function iC(t){return void 0!==t.ngModule}function sC(t){return!!ht(t)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const Bl=[];let jp=!1;function oC(t){return Array.isArray(t)?t.every(oC):!!F(t)}function Wk(t,e={}){(function qk(t,e,n=!1){const r=gt(e.declarations||X);let i=null;Object.defineProperty(t,h0,{configurable:!0,get:()=>(null===i&&(i=Se().compileNgModule(tt,`ng:///${t.name}/\u0275mod.js`,{type:t,bootstrap:gt(e.bootstrap||X).map(F),declarations:r.map(F),imports:gt(e.imports||X).map(F).map(dC),exports:gt(e.exports||X).map(F).map(dC),schemas:e.schemas?gt(e.schemas):null,id:e.id||null}),i.schemas||(i.schemas=[])),i)});let s=null;Object.defineProperty(t,Bn,{get:()=>{if(null===s){const a=Se();s=a.compileFactory(tt,`ng:///${t.name}/\u0275fac.js`,{name:t.name,type:t,deps:yu(t),target:a.FactoryTarget.NgModule,typeArgumentCount:0})}return s},configurable:!1});let o=null;Object.defineProperty(t,Tf,{get:()=>{if(null===o){const a={name:t.name,type:t,providers:e.providers||X,imports:[(e.imports||X).map(F),(e.exports||X).map(F)]};o=Se().compileInjector(tt,`ng:///${t.name}/\u0275inj.js`,a)}return o},configurable:!1})})(t,e),void 0!==e.id&&l_(t,e.id),function zk(t,e){Bl.push({moduleType:t,ngModule:e})}(t,e)}function Yk(t,e){const n=gt(e.declarations||X),r=Uo(t);n.forEach(i=>{if((i=F(i)).hasOwnProperty(Qc)){uC(te(i),r)}else!i.hasOwnProperty(Nf)&&!i.hasOwnProperty(Of)&&(i.ngSelectorScope=t)})}function uC(t,e){t.directiveDefs=()=>Array.from(e.compilation.directives).map(n=>n.hasOwnProperty(Qc)?te(n):Ke(n)).filter(n=>!!n),t.pipeDefs=()=>Array.from(e.compilation.pipes).map(n=>Ye(n)),t.schemas=e.schemas,t.tView=null}function Uo(t){if(sC(t))return function Qk(t){const e=ht(t,!0);if(null!==e.transitiveCompileScopes)return e.transitiveCompileScopes;const n={schemas:e.schemas||null,compilation:{directives:new Set,pipes:new Set},exported:{directives:new Set,pipes:new Set}};return Wn(e.imports).forEach(r=>{const i=Uo(r);i.exported.directives.forEach(s=>n.compilation.directives.add(s)),i.exported.pipes.forEach(s=>n.compilation.pipes.add(s))}),Wn(e.declarations).forEach(r=>{Ye(r)?n.compilation.pipes.add(r):n.compilation.directives.add(r)}),Wn(e.exports).forEach(r=>{const i=r;if(sC(i)){const s=Uo(i);s.exported.directives.forEach(o=>{n.compilation.directives.add(o),n.exported.directives.add(o)}),s.exported.pipes.forEach(o=>{n.compilation.pipes.add(o),n.exported.pipes.add(o)})}else Ye(i)?n.exported.pipes.add(i):n.exported.directives.add(i)}),e.transitiveCompileScopes=n,n}(t);if(Xa(t)){if(null!==(te(t)||Ke(t)))return{schemas:null,compilation:{directives:new Set,pipes:new Set},exported:{directives:new Set([t]),pipes:new Set}};if(null!==Ye(t))return{schemas:null,compilation:{directives:new Set,pipes:new Set},exported:{directives:new Set,pipes:new Set([t])}}}throw new Error(`${t.name} does not have a module def (\u0275mod property)`)}function dC(t){return iC(t)?t.ngModule:t}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let Up=0;function Zk(t,e){let n=null;(function kT(t,e){o_(e)&&(_o.set(t,e),ml.add(t))})(t,e),pC(t,e),Object.defineProperty(t,Qc,{get:()=>{if(null===n){const r=Se();if(o_(e)){const c=[`Component '${t.name}' is not resolved:`];throw e.templateUrl&&c.push(` - templateUrl: ${e.templateUrl}`),e.styleUrls&&e.styleUrls.length&&c.push(` - styleUrls: ${JSON.stringify(e.styleUrls)}`),c.push("Did you run and wait for 'resolveComponentResources()'?"),new Error(c.join("\n"))}const i=function Uk(){return $o}();let s=e.preserveWhitespaces;void 0===s&&(s=null!==i&&void 0!==i.preserveWhitespaces&&i.preserveWhitespaces);let o=e.encapsulation;void 0===o&&(o=null!==i&&void 0!==i.defaultEncapsulation?i.defaultEncapsulation:mn.Emulated);const a=e.templateUrl||`ng:///${t.name}/template.html`,l={...mC(t,e),typeSourceSpan:r.createParseSourceSpan("Component",t.name,a),template:e.template||"",preserveWhitespaces:s,styles:e.styles||X,animations:e.animations,declarations:[],changeDetection:e.changeDetection,encapsulation:o,interpolation:e.interpolation,viewProviders:e.viewProviders||null,isStandalone:!!e.standalone};Up++;try{if(l.usesInheritance&&gC(t),n=r.compileComponent(tt,a,l),e.standalone){const c=gt(e.imports||X),{directiveDefs:u,pipeDefs:d}=function Jk(t,e){let n=null,r=null;return{directiveDefs:()=>{if(null===n){n=[te(t)];const o=new Set;for(const a of e){const l=F(a);if(!o.has(l))if(o.add(l),ht(l)){const c=Uo(l);for(const u of c.exported.directives){const d=te(u)||Ke(u);d&&!o.has(u)&&(o.add(u),n.push(d))}}else{const c=te(l)||Ke(l);c&&n.push(c)}}}return n},pipeDefs:()=>{if(null===r){r=[];const o=new Set;for(const a of e){const l=F(a);if(!o.has(l))if(o.add(l),ht(l)){const c=Uo(l);for(const u of c.exported.pipes){const d=Ye(u);d&&!o.has(u)&&(o.add(u),r.push(d))}}else{const c=Ye(l);c&&r.push(c)}}}return r}}}(t,c);n.directiveDefs=u,n.pipeDefs=d,n.dependencies=()=>c.map(F)}}finally{Up--}if(0===Up&&function Gk(){if(!jp){jp=!0;try{for(let t=Bl.length-1;t>=0;t--){const{moduleType:e,ngModule:n}=Bl[t];n.declarations&&n.declarations.every(oC)&&(Bl.splice(t,1),Yk(e,n))}}finally{jp=!1}}}(),function eR(t){return void 0!==t.ngSelectorScope}(t)){const c=Uo(t.ngSelectorScope);uC(n,c)}if(e.schemas){if(!e.standalone)throw new Error(`The 'schemas' was specified for the ${Q(t)} but is only valid on a component that is standalone.`);n.schemas=e.schemas}else e.standalone&&(n.schemas=[])}return n},configurable:!1})}function fC(t,e){let n=null;pC(t,e||{}),Object.defineProperty(t,Nf,{get:()=>{if(null===n){const r=hC(t,e||{});n=Se().compileDirective(tt,r.sourceMapUrl,r.metadata)}return n},configurable:!1})}function hC(t,e){const n=t&&t.name,r=`ng:///${n}/\u0275dir.js`,i=Se(),s=mC(t,e);return s.typeSourceSpan=i.createParseSourceSpan("Directive",n,r),s.usesInheritance&&gC(t),{metadata:s,sourceMapUrl:r}}function pC(t,e){let n=null;Object.defineProperty(t,Bn,{get:()=>{if(null===n){const r=hC(t,e),i=Se();n=i.compileFactory(tt,`ng:///${t.name}/\u0275fac.js`,{name:r.metadata.name,type:r.metadata.type,typeArgumentCount:0,deps:yu(t),target:i.FactoryTarget.Directive})}return n},configurable:!1})}function tR(t){return Object.getPrototypeOf(t.prototype)===Object.prototype}function mC(t,e){const n=pl(),r=n.ownPropMetadata(t);return{name:t.name,type:t,selector:void 0!==e.selector?e.selector:null,host:e.host||to,propMetadata:r,inputs:e.inputs||X,outputs:e.outputs||X,queries:yC(t,r,_C),lifecycle:{usesOnChanges:n.hasLifecycleHook(t,"ngOnChanges")},typeSourceSpan:null,usesInheritance:!tR(t),exportAs:iR(e.exportAs),providers:e.providers||null,viewQueries:yC(t,r,vC),isStandalone:!!e.standalone}}function gC(t){const e=Object.prototype;let n=Object.getPrototypeOf(t.prototype).constructor;for(;n&&n!==e;)!Ke(n)&&!te(n)&&oR(n)&&fC(n,null),n=Object.getPrototypeOf(n)}function nR(t){return"string"==typeof t?DC(t):F(t)}function rR(t,e){return{propertyName:t,predicate:nR(e.selector),descendants:e.descendants,first:e.first,read:e.read?e.read:null,static:!!e.static,emitDistinctChangesOnly:!!e.emitDistinctChangesOnly}}function yC(t,e,n){const r=[];for(const i in e)if(e.hasOwnProperty(i)){const s=e[i];s.forEach(o=>{if(n(o)){if(!o.selector)throw new Error(`Can't construct a query for the property "${i}" of "${Q(t)}" since the query selector wasn't defined.`);if(s.some(bC))throw new Error("Cannot combine @Input decorators with query decorators");r.push(rR(i,o))}})}return r}function iR(t){return void 0===t?null:DC(t)}function _C(t){const e=t.ngMetadataName;return"ContentChild"===e||"ContentChildren"===e}function vC(t){const e=t.ngMetadataName;return"ViewChild"===e||"ViewChildren"===e}function bC(t){return"Input"===t.ngMetadataName}function DC(t){return t.split(",").map(e=>e.trim())}const sR=["ngOnChanges","ngOnInit","ngOnDestroy","ngDoCheck","ngAfterViewInit","ngAfterViewChecked","ngAfterContentInit","ngAfterContentChecked"];function oR(t){const e=pl();if(sR.some(r=>e.hasLifecycleHook(t,r)))return!0;const n=e.propMetadata(t);for(const r in n){const i=n[r];for(let s=0;s<i.length;s++){const o=i[s],a=o.ngMetadataName;if(bC(o)||_C(o)||vC(o)||"Output"===a||"HostBinding"===a||"HostListener"===a)return!0}}return!1}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function CC(t,e){return{type:t,name:t.name,pipeName:e.name,pure:void 0===e.pure||e.pure,isStandalone:!!e.standalone}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const lR=cl("Directive",(t={})=>t,void 0,void 0,(t,e)=>fC(t,e));
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */cl("Component",(t={})=>({changeDetection:ki.Default,...t}),lR,void 0,(t,e)=>Zk(t,e)),cl("Pipe",t=>({pure:!0,...t}),void 0,void 0,(t,e)=>function aR(t,e){let n=null,r=null;Object.defineProperty(t,Bn,{get:()=>{if(null===r){const i=CC(t,e),s=Se(i.type);r=s.compileFactory(tt,`ng:///${i.name}/\u0275fac.js`,{name:i.name,type:i.type,typeArgumentCount:0,deps:yu(t),target:s.FactoryTarget.Pipe})}return r},configurable:!1}),Object.defineProperty(t,Of,{get:()=>{if(null===n){const i=CC(t,e);n=Se(i.type).compilePipe(tt,`ng:///${i.name}/\u0275pipe.js`,i)}return n},configurable:!1})}(t,e)),Qr("Input",t=>({bindingPropertyName:t})),Qr("Output",t=>({bindingPropertyName:t})),Qr("HostBinding",t=>({hostPropertyName:t})),Qr("HostListener",(t,e)=>({eventName:t,args:e})),cl("NgModule",t=>t,void 0,void 0,(t,e)=>Wk(t,e));
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function Zu(...t){}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const EC=new x("Application Initializer");class Zn{constructor(e){this.appInits=e,this.resolve=Zu,this.reject=Zu,this.initialized=!1,this.done=!1,this.donePromise=new Promise((n,r)=>{this.resolve=n,this.reject=r})}runInitializers(){if(this.initialized)return;const e=[],n=()=>{this.done=!0,this.resolve()};if(this.appInits)for(let r=0;r<this.appInits.length;r++){const i=this.appInits[r]();if(ju(i))e.push(i);else if(mb(i)){const s=new Promise((o,a)=>{i.subscribe({complete:o,error:a})});e.push(s)}}Promise.all(e).then(()=>{n()}).catch(r=>{this.reject(r)}),0===e.length&&n(),this.initialized=!0}}Zn.\u0275fac=function(e){return new(e||Zn)(b(EC,8))},Zn.\u0275prov=w({token:Zn,factory:Zn.\u0275fac,providedIn:"root"});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const Ki=new x("AppId",{providedIn:"root",factory:wC});function wC(){return`${zp()}${zp()}${zp()}`}function zp(){return String.fromCharCode(97+Math.floor(25*Math.random()))}const MC=new x("Platform Initializer"),Xu=new x("Platform ID",{providedIn:"platform",factory:()=>"unknown"}),cR=new x("appBootstrapListener"),zo=(new x("Application Packages Root URL"),new x("AnimationModuleType"));
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class Yi{log(e){console.log(e)}warn(e){console.warn(e)}}Yi.\u0275fac=function(e){return new(e||Yi)},Yi.\u0275prov=w({token:Yi,factory:Yi.\u0275fac,providedIn:"platform"});const wn=new x("LocaleId",{providedIn:"root",factory:()=>Fe(wn,$.Optional|$.SkipSelf)||
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function uR(){return typeof $localize<"u"&&$localize.locale||jo}()}),dR=new x("DefaultCurrencyCode",{providedIn:"root",factory:()=>"USD"});new x("Translations"),new x("TranslationsFormat");var IC;!function(t){t[t.Error=0]="Error",t[t.Warning=1]="Warning",t[t.Ignore=2]="Ignore"}(IC||(IC={}));
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class fR{constructor(e,n){this.ngModuleFactory=e,this.componentFactories=n}}class jl{compileModuleSync(e){return new xp(e)}compileModuleAsync(e){return Promise.resolve(this.compileModuleSync(e))}compileModuleAndAllComponentsSync(e){const n=this.compileModuleSync(e),i=Wn(ht(e).declarations).reduce((s,o)=>{const a=te(o);return a&&s.push(new Il(a)),s},[]);return new fR(n,i)}compileModuleAndAllComponentsAsync(e){return Promise.resolve(this.compileModuleAndAllComponentsSync(e))}clearCache(){}clearCacheFor(e){}getModuleId(e){}}jl.\u0275fac=function(e){return new(e||jl)},jl.\u0275prov=w({token:jl,factory:jl.\u0275fac,providedIn:"root"});const hR=new x("compilerOptions");
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const mR=Promise.resolve(0);function Gp(t){typeof Zone>"u"?mR.then(()=>{t&&t.apply(null,null)}):Zone.current.scheduleMicroTask("scheduleMicrotask",t)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class re{constructor({enableLongStackTrace:e=!1,shouldCoalesceEventChangeDetection:n=!1,shouldCoalesceRunChangeDetection:r=!1}){if(this.hasPendingMacrotasks=!1,this.hasPendingMicrotasks=!1,this.isStable=!0,this.onUnstable=new ue(!1),this.onMicrotaskEmpty=new ue(!1),this.onStable=new ue(!1),this.onError=new ue(!1),typeof Zone>"u")throw new D(908,!1);Zone.assertZonePatched();const i=this;if(i._nesting=0,i._outer=i._inner=Zone.current,Zone.AsyncStackTaggingZoneSpec){const s=Zone.AsyncStackTaggingZoneSpec;i._inner=i._inner.fork(new s("Angular"))}Zone.TaskTrackingZoneSpec&&(i._inner=i._inner.fork(new Zone.TaskTrackingZoneSpec)),e&&Zone.longStackTraceZoneSpec&&(i._inner=i._inner.fork(Zone.longStackTraceZoneSpec)),i.shouldCoalesceEventChangeDetection=!r&&n,i.shouldCoalesceRunChangeDetection=r,i.lastRequestAnimationFrameId=-1,i.nativeRequestAnimationFrame=function gR(){let t=fe.requestAnimationFrame,e=fe.cancelAnimationFrame;if(typeof Zone<"u"&&t&&e){const n=t[Zone.__symbol__("OriginalDelegate")];n&&(t=n);const r=e[Zone.__symbol__("OriginalDelegate")];r&&(e=r)}return{nativeRequestAnimationFrame:t,nativeCancelAnimationFrame:e}}().nativeRequestAnimationFrame,function vR(t){const e=()=>{!function _R(t){t.isCheckStableRunning||-1!==t.lastRequestAnimationFrameId||(t.lastRequestAnimationFrameId=t.nativeRequestAnimationFrame.call(fe,()=>{t.fakeTopEventTask||(t.fakeTopEventTask=Zone.root.scheduleEventTask("fakeTopEventTask",()=>{t.lastRequestAnimationFrameId=-1,qp(t),t.isCheckStableRunning=!0,Wp(t),t.isCheckStableRunning=!1},void 0,()=>{},()=>{})),t.fakeTopEventTask.invoke()}),qp(t))}(t)};t._inner=t._inner.fork({name:"angular",properties:{isAngularZone:!0},onInvokeTask:(n,r,i,s,o,a)=>{try{return TC(t),n.invokeTask(i,s,o,a)}finally{(t.shouldCoalesceEventChangeDetection&&"eventTask"===s.type||t.shouldCoalesceRunChangeDetection)&&e(),xC(t)}},onInvoke:(n,r,i,s,o,a,l)=>{try{return TC(t),n.invoke(i,s,o,a,l)}finally{t.shouldCoalesceRunChangeDetection&&e(),xC(t)}},onHasTask:(n,r,i,s)=>{n.hasTask(i,s),r===i&&("microTask"==s.change?(t._hasPendingMicrotasks=s.microTask,qp(t),Wp(t)):"macroTask"==s.change&&(t.hasPendingMacrotasks=s.macroTask))},onHandleError:(n,r,i,s)=>(n.handleError(i,s),t.runOutsideAngular(()=>t.onError.emit(s)),!1)})}(i)}static isInAngularZone(){return typeof Zone<"u"&&!0===Zone.current.get("isAngularZone")}static assertInAngularZone(){if(!re.isInAngularZone())throw new D(909,!1)}static assertNotInAngularZone(){if(re.isInAngularZone())throw new D(909,!1)}run(e,n,r){return this._inner.run(e,n,r)}runTask(e,n,r,i){const s=this._inner,o=s.scheduleEventTask("NgZoneEvent: "+i,e,yR,Zu,Zu);try{return s.runTask(o,n,r)}finally{s.cancelTask(o)}}runGuarded(e,n,r){return this._inner.runGuarded(e,n,r)}runOutsideAngular(e){return this._outer.run(e)}}const yR={};function Wp(t){if(0==t._nesting&&!t.hasPendingMicrotasks&&!t.isStable)try{t._nesting++,t.onMicrotaskEmpty.emit(null)}finally{if(t._nesting--,!t.hasPendingMicrotasks)try{t.runOutsideAngular(()=>t.onStable.emit(null))}finally{t.isStable=!0}}}function qp(t){t._hasPendingMicrotasks||(t.shouldCoalesceEventChangeDetection||t.shouldCoalesceRunChangeDetection)&&-1!==t.lastRequestAnimationFrameId?t.hasPendingMicrotasks=!0:t.hasPendingMicrotasks=!1}function TC(t){t._nesting++,t.isStable&&(t.isStable=!1,t.onUnstable.emit(null))}function xC(t){t._nesting--,Wp(t)}class bR{constructor(){this.hasPendingMicrotasks=!1,this.hasPendingMacrotasks=!1,this.isStable=!0,this.onUnstable=new ue,this.onMicrotaskEmpty=new ue,this.onStable=new ue,this.onError=new ue}run(e,n,r){return e.apply(n,r)}runGuarded(e,n,r){return e.apply(n,r)}runOutsideAngular(e){return e()}runTask(e,n,r,i){return e.apply(n,r)}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const NC=new x(""),Ju=new x("");class ni{constructor(e,n,r){this._ngZone=e,this.registry=n,this._pendingCount=0,this._isZoneStable=!0,this._didWork=!1,this._callbacks=[],this.taskTrackingZone=null,Kp||(function DR(t){Kp=t}(r),r.addToWindow(n)),this._watchAngularEvents(),e.run(()=>{this.taskTrackingZone=typeof Zone>"u"?null:Zone.current.get("TaskTrackingZone")})}_watchAngularEvents(){this._ngZone.onUnstable.subscribe({next:()=>{this._didWork=!0,this._isZoneStable=!1}}),this._ngZone.runOutsideAngular(()=>{this._ngZone.onStable.subscribe({next:()=>{re.assertNotInAngularZone(),Gp(()=>{this._isZoneStable=!0,this._runCallbacksIfReady()})}})})}increasePendingRequestCount(){return this._pendingCount+=1,this._didWork=!0,this._pendingCount}decreasePendingRequestCount(){if(this._pendingCount-=1,this._pendingCount<0)throw new Error("pending async requests below zero");return this._runCallbacksIfReady(),this._pendingCount}isStable(){return this._isZoneStable&&0===this._pendingCount&&!this._ngZone.hasPendingMacrotasks}_runCallbacksIfReady(){if(this.isStable())Gp(()=>{for(;0!==this._callbacks.length;){let e=this._callbacks.pop();clearTimeout(e.timeoutId),e.doneCb(this._didWork)}this._didWork=!1});else{let e=this.getPendingTasks();this._callbacks=this._callbacks.filter(n=>!n.updateCb||!n.updateCb(e)||(clearTimeout(n.timeoutId),!1)),this._didWork=!0}}getPendingTasks(){return this.taskTrackingZone?this.taskTrackingZone.macroTasks.map(e=>({source:e.source,creationLocation:e.creationLocation,data:e.data})):[]}addCallback(e,n,r){let i=-1;n&&n>0&&(i=setTimeout(()=>{this._callbacks=this._callbacks.filter(s=>s.timeoutId!==i),e(this._didWork,this.getPendingTasks())},n)),this._callbacks.push({doneCb:e,timeoutId:i,updateCb:r})}whenStable(e,n,r){if(r&&!this.taskTrackingZone)throw new Error('Task tracking zone is required when passing an update callback to whenStable(). Is "zone.js/plugins/task-tracking" loaded?');this.addCallback(e,n,r),this._runCallbacksIfReady()}getPendingRequestCount(){return this._pendingCount}registerApplication(e){this.registry.registerApplication(e,this)}unregisterApplication(e){this.registry.unregisterApplication(e)}findProviders(e,n,r){return[]}}ni.\u0275fac=function(e){return new(e||ni)(b(re),b(ri),b(Ju))},ni.\u0275prov=w({token:ni,factory:ni.\u0275fac});class ri{constructor(){this._applications=new Map}registerApplication(e,n){this._applications.set(e,n)}unregisterApplication(e){this._applications.delete(e)}unregisterAllApplications(){this._applications.clear()}getTestability(e){return this._applications.get(e)||null}getAllTestabilities(){return Array.from(this._applications.values())}getAllRootElements(){return Array.from(this._applications.keys())}findTestabilityInTree(e,n=!0){return Kp?.findTestabilityInTree(this,e,n)??null}}let Kp;
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */ri.\u0275fac=function(e){return new(e||ri)},ri.\u0275prov=w({token:ri,factory:ri.\u0275fac,providedIn:"platform"});let ii=null;const OC=new x("AllowMultipleToken"),Yp=new x("PlatformDestroyListeners"),Xn=!1;function CR(t,e,n){const r=new xp(n);if(typeof ngJitMode<"u"&&!ngJitMode)return Promise.resolve(r);const i=t.get(hR,[]).concat(e);if(function $k(t){null!==$o&&(t.defaultEncapsulation!==$o.defaultEncapsulation||t.preserveWhitespaces!==$o.preserveWhitespaces)||($o=t)}({defaultEncapsulation:jC(i.map(c=>c.defaultEncapsulation)),preserveWhitespaces:jC(i.map(c=>c.preserveWhitespaces))}),function PT(){return 0===_o.size}())return Promise.resolve(r);const s=function AR(t){const e=[];return t.forEach(n=>n&&e.push(...n)),e
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */}(i.map(c=>c.providers));if(0===s.length)return Promise.resolve(r);const o=Se(),l=Ve.create({providers:s}).get(o.ResourceLoader);return FT(c=>Promise.resolve(l.get(c))).then(()=>r)}function FC(t){const e=t.get(MC,null);e&&e.forEach(n=>n())}function kC(t,e,n=[]){const r=`Platform: ${e}`,i=new x(r);return(s=[])=>{let o=Qp();if(!o||o.injector.get(OC,!1)){const a=[...n,...s,{provide:i,useValue:!0}];t?t(a):function wR(t){if(ii&&!ii.get(OC,!1))throw new D(400,!1);ii=t;const e=t.get(Qi);return FC(t),e}(RC(a,r))}return function IR(t){const e=Qp();if(!e)throw new D(401,!1);return e}()}}function RC(t=[],e){return Ve.create({name:e,providers:[{provide:yh,useValue:"platform"},{provide:Yp,useValue:new Set([()=>ii=null])},...t]})}function Qp(){return ii?.get(Qi)??null}class Qi{constructor(e){this._injector=e,this._modules=[],this._destroyListeners=[],this._destroyed=!1}bootstrapModuleFactory(e,n){const r=LC(n?.ngZone,PC(n)),i=[{provide:re,useValue:r}];return r.run(()=>{const s=Ve.create({providers:i,parent:this.injector,name:e.moduleType.name}),o=e.create(s),a=o.injector.get(Gn,null);if(!a)throw new D(402,!1);return r.runOutsideAngular(()=>{const l=r.onError.subscribe({next:c=>{a.handleError(c)}});o.onDestroy(()=>{ed(this._modules,o),l.unsubscribe()})}),VC(a,r,()=>{const l=o.injector.get(Zn);return l.runInitializers(),l.donePromise.then(()=>(cD(o.injector.get(wn,jo)||jo),this._moduleDoBootstrap(o),o))})})}bootstrapModule(e,n=[]){const r=BC({},n);return CR(this.injector,r,e).then(i=>this.bootstrapModuleFactory(i,r))}_moduleDoBootstrap(e){const n=e.injector.get(Jn);if(e._bootstrapComponents.length>0)e._bootstrapComponents.forEach(r=>n.bootstrap(r));else{if(!e.instance.ngDoBootstrap)throw new D(403,!1);e.instance.ngDoBootstrap(n)}this._modules.push(e)}onDestroy(e){this._destroyListeners.push(e)}get injector(){return this._injector}destroy(){if(this._destroyed)throw new D(404,!1);this._modules.slice().forEach(n=>n.destroy()),this._destroyListeners.forEach(n=>n());const e=this._injector.get(Yp,null);e&&(e.forEach(n=>n()),e.clear()),this._destroyed=!0}get destroyed(){return this._destroyed}}function PC(t){return{enableLongStackTrace:!1,shouldCoalesceEventChangeDetection:!(!t||!t.ngZoneEventCoalescing)||!1,shouldCoalesceRunChangeDetection:!(!t||!t.ngZoneRunCoalescing)||!1}}function LC(t,e){let n;return n="noop"===t?new bR:("zone.js"===t?void 0:t)||new re(e),n}function VC(t,e,n){try{const r=n();return ju(r)?r.catch(i=>{throw e.runOutsideAngular(()=>t.handleError(i)),i}):r}catch(r){throw e.runOutsideAngular(()=>t.handleError(r)),r}}function BC(t,e){return t=Array.isArray(e)?e.reduce(BC,t):{...t,...e}}Qi.\u0275fac=function(e){return new(e||Qi)(b(Ve))},Qi.\u0275prov=w({token:Qi,factory:Qi.\u0275fac,providedIn:"platform"});class Jn{constructor(e,n,r){this._zone=e,this._injector=n,this._exceptionHandler=r,this._bootstrapListeners=[],this._views=[],this._runningTick=!1,this._stable=!0,this._destroyed=!1,this._destroyListeners=[],this.componentTypes=[],this.components=[],this._onMicrotaskEmptySubscription=this._zone.onMicrotaskEmpty.subscribe({next:()=>{this._zone.run(()=>{this.tick()})}});const i=new ge(o=>{this._stable=this._zone.isStable&&!this._zone.hasPendingMacrotasks&&!this._zone.hasPendingMicrotasks,this._zone.runOutsideAngular(()=>{o.next(this._stable),o.complete()})}),s=new ge(o=>{let a;this._zone.runOutsideAngular(()=>{a=this._zone.onStable.subscribe(()=>{re.assertNotInAngularZone(),Gp(()=>{!this._stable&&!this._zone.hasPendingMacrotasks&&!this._zone.hasPendingMicrotasks&&(this._stable=!0,o.next(!0))})})});const l=this._zone.onUnstable.subscribe(()=>{re.assertInAngularZone(),this._stable&&(this._stable=!1,this._zone.runOutsideAngular(()=>{o.next(!1)}))});return()=>{a.unsubscribe(),l.unsubscribe()}});this.isStable=iS(i,s.pipe(a0()))}get destroyed(){return this._destroyed}get injector(){return this._injector}bootstrap(e,n){const r=e instanceof F_;if(!this._injector.get(Zn).done){!r&&Xa(e);throw new D(405,Xn)}let s;s=r?e:this._injector.get(_l).resolveComponentFactory(e),this.componentTypes.push(s.componentType);const o=function ER(t){return t.isBoundToModule}(s)?void 0:this._injector.get(Ho),a=n||s.selector,l=s.create(Ve.NULL,[],a,o),c=l.location.nativeElement,u=l.injector.get(NC,null);return u?.registerApplication(c),l.onDestroy(()=>{this.detachView(l.hostView),ed(this.components,l),u?.unregisterApplication(c)}),this._loadComponent(l),l}tick(){if(this._runningTick)throw new D(101,!1);try{this._runningTick=!0;for(let e of this._views)e.detectChanges()}catch(e){this._zone.runOutsideAngular(()=>this._exceptionHandler.handleError(e))}finally{this._runningTick=!1}}attachView(e){const n=e;this._views.push(n),n.attachToAppRef(this)}detachView(e){const n=e;ed(this._views,n),n.detachFromAppRef()}_loadComponent(e){this.attachView(e.hostView),this.tick(),this.components.push(e),this._injector.get(cR,[]).concat(this._bootstrapListeners).forEach(r=>r(e))}ngOnDestroy(){if(!this._destroyed)try{this._destroyListeners.forEach(e=>e()),this._views.slice().forEach(e=>e.destroy()),this._onMicrotaskEmptySubscription.unsubscribe()}finally{this._destroyed=!0,this._views=[],this._bootstrapListeners=[],this._destroyListeners=[]}}onDestroy(e){return this._destroyListeners.push(e),()=>ed(this._destroyListeners,e)}destroy(){if(this._destroyed)throw new D(406,!1);const e=this._injector;e.destroy&&!e.destroyed&&e.destroy()}get viewCount(){return this._views.length}warnIfDestroyed(){}}function ed(t,e){const n=t.indexOf(e);n>-1&&t.splice(n,1)}function jC(t){for(let e=t.length-1;e>=0;e--)if(void 0!==t[e])return t[e]}Jn.\u0275fac=function(e){return new(e||Jn)(b(re),b(bo),b(Gn))},Jn.\u0275prov=w({token:Jn,factory:Jn.\u0275fac,providedIn:"root"});let HC=!0,$C=!1;
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class Hl{}Hl.__NG_ELEMENT_ID__=function TR(t){return function xR(t,e,n){if(eu(t)&&!n){const r=mt(t.index,e);return new Ml(r,r)}if(47&t.type){const r=e[16];return new Ml(r,e)}return null}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(Ae(),C(),16==(16&t))};
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class WC{constructor(){}supports(e){return Al(e)}create(e){return new PR(e)}}const RR=(t,e)=>e;class PR{constructor(e){this.length=0,this._linkedRecords=null,this._unlinkedRecords=null,this._previousItHead=null,this._itHead=null,this._itTail=null,this._additionsHead=null,this._additionsTail=null,this._movesHead=null,this._movesTail=null,this._removalsHead=null,this._removalsTail=null,this._identityChangesHead=null,this._identityChangesTail=null,this._trackByFn=e||RR}forEachItem(e){let n;for(n=this._itHead;null!==n;n=n._next)e(n)}forEachOperation(e){let n=this._itHead,r=this._removalsHead,i=0,s=null;for(;n||r;){const o=!r||n&&n.currentIndex<KC(r,i,s)?n:r,a=KC(o,i,s),l=o.currentIndex;if(o===r)i--,r=r._nextRemoved;else if(n=n._next,null==o.previousIndex)i++;else{s||(s=[]);const c=a-i,u=l-i;if(c!=u){for(let f=0;f<c;f++){const h=f<s.length?s[f]:s[f]=0,p=h+f;u<=p&&p<c&&(s[f]=h+1)}s[o.previousIndex]=u-c}}a!==l&&e(o,a,l)}}forEachPreviousItem(e){let n;for(n=this._previousItHead;null!==n;n=n._nextPrevious)e(n)}forEachAddedItem(e){let n;for(n=this._additionsHead;null!==n;n=n._nextAdded)e(n)}forEachMovedItem(e){let n;for(n=this._movesHead;null!==n;n=n._nextMoved)e(n)}forEachRemovedItem(e){let n;for(n=this._removalsHead;null!==n;n=n._nextRemoved)e(n)}forEachIdentityChange(e){let n;for(n=this._identityChangesHead;null!==n;n=n._nextIdentityChange)e(n)}diff(e){if(null==e&&(e=[]),!Al(e))throw new D(900,!1);return this.check(e)?this:null}onDestroy(){}check(e){this._reset();let i,s,o,n=this._itHead,r=!1;if(Array.isArray(e)){this.length=e.length;for(let a=0;a<this.length;a++)s=e[a],o=this._trackByFn(a,s),null!==n&&Object.is(n.trackById,o)?(r&&(n=this._verifyReinsertion(n,s,o,a)),Object.is(n.item,s)||this._addIdentityChange(n,s)):(n=this._mismatch(n,s,o,a),r=!0),n=n._next}else i=0,function rO(t,e){if(Array.isArray(t))for(let n=0;n<t.length;n++)e(t[n]);else{const n=t[zi()]();let r;for(;!(r=n.next()).done;)e(r.value)}}(e,a=>{o=this._trackByFn(i,a),null!==n&&Object.is(n.trackById,o)?(r&&(n=this._verifyReinsertion(n,a,o,i)),Object.is(n.item,a)||this._addIdentityChange(n,a)):(n=this._mismatch(n,a,o,i),r=!0),n=n._next,i++}),this.length=i;return this._truncate(n),this.collection=e,this.isDirty}get isDirty(){return null!==this._additionsHead||null!==this._movesHead||null!==this._removalsHead||null!==this._identityChangesHead}_reset(){if(this.isDirty){let e;for(e=this._previousItHead=this._itHead;null!==e;e=e._next)e._nextPrevious=e._next;for(e=this._additionsHead;null!==e;e=e._nextAdded)e.previousIndex=e.currentIndex;for(this._additionsHead=this._additionsTail=null,e=this._movesHead;null!==e;e=e._nextMoved)e.previousIndex=e.currentIndex;this._movesHead=this._movesTail=null,this._removalsHead=this._removalsTail=null,this._identityChangesHead=this._identityChangesTail=null}}_mismatch(e,n,r,i){let s;return null===e?s=this._itTail:(s=e._prev,this._remove(e)),null!==(e=null===this._unlinkedRecords?null:this._unlinkedRecords.get(r,null))?(Object.is(e.item,n)||this._addIdentityChange(e,n),this._reinsertAfter(e,s,i)):null!==(e=null===this._linkedRecords?null:this._linkedRecords.get(r,i))?(Object.is(e.item,n)||this._addIdentityChange(e,n),this._moveAfter(e,s,i)):e=this._addAfter(new LR(n,r),s,i),e}_verifyReinsertion(e,n,r,i){let s=null===this._unlinkedRecords?null:this._unlinkedRecords.get(r,null);return null!==s?e=this._reinsertAfter(s,e._prev,i):e.currentIndex!=i&&(e.currentIndex=i,this._addToMoves(e,i)),e}_truncate(e){for(;null!==e;){const n=e._next;this._addToRemovals(this._unlink(e)),e=n}null!==this._unlinkedRecords&&this._unlinkedRecords.clear(),null!==this._additionsTail&&(this._additionsTail._nextAdded=null),null!==this._movesTail&&(this._movesTail._nextMoved=null),null!==this._itTail&&(this._itTail._next=null),null!==this._removalsTail&&(this._removalsTail._nextRemoved=null),null!==this._identityChangesTail&&(this._identityChangesTail._nextIdentityChange=null)}_reinsertAfter(e,n,r){null!==this._unlinkedRecords&&this._unlinkedRecords.remove(e);const i=e._prevRemoved,s=e._nextRemoved;return null===i?this._removalsHead=s:i._nextRemoved=s,null===s?this._removalsTail=i:s._prevRemoved=i,this._insertAfter(e,n,r),this._addToMoves(e,r),e}_moveAfter(e,n,r){return this._unlink(e),this._insertAfter(e,n,r),this._addToMoves(e,r),e}_addAfter(e,n,r){return this._insertAfter(e,n,r),null===this._additionsTail?this._additionsTail=this._additionsHead=e:this._additionsTail=this._additionsTail._nextAdded=e,e}_insertAfter(e,n,r){const i=null===n?this._itHead:n._next;return e._next=i,e._prev=n,null===i?this._itTail=e:i._prev=e,null===n?this._itHead=e:n._next=e,null===this._linkedRecords&&(this._linkedRecords=new qC),this._linkedRecords.put(e),e.currentIndex=r,e}_remove(e){return this._addToRemovals(this._unlink(e))}_unlink(e){null!==this._linkedRecords&&this._linkedRecords.remove(e);const n=e._prev,r=e._next;return null===n?this._itHead=r:n._next=r,null===r?this._itTail=n:r._prev=n,e}_addToMoves(e,n){return e.previousIndex===n||(null===this._movesTail?this._movesTail=this._movesHead=e:this._movesTail=this._movesTail._nextMoved=e),e}_addToRemovals(e){return null===this._unlinkedRecords&&(this._unlinkedRecords=new qC),this._unlinkedRecords.put(e),e.currentIndex=null,e._nextRemoved=null,null===this._removalsTail?(this._removalsTail=this._removalsHead=e,e._prevRemoved=null):(e._prevRemoved=this._removalsTail,this._removalsTail=this._removalsTail._nextRemoved=e),e}_addIdentityChange(e,n){return e.item=n,null===this._identityChangesTail?this._identityChangesTail=this._identityChangesHead=e:this._identityChangesTail=this._identityChangesTail._nextIdentityChange=e,e}}class LR{constructor(e,n){this.item=e,this.trackById=n,this.currentIndex=null,this.previousIndex=null,this._nextPrevious=null,this._prev=null,this._next=null,this._prevDup=null,this._nextDup=null,this._prevRemoved=null,this._nextRemoved=null,this._nextAdded=null,this._nextMoved=null,this._nextIdentityChange=null}}class VR{constructor(){this._head=null,this._tail=null}add(e){null===this._head?(this._head=this._tail=e,e._nextDup=null,e._prevDup=null):(this._tail._nextDup=e,e._prevDup=this._tail,e._nextDup=null,this._tail=e)}get(e,n){let r;for(r=this._head;null!==r;r=r._nextDup)if((null===n||n<=r.currentIndex)&&Object.is(r.trackById,e))return r;return null}remove(e){const n=e._prevDup,r=e._nextDup;return null===n?this._head=r:n._nextDup=r,null===r?this._tail=n:r._prevDup=n,null===this._head}}class qC{constructor(){this.map=new Map}put(e){const n=e.trackById;let r=this.map.get(n);r||(r=new VR,this.map.set(n,r)),r.add(e)}get(e,n){const r=e,i=this.map.get(r);return i?i.get(e,n):null}remove(e){const n=e.trackById;return this.map.get(n).remove(e)&&this.map.delete(n),e}get isEmpty(){return 0===this.map.size}clear(){this.map.clear()}}function KC(t,e,n){const r=t.previousIndex;if(null===r)return r;let i=0;return n&&r<n.length&&(i=n[r]),r+e+i
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */}class YC{constructor(){}supports(e){return e instanceof Map||mp(e)}create(){return new BR}}class BR{constructor(){this._records=new Map,this._mapHead=null,this._appendAfter=null,this._previousMapHead=null,this._changesHead=null,this._changesTail=null,this._additionsHead=null,this._additionsTail=null,this._removalsHead=null,this._removalsTail=null}get isDirty(){return null!==this._additionsHead||null!==this._changesHead||null!==this._removalsHead}forEachItem(e){let n;for(n=this._mapHead;null!==n;n=n._next)e(n)}forEachPreviousItem(e){let n;for(n=this._previousMapHead;null!==n;n=n._nextPrevious)e(n)}forEachChangedItem(e){let n;for(n=this._changesHead;null!==n;n=n._nextChanged)e(n)}forEachAddedItem(e){let n;for(n=this._additionsHead;null!==n;n=n._nextAdded)e(n)}forEachRemovedItem(e){let n;for(n=this._removalsHead;null!==n;n=n._nextRemoved)e(n)}diff(e){if(e){if(!(e instanceof Map||mp(e)))throw new D(900,!1)}else e=new Map;return this.check(e)?this:null}onDestroy(){}check(e){this._reset();let n=this._mapHead;if(this._appendAfter=null,this._forEach(e,(r,i)=>{if(n&&n.key===i)this._maybeAddToChanges(n,r),this._appendAfter=n,n=n._next;else{const s=this._getOrCreateRecordForKey(i,r);n=this._insertBeforeOrAppend(n,s)}}),n){n._prev&&(n._prev._next=null),this._removalsHead=n;for(let r=n;null!==r;r=r._nextRemoved)r===this._mapHead&&(this._mapHead=null),this._records.delete(r.key),r._nextRemoved=r._next,r.previousValue=r.currentValue,r.currentValue=null,r._prev=null,r._next=null}return this._changesTail&&(this._changesTail._nextChanged=null),this._additionsTail&&(this._additionsTail._nextAdded=null),this.isDirty}_insertBeforeOrAppend(e,n){if(e){const r=e._prev;return n._next=e,n._prev=r,e._prev=n,r&&(r._next=n),e===this._mapHead&&(this._mapHead=n),this._appendAfter=e,e}return this._appendAfter?(this._appendAfter._next=n,n._prev=this._appendAfter):this._mapHead=n,this._appendAfter=n,null}_getOrCreateRecordForKey(e,n){if(this._records.has(e)){const i=this._records.get(e);this._maybeAddToChanges(i,n);const s=i._prev,o=i._next;return s&&(s._next=o),o&&(o._prev=s),i._next=null,i._prev=null,i}const r=new jR(e);return this._records.set(e,r),r.currentValue=n,this._addToAdditions(r),r}_reset(){if(this.isDirty){let e;for(this._previousMapHead=this._mapHead,e=this._previousMapHead;null!==e;e=e._next)e._nextPrevious=e._next;for(e=this._changesHead;null!==e;e=e._nextChanged)e.previousValue=e.currentValue;for(e=this._additionsHead;null!=e;e=e._nextAdded)e.previousValue=e.currentValue;this._changesHead=this._changesTail=null,this._additionsHead=this._additionsTail=null,this._removalsHead=null}}_maybeAddToChanges(e,n){Object.is(n,e.currentValue)||(e.previousValue=e.currentValue,e.currentValue=n,this._addToChanges(e))}_addToAdditions(e){null===this._additionsHead?this._additionsHead=this._additionsTail=e:(this._additionsTail._nextAdded=e,this._additionsTail=e)}_addToChanges(e){null===this._changesHead?this._changesHead=this._changesTail=e:(this._changesTail._nextChanged=e,this._changesTail=e)}_forEach(e,n){e instanceof Map?e.forEach(n):Object.keys(e).forEach(r=>n(e[r],r))}}class jR{constructor(e){this.key=e,this.previousValue=null,this.currentValue=null,this._nextPrevious=null,this._next=null,this._prev=null,this._nextAdded=null,this._nextRemoved=null,this._nextChanged=null}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function QC(){return new on([new WC])}class on{constructor(e){this.factories=e}static create(e,n){if(null!=n){const r=n.factories.slice();e=e.concat(r)}return new on(e)}static extend(e){return{provide:on,useFactory:n=>on.create(e,n||QC()),deps:[[on,new yo,new Xr]]}}find(e){const n=this.factories.find(r=>r.supports(e));if(null!=n)return n;throw new D(901,!1)}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function ZC(){return new Vt([new YC])}on.\u0275prov=w({token:on,providedIn:"root",factory:QC});class Vt{constructor(e){this.factories=e}static create(e,n){if(n){const r=n.factories.slice();e=e.concat(r)}return new Vt(e)}static extend(e){return{provide:Vt,useFactory:n=>Vt.create(e,n||ZC()),deps:[[Vt,new yo,new Xr]]}}find(e){const n=this.factories.find(r=>r.supports(e));if(n)return n;throw new D(901,!1)}}Vt.\u0275prov=w({token:Vt,providedIn:"root",factory:ZC});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const HR=[new YC],$R=[new WC],UR=(new on($R),new Vt(HR),kC(null,"core",[]));
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class Xi{constructor(e){}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function tm(t){return"boolean"==typeof t?t:null!=t&&"false"!==t}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */Xi.\u0275fac=function(e){return new(e||Xi)(b(Jn))},Xi.\u0275mod=J({type:Xi}),Xi.\u0275inj=q({});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license Angular v14.2.10
       * (c) 2010-2022 Google LLC. https://angular.io/
       * License: MIT
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
let rd=null;function an(){return rd}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const V=new x("DocumentToken");
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class Ji{historyGo(e){throw new Error("Not implemented")}}Ji.\u0275fac=function(e){return new(e||Ji)},Ji.\u0275prov=w({token:Ji,factory:function(){return function qR(){return b(Go)}()},providedIn:"platform"});new x("Location Initialized");class Go extends Ji{constructor(e){super(),this._doc=e,this._init()}_init(){this.location=window.location,this._history=window.history}getBaseHrefFromDOM(){return an().getBaseHref(this._doc)}onPopState(e){const n=an().getGlobalEventTarget(this._doc,"window");return n.addEventListener("popstate",e,!1),()=>n.removeEventListener("popstate",e)}onHashChange(e){const n=an().getGlobalEventTarget(this._doc,"window");return n.addEventListener("hashchange",e,!1),()=>n.removeEventListener("hashchange",e)}get href(){return this.location.href}get protocol(){return this.location.protocol}get hostname(){return this.location.hostname}get port(){return this.location.port}get pathname(){return this.location.pathname}get search(){return this.location.search}get hash(){return this.location.hash}set pathname(e){this.location.pathname=e}pushState(e,n,r){XC()?this._history.pushState(e,n,r):this.location.hash=r}replaceState(e,n,r){XC()?this._history.replaceState(e,n,r):this.location.hash=r}forward(){this._history.forward()}back(){this._history.back()}historyGo(e=0){this._history.go(e)}getState(){return this._history.state}}function XC(){return!!window.history.pushState}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function nm(t,e){if(0==t.length)return e;if(0==e.length)return t;let n=0;return t.endsWith("/")&&n++,e.startsWith("/")&&n++,2==n?t+e.substring(1):1==n?t+e:t+"/"+e}function JC(t){const e=t.match(/#|\?|$/),n=e&&e.index||t.length,r=n-("/"===t[n-1]?1:0);return t.slice(0,r)+t.slice(n)}function er(t){return t&&"?"!==t[0]?"?"+t:t}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */Go.\u0275fac=function(e){return new(e||Go)(b(V))},Go.\u0275prov=w({token:Go,factory:function(){return function KR(){return new Go(b(V))}()},providedIn:"platform"});class si{historyGo(e){throw new Error("Not implemented")}}si.\u0275fac=function(e){return new(e||si)},si.\u0275prov=w({token:si,factory:function(){return Fe(Wo)},providedIn:"root"});const eE=new x("appBaseHref");class Wo extends si{constructor(e,n){super(),this._platformLocation=e,this._removeListenerFns=[],this._baseHref=n??this._platformLocation.getBaseHrefFromDOM()??Fe(V).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(e){this._removeListenerFns.push(this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e))}getBaseHref(){return this._baseHref}prepareExternalUrl(e){return nm(this._baseHref,e)}path(e=!1){const n=this._platformLocation.pathname+er(this._platformLocation.search),r=this._platformLocation.hash;return r&&e?`${n}${r}`:n}pushState(e,n,r,i){const s=this.prepareExternalUrl(r+er(i));this._platformLocation.pushState(e,n,s)}replaceState(e,n,r,i){const s=this.prepareExternalUrl(r+er(i));this._platformLocation.replaceState(e,n,s)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(e=0){this._platformLocation.historyGo?.(e)}}Wo.\u0275fac=function(e){return new(e||Wo)(b(Ji),b(eE,8))},Wo.\u0275prov=w({token:Wo,factory:Wo.\u0275fac,providedIn:"root"});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class $l extends si{constructor(e,n){super(),this._platformLocation=e,this._baseHref="",this._removeListenerFns=[],null!=n&&(this._baseHref=n)}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(e){this._removeListenerFns.push(this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e))}getBaseHref(){return this._baseHref}path(e=!1){let n=this._platformLocation.hash;return null==n&&(n="#"),n.length>0?n.substring(1):n}prepareExternalUrl(e){const n=nm(this._baseHref,e);return n.length>0?"#"+n:n}pushState(e,n,r,i){let s=this.prepareExternalUrl(r+er(i));0==s.length&&(s=this._platformLocation.pathname),this._platformLocation.pushState(e,n,s)}replaceState(e,n,r,i){let s=this.prepareExternalUrl(r+er(i));0==s.length&&(s=this._platformLocation.pathname),this._platformLocation.replaceState(e,n,s)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(e=0){this._platformLocation.historyGo?.(e)}}$l.\u0275fac=function(e){return new(e||$l)(b(Ji),b(eE,8))},$l.\u0275prov=w({token:$l,factory:$l.\u0275fac});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class Mn{constructor(e){this._subject=new ue,this._urlChangeListeners=[],this._urlChangeSubscription=null,this._locationStrategy=e;const n=this._locationStrategy.getBaseHref();this._baseHref=JC(tE(n)),this._locationStrategy.onPopState(r=>{this._subject.emit({url:this.path(!0),pop:!0,state:r.state,type:r.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(e=!1){return this.normalize(this._locationStrategy.path(e))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(e,n=""){return this.path()==this.normalize(e+er(n))}normalize(e){return Mn.stripTrailingSlash(function QR(t,e){return t&&e.startsWith(t)?e.substring(t.length):e}(this._baseHref,tE(e)))}prepareExternalUrl(e){return e&&"/"!==e[0]&&(e="/"+e),this._locationStrategy.prepareExternalUrl(e)}go(e,n="",r=null){this._locationStrategy.pushState(r,"",e,n),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+er(n)),r)}replaceState(e,n="",r=null){this._locationStrategy.replaceState(r,"",e,n),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+er(n)),r)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(e=0){this._locationStrategy.historyGo?.(e)}onUrlChange(e){return this._urlChangeListeners.push(e),this._urlChangeSubscription||(this._urlChangeSubscription=this.subscribe(n=>{this._notifyUrlChangeListeners(n.url,n.state)})),()=>{const n=this._urlChangeListeners.indexOf(e);this._urlChangeListeners.splice(n,1),0===this._urlChangeListeners.length&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(e="",n){this._urlChangeListeners.forEach(r=>r(e,n))}subscribe(e,n,r){return this._subject.subscribe({next:e,error:n,complete:r})}}function tE(t){return t.replace(/\/index.html$/,"")}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */Mn.normalizeQueryParams=er,Mn.joinWithSlash=nm,Mn.stripTrailingSlash=JC,Mn.\u0275fac=function(e){return new(e||Mn)(b(si))},Mn.\u0275prov=w({token:Mn,factory:function(){return function YR(){return new Mn(b(si))}()},providedIn:"root"});const nE={ADP:[void 0,void 0,0],AFN:[void 0,"\u060b",0],ALL:[void 0,void 0,0],AMD:[void 0,"\u058f",2],AOA:[void 0,"Kz"],ARS:[void 0,"$"],AUD:["A$","$"],AZN:[void 0,"\u20bc"],BAM:[void 0,"KM"],BBD:[void 0,"$"],BDT:[void 0,"\u09f3"],BHD:[void 0,void 0,3],BIF:[void 0,void 0,0],BMD:[void 0,"$"],BND:[void 0,"$"],BOB:[void 0,"Bs"],BRL:["R$"],BSD:[void 0,"$"],BWP:[void 0,"P"],BYN:[void 0,void 0,2],BYR:[void 0,void 0,0],BZD:[void 0,"$"],CAD:["CA$","$",2],CHF:[void 0,void 0,2],CLF:[void 0,void 0,4],CLP:[void 0,"$",0],CNY:["CN\xa5","\xa5"],COP:[void 0,"$",2],CRC:[void 0,"\u20a1",2],CUC:[void 0,"$"],CUP:[void 0,"$"],CZK:[void 0,"K\u010d",2],DJF:[void 0,void 0,0],DKK:[void 0,"kr",2],DOP:[void 0,"$"],EGP:[void 0,"E\xa3"],ESP:[void 0,"\u20a7",0],EUR:["\u20ac"],FJD:[void 0,"$"],FKP:[void 0,"\xa3"],GBP:["\xa3"],GEL:[void 0,"\u20be"],GHS:[void 0,"GH\u20b5"],GIP:[void 0,"\xa3"],GNF:[void 0,"FG",0],GTQ:[void 0,"Q"],GYD:[void 0,"$",2],HKD:["HK$","$"],HNL:[void 0,"L"],HRK:[void 0,"kn"],HUF:[void 0,"Ft",2],IDR:[void 0,"Rp",2],ILS:["\u20aa"],INR:["\u20b9"],IQD:[void 0,void 0,0],IRR:[void 0,void 0,0],ISK:[void 0,"kr",0],ITL:[void 0,void 0,0],JMD:[void 0,"$"],JOD:[void 0,void 0,3],JPY:["\xa5",void 0,0],KHR:[void 0,"\u17db"],KMF:[void 0,"CF",0],KPW:[void 0,"\u20a9",0],KRW:["\u20a9",void 0,0],KWD:[void 0,void 0,3],KYD:[void 0,"$"],KZT:[void 0,"\u20b8"],LAK:[void 0,"\u20ad",0],LBP:[void 0,"L\xa3",0],LKR:[void 0,"Rs"],LRD:[void 0,"$"],LTL:[void 0,"Lt"],LUF:[void 0,void 0,0],LVL:[void 0,"Ls"],LYD:[void 0,void 0,3],MGA:[void 0,"Ar",0],MGF:[void 0,void 0,0],MMK:[void 0,"K",0],MNT:[void 0,"\u20ae",2],MRO:[void 0,void 0,0],MUR:[void 0,"Rs",2],MXN:["MX$","$"],MYR:[void 0,"RM"],NAD:[void 0,"$"],NGN:[void 0,"\u20a6"],NIO:[void 0,"C$"],NOK:[void 0,"kr",2],NPR:[void 0,"Rs"],NZD:["NZ$","$"],OMR:[void 0,void 0,3],PHP:["\u20b1"],PKR:[void 0,"Rs",2],PLN:[void 0,"z\u0142"],PYG:[void 0,"\u20b2",0],RON:[void 0,"lei"],RSD:[void 0,void 0,0],RUB:[void 0,"\u20bd"],RWF:[void 0,"RF",0],SBD:[void 0,"$"],SEK:[void 0,"kr",2],SGD:[void 0,"$"],SHP:[void 0,"\xa3"],SLE:[void 0,void 0,2],SLL:[void 0,void 0,0],SOS:[void 0,void 0,0],SRD:[void 0,"$"],SSP:[void 0,"\xa3"],STD:[void 0,void 0,0],STN:[void 0,"Db"],SYP:[void 0,"\xa3",0],THB:[void 0,"\u0e3f"],TMM:[void 0,void 0,0],TND:[void 0,void 0,3],TOP:[void 0,"T$"],TRL:[void 0,void 0,0],TRY:[void 0,"\u20ba"],TTD:[void 0,"$"],TWD:["NT$","$",2],TZS:[void 0,void 0,2],UAH:[void 0,"\u20b4"],UGX:[void 0,void 0,0],USD:["$"],UYI:[void 0,void 0,0],UYU:[void 0,"$"],UYW:[void 0,void 0,4],UZS:[void 0,void 0,2],VEF:[void 0,"Bs",2],VND:["\u20ab",void 0,0],VUV:[void 0,void 0,0],XAF:["FCFA",void 0,0],XCD:["EC$","$"],XOF:["F\u202fCFA",void 0,0],XPF:["CFPF",void 0,0],XXX:["\xa4"],YER:[void 0,void 0,0],ZAR:[void 0,"R"],ZMK:[void 0,void 0,0],ZMW:[void 0,"ZK"],ZWD:[void 0,void 0,0]};
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */var Ul,es,Ge,ie,lt,Ee,rE;function id(t,e){return jt(Je(t)[le.DateFormat],e)}function sd(t,e){return jt(Je(t)[le.TimeFormat],e)}function od(t,e){return jt(Je(t)[le.DateTimeFormat],e)}function Bt(t,e){const n=Je(t),r=n[le.NumberSymbols][e];if(typeof r>"u"){if(e===Ee.CurrencyDecimal)return n[le.NumberSymbols][Ee.Decimal];if(e===Ee.CurrencyGroup)return n[le.NumberSymbols][Ee.Group]}return r}function rm(t,e){return Je(t)[le.NumberFormats][e]}!function(t){t[t.Decimal=0]="Decimal",t[t.Percent=1]="Percent",t[t.Currency=2]="Currency",t[t.Scientific=3]="Scientific"}(Ul||(Ul={})),function(t){t[t.Zero=0]="Zero",t[t.One=1]="One",t[t.Two=2]="Two",t[t.Few=3]="Few",t[t.Many=4]="Many",t[t.Other=5]="Other"}(es||(es={})),function(t){t[t.Format=0]="Format",t[t.Standalone=1]="Standalone"}(Ge||(Ge={})),function(t){t[t.Narrow=0]="Narrow",t[t.Abbreviated=1]="Abbreviated",t[t.Wide=2]="Wide",t[t.Short=3]="Short"}(ie||(ie={})),function(t){t[t.Short=0]="Short",t[t.Medium=1]="Medium",t[t.Long=2]="Long",t[t.Full=3]="Full"}(lt||(lt={})),function(t){t[t.Decimal=0]="Decimal",t[t.Group=1]="Group",t[t.List=2]="List",t[t.PercentSign=3]="PercentSign",t[t.PlusSign=4]="PlusSign",t[t.MinusSign=5]="MinusSign",t[t.Exponential=6]="Exponential",t[t.SuperscriptingExponent=7]="SuperscriptingExponent",t[t.PerMille=8]="PerMille",t[t.Infinity=9]="Infinity",t[t.NaN=10]="NaN",t[t.TimeSeparator=11]="TimeSeparator",t[t.CurrencyDecimal=12]="CurrencyDecimal",t[t.CurrencyGroup=13]="CurrencyGroup"}(Ee||(Ee={})),function(t){t[t.Sunday=0]="Sunday",t[t.Monday=1]="Monday",t[t.Tuesday=2]="Tuesday",t[t.Wednesday=3]="Wednesday",t[t.Thursday=4]="Thursday",t[t.Friday=5]="Friday",t[t.Saturday=6]="Saturday"}(rE||(rE={}));const rP=oD;function iE(t){if(!t[le.ExtraData])throw new Error(`Missing extra locale data for the locale "${t[le.LocaleId]}". Use "registerLocaleData" to load new data. See the "I18n guide" on angular.io to know more.`)}function jt(t,e){for(let n=e;n>-1;n--)if(typeof t[n]<"u")return t[n];throw new Error("Locale data API: locale data undefined")}function im(t){const[e,n]=t.split(":");return{hours:+e,minutes:+n}}function oP(t,e,n="en"){const r=function nP(t){return Je(t)[le.Currencies]}(n)[t]||nE[t]||[],i=r[1];return"narrow"===e&&"string"==typeof i?i:r[0]||t}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const cP=/^(\d{4,})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/,zl={},uP=/((?:[^BEGHLMOSWYZabcdhmswyz']+)|(?:'(?:[^']|'')*')|(?:G{1,5}|y{1,4}|Y{1,4}|M{1,5}|L{1,5}|w{1,2}|W{1}|d{1,2}|E{1,6}|c{1,6}|a{1,5}|b{1,5}|B{1,5}|h{1,2}|H{1,2}|m{1,2}|s{1,2}|S{1,3}|z{1,4}|Z{1,5}|O{1,4}))([\s\S]*)/;var In,K,Y;function dP(t,e,n,r){let i=function bP(t){if(aE(t))return t;if("number"==typeof t&&!isNaN(t))return new Date(t);if("string"==typeof t){if(t=t.trim(),/^(\d{4}(-\d{1,2}(-\d{1,2})?)?)$/.test(t)){const[i,s=1,o=1]=t.split("-").map(a=>+a);return ad(i,s-1,o)}const n=parseFloat(t);if(!isNaN(t-n))return new Date(n);let r;if(r=t.match(cP))return function DP(t){const e=new Date(0);let n=0,r=0;const i=t[8]?e.setUTCFullYear:e.setFullYear,s=t[8]?e.setUTCHours:e.setHours;t[9]&&(n=Number(t[9]+t[10]),r=Number(t[9]+t[11])),i.call(e,Number(t[1]),Number(t[2])-1,Number(t[3]));const o=Number(t[4]||0)-n,a=Number(t[5]||0)-r,l=Number(t[6]||0),c=Math.floor(1e3*parseFloat("0."+(t[7]||0)));return s.call(e,o,a,l,c),e}(r)}const e=new Date(t);if(!aE(e))throw new Error(`Unable to convert "${t}" into a date`);return e}(t);e=tr(n,e)||e;let a,o=[];for(;e;){if(a=uP.exec(e),!a){o.push(e);break}{o=o.concat(a.slice(1));const u=o.pop();if(!u)break;e=u}}let l=i.getTimezoneOffset();r&&(l=oE(r,l),i=function vP(t,e,n){const r=n?-1:1,i=t.getTimezoneOffset(),s=oE(e,i);return function _P(t,e){return(t=new Date(t.getTime())).setMinutes(t.getMinutes()+e),t}(t,r*(s-i))}(i,r,!0));let c="";return o.forEach(u=>{const d=function yP(t){if(om[t])return om[t];let e;switch(t){case"G":case"GG":case"GGG":e=pe(Y.Eras,ie.Abbreviated);break;case"GGGG":e=pe(Y.Eras,ie.Wide);break;case"GGGGG":e=pe(Y.Eras,ie.Narrow);break;case"y":e=Ie(K.FullYear,1,0,!1,!0);break;case"yy":e=Ie(K.FullYear,2,0,!0,!0);break;case"yyy":e=Ie(K.FullYear,3,0,!1,!0);break;case"yyyy":e=Ie(K.FullYear,4,0,!1,!0);break;case"Y":e=dd(1);break;case"YY":e=dd(2,!0);break;case"YYY":e=dd(3);break;case"YYYY":e=dd(4);break;case"M":case"L":e=Ie(K.Month,1,1);break;case"MM":case"LL":e=Ie(K.Month,2,1);break;case"MMM":e=pe(Y.Months,ie.Abbreviated);break;case"MMMM":e=pe(Y.Months,ie.Wide);break;case"MMMMM":e=pe(Y.Months,ie.Narrow);break;case"LLL":e=pe(Y.Months,ie.Abbreviated,Ge.Standalone);break;case"LLLL":e=pe(Y.Months,ie.Wide,Ge.Standalone);break;case"LLLLL":e=pe(Y.Months,ie.Narrow,Ge.Standalone);break;case"w":e=sm(1);break;case"ww":e=sm(2);break;case"W":e=sm(1,!0);break;case"d":e=Ie(K.Date,1);break;case"dd":e=Ie(K.Date,2);break;case"c":case"cc":e=Ie(K.Day,1);break;case"ccc":e=pe(Y.Days,ie.Abbreviated,Ge.Standalone);break;case"cccc":e=pe(Y.Days,ie.Wide,Ge.Standalone);break;case"ccccc":e=pe(Y.Days,ie.Narrow,Ge.Standalone);break;case"cccccc":e=pe(Y.Days,ie.Short,Ge.Standalone);break;case"E":case"EE":case"EEE":e=pe(Y.Days,ie.Abbreviated);break;case"EEEE":e=pe(Y.Days,ie.Wide);break;case"EEEEE":e=pe(Y.Days,ie.Narrow);break;case"EEEEEE":e=pe(Y.Days,ie.Short);break;case"a":case"aa":case"aaa":e=pe(Y.DayPeriods,ie.Abbreviated);break;case"aaaa":e=pe(Y.DayPeriods,ie.Wide);break;case"aaaaa":e=pe(Y.DayPeriods,ie.Narrow);break;case"b":case"bb":case"bbb":e=pe(Y.DayPeriods,ie.Abbreviated,Ge.Standalone,!0);break;case"bbbb":e=pe(Y.DayPeriods,ie.Wide,Ge.Standalone,!0);break;case"bbbbb":e=pe(Y.DayPeriods,ie.Narrow,Ge.Standalone,!0);break;case"B":case"BB":case"BBB":e=pe(Y.DayPeriods,ie.Abbreviated,Ge.Format,!0);break;case"BBBB":e=pe(Y.DayPeriods,ie.Wide,Ge.Format,!0);break;case"BBBBB":e=pe(Y.DayPeriods,ie.Narrow,Ge.Format,!0);break;case"h":e=Ie(K.Hours,1,-12);break;case"hh":e=Ie(K.Hours,2,-12);break;case"H":e=Ie(K.Hours,1);break;case"HH":e=Ie(K.Hours,2);break;case"m":e=Ie(K.Minutes,1);break;case"mm":e=Ie(K.Minutes,2);break;case"s":e=Ie(K.Seconds,1);break;case"ss":e=Ie(K.Seconds,2);break;case"S":e=Ie(K.FractionalSeconds,1);break;case"SS":e=Ie(K.FractionalSeconds,2);break;case"SSS":e=Ie(K.FractionalSeconds,3);break;case"Z":case"ZZ":case"ZZZ":e=cd(In.Short);break;case"ZZZZZ":e=cd(In.Extended);break;case"O":case"OO":case"OOO":case"z":case"zz":case"zzz":e=cd(In.ShortGMT);break;case"OOOO":case"ZZZZ":case"zzzz":e=cd(In.Long);break;default:return null}return om[t]=e,e}(u);c+=d?d(i,n,l):"''"===u?"'":u.replace(/(^'|'$)/g,"").replace(/''/g,"'")}),c}function ad(t,e,n){const r=new Date(0);return r.setFullYear(t,e,n),r.setHours(0,0,0),r}function tr(t,e){const n=function ZR(t){return Je(t)[le.LocaleId]}(t);if(zl[n]=zl[n]||{},zl[n][e])return zl[n][e];let r="";switch(e){case"shortDate":r=id(t,lt.Short);break;case"mediumDate":r=id(t,lt.Medium);break;case"longDate":r=id(t,lt.Long);break;case"fullDate":r=id(t,lt.Full);break;case"shortTime":r=sd(t,lt.Short);break;case"mediumTime":r=sd(t,lt.Medium);break;case"longTime":r=sd(t,lt.Long);break;case"fullTime":r=sd(t,lt.Full);break;case"short":const i=tr(t,"shortTime"),s=tr(t,"shortDate");r=ld(od(t,lt.Short),[i,s]);break;case"medium":const o=tr(t,"mediumTime"),a=tr(t,"mediumDate");r=ld(od(t,lt.Medium),[o,a]);break;case"long":const l=tr(t,"longTime"),c=tr(t,"longDate");r=ld(od(t,lt.Long),[l,c]);break;case"full":const u=tr(t,"fullTime"),d=tr(t,"fullDate");r=ld(od(t,lt.Full),[u,d])}return r&&(zl[n][e]=r),r}function ld(t,e){return e&&(t=t.replace(/\{([^}]+)}/g,function(n,r){return null!=e&&r in e?e[r]:n})),t}function ln(t,e,n="-",r,i){let s="";(t<0||i&&t<=0)&&(i?t=1-t:(t=-t,s=n));let o=String(t);for(;o.length<e;)o="0"+o;return r&&(o=o.slice(o.length-e)),s+o}function Ie(t,e,n=0,r=!1,i=!1){return function(s,o){let a=function hP(t,e){switch(t){case K.FullYear:return e.getFullYear();case K.Month:return e.getMonth();case K.Date:return e.getDate();case K.Hours:return e.getHours();case K.Minutes:return e.getMinutes();case K.Seconds:return e.getSeconds();case K.FractionalSeconds:return e.getMilliseconds();case K.Day:return e.getDay();default:throw new Error(`Unknown DateType value "${t}".`)}}(t,s);if((n>0||a>-n)&&(a+=n),t===K.Hours)0===a&&-12===n&&(a=12);else if(t===K.FractionalSeconds)return function fP(t,e){return ln(t,3).substring(0,e)}(a,e);const l=Bt(o,Ee.MinusSign);return ln(a,e,l,r,i)}}function pe(t,e,n=Ge.Format,r=!1){return function(i,s){return function pP(t,e,n,r,i,s){switch(n){case Y.Months:return function eP(t,e,n){const r=Je(t),s=jt([r[le.MonthsFormat],r[le.MonthsStandalone]],e);return jt(s,n)}(e,i,r)[t.getMonth()];case Y.Days:return function JR(t,e,n){const r=Je(t),s=jt([r[le.DaysFormat],r[le.DaysStandalone]],e);return jt(s,n)}(e,i,r)[t.getDay()];case Y.DayPeriods:const o=t.getHours(),a=t.getMinutes();if(s){const c=function iP(t){const e=Je(t);return iE(e),(e[le.ExtraData][2]||[]).map(r=>"string"==typeof r?im(r):[im(r[0]),im(r[1])])}(e),u=function sP(t,e,n){const r=Je(t);iE(r);const s=jt([r[le.ExtraData][0],r[le.ExtraData][1]],e)||[];return jt(s,n)||[]}(e,i,r),d=c.findIndex(f=>{if(Array.isArray(f)){const[h,p]=f,m=o>=h.hours&&a>=h.minutes,g=o<p.hours||o===p.hours&&a<p.minutes;if(h.hours<p.hours){if(m&&g)return!0}else if(m||g)return!0}else if(f.hours===o&&f.minutes===a)return!0;return!1});if(-1!==d)return u[d]}return function XR(t,e,n){const r=Je(t),s=jt([r[le.DayPeriodsFormat],r[le.DayPeriodsStandalone]],e);return jt(s,n)}(e,i,r)[o<12?0:1];case Y.Eras:return function tP(t,e){return jt(Je(t)[le.Eras],e)}(e,r)[t.getFullYear()<=0?0:1];default:throw new Error(`unexpected translation type ${n}`)}}(i,s,t,e,n,r)}}function cd(t){return function(e,n,r){const i=-1*r,s=Bt(n,Ee.MinusSign),o=i>0?Math.floor(i/60):Math.ceil(i/60);switch(t){case In.Short:return(i>=0?"+":"")+ln(o,2,s)+ln(Math.abs(i%60),2,s);case In.ShortGMT:return"GMT"+(i>=0?"+":"")+ln(o,1,s);case In.Long:return"GMT"+(i>=0?"+":"")+ln(o,2,s)+":"+ln(Math.abs(i%60),2,s);case In.Extended:return 0===r?"Z":(i>=0?"+":"")+ln(o,2,s)+":"+ln(Math.abs(i%60),2,s);default:throw new Error(`Unknown zone width "${t}"`)}}}!function(t){t[t.Short=0]="Short",t[t.ShortGMT=1]="ShortGMT",t[t.Long=2]="Long",t[t.Extended=3]="Extended"}(In||(In={})),function(t){t[t.FullYear=0]="FullYear",t[t.Month=1]="Month",t[t.Date=2]="Date",t[t.Hours=3]="Hours",t[t.Minutes=4]="Minutes",t[t.Seconds=5]="Seconds",t[t.FractionalSeconds=6]="FractionalSeconds",t[t.Day=7]="Day"}(K||(K={})),function(t){t[t.DayPeriods=0]="DayPeriods",t[t.Days=1]="Days",t[t.Months=2]="Months",t[t.Eras=3]="Eras"}(Y||(Y={}));function sE(t){return ad(t.getFullYear(),t.getMonth(),t.getDate()+(4-t.getDay()))}function sm(t,e=!1){return function(n,r){let i;if(e){const s=new Date(n.getFullYear(),n.getMonth(),1).getDay()-1,o=n.getDate();i=1+Math.floor((o+s)/7)}else{const s=sE(n),o=function gP(t){const e=ad(t,0,1).getDay();return ad(t,0,1+(e<=4?4:11)-e)}(s.getFullYear()),a=s.getTime()-o.getTime();i=1+Math.round(a/6048e5)}return ln(i,t,Bt(r,Ee.MinusSign))}}function dd(t,e=!1){return function(n,r){return ln(sE(n).getFullYear(),t,Bt(r,Ee.MinusSign),e)}}const om={};function oE(t,e){t=t.replace(/:/g,"");const n=Date.parse("Jan 01, 1970 00:00:00 "+t)/6e4;return isNaN(n)?e:n}function aE(t){return t instanceof Date&&!isNaN(t.valueOf())}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const CP=/^(\d+)?\.((\d+)(-(\d+))?)?$/;function lm(t,e,n,r,i,s,o=!1){let a="",l=!1;if(isFinite(t)){let c=function xP(t){let r,i,s,o,a,e=Math.abs(t)+"",n=0;for((i=e.indexOf("."))>-1&&(e=e.replace(".","")),(s=e.search(/e/i))>0?(i<0&&(i=s),i+=+e.slice(s+1),e=e.substring(0,s)):i<0&&(i=e.length),s=0;"0"===e.charAt(s);s++);if(s===(a=e.length))r=[0],i=1;else{for(a--;"0"===e.charAt(a);)a--;for(i-=s,r=[],o=0;s<=a;s++,o++)r[o]=Number(e.charAt(s))}return i>22&&(r=r.splice(0,21),n=i-1,i=1),{digits:r,exponent:n,integerLen:i}}(t);o&&(c=function TP(t){if(0===t.digits[0])return t;const e=t.digits.length-t.integerLen;return t.exponent?t.exponent+=2:(0===e?t.digits.push(0,0):1===e&&t.digits.push(0),t.integerLen+=2),t}(c));let u=e.minInt,d=e.minFrac,f=e.maxFrac;if(s){const E=s.match(CP);if(null===E)throw new Error(`${s} is not a valid digit info`);const y=E[1],I=E[3],B=E[5];null!=y&&(u=um(y)),null!=I&&(d=um(I)),null!=B?f=um(B):null!=I&&d>f&&(f=d)}!function NP(t,e,n){if(e>n)throw new Error(`The minimum number of digits after fraction (${e}) is higher than the maximum (${n}).`);let r=t.digits,i=r.length-t.integerLen;const s=Math.min(Math.max(e,i),n);let o=s+t.integerLen,a=r[o];if(o>0){r.splice(Math.max(t.integerLen,o));for(let d=o;d<r.length;d++)r[d]=0}else{i=Math.max(0,i),t.integerLen=1,r.length=Math.max(1,o=s+1),r[0]=0;for(let d=1;d<o;d++)r[d]=0}if(a>=5)if(o-1<0){for(let d=0;d>o;d--)r.unshift(0),t.integerLen++;r.unshift(1),t.integerLen++}else r[o-1]++;for(;i<Math.max(0,s);i++)r.push(0);let l=0!==s;const c=e+t.integerLen,u=r.reduceRight(function(d,f,h,p){return f+=d,p[h]=f<10?f:f-10,l&&(0===p[h]&&h>=c?p.pop():l=!1),f>=10?1:0},0);u&&(r.unshift(u),t.integerLen++)}(c,d,f);let h=c.digits,p=c.integerLen;const m=c.exponent;let g=[];for(l=h.every(E=>!E);p<u;p++)h.unshift(0);for(;p<0;p++)h.unshift(0);p>0?g=h.splice(p,h.length):(g=h,h=[0]);const _=[];for(h.length>=e.lgSize&&_.unshift(h.splice(-e.lgSize,h.length).join(""));h.length>e.gSize;)_.unshift(h.splice(-e.gSize,h.length).join(""));h.length&&_.unshift(h.join("")),a=_.join(Bt(n,r)),g.length&&(a+=Bt(n,i)+g.join("")),m&&(a+=Bt(n,Ee.Exponential)+"+"+m)}else a=Bt(n,Ee.Infinity);return a=t<0&&!l?e.negPre+a+e.negSuf:e.posPre+a+e.posSuf,a}function IP(t,e,n,r,i){const o=cm(rm(e,Ul.Currency),Bt(e,Ee.MinusSign));return o.minFrac=function lP(t){let e;const n=nE[t];return n&&(e=n[2]),"number"==typeof e?e:2}(r),o.maxFrac=o.minFrac,lm(t,o,e,Ee.CurrencyGroup,Ee.CurrencyDecimal,i).replace("\xa4",n).replace("\xa4","").trim()}function cm(t,e="-"){const n={minInt:1,minFrac:0,maxFrac:0,posPre:"",posSuf:"",negPre:"",negSuf:"",gSize:0,lgSize:0},r=t.split(";"),i=r[0],s=r[1],o=-1!==i.indexOf(".")?i.split("."):[i.substring(0,i.lastIndexOf("0")+1),i.substring(i.lastIndexOf("0")+1)],a=o[0],l=o[1]||"";n.posPre=a.substring(0,a.indexOf("#"));for(let u=0;u<l.length;u++){const d=l.charAt(u);"0"===d?n.minFrac=n.maxFrac=u+1:"#"===d?n.maxFrac=u+1:n.posSuf+=d}const c=a.split(",");if(n.gSize=c[1]?c[1].length:0,n.lgSize=c[2]||c[1]?(c[2]||c[1]).length:0,s){const u=i.length-n.posPre.length-n.posSuf.length,d=s.indexOf("#");n.negPre=s.substring(0,d).replace(/'/g,""),n.negSuf=s.slice(d+u).replace(/'/g,"")}else n.negPre=e+n.posPre,n.negSuf=n.posSuf;return n}function um(t){const e=parseInt(t);if(isNaN(e))throw new Error("Invalid integer literal when parsing "+t);return e}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class ts{}function uE(t,e,n,r){let i=`=${t}`;if(e.indexOf(i)>-1||(i=n.getPluralCategory(t,r),e.indexOf(i)>-1))return i;if(e.indexOf("other")>-1)return"other";throw new Error(`No plural message found for value "${t}"`)}ts.\u0275fac=function(e){return new(e||ts)},ts.\u0275prov=w({token:ts,factory:function(e){let n=null;return e?n=new e:(r=b(wn),n=new qo(r)),n;var r},providedIn:"root"});class qo extends ts{constructor(e){super(),this.locale=e}getPluralCategory(e,n){switch(rP(n||this.locale)(e)){case es.Zero:return"zero";case es.One:return"one";case es.Two:return"two";case es.Few:return"few";case es.Many:return"many";default:return"other"}}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function dE(t,e){e=encodeURIComponent(e);for(const n of t.split(";")){const r=n.indexOf("="),[i,s]=-1==r?[n,""]:[n.slice(0,r),n.slice(r+1)];if(i.trim()===e)return decodeURIComponent(s)}return null}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */qo.\u0275fac=function(e){return new(e||qo)(b(wn))},qo.\u0275prov=w({token:qo,factory:qo.\u0275fac});class ns{constructor(e,n,r,i){this._iterableDiffers=e,this._keyValueDiffers=n,this._ngEl=r,this._renderer=i,this._iterableDiffer=null,this._keyValueDiffer=null,this._initialClasses=[],this._rawClass=null}set klass(e){this._removeClasses(this._initialClasses),this._initialClasses="string"==typeof e?e.split(/\s+/):[],this._applyClasses(this._initialClasses),this._applyClasses(this._rawClass)}set ngClass(e){this._removeClasses(this._rawClass),this._applyClasses(this._initialClasses),this._iterableDiffer=null,this._keyValueDiffer=null,this._rawClass="string"==typeof e?e.split(/\s+/):e,this._rawClass&&(Al(this._rawClass)?this._iterableDiffer=this._iterableDiffers.find(this._rawClass).create():this._keyValueDiffer=this._keyValueDiffers.find(this._rawClass).create())}ngDoCheck(){if(this._iterableDiffer){const e=this._iterableDiffer.diff(this._rawClass);e&&this._applyIterableChanges(e)}else if(this._keyValueDiffer){const e=this._keyValueDiffer.diff(this._rawClass);e&&this._applyKeyValueChanges(e)}}_applyKeyValueChanges(e){e.forEachAddedItem(n=>this._toggleClass(n.key,n.currentValue)),e.forEachChangedItem(n=>this._toggleClass(n.key,n.currentValue)),e.forEachRemovedItem(n=>{n.previousValue&&this._toggleClass(n.key,!1)})}_applyIterableChanges(e){e.forEachAddedItem(n=>{if("string"!=typeof n.item)throw new Error(`NgClass can only toggle CSS classes expressed as strings, got ${oe(n.item)}`);this._toggleClass(n.item,!0)}),e.forEachRemovedItem(n=>this._toggleClass(n.item,!1))}_applyClasses(e){e&&(Array.isArray(e)||e instanceof Set?e.forEach(n=>this._toggleClass(n,!0)):Object.keys(e).forEach(n=>this._toggleClass(n,!!e[n])))}_removeClasses(e){e&&(Array.isArray(e)||e instanceof Set?e.forEach(n=>this._toggleClass(n,!1)):Object.keys(e).forEach(n=>this._toggleClass(n,!1)))}_toggleClass(e,n){(e=e.trim())&&e.split(/\s+/g).forEach(r=>{n?this._renderer.addClass(this._ngEl.nativeElement,r):this._renderer.removeClass(this._ngEl.nativeElement,r)})}}ns.\u0275fac=function(e){return new(e||ns)(v(on),v(Vt),v(Ce),v(zn))},ns.\u0275dir=T({type:ns,selectors:[["","ngClass",""]],inputs:{klass:["class","klass"],ngClass:"ngClass"},standalone:!0});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class rs{constructor(e){this._viewContainerRef=e,this.ngComponentOutlet=null}ngOnChanges(e){const{_viewContainerRef:n,ngComponentOutletNgModule:r,ngComponentOutletNgModuleFactory:i}=this;if(n.clear(),this._componentRef=void 0,this.ngComponentOutlet){const s=this.ngComponentOutletInjector||n.parentInjector;(e.ngComponentOutletNgModule||e.ngComponentOutletNgModuleFactory)&&(this._moduleRef&&this._moduleRef.destroy(),this._moduleRef=r?function ZF(t,e){return new kD(t,e??null)}(r,fE(s)):i?i.create(fE(s)):void 0),this._componentRef=n.createComponent(this.ngComponentOutlet,{index:n.length,injector:s,ngModuleRef:this._moduleRef,projectableNodes:this.ngComponentOutletContent})}}ngOnDestroy(){this._moduleRef&&this._moduleRef.destroy()}}function fE(t){return t.get(Ho).injector}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */rs.\u0275fac=function(e){return new(e||rs)(v(rn))},rs.\u0275dir=T({type:rs,selectors:[["","ngComponentOutlet",""]],inputs:{ngComponentOutlet:"ngComponentOutlet",ngComponentOutletInjector:"ngComponentOutletInjector",ngComponentOutletContent:"ngComponentOutletContent",ngComponentOutletNgModule:"ngComponentOutletNgModule",ngComponentOutletNgModuleFactory:"ngComponentOutletNgModuleFactory"},standalone:!0,features:[Xt]});class OP{constructor(e,n,r,i){this.$implicit=e,this.ngForOf=n,this.index=r,this.count=i}get first(){return 0===this.index}get last(){return this.index===this.count-1}get even(){return this.index%2==0}get odd(){return!this.even}}class is{constructor(e,n,r){this._viewContainer=e,this._template=n,this._differs=r,this._ngForOf=null,this._ngForOfDirty=!0,this._differ=null}set ngForOf(e){this._ngForOf=e,this._ngForOfDirty=!0}set ngForTrackBy(e){this._trackByFn=e}get ngForTrackBy(){return this._trackByFn}set ngForTemplate(e){e&&(this._template=e)}ngDoCheck(){if(this._ngForOfDirty){this._ngForOfDirty=!1;const e=this._ngForOf;!this._differ&&e&&(this._differ=this._differs.find(e).create(this.ngForTrackBy))}if(this._differ){const e=this._differ.diff(this._ngForOf);e&&this._applyChanges(e)}}_applyChanges(e){const n=this._viewContainer;e.forEachOperation((r,i,s)=>{if(null==r.previousIndex)n.createEmbeddedView(this._template,new OP(r.item,this._ngForOf,-1,-1),null===s?void 0:s);else if(null==s)n.remove(null===i?void 0:i);else if(null!==i){const o=n.get(i);n.move(o,s),pE(o,r)}});for(let r=0,i=n.length;r<i;r++){const o=n.get(r).context;o.index=r,o.count=i,o.ngForOf=this._ngForOf}e.forEachIdentityChange(r=>{pE(n.get(r.currentIndex),r)})}static ngTemplateContextGuard(e,n){return!0}}function pE(t,e){t.context.$implicit=e.item}is.\u0275fac=function(e){return new(e||is)(v(rn),v(En),v(on))},is.\u0275dir=T({type:is,selectors:[["","ngFor","","ngForOf",""]],inputs:{ngForOf:"ngForOf",ngForTrackBy:"ngForTrackBy",ngForTemplate:"ngForTemplate"},standalone:!0});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class oi{constructor(e,n){this._viewContainer=e,this._context=new kP,this._thenTemplateRef=null,this._elseTemplateRef=null,this._thenViewRef=null,this._elseViewRef=null,this._thenTemplateRef=n}set ngIf(e){this._context.$implicit=this._context.ngIf=e,this._updateView()}set ngIfThen(e){mE("ngIfThen",e),this._thenTemplateRef=e,this._thenViewRef=null,this._updateView()}set ngIfElse(e){mE("ngIfElse",e),this._elseTemplateRef=e,this._elseViewRef=null,this._updateView()}_updateView(){this._context.$implicit?this._thenViewRef||(this._viewContainer.clear(),this._elseViewRef=null,this._thenTemplateRef&&(this._thenViewRef=this._viewContainer.createEmbeddedView(this._thenTemplateRef,this._context))):this._elseViewRef||(this._viewContainer.clear(),this._thenViewRef=null,this._elseTemplateRef&&(this._elseViewRef=this._viewContainer.createEmbeddedView(this._elseTemplateRef,this._context)))}static ngTemplateContextGuard(e,n){return!0}}oi.\u0275fac=function(e){return new(e||oi)(v(rn),v(En))},oi.\u0275dir=T({type:oi,selectors:[["","ngIf",""]],inputs:{ngIf:"ngIf",ngIfThen:"ngIfThen",ngIfElse:"ngIfElse"},standalone:!0});class kP{constructor(){this.$implicit=null,this.ngIf=null}}function mE(t,e){if(e&&!e.createEmbeddedView)throw new Error(`${t} must be a TemplateRef, but received '${oe(e)}'.`)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class dm{constructor(e,n){this._viewContainerRef=e,this._templateRef=n,this._created=!1}create(){this._created=!0,this._viewContainerRef.createEmbeddedView(this._templateRef)}destroy(){this._created=!1,this._viewContainerRef.clear()}enforceState(e){e&&!this._created?this.create():!e&&this._created&&this.destroy()}}class nr{constructor(){this._defaultUsed=!1,this._caseCount=0,this._lastCaseCheckIndex=0,this._lastCasesMatched=!1}set ngSwitch(e){this._ngSwitch=e,0===this._caseCount&&this._updateDefaultCases(!0)}_addCase(){return this._caseCount++}_addDefault(e){this._defaultViews||(this._defaultViews=[]),this._defaultViews.push(e)}_matchCase(e){const n=e==this._ngSwitch;return this._lastCasesMatched=this._lastCasesMatched||n,this._lastCaseCheckIndex++,this._lastCaseCheckIndex===this._caseCount&&(this._updateDefaultCases(!this._lastCasesMatched),this._lastCaseCheckIndex=0,this._lastCasesMatched=!1),n}_updateDefaultCases(e){if(this._defaultViews&&e!==this._defaultUsed){this._defaultUsed=e;for(let n=0;n<this._defaultViews.length;n++)this._defaultViews[n].enforceState(e)}}}nr.\u0275fac=function(e){return new(e||nr)},nr.\u0275dir=T({type:nr,selectors:[["","ngSwitch",""]],inputs:{ngSwitch:"ngSwitch"},standalone:!0});class ss{constructor(e,n,r){this.ngSwitch=r,r._addCase(),this._view=new dm(e,n)}ngDoCheck(){this._view.enforceState(this.ngSwitch._matchCase(this.ngSwitchCase))}}ss.\u0275fac=function(e){return new(e||ss)(v(rn),v(En),v(nr,9))},ss.\u0275dir=T({type:ss,selectors:[["","ngSwitchCase",""]],inputs:{ngSwitchCase:"ngSwitchCase"},standalone:!0});class os{constructor(e,n,r){r._addDefault(new dm(e,n))}}os.\u0275fac=function(e){return new(e||os)(v(rn),v(En),v(nr,9))},os.\u0275dir=T({type:os,selectors:[["","ngSwitchDefault",""]],standalone:!0});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class ai{constructor(e){this._localization=e,this._caseViews={}}set ngPlural(e){this._switchValue=e,this._updateView()}addCase(e,n){this._caseViews[e]=n}_updateView(){this._clearViews();const e=Object.keys(this._caseViews),n=uE(this._switchValue,e,this._localization);this._activateView(this._caseViews[n])}_clearViews(){this._activeView&&this._activeView.destroy()}_activateView(e){e&&(this._activeView=e,this._activeView.create())}}ai.\u0275fac=function(e){return new(e||ai)(v(ts))},ai.\u0275dir=T({type:ai,selectors:[["","ngPlural",""]],inputs:{ngPlural:"ngPlural"},standalone:!0});class as{constructor(e,n,r,i){this.value=e;const s=!isNaN(Number(e));i.addCase(s?`=${e}`:e,new dm(r,n))}}as.\u0275fac=function(e){return new(e||as)(ll("ngPluralCase"),v(En),v(rn),v(ai,1))},as.\u0275dir=T({type:as,selectors:[["","ngPluralCase",""]],standalone:!0});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class li{constructor(e,n,r){this._ngEl=e,this._differs=n,this._renderer=r,this._ngStyle=null,this._differ=null}set ngStyle(e){this._ngStyle=e,!this._differ&&e&&(this._differ=this._differs.find(e).create())}ngDoCheck(){if(this._differ){const e=this._differ.diff(this._ngStyle);e&&this._applyChanges(e)}}_setStyle(e,n){const[r,i]=e.split("."),s=-1===r.indexOf("-")?void 0:qn.DashCase;null!=n?this._renderer.setStyle(this._ngEl.nativeElement,r,i?`${n}${i}`:n,s):this._renderer.removeStyle(this._ngEl.nativeElement,r,s)}_applyChanges(e){e.forEachRemovedItem(n=>this._setStyle(n.key,null)),e.forEachAddedItem(n=>this._setStyle(n.key,n.currentValue)),e.forEachChangedItem(n=>this._setStyle(n.key,n.currentValue))}}li.\u0275fac=function(e){return new(e||li)(v(Ce),v(Vt),v(zn))},li.\u0275dir=T({type:li,selectors:[["","ngStyle",""]],inputs:{ngStyle:"ngStyle"},standalone:!0});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class ls{constructor(e){this._viewContainerRef=e,this._viewRef=null,this.ngTemplateOutletContext=null,this.ngTemplateOutlet=null,this.ngTemplateOutletInjector=null}ngOnChanges(e){if(e.ngTemplateOutlet||e.ngTemplateOutletInjector){const n=this._viewContainerRef;if(this._viewRef&&n.remove(n.indexOf(this._viewRef)),this.ngTemplateOutlet){const{ngTemplateOutlet:r,ngTemplateOutletContext:i,ngTemplateOutletInjector:s}=this;this._viewRef=n.createEmbeddedView(r,i,s?{injector:s}:void 0)}else this._viewRef=null}else this._viewRef&&e.ngTemplateOutletContext&&this.ngTemplateOutletContext&&(this._viewRef.context=this.ngTemplateOutletContext)}}ls.\u0275fac=function(e){return new(e||ls)(v(rn))},ls.\u0275dir=T({type:ls,selectors:[["","ngTemplateOutlet",""]],inputs:{ngTemplateOutletContext:"ngTemplateOutletContext",ngTemplateOutlet:"ngTemplateOutlet",ngTemplateOutletInjector:"ngTemplateOutletInjector"},standalone:!0,features:[Xt]});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function cn(t,e){return new D(2100,!1)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const LP=new class PP{createSubscription(e,n){return e.then(n,r=>{throw r})}dispose(e){}},VP=new class RP{createSubscription(e,n){return e.subscribe({next:n,error:r=>{throw r}})}dispose(e){e.unsubscribe()}};class rr{constructor(e){this._latestValue=null,this._subscription=null,this._obj=null,this._strategy=null,this._ref=e}ngOnDestroy(){this._subscription&&this._dispose(),this._ref=null}transform(e){return this._obj?e!==this._obj?(this._dispose(),this.transform(e)):this._latestValue:(e&&this._subscribe(e),this._latestValue)}_subscribe(e){this._obj=e,this._strategy=this._selectStrategy(e),this._subscription=this._strategy.createSubscription(e,n=>this._updateLatestValue(e,n))}_selectStrategy(e){if(ju(e))return LP;if(pb(e))return VP;throw cn()}_dispose(){this._strategy.dispose(this._subscription),this._latestValue=null,this._subscription=null,this._obj=null}_updateLatestValue(e,n){e===this._obj&&(this._latestValue=n,this._ref.markForCheck())}}rr.\u0275fac=function(e){return new(e||rr)(v(Hl,16))},rr.\u0275pipe=st({name:"async",type:rr,pure:!1,standalone:!0});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class ir{transform(e){if(null==e)return null;if("string"!=typeof e)throw cn();return e.toLowerCase()}}ir.\u0275fac=function(e){return new(e||ir)},ir.\u0275pipe=st({name:"lowercase",type:ir,pure:!0,standalone:!0});const BP=/(?:[0-9A-Za-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CA\uA7D0\uA7D1\uA7D3\uA7D5-\uA7D9\uA7F2-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF40\uDF42-\uDF49\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDD00-\uDD23\uDE80-\uDEA9\uDEB0\uDEB1\uDF00-\uDF1C\uDF27\uDF30-\uDF45\uDF70-\uDF81\uDFB0-\uDFC4\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC71\uDC72\uDC75\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD44\uDD47\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC5F-\uDC61\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDEB8\uDF00-\uDF1A\uDF40-\uDF46]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCDF\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD2F\uDD3F\uDD41\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEB0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDEE0-\uDEF2\uDFB0]|\uD808[\uDC00-\uDF99]|\uD809[\uDC80-\uDD43]|\uD80B[\uDF90-\uDFF0]|[\uD80C\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE70-\uDEBE\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE7F\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDD00-\uDD08]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00-\uDD22\uDD50-\uDD52\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD837[\uDF00-\uDF1E]|\uD838[\uDD00-\uDD2C\uDD37-\uDD3D\uDD4E\uDE90-\uDEAD\uDEC0-\uDEEB]|\uD839[\uDFE0-\uDFE6\uDFE8-\uDFEB\uDFED\uDFEE\uDFF0-\uDFFE]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43\uDD4B]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF38\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A])\S*/g;class sr{transform(e){if(null==e)return null;if("string"!=typeof e)throw cn();return e.replace(BP,n=>n[0].toUpperCase()+n.slice(1).toLowerCase())}}sr.\u0275fac=function(e){return new(e||sr)},sr.\u0275pipe=st({name:"titlecase",type:sr,pure:!0,standalone:!0});class or{transform(e){if(null==e)return null;if("string"!=typeof e)throw cn();return e.toUpperCase()}}or.\u0275fac=function(e){return new(e||or)},or.\u0275pipe=st({name:"uppercase",type:or,pure:!0,standalone:!0});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const jP=new x("DATE_PIPE_DEFAULT_TIMEZONE");class ar{constructor(e,n){this.locale=e,this.defaultTimezone=n}transform(e,n="mediumDate",r,i){if(null==e||""===e||e!=e)return null;try{return dP(e,n,i||this.locale,r??this.defaultTimezone??void 0)}catch(s){throw cn(0,s.message)}}}ar.\u0275fac=function(e){return new(e||ar)(v(wn,16),v(jP,24))},ar.\u0275pipe=st({name:"date",type:ar,pure:!0,standalone:!0});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const HP=/#/g;class lr{constructor(e){this._localization=e}transform(e,n,r){if(null==e)return"";if("object"!=typeof n||null===n)throw cn();return n[uE(e,Object.keys(n),this._localization,r)].replace(HP,e.toString())}}lr.\u0275fac=function(e){return new(e||lr)(v(ts,16))},lr.\u0275pipe=st({name:"i18nPlural",type:lr,pure:!0,standalone:!0});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class cr{transform(e,n){if(null==e)return"";if("object"!=typeof n||"string"!=typeof e)throw cn();return n.hasOwnProperty(e)?n[e]:n.hasOwnProperty("other")?n.other:""}}cr.\u0275fac=function(e){return new(e||cr)},cr.\u0275pipe=st({name:"i18nSelect",type:cr,pure:!0,standalone:!0});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class cs{transform(e){return JSON.stringify(e,null,2)}}cs.\u0275fac=function(e){return new(e||cs)},cs.\u0275pipe=st({name:"json",type:cs,pure:!1,standalone:!0});class us{constructor(e){this.differs=e,this.keyValues=[],this.compareFn=gE}transform(e,n=gE){if(!e||!(e instanceof Map)&&"object"!=typeof e)return null;this.differ||(this.differ=this.differs.find(e).create());const r=this.differ.diff(e),i=n!==this.compareFn;return r&&(this.keyValues=[],r.forEachItem(s=>{this.keyValues.push(
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function $P(t,e){return{key:t,value:e}}(s.key,s.currentValue))})),(r||i)&&(this.keyValues.sort(n),this.compareFn=n),this.keyValues}}function gE(t,e){const n=t.key,r=e.key;if(n===r)return 0;if(void 0===n)return 1;if(void 0===r)return-1;if(null===n)return 1;if(null===r)return-1;if("string"==typeof n&&"string"==typeof r)return n<r?-1:1;if("number"==typeof n&&"number"==typeof r)return n-r;if("boolean"==typeof n&&"boolean"==typeof r)return n<r?-1:1;const i=String(n),s=String(r);return i==s?0:i<s?-1:1}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */us.\u0275fac=function(e){return new(e||us)(v(Vt,16))},us.\u0275pipe=st({name:"keyvalue",type:us,pure:!1,standalone:!0});class ur{constructor(e){this._locale=e}transform(e,n,r){if(!fm(e))return null;r=r||this._locale;try{return function SP(t,e,n){return lm(t,cm(rm(e,Ul.Decimal),Bt(e,Ee.MinusSign)),e,Ee.Group,Ee.Decimal,n)}(hm(e),r,n)}catch(i){throw cn(0,i.message)}}}ur.\u0275fac=function(e){return new(e||ur)(v(wn,16))},ur.\u0275pipe=st({name:"number",type:ur,pure:!0,standalone:!0});class dr{constructor(e){this._locale=e}transform(e,n,r){if(!fm(e))return null;r=r||this._locale;try{return function AP(t,e,n){return lm(t,cm(rm(e,Ul.Percent),Bt(e,Ee.MinusSign)),e,Ee.Group,Ee.Decimal,n,!0).replace(new RegExp("%","g"),Bt(e,Ee.PercentSign))}(hm(e),r,n)}catch(i){throw cn(0,i.message)}}}dr.\u0275fac=function(e){return new(e||dr)(v(wn,16))},dr.\u0275pipe=st({name:"percent",type:dr,pure:!0,standalone:!0});class fr{constructor(e,n="USD"){this._locale=e,this._defaultCurrencyCode=n}transform(e,n=this._defaultCurrencyCode,r="symbol",i,s){if(!fm(e))return null;s=s||this._locale,"boolean"==typeof r&&(r=r?"symbol":"code");let o=n||this._defaultCurrencyCode;"code"!==r&&(o="symbol"===r||"symbol-narrow"===r?oP(o,"symbol"===r?"wide":"narrow",s):r);try{return IP(hm(e),s,o,n,i)}catch(a){throw cn(0,a.message)}}}function fm(t){return!(null==t||""===t||t!=t)}function hm(t){if("string"==typeof t&&!isNaN(Number(t)-parseFloat(t)))return Number(t);if("number"!=typeof t)throw new Error(`${t} is not a number`);return t}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */fr.\u0275fac=function(e){return new(e||fr)(v(wn,16),v(dR,16))},fr.\u0275pipe=st({name:"currency",type:fr,pure:!0,standalone:!0});class hr{transform(e,n,r){if(null==e)return null;if(!this.supports(e))throw cn();return e.slice(n,r)}supports(e){return"string"==typeof e||Array.isArray(e)}}hr.\u0275fac=function(e){return new(e||hr)},hr.\u0275pipe=st({name:"slice",type:hr,pure:!1,standalone:!0});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class un{}un.\u0275fac=function(e){return new(e||un)},un.\u0275mod=J({type:un,imports:[ns,rs,is,oi,ls,li,nr,ss,os,ai,as,rr,or,ir,cs,hr,ur,dr,sr,fr,ar,lr,cr,us],exports:[ns,rs,is,oi,ls,li,nr,ss,os,ai,as,rr,or,ir,cs,hr,ur,dr,sr,fr,ar,lr,cr,us]}),un.\u0275inj=q({});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const yE="browser";
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
new Eo("14.2.10");
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class _E{}_E.\u0275prov=w({token:_E,providedIn:"root",factory:()=>new qP(b(V),window)});class qP{constructor(e,n){this.document=e,this.window=n,this.offset=()=>[0,0]}setOffset(e){Array.isArray(e)?this.offset=()=>e:this.offset=e}getScrollPosition(){return this.supportsScrolling()?[this.window.pageXOffset,this.window.pageYOffset]:[0,0]}scrollToPosition(e){this.supportsScrolling()&&this.window.scrollTo(e[0],e[1])}scrollToAnchor(e){if(!this.supportsScrolling())return;const n=function KP(t,e){const n=t.getElementById(e)||t.getElementsByName(e)[0];if(n)return n;if("function"==typeof t.createTreeWalker&&t.body&&(t.body.createShadowRoot||t.body.attachShadow)){const r=t.createTreeWalker(t.body,NodeFilter.SHOW_ELEMENT);let i=r.currentNode;for(;i;){const s=i.shadowRoot;if(s){const o=s.getElementById(e)||s.querySelector(`[name="${e}"]`);if(o)return o}i=r.nextNode()}}return null}(this.document,e);n&&(this.scrollToElement(n),n.focus())}setHistoryScrollRestoration(e){if(this.supportScrollRestoration()){const n=this.window.history;n&&n.scrollRestoration&&(n.scrollRestoration=e)}}scrollToElement(e){const n=e.getBoundingClientRect(),r=n.left+this.window.pageXOffset,i=n.top+this.window.pageYOffset,s=this.offset();this.window.scrollTo(r-s[0],i-s[1])}supportScrollRestoration(){try{if(!this.supportsScrolling())return!1;const e=vE(this.window.history)||vE(Object.getPrototypeOf(this.window.history));return!(!e||!e.writable&&!e.set)}catch{return!1}}supportsScrolling(){try{return!!this.window&&!!this.window.scrollTo&&"pageXOffset"in this.window}catch{return!1}}}function vE(t){return Object.getOwnPropertyDescriptor(t,"scrollRestoration")}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class bE{}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function DE(t){throw new D(2958,`Unexpected invocation of the ${t} in the prod mode. Please make sure that the prod mode is enabled for production builds.`)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Be(t,e=!0){return`The NgOptimizedImage directive ${e?`(activated on an <img> element with the \`ngSrc="${t}"\`) `:""}has detected that`}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function hd(t,e){return pm(t)?new URL(t):new URL(t,e.location.href)}function pm(t){return/^https?:\/\//.test(t)}function XP(t){return t.startsWith("/")?t.slice(1):t}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const JP=new Set(["localhost","127.0.0.1","0.0.0.0"]),eL=new x("PRECONNECT_CHECK_BLOCKLIST");class Wl{constructor(){this.document=Fe(V),this.preconnectLinks=null,this.alreadySeen=new Set,this.window=null,this.blocklist=new Set(JP),DE("preconnect link checker");const e=this.document.defaultView;typeof e<"u"&&(this.window=e);const n=Fe(eL,{optional:!0});n&&this.populateBlocklist(n)}populateBlocklist(e){if(!Array.isArray(e))throw new D(2957,"The blocklist for the preconnect check was not provided as an array. Check that the `PRECONNECT_CHECK_BLOCKLIST` token is configured as a `multi: true` provider.");CE(e,n=>{this.blocklist.add(function YP(t){return pm(t)?new URL(t).hostname:t}(n))})}assertPreconnect(e,n){if(!this.window)return;const r=hd(e,this.window);this.blocklist.has(r.hostname)||this.alreadySeen.has(r.origin)||(this.alreadySeen.add(r.origin),this.preconnectLinks||(this.preconnectLinks=this.queryPreconnectLinks()),this.preconnectLinks.has(r.origin)||console.warn(Ln(2956,`${Be(n)} there is no preconnect tag present for this image. Preconnecting to the origin(s) that serve priority images ensures that these images are delivered as soon as possible. To fix this, please add the following element into the <head> of the document:\n  <link rel="preconnect" href="${r.origin}">`)))}queryPreconnectLinks(){const e=new Set,r=Array.from(this.document.querySelectorAll("link[rel=preconnect]"));for(let i of r){const s=hd(i.href,this.window);e.add(s.origin)}return e}ngOnDestroy(){this.preconnectLinks?.clear(),this.alreadySeen.clear()}}function CE(t,e){for(let n of t)Array.isArray(n)?CE(n,e):e(n)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */Wl.\u0275fac=function(e){return new(e||Wl)},Wl.\u0275prov=w({token:Wl,factory:Wl.\u0275fac,providedIn:"root"});const tL=t=>t.src,EE=new x("ImageLoader",{providedIn:"root",factory:()=>tL});function pd(t,e){return function(r,i={ensurePreconnect:!0}){return function QP(t){if("string"!=typeof t||""===t.trim())return!1;try{return new URL(t),!0}catch{return!1}}(r)||function nL(t,e){throw new D(2959,!1)}(),r=function ZP(t){return t.endsWith("/")?t.slice(0,-1):t}(r),[{provide:EE,useValue:a=>(pm(a.src)&&function rL(t,e){throw new D(2959,!1)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(0,a.src),t(r,{...a,src:XP(a.src)}))}]}}pd(function iL(t,e){let n="format=auto";return e.width&&(n+=`,width=${e.width}`),`${t}/cdn-cgi/image/${n}/${e.src}`
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */});pd(function sL(t,e){let n="f_auto,q_auto";return e.width&&(n+=`,w_${e.width}`),`${t}/image/upload/${n}/${e.src}`
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */});pd(function oL(t,e){let n="tr:q-auto";return e.width&&(n+=`,w-${e.width}`),`${t}/${n}/${e.src}`
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */});pd(function aL(t,e){const n=new URL(`${t}/${e.src}`);return n.searchParams.set("auto","format"),e.width&&n.searchParams.set("w",e.width.toString()),n.href
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */});class ql{constructor(){this.images=new Map,this.alreadyWarned=new Set,this.window=null,this.observer=null,DE("LCP checker");const e=Fe(V).defaultView;typeof e<"u"&&typeof PerformanceObserver<"u"&&(this.window=e,this.observer=this.initPerformanceObserver())}initPerformanceObserver(){const e=new PerformanceObserver(n=>{const r=n.getEntries();if(0===r.length)return;const s=r[r.length-1].element?.src??"";s.startsWith("data:")||s.startsWith("blob:")||this.images.get(s)&&!this.alreadyWarned.has(s)&&(this.alreadyWarned.add(s),function lL(t){const e=Be(t);console.warn(Ln(2955,`${e} this image is the Largest Contentful Paint (LCP) element but was not marked "priority". This image should be marked "priority" in order to prioritize its loading. To fix this, add the "priority" attribute.`))}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(s))});return e.observe({type:"largest-contentful-paint",buffered:!0}),e}registerImage(e,n){!this.observer||this.images.set(hd(e,this.window).href,n)}unregisterImage(e){!this.observer||this.images.delete(hd(e,this.window).href)}ngOnDestroy(){!this.observer||(this.observer.disconnect(),this.images.clear(),this.alreadyWarned.clear())}}ql.\u0275fac=function(e){return new(e||ql)},ql.\u0275prov=w({token:ql,factory:ql.\u0275fac,providedIn:"root"});const ME=/^((\s*\d+w\s*(,|$)){1,})$/;class md{constructor(){this.imageLoader=Fe(EE),this.renderer=Fe(zn),this.imgElement=Fe(Ce).nativeElement,this.injector=Fe(Ve),this.lcpObserver=null,this._renderedSrc=null,this._priority=!1}set rawSrc(e){}set width(e){this._width=SE(e)}get width(){return this._width}set height(e){this._height=SE(e)}get height(){return this._height}set priority(e){this._priority=function uL(t){return null!=t&&"false"!=`${t}`}(e)}get priority(){return this._priority}ngOnInit(){this.setHostAttributes()}setHostAttributes(){this.setHostAttribute("width",this.width.toString()),this.setHostAttribute("height",this.height.toString()),this.setHostAttribute("loading",this.getLoadingBehavior()),this.setHostAttribute("fetchpriority",this.getFetchPriority()),this.setHostAttribute("src",this.getRewrittenSrc()),this.ngSrcset&&this.setHostAttribute("srcset",this.getRewrittenSrcset())}ngOnChanges(e){}getLoadingBehavior(){return this.priority||void 0===this.loading?this.priority?"eager":"lazy":this.loading}getFetchPriority(){return this.priority?"high":"auto"}getRewrittenSrc(){if(!this._renderedSrc){const e={src:this.ngSrc};this._renderedSrc=this.imageLoader(e)}return this._renderedSrc}getRewrittenSrcset(){const e=ME.test(this.ngSrcset);return this.ngSrcset.split(",").filter(r=>""!==r).map(r=>{r=r.trim();const i=e?parseFloat(r):parseFloat(r)*this.width;return`${this.imageLoader({src:this.ngSrc,width:i})} ${r}`}).join(", ")}ngOnDestroy(){}setHostAttribute(e,n){this.renderer.setAttribute(this.imgElement,e,n)}}function SE(t){return"string"==typeof t?parseInt(t,10):t}md.\u0275fac=function(e){return new(e||md)},md.\u0275dir=T({type:md,selectors:[["img","ngSrc",""],["img","rawSrc",""]],inputs:{rawSrc:"rawSrc",ngSrc:"ngSrc",ngSrcset:"ngSrcset",width:"width",height:"height",loading:"loading",priority:"priority",src:"src",srcset:"srcset"},standalone:!0,features:[Xt]});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class gm extends
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license Angular v14.2.10
       * (c) 2010-2022 Google LLC. https://angular.io/
       * License: MIT
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class pL extends class WR{}{constructor(){super(...arguments),this.supportsDOMEvents=!0}}{static makeCurrent(){!function GR(t){rd||(rd=t)}(new gm)}onAndCancel(e,n,r){return e.addEventListener(n,r,!1),()=>{e.removeEventListener(n,r,!1)}}dispatchEvent(e,n){e.dispatchEvent(n)}remove(e){e.parentNode&&e.parentNode.removeChild(e)}createElement(e,n){return(n=n||this.getDefaultDocument()).createElement(e)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(e){return e.nodeType===Node.ELEMENT_NODE}isShadowRoot(e){return e instanceof DocumentFragment}getGlobalEventTarget(e,n){return"window"===n?window:"document"===n?e:"body"===n?e.body:null}getBaseHref(e){const n=function mL(){return Yl=Yl||document.querySelector("base"),Yl?Yl.getAttribute("href"):null}();return null==n?null:function gL(t){gd=gd||document.createElement("a"),gd.setAttribute("href",t);const e=gd.pathname;return"/"===e.charAt(0)?e:`/${e}`}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(n)}resetBaseElement(){Yl=null}getUserAgent(){return window.navigator.userAgent}getCookie(e){return dE(document.cookie,e)}}let gd,Yl=null;const TE=new x("TRANSITION_ID");const _L=[{provide:EC,useFactory:function yL(t,e,n){return()=>{n.get(Zn).donePromise.then(()=>{const r=an(),i=e.querySelectorAll(`style[ng-transition="${t}"]`);for(let s=0;s<i.length;s++)r.remove(i[s])})}},deps:[TE,V,Ve],multi:!0}];
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class Ko{build(){return new XMLHttpRequest}}Ko.\u0275fac=function(e){return new(e||Ko)},Ko.\u0275prov=w({token:Ko,factory:Ko.\u0275fac});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const Ql=new x("EventManagerPlugins");class pr{constructor(e,n){this._zone=n,this._eventNameToPlugin=new Map,e.forEach(r=>r.manager=this),this._plugins=e.slice().reverse()}addEventListener(e,n,r){return this._findPluginFor(n).addEventListener(e,n,r)}addGlobalEventListener(e,n,r){return this._findPluginFor(n).addGlobalEventListener(e,n,r)}getZone(){return this._zone}_findPluginFor(e){const n=this._eventNameToPlugin.get(e);if(n)return n;const r=this._plugins;for(let i=0;i<r.length;i++){const s=r[i];if(s.supports(e))return this._eventNameToPlugin.set(e,s),s}throw new Error(`No event manager plugin found for event ${e}`)}}pr.\u0275fac=function(e){return new(e||pr)(b(Ql),b(re))},pr.\u0275prov=w({token:pr,factory:pr.\u0275fac});class ym{constructor(e){this._doc=e}addGlobalEventListener(e,n,r){const i=an().getGlobalEventTarget(this._doc,e);if(!i)throw new Error(`Unsupported event target ${i} for event ${n}`);return this.addEventListener(i,n,r)}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class ds{constructor(){this._stylesSet=new Set}addStyles(e){const n=new Set;e.forEach(r=>{this._stylesSet.has(r)||(this._stylesSet.add(r),n.add(r))}),this.onStylesAdded(n)}onStylesAdded(e){}getAllStyles(){return Array.from(this._stylesSet)}}ds.\u0275fac=function(e){return new(e||ds)},ds.\u0275prov=w({token:ds,factory:ds.\u0275fac});class An extends ds{constructor(e){super(),this._doc=e,this._hostNodes=new Map,this._hostNodes.set(e.head,[])}_addStylesToHost(e,n,r){e.forEach(i=>{const s=this._doc.createElement("style");s.textContent=i,r.push(n.appendChild(s))})}addHost(e){const n=[];this._addStylesToHost(this._stylesSet,e,n),this._hostNodes.set(e,n)}removeHost(e){const n=this._hostNodes.get(e);n&&n.forEach(xE),this._hostNodes.delete(e)}onStylesAdded(e){this._hostNodes.forEach((n,r)=>{this._addStylesToHost(e,r,n)})}ngOnDestroy(){this._hostNodes.forEach(e=>e.forEach(xE))}}function xE(t){an().remove(t)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */An.\u0275fac=function(e){return new(e||An)(b(V))},An.\u0275prov=w({token:An,factory:An.\u0275fac});const _m={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/MathML/"},vm=/%COMP%/g,bL="_nghost-%COMP%",DL="_ngcontent-%COMP%";function yd(t,e,n){for(let r=0;r<e.length;r++){let i=e[r];Array.isArray(i)?yd(t,i,n):(i=i.replace(vm,t),n.push(i))}return n}function FE(t){return e=>{if("__ngUnwrap__"===e)return t;!1===t(e)&&(e.preventDefault(),e.returnValue=!1)}}class mr{constructor(e,n,r){this.eventManager=e,this.sharedStylesHost=n,this.appId=r,this.rendererByCompId=new Map,this.defaultRenderer=new bm(e)}createRenderer(e,n){if(!e||!n)return this.defaultRenderer;switch(n.encapsulation){case mn.Emulated:{let r=this.rendererByCompId.get(n.id);return r||(r=new ML(this.eventManager,this.sharedStylesHost,n,this.appId),this.rendererByCompId.set(n.id,r)),r.applyToHost(e),r}case 1:case mn.ShadowDom:return new IL(this.eventManager,this.sharedStylesHost,e,n);default:if(!this.rendererByCompId.has(n.id)){const r=yd(n.id,n.styles,[]);this.sharedStylesHost.addStyles(r),this.rendererByCompId.set(n.id,this.defaultRenderer)}return this.defaultRenderer}}begin(){}end(){}}mr.\u0275fac=function(e){return new(e||mr)(b(pr),b(An),b(Ki))},mr.\u0275prov=w({token:mr,factory:mr.\u0275fac});class bm{constructor(e){this.eventManager=e,this.data=Object.create(null),this.destroyNode=null}destroy(){}createElement(e,n){return n?document.createElementNS(_m[n]||n,e):document.createElement(e)}createComment(e){return document.createComment(e)}createText(e){return document.createTextNode(e)}appendChild(e,n){(RE(e)?e.content:e).appendChild(n)}insertBefore(e,n,r){e&&(RE(e)?e.content:e).insertBefore(n,r)}removeChild(e,n){e&&e.removeChild(n)}selectRootElement(e,n){let r="string"==typeof e?document.querySelector(e):e;if(!r)throw new Error(`The selector "${e}" did not match any elements`);return n||(r.textContent=""),r}parentNode(e){return e.parentNode}nextSibling(e){return e.nextSibling}setAttribute(e,n,r,i){if(i){n=i+":"+n;const s=_m[i];s?e.setAttributeNS(s,n,r):e.setAttribute(n,r)}else e.setAttribute(n,r)}removeAttribute(e,n,r){if(r){const i=_m[r];i?e.removeAttributeNS(i,n):e.removeAttribute(`${r}:${n}`)}else e.removeAttribute(n)}addClass(e,n){e.classList.add(n)}removeClass(e,n){e.classList.remove(n)}setStyle(e,n,r,i){i&(qn.DashCase|qn.Important)?e.style.setProperty(n,r,i&qn.Important?"important":""):e.style[n]=r}removeStyle(e,n,r){r&qn.DashCase?e.style.removeProperty(n):e.style[n]=""}setProperty(e,n,r){e[n]=r}setValue(e,n){e.nodeValue=n}listen(e,n,r){return"string"==typeof e?this.eventManager.addGlobalEventListener(e,n,FE(r)):this.eventManager.addEventListener(e,n,FE(r))}}"@".charCodeAt(0);function RE(t){return"TEMPLATE"===t.tagName&&void 0!==t.content}class ML extends bm{constructor(e,n,r,i){super(e),this.component=r;const s=yd(i+"-"+r.id,r.styles,[]);n.addStyles(s),this.contentAttr=function CL(t){return DL.replace(vm,t)}(i+"-"+r.id),this.hostAttr=function EL(t){return bL.replace(vm,t)}(i+"-"+r.id)}applyToHost(e){super.setAttribute(e,this.hostAttr,"")}createElement(e,n){const r=super.createElement(e,n);return super.setAttribute(r,this.contentAttr,""),r}}class IL extends bm{constructor(e,n,r,i){super(e),this.sharedStylesHost=n,this.hostEl=r,this.shadowRoot=r.attachShadow({mode:"open"}),this.sharedStylesHost.addHost(this.shadowRoot);const s=yd(i.id,i.styles,[]);for(let o=0;o<s.length;o++){const a=document.createElement("style");a.textContent=s[o],this.shadowRoot.appendChild(a)}}nodeOrShadowRoot(e){return e===this.hostEl?this.shadowRoot:e}destroy(){this.sharedStylesHost.removeHost(this.shadowRoot)}appendChild(e,n){return super.appendChild(this.nodeOrShadowRoot(e),n)}insertBefore(e,n,r){return super.insertBefore(this.nodeOrShadowRoot(e),n,r)}removeChild(e,n){return super.removeChild(this.nodeOrShadowRoot(e),n)}parentNode(e){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(e)))}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class Yo extends ym{constructor(e){super(e)}supports(e){return!0}addEventListener(e,n,r){return e.addEventListener(n,r,!1),()=>this.removeEventListener(e,n,r)}removeEventListener(e,n,r){return e.removeEventListener(n,r)}}Yo.\u0275fac=function(e){return new(e||Yo)(b(V))},Yo.\u0275prov=w({token:Yo,factory:Yo.\u0275fac});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const PE=["alt","control","meta","shift"],AL={"\b":"Backspace","\t":"Tab","\x7f":"Delete","\x1b":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},SL={alt:t=>t.altKey,control:t=>t.ctrlKey,meta:t=>t.metaKey,shift:t=>t.shiftKey};class Ht extends ym{constructor(e){super(e)}supports(e){return null!=Ht.parseEventName(e)}addEventListener(e,n,r){const i=Ht.parseEventName(n),s=Ht.eventCallback(i.fullKey,r,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>an().onAndCancel(e,i.domEventName,s))}static parseEventName(e){const n=e.toLowerCase().split("."),r=n.shift();if(0===n.length||"keydown"!==r&&"keyup"!==r)return null;const i=Ht._normalizeKey(n.pop());let s="",o=n.indexOf("code");if(o>-1&&(n.splice(o,1),s="code."),PE.forEach(l=>{const c=n.indexOf(l);c>-1&&(n.splice(c,1),s+=l+".")}),s+=i,0!=n.length||0===i.length)return null;const a={};return a.domEventName=r,a.fullKey=s,a}static matchEventFullKeyCode(e,n){let r=AL[e.key]||e.key,i="";return n.indexOf("code.")>-1&&(r=e.code,i="code."),!(null==r||!r)&&(r=r.toLowerCase()," "===r?r="space":"."===r&&(r="dot"),PE.forEach(s=>{if(s!==r){(0,SL[s])(e)&&(i+=s+".")}}),i+=r,i===n)}static eventCallback(e,n,r){return i=>{Ht.matchEventFullKeyCode(i,e)&&r.runGuarded(()=>n(i))}}static _normalizeKey(e){return"esc"===e?"escape":e}}Ht.\u0275fac=function(e){return new(e||Ht)(b(V))},Ht.\u0275prov=w({token:Ht,factory:Ht.\u0275fac});const VE=[{provide:Xu,useValue:yE},{provide:MC,useValue:function TL(){gm.makeCurrent()},multi:!0},{provide:V,useFactory:function NL(){return function jT(t){ch=t}(document),document},deps:[]}],OL=kC(UR,"browser",VE),BE=new x(""),jE=[{provide:Ju,useClass:class vL{addToWindow(e){fe.getAngularTestability=(r,i=!0)=>{const s=e.findTestabilityInTree(r,i);if(null==s)throw new Error("Could not find testability for element.");return s},fe.getAllAngularTestabilities=()=>e.getAllTestabilities(),fe.getAllAngularRootElements=()=>e.getAllRootElements();fe.frameworkStabilizers||(fe.frameworkStabilizers=[]),fe.frameworkStabilizers.push(r=>{const i=fe.getAllAngularTestabilities();let s=i.length,o=!1;const a=function(l){o=o||l,s--,0==s&&r(o)};i.forEach(function(l){l.whenStable(a)})})}findTestabilityInTree(e,n,r){if(null==n)return null;return e.getTestability(n)??(r?an().isShadowRoot(n)?this.findTestabilityInTree(e,n.host,!0):this.findTestabilityInTree(e,n.parentElement,!0):null)}},deps:[]},{provide:NC,useClass:ni,deps:[re,ri,Ju]},{provide:ni,useClass:ni,deps:[re,ri,Ju]}],HE=[{provide:yh,useValue:"root"},{provide:Gn,useFactory:function xL(){return new Gn},deps:[]},{provide:Ql,useClass:Yo,multi:!0,deps:[V,re,Xu]},{provide:Ql,useClass:Ht,multi:!0,deps:[V]},{provide:mr,useClass:mr,deps:[pr,An,Ki]},{provide:vl,useExisting:mr},{provide:ds,useExisting:An},{provide:An,useClass:An,deps:[V]},{provide:pr,useClass:pr,deps:[Ql,re]},{provide:bE,useClass:Ko,deps:[]},[]];class $t{constructor(e){false}static withServerTransition(e){return{ngModule:$t,providers:[{provide:Ki,useValue:e.appId},{provide:TE,useExisting:Ki},_L]}}}$t.\u0275fac=function(e){return new(e||$t)(b(BE,12))},$t.\u0275mod=J({type:$t,exports:[un,Xi]}),$t.\u0275inj=q({providers:[...HE,...jE],imports:[un,Xi]});class Zl{constructor(e){this._doc=e,this._dom=an()}addTag(e,n=!1){return e?this._getOrCreateElement(e,n):null}addTags(e,n=!1){return e?e.reduce((r,i)=>(i&&r.push(this._getOrCreateElement(i,n)),r),[]):[]}getTag(e){return e&&this._doc.querySelector(`meta[${e}]`)||null}getTags(e){if(!e)return[];const n=this._doc.querySelectorAll(`meta[${e}]`);return n?[].slice.call(n):[]}updateTag(e,n){if(!e)return null;n=n||this._parseSelector(e);const r=this.getTag(n);return r?this._setMetaElementAttributes(e,r):this._getOrCreateElement(e,!0)}removeTag(e){this.removeTagElement(this.getTag(e))}removeTagElement(e){e&&this._dom.remove(e)}_getOrCreateElement(e,n=!1){if(!n){const s=this._parseSelector(e),o=this.getTags(s).filter(a=>this._containsAttributes(e,a))[0];if(void 0!==o)return o}const r=this._dom.createElement("meta");return this._setMetaElementAttributes(e,r),this._doc.getElementsByTagName("head")[0].appendChild(r),r}_setMetaElementAttributes(e,n){return Object.keys(e).forEach(r=>n.setAttribute(this._getMetaKeyMap(r),e[r])),n}_parseSelector(e){const n=e.name?"name":"property";return`${n}="${e[n]}"`}_containsAttributes(e,n){return Object.keys(e).every(r=>n.getAttribute(this._getMetaKeyMap(r))===e[r])}_getMetaKeyMap(e){return kL[e]||e}}Zl.\u0275fac=function(e){return new(e||Zl)(b(V))},Zl.\u0275prov=w({token:Zl,factory:function(e){let n=null;return n=e?new e:
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function FL(){return new Zl(b(V))}(),n},providedIn:"root"});const kL={httpEquiv:"http-equiv"};
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class Xl{constructor(e){this._doc=e}getTitle(){return this._doc.title}setTitle(e){this._doc.title=e||""}}Xl.\u0275fac=function(e){return new(e||Xl)(b(V))},Xl.\u0275prov=w({token:Xl,factory:function(e){let n=null;return n=e?new e:function RL(){return new Xl(b(V))}(),n},providedIn:"root"});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
typeof window<"u"&&window;
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class Jl{constructor(){this.store={},this.onSerializeCallbacks={}}get(e,n){return void 0!==this.store[e]?this.store[e]:n}set(e,n){this.store[e]=n}remove(e){delete this.store[e]}hasKey(e){return this.store.hasOwnProperty(e)}get isEmpty(){return 0===Object.keys(this.store).length}onSerialize(e,n){this.onSerializeCallbacks[e]=n}toJson(){for(const e in this.onSerializeCallbacks)if(this.onSerializeCallbacks.hasOwnProperty(e))try{this.store[e]=this.onSerializeCallbacks[e]()}catch(n){console.warn("Exception in onSerialize callback: ",n)}return JSON.stringify(this.store)}}Jl.\u0275fac=function(e){return new(e||Jl)},Jl.\u0275prov=w({token:Jl,factory:function(){return(()=>{const t=Fe(V),e=Fe(Ki),n=new Jl;return n.store=function HL(t,e){const n=t.getElementById(e+"-state");let r={};if(n&&n.textContent)try{r=JSON.parse(function jL(t){const e={"&a;":"&","&q;":'"',"&s;":"'","&l;":"<","&g;":">"};return t.replace(/&[^;]+;/g,n=>e[n])}(n.textContent))}catch(i){console.warn("Exception while restoring TransferState for app "+e,i)}return r}(t,e),n})()},providedIn:"root"});class ec{}ec.\u0275fac=function(e){return new(e||ec)},ec.\u0275mod=J({type:ec}),ec.\u0275inj=q({});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const UL={pan:!0,panstart:!0,panmove:!0,panend:!0,pancancel:!0,panleft:!0,panright:!0,panup:!0,pandown:!0,pinch:!0,pinchstart:!0,pinchmove:!0,pinchend:!0,pinchcancel:!0,pinchin:!0,pinchout:!0,press:!0,pressup:!0,rotate:!0,rotatestart:!0,rotatemove:!0,rotateend:!0,rotatecancel:!0,swipe:!0,swipeleft:!0,swiperight:!0,swipeup:!0,swipedown:!0,tap:!0,doubletap:!0},Em=new x("HammerGestureConfig"),zE=new x("HammerLoader");class Qo{constructor(){this.events=[],this.overrides={}}buildHammer(e){const n=new Hammer(e,this.options);n.get("pinch").set({enable:!0}),n.get("rotate").set({enable:!0});for(const r in this.overrides)n.get(r).set(this.overrides[r]);return n}}Qo.\u0275fac=function(e){return new(e||Qo)},Qo.\u0275prov=w({token:Qo,factory:Qo.\u0275fac});class Zo extends ym{constructor(e,n,r,i){super(e),this._config=n,this.console=r,this.loader=i,this._loaderPromise=null}supports(e){return!(!UL.hasOwnProperty(e.toLowerCase())&&!this.isCustomEvent(e)||!window.Hammer&&!this.loader)}addEventListener(e,n,r){const i=this.manager.getZone();if(n=n.toLowerCase(),!window.Hammer&&this.loader){this._loaderPromise=this._loaderPromise||i.runOutsideAngular(()=>this.loader());let s=!1,o=()=>{s=!0};return i.runOutsideAngular(()=>this._loaderPromise.then(()=>{window.Hammer?s||(o=this.addEventListener(e,n,r)):o=()=>{}}).catch(()=>{o=()=>{}})),()=>{o()}}return i.runOutsideAngular(()=>{const s=this._config.buildHammer(e),o=function(a){i.runGuarded(function(){r(a)})};return s.on(n,o),()=>{s.off(n,o),"function"==typeof s.destroy&&s.destroy()}})}isCustomEvent(e){return this._config.events.indexOf(e)>-1}}Zo.\u0275fac=function(e){return new(e||Zo)(b(V),b(Em),b(Yi),b(zE,8))},Zo.\u0275prov=w({token:Zo,factory:Zo.\u0275fac});class tc{}tc.\u0275fac=function(e){return new(e||tc)},tc.\u0275mod=J({type:tc}),tc.\u0275inj=q({providers:[{provide:Ql,useClass:Zo,multi:!0,deps:[V,Em,Yi,[new Xr,zE]]},{provide:Em,useClass:Qo,deps:[]}]});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class ui{}ui.\u0275fac=function(e){return new(e||ui)},ui.\u0275prov=w({token:ui,factory:function(e){let n=null;return n=e?new(e||ui):b(Xo),n},providedIn:"root"});class Xo extends ui{constructor(e){super(),this._doc=e}sanitize(e,n){if(null==n)return null;switch(e){case ke.NONE:return n;case ke.HTML:return _n(n,"HTML")?_t(n):b_(this._doc,String(n)).toString();case ke.STYLE:return _n(n,"Style")?_t(n):n;case ke.SCRIPT:if(_n(n,"Script"))return _t(n);throw new Error("unsafe value used in a script context");case ke.URL:return _n(n,"URL")?_t(n):Du(String(n));case ke.RESOURCE_URL:if(_n(n,"ResourceURL"))return _t(n);throw new Error("unsafe value used in a resource URL context (see https://g.co/ng/security#xss)");default:throw new Error(`Unexpected SecurityContext ${e} (see https://g.co/ng/security#xss)`)}}bypassSecurityTrustHtml(e){return function YT(t){return new UT(t)}(e)}bypassSecurityTrustStyle(e){return function QT(t){return new zT(t)}(e)}bypassSecurityTrustScript(e){return function ZT(t){return new GT(t)}(e)}bypassSecurityTrustUrl(e){return function XT(t){return new WT(t)}(e)}bypassSecurityTrustResourceUrl(e){return function JT(t){return new qT(t)}(e)}}Xo.\u0275fac=function(e){return new(e||Xo)(b(V))},Xo.\u0275prov=w({token:Xo,factory:function(e){let n=null;return n=e?new e:function zL(t){return new Xo(t.get(V))}(b(Ve)),n},providedIn:"root"});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
new Eo("14.2.10");
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function GE(t,e,n,r,i,s,o){try{var a=t[s](o),l=a.value}catch(c){return void n(c)}a.done?e(l):Promise.resolve(l).then(r,i)}function H(t){return function(){var e=this,n=arguments;return new Promise(function(r,i){var s=t.apply(e,n);function o(l){GE(s,r,i,o,a,"next",l)}function a(l){GE(s,r,i,o,a,"throw",l)}o(void 0)})}}
/**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */const WE=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=63&i|128):55296==(64512&i)&&r+1<t.length&&56320==(64512&t.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&t.charCodeAt(++r)),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=63&i|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=63&i|128)}return e},qE={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,c=l?t[i+2]:0,u=s>>2,d=(3&s)<<4|a>>4;let f=(15&a)<<2|c>>6,h=63&c;l||(h=64,o||(f=64)),r.push(n[u],n[d],n[f],n[h])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(WE(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((31&i)<<6|63&s)}else if(i>239&&i<365){const l=((7&i)<<18|(63&t[n++])<<12|(63&t[n++])<<6|63&t[n++])-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(1023&l))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&o)}}return e.join("")}(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const d=i<t.length?n[t.charAt(i)]:64;if(++i,null==s||null==a||null==c||null==d)throw Error();const f=s<<2|a>>4;if(r.push(f),64!==c){const h=a<<4&240|c>>2;if(r.push(h),64!==d){const p=c<<6&192|d;r.push(p)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},_d=function(t){return function(t){const e=WE(t);return qE.encodeByteArray(e,!0)}(t).replace(/\./g,"")},Mm=function(t){try{return qE.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
/**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */function YE(){try{return"object"==typeof indexedDB}catch{return!1}}function QE(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e((null===(s=i.error)||void 0===s?void 0:s.message)||"")}}catch(n){e(n)}})}
/**
       * @license
       * Copyright 2022 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
const eV=()=>function JL(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__,Im=()=>{try{return eV()||(()=>{if(typeof process>"u"||typeof process.env>"u")return;const t=process.env.__FIREBASE_DEFAULTS__;return t?JSON.parse(t):void 0})()||(()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Mm(t[1]);return e&&JSON.parse(e)})()}catch(t){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`)}};
/**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */class ZE{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),"function"==typeof e&&(this.promise.catch(()=>{}),1===e.length?e(n):e(n,r))}}}
/**
       * @license
       * Copyright 2021 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */class fs extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name="FirebaseError",Object.setPrototypeOf(this,fs.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,bd.prototype.create)}}class bd{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?function oV(t,e){return t.replace(aV,(n,r)=>{const i=e[r];return null!=i?String(i):`<${r}?>`})}(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new fs(i,a,r)}}const aV=/\{\$([^}]+)}/g;
/**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */function Cd(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(JE(s)&&JE(o)){if(!Cd(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function JE(t){return null!==t&&"object"==typeof t}
/**
       * @license
       * Copyright 2022 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */function ew(t,e=1e3,n=2){const r=e*Math.pow(n,t),i=Math.round(.5*r*(Math.random()-.5)*2);return Math.min(144e5,r+i)}
/**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
/**
       * @license
       * Copyright 2021 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
function tw(t){return t&&t._delegate?t._delegate:t}class di{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
/**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */const hs="[DEFAULT]";
/**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */class mV{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new ZE;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e?.identifier),i=null!==(n=e?.optional)&&void 0!==n&&n;if(!this.isInitialized(r)&&!this.shouldAutoInitialize()){if(i)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(function yV(t){return"EAGER"===t.instantiationMode}
/**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */(e))try{this.getOrInitializeService({instanceIdentifier:hs})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=hs){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}delete(){var e=this;return H(function*(){const n=Array.from(e.instances.values());yield Promise.all([...n.filter(r=>"INTERNAL"in r).map(r=>r.INTERNAL.delete()),...n.filter(r=>"_delete"in r).map(r=>r._delete())])})()}isComponentSet(){return null!=this.component}isInitialized(e=hs){return this.instances.has(e)}getOptions(e=hs){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){r===this.normalizeInstanceIdentifier(s)&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=null!==(r=this.onInitCallbacks.get(i))&&void 0!==r?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:gV(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=hs){return this.component?this.component.multipleInstances?e:hs:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function gV(t){return t===hs?void 0:t}class _V{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new mV(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}
/**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */const Tm=[];var me;!function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"}(me||(me={}));const nw={debug:me.DEBUG,verbose:me.VERBOSE,info:me.INFO,warn:me.WARN,error:me.ERROR,silent:me.SILENT},vV=me.INFO,bV={[me.DEBUG]:"log",[me.VERBOSE]:"log",[me.INFO]:"info",[me.WARN]:"warn",[me.ERROR]:"error"},DV=(t,e,...n)=>{if(e<t.logLevel)return;const r=(new Date).toISOString(),i=bV[e];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`);console[i](`[${r}]  ${t.name}:`,...n)};class rw{constructor(e){this.name=e,this._logLevel=vV,this._logHandler=DV,this._userLogHandler=null,Tm.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in me))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?nw[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,me.DEBUG,...e),this._logHandler(this,me.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,me.VERBOSE,...e),this._logHandler(this,me.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,me.INFO,...e),this._logHandler(this,me.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,me.WARN,...e),this._logHandler(this,me.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,me.ERROR,...e),this._logHandler(this,me.ERROR,...e)}}let iw,sw;const ow=new WeakMap,xm=new WeakMap,aw=new WeakMap,Nm=new WeakMap,Om=new WeakMap;let Fm={get(t,e,n){if(t instanceof IDBTransaction){if("done"===e)return xm.get(t);if("objectStoreNames"===e)return t.objectStoreNames||aw.get(t);if("store"===e)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return fi(t[e])},set:(t,e,n)=>(t[e]=n,!0),has:(t,e)=>t instanceof IDBTransaction&&("done"===e||"store"===e)||e in t};function SV(t){return t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?function wV(){return sw||(sw=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}().includes(t)?function(...e){return t.apply(km(this),e),fi(ow.get(this))}:function(...e){return fi(t.apply(km(this),e))}:function(e,...n){const r=t.call(km(this),e,...n);return aw.set(r,e.sort?e.sort():[e]),fi(r)}}function TV(t){return"function"==typeof t?SV(t):(t instanceof IDBTransaction&&function IV(t){if(xm.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});xm.set(t,e)}(t),((t,e)=>e.some(n=>t instanceof n))(t,function EV(){return iw||(iw=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}())?new Proxy(t,Fm):t)}function fi(t){if(t instanceof IDBRequest)return function MV(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(fi(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&ow.set(n,t)}).catch(()=>{}),Om.set(e,t),e}(t);if(Nm.has(t))return Nm.get(t);const e=TV(t);return e!==t&&(Nm.set(t,e),Om.set(e,t)),e}const km=t=>Om.get(t);function lw(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=fi(o);return r&&o.addEventListener("upgradeneeded",l=>{r(fi(o.result),l.oldVersion,l.newVersion,fi(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const xV=["get","getKey","getAll","getAllKeys","count"],NV=["put","add","delete","clear"],Rm=new Map;function cw(t,e){if(!(t instanceof IDBDatabase)||e in t||"string"!=typeof e)return;if(Rm.get(e))return Rm.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=NV.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!i&&!xV.includes(n))return;const s=function(){var o=H(function*(a,...l){const c=this.transaction(a,i?"readwrite":"readonly");let u=c.store;return r&&(u=u.index(l.shift())),(yield Promise.all([u[n](...l),i&&c.done]))[0]});return function(l){return o.apply(this,arguments)}}();return Rm.set(e,s),s}!function AV(t){Fm=t(Fm)}(t=>({...t,get:(e,n,r)=>cw(e,n)||t.get(e,n,r),has:(e,n)=>!!cw(e,n)||t.has(e,n)}));
/**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
class OV{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(function FV(t){return"VERSION"===t.getComponent()?.type}(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}return null}).filter(n=>n).join(" ")}}const Pm="@firebase/app",ps=new rw("@firebase/app"),Ed="[DEFAULT]",i2={[Pm]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},ms=new Map,wd=new Map;
/**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */function s2(t,e){try{t.container.addComponent(e)}catch(n){ps.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function gs(t){const e=t.name;if(wd.has(e))return ps.debug(`There were multiple attempts to register component ${e}.`),!1;wd.set(e,t);for(const n of ms.values())s2(n,t);return!0}function nc(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}
/**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
const gr=new bd("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."});
/**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */class a2{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new di("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw gr.create("app-deleted",{appName:this._name})}}
/**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */function dw(t,e={}){let n=t;"object"!=typeof e&&(e={name:e});const r=Object.assign({name:Ed,automaticDataCollectionEnabled:!1},e),i=r.name;if("string"!=typeof i||!i)throw gr.create("bad-app-name",{appName:String(i)});if(n||(n=(()=>{var t;return null===(t=Im())||void 0===t?void 0:t.config})()),!n)throw gr.create("no-options");const s=ms.get(i);if(s){if(Cd(n,s.options)&&Cd(r,s.config))return s;throw gr.create("duplicate-app",{appName:i})}const o=new _V(i);for(const l of wd.values())o.addComponent(l);const a=new a2(n,r,o);return ms.set(i,a),a}function hi(t,e,n){var r;let i=null!==(r=i2[t])&&void 0!==r?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];return s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),void ps.warn(a.join(" "))}gs(new di(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}
/**
       * @license
       * Copyright 2021 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
const rc="firebase-heartbeat-store";let Vm=null;function fw(){return Vm||(Vm=lw("firebase-heartbeat-database",1,{upgrade:(t,e)=>{if(0===e)t.createObjectStore(rc)}}).catch(t=>{throw gr.create("idb-open",{originalErrorMessage:t.message})})),Vm}function Bm(){return Bm=H(function*(t){try{return(yield fw()).transaction(rc).objectStore(rc).get(pw(t))}catch(e){if(e instanceof fs)ps.warn(e.message);else{const n=gr.create("idb-get",{originalErrorMessage:e?.message});ps.warn(n.message)}}}),Bm.apply(this,arguments)}function hw(t,e){return jm.apply(this,arguments)}function jm(){return jm=H(function*(t,e){try{const r=(yield fw()).transaction(rc,"readwrite");return yield r.objectStore(rc).put(e,pw(t)),r.done}catch(n){if(n instanceof fs)ps.warn(n.message);else{const r=gr.create("idb-set",{originalErrorMessage:n?.message});ps.warn(r.message)}}}),jm.apply(this,arguments)}function pw(t){return`${t.name}!${t.options.appId}`}
/**
       * @license
       * Copyright 2021 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */class p2{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new g2(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}triggerHeartbeat(){var e=this;return H(function*(){const r=e.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=mw();if(null===e._heartbeatsCache&&(e._heartbeatsCache=yield e._heartbeatsCachePromise),e._heartbeatsCache.lastSentHeartbeatDate!==i&&!e._heartbeatsCache.heartbeats.some(s=>s.date===i))return e._heartbeatsCache.heartbeats.push({date:i,agent:r}),e._heartbeatsCache.heartbeats=e._heartbeatsCache.heartbeats.filter(s=>{const o=new Date(s.date).valueOf();return Date.now()-o<=2592e6}),e._storage.overwrite(e._heartbeatsCache)})()}getHeartbeatsHeader(){var e=this;return H(function*(){if(null===e._heartbeatsCache&&(yield e._heartbeatsCachePromise),null===e._heartbeatsCache||0===e._heartbeatsCache.heartbeats.length)return"";const n=mw(),{heartbeatsToSend:r,unsentEntries:i}=function m2(t,e=1024){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),gw(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),gw(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}(e._heartbeatsCache.heartbeats),s=_d(JSON.stringify({version:2,heartbeats:r}));return e._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(e._heartbeatsCache.heartbeats=i,yield e._storage.overwrite(e._heartbeatsCache)):(e._heartbeatsCache.heartbeats=[],e._storage.overwrite(e._heartbeatsCache)),s})()}}function mw(){return(new Date).toISOString().substring(0,10)}class g2{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}runIndexedDBEnvironmentCheck(){return H(function*(){return!!YE()&&QE().then(()=>!0).catch(()=>!1)})()}read(){var e=this;return H(function*(){return(yield e._canUseIndexedDBPromise)&&(yield function d2(t){return Bm.apply(this,arguments)}(e.app))||{heartbeats:[]}})()}overwrite(e){var n=this;return H(function*(){var r;if(yield n._canUseIndexedDBPromise){const s=yield n.read();return hw(n.app,{lastSentHeartbeatDate:null!==(r=e.lastSentHeartbeatDate)&&void 0!==r?r:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}})()}add(e){var n=this;return H(function*(){var r;if(yield n._canUseIndexedDBPromise){const s=yield n.read();return hw(n.app,{lastSentHeartbeatDate:null!==(r=e.lastSentHeartbeatDate)&&void 0!==r?r:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}})()}}function gw(t){return _d(JSON.stringify({version:2,heartbeats:t})).length}
/**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */!function y2(t){gs(new di("platform-logger",e=>new OV(e),"PRIVATE")),gs(new di("heartbeat",e=>new p2(e),"PRIVATE")),hi(Pm,"0.9.0",t),hi(Pm,"0.9.0","esm2017"),hi("fire-js","")}("");
/**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
hi("firebase","9.15.0","app");const yw="@firebase/installations",Hm="0.6.0",_w=1e4,vw="w:0.6.0",bw="FIS_v2",yr=new bd("installations","Installations",{"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."});
/**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */function Dw(t){return t instanceof fs&&t.code.includes("request-failed")}
/**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */function $m({projectId:t}){return`https://firebaseinstallations.googleapis.com/v1/projects/${t}/installations`}function Cw(t){return{token:t.token,requestStatus:2,expiresIn:M2(t.expiresIn),creationTime:Date.now()}}function Um(t,e){return zm.apply(this,arguments)}function zm(){return zm=H(function*(t,e){const r=(yield e.json()).error;return yr.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}),zm.apply(this,arguments)}function Ew({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function ww(t,{refreshToken:e}){const n=Ew(t);return n.append("Authorization",function I2(t){return`${bw} ${t}`}
/**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */(e)),n}function Gm(t){return Wm.apply(this,arguments)}function Wm(){return Wm=H(function*(t){const e=yield t();return e.status>=500&&e.status<600?t():e}),Wm.apply(this,arguments)}function M2(t){return Number(t.replace("s","000"))}function A2(t,e){return qm.apply(this,arguments)}
/**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */function qm(){return qm=H(function*({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=$m(t),i=Ew(t),s=e.getImmediate({optional:!0});if(s){const c=yield s.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={fid:n,authVersion:bw,appId:t.appId,sdkVersion:vw},a={method:"POST",headers:i,body:JSON.stringify(o)},l=yield Gm(()=>fetch(r,a));if(l.ok){const c=yield l.json();return{fid:c.fid||n,registrationStatus:2,refreshToken:c.refreshToken,authToken:Cw(c.authToken)}}throw yield Um("Create Installation",l)}),qm.apply(this,arguments)}function Mw(t){return new Promise(e=>{setTimeout(e,t)})}
/**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
/**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
const T2=/^[cdef][\w-]{21}$/;function x2(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=function N2(t){return function S2(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}(t).substr(0,22)}
/**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */(t);return T2.test(n)?n:""}catch{return""}}function Jo(t){return`${t.appName}!${t.appId}`}
/**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */const ea=new Map;function Iw(t,e){const n=Jo(t);Aw(n,e),function k2(t,e){const n=Sw();n&&n.postMessage({key:t,fid:e}),Tw()}(n,e)}function Aw(t,e){const n=ea.get(t);if(n)for(const r of n)r(e)}let ys=null;function Sw(){return!ys&&"BroadcastChannel"in self&&(ys=new BroadcastChannel("[Firebase] FID Change"),ys.onmessage=t=>{Aw(t.data.key,t.data.fid)}),ys}function Tw(){0===ea.size&&ys&&(ys.close(),ys=null)}
/**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */const _s="firebase-installations-store";let Ym=null;function Qm(){return Ym||(Ym=lw("firebase-installations-database",1,{upgrade:(t,e)=>{if(0===e)t.createObjectStore(_s)}})),Ym}function Md(t,e){return Zm.apply(this,arguments)}function Zm(){return Zm=H(function*(t,e){const n=Jo(t),i=(yield Qm()).transaction(_s,"readwrite"),s=i.objectStore(_s),o=yield s.get(n);return yield s.put(e,n),yield i.done,(!o||o.fid!==e.fid)&&Iw(t,e.fid),e}),Zm.apply(this,arguments)}function Xm(t){return Jm.apply(this,arguments)}function Jm(){return Jm=H(function*(t){const e=Jo(t),r=(yield Qm()).transaction(_s,"readwrite");yield r.objectStore(_s).delete(e),yield r.done}),Jm.apply(this,arguments)}function ic(t,e){return eg.apply(this,arguments)}
/**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */function eg(){return eg=H(function*(t,e){const n=Jo(t),i=(yield Qm()).transaction(_s,"readwrite"),s=i.objectStore(_s),o=yield s.get(n),a=e(o);return void 0===a?yield s.delete(n):yield s.put(a,n),yield i.done,a&&(!o||o.fid!==a.fid)&&Iw(t,a.fid),a}),eg.apply(this,arguments)}function tg(t){return ng.apply(this,arguments)}function ng(){return ng=H(function*(t){let e;const n=yield ic(t.appConfig,r=>{const i=L2(r),s=V2(t,i);return e=s.registrationPromise,s.installationEntry});return""===n.fid?{installationEntry:yield e}:{installationEntry:n,registrationPromise:e}}),ng.apply(this,arguments)}function L2(t){return Nw(t||{fid:x2(),registrationStatus:0})}function V2(t,e){if(0===e.registrationStatus){if(!navigator.onLine){return{installationEntry:e,registrationPromise:Promise.reject(yr.create("app-offline"))}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=function B2(t,e){return rg.apply(this,arguments)}(t,n);return{installationEntry:n,registrationPromise:r}}return 1===e.registrationStatus?{installationEntry:e,registrationPromise:j2(t)}:{installationEntry:e}}function rg(){return rg=H(function*(t,e){try{const n=yield A2(t,e);return Md(t.appConfig,n)}catch(n){throw Dw(n)&&409===n.customData.serverCode?yield Xm(t.appConfig):yield Md(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}),rg.apply(this,arguments)}function j2(t){return ig.apply(this,arguments)}function ig(){return ig=H(function*(t){let e=yield xw(t.appConfig);for(;1===e.registrationStatus;)yield Mw(100),e=yield xw(t.appConfig);if(0===e.registrationStatus){const{installationEntry:n,registrationPromise:r}=yield tg(t);return r||n}return e}),ig.apply(this,arguments)}function xw(t){return ic(t,e=>{if(!e)throw yr.create("installation-not-found");return Nw(e)})}function Nw(t){return function H2(t){return 1===t.registrationStatus&&t.registrationTime+1e4<Date.now()}
/**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */(t)?{fid:t.fid,registrationStatus:0}:t}function $2(t,e){return sg.apply(this,arguments)}function sg(){return sg=H(function*({appConfig:t,heartbeatServiceProvider:e},n){const r=U2(t,n),i=ww(t,n),s=e.getImmediate({optional:!0});if(s){const c=yield s.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={installation:{sdkVersion:vw,appId:t.appId}},a={method:"POST",headers:i,body:JSON.stringify(o)},l=yield Gm(()=>fetch(r,a));if(l.ok){return Cw(yield l.json())}throw yield Um("Generate Auth Token",l)}),sg.apply(this,arguments)}function U2(t,{fid:e}){return`${$m(t)}/${e}/authTokens:generate`}
/**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */function og(t){return ag.apply(this,arguments)}function ag(){return ag=H(function*(t,e=!1){let n;const r=yield ic(t.appConfig,s=>{if(!Fw(s))throw yr.create("not-registered");const o=s.authToken;if(!e&&W2(o))return s;if(1===o.requestStatus)return n=z2(t,e),s;{if(!navigator.onLine)throw yr.create("app-offline");const a=K2(s);return n=G2(t,a),a}});return n?yield n:r.authToken}),ag.apply(this,arguments)}function z2(t,e){return lg.apply(this,arguments)}function lg(){return lg=H(function*(t,e){let n=yield Ow(t.appConfig);for(;1===n.authToken.requestStatus;)yield Mw(100),n=yield Ow(t.appConfig);const r=n.authToken;return 0===r.requestStatus?og(t,e):r}),lg.apply(this,arguments)}function Ow(t){return ic(t,e=>{if(!Fw(e))throw yr.create("not-registered");return function Y2(t){return 1===t.requestStatus&&t.requestTime+_w<Date.now()}
/**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */(e.authToken)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}function G2(t,e){return cg.apply(this,arguments)}function cg(){return cg=H(function*(t,e){try{const n=yield $2(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return yield Md(t.appConfig,r),n}catch(n){if(!Dw(n)||401!==n.customData.serverCode&&404!==n.customData.serverCode){const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});yield Md(t.appConfig,r)}else yield Xm(t.appConfig);throw n}}),cg.apply(this,arguments)}function Fw(t){return void 0!==t&&2===t.registrationStatus}function W2(t){return 2===t.requestStatus&&!function q2(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+36e5}(t)}function K2(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}
/**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
function ug(){return ug=H(function*(t){const e=t,{installationEntry:n,registrationPromise:r}=yield tg(e);return r?r.catch(console.error):og(e).catch(console.error),n.fid}),ug.apply(this,arguments)}function dg(){return dg=H(function*(t,e=!1){const n=t;return yield X2(n),(yield og(n,e)).token}),dg.apply(this,arguments)}function X2(t){return fg.apply(this,arguments)}
/**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */function fg(){return fg=H(function*(t){const{registrationPromise:e}=yield tg(t);e&&(yield e)}),fg.apply(this,arguments)}function mg(t){return yr.create("missing-app-config-values",{valueName:t})}
/**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */const kw="installations",rB=t=>{const e=t.getProvider("app").getImmediate(),n=
/**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
function tB(t){if(!t||!t.options)throw mg("App Configuration");if(!t.name)throw mg("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw mg(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}(e);return{app:e,appConfig:n,heartbeatServiceProvider:nc(e,"heartbeat"),_delete:()=>Promise.resolve()}},iB=t=>{const n=nc(t.getProvider("app").getImmediate(),kw).getImmediate();return{getId:()=>function Q2(t){return ug.apply(this,arguments)}(n),getToken:i=>function Z2(t){return dg.apply(this,arguments)}(n,i)}};(function sB(){gs(new di(kw,rB,"PUBLIC")),gs(new di("installations-internal",iB,"PRIVATE"))})(),hi(yw,Hm),hi(yw,Hm,"esm2017");
/**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
const Id="analytics",oB="firebase_id",cB="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Rw="https://www.googletagmanager.com/gtag/js",je=new rw("@firebase/analytics");
/**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
/**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
function Pw(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function uB(t,e){const n=document.createElement("script");n.src=`${Rw}?l=${t}&id=${e}`,n.async=!0,document.head.appendChild(n)}function fB(t,e,n,r,i,s){return gg.apply(this,arguments)}function gg(){return gg=H(function*(t,e,n,r,i,s){const o=r[i];try{if(o)yield e[o];else{const l=(yield Pw(n)).find(c=>c.measurementId===i);l&&(yield e[l.appId])}}catch(a){je.error(a)}t("config",i,s)}),gg.apply(this,arguments)}function hB(t,e,n,r,i){return yg.apply(this,arguments)}function yg(){return yg=H(function*(t,e,n,r,i){try{let s=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const a=yield Pw(n);for(const l of o){const c=a.find(d=>d.measurementId===l),u=c&&e[c.appId];if(!u){s=[];break}s.push(u)}}0===s.length&&(s=Object.values(e)),yield Promise.all(s),t("event",r,i||{})}catch(s){je.error(s)}}),yg.apply(this,arguments)}function mB(t,e,n,r,i){let s=function(...o){window[r].push(arguments)};return window[i]&&"function"==typeof window[i]&&(s=window[i]),window[i]=function pB(t,e,n,r){function s(){return(s=H(function*(o,a,l){try{"event"===o?yield hB(t,e,n,a,l):"config"===o?yield fB(t,e,n,r,a,l):"consent"===o?t("consent","update",l):t("set",a)}catch(c){je.error(c)}})).apply(this,arguments)}return function i(o,a,l){return s.apply(this,arguments)}}(s,t,e,n),{gtagCore:s,wrappedGtag:window[i]}}function gB(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(Rw)&&n.src.includes(t))return n;return null}
/**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */const Ct=new bd("analytics","Analytics",{"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.'});
/**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */const Lw=new class bB{constructor(e={},n=1e3){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}};function DB(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}function CB(t){return _g.apply(this,arguments)}function _g(){return _g=H(function*(t){var e;const{appId:n,apiKey:r}=t,i={method:"GET",headers:DB(r)},s=cB.replace("{app-id}",n),o=yield fetch(s,i);if(200!==o.status&&304!==o.status){let a="";try{const l=yield o.json();null!==(e=l.error)&&void 0!==e&&e.message&&(a=l.error.message)}catch{}throw Ct.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}),_g.apply(this,arguments)}function EB(t){return vg.apply(this,arguments)}function vg(){return vg=H(function*(t,e=Lw,n){const{appId:r,apiKey:i,measurementId:s}=t.options;if(!r)throw Ct.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw Ct.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new IB;return setTimeout(H(function*(){a.abort()}),void 0!==n?n:6e4),Vw({appId:r,apiKey:i,measurementId:s},o,a,e)}),vg.apply(this,arguments)}function Vw(t,e,n){return bg.apply(this,arguments)}function bg(){return bg=H(function*(t,{throttleEndTimeMillis:e,backoffCount:n},r,i=Lw){var s;const{appId:o,measurementId:a}=t;try{yield wB(r,e)}catch(l){if(a)return je.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l?.message}]`),{appId:o,measurementId:a};throw l}try{const l=yield CB(t);return i.deleteThrottleMetadata(o),l}catch(l){const c=l;if(!MB(c)){if(i.deleteThrottleMetadata(o),a)return je.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${c?.message}]`),{appId:o,measurementId:a};throw l}const u=503===Number(null===(s=c?.customData)||void 0===s?void 0:s.httpStatus)?ew(n,i.intervalMillis,30):ew(n,i.intervalMillis),d={throttleEndTimeMillis:Date.now()+u,backoffCount:n+1};return i.setThrottleMetadata(o,d),je.debug(`Calling attemptFetch again in ${u} millis`),Vw(t,d,r,i)}}),bg.apply(this,arguments)}function wB(t,e){return new Promise((n,r)=>{const i=Math.max(e-Date.now(),0),s=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(s),r(Ct.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function MB(t){if(!(t instanceof fs&&t.customData))return!1;const e=Number(t.customData.httpStatus);return 429===e||500===e||503===e||504===e}class IB{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}
/**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */let Dg,Ag;function Cg(){return Cg=H(function*(t,e,n,r,i){if(i&&i.global)t("event",n,r);else{const s=yield e;t("event",n,Object.assign(Object.assign({},r),{send_to:s}))}}),Cg.apply(this,arguments)}function Bw(t){Ag=t}function jw(t){Dg=t}
/**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */function OB(){return Sg.apply(this,arguments)}function Sg(){return Sg=H(function*(){if(!YE())return je.warn(Ct.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;try{yield QE()}catch(t){return je.warn(Ct.create("indexeddb-unavailable",{errorInfo:t?.toString()}).message),!1}return!0}),Sg.apply(this,arguments)}
/**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
function Tg(){return Tg=H(function*(t,e,n,r,i,s,o){var a;const l=EB(t);l.then(h=>{n[h.measurementId]=h.appId,t.options.measurementId&&h.measurementId!==t.options.measurementId&&je.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${h.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(h=>je.error(h)),e.push(l);const c=OB().then(h=>{if(h)return r.getId()}),[u,d]=yield Promise.all([l,c]);gB(s)||uB(s,u.measurementId),Ag&&(i("consent","default",Ag),Bw(void 0)),i("js",new Date);const f=null!==(a=o?.config)&&void 0!==a?a:{};return f.origin="firebase",f.update=!0,null!=d&&(f[oB]=d),i("config",u.measurementId,f),Dg&&(i("set",Dg),jw(void 0)),u.measurementId}),Tg.apply(this,arguments)}class kB{constructor(e){this.app=e}_delete(){return delete _r[this.app.options.appId],Promise.resolve()}}let _r={},Hw=[];const $w={};let zw,vr,Ad="dataLayer",Uw="gtag",xg=!1;function RB(){const t=[];if(function ZL(){const t="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof t&&void 0!==t.id}()&&t.push("This is a browser extension environment."),function XL(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=Ct.create("invalid-analytics-context",{errorInfo:e});je.warn(n.message)}}function PB(t,e,n){RB();const r=t.options.appId;if(!r)throw Ct.create("no-app-id");if(!t.options.apiKey){if(!t.options.measurementId)throw Ct.create("no-api-key");je.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`)}if(null!=_r[r])throw Ct.create("already-exists",{id:r});if(!xg){!function dB(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}(Ad);const{wrappedGtag:s,gtagCore:o}=mB(_r,Hw,$w,Ad,Uw);vr=s,zw=o,xg=!0}return _r[r]=function FB(t,e,n,r,i,s,o){return Tg.apply(this,arguments)}(t,Hw,$w,e,zw,Ad,n),new kB(t)}function BB(t,e,n,r){t=tw(t),function AB(t,e,n,r,i){return Cg.apply(this,arguments)}(vr,_r[t.app.options.appId],e,n,r).catch(i=>je.error(i))}const Gw="@firebase/analytics";
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
let Og;!function jB(){gs(new di(Id,(e,{options:n})=>PB(e.getProvider("app").getImmediate(),e.getProvider("installations-internal").getImmediate(),n),"PUBLIC")),gs(new di("analytics-internal",function t(e){try{const n=e.getProvider(Id).getImmediate();return{logEvent:(r,i,s)=>BB(n,r,i,s)}}catch(n){throw Ct.create("interop-component-reg-failed",{reason:n})}},"PRIVATE")),hi(Gw,"0.9.0"),hi(Gw,"0.9.0","esm2017")}();try{Og=typeof Intl<"u"&&Intl.v8BreakIterator}catch{Og=!1}class Et{constructor(e){this._platformId=e,this.isBrowser=this._platformId?function WP(t){return t===yE}(this._platformId):"object"==typeof document&&!!document,this.EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent),this.TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent),this.BLINK=this.isBrowser&&!(!window.chrome&&!Og)&&typeof CSS<"u"&&!this.EDGE&&!this.TRIDENT,this.WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT,this.IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window),this.FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent),this.ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT,this.SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT}}Et.\u0275fac=function(e){return new(e||Et)(b(Xu))},Et.\u0275prov=w({token:Et,factory:Et.\u0275fac,providedIn:"root"});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class sc{}sc.\u0275fac=function(e){return new(e||sc)},sc.\u0275mod=J({type:sc}),sc.\u0275inj=q({});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
let oc,Fg;function Sd(t){return function HB(){if(null==oc&&typeof window<"u")try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:()=>oc=!0}))}finally{oc=oc||!1}return oc}()?t:!!t.capture}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function UB(t){if(function $B(){if(null==Fg){const t=typeof document<"u"?document.head:null;Fg=!(!t||!t.createShadowRoot&&!t.attachShadow)}return Fg}()){const e=t.getRootNode?t.getRootNode():null;if(typeof ShadowRoot<"u"&&ShadowRoot&&e instanceof ShadowRoot)return e}return null}function ac(t){return t.composedPath?t.composedPath()[0]:t.target}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class WB extends Kt{constructor(e){super(),this._value=e}get value(){return this.getValue()}_subscribe(e){const n=super._subscribe(e);return!n.closed&&e.next(this._value),n}getValue(){const{hasError:e,thrownError:n,_value:r}=this;if(e)throw n;return this._throwIfClosed(),r}next(e){super.next(this._value=e)}}function bs(...t){return eo(t,Qa(t))}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function Kw(t,...e){return e.length?e.some(n=>t[n]):t.altKey||t.shiftKey||t.ctrlKey||t.metaKey}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function kg(t){return t<=0?()=>Ef:rt((e,n)=>{let r=0;e.subscribe(ut(n,i=>{++r<=t&&(n.next(i),t<=r&&n.complete())}))})}function Yw(t,e){return rt((n,r)=>{let i=0;n.subscribe(ut(r,s=>t.call(e,s,i++)&&r.next(s)))})}function Qw(t){return Yw((e,n)=>t<=n)}function cj(t,e){return t===e}function Zw(t){return rt((e,n)=>{pn(t).subscribe(ut(n,()=>n.complete(),gf)),!n.closed&&e.subscribe(n)})}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function br(t){return null!=t&&"false"!=`${t}`}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function Ds(t,e=0){return function uj(t){return!isNaN(parseFloat(t))&&!isNaN(Number(t))}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(t)?Number(t):e}function Xw(t){return Array.isArray(t)?t:[t]}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function na(t){return t instanceof Ce?t.nativeElement:t}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class dj extends ct{constructor(e,n){super()}schedule(e,n=0){return this}}const xd={setInterval(t,e,...n){const{delegate:r}=xd;return r?.setInterval?r.setInterval(t,e,...n):setInterval(t,e,...n)},clearInterval(t){const{delegate:e}=xd;return(e?.clearInterval||clearInterval)(t)},delegate:void 0};const Jw={now:()=>(Jw.delegate||Date).now(),delegate:void 0};class lc{constructor(e,n=lc.now){this.schedulerActionCtor=e,this.now=n}schedule(e,n=0,r){return new this.schedulerActionCtor(this,e).schedule(r,n)}}lc.now=Jw.now;const pj=new class hj extends lc{constructor(e,n=lc.now){super(e,n),this.actions=[],this._active=!1}flush(e){const{actions:n}=this;if(this._active)return void n.push(e);let r;this._active=!0;do{if(r=e.execute(e.state,e.delay))break}while(e=n.shift());if(this._active=!1,r){for(;e=n.shift();)e.unsubscribe();throw r}}}(class fj extends dj{constructor(e,n){super(e,n),this.scheduler=e,this.work=n,this.pending=!1}schedule(e,n=0){var r;if(this.closed)return this;this.state=e;const i=this.id,s=this.scheduler;return null!=i&&(this.id=this.recycleAsyncId(s,i,n)),this.pending=!0,this.delay=n,this.id=null!==(r=this.id)&&void 0!==r?r:this.requestAsyncId(s,this.id,n),this}requestAsyncId(e,n,r=0){return xd.setInterval(e.flush.bind(e,this),r)}recycleAsyncId(e,n,r=0){if(null!=r&&this.delay===r&&!1===this.pending)return n;null!=n&&xd.clearInterval(n)}execute(e,n){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;const r=this._execute(e,n);if(r)return r;!1===this.pending&&null!=this.id&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))}_execute(e,n){let i,r=!1;try{this.work(e)}catch(s){r=!0,i=s||new Error("Scheduled action threw falsy error")}if(r)return this.unsubscribe(),i}unsubscribe(){if(!this.closed){const{id:e,scheduler:n}=this,{actions:r}=n;this.work=this.state=this.scheduler=null,this.pending=!1,Xs(r,this),null!=e&&(this.id=this.recycleAsyncId(n,e,null)),this.delay=null,super.unsubscribe()}}});function eM(t,e=pj){return rt((n,r)=>{let i=null,s=null,o=null;const a=()=>{if(i){i.unsubscribe(),i=null;const c=s;s=null,r.next(c)}};function l(){const c=o+t,u=e.now();if(u<c)return i=this.schedule(void 0,c-u),void r.add(i);a()}n.subscribe(ut(r,c=>{s=c,o=e.now(),i||(i=e.schedule(l,t),r.add(i))},()=>{a(),r.complete()},void 0,()=>{s=i=null}))})}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class Cs{create(e){return typeof MutationObserver>"u"?null:new MutationObserver(e)}}Cs.\u0275fac=function(e){return new(e||Cs)},Cs.\u0275prov=w({token:Cs,factory:Cs.\u0275fac,providedIn:"root"});class Es{constructor(e){this._mutationObserverFactory=e,this._observedElements=new Map}ngOnDestroy(){this._observedElements.forEach((e,n)=>this._cleanupObserver(n))}observe(e){const n=na(e);return new ge(r=>{const s=this._observeElement(n).subscribe(r);return()=>{s.unsubscribe(),this._unobserveElement(n)}})}_observeElement(e){if(this._observedElements.has(e))this._observedElements.get(e).count++;else{const n=new Kt,r=this._mutationObserverFactory.create(i=>n.next(i));r&&r.observe(e,{characterData:!0,childList:!0,subtree:!0}),this._observedElements.set(e,{observer:r,stream:n,count:1})}return this._observedElements.get(e).stream}_unobserveElement(e){this._observedElements.has(e)&&(this._observedElements.get(e).count--,this._observedElements.get(e).count||this._cleanupObserver(e))}_cleanupObserver(e){if(this._observedElements.has(e)){const{observer:n,stream:r}=this._observedElements.get(e);n&&n.disconnect(),r.complete(),this._observedElements.delete(e)}}}Es.\u0275fac=function(e){return new(e||Es)(b(Cs))},Es.\u0275prov=w({token:Es,factory:Es.\u0275fac,providedIn:"root"});class ra{constructor(e,n,r){this._contentObserver=e,this._elementRef=n,this._ngZone=r,this.event=new ue,this._disabled=!1,this._currentSubscription=null}get disabled(){return this._disabled}set disabled(e){this._disabled=br(e),this._disabled?this._unsubscribe():this._subscribe()}get debounce(){return this._debounce}set debounce(e){this._debounce=Ds(e),this._subscribe()}ngAfterContentInit(){!this._currentSubscription&&!this.disabled&&this._subscribe()}ngOnDestroy(){this._unsubscribe()}_subscribe(){this._unsubscribe();const e=this._contentObserver.observe(this._elementRef);this._ngZone.runOutsideAngular(()=>{this._currentSubscription=(this.debounce?e.pipe(eM(this.debounce)):e).subscribe(this.event)})}_unsubscribe(){this._currentSubscription?.unsubscribe()}}ra.\u0275fac=function(e){return new(e||ra)(v(Es),v(Ce),v(re))},ra.\u0275dir=T({type:ra,selectors:[["","cdkObserveContent",""]],inputs:{disabled:["cdkObserveContentDisabled","disabled"],debounce:"debounce"},outputs:{event:"cdkObserveContent"},exportAs:["cdkObserveContent"]});class ws{}ws.\u0275fac=function(e){return new(e||ws)},ws.\u0275mod=J({type:ws,declarations:[ra],exports:[ra]}),ws.\u0275inj=q({providers:[Cs]});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const{isArray:mj}=Array,{getPrototypeOf:gj,prototype:yj,keys:_j}=Object;function tM(t){if(1===t.length){const e=t[0];if(mj(e))return{args:e,keys:null};if(function vj(t){return t&&"object"==typeof t&&gj(t)===yj}(e)){const n=_j(e);return{args:n.map(r=>e[r]),keys:n}}}return{args:t,keys:null}}const{isArray:bj}=Array;function nM(t){return it(e=>function Dj(t,e){return bj(e)?t(...e):t(e)}(t,e))}function rM(t,e){return t.reduce((n,r,i)=>(n[r]=e[i],n),{})}function Cj(...t){const e=Qa(t),n=r0(t),{args:r,keys:i}=tM(t);if(0===r.length)return eo([],e);const s=new ge(function Ej(t,e,n=Js){return r=>{iM(e,()=>{const{length:i}=t,s=new Array(i);let o=i,a=i;for(let l=0;l<i;l++)iM(e,()=>{const c=eo(t[l],e);let u=!1;c.subscribe(ut(r,d=>{s[l]=d,u||(u=!0,a--),a||r.next(n(s.slice()))},()=>{--o||r.complete()}))},r)},r)}}(r,e,i?o=>rM(i,o):Js));return n?s.pipe(nM(n)):s}function iM(t,e,n){t?Pn(n,t,e):e()}function Rg(...t){return function wj(){return n0(1)}()(eo(t,Qa(t)))}function Mj(...t){const e=Qa(t);return rt((n,r)=>{(e?Rg(t,n,e):Rg(t,n)).subscribe(r)})}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class cc{}cc.\u0275fac=function(e){return new(e||cc)},cc.\u0275mod=J({type:cc}),cc.\u0275inj=q({});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const sM=new Set;let ia;class sa{constructor(e){this._platform=e,this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):Aj}matchMedia(e){return(this._platform.WEBKIT||this._platform.BLINK)&&function Ij(t){if(!sM.has(t))try{ia||(ia=document.createElement("style"),ia.setAttribute("type","text/css"),document.head.appendChild(ia)),ia.sheet&&(ia.sheet.insertRule(`@media ${t} {body{ }}`,0),sM.add(t))}catch(e){console.error(e)}}(e),this._matchMedia(e)}}function Aj(t){return{matches:"all"===t||""===t,media:t,addListener:()=>{},removeListener:()=>{}}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */sa.\u0275fac=function(e){return new(e||sa)(b(Et))},sa.\u0275prov=w({token:sa,factory:sa.\u0275fac,providedIn:"root"});class oa{constructor(e,n){this._mediaMatcher=e,this._zone=n,this._queries=new Map,this._destroySubject=new Kt}ngOnDestroy(){this._destroySubject.next(),this._destroySubject.complete()}isMatched(e){return oM(Xw(e)).some(r=>this._registerQuery(r).mql.matches)}observe(e){let i=Cj(oM(Xw(e)).map(s=>this._registerQuery(s).observable));return i=Rg(i.pipe(kg(1)),i.pipe(Qw(1),eM(0))),i.pipe(it(s=>{const o={matches:!1,breakpoints:{}};return s.forEach(({matches:a,query:l})=>{o.matches=o.matches||a,o.breakpoints[l]=a}),o}))}_registerQuery(e){if(this._queries.has(e))return this._queries.get(e);const n=this._mediaMatcher.matchMedia(e),i={observable:new ge(s=>{const o=a=>this._zone.run(()=>s.next(a));return n.addListener(o),()=>{n.removeListener(o)}}).pipe(Mj(n),it(({matches:s})=>({query:e,matches:s})),Zw(this._destroySubject)),mql:n};return this._queries.set(e,i),i}}function oM(t){return t.map(e=>e.split(",")).reduce((e,n)=>e.concat(n)).map(e=>e.trim())}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */oa.\u0275fac=function(e){return new(e||oa)(b(sa),b(re))},oa.\u0275prov=w({token:oa,factory:oa.\u0275fac,providedIn:"root"});function Nd(t,e){return(t.getAttribute(e)||"").match(/\S+/g)||[]}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const lM="cdk-describedby-message",Od="cdk-describedby-host";let Pg=0;class uc{constructor(e,n){this._platform=n,this._messageRegistry=new Map,this._messagesContainer=null,this._id=""+Pg++,this._document=e,this._id=Fe(Ki)+"-"+Pg++}describe(e,n,r){if(!this._canBeDescribed(e,n))return;const i=Lg(n,r);"string"!=typeof n?(cM(n,this._id),this._messageRegistry.set(i,{messageElement:n,referenceCount:0})):this._messageRegistry.has(i)||this._createMessageElement(n,r),this._isElementDescribedByMessage(e,i)||this._addMessageReference(e,i)}removeDescription(e,n,r){if(!n||!this._isElementNode(e))return;const i=Lg(n,r);if(this._isElementDescribedByMessage(e,i)&&this._removeMessageReference(e,i),"string"==typeof n){const s=this._messageRegistry.get(i);s&&0===s.referenceCount&&this._deleteMessageElement(i)}0===this._messagesContainer?.childNodes.length&&(this._messagesContainer.remove(),this._messagesContainer=null)}ngOnDestroy(){const e=this._document.querySelectorAll(`[${Od}="${this._id}"]`);for(let n=0;n<e.length;n++)this._removeCdkDescribedByReferenceIds(e[n]),e[n].removeAttribute(Od);this._messagesContainer?.remove(),this._messagesContainer=null,this._messageRegistry.clear()}_createMessageElement(e,n){const r=this._document.createElement("div");cM(r,this._id),r.textContent=e,n&&r.setAttribute("role",n),this._createMessagesContainer(),this._messagesContainer.appendChild(r),this._messageRegistry.set(Lg(e,n),{messageElement:r,referenceCount:0})}_deleteMessageElement(e){this._messageRegistry.get(e)?.messageElement?.remove(),this._messageRegistry.delete(e)}_createMessagesContainer(){if(this._messagesContainer)return;const e="cdk-describedby-message-container",n=this._document.querySelectorAll(`.${e}[platform="server"]`);for(let i=0;i<n.length;i++)n[i].remove();const r=this._document.createElement("div");r.style.visibility="hidden",r.classList.add(e),r.classList.add("cdk-visually-hidden"),this._platform&&!this._platform.isBrowser&&r.setAttribute("platform","server"),this._document.body.appendChild(r),this._messagesContainer=r}_removeCdkDescribedByReferenceIds(e){const n=Nd(e,"aria-describedby").filter(r=>0!=r.indexOf(lM));e.setAttribute("aria-describedby",n.join(" "))}_addMessageReference(e,n){const r=this._messageRegistry.get(n);(function Sj(t,e,n){const r=Nd(t,e);r.some(i=>i.trim()==n.trim())||(r.push(n.trim()),t.setAttribute(e,r.join(" ")))})(e,"aria-describedby",r.messageElement.id),e.setAttribute(Od,this._id),r.referenceCount++}_removeMessageReference(e,n){const r=this._messageRegistry.get(n);r.referenceCount--,function Tj(t,e,n){const i=Nd(t,e).filter(s=>s!=n.trim());i.length?t.setAttribute(e,i.join(" ")):t.removeAttribute(e)}(e,"aria-describedby",r.messageElement.id),e.removeAttribute(Od)}_isElementDescribedByMessage(e,n){const r=Nd(e,"aria-describedby"),i=this._messageRegistry.get(n),s=i&&i.messageElement.id;return!!s&&-1!=r.indexOf(s)}_canBeDescribed(e,n){if(!this._isElementNode(e))return!1;if(n&&"object"==typeof n)return!0;const r=null==n?"":`${n}`.trim(),i=e.getAttribute("aria-label");return!!r&&(!i||i.trim()!==r)}_isElementNode(e){return e.nodeType===this._document.ELEMENT_NODE}}function Lg(t,e){return"string"==typeof t?`${e||""}/${t}`:t}function cM(t,e){t.id||(t.id=`${lM}-${e}-${Pg++}`)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */uc.\u0275fac=function(e){return new(e||uc)(b(V),b(Et))},uc.\u0275prov=w({token:uc,factory:uc.\u0275fac,providedIn:"root"});class Ms{constructor(e){this._platform=e}isDisabled(e){return e.hasAttribute("disabled")}isVisible(e){return function Nj(t){return!!(t.offsetWidth||t.offsetHeight||"function"==typeof t.getClientRects&&t.getClientRects().length)}(e)&&"visible"===getComputedStyle(e).visibility}isTabbable(e){if(!this._platform.isBrowser)return!1;const n=function xj(t){try{return t.frameElement}catch{return null}}(function Bj(t){return t.ownerDocument&&t.ownerDocument.defaultView||window}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(e));if(n&&(-1===dM(n)||!this.isVisible(n)))return!1;let r=e.nodeName.toLowerCase(),i=dM(e);return e.hasAttribute("contenteditable")?-1!==i:!("iframe"===r||"object"===r||this._platform.WEBKIT&&this._platform.IOS&&!function Lj(t){let e=t.nodeName.toLowerCase(),n="input"===e&&t.type;return"text"===n||"password"===n||"select"===e||"textarea"===e}(e))&&("audio"===r?!!e.hasAttribute("controls")&&-1!==i:"video"===r?-1!==i&&(null!==i||(this._platform.FIREFOX||e.hasAttribute("controls"))):e.tabIndex>=0)}isFocusable(e,n){return function Vj(t){return!function Fj(t){return function Rj(t){return"input"==t.nodeName.toLowerCase()}(t)&&"hidden"==t.type}(t)&&(function Oj(t){let e=t.nodeName.toLowerCase();return"input"===e||"select"===e||"button"===e||"textarea"===e}(t)||function kj(t){return function Pj(t){return"a"==t.nodeName.toLowerCase()}(t)&&t.hasAttribute("href")}(t)||t.hasAttribute("contenteditable")||uM(t))}(e)&&!this.isDisabled(e)&&(n?.ignoreVisibility||this.isVisible(e))}}function uM(t){if(!t.hasAttribute("tabindex")||void 0===t.tabIndex)return!1;let e=t.getAttribute("tabindex");return!(!e||isNaN(parseInt(e,10)))}function dM(t){if(!uM(t))return null;const e=parseInt(t.getAttribute("tabindex")||"",10);return isNaN(e)?-1:e}Ms.\u0275fac=function(e){return new(e||Ms)(b(Et))},Ms.\u0275prov=w({token:Ms,factory:Ms.\u0275fac,providedIn:"root"});class fM{constructor(e,n,r,i,s=!1){this._element=e,this._checker=n,this._ngZone=r,this._document=i,this._hasAttached=!1,this.startAnchorListener=()=>this.focusLastTabbableElement(),this.endAnchorListener=()=>this.focusFirstTabbableElement(),this._enabled=!0,s||this.attachAnchors()}get enabled(){return this._enabled}set enabled(e){this._enabled=e,this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(e,this._startAnchor),this._toggleAnchorTabIndex(e,this._endAnchor))}destroy(){const e=this._startAnchor,n=this._endAnchor;e&&(e.removeEventListener("focus",this.startAnchorListener),e.remove()),n&&(n.removeEventListener("focus",this.endAnchorListener),n.remove()),this._startAnchor=this._endAnchor=null,this._hasAttached=!1}attachAnchors(){return!!this._hasAttached||(this._ngZone.runOutsideAngular(()=>{this._startAnchor||(this._startAnchor=this._createAnchor(),this._startAnchor.addEventListener("focus",this.startAnchorListener)),this._endAnchor||(this._endAnchor=this._createAnchor(),this._endAnchor.addEventListener("focus",this.endAnchorListener))}),this._element.parentNode&&(this._element.parentNode.insertBefore(this._startAnchor,this._element),this._element.parentNode.insertBefore(this._endAnchor,this._element.nextSibling),this._hasAttached=!0),this._hasAttached)}focusInitialElementWhenReady(e){return new Promise(n=>{this._executeOnStable(()=>n(this.focusInitialElement(e)))})}focusFirstTabbableElementWhenReady(e){return new Promise(n=>{this._executeOnStable(()=>n(this.focusFirstTabbableElement(e)))})}focusLastTabbableElementWhenReady(e){return new Promise(n=>{this._executeOnStable(()=>n(this.focusLastTabbableElement(e)))})}_getRegionBoundary(e){const n=this._element.querySelectorAll(`[cdk-focus-region-${e}], [cdkFocusRegion${e}], [cdk-focus-${e}]`);return"start"==e?n.length?n[0]:this._getFirstTabbableElement(this._element):n.length?n[n.length-1]:this._getLastTabbableElement(this._element)}focusInitialElement(e){const n=this._element.querySelector("[cdk-focus-initial], [cdkFocusInitial]");if(n){if(!this._checker.isFocusable(n)){const r=this._getFirstTabbableElement(n);return r?.focus(e),!!r}return n.focus(e),!0}return this.focusFirstTabbableElement(e)}focusFirstTabbableElement(e){const n=this._getRegionBoundary("start");return n&&n.focus(e),!!n}focusLastTabbableElement(e){const n=this._getRegionBoundary("end");return n&&n.focus(e),!!n}hasAttached(){return this._hasAttached}_getFirstTabbableElement(e){if(this._checker.isFocusable(e)&&this._checker.isTabbable(e))return e;const n=e.children;for(let r=0;r<n.length;r++){const i=n[r].nodeType===this._document.ELEMENT_NODE?this._getFirstTabbableElement(n[r]):null;if(i)return i}return null}_getLastTabbableElement(e){if(this._checker.isFocusable(e)&&this._checker.isTabbable(e))return e;const n=e.children;for(let r=n.length-1;r>=0;r--){const i=n[r].nodeType===this._document.ELEMENT_NODE?this._getLastTabbableElement(n[r]):null;if(i)return i}return null}_createAnchor(){const e=this._document.createElement("div");return this._toggleAnchorTabIndex(this._enabled,e),e.classList.add("cdk-visually-hidden"),e.classList.add("cdk-focus-trap-anchor"),e.setAttribute("aria-hidden","true"),e}_toggleAnchorTabIndex(e,n){e?n.setAttribute("tabindex","0"):n.removeAttribute("tabindex")}toggleAnchors(e){this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(e,this._startAnchor),this._toggleAnchorTabIndex(e,this._endAnchor))}_executeOnStable(e){this._ngZone.isStable?e():this._ngZone.onStable.pipe(kg(1)).subscribe(e)}}class aa{constructor(e,n,r){this._checker=e,this._ngZone=n,this._document=r}create(e,n=!1){return new fM(e,this._checker,this._ngZone,this._document,n)}}aa.\u0275fac=function(e){return new(e||aa)(b(Ms),b(re),b(V))},aa.\u0275prov=w({token:aa,factory:aa.\u0275fac,providedIn:"root"});class la{constructor(e,n,r){this._elementRef=e,this._focusTrapFactory=n,this._previouslyFocusedElement=null,this.focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement,!0)}get enabled(){return this.focusTrap.enabled}set enabled(e){this.focusTrap.enabled=br(e)}get autoCapture(){return this._autoCapture}set autoCapture(e){this._autoCapture=br(e)}ngOnDestroy(){this.focusTrap.destroy(),this._previouslyFocusedElement&&(this._previouslyFocusedElement.focus(),this._previouslyFocusedElement=null)}ngAfterContentInit(){this.focusTrap.attachAnchors(),this.autoCapture&&this._captureFocus()}ngDoCheck(){this.focusTrap.hasAttached()||this.focusTrap.attachAnchors()}ngOnChanges(e){const n=e.autoCapture;n&&!n.firstChange&&this.autoCapture&&this.focusTrap.hasAttached()&&this._captureFocus()}_captureFocus(){this._previouslyFocusedElement=function zB(){let t=typeof document<"u"&&document?document.activeElement:null;for(;t&&t.shadowRoot;){const e=t.shadowRoot.activeElement;if(e===t)break;t=e}return t}(),this.focusTrap.focusInitialElementWhenReady()}}la.\u0275fac=function(e){return new(e||la)(v(Ce),v(aa),v(V))},la.\u0275dir=T({type:la,selectors:[["","cdkTrapFocus",""]],inputs:{enabled:["cdkTrapFocus","enabled"],autoCapture:["cdkTrapFocusAutoCapture","autoCapture"]},exportAs:["cdkTrapFocus"],features:[Xt]});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class jj extends fM{constructor(e,n,r,i,s,o,a){super(e,n,r,i,a.defer),this._focusTrapManager=s,this._inertStrategy=o,this._focusTrapManager.register(this)}get enabled(){return this._enabled}set enabled(e){this._enabled=e,this._enabled?this._focusTrapManager.register(this):this._focusTrapManager.deregister(this)}destroy(){this._focusTrapManager.deregister(this),super.destroy()}_enable(){this._inertStrategy.preventFocus(this),this.toggleAnchors(!0)}_disable(){this._inertStrategy.allowFocus(this),this.toggleAnchors(!1)}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const Hj=new x("FOCUS_TRAP_INERT_STRATEGY");
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class $j{constructor(){this._listener=null}preventFocus(e){this._listener&&e._document.removeEventListener("focus",this._listener,!0),this._listener=n=>this._trapFocus(e,n),e._ngZone.runOutsideAngular(()=>{e._document.addEventListener("focus",this._listener,!0)})}allowFocus(e){!this._listener||(e._document.removeEventListener("focus",this._listener,!0),this._listener=null)}_trapFocus(e,n){const r=n.target,i=e._element;r&&!i.contains(r)&&!r.closest?.("div.cdk-overlay-pane")&&setTimeout(()=>{e.enabled&&!i.contains(e._document.activeElement)&&e.focusFirstTabbableElement()})}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class ca{constructor(){this._focusTrapStack=[]}register(e){this._focusTrapStack=this._focusTrapStack.filter(r=>r!==e);let n=this._focusTrapStack;n.length&&n[n.length-1]._disable(),n.push(e),e._enable()}deregister(e){e._disable();const n=this._focusTrapStack,r=n.indexOf(e);-1!==r&&(n.splice(r,1),n.length&&n[n.length-1]._enable())}}ca.\u0275fac=function(e){return new(e||ca)},ca.\u0275prov=w({token:ca,factory:ca.\u0275fac,providedIn:"root"});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class dc{constructor(e,n,r,i,s){this._checker=e,this._ngZone=n,this._focusTrapManager=r,this._document=i,this._inertStrategy=s||new $j}create(e,n={defer:!1}){let r;return r="boolean"==typeof n?{defer:n}:n,new jj(e,this._checker,this._ngZone,this._document,this._focusTrapManager,this._inertStrategy,r)}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function hM(t){return 0===t.buttons||0===t.offsetX&&0===t.offsetY}function pM(t){const e=t.touches&&t.touches[0]||t.changedTouches&&t.changedTouches[0];return!(!e||-1!==e.identifier||null!=e.radiusX&&1!==e.radiusX||null!=e.radiusY&&1!==e.radiusY)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */dc.\u0275fac=function(e){return new(e||dc)(b(Ms),b(re),b(ca),b(V),b(Hj,8))},dc.\u0275prov=w({token:dc,factory:dc.\u0275fac,providedIn:"root"});const Uj=new x("cdk-input-modality-detector-options"),zj={ignoreKeys:[18,17,224,91,16]},ua=Sd({passive:!0,capture:!0});class da{constructor(e,n,r,i){this._platform=e,this._mostRecentTarget=null,this._modality=new WB(null),this._lastTouchMs=0,this._onKeydown=s=>{this._options?.ignoreKeys?.some(o=>o===s.keyCode)||(this._modality.next("keyboard"),this._mostRecentTarget=ac(s))},this._onMousedown=s=>{Date.now()-this._lastTouchMs<650||(this._modality.next(hM(s)?"keyboard":"mouse"),this._mostRecentTarget=ac(s))},this._onTouchstart=s=>{pM(s)?this._modality.next("keyboard"):(this._lastTouchMs=Date.now(),this._modality.next("touch"),this._mostRecentTarget=ac(s))},this._options={...zj,...i},this.modalityDetected=this._modality.pipe(Qw(1)),this.modalityChanged=this.modalityDetected.pipe(function lj(t,e=Js){return t=t??cj,rt((n,r)=>{let i,s=!0;n.subscribe(ut(r,o=>{const a=e(o);(s||!t(i,a))&&(s=!1,i=a,r.next(o))}))})}()),e.isBrowser&&n.runOutsideAngular(()=>{r.addEventListener("keydown",this._onKeydown,ua),r.addEventListener("mousedown",this._onMousedown,ua),r.addEventListener("touchstart",this._onTouchstart,ua)})}get mostRecentModality(){return this._modality.value}ngOnDestroy(){this._modality.complete(),this._platform.isBrowser&&(document.removeEventListener("keydown",this._onKeydown,ua),document.removeEventListener("mousedown",this._onMousedown,ua),document.removeEventListener("touchstart",this._onTouchstart,ua))}}da.\u0275fac=function(e){return new(e||da)(b(Et),b(re),b(V),b(Uj,8))},da.\u0275prov=w({token:da,factory:da.\u0275fac,providedIn:"root"});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const Gj=new x("liveAnnouncerElement",{providedIn:"root",factory:function Wj(){return null}});const qj=new x("LIVE_ANNOUNCER_DEFAULT_OPTIONS");
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class fa{constructor(e,n,r,i){this._ngZone=n,this._defaultOptions=i,this._document=r,this._liveElement=e||this._createLiveElement()}announce(e,...n){const r=this._defaultOptions;let i,s;return 1===n.length&&"number"==typeof n[0]?s=n[0]:[i,s]=n,this.clear(),clearTimeout(this._previousTimeout),i||(i=r&&r.politeness?r.politeness:"polite"),null==s&&r&&(s=r.duration),this._liveElement.setAttribute("aria-live",i),this._ngZone.runOutsideAngular(()=>(this._currentPromise||(this._currentPromise=new Promise(o=>this._currentResolve=o)),clearTimeout(this._previousTimeout),this._previousTimeout=setTimeout(()=>{this._liveElement.textContent=e,"number"==typeof s&&(this._previousTimeout=setTimeout(()=>this.clear(),s)),this._currentResolve(),this._currentPromise=this._currentResolve=void 0},100),this._currentPromise))}clear(){this._liveElement&&(this._liveElement.textContent="")}ngOnDestroy(){clearTimeout(this._previousTimeout),this._liveElement?.remove(),this._liveElement=null,this._currentResolve?.(),this._currentPromise=this._currentResolve=void 0}_createLiveElement(){const e="cdk-live-announcer-element",n=this._document.getElementsByClassName(e),r=this._document.createElement("div");for(let i=0;i<n.length;i++)n[i].remove();return r.classList.add(e),r.classList.add("cdk-visually-hidden"),r.setAttribute("aria-atomic","true"),r.setAttribute("aria-live","polite"),this._document.body.appendChild(r),r}}fa.\u0275fac=function(e){return new(e||fa)(b(Gj,8),b(re),b(V),b(qj,8))},fa.\u0275prov=w({token:fa,factory:fa.\u0275fac,providedIn:"root"});class ha{constructor(e,n,r,i){this._elementRef=e,this._liveAnnouncer=n,this._contentObserver=r,this._ngZone=i,this._politeness="polite"}get politeness(){return this._politeness}set politeness(e){this._politeness="off"===e||"assertive"===e?e:"polite","off"===this._politeness?this._subscription&&(this._subscription.unsubscribe(),this._subscription=null):this._subscription||(this._subscription=this._ngZone.runOutsideAngular(()=>this._contentObserver.observe(this._elementRef).subscribe(()=>{const n=this._elementRef.nativeElement.textContent;n!==this._previousAnnouncedText&&(this._liveAnnouncer.announce(n,this._politeness,this.duration),this._previousAnnouncedText=n)})))}ngOnDestroy(){this._subscription&&this._subscription.unsubscribe()}}ha.\u0275fac=function(e){return new(e||ha)(v(Ce),v(fa),v(Es),v(re))},ha.\u0275dir=T({type:ha,selectors:[["","cdkAriaLive",""]],inputs:{politeness:["cdkAriaLive","politeness"],duration:["cdkAriaLiveDuration","duration"]},exportAs:["cdkAriaLive"]});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const Kj=new x("cdk-focus-monitor-default-options"),Fd=Sd({passive:!0,capture:!0});class Is{constructor(e,n,r,i,s){this._ngZone=e,this._platform=n,this._inputModalityDetector=r,this._origin=null,this._windowFocused=!1,this._originFromTouchInteraction=!1,this._elementInfo=new Map,this._monitoredElementCount=0,this._rootNodeFocusListenerCount=new Map,this._windowFocusListener=()=>{this._windowFocused=!0,this._windowFocusTimeoutId=window.setTimeout(()=>this._windowFocused=!1)},this._stopInputModalityDetector=new Kt,this._rootNodeFocusAndBlurListener=o=>{for(let l=ac(o);l;l=l.parentElement)"focus"===o.type?this._onFocus(o,l):this._onBlur(o,l)},this._document=i,this._detectionMode=s?.detectionMode||0}monitor(e,n=!1){const r=na(e);if(!this._platform.isBrowser||1!==r.nodeType)return bs(null);const i=UB(r)||this._getDocument(),s=this._elementInfo.get(r);if(s)return n&&(s.checkChildren=!0),s.subject;const o={checkChildren:n,subject:new Kt,rootNode:i};return this._elementInfo.set(r,o),this._registerGlobalListeners(o),o.subject}stopMonitoring(e){const n=na(e),r=this._elementInfo.get(n);r&&(r.subject.complete(),this._setClasses(n),this._elementInfo.delete(n),this._removeGlobalListeners(r))}focusVia(e,n,r){const i=na(e);i===this._getDocument().activeElement?this._getClosestElementsInfo(i).forEach(([o,a])=>this._originChanged(o,n,a)):(this._setOrigin(n),"function"==typeof i.focus&&i.focus(r))}ngOnDestroy(){this._elementInfo.forEach((e,n)=>this.stopMonitoring(n))}_getDocument(){return this._document||document}_getWindow(){return this._getDocument().defaultView||window}_getFocusOrigin(e){return this._origin?this._originFromTouchInteraction?this._shouldBeAttributedToTouch(e)?"touch":"program":this._origin:this._windowFocused&&this._lastFocusOrigin?this._lastFocusOrigin:e&&this._isLastInteractionFromInputLabel(e)?"mouse":"program"}_shouldBeAttributedToTouch(e){return 1===this._detectionMode||!!e?.contains(this._inputModalityDetector._mostRecentTarget)}_setClasses(e,n){e.classList.toggle("cdk-focused",!!n),e.classList.toggle("cdk-touch-focused","touch"===n),e.classList.toggle("cdk-keyboard-focused","keyboard"===n),e.classList.toggle("cdk-mouse-focused","mouse"===n),e.classList.toggle("cdk-program-focused","program"===n)}_setOrigin(e,n=!1){this._ngZone.runOutsideAngular(()=>{if(this._origin=e,this._originFromTouchInteraction="touch"===e&&n,0===this._detectionMode){clearTimeout(this._originTimeoutId);const r=this._originFromTouchInteraction?650:1;this._originTimeoutId=setTimeout(()=>this._origin=null,r)}})}_onFocus(e,n){const r=this._elementInfo.get(n),i=ac(e);!r||!r.checkChildren&&n!==i||this._originChanged(n,this._getFocusOrigin(i),r)}_onBlur(e,n){const r=this._elementInfo.get(n);!r||r.checkChildren&&e.relatedTarget instanceof Node&&n.contains(e.relatedTarget)||(this._setClasses(n),this._emitOrigin(r,null))}_emitOrigin(e,n){e.subject.observers.length&&this._ngZone.run(()=>e.subject.next(n))}_registerGlobalListeners(e){if(!this._platform.isBrowser)return;const n=e.rootNode,r=this._rootNodeFocusListenerCount.get(n)||0;r||this._ngZone.runOutsideAngular(()=>{n.addEventListener("focus",this._rootNodeFocusAndBlurListener,Fd),n.addEventListener("blur",this._rootNodeFocusAndBlurListener,Fd)}),this._rootNodeFocusListenerCount.set(n,r+1),1==++this._monitoredElementCount&&(this._ngZone.runOutsideAngular(()=>{this._getWindow().addEventListener("focus",this._windowFocusListener)}),this._inputModalityDetector.modalityDetected.pipe(Zw(this._stopInputModalityDetector)).subscribe(i=>{this._setOrigin(i,!0)}))}_removeGlobalListeners(e){const n=e.rootNode;if(this._rootNodeFocusListenerCount.has(n)){const r=this._rootNodeFocusListenerCount.get(n);r>1?this._rootNodeFocusListenerCount.set(n,r-1):(n.removeEventListener("focus",this._rootNodeFocusAndBlurListener,Fd),n.removeEventListener("blur",this._rootNodeFocusAndBlurListener,Fd),this._rootNodeFocusListenerCount.delete(n))}--this._monitoredElementCount||(this._getWindow().removeEventListener("focus",this._windowFocusListener),this._stopInputModalityDetector.next(),clearTimeout(this._windowFocusTimeoutId),clearTimeout(this._originTimeoutId))}_originChanged(e,n,r){this._setClasses(e,n),this._emitOrigin(r,n),this._lastFocusOrigin=n}_getClosestElementsInfo(e){const n=[];return this._elementInfo.forEach((r,i)=>{(i===e||r.checkChildren&&i.contains(e))&&n.push([i,r])}),n}_isLastInteractionFromInputLabel(e){const{_mostRecentTarget:n,mostRecentModality:r}=this._inputModalityDetector;if("mouse"!==r||!n||n===e||"INPUT"!==e.nodeName&&"TEXTAREA"!==e.nodeName||e.disabled)return!1;const i=e.labels;if(i)for(let s=0;s<i.length;s++)if(i[s].contains(n))return!0;return!1}}Is.\u0275fac=function(e){return new(e||Is)(b(re),b(Et),b(da),b(V,8),b(Kj,8))},Is.\u0275prov=w({token:Is,factory:Is.\u0275fac,providedIn:"root"});class pa{constructor(e,n){this._elementRef=e,this._focusMonitor=n,this._focusOrigin=null,this.cdkFocusChange=new ue}get focusOrigin(){return this._focusOrigin}ngAfterViewInit(){const e=this._elementRef.nativeElement;this._monitorSubscription=this._focusMonitor.monitor(e,1===e.nodeType&&e.hasAttribute("cdkMonitorSubtreeFocus")).subscribe(n=>{this._focusOrigin=n,this.cdkFocusChange.emit(n)})}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef),this._monitorSubscription&&this._monitorSubscription.unsubscribe()}}pa.\u0275fac=function(e){return new(e||pa)(v(Ce),v(Is))},pa.\u0275dir=T({type:pa,selectors:[["","cdkMonitorElementFocus",""],["","cdkMonitorSubtreeFocus",""]],outputs:{cdkFocusChange:"cdkFocusChange"},exportAs:["cdkMonitorFocus"]});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const gM="cdk-high-contrast-black-on-white",yM="cdk-high-contrast-white-on-black",Vg="cdk-high-contrast-active";class As{constructor(e,n){this._platform=e,this._document=n,this._breakpointSubscription=Fe(oa).observe("(forced-colors: active)").subscribe(()=>{this._hasCheckedHighContrastMode&&(this._hasCheckedHighContrastMode=!1,this._applyBodyHighContrastModeCssClasses())})}getHighContrastMode(){if(!this._platform.isBrowser)return 0;const e=this._document.createElement("div");e.style.backgroundColor="rgb(1,2,3)",e.style.position="absolute",this._document.body.appendChild(e);const n=this._document.defaultView||window,r=n&&n.getComputedStyle?n.getComputedStyle(e):null,i=(r&&r.backgroundColor||"").replace(/ /g,"");switch(e.remove(),i){case"rgb(0,0,0)":case"rgb(45,50,54)":case"rgb(32,32,32)":return 2;case"rgb(255,255,255)":case"rgb(255,250,239)":return 1}return 0}ngOnDestroy(){this._breakpointSubscription.unsubscribe()}_applyBodyHighContrastModeCssClasses(){if(!this._hasCheckedHighContrastMode&&this._platform.isBrowser&&this._document.body){const e=this._document.body.classList;e.remove(Vg,gM,yM),this._hasCheckedHighContrastMode=!0;const n=this.getHighContrastMode();1===n?e.add(Vg,gM):2===n&&e.add(Vg,yM)}}}As.\u0275fac=function(e){return new(e||As)(b(Et),b(V))},As.\u0275prov=w({token:As,factory:As.\u0275fac,providedIn:"root"});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class fc{constructor(e){e._applyBodyHighContrastModeCssClasses()}}fc.\u0275fac=function(e){return new(e||fc)(b(As))},fc.\u0275mod=J({type:fc,declarations:[ha,la,pa],imports:[ws],exports:[ha,la,pa]}),fc.\u0275inj=q({imports:[ws]});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const Yj=new x("cdk-dir-doc",{providedIn:"root",factory:function Qj(){return Fe(V)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */});const Zj=/^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;function _M(t){const e=t?.toLowerCase()||"";return"auto"===e&&typeof navigator<"u"&&navigator?.language?Zj.test(navigator.language)?"rtl":"ltr":"rtl"===e?"rtl":"ltr"}class Ss{constructor(e){if(this.value="ltr",this.change=new ue,e){const n=e.body?e.body.dir:null,r=e.documentElement?e.documentElement.dir:null;this.value=_M(n||r||"ltr")}}ngOnDestroy(){this.change.complete()}}Ss.\u0275fac=function(e){return new(e||Ss)(b(Yj,8))},Ss.\u0275prov=w({token:Ss,factory:Ss.\u0275fac,providedIn:"root"});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class Ts{constructor(){this._dir="ltr",this._isInitialized=!1,this.change=new ue}get dir(){return this._dir}set dir(e){const n=this._dir;this._dir=_M(e),this._rawDir=e,n!==this._dir&&this._isInitialized&&this.change.emit(this._dir)}get value(){return this.dir}ngAfterContentInit(){this._isInitialized=!0}ngOnDestroy(){this.change.complete()}}Ts.\u0275fac=function(e){return new(e||Ts)},Ts.\u0275dir=T({type:Ts,selectors:[["","dir",""]],hostVars:1,hostBindings:function(e,n){2&e&&at("dir",n._rawDir)},inputs:{dir:"dir"},outputs:{change:"dirChange"},exportAs:["dir"],features:[ce([{provide:Ss,useExisting:Ts}])]});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class Dr{}Dr.\u0275fac=function(e){return new(e||Dr)},Dr.\u0275mod=J({type:Dr,declarations:[Ts],exports:[Ts]}),Dr.\u0275inj=q({});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
new Eo("14.2.7");
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const Xj=["*",[["mat-option"],["ng-container"]]];function eH(t,e){if(1&t&&Qn(0,"mat-pseudo-checkbox",4),2&t){const n=bp();Pt("state",n.selected?"checked":"unchecked")("disabled",n.disabled)}}function tH(t,e){if(1&t&&(Me(0,"span",5),xl(1),Re()),2&t){const n=bp();vt(1),Nl("(",n.group.label,")")}}new Eo("14.2.7");
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class kd{}kd.STANDARD_CURVE="cubic-bezier(0.4,0.0,0.2,1)",kd.DECELERATION_CURVE="cubic-bezier(0.0,0.0,0.2,1)",kd.ACCELERATION_CURVE="cubic-bezier(0.4,0.0,1,1)",kd.SHARP_CURVE="cubic-bezier(0.4,0.0,0.6,1)";class Bg{}Bg.COMPLEX="375ms",Bg.ENTERING="225ms",Bg.EXITING="195ms";const iH=new x("mat-sanity-checks",{providedIn:"root",factory:
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function rH(){return!0}});class ne{constructor(e,n,r){this._sanityChecks=n,this._document=r,this._hasDoneGlobalChecks=!1,e._applyBodyHighContrastModeCssClasses(),this._hasDoneGlobalChecks||(this._hasDoneGlobalChecks=!0)}_checkIsEnabled(e){return!function GB(){return typeof __karma__<"u"&&!!__karma__||typeof jasmine<"u"&&!!jasmine||typeof jest<"u"&&!!jest||typeof Mocha<"u"&&!!Mocha}()&&("boolean"==typeof this._sanityChecks?this._sanityChecks:!!this._sanityChecks[e])}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function DM(t){return class extends t{constructor(...e){super(...e),this._disabled=!1}get disabled(){return this._disabled}set disabled(e){this._disabled=br(e)}}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function CM(t,e){return class extends t{constructor(...n){super(...n),this.defaultColor=e,this.color=e}get color(){return this._color}set color(n){const r=n||this.defaultColor;r!==this._color&&(this._color&&this._elementRef.nativeElement.classList.remove(`mat-${this._color}`),r&&this._elementRef.nativeElement.classList.add(`mat-${r}`),this._color=r)}}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */ne.\u0275fac=function(e){return new(e||ne)(b(As),b(iH,8),b(V))},ne.\u0275mod=J({type:ne,imports:[Dr],exports:[Dr]}),ne.\u0275inj=q({imports:[Dr,Dr]});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const oH=new x("MAT_DATE_LOCALE",{providedIn:"root",factory:function aH(){return Fe(wn)}});class EM{constructor(){this._localeChanges=new Kt,this.localeChanges=this._localeChanges}getValidDateOrNull(e){return this.isDateInstance(e)&&this.isValid(e)?e:null}deserialize(e){return null==e||this.isDateInstance(e)&&this.isValid(e)?e:this.invalid()}setLocale(e){this.locale=e,this._localeChanges.next()}compareDate(e,n){return this.getYear(e)-this.getYear(n)||this.getMonth(e)-this.getMonth(n)||this.getDate(e)-this.getDate(n)}sameDate(e,n){if(e&&n){let r=this.isValid(e),i=this.isValid(n);return r&&i?!this.compareDate(e,n):r==i}return e==n}clampDate(e,n,r){return n&&this.compareDate(e,n)<0?n:r&&this.compareDate(e,r)>0?r:e}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const lH=new x("mat-date-formats"),cH=/^\d{4}-\d{2}-\d{2}(?:T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|(?:(?:\+|-)\d{2}:\d{2}))?)?$/;
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function jg(t,e){const n=Array(t);for(let r=0;r<t;r++)n[r]=e(r);return n}class ma extends EM{constructor(e,n){super(),this.useUtcForDisplay=!1,super.setLocale(e)}getYear(e){return e.getFullYear()}getMonth(e){return e.getMonth()}getDate(e){return e.getDate()}getDayOfWeek(e){return e.getDay()}getMonthNames(e){const n=new Intl.DateTimeFormat(this.locale,{month:e,timeZone:"utc"});return jg(12,r=>this._format(n,new Date(2017,r,1)))}getDateNames(){const e=new Intl.DateTimeFormat(this.locale,{day:"numeric",timeZone:"utc"});return jg(31,n=>this._format(e,new Date(2017,0,n+1)))}getDayOfWeekNames(e){const n=new Intl.DateTimeFormat(this.locale,{weekday:e,timeZone:"utc"});return jg(7,r=>this._format(n,new Date(2017,0,r+1)))}getYearName(e){const n=new Intl.DateTimeFormat(this.locale,{year:"numeric",timeZone:"utc"});return this._format(n,e)}getFirstDayOfWeek(){return 0}getNumDaysInMonth(e){return this.getDate(this._createDateWithOverflow(this.getYear(e),this.getMonth(e)+1,0))}clone(e){return new Date(e.getTime())}createDate(e,n,r){let i=this._createDateWithOverflow(e,n,r);return i.getMonth(),i}today(){return new Date}parse(e,n){return"number"==typeof e?new Date(e):e?new Date(Date.parse(e)):null}format(e,n){if(!this.isValid(e))throw Error("NativeDateAdapter: Cannot format invalid date.");const r=new Intl.DateTimeFormat(this.locale,{...n,timeZone:"utc"});return this._format(r,e)}addCalendarYears(e,n){return this.addCalendarMonths(e,12*n)}addCalendarMonths(e,n){let r=this._createDateWithOverflow(this.getYear(e),this.getMonth(e)+n,this.getDate(e));return this.getMonth(r)!=((this.getMonth(e)+n)%12+12)%12&&(r=this._createDateWithOverflow(this.getYear(r),this.getMonth(r),0)),r}addCalendarDays(e,n){return this._createDateWithOverflow(this.getYear(e),this.getMonth(e),this.getDate(e)+n)}toIso8601(e){return[e.getUTCFullYear(),this._2digit(e.getUTCMonth()+1),this._2digit(e.getUTCDate())].join("-")}deserialize(e){if("string"==typeof e){if(!e)return null;if(cH.test(e)){let n=new Date(e);if(this.isValid(n))return n}}return super.deserialize(e)}isDateInstance(e){return e instanceof Date}isValid(e){return!isNaN(e.getTime())}invalid(){return new Date(NaN)}_createDateWithOverflow(e,n,r){const i=new Date;return i.setFullYear(e,n,r),i.setHours(0,0,0,0),i}_2digit(e){return("00"+e).slice(-2)}_format(e,n){const r=new Date;return r.setUTCFullYear(n.getFullYear(),n.getMonth(),n.getDate()),r.setUTCHours(n.getHours(),n.getMinutes(),n.getSeconds(),n.getMilliseconds()),e.format(r)}}ma.\u0275fac=function(e){return new(e||ma)(b(oH,8),b(Et))},ma.\u0275prov=w({token:ma,factory:ma.\u0275fac});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class xs{}xs.\u0275fac=function(e){return new(e||xs)},xs.\u0275mod=J({type:xs}),xs.\u0275inj=q({providers:[{provide:EM,useClass:ma}]});class hc{}hc.\u0275fac=function(e){return new(e||hc)},hc.\u0275mod=J({type:hc,imports:[xs]}),hc.\u0275inj=q({providers:[{provide:lH,useValue:{parse:{dateInput:null},display:{dateInput:{year:"numeric",month:"numeric",day:"numeric"},monthYearLabel:{year:"numeric",month:"short"},dateA11yLabel:{year:"numeric",month:"long",day:"numeric"},monthYearA11yLabel:{year:"numeric",month:"long"}}}}],imports:[xs]});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class pc{isErrorState(e,n){return!!(e&&e.invalid&&(e.dirty||n&&n.submitted))}}pc.\u0275fac=function(e){return new(e||pc)},pc.\u0275prov=w({token:pc,factory:pc.\u0275fac});class mc{isErrorState(e,n){return!!(e&&e.invalid&&(e.touched||n&&n.submitted))}}mc.\u0275fac=function(e){return new(e||mc)},mc.\u0275prov=w({token:mc,factory:mc.\u0275fac,providedIn:"root"});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class ga{}ga.\u0275fac=function(e){return new(e||ga)},ga.\u0275dir=T({type:ga,selectors:[["","mat-line",""],["","matLine",""]],hostAttrs:[1,"mat-line"]});class yc{}yc.\u0275fac=function(e){return new(e||yc)},yc.\u0275mod=J({type:yc,declarations:[ga],imports:[ne],exports:[ga,ne]}),yc.\u0275inj=q({imports:[ne,ne]});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class dH{constructor(e,n,r,i=!1){this._renderer=e,this.element=n,this.config=r,this._animationForciblyDisabledThroughCss=i,this.state=3}fadeOut(){this._renderer.fadeOutRipple(this)}}const wM={enterDuration:225,exitDuration:150},Hg=Sd({passive:!0}),MM=["mousedown","touchstart"],IM=["mouseup","mouseleave","touchend","touchcancel"];class hH{constructor(e,n,r,i){this._target=e,this._ngZone=n,this._isPointerDown=!1,this._activeRipples=new Map,this._pointerUpEventsRegistered=!1,i.isBrowser&&(this._containerElement=na(r))}fadeInRipple(e,n,r={}){const i=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),s={...wM,...r.animation};r.centered&&(e=i.left+i.width/2,n=i.top+i.height/2);const o=r.radius||function pH(t,e,n){const r=Math.max(Math.abs(t-n.left),Math.abs(t-n.right)),i=Math.max(Math.abs(e-n.top),Math.abs(e-n.bottom));return Math.sqrt(r*r+i*i)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(e,n,i),a=e-i.left,l=n-i.top,c=s.enterDuration,u=document.createElement("div");u.classList.add("mat-ripple-element"),u.style.left=a-o+"px",u.style.top=l-o+"px",u.style.height=2*o+"px",u.style.width=2*o+"px",null!=r.color&&(u.style.backgroundColor=r.color),u.style.transitionDuration=`${c}ms`,this._containerElement.appendChild(u);const d=window.getComputedStyle(u),f=d.transitionProperty,h=d.transitionDuration,p="none"===f||"0s"===h||"0s, 0s"===h,m=new dH(this,u,r,p);u.style.transform="scale3d(1, 1, 1)",m.state=0,r.persistent||(this._mostRecentTransientRipple=m);let g=null;return!p&&(c||s.exitDuration)&&this._ngZone.runOutsideAngular(()=>{const _=()=>this._finishRippleTransition(m),E=()=>this._destroyRipple(m);u.addEventListener("transitionend",_),u.addEventListener("transitioncancel",E),g={onTransitionEnd:_,onTransitionCancel:E}}),this._activeRipples.set(m,g),(p||!c)&&this._finishRippleTransition(m),m}fadeOutRipple(e){if(2===e.state||3===e.state)return;const n=e.element,r={...wM,...e.config.animation};n.style.transitionDuration=`${r.exitDuration}ms`,n.style.opacity="0",e.state=2,(e._animationForciblyDisabledThroughCss||!r.exitDuration)&&this._finishRippleTransition(e)}fadeOutAll(){this._getActiveRipples().forEach(e=>e.fadeOut())}fadeOutAllNonPersistent(){this._getActiveRipples().forEach(e=>{e.config.persistent||e.fadeOut()})}setupTriggerEvents(e){const n=na(e);!n||n===this._triggerElement||(this._removeTriggerEvents(),this._triggerElement=n,this._registerEvents(MM))}handleEvent(e){"mousedown"===e.type?this._onMousedown(e):"touchstart"===e.type?this._onTouchStart(e):this._onPointerUp(),this._pointerUpEventsRegistered||(this._registerEvents(IM),this._pointerUpEventsRegistered=!0)}_finishRippleTransition(e){0===e.state?this._startFadeOutTransition(e):2===e.state&&this._destroyRipple(e)}_startFadeOutTransition(e){const n=e===this._mostRecentTransientRipple,{persistent:r}=e.config;e.state=1,!r&&(!n||!this._isPointerDown)&&e.fadeOut()}_destroyRipple(e){const n=this._activeRipples.get(e)??null;this._activeRipples.delete(e),this._activeRipples.size||(this._containerRect=null),e===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),e.state=3,null!==n&&(e.element.removeEventListener("transitionend",n.onTransitionEnd),e.element.removeEventListener("transitioncancel",n.onTransitionCancel)),e.element.remove()}_onMousedown(e){const n=hM(e),r=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+800;!this._target.rippleDisabled&&!n&&!r&&(this._isPointerDown=!0,this.fadeInRipple(e.clientX,e.clientY,this._target.rippleConfig))}_onTouchStart(e){if(!this._target.rippleDisabled&&!pM(e)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=!0;const n=e.changedTouches;for(let r=0;r<n.length;r++)this.fadeInRipple(n[r].clientX,n[r].clientY,this._target.rippleConfig)}}_onPointerUp(){!this._isPointerDown||(this._isPointerDown=!1,this._getActiveRipples().forEach(e=>{const n=1===e.state||e.config.terminateOnPointerUp&&0===e.state;!e.config.persistent&&n&&e.fadeOut()}))}_registerEvents(e){this._ngZone.runOutsideAngular(()=>{e.forEach(n=>{this._triggerElement.addEventListener(n,this,Hg)})})}_getActiveRipples(){return Array.from(this._activeRipples.keys())}_removeTriggerEvents(){this._triggerElement&&(MM.forEach(e=>{this._triggerElement.removeEventListener(e,this,Hg)}),this._pointerUpEventsRegistered&&IM.forEach(e=>{this._triggerElement.removeEventListener(e,this,Hg)}))}}const mH=new x("mat-ripple-global-options");class Ns{constructor(e,n,r,i,s){this._elementRef=e,this._animationMode=s,this.radius=0,this._disabled=!1,this._isInitialized=!1,this._globalOptions=i||{},this._rippleRenderer=new hH(this,n,e,r)}get disabled(){return this._disabled}set disabled(e){e&&this.fadeOutAllNonPersistent(),this._disabled=e,this._setupTriggerEventsIfEnabled()}get trigger(){return this._trigger||this._elementRef.nativeElement}set trigger(e){this._trigger=e,this._setupTriggerEventsIfEnabled()}ngOnInit(){this._isInitialized=!0,this._setupTriggerEventsIfEnabled()}ngOnDestroy(){this._rippleRenderer._removeTriggerEvents()}fadeOutAll(){this._rippleRenderer.fadeOutAll()}fadeOutAllNonPersistent(){this._rippleRenderer.fadeOutAllNonPersistent()}get rippleConfig(){return{centered:this.centered,radius:this.radius,color:this.color,animation:{...this._globalOptions.animation,..."NoopAnimations"===this._animationMode?{enterDuration:0,exitDuration:0}:{},...this.animation},terminateOnPointerUp:this._globalOptions.terminateOnPointerUp}}get rippleDisabled(){return this.disabled||!!this._globalOptions.disabled}_setupTriggerEventsIfEnabled(){!this.disabled&&this._isInitialized&&this._rippleRenderer.setupTriggerEvents(this.trigger)}launch(e,n=0,r){return"number"==typeof e?this._rippleRenderer.fadeInRipple(e,n,{...this.rippleConfig,...r}):this._rippleRenderer.fadeInRipple(0,0,{...this.rippleConfig,...e})}}Ns.\u0275fac=function(e){return new(e||Ns)(v(Ce),v(re),v(Et),v(mH,8),v(zo,8))},Ns.\u0275dir=T({type:Ns,selectors:[["","mat-ripple",""],["","matRipple",""]],hostAttrs:[1,"mat-ripple"],hostVars:2,hostBindings:function(e,n){2&e&&Lt("mat-ripple-unbounded",n.unbounded)},inputs:{color:["matRippleColor","color"],unbounded:["matRippleUnbounded","unbounded"],centered:["matRippleCentered","centered"],radius:["matRippleRadius","radius"],animation:["matRippleAnimation","animation"],disabled:["matRippleDisabled","disabled"],trigger:["matRippleTrigger","trigger"]},exportAs:["matRipple"]});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class Os{}Os.\u0275fac=function(e){return new(e||Os)},Os.\u0275mod=J({type:Os,declarations:[Ns],imports:[ne],exports:[Ns,ne]}),Os.\u0275inj=q({imports:[ne,ne]});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class Fs{constructor(e){this._animationMode=e,this.state="unchecked",this.disabled=!1}}Fs.\u0275fac=function(e){return new(e||Fs)(v(zo,8))},Fs.\u0275cmp=Nt({type:Fs,selectors:[["mat-pseudo-checkbox"]],hostAttrs:[1,"mat-pseudo-checkbox"],hostVars:8,hostBindings:function(e,n){2&e&&Lt("mat-pseudo-checkbox-indeterminate","indeterminate"===n.state)("mat-pseudo-checkbox-checked","checked"===n.state)("mat-pseudo-checkbox-disabled",n.disabled)("_mat-animation-noopable","NoopAnimations"===n._animationMode)},inputs:{state:"state",disabled:"disabled"},decls:0,vars:0,template:function(e,n){},styles:['.mat-pseudo-checkbox{width:16px;height:16px;border:2px solid;border-radius:2px;cursor:pointer;display:inline-block;vertical-align:middle;box-sizing:border-box;position:relative;flex-shrink:0;transition:border-color 90ms cubic-bezier(0, 0, 0.2, 0.1),background-color 90ms cubic-bezier(0, 0, 0.2, 0.1)}.mat-pseudo-checkbox::after{position:absolute;opacity:0;content:"";border-bottom:2px solid currentColor;transition:opacity 90ms cubic-bezier(0, 0, 0.2, 0.1)}.mat-pseudo-checkbox.mat-pseudo-checkbox-checked,.mat-pseudo-checkbox.mat-pseudo-checkbox-indeterminate{border-color:rgba(0,0,0,0)}.mat-pseudo-checkbox._mat-animation-noopable{transition:none !important;animation:none !important}.mat-pseudo-checkbox._mat-animation-noopable::after{transition:none}.mat-pseudo-checkbox-disabled{cursor:default}.mat-pseudo-checkbox-indeterminate::after{top:5px;left:1px;width:10px;opacity:1;border-radius:2px}.mat-pseudo-checkbox-checked::after{top:2.4px;left:1px;width:8px;height:3px;border-left:2px solid currentColor;transform:rotate(-45deg);opacity:1;box-sizing:content-box}'],encapsulation:2,changeDetection:0});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class ks{}ks.\u0275fac=function(e){return new(e||ks)},ks.\u0275mod=J({type:ks,declarations:[Fs],imports:[ne],exports:[Fs]}),ks.\u0275inj=q({imports:[ne]});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const AM=new x("MAT_OPTION_PARENT_COMPONENT"),gH=DM(class{});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */let yH=0;class _c extends gH{constructor(e){super(),this._labelId="mat-optgroup-label-"+yH++,this._inert=e?.inertGroups??!1}}_c.\u0275fac=function(e){return new(e||_c)(v(AM,8))},_c.\u0275dir=T({type:_c,inputs:{label:"label"},features:[G]});const SM=new x("MatOptgroup");class pi extends _c{}pi.\u0275fac=function(){let t;return function(n){return(t||(t=Oe(pi)))(n||pi)}}(),pi.\u0275cmp=Nt({type:pi,selectors:[["mat-optgroup"]],hostAttrs:[1,"mat-optgroup"],hostVars:5,hostBindings:function(e,n){2&e&&(at("role",n._inert?null:"group")("aria-disabled",n._inert?null:n.disabled.toString())("aria-labelledby",n._inert?null:n._labelId),Lt("mat-optgroup-disabled",n.disabled))},inputs:{disabled:"disabled"},exportAs:["matOptgroup"],features:[ce([{provide:SM,useExisting:pi}]),G],ngContentSelectors:["*","mat-option, ng-container"],decls:4,vars:2,consts:[["aria-hidden","true",1,"mat-optgroup-label",3,"id"]],template:function(e,n){1&e&&(Wi(Xj),Me(0,"span",0),xl(1),Dt(2),Re(),Dt(3,1)),2&e&&(Pt("id",n._labelId),vt(1),Nl("",n.label," "))},styles:[".mat-optgroup-label{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;line-height:48px;height:48px;padding:0 16px;text-align:left;text-decoration:none;max-width:100%;-webkit-user-select:none;user-select:none;cursor:default}.mat-optgroup-label[disabled]{cursor:default}[dir=rtl] .mat-optgroup-label{text-align:right}.mat-optgroup-label .mat-icon{margin-right:16px;vertical-align:middle}.mat-optgroup-label .mat-icon svg{vertical-align:top}[dir=rtl] .mat-optgroup-label .mat-icon{margin-left:16px;margin-right:0}"],encapsulation:2,changeDetection:0});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
let _H=0;class vH{constructor(e,n=!1){this.source=e,this.isUserInput=n}}class Rd{constructor(e,n,r,i){this._element=e,this._changeDetectorRef=n,this._parent=r,this.group=i,this._selected=!1,this._active=!1,this._disabled=!1,this._mostRecentViewValue="",this.id="mat-option-"+_H++,this.onSelectionChange=new ue,this._stateChanges=new Kt}get multiple(){return this._parent&&this._parent.multiple}get selected(){return this._selected}get disabled(){return this.group&&this.group.disabled||this._disabled}set disabled(e){this._disabled=br(e)}get disableRipple(){return!(!this._parent||!this._parent.disableRipple)}get active(){return this._active}get viewValue(){return(this._getHostElement().textContent||"").trim()}select(){this._selected||(this._selected=!0,this._changeDetectorRef.markForCheck(),this._emitSelectionChangeEvent())}deselect(){this._selected&&(this._selected=!1,this._changeDetectorRef.markForCheck(),this._emitSelectionChangeEvent())}focus(e,n){const r=this._getHostElement();"function"==typeof r.focus&&r.focus(n)}setActiveStyles(){this._active||(this._active=!0,this._changeDetectorRef.markForCheck())}setInactiveStyles(){this._active&&(this._active=!1,this._changeDetectorRef.markForCheck())}getLabel(){return this.viewValue}_handleKeydown(e){(13===e.keyCode||32===e.keyCode)&&!Kw(e)&&(this._selectViaInteraction(),e.preventDefault())}_selectViaInteraction(){this.disabled||(this._selected=!this.multiple||!this._selected,this._changeDetectorRef.markForCheck(),this._emitSelectionChangeEvent(!0))}_getAriaSelected(){return this.selected||!this.multiple&&null}_getTabIndex(){return this.disabled?"-1":"0"}_getHostElement(){return this._element.nativeElement}ngAfterViewChecked(){if(this._selected){const e=this.viewValue;e!==this._mostRecentViewValue&&(this._mostRecentViewValue=e,this._stateChanges.next())}}ngOnDestroy(){this._stateChanges.complete()}_emitSelectionChangeEvent(e=!1){this.onSelectionChange.emit(new vH(this,e))}}Rd.\u0275fac=function(e){Av()},Rd.\u0275dir=T({type:Rd,inputs:{value:"value",id:"id",disabled:"disabled"},outputs:{onSelectionChange:"onSelectionChange"}});class ya extends Rd{constructor(e,n,r,i){super(e,n,r,i)}}ya.\u0275fac=function(e){return new(e||ya)(v(Ce),v(Hl),v(AM,8),v(SM,8))},ya.\u0275cmp=Nt({type:ya,selectors:[["mat-option"]],hostAttrs:["role","option",1,"mat-option","mat-focus-indicator"],hostVars:12,hostBindings:function(e,n){1&e&&Pe("click",function(){return n._selectViaInteraction()})("keydown",function(i){return n._handleKeydown(i)}),2&e&&(Uu("id",n.id),at("tabindex",n._getTabIndex())("aria-selected",n._getAriaSelected())("aria-disabled",n.disabled.toString()),Lt("mat-selected",n.selected)("mat-option-multiple",n.multiple)("mat-active",n.active)("mat-option-disabled",n.disabled))},exportAs:["matOption"],features:[G],ngContentSelectors:["*"],decls:5,vars:4,consts:[["class","mat-option-pseudo-checkbox",3,"state","disabled",4,"ngIf"],[1,"mat-option-text"],["class","cdk-visually-hidden",4,"ngIf"],["mat-ripple","",1,"mat-option-ripple",3,"matRippleTrigger","matRippleDisabled"],[1,"mat-option-pseudo-checkbox",3,"state","disabled"],[1,"cdk-visually-hidden"]],template:function(e,n){1&e&&(Wi(),gp(0,eH,1,2,"mat-pseudo-checkbox",0),Me(1,"span",1),Dt(2),Re(),gp(3,tH,2,1,"span",2),Qn(4,"div",3)),2&e&&(Pt("ngIf",n.multiple),vt(3),Pt("ngIf",n.group&&n.group._inert),vt(1),Pt("matRippleTrigger",n._getHostElement())("matRippleDisabled",n.disabled||n.disableRipple))},dependencies:[Ns,oi,Fs],styles:['.mat-option{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;line-height:48px;height:48px;padding:0 16px;text-align:left;text-decoration:none;max-width:100%;position:relative;cursor:pointer;outline:none;display:flex;flex-direction:row;max-width:100%;box-sizing:border-box;align-items:center;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-option[disabled]{cursor:default}[dir=rtl] .mat-option{text-align:right}.mat-option .mat-icon{margin-right:16px;vertical-align:middle}.mat-option .mat-icon svg{vertical-align:top}[dir=rtl] .mat-option .mat-icon{margin-left:16px;margin-right:0}.mat-option[aria-disabled=true]{-webkit-user-select:none;user-select:none;cursor:default}.mat-optgroup .mat-option:not(.mat-option-multiple){padding-left:32px}[dir=rtl] .mat-optgroup .mat-option:not(.mat-option-multiple){padding-left:16px;padding-right:32px}.mat-option.mat-active::before{content:""}.cdk-high-contrast-active .mat-option[aria-disabled=true]{opacity:.5}.cdk-high-contrast-active .mat-option.mat-selected:not(.mat-option-multiple)::after{content:"";position:absolute;top:50%;right:16px;transform:translateY(-50%);width:10px;height:0;border-bottom:solid 10px;border-radius:10px}[dir=rtl] .cdk-high-contrast-active .mat-option.mat-selected:not(.mat-option-multiple)::after{right:auto;left:16px}.mat-option-text{display:inline-block;flex-grow:1;overflow:hidden;text-overflow:ellipsis}.mat-option .mat-option-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}.mat-option-pseudo-checkbox{margin-right:8px}[dir=rtl] .mat-option-pseudo-checkbox{margin-left:8px;margin-right:0}'],encapsulation:2,changeDetection:0});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class vc{}vc.\u0275fac=function(e){return new(e||vc)},vc.\u0275mod=J({type:vc,declarations:[ya,pi],imports:[Os,un,ne,ks],exports:[ya,pi]}),vc.\u0275inj=q({imports:[Os,un,ne,ks]});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const bH=["*",[["mat-card-footer"]]],CH=[[["","mat-card-avatar",""],["","matCardAvatar",""]],[["mat-card-title"],["mat-card-subtitle"],["","mat-card-title",""],["","mat-card-subtitle",""],["","matCardTitle",""],["","matCardSubtitle",""]],"*"],EH=["[mat-card-avatar], [matCardAvatar]","mat-card-title, mat-card-subtitle,\n      [mat-card-title], [mat-card-subtitle],\n      [matCardTitle], [matCardSubtitle]","*"],wH=[[["mat-card-title"],["mat-card-subtitle"],["","mat-card-title",""],["","mat-card-subtitle",""],["","matCardTitle",""],["","matCardSubtitle",""]],[["img"]],"*"],MH=["mat-card-title, mat-card-subtitle,\n      [mat-card-title], [mat-card-subtitle],\n      [matCardTitle], [matCardSubtitle]","img","*"];class _a{}_a.\u0275fac=function(e){return new(e||_a)},_a.\u0275dir=T({type:_a,selectors:[["mat-card-content"],["","mat-card-content",""],["","matCardContent",""]],hostAttrs:[1,"mat-card-content"]});class Rs{}Rs.\u0275fac=function(e){return new(e||Rs)},Rs.\u0275dir=T({type:Rs,selectors:[["mat-card-title"],["","mat-card-title",""],["","matCardTitle",""]],hostAttrs:[1,"mat-card-title"]});class Ps{}Ps.\u0275fac=function(e){return new(e||Ps)},Ps.\u0275dir=T({type:Ps,selectors:[["mat-card-subtitle"],["","mat-card-subtitle",""],["","matCardSubtitle",""]],hostAttrs:[1,"mat-card-subtitle"]});class va{constructor(){this.align="start"}}va.\u0275fac=function(e){return new(e||va)},va.\u0275dir=T({type:va,selectors:[["mat-card-actions"]],hostAttrs:[1,"mat-card-actions"],hostVars:2,hostBindings:function(e,n){2&e&&Lt("mat-card-actions-align-end","end"===n.align)},inputs:{align:"align"},exportAs:["matCardActions"]});class ba{}ba.\u0275fac=function(e){return new(e||ba)},ba.\u0275dir=T({type:ba,selectors:[["mat-card-footer"]],hostAttrs:[1,"mat-card-footer"]});class Da{}Da.\u0275fac=function(e){return new(e||Da)},Da.\u0275dir=T({type:Da,selectors:[["","mat-card-image",""],["","matCardImage",""]],hostAttrs:[1,"mat-card-image"]});class Ca{}Ca.\u0275fac=function(e){return new(e||Ca)},Ca.\u0275dir=T({type:Ca,selectors:[["","mat-card-sm-image",""],["","matCardImageSmall",""]],hostAttrs:[1,"mat-card-sm-image"]});class Ea{}Ea.\u0275fac=function(e){return new(e||Ea)},Ea.\u0275dir=T({type:Ea,selectors:[["","mat-card-md-image",""],["","matCardImageMedium",""]],hostAttrs:[1,"mat-card-md-image"]});class wa{}wa.\u0275fac=function(e){return new(e||wa)},wa.\u0275dir=T({type:wa,selectors:[["","mat-card-lg-image",""],["","matCardImageLarge",""]],hostAttrs:[1,"mat-card-lg-image"]});class Ma{}Ma.\u0275fac=function(e){return new(e||Ma)},Ma.\u0275dir=T({type:Ma,selectors:[["","mat-card-xl-image",""],["","matCardImageXLarge",""]],hostAttrs:[1,"mat-card-xl-image"]});class Ia{}Ia.\u0275fac=function(e){return new(e||Ia)},Ia.\u0275dir=T({type:Ia,selectors:[["","mat-card-avatar",""],["","matCardAvatar",""]],hostAttrs:[1,"mat-card-avatar"]});class mi{constructor(e){this._animationMode=e}}mi.\u0275fac=function(e){return new(e||mi)(v(zo,8))},mi.\u0275cmp=Nt({type:mi,selectors:[["mat-card"]],hostAttrs:[1,"mat-card","mat-focus-indicator"],hostVars:2,hostBindings:function(e,n){2&e&&Lt("_mat-animation-noopable","NoopAnimations"===n._animationMode)},exportAs:["matCard"],ngContentSelectors:["*","mat-card-footer"],decls:2,vars:0,template:function(e,n){1&e&&(Wi(bH),Dt(0),Dt(1,1))},styles:[".mat-card{transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);display:block;position:relative;padding:16px;border-radius:4px}.mat-card._mat-animation-noopable{transition:none !important;animation:none !important}.mat-card>.mat-divider-horizontal{position:absolute;left:0;width:100%}[dir=rtl] .mat-card>.mat-divider-horizontal{left:auto;right:0}.mat-card>.mat-divider-horizontal.mat-divider-inset{position:static;margin:0}[dir=rtl] .mat-card>.mat-divider-horizontal.mat-divider-inset{margin-right:0}.cdk-high-contrast-active .mat-card{outline:solid 1px}.mat-card-actions,.mat-card-subtitle,.mat-card-content{display:block;margin-bottom:16px}.mat-card-title{display:block;margin-bottom:8px}.mat-card-actions{margin-left:-8px;margin-right:-8px;padding:8px 0}.mat-card-actions-align-end{display:flex;justify-content:flex-end}.mat-card-image{width:calc(100% + 32px);margin:0 -16px 16px -16px;display:block;overflow:hidden}.mat-card-image img{width:100%}.mat-card-footer{display:block;margin:0 -16px -16px -16px}.mat-card-actions .mat-button,.mat-card-actions .mat-raised-button,.mat-card-actions .mat-stroked-button{margin:0 8px}.mat-card-header{display:flex;flex-direction:row}.mat-card-header .mat-card-title{margin-bottom:12px}.mat-card-header-text{margin:0 16px}.mat-card-avatar{height:40px;width:40px;border-radius:50%;flex-shrink:0;object-fit:cover}.mat-card-title-group{display:flex;justify-content:space-between}.mat-card-sm-image{width:80px;height:80px}.mat-card-md-image{width:112px;height:112px}.mat-card-lg-image{width:152px;height:152px}.mat-card-xl-image{width:240px;height:240px;margin:-8px}.mat-card-title-group>.mat-card-xl-image{margin:-8px 0 8px}@media(max-width: 599px){.mat-card-title-group{margin:0}.mat-card-xl-image{margin-left:0;margin-right:0}}.mat-card>:first-child,.mat-card-content>:first-child{margin-top:0}.mat-card>:last-child:not(.mat-card-footer),.mat-card-content>:last-child:not(.mat-card-footer){margin-bottom:0}.mat-card-image:first-child{margin-top:-16px;border-top-left-radius:inherit;border-top-right-radius:inherit}.mat-card>.mat-card-actions:last-child{margin-bottom:-8px;padding-bottom:0}.mat-card-actions:not(.mat-card-actions-align-end) .mat-button:first-child,.mat-card-actions:not(.mat-card-actions-align-end) .mat-raised-button:first-child,.mat-card-actions:not(.mat-card-actions-align-end) .mat-stroked-button:first-child{margin-left:0;margin-right:0}.mat-card-actions-align-end .mat-button:last-child,.mat-card-actions-align-end .mat-raised-button:last-child,.mat-card-actions-align-end .mat-stroked-button:last-child{margin-left:0;margin-right:0}.mat-card-title:not(:first-child),.mat-card-subtitle:not(:first-child){margin-top:-4px}.mat-card-header .mat-card-subtitle:not(:first-child){margin-top:-8px}.mat-card>.mat-card-xl-image:first-child{margin-top:-8px}.mat-card>.mat-card-xl-image:last-child{margin-bottom:-8px}"],encapsulation:2,changeDetection:0});class Ls{}Ls.\u0275fac=function(e){return new(e||Ls)},Ls.\u0275cmp=Nt({type:Ls,selectors:[["mat-card-header"]],hostAttrs:[1,"mat-card-header"],ngContentSelectors:EH,decls:4,vars:0,consts:[[1,"mat-card-header-text"]],template:function(e,n){1&e&&(Wi(CH),Dt(0),Me(1,"div",0),Dt(2,1),Re(),Dt(3,2))},encapsulation:2,changeDetection:0});class Aa{}Aa.\u0275fac=function(e){return new(e||Aa)},Aa.\u0275cmp=Nt({type:Aa,selectors:[["mat-card-title-group"]],hostAttrs:[1,"mat-card-title-group"],ngContentSelectors:MH,decls:4,vars:0,template:function(e,n){1&e&&(Wi(wH),Me(0,"div"),Dt(1),Re(),Dt(2,1),Dt(3,2))},encapsulation:2,changeDetection:0});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class Sa{}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function TM(...t){const e=r0(t),{args:n,keys:r}=tM(t),i=new ge(s=>{const{length:o}=n;if(!o)return void s.complete();const a=new Array(o);let l=o,c=o;for(let u=0;u<o;u++){let d=!1;pn(n[u]).subscribe(ut(s,f=>{d||(d=!0,c--),a[u]=f},()=>l--,void 0,()=>{(!l||!d)&&(c||s.next(r?rM(r,a):a),s.complete())}))}});return e?i.pipe(nM(e)):i}
/**
       * @license Angular v14.2.10
       * (c) 2010-2022 Google LLC. https://angular.io/
       * License: MIT
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */Sa.\u0275fac=function(e){return new(e||Sa)},Sa.\u0275mod=J({type:Sa,declarations:[mi,Ls,Aa,_a,Rs,Ps,va,ba,Ca,Ea,wa,Da,Ma,Ia],imports:[ne],exports:[mi,Ls,Aa,_a,Rs,Ps,va,ba,Ca,Ea,wa,Da,Ma,Ia,ne]}),Sa.\u0275inj=q({imports:[ne,ne]});class Ta{constructor(e,n){this._renderer=e,this._elementRef=n,this.onChange=r=>{},this.onTouched=()=>{}}setProperty(e,n){this._renderer.setProperty(this._elementRef.nativeElement,e,n)}registerOnTouched(e){this.onTouched=e}registerOnChange(e){this.onChange=e}setDisabledState(e){this.setProperty("disabled",e)}}Ta.\u0275fac=function(e){return new(e||Ta)(v(zn),v(Ce))},Ta.\u0275dir=T({type:Ta});class Ut extends Ta{}Ut.\u0275fac=function(){let t;return function(n){return(t||(t=Oe(Ut)))(n||Ut)}}(),Ut.\u0275dir=T({type:Ut,features:[G]});const dn=new x("NgValueAccessor"),IH={provide:dn,useExisting:ae(()=>Cr),multi:!0};
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class Cr extends Ut{writeValue(e){this.setProperty("checked",e)}}Cr.\u0275fac=function(){let t;return function(n){return(t||(t=Oe(Cr)))(n||Cr)}}(),Cr.\u0275dir=T({type:Cr,selectors:[["input","type","checkbox","formControlName",""],["input","type","checkbox","formControl",""],["input","type","checkbox","ngModel",""]],hostBindings:function(e,n){1&e&&Pe("change",function(i){return n.onChange(i.target.checked)})("blur",function(){return n.onTouched()})},features:[ce([IH]),G]});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const AH={provide:dn,useExisting:ae(()=>Er),multi:!0};const TH=new x("CompositionEventMode");class Er extends Ta{constructor(e,n,r){super(e,n),this._compositionMode=r,this._composing=!1,null==this._compositionMode&&(this._compositionMode=!function SH(){const t=an()?an().getUserAgent():"";return/android (\d+)/.test(t.toLowerCase())}())}writeValue(e){const n=e??"";this.setProperty("value",n)}_handleInput(e){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(e)}_compositionStart(){this._composing=!0}_compositionEnd(e){this._composing=!1,this._compositionMode&&this.onChange(e)}}Er.\u0275fac=function(e){return new(e||Er)(v(zn),v(Ce),v(TH,8))},Er.\u0275dir=T({type:Er,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(e,n){1&e&&Pe("input",function(i){return n._handleInput(i.target.value)})("blur",function(){return n.onTouched()})("compositionstart",function(){return n._compositionStart()})("compositionend",function(i){return n._compositionEnd(i.target.value)})},features:[ce([AH]),G]});function gi(t){return null==t||("string"==typeof t||Array.isArray(t))&&0===t.length}function xM(t){return null!=t&&"number"==typeof t.length}const We=new x("NgValidators"),yi=new x("NgAsyncValidators"),NH=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;function NM(t){return e=>{if(gi(e.value)||gi(t))return null;const n=parseFloat(e.value);return!isNaN(n)&&n<t?{min:{min:t,actual:e.value}}:null}}function OM(t){return e=>{if(gi(e.value)||gi(t))return null;const n=parseFloat(e.value);return!isNaN(n)&&n>t?{max:{max:t,actual:e.value}}:null}}function FM(t){return gi(t.value)?{required:!0}:null}function kM(t){return!0===t.value?null:{required:!0}}function RM(t){return gi(t.value)||NH.test(t.value)?null:{email:!0}}function PM(t){return e=>gi(e.value)||!xM(e.value)?null:e.value.length<t?{minlength:{requiredLength:t,actualLength:e.value.length}}:null}function LM(t){return e=>xM(e.value)&&e.value.length>t?{maxlength:{requiredLength:t,actualLength:e.value.length}}:null}function VM(t){if(!t)return Pd;let e,n;return"string"==typeof t?(n="","^"!==t.charAt(0)&&(n+="^"),n+=t,"$"!==t.charAt(t.length-1)&&(n+="$"),e=new RegExp(n)):(n=t.toString(),e=t),r=>{if(gi(r.value))return null;const i=r.value;return e.test(i)?null:{pattern:{requiredPattern:n,actualValue:i}}}}function Pd(t){return null}function BM(t){return null!=t}function jM(t){const e=ju(t)?eo(t):t;return e}function HM(t){let e={};return t.forEach(n=>{e=null!=n?{...e,...n}:e}),0===Object.keys(e).length?null:e}function $M(t,e){return e.map(n=>n(t))}function UM(t){return t.map(e=>function OH(t){return!t.validate}(e)?e:n=>e.validate(n))}function zM(t){if(!t)return null;const e=t.filter(BM);return 0==e.length?null:function(n){return HM($M(n,e))}}function $g(t){return null!=t?zM(UM(t)):null}function GM(t){if(!t)return null;const e=t.filter(BM);return 0==e.length?null:function(n){return TM($M(n,e).map(jM)).pipe(it(HM))}}function Ug(t){return null!=t?GM(UM(t)):null}function WM(t,e){return null===t?[e]:Array.isArray(t)?[...t,e]:[t,e]}function qM(t){return t._rawValidators}function KM(t){return t._rawAsyncValidators}function zg(t){return t?Array.isArray(t)?t:[t]:[]}function Ld(t,e){return Array.isArray(t)?t.includes(e):t===e}function YM(t,e){const n=zg(e);return zg(t).forEach(i=>{Ld(n,i)||n.push(i)}),n}function QM(t,e){return zg(e).filter(n=>!Ld(t,n))}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class ZM{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(e){this._rawValidators=e||[],this._composedValidatorFn=$g(this._rawValidators)}_setAsyncValidators(e){this._rawAsyncValidators=e||[],this._composedAsyncValidatorFn=Ug(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(e){this._onDestroyCallbacks.push(e)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(e=>e()),this._onDestroyCallbacks=[]}reset(e){this.control&&this.control.reset(e)}hasError(e,n){return!!this.control&&this.control.hasError(e,n)}getError(e,n){return this.control?this.control.getError(e,n):null}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class nt extends ZM{get formDirective(){return null}get path(){return null}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class _i extends ZM{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class XM{constructor(e){this._cd=e}get isTouched(){return!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return!!this._cd?.submitted}}class Vs extends XM{constructor(e){super(e)}}Vs.\u0275fac=function(e){return new(e||Vs)(v(_i,2))},Vs.\u0275dir=T({type:Vs,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(e,n){2&e&&Lt("ng-untouched",n.isUntouched)("ng-touched",n.isTouched)("ng-pristine",n.isPristine)("ng-dirty",n.isDirty)("ng-valid",n.isValid)("ng-invalid",n.isInvalid)("ng-pending",n.isPending)},features:[G]});class Bs extends XM{constructor(e){super(e)}}Bs.\u0275fac=function(e){return new(e||Bs)(v(nt,10))},Bs.\u0275dir=T({type:Bs,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(e,n){2&e&&Lt("ng-untouched",n.isUntouched)("ng-touched",n.isTouched)("ng-pristine",n.isPristine)("ng-dirty",n.isDirty)("ng-valid",n.isValid)("ng-invalid",n.isInvalid)("ng-pending",n.isPending)("ng-submitted",n.isSubmitted)},features:[G]});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const bc="VALID",Bd="INVALID",xa="PENDING",Dc="DISABLED";function Kg(t){return(jd(t)?t.validators:t)||null}function eI(t){return Array.isArray(t)?$g(t):t||null}function Yg(t,e){return(jd(e)?e.asyncValidators:t)||null}function tI(t){return Array.isArray(t)?Ug(t):t||null}function jd(t){return null!=t&&!Array.isArray(t)&&"object"==typeof t}function nI(t,e,n){const r=t.controls;if(!(e?Object.keys(r):r).length)throw new D(1e3,"");if(!r[n])throw new D(1001,"")}function rI(t,e,n){t._forEachChild((r,i)=>{if(void 0===n[i])throw new D(1002,"")})}class Hd{constructor(e,n){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=!1,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this.pristine=!0,this.touched=!1,this._onDisabledChange=[],this._rawValidators=e,this._rawAsyncValidators=n,this._composedValidatorFn=eI(this._rawValidators),this._composedAsyncValidatorFn=tI(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn}set validator(e){this._rawValidators=this._composedValidatorFn=e}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(e){this._rawAsyncValidators=this._composedAsyncValidatorFn=e}get parent(){return this._parent}get valid(){return this.status===bc}get invalid(){return this.status===Bd}get pending(){return this.status==xa}get disabled(){return this.status===Dc}get enabled(){return this.status!==Dc}get dirty(){return!this.pristine}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(e){this._rawValidators=e,this._composedValidatorFn=eI(e)}setAsyncValidators(e){this._rawAsyncValidators=e,this._composedAsyncValidatorFn=tI(e)}addValidators(e){this.setValidators(YM(e,this._rawValidators))}addAsyncValidators(e){this.setAsyncValidators(YM(e,this._rawAsyncValidators))}removeValidators(e){this.setValidators(QM(e,this._rawValidators))}removeAsyncValidators(e){this.setAsyncValidators(QM(e,this._rawAsyncValidators))}hasValidator(e){return Ld(this._rawValidators,e)}hasAsyncValidator(e){return Ld(this._rawAsyncValidators,e)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(e={}){this.touched=!0,this._parent&&!e.onlySelf&&this._parent.markAsTouched(e)}markAllAsTouched(){this.markAsTouched({onlySelf:!0}),this._forEachChild(e=>e.markAllAsTouched())}markAsUntouched(e={}){this.touched=!1,this._pendingTouched=!1,this._forEachChild(n=>{n.markAsUntouched({onlySelf:!0})}),this._parent&&!e.onlySelf&&this._parent._updateTouched(e)}markAsDirty(e={}){this.pristine=!1,this._parent&&!e.onlySelf&&this._parent.markAsDirty(e)}markAsPristine(e={}){this.pristine=!0,this._pendingDirty=!1,this._forEachChild(n=>{n.markAsPristine({onlySelf:!0})}),this._parent&&!e.onlySelf&&this._parent._updatePristine(e)}markAsPending(e={}){this.status=xa,!1!==e.emitEvent&&this.statusChanges.emit(this.status),this._parent&&!e.onlySelf&&this._parent.markAsPending(e)}disable(e={}){const n=this._parentMarkedDirty(e.onlySelf);this.status=Dc,this.errors=null,this._forEachChild(r=>{r.disable({...e,onlySelf:!0})}),this._updateValue(),!1!==e.emitEvent&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors({...e,skipPristineCheck:n}),this._onDisabledChange.forEach(r=>r(!0))}enable(e={}){const n=this._parentMarkedDirty(e.onlySelf);this.status=bc,this._forEachChild(r=>{r.enable({...e,onlySelf:!0})}),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent}),this._updateAncestors({...e,skipPristineCheck:n}),this._onDisabledChange.forEach(r=>r(!1))}_updateAncestors(e){this._parent&&!e.onlySelf&&(this._parent.updateValueAndValidity(e),e.skipPristineCheck||this._parent._updatePristine(),this._parent._updateTouched())}setParent(e){this._parent=e}getRawValue(){return this.value}updateValueAndValidity(e={}){this._setInitialStatus(),this._updateValue(),this.enabled&&(this._cancelExistingSubscription(),this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===bc||this.status===xa)&&this._runAsyncValidator(e.emitEvent)),!1!==e.emitEvent&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.updateValueAndValidity(e)}_updateTreeValidity(e={emitEvent:!0}){this._forEachChild(n=>n._updateTreeValidity(e)),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?Dc:bc}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(e){if(this.asyncValidator){this.status=xa,this._hasOwnPendingAsyncValidator=!0;const n=jM(this.asyncValidator(this));this._asyncValidationSubscription=n.subscribe(r=>{this._hasOwnPendingAsyncValidator=!1,this.setErrors(r,{emitEvent:e})})}}_cancelExistingSubscription(){this._asyncValidationSubscription&&(this._asyncValidationSubscription.unsubscribe(),this._hasOwnPendingAsyncValidator=!1)}setErrors(e,n={}){this.errors=e,this._updateControlsErrors(!1!==n.emitEvent)}get(e){let n=e;return null==n||(Array.isArray(n)||(n=n.split(".")),0===n.length)?null:n.reduce((r,i)=>r&&r._find(i),this)}getError(e,n){const r=n?this.get(n):this;return r&&r.errors?r.errors[e]:null}hasError(e,n){return!!this.getError(e,n)}get root(){let e=this;for(;e._parent;)e=e._parent;return e}_updateControlsErrors(e){this.status=this._calculateStatus(),e&&this.statusChanges.emit(this.status),this._parent&&this._parent._updateControlsErrors(e)}_initObservables(){this.valueChanges=new ue,this.statusChanges=new ue}_calculateStatus(){return this._allControlsDisabled()?Dc:this.errors?Bd:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(xa)?xa:this._anyControlsHaveStatus(Bd)?Bd:bc}_anyControlsHaveStatus(e){return this._anyControls(n=>n.status===e)}_anyControlsDirty(){return this._anyControls(e=>e.dirty)}_anyControlsTouched(){return this._anyControls(e=>e.touched)}_updatePristine(e={}){this.pristine=!this._anyControlsDirty(),this._parent&&!e.onlySelf&&this._parent._updatePristine(e)}_updateTouched(e={}){this.touched=this._anyControlsTouched(),this._parent&&!e.onlySelf&&this._parent._updateTouched(e)}_registerOnCollectionChange(e){this._onCollectionChange=e}_setUpdateStrategy(e){jd(e)&&null!=e.updateOn&&(this._updateOn=e.updateOn)}_parentMarkedDirty(e){const n=this._parent&&this._parent.dirty;return!e&&!!n&&!this._parent._anyControlsDirty()}_find(e){return null}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class Cc extends Hd{constructor(e,n,r){super(Kg(n),Yg(r,n)),this.controls=e,this._initObservables(),this._setUpdateStrategy(n),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}registerControl(e,n){return this.controls[e]?this.controls[e]:(this.controls[e]=n,n.setParent(this),n._registerOnCollectionChange(this._onCollectionChange),n)}addControl(e,n,r={}){this.registerControl(e,n),this.updateValueAndValidity({emitEvent:r.emitEvent}),this._onCollectionChange()}removeControl(e,n={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}setControl(e,n,r={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],n&&this.registerControl(e,n),this.updateValueAndValidity({emitEvent:r.emitEvent}),this._onCollectionChange()}contains(e){return this.controls.hasOwnProperty(e)&&this.controls[e].enabled}setValue(e,n={}){rI(this,0,e),Object.keys(e).forEach(r=>{nI(this,!0,r),this.controls[r].setValue(e[r],{onlySelf:!0,emitEvent:n.emitEvent})}),this.updateValueAndValidity(n)}patchValue(e,n={}){null!=e&&(Object.keys(e).forEach(r=>{const i=this.controls[r];i&&i.patchValue(e[r],{onlySelf:!0,emitEvent:n.emitEvent})}),this.updateValueAndValidity(n))}reset(e={},n={}){this._forEachChild((r,i)=>{r.reset(e[i],{onlySelf:!0,emitEvent:n.emitEvent})}),this._updatePristine(n),this._updateTouched(n),this.updateValueAndValidity(n)}getRawValue(){return this._reduceChildren({},(e,n,r)=>(e[r]=n.getRawValue(),e))}_syncPendingControls(){let e=this._reduceChildren(!1,(n,r)=>!!r._syncPendingControls()||n);return e&&this.updateValueAndValidity({onlySelf:!0}),e}_forEachChild(e){Object.keys(this.controls).forEach(n=>{const r=this.controls[n];r&&e(r,n)})}_setUpControls(){this._forEachChild(e=>{e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(e){for(const[n,r]of Object.entries(this.controls))if(this.contains(n)&&e(r))return!0;return!1}_reduceValue(){return this._reduceChildren({},(n,r,i)=>((r.enabled||this.disabled)&&(n[i]=r.value),n))}_reduceChildren(e,n){let r=e;return this._forEachChild((i,s)=>{r=n(r,i,s)}),r}_allControlsDisabled(){for(const e of Object.keys(this.controls))if(this.controls[e].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(e){return this.controls.hasOwnProperty(e)?this.controls[e]:null}}class iI extends Cc{}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function $d(t,e){return[...e.path,t]}function Ec(t,e){Qg(t,e),e.valueAccessor.writeValue(t.value),t.disabled&&e.valueAccessor.setDisabledState?.(!0),function jH(t,e){e.valueAccessor.registerOnChange(n=>{t._pendingValue=n,t._pendingChange=!0,t._pendingDirty=!0,"change"===t.updateOn&&sI(t,e)})}(t,e),function $H(t,e){const n=(r,i)=>{e.valueAccessor.writeValue(r),i&&e.viewToModelUpdate(r)};t.registerOnChange(n),e._registerOnDestroy(()=>{t._unregisterOnChange(n)})}(t,e),function HH(t,e){e.valueAccessor.registerOnTouched(()=>{t._pendingTouched=!0,"blur"===t.updateOn&&t._pendingChange&&sI(t,e),"submit"!==t.updateOn&&t.markAsTouched()})}(t,e),function BH(t,e){if(e.valueAccessor.setDisabledState){const n=r=>{e.valueAccessor.setDisabledState(r)};t.registerOnDisabledChange(n),e._registerOnDestroy(()=>{t._unregisterOnDisabledChange(n)})}}(t,e)}function Ud(t,e,n=!0){const r=()=>{};e.valueAccessor&&(e.valueAccessor.registerOnChange(r),e.valueAccessor.registerOnTouched(r)),Gd(t,e),t&&(e._invokeOnDestroyCallbacks(),t._registerOnCollectionChange(()=>{}))}function zd(t,e){t.forEach(n=>{n.registerOnValidatorChange&&n.registerOnValidatorChange(e)})}function Qg(t,e){const n=qM(t);null!==e.validator?t.setValidators(WM(n,e.validator)):"function"==typeof n&&t.setValidators([n]);const r=KM(t);null!==e.asyncValidator?t.setAsyncValidators(WM(r,e.asyncValidator)):"function"==typeof r&&t.setAsyncValidators([r]);const i=()=>t.updateValueAndValidity();zd(e._rawValidators,i),zd(e._rawAsyncValidators,i)}function Gd(t,e){let n=!1;if(null!==t){if(null!==e.validator){const i=qM(t);if(Array.isArray(i)&&i.length>0){const s=i.filter(o=>o!==e.validator);s.length!==i.length&&(n=!0,t.setValidators(s))}}if(null!==e.asyncValidator){const i=KM(t);if(Array.isArray(i)&&i.length>0){const s=i.filter(o=>o!==e.asyncValidator);s.length!==i.length&&(n=!0,t.setAsyncValidators(s))}}}const r=()=>{};return zd(e._rawValidators,r),zd(e._rawAsyncValidators,r),n}function sI(t,e){t._pendingDirty&&t.markAsDirty(),t.setValue(t._pendingValue,{emitModelToViewChange:!1}),e.viewToModelUpdate(t._pendingValue),t._pendingChange=!1}function oI(t,e){Qg(t,e)}function Zg(t,e){if(!t.hasOwnProperty("model"))return!1;const n=t.model;return!!n.isFirstChange()||!Object.is(e,n.currentValue)}function lI(t,e){t._syncPendingControls(),e.forEach(n=>{const r=n.control;"submit"===r.updateOn&&r._pendingChange&&(n.viewToModelUpdate(r._pendingValue),r._pendingChange=!1)})}function Xg(t,e){if(!e)return null;let n,r,i;return Array.isArray(e),e.forEach(s=>{s.constructor===Er?n=s:function GH(t){return Object.getPrototypeOf(t.constructor)===Ut}(s)?r=s:i=s}),i||r||n||null}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const qH={provide:nt,useExisting:ae(()=>wr)},wc=Promise.resolve();class wr extends nt{constructor(e,n){super(),this.submitted=!1,this._directives=new Set,this.ngSubmit=new ue,this.form=new Cc({},$g(e),Ug(n))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(e){wc.then(()=>{const n=this._findContainer(e.path);e.control=n.registerControl(e.name,e.control),Ec(e.control,e),e.control.updateValueAndValidity({emitEvent:!1}),this._directives.add(e)})}getControl(e){return this.form.get(e.path)}removeControl(e){wc.then(()=>{const n=this._findContainer(e.path);n&&n.removeControl(e.name),this._directives.delete(e)})}addFormGroup(e){wc.then(()=>{const n=this._findContainer(e.path),r=new Cc({});oI(r,e),n.registerControl(e.name,r),r.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(e){wc.then(()=>{const n=this._findContainer(e.path);n&&n.removeControl(e.name)})}getFormGroup(e){return this.form.get(e.path)}updateModel(e,n){wc.then(()=>{this.form.get(e.path).setValue(n)})}setValue(e){this.control.setValue(e)}onSubmit(e){return this.submitted=!0,lI(this.form,this._directives),this.ngSubmit.emit(e),"dialog"===e?.target?.method}onReset(){this.resetForm()}resetForm(e){this.form.reset(e),this.submitted=!1}_setUpdateStrategy(){this.options&&null!=this.options.updateOn&&(this.form._updateOn=this.options.updateOn)}_findContainer(e){return e.pop(),e.length?this.form.get(e):this.form}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function cI(t,e){const n=t.indexOf(e);n>-1&&t.splice(n,1)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function uI(t){return"object"==typeof t&&null!==t&&2===Object.keys(t).length&&"value"in t&&"disabled"in t}wr.\u0275fac=function(e){return new(e||wr)(v(We,10),v(yi,10))},wr.\u0275dir=T({type:wr,selectors:[["form",3,"ngNoForm","",3,"formGroup",""],["ng-form"],["","ngForm",""]],hostBindings:function(e,n){1&e&&Pe("submit",function(i){return n.onSubmit(i)})("reset",function(){return n.onReset()})},inputs:{options:["ngFormOptions","options"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],features:[ce([qH]),G]});const Mc=class extends Hd{constructor(e=null,n,r){super(Kg(n),Yg(r,n)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(e),this._setUpdateStrategy(n),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),jd(n)&&(n.nonNullable||n.initialValueIsDefault)&&(uI(e)?this.defaultValue=e.value:this.defaultValue=e)}setValue(e,n={}){this.value=this._pendingValue=e,this._onChange.length&&!1!==n.emitModelToViewChange&&this._onChange.forEach(r=>r(this.value,!1!==n.emitViewToModelChange)),this.updateValueAndValidity(n)}patchValue(e,n={}){this.setValue(e,n)}reset(e=this.defaultValue,n={}){this._applyFormState(e),this.markAsPristine(n),this.markAsUntouched(n),this.setValue(this.value,n),this._pendingChange=!1}_updateValue(){}_anyControls(e){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(e){this._onChange.push(e)}_unregisterOnChange(e){cI(this._onChange,e)}registerOnDisabledChange(e){this._onDisabledChange.push(e)}_unregisterOnDisabledChange(e){cI(this._onDisabledChange,e)}_forEachChild(e){}_syncPendingControls(){return!("submit"!==this.updateOn||(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),!this._pendingChange))&&(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0)}_applyFormState(e){uI(e)?(this.value=this._pendingValue=e.value,e.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=e}};
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class js extends nt{ngOnInit(){this._checkParentType(),this.formDirective.addFormGroup(this)}ngOnDestroy(){this.formDirective&&this.formDirective.removeFormGroup(this)}get control(){return this.formDirective.getFormGroup(this)}get path(){return $d(null==this.name?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_checkParentType(){}}js.\u0275fac=function(){let t;return function(n){return(t||(t=Oe(js)))(n||js)}}(),js.\u0275dir=T({type:js,features:[G]});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const YH={provide:nt,useExisting:ae(()=>Sn)};class Sn extends js{constructor(e,n,r){super(),this._parent=e,this._setValidators(n),this._setAsyncValidators(r)}_checkParentType(){!(this._parent instanceof Sn)&&this._parent}}Sn.\u0275fac=function(e){return new(e||Sn)(v(nt,5),v(We,10),v(yi,10))},Sn.\u0275dir=T({type:Sn,selectors:[["","ngModelGroup",""]],inputs:{name:["ngModelGroup","name"]},exportAs:["ngModelGroup"],features:[ce([YH]),G]});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const QH={provide:_i,useExisting:ae(()=>vi)},dI=Promise.resolve();class vi extends _i{constructor(e,n,r,i,s){super(),this._changeDetectorRef=s,this.control=new Mc,this._registered=!1,this.update=new ue,this._parent=e,this._setValidators(n),this._setAsyncValidators(r),this.valueAccessor=Xg(0,i)}ngOnChanges(e){if(this._checkForErrors(),!this._registered||"name"in e){if(this._registered&&(this._checkName(),this.formDirective)){const n=e.name.previousValue;this.formDirective.removeControl({name:n,path:this._getPath(n)})}this._setUpControl()}"isDisabled"in e&&this._updateDisabled(e),Zg(e,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&null!=this.options.updateOn&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!(!this.options||!this.options.standalone)}_setUpStandalone(){Ec(this.control,this),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._isStandalone()||this._checkParentType(),this._checkName()}_checkParentType(){}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(e){dI.then(()=>{this.control.setValue(e,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(e){const n=e.isDisabled.currentValue,r=0!==n&&tm(n);dI.then(()=>{r&&!this.control.disabled?this.control.disable():!r&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(e){return this._parent?$d(e,this._parent):[e]}}vi.\u0275fac=function(e){return new(e||vi)(v(nt,9),v(We,10),v(yi,10),v(dn,10),v(Hl,8))},vi.\u0275dir=T({type:vi,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:["disabled","isDisabled"],model:["ngModel","model"],options:["ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],features:[ce([QH]),G,Xt]});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class Hs{}Hs.\u0275fac=function(e){return new(e||Hs)},Hs.\u0275dir=T({type:Hs,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""]});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const ZH={provide:dn,useExisting:ae(()=>Mr),multi:!0};class Mr extends Ut{writeValue(e){const n=e??"";this.setProperty("value",n)}registerOnChange(e){this.onChange=n=>{e(""==n?null:parseFloat(n))}}}Mr.\u0275fac=function(){let t;return function(n){return(t||(t=Oe(Mr)))(n||Mr)}}(),Mr.\u0275dir=T({type:Mr,selectors:[["input","type","number","formControlName",""],["input","type","number","formControl",""],["input","type","number","ngModel",""]],hostBindings:function(e,n){1&e&&Pe("input",function(i){return n.onChange(i.target.value)})("blur",function(){return n.onTouched()})},features:[ce([ZH]),G]});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const XH={provide:dn,useExisting:ae(()=>Di),multi:!0};class bi{}bi.\u0275fac=function(e){return new(e||bi)},bi.\u0275mod=J({type:bi}),bi.\u0275inj=q({});class Na{constructor(){this._accessors=[]}add(e,n){this._accessors.push([e,n])}remove(e){for(let n=this._accessors.length-1;n>=0;--n)if(this._accessors[n][1]===e)return void this._accessors.splice(n,1)}select(e){this._accessors.forEach(n=>{this._isSameGroup(n,e)&&n[1]!==e&&n[1].fireUncheck(e.value)})}_isSameGroup(e,n){return!!e[0].control&&(e[0]._parent===n._control._parent&&e[1].name===n.name)}}Na.\u0275fac=function(e){return new(e||Na)},Na.\u0275prov=w({token:Na,factory:Na.\u0275fac,providedIn:bi});class Di extends Ut{constructor(e,n,r,i){super(e,n),this._registry=r,this._injector=i,this.onChange=()=>{}}ngOnInit(){this._control=this._injector.get(_i),this._checkName(),this._registry.add(this._control,this)}ngOnDestroy(){this._registry.remove(this)}writeValue(e){this._state=e===this.value,this.setProperty("checked",this._state)}registerOnChange(e){this._fn=e,this.onChange=()=>{e(this.value),this._registry.select(this)}}fireUncheck(e){this.writeValue(e)}_checkName(){this.name&&this.formControlName&&(this.name,this.formControlName),!this.name&&this.formControlName&&(this.name=this.formControlName)}}Di.\u0275fac=function(e){return new(e||Di)(v(zn),v(Ce),v(Na),v(Ve))},Di.\u0275dir=T({type:Di,selectors:[["input","type","radio","formControlName",""],["input","type","radio","formControl",""],["input","type","radio","ngModel",""]],hostBindings:function(e,n){1&e&&Pe("change",function(){return n.onChange()})("blur",function(){return n.onTouched()})},inputs:{name:"name",formControlName:"formControlName",value:"value"},features:[ce([XH]),G]});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const JH={provide:dn,useExisting:ae(()=>Ir),multi:!0};class Ir extends Ut{writeValue(e){this.setProperty("value",parseFloat(e))}registerOnChange(e){this.onChange=n=>{e(""==n?null:parseFloat(n))}}}Ir.\u0275fac=function(){let t;return function(n){return(t||(t=Oe(Ir)))(n||Ir)}}(),Ir.\u0275dir=T({type:Ir,selectors:[["input","type","range","formControlName",""],["input","type","range","formControl",""],["input","type","range","ngModel",""]],hostBindings:function(e,n){1&e&&Pe("change",function(i){return n.onChange(i.target.value)})("input",function(i){return n.onChange(i.target.value)})("blur",function(){return n.onTouched()})},features:[ce([JH]),G]});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const Jg=new x("NgModelWithFormControlWarning"),e$={provide:_i,useExisting:ae(()=>Ar)};class Ar extends _i{constructor(e,n,r,i){super(),this._ngModelWarningConfig=i,this.update=new ue,this._ngModelWarningSent=!1,this._setValidators(e),this._setAsyncValidators(n),this.valueAccessor=Xg(0,r)}set isDisabled(e){}ngOnChanges(e){if(this._isControlChanged(e)){const n=e.form.previousValue;n&&Ud(n,this,!1),Ec(this.form,this),this.form.updateValueAndValidity({emitEvent:!1})}Zg(e,this.viewModel)&&(this.form.setValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.form&&Ud(this.form,this,!1)}get path(){return[]}get control(){return this.form}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}_isControlChanged(e){return e.hasOwnProperty("form")}}Ar._ngModelWarningSentOnce=!1,Ar.\u0275fac=function(e){return new(e||Ar)(v(We,10),v(yi,10),v(dn,10),v(Jg,8))},Ar.\u0275dir=T({type:Ar,selectors:[["","formControl",""]],inputs:{form:["formControl","form"],isDisabled:["disabled","isDisabled"],model:["ngModel","model"]},outputs:{update:"ngModelChange"},exportAs:["ngForm"],features:[ce([e$]),G,Xt]});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const t$={provide:nt,useExisting:ae(()=>Sr)};class Sr extends nt{constructor(e,n){super(),this.submitted=!1,this._onCollectionChange=()=>this._updateDomValue(),this.directives=[],this.form=null,this.ngSubmit=new ue,this._setValidators(e),this._setAsyncValidators(n)}ngOnChanges(e){this._checkFormPresent(),e.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}ngOnDestroy(){this.form&&(Gd(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get control(){return this.form}get path(){return[]}addControl(e){const n=this.form.get(e.path);return Ec(n,e),n.updateValueAndValidity({emitEvent:!1}),this.directives.push(e),n}getControl(e){return this.form.get(e.path)}removeControl(e){Ud(e.control||null,e,!1),function WH(t,e){const n=t.indexOf(e);n>-1&&t.splice(n,1)}(this.directives,e)}addFormGroup(e){this._setUpFormContainer(e)}removeFormGroup(e){this._cleanUpFormContainer(e)}getFormGroup(e){return this.form.get(e.path)}addFormArray(e){this._setUpFormContainer(e)}removeFormArray(e){this._cleanUpFormContainer(e)}getFormArray(e){return this.form.get(e.path)}updateModel(e,n){this.form.get(e.path).setValue(n)}onSubmit(e){return this.submitted=!0,lI(this.form,this.directives),this.ngSubmit.emit(e),"dialog"===e?.target?.method}onReset(){this.resetForm()}resetForm(e){this.form.reset(e),this.submitted=!1}_updateDomValue(){this.directives.forEach(e=>{const n=e.control,r=this.form.get(e.path);n!==r&&(Ud(n||null,e),(t=>t instanceof Mc)(r)&&(Ec(r,e),e.control=r))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(e){const n=this.form.get(e.path);oI(n,e),n.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(e){if(this.form){const n=this.form.get(e.path);n&&function UH(t,e){return Gd(t,e)}(n,e)&&n.updateValueAndValidity({emitEvent:!1})}}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm&&this._oldForm._registerOnCollectionChange(()=>{})}_updateValidators(){Qg(this.form,this),this._oldForm&&Gd(this._oldForm,this)}_checkFormPresent(){this.form}}Sr.\u0275fac=function(e){return new(e||Sr)(v(We,10),v(yi,10))},Sr.\u0275dir=T({type:Sr,selectors:[["","formGroup",""]],hostBindings:function(e,n){1&e&&Pe("submit",function(i){return n.onSubmit(i)})("reset",function(){return n.onReset()})},inputs:{form:["formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],features:[ce([t$]),G,Xt]});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const n$={provide:nt,useExisting:ae(()=>Tr)};class Tr extends js{constructor(e,n,r){super(),this._parent=e,this._setValidators(n),this._setAsyncValidators(r)}_checkParentType(){fI(this._parent)}}Tr.\u0275fac=function(e){return new(e||Tr)(v(nt,13),v(We,10),v(yi,10))},Tr.\u0275dir=T({type:Tr,selectors:[["","formGroupName",""]],inputs:{name:["formGroupName","name"]},features:[ce([n$]),G]});const r$={provide:nt,useExisting:ae(()=>xr)};class xr extends nt{constructor(e,n,r){super(),this._parent=e,this._setValidators(n),this._setAsyncValidators(r)}ngOnInit(){this._checkParentType(),this.formDirective.addFormArray(this)}ngOnDestroy(){this.formDirective&&this.formDirective.removeFormArray(this)}get control(){return this.formDirective.getFormArray(this)}get formDirective(){return this._parent?this._parent.formDirective:null}get path(){return $d(null==this.name?this.name:this.name.toString(),this._parent)}_checkParentType(){fI(this._parent)}}function fI(t){return!(t instanceof Tr||t instanceof Sr||t instanceof xr)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */xr.\u0275fac=function(e){return new(e||xr)(v(nt,13),v(We,10),v(yi,10))},xr.\u0275dir=T({type:xr,selectors:[["","formArrayName",""]],inputs:{name:["formArrayName","name"]},features:[ce([r$]),G]});const i$={provide:_i,useExisting:ae(()=>Nr)};class Nr extends _i{constructor(e,n,r,i,s){super(),this._ngModelWarningConfig=s,this._added=!1,this.update=new ue,this._ngModelWarningSent=!1,this._parent=e,this._setValidators(n),this._setAsyncValidators(r),this.valueAccessor=Xg(0,i)}set isDisabled(e){}ngOnChanges(e){this._added||this._setUpControl(),Zg(e,this.viewModel)&&(this.viewModel=this.model,this.formDirective.updateModel(this,this.model))}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}get path(){return $d(null==this.name?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_checkParentType(){}_setUpControl(){this._checkParentType(),this.control=this.formDirective.addControl(this),this._added=!0}}Nr._ngModelWarningSentOnce=!1,Nr.\u0275fac=function(e){return new(e||Nr)(v(nt,13),v(We,10),v(yi,10),v(dn,10),v(Jg,8))},Nr.\u0275dir=T({type:Nr,selectors:[["","formControlName",""]],inputs:{name:["formControlName","name"],isDisabled:["disabled","isDisabled"],model:["ngModel","model"]},outputs:{update:"ngModelChange"},features:[ce([i$]),G,Xt]});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const s$={provide:dn,useExisting:ae(()=>Tn),multi:!0};function hI(t,e){return null==t?`${e}`:(e&&"object"==typeof e&&(e="Object"),`${t}: ${e}`.slice(0,50))}class Tn extends Ut{constructor(){super(...arguments),this._optionMap=new Map,this._idCounter=0,this._compareWith=Object.is}set compareWith(e){this._compareWith=e}writeValue(e){this.value=e;const r=hI(this._getOptionId(e),e);this.setProperty("value",r)}registerOnChange(e){this.onChange=n=>{this.value=this._getOptionValue(n),e(this.value)}}_registerOption(){return(this._idCounter++).toString()}_getOptionId(e){for(const n of Array.from(this._optionMap.keys()))if(this._compareWith(this._optionMap.get(n),e))return n;return null}_getOptionValue(e){const n=function o$(t){return t.split(":")[0]}(e);return this._optionMap.has(n)?this._optionMap.get(n):e}}Tn.\u0275fac=function(){let t;return function(n){return(t||(t=Oe(Tn)))(n||Tn)}}(),Tn.\u0275dir=T({type:Tn,selectors:[["select","formControlName","",3,"multiple",""],["select","formControl","",3,"multiple",""],["select","ngModel","",3,"multiple",""]],hostBindings:function(e,n){1&e&&Pe("change",function(i){return n.onChange(i.target.value)})("blur",function(){return n.onTouched()})},inputs:{compareWith:"compareWith"},features:[ce([s$]),G]});class $s{constructor(e,n,r){this._element=e,this._renderer=n,this._select=r,this._select&&(this.id=this._select._registerOption())}set ngValue(e){null!=this._select&&(this._select._optionMap.set(this.id,e),this._setElementValue(hI(this.id,e)),this._select.writeValue(this._select.value))}set value(e){this._setElementValue(e),this._select&&this._select.writeValue(this._select.value)}_setElementValue(e){this._renderer.setProperty(this._element.nativeElement,"value",e)}ngOnDestroy(){this._select&&(this._select._optionMap.delete(this.id),this._select.writeValue(this._select.value))}}$s.\u0275fac=function(e){return new(e||$s)(v(Ce),v(zn),v(Tn,9))},$s.\u0275dir=T({type:$s,selectors:[["option"]],inputs:{ngValue:"ngValue",value:"value"}});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const a$={provide:dn,useExisting:ae(()=>xn),multi:!0};function pI(t,e){return null==t?`${e}`:("string"==typeof e&&(e=`'${e}'`),e&&"object"==typeof e&&(e="Object"),`${t}: ${e}`.slice(0,50))}class xn extends Ut{constructor(){super(...arguments),this._optionMap=new Map,this._idCounter=0,this._compareWith=Object.is}set compareWith(e){this._compareWith=e}writeValue(e){let n;if(this.value=e,Array.isArray(e)){const r=e.map(i=>this._getOptionId(i));n=(i,s)=>{i._setSelected(r.indexOf(s.toString())>-1)}}else n=(r,i)=>{r._setSelected(!1)};this._optionMap.forEach(n)}registerOnChange(e){this.onChange=n=>{const r=[],i=n.selectedOptions;if(void 0!==i){const s=i;for(let o=0;o<s.length;o++){const a=s[o],l=this._getOptionValue(a.value);r.push(l)}}else{const s=n.options;for(let o=0;o<s.length;o++){const a=s[o];if(a.selected){const l=this._getOptionValue(a.value);r.push(l)}}}this.value=r,e(r)}}_registerOption(e){const n=(this._idCounter++).toString();return this._optionMap.set(n,e),n}_getOptionId(e){for(const n of Array.from(this._optionMap.keys()))if(this._compareWith(this._optionMap.get(n)._value,e))return n;return null}_getOptionValue(e){const n=function l$(t){return t.split(":")[0]}(e);return this._optionMap.has(n)?this._optionMap.get(n)._value:e}}xn.\u0275fac=function(){let t;return function(n){return(t||(t=Oe(xn)))(n||xn)}}(),xn.\u0275dir=T({type:xn,selectors:[["select","multiple","","formControlName",""],["select","multiple","","formControl",""],["select","multiple","","ngModel",""]],hostBindings:function(e,n){1&e&&Pe("change",function(i){return n.onChange(i.target)})("blur",function(){return n.onTouched()})},inputs:{compareWith:"compareWith"},features:[ce([a$]),G]});class Us{constructor(e,n,r){this._element=e,this._renderer=n,this._select=r,this._select&&(this.id=this._select._registerOption(this))}set ngValue(e){null!=this._select&&(this._value=e,this._setElementValue(pI(this.id,e)),this._select.writeValue(this._select.value))}set value(e){this._select?(this._value=e,this._setElementValue(pI(this.id,e)),this._select.writeValue(this._select.value)):this._setElementValue(e)}_setElementValue(e){this._renderer.setProperty(this._element.nativeElement,"value",e)}_setSelected(e){this._renderer.setProperty(this._element.nativeElement,"selected",e)}ngOnDestroy(){this._select&&(this._select._optionMap.delete(this.id),this._select.writeValue(this._select.value))}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function mI(t){return"number"==typeof t?t:parseInt(t,10)}function gI(t){return"number"==typeof t?t:parseFloat(t)}Us.\u0275fac=function(e){return new(e||Us)(v(Ce),v(zn),v(xn,9))},Us.\u0275dir=T({type:Us,selectors:[["option"]],inputs:{ngValue:"ngValue",value:"value"}});class fn{constructor(){this._validator=Pd}ngOnChanges(e){if(this.inputName in e){const n=this.normalizeInput(e[this.inputName].currentValue);this._enabled=this.enabled(n),this._validator=this._enabled?this.createValidator(n):Pd,this._onChange&&this._onChange()}}validate(e){return this._validator(e)}registerOnValidatorChange(e){this._onChange=e}enabled(e){return null!=e}}fn.\u0275fac=function(e){return new(e||fn)},fn.\u0275dir=T({type:fn,features:[Xt]});const c$={provide:We,useExisting:ae(()=>Or),multi:!0};class Or extends fn{constructor(){super(...arguments),this.inputName="max",this.normalizeInput=e=>gI(e),this.createValidator=e=>OM(e)}}Or.\u0275fac=function(){let t;return function(n){return(t||(t=Oe(Or)))(n||Or)}}(),Or.\u0275dir=T({type:Or,selectors:[["input","type","number","max","","formControlName",""],["input","type","number","max","","formControl",""],["input","type","number","max","","ngModel",""]],hostVars:1,hostBindings:function(e,n){2&e&&at("max",n._enabled?n.max:null)},inputs:{max:"max"},features:[ce([c$]),G]});const u$={provide:We,useExisting:ae(()=>Fr),multi:!0};class Fr extends fn{constructor(){super(...arguments),this.inputName="min",this.normalizeInput=e=>gI(e),this.createValidator=e=>NM(e)}}Fr.\u0275fac=function(){let t;return function(n){return(t||(t=Oe(Fr)))(n||Fr)}}(),Fr.\u0275dir=T({type:Fr,selectors:[["input","type","number","min","","formControlName",""],["input","type","number","min","","formControl",""],["input","type","number","min","","ngModel",""]],hostVars:1,hostBindings:function(e,n){2&e&&at("min",n._enabled?n.min:null)},inputs:{min:"min"},features:[ce([u$]),G]});const d$={provide:We,useExisting:ae(()=>Nn),multi:!0},f$={provide:We,useExisting:ae(()=>kr),multi:!0};class Nn extends fn{constructor(){super(...arguments),this.inputName="required",this.normalizeInput=tm,this.createValidator=e=>FM}enabled(e){return e}}Nn.\u0275fac=function(){let t;return function(n){return(t||(t=Oe(Nn)))(n||Nn)}}(),Nn.\u0275dir=T({type:Nn,selectors:[["","required","","formControlName","",3,"type","checkbox"],["","required","","formControl","",3,"type","checkbox"],["","required","","ngModel","",3,"type","checkbox"]],hostVars:1,hostBindings:function(e,n){2&e&&at("required",n._enabled?"":null)},inputs:{required:"required"},features:[ce([d$]),G]});class kr extends Nn{constructor(){super(...arguments),this.createValidator=e=>kM}}kr.\u0275fac=function(){let t;return function(n){return(t||(t=Oe(kr)))(n||kr)}}(),kr.\u0275dir=T({type:kr,selectors:[["input","type","checkbox","required","","formControlName",""],["input","type","checkbox","required","","formControl",""],["input","type","checkbox","required","","ngModel",""]],hostVars:1,hostBindings:function(e,n){2&e&&at("required",n._enabled?"":null)},features:[ce([f$]),G]});const h$={provide:We,useExisting:ae(()=>Rr),multi:!0};class Rr extends fn{constructor(){super(...arguments),this.inputName="email",this.normalizeInput=tm,this.createValidator=e=>RM}enabled(e){return e}}Rr.\u0275fac=function(){let t;return function(n){return(t||(t=Oe(Rr)))(n||Rr)}}(),Rr.\u0275dir=T({type:Rr,selectors:[["","email","","formControlName",""],["","email","","formControl",""],["","email","","ngModel",""]],inputs:{email:"email"},features:[ce([h$]),G]});const p$={provide:We,useExisting:ae(()=>Pr),multi:!0};class Pr extends fn{constructor(){super(...arguments),this.inputName="minlength",this.normalizeInput=e=>mI(e),this.createValidator=e=>PM(e)}}Pr.\u0275fac=function(){let t;return function(n){return(t||(t=Oe(Pr)))(n||Pr)}}(),Pr.\u0275dir=T({type:Pr,selectors:[["","minlength","","formControlName",""],["","minlength","","formControl",""],["","minlength","","ngModel",""]],hostVars:1,hostBindings:function(e,n){2&e&&at("minlength",n._enabled?n.minlength:null)},inputs:{minlength:"minlength"},features:[ce([p$]),G]});const m$={provide:We,useExisting:ae(()=>Lr),multi:!0};class Lr extends fn{constructor(){super(...arguments),this.inputName="maxlength",this.normalizeInput=e=>mI(e),this.createValidator=e=>LM(e)}}Lr.\u0275fac=function(){let t;return function(n){return(t||(t=Oe(Lr)))(n||Lr)}}(),Lr.\u0275dir=T({type:Lr,selectors:[["","maxlength","","formControlName",""],["","maxlength","","formControl",""],["","maxlength","","ngModel",""]],hostVars:1,hostBindings:function(e,n){2&e&&at("maxlength",n._enabled?n.maxlength:null)},inputs:{maxlength:"maxlength"},features:[ce([m$]),G]});const g$={provide:We,useExisting:ae(()=>Vr),multi:!0};class Vr extends fn{constructor(){super(...arguments),this.inputName="pattern",this.normalizeInput=e=>e,this.createValidator=e=>VM(e)}}Vr.\u0275fac=function(){let t;return function(n){return(t||(t=Oe(Vr)))(n||Vr)}}(),Vr.\u0275dir=T({type:Vr,selectors:[["","pattern","","formControlName",""],["","pattern","","formControl",""],["","pattern","","ngModel",""]],hostVars:1,hostBindings:function(e,n){2&e&&at("pattern",n._enabled?n.pattern:null)},inputs:{pattern:"pattern"},features:[ce([g$]),G]});class Br{}Br.\u0275fac=function(e){return new(e||Br)},Br.\u0275mod=J({type:Br,declarations:[Hs,$s,Us,Er,Mr,Ir,Cr,Tn,xn,Di,Vs,Bs,Nn,Pr,Lr,Vr,kr,Rr,Fr,Or],imports:[bi],exports:[Hs,$s,Us,Er,Mr,Ir,Cr,Tn,xn,Di,Vs,Bs,Nn,Pr,Lr,Vr,kr,Rr,Fr,Or]}),Br.\u0275inj=q({imports:[bi]});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class Ic{}Ic.\u0275fac=function(e){return new(e||Ic)},Ic.\u0275mod=J({type:Ic,declarations:[vi,Sn,wr],exports:[Br,vi,Sn,wr]}),Ic.\u0275inj=q({imports:[Br]});class On{static withConfig(e){return{ngModule:On,providers:[{provide:Jg,useValue:e.warnOnNgModelWithFormControl}]}}}On.\u0275fac=function(e){return new(e||On)},On.\u0275mod=J({type:On,declarations:[Ar,Sr,Nr,Tr,xr],exports:[Br,Ar,Sr,Nr,Tr,xr]}),On.\u0275inj=q({imports:[Br]});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class yI extends Hd{constructor(e,n,r){super(Kg(n),Yg(r,n)),this.controls=e,this._initObservables(),this._setUpdateStrategy(n),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}at(e){return this.controls[this._adjustIndex(e)]}push(e,n={}){this.controls.push(e),this._registerControl(e),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}insert(e,n,r={}){this.controls.splice(e,0,n),this._registerControl(n),this.updateValueAndValidity({emitEvent:r.emitEvent})}removeAt(e,n={}){let r=this._adjustIndex(e);r<0&&(r=0),this.controls[r]&&this.controls[r]._registerOnCollectionChange(()=>{}),this.controls.splice(r,1),this.updateValueAndValidity({emitEvent:n.emitEvent})}setControl(e,n,r={}){let i=this._adjustIndex(e);i<0&&(i=0),this.controls[i]&&this.controls[i]._registerOnCollectionChange(()=>{}),this.controls.splice(i,1),n&&(this.controls.splice(i,0,n),this._registerControl(n)),this.updateValueAndValidity({emitEvent:r.emitEvent}),this._onCollectionChange()}get length(){return this.controls.length}setValue(e,n={}){rI(this,0,e),e.forEach((r,i)=>{nI(this,!1,i),this.at(i).setValue(r,{onlySelf:!0,emitEvent:n.emitEvent})}),this.updateValueAndValidity(n)}patchValue(e,n={}){null!=e&&(e.forEach((r,i)=>{this.at(i)&&this.at(i).patchValue(r,{onlySelf:!0,emitEvent:n.emitEvent})}),this.updateValueAndValidity(n))}reset(e=[],n={}){this._forEachChild((r,i)=>{r.reset(e[i],{onlySelf:!0,emitEvent:n.emitEvent})}),this._updatePristine(n),this._updateTouched(n),this.updateValueAndValidity(n)}getRawValue(){return this.controls.map(e=>e.getRawValue())}clear(e={}){this.controls.length<1||(this._forEachChild(n=>n._registerOnCollectionChange(()=>{})),this.controls.splice(0),this.updateValueAndValidity({emitEvent:e.emitEvent}))}_adjustIndex(e){return e<0?e+this.length:e}_syncPendingControls(){let e=this.controls.reduce((n,r)=>!!r._syncPendingControls()||n,!1);return e&&this.updateValueAndValidity({onlySelf:!0}),e}_forEachChild(e){this.controls.forEach((n,r)=>{e(n,r)})}_updateValue(){this.value=this.controls.filter(e=>e.enabled||this.disabled).map(e=>e.value)}_anyControls(e){return this.controls.some(n=>n.enabled&&e(n))}_setUpControls(){this._forEachChild(e=>this._registerControl(e))}_allControlsDisabled(){for(const e of this.controls)if(e.enabled)return!1;return this.controls.length>0||this.disabled}_registerControl(e){e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange)}_find(e){return this.at(e)??null}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function _I(t){return!!t&&(void 0!==t.asyncValidators||void 0!==t.validators||void 0!==t.updateOn)}class jr{constructor(){this.useNonNullable=!1}get nonNullable(){const e=new jr;return e.useNonNullable=!0,e}group(e,n=null){const r=this._reduceControls(e);let i={};return _I(n)?i=n:null!==n&&(i.validators=n.validator,i.asyncValidators=n.asyncValidator),new Cc(r,i)}record(e,n=null){const r=this._reduceControls(e);return new iI(r,n)}control(e,n,r){let i={};return this.useNonNullable?(_I(n)?i=n:(i.validators=n,i.asyncValidators=r),new Mc(e,{...i,nonNullable:!0})):new Mc(e,n,r)}array(e,n,r){const i=e.map(s=>this._createControl(s));return new yI(i,n,r)}_reduceControls(e){const n={};return Object.keys(e).forEach(r=>{n[r]=this._createControl(e[r])}),n}_createControl(e){if(e instanceof Mc)return e;if(e instanceof Hd)return e;if(Array.isArray(e)){const n=e[0],r=e.length>1?e[1]:null,i=e.length>2?e[2]:null;return this.control(n,r,i)}return this.control(e)}}jr.\u0275fac=function(e){return new(e||jr)},jr.\u0275prov=w({token:jr,factory:jr.\u0275fac,providedIn:On});class Wd{}Wd.\u0275fac=function(e){return new(e||Wd)},Wd.\u0275prov=w({token:Wd,factory:function(){return Fe(jr).nonNullable},providedIn:On});class Oa extends jr{group(e,n=null){return super.group(e,n)}control(e,n,r){return super.control(e,n,r)}array(e,n,r){return super.array(e,n,r)}}Oa.\u0275fac=function(){let t;return function(n){return(t||(t=Oe(Oa)))(n||Oa)}}(),Oa.\u0275prov=w({token:Oa,factory:Oa.\u0275fac,providedIn:On});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
new Eo("14.2.10");
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const y$=["sliderWrapper"],zt=Sd({passive:!1}),C$={provide:dn,useExisting:ae(()=>Ci),multi:!0};class E${}const w$=
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function sH(t,e=0){return class extends t{constructor(...n){super(...n),this._tabIndex=e,this.defaultTabIndex=e}get tabIndex(){return this.disabled?-1:this._tabIndex}set tabIndex(n){this._tabIndex=null!=n?Ds(n):this.defaultTabIndex}}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(CM(DM(class{constructor(t){this._elementRef=t}}),"accent"));class Ci extends w${constructor(e,n,r,i,s,o,a,l){super(e),this._focusMonitor=n,this._changeDetectorRef=r,this._dir=i,this._ngZone=o,this._animationMode=l,this._invert=!1,this._max=100,this._min=0,this._step=1,this._thumbLabel=!1,this._tickInterval=0,this._value=null,this._vertical=!1,this.change=new ue,this.input=new ue,this.valueChange=new ue,this.onTouched=()=>{},this._percent=0,this._isSliding=null,this._isActive=!1,this._tickIntervalPercent=0,this._sliderDimensions=null,this._controlValueAccessorChangeFn=()=>{},this._dirChangeSubscription=ct.EMPTY,this._pointerDown=c=>{this.disabled||this._isSliding||!Ac(c)&&0!==c.button||this._ngZone.run(()=>{this._touchId=Ac(c)?function M$(t,e){for(let n=0;n<t.touches.length;n++){const r=t.touches[n].target;if(e===r||e.contains(r))return t.touches[n].identifier}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(c,this._elementRef.nativeElement):void 0;const u=bI(c,this._touchId);if(u){const d=this.value;this._isSliding="pointer",this._lastPointerEvent=c,this._focusHostElement(),this._onMouseenter(),this._bindGlobalEvents(c),this._focusHostElement(),this._updateValueFromPosition(u),this._valueOnSlideStart=d,c.cancelable&&c.preventDefault(),d!=this.value&&this._emitInputEvent()}})},this._pointerMove=c=>{if("pointer"===this._isSliding){const u=bI(c,this._touchId);if(u){c.cancelable&&c.preventDefault();const d=this.value;this._lastPointerEvent=c,this._updateValueFromPosition(u),d!=this.value&&this._emitInputEvent()}}},this._pointerUp=c=>{"pointer"===this._isSliding&&(!Ac(c)||"number"!=typeof this._touchId||ey(c.changedTouches,this._touchId))&&(c.cancelable&&c.preventDefault(),this._removeGlobalEvents(),this._isSliding=null,this._touchId=void 0,this._valueOnSlideStart!=this.value&&!this.disabled&&this._emitChangeEvent(),this._valueOnSlideStart=this._lastPointerEvent=null)},this._windowBlur=()=>{this._lastPointerEvent&&this._pointerUp(this._lastPointerEvent)},this._document=a,this.tabIndex=parseInt(s)||0,o.runOutsideAngular(()=>{const c=e.nativeElement;c.addEventListener("mousedown",this._pointerDown,zt),c.addEventListener("touchstart",this._pointerDown,zt)})}get invert(){return this._invert}set invert(e){this._invert=br(e)}get max(){return this._max}set max(e){this._max=Ds(e,this._max),this._percent=this._calculatePercentage(this._value),this._changeDetectorRef.markForCheck()}get min(){return this._min}set min(e){this._min=Ds(e,this._min),this._percent=this._calculatePercentage(this._value),this._changeDetectorRef.markForCheck()}get step(){return this._step}set step(e){this._step=Ds(e,this._step),this._step%1!=0&&(this._roundToDecimal=this._step.toString().split(".").pop().length),this._changeDetectorRef.markForCheck()}get thumbLabel(){return this._thumbLabel}set thumbLabel(e){this._thumbLabel=br(e)}get tickInterval(){return this._tickInterval}set tickInterval(e){this._tickInterval="auto"===e?"auto":"number"==typeof e||"string"==typeof e?Ds(e,this._tickInterval):0}get value(){return null===this._value&&(this.value=this._min),this._value}set value(e){if(e!==this._value){let n=Ds(e,0);this._roundToDecimal&&n!==this.min&&n!==this.max&&(n=parseFloat(n.toFixed(this._roundToDecimal))),this._value=n,this._percent=this._calculatePercentage(this._value),this._changeDetectorRef.markForCheck()}}get vertical(){return this._vertical}set vertical(e){this._vertical=br(e)}get displayValue(){return this.displayWith?this.displayWith(this.value):this._roundToDecimal&&this.value&&this.value%1!=0?this.value.toFixed(this._roundToDecimal):this.value||0}focus(e){this._focusHostElement(e)}blur(){this._blurHostElement()}get percent(){return this._clamp(this._percent)}_shouldInvertAxis(){return this.vertical?!this.invert:this.invert}_isMinValue(){return 0===this.percent}_getThumbGap(){return this.disabled?7:this._isMinValue()&&!this.thumbLabel?this._isActive?10:7:0}_getTrackBackgroundStyles(){const e=this.vertical?"Y":"X",n=this.vertical?`1, ${1-this.percent}, 1`:1-this.percent+", 1, 1";return{transform:`translate${e}(${this._shouldInvertMouseCoords()?"-":""}${this._getThumbGap()}px) scale3d(${n})`}}_getTrackFillStyles(){const e=this.percent,n=this.vertical?"Y":"X",r=this.vertical?`1, ${e}, 1`:`${e}, 1, 1`;return{transform:`translate${n}(${this._shouldInvertMouseCoords()?"":"-"}${this._getThumbGap()}px) scale3d(${r})`,display:0===e?"none":""}}_getTicksContainerStyles(){return{transform:`translate${this.vertical?"Y":"X"}(${this.vertical||"rtl"!=this._getDirection()?"-":""}${this._tickIntervalPercent/2*100}%)`}}_getTicksStyles(){let e=100*this._tickIntervalPercent,o={backgroundSize:this.vertical?`2px ${e}%`:`${e}% 2px`,transform:`translateZ(0) translate${this.vertical?"Y":"X"}(${this.vertical||"rtl"!=this._getDirection()?"":"-"}${e/2}%)${this.vertical||"rtl"!=this._getDirection()?"":" rotate(180deg)"}`};if(this._isMinValue()&&this._getThumbGap()){const a=this._shouldInvertAxis();let l;l=this.vertical?a?"Bottom":"Top":a?"Right":"Left",o[`padding${l}`]=`${this._getThumbGap()}px`}return o}_getThumbContainerStyles(){const e=this._shouldInvertAxis();return{transform:`translate${this.vertical?"Y":"X"}(-${100*(("rtl"!=this._getDirection()||this.vertical?e:!e)?this.percent:1-this.percent)}%)`}}_shouldInvertMouseCoords(){const e=this._shouldInvertAxis();return"rtl"!=this._getDirection()||this.vertical?e:!e}_getDirection(){return this._dir&&"rtl"==this._dir.value?"rtl":"ltr"}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0).subscribe(e=>{this._isActive=!!e&&"keyboard"!==e,this._changeDetectorRef.detectChanges()}),this._dir&&(this._dirChangeSubscription=this._dir.change.subscribe(()=>{this._changeDetectorRef.markForCheck()}))}ngOnDestroy(){const e=this._elementRef.nativeElement;e.removeEventListener("mousedown",this._pointerDown,zt),e.removeEventListener("touchstart",this._pointerDown,zt),this._lastPointerEvent=null,this._removeGlobalEvents(),this._focusMonitor.stopMonitoring(this._elementRef),this._dirChangeSubscription.unsubscribe()}_onMouseenter(){this.disabled||(this._sliderDimensions=this._getSliderDimensions(),this._updateTickIntervalPercent())}_onFocus(){this._sliderDimensions=this._getSliderDimensions(),this._updateTickIntervalPercent()}_onBlur(){this.onTouched()}_onKeydown(e){if(this.disabled||Kw(e)||this._isSliding&&"keyboard"!==this._isSliding)return;const n=this.value;switch(e.keyCode){case 33:this._increment(10);break;case 34:this._increment(-10);break;case 35:this.value=this.max;break;case 36:this.value=this.min;break;case 37:this._increment("rtl"==this._getDirection()?1:-1);break;case 38:this._increment(1);break;case 39:this._increment("rtl"==this._getDirection()?-1:1);break;case 40:this._increment(-1);break;default:return}n!=this.value&&(this._emitInputEvent(),this._emitChangeEvent()),this._isSliding="keyboard",e.preventDefault()}_onKeyup(){"keyboard"===this._isSliding&&(this._isSliding=null)}_getWindow(){return this._document.defaultView||window}_bindGlobalEvents(e){const n=this._document,r=Ac(e),i=r?"touchmove":"mousemove",s=r?"touchend":"mouseup";n.addEventListener(i,this._pointerMove,zt),n.addEventListener(s,this._pointerUp,zt),r&&n.addEventListener("touchcancel",this._pointerUp,zt);const o=this._getWindow();typeof o<"u"&&o&&o.addEventListener("blur",this._windowBlur)}_removeGlobalEvents(){const e=this._document;e.removeEventListener("mousemove",this._pointerMove,zt),e.removeEventListener("mouseup",this._pointerUp,zt),e.removeEventListener("touchmove",this._pointerMove,zt),e.removeEventListener("touchend",this._pointerUp,zt),e.removeEventListener("touchcancel",this._pointerUp,zt);const n=this._getWindow();typeof n<"u"&&n&&n.removeEventListener("blur",this._windowBlur)}_increment(e){const n=this._clamp(this.value||0,this.min,this.max);this.value=this._clamp(n+this.step*e,this.min,this.max)}_updateValueFromPosition(e){if(!this._sliderDimensions)return;let n=this.vertical?this._sliderDimensions.top:this._sliderDimensions.left,r=this.vertical?this._sliderDimensions.height:this._sliderDimensions.width,i=this.vertical?e.y:e.x,s=this._clamp((i-n)/r);if(this._shouldInvertMouseCoords()&&(s=1-s),0===s)this.value=this.min;else if(1===s)this.value=this.max;else{const o=this._calculateValue(s),a=Math.round((o-this.min)/this.step)*this.step+this.min;this.value=this._clamp(a,this.min,this.max)}}_emitChangeEvent(){this._controlValueAccessorChangeFn(this.value),this.valueChange.emit(this.value),this.change.emit(this._createChangeEvent())}_emitInputEvent(){this.input.emit(this._createChangeEvent())}_updateTickIntervalPercent(){if(!this.tickInterval||!this._sliderDimensions)return;let e;if("auto"==this.tickInterval){let n=this.vertical?this._sliderDimensions.height:this._sliderDimensions.width,r=n*this.step/(this.max-this.min);e=Math.ceil(30/r)*this.step/n}else e=this.tickInterval*this.step/(this.max-this.min);this._tickIntervalPercent=vI(e)?e:0}_createChangeEvent(e=this.value){let n=new E$;return n.source=this,n.value=e,n}_calculatePercentage(e){const n=((e||0)-this.min)/(this.max-this.min);return vI(n)?n:0}_calculateValue(e){return this.min+e*(this.max-this.min)}_clamp(e,n=0,r=1){return Math.max(n,Math.min(e,r))}_getSliderDimensions(){return this._sliderWrapper?this._sliderWrapper.nativeElement.getBoundingClientRect():null}_focusHostElement(e){this._elementRef.nativeElement.focus(e)}_blurHostElement(){this._elementRef.nativeElement.blur()}writeValue(e){this.value=e}registerOnChange(e){this._controlValueAccessorChangeFn=e}registerOnTouched(e){this.onTouched=e}setDisabledState(e){this.disabled=e}}function vI(t){return!isNaN(t)&&isFinite(t)}function Ac(t){return"t"===t.type[0]}function bI(t,e){let n;return n=Ac(t)?"number"==typeof e?ey(t.touches,e)||ey(t.changedTouches,e):t.touches[0]||t.changedTouches[0]:t,n?{x:n.clientX,y:n.clientY}:void 0}function ey(t,e){for(let n=0;n<t.length;n++)if(t[n].identifier===e)return t[n]}Ci.\u0275fac=function(e){return new(e||Ci)(v(Ce),v(Is),v(Hl),v(Ss,8),ll("tabindex"),v(re),v(V),v(zo,8))},Ci.\u0275cmp=Nt({type:Ci,selectors:[["mat-slider"]],viewQuery:function(e,n){if(1&e&&JD(y$,5),2&e){let r;XD(r=eC())&&(n._sliderWrapper=r.first)}},hostAttrs:["role","slider",1,"mat-slider","mat-focus-indicator"],hostVars:29,hostBindings:function(e,n){1&e&&Pe("focus",function(){return n._onFocus()})("blur",function(){return n._onBlur()})("keydown",function(i){return n._onKeydown(i)})("keyup",function(){return n._onKeyup()})("mouseenter",function(){return n._onMouseenter()})("selectstart",function(i){return i.preventDefault()}),2&e&&(Uu("tabIndex",n.tabIndex),at("aria-disabled",n.disabled)("aria-valuemax",n.max)("aria-valuemin",n.min)("aria-valuenow",n.value)("aria-valuetext",null==n.valueText?n.displayValue:n.valueText)("aria-orientation",n.vertical?"vertical":"horizontal"),Lt("mat-slider-disabled",n.disabled)("mat-slider-has-ticks",n.tickInterval)("mat-slider-horizontal",!n.vertical)("mat-slider-axis-inverted",n._shouldInvertAxis())("mat-slider-invert-mouse-coords",n._shouldInvertMouseCoords())("mat-slider-sliding",n._isSliding)("mat-slider-thumb-label-showing",n.thumbLabel)("mat-slider-vertical",n.vertical)("mat-slider-min-value",n._isMinValue())("mat-slider-hide-last-tick",n.disabled||n._isMinValue()&&n._getThumbGap()&&n._shouldInvertAxis())("_mat-animation-noopable","NoopAnimations"===n._animationMode))},inputs:{disabled:"disabled",color:"color",tabIndex:"tabIndex",invert:"invert",max:"max",min:"min",step:"step",thumbLabel:"thumbLabel",tickInterval:"tickInterval",value:"value",displayWith:"displayWith",valueText:"valueText",vertical:"vertical"},outputs:{change:"change",input:"input",valueChange:"valueChange"},exportAs:["matSlider"],features:[ce([C$]),G],decls:13,vars:6,consts:[[1,"mat-slider-wrapper"],["sliderWrapper",""],[1,"mat-slider-track-wrapper"],[1,"mat-slider-track-background",3,"ngStyle"],[1,"mat-slider-track-fill",3,"ngStyle"],[1,"mat-slider-ticks-container",3,"ngStyle"],[1,"mat-slider-ticks",3,"ngStyle"],[1,"mat-slider-thumb-container",3,"ngStyle"],[1,"mat-slider-focus-ring"],[1,"mat-slider-thumb"],[1,"mat-slider-thumb-label"],[1,"mat-slider-thumb-label-text"]],template:function(e,n){1&e&&(Me(0,"div",0,1)(2,"div",2),Qn(3,"div",3)(4,"div",4),Re(),Me(5,"div",5),Qn(6,"div",6),Re(),Me(7,"div",7),Qn(8,"div",8)(9,"div",9),Me(10,"div",10)(11,"span",11),xl(12),Re()()()()),2&e&&(vt(3),Pt("ngStyle",n._getTrackBackgroundStyles()),vt(1),Pt("ngStyle",n._getTrackFillStyles()),vt(1),Pt("ngStyle",n._getTicksContainerStyles()),vt(1),Pt("ngStyle",n._getTicksStyles()),vt(1),Pt("ngStyle",n._getThumbContainerStyles()),vt(5),$u(n.displayValue))},dependencies:[li],styles:['.mat-slider{display:inline-block;position:relative;box-sizing:border-box;padding:8px;outline:none;vertical-align:middle}.mat-slider:not(.mat-slider-disabled):active,.mat-slider.mat-slider-sliding:not(.mat-slider-disabled){cursor:grabbing}.mat-slider-wrapper{-webkit-print-color-adjust:exact;color-adjust:exact;position:absolute}.mat-slider-track-wrapper{position:absolute;top:0;left:0;overflow:hidden}.mat-slider-track-fill{position:absolute;transform-origin:0 0;transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1),background-color 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-slider-track-background{position:absolute;transform-origin:100% 100%;transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1),background-color 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-slider-ticks-container{position:absolute;left:0;top:0;overflow:hidden}.mat-slider-ticks{-webkit-background-clip:content-box;background-clip:content-box;background-repeat:repeat;box-sizing:border-box;opacity:0;transition:opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-slider-thumb-container{position:absolute;z-index:1;transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-slider-focus-ring{position:absolute;width:30px;height:30px;border-radius:50%;transform:scale(0);opacity:0;transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1),background-color 400ms cubic-bezier(0.25, 0.8, 0.25, 1),opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-slider.cdk-keyboard-focused .mat-slider-focus-ring,.mat-slider.cdk-program-focused .mat-slider-focus-ring{transform:scale(1);opacity:1}.mat-slider:not(.mat-slider-disabled):not(.mat-slider-sliding) .mat-slider-thumb-label,.mat-slider:not(.mat-slider-disabled):not(.mat-slider-sliding) .mat-slider-thumb{cursor:grab}.mat-slider-thumb{position:absolute;right:-10px;bottom:-10px;box-sizing:border-box;width:20px;height:20px;border:3px solid rgba(0,0,0,0);border-radius:50%;transform:scale(0.7);transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1),background-color 400ms cubic-bezier(0.25, 0.8, 0.25, 1),border-color 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-slider-thumb-label{display:none;align-items:center;justify-content:center;position:absolute;width:28px;height:28px;border-radius:50%;transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1),border-radius 400ms cubic-bezier(0.25, 0.8, 0.25, 1),background-color 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.cdk-high-contrast-active .mat-slider-thumb-label{outline:solid 1px}.mat-slider-thumb-label-text{z-index:1;opacity:0;transition:opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-slider-sliding .mat-slider-track-fill,.mat-slider-sliding .mat-slider-track-background,.mat-slider-sliding .mat-slider-thumb-container{transition-duration:0ms}.mat-slider-has-ticks .mat-slider-wrapper::after{content:"";position:absolute;border-width:0;border-style:solid;opacity:0;transition:opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-slider-has-ticks.cdk-focused:not(.mat-slider-hide-last-tick) .mat-slider-wrapper::after,.mat-slider-has-ticks:hover:not(.mat-slider-hide-last-tick) .mat-slider-wrapper::after{opacity:1}.mat-slider-has-ticks.cdk-focused:not(.mat-slider-disabled) .mat-slider-ticks,.mat-slider-has-ticks:hover:not(.mat-slider-disabled) .mat-slider-ticks{opacity:1}.mat-slider-thumb-label-showing .mat-slider-focus-ring{display:none}.mat-slider-thumb-label-showing .mat-slider-thumb-label{display:flex}.mat-slider-axis-inverted .mat-slider-track-fill{transform-origin:100% 100%}.mat-slider-axis-inverted .mat-slider-track-background{transform-origin:0 0}.mat-slider:not(.mat-slider-disabled).cdk-focused.mat-slider-thumb-label-showing .mat-slider-thumb{transform:scale(0)}.mat-slider:not(.mat-slider-disabled).cdk-focused .mat-slider-thumb-label{border-radius:50% 50% 0}.mat-slider:not(.mat-slider-disabled).cdk-focused .mat-slider-thumb-label-text{opacity:1}.mat-slider:not(.mat-slider-disabled).cdk-mouse-focused .mat-slider-thumb,.mat-slider:not(.mat-slider-disabled).cdk-touch-focused .mat-slider-thumb,.mat-slider:not(.mat-slider-disabled).cdk-program-focused .mat-slider-thumb{border-width:2px;transform:scale(1)}.mat-slider-disabled .mat-slider-focus-ring{transform:scale(0);opacity:0}.mat-slider-disabled .mat-slider-thumb{border-width:4px;transform:scale(0.5)}.mat-slider-disabled .mat-slider-thumb-label{display:none}.mat-slider-horizontal{height:48px;min-width:128px}.mat-slider-horizontal .mat-slider-wrapper{height:2px;top:23px;left:8px;right:8px}.mat-slider-horizontal .mat-slider-wrapper::after{height:2px;border-left-width:2px;right:0;top:0}.mat-slider-horizontal .mat-slider-track-wrapper{height:2px;width:100%}.mat-slider-horizontal .mat-slider-track-fill{height:2px;width:100%;transform:scaleX(0)}.mat-slider-horizontal .mat-slider-track-background{height:2px;width:100%;transform:scaleX(1)}.mat-slider-horizontal .mat-slider-ticks-container{height:2px;width:100%}.cdk-high-contrast-active .mat-slider-horizontal .mat-slider-ticks-container{height:0;outline:solid 2px;top:1px}.mat-slider-horizontal .mat-slider-ticks{height:2px;width:100%}.mat-slider-horizontal .mat-slider-thumb-container{width:100%;height:0;top:50%}.mat-slider-horizontal .mat-slider-focus-ring{top:-15px;right:-15px}.mat-slider-horizontal .mat-slider-thumb-label{right:-14px;top:-40px;transform:translateY(26px) scale(0.01) rotate(45deg)}.mat-slider-horizontal .mat-slider-thumb-label-text{transform:rotate(-45deg)}.mat-slider-horizontal.cdk-focused .mat-slider-thumb-label{transform:rotate(45deg)}.cdk-high-contrast-active .mat-slider-horizontal.cdk-focused .mat-slider-thumb-label,.cdk-high-contrast-active .mat-slider-horizontal.cdk-focused .mat-slider-thumb-label-text{transform:none}.mat-slider-vertical{width:48px;min-height:128px}.mat-slider-vertical .mat-slider-wrapper{width:2px;top:8px;bottom:8px;left:23px}.mat-slider-vertical .mat-slider-wrapper::after{width:2px;border-top-width:2px;bottom:0;left:0}.mat-slider-vertical .mat-slider-track-wrapper{height:100%;width:2px}.mat-slider-vertical .mat-slider-track-fill{height:100%;width:2px;transform:scaleY(0)}.mat-slider-vertical .mat-slider-track-background{height:100%;width:2px;transform:scaleY(1)}.mat-slider-vertical .mat-slider-ticks-container{width:2px;height:100%}.cdk-high-contrast-active .mat-slider-vertical .mat-slider-ticks-container{width:0;outline:solid 2px;left:1px}.mat-slider-vertical .mat-slider-focus-ring{bottom:-15px;left:-15px}.mat-slider-vertical .mat-slider-ticks{width:2px;height:100%}.mat-slider-vertical .mat-slider-thumb-container{height:100%;width:0;left:50%}.mat-slider-vertical .mat-slider-thumb{-webkit-backface-visibility:hidden;backface-visibility:hidden}.mat-slider-vertical .mat-slider-thumb-label{bottom:-14px;left:-40px;transform:translateX(26px) scale(0.01) rotate(-45deg)}.mat-slider-vertical .mat-slider-thumb-label-text{transform:rotate(45deg)}.mat-slider-vertical.cdk-focused .mat-slider-thumb-label{transform:rotate(-45deg)}[dir=rtl] .mat-slider-wrapper::after{left:0;right:auto}[dir=rtl] .mat-slider-horizontal .mat-slider-track-fill{transform-origin:100% 100%}[dir=rtl] .mat-slider-horizontal .mat-slider-track-background{transform-origin:0 0}[dir=rtl] .mat-slider-horizontal.mat-slider-axis-inverted .mat-slider-track-fill{transform-origin:0 0}[dir=rtl] .mat-slider-horizontal.mat-slider-axis-inverted .mat-slider-track-background{transform-origin:100% 100%}.mat-slider._mat-animation-noopable .mat-slider-track-fill,.mat-slider._mat-animation-noopable .mat-slider-track-background,.mat-slider._mat-animation-noopable .mat-slider-ticks,.mat-slider._mat-animation-noopable .mat-slider-thumb-container,.mat-slider._mat-animation-noopable .mat-slider-focus-ring,.mat-slider._mat-animation-noopable .mat-slider-thumb,.mat-slider._mat-animation-noopable .mat-slider-thumb-label,.mat-slider._mat-animation-noopable .mat-slider-thumb-label-text,.mat-slider._mat-animation-noopable .mat-slider-has-ticks .mat-slider-wrapper::after{transition:none}'],encapsulation:2,changeDetection:0});class Fa{}Fa.\u0275fac=function(e){return new(e||Fa)},Fa.\u0275mod=J({type:Fa,declarations:[Ci],imports:[un,ne],exports:[Ci,ne]}),Fa.\u0275inj=q({imports:[un,ne,ne]});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class Sc{constructor(){this.min="0",this.max="100",this.value=0,this.result=new ue,this.displayResult=new ue}inputChanged(e){console.log(this.result),this.displayResult=this.result,this.result.emit(e.value),this.value=e.value}}Sc.\u0275fac=function(e){return new(e||Sc)},Sc.\u0275cmp=Nt({type:Sc,selectors:[["app-slider-card"]],inputs:{question:"question",min:"min",max:"max",value:"value",units:"units"},outputs:{result:"result",displayResult:"displayResult"},decls:7,vars:2,consts:[[2,"display","flex","flex-grow","grow"],["thumbLabel","","value","0",3,"step","change"]],template:function(e,n){1&e&&(Me(0,"mat-card")(1,"mat-card-header"),Qn(2,"mat-card-subtitle"),Re(),Me(3,"div",0)(4,"mat-slider",1),Pe("change",function(i){return n.inputChanged(i)}),Re(),Me(5,"mat-card-title"),xl(6),Re()()()),2&e&&(vt(4),Dp("step",n.units),vt(2),$u(n.question))},dependencies:[Ci,mi,Ls,Rs,Ps],styles:[".mat-card-title[_ngcontent-%COMP%]{font-size:2.5vmin;padding-top:1vw;margin-left:10%}mat-card[_ngcontent-%COMP%]{border:transparent;color:#000;background-color:transparent;width:100%;margin-left:1%;transition:none!important;box-shadow:none!important}mat-slider[_ngcontent-%COMP%]{width:100%;margin-left:5%}mat-card-subtitle[_ngcontent-%COMP%]{color:#c8c8c8;font-size:2vmin}"]});(function LB(t=function l2(t=Ed){const e=ms.get(t);if(!e&&t===Ed)return dw();if(!e)throw gr.create("no-app",{appName:t});return e}()){const e=nc(t=tw(t),Id);return e.isInitialized()?e.getImmediate():function VB(t,e={}){const n=nc(t,Id);if(n.isInitialized()){const i=n.getImmediate();if(Cd(e,n.getOptions()))return i;throw Ct.create("already-initialized")}return n.initialize({options:e})}(t)})(dw({apiKey:"AIzaSyCb6Nspa9G6FFJC4MxlhRHhVcfFVDvroo4",authDomain:"jbwx-terraingen.firebaseapp.com",projectId:"jbwx-terraingen",storageBucket:"jbwx-terraingen.appspot.com",messagingSenderId:"456956675122",appId:"1:456956675122:web:476f90c35c3907a054e82b",measurementId:"G-P2XJNFE46W"}));class Tc{constructor(){this.title="my-app",this.waterfrequency=0,this.sandfrequency=0,this.grassfrequency=0,this.stonefrequency=0}gotResult(e,n){switch(console.log(e),n){case 1:this.waterfrequency=e;break;case 2:this.sandfrequency=e;break;case 3:this.grassfrequency=e;break;case 4:this.stonefrequency=e}let r=[[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]],o=0,a=0;for(this.waterfrequency+=1,this.sandfrequency+=1,this.grassfrequency+=1,this.stonefrequency+=1;o<this.grassfrequency;)for(let u=3;u<53;u++)for(let d=3;d<53;d++)2==xe(1,350)&&(r[u][d]=4,o++);for(;o<5*this.grassfrequency;){let u=4;for(let d=3;d<53;d++)for(let f=3;f<53;f++)4==r[d][f]&&(2==xe(1,u)&&(r[d][f+1]=4,o++),2==xe(1,u)&&(r[d-1][f]=4,o++),2==xe(1,u)&&(r[d][f-1]=4,o++),2==xe(1,u)&&(r[d+1][f]=4,o++),2==xe(1,u)&&(r[d-1][f+1]=4,o++),2==xe(1,u)&&(r[d+1][f+1]=4,o++),2==xe(1,u)&&(r[d-1][f-1]=4,o++),2==xe(1,u)&&(r[d+1][f-1]=4,o++))}for(let u=3;u<53;u++)for(let d=3;d<53;d++)if(4==r[u][d]){let f=0;0==r[u-1][d+1]&&f++,0==r[u][d+1]&&f++,0==r[u+1][d+1]&&f++,0==r[u-1][d]&&f++,0==r[u+1][d]&&f++,0==r[u-1][d-1]&&f++,0==r[u][d-1]&&f++,0==r[u+1][d-1]&&f++,f>=5&&(r[u][d]=0)}for(let u=3;u<53;u++)for(let d=3;d<53;d++)if(0==r[u][d]){let f=0;4==r[u-1][d+1]&&f++,4==r[u][d+1]&&f++,4==r[u+1][d+1]&&f++,4==r[u-1][d]&&f++,4==r[u+1][d]&&f++,4==r[u-1][d-1]&&f++,4==r[u][d-1]&&f++,4==r[u+1][d-1]&&f++,f>=5&&(r[u][d]=4)}for(let u=3;u<53;u++)for(let d=3;d<53;d++)4==r[u][d]&&(0==r[u-1][d+1]&&(r[u-1][d+1]=3),0==r[u][d+1]&&(r[u][d+1]=3),0==r[u+1][d+1]&&(r[u+1][d+1]=3),0==r[u-1][d]&&(r[u-1][d]=3),0==r[u+1][d]&&(r[u+1][d]=3),0==r[u-1][d-1]&&(r[u-1][d-1]=3),0==r[u][d-1]&&(r[u][d-1]=3),0==r[u+1][d-1]&&(r[u+1][d-1]=3));let l=18-this.sandfrequency/100*15;for(let u=3;u<53;u++)for(let d=3;d<53;d++)3==r[u][d]&&2==xe(1,l)&&(0==r[u-1][d+1]&&(r[u-1][d+1]=3),0==r[u][d+1]&&(r[u][d+1]=3),0==r[u+1][d+1]&&(r[u+1][d+1]=3),0==r[u-1][d]&&(r[u-1][d]=3),0==r[u+1][d]&&(r[u+1][d]=3),0==r[u-1][d-1]&&(r[u-1][d-1]=3),0==r[u][d-1]&&(r[u][d-1]=3),0==r[u+1][d-1]&&(r[u+1][d-1]=3));if(1!=this.stonefrequency)for(;a<this.stonefrequency/5;)for(let u=3;u<53;u++)for(let d=3;d<53;d++)2==xe(1,550)&&(r[u][d]=5,a++);let c=2.5;for(let u=3;u<53;u++)for(let d=3;d<53;d++)5==r[u][d]&&(2==xe(1,c)&&(r[u][d+1]=6),2==xe(1,c)&&(r[u-1][d]=6),2==xe(1,c)&&(r[u][d-1]=6),2==xe(1,c)&&(r[u+1][d]=6),2==xe(1,c)&&(r[u-1][d+1]=6),2==xe(1,c)&&(r[u+1][d+1]=6),2==xe(1,c)&&(r[u-1][d-1]=6),2==xe(1,c)&&(r[u+1][d-1]=6));for(let u=3;u<53;u++)for(let d=3;d<53;d++)6==r[u][d]&&(r[u][d]=5);for(let u=3;u<53;u++)for(let d=3;d<53;d++)5==r[u][d]&&((0==r[u-1][d+1]||2==r[u-1][d+1])&&(r[u-1][d+1]=3),(0==r[u][d+1]||2==r[u][d+1])&&(r[u][d+1]=3),(0==r[u+1][d+1]||2==r[u+1][d+1])&&(r[u+1][d+1]=3),(0==r[u-1][d]||2==r[u-1][d])&&(r[u-1][d]=3),(0==r[u+1][d]||2==r[u+1][d])&&(r[u+1][d]=3),(0==r[u-1][d-1]||2==r[u-1][d-1])&&(r[u-1][d-1]=3),(0==r[u][d-1]||2==r[u][d-1])&&(r[u][d-1]=3),(0==r[u+1][d-1]||2==r[u+1][d-1])&&(r[u+1][d-1]=3));for(let u=3;u<53;u++)for(let d=3;d<53;d++)3==r[u][d]&&(0==r[u-1][d+1]&&(r[u-1][d+1]=2),0==r[u][d+1]&&(r[u][d+1]=2),0==r[u+1][d+1]&&(r[u+1][d+1]=2),0==r[u-1][d]&&(r[u-1][d]=2),0==r[u+1][d]&&(r[u+1][d]=2),0==r[u-1][d-1]&&(r[u-1][d-1]=2),0==r[u][d-1]&&(r[u][d-1]=2),0==r[u+1][d-1]&&(r[u+1][d-1]=2));!function A$(t){let e=document.getElementById("terrainDisplay");if(e.getContext){var n=e.getContext("2d");if(null!=n){n.clearRect(0,0,e.width,e.height);for(let r=3;r<53;r++)for(let i=3;i<53;i++)switch(t[r][i]){case 1:n.fillStyle="#0339fc",n.fillRect(r-3,i-3,1,1);break;case 2:n.fillStyle="#7593ff",n.fillRect(r-3,i-3,1,1);break;case 4:n.fillStyle="#30ab11",n.fillRect(r-3,i-3,1,1);break;case 3:n.fillStyle="#ffd82b",n.fillRect(r-3,i-3,1,1);break;case 5:n.fillStyle="#737373",n.fillRect(r-3,i-3,1,1);break;case 6:n.fillStyle="#ffffff",n.fillRect(r-3,i-3,1,1)}}}}
/**
       * @license Angular v14.2.10
       * (c) 2010-2022 Google LLC. https://angular.io/
       * License: MIT
       */(r)}}function xe(t,e){return Math.ceil(t+Math.random()*(e-t))}Tc.\u0275fac=function(e){return new(e||Tc)},Tc.\u0275cmp=Nt({type:Tc,selectors:[["app-root"]],decls:8,vars:0,consts:[[1,"appCard"],["id","terrainDisplay","width","50","height","50",1,"terrain"],[2,"display","flex","flex-grow","grow"],["question","Water",3,"result"],["question","Sand",3,"result"],["question","Grass",3,"result"],["question","Stone",3,"result"]],template:function(e,n){1&e&&(Me(0,"mat-card",0),Qn(1,"canvas",1),Me(2,"div",2)(3,"app-slider-card",3),Pe("result",function(i){return n.gotResult(i,1)}),Re(),Me(4,"app-slider-card",4),Pe("result",function(i){return n.gotResult(i,2)}),Re()(),Me(5,"div",2)(6,"app-slider-card",5),Pe("result",function(i){return n.gotResult(i,3)}),Re(),Me(7,"app-slider-card",6),Pe("result",function(i){return n.gotResult(i,4)}),Re()()())},dependencies:[mi,Sc]});class DI{}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const Hr="*";function CI(t,e=null){return{type:2,steps:t,options:e}}function EI(t){return{type:6,styles:t,offset:null}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function wI(t){Promise.resolve().then(t)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class xc{constructor(e=0,n=0){this._onDoneFns=[],this._onStartFns=[],this._onDestroyFns=[],this._originalOnDoneFns=[],this._originalOnStartFns=[],this._started=!1,this._destroyed=!1,this._finished=!1,this._position=0,this.parentPlayer=null,this.totalTime=e+n}_onFinish(){this._finished||(this._finished=!0,this._onDoneFns.forEach(e=>e()),this._onDoneFns=[])}onStart(e){this._originalOnStartFns.push(e),this._onStartFns.push(e)}onDone(e){this._originalOnDoneFns.push(e),this._onDoneFns.push(e)}onDestroy(e){this._onDestroyFns.push(e)}hasStarted(){return this._started}init(){}play(){this.hasStarted()||(this._onStart(),this.triggerMicrotask()),this._started=!0}triggerMicrotask(){wI(()=>this._onFinish())}_onStart(){this._onStartFns.forEach(e=>e()),this._onStartFns=[]}pause(){}restart(){}finish(){this._onFinish()}destroy(){this._destroyed||(this._destroyed=!0,this.hasStarted()||this._onStart(),this.finish(),this._onDestroyFns.forEach(e=>e()),this._onDestroyFns=[])}reset(){this._started=!1,this._finished=!1,this._onStartFns=this._originalOnStartFns,this._onDoneFns=this._originalOnDoneFns}setPosition(e){this._position=this.totalTime?e*this.totalTime:1}getPosition(){return this.totalTime?this._position/this.totalTime:1}triggerCallback(e){const n="start"==e?this._onStartFns:this._onDoneFns;n.forEach(r=>r()),n.length=0}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class MI{constructor(e){this._onDoneFns=[],this._onStartFns=[],this._finished=!1,this._started=!1,this._destroyed=!1,this._onDestroyFns=[],this.parentPlayer=null,this.totalTime=0,this.players=e;let n=0,r=0,i=0;const s=this.players.length;0==s?wI(()=>this._onFinish()):this.players.forEach(o=>{o.onDone(()=>{++n==s&&this._onFinish()}),o.onDestroy(()=>{++r==s&&this._onDestroy()}),o.onStart(()=>{++i==s&&this._onStart()})}),this.totalTime=this.players.reduce((o,a)=>Math.max(o,a.totalTime),0)}_onFinish(){this._finished||(this._finished=!0,this._onDoneFns.forEach(e=>e()),this._onDoneFns=[])}init(){this.players.forEach(e=>e.init())}onStart(e){this._onStartFns.push(e)}_onStart(){this.hasStarted()||(this._started=!0,this._onStartFns.forEach(e=>e()),this._onStartFns=[])}onDone(e){this._onDoneFns.push(e)}onDestroy(e){this._onDestroyFns.push(e)}hasStarted(){return this._started}play(){this.parentPlayer||this.init(),this._onStart(),this.players.forEach(e=>e.play())}pause(){this.players.forEach(e=>e.pause())}restart(){this.players.forEach(e=>e.restart())}finish(){this._onFinish(),this.players.forEach(e=>e.finish())}destroy(){this._onDestroy()}_onDestroy(){this._destroyed||(this._destroyed=!0,this._onFinish(),this.players.forEach(e=>e.destroy()),this._onDestroyFns.forEach(e=>e()),this._onDestroyFns=[])}reset(){this.players.forEach(e=>e.reset()),this._destroyed=!1,this._finished=!1,this._started=!1}setPosition(e){const n=e*this.totalTime;this.players.forEach(r=>{const i=r.totalTime?Math.min(1,n/r.totalTime):1;r.setPosition(i)})}getPosition(){const e=this.players.reduce((n,r)=>null===n||r.totalTime>n.totalTime?r:n,null);return null!=e?e.getPosition():0}beforeDestroy(){this.players.forEach(e=>{e.beforeDestroy&&e.beforeDestroy()})}triggerCallback(e){const n="start"==e?this._onStartFns:this._onDoneFns;n.forEach(r=>r()),n.length=0}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function II(t){return new D(3e3,!1)}function ny(){return typeof process<"u"&&"[object process]"==={}.toString.call(process)}function Ei(t){switch(t.length){case 0:return new xc;case 1:return t[0];default:return new MI(t)}}function AI(t,e,n,r,i=new Map,s=new Map){const o=[],a=[];let l=-1,c=null;if(r.forEach(u=>{const d=u.get("offset"),f=d==l,h=f&&c||new Map;u.forEach((p,m)=>{let g=m,_=p;if("offset"!==m)switch(g=e.normalizePropertyName(g,o),_){case"!":_=i.get(m);break;case Hr:_=s.get(m);break;default:_=e.normalizeStyleValue(m,g,_,o)}h.set(g,_)}),f||a.push(h),c=h,l=d}),o.length)throw function Z$(t){return new D(3502,!1)}();return a}function ry(t,e,n,r){switch(e){case"start":t.onStart(()=>r(n&&iy(n,"start",t)));break;case"done":t.onDone(()=>r(n&&iy(n,"done",t)));break;case"destroy":t.onDestroy(()=>r(n&&iy(n,"destroy",t)))}}function iy(t,e,n){const r=n.totalTime,i=!!n.disabled,s=sy(t.element,t.triggerName,t.fromState,t.toState,e||t.phaseName,r??t.totalTime,i),o=t._data;return null!=o&&(s._data=o),s}function sy(t,e,n,r,i="",s=0,o){return{element:t,triggerName:e,fromState:n,toState:r,phaseName:i,totalTime:s,disabled:!!o}}function wt(t,e,n){let r=t.get(e);return r||t.set(e,r=n),r}function SI(t){const e=t.indexOf(":");return[t.substring(1,e),t.slice(e+1)]}let oy=(t,e)=>!1,TI=(t,e,n)=>[],xI=null;function ay(t){const e=t.parentNode||t.host;return e===xI?null:e}(ny()||typeof Element<"u")&&(
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function cU(){return typeof window<"u"&&typeof window.document<"u"}()?(xI=(()=>document.documentElement)(),oy=(t,e)=>{for(;e;){if(e===t)return!0;e=ay(e)}return!1}):oy=(t,e)=>t.contains(e),TI=(t,e,n)=>{if(n)return Array.from(t.querySelectorAll(e));const r=t.querySelector(e);return r?[r]:[]});let zs=null,NI=!1;function dU(t){zs||(zs=function fU(){return typeof document<"u"?document.body:null}()||{},NI=!!zs.style&&"WebkitAppearance"in zs.style);let e=!0;return zs.style&&!function uU(t){return"ebkit"==t.substring(1,6)}(t)&&(e=t in zs.style,!e&&NI&&(e="Webkit"+t.charAt(0).toUpperCase()+t.slice(1)in zs.style)),e}const OI=oy,FI=TI;
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class Gs{validateStyleProperty(e){return dU(e)}matchesElement(e,n){return!1}containsElement(e,n){return OI(e,n)}getParentElement(e){return ay(e)}query(e,n,r){return FI(e,n,r)}computeStyle(e,n,r){return r||""}animate(e,n,r,i,s,o=[],a){return new xc(r,i)}}Gs.\u0275fac=function(e){return new(e||Gs)},Gs.\u0275prov=w({token:Gs,factory:Gs.\u0275fac});class qd{}qd.NOOP=new Gs;
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const ly="ng-enter",Kd="ng-leave",Yd="ng-trigger",Qd=".ng-trigger",RI="ng-animating",cy=".ng-animating";function $r(t){if("number"==typeof t)return t;const e=t.match(/^(-?[\.\d]+)(m?s)/);return!e||e.length<2?0:uy(parseFloat(e[1]),e[2])}function uy(t,e){return"s"===e?1e3*t:t}function Zd(t,e,n){return t.hasOwnProperty("duration")?t:function mU(t,e,n){const r=/^(-?[\.\d]+)(m?s)(?:\s+(-?[\.\d]+)(m?s))?(?:\s+([-a-z]+(?:\(.+?\))?))?$/i;let i,s=0,o="";if("string"==typeof t){const a=t.match(r);if(null===a)return e.push(II()),{duration:0,delay:0,easing:""};i=uy(parseFloat(a[1]),a[2]);const l=a[3];null!=l&&(s=uy(parseFloat(l),a[4]));const c=a[5];c&&(o=c)}else i=t;if(!n){let a=!1,l=e.length;i<0&&(e.push(function T$(){return new D(3100,!1)}()),a=!0),s<0&&(e.push(function x$(){return new D(3101,!1)}()),a=!0),a&&e.splice(l,0,II())}return{duration:i,delay:s,easing:o}}(t,e,n)}function Nc(t,e={}){return Object.keys(t).forEach(n=>{e[n]=t[n]}),e}function PI(t){const e=new Map;return Object.keys(t).forEach(n=>{const r=t[n];e.set(n,r)}),e}function wi(t,e=new Map,n){if(n)for(let[r,i]of n)e.set(r,i);for(let[r,i]of t)e.set(r,i);return e}function VI(t,e,n){return n?e+":"+n+";":""}function BI(t){let e="";for(let n=0;n<t.style.length;n++){const r=t.style.item(n);e+=VI(0,r,t.style.getPropertyValue(r))}for(const n in t.style){if(!t.style.hasOwnProperty(n)||n.startsWith("_"))continue;e+=VI(0,vU(n),t.style[n])}t.setAttribute("style",e)}function Fn(t,e,n){t.style&&(e.forEach((r,i)=>{const s=fy(i);n&&!n.has(i)&&n.set(i,t.style[s]),t.style[s]=r}),ny()&&BI(t))}function Ws(t,e){t.style&&(e.forEach((n,r)=>{const i=fy(r);t.style[i]=""}),ny()&&BI(t))}function Oc(t){return Array.isArray(t)?1==t.length?t[0]:CI(t):t}function yU(t,e,n){const r=e.params||{},i=jI(t);i.length&&i.forEach(s=>{r.hasOwnProperty(s)||n.push(function N$(t){return new D(3001,!1)}())})}const dy=new RegExp("{{\\s*(.+?)\\s*}}","g");function jI(t){let e=[];if("string"==typeof t){let n;for(;n=dy.exec(t);)e.push(n[1]);dy.lastIndex=0}return e}function Fc(t,e,n){const r=t.toString(),i=r.replace(dy,(s,o)=>{let a=e[o];return null==a&&(n.push(function O$(t){return new D(3003,!1)}()),a=""),a.toString()});return i==r?t:i}function Xd(t){const e=[];let n=t.next();for(;!n.done;)e.push(n.value),n=t.next();return e}const _U=/-+([a-z0-9])/g;function fy(t){return t.replace(_U,(...e)=>e[1].toUpperCase())}function vU(t){return t.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}function Mt(t,e,n){switch(e.type){case 7:return t.visitTrigger(e,n);case 0:return t.visitState(e,n);case 1:return t.visitTransition(e,n);case 2:return t.visitSequence(e,n);case 3:return t.visitGroup(e,n);case 4:return t.visitAnimate(e,n);case 5:return t.visitKeyframes(e,n);case 6:return t.visitStyle(e,n);case 8:return t.visitReference(e,n);case 9:return t.visitAnimateChild(e,n);case 10:return t.visitAnimateRef(e,n);case 11:return t.visitQuery(e,n);case 12:return t.visitStagger(e,n);default:throw function F$(t){return new D(3004,!1)}(e.type)}}function HI(t,e){return window.getComputedStyle(t)[e]}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function MU(t,e){const n=[];return"string"==typeof t?t.split(/\s*,\s*/).forEach(r=>function IU(t,e,n){if(":"==t[0]){const l=function AU(t,e){switch(t){case":enter":return"void => *";case":leave":return"* => void";case":increment":return(n,r)=>parseFloat(r)>parseFloat(n);case":decrement":return(n,r)=>parseFloat(r)<parseFloat(n);default:return e.push(function q$(t){return new D(3016,!1)}()),"* => *"}}(t,n);if("function"==typeof l)return void e.push(l);t=l}const r=t.match(/^(\*|[-\w]+)\s*(<?[=-]>)\s*(\*|[-\w]+)$/);if(null==r||r.length<4)return n.push(function W$(t){return new D(3015,!1)}()),e;const i=r[1],s=r[2],o=r[3];e.push($I(i,o));const a="*"==i&&"*"==o;"<"==s[0]&&!a&&e.push($I(o,i))}(r,n,e)):n.push(t),n}const nf=new Set(["true","1"]),rf=new Set(["false","0"]);function $I(t,e){const n=nf.has(t)||rf.has(t),r=nf.has(e)||rf.has(e);return(i,s)=>{let o="*"==t||t==i,a="*"==e||e==s;return!o&&n&&"boolean"==typeof i&&(o=i?nf.has(t):rf.has(t)),!a&&r&&"boolean"==typeof s&&(a=s?nf.has(e):rf.has(e)),o&&a}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const UI=":self",SU=new RegExp("s*:selfs*,?","g");function hy(t,e,n,r){return new TU(t).build(e,n,r)}class TU{constructor(e){this._driver=e}build(e,n,r){const i=new OU(n);return this._resetContextStyleTimingState(i),Mt(this,Oc(e),i)}_resetContextStyleTimingState(e){e.currentQuerySelector="",e.collectedStyles=new Map,e.collectedStyles.set("",new Map),e.currentTime=0}visitTrigger(e,n){let r=n.queryCount=0,i=n.depCount=0;const s=[],o=[];return"@"==e.name.charAt(0)&&n.errors.push(function R$(){return new D(3006,!1)}()),e.definitions.forEach(a=>{if(this._resetContextStyleTimingState(n),0==a.type){const l=a,c=l.name;c.toString().split(/\s*,\s*/).forEach(u=>{l.name=u,s.push(this.visitState(l,n))}),l.name=c}else if(1==a.type){const l=this.visitTransition(a,n);r+=l.queryCount,i+=l.depCount,o.push(l)}else n.errors.push(function P$(){return new D(3007,!1)}())}),{type:7,name:e.name,states:s,transitions:o,queryCount:r,depCount:i,options:null}}visitState(e,n){const r=this.visitStyle(e.styles,n),i=e.options&&e.options.params||null;if(r.containsDynamicStyles){const s=new Set,o=i||{};if(r.styles.forEach(a=>{a instanceof Map&&a.forEach(l=>{jI(l).forEach(c=>{o.hasOwnProperty(c)||s.add(c)})})}),s.size){Xd(s.values());n.errors.push(function L$(t,e){return new D(3008,!1)}(e.name))}}return{type:0,name:e.name,style:r,options:i?{params:i}:null}}visitTransition(e,n){n.queryCount=0,n.depCount=0;const r=Mt(this,Oc(e.animation),n);return{type:1,matchers:MU(e.expr,n.errors),animation:r,queryCount:n.queryCount,depCount:n.depCount,options:qs(e.options)}}visitSequence(e,n){return{type:2,steps:e.steps.map(r=>Mt(this,r,n)),options:qs(e.options)}}visitGroup(e,n){const r=n.currentTime;let i=0;const s=e.steps.map(o=>{n.currentTime=r;const a=Mt(this,o,n);return i=Math.max(i,n.currentTime),a});return n.currentTime=i,{type:3,steps:s,options:qs(e.options)}}visitAnimate(e,n){const r=function kU(t,e){if(t.hasOwnProperty("duration"))return t;if("number"==typeof t){return py(Zd(t,e).duration,0,"")}const n=t;if(n.split(/\s+/).some(s=>"{"==s.charAt(0)&&"{"==s.charAt(1))){const s=py(0,0,"");return s.dynamic=!0,s.strValue=n,s}const i=Zd(n,e);return py(i.duration,i.delay,i.easing)}(e.timings,n.errors);n.currentAnimateTimings=r;let i,s=e.styles?e.styles:EI({});if(5==s.type)i=this.visitKeyframes(s,n);else{let o=e.styles,a=!1;if(!o){a=!0;const c={};r.easing&&(c.easing=r.easing),o=EI(c)}n.currentTime+=r.duration+r.delay;const l=this.visitStyle(o,n);l.isEmptyStep=a,i=l}return n.currentAnimateTimings=null,{type:4,timings:r,style:i,options:null}}visitStyle(e,n){const r=this._makeStyleAst(e,n);return this._validateStyleAst(r,n),r}_makeStyleAst(e,n){const r=[],i=Array.isArray(e.styles)?e.styles:[e.styles];for(let a of i)"string"==typeof a?a===Hr?r.push(a):n.errors.push(new D(3002,!1)):r.push(PI(a));let s=!1,o=null;return r.forEach(a=>{if(a instanceof Map&&(a.has("easing")&&(o=a.get("easing"),a.delete("easing")),!s))for(let l of a.values())if(l.toString().indexOf("{{")>=0){s=!0;break}}),{type:6,styles:r,easing:o,offset:e.offset,containsDynamicStyles:s,options:null}}_validateStyleAst(e,n){const r=n.currentAnimateTimings;let i=n.currentTime,s=n.currentTime;r&&s>0&&(s-=r.duration+r.delay),e.styles.forEach(o=>{"string"!=typeof o&&o.forEach((a,l)=>{const c=n.collectedStyles.get(n.currentQuerySelector),u=c.get(l);let d=!0;u&&(s!=i&&s>=u.startTime&&i<=u.endTime&&(n.errors.push(function B$(t,e,n,r,i){return new D(3010,!1)}(0,u.startTime,u.endTime)),d=!1),s=u.startTime),d&&c.set(l,{startTime:s,endTime:i}),n.options&&yU(a,n.options,n.errors)})})}visitKeyframes(e,n){const r={type:5,styles:[],options:null};if(!n.currentAnimateTimings)return n.errors.push(function j$(){return new D(3011,!1)}()),r;let s=0;const o=[];let a=!1,l=!1,c=0;const u=e.steps.map(_=>{const E=this._makeStyleAst(_,n);let y=null!=E.offset?E.offset:function FU(t){if("string"==typeof t)return null;let e=null;if(Array.isArray(t))t.forEach(n=>{if(n instanceof Map&&n.has("offset")){const r=n;e=parseFloat(r.get("offset")),r.delete("offset")}});else if(t instanceof Map&&t.has("offset")){const n=t;e=parseFloat(n.get("offset")),n.delete("offset")}return e}(E.styles),I=0;return null!=y&&(s++,I=E.offset=y),l=l||I<0||I>1,a=a||I<c,c=I,o.push(I),E});l&&n.errors.push(function H$(){return new D(3012,!1)}()),a&&n.errors.push(function $$(){return new D(3200,!1)}());const d=e.steps.length;let f=0;s>0&&s<d?n.errors.push(function U$(){return new D(3202,!1)}()):0==s&&(f=1/(d-1));const h=d-1,p=n.currentTime,m=n.currentAnimateTimings,g=m.duration;return u.forEach((_,E)=>{const y=f>0?E==h?1:f*E:o[E],I=y*g;n.currentTime=p+m.delay+I,m.duration=I,this._validateStyleAst(_,n),_.offset=y,r.styles.push(_)}),r}visitReference(e,n){return{type:8,animation:Mt(this,Oc(e.animation),n),options:qs(e.options)}}visitAnimateChild(e,n){return n.depCount++,{type:9,options:qs(e.options)}}visitAnimateRef(e,n){return{type:10,animation:this.visitReference(e.animation,n),options:qs(e.options)}}visitQuery(e,n){const r=n.currentQuerySelector,i=e.options||{};n.queryCount++,n.currentQuery=e;const[s,o]=function xU(t){const e=!!t.split(/\s*,\s*/).find(n=>n==UI);return e&&(t=t.replace(SU,"")),t=t.replace(/@\*/g,Qd).replace(/@\w+/g,n=>Qd+"-"+n.slice(1)).replace(/:animating/g,cy),[t,e]}(e.selector);n.currentQuerySelector=r.length?r+" "+s:s,wt(n.collectedStyles,n.currentQuerySelector,new Map);const a=Mt(this,Oc(e.animation),n);return n.currentQuery=null,n.currentQuerySelector=r,{type:11,selector:s,limit:i.limit||0,optional:!!i.optional,includeSelf:o,animation:a,originalSelector:e.selector,options:qs(e.options)}}visitStagger(e,n){n.currentQuery||n.errors.push(function z$(){return new D(3013,!1)}());const r="full"===e.timings?{duration:0,delay:0,easing:"full"}:Zd(e.timings,n.errors,!0);return{type:12,animation:Mt(this,Oc(e.animation),n),timings:r,options:null}}}class OU{constructor(e){this.errors=e,this.queryCount=0,this.depCount=0,this.currentTransition=null,this.currentQuery=null,this.currentQuerySelector=null,this.currentAnimateTimings=null,this.currentTime=0,this.collectedStyles=new Map,this.options=null,this.unsupportedCSSPropertiesFound=new Set}}function qs(t){return t?(t=Nc(t)).params&&(t.params=function NU(t){return t?Nc(t):null}(t.params)):t={},t}function py(t,e,n){return{duration:t,delay:e,easing:n}}function my(t,e,n,r,i,s,o=null,a=!1){return{type:1,element:t,keyframes:e,preStyleProps:n,postStyleProps:r,duration:i,delay:s,totalTime:i+s,easing:o,subTimeline:a}}class sf{constructor(){this._map=new Map}get(e){return this._map.get(e)||[]}append(e,n){let r=this._map.get(e);r||this._map.set(e,r=[]),r.push(...n)}has(e){return this._map.has(e)}clear(){this._map.clear()}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const LU=new RegExp(":enter","g"),BU=new RegExp(":leave","g");function gy(t,e,n,r,i,s=new Map,o=new Map,a,l,c=[]){return(new jU).buildKeyframes(t,e,n,r,i,s,o,a,l,c)}class jU{buildKeyframes(e,n,r,i,s,o,a,l,c,u=[]){c=c||new sf;const d=new yy(e,n,c,i,s,u,[]);d.options=l;const f=l.delay?$r(l.delay):0;d.currentTimeline.delayNextStep(f),d.currentTimeline.setStyles([o],null,d.errors,l),Mt(this,r,d);const h=d.timelines.filter(p=>p.containsAnimation());if(h.length&&a.size){let p;for(let m=h.length-1;m>=0;m--){const g=h[m];if(g.element===n){p=g;break}}p&&!p.allowOnlyTimelineStyles()&&p.setStyles([a],null,d.errors,l)}return h.length?h.map(p=>p.buildKeyframes()):[my(n,[],[],[],0,f,"",!1)]}visitTrigger(e,n){}visitState(e,n){}visitTransition(e,n){}visitAnimateChild(e,n){const r=n.subInstructions.get(n.element);if(r){const i=n.createSubContext(e.options),s=n.currentTimeline.currentTime,o=this._visitSubInstructions(r,i,i.options);s!=o&&n.transformIntoNewTimeline(o)}n.previousNode=e}visitAnimateRef(e,n){const r=n.createSubContext(e.options);r.transformIntoNewTimeline(),this._applyAnimationRefDelays([e.options,e.animation.options],n,r),this.visitReference(e.animation,r),n.transformIntoNewTimeline(r.currentTimeline.currentTime),n.previousNode=e}_applyAnimationRefDelays(e,n,r){for(const i of e){const s=i?.delay;if(s){const o="number"==typeof s?s:$r(Fc(s,i?.params??{},n.errors));r.delayNextStep(o)}}}_visitSubInstructions(e,n,r){let s=n.currentTimeline.currentTime;const o=null!=r.duration?$r(r.duration):null,a=null!=r.delay?$r(r.delay):null;return 0!==o&&e.forEach(l=>{const c=n.appendInstructionToTimeline(l,o,a);s=Math.max(s,c.duration+c.delay)}),s}visitReference(e,n){n.updateOptions(e.options,!0),Mt(this,e.animation,n),n.previousNode=e}visitSequence(e,n){const r=n.subContextCount;let i=n;const s=e.options;if(s&&(s.params||s.delay)&&(i=n.createSubContext(s),i.transformIntoNewTimeline(),null!=s.delay)){6==i.previousNode.type&&(i.currentTimeline.snapshotCurrentStyles(),i.previousNode=of);const o=$r(s.delay);i.delayNextStep(o)}e.steps.length&&(e.steps.forEach(o=>Mt(this,o,i)),i.currentTimeline.applyStylesToKeyframe(),i.subContextCount>r&&i.transformIntoNewTimeline()),n.previousNode=e}visitGroup(e,n){const r=[];let i=n.currentTimeline.currentTime;const s=e.options&&e.options.delay?$r(e.options.delay):0;e.steps.forEach(o=>{const a=n.createSubContext(e.options);s&&a.delayNextStep(s),Mt(this,o,a),i=Math.max(i,a.currentTimeline.currentTime),r.push(a.currentTimeline)}),r.forEach(o=>n.currentTimeline.mergeTimelineCollectedStyles(o)),n.transformIntoNewTimeline(i),n.previousNode=e}_visitTiming(e,n){if(e.dynamic){const r=e.strValue;return Zd(n.params?Fc(r,n.params,n.errors):r,n.errors)}return{duration:e.duration,delay:e.delay,easing:e.easing}}visitAnimate(e,n){const r=n.currentAnimateTimings=this._visitTiming(e.timings,n),i=n.currentTimeline;r.delay&&(n.incrementTime(r.delay),i.snapshotCurrentStyles());const s=e.style;5==s.type?this.visitKeyframes(s,n):(n.incrementTime(r.duration),this.visitStyle(s,n),i.applyStylesToKeyframe()),n.currentAnimateTimings=null,n.previousNode=e}visitStyle(e,n){const r=n.currentTimeline,i=n.currentAnimateTimings;!i&&r.hasCurrentStyleProperties()&&r.forwardFrame();const s=i&&i.easing||e.easing;e.isEmptyStep?r.applyEmptyStep(s):r.setStyles(e.styles,s,n.errors,n.options),n.previousNode=e}visitKeyframes(e,n){const r=n.currentAnimateTimings,i=n.currentTimeline.duration,s=r.duration,a=n.createSubContext().currentTimeline;a.easing=r.easing,e.styles.forEach(l=>{const c=l.offset||0;a.forwardTime(c*s),a.setStyles(l.styles,l.easing,n.errors,n.options),a.applyStylesToKeyframe()}),n.currentTimeline.mergeTimelineCollectedStyles(a),n.transformIntoNewTimeline(i+s),n.previousNode=e}visitQuery(e,n){const r=n.currentTimeline.currentTime,i=e.options||{},s=i.delay?$r(i.delay):0;s&&(6===n.previousNode.type||0==r&&n.currentTimeline.hasCurrentStyleProperties())&&(n.currentTimeline.snapshotCurrentStyles(),n.previousNode=of);let o=r;const a=n.invokeQuery(e.selector,e.originalSelector,e.limit,e.includeSelf,!!i.optional,n.errors);n.currentQueryTotal=a.length;let l=null;a.forEach((c,u)=>{n.currentQueryIndex=u;const d=n.createSubContext(e.options,c);s&&d.delayNextStep(s),c===n.element&&(l=d.currentTimeline),Mt(this,e.animation,d),d.currentTimeline.applyStylesToKeyframe();const f=d.currentTimeline.currentTime;o=Math.max(o,f)}),n.currentQueryIndex=0,n.currentQueryTotal=0,n.transformIntoNewTimeline(o),l&&(n.currentTimeline.mergeTimelineCollectedStyles(l),n.currentTimeline.snapshotCurrentStyles()),n.previousNode=e}visitStagger(e,n){const r=n.parentContext,i=n.currentTimeline,s=e.timings,o=Math.abs(s.duration),a=o*(n.currentQueryTotal-1);let l=o*n.currentQueryIndex;switch(s.duration<0?"reverse":s.easing){case"reverse":l=a-l;break;case"full":l=r.currentStaggerTime}const u=n.currentTimeline;l&&u.delayNextStep(l);const d=u.currentTime;Mt(this,e.animation,n),n.previousNode=e,r.currentStaggerTime=i.currentTime-d+(i.startTime-r.currentTimeline.startTime)}}const of={};class yy{constructor(e,n,r,i,s,o,a,l){this._driver=e,this.element=n,this.subInstructions=r,this._enterClassName=i,this._leaveClassName=s,this.errors=o,this.timelines=a,this.parentContext=null,this.currentAnimateTimings=null,this.previousNode=of,this.subContextCount=0,this.options={},this.currentQueryIndex=0,this.currentQueryTotal=0,this.currentStaggerTime=0,this.currentTimeline=l||new af(this._driver,n,0),a.push(this.currentTimeline)}get params(){return this.options.params}updateOptions(e,n){if(!e)return;const r=e;let i=this.options;null!=r.duration&&(i.duration=$r(r.duration)),null!=r.delay&&(i.delay=$r(r.delay));const s=r.params;if(s){let o=i.params;o||(o=this.options.params={}),Object.keys(s).forEach(a=>{(!n||!o.hasOwnProperty(a))&&(o[a]=Fc(s[a],o,this.errors))})}}_copyOptions(){const e={};if(this.options){const n=this.options.params;if(n){const r=e.params={};Object.keys(n).forEach(i=>{r[i]=n[i]})}}return e}createSubContext(e=null,n,r){const i=n||this.element,s=new yy(this._driver,i,this.subInstructions,this._enterClassName,this._leaveClassName,this.errors,this.timelines,this.currentTimeline.fork(i,r||0));return s.previousNode=this.previousNode,s.currentAnimateTimings=this.currentAnimateTimings,s.options=this._copyOptions(),s.updateOptions(e),s.currentQueryIndex=this.currentQueryIndex,s.currentQueryTotal=this.currentQueryTotal,s.parentContext=this,this.subContextCount++,s}transformIntoNewTimeline(e){return this.previousNode=of,this.currentTimeline=this.currentTimeline.fork(this.element,e),this.timelines.push(this.currentTimeline),this.currentTimeline}appendInstructionToTimeline(e,n,r){const i={duration:n??e.duration,delay:this.currentTimeline.currentTime+(r??0)+e.delay,easing:""},s=new HU(this._driver,e.element,e.keyframes,e.preStyleProps,e.postStyleProps,i,e.stretchStartingKeyframe);return this.timelines.push(s),i}incrementTime(e){this.currentTimeline.forwardTime(this.currentTimeline.duration+e)}delayNextStep(e){e>0&&this.currentTimeline.delayNextStep(e)}invokeQuery(e,n,r,i,s,o){let a=[];if(i&&a.push(this.element),e.length>0){e=(e=e.replace(LU,"."+this._enterClassName)).replace(BU,"."+this._leaveClassName);const l=1!=r;let c=this._driver.query(this.element,e,l);0!==r&&(c=r<0?c.slice(c.length+r,c.length):c.slice(0,r)),a.push(...c)}return!s&&0==a.length&&o.push(function G$(t){return new D(3014,!1)}()),a}}class af{constructor(e,n,r,i){this._driver=e,this.element=n,this.startTime=r,this._elementTimelineStylesLookup=i,this.duration=0,this._previousKeyframe=new Map,this._currentKeyframe=new Map,this._keyframes=new Map,this._styleSummary=new Map,this._localTimelineStyles=new Map,this._pendingStyles=new Map,this._backFill=new Map,this._currentEmptyStepKeyframe=null,this._elementTimelineStylesLookup||(this._elementTimelineStylesLookup=new Map),this._globalTimelineStyles=this._elementTimelineStylesLookup.get(n),this._globalTimelineStyles||(this._globalTimelineStyles=this._localTimelineStyles,this._elementTimelineStylesLookup.set(n,this._localTimelineStyles)),this._loadKeyframe()}containsAnimation(){switch(this._keyframes.size){case 0:return!1;case 1:return this.hasCurrentStyleProperties();default:return!0}}hasCurrentStyleProperties(){return this._currentKeyframe.size>0}get currentTime(){return this.startTime+this.duration}delayNextStep(e){const n=1===this._keyframes.size&&this._pendingStyles.size;this.duration||n?(this.forwardTime(this.currentTime+e),n&&this.snapshotCurrentStyles()):this.startTime+=e}fork(e,n){return this.applyStylesToKeyframe(),new af(this._driver,e,n||this.currentTime,this._elementTimelineStylesLookup)}_loadKeyframe(){this._currentKeyframe&&(this._previousKeyframe=this._currentKeyframe),this._currentKeyframe=this._keyframes.get(this.duration),this._currentKeyframe||(this._currentKeyframe=new Map,this._keyframes.set(this.duration,this._currentKeyframe))}forwardFrame(){this.duration+=1,this._loadKeyframe()}forwardTime(e){this.applyStylesToKeyframe(),this.duration=e,this._loadKeyframe()}_updateStyle(e,n){this._localTimelineStyles.set(e,n),this._globalTimelineStyles.set(e,n),this._styleSummary.set(e,{time:this.currentTime,value:n})}allowOnlyTimelineStyles(){return this._currentEmptyStepKeyframe!==this._currentKeyframe}applyEmptyStep(e){e&&this._previousKeyframe.set("easing",e);for(let[n,r]of this._globalTimelineStyles)this._backFill.set(n,r||Hr),this._currentKeyframe.set(n,Hr);this._currentEmptyStepKeyframe=this._currentKeyframe}setStyles(e,n,r,i){n&&this._previousKeyframe.set("easing",n);const s=i&&i.params||{},o=function $U(t,e){const n=new Map;let r;return t.forEach(i=>{if("*"===i){r=r||e.keys();for(let s of r)n.set(s,Hr)}else wi(i,n)}),n}(e,this._globalTimelineStyles);for(let[a,l]of o){const c=Fc(l,s,r);this._pendingStyles.set(a,c),this._localTimelineStyles.has(a)||this._backFill.set(a,this._globalTimelineStyles.get(a)??Hr),this._updateStyle(a,c)}}applyStylesToKeyframe(){0!=this._pendingStyles.size&&(this._pendingStyles.forEach((e,n)=>{this._currentKeyframe.set(n,e)}),this._pendingStyles.clear(),this._localTimelineStyles.forEach((e,n)=>{this._currentKeyframe.has(n)||this._currentKeyframe.set(n,e)}))}snapshotCurrentStyles(){for(let[e,n]of this._localTimelineStyles)this._pendingStyles.set(e,n),this._updateStyle(e,n)}getFinalKeyframe(){return this._keyframes.get(this.duration)}get properties(){const e=[];for(let n in this._currentKeyframe)e.push(n);return e}mergeTimelineCollectedStyles(e){e._styleSummary.forEach((n,r)=>{const i=this._styleSummary.get(r);(!i||n.time>i.time)&&this._updateStyle(r,n.value)})}buildKeyframes(){this.applyStylesToKeyframe();const e=new Set,n=new Set,r=1===this._keyframes.size&&0===this.duration;let i=[];this._keyframes.forEach((a,l)=>{const c=wi(a,new Map,this._backFill);c.forEach((u,d)=>{"!"===u?e.add(d):u===Hr&&n.add(d)}),r||c.set("offset",l/this.duration),i.push(c)});const s=e.size?Xd(e.values()):[],o=n.size?Xd(n.values()):[];if(r){const a=i[0],l=new Map(a);a.set("offset",0),l.set("offset",1),i=[a,l]}return my(this.element,i,s,o,this.duration,this.startTime,this.easing,!1)}}class HU extends af{constructor(e,n,r,i,s,o,a=!1){super(e,n,o.delay),this.keyframes=r,this.preStyleProps=i,this.postStyleProps=s,this._stretchStartingKeyframe=a,this.timings={duration:o.duration,delay:o.delay,easing:o.easing}}containsAnimation(){return this.keyframes.length>1}buildKeyframes(){let e=this.keyframes,{delay:n,duration:r,easing:i}=this.timings;if(this._stretchStartingKeyframe&&n){const s=[],o=r+n,a=n/o,l=wi(e[0]);l.set("offset",0),s.push(l);const c=wi(e[0]);c.set("offset",GI(a)),s.push(c);const u=e.length-1;for(let d=1;d<=u;d++){let f=wi(e[d]);const p=n+f.get("offset")*r;f.set("offset",GI(p/o)),s.push(f)}r=o,n=0,i="",e=s}return my(this.element,e,this.preStyleProps,this.postStyleProps,r,n,i,!0)}}function GI(t,e=3){const n=Math.pow(10,e-1);return Math.round(t*n)/n}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class _y{}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const UU=new Set(["width","height","minWidth","minHeight","maxWidth","maxHeight","left","top","bottom","right","fontSize","outlineWidth","outlineOffset","paddingTop","paddingLeft","paddingBottom","paddingRight","marginTop","marginLeft","marginBottom","marginRight","borderRadius","borderWidth","borderTopWidth","borderLeftWidth","borderRightWidth","borderBottomWidth","textIndent","perspective"]);class zU extends _y{normalizePropertyName(e,n){return fy(e)}normalizeStyleValue(e,n,r,i){let s="";const o=r.toString().trim();if(UU.has(n)&&0!==r&&"0"!==r)if("number"==typeof r)s="px";else{const a=r.match(/^[+-]?[\d\.]+([a-z]*)$/);a&&0==a[1].length&&i.push(function k$(t,e){return new D(3005,!1)}())}return o+s}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function WI(t,e,n,r,i,s,o,a,l,c,u,d,f){return{type:0,element:t,triggerName:e,isRemovalTransition:i,fromState:n,fromStyles:s,toState:r,toStyles:o,timelines:a,queriedElements:l,preStyleProps:c,postStyleProps:u,totalTime:d,errors:f}}const vy={};class qI{constructor(e,n,r){this._triggerName=e,this.ast=n,this._stateStyles=r}match(e,n,r,i){return function GU(t,e,n,r,i){return t.some(s=>s(e,n,r,i))}(this.ast.matchers,e,n,r,i)}buildStyles(e,n,r){let i=this._stateStyles.get("*");return void 0!==e&&(i=this._stateStyles.get(e?.toString())||i),i?i.buildStyles(n,r):new Map}build(e,n,r,i,s,o,a,l,c,u){const d=[],f=this.ast.options&&this.ast.options.params||vy,h=a&&a.params||vy,p=this.buildStyles(r,h,d),m=l&&l.params||vy,g=this.buildStyles(i,m,d),_=new Set,E=new Map,y=new Map,I="void"===i,B={params:WU(m,f),delay:this.ast.options?.delay},U=u?[]:gy(e,n,this.ast.animation,s,o,p,g,B,c,d);let _e=0;if(U.forEach(At=>{_e=Math.max(At.duration+At.delay,_e)}),d.length)return WI(n,this._triggerName,r,i,I,p,g,[],[],E,y,_e,d);U.forEach(At=>{const St=At.element,Wa=wt(E,St,new Set);At.preStyleProps.forEach(hn=>Wa.add(hn));const Gr=wt(y,St,new Set);At.postStyleProps.forEach(hn=>Gr.add(hn)),St!==n&&_.add(St)});const It=Xd(_.values());return WI(n,this._triggerName,r,i,I,p,g,U,It,E,y,_e)}}function WU(t,e){const n=Nc(e);for(const r in t)t.hasOwnProperty(r)&&null!=t[r]&&(n[r]=t[r]);return n}class qU{constructor(e,n,r){this.styles=e,this.defaultParams=n,this.normalizer=r}buildStyles(e,n){const r=new Map,i=Nc(this.defaultParams);return Object.keys(e).forEach(s=>{const o=e[s];null!==o&&(i[s]=o)}),this.styles.styles.forEach(s=>{"string"!=typeof s&&s.forEach((o,a)=>{o&&(o=Fc(o,i,n));const l=this.normalizer.normalizePropertyName(a,n);o=this.normalizer.normalizeStyleValue(a,l,o,n),r.set(l,o)})}),r}}class YU{constructor(e,n,r){this.name=e,this.ast=n,this._normalizer=r,this.transitionFactories=[],this.states=new Map,n.states.forEach(i=>{const s=i.options&&i.options.params||{};this.states.set(i.name,new qU(i.style,s,r))}),KI(this.states,"true","1"),KI(this.states,"false","0"),n.transitions.forEach(i=>{this.transitionFactories.push(new qI(e,i,this.states))}),this.fallbackTransition=function QU(t,e,n){return new qI(t,{type:1,animation:{type:2,steps:[],options:null},matchers:[(o,a)=>!0],options:null,queryCount:0,depCount:0},e)}(e,this.states,this._normalizer)}get containsQueries(){return this.ast.queryCount>0}matchTransition(e,n,r,i){return this.transitionFactories.find(o=>o.match(e,n,r,i))||null}matchStyles(e,n,r){return this.fallbackTransition.buildStyles(e,n,r)}}function KI(t,e,n){t.has(e)?t.has(n)||t.set(n,t.get(e)):t.has(n)&&t.set(e,t.get(n))}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const ZU=new sf;class XU{constructor(e,n,r){this.bodyNode=e,this._driver=n,this._normalizer=r,this._animations=new Map,this._playersById=new Map,this.players=[]}register(e,n){const r=[],i=[],s=hy(this._driver,n,r,i);if(r.length)throw function X$(t){return new D(3503,!1)}();i.length,this._animations.set(e,s)}_buildPlayer(e,n,r){const i=e.element,s=AI(this._driver,this._normalizer,0,e.keyframes,n,r);return this._driver.animate(i,s,e.duration,e.delay,e.easing,[],!0)}create(e,n,r={}){const i=[],s=this._animations.get(e);let o;const a=new Map;if(s?(o=gy(this._driver,n,s,ly,Kd,new Map,new Map,r,ZU,i),o.forEach(u=>{const d=wt(a,u.element,new Map);u.postStyleProps.forEach(f=>d.set(f,null))})):(i.push(function J$(){return new D(3300,!1)}()),o=[]),i.length)throw function eU(t){return new D(3504,!1)}();a.forEach((u,d)=>{u.forEach((f,h)=>{u.set(h,this._driver.computeStyle(d,h,Hr))})});const c=Ei(o.map(u=>{const d=a.get(u.element);return this._buildPlayer(u,new Map,d)}));return this._playersById.set(e,c),c.onDestroy(()=>this.destroy(e)),this.players.push(c),c}destroy(e){const n=this._getPlayer(e);n.destroy(),this._playersById.delete(e);const r=this.players.indexOf(n);r>=0&&this.players.splice(r,1)}_getPlayer(e){const n=this._playersById.get(e);if(!n)throw function tU(t){return new D(3301,!1)}();return n}listen(e,n,r,i){const s=sy(n,"","","");return ry(this._getPlayer(e),r,s,i),()=>{}}command(e,n,r,i){if("register"==r)return void this.register(e,i[0]);if("create"==r){const o=i[0]||{};return void this.create(e,n,o)}const s=this._getPlayer(e);switch(r){case"play":s.play();break;case"pause":s.pause();break;case"reset":s.reset();break;case"restart":s.restart();break;case"finish":s.finish();break;case"init":s.init();break;case"setPosition":s.setPosition(parseFloat(i[0]));break;case"destroy":this.destroy(e)}}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const YI="ng-animate-queued",by="ng-animate-disabled",r3=[],QI={namespaceId:"",setForRemoval:!1,setForMove:!1,hasAnimation:!1,removedBeforeQueried:!1},i3={namespaceId:"",setForMove:!1,setForRemoval:!1,hasAnimation:!1,removedBeforeQueried:!0},Gt="__ng_removed";class Dy{constructor(e,n=""){this.namespaceId=n;const r=e&&e.hasOwnProperty("value"),i=r?e.value:e;if(this.value=function l3(t){return t??null}(i),r){const s=Nc(e);delete s.value,this.options=s}else this.options={};this.options.params||(this.options.params={})}get params(){return this.options.params}absorbOptions(e){const n=e.params;if(n){const r=this.options.params;Object.keys(n).forEach(i=>{null==r[i]&&(r[i]=n[i])})}}}const kc="void",Cy=new Dy(kc);class s3{constructor(e,n,r){this.id=e,this.hostElement=n,this._engine=r,this.players=[],this._triggers=new Map,this._queue=[],this._elementListeners=new Map,this._hostClassName="ng-tns-"+e,Wt(n,this._hostClassName)}listen(e,n,r,i){if(!this._triggers.has(n))throw function nU(t,e){return new D(3302,!1)}();if(null==r||0==r.length)throw function rU(t){return new D(3303,!1)}();if(!function c3(t){return"start"==t||"done"==t}(r))throw function iU(t,e){return new D(3400,!1)}();const s=wt(this._elementListeners,e,[]),o={name:n,phase:r,callback:i};s.push(o);const a=wt(this._engine.statesByElement,e,new Map);return a.has(n)||(Wt(e,Yd),Wt(e,Yd+"-"+n),a.set(n,Cy)),()=>{this._engine.afterFlush(()=>{const l=s.indexOf(o);l>=0&&s.splice(l,1),this._triggers.has(n)||a.delete(n)})}}register(e,n){return!this._triggers.has(e)&&(this._triggers.set(e,n),!0)}_getTrigger(e){const n=this._triggers.get(e);if(!n)throw function sU(t){return new D(3401,!1)}();return n}trigger(e,n,r,i=!0){const s=this._getTrigger(n),o=new Ey(this.id,n,e);let a=this._engine.statesByElement.get(e);a||(Wt(e,Yd),Wt(e,Yd+"-"+n),this._engine.statesByElement.set(e,a=new Map));let l=a.get(n);const c=new Dy(r,this.id);if(!(r&&r.hasOwnProperty("value"))&&l&&c.absorbOptions(l.options),a.set(n,c),l||(l=Cy),c.value!==kc&&l.value===c.value){if(!function f3(t,e){const n=Object.keys(t),r=Object.keys(e);if(n.length!=r.length)return!1;for(let i=0;i<n.length;i++){const s=n[i];if(!e.hasOwnProperty(s)||t[s]!==e[s])return!1}return!0}(l.params,c.params)){const m=[],g=s.matchStyles(l.value,l.params,m),_=s.matchStyles(c.value,c.params,m);m.length?this._engine.reportError(m):this._engine.afterFlush(()=>{Ws(e,g),Fn(e,_)})}return}const f=wt(this._engine.playersByElement,e,[]);f.forEach(m=>{m.namespaceId==this.id&&m.triggerName==n&&m.queued&&m.destroy()});let h=s.matchTransition(l.value,c.value,e,c.params),p=!1;if(!h){if(!i)return;h=s.fallbackTransition,p=!0}return this._engine.totalQueuedPlayers++,this._queue.push({element:e,triggerName:n,transition:h,fromState:l,toState:c,player:o,isFallbackTransition:p}),p||(Wt(e,YI),o.onStart(()=>{ka(e,YI)})),o.onDone(()=>{let m=this.players.indexOf(o);m>=0&&this.players.splice(m,1);const g=this._engine.playersByElement.get(e);if(g){let _=g.indexOf(o);_>=0&&g.splice(_,1)}}),this.players.push(o),f.push(o),o}deregister(e){this._triggers.delete(e),this._engine.statesByElement.forEach(n=>n.delete(e)),this._elementListeners.forEach((n,r)=>{this._elementListeners.set(r,n.filter(i=>i.name!=e))})}clearElementCache(e){this._engine.statesByElement.delete(e),this._elementListeners.delete(e);const n=this._engine.playersByElement.get(e);n&&(n.forEach(r=>r.destroy()),this._engine.playersByElement.delete(e))}_signalRemovalForInnerTriggers(e,n){const r=this._engine.driver.query(e,Qd,!0);r.forEach(i=>{if(i[Gt])return;const s=this._engine.fetchNamespacesByElement(i);s.size?s.forEach(o=>o.triggerLeaveAnimation(i,n,!1,!0)):this.clearElementCache(i)}),this._engine.afterFlushAnimationsDone(()=>r.forEach(i=>this.clearElementCache(i)))}triggerLeaveAnimation(e,n,r,i){const s=this._engine.statesByElement.get(e),o=new Map;if(s){const a=[];if(s.forEach((l,c)=>{if(o.set(c,l.value),this._triggers.has(c)){const u=this.trigger(e,c,kc,i);u&&a.push(u)}}),a.length)return this._engine.markElementAsRemoved(this.id,e,!0,n,o),r&&Ei(a).onDone(()=>this._engine.processLeaveNode(e)),!0}return!1}prepareLeaveAnimationListeners(e){const n=this._elementListeners.get(e),r=this._engine.statesByElement.get(e);if(n&&r){const i=new Set;n.forEach(s=>{const o=s.name;if(i.has(o))return;i.add(o);const l=this._triggers.get(o).fallbackTransition,c=r.get(o)||Cy,u=new Dy(kc),d=new Ey(this.id,o,e);this._engine.totalQueuedPlayers++,this._queue.push({element:e,triggerName:o,transition:l,fromState:c,toState:u,player:d,isFallbackTransition:!0})})}}removeNode(e,n){const r=this._engine;if(e.childElementCount&&this._signalRemovalForInnerTriggers(e,n),this.triggerLeaveAnimation(e,n,!0))return;let i=!1;if(r.totalAnimations){const s=r.players.length?r.playersByQueriedElement.get(e):[];if(s&&s.length)i=!0;else{let o=e;for(;o=o.parentNode;)if(r.statesByElement.get(o)){i=!0;break}}}if(this.prepareLeaveAnimationListeners(e),i)r.markElementAsRemoved(this.id,e,!1,n);else{const s=e[Gt];(!s||s===QI)&&(r.afterFlush(()=>this.clearElementCache(e)),r.destroyInnerAnimations(e),r._onRemovalComplete(e,n))}}insertNode(e,n){Wt(e,this._hostClassName)}drainQueuedTransitions(e){const n=[];return this._queue.forEach(r=>{const i=r.player;if(i.destroyed)return;const s=r.element,o=this._elementListeners.get(s);o&&o.forEach(a=>{if(a.name==r.triggerName){const l=sy(s,r.triggerName,r.fromState.value,r.toState.value);l._data=e,ry(r.player,a.phase,l,a.callback)}}),i.markedForDestroy?this._engine.afterFlush(()=>{i.destroy()}):n.push(r)}),this._queue=[],n.sort((r,i)=>{const s=r.transition.ast.depCount,o=i.transition.ast.depCount;return 0==s||0==o?s-o:this._engine.driver.containsElement(r.element,i.element)?1:-1})}destroy(e){this.players.forEach(n=>n.destroy()),this._signalRemovalForInnerTriggers(this.hostElement,e)}elementContainsData(e){let n=!1;return this._elementListeners.has(e)&&(n=!0),n=!!this._queue.find(r=>r.element===e)||n,n}}class o3{constructor(e,n,r){this.bodyNode=e,this.driver=n,this._normalizer=r,this.players=[],this.newHostElements=new Map,this.playersByElement=new Map,this.playersByQueriedElement=new Map,this.statesByElement=new Map,this.disabledNodes=new Set,this.totalAnimations=0,this.totalQueuedPlayers=0,this._namespaceLookup={},this._namespaceList=[],this._flushFns=[],this._whenQuietFns=[],this.namespacesByHostElement=new Map,this.collectedEnterElements=[],this.collectedLeaveElements=[],this.onRemovalComplete=(i,s)=>{}}_onRemovalComplete(e,n){this.onRemovalComplete(e,n)}get queuedPlayers(){const e=[];return this._namespaceList.forEach(n=>{n.players.forEach(r=>{r.queued&&e.push(r)})}),e}createNamespace(e,n){const r=new s3(e,n,this);return this.bodyNode&&this.driver.containsElement(this.bodyNode,n)?this._balanceNamespaceList(r,n):(this.newHostElements.set(n,r),this.collectEnterElement(n)),this._namespaceLookup[e]=r}_balanceNamespaceList(e,n){const r=this._namespaceList,i=this.namespacesByHostElement;if(r.length-1>=0){let o=!1,a=this.driver.getParentElement(n);for(;a;){const l=i.get(a);if(l){const c=r.indexOf(l);r.splice(c+1,0,e),o=!0;break}a=this.driver.getParentElement(a)}o||r.unshift(e)}else r.push(e);return i.set(n,e),e}register(e,n){let r=this._namespaceLookup[e];return r||(r=this.createNamespace(e,n)),r}registerTrigger(e,n,r){let i=this._namespaceLookup[e];i&&i.register(n,r)&&this.totalAnimations++}destroy(e,n){if(!e)return;const r=this._fetchNamespace(e);this.afterFlush(()=>{this.namespacesByHostElement.delete(r.hostElement),delete this._namespaceLookup[e];const i=this._namespaceList.indexOf(r);i>=0&&this._namespaceList.splice(i,1)}),this.afterFlushAnimationsDone(()=>r.destroy(n))}_fetchNamespace(e){return this._namespaceLookup[e]}fetchNamespacesByElement(e){const n=new Set,r=this.statesByElement.get(e);if(r)for(let i of r.values())if(i.namespaceId){const s=this._fetchNamespace(i.namespaceId);s&&n.add(s)}return n}trigger(e,n,r,i){if(lf(n)){const s=this._fetchNamespace(e);if(s)return s.trigger(n,r,i),!0}return!1}insertNode(e,n,r,i){if(!lf(n))return;const s=n[Gt];if(s&&s.setForRemoval){s.setForRemoval=!1,s.setForMove=!0;const o=this.collectedLeaveElements.indexOf(n);o>=0&&this.collectedLeaveElements.splice(o,1)}if(e){const o=this._fetchNamespace(e);o&&o.insertNode(n,r)}i&&this.collectEnterElement(n)}collectEnterElement(e){this.collectedEnterElements.push(e)}markElementAsDisabled(e,n){n?this.disabledNodes.has(e)||(this.disabledNodes.add(e),Wt(e,by)):this.disabledNodes.has(e)&&(this.disabledNodes.delete(e),ka(e,by))}removeNode(e,n,r,i){if(lf(n)){const s=e?this._fetchNamespace(e):null;if(s?s.removeNode(n,i):this.markElementAsRemoved(e,n,!1,i),r){const o=this.namespacesByHostElement.get(n);o&&o.id!==e&&o.removeNode(n,i)}}else this._onRemovalComplete(n,i)}markElementAsRemoved(e,n,r,i,s){this.collectedLeaveElements.push(n),n[Gt]={namespaceId:e,setForRemoval:i,hasAnimation:r,removedBeforeQueried:!1,previousTriggersValues:s}}listen(e,n,r,i,s){return lf(n)?this._fetchNamespace(e).listen(n,r,i,s):()=>{}}_buildInstruction(e,n,r,i,s){return e.transition.build(this.driver,e.element,e.fromState.value,e.toState.value,r,i,e.fromState.options,e.toState.options,n,s)}destroyInnerAnimations(e){let n=this.driver.query(e,Qd,!0);n.forEach(r=>this.destroyActiveAnimationsForElement(r)),0!=this.playersByQueriedElement.size&&(n=this.driver.query(e,cy,!0),n.forEach(r=>this.finishActiveQueriedAnimationOnElement(r)))}destroyActiveAnimationsForElement(e){const n=this.playersByElement.get(e);n&&n.forEach(r=>{r.queued?r.markedForDestroy=!0:r.destroy()})}finishActiveQueriedAnimationOnElement(e){const n=this.playersByQueriedElement.get(e);n&&n.forEach(r=>r.finish())}whenRenderingDone(){return new Promise(e=>{if(this.players.length)return Ei(this.players).onDone(()=>e());e()})}processLeaveNode(e){const n=e[Gt];if(n&&n.setForRemoval){if(e[Gt]=QI,n.namespaceId){this.destroyInnerAnimations(e);const r=this._fetchNamespace(n.namespaceId);r&&r.clearElementCache(e)}this._onRemovalComplete(e,n.setForRemoval)}e.classList?.contains(by)&&this.markElementAsDisabled(e,!1),this.driver.query(e,".ng-animate-disabled",!0).forEach(r=>{this.markElementAsDisabled(r,!1)})}flush(e=-1){let n=[];if(this.newHostElements.size&&(this.newHostElements.forEach((r,i)=>this._balanceNamespaceList(r,i)),this.newHostElements.clear()),this.totalAnimations&&this.collectedEnterElements.length)for(let r=0;r<this.collectedEnterElements.length;r++){Wt(this.collectedEnterElements[r],"ng-star-inserted")}if(this._namespaceList.length&&(this.totalQueuedPlayers||this.collectedLeaveElements.length)){const r=[];try{n=this._flushAnimations(r,e)}finally{for(let i=0;i<r.length;i++)r[i]()}}else for(let r=0;r<this.collectedLeaveElements.length;r++){const i=this.collectedLeaveElements[r];this.processLeaveNode(i)}if(this.totalQueuedPlayers=0,this.collectedEnterElements.length=0,this.collectedLeaveElements.length=0,this._flushFns.forEach(r=>r()),this._flushFns=[],this._whenQuietFns.length){const r=this._whenQuietFns;this._whenQuietFns=[],n.length?Ei(n).onDone(()=>{r.forEach(i=>i())}):r.forEach(i=>i())}}reportError(e){throw function oU(t){return new D(3402,!1)}()}_flushAnimations(e,n){const r=new sf,i=[],s=new Map,o=[],a=new Map,l=new Map,c=new Map,u=new Set;this.disabledNodes.forEach(S=>{u.add(S);const N=this.driver.query(S,".ng-animate-queued",!0);for(let O=0;O<N.length;O++)u.add(N[O])});const d=this.bodyNode,f=Array.from(this.statesByElement.keys()),h=JI(f,this.collectedEnterElements),p=new Map;let m=0;h.forEach((S,N)=>{const O=ly+m++;p.set(N,O),S.forEach(W=>Wt(W,O))});const g=[],_=new Set,E=new Set;for(let S=0;S<this.collectedLeaveElements.length;S++){const N=this.collectedLeaveElements[S],O=N[Gt];O&&O.setForRemoval&&(g.push(N),_.add(N),O.hasAnimation?this.driver.query(N,".ng-star-inserted",!0).forEach(W=>_.add(W)):E.add(N))}const y=new Map,I=JI(f,Array.from(_));I.forEach((S,N)=>{const O=Kd+m++;y.set(N,O),S.forEach(W=>Wt(W,O))}),e.push(()=>{h.forEach((S,N)=>{const O=p.get(N);S.forEach(W=>ka(W,O))}),I.forEach((S,N)=>{const O=y.get(N);S.forEach(W=>ka(W,O))}),g.forEach(S=>{this.processLeaveNode(S)})});const B=[],U=[];for(let S=this._namespaceList.length-1;S>=0;S--)this._namespaceList[S].drainQueuedTransitions(n).forEach(O=>{const W=O.player,Le=O.element;if(B.push(W),this.collectedEnterElements.length){const qe=Le[Gt];if(qe&&qe.setForMove){if(qe.previousTriggersValues&&qe.previousTriggersValues.has(O.triggerName)){const Zs=qe.previousTriggersValues.get(O.triggerName),qt=this.statesByElement.get(O.element);if(qt&&qt.has(O.triggerName)){const mf=qt.get(O.triggerName);mf.value=Zs,qt.set(O.triggerName,mf)}}return void W.destroy()}}const Rn=!d||!this.driver.containsElement(d,Le),Tt=y.get(Le),xi=p.get(Le),ve=this._buildInstruction(O,r,xi,Tt,Rn);if(ve.errors&&ve.errors.length)return void U.push(ve);if(Rn)return W.onStart(()=>Ws(Le,ve.fromStyles)),W.onDestroy(()=>Fn(Le,ve.toStyles)),void i.push(W);if(O.isFallbackTransition)return W.onStart(()=>Ws(Le,ve.fromStyles)),W.onDestroy(()=>Fn(Le,ve.toStyles)),void i.push(W);const CA=[];ve.timelines.forEach(qe=>{qe.stretchStartingKeyframe=!0,this.disabledNodes.has(qe.element)||CA.push(qe)}),ve.timelines=CA,r.append(Le,ve.timelines);const X3={instruction:ve,player:W,element:Le};o.push(X3),ve.queriedElements.forEach(qe=>wt(a,qe,[]).push(W)),ve.preStyleProps.forEach((qe,Zs)=>{if(qe.size){let qt=l.get(Zs);qt||l.set(Zs,qt=new Set),qe.forEach((mf,Ry)=>qt.add(Ry))}}),ve.postStyleProps.forEach((qe,Zs)=>{let qt=c.get(Zs);qt||c.set(Zs,qt=new Set),qe.forEach((mf,Ry)=>qt.add(Ry))})});if(U.length){const S=[];U.forEach(N=>{S.push(function aU(t,e){return new D(3505,!1)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(N.triggerName,N.errors))}),B.forEach(N=>N.destroy()),this.reportError(S)}const _e=new Map,It=new Map;o.forEach(S=>{const N=S.element;r.has(N)&&(It.set(N,N),this._beforeAnimationBuild(S.player.namespaceId,S.instruction,_e))}),i.forEach(S=>{const N=S.element;this._getPreviousPlayers(N,!1,S.namespaceId,S.triggerName,null).forEach(W=>{wt(_e,N,[]).push(W),W.destroy()})});const At=g.filter(S=>tA(S,l,c)),St=new Map;XI(St,this.driver,E,c,Hr).forEach(S=>{tA(S,l,c)&&At.push(S)});const Gr=new Map;h.forEach((S,N)=>{XI(Gr,this.driver,new Set(S),l,"!")}),At.forEach(S=>{const N=St.get(S),O=Gr.get(S);St.set(S,new Map([...Array.from(N?.entries()??[]),...Array.from(O?.entries()??[])]))});const hn=[],qa=[],Ka={};o.forEach(S=>{const{element:N,player:O,instruction:W}=S;if(r.has(N)){if(u.has(N))return O.onDestroy(()=>Fn(N,W.toStyles)),O.disabled=!0,O.overrideTotalTime(W.totalTime),void i.push(O);let Le=Ka;if(It.size>1){let Tt=N;const xi=[];for(;Tt=Tt.parentNode;){const ve=It.get(Tt);if(ve){Le=ve;break}xi.push(Tt)}xi.forEach(ve=>It.set(ve,Le))}const Rn=this._buildAnimation(O.namespaceId,W,_e,s,Gr,St);if(O.setRealPlayer(Rn),Le===Ka)hn.push(O);else{const Tt=this.playersByElement.get(Le);Tt&&Tt.length&&(O.parentPlayer=Ei(Tt)),i.push(O)}}else Ws(N,W.fromStyles),O.onDestroy(()=>Fn(N,W.toStyles)),qa.push(O),u.has(N)&&i.push(O)}),qa.forEach(S=>{const N=s.get(S.element);if(N&&N.length){const O=Ei(N);S.setRealPlayer(O)}}),i.forEach(S=>{S.parentPlayer?S.syncPlayerEvents(S.parentPlayer):S.destroy()});for(let S=0;S<g.length;S++){const N=g[S],O=N[Gt];if(ka(N,Kd),O&&O.hasAnimation)continue;let W=[];if(a.size){let Rn=a.get(N);Rn&&Rn.length&&W.push(...Rn);let Tt=this.driver.query(N,cy,!0);for(let xi=0;xi<Tt.length;xi++){let ve=a.get(Tt[xi]);ve&&ve.length&&W.push(...ve)}}const Le=W.filter(Rn=>!Rn.destroyed);Le.length?u3(this,N,Le):this.processLeaveNode(N)}return g.length=0,hn.forEach(S=>{this.players.push(S),S.onDone(()=>{S.destroy();const N=this.players.indexOf(S);this.players.splice(N,1)}),S.play()}),hn}elementContainsData(e,n){let r=!1;const i=n[Gt];return i&&i.setForRemoval&&(r=!0),this.playersByElement.has(n)&&(r=!0),this.playersByQueriedElement.has(n)&&(r=!0),this.statesByElement.has(n)&&(r=!0),this._fetchNamespace(e).elementContainsData(n)||r}afterFlush(e){this._flushFns.push(e)}afterFlushAnimationsDone(e){this._whenQuietFns.push(e)}_getPreviousPlayers(e,n,r,i,s){let o=[];if(n){const a=this.playersByQueriedElement.get(e);a&&(o=a)}else{const a=this.playersByElement.get(e);if(a){const l=!s||s==kc;a.forEach(c=>{c.queued||!l&&c.triggerName!=i||o.push(c)})}}return(r||i)&&(o=o.filter(a=>!(r&&r!=a.namespaceId||i&&i!=a.triggerName))),o}_beforeAnimationBuild(e,n,r){const i=n.triggerName,s=n.element,o=n.isRemovalTransition?void 0:e,a=n.isRemovalTransition?void 0:i;for(const l of n.timelines){const c=l.element,u=c!==s,d=wt(r,c,[]);this._getPreviousPlayers(c,u,o,a,n.toState).forEach(h=>{const p=h.getRealPlayer();p.beforeDestroy&&p.beforeDestroy(),h.destroy(),d.push(h)})}Ws(s,n.fromStyles)}_buildAnimation(e,n,r,i,s,o){const a=n.triggerName,l=n.element,c=[],u=new Set,d=new Set,f=n.timelines.map(p=>{const m=p.element;u.add(m);const g=m[Gt];if(g&&g.removedBeforeQueried)return new xc(p.duration,p.delay);const _=m!==l,E=function d3(t){const e=[];return eA(t,e),e}((r.get(m)||r3).map(_e=>_e.getRealPlayer())).filter(_e=>{const It=_e;return!!It.element&&It.element===m}),y=s.get(m),I=o.get(m),B=AI(this.driver,this._normalizer,0,p.keyframes,y,I),U=this._buildPlayer(p,B,E);if(p.subTimeline&&i&&d.add(m),_){const _e=new Ey(e,a,m);_e.setRealPlayer(U),c.push(_e)}return U});c.forEach(p=>{wt(this.playersByQueriedElement,p.element,[]).push(p),p.onDone(()=>function a3(t,e,n){let r=t.get(e);if(r){if(r.length){const i=r.indexOf(n);r.splice(i,1)}0==r.length&&t.delete(e)}return r}(this.playersByQueriedElement,p.element,p))}),u.forEach(p=>Wt(p,RI));const h=Ei(f);return h.onDestroy(()=>{u.forEach(p=>ka(p,RI)),Fn(l,n.toStyles)}),d.forEach(p=>{wt(i,p,[]).push(h)}),h}_buildPlayer(e,n,r){return n.length>0?this.driver.animate(e.element,n,e.duration,e.delay,e.easing,r):new xc(e.duration,e.delay)}}class Ey{constructor(e,n,r){this.namespaceId=e,this.triggerName=n,this.element=r,this._player=new xc,this._containsRealPlayer=!1,this._queuedCallbacks=new Map,this.destroyed=!1,this.markedForDestroy=!1,this.disabled=!1,this.queued=!0,this.totalTime=0}setRealPlayer(e){this._containsRealPlayer||(this._player=e,this._queuedCallbacks.forEach((n,r)=>{n.forEach(i=>ry(e,r,void 0,i))}),this._queuedCallbacks.clear(),this._containsRealPlayer=!0,this.overrideTotalTime(e.totalTime),this.queued=!1)}getRealPlayer(){return this._player}overrideTotalTime(e){this.totalTime=e}syncPlayerEvents(e){const n=this._player;n.triggerCallback&&e.onStart(()=>n.triggerCallback("start")),e.onDone(()=>this.finish()),e.onDestroy(()=>this.destroy())}_queueEvent(e,n){wt(this._queuedCallbacks,e,[]).push(n)}onDone(e){this.queued&&this._queueEvent("done",e),this._player.onDone(e)}onStart(e){this.queued&&this._queueEvent("start",e),this._player.onStart(e)}onDestroy(e){this.queued&&this._queueEvent("destroy",e),this._player.onDestroy(e)}init(){this._player.init()}hasStarted(){return!this.queued&&this._player.hasStarted()}play(){!this.queued&&this._player.play()}pause(){!this.queued&&this._player.pause()}restart(){!this.queued&&this._player.restart()}finish(){this._player.finish()}destroy(){this.destroyed=!0,this._player.destroy()}reset(){!this.queued&&this._player.reset()}setPosition(e){this.queued||this._player.setPosition(e)}getPosition(){return this.queued?0:this._player.getPosition()}triggerCallback(e){const n=this._player;n.triggerCallback&&n.triggerCallback(e)}}function lf(t){return t&&1===t.nodeType}function ZI(t,e){const n=t.style.display;return t.style.display=e??"none",n}function XI(t,e,n,r,i){const s=[];n.forEach(l=>s.push(ZI(l)));const o=[];r.forEach((l,c)=>{const u=new Map;l.forEach(d=>{const f=e.computeStyle(c,d,i);u.set(d,f),(!f||0==f.length)&&(c[Gt]=i3,o.push(c))}),t.set(c,u)});let a=0;return n.forEach(l=>ZI(l,s[a++])),o}function JI(t,e){const n=new Map;if(t.forEach(a=>n.set(a,[])),0==e.length)return n;const i=new Set(e),s=new Map;function o(a){if(!a)return 1;let l=s.get(a);if(l)return l;const c=a.parentNode;return l=n.has(c)?c:i.has(c)?1:o(c),s.set(a,l),l}return e.forEach(a=>{const l=o(a);1!==l&&n.get(l).push(a)}),n}function Wt(t,e){t.classList?.add(e)}function ka(t,e){t.classList?.remove(e)}function u3(t,e,n){Ei(n).onDone(()=>t.processLeaveNode(e))}function eA(t,e){for(let n=0;n<t.length;n++){const r=t[n];r instanceof MI?eA(r.players,e):e.push(r)}}function tA(t,e,n){const r=n.get(t);if(!r)return!1;let i=e.get(t);return i?r.forEach(s=>i.add(s)):e.set(t,r),n.delete(t),!0}class cf{constructor(e,n,r){this.bodyNode=e,this._driver=n,this._normalizer=r,this._triggerCache={},this.onRemovalComplete=(i,s)=>{},this._transitionEngine=new o3(e,n,r),this._timelineEngine=new XU(e,n,r),this._transitionEngine.onRemovalComplete=(i,s)=>this.onRemovalComplete(i,s)}registerTrigger(e,n,r,i,s){const o=e+"-"+i;let a=this._triggerCache[o];if(!a){const l=[],c=[],u=hy(this._driver,s,l,c);if(l.length)throw function Q$(t,e){return new D(3404,!1)}();c.length,a=function KU(t,e,n){return new YU(t,e,n)}(i,u,this._normalizer),this._triggerCache[o]=a}this._transitionEngine.registerTrigger(n,i,a)}register(e,n){this._transitionEngine.register(e,n)}destroy(e,n){this._transitionEngine.destroy(e,n)}onInsert(e,n,r,i){this._transitionEngine.insertNode(e,n,r,i)}onRemove(e,n,r,i){this._transitionEngine.removeNode(e,n,i||!1,r)}disableAnimations(e,n){this._transitionEngine.markElementAsDisabled(e,n)}process(e,n,r,i){if("@"==r.charAt(0)){const[s,o]=SI(r),a=i;this._timelineEngine.command(s,n,o,a)}else this._transitionEngine.trigger(e,n,r,i)}listen(e,n,r,i,s){if("@"==r.charAt(0)){const[o,a]=SI(r);return this._timelineEngine.listen(o,n,a,s)}return this._transitionEngine.listen(e,n,r,i,s)}flush(e=-1){this._transitionEngine.flush(e)}get players(){return this._transitionEngine.players.concat(this._timelineEngine.players)}whenRenderingDone(){return this._transitionEngine.whenRenderingDone()}}class Ra{constructor(e,n,r){this._element=e,this._startStyles=n,this._endStyles=r,this._state=0;let i=Ra.initialStylesByElement.get(e);i||Ra.initialStylesByElement.set(e,i=new Map),this._initialStyles=i}start(){this._state<1&&(this._startStyles&&Fn(this._element,this._startStyles,this._initialStyles),this._state=1)}finish(){this.start(),this._state<2&&(Fn(this._element,this._initialStyles),this._endStyles&&(Fn(this._element,this._endStyles),this._endStyles=null),this._state=1)}destroy(){this.finish(),this._state<3&&(Ra.initialStylesByElement.delete(this._element),this._startStyles&&(Ws(this._element,this._startStyles),this._endStyles=null),this._endStyles&&(Ws(this._element,this._endStyles),this._endStyles=null),Fn(this._element,this._initialStyles),this._state=3)}}function wy(t){let e=null;return t.forEach((n,r)=>{(function p3(t){return"display"===t||"position"===t})(r)&&(e=e||new Map,e.set(r,n))}),e}Ra.initialStylesByElement=new WeakMap;class nA{constructor(e,n,r,i){this.element=e,this.keyframes=n,this.options=r,this._specialStyles=i,this._onDoneFns=[],this._onStartFns=[],this._onDestroyFns=[],this._initialized=!1,this._finished=!1,this._started=!1,this._destroyed=!1,this._originalOnDoneFns=[],this._originalOnStartFns=[],this.time=0,this.parentPlayer=null,this.currentSnapshot=new Map,this._duration=r.duration,this._delay=r.delay||0,this.time=this._duration+this._delay}_onFinish(){this._finished||(this._finished=!0,this._onDoneFns.forEach(e=>e()),this._onDoneFns=[])}init(){this._buildPlayer(),this._preparePlayerBeforeStart()}_buildPlayer(){if(this._initialized)return;this._initialized=!0;const e=this.keyframes;this.domPlayer=this._triggerWebAnimation(this.element,e,this.options),this._finalKeyframe=e.length?e[e.length-1]:new Map,this.domPlayer.addEventListener("finish",()=>this._onFinish())}_preparePlayerBeforeStart(){this._delay?this._resetDomPlayerState():this.domPlayer.pause()}_convertKeyframesToObject(e){const n=[];return e.forEach(r=>{n.push(Object.fromEntries(r))}),n}_triggerWebAnimation(e,n,r){return e.animate(this._convertKeyframesToObject(n),r)}onStart(e){this._originalOnStartFns.push(e),this._onStartFns.push(e)}onDone(e){this._originalOnDoneFns.push(e),this._onDoneFns.push(e)}onDestroy(e){this._onDestroyFns.push(e)}play(){this._buildPlayer(),this.hasStarted()||(this._onStartFns.forEach(e=>e()),this._onStartFns=[],this._started=!0,this._specialStyles&&this._specialStyles.start()),this.domPlayer.play()}pause(){this.init(),this.domPlayer.pause()}finish(){this.init(),this._specialStyles&&this._specialStyles.finish(),this._onFinish(),this.domPlayer.finish()}reset(){this._resetDomPlayerState(),this._destroyed=!1,this._finished=!1,this._started=!1,this._onStartFns=this._originalOnStartFns,this._onDoneFns=this._originalOnDoneFns}_resetDomPlayerState(){this.domPlayer&&this.domPlayer.cancel()}restart(){this.reset(),this.play()}hasStarted(){return this._started}destroy(){this._destroyed||(this._destroyed=!0,this._resetDomPlayerState(),this._onFinish(),this._specialStyles&&this._specialStyles.destroy(),this._onDestroyFns.forEach(e=>e()),this._onDestroyFns=[])}setPosition(e){void 0===this.domPlayer&&this.init(),this.domPlayer.currentTime=e*this.time}getPosition(){return this.domPlayer.currentTime/this.time}get totalTime(){return this._delay+this._duration}beforeDestroy(){const e=new Map;this.hasStarted()&&this._finalKeyframe.forEach((r,i)=>{"offset"!==i&&e.set(i,this._finished?r:HI(this.element,i))}),this.currentSnapshot=e}triggerCallback(e){const n="start"===e?this._onStartFns:this._onDoneFns;n.forEach(r=>r()),n.length=0}}class m3{validateStyleProperty(e){return!0}validateAnimatableStyleProperty(e){return!0}matchesElement(e,n){return!1}containsElement(e,n){return OI(e,n)}getParentElement(e){return ay(e)}query(e,n,r){return FI(e,n,r)}computeStyle(e,n,r){return window.getComputedStyle(e)[n]}animate(e,n,r,i,s,o=[]){const l={duration:r,delay:i,fill:0==i?"both":"forwards"};s&&(l.easing=s);const c=new Map,u=o.filter(h=>h instanceof nA);(function bU(t,e){return 0===t||0===e})(r,i)&&u.forEach(h=>{h.currentSnapshot.forEach((p,m)=>c.set(m,p))});let d=function gU(t){return t.length?t[0]instanceof Map?t:t.map(e=>PI(e)):[]}(n).map(h=>wi(h));d=function DU(t,e,n){if(n.size&&e.length){let r=e[0],i=[];if(n.forEach((s,o)=>{r.has(o)||i.push(o),r.set(o,s)}),i.length)for(let s=1;s<e.length;s++){let o=e[s];i.forEach(a=>o.set(a,HI(t,a)))}}return e}(e,d,c);const f=function h3(t,e){let n=null,r=null;return Array.isArray(e)&&e.length?(n=wy(e[0]),e.length>1&&(r=wy(e[e.length-1]))):e instanceof Map&&(n=wy(e)),n||r?new Ra(t,n,r):null}(e,d);return new nA(e,d,l,f)}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license Angular v14.2.10
       * (c) 2010-2022 Google LLC. https://angular.io/
       * License: MIT
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class Pa extends DI{constructor(e,n){super(),this._nextAnimationId=0;const r={id:"0",encapsulation:mn.None,styles:[],data:{animation:[]}};this._renderer=e.createRenderer(n.body,r)}build(e){const n=this._nextAnimationId.toString();this._nextAnimationId++;const r=Array.isArray(e)?CI(e):e;return rA(this._renderer,null,n,"register",[r]),new g3(n,this._renderer)}}Pa.\u0275fac=function(e){return new(e||Pa)(b(vl),b(V))},Pa.\u0275prov=w({token:Pa,factory:Pa.\u0275fac});class g3 extends class S${}{constructor(e,n){super(),this._id=e,this._renderer=n}create(e,n){return new y3(this._id,e,n||{},this._renderer)}}class y3{constructor(e,n,r,i){this.id=e,this.element=n,this._renderer=i,this.parentPlayer=null,this._started=!1,this.totalTime=0,this._command("create",r)}_listen(e,n){return this._renderer.listen(this.element,`@@${this.id}:${e}`,n)}_command(e,...n){return rA(this._renderer,this.element,this.id,e,n)}onDone(e){this._listen("done",e)}onStart(e){this._listen("start",e)}onDestroy(e){this._listen("destroy",e)}init(){this._command("init")}hasStarted(){return this._started}play(){this._command("play"),this._started=!0}pause(){this._command("pause")}restart(){this._command("restart")}finish(){this._command("finish")}destroy(){this._command("destroy")}reset(){this._command("reset"),this._started=!1}setPosition(e){this._command("setPosition",e)}getPosition(){return this._renderer.engine.players[+this.id]?.getPosition()??0}}function rA(t,e,n,r,i){return t.setProperty(e,`@@${n}:${r}`,i)}const iA="@.disabled";class La{constructor(e,n,r){this.delegate=e,this.engine=n,this._zone=r,this._currentId=0,this._microtaskId=1,this._animationCallbacksBuffer=[],this._rendererCache=new Map,this._cdRecurDepth=0,this.promise=Promise.resolve(0),n.onRemovalComplete=(i,s)=>{const o=s?.parentNode(i);o&&s.removeChild(o,i)}}createRenderer(e,n){const i=this.delegate.createRenderer(e,n);if(!(e&&n&&n.data&&n.data.animation)){let c=this._rendererCache.get(i);if(!c){const u=()=>this._rendererCache.delete(i);c=new sA("",i,this.engine,u),this._rendererCache.set(i,c)}return c}const s=n.id,o=n.id+"-"+this._currentId;this._currentId++,this.engine.register(o,e);const a=c=>{Array.isArray(c)?c.forEach(a):this.engine.registerTrigger(s,o,e,c.name,c)};return n.data.animation.forEach(a),new _3(this,o,i,this.engine)}begin(){this._cdRecurDepth++,this.delegate.begin&&this.delegate.begin()}_scheduleCountTask(){this.promise.then(()=>{this._microtaskId++})}scheduleListenerCallback(e,n,r){e>=0&&e<this._microtaskId?this._zone.run(()=>n(r)):(0==this._animationCallbacksBuffer.length&&Promise.resolve(null).then(()=>{this._zone.run(()=>{this._animationCallbacksBuffer.forEach(i=>{const[s,o]=i;s(o)}),this._animationCallbacksBuffer=[]})}),this._animationCallbacksBuffer.push([n,r]))}end(){this._cdRecurDepth--,0==this._cdRecurDepth&&this._zone.runOutsideAngular(()=>{this._scheduleCountTask(),this.engine.flush(this._microtaskId)}),this.delegate.end&&this.delegate.end()}whenRenderingDone(){return this.engine.whenRenderingDone()}}La.\u0275fac=function(e){return new(e||La)(b(vl),b(cf),b(re))},La.\u0275prov=w({token:La,factory:La.\u0275fac});class sA{constructor(e,n,r,i){this.namespaceId=e,this.delegate=n,this.engine=r,this._onDestroy=i,this.destroyNode=this.delegate.destroyNode?s=>n.destroyNode(s):null}get data(){return this.delegate.data}destroy(){this.engine.destroy(this.namespaceId,this.delegate),this.delegate.destroy(),this._onDestroy?.()}createElement(e,n){return this.delegate.createElement(e,n)}createComment(e){return this.delegate.createComment(e)}createText(e){return this.delegate.createText(e)}appendChild(e,n){this.delegate.appendChild(e,n),this.engine.onInsert(this.namespaceId,n,e,!1)}insertBefore(e,n,r,i=!0){this.delegate.insertBefore(e,n,r),this.engine.onInsert(this.namespaceId,n,e,i)}removeChild(e,n,r){this.engine.onRemove(this.namespaceId,n,this.delegate,r)}selectRootElement(e,n){return this.delegate.selectRootElement(e,n)}parentNode(e){return this.delegate.parentNode(e)}nextSibling(e){return this.delegate.nextSibling(e)}setAttribute(e,n,r,i){this.delegate.setAttribute(e,n,r,i)}removeAttribute(e,n,r){this.delegate.removeAttribute(e,n,r)}addClass(e,n){this.delegate.addClass(e,n)}removeClass(e,n){this.delegate.removeClass(e,n)}setStyle(e,n,r,i){this.delegate.setStyle(e,n,r,i)}removeStyle(e,n,r){this.delegate.removeStyle(e,n,r)}setProperty(e,n,r){"@"==n.charAt(0)&&n==iA?this.disableAnimations(e,!!r):this.delegate.setProperty(e,n,r)}setValue(e,n){this.delegate.setValue(e,n)}listen(e,n,r){return this.delegate.listen(e,n,r)}disableAnimations(e,n){this.engine.disableAnimations(e,n)}}class _3 extends sA{constructor(e,n,r,i,s){super(n,r,i,s),this.factory=e,this.namespaceId=n}setProperty(e,n,r){"@"==n.charAt(0)?"."==n.charAt(1)&&n==iA?(r=void 0===r||!!r,this.disableAnimations(e,r)):this.engine.process(this.namespaceId,e,n.slice(1),r):this.delegate.setProperty(e,n,r)}listen(e,n,r){if("@"==n.charAt(0)){const i=function v3(t){switch(t){case"body":return document.body;case"document":return document;case"window":return window;default:return t}}(e);let s=n.slice(1),o="";return"@"!=s.charAt(0)&&([s,o]=function b3(t){const e=t.indexOf("."),n=t.substring(0,e),r=t.slice(e+1);return[n,r]}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(s)),this.engine.listen(this.namespaceId,i,s,o,a=>{const l=a._data||-1;this.factory.scheduleListenerCallback(l,r,a)})}return this.delegate.listen(e,n,r)}}class Va extends cf{constructor(e,n,r,i){super(e.body,n,r)}ngOnDestroy(){this.flush()}}Va.\u0275fac=function(e){return new(e||Va)(b(V),b(qd),b(_y),b(Jn))},Va.\u0275prov=w({token:Va,factory:Va.\u0275fac});const oA=[{provide:DI,useClass:Pa},{provide:_y,useFactory:function D3(){return new zU}},{provide:cf,useClass:Va},{provide:vl,useFactory:function C3(t,e,n){return new La(t,e,n)},deps:[mr,cf,re]}],My=[{provide:qd,useFactory:()=>new m3},{provide:zo,useValue:"BrowserAnimations"},...oA],Iy=[{provide:qd,useClass:Gs},{provide:zo,useValue:"NoopAnimations"},...oA];
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class Mi{static withConfig(e){return{ngModule:Mi,providers:e.disableAnimations?Iy:My}}}Mi.\u0275fac=function(e){return new(e||Mi)},Mi.\u0275mod=J({type:Mi,exports:[$t]}),Mi.\u0275inj=q({providers:My,imports:[$t]});class Rc{}function Ay(t,e,n){const r=de(t)||e||n?{next:t,error:e,complete:n}:t;return r?rt((i,s)=>{var o;null===(o=r.subscribe)||void 0===o||o.call(r);let a=!0;i.subscribe(ut(s,l=>{var c;null===(c=r.next)||void 0===c||c.call(r,l),s.next(l)},()=>{var l;a=!1,null===(l=r.complete)||void 0===l||l.call(r),s.complete()},l=>{var c;a=!1,null===(c=r.error)||void 0===c||c.call(r,l),s.error(l)},()=>{var l,c;a&&(null===(l=r.unsubscribe)||void 0===l||l.call(r)),null===(c=r.finalize)||void 0===c||c.call(r)}))}):Js}function aA(t){return rt((e,n)=>{let s,r=null,i=!1;r=e.subscribe(ut(n,void 0,void 0,o=>{s=pn(t(o,aA(t)(e))),r?(r.unsubscribe(),r=null,s.subscribe(n)):i=!0})),i&&(r.unsubscribe(),r=null,s.subscribe(n))})}Rc.\u0275fac=function(e){return new(e||Rc)},Rc.\u0275mod=J({type:Rc,exports:[$t]}),Rc.\u0275inj=q({providers:Iy,imports:[$t]});
/**
       * @license Angular v14.2.10
       * (c) 2010-2022 Google LLC. https://angular.io/
       * License: MIT
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class lA{}class cA{}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class Ur{constructor(e){this.normalizedNames=new Map,this.lazyUpdate=null,e?this.lazyInit="string"==typeof e?()=>{this.headers=new Map,e.split("\n").forEach(n=>{const r=n.indexOf(":");if(r>0){const i=n.slice(0,r),s=i.toLowerCase(),o=n.slice(r+1).trim();this.maybeSetNormalizedName(i,s),this.headers.has(s)?this.headers.get(s).push(o):this.headers.set(s,[o])}})}:()=>{this.headers=new Map,Object.keys(e).forEach(n=>{let r=e[n];const i=n.toLowerCase();"string"==typeof r&&(r=[r]),r.length>0&&(this.headers.set(i,r),this.maybeSetNormalizedName(n,i))})}:this.headers=new Map}has(e){return this.init(),this.headers.has(e.toLowerCase())}get(e){this.init();const n=this.headers.get(e.toLowerCase());return n&&n.length>0?n[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(e){return this.init(),this.headers.get(e.toLowerCase())||null}append(e,n){return this.clone({name:e,value:n,op:"a"})}set(e,n){return this.clone({name:e,value:n,op:"s"})}delete(e,n){return this.clone({name:e,value:n,op:"d"})}maybeSetNormalizedName(e,n){this.normalizedNames.has(n)||this.normalizedNames.set(n,e)}init(){this.lazyInit&&(this.lazyInit instanceof Ur?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(e=>this.applyUpdate(e)),this.lazyUpdate=null))}copyFrom(e){e.init(),Array.from(e.headers.keys()).forEach(n=>{this.headers.set(n,e.headers.get(n)),this.normalizedNames.set(n,e.normalizedNames.get(n))})}clone(e){const n=new Ur;return n.lazyInit=this.lazyInit&&this.lazyInit instanceof Ur?this.lazyInit:this,n.lazyUpdate=(this.lazyUpdate||[]).concat([e]),n}applyUpdate(e){const n=e.name.toLowerCase();switch(e.op){case"a":case"s":let r=e.value;if("string"==typeof r&&(r=[r]),0===r.length)return;this.maybeSetNormalizedName(e.name,n);const i=("a"===e.op?this.headers.get(n):void 0)||[];i.push(...r),this.headers.set(n,i);break;case"d":const s=e.value;if(s){let o=this.headers.get(n);if(!o)return;o=o.filter(a=>-1===s.indexOf(a)),0===o.length?(this.headers.delete(n),this.normalizedNames.delete(n)):this.headers.set(n,o)}else this.headers.delete(n),this.normalizedNames.delete(n)}}forEach(e){this.init(),Array.from(this.normalizedNames.keys()).forEach(n=>e(this.normalizedNames.get(n),this.headers.get(n)))}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class I3{encodeKey(e){return uA(e)}encodeValue(e){return uA(e)}decodeKey(e){return decodeURIComponent(e)}decodeValue(e){return decodeURIComponent(e)}}const S3=/%(\d[a-f0-9])/gi,T3={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function uA(t){return encodeURIComponent(t).replace(S3,(e,n)=>T3[n]??e)}function df(t){return`${t}`}class Ii{constructor(e={}){if(this.updates=null,this.cloneFrom=null,this.encoder=e.encoder||new I3,e.fromString){if(e.fromObject)throw new Error("Cannot specify both fromString and fromObject.");this.map=function A3(t,e){const n=new Map;return t.length>0&&t.replace(/^\?/,"").split("&").forEach(i=>{const s=i.indexOf("="),[o,a]=-1==s?[e.decodeKey(i),""]:[e.decodeKey(i.slice(0,s)),e.decodeValue(i.slice(s+1))],l=n.get(o)||[];l.push(a),n.set(o,l)}),n}(e.fromString,this.encoder)}else e.fromObject?(this.map=new Map,Object.keys(e.fromObject).forEach(n=>{const r=e.fromObject[n],i=Array.isArray(r)?r.map(df):[df(r)];this.map.set(n,i)})):this.map=null}has(e){return this.init(),this.map.has(e)}get(e){this.init();const n=this.map.get(e);return n?n[0]:null}getAll(e){return this.init(),this.map.get(e)||null}keys(){return this.init(),Array.from(this.map.keys())}append(e,n){return this.clone({param:e,value:n,op:"a"})}appendAll(e){const n=[];return Object.keys(e).forEach(r=>{const i=e[r];Array.isArray(i)?i.forEach(s=>{n.push({param:r,value:s,op:"a"})}):n.push({param:r,value:i,op:"a"})}),this.clone(n)}set(e,n){return this.clone({param:e,value:n,op:"s"})}delete(e,n){return this.clone({param:e,value:n,op:"d"})}toString(){return this.init(),this.keys().map(e=>{const n=this.encoder.encodeKey(e);return this.map.get(e).map(r=>n+"="+this.encoder.encodeValue(r)).join("&")}).filter(e=>""!==e).join("&")}clone(e){const n=new Ii({encoder:this.encoder});return n.cloneFrom=this.cloneFrom||this,n.updates=(this.updates||[]).concat(e),n}init(){null===this.map&&(this.map=new Map),null!==this.cloneFrom&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(e=>this.map.set(e,this.cloneFrom.map.get(e))),this.updates.forEach(e=>{switch(e.op){case"a":case"s":const n=("a"===e.op?this.map.get(e.param):void 0)||[];n.push(df(e.value)),this.map.set(e.param,n);break;case"d":if(void 0===e.value){this.map.delete(e.param);break}{let r=this.map.get(e.param)||[];const i=r.indexOf(df(e.value));-1!==i&&r.splice(i,1),r.length>0?this.map.set(e.param,r):this.map.delete(e.param)}}}),this.cloneFrom=this.updates=null)}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */class x3{constructor(){this.map=new Map}set(e,n){return this.map.set(e,n),this}get(e){return this.map.has(e)||this.map.set(e,e.defaultValue()),this.map.get(e)}delete(e){return this.map.delete(e),this}has(e){return this.map.has(e)}keys(){return this.map.keys()}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function dA(t){return typeof ArrayBuffer<"u"&&t instanceof ArrayBuffer}function fA(t){return typeof Blob<"u"&&t instanceof Blob}function hA(t){return typeof FormData<"u"&&t instanceof FormData}class Pc{constructor(e,n,r,i){let s;if(this.url=n,this.body=null,this.reportProgress=!1,this.withCredentials=!1,this.responseType="json",this.method=e.toUpperCase(),function N3(t){switch(t){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}(this.method)||i?(this.body=void 0!==r?r:null,s=i):s=r,s&&(this.reportProgress=!!s.reportProgress,this.withCredentials=!!s.withCredentials,s.responseType&&(this.responseType=s.responseType),s.headers&&(this.headers=s.headers),s.context&&(this.context=s.context),s.params&&(this.params=s.params)),this.headers||(this.headers=new Ur),this.context||(this.context=new x3),this.params){const o=this.params.toString();if(0===o.length)this.urlWithParams=n;else{const a=n.indexOf("?"),l=-1===a?"?":a<n.length-1?"&":"";this.urlWithParams=n+l+o}}else this.params=new Ii,this.urlWithParams=n}serializeBody(){return null===this.body?null:dA(this.body)||fA(this.body)||hA(this.body)||function O3(t){return typeof URLSearchParams<"u"&&t instanceof URLSearchParams}(this.body)||"string"==typeof this.body?this.body:this.body instanceof Ii?this.body.toString():"object"==typeof this.body||"boolean"==typeof this.body||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return null===this.body||hA(this.body)?null:fA(this.body)?this.body.type||null:dA(this.body)?null:"string"==typeof this.body?"text/plain":this.body instanceof Ii?"application/x-www-form-urlencoded;charset=UTF-8":"object"==typeof this.body||"number"==typeof this.body||"boolean"==typeof this.body?"application/json":null}clone(e={}){const n=e.method||this.method,r=e.url||this.url,i=e.responseType||this.responseType,s=void 0!==e.body?e.body:this.body,o=void 0!==e.withCredentials?e.withCredentials:this.withCredentials,a=void 0!==e.reportProgress?e.reportProgress:this.reportProgress;let l=e.headers||this.headers,c=e.params||this.params;const u=e.context??this.context;return void 0!==e.setHeaders&&(l=Object.keys(e.setHeaders).reduce((d,f)=>d.set(f,e.setHeaders[f]),l)),e.setParams&&(c=Object.keys(e.setParams).reduce((d,f)=>d.set(f,e.setParams[f]),c)),new Pc(n,r,s,{params:c,headers:l,context:u,reportProgress:a,responseType:i,withCredentials:o})}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */var Ai;!function(t){t[t.Sent=0]="Sent",t[t.UploadProgress=1]="UploadProgress",t[t.ResponseHeader=2]="ResponseHeader",t[t.DownloadProgress=3]="DownloadProgress",t[t.Response=4]="Response",t[t.User=5]="User"}(Ai||(Ai={}));class Sy{constructor(e,n=200,r="OK"){this.headers=e.headers||new Ur,this.status=void 0!==e.status?e.status:n,this.statusText=e.statusText||r,this.url=e.url||null,this.ok=this.status>=200&&this.status<300}}class Ty extends Sy{constructor(e={}){super(e),this.type=Ai.ResponseHeader}clone(e={}){return new Ty({headers:e.headers||this.headers,status:void 0!==e.status?e.status:this.status,statusText:e.statusText||this.statusText,url:e.url||this.url||void 0})}}class Lc extends Sy{constructor(e={}){super(e),this.type=Ai.Response,this.body=void 0!==e.body?e.body:null}clone(e={}){return new Lc({body:void 0!==e.body?e.body:this.body,headers:e.headers||this.headers,status:void 0!==e.status?e.status:this.status,statusText:e.statusText||this.statusText,url:e.url||this.url||void 0})}}class ff extends Sy{constructor(e){super(e,0,"Unknown Error"),this.name="HttpErrorResponse",this.ok=!1,this.status>=200&&this.status<300?this.message=`Http failure during parsing for ${e.url||"(unknown url)"}`:this.message=`Http failure response for ${e.url||"(unknown url)"}: ${e.status} ${e.statusText}`,this.error=e.error||null}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function xy(t,e){return{body:e,headers:t.headers,context:t.context,observe:t.observe,params:t.params,reportProgress:t.reportProgress,responseType:t.responseType,withCredentials:t.withCredentials}}class Si{constructor(e){this.handler=e}request(e,n,r={}){let i;if(e instanceof Pc)i=e;else{let a,l;a=r.headers instanceof Ur?r.headers:new Ur(r.headers),r.params&&(l=r.params instanceof Ii?r.params:new Ii({fromObject:r.params})),i=new Pc(e,n,void 0!==r.body?r.body:null,{headers:a,context:r.context,params:l,reportProgress:r.reportProgress,responseType:r.responseType||"json",withCredentials:r.withCredentials})}const s=bs(i).pipe(function M3(t,e){return de(e)?Wc(t,e,1):Wc(t,1)}(a=>this.handler.handle(a)));if(e instanceof Pc||"events"===r.observe)return s;const o=s.pipe(Yw(a=>a instanceof Lc));switch(r.observe||"body"){case"body":switch(i.responseType){case"arraybuffer":return o.pipe(it(a=>{if(null!==a.body&&!(a.body instanceof ArrayBuffer))throw new Error("Response is not an ArrayBuffer.");return a.body}));case"blob":return o.pipe(it(a=>{if(null!==a.body&&!(a.body instanceof Blob))throw new Error("Response is not a Blob.");return a.body}));case"text":return o.pipe(it(a=>{if(null!==a.body&&"string"!=typeof a.body)throw new Error("Response is not a string.");return a.body}));default:return o.pipe(it(a=>a.body))}case"response":return o;default:throw new Error(`Unreachable: unhandled observe type ${r.observe}}`)}}delete(e,n={}){return this.request("DELETE",e,n)}get(e,n={}){return this.request("GET",e,n)}head(e,n={}){return this.request("HEAD",e,n)}jsonp(e,n){return this.request("JSONP",e,{params:(new Ii).append(n,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(e,n={}){return this.request("OPTIONS",e,n)}patch(e,n,r={}){return this.request("PATCH",e,xy(r,n))}post(e,n,r={}){return this.request("POST",e,xy(r,n))}put(e,n,r={}){return this.request("PUT",e,xy(r,n))}}Si.\u0275fac=function(e){return new(e||Si)(b(lA))},Si.\u0275prov=w({token:Si,factory:Si.\u0275fac});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class pA{constructor(e,n){this.next=e,this.interceptor=n}handle(e){return this.interceptor.intercept(e,this.next)}}const Ny=new x("HTTP_INTERCEPTORS");class Ba{intercept(e,n){return n.handle(e)}}Ba.\u0275fac=function(e){return new(e||Ba)},Ba.\u0275prov=w({token:Ba,factory:Ba.\u0275fac});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
let Oy,F3=0;class mA{}class Ks{constructor(e,n){this.callbackMap=e,this.document=n,this.resolvedPromise=Promise.resolve()}nextCallback(){return"ng_jsonp_callback_"+F3++}handle(e){if("JSONP"!==e.method)throw new Error("JSONP requests must use JSONP request method.");if("json"!==e.responseType)throw new Error("JSONP requests must use Json response type.");if(e.headers.keys().length>0)throw new Error("JSONP requests do not support headers.");return new ge(n=>{const r=this.nextCallback(),i=e.urlWithParams.replace(/=JSONP_CALLBACK(&|$)/,`=${r}$1`),s=this.document.createElement("script");s.src=i;let o=null,a=!1;this.callbackMap[r]=d=>{delete this.callbackMap[r],o=d,a=!0};const l=()=>{s.parentNode&&s.parentNode.removeChild(s),delete this.callbackMap[r]};return s.addEventListener("load",d=>{this.resolvedPromise.then(()=>{l(),a?(n.next(new Lc({body:o,status:200,statusText:"OK",url:i})),n.complete()):n.error(new ff({url:i,status:0,statusText:"JSONP Error",error:new Error("JSONP injected script did not invoke callback.")}))})}),s.addEventListener("error",d=>{l(),n.error(new ff({error:d,status:0,statusText:"JSONP Error",url:i}))}),this.document.body.appendChild(s),n.next({type:Ai.Sent}),()=>{a||this.removeListeners(s),l()}})}removeListeners(e){Oy||(Oy=this.document.implementation.createHTMLDocument()),Oy.adoptNode(e)}}Ks.\u0275fac=function(e){return new(e||Ks)(b(mA),b(V))},Ks.\u0275prov=w({token:Ks,factory:Ks.\u0275fac});class ja{constructor(e){this.jsonp=e}intercept(e,n){return"JSONP"===e.method?this.jsonp.handle(e):n.handle(e)}}ja.\u0275fac=function(e){return new(e||ja)(b(Ks))},ja.\u0275prov=w({token:ja,factory:ja.\u0275fac});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const V3=/^\)\]\}',?\n/;class Ys{constructor(e){this.xhrFactory=e}handle(e){if("JSONP"===e.method)throw new Error("Attempted to construct Jsonp request without HttpClientJsonpModule installed.");return new ge(n=>{const r=this.xhrFactory.build();if(r.open(e.method,e.urlWithParams),e.withCredentials&&(r.withCredentials=!0),e.headers.forEach((f,h)=>r.setRequestHeader(f,h.join(","))),e.headers.has("Accept")||r.setRequestHeader("Accept","application/json, text/plain, */*"),!e.headers.has("Content-Type")){const f=e.detectContentTypeHeader();null!==f&&r.setRequestHeader("Content-Type",f)}if(e.responseType){const f=e.responseType.toLowerCase();r.responseType="json"!==f?f:"text"}const i=e.serializeBody();let s=null;const o=()=>{if(null!==s)return s;const f=r.statusText||"OK",h=new Ur(r.getAllResponseHeaders()),p=function B3(t){return"responseURL"in t&&t.responseURL?t.responseURL:/^X-Request-URL:/m.test(t.getAllResponseHeaders())?t.getResponseHeader("X-Request-URL"):null}(r)||e.url;return s=new Ty({headers:h,status:r.status,statusText:f,url:p}),s},a=()=>{let{headers:f,status:h,statusText:p,url:m}=o(),g=null;204!==h&&(g=typeof r.response>"u"?r.responseText:r.response),0===h&&(h=g?200:0);let _=h>=200&&h<300;if("json"===e.responseType&&"string"==typeof g){const E=g;g=g.replace(V3,"");try{g=""!==g?JSON.parse(g):null}catch(y){g=E,_&&(_=!1,g={error:y,text:g})}}_?(n.next(new Lc({body:g,headers:f,status:h,statusText:p,url:m||void 0})),n.complete()):n.error(new ff({error:g,headers:f,status:h,statusText:p,url:m||void 0}))},l=f=>{const{url:h}=o(),p=new ff({error:f,status:r.status||0,statusText:r.statusText||"Unknown Error",url:h||void 0});n.error(p)};let c=!1;const u=f=>{c||(n.next(o()),c=!0);let h={type:Ai.DownloadProgress,loaded:f.loaded};f.lengthComputable&&(h.total=f.total),"text"===e.responseType&&!!r.responseText&&(h.partialText=r.responseText),n.next(h)},d=f=>{let h={type:Ai.UploadProgress,loaded:f.loaded};f.lengthComputable&&(h.total=f.total),n.next(h)};return r.addEventListener("load",a),r.addEventListener("error",l),r.addEventListener("timeout",l),r.addEventListener("abort",l),e.reportProgress&&(r.addEventListener("progress",u),null!==i&&r.upload&&r.upload.addEventListener("progress",d)),r.send(i),n.next({type:Ai.Sent}),()=>{r.removeEventListener("error",l),r.removeEventListener("abort",l),r.removeEventListener("load",a),r.removeEventListener("timeout",l),e.reportProgress&&(r.removeEventListener("progress",u),null!==i&&r.upload&&r.upload.removeEventListener("progress",d)),r.readyState!==r.DONE&&r.abort()}})}}Ys.\u0275fac=function(e){return new(e||Ys)(b(bE))},Ys.\u0275prov=w({token:Ys,factory:Ys.\u0275fac});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
const Fy=new x("XSRF_COOKIE_NAME"),ky=new x("XSRF_HEADER_NAME");class gA{}class Ha{constructor(e,n,r){this.doc=e,this.platform=n,this.cookieName=r,this.lastCookieString="",this.lastToken=null,this.parseCount=0}getToken(){if("server"===this.platform)return null;const e=this.doc.cookie||"";return e!==this.lastCookieString&&(this.parseCount++,this.lastToken=dE(e,this.cookieName),this.lastCookieString=e),this.lastToken}}Ha.\u0275fac=function(e){return new(e||Ha)(b(V),b(Xu),b(Fy))},Ha.\u0275prov=w({token:Ha,factory:Ha.\u0275fac});class Ti{constructor(e,n){this.tokenService=e,this.headerName=n}intercept(e,n){const r=e.url.toLowerCase();if("GET"===e.method||"HEAD"===e.method||r.startsWith("http://")||r.startsWith("https://"))return n.handle(e);const i=this.tokenService.getToken();return null!==i&&!e.headers.has(this.headerName)&&(e=e.clone({headers:e.headers.set(this.headerName,i)})),n.handle(e)}}Ti.\u0275fac=function(e){return new(e||Ti)(b(gA),b(ky))},Ti.\u0275prov=w({token:Ti,factory:Ti.\u0275fac});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class $a{constructor(e,n){this.backend=e,this.injector=n,this.chain=null}handle(e){if(null===this.chain){const n=this.injector.get(Ny,[]);this.chain=n.reduceRight((r,i)=>new pA(r,i),this.backend)}return this.chain.handle(e)}}$a.\u0275fac=function(e){return new(e||$a)(b(cA),b(Ve))},$a.\u0275prov=w({token:$a,factory:$a.\u0275fac});class kn{static disable(){return{ngModule:kn,providers:[{provide:Ti,useClass:Ba}]}}static withOptions(e={}){return{ngModule:kn,providers:[e.cookieName?{provide:Fy,useValue:e.cookieName}:[],e.headerName?{provide:ky,useValue:e.headerName}:[]]}}}kn.\u0275fac=function(e){return new(e||kn)},kn.\u0275mod=J({type:kn}),kn.\u0275inj=q({providers:[Ti,{provide:Ny,useExisting:Ti,multi:!0},{provide:gA,useClass:Ha},{provide:Fy,useValue:"XSRF-TOKEN"},{provide:ky,useValue:"X-XSRF-TOKEN"}]});class Vc{}Vc.\u0275fac=function(e){return new(e||Vc)},Vc.\u0275mod=J({type:Vc,imports:[kn]}),Vc.\u0275inj=q({providers:[Si,{provide:lA,useClass:$a},Ys,{provide:cA,useExisting:Ys}],imports:[kn.withOptions({cookieName:"XSRF-TOKEN",headerName:"X-XSRF-TOKEN"})]});class Bc{}Bc.\u0275fac=function(e){return new(e||Bc)},Bc.\u0275mod=J({type:Bc}),Bc.\u0275inj=q({providers:[Ks,{provide:mA,useFactory:function j3(){return"object"==typeof window?window:{}}},{provide:Ny,useClass:ja,multi:!0}]});let hf;function jc(t){return function $3(){if(void 0===hf&&(hf=null,typeof window<"u")){const t=window;void 0!==t.trustedTypes&&(hf=t.trustedTypes.createPolicy("angular#components",{createHTML:e=>e}))}return hf}()?.createHTML(t)||t}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */function yA(t){return Error(`Unable to find icon with the name "${t}"`)}function _A(t){return Error(`The URL provided to MatIconRegistry was not trusted as a resource URL via Angular's DomSanitizer. Attempted URL was "${t}".`)}function vA(t){return Error(`The literal provided to MatIconRegistry was not trusted as safe HTML by Angular's DomSanitizer. Attempted literal was "${t}".`)}class Qs{constructor(e,n,r){this.url=e,this.svgText=n,this.options=r}}class zr{constructor(e,n,r,i){this._httpClient=e,this._sanitizer=n,this._errorHandler=i,this._svgIconConfigs=new Map,this._iconSetConfigs=new Map,this._cachedIconsByUrl=new Map,this._inProgressUrlFetches=new Map,this._fontCssClassesByAlias=new Map,this._resolvers=[],this._defaultFontSetClass=["material-icons","mat-ligature-font"],this._document=r}addSvgIcon(e,n,r){return this.addSvgIconInNamespace("",e,n,r)}addSvgIconLiteral(e,n,r){return this.addSvgIconLiteralInNamespace("",e,n,r)}addSvgIconInNamespace(e,n,r,i){return this._addSvgIconConfig(e,n,new Qs(r,null,i))}addSvgIconResolver(e){return this._resolvers.push(e),this}addSvgIconLiteralInNamespace(e,n,r,i){const s=this._sanitizer.sanitize(ke.HTML,r);if(!s)throw vA(r);const o=jc(s);return this._addSvgIconConfig(e,n,new Qs("",o,i))}addSvgIconSet(e,n){return this.addSvgIconSetInNamespace("",e,n)}addSvgIconSetLiteral(e,n){return this.addSvgIconSetLiteralInNamespace("",e,n)}addSvgIconSetInNamespace(e,n,r){return this._addSvgIconSetConfig(e,new Qs(n,null,r))}addSvgIconSetLiteralInNamespace(e,n,r){const i=this._sanitizer.sanitize(ke.HTML,n);if(!i)throw vA(n);const s=jc(i);return this._addSvgIconSetConfig(e,new Qs("",s,r))}registerFontClassAlias(e,n=e){return this._fontCssClassesByAlias.set(e,n),this}classNameForFontAlias(e){return this._fontCssClassesByAlias.get(e)||e}setDefaultFontSetClass(...e){return this._defaultFontSetClass=e,this}getDefaultFontSetClass(){return this._defaultFontSetClass}getSvgIconFromUrl(e){const n=this._sanitizer.sanitize(ke.RESOURCE_URL,e);if(!n)throw _A(e);const r=this._cachedIconsByUrl.get(n);return r?bs(pf(r)):this._loadSvgIconFromConfig(new Qs(e,null)).pipe(Ay(i=>this._cachedIconsByUrl.set(n,i)),it(i=>pf(i)))}getNamedSvgIcon(e,n=""){const r=bA(n,e);let i=this._svgIconConfigs.get(r);if(i)return this._getSvgFromConfig(i);if(i=this._getIconConfigFromResolvers(n,e),i)return this._svgIconConfigs.set(r,i),this._getSvgFromConfig(i);const s=this._iconSetConfigs.get(n);return s?this._getSvgFromIconSetConfigs(e,s):
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
function E3(t,e){const n=de(t)?t:()=>t,r=i=>i.error(n());return new ge(e?i=>e.schedule(r,0,i):r)}(yA(r))}ngOnDestroy(){this._resolvers=[],this._svgIconConfigs.clear(),this._iconSetConfigs.clear(),this._cachedIconsByUrl.clear()}_getSvgFromConfig(e){return e.svgText?bs(pf(this._svgElementFromConfig(e))):this._loadSvgIconFromConfig(e).pipe(it(n=>pf(n)))}_getSvgFromIconSetConfigs(e,n){const r=this._extractIconWithNameFromAnySet(e,n);if(r)return bs(r);return TM(n.filter(s=>!s.svgText).map(s=>this._loadSvgIconSetFromConfig(s).pipe(aA(o=>{const l=`Loading icon set URL: ${this._sanitizer.sanitize(ke.RESOURCE_URL,s.url)} failed: ${o.message}`;return this._errorHandler.handleError(new Error(l)),bs(null)})))).pipe(it(()=>{const s=this._extractIconWithNameFromAnySet(e,n);if(!s)throw yA(e);return s}))}_extractIconWithNameFromAnySet(e,n){for(let r=n.length-1;r>=0;r--){const i=n[r];if(i.svgText&&i.svgText.toString().indexOf(e)>-1){const s=this._svgElementFromConfig(i),o=this._extractSvgIconFromSet(s,e,i.options);if(o)return o}}return null}_loadSvgIconFromConfig(e){return this._fetchIcon(e).pipe(Ay(n=>e.svgText=n),it(()=>this._svgElementFromConfig(e)))}_loadSvgIconSetFromConfig(e){return e.svgText?bs(null):this._fetchIcon(e).pipe(Ay(n=>e.svgText=n))}_extractSvgIconFromSet(e,n,r){const i=e.querySelector(`[id="${n}"]`);if(!i)return null;const s=i.cloneNode(!0);if(s.removeAttribute("id"),"svg"===s.nodeName.toLowerCase())return this._setSvgAttributes(s,r);if("symbol"===s.nodeName.toLowerCase())return this._setSvgAttributes(this._toSvgElement(s),r);const o=this._svgElementFromString(jc("<svg></svg>"));return o.appendChild(s),this._setSvgAttributes(o,r)}_svgElementFromString(e){const n=this._document.createElement("DIV");n.innerHTML=e;const r=n.querySelector("svg");if(!r)throw Error("<svg> tag not found");return r}_toSvgElement(e){const n=this._svgElementFromString(jc("<svg></svg>")),r=e.attributes;for(let i=0;i<r.length;i++){const{name:s,value:o}=r[i];"id"!==s&&n.setAttribute(s,o)}for(let i=0;i<e.childNodes.length;i++)e.childNodes[i].nodeType===this._document.ELEMENT_NODE&&n.appendChild(e.childNodes[i].cloneNode(!0));return n}_setSvgAttributes(e,n){return e.setAttribute("fit",""),e.setAttribute("height","100%"),e.setAttribute("width","100%"),e.setAttribute("preserveAspectRatio","xMidYMid meet"),e.setAttribute("focusable","false"),n&&n.viewBox&&e.setAttribute("viewBox",n.viewBox),e}_fetchIcon(e){const{url:n,options:r}=e,i=r?.withCredentials??!1;if(!this._httpClient)throw function U3(){return Error("Could not find HttpClient provider for use with Angular Material icons. Please include the HttpClientModule from @angular/common/http in your app imports.")}();if(null==n)throw Error(`Cannot fetch icon from URL "${n}".`);const s=this._sanitizer.sanitize(ke.RESOURCE_URL,n);if(!s)throw _A(n);const o=this._inProgressUrlFetches.get(s);if(o)return o;const a=this._httpClient.get(s,{responseType:"text",withCredentials:i}).pipe(it(l=>jc(l)),function w3(t){return rt((e,n)=>{try{e.subscribe(n)}finally{n.add(t)}})}(()=>this._inProgressUrlFetches.delete(s)),a0());return this._inProgressUrlFetches.set(s,a),a}_addSvgIconConfig(e,n,r){return this._svgIconConfigs.set(bA(e,n),r),this}_addSvgIconSetConfig(e,n){const r=this._iconSetConfigs.get(e);return r?r.push(n):this._iconSetConfigs.set(e,[n]),this}_svgElementFromConfig(e){if(!e.svgElement){const n=this._svgElementFromString(e.svgText);this._setSvgAttributes(n,e.options),e.svgElement=n}return e.svgElement}_getIconConfigFromResolvers(e,n){for(let r=0;r<this._resolvers.length;r++){const i=this._resolvers[r](n,e);if(i)return G3(i)?new Qs(i.url,null,i.options):new Qs(i,null)}}}zr.\u0275fac=function(e){return new(e||zr)(b(Si,8),b(ui),b(V,8),b(Gn))},zr.\u0275prov=w({token:zr,factory:zr.\u0275fac,providedIn:"root"});new Xr,new yo,new Xr,new Xr;function pf(t){return t.cloneNode(!0)}function bA(t,e){return t+":"+e}function G3(t){return!(!t.url||!t.options)}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */const W3=CM(class{constructor(t){this._elementRef=t}}),q3=new x("MAT_ICON_DEFAULT_OPTIONS"),K3=new x("mat-icon-location",{providedIn:"root",factory:function Y3(){const t=Fe(V),e=t?t.location:null;return{getPathname:()=>e?e.pathname+e.search:""}}});const DA=["clip-path","color-profile","src","cursor","fill","filter","marker","marker-start","marker-mid","marker-end","mask","stroke"],Q3=DA.map(t=>`[${t}]`).join(", "),Z3=/^url\(['"]?#(.*?)['"]?\)$/;class Ua extends W3{constructor(e,n,r,i,s,o){super(e),this._iconRegistry=n,this._location=i,this._errorHandler=s,this._inline=!1,this._previousFontSetClass=[],this._currentIconFetch=ct.EMPTY,o&&(o.color&&(this.color=this.defaultColor=o.color),o.fontSet&&(this.fontSet=o.fontSet)),r||e.nativeElement.setAttribute("aria-hidden","true")}get inline(){return this._inline}set inline(e){this._inline=br(e)}get svgIcon(){return this._svgIcon}set svgIcon(e){e!==this._svgIcon&&(e?this._updateSvgIcon(e):this._svgIcon&&this._clearSvgElement(),this._svgIcon=e)}get fontSet(){return this._fontSet}set fontSet(e){const n=this._cleanupFontValue(e);n!==this._fontSet&&(this._fontSet=n,this._updateFontIconClasses())}get fontIcon(){return this._fontIcon}set fontIcon(e){const n=this._cleanupFontValue(e);n!==this._fontIcon&&(this._fontIcon=n,this._updateFontIconClasses())}_splitIconName(e){if(!e)return["",""];const n=e.split(":");switch(n.length){case 1:return["",n[0]];case 2:return n;default:throw Error(`Invalid icon name: "${e}"`)}}ngOnInit(){this._updateFontIconClasses()}ngAfterViewChecked(){const e=this._elementsWithExternalReferences;if(e&&e.size){const n=this._location.getPathname();n!==this._previousPath&&(this._previousPath=n,this._prependPathToReferences(n))}}ngOnDestroy(){this._currentIconFetch.unsubscribe(),this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear()}_usingFontIcon(){return!this.svgIcon}_setSvgElement(e){this._clearSvgElement();const n=this._location.getPathname();this._previousPath=n,this._cacheChildrenWithExternalReferences(e),this._prependPathToReferences(n),this._elementRef.nativeElement.appendChild(e)}_clearSvgElement(){const e=this._elementRef.nativeElement;let n=e.childNodes.length;for(this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear();n--;){const r=e.childNodes[n];(1!==r.nodeType||"svg"===r.nodeName.toLowerCase())&&r.remove()}}_updateFontIconClasses(){if(!this._usingFontIcon())return;const e=this._elementRef.nativeElement,n=(this.fontSet?this._iconRegistry.classNameForFontAlias(this.fontSet).split(/ +/):this._iconRegistry.getDefaultFontSetClass()).filter(r=>r.length>0);this._previousFontSetClass.forEach(r=>e.classList.remove(r)),n.forEach(r=>e.classList.add(r)),this._previousFontSetClass=n,this.fontIcon!==this._previousFontIconClass&&!n.includes("mat-ligature-font")&&(this._previousFontIconClass&&e.classList.remove(this._previousFontIconClass),this.fontIcon&&e.classList.add(this.fontIcon),this._previousFontIconClass=this.fontIcon)}_cleanupFontValue(e){return"string"==typeof e?e.trim().split(" ")[0]:e}_prependPathToReferences(e){const n=this._elementsWithExternalReferences;n&&n.forEach((r,i)=>{r.forEach(s=>{i.setAttribute(s.name,`url('${e}#${s.value}')`)})})}_cacheChildrenWithExternalReferences(e){const n=e.querySelectorAll(Q3),r=this._elementsWithExternalReferences=this._elementsWithExternalReferences||new Map;for(let i=0;i<n.length;i++)DA.forEach(s=>{const o=n[i],a=o.getAttribute(s),l=a?a.match(Z3):null;if(l){let c=r.get(o);c||(c=[],r.set(o,c)),c.push({name:s,value:l[1]})}})}_updateSvgIcon(e){if(this._svgNamespace=null,this._svgName=null,this._currentIconFetch.unsubscribe(),e){const[n,r]=this._splitIconName(e);n&&(this._svgNamespace=n),r&&(this._svgName=r),this._currentIconFetch=this._iconRegistry.getNamedSvgIcon(r,n).pipe(kg(1)).subscribe(i=>this._setSvgElement(i),i=>{const s=`Error retrieving icon ${n}:${r}! ${i.message}`;this._errorHandler.handleError(new Error(s))})}}}Ua.\u0275fac=function(e){return new(e||Ua)(v(Ce),v(zr),ll("aria-hidden"),v(K3),v(Gn),v(q3,8))},Ua.\u0275cmp=Nt({type:Ua,selectors:[["mat-icon"]],hostAttrs:["role","img",1,"mat-icon","notranslate"],hostVars:8,hostBindings:function(e,n){2&e&&(at("data-mat-icon-type",n._usingFontIcon()?"font":"svg")("data-mat-icon-name",n._svgName||n.fontIcon)("data-mat-icon-namespace",n._svgNamespace||n.fontSet)("fontIcon",n._usingFontIcon()?n.fontIcon:null),Lt("mat-icon-inline",n.inline)("mat-icon-no-color","primary"!==n.color&&"accent"!==n.color&&"warn"!==n.color))},inputs:{color:"color",inline:"inline",svgIcon:"svgIcon",fontSet:"fontSet",fontIcon:"fontIcon"},exportAs:["matIcon"],features:[G],ngContentSelectors:["*"],decls:1,vars:0,template:function(e,n){1&e&&(Wi(),Dt(0))},styles:[".mat-icon{-webkit-user-select:none;user-select:none;background-repeat:no-repeat;display:inline-block;fill:currentColor;height:24px;width:24px;overflow:hidden}.mat-icon.mat-icon-inline{font-size:inherit;height:inherit;line-height:inherit;width:inherit}.mat-icon.mat-ligature-font[fontIcon]::before{content:attr(fontIcon)}[dir=rtl] .mat-icon-rtl-mirror{transform:scale(-1, 1)}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon{display:block}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .mat-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .mat-icon{margin:auto}"],encapsulation:2,changeDetection:0});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class za{}za.\u0275fac=function(e){return new(e||za)},za.\u0275mod=J({type:za,declarations:[Ua],imports:[ne],exports:[Ua,ne]}),za.\u0275inj=q({imports:[ne,ne]});
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
class Ga{}Ga.\u0275fac=function(e){return new(e||Ga)},Ga.\u0275mod=J({type:Ga,bootstrap:[Tc]}),Ga.\u0275inj=q({imports:[$t,Mi,Fa,Sa,za]}),function SR(){if($C)throw new Error("Cannot enable prod mode after platform setup.");HC=!1}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */(),OL().bootstrapModule(Ga).catch(t=>console.error(t))}},de=>{var Xs;Xs=794,de(de.s=Xs)}]);