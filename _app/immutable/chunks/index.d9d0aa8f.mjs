function A(){}const ht=t=>t;function mt(t,e){for(const n in e)t[n]=e[n];return t}function Z(t){return t()}function U(){return Object.create(null)}function M(t){t.forEach(Z)}function J(t){return typeof t=="function"}function It(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let T;function Wt(t,e){return T||(T=document.createElement("a")),T.href=e,t===T.href}function pt(t){return Object.keys(t).length===0}function yt(t,...e){if(t==null)return A;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Gt(t,e,n){t.$$.on_destroy.push(yt(e,n))}function Jt(t,e,n,i){if(t){const s=tt(t,e,n,i);return t[0](s)}}function tt(t,e,n,i){return t[1]&&i?mt(n.ctx.slice(),t[1](i(e))):n.ctx}function Kt(t,e,n,i){if(t[2]&&i){const s=t[2](i(n));if(e.dirty===void 0)return s;if(typeof s=="object"){const l=[],r=Math.max(e.dirty.length,s.length);for(let o=0;o<r;o+=1)l[o]=e.dirty[o]|s[o];return l}return e.dirty|s}return e.dirty}function Qt(t,e,n,i,s,l){if(s){const r=tt(e,n,i,l);t.p(r,s)}}function Ut(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function Vt(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function Xt(t){return t??""}const et=typeof window<"u";let gt=et?()=>window.performance.now():()=>Date.now(),K=et?t=>requestAnimationFrame(t):A;const S=new Set;function nt(t){S.forEach(e=>{e.c(t)||(S.delete(e),e.f())}),S.size!==0&&K(nt)}function wt(t){let e;return S.size===0&&K(nt),{promise:new Promise(n=>{S.add(e={c:t,f:n})}),abort(){S.delete(e)}}}let F=!1;function $t(){F=!0}function xt(){F=!1}function bt(t,e,n,i){for(;t<e;){const s=t+(e-t>>1);n(s)<=i?t=s+1:e=s}return t}function vt(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const c=[];for(let u=0;u<e.length;u++){const f=e[u];f.claim_order!==void 0&&c.push(f)}e=c}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let s=0;for(let c=0;c<e.length;c++){const u=e[c].claim_order,f=(s>0&&e[n[s]].claim_order<=u?s+1:bt(1,s,h=>e[n[h]].claim_order,u))-1;i[c]=n[f]+1;const _=f+1;n[_]=c,s=Math.max(_,s)}const l=[],r=[];let o=e.length-1;for(let c=n[s]+1;c!=0;c=i[c-1]){for(l.push(e[c-1]);o>=c;o--)r.push(e[o]);o--}for(;o>=0;o--)r.push(e[o]);l.reverse(),r.sort((c,u)=>c.claim_order-u.claim_order);for(let c=0,u=0;c<r.length;c++){for(;u<l.length&&r[c].claim_order>=l[u].claim_order;)u++;const f=u<l.length?l[u]:null;t.insertBefore(r[c],f)}}function kt(t,e){t.appendChild(e)}function it(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function Et(t){const e=st("style");return Nt(it(t),e),e.sheet}function Nt(t,e){return kt(t.head||t,e),e.sheet}function St(t,e){if(F){for(vt(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Yt(t,e,n){F&&!n?St(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function rt(t){t.parentNode&&t.parentNode.removeChild(t)}function Zt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function st(t){return document.createElement(t)}function At(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function Q(t){return document.createTextNode(t)}function te(){return Q(" ")}function ee(){return Q("")}function ne(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function ie(t){return function(e){return e.preventDefault(),t.call(this,e)}}function re(t){return function(e){e.target===this&&t.call(this,e)}}function ot(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function se(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const i in e)e[i]==null?t.removeAttribute(i):i==="style"?t.style.cssText=e[i]:i==="__value"?t.value=t[i]=e[i]:n[i]&&n[i].set?t[i]=e[i]:ot(t,i,e[i])}function oe(t,e){for(const n in e)ot(t,n,e[n])}function Mt(t){return Array.from(t.childNodes)}function jt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function ct(t,e,n,i,s=!1){jt(t);const l=(()=>{for(let r=t.claim_info.last_index;r<t.length;r++){const o=t[r];if(e(o)){const c=n(o);return c===void 0?t.splice(r,1):t[r]=c,s||(t.claim_info.last_index=r),o}}for(let r=t.claim_info.last_index-1;r>=0;r--){const o=t[r];if(e(o)){const c=n(o);return c===void 0?t.splice(r,1):t[r]=c,s?c===void 0&&t.claim_info.last_index--:t.claim_info.last_index=r,o}}return i()})();return l.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,l}function lt(t,e,n,i){return ct(t,s=>s.nodeName===e,s=>{const l=[];for(let r=0;r<s.attributes.length;r++){const o=s.attributes[r];n[o.name]||l.push(o.name)}l.forEach(r=>s.removeAttribute(r))},()=>i(e))}function ce(t,e,n){return lt(t,e,n,st)}function le(t,e,n){return lt(t,e,n,At)}function Ct(t,e){return ct(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>Q(e),!0)}function ue(t){return Ct(t," ")}function ae(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function fe(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function _e(t,e,n){t.classList[n?"add":"remove"](e)}function ut(t,e,{bubbles:n=!1,cancelable:i=!1}={}){const s=document.createEvent("CustomEvent");return s.initCustomEvent(t,n,i,e),s}function de(t,e){return new t(e)}const R=new Map;let z=0;function Dt(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function Ot(t,e){const n={stylesheet:Et(e),rules:{}};return R.set(t,n),n}function V(t,e,n,i,s,l,r,o=0){const c=16.666/i;let u=`{
`;for(let y=0;y<=1;y+=c){const g=e+(n-e)*l(y);u+=y*100+`%{${r(g,1-g)}}
`}const f=u+`100% {${r(n,1-n)}}
}`,_=`__svelte_${Dt(f)}_${o}`,h=it(t),{stylesheet:a,rules:d}=R.get(h)||Ot(h,t);d[_]||(d[_]=!0,a.insertRule(`@keyframes ${_} ${f}`,a.cssRules.length));const p=t.style.animation||"";return t.style.animation=`${p?`${p}, `:""}${_} ${i}ms linear ${s}ms 1 both`,z+=1,_}function Pt(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?l=>l.indexOf(e)<0:l=>l.indexOf("__svelte")===-1),s=n.length-i.length;s&&(t.style.animation=i.join(", "),z-=s,z||Tt())}function Tt(){K(()=>{z||(R.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&rt(e)}),R.clear())})}let O;function D(t){O=t}function H(){if(!O)throw new Error("Function called outside component initialization");return O}function he(t){H().$$.on_mount.push(t)}function me(t){H().$$.after_update.push(t)}function pe(t){H().$$.on_destroy.push(t)}function ye(){const t=H();return(e,n,{cancelable:i=!1}={})=>{const s=t.$$.callbacks[e];if(s){const l=ut(e,n,{cancelable:i});return s.slice().forEach(r=>{r.call(t,l)}),!l.defaultPrevented}return!0}}const N=[],X=[],q=[],Y=[],at=Promise.resolve();let G=!1;function ft(){G||(G=!0,at.then(_t))}function ge(){return ft(),at}function B(t){q.push(t)}const I=new Set;let E=0;function _t(){if(E!==0)return;const t=O;do{try{for(;E<N.length;){const e=N[E];E++,D(e),qt(e.$$)}}catch(e){throw N.length=0,E=0,e}for(D(null),N.length=0,E=0;X.length;)X.pop()();for(let e=0;e<q.length;e+=1){const n=q[e];I.has(n)||(I.add(n),n())}q.length=0}while(N.length);for(;Y.length;)Y.pop()();G=!1,I.clear(),D(t)}function qt(t){if(t.fragment!==null){t.update(),M(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(B)}}let C;function Lt(){return C||(C=Promise.resolve(),C.then(()=>{C=null})),C}function W(t,e,n){t.dispatchEvent(ut(`${e?"intro":"outro"}${n}`))}const L=new Set;let x;function we(){x={r:0,c:[],p:x}}function $e(){x.r||M(x.c),x=x.p}function dt(t,e){t&&t.i&&(L.delete(t),t.i(e))}function Rt(t,e,n,i){if(t&&t.o){if(L.has(t))return;L.add(t),x.c.push(()=>{L.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}const zt={duration:0};function xe(t,e,n,i){const s={direction:"both"};let l=e(t,n,s),r=i?0:1,o=null,c=null,u=null;function f(){u&&Pt(t,u)}function _(a,d){const p=a.b-r;return d*=Math.abs(p),{a:r,b:a.b,d:p,duration:d,start:a.start,end:a.start+d,group:a.group}}function h(a){const{delay:d=0,duration:p=300,easing:y=ht,tick:g=A,css:b}=l||zt,k={start:gt()+d,b:a};a||(k.group=x,x.r+=1),o||c?c=k:(b&&(f(),u=V(t,r,a,p,d,y,b)),a&&g(0,1),o=_(k,p),B(()=>W(t,a,"start")),wt(v=>{if(c&&v>c.start&&(o=_(c,p),c=null,W(t,o.b,"start"),b&&(f(),u=V(t,r,o.b,o.duration,0,y,l.css))),o){if(v>=o.end)g(r=o.b,1-r),W(t,o.b,"end"),c||(o.b?f():--o.group.r||M(o.group.c)),o=null;else if(v>=o.start){const j=v-o.start;r=o.a+o.d*y(j/o.duration),g(r,1-r)}}return!!(o||c)}))}return{run(a){J(l)?Lt().then(()=>{l=l(s),h(a)}):h(a)},end(){f(),o=c=null}}}const be=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;function ve(t,e){Rt(t,1,1,()=>{e.delete(t.key)})}function ke(t,e,n,i,s,l,r,o,c,u,f,_){let h=t.length,a=l.length,d=h;const p={};for(;d--;)p[t[d].key]=d;const y=[],g=new Map,b=new Map;for(d=a;d--;){const m=_(s,l,d),w=n(m);let $=r.get(w);$?i&&$.p(m,e):($=u(w,m),$.c()),g.set(w,y[d]=$),w in p&&b.set(w,Math.abs(d-p[w]))}const k=new Set,v=new Set;function j(m){dt(m,1),m.m(o,f),r.set(m.key,m),f=m.first,a--}for(;h&&a;){const m=y[a-1],w=t[h-1],$=m.key,P=w.key;m===w?(f=m.first,h--,a--):g.has(P)?!r.has($)||k.has($)?j(m):v.has(P)?h--:b.get($)>b.get(P)?(v.add($),j(m)):(k.add(P),h--):(c(w,r),h--)}for(;h--;){const m=t[h];g.has(m.key)||c(m,r)}for(;a;)j(y[a-1]);return y}function Ee(t,e){const n={},i={},s={$$scope:1};let l=t.length;for(;l--;){const r=t[l],o=e[l];if(o){for(const c in r)c in o||(i[c]=1);for(const c in o)s[c]||(n[c]=o[c],s[c]=1);t[l]=o}else for(const c in r)s[c]=1}for(const r in i)r in n||(n[r]=void 0);return n}function Ne(t){t&&t.c()}function Se(t,e){t&&t.l(e)}function Bt(t,e,n,i){const{fragment:s,after_update:l}=t.$$;s&&s.m(e,n),i||B(()=>{const r=t.$$.on_mount.map(Z).filter(J);t.$$.on_destroy?t.$$.on_destroy.push(...r):M(r),t.$$.on_mount=[]}),l.forEach(B)}function Ft(t,e){const n=t.$$;n.fragment!==null&&(M(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Ht(t,e){t.$$.dirty[0]===-1&&(N.push(t),ft(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Ae(t,e,n,i,s,l,r,o=[-1]){const c=O;D(t);const u=t.$$={fragment:null,ctx:[],props:l,update:A,not_equal:s,bound:U(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:U(),dirty:o,skip_bound:!1,root:e.target||c.$$.root};r&&r(u.root);let f=!1;if(u.ctx=n?n(t,e.props||{},(_,h,...a)=>{const d=a.length?a[0]:h;return u.ctx&&s(u.ctx[_],u.ctx[_]=d)&&(!u.skip_bound&&u.bound[_]&&u.bound[_](d),f&&Ht(t,_)),h}):[],u.update(),f=!0,M(u.before_update),u.fragment=i?i(u.ctx):!1,e.target){if(e.hydrate){$t();const _=Mt(e.target);u.fragment&&u.fragment.l(_),_.forEach(rt)}else u.fragment&&u.fragment.c();e.intro&&dt(t.$$.fragment),Bt(t,e.target,e.anchor,e.customElement),xt(),_t()}D(c)}class Me{$destroy(){Ft(this,1),this.$destroy=A}$on(e,n){if(!J(n))return A;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const s=i.indexOf(n);s!==-1&&i.splice(s,1)}}$set(e){this.$$set&&!pt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{Gt as $,Bt as A,Ft as B,A as C,pe as D,mt as E,Vt as F,se as G,Ee as H,At as I,le as J,oe as K,ye as L,St as M,ne as N,ie as O,J as P,B as Q,xe as R,Me as S,M as T,Xt as U,_e as V,re as W,Jt as X,Qt as Y,Ut as Z,Kt as _,te as a,Wt as a0,ke as a1,ve as a2,Zt as a3,be as a4,ht as a5,Yt as b,ue as c,Rt as d,ee as e,$e as f,dt as g,rt as h,Ae as i,me as j,st as k,ce as l,Mt as m,ot as n,he as o,fe as p,Q as q,Ct as r,It as s,ge as t,ae as u,we as v,X as w,de as x,Ne as y,Se as z};