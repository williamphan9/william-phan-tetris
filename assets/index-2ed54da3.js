var De=Object.defineProperty;var Ge=(e,t,n)=>t in e?De(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var C=(e,t,n)=>(Ge(e,typeof t!="symbol"?t+"":t,n),n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const u of i.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();var j=function(e,t){return j=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,r){n.__proto__=r}||function(n,r){for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(n[o]=r[o])},j(e,t)};function G(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");j(e,t);function n(){this.constructor=e}e.prototype=t===null?Object.create(t):(n.prototype=t.prototype,new n)}function We(e,t,n,r){function o(i){return i instanceof n?i:new n(function(u){u(i)})}return new(n||(n=Promise))(function(i,u){function s(l){try{c(r.next(l))}catch(m){u(m)}}function a(l){try{c(r.throw(l))}catch(m){u(m)}}function c(l){l.done?i(l.value):o(l.value).then(s,a)}c((r=r.apply(e,t||[])).next())})}function le(e,t){var n={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},r,o,i,u;return u={next:s(0),throw:s(1),return:s(2)},typeof Symbol=="function"&&(u[Symbol.iterator]=function(){return this}),u;function s(c){return function(l){return a([c,l])}}function a(c){if(r)throw new TypeError("Generator is already executing.");for(;u&&(u=0,c[0]&&(n=0)),n;)try{if(r=1,o&&(i=c[0]&2?o.return:c[0]?o.throw||((i=o.return)&&i.call(o),0):o.next)&&!(i=i.call(o,c[1])).done)return i;switch(o=0,i&&(c=[c[0]&2,i.value]),c[0]){case 0:case 1:i=c;break;case 4:return n.label++,{value:c[1],done:!1};case 5:n.label++,o=c[1],c=[0];continue;case 7:c=n.ops.pop(),n.trys.pop();continue;default:if(i=n.trys,!(i=i.length>0&&i[i.length-1])&&(c[0]===6||c[0]===2)){n=0;continue}if(c[0]===3&&(!i||c[1]>i[0]&&c[1]<i[3])){n.label=c[1];break}if(c[0]===6&&n.label<i[1]){n.label=i[1],i=c;break}if(i&&n.label<i[2]){n.label=i[2],n.ops.push(c);break}i[2]&&n.ops.pop(),n.trys.pop();continue}c=t.call(e,n)}catch(l){c=[6,l],o=0}finally{r=i=0}if(c[0]&5)throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}}function M(e){var t=typeof Symbol=="function"&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&typeof e.length=="number")return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function _(e,t){var n=typeof Symbol=="function"&&e[Symbol.iterator];if(!n)return e;var r=n.call(e),o,i=[],u;try{for(;(t===void 0||t-- >0)&&!(o=r.next()).done;)i.push(o.value)}catch(s){u={error:s}}finally{try{o&&!o.done&&(n=r.return)&&n.call(r)}finally{if(u)throw u.error}}return i}function O(e,t,n){if(n||arguments.length===2)for(var r=0,o=t.length,i;r<o;r++)(i||!(r in t))&&(i||(i=Array.prototype.slice.call(t,0,r)),i[r]=t[r]);return e.concat(i||Array.prototype.slice.call(t))}function L(e){return this instanceof L?(this.v=e,this):new L(e)}function Me(e,t,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r=n.apply(e,t||[]),o,i=[];return o={},u("next"),u("throw"),u("return"),o[Symbol.asyncIterator]=function(){return this},o;function u(h){r[h]&&(o[h]=function(y){return new Promise(function(I,v){i.push([h,y,I,v])>1||s(h,y)})})}function s(h,y){try{a(r[h](y))}catch(I){m(i[0][3],I)}}function a(h){h.value instanceof L?Promise.resolve(h.value.v).then(c,l):m(i[0][2],h)}function c(h){s("next",h)}function l(h){s("throw",h)}function m(h,y){h(y),i.shift(),i.length&&s(i[0][0],i[0][1])}}function Ve(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t=e[Symbol.asyncIterator],n;return t?t.call(e):(e=typeof M=="function"?M(e):e[Symbol.iterator](),n={},r("next"),r("throw"),r("return"),n[Symbol.asyncIterator]=function(){return this},n);function r(i){n[i]=e[i]&&function(u){return new Promise(function(s,a){u=e[i](u),o(s,a,u.done,u.value)})}}function o(i,u,s,a){Promise.resolve(a).then(function(c){i({value:c,done:s})},u)}}function d(e){return typeof e=="function"}function $e(e){var t=function(r){Error.call(r),r.stack=new Error().stack},n=e(t);return n.prototype=Object.create(Error.prototype),n.prototype.constructor=n,n}var F=$e(function(e){return function(n){e(this),this.message=n?n.length+` errors occurred during unsubscription:
`+n.map(function(r,o){return o+1+") "+r.toString()}).join(`
  `):"",this.name="UnsubscriptionError",this.errors=n}});function B(e,t){if(e){var n=e.indexOf(t);0<=n&&e.splice(n,1)}}var U=function(){function e(t){this.initialTeardown=t,this.closed=!1,this._parentage=null,this._finalizers=null}return e.prototype.unsubscribe=function(){var t,n,r,o,i;if(!this.closed){this.closed=!0;var u=this._parentage;if(u)if(this._parentage=null,Array.isArray(u))try{for(var s=M(u),a=s.next();!a.done;a=s.next()){var c=a.value;c.remove(this)}}catch(v){t={error:v}}finally{try{a&&!a.done&&(n=s.return)&&n.call(s)}finally{if(t)throw t.error}}else u.remove(this);var l=this.initialTeardown;if(d(l))try{l()}catch(v){i=v instanceof F?v.errors:[v]}var m=this._finalizers;if(m){this._finalizers=null;try{for(var h=M(m),y=h.next();!y.done;y=h.next()){var I=y.value;try{re(I)}catch(v){i=i??[],v instanceof F?i=O(O([],_(i)),_(v.errors)):i.push(v)}}}catch(v){r={error:v}}finally{try{y&&!y.done&&(o=h.return)&&o.call(h)}finally{if(r)throw r.error}}}if(i)throw new F(i)}},e.prototype.add=function(t){var n;if(t&&t!==this)if(this.closed)re(t);else{if(t instanceof e){if(t.closed||t._hasParent(this))return;t._addParent(this)}(this._finalizers=(n=this._finalizers)!==null&&n!==void 0?n:[]).push(t)}},e.prototype._hasParent=function(t){var n=this._parentage;return n===t||Array.isArray(n)&&n.includes(t)},e.prototype._addParent=function(t){var n=this._parentage;this._parentage=Array.isArray(n)?(n.push(t),n):n?[n,t]:t},e.prototype._removeParent=function(t){var n=this._parentage;n===t?this._parentage=null:Array.isArray(n)&&B(n,t)},e.prototype.remove=function(t){var n=this._finalizers;n&&B(n,t),t instanceof e&&t._removeParent(this)},e.EMPTY=function(){var t=new e;return t.closed=!0,t}(),e}();U.EMPTY;function fe(e){return e instanceof U||e&&"closed"in e&&d(e.remove)&&d(e.add)&&d(e.unsubscribe)}function re(e){d(e)?e():e.unsubscribe()}var he={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1},J={setTimeout:function(e,t){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];var o=J.delegate;return o!=null&&o.setTimeout?o.setTimeout.apply(o,O([e,t],_(n))):setTimeout.apply(void 0,O([e,t],_(n)))},clearTimeout:function(e){var t=J.delegate;return((t==null?void 0:t.clearTimeout)||clearTimeout)(e)},delegate:void 0};function de(e){J.setTimeout(function(){throw e})}function oe(){}function Ye(e){e()}var z=function(e){G(t,e);function t(n){var r=e.call(this)||this;return r.isStopped=!1,n?(r.destination=n,fe(n)&&n.add(r)):r.destination=qe,r}return t.create=function(n,r,o){return new Q(n,r,o)},t.prototype.next=function(n){this.isStopped||this._next(n)},t.prototype.error=function(n){this.isStopped||(this.isStopped=!0,this._error(n))},t.prototype.complete=function(){this.isStopped||(this.isStopped=!0,this._complete())},t.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,e.prototype.unsubscribe.call(this),this.destination=null)},t.prototype._next=function(n){this.destination.next(n)},t.prototype._error=function(n){try{this.destination.error(n)}finally{this.unsubscribe()}},t.prototype._complete=function(){try{this.destination.complete()}finally{this.unsubscribe()}},t}(U),ke=Function.prototype.bind;function K(e,t){return ke.call(e,t)}var Xe=function(){function e(t){this.partialObserver=t}return e.prototype.next=function(t){var n=this.partialObserver;if(n.next)try{n.next(t)}catch(r){$(r)}},e.prototype.error=function(t){var n=this.partialObserver;if(n.error)try{n.error(t)}catch(r){$(r)}else $(t)},e.prototype.complete=function(){var t=this.partialObserver;if(t.complete)try{t.complete()}catch(n){$(n)}},e}(),Q=function(e){G(t,e);function t(n,r,o){var i=e.call(this)||this,u;if(d(n)||!n)u={next:n??void 0,error:r??void 0,complete:o??void 0};else{var s;i&&he.useDeprecatedNextContext?(s=Object.create(n),s.unsubscribe=function(){return i.unsubscribe()},u={next:n.next&&K(n.next,s),error:n.error&&K(n.error,s),complete:n.complete&&K(n.complete,s)}):u=n}return i.destination=new Xe(u),i}return t}(z);function $(e){de(e)}function Ue(e){throw e}var qe={closed:!0,next:oe,error:Ue,complete:oe},ee=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}();function pe(e){return e}function Fe(e){return e.length===0?pe:e.length===1?e[0]:function(n){return e.reduce(function(r,o){return o(r)},n)}}var b=function(){function e(t){t&&(this._subscribe=t)}return e.prototype.lift=function(t){var n=new e;return n.source=this,n.operator=t,n},e.prototype.subscribe=function(t,n,r){var o=this,i=Ne(t)?t:new Q(t,n,r);return Ye(function(){var u=o,s=u.operator,a=u.source;i.add(s?s.call(i,a):a?o._subscribe(i):o._trySubscribe(i))}),i},e.prototype._trySubscribe=function(t){try{return this._subscribe(t)}catch(n){t.error(n)}},e.prototype.forEach=function(t,n){var r=this;return n=ie(n),new n(function(o,i){var u=new Q({next:function(s){try{t(s)}catch(a){i(a),u.unsubscribe()}},error:i,complete:o});r.subscribe(u)})},e.prototype._subscribe=function(t){var n;return(n=this.source)===null||n===void 0?void 0:n.subscribe(t)},e.prototype[ee]=function(){return this},e.prototype.pipe=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];return Fe(t)(this)},e.prototype.toPromise=function(t){var n=this;return t=ie(t),new t(function(r,o){var i;n.subscribe(function(u){return i=u},function(u){return o(u)},function(){return r(i)})})},e.create=function(t){return new e(t)},e}();function ie(e){var t;return(t=e??he.Promise)!==null&&t!==void 0?t:Promise}function Ke(e){return e&&d(e.next)&&d(e.error)&&d(e.complete)}function Ne(e){return e&&e instanceof z||Ke(e)&&fe(e)}function je(e){return d(e==null?void 0:e.lift)}function W(e){return function(t){if(je(t))return t.lift(function(n){try{return e(n,this)}catch(r){this.error(r)}});throw new TypeError("Unable to lift unknown Observable type")}}function D(e,t,n,r,o){return new Be(e,t,n,r,o)}var Be=function(e){G(t,e);function t(n,r,o,i,u,s){var a=e.call(this,n)||this;return a.onFinalize=u,a.shouldUnsubscribe=s,a._next=r?function(c){try{r(c)}catch(l){n.error(l)}}:e.prototype._next,a._error=i?function(c){try{i(c)}catch(l){n.error(l)}finally{this.unsubscribe()}}:e.prototype._error,a._complete=o?function(){try{o()}catch(c){n.error(c)}finally{this.unsubscribe()}}:e.prototype._complete,a}return t.prototype.unsubscribe=function(){var n;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){var r=this.closed;e.prototype.unsubscribe.call(this),!r&&((n=this.onFinalize)===null||n===void 0||n.call(this))}},t}(z),ve={now:function(){return(ve.delegate||Date).now()},delegate:void 0},Je=function(e){G(t,e);function t(n,r){return e.call(this)||this}return t.prototype.schedule=function(n,r){return this},t}(U),k={setInterval:function(e,t){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];var o=k.delegate;return o!=null&&o.setInterval?o.setInterval.apply(o,O([e,t],_(n))):setInterval.apply(void 0,O([e,t],_(n)))},clearInterval:function(e){var t=k.delegate;return((t==null?void 0:t.clearInterval)||clearInterval)(e)},delegate:void 0},Qe=function(e){G(t,e);function t(n,r){var o=e.call(this,n,r)||this;return o.scheduler=n,o.work=r,o.pending=!1,o}return t.prototype.schedule=function(n,r){var o;if(r===void 0&&(r=0),this.closed)return this;this.state=n;var i=this.id,u=this.scheduler;return i!=null&&(this.id=this.recycleAsyncId(u,i,r)),this.pending=!0,this.delay=r,this.id=(o=this.id)!==null&&o!==void 0?o:this.requestAsyncId(u,this.id,r),this},t.prototype.requestAsyncId=function(n,r,o){return o===void 0&&(o=0),k.setInterval(n.flush.bind(n,this),o)},t.prototype.recycleAsyncId=function(n,r,o){if(o===void 0&&(o=0),o!=null&&this.delay===o&&this.pending===!1)return r;r!=null&&k.clearInterval(r)},t.prototype.execute=function(n,r){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;var o=this._execute(n,r);if(o)return o;this.pending===!1&&this.id!=null&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))},t.prototype._execute=function(n,r){var o=!1,i;try{this.work(n)}catch(u){o=!0,i=u||new Error("Scheduled action threw falsy error")}if(o)return this.unsubscribe(),i},t.prototype.unsubscribe=function(){if(!this.closed){var n=this,r=n.id,o=n.scheduler,i=o.actions;this.work=this.state=this.scheduler=null,this.pending=!1,B(i,this),r!=null&&(this.id=this.recycleAsyncId(o,r,null)),this.delay=null,e.prototype.unsubscribe.call(this)}},t}(Je),ue=function(){function e(t,n){n===void 0&&(n=e.now),this.schedulerActionCtor=t,this.now=n}return e.prototype.schedule=function(t,n,r){return n===void 0&&(n=0),new this.schedulerActionCtor(this,t).schedule(r,n)},e.now=ve.now,e}(),Ze=function(e){G(t,e);function t(n,r){r===void 0&&(r=ue.now);var o=e.call(this,n,r)||this;return o.actions=[],o._active=!1,o}return t.prototype.flush=function(n){var r=this.actions;if(this._active){r.push(n);return}var o;this._active=!0;do if(o=n.execute(n.state,n.delay))break;while(n=r.shift());if(this._active=!1,o){for(;n=r.shift();)n.unsubscribe();throw o}},t}(ue),ye=new Ze(Qe),ze=ye,et=new b(function(e){return e.complete()});function me(e){return e&&d(e.schedule)}function Te(e){return e[e.length-1]}function tt(e){return me(Te(e))?e.pop():void 0}function nt(e,t){return typeof Te(e)=="number"?e.pop():t}var te=function(e){return e&&typeof e.length=="number"&&typeof e!="function"};function we(e){return d(e==null?void 0:e.then)}function be(e){return d(e[ee])}function Ie(e){return Symbol.asyncIterator&&d(e==null?void 0:e[Symbol.asyncIterator])}function Se(e){return new TypeError("You provided "+(e!==null&&typeof e=="object"?"an invalid object":"'"+e+"'")+" where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.")}function rt(){return typeof Symbol!="function"||!Symbol.iterator?"@@iterator":Symbol.iterator}var ge=rt();function Ee(e){return d(e==null?void 0:e[ge])}function Ae(e){return Me(this,arguments,function(){var n,r,o,i;return le(this,function(u){switch(u.label){case 0:n=e.getReader(),u.label=1;case 1:u.trys.push([1,,9,10]),u.label=2;case 2:return[4,L(n.read())];case 3:return r=u.sent(),o=r.value,i=r.done,i?[4,L(void 0)]:[3,5];case 4:return[2,u.sent()];case 5:return[4,L(o)];case 6:return[4,u.sent()];case 7:return u.sent(),[3,2];case 8:return[3,10];case 9:return n.releaseLock(),[7];case 10:return[2]}})})}function xe(e){return d(e==null?void 0:e.getReader)}function P(e){if(e instanceof b)return e;if(e!=null){if(be(e))return ot(e);if(te(e))return it(e);if(we(e))return ut(e);if(Ie(e))return _e(e);if(Ee(e))return ct(e);if(xe(e))return st(e)}throw Se(e)}function ot(e){return new b(function(t){var n=e[ee]();if(d(n.subscribe))return n.subscribe(t);throw new TypeError("Provided object does not correctly implement Symbol.observable")})}function it(e){return new b(function(t){for(var n=0;n<e.length&&!t.closed;n++)t.next(e[n]);t.complete()})}function ut(e){return new b(function(t){e.then(function(n){t.closed||(t.next(n),t.complete())},function(n){return t.error(n)}).then(null,de)})}function ct(e){return new b(function(t){var n,r;try{for(var o=M(e),i=o.next();!i.done;i=o.next()){var u=i.value;if(t.next(u),t.closed)return}}catch(s){n={error:s}}finally{try{i&&!i.done&&(r=o.return)&&r.call(o)}finally{if(n)throw n.error}}t.complete()})}function _e(e){return new b(function(t){at(e,t).catch(function(n){return t.error(n)})})}function st(e){return _e(Ae(e))}function at(e,t){var n,r,o,i;return We(this,void 0,void 0,function(){var u,s;return le(this,function(a){switch(a.label){case 0:a.trys.push([0,5,6,11]),n=Ve(e),a.label=1;case 1:return[4,n.next()];case 2:if(r=a.sent(),!!r.done)return[3,4];if(u=r.value,t.next(u),t.closed)return[2];a.label=3;case 3:return[3,1];case 4:return[3,11];case 5:return s=a.sent(),o={error:s},[3,11];case 6:return a.trys.push([6,,9,10]),r&&!r.done&&(i=n.return)?[4,i.call(n)]:[3,8];case 7:a.sent(),a.label=8;case 8:return[3,10];case 9:if(o)throw o.error;return[7];case 10:return[7];case 11:return t.complete(),[2]}})})}function x(e,t,n,r,o){r===void 0&&(r=0),o===void 0&&(o=!1);var i=t.schedule(function(){n(),o?e.add(this.schedule(null,r)):this.unsubscribe()},r);if(e.add(i),!o)return i}function He(e,t){return t===void 0&&(t=0),W(function(n,r){n.subscribe(D(r,function(o){return x(r,e,function(){return r.next(o)},t)},function(){return x(r,e,function(){return r.complete()},t)},function(o){return x(r,e,function(){return r.error(o)},t)}))})}function Re(e,t){return t===void 0&&(t=0),W(function(n,r){r.add(e.schedule(function(){return n.subscribe(r)},t))})}function lt(e,t){return P(e).pipe(Re(t),He(t))}function ft(e,t){return P(e).pipe(Re(t),He(t))}function ht(e,t){return new b(function(n){var r=0;return t.schedule(function(){r===e.length?n.complete():(n.next(e[r++]),n.closed||this.schedule())})})}function dt(e,t){return new b(function(n){var r;return x(n,t,function(){r=e[ge](),x(n,t,function(){var o,i,u;try{o=r.next(),i=o.value,u=o.done}catch(s){n.error(s);return}u?n.complete():n.next(i)},0,!0)}),function(){return d(r==null?void 0:r.return)&&r.return()}})}function Oe(e,t){if(!e)throw new Error("Iterable cannot be null");return new b(function(n){x(n,t,function(){var r=e[Symbol.asyncIterator]();x(n,t,function(){r.next().then(function(o){o.done?n.complete():n.next(o.value)})},0,!0)})})}function pt(e,t){return Oe(Ae(e),t)}function vt(e,t){if(e!=null){if(be(e))return lt(e,t);if(te(e))return ht(e,t);if(we(e))return ft(e,t);if(Ie(e))return Oe(e,t);if(Ee(e))return dt(e,t);if(xe(e))return pt(e,t)}throw Se(e)}function yt(e,t){return t?vt(e,t):P(e)}function mt(e){return e instanceof Date&&!isNaN(e)}function E(e,t){return W(function(n,r){var o=0;n.subscribe(D(r,function(i){r.next(e.call(t,i,o++))}))})}var Tt=Array.isArray;function wt(e,t){return Tt(t)?e.apply(void 0,O([],_(t))):e(t)}function bt(e){return E(function(t){return wt(e,t)})}function It(e,t,n,r,o,i,u,s){var a=[],c=0,l=0,m=!1,h=function(){m&&!a.length&&!c&&t.complete()},y=function(v){return c<r?I(v):a.push(v)},I=function(v){i&&t.next(v),c++;var V=!1;P(n(v,l++)).subscribe(D(t,function(H){o==null||o(H),i?y(H):t.next(H)},function(){V=!0},void 0,function(){if(V)try{c--;for(var H=function(){var f=a.shift();u?x(t,u,function(){return I(f)}):I(f)};a.length&&c<r;)H();h()}catch(f){t.error(f)}}))};return e.subscribe(D(t,y,function(){m=!0,h()})),function(){s==null||s()}}function ne(e,t,n){return n===void 0&&(n=1/0),d(t)?ne(function(r,o){return E(function(i,u){return t(r,i,o,u)})(P(e(r,o)))},n):(typeof t=="number"&&(n=t),W(function(r,o){return It(r,o,e,n)}))}function St(e){return e===void 0&&(e=1/0),ne(pe,e)}var gt=["addListener","removeListener"],Et=["addEventListener","removeEventListener"],At=["on","off"];function Z(e,t,n,r){if(d(n)&&(r=n,n=void 0),r)return Z(e,t,n).pipe(bt(r));var o=_(Ht(e)?Et.map(function(s){return function(a){return e[s](t,a,n)}}):xt(e)?gt.map(ce(e,t)):_t(e)?At.map(ce(e,t)):[],2),i=o[0],u=o[1];if(!i&&te(e))return ne(function(s){return Z(s,t,n)})(P(e));if(!i)throw new TypeError("Invalid event target");return new b(function(s){var a=function(){for(var c=[],l=0;l<arguments.length;l++)c[l]=arguments[l];return s.next(1<c.length?c:c[0])};return i(a),function(){return u(a)}})}function ce(e,t){return function(n){return function(r){return e[n](t,r)}}}function xt(e){return d(e.addListener)&&d(e.removeListener)}function _t(e){return d(e.on)&&d(e.off)}function Ht(e){return d(e.addEventListener)&&d(e.removeEventListener)}function Rt(e,t,n){e===void 0&&(e=0),n===void 0&&(n=ze);var r=-1;return t!=null&&(me(t)?n=t:r=t),new b(function(o){var i=mt(e)?+e-n.now():e;i<0&&(i=0);var u=0;return n.schedule(function(){o.closed||(o.next(u++),0<=r?this.schedule(void 0,r):o.complete())},i)})}function Ot(e,t){return e===void 0&&(e=0),t===void 0&&(t=ye),e<0&&(e=0),Rt(e,e,t)}function se(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var n=tt(e),r=nt(e,1/0),o=e;return o.length?o.length===1?P(o[0]):St(r)(yt(o,n)):et}function Pt(e,t){return W(function(n,r){var o=0;n.subscribe(D(r,function(i){return e.call(t,i,o++)&&r.next(i)}))})}function Ct(e,t,n,r,o){return function(i,u){var s=n,a=t,c=0;i.subscribe(D(u,function(l){var m=c++;a=s?e(a,l,m):(s=!0,l),r&&u.next(a)},o&&function(){s&&u.next(a),u.complete()}))}}function Lt(e,t){return W(Ct(e,t,arguments.length>=2,!0))}const p={TICK_RATE_MS:500,GRID_WIDTH:10,GRID_HEIGHT:20,PREVIEW_X:2.5,PREVIEW_Y:1,HOLD_X:2.5,HOLD_Y:1.5,START_X:4,START_Y:0,MULTIPLIER:10},Dt={shapes:[[[1,1],[1,1]]],position:{x:p.START_X,y:p.START_Y},color:"yellow",rotation:0},Gt={shapes:[[[0,1,0],[1,1,1],[0,0,0]],[[0,1,0],[0,1,1],[0,1,0]],[[0,0,0],[1,1,1],[0,1,0]],[[0,1,0],[1,1,0],[0,1,0]]],position:{x:p.START_X,y:p.START_Y},color:"purple",rotation:0},Wt={shapes:[[[1,1,1,1],[0,0,0,0],[0,0,0,0],[0,0,0,0]],[[0,0,0,1],[0,0,0,1],[0,0,0,1],[0,0,0,1]],[[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,1,1,1]],[[1,0,0,0],[1,0,0,0],[1,0,0,0],[1,0,0,0]]],position:{x:p.START_X,y:p.START_Y},color:"cyan",rotation:0},Mt={shapes:[[[0,1,1],[1,1,0],[0,0,0]],[[0,1,0],[0,1,1],[0,0,1]],[[0,0,0],[0,1,1],[1,1,0]],[[1,0,0],[1,1,0],[0,1,0]]],position:{x:p.START_X,y:p.START_Y},color:"green",rotation:0},Vt={shapes:[[[1,1,0],[0,1,1],[0,0,0]],[[0,0,1],[0,1,1],[0,1,0]],[[0,0,0],[1,1,0],[0,1,1]],[[0,1,0],[1,1,0],[1,0,0]]],position:{x:p.START_X,y:p.START_Y},color:"red",rotation:0},$t={shapes:[[[1,0,0],[1,1,1],[0,0,0]],[[0,1,1],[0,1,0],[0,1,0]],[[0,0,0],[1,1,1],[0,0,1]],[[0,1,0],[0,1,0],[1,1,0]]],position:{x:p.START_X,y:p.START_Y},color:"orange",rotation:0},Yt={shapes:[[[0,0,1],[1,1,1],[0,0,0]],[[0,1,0],[0,1,0],[0,1,1]],[[0,0,0],[1,1,1],[1,0,0]],[[1,1,0],[0,1,0],[0,1,0]]],position:{x:p.START_X,y:p.START_Y},color:"blue",rotation:0},w={CANVAS_WIDTH:200,CANVAS_HEIGHT:400,PREVIEW_WIDTH:160,PREVIEW_HEIGHT:80},T={WIDTH:w.CANVAS_WIDTH/p.GRID_WIDTH,HEIGHT:w.CANVAS_HEIGHT/p.GRID_HEIGHT},A=[Dt,Mt,$t,Vt,Yt,Wt,Gt],R=class{};let S=R;C(S,"m",2147483648),C(S,"a",1103515245),C(S,"c",12345),C(S,"hash",t=>(R.a*t+R.c)%R.m),C(S,"randomInt",(t,n)=>{const o=R.hash(Date.now())/(R.m-1);return Math.floor(t+o*(n-t+1))});var g=(e=>(e[e.LEFT=0]="LEFT",e[e.RIGHT=1]="RIGHT",e[e.DOWN=2]="DOWN",e[e.ROTATE=3]="ROTATE",e))(g||{});const kt=(e,t)=>{const n=o=>Array(o).fill(null);return((o,i)=>Array(i).fill(null).map(()=>n(o)))(e,t)},Xt=(e,t)=>e.map((n,r)=>n.map((o,i)=>{const u=r-t.position.y,s=i-t.position.x;return u>=0&&u<t.shapes[t.rotation].length&&s>=0&&s<t.shapes[t.rotation][0].length&&t.shapes[t.rotation][u][s]===1?t.color:o})),Ut=e=>{const t=e.filter(o=>!o.every(i=>i!==null)),n=new Array(e[0].length).fill(null);return{newGrid:Array(e.length-t.length).fill(n).concat(t),rowsCleared:e.length-t.length}},qt=e=>e[0].some(t=>t!==null),Ft=(e,t)=>{if(!t)return t;const n=[40,100,300,1200];return(e+1)*n[t-1]},X=e=>{if(q(e,2)){const{newGrid:t,rowsCleared:n}=Ut(Xt(e.grid,e.currentTetromino)),r=e.rowsCleared+n,o=1+Math.floor(r/3);return{...e,currentTetromino:e.nextTetromino,nextTetromino:A[S.randomInt(0,A.length-1)],grid:t,gameEnd:qt(t),score:e.score+Ft(e.level,n),speedCount:0,speedMultiplier:p.MULTIPLIER-o,level:o,rowsCleared:r,usedHold:!1}}return{...e,currentTetromino:{...e.currentTetromino,position:{x:e.currentTetromino.position.x,y:e.currentTetromino.position.y+1}},speedCount:0}},Pe={currentTetromino:A[S.randomInt(0,A.length-1)],nextTetromino:A[S.randomInt(0,A.length-1)],heldElement:null,grid:kt(w.CANVAS_WIDTH/T.WIDTH,w.CANVAS_HEIGHT/T.HEIGHT),score:0,level:1,highScore:0,gameEnd:!1,speedMultiplier:10,speedCount:0,rowsCleared:0,usedHold:!1};class Kt{apply(t){return t.gameEnd?{...Pe,highScore:t.score>t.highScore?t.score:t.highScore}:t.speedCount>=t.speedMultiplier?X(t):{...t,speedCount:t.speedCount+1}}}class Nt{apply(t){return X(t)}}class ae{constructor(t){this.direction=t}apply(t){if(q(t,this.direction))return t;const n={x:t.currentTetromino.position.x+(this.direction===g.RIGHT?1:-1),y:t.currentTetromino.position.y};return{...t,currentTetromino:{...t.currentTetromino,position:n}}}}class jt{apply(t){const n=t.currentTetromino.rotation,r=n+1<t.currentTetromino.shapes.length?n+1:0,o={...t,currentTetromino:{...t.currentTetromino,rotation:r}};return q(o,g.ROTATE)?t:o}}class Bt{apply(t){return q(t,g.DOWN)?X(t):this.apply(X(t))}}class Jt{apply(t){return t.usedHold?t:t.heldElement?{...t,currentTetromino:t.heldElement,heldElement:t.currentTetromino,usedHold:!0}:{...t,currentTetromino:t.nextTetromino,nextTetromino:A[S.randomInt(0,A.length-1)],heldElement:t.currentTetromino,usedHold:!0}}}const q=(e,t)=>{const n=e.currentTetromino.rotation,r=e.currentTetromino.shapes[n],o=e.currentTetromino.position;switch(t){case g.DOWN:return r.some((i,u)=>i.some((s,a)=>{if(s){const c=o.y+u+1;return c*T.HEIGHT>=w.CANVAS_HEIGHT||e.grid[c][o.x+a]}return!1}));case g.LEFT:return r.some((i,u)=>i.some((s,a)=>{if(s){const c=o.x+a-1;return c<0||e.grid[o.y+u][c]}return!1}));case g.RIGHT:return r.some((i,u)=>i.some((s,a)=>{if(s){const c=o.x+a+1;return c>=w.CANVAS_WIDTH/T.WIDTH||e.grid[o.y+u][c]}return!1}));case g.ROTATE:return r.some((i,u)=>i.some((s,a)=>{if(s){const c=o.y+u,l=o.x+a;return c<0||c>=w.CANVAS_HEIGHT/T.HEIGHT||l<0||l>=w.CANVAS_WIDTH/T.WIDTH||e.grid[c][l]}return!1}))}},Qt=(e,t)=>t.apply(e),Zt=e=>{e.setAttribute("visibility","visible"),e.parentNode.appendChild(e)},zt=e=>e.setAttribute("visibility","hidden"),Ce=(e,t,n={})=>{const r=document.createElementNS(e,t);return Object.entries(n).forEach(([o,i])=>r.setAttribute(o,i)),r},N=(e,t,n,r)=>{e.shapes[e.rotation].forEach((o,i)=>{o.forEach((u,s)=>{if(u===1){const a=Ce(t.namespaceURI,"rect",{x:`${(n+s)*T.WIDTH}`,y:`${(r+i)*T.HEIGHT}`,width:`${T.WIDTH}`,height:`${T.HEIGHT}`,fill:e.color});t.appendChild(a)}})})},Y=(e,t)=>{e.lastChild?(e.removeChild(e.lastChild),Y(e,t)):e.appendChild(t)},en=(e,t)=>{e.forEach((n,r)=>{n.forEach((o,i)=>{if(o){const u=Ce(t.namespaceURI,"rect",{x:`${i*T.WIDTH}`,y:`${r*T.HEIGHT}`,width:`${T.WIDTH}`,height:`${T.HEIGHT}`,fill:o});t.appendChild(u)}})})};function tn(){const e=document.querySelector("#svgCanvas"),t=document.querySelector("#svgPreview"),n=document.querySelector("#gameOver"),r=document.querySelector("#svgHold");document.querySelector("#main");const o=document.getElementById("scoreText"),i=document.getElementById("levelText"),u=document.getElementById("highScoreText");if(!o||!i||!u)return;e.setAttribute("height",`${w.CANVAS_HEIGHT}`),e.setAttribute("width",`${w.CANVAS_WIDTH}`),t.setAttribute("height",`${w.PREVIEW_HEIGHT}`),t.setAttribute("width",`${w.PREVIEW_WIDTH}`),document.querySelector("#levelText"),document.querySelector("#scoreText"),document.querySelector("#highScoreText");const s=Z(document,"keypress"),a=f=>s.pipe(Pt(({code:Le})=>Le===f)),c=a("KeyA").pipe(E(f=>new ae(g.LEFT))),l=a("KeyD").pipe(E(f=>new ae(g.RIGHT))),m=a("KeyS").pipe(E(f=>new Nt)),h=a("KeyW").pipe(E(f=>new jt)),y=a("Space").pipe(E(f=>new Bt)),I=a("KeyC").pipe(E(f=>new Jt)),v=se(c,l,m,h,y,I),V=Ot(p.TICK_RATE_MS/10).pipe(E(f=>new Kt)),H=f=>{Y(t,n),Y(r,n),Y(e,n),o.innerHTML=String(f.score),i.innerHTML=String(f.level),u.innerHTML=String(f.highScore),N(f.currentTetromino,e,f.currentTetromino.position.x,f.currentTetromino.position.y),N(f.nextTetromino,t,p.PREVIEW_X,p.PREVIEW_Y),f.heldElement&&N(f.heldElement,r,p.HOLD_X,p.HOLD_Y),en(f.grid,e)};se(V,v).pipe(Lt(Qt,Pe)).subscribe(f=>{H(f),f.gameEnd?Zt(n):zt(n)})}typeof window<"u"&&(window.onload=()=>{tn()});
