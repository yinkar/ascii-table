function B(){}function N(t){return t()}function I(){return Object.create(null)}function w(t){t.forEach(N)}function G(t){return typeof t=="function"}function ot(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}function K(t){return Object.keys(t).length===0}function it(t,n){t.appendChild(n)}function at(t,n,e){t.insertBefore(n,e||null)}function D(t){t.parentNode.removeChild(t)}function st(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function ct(t){return document.createElement(t)}function q(t){return document.createTextNode(t)}function ut(){return q(" ")}function ft(){return q("")}function lt(t,n,e,o){return t.addEventListener(n,e,o),()=>t.removeEventListener(n,e,o)}function dt(t,n,e){e==null?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function F(t){return Array.from(t.childNodes)}function ht(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function vt(t,n,e){t.classList[e?"add":"remove"](n)}let U;function y(t){U=t}const m=[],R=[],E=[],W=[],H=Promise.resolve();let A=!1;function J(){A||(A=!0,H.then(z))}function O(t){E.push(t)}function pt(t){W.push(t)}const k=new Set;let b=0;function z(){const t=U;do{for(;b<m.length;){const n=m[b];b++,y(n),Q(n.$$)}for(y(null),m.length=0,b=0;R.length;)R.pop()();for(let n=0;n<E.length;n+=1){const e=E[n];k.has(e)||(k.add(e),e())}E.length=0}while(m.length);for(;W.length;)W.pop()();A=!1,k.clear(),y(t)}function Q(t){if(t.fragment!==null){t.update(),w(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(O)}}const S=new Set;let p;function gt(){p={r:0,c:[],p}}function mt(){p.r||w(p.c),p=p.p}function V(t,n){t&&t.i&&(S.delete(t),t.i(n))}function yt(t,n,e,o){if(t&&t.o){if(S.has(t))return;S.add(t),p.c.push(()=>{S.delete(t),o&&(e&&t.d(1),o())}),t.o(n)}}function _t(t,n,e){const o=t.$$.props[n];o!==void 0&&(t.$$.bound[o]=e,e(t.$$.ctx[o]))}function wt(t){t&&t.c()}function X(t,n,e,o){const{fragment:u,on_mount:v,on_destroy:f,after_update:l}=t.$$;u&&u.m(n,e),o||O(()=>{const c=v.map(N).filter(G);f?f.push(...c):w(c),t.$$.on_mount=[]}),l.forEach(O)}function Y(t,n){const e=t.$$;e.fragment!==null&&(w(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function Z(t,n){t.$$.dirty[0]===-1&&(m.push(t),J(),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function bt(t,n,e,o,u,v,f,l=[-1]){const c=U;y(t);const r=t.$$={fragment:null,ctx:null,props:v,update:B,not_equal:u,bound:I(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(c?c.$$.context:[])),callbacks:I(),dirty:l,skip_bound:!1,root:n.target||c.$$.root};f&&f(r.root);let i=!1;if(r.ctx=e?e(t,n.props||{},(a,s,...d)=>{const h=d.length?d[0]:s;return r.ctx&&u(r.ctx[a],r.ctx[a]=h)&&(!r.skip_bound&&r.bound[a]&&r.bound[a](h),i&&Z(t,a)),s}):[],r.update(),i=!0,w(r.before_update),r.fragment=o?o(r.ctx):!1,n.target){if(n.hydrate){const a=F(n.target);r.fragment&&r.fragment.l(a),a.forEach(D)}else r.fragment&&r.fragment.c();n.intro&&V(t.$$.fragment),X(t,n.target,n.anchor,n.customElement),z()}y(c)}class $t{$destroy(){Y(this,1),this.$destroy=B}$on(n,e){const o=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return o.push(e),()=>{const u=o.indexOf(e);u!==-1&&o.splice(u,1)}}$set(n){this.$$set&&!K(n)&&(this.$$.skip_bound=!0,this.$$set(n),this.$$.skip_bound=!1)}}try{self["workbox:window:6.4.1"]&&_()}catch{}function T(t,n){return new Promise(function(e){var o=new MessageChannel;o.port1.onmessage=function(u){e(u.data)},t.postMessage(n,[o.port2])})}function tt(t,n){for(var e=0;e<n.length;e++){var o=n[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function C(t,n){(n==null||n>t.length)&&(n=t.length);for(var e=0,o=new Array(n);e<n;e++)o[e]=t[e];return o}function nt(t,n){var e;if(typeof Symbol=="undefined"||t[Symbol.iterator]==null){if(Array.isArray(t)||(e=function(u,v){if(u){if(typeof u=="string")return C(u,v);var f=Object.prototype.toString.call(u).slice(8,-1);return f==="Object"&&u.constructor&&(f=u.constructor.name),f==="Map"||f==="Set"?Array.from(u):f==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(f)?C(u,v):void 0}}(t))||n&&t&&typeof t.length=="number"){e&&(t=e);var o=0;return function(){return o>=t.length?{done:!0}:{done:!1,value:t[o++]}}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}return(e=t[Symbol.iterator]()).next.bind(e)}try{self["workbox:core:6.4.1"]&&_()}catch{}var j=function(){var t=this;this.promise=new Promise(function(n,e){t.resolve=n,t.reject=e})};function L(t,n){var e=location.href;return new URL(t,e).href===new URL(n,e).href}var g=function(t,n){this.type=t,Object.assign(this,n)};function $(t,n,e){return e?n?n(t):t:(t&&t.then||(t=Promise.resolve(t)),n?t.then(n):t)}function et(){}var rt={type:"SKIP_WAITING"};function M(t,n){if(!n)return t&&t.then?t.then(et):Promise.resolve()}var Et=function(t){var n,e;function o(l,c){var r,i;return c===void 0&&(c={}),(r=t.call(this)||this).nn={},r.tn=0,r.rn=new j,r.en=new j,r.on=new j,r.un=0,r.an=new Set,r.cn=function(){var a=r.fn,s=a.installing;r.tn>0||!L(s.scriptURL,r.sn.toString())||performance.now()>r.un+6e4?(r.vn=s,a.removeEventListener("updatefound",r.cn)):(r.hn=s,r.an.add(s),r.rn.resolve(s)),++r.tn,s.addEventListener("statechange",r.ln)},r.ln=function(a){var s=r.fn,d=a.target,h=d.state,x=d===r.vn,P={sw:d,isExternal:x,originalEvent:a};!x&&r.mn&&(P.isUpdate=!0),r.dispatchEvent(new g(h,P)),h==="installed"?r.wn=self.setTimeout(function(){h==="installed"&&s.waiting===d&&r.dispatchEvent(new g("waiting",P))},200):h==="activating"&&(clearTimeout(r.wn),x||r.en.resolve(d))},r.dn=function(a){var s=r.hn,d=s!==navigator.serviceWorker.controller;r.dispatchEvent(new g("controlling",{isExternal:d,originalEvent:a,sw:s,isUpdate:r.mn})),d||r.on.resolve(s)},r.gn=(i=function(a){var s=a.data,d=a.ports,h=a.source;return $(r.getSW(),function(){r.an.has(h)&&r.dispatchEvent(new g("message",{data:s,originalEvent:a,ports:d,sw:h}))})},function(){for(var a=[],s=0;s<arguments.length;s++)a[s]=arguments[s];try{return Promise.resolve(i.apply(this,a))}catch(d){return Promise.reject(d)}}),r.sn=l,r.nn=c,navigator.serviceWorker.addEventListener("message",r.gn),r}e=t,(n=o).prototype=Object.create(e.prototype),n.prototype.constructor=n,n.__proto__=e;var u,v,f=o.prototype;return f.register=function(l){var c=(l===void 0?{}:l).immediate,r=c!==void 0&&c;try{var i=this;return function(a,s){var d=a();return d&&d.then?d.then(s):s(d)}(function(){if(!r&&document.readyState!=="complete")return M(new Promise(function(a){return window.addEventListener("load",a)}))},function(){return i.mn=Boolean(navigator.serviceWorker.controller),i.yn=i.pn(),$(i.bn(),function(a){i.fn=a,i.yn&&(i.hn=i.yn,i.en.resolve(i.yn),i.on.resolve(i.yn),i.yn.addEventListener("statechange",i.ln,{once:!0}));var s=i.fn.waiting;return s&&L(s.scriptURL,i.sn.toString())&&(i.hn=s,Promise.resolve().then(function(){i.dispatchEvent(new g("waiting",{sw:s,wasWaitingBeforeRegister:!0}))}).then(function(){})),i.hn&&(i.rn.resolve(i.hn),i.an.add(i.hn)),i.fn.addEventListener("updatefound",i.cn),navigator.serviceWorker.addEventListener("controllerchange",i.dn),i.fn})})}catch(a){return Promise.reject(a)}},f.update=function(){try{return this.fn?M(this.fn.update()):void 0}catch(l){return Promise.reject(l)}},f.getSW=function(){return this.hn!==void 0?Promise.resolve(this.hn):this.rn.promise},f.messageSW=function(l){try{return $(this.getSW(),function(c){return T(c,l)})}catch(c){return Promise.reject(c)}},f.messageSkipWaiting=function(){this.fn&&this.fn.waiting&&T(this.fn.waiting,rt)},f.pn=function(){var l=navigator.serviceWorker.controller;return l&&L(l.scriptURL,this.sn.toString())?l:void 0},f.bn=function(){try{var l=this;return function(c,r){try{var i=c()}catch(a){return r(a)}return i&&i.then?i.then(void 0,r):i}(function(){return $(navigator.serviceWorker.register(l.sn,l.nn),function(c){return l.un=performance.now(),c})},function(c){throw c})}catch(c){return Promise.reject(c)}},u=o,(v=[{key:"active",get:function(){return this.en.promise}},{key:"controlling",get:function(){return this.on.promise}}])&&tt(u.prototype,v),o}(function(){function t(){this.Pn=new Map}var n=t.prototype;return n.addEventListener=function(e,o){this.Sn(e).add(o)},n.removeEventListener=function(e,o){this.Sn(e).delete(o)},n.dispatchEvent=function(e){e.target=this;for(var o,u=nt(this.Sn(e.type));!(o=u()).done;)(0,o.value)(e)},n.Sn=function(e){return this.Pn.has(e)||this.Pn.set(e,new Set),this.Pn.get(e)},t}());export{Et as A,T as B,$t as S,ut as a,dt as b,vt as c,at as d,ct as e,it as f,ht as g,D as h,bt as i,G as j,wt as k,lt as l,X as m,B as n,V as o,yt as p,Y as q,pt as r,ot as s,q as t,ft as u,gt as v,mt as w,st as x,R as y,_t as z};